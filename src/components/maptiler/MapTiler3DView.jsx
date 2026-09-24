import React, { useEffect, useRef, useState, useMemo } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import '@maptiler/sdk/dist/maptiler-sdk.css';
import {
  Compass,
  Mountain,
  MapPin,
  RotateCcw,
  Sparkles,
  Key,
  X,
  Bot,
  Search,
  AlertTriangle,
  ExternalLink,
  Navigation,
  FileText
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

// Default starter key; users can paste their own in the UI modal
const DEFAULT_MAPTILER_KEY = 'get_your_own_OpIi9ZULNHzrESv6T2vL';

const MAP_STYLES = [
  { id: 'hybrid', name: 'Satellite 3D', style: maptilersdk.MapStyle.HYBRID, icon: '🛰️' },
  { id: 'outdoor', name: 'Outdoor 3D', style: maptilersdk.MapStyle.OUTDOOR, icon: '🌲' },
  { id: 'topo', name: 'Topographic', style: maptilersdk.MapStyle.TOPO, icon: '🗺️' },
  { id: 'winter', name: 'Himalayan Snow', style: maptilersdk.MapStyle.WINTER, icon: '❄️' },
];

export default function MapTiler3DView({
  springs = [],
  selectedSpring,
  onSelectSpring,
  budget,
  onOpenAICopilot,
  onOpenReportModal,
  onSwitchToGlobe,
  onSwitchToGoogleMap,
}) {
  const { t } = useLanguage();
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const markersRef = useRef([]);

  // Stored MapTiler API Key
  const [apiKey, setApiKey] = useState(() => {
    return localStorage.getItem('maptiler_api_key') || import.meta.env.VITE_MAPTILER_API_KEY || DEFAULT_MAPTILER_KEY;
  });

  const [activeStyle, setActiveStyle] = useState('hybrid');
  const [terrainExaggeration, setTerrainExaggeration] = useState(1.6);
  const [isOrbiting, setIsOrbiting] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [isKeyModalOpen, setIsKeyModalOpen] = useState(false);
  const [keyInputValue, setKeyInputValue] = useState('');
  const [keyError, setKeyError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Orbit animation loop reference
  const orbitReqIdRef = useRef(null);

  // Filter springs
  const filteredSprings = useMemo(() => {
    return springs.filter((s) => {
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        !searchQuery ||
        s.name?.toLowerCase().includes(q) ||
        s.code?.toLowerCase().includes(q) ||
        s.village?.toLowerCase().includes(q);

      if (!matchesSearch) return false;

      if (statusFilter === 'all') return true;
      if (statusFilter === 'critical') return s.status === 'Critical' || s.discharge_lpm < 0.8;
      if (statusFilter === 'degraded') return s.status === 'Degraded';
      if (statusFilter === 'reviving') return s.status === 'Reviving';
      if (statusFilter === 'active') return s.status === 'Active' || s.status === 'Restored';
      return true;
    });
  }, [springs, searchQuery, statusFilter]);

  // Initialize MapTiler 3D Map
  useEffect(() => {
    if (!mapContainerRef.current) return;

    maptilersdk.config.apiKey = apiKey;

    try {
      const map = new maptilersdk.Map({
        container: mapContainerRef.current,
        style: MAP_STYLES.find((s) => s.id === activeStyle)?.style || maptilersdk.MapStyle.HYBRID,
        center: [88.2627, 27.041], // Darjeeling Hills Pilot
        zoom: 12.8,
        pitch: 62, // 3D relief perspective
        bearing: -15,
        maxPitch: 85,
        terrain: true,
        terrainExaggeration: terrainExaggeration,
        navigationControl: false, // Unified custom controls
        geolocateControl: false, // Replaced by co-located locator button
      });

      mapRef.current = map;

      map.on('load', () => {
        setIsLoaded(true);
        // Ensure 3D terrain is enabled with desired exaggeration
        try {
          map.setTerrain({ source: 'maptiler-terrain', exaggeration: terrainExaggeration });
        } catch (e) {
          console.warn('MapTiler terrain set error:', e);
        }
      });

      map.on('error', (e) => {
        if (e.error && (e.error.status === 401 || e.error.status === 403)) {
          setKeyError('Invalid or expired MapTiler API Key. Click the key button to configure.');
        }
      });

      return () => {
        if (orbitReqIdRef.current) cancelAnimationFrame(orbitReqIdRef.current);
        map.remove();
      };
    } catch (err) {
      console.error('Failed to create MapTiler 3D Map:', err);
      setKeyError(err.message);
    }
  }, [apiKey]);

  // Update terrain exaggeration when slider moves
  useEffect(() => {
    if (!mapRef.current || !isLoaded) return;
    try {
      mapRef.current.setTerrain({ source: 'maptiler-terrain', exaggeration: terrainExaggeration });
    } catch (e) {
      console.warn('Error adjusting terrain exaggeration:', e);
    }
  }, [terrainExaggeration, isLoaded]);

  // Change Map Style
  const handleStyleChange = (styleId) => {
    if (!mapRef.current) return;
    const target = MAP_STYLES.find((s) => s.id === styleId);
    if (!target) return;
    setActiveStyle(styleId);
    mapRef.current.setStyle(target.style);
    mapRef.current.once('style.load', () => {
      try {
        mapRef.current.setTerrain({ source: 'maptiler-terrain', exaggeration: terrainExaggeration });
      } catch (e) {
        console.warn('Error re-applying terrain on style change:', e);
      }
    });
  };

  // Plot 3D Clamped Markers for Springs
  useEffect(() => {
    if (!mapRef.current || !isLoaded) return;

    // Clear existing markers
    markersRef.current.forEach((m) => m.remove());
    markersRef.current = [];

    filteredSprings.forEach((spring) => {
      const lat = spring.latitude ?? spring.gisCoords?.lat;
      const lng = spring.longitude ?? spring.gisCoords?.lng;
      if (lat == null || lng == null) return;

      const isSelected = selectedSpring?.id === spring.id;
      const statusColor =
        spring.status === 'Critical'
          ? '#ef4444'
          : spring.status === 'Degraded'
          ? '#f97316'
          : spring.status === 'Reviving'
          ? '#38bdf8'
          : '#10b981';

      // Create Custom DOM Marker Element
      const el = document.createElement('div');
      el.className = `maptiler-spring-marker cursor-pointer transition-transform duration-200 ${
        isSelected ? 'scale-125 z-50' : 'hover:scale-110'
      }`;
      el.style.transformOrigin = 'bottom center';

      el.innerHTML = `
        <div style="
          background: ${isSelected ? '#ffffff' : 'rgba(15, 23, 42, 0.98)'};
          color: ${isSelected ? '#0f172a' : '#ffffff'};
          border: 2px solid ${statusColor};
          box-shadow: 0 0 ${isSelected ? '16px' : '8px'} ${statusColor}99;
          border-radius: 9999px;
          padding: 2px 7px;
          font-size: 10px;
          font-weight: 800;
          font-family: monospace;
          display: flex;
          align-items: center;
          gap: 3px;
        ">
          <span style="display:inline-block; width:6px; height:6px; border-radius:50%; background:${statusColor};"></span>
          <span>SP-${String(spring.slNo || '').padStart(3, '0')}</span>
        </div>
      `;

      el.addEventListener('click', (e) => {
        e.stopPropagation();
        if (onSelectSpring) onSelectSpring(spring);
        flyToSpring(spring);
      });

      const marker = new maptilersdk.Marker({ element: el })
        .setLngLat([lng, lat])
        .addTo(mapRef.current);

      markersRef.current.push(marker);
    });
  }, [filteredSprings, selectedSpring, isLoaded]);

  // Smooth 3D Flight Camera to Spring
  const flyToSpring = (spring) => {
    if (!mapRef.current) return;
    const lat = spring.latitude ?? spring.gisCoords?.lat;
    const lng = spring.longitude ?? spring.gisCoords?.lng;
    if (lat == null || lng == null) return;

    setIsOrbiting(false);
    mapRef.current.flyTo({
      center: [lng, lat],
      zoom: 14.6,
      pitch: 68,
      bearing: -25 + (Math.random() * 20 - 10),
      speed: 1.2,
      curve: 1.4,
      essential: true,
    });
  };

  // 360° Mountain Orbit Animation
  useEffect(() => {
    if (!isOrbiting || !mapRef.current) {
      if (orbitReqIdRef.current) cancelAnimationFrame(orbitReqIdRef.current);
      return;
    }

    const orbit = () => {
      if (!mapRef.current) return;
      const currentBearing = mapRef.current.getBearing();
      mapRef.current.setBearing(currentBearing + 0.15);
      orbitReqIdRef.current = requestAnimationFrame(orbit);
    };

    orbitReqIdRef.current = requestAnimationFrame(orbit);
    return () => {
      if (orbitReqIdRef.current) cancelAnimationFrame(orbitReqIdRef.current);
    };
  }, [isOrbiting]);

  // Quick Pitch Preset Angles
  const setPitchAngle = (pitch) => {
    if (!mapRef.current) return;
    mapRef.current.easeTo({ pitch, duration: 600 });
  };

  // Reset View to Overview
  const handleResetView = () => {
    if (!mapRef.current) return;
    setIsOrbiting(false);
    mapRef.current.flyTo({
      center: [88.2627, 27.041],
      zoom: 12.8,
      pitch: 62,
      bearing: -15,
      duration: 1200,
    });
  };

  // Locate Darjeeling Pilot Center (Issue 15 co-located control)
  const handleLocatePilot = () => {
    if (!mapRef.current) return;
    setIsOrbiting(false);
    mapRef.current.flyTo({
      center: [88.2627, 27.041],
      zoom: 13.5,
      pitch: 65,
      bearing: 0,
      duration: 1000,
    });
  };

  // Save Custom MapTiler Key
  const handleSaveKey = () => {
    const cleanKey = keyInputValue.trim();
    if (!cleanKey) return;
    localStorage.setItem('maptiler_api_key', cleanKey);
    setApiKey(cleanKey);
    setKeyError(null);
    setIsKeyModalOpen(false);
  };

  return (
    <div className="relative w-full h-full overflow-hidden select-none bg-[#030612]">
      {/* 1. MapTiler 3D WebGL Canvas Container */}
      <div ref={mapContainerRef} className="w-full h-full" />

      {/* 2. Top Telemetry, Terrain Styles & Search Bar */}
      <div className="absolute top-24 left-6 right-6 z-20 pointer-events-none flex flex-wrap items-center justify-between gap-3">
        {/* Left: Telemetry & Sub-Style Grouping (Issue 10) */}
        <div className="flex items-center gap-2.5 pointer-events-auto flex-wrap">
          {/* Main Status Card */}
          <div className="px-3.5 py-2 rounded-2xl border border-cyan-500/30 bg-slate-950/95 backdrop-blur-2xl shadow-glass-card flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">
              <Mountain className="w-4 h-4 text-cyan-300" />
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold text-slate-400">MapTiler 3D Terrain</div>
              <div className="text-xs font-black text-white font-mono flex items-center gap-1.5">
                <span>Darjeeling Hills Pilot</span>
                <span className="text-cyan-400 font-normal">({filteredSprings.length}/100 Springs)</span>
              </div>
            </div>
          </div>

          {/* Sub-Options for 3D Terrain Style (Issue 10 parent container) */}
          <div className="hidden lg:flex items-center gap-1 p-1 rounded-2xl bg-slate-950/95 border border-cyan-500/30 backdrop-blur-2xl shadow-glass-card">
            <span className="text-[10px] uppercase font-bold text-slate-400 pl-2 pr-1">Terrain Style:</span>
            {MAP_STYLES.map((st) => (
              <button
                key={st.id}
                onClick={() => handleStyleChange(st.id)}
                className={`btn-tab ${activeStyle === st.id ? 'btn-tab-active' : 'btn-tab-inactive'}`}
              >
                <span>{st.icon}</span>
                <span>{st.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right: Prominent Search Bar (Issue 14) & API Key Button */}
        <div className="flex items-center gap-2 pointer-events-auto flex-wrap">
          {/* Prominent Spring Search Box */}
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-cyan-400" />
            <input
              type="text"
              placeholder="Search spring name, code, village (e.g. Devithan)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 pr-8 py-2 rounded-xl bg-slate-950/98 border border-white/20 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 w-64 sm:w-80 md:w-96 shadow-lg backdrop-blur-2xl"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* MapTiler API Key Button */}
          <button
            onClick={() => {
              setKeyInputValue(apiKey === DEFAULT_MAPTILER_KEY ? '' : apiKey);
              setIsKeyModalOpen(true);
            }}
            className={`btn-secondary ${
              keyError ? 'border-red-400 bg-red-950/80 text-white animate-pulse' : ''
            }`}
            title="Configure MapTiler Cloud API Key"
          >
            <Key className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">MapTiler Key</span>
          </button>
        </div>
      </div>

      {/* 3. Key Error Banner (If Invalid Key) */}
      {keyError && (
        <div className="absolute top-40 left-6 right-6 z-20 pointer-events-auto">
          <div className="max-w-xl mx-auto p-3.5 rounded-2xl bg-red-950/95 border border-red-500/50 backdrop-blur-2xl text-white shadow-2xl flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <AlertTriangle className="w-5 h-5 text-red-400 shrink-0" />
              <div className="text-xs">
                <span className="font-bold text-red-300">MapTiler Notice: </span>
                <span className="text-slate-200">{keyError}</span>
              </div>
            </div>
            <button
              onClick={() => setIsKeyModalOpen(true)}
              className="btn-primary"
            >
              Enter Free Key
            </button>
          </div>
        </div>
      )}

      {/* 4. Left 3D Camera Controls & Co-located Locator (Issue 15) */}
      <div className="absolute bottom-28 left-6 z-20 pointer-events-auto flex flex-col gap-2 p-2.5 rounded-2xl bg-slate-950/98 border border-white/20 backdrop-blur-3xl shadow-glass-card text-white">
        <div className="text-[10px] uppercase font-bold text-slate-400 px-1 pt-0.5">3D Camera Tools</div>

        {/* Pitch Angles */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => setPitchAngle(0)}
            className="btn-tab btn-tab-inactive px-2 py-1 text-[11px]"
            title="Top-Down 2D View"
          >
            Top (0°)
          </button>
          <button
            onClick={() => setPitchAngle(45)}
            className="btn-tab btn-tab-inactive px-2 py-1 text-[11px]"
            title="Slanted 3D View"
          >
            45°
          </button>
          <button
            onClick={() => setPitchAngle(75)}
            className="btn-tab btn-tab-active px-2 py-1 text-[11px]"
            title="Dramatic Mountain Horizon View"
          >
            75°
          </button>
        </div>

        {/* Co-located Geolocation / Pilot Locator Button (Issue 15) */}
        <button
          onClick={handleLocatePilot}
          className="btn-secondary w-full py-1.5 text-[11px]"
          title="Center 3D camera on Darjeeling pilot coordinates"
        >
          <Navigation className="w-3.5 h-3.5 text-cyan-400" />
          <span>Locate Pilot Center</span>
        </button>

        {/* Auto Orbit */}
        <button
          onClick={() => setIsOrbiting((prev) => !prev)}
          className={`btn-tab w-full justify-between py-1.5 text-[11px] ${
            isOrbiting ? 'btn-tab-active' : 'btn-tab-inactive'
          }`}
        >
          <span className="flex items-center gap-1.5">
            <Compass className={`w-3.5 h-3.5 ${isOrbiting ? 'animate-spin-slow' : 'text-cyan-400'}`} />
            <span>360° Orbit</span>
          </span>
          <span className="font-mono text-[10px]">{isOrbiting ? 'ON' : 'OFF'}</span>
        </button>

        {/* Reset View */}
        <button
          onClick={handleResetView}
          className="btn-secondary w-full py-1.5 text-[11px]"
        >
          <RotateCcw className="w-3.5 h-3.5 text-cyan-400" />
          <span>Reset Camera</span>
        </button>

        {/* Terrain Relief Exaggeration Slider */}
        <div className="pt-2 border-t border-white/10 px-1">
          <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1">
            <span>Terrain Relief:</span>
            <span className="font-mono text-cyan-300 font-bold">{terrainExaggeration.toFixed(1)}x</span>
          </div>
          <input
            type="range"
            min="1.0"
            max="2.5"
            step="0.1"
            value={terrainExaggeration}
            onChange={(e) => setTerrainExaggeration(parseFloat(e.target.value))}
            className="w-full accent-cyan-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
            aria-label="Terrain Relief Exaggeration"
          />
        </div>
      </div>

      {/* 5. Right Spring Details Drawer (Issue 4: H2 heading; Issue 7: High-opacity cards; Issue 16: Balanced buttons) */}
      {selectedSpring && (
        <aside
          aria-label="Selected Spring Hydrogeological Details"
          onWheel={(e) => e.stopPropagation()}
          className="absolute top-44 bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] z-30 rounded-3xl border border-white/20 bg-slate-950/98 p-5 shadow-2xl backdrop-blur-3xl text-white pointer-events-auto flex flex-col justify-between overflow-y-auto custom-scrollbar animate-slide-left"
        >
          <div>
            {/* Header with proper H2 level (Issue 4) */}
            <div className="flex items-start justify-between gap-3 border-b border-white/10 pb-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-400/40">
                    SP-{String(selectedSpring.slNo || '').padStart(3, '0')}
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs font-bold border ${
                      selectedSpring.status === 'Critical'
                        ? 'bg-red-500/20 text-red-300 border-red-500/40'
                        : selectedSpring.status === 'Degraded'
                        ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                        : selectedSpring.status === 'Reviving'
                        ? 'bg-blue-500/20 text-blue-300 border-blue-500/40'
                        : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                    }`}
                  >
                    {selectedSpring.status || 'Active'}
                  </span>
                </div>
                {/* H2 Heading fixes Issue 4 skipped heading level */}
                <h2 className="text-lg font-black tracking-tight text-white leading-tight">
                  {selectedSpring.name}
                </h2>
                <div className="text-xs text-slate-400 flex items-center gap-1 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{selectedSpring.village || 'Darjeeling Hills'}, West Bengal</span>
                </div>
              </div>
              <button
                onClick={() => onSelectSpring(null)}
                className="btn-icon p-1.5"
                aria-label="Close spring details"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Core Metrics Grid (Issue 7 solid opaque background preventing map label bleed) */}
            <div className="grid grid-cols-2 gap-2.5 my-3.5">
              <div className="p-3 rounded-2xl bg-slate-900/98 border border-white/10 shadow-sm">
                <div className="text-[10px] uppercase font-bold text-slate-400">DEM Altitude</div>
                <div className="text-sm font-mono font-extrabold text-white mt-0.5">
                  {Math.round(selectedSpring.elevation_m || 2100)} m
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-slate-900/98 border border-white/10 shadow-sm">
                <div className="text-[10px] uppercase font-bold text-slate-400">Pre-Monsoon Discharge</div>
                <div className="text-sm font-mono font-extrabold text-cyan-300 mt-0.5">
                  {selectedSpring.discharge_lpm?.toFixed(2) || '1.20'} LPM
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-slate-900/98 border border-white/10 shadow-sm">
                <div className="text-[10px] uppercase font-bold text-slate-400">Catchment Slope</div>
                <div className="text-sm font-mono font-extrabold text-amber-300 mt-0.5">
                  {selectedSpring.slope_deg?.toFixed(1) || '24.5'}°
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-slate-900/98 border border-white/10 shadow-sm">
                <div className="text-[10px] uppercase font-bold text-slate-400">Beneficiaries</div>
                <div className="text-sm font-mono font-extrabold text-emerald-300 mt-0.5">
                  {selectedSpring.beneficiary_households || 45} Families
                </div>
              </div>
            </div>

            {/* Geology & Hydrogeology */}
            <div className="p-3 rounded-2xl bg-slate-900/98 border border-white/10 mb-3 space-y-1 shadow-sm">
              <div className="text-[10px] uppercase font-bold text-slate-400">Lithology / Aquifer Rock</div>
              <div className="text-xs font-semibold text-white">
                {selectedSpring.geology || 'Daling Schist / Phyllite'}
              </div>
              <div className="text-[10px] text-slate-400">
                Zone: <span className="font-mono text-cyan-300">{selectedSpring.zone || 'PRIMARY_ZONE'}</span>
              </div>
            </div>

            {/* Recommended Interventions */}
            <div className="p-3 rounded-2xl bg-slate-900/98 border border-cyan-500/30 mb-3 shadow-sm">
              <div className="text-xs font-bold text-cyan-300 mb-1">
                Recommended Intervention:
              </div>
              <div className="text-xs text-slate-200">
                {selectedSpring.interventions?.[0]?.type || 'Contour Trenches & Recharge Pits'}
              </div>
              <div className="text-[10px] text-slate-400 mt-1">
                Estimated Budget: <span className="font-mono text-emerald-300">₹{((selectedSpring.minBudgetRequired || 150000) / 100000).toFixed(2)} Lakhs</span>
              </div>
            </div>
          </div>

          {/* Action Footer (Issue 16 & 1: Balanced visual weight and cohesive button system) */}
          <div className="space-y-2 pt-3 border-t border-white/10">
            {/* Primary Action 1: Ask AI Copilot (Balanced with cohesive cyan/emerald palette) */}
            <button
              onClick={() => onOpenAICopilot && onOpenAICopilot(selectedSpring)}
              className="btn-primary w-full py-2.5 text-xs"
            >
              <Bot className="w-4 h-4" />
              <span>Ask AI Copilot about SP-{String(selectedSpring.slNo || '').padStart(3, '0')}</span>
            </button>

            {/* Primary Action 2: Center 3D Camera (Balanced with prominent cyan border & text) */}
            <button
              onClick={() => flyToSpring(selectedSpring)}
              className="btn-secondary w-full py-2.5 text-xs border-cyan-400/50 text-cyan-300 hover:bg-cyan-500/10 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Center 3D Camera on Spring</span>
            </button>

            {/* Primary Action 3: Report Spring Field Observation */}
            <button
              onClick={() => onOpenReportModal && onOpenReportModal(selectedSpring)}
              className="btn-secondary w-full py-2.5 text-xs border-amber-400/40 text-amber-300 hover:bg-amber-500/10 flex items-center justify-center gap-2"
              title="Report current discharge, water clarity or ground observations"
            >
              <FileText className="w-4 h-4 text-amber-400" />
              <span>Report Dhara Water Condition</span>
            </button>
          </div>
        </aside>
      )}

      {/* 6. Bottom Status Filter Bar (Issues 8 & 9: Redundant right toggles removed) */}
      <div className="absolute bottom-6 left-6 right-6 z-20 pointer-events-none flex items-center justify-start">
        {/* Status Filter Chips using unified .btn-tab */}
        <div className="pointer-events-auto flex items-center gap-1.5 p-1 rounded-2xl bg-slate-950/95 border border-white/15 backdrop-blur-2xl overflow-x-auto max-w-full shadow-glass-card">
          {[
            { id: 'all', label: 'All Springs (100)' },
            { id: 'critical', label: '🔴 Critical' },
            { id: 'degraded', label: '🟠 Degraded' },
            { id: 'reviving', label: '🔵 Reviving' },
            { id: 'active', label: '🟢 Active' },
          ].map((chip) => (
            <button
              key={chip.id}
              onClick={() => setStatusFilter(chip.id)}
              className={`btn-tab ${statusFilter === chip.id ? 'btn-tab-active' : 'btn-tab-inactive'}`}
            >
              {chip.label}
            </button>
          ))}
        </div>
      </div>

      {/* 7. MapTiler Key Configuration Modal */}
      {isKeyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="max-w-md w-full p-6 rounded-3xl border border-white/20 bg-slate-900 shadow-2xl text-white space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Key className="w-5 h-5 text-amber-400" />
                <h3 className="text-base font-black">Configure MapTiler Cloud Key</h3>
              </div>
              <button
                onClick={() => setIsKeyModalOpen(false)}
                className="btn-icon p-1"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              MapTiler powers high-resolution 3D digital elevation models and satellite terrain for the Darjeeling Hills pilot. Enter your free MapTiler Cloud API key below:
            </p>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-400 uppercase">MapTiler API Key</label>
              <input
                type="text"
                value={keyInputValue}
                onChange={(e) => setKeyInputValue(e.target.value)}
                placeholder="Paste key from cloud.maptiler.com..."
                className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-white/20 text-xs text-white font-mono focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div className="text-xs text-cyan-300 flex items-center justify-between">
              <a
                href="https://cloud.maptiler.com/account/keys/"
                target="_blank"
                rel="noreferrer"
                className="hover:underline flex items-center gap-1"
              >
                <span>Get a Free Key (100k requests/mo)</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <button
                onClick={() => setKeyInputValue(DEFAULT_MAPTILER_KEY)}
                className="text-xs text-slate-400 hover:text-white underline cursor-pointer"
              >
                Use Starter Demo Key
              </button>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                onClick={() => setIsKeyModalOpen(false)}
                className="btn-secondary"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveKey}
                className="btn-primary"
              >
                Save & Reload 3D
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

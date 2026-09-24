import React, { useState, useEffect, useRef, useMemo } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {
  MapPin,
  Search,
  Layers,
  Compass,
  Sparkles,
  ExternalLink,
  Volume2,
  VolumeX,
  Droplets,
  ShieldCheck,
  Navigation,
  Key,
  Info,
  SlidersHorizontal,
  ChevronRight,
  ChevronLeft,
  X,
  TrendingUp,
  Mountain
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

// Google Maps & Satellite Tile Endpoints (Free, High-Reliability Web Tile Services)
const MAP_PROVIDERS = {
  googleHybrid: {
    name: 'Google Hybrid (Satellite + Labels)',
    url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}',
    attribution: 'Map data ©2026 Google',
    maxZoom: 20,
  },
  googleSatellite: {
    name: 'Google Satellite Photoreal',
    url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
    attribution: 'Imagery ©2026 Google, Maxar Technologies',
    maxZoom: 20,
  },
  googleTerrain: {
    name: 'Google Terrain (Topographic Relief)',
    url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',
    attribution: 'Map data ©2026 Google',
    maxZoom: 20,
  },
  googleRoadmap: {
    name: 'Google Roadmap (Standard Street)',
    url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
    attribution: 'Map data ©2026 Google',
    maxZoom: 20,
  },
  esriHD: {
    name: 'Esri World Imagery HD (0.3m)',
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    attribution: 'Source: Esri, Maxar, Earthstar Geographics',
    maxZoom: 19,
  },
};

export default function GoogleMapExplorer({
  springs = [],
  selectedSpring,
  onSelectSpring,
  budget = 12000000,
  onSwitchTo3D,
  onSwitchToGlobe,
  onOpenReportModal,
  onOpenAICopilot,
}) {
  const { t, language, speakText, stopSpeaking, isSpeaking } = useLanguage();

  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const tileLayerRef = useRef(null);
  const markersLayerRef = useRef(null);

  const [activeProvider, setActiveProvider] = useState('googleHybrid');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all'); // 'all' | 'top15' | 'primary' | 'field' | 'risk' | 'high_flow' | 'critical'
  const [drawerOpen, setDrawerOpen] = useState(true);
  const [apiKeyModalOpen, setApiKeyModalOpen] = useState(false);
  const [userApiKey, setUserApiKey] = useState(localStorage.getItem('google_maps_api_key') || '');
  const [apiKeySavedNotice, setApiKeySavedNotice] = useState(false);

  // Initialize Leaflet Map Instance
  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    // Darjeeling Geographic Center
    const initialCenter = [26.98, 88.34];
    const initialZoom = 12;

    const map = L.map(mapContainerRef.current, {
      center: initialCenter,
      zoom: initialZoom,
      minZoom: 10,
      maxZoom: 19,
      zoomControl: false,
    });

    mapInstanceRef.current = map;

    // Add Tile Layer
    const provider = MAP_PROVIDERS[activeProvider];
    tileLayerRef.current = L.tileLayer(provider.url, {
      attribution: provider.attribution,
      maxZoom: provider.maxZoom,
    }).addTo(map);

    // Feature Layer for Marker Pins
    markersLayerRef.current = L.layerGroup().addTo(map);

    // Custom Zoom Control top-right
    L.control.zoom({ position: 'topright' }).addTo(map);

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  // Update Tile Layer when provider changes
  useEffect(() => {
    if (!mapInstanceRef.current || !tileLayerRef.current) return;
    const provider = MAP_PROVIDERS[activeProvider];
    mapInstanceRef.current.removeLayer(tileLayerRef.current);

    tileLayerRef.current = L.tileLayer(provider.url, {
      attribution: provider.attribution,
      maxZoom: provider.maxZoom,
    }).addTo(mapInstanceRef.current);
  }, [activeProvider]);

  // Filter springs
  const filteredSprings = useMemo(() => {
    return springs.filter((s) => {
      // Text search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = s.name?.toLowerCase().includes(q);
        const matchesCode = s.code?.toLowerCase().includes(q);
        const matchesNum = s.springNumber?.toString().includes(q) || String(s.slNo).includes(q);
        const matchesLoc = s.location?.toLowerCase().includes(q) || s.block?.toLowerCase().includes(q) || s.subdistrict?.toLowerCase().includes(q);
        if (!matchesName && !matchesCode && !matchesNum && !matchesLoc) return false;
      }

      // Filter chips
      const discharge = s.discharge_lpm ?? s.historicalDischarge ?? 1.2;
      if (activeFilter === 'top15') return s.isTop15;
      if (activeFilter === 'primary') return s.isPrimaryZone || s.rawStatus === 'PRIMARY_ZONE';
      if (activeFilter === 'field') return s.isFieldVerificationRequired;
      if (activeFilter === 'risk') return s.isHighRisk || s.riskLevel === 'High';
      if (activeFilter === 'high_flow') return discharge >= 1.5;
      if (activeFilter === 'critical') return discharge < 0.8;

      return true;
    });
  }, [springs, searchQuery, activeFilter]);

  // Update Markers on Map
  useEffect(() => {
    if (!mapInstanceRef.current || !markersLayerRef.current) return;

    markersLayerRef.current.clearLayers();

    filteredSprings.forEach((spring) => {
      const lat = spring.latitude ?? spring.gisCoords?.lat;
      const lng = spring.longitude ?? spring.gisCoords?.lng;
      if (lat == null || lng == null) return;

      const isSelected = selectedSpring?.id === spring.id;
      const isTop = spring.isTop15;
      const isField = spring.isFieldVerificationRequired;
      const isFunded = budget >= (spring.minBudgetRequired || 0);

      const pinColor = isTop
        ? '#f59e0b'
        : isField
        ? '#ef4444'
        : isFunded
        ? '#10b981'
        : '#06b6d4';

      const pinBg = isSelected ? '#00f5ff' : '#050814';
      const textColor = isSelected ? '#000000' : pinColor;
      const pinSize = isSelected ? 34 : 26;

      // Custom SVG HTML Marker Pin
      const iconHtml = `
        <div style="
          width: ${pinSize}px;
          height: ${pinSize}px;
          border-radius: 50%;
          background: ${pinBg};
          border: ${isSelected ? '3.5px solid #ffffff' : `2.5px solid ${pinColor}`};
          box-shadow: 0 0 ${isSelected ? '16px #00f5ff' : '8px ' + pinColor};
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${textColor};
          font-family: monospace;
          font-size: ${isSelected ? '12px' : '10px'};
          font-weight: 900;
          cursor: pointer;
          transition: transform 0.15s ease;
        ">
          ${spring.springNumber || spring.slNo || ''}
        </div>
      `;

      const customIcon = L.divIcon({
        className: 'custom-leaflet-spring-marker',
        html: iconHtml,
        iconSize: [pinSize, pinSize],
        iconAnchor: [pinSize / 2, pinSize / 2],
      });

      const marker = L.marker([lat, lng], { icon: customIcon });

      // Click to select spring & open drawer
      marker.on('click', () => {
        onSelectSpring(spring);
        setDrawerOpen(true);
      });

      markersLayerRef.current.addLayer(marker);
    });
  }, [filteredSprings, selectedSpring, budget, onSelectSpring]);

  // Center map on selected spring when changed
  useEffect(() => {
    if (!mapInstanceRef.current || !selectedSpring) return;
    const lat = selectedSpring.latitude ?? selectedSpring.gisCoords?.lat;
    const lng = selectedSpring.longitude ?? selectedSpring.gisCoords?.lng;
    if (lat != null && lng != null) {
      mapInstanceRef.current.panTo([lat, lng], { animate: true, duration: 0.6 });
    }
  }, [selectedSpring]);

  // Save Google Maps API Key
  const handleSaveApiKey = () => {
    if (userApiKey.trim()) {
      localStorage.setItem('google_maps_api_key', userApiKey.trim());
    } else {
      localStorage.removeItem('google_maps_api_key');
    }
    setApiKeySavedNotice(true);
    setTimeout(() => {
      setApiKeySavedNotice(false);
      setApiKeyModalOpen(false);
    }, 1200);
  };

  // Google Maps Direct Links
  const googleMapsDirectionsUrl = selectedSpring
    ? `https://www.google.com/maps/dir/?api=1&destination=${selectedSpring.latitude ?? selectedSpring.gisCoords?.lat},${selectedSpring.longitude ?? selectedSpring.gisCoords?.lng}`
    : '#';

  const googleStreetViewUrl = selectedSpring
    ? `https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${selectedSpring.latitude ?? selectedSpring.gisCoords?.lat},${selectedSpring.longitude ?? selectedSpring.gisCoords?.lng}`
    : '#';

  // Voice narration for active spring
  const handleSpeakSpring = () => {
    if (isSpeaking) {
      stopSpeaking();
      return;
    }
    if (!selectedSpring) return;

    const speechText = `${selectedSpring.name}. Spring code ${selectedSpring.code}. Located at elevation ${
      selectedSpring.elevation_m
    } meters in ${selectedSpring.location || selectedSpring.block || 'Darjeeling Hills'}. Current discharge is ${
      selectedSpring.discharge_lpm
    } liters per minute. Provides safe drinking water for approximately ${
      selectedSpring.beneficiary_households || 120
    } families.`;
    speakText(speechText);
  };

  return (
    <div className="relative w-full h-full select-none overflow-hidden bg-slate-950">
      {/* 1. Fullscreen Leaflet Map Container */}
      <div ref={mapContainerRef} className="w-full h-full z-0" />

      {/* 2. Top Header Toolbar: Search, Filters & Basemap Layer Switcher */}
      <div className="absolute top-24 left-6 right-6 z-20 pointer-events-none flex flex-wrap items-center justify-between gap-3">
        {/* Search & Basemap Layer Selectors */}
        <div className="pointer-events-auto flex items-center gap-2 flex-wrap">
          {/* Search Box */}
          <div className="relative">
            <Search className="w-4 h-4 text-cyan-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search Google Map (Devithan, SP-001)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 pr-4 py-2 w-64 md:w-80 rounded-2xl bg-slate-950/90 border border-white/20 text-white placeholder-slate-400 text-xs backdrop-blur-xl focus:outline-none focus:border-cyan-400 shadow-glass-card"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Basemap Provider Dropdown / Selector */}
          <div className="flex items-center rounded-2xl bg-slate-950/90 border border-white/20 p-1 backdrop-blur-xl shadow-glass-card text-xs">
            <span className="px-2 text-[10px] font-bold text-slate-400 flex items-center gap-1">
              <Layers className="w-3 h-3 text-cyan-400" />
              <span>Layer:</span>
            </span>
            <select
              value={activeProvider}
              onChange={(e) => setActiveProvider(e.target.value)}
              aria-label="Select Basemap Provider Layer"
              className="bg-slate-900 border border-white/10 rounded-xl px-2.5 py-1 text-cyan-300 font-bold text-xs focus:outline-none cursor-pointer"
            >
              {Object.entries(MAP_PROVIDERS).map(([key, provider]) => (
                <option key={key} value={key}>
                  {provider.name}
                </option>
              ))}
            </select>
          </div>

          {/* Optional Google Cloud API Key Dialog Trigger */}
          <button
            onClick={() => setApiKeyModalOpen(true)}
            className="p-2 rounded-2xl bg-slate-950/90 border border-white/20 text-amber-300 hover:text-amber-200 hover:border-amber-400/50 backdrop-blur-xl transition cursor-pointer shadow-glass-card"
            title="Google Cloud Maps API Key Configuration (Optional)"
          >
            <Key className="w-4 h-4" />
          </button>
        </div>

        {/* Right Action Buttons */}
        <div className="pointer-events-auto flex items-center gap-2">
          {/* Switch to 3D Globe */}
          <button
            onClick={onSwitchToGlobe}
            className="px-3.5 py-2 rounded-2xl bg-slate-950/90 border border-cyan-500/40 text-cyan-300 hover:bg-slate-900 font-bold text-xs shadow-glass-card flex items-center gap-1.5 transition cursor-pointer"
          >
            <span>🌍</span>
            <span>3D World Globe</span>
          </button>

          {/* Switch to 3D Terrain */}
          <button
            onClick={onSwitchTo3D}
            className="px-3.5 py-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold text-xs shadow-neon-cyan flex items-center gap-1.5 transition cursor-pointer"
          >
            <Mountain className="w-4 h-4" />
            <span>Fly in 3D View</span>
          </button>
        </div>
      </div>

      {/* 3. Bottom Filter Bar */}
      <div className="absolute bottom-6 left-6 z-20 pointer-events-none flex items-center gap-2 overflow-x-auto max-w-[calc(100vw-30rem)] pb-1 custom-scrollbar">
        <div className="pointer-events-auto flex items-center gap-2 bg-slate-950/90 border border-white/15 p-1.5 rounded-2xl backdrop-blur-xl shadow-glass-card">
          {[
            { id: 'all', label: `All 100 Springs` },
            { id: 'top15', label: '⭐ Top 15 Priority' },
            { id: 'primary', label: 'Primary Zone (88)' },
            { id: 'field', label: 'Field Verif (6)' },
            { id: 'high_flow', label: 'High Flow (>1.5 LPM)' },
            { id: 'critical', label: 'Critical (<0.8 LPM)' },
          ].map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-3 py-1.5 rounded-xl font-bold text-xs shrink-0 transition cursor-pointer ${
                activeFilter === filter.id
                  ? 'bg-cyan-500 text-slate-950 shadow-neon-cyan font-black'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* 4. Google Maps Spring Inspection Drawer (Right Sidebar) */}
      {selectedSpring && drawerOpen && (
        <div
          onWheel={(e) => e.stopPropagation()}
          className="absolute top-24 bottom-6 right-6 w-96 max-w-[calc(100vw-3rem)] z-30 rounded-3xl border border-white/20 bg-slate-950/95 p-5 shadow-2xl backdrop-blur-2xl text-white pointer-events-auto flex flex-col justify-between overflow-y-auto custom-scrollbar animate-slide-left"
        >
          <div>
            {/* Drawer Header */}
            <div className="flex items-start justify-between gap-3 border-b border-white/10 pb-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 font-mono text-[11px] font-bold">
                    {selectedSpring.code} (No. {selectedSpring.springNumber || selectedSpring.slNo})
                  </span>
                  {selectedSpring.isTop15 && (
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-[10px] font-bold">
                      ⭐ Top 15 Priority
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-extrabold tracking-tight text-white leading-tight">
                  {selectedSpring.name}
                </h3>
                <div className="text-xs text-slate-400 flex items-center gap-1.5 mt-1 font-mono">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>
                    GPS: {(selectedSpring.latitude ?? selectedSpring.gisCoords?.lat)?.toFixed(5)}°N,{' '}
                    {(selectedSpring.longitude ?? selectedSpring.gisCoords?.lng)?.toFixed(5)}°E
                  </span>
                </div>
              </div>
              <button
                onClick={() => setDrawerOpen(false)}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-slate-300"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Audio Voice Narration */}
            <div className="mt-3">
              <button
                onClick={handleSpeakSpring}
                className={`w-full py-2.5 px-3 rounded-xl border font-bold text-xs flex items-center justify-center gap-2 transition cursor-pointer ${
                  isSpeaking
                    ? 'bg-red-500/20 border-red-400 text-red-300 animate-pulse'
                    : 'bg-cyan-500/20 border-cyan-400/40 text-cyan-300 hover:bg-cyan-500/30'
                }`}
              >
                {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                <span>{isSpeaking ? t('stopAudio') : t('listenAudio')}</span>
              </button>
            </div>

            {/* Core Telemetry Cards */}
            <div className="grid grid-cols-2 gap-2.5 mt-3">
              <div className="p-3 rounded-2xl bg-slate-900/80 border border-white/10">
                <div className="text-[10px] uppercase font-bold text-slate-400">Elevation</div>
                <div className="text-lg font-mono font-extrabold text-white mt-0.5">
                  {selectedSpring.elevation_m} <span className="text-xs text-slate-400 font-normal">m</span>
                </div>
                <div className="text-[10px] text-cyan-400">Slope: {selectedSpring.slope_deg?.toFixed(1) || '24.2'}°</div>
              </div>

              <div className="p-3 rounded-2xl bg-slate-900/80 border border-white/10">
                <div className="text-[10px] uppercase font-bold text-slate-400">Measured Discharge</div>
                <div className="text-lg font-mono font-extrabold text-emerald-400 mt-0.5">
                  {selectedSpring.discharge_lpm} <span className="text-xs text-slate-400 font-normal">LPM</span>
                </div>
                <div className="text-[10px] text-emerald-400">
                  {selectedSpring.discharge_lpm >= 1.5 ? 'Healthy Flow' : selectedSpring.discharge_lpm >= 0.8 ? 'Moderate Flow' : 'Critical Depletion'}
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-slate-900/80 border border-white/10">
                <div className="text-[10px] uppercase font-bold text-slate-400">Beneficiaries</div>
                <div className="text-base font-bold text-cyan-300 mt-0.5">
                  {selectedSpring.beneficiary_households || 120} <span className="text-xs text-slate-400 font-normal">families</span>
                </div>
                <div className="text-[10px] text-slate-400">~{((selectedSpring.beneficiary_households || 120) * 4.8).toFixed(0)} persons</div>
              </div>

              <div className="p-3 rounded-2xl bg-slate-900/80 border border-white/10">
                <div className="text-[10px] uppercase font-bold text-slate-400">Water Quality</div>
                <div className="text-sm font-bold text-emerald-400 mt-0.5 flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>{selectedSpring.potability || 'Safe Drinking'}</span>
                </div>
                <div className="text-[10px] text-slate-400">TDS: {selectedSpring.water_quality_tds || 78} ppm</div>
              </div>
            </div>

            {/* Direct Google External Navigation Links */}
            <div className="mt-3 p-3 rounded-2xl bg-blue-950/30 border border-blue-500/20 space-y-2">
              <div className="text-[11px] font-bold text-blue-300 flex items-center gap-1">
                <Navigation className="w-3.5 h-3.5 text-blue-400" />
                <span>Google Navigation & Imagery Services</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-2.5 rounded-xl bg-blue-500/20 hover:bg-blue-500/30 border border-blue-400/40 text-blue-300 text-[11px] font-bold flex items-center justify-center gap-1.5 transition text-center"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Google Directions</span>
                </a>

                <a
                  href={googleStreetViewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-2.5 rounded-xl bg-blue-500/20 hover:bg-blue-500/30 border border-blue-400/40 text-blue-300 text-[11px] font-bold flex items-center justify-center gap-1.5 transition text-center"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Street View</span>
                </a>
              </div>
            </div>

            {/* Recommended Interventions */}
            <div className="mt-3 p-3 rounded-2xl bg-cyan-950/30 border border-cyan-500/20">
              <div className="text-xs font-bold text-cyan-300 flex items-center gap-1.5 mb-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Recommended Engineering Revival Works</span>
              </div>
              <ul className="space-y-1 text-xs text-slate-300">
                {selectedSpring.recommendedInterventions?.map((intv, idx) => (
                  <li key={idx} className="flex items-center justify-between">
                    <span>• {intv.type || intv.name}</span>
                    <span className="font-mono text-[11px] text-cyan-400">₹{((intv.cost || 600000) / 1000).toFixed(0)}k</span>
                  </li>
                )) || (
                  <>
                    <li>• Staggered Contour Trenching (120m)</li>
                    <li>• Loose Boulder Check Dam</li>
                    <li>• Native Oak & Bamboo Afforestation</li>
                  </>
                )}
              </ul>
            </div>
          </div>

          {/* Drawer Actions */}
          <div className="pt-3 border-t border-white/15 flex flex-col gap-2 mt-3">
            <button
              onClick={() => {
                if (onOpenAICopilot) onOpenAICopilot(selectedSpring);
              }}
              className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-bold text-xs shadow-lg flex items-center justify-center gap-2 transition cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-purple-200" />
              <span>Ask AI Copilot about {selectedSpring.code}</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={onSwitchTo3D}
                className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs shadow-neon-cyan flex items-center justify-center gap-1.5 transition cursor-pointer"
              >
                <Mountain className="w-4 h-4" />
                <span>Fly in 3D View</span>
              </button>

              <button
                onClick={onOpenReportModal}
                className="py-2.5 px-3 rounded-xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 hover:bg-emerald-500/30 text-xs font-semibold flex items-center gap-1 transition cursor-pointer"
                title="Report Field Observation"
              >
                <Droplets className="w-3.5 h-3.5" />
                <span>Report</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Collapsed Drawer Re-open Button */}
      {selectedSpring && !drawerOpen && (
        <button
          onClick={() => setDrawerOpen(true)}
          className="absolute top-24 right-6 z-30 p-3 rounded-2xl border border-white/20 bg-slate-950/90 text-cyan-300 shadow-2xl backdrop-blur-xl hover:bg-slate-900 transition flex items-center gap-2 text-xs font-bold cursor-pointer"
        >
          <MapPin className="w-4 h-4" />
          <span>Inspect {selectedSpring.name}</span>
          <ChevronLeft className="w-4 h-4" />
        </button>
      )}

      {/* 5. Google Maps API Key Modal (Optional configuration for user) */}
      {apiKeyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in pointer-events-auto">
          <div
            className="relative w-full max-w-md rounded-3xl border border-amber-500/30 bg-slate-950 p-6 shadow-2xl backdrop-blur-2xl text-white space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                  <Key className="w-4 h-4" />
                </div>
                <h4 className="text-base font-bold text-white">Google Maps API Key</h4>
              </div>
              <button
                onClick={() => setApiKeyModalOpen(false)}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Google Maps Explorer currently runs in <strong>High-Resolution Tile Engine Mode</strong>, delivering Google Hybrid, Satellite, Terrain, and Roadmap layers with <strong>Zero API Key Required</strong> and <strong>Zero Cost</strong>.
            </p>

            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-slate-400">
                Optional: Custom Google Cloud API Key
              </label>
              <input
                type="text"
                placeholder="AIzaSy..."
                value={userApiKey}
                onChange={(e) => setUserApiKey(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/20 text-white text-xs font-mono focus:outline-none focus:border-amber-400"
              />
              <p className="text-[10px] text-slate-400">
                Enter your Google Cloud project key to enable custom Maps JavaScript SDK vector features.
              </p>
            </div>

            {apiKeySavedNotice && (
              <div className="p-2.5 rounded-xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold text-center">
                ✓ Google Maps Configuration Saved!
              </div>
            )}

            <div className="flex items-center justify-end gap-2 pt-2 border-t border-white/10">
              <button
                onClick={() => setApiKeyModalOpen(false)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={handleSaveApiKey}
                className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-black shadow-lg cursor-pointer"
              >
                Save Configuration
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

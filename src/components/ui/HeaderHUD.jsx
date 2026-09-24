import React, { useState, useRef, useEffect } from 'react';
import {
  Droplets,
  BookOpen,
  MapPin,
  Globe,
  Bot,
  Sliders,
  CloudRain,
  Scale,
  Compass,
  Mountain,
  FileText,
  Settings,
  ChevronDown,
  Type,
  Users,
  Check
} from 'lucide-react';
import { PROJECT_SUMMARY } from '../../data/springData';
import { useLanguage } from '../../context/LanguageContext';

export default function HeaderHUD({
  budget,
  totalRechargeLiters,
  revivedCount,
  totalSprings = 100,
  backendConnected,
  onOpenReportModal,
  onOpenAICopilot,
  onOpenModelLab,
  onOpenClimateSim,
  onOpenCompare,
  activeView,
  setActiveView
}) {
  const { language, setLanguage, persona, setPersona, fontScale, setFontScale, t } = useLanguage();
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);
  const preferencesRef = useRef(null);

  // Close preferences dropdown on click outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (preferencesRef.current && !preferencesRef.current.contains(e.target)) {
        setIsPreferencesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const formattedBudget = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(budget);

  const formattedLiters = new Intl.NumberFormat('en-IN').format(totalRechargeLiters);

  // Cycle font sizes
  const handleToggleFontSize = () => {
    if (fontScale === 'normal') setFontScale('large');
    else if (fontScale === 'large') setFontScale('xlarge');
    else setFontScale('normal');
  };

  return (
    <header className="pointer-events-auto absolute top-0 left-0 right-0 z-40 px-4 sm:px-6 py-3 select-none">
      <div className="mx-auto flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/15 bg-slate-950/95 p-3 shadow-glass-card backdrop-blur-2xl">
        {/* 1. Brand & Project Identity */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-500/40 bg-cyan-500/10 text-cyan-400 shadow-neon-cyan shrink-0">
            <Droplets className="h-5 w-5 animate-pulse text-cyan-400" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-0.5 flex-wrap">
              <span className="rounded-full bg-cyan-500/20 px-2.5 py-0.5 text-xs font-semibold text-cyan-300 border border-cyan-500/30">
                SIH26240
              </span>
              <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-xs font-semibold text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                Darjeeling (100 Springs)
              </span>
              <span className={`rounded-full px-2 py-0.5 text-xs font-mono border flex items-center gap-1 ${
                backendConnected
                  ? 'bg-cyan-500/20 border-cyan-400/40 text-cyan-400'
                  : 'bg-emerald-500/15 border-emerald-400/30 text-emerald-300'
              }`}>
                <span className={`w-1.5 h-1.5 rounded-full ${backendConnected ? 'bg-cyan-400' : 'bg-emerald-400'}`} />
                {backendConnected ? 'Live API' : 'Client Live'}
              </span>
            </div>
            <h1 className="text-sm sm:text-base font-black tracking-tight text-white leading-tight">
              {t('title')}
            </h1>
            <p className="text-xs text-slate-300 hidden sm:block">
              {t('subtitle')}
            </p>
          </div>
        </div>

        {/* 2. Core Map Modes Segmented Control & Educational Portal */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Map Display Modes (Clearly grouped) */}
          <nav aria-label="Map Display Modes" className="flex items-center gap-1 p-1 rounded-2xl bg-slate-900/90 border border-white/15 backdrop-blur-xl">
            {/* View 1: 3D Mountain Map */}
            <button
              onClick={() => setActiveView('maptiler3d')}
              aria-pressed={activeView === 'maptiler3d'}
              className={`btn-tab ${activeView === 'maptiler3d' ? 'btn-tab-active' : 'btn-tab-inactive'}`}
              title="MapTiler 3D Himalayan Terrain Mesh & 100 Springs"
            >
              <Mountain className="h-3.5 w-3.5" />
              <span>3D Mountain Map</span>
            </button>

            {/* View 2: 3D World Globe */}
            <button
              onClick={() => setActiveView('globe')}
              aria-pressed={activeView === 'globe'}
              className={`btn-tab ${activeView === 'globe' ? 'btn-tab-active' : 'btn-tab-inactive'}`}
              title="3D Global Earth Map & Worldwide Mountain Aquifer Networks"
            >
              <Globe className="h-3.5 w-3.5" />
              <span>3D Globe</span>
            </button>

            {/* View 3: Google Map */}
            <button
              onClick={() => setActiveView('googlemap')}
              aria-pressed={activeView === 'googlemap'}
              className={`btn-tab ${activeView === 'googlemap' ? 'btn-tab-active' : 'btn-tab-inactive'}`}
              title="Google Maps & Satellite Hybrid Explorer"
            >
              <Compass className="h-3.5 w-3.5" />
              <span>Google Map</span>
            </button>
          </nav>

          {/* Educational Destination Link (Clearly separated from map modes) */}
          <button
            onClick={() => setActiveView('learning')}
            aria-pressed={activeView === 'learning'}
            className={`btn-tab ${
              activeView === 'learning'
                ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.5)]'
                : 'btn-tab-inactive'
            }`}
            title="Student & Youth Interactive Aquifer Discovery Hub"
          >
            <BookOpen className="h-3.5 w-3.5 text-amber-400" />
            <span className="hidden sm:inline">Learning Hub</span>
          </button>
        </div>

        {/* 3. Decision Support Tools & Preferences Menu */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Decision Tools Toolbar (Anchored container) */}
          <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-slate-900/90 border border-white/15 backdrop-blur-xl">
            {/* AI Copilot (Unified Primary Palette) */}
            <button
              onClick={onOpenAICopilot}
              className="btn-primary"
              title="Chat with Darjeeling Springs AI Hydrogeologist"
            >
              <Bot className="h-3.5 w-3.5" />
              <span>AI Copilot</span>
            </button>

            {/* AI Lab */}
            <button
              onClick={onOpenModelLab}
              className="btn-secondary"
              title="Interactive AI Model Inference & SHAP Lab"
            >
              <Sliders className="h-3.5 w-3.5 text-cyan-400" />
              <span className="hidden xl:inline">AI Lab</span>
            </button>

            {/* Climate Simulator */}
            <button
              onClick={onOpenClimateSim}
              className="btn-icon"
              title="Climate & Monsoon What-If Simulator"
              aria-label="Climate Simulator"
            >
              <CloudRain className="h-4 w-4 text-blue-400" />
            </button>

            {/* Spring Comparison */}
            <button
              onClick={onOpenCompare}
              className="btn-icon"
              title="Side-by-Side Spring Comparison Matrix"
              aria-label="Spring Comparison Matrix"
            >
              <Scale className="h-4 w-4 text-slate-300" />
            </button>

            {/* Citizen Report */}
            <button
              onClick={onOpenReportModal}
              className="btn-secondary"
              title="Record Spring Field Observations"
            >
              <FileText className="h-3.5 w-3.5 text-amber-400" />
              <span className="hidden xl:inline">Report</span>
            </button>
          </div>

          {/* Preferences Dropdown Popover (Consolidated Persona, Language & Accessibility) */}
          <div className="relative" ref={preferencesRef}>
            <button
              onClick={() => setIsPreferencesOpen((prev) => !prev)}
              aria-expanded={isPreferencesOpen}
              className={`btn-secondary ${isPreferencesOpen ? 'border-cyan-400 text-cyan-300 shadow-neon-cyan' : ''}`}
              title="Configure Persona, Himalayan Language, and Font Zoom"
            >
              <Settings className="h-3.5 w-3.5 text-cyan-400" />
              <span className="hidden md:inline">Preferences</span>
              <ChevronDown className={`h-3 w-3 transition-transform ${isPreferencesOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu Panel */}
            {isPreferencesOpen && (
              <div className="absolute right-0 top-12 w-72 rounded-3xl border border-white/20 bg-slate-950/98 p-4 shadow-2xl backdrop-blur-2xl text-white space-y-3.5 z-50 animate-slide-down">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <div className="text-xs font-black uppercase text-cyan-300 tracking-wider">
                    Interface Preferences
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">Accessibility</span>
                </div>

                {/* Persona Mode */}
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase mb-1.5 flex items-center gap-1.5">
                    <Users className="w-3 h-3 text-cyan-400" />
                    <span>User Persona</span>
                  </div>
                  <div className="grid grid-cols-3 gap-1">
                    {[
                      { id: 'citizen', icon: '👴', label: 'Citizen' },
                      { id: 'student', icon: '🎒', label: 'Student' },
                      { id: 'specialist', icon: '🔬', label: 'Specialist' },
                    ].map((p) => (
                      <button
                        key={p.id}
                        onClick={() => setPersona(p.id)}
                        className={`p-1.5 rounded-xl text-[11px] font-bold border transition flex flex-col items-center gap-0.5 cursor-pointer ${
                          persona === p.id
                            ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-sm'
                            : 'bg-slate-900 border-white/10 text-slate-300 hover:text-white'
                        }`}
                      >
                        <span className="text-sm">{p.icon}</span>
                        <span>{p.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Regional Languages */}
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase mb-1.5 flex items-center gap-1.5">
                    <Globe className="w-3 h-3 text-emerald-400" />
                    <span>Himalayan Language</span>
                  </div>
                  <div className="grid grid-cols-2 gap-1.5">
                    {[
                      { code: 'en', label: 'English' },
                      { code: 'ne', label: 'नेपाली (Nepali)' },
                      { code: 'hi', label: 'हिन्दी (Hindi)' },
                      { code: 'bn', label: 'বাংলা (Bengali)' },
                    ].map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => setLanguage(lang.code)}
                        className={`px-2.5 py-1.5 rounded-xl text-xs font-bold border transition flex items-center justify-between cursor-pointer ${
                          language === lang.code
                            ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300'
                            : 'bg-slate-900 border-white/10 text-slate-300 hover:text-white'
                        }`}
                      >
                        <span>{lang.label}</span>
                        {language === lang.code && <Check className="w-3 h-3 text-emerald-400" />}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Font Size Accessibility */}
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase mb-1.5 flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Type className="w-3 h-3 text-cyan-400" />
                      <span>Text Legibility</span>
                    </span>
                    <span className="font-mono text-cyan-300 text-[10px]">
                      {fontScale === 'normal' ? 'Standard (100%)' : fontScale === 'large' ? 'Large (115%)' : 'Extra Large (130%)'}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-1">
                    {[
                      { id: 'normal', label: 'A Default' },
                      { id: 'large', label: 'A+ Large' },
                      { id: 'xlarge', label: 'A++ Zoom' },
                    ].map((scale) => (
                      <button
                        key={scale.id}
                        onClick={() => setFontScale(scale.id)}
                        className={`p-1.5 rounded-xl text-xs font-bold border transition cursor-pointer text-center ${
                          fontScale === scale.id
                            ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300'
                            : 'bg-slate-900 border-white/10 text-slate-300 hover:text-white'
                        }`}
                      >
                        {scale.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

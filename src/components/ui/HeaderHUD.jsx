import React from 'react';
import {
  Droplets,
  Layers,
  Cpu,
  Smartphone,
  Info,
  ShieldAlert,
  Activity,
  Award
} from 'lucide-react';

export default function HeaderHUD({
  budget,
  totalRechargeLiters,
  revivedCount,
  totalSprings,
  backendConnected,
  onOpenPipeline,
  onOpenFieldValidation,
  onOpenArchitecture,
  activeView,
  setActiveView
}) {
  const formattedBudget = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(budget);

  const formattedLiters = new Intl.NumberFormat('en-IN').format(totalRechargeLiters);

  return (
    <header className="pointer-events-auto absolute top-0 left-0 right-0 z-40 px-6 py-4">
      <div className="mx-auto flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/15 bg-slate-950/60 p-4 shadow-glass-card backdrop-blur-xl">
        {/* Brand & Project Identity */}
        <div className="flex items-center gap-3.5">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-500/40 bg-cyan-500/10 text-cyan-400 shadow-neon-cyan">
            <Droplets className="h-6 w-6 animate-pulse text-cyan-400" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="rounded-full bg-cyan-500/20 px-2.5 py-0.5 text-xs font-semibold text-cyan-400 border border-cyan-500/30">
                Project SIH26240
              </span>
              <span className="rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-xs font-semibold text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                Live AI System
              </span>
              <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold border flex items-center gap-1.5 ${
                backendConnected
                  ? 'bg-cyan-500/20 border-cyan-400/40 text-cyan-400'
                  : 'bg-amber-500/20 border-amber-400/40 text-amber-400'
              }`}>
                <span className={`w-1.5 h-1.5 rounded-full ${backendConnected ? 'bg-cyan-400' : 'bg-amber-400'}`} />
                {backendConnected ? 'API Live (Port 5000)' : 'Local Mode'}
              </span>
            </div>
            <h1 className="text-base font-extrabold tracking-tight text-white sm:text-lg">
              AI-Powered Spring Revival <span className="text-cyan-400">Decision Support System</span>
            </h1>
            <p className="text-xs text-slate-300">
              From Data to Action • Reviving Springs, Strengthening Himalayan Communities
            </p>
          </div>
        </div>

        {/* Real-time Telemetry Counters */}
        <div className="hidden lg:flex items-center gap-6 border-x border-white/10 px-6">
          <div className="text-left">
            <div className="text-xs font-medium uppercase tracking-wider text-slate-400">
              Springs Revived
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-mono text-xl font-bold text-emerald-400">
                {revivedCount}
              </span>
              <span className="text-xs text-slate-400">/ {totalSprings} Funded</span>
            </div>
          </div>

          <div className="text-left">
            <div className="text-xs font-medium uppercase tracking-wider text-slate-400">
              Projected Annual Recharge
            </div>
            <div className="flex items-baseline gap-1">
              <span className="font-mono text-xl font-bold text-cyan-400 text-glow-cyan">
                {formattedLiters}
              </span>
              <span className="text-xs text-slate-400">L/yr</span>
            </div>
          </div>

          <div className="text-left">
            <div className="text-xs font-medium uppercase tracking-wider text-slate-400">
              Mean AI Confidence
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-mono text-xl font-bold text-cyan-400">
                78.2%
              </span>
              <span className="text-xs text-emerald-400">±3.1% var</span>
            </div>
          </div>
        </div>

        {/* View Switching & Modal Triggers */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveView('gis')}
            aria-pressed={activeView === 'gis'}
            className={`flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-semibold transition-all border ${
              activeView === 'gis'
                ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-neon-cyan'
                : 'bg-slate-900/80 border-white/15 text-slate-200 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <Layers className="h-4 w-4 text-cyan-300" aria-hidden="true" />
            <span>3D GIS View</span>
          </button>

          <button
            onClick={onOpenPipeline}
            className="flex items-center gap-1.5 rounded-xl border border-white/15 bg-slate-900/80 px-3.5 py-2 text-xs font-semibold text-slate-200 transition-all hover:border-cyan-400/50 hover:bg-slate-800 hover:text-white"
          >
            <Cpu className="h-4 w-4 text-cyan-300" aria-hidden="true" />
            <span>5-Stage AI Pipeline</span>
          </button>

          <button
            onClick={onOpenFieldValidation}
            className="flex items-center gap-1.5 rounded-xl border border-white/15 bg-slate-900/80 px-3.5 py-2 text-xs font-semibold text-slate-200 transition-all hover:border-emerald-400/50 hover:bg-slate-800 hover:text-white"
          >
            <Smartphone className="h-4 w-4 text-emerald-300" aria-hidden="true" />
            <span>Mobile App Sync</span>
          </button>

          <button
            onClick={onOpenArchitecture}
            className="flex items-center justify-center h-8 w-8 rounded-xl border border-white/15 bg-slate-900/80 text-slate-300 transition-all hover:border-cyan-400/50 hover:bg-slate-800 hover:text-white"
            title="System Architecture & Unique Features"
            aria-label="System Architecture & Unique Features"
          >
            <Info className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
}

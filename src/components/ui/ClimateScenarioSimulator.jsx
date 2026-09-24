import React, { useState, useEffect } from 'react';
import {
  X,
  CloudRain,
  TrendingDown,
  TrendingUp,
  AlertTriangle,
  Droplets,
  RotateCcw,
  CheckCircle,
  ArrowRight,
  Filter
} from 'lucide-react';
import { api } from '../../services/api';

export default function ClimateScenarioSimulator({ isOpen, onClose, onSelectSpring }) {
  const [multiplier, setMultiplier] = useState(1.0);
  const [simulationData, setSimulationData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [filterMode, setFilterMode] = useState('critical'); // 'critical' | 'all' | 'increased'

  useEffect(() => {
    let isCancelled = false;
    async function runSim() {
      setLoading(true);
      try {
        const result = await api.simulateClimate(multiplier);
        if (!isCancelled && result) {
          setSimulationData(result);
        }
      } catch (e) {
        console.warn('Simulation error:', e);
      } finally {
        if (!isCancelled) setLoading(false);
      }
    }

    const timer = setTimeout(runSim, 200);
    return () => {
      isCancelled = true;
      clearTimeout(timer);
    };
  }, [multiplier]);

  if (!isOpen) return null;

  const rainfallDeltaPercent = Math.round((multiplier - 1.0) * 100);

  const displayedSprings = (simulationData?.springs || []).filter((s) => {
    if (filterMode === 'critical') return s.status === 'Severe Depletion' || s.simulatedDischarge < 0.8;
    if (filterMode === 'increased') return s.simulatedDischarge > s.originalDischarge;
    return true;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in pointer-events-auto select-none">
      <div
        className="relative w-full max-w-4xl max-h-[92vh] rounded-3xl border border-blue-500/30 bg-slate-950 p-6 shadow-2xl backdrop-blur-2xl text-white flex flex-col justify-between overflow-y-auto custom-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-blue-500/20 text-blue-400 border border-blue-500/40 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.5)]">
              <CloudRain className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-black text-white">
                  Climate & Rainfall What-If Simulator
                </h3>
                <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 font-mono text-[10px] font-bold border border-blue-400/40">
                  {simulationData?.scenario || '100 Springs Hydraulic Shift'}
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Simulate district-wide drought years or super-monsoons across the Darjeeling catchment
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Rainfall Multiplier Slider */}
        <div className="my-4 p-5 rounded-3xl border border-white/10 bg-slate-900/80 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-200">
              Annual Monsoon Rainfall Scenario:
            </span>
            <span
              className={`font-mono text-sm font-black px-3 py-1 rounded-xl border ${
                rainfallDeltaPercent > 0
                  ? 'border-blue-400 text-blue-300 bg-blue-950/40'
                  : rainfallDeltaPercent < 0
                  ? 'border-red-400 text-red-300 bg-red-950/40'
                  : 'border-cyan-400 text-cyan-300 bg-cyan-950/40'
              }`}
            >
              {rainfallDeltaPercent >= 0 ? `+${rainfallDeltaPercent}%` : `${rainfallDeltaPercent}%`} ({simulationData?.annualRainfallMean || 2520} mm)
            </span>
          </div>

          <input
            type="range"
            min="0.6"
            max="1.4"
            step="0.05"
            value={multiplier}
            onChange={(e) => setMultiplier(parseFloat(e.target.value))}
            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-400"
          />

          {/* Quick Scenario Preset Buttons */}
          <div className="flex items-center justify-between pt-1">
            <button
              onClick={() => setMultiplier(0.75)}
              className="px-2.5 py-1 rounded-lg bg-red-950/40 border border-red-500/40 text-red-300 text-[11px] cursor-pointer hover:bg-red-900/50"
            >
              Simulate -25% Severe Drought
            </button>
            <button
              onClick={() => setMultiplier(1.0)}
              className="px-2.5 py-1 rounded-lg bg-slate-800 border border-white/20 text-slate-300 text-[11px] cursor-pointer hover:bg-slate-700"
            >
              Reset to Baseline
            </button>
            <button
              onClick={() => setMultiplier(1.25)}
              className="px-2.5 py-1 rounded-lg bg-blue-950/40 border border-blue-500/40 text-blue-300 text-[11px] cursor-pointer hover:bg-blue-900/50"
            >
              Simulate +25% Heavy Monsoon
            </button>
          </div>
        </div>

        {/* Telemetry Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10">
            <div className="text-[10px] uppercase font-bold text-slate-400">Total Projected Catchment Yield</div>
            <div className="text-xl font-mono font-black text-cyan-300 mt-1">
              {simulationData
                ? `${((simulationData.totalProjectedRechargeLiters || 0) / 100000).toFixed(1)} Lakh`
                : '...'} <span className="text-xs font-normal text-slate-400">Liters/yr</span>
            </div>
            <div className="text-[10px] text-slate-400 mt-0.5">Across 111.0 km² pilot catchment</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/80 border border-red-500/30">
            <div className="text-[10px] uppercase font-bold text-red-400">Critically Stressed Springs (&lt;0.8 LPM)</div>
            <div className="text-xl font-mono font-black text-red-400 mt-1">
              {simulationData?.criticalSpringsCount || 0} <span className="text-xs font-normal text-slate-400">/ 100</span>
            </div>
            <div className="text-[10px] text-slate-400 mt-0.5">
              {rainfallDeltaPercent < 0 ? 'Urgent recharge intervention required' : 'Low stress under wet conditions'}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/80 border border-emerald-500/30">
            <div className="text-[10px] uppercase font-bold text-emerald-400">Healthy Flow Springs (&gt;1.5 LPM)</div>
            <div className="text-xl font-mono font-black text-emerald-400 mt-1">
              {simulationData?.healthySpringsCount || 0} <span className="text-xs font-normal text-slate-400">/ 100</span>
            </div>
            <div className="text-[10px] text-slate-400 mt-0.5">Sustaining village domestic drinking needs</div>
          </div>
        </div>

        {/* List of Affected Springs */}
        <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/10 space-y-3">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <span className="text-xs font-mono font-bold text-slate-200">
              Spring-by-Spring Impact Analysis ({displayedSprings.length} Springs)
            </span>
            <div className="flex items-center gap-1.5 text-[11px]">
              <button
                onClick={() => setFilterMode('critical')}
                className={`px-2 py-0.5 rounded transition ${
                  filterMode === 'critical' ? 'bg-red-500/30 text-red-300 font-bold' : 'text-slate-400'
                }`}
              >
                Critical Low (&lt;5 LPM)
              </button>
              <button
                onClick={() => setFilterMode('all')}
                className={`px-2 py-0.5 rounded transition ${
                  filterMode === 'all' ? 'bg-cyan-500/30 text-cyan-300 font-bold' : 'text-slate-400'
                }`}
              >
                All 100
              </button>
            </div>
          </div>

          <div className="max-h-48 overflow-y-auto space-y-1.5 custom-scrollbar pr-1 text-xs">
            {displayedSprings.slice(0, 30).map((s) => (
              <div
                key={s.id}
                className="p-2 rounded-xl bg-slate-950/80 border border-white/10 flex items-center justify-between hover:border-cyan-400 transition"
              >
                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-cyan-400">{s.code}</span>
                  <span className="text-white font-medium truncate max-w-[180px]">{s.name}</span>
                </div>
                <div className="flex items-center gap-4 text-[11px] font-mono">
                  <span>
                    Baseline: <strong className="text-slate-300">{s.originalDischarge}</strong> LPM
                  </span>
                  <span>
                    Simulated: <strong className={s.simulatedDischarge < 5 ? 'text-red-400' : 'text-emerald-400'}>{s.simulatedDischarge}</strong> LPM
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] ${
                      s.status === 'Critical Dryness' ? 'bg-red-500/20 text-red-300' : 'bg-emerald-500/20 text-emerald-300'
                    }`}
                  >
                    {s.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-white/10 text-[11px] text-slate-400 flex items-center justify-between">
          <span>Derived from IMD 2023 Precipitation & CGWB Hydrogeology Regression</span>
          <button onClick={onClose} className="px-4 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs">
            Close Simulator
          </button>
        </div>
      </div>
    </div>
  );
}

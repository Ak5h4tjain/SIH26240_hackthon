import React, { useState } from 'react';
import {
  X,
  Scale,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  TrendingUp,
  Droplets,
  Layers,
  MapPin,
  Sparkles
} from 'lucide-react';

export default function SpringComparisonModal({ isOpen, onClose, springs = [], initialSpring }) {
  const [spring1Id, setSpring1Id] = useState(initialSpring?.id || (springs[0]?.id || ''));
  const [spring2Id, setSpring2Id] = useState(
    springs.find((s) => s.id !== spring1Id && s.isTop15)?.id || (springs[1]?.id || '')
  );

  if (!isOpen) return null;

  const spring1 = springs.find((s) => s.id === spring1Id) || springs[0];
  const spring2 = springs.find((s) => s.id === spring2Id) || springs[1];

  const compareRow = (label, val1, val2, unit = '', highlightBetter = false) => {
    let better = 0;
    if (highlightBetter && typeof val1 === 'number' && typeof val2 === 'number') {
      if (val1 > val2) better = 1;
      else if (val2 > val1) better = 2;
    }

    return (
      <tr className="border-b border-white/10 hover:bg-white/5 transition text-xs">
        <td className="py-2.5 px-3 font-semibold text-slate-300">{label}</td>
        <td className={`py-2.5 px-3 font-mono ${better === 1 ? 'text-emerald-400 font-bold' : 'text-white'}`}>
          {val1} {unit}
        </td>
        <td className={`py-2.5 px-3 font-mono ${better === 2 ? 'text-emerald-400 font-bold' : 'text-white'}`}>
          {val2} {unit}
        </td>
      </tr>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in pointer-events-auto select-none">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] rounded-3xl border border-white/20 bg-slate-950 p-6 shadow-2xl backdrop-blur-2xl text-white flex flex-col justify-between overflow-y-auto custom-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 flex items-center justify-center shadow-neon-cyan">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-black text-white">
                Spring Hydrogeological Comparison Matrix
              </h3>
              <p className="text-xs text-slate-400">
                Compare terrain, recharge capacity, discharge, and priority scores side-by-side
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Spring Selectors */}
        <div className="grid grid-cols-2 gap-4 my-4">
          <div>
            <label className="block text-xs font-bold text-slate-400 mb-1">Select Spring A:</label>
            <select
              value={spring1Id}
              onChange={(e) => setSpring1Id(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-cyan-500/40 text-cyan-300 font-bold text-xs focus:outline-none"
            >
              {springs.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.code}: {s.name} ({s.location || 'Darjeeling'})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-400 mb-1">Select Spring B:</label>
            <select
              value={spring2Id}
              onChange={(e) => setSpring2Id(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-purple-500/40 text-purple-300 font-bold text-xs focus:outline-none"
            >
              {springs.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.code}: {s.name} ({s.location || 'Darjeeling'})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-2xl border border-white/10 bg-slate-900/60 p-2 custom-scrollbar">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/15 text-xs text-slate-400">
                <th className="py-2.5 px-3">Hydrogeological Metric</th>
                <th className="py-2.5 px-3 text-cyan-400 font-bold">{spring1?.name || 'Spring A'}</th>
                <th className="py-2.5 px-3 text-purple-400 font-bold">{spring2?.name || 'Spring B'}</th>
              </tr>
            </thead>
            <tbody>
              {compareRow('Spring Code', spring1?.code, spring2?.code)}
              {compareRow('Elevation', spring1?.elevation_m, spring2?.elevation_m, 'meters')}
              {compareRow('Topographic Slope', spring1?.slope_deg?.toFixed(1), spring2?.slope_deg?.toFixed(1), '°')}
              {compareRow('Current Discharge', spring1?.discharge_lpm, spring2?.discharge_lpm, 'LPM', true)}
              {compareRow('Recharge Suitability Score', spring1?.suitabilityScore, spring2?.suitabilityScore, '%', true)}
              {compareRow('Revival Priority Score', spring1?.priorityScore, spring2?.priorityScore, '%', true)}
              {compareRow('Beneficiary Households', spring1?.beneficiary_households, spring2?.beneficiary_households, 'families', true)}
              {compareRow('Geology Formation', spring1?.geology, spring2?.geology)}
              {compareRow('Topsoil Clay (0-5cm)', spring1?.clay_percent, spring2?.clay_percent, '%')}
              {compareRow('Annual Rainfall 2023', spring1?.rainfall_mm, spring2?.rainfall_mm, 'mm')}
              {compareRow('Zone Status', spring1?.status, spring2?.status)}
              {compareRow('Recommended Interventions', spring1?.interventions?.[0]?.name, spring2?.interventions?.[0]?.name)}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-white/10 flex justify-end">
          <button onClick={onClose} className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition">
            Close Comparison
          </button>
        </div>
      </div>
    </div>
  );
}

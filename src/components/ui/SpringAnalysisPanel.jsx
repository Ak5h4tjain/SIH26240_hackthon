import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  TrendingUp,
  BrainCircuit,
  AlertCircle,
  ShieldCheck,
  CheckCircle,
  Smartphone,
  ChevronRight,
  Sparkles,
  Layers,
  ArrowUpRight,
  Info
} from 'lucide-react';

export default function SpringAnalysisPanel({
  springs,
  selectedSpring,
  onSelectSpring,
  budget,
  onOpenFieldValidation
}) {
  const [activeTab, setActiveTab] = useState('analysis'); // 'analysis' | 'interventions' | 'trend'

  if (!selectedSpring) return null;

  const isFunded = budget >= selectedSpring.minBudgetRequired;

  // Max discharge in trend for chart scaling
  const maxDischarge = Math.max(...selectedSpring.dischargeTrend.map((d) => d.discharge));

  return (
    <motion.section
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      onWheel={(e) => e.stopPropagation()}
      className="pointer-events-auto w-full max-w-md rounded-2xl border border-white/20 bg-slate-950/92 p-5 shadow-2xl backdrop-blur-2xl space-y-4"
    >
      {/* 1. Primary Level Navigation: Spring Selection */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between text-xs text-slate-300">
          <span className="font-bold text-xs text-cyan-300 flex items-center gap-1.5">
            <MapPin className="h-4 w-4 text-cyan-300" aria-hidden="true" />
            Select Target Watershed Spring:
          </span>
          <span className="font-mono text-xs text-slate-400">
            Alt: {selectedSpring.elevation}
          </span>
        </div>

        {/* Prominent Primary Spring Selection Tabs */}
        <div className="flex items-center gap-3 overflow-x-auto pt-1 pb-2 scrollbar-thin">
          {springs.map((s) => {
            const isSelected = selectedSpring.id === s.id;
            return (
              <button
                key={s.id}
                role="tab"
                aria-selected={isSelected}
                onClick={() => onSelectSpring(s)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold whitespace-nowrap transition-all border shrink-0 ${
                  isSelected
                    ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-neon-cyan'
                    : 'bg-slate-800/60 border-white/15 text-slate-200 hover:text-white hover:bg-slate-700/60'
                }`}
              >
                {s.code}
              </button>
            );
          })}
        </div>

        <div className="flex items-start justify-between gap-2 pt-1 border-t border-white/10">
          <div>
            <h3 className="text-base font-extrabold text-white">
              {selectedSpring.name}
            </h3>
            <p className="text-xs text-slate-300">{selectedSpring.subdistrict}</p>
          </div>

          <span
            className={`rounded-full px-2.5 py-0.5 text-xs font-semibold border flex items-center gap-1.5 shrink-0 ${
              isFunded
                ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400'
                : 'bg-red-500/20 border-red-500/40 text-red-400'
            }`}
          >
            <span
              className={`w-2 h-2 rounded-full ${
                isFunded ? 'bg-emerald-400 animate-pulse' : 'bg-red-400 animate-ping'
              }`}
            />
            {isFunded ? 'Intervention Funded' : selectedSpring.status}
          </span>
        </div>
      </div>

      {/* Secondary Level: Segmented Control Sub-Navigation Tabs */}
      <div
        role="tablist"
        aria-label="Spring Analysis Views"
        className="grid grid-cols-3 gap-1 rounded-xl bg-slate-950/90 p-1 border border-white/15 shadow-inner text-xs"
      >
        {[
          { id: 'analysis', label: 'AI Analysis' },
          { id: 'interventions', label: 'Interventions' },
          { id: 'trend', label: 'Discharge Trend' },
        ].map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-2 rounded-lg text-xs font-bold transition-all ${
                isActive
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/50 shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* 2. TAB: AI Analysis (Suitability, Confidence, SHAP Top Factors) */}
      {activeTab === 'analysis' && (
        <div className="space-y-4 text-xs">
          {/* Suitability Score & Confidence Banner */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 flex items-center justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Recharge Suitability Score
              </div>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="font-mono text-2xl font-black text-cyan-400">
                  {selectedSpring.suitabilityScore}
                </span>
                <span className="text-slate-400 font-medium">/ 100</span>
                <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-xs font-bold text-emerald-400 border border-emerald-500/30">
                  {selectedSpring.suitabilityTier}
                </span>
              </div>
            </div>

            <div className="text-right border-l border-white/10 pl-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                AI Confidence
              </div>
              <div className="font-mono text-xl font-bold text-cyan-400">
                {selectedSpring.confidence}%
              </div>
              <div className="text-xs text-slate-400">XGBoost Ensemble</div>
            </div>
          </div>

          {/* Top Factors (Explainable AI / SHAP) */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                <BrainCircuit className="h-4 w-4 text-cyan-400" />
                Explainable AI (SHAP Top Drivers)
              </span>
              <span className="text-xs text-slate-400">Site Attribution</span>
            </div>

            <div className="space-y-2">
              {selectedSpring.topFactors.map((factor, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between rounded-lg border border-white/5 bg-white/5 px-3 py-2 text-xs"
                >
                  <span className="text-slate-300">{factor.name}</span>
                  <span
                    className={`font-mono font-bold ${
                      factor.positive ? 'text-emerald-400' : 'text-amber-400'
                    }`}
                  >
                    {factor.contribution}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Aquifer & Risk Metadata */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-3.5 space-y-2 text-xs">
            <div className="flex justify-between">
              <span className="text-slate-400">Aquifer Lithology:</span>
              <span className="font-medium text-slate-300">{selectedSpring.aquiferType}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Catchment Area:</span>
              <span className="font-medium text-slate-300">{selectedSpring.catchmentArea}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Beneficiaries:</span>
              <span className="font-medium text-emerald-400">{selectedSpring.communityBeneficiaries}</span>
            </div>
          </div>
        </div>
      )}

      {/* 3. TAB: Recommended Interventions */}
      {activeTab === 'interventions' && (
        <div className="space-y-3.5 text-xs">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-300 flex items-center justify-between">
            <span>Recommended Measures</span>
            <span className="text-cyan-400 text-xs">Site Specific Engineering</span>
          </div>

          {selectedSpring.recommendedInterventions.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-white/10 bg-white/5 p-3.5 flex items-center justify-between"
            >
              <div>
                <div className="font-bold text-white text-sm">{item.type}</div>
                <div className="text-xs text-slate-400 mt-0.5">
                  Target: {item.count} units in upstream recharge zone
                </div>
              </div>
              <div className="text-right">
                <div className="font-mono font-bold text-cyan-400 text-sm">
                  ₹{(item.cost / 100000).toFixed(2)} Lakh
                </div>
                <span className="text-xs text-slate-400">Estimated Cost</span>
              </div>
            </div>
          ))}

          {/* Minimum Budget Requirement indicator */}
          <div className="rounded-xl border border-cyan-500/30 bg-cyan-950/40 p-3.5 flex items-center justify-between">
            <div>
              <div className="text-xs text-slate-300">Recharge Budget Threshold</div>
              <div className="font-mono font-bold text-white text-base mt-0.5">
                ₹{(selectedSpring.minBudgetRequired / 100000).toFixed(2)} Lakhs
              </div>
            </div>
            <span
              className={`rounded-full px-3 py-1 text-xs font-bold ${
                isFunded
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
              }`}
            >
              {isFunded ? '✓ Fully Funded' : 'Awaiting Allocation'}
            </span>
          </div>
        </div>
      )}

      {/* 4. TAB: Spring Discharge Trend (Real-World Step 5) */}
      {activeTab === 'trend' && (
        <div className="space-y-3.5 text-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Discharge Monitoring Trend (L/min)
            </span>
            <span className="text-emerald-400 text-xs font-bold">
              +{Math.round((selectedSpring.projectedDischarge / selectedSpring.historicalDischarge - 1) * 100)}% Revival
            </span>
          </div>

          {/* Visual SVG Discharge Curve Chart */}
          <div className="rounded-xl border border-white/10 bg-slate-950/80 p-4">
            <div className="h-32 flex items-end gap-2 pt-4">
              {selectedSpring.dischargeTrend.map((pt, i) => {
                const heightPercent = (pt.discharge / (maxDischarge || 1)) * 100;
                const isPost = i >= 3;
                return (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                    <span className="font-mono text-xs text-slate-300">
                      {pt.discharge}
                    </span>
                    <div
                      style={{ height: `${heightPercent}%` }}
                      className={`w-full rounded-t-md transition-all duration-500 ${
                        isPost
                          ? 'bg-gradient-to-t from-emerald-600 to-cyan-400 shadow-neon-green'
                          : 'bg-gradient-to-t from-red-800 to-red-500'
                      }`}
                    />
                    <span className="text-xs text-slate-400 text-center leading-tight truncate w-full">
                      {pt.month.split(' ')[0]}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-3 pt-2.5 border-t border-white/10 flex justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                Pre-Intervention (Depleted)
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Post-Intervention (Sustained)
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Step 4 Field Validation Dedicated Footer Container */}
      <div className="mt-4 pt-3.5 border-t border-white/10 space-y-2.5">
        <div className="flex items-center justify-between text-xs px-0.5">
          <span className="text-slate-300 flex items-center gap-1.5 font-medium">
            <ShieldCheck className="h-4 w-4 text-emerald-400" aria-hidden="true" />
            Field Verification
          </span>
          <span className="font-mono text-emerald-400 font-semibold text-xs">Ground Truth Active</span>
        </div>
        <button
          onClick={onOpenFieldValidation}
          className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-emerald-500/40 bg-emerald-500/15 text-xs font-bold text-emerald-300 hover:bg-emerald-500/25 hover:border-emerald-400 transition-all cursor-pointer shadow-sm"
        >
          <Smartphone className="h-4 w-4 text-emerald-400" aria-hidden="true" />
          <span>Record Ground Truth Observation</span>
        </button>
      </div>
    </motion.section>
  );
}

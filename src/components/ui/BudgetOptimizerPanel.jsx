import React from 'react';
import { motion } from 'framer-motion';
import {
  IndianRupee,
  TrendingUp,
  Sparkles,
  Shield,
  Shovel,
  Trees,
  Sliders,
  CheckCircle2
} from 'lucide-react';

export default function BudgetOptimizerPanel({
  budget,
  setBudget,
  totalRechargeLiters,
  fundedInterventionsCount,
  revivedSpringsCount
}) {
  const formattedBudget = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(budget);

  const formattedLiters = new Intl.NumberFormat('en-IN').format(totalRechargeLiters);
  const costPerThousandLiters = ((budget / (totalRechargeLiters || 1)) * 1000).toFixed(2);

  // Staggered entrance animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.aside
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      onWheel={(e) => e.stopPropagation()}
      className="pointer-events-auto w-full max-w-sm rounded-2xl border border-white/20 bg-slate-950/92 p-5 shadow-2xl backdrop-blur-2xl"
    >
      {/* Panel Header */}
      <motion.div variants={itemVariants} className="mb-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-500/40 bg-cyan-500/15 text-cyan-400 shadow-neon-cyan">
              <Sliders className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <h2 className="text-base font-extrabold tracking-tight text-white sm:text-lg leading-tight">
                Budget &amp; Intervention Optimizer
              </h2>
              <p className="text-xs text-slate-300 mt-0.5">
                Optimal Fund Allocation Matrix
              </p>
            </div>
          </div>
          <span className="rounded-full bg-cyan-500/20 px-2.5 py-0.5 text-xs font-semibold text-cyan-300 border border-cyan-500/40 shrink-0 self-start">
            Decision AI
          </span>
        </div>
      </motion.div>

      {/* Budget Slider Input */}
      <motion.div variants={itemVariants} className="mb-4 rounded-xl border border-white/10 bg-white/5 p-4">
        <div className="mb-2 flex items-center justify-between">
          <label htmlFor="budget-range-slider" className="text-xs font-medium text-slate-200 flex items-center gap-1 cursor-pointer">
            <IndianRupee className="h-3.5 w-3.5 text-cyan-300" aria-hidden="true" />
            Available Budget (₹)
          </label>
          <span className="font-mono text-base font-extrabold text-cyan-300">
            {formattedBudget}
          </span>
        </div>

        <input
          id="budget-range-slider"
          type="range"
          min={500000}
          max={4500000}
          step={50000}
          value={budget}
          aria-label="Available Budget in Indian Rupees"
          aria-valuemin={500000}
          aria-valuemax={4500000}
          aria-valuenow={budget}
          aria-valuetext={formattedBudget}
          onChange={(e) => setBudget(Number(e.target.value))}
          className="h-3 w-full cursor-pointer appearance-none rounded-full bg-slate-700/90 accent-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
        />

        <div className="mt-1.5 flex justify-between text-xs font-mono text-slate-300">
          <span>₹5,00,000 (Min)</span>
          <span>₹45,00,000 (Target)</span>
        </div>
      </motion.div>

      {/* Large Glowing Typography for Projected Water Recharge */}
      <motion.div
        variants={itemVariants}
        className="mb-4 relative overflow-hidden rounded-xl border border-cyan-500/40 bg-gradient-to-br from-cyan-950/40 to-slate-900/80 p-4 shadow-neon-cyan"
      >
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-slate-200 flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-cyan-300 animate-spin" aria-hidden="true" />
            Projected Water Recharge
          </span>
          <span className="rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-xs font-bold text-emerald-300 border border-emerald-500/30">
            +{Math.min(320, 110 + Math.round((budget / 4500000) * 190))}% Yield
          </span>
        </div>

        <div className="mt-2 flex items-baseline gap-2">
          <span className="font-mono text-3xl font-extrabold tracking-tight text-white text-glow-cyan">
            {formattedLiters}
          </span>
          <span className="text-sm font-semibold text-cyan-300">Liters / Year</span>
        </div>

        <p className="mt-1 text-xs text-slate-200 leading-tight">
          Simulated groundwater percolation into deep unconfined Himalayan aquifers.
        </p>

        {/* Micro Telemetry Bar */}
        <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-xs">
          <span className="text-slate-200">Unit Cost Efficiency:</span>
          <span className="font-mono font-bold text-emerald-300">
            ₹{costPerThousandLiters} <span className="text-slate-300 font-normal">/ 1k Liters</span>
          </span>
        </div>
      </motion.div>

      {/* Dynamic Funded Structures Breakdown */}
      <motion.div variants={itemVariants} className="space-y-2.5">
        <div className="w-full flex items-center justify-between text-xs font-semibold text-slate-200">
          <span>Active Field Interventions</span>
          <span className="text-cyan-300 font-mono font-bold">
            {fundedInterventionsCount} Structures
          </span>
        </div>

        <div className="w-full grid grid-cols-3 gap-3 text-center text-xs">
          <div className="rounded-xl border border-white/10 bg-slate-800/40 p-3.5 flex flex-col justify-between shadow-sm hover:border-white/20 transition-all">
            <div className="h-8 w-8 rounded-lg bg-white/5 mx-auto flex items-center justify-center my-1 text-emerald-400">
              <Shield className="h-4.5 w-4.5" strokeWidth={1.75} aria-hidden="true" />
            </div>
            <div className="flex items-baseline justify-center gap-1 font-mono text-sm font-bold text-white my-1">
              <span>{Math.min(12, Math.max(1, Math.floor(budget / 350000)))}</span>
              <span className="text-xs text-slate-300 font-normal">units</span>
            </div>
            <div className="text-xs text-slate-300 font-medium">Check Dams</div>
          </div>

          <div className="rounded-xl border border-white/10 bg-slate-800/40 p-3.5 flex flex-col justify-between shadow-sm hover:border-white/20 transition-all">
            <div className="h-8 w-8 rounded-lg bg-white/5 mx-auto flex items-center justify-center my-1 text-cyan-400">
              <Shovel className="h-4.5 w-4.5" strokeWidth={1.75} aria-hidden="true" />
            </div>
            <div className="flex items-baseline justify-center gap-1 font-mono text-sm font-bold text-white my-1">
              <span>{(Math.min(18.5, Math.max(2, (budget / 220000)))).toFixed(1)}</span>
              <span className="text-xs text-slate-300 font-normal">km</span>
            </div>
            <div className="text-xs text-slate-300 font-medium">Contour Trenches</div>
          </div>

          <div className="rounded-xl border border-white/10 bg-slate-800/40 p-3.5 flex flex-col justify-between shadow-sm hover:border-white/20 transition-all">
            <div className="h-8 w-8 rounded-lg bg-white/5 mx-auto flex items-center justify-center my-1 text-emerald-400">
              <Trees className="h-4.5 w-4.5" strokeWidth={1.75} aria-hidden="true" />
            </div>
            <div className="flex items-baseline justify-center gap-1 font-mono text-sm font-bold text-white my-1">
              <span>{Math.min(22, Math.max(3, Math.floor(budget / 180000)))}</span>
              <span className="text-xs text-slate-300 font-normal">ha</span>
            </div>
            <div className="text-xs text-slate-300 font-medium">Afforestation</div>
          </div>
        </div>
      </motion.div>

      {/* Spring Revival Status summary */}
      <motion.div
        variants={itemVariants}
        className="mt-4 rounded-xl border border-emerald-500/20 bg-emerald-950/30 p-3 text-xs flex items-center gap-2"
      >
        <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
        <span className="text-slate-300">Revival Coverage:</span>
        <span className="font-mono font-bold text-emerald-400 ml-auto">
          {revivedSpringsCount} of 5 Watersheds Funded
        </span>
      </motion.div>
    </motion.aside>
  );
}

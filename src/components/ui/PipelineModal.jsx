import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Cpu,
  Database,
  Layers,
  Map,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  RefreshCw,
  Sparkles
} from 'lucide-react';
import { SYSTEM_PIPELINE_STAGES } from '../../data/springData';

export default function PipelineModal({ isOpen, onClose }) {
  const [selectedStageIndex, setSelectedStageIndex] = useState(0);

  if (!isOpen) return null;

  const currentStage = SYSTEM_PIPELINE_STAGES[selectedStageIndex];

  return (
    <AnimatePresence>
      <div
        onWheel={(e) => e.stopPropagation()}
        className="pointer-events-auto fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-3xl border border-white/20 bg-slate-900/90 shadow-2xl backdrop-blur-2xl flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                <Cpu className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">
                  5-Stage AI Decision Support Pipeline
                </h2>
                <p className="text-xs text-slate-400">
                  End-to-End System: From Raw Geospatial Ingestion to Precision Himalayan Action
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="rounded-xl p-2 text-slate-400 hover:bg-white/10 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* 5-Stage Stepper Tabs */}
          <div className="grid grid-cols-5 border-b border-white/10 bg-slate-950/50 p-2 gap-2 text-xs">
            {SYSTEM_PIPELINE_STAGES.map((stg, i) => {
              const isSelected = selectedStageIndex === i;
              return (
                <button
                  key={stg.step}
                  onClick={() => setSelectedStageIndex(i)}
                  className={`flex flex-col items-center justify-center p-2.5 rounded-xl transition-all text-center ${
                    isSelected
                      ? 'bg-cyan-500/20 border border-cyan-400 text-cyan-200 shadow-neon-cyan'
                      : 'hover:bg-white/5 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span className="font-mono text-[10px] font-extrabold uppercase tracking-wider text-cyan-400">
                    Stage 0{stg.step}
                  </span>
                  <span className="font-bold text-xs line-clamp-1 mt-0.5">
                    {stg.title.split('&')[0]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Stage Details Content */}
          <div className="p-6 overflow-y-auto flex-1 space-y-6 custom-scrollbar">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-cyan-500/20 px-2.5 py-0.5 text-xs font-mono font-bold text-cyan-300 border border-cyan-500/30">
                    STAGE {currentStage.step} of 5
                  </span>
                  <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs font-semibold text-slate-300">
                    {currentStage.badge}
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-white mt-2">
                  {currentStage.title}
                </h3>
                <p className="text-sm text-slate-300">{currentStage.subtitle}</p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  disabled={selectedStageIndex === 0}
                  onClick={() => setSelectedStageIndex((prev) => Math.max(0, prev - 1))}
                  className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-xs text-slate-300 disabled:opacity-30 hover:bg-white/10"
                >
                  Previous Stage
                </button>
                <button
                  disabled={selectedStageIndex === SYSTEM_PIPELINE_STAGES.length - 1}
                  onClick={() => setSelectedStageIndex((prev) => Math.min(SYSTEM_PIPELINE_STAGES.length - 1, prev + 1))}
                  className="px-3 py-1.5 rounded-lg border border-cyan-500/30 bg-cyan-500/20 text-xs font-semibold text-cyan-300 disabled:opacity-30 hover:bg-cyan-500/30"
                >
                  Next Stage
                </button>
              </div>
            </div>

            {/* Grid of features / steps in this stage */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {currentStage.items.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 hover:border-cyan-500/30 transition-all"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <CheckCircle className="h-4 w-4 text-cyan-400 flex-shrink-0" />
                    <span className="font-bold text-white text-sm">{item.name}</span>
                  </div>
                  <p className="text-xs text-slate-300 pl-6 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Continuous Learning Loop Banner (from bottom of diagram) */}
            <div className="rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/40 via-cyan-950/30 to-slate-900/60 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                  <RefreshCw className="h-5 w-5 animate-spin text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    Continuous Learning & Improvement Loop
                  </h4>
                  <p className="text-xs text-emerald-200/80">
                    Field Data → Updated Dataset → Improved AI Model → Better Recommendations
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-emerald-300 border border-emerald-500/40 bg-emerald-900/30 px-3 py-1 rounded-lg">
                Self-Optimizing
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Server,
  Layers,
  BrainCircuit,
  Smartphone,
  Database,
  Map,
  Target,
  AlertTriangle,
  RefreshCw,
  Users,
  TrendingUp,
  Lightbulb
} from 'lucide-react';
import { UNIQUE_FEATURES } from '../../data/springData';

export default function ArchitectureModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const featureIcons = {
    BrainCircuit,
    Database,
    Map,
    Target,
    AlertTriangle,
    RefreshCw,
  };

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
          className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-3xl border border-white/20 bg-slate-900/95 shadow-2xl backdrop-blur-2xl flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
            <div>
              <h2 className="text-lg font-bold text-white">
                System Architecture & Unique Innovations
              </h2>
              <p className="text-xs text-slate-400">
                AI-Powered Spring Revival Decision Support System (SIH26240)
              </p>
            </div>
            <button
              onClick={onClose}
              className="rounded-xl p-2 text-slate-400 hover:bg-white/10 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="p-6 overflow-y-auto space-y-6 flex-1 text-xs custom-scrollbar">
            {/* Section B: System Architecture Flow */}
            <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
              <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wider text-cyan-400">
                System Architecture Flow (Blueprint Section B)
              </h3>

              {/* Tier 1: Client Interfaces */}
              <div className="grid grid-cols-4 gap-3 text-center mb-4">
                <div className="rounded-xl border border-cyan-500/30 bg-cyan-950/30 p-3">
                  <div className="font-bold text-white text-xs">Frontend Web GIS</div>
                  <div className="text-[10px] text-cyan-300">WebGL 3D Dashboard</div>
                </div>
                <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/30 p-3">
                  <div className="font-bold text-white text-xs">Mobile App</div>
                  <div className="text-[10px] text-emerald-300">Field Data Collection</div>
                </div>
                <div className="rounded-xl border border-blue-500/30 bg-blue-950/30 p-3">
                  <div className="font-bold text-white text-xs">Backend Services</div>
                  <div className="text-[10px] text-blue-300">Spatial APIs & Pipeline</div>
                </div>
                <div className="rounded-xl border border-purple-500/30 bg-purple-950/30 p-3">
                  <div className="font-bold text-white text-xs">AI/ML Engine</div>
                  <div className="text-[10px] text-purple-300">XGBoost & SHAP Inference</div>
                </div>
              </div>

              {/* Tier 2: Unified Database */}
              <div className="rounded-xl border border-white/15 bg-white/5 p-3 text-center mb-4">
                <div className="font-bold text-white text-sm flex items-center justify-center gap-2">
                  <Database className="h-4 w-4 text-cyan-400" />
                  Spatial + Attribute Database (PostGIS & GeoTIFF Lakehouse)
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  Stores DEMs, rock lithology, lineaments, rainfall grids, spring hydrographs, and field records
                </div>
              </div>

              {/* Tier 3: Processing and Inference */}
              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="rounded-xl border border-indigo-500/30 bg-indigo-950/30 p-3">
                  <div className="font-bold text-white">GIS Processing & Spatial Analysis</div>
                  <div className="text-[10px] text-indigo-300 mt-1">
                    Feature extraction, slope/aspect curvature, lineament density buffers
                  </div>
                </div>
                <div className="rounded-xl border border-teal-500/30 bg-teal-950/30 p-3">
                  <div className="font-bold text-white">AI/ML Models & Explainability</div>
                  <div className="text-[10px] text-teal-300 mt-1">
                    Recharge suitability score, confidence estimation, SHAP explainability
                  </div>
                </div>
              </div>
            </div>

            {/* Key Features (What Makes It Unique?) */}
            <div>
              <h3 className="text-sm font-bold text-white mb-3 uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                <Lightbulb className="h-4 w-4" />
                Key Innovations (What Makes It Unique?)
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {UNIQUE_FEATURES.map((feat, idx) => {
                  const Icon = featureIcons[feat.icon] || BrainCircuit;
                  return (
                    <div
                      key={idx}
                      className="rounded-xl border border-white/10 bg-white/5 p-4 flex flex-col justify-between hover:border-emerald-500/30 transition-all"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <Icon className="h-5 w-5 text-emerald-400" />
                          <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[9px] font-mono font-bold text-emerald-300 border border-emerald-500/30">
                            {feat.badge}
                          </span>
                        </div>
                        <h4 className="font-bold text-white text-xs mb-1">
                          {feat.title}
                        </h4>
                        <p className="text-[11px] text-slate-300 leading-relaxed">
                          {feat.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mission Statement */}
            <div className="text-center py-2 border-t border-white/10 text-cyan-300 italic text-xs">
              “Data-Driven Solutions for Water Secure and Resilient Himalayan Communities”
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

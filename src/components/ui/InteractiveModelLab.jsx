import React, { useState, useMemo, useEffect } from 'react';
import {
  X,
  Sliders,
  Sparkles,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  HelpCircle,
  RotateCcw,
  BarChart2,
  Layers,
  ArrowRight,
  ShieldAlert
} from 'lucide-react';
import { api } from '../../services/api';

export default function InteractiveModelLab({ isOpen, onClose, initialSpring }) {
  // Model input feature states initialized with notebook defaults
  const [slope, setSlope] = useState(initialSpring?.slopeDeg || 24.2);
  const [rainfall, setRainfall] = useState(initialSpring?.rainfallMm || 2520);
  const [clay, setClay] = useState(initialSpring?.clay05cm || 26.5);
  const [distanceDrainage, setDistanceDrainage] = useState(initialSpring?.distanceToDrainage || 340);
  const [flowAcc, setFlowAcc] = useState(initialSpring?.flowAccumulation || 4200);
  const [geology, setGeology] = useState(initialSpring?.geology || 'Daling Schist / Phyllite');
  const [lulc, setLulc] = useState(initialSpring?.lulc || 'Tree Cover');

  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  // Synchronize with active initial spring if opened
  useEffect(() => {
    if (initialSpring) {
      setSlope(initialSpring.slopeDeg || 24.2);
      setRainfall(initialSpring.rainfallMm || 2520);
      setClay(initialSpring.clay05cm || 26.5);
      setDistanceDrainage(initialSpring.distanceToDrainage || 340);
      setFlowAcc(initialSpring.flowAccumulation || 4200);
      setGeology(initialSpring.geology || 'Daling Schist / Phyllite');
      setLulc(initialSpring.lulc || 'Tree Cover');
    }
  }, [initialSpring]);

  // Run live inference whenever sliders change
  useEffect(() => {
    let isCancelled = false;
    async function runInference() {
      setLoading(true);
      const features = {
        slope,
        annualRainfall: rainfall,
        clayPercent: clay,
        distanceToDrainage: distanceDrainage,
        flowAccumulation: flowAcc,
        geology,
        lulc,
      };

      try {
        const result = await api.predictSuitability(features);
        if (!isCancelled && result) {
          setPrediction(result);
        }
      } catch (err) {
        console.warn('Inference error:', err);
      } finally {
        if (!isCancelled) setLoading(false);
      }
    }

    const timer = setTimeout(runInference, 150);
    return () => {
      isCancelled = true;
      clearTimeout(timer);
    };
  }, [slope, rainfall, clay, distanceDrainage, flowAcc, geology, lulc]);

  if (!isOpen) return null;

  // Preset Configurations
  const applyPreset = (preset) => {
    if (preset === 'devithan') {
      setSlope(24.2);
      setRainfall(2520);
      setClay(26.5);
      setDistanceDrainage(340);
      setFlowAcc(4200);
      setGeology('Daling Schist / Phyllite');
      setLulc('Tree Cover');
    } else if (preset === 'steep_ridge') {
      setSlope(38.5);
      setRainfall(2600);
      setClay(18.2);
      setDistanceDrainage(850);
      setFlowAcc(800);
      setGeology('Darjeeling Gneiss');
      setLulc('Tree Cover');
    } else if (preset === 'valley_recharge') {
      setSlope(14.0);
      setRainfall(2750);
      setClay(24.0);
      setDistanceDrainage(120);
      setFlowAcc(18500);
      setGeology('Daling Schist / Phyllite');
      setLulc('Tree Cover');
    } else if (preset === 'critical_low') {
      setSlope(42.0);
      setRainfall(1650);
      setClay(38.0);
      setDistanceDrainage(1400);
      setFlowAcc(250);
      setGeology('Lingtse Granite Gneiss');
      setLulc('Cropland');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in pointer-events-auto select-none">
      <div
        className="relative w-full max-w-4xl max-h-[92vh] rounded-3xl border border-cyan-500/30 bg-slate-950 p-6 shadow-2xl backdrop-blur-2xl text-white flex flex-col justify-between overflow-y-auto custom-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 flex items-center justify-center shadow-neon-cyan">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-black text-white">
                  Interactive AI Model Inference Lab
                </h3>
                <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-mono text-[10px] font-bold border border-cyan-400/40">
                  SIH26240 Notebook Pipeline
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Adjust real hydrogeological parameters to simulate live ML inference and SHAP explainability
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

        {/* Preset Selector Strip */}
        <div className="my-3 flex items-center gap-2 overflow-x-auto custom-scrollbar pb-1 text-xs">
          <span className="text-slate-400 font-bold shrink-0">Presets:</span>
          {[
            { id: 'devithan', label: '⭐ Devithan (SP-001) Baseline' },
            { id: 'valley_recharge', label: '🌊 High Recharge Valley (14° slope)' },
            { id: 'steep_ridge', label: '⚠️ Steep Ridge (38° Gneiss)' },
            { id: 'critical_low', label: '🔴 Critical Drought Stress' },
          ].map((p) => (
            <button
              key={p.id}
              onClick={() => applyPreset(p.id)}
              className="px-3 py-1 rounded-xl bg-slate-900 border border-white/15 hover:border-cyan-400 text-slate-300 hover:text-white transition whitespace-nowrap text-[11px]"
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* Main Grid: Inputs (Left) and Live Model Outputs (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-2">
          {/* Left Column: Feature Controls (7 cols) */}
          <div className="lg:col-span-7 space-y-4 bg-slate-900/60 p-4 rounded-3xl border border-white/10">
            <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
              <span>Geospatial Feature Inputs</span>
            </h4>

            {/* 1. Slope Slider */}
            <div>
              <div className="flex justify-between text-xs font-bold mb-1">
                <span className="text-slate-200">SRTM DEM Slope Angle:</span>
                <span className="font-mono text-cyan-300">{slope.toFixed(1)}°</span>
              </div>
              <input
                type="range"
                min="5"
                max="50"
                step="0.5"
                value={slope}
                onChange={(e) => setSlope(parseFloat(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500">
                <span>5° (Gentle valley)</span>
                <span>24° (Mean)</span>
                <span>50° (Steep cliff)</span>
              </div>
            </div>

            {/* 2. Rainfall Slider */}
            <div>
              <div className="flex justify-between text-xs font-bold mb-1">
                <span className="text-slate-200">IMD 2023 Annual Rainfall:</span>
                <span className="font-mono text-cyan-300">{rainfall} mm</span>
              </div>
              <input
                type="range"
                min="1200"
                max="3400"
                step="50"
                value={rainfall}
                onChange={(e) => setRainfall(parseInt(e.target.value, 10))}
                className="w-full accent-cyan-400 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500">
                <span>1200 mm (Drought)</span>
                <span>2520 mm (Mean)</span>
                <span>3400 mm (Extreme)</span>
              </div>
            </div>

            {/* 3. Soil Clay % */}
            <div>
              <div className="flex justify-between text-xs font-bold mb-1">
                <span className="text-slate-200">SoilGrids Topsoil Clay (0-5cm):</span>
                <span className="font-mono text-cyan-300">{clay.toFixed(1)}%</span>
              </div>
              <input
                type="range"
                min="10"
                max="45"
                step="0.5"
                value={clay}
                onChange={(e) => setClay(parseFloat(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500">
                <span>10% (Sandy loam)</span>
                <span>26% (Optimal loam)</span>
                <span>45% (Heavy clay)</span>
              </div>
            </div>

            {/* 4. Distance to Drainage */}
            <div>
              <div className="flex justify-between text-xs font-bold mb-1">
                <span className="text-slate-200">Distance to Stream/Drainage:</span>
                <span className="font-mono text-cyan-300">{distanceDrainage} m</span>
              </div>
              <input
                type="range"
                min="20"
                max="1800"
                step="20"
                value={distanceDrainage}
                onChange={(e) => setDistanceDrainage(parseInt(e.target.value, 10))}
                className="w-full accent-cyan-400 cursor-pointer"
              />
            </div>

            {/* 5. Geology Dropdown */}
            <div>
              <label className="block text-xs font-bold text-slate-200 mb-1">
                Lithological Unit (Geology):
              </label>
              <select
                value={geology}
                onChange={(e) => setGeology(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-white/20 text-white text-xs focus:border-cyan-400 focus:outline-none"
              >
                <option value="Daling Schist / Phyllite">Daling Schist & Phyllite (High fracture porosity)</option>
                <option value="Darjeeling Gneiss">Darjeeling Gneiss (Competent ridge crystalline)</option>
                <option value="Lingtse Granite Gneiss">Lingtse Granite Gneiss (Low primary porosity)</option>
                <option value="Gondwana Sandstone / Shale">Gondwana Sandstone & Shale (Sedimentary belt)</option>
              </select>
            </div>

            {/* 6. LULC Land Cover */}
            <div>
              <label className="block text-xs font-bold text-slate-200 mb-1">
                ESA WorldCover 2021 LULC:
              </label>
              <select
                value={lulc}
                onChange={(e) => setLulc(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-white/20 text-white text-xs focus:border-cyan-400 focus:outline-none"
              >
                <option value="Tree Cover">Tree Cover / Dense Subtropical Forest</option>
                <option value="Shrubland">Shrubland & Tea Garden Slopes</option>
                <option value="Cropland">Terraced Agricultural Cropland</option>
                <option value="Built-up">Urban / Settlements (Paved Surfaces)</option>
              </select>
            </div>
          </div>

          {/* Right Column: Live Model Output & SHAP Waterfall (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Live Model Prediction Card */}
            {prediction && (
              <div className="p-4 rounded-3xl border border-cyan-500/40 bg-gradient-to-b from-cyan-950/40 to-slate-900/90 shadow-xl space-y-3">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="text-xs font-mono font-bold text-cyan-400">MODEL PREDICTIONS</span>
                  <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-[10px] font-mono">
                    {prediction.confidenceLevel} Confidence
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-center">
                  <div className="p-2.5 rounded-2xl bg-slate-950/80 border border-white/10">
                    <div className="text-[10px] font-bold text-slate-400">Recharge Suitability</div>
                    <div className="text-2xl font-mono font-black text-cyan-300 mt-0.5">
                      {prediction.suitabilityScore}%
                    </div>
                    <span className="text-[10px] font-semibold text-emerald-400">
                      {prediction.suitabilityClass} Suitability
                    </span>
                  </div>

                  <div className="p-2.5 rounded-2xl bg-slate-950/80 border border-white/10">
                    <div className="text-[10px] font-bold text-slate-400">Revival Priority Score</div>
                    <div className="text-2xl font-mono font-black text-amber-400 mt-0.5">
                      {prediction.priorityScore}%
                    </div>
                    <span className="text-[10px] font-semibold text-amber-300">
                      {prediction.priorityClass}
                    </span>
                  </div>
                </div>

                {/* Zone & Intervention Badge */}
                <div className="p-2.5 rounded-2xl bg-slate-950/80 border border-white/10 space-y-1.5 text-xs">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 text-[11px]">Zone Status:</span>
                    <span
                      className={`font-mono font-bold px-2 py-0.5 rounded text-[10px] ${
                        prediction.finalStatus === 'PRIMARY_ZONE'
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/30'
                          : prediction.finalStatus === 'FIELD_VERIFICATION_REQUIRED'
                          ? 'bg-red-500/20 text-red-300 border border-red-400/30'
                          : 'bg-amber-500/20 text-amber-300 border border-amber-400/30'
                      }`}
                    >
                      {prediction.finalStatus}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 text-[11px]">Recommended Work:</span>
                    <span className="font-semibold text-emerald-300 text-[11px]">
                      {prediction.indicativeIntervention}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 text-[11px]">Slope Hazard Risk:</span>
                    <span
                      className={`font-bold text-[11px] ${
                        prediction.riskLevel === 'High' ? 'text-red-400' : 'text-emerald-400'
                      }`}
                    >
                      {prediction.riskLevel} Risk
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Dynamic SHAP Feature Contribution Waterfall Graph */}
            {prediction && prediction.shapDrivers && (
              <div className="p-4 rounded-3xl border border-white/15 bg-slate-900/80 shadow-xl space-y-3">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="text-xs font-mono font-bold text-purple-400 flex items-center gap-1.5">
                    <BarChart2 className="w-4 h-4" />
                    SHAP Feature Contributions
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">Game-Theoretic Impact</span>
                </div>

                <div className="space-y-2 text-xs">
                  {prediction.shapDrivers.map((driver, idx) => {
                    const isPositive = driver.positive;
                    const barWidth = Math.min(100, Math.abs(driver.shapValue) * 350);

                    return (
                      <div key={idx} className="space-y-0.5">
                        <div className="flex justify-between text-[11px]">
                          <span className="text-slate-200 truncate max-w-[180px]">{driver.feature}</span>
                          <span
                            className={`font-mono font-bold ${
                              isPositive ? 'text-emerald-400' : 'text-red-400'
                            }`}
                          >
                            {driver.impact}
                          </span>
                        </div>
                        <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden flex">
                          <div
                            className={`h-full rounded-full transition-all duration-300 ${
                              isPositive ? 'bg-emerald-400' : 'bg-red-400'
                            }`}
                            style={{ width: `${Math.max(8, barWidth)}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer Note */}
        <div className="pt-3 border-t border-white/10 text-[11px] text-slate-400 flex items-center justify-between">
          <span>Formula: Grounded in Cell 8-10 of SIH26240_Spring_Revival_Final.ipynb</span>
          <button
            onClick={() => applyPreset('devithan')}
            className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-semibold"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to Baseline</span>
          </button>
        </div>
      </div>
    </div>
  );
}

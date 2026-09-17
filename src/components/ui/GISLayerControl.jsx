import React from 'react';
import { Layers, Eye, EyeOff, ShieldAlert, Mountain, Compass, Sparkles } from 'lucide-react';

export default function GISLayerControl({ layers, onToggleLayer }) {
  const layerItems = [
    { key: 'dem', label: 'DEM Elevation', fullName: 'DEM Watershed Elevation Contours', icon: Mountain, color: 'text-cyan-400' },
    { key: 'springs', label: 'Spring Nodes', fullName: 'Spring Locations & Hydrological Nodes', icon: Compass, color: 'text-red-400' },
    { key: 'interventions', label: '3D Interventions', fullName: 'Planned 3D Engineering Interventions', icon: Sparkles, color: 'text-emerald-400' },
    { key: 'geology', label: 'Faults & Karst', fullName: 'Geological Faults & Structural Lineaments', icon: Layers, color: 'text-purple-400' },
    { key: 'suitability', label: 'Recharge Zones', fullName: 'Recharge Suitability Overlay Map', icon: Sparkles, color: 'text-emerald-400' },
    { key: 'risk', label: 'Landslide Risk', fullName: 'Landslide Risk Screening Overlay', icon: ShieldAlert, color: 'text-amber-400' },
  ];

  return (
    <div
      onWheel={(e) => e.stopPropagation()}
      className="pointer-events-auto rounded-2xl border border-white/20 bg-slate-950/92 p-4 shadow-2xl backdrop-blur-2xl w-full max-w-md mt-1"
    >
      <div className="mb-3 flex items-center justify-between pb-1.5 border-b border-white/10">
        <span className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
          <Layers className="h-4 w-4 text-cyan-400" strokeWidth={1.75} aria-hidden="true" />
          Spatial GIS Layers
        </span>
        <span className="text-xs font-mono text-cyan-300">Stage 4 Maps</span>
      </div>

      <div className="grid grid-cols-2 gap-2.5">
        {layerItems.map(({ key, label, fullName, icon: Icon, color }) => {
          const isActive = layers[key];
          return (
            <button
              key={key}
              onClick={() => onToggleLayer(key)}
              title={fullName || label}
              aria-label={`Toggle ${fullName || label}`}
              className={`flex items-center justify-between rounded-xl px-3 py-2 text-xs transition-all border ${
                isActive
                  ? 'bg-cyan-500/15 text-white border-cyan-400/50 shadow-sm'
                  : 'bg-slate-800/40 text-slate-200 border-white/10 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-2 truncate mr-1">
                <Icon className={`h-3.5 w-3.5 shrink-0 ${isActive ? color : 'text-slate-400'}`} strokeWidth={1.75} aria-hidden="true" />
                <span className="text-xs font-medium text-left truncate">{label}</span>
              </div>
              {isActive ? (
                <Eye className="h-3.5 w-3.5 text-cyan-400 shrink-0 ml-1" strokeWidth={1.75} aria-hidden="true" />
              ) : (
                <EyeOff className="h-3.5 w-3.5 text-slate-400 shrink-0 ml-1" strokeWidth={1.75} aria-hidden="true" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

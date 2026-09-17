import React, { useState, useMemo, useEffect } from 'react';
import Scene from './components/3d/Scene';
import DashboardUI from './components/DashboardUI';
import { SPRINGS_DATA } from './data/springData';
import { api } from './services/api';

export default function App() {
  const [springs, setSprings] = useState(SPRINGS_DATA);
  const [selectedSpring, setSelectedSpring] = useState(SPRINGS_DATA[0]); // Spring A default
  const [budget, setBudget] = useState(1850000); // Default ₹18.50 Lakhs
  const [backendConnected, setBackendConnected] = useState(false);

  // Load springs from backend on mount
  useEffect(() => {
    async function init() {
      const isHealthy = await api.checkHealth();
      setBackendConnected(isHealthy);
      if (isHealthy) {
        const remoteSprings = await api.getSprings();
        if (remoteSprings && remoteSprings.length > 0) {
          setSprings(remoteSprings);
          setSelectedSpring(remoteSprings[0]);
        }
      }
    }
    init();
  }, []);

  const [gisLayers, setGisLayers] = useState({
    dem: true,
    springs: true,
    interventions: true,
    geology: true,
    suitability: true,
    risk: false,
  });

  const handleToggleLayer = (layerKey) => {
    setGisLayers((prev) => ({
      ...prev,
      [layerKey]: !prev[layerKey],
    }));
  };

  // Dynamic calculations based on allocated budget
  const { totalRechargeLiters, fundedInterventionsCount, revivedSpringsCount } = useMemo(() => {
    // Revived springs count
    const revivedCount = springs.filter((s) => budget >= s.minBudgetRequired).length;

    // Total funded interventions across all springs
    let intCount = 0;
    springs.forEach((s) => {
      s.interventions.forEach((intv) => {
        if (budget >= intv.minBudget) intCount++;
      });
    });

    // Dynamic water recharge calculation based on funded interventions & budget
    const baseRecharge = 1400000;
    const variableRecharge = Math.round((budget / 4500000) * 4450000);
    const total = baseRecharge + variableRecharge;

    return {
      totalRechargeLiters: total,
      fundedInterventionsCount: intCount,
      revivedSpringsCount: revivedCount,
    };
  }, [budget, springs]);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#050814] text-white select-none">
      {/* 1. Deep 3D WebGL Terrain & Spatial Nodes Engine (Background Layer) */}
      <Scene
        springs={springs}
        selectedSpring={selectedSpring}
        onSelectSpring={setSelectedSpring}
        budget={budget}
        gisLayers={gisLayers}
      />

      {/* 2. Glassmorphic Decision Support HUD Overlay (Foreground Layer) */}
      <DashboardUI
        springs={springs}
        selectedSpring={selectedSpring}
        onSelectSpring={setSelectedSpring}
        budget={budget}
        setBudget={setBudget}
        totalRechargeLiters={totalRechargeLiters}
        fundedInterventionsCount={fundedInterventionsCount}
        revivedSpringsCount={revivedSpringsCount}
        gisLayers={gisLayers}
        onToggleLayer={handleToggleLayer}
        backendConnected={backendConnected}
      />
    </div>
  );
}

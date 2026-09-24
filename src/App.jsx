import React, { useState, useMemo, useEffect, useCallback } from 'react';
import DashboardUI from './components/DashboardUI';
import { SPRINGS_DATA } from './data/springData';
import { api } from './services/api';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  const [springs, setSprings] = useState(SPRINGS_DATA);
  const [selectedSpring, setSelectedSpring] = useState(SPRINGS_DATA[0]); // Spring 1 (Devithan) default
  const [budget, setBudget] = useState(12000000); // Default ₹1.20 Crores (funds ~50 springs)
  const [backendConnected, setBackendConnected] = useState(false);
  const [activeView, setActiveView] = useState('maptiler3d'); // 'maptiler3d' | 'globe' | 'googlemap' | 'learning'

  // Load springs from backend on mount if server is active
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

  // Keyboard navigation hotkeys for quick spring traversal
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't intercept if user is typing in an input or textarea
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

      if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        setSelectedSpring((current) => {
          if (!current || !springs.length) return current;
          const idx = springs.findIndex((s) => s.id === current.id);
          const nextIdx = (idx + 1) % springs.length;
          return springs[nextIdx];
        });
      } else if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        setSelectedSpring((current) => {
          if (!current || !springs.length) return current;
          const idx = springs.findIndex((s) => s.id === current.id);
          const prevIdx = idx <= 0 ? springs.length - 1 : idx - 1;
          return springs[prevIdx];
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [springs]);

  // Dynamic calculations based on allocated budget across 100 springs
  const { totalRechargeLiters, fundedInterventionsCount, revivedSpringsCount } = useMemo(() => {
    const revivedCount = springs.filter((s) => budget >= s.minBudgetRequired).length;

    let intCount = 0;
    springs.forEach((s) => {
      s.interventions?.forEach((intv) => {
        if (budget >= intv.minBudget) intCount++;
      });
    });

    // Dynamic water recharge calculation based on funded interventions & budget across 111.0 km² catchment
    const baseRecharge = 2500000;
    const variableRecharge = Math.round((budget / 50000000) * 18500000);
    const total = baseRecharge + variableRecharge;

    return {
      totalRechargeLiters: total,
      fundedInterventionsCount: intCount,
      revivedSpringsCount: revivedCount,
    };
  }, [budget, springs]);

  return (
    <LanguageProvider>
      <div className="relative w-screen h-screen overflow-hidden bg-[#050814] text-white select-none">
        <DashboardUI
          springs={springs}
          selectedSpring={selectedSpring}
          onSelectSpring={setSelectedSpring}
          budget={budget}
          setBudget={setBudget}
          totalRechargeLiters={totalRechargeLiters}
          fundedInterventionsCount={fundedInterventionsCount}
          revivedSpringsCount={revivedSpringsCount}
          backendConnected={backendConnected}
          activeView={activeView}
          setActiveView={setActiveView}
        />
      </div>
    </LanguageProvider>
  );
}

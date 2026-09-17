import React, { useState } from 'react';
import HeaderHUD from './ui/HeaderHUD';
import BudgetOptimizerPanel from './ui/BudgetOptimizerPanel';
import SpringAnalysisPanel from './ui/SpringAnalysisPanel';
import GISLayerControl from './ui/GISLayerControl';
import PipelineModal from './ui/PipelineModal';
import FieldValidationModal from './ui/FieldValidationModal';
import ArchitectureModal from './ui/ArchitectureModal';

export default function DashboardUI({
  springs,
  selectedSpring,
  onSelectSpring,
  budget,
  setBudget,
  totalRechargeLiters,
  fundedInterventionsCount,
  revivedSpringsCount,
  gisLayers,
  onToggleLayer,
  backendConnected,
}) {
  const [activeModal, setActiveModal] = useState(null); // 'pipeline' | 'field' | 'architecture' | null
  const [activeView, setActiveView] = useState('gis');

  return (
    <div className="absolute inset-0 pointer-events-none z-30 flex flex-col justify-between overflow-hidden">
      {/* 1. Top Bar Header Telemetry HUD */}
      <HeaderHUD
        budget={budget}
        totalRechargeLiters={totalRechargeLiters}
        revivedCount={revivedSpringsCount}
        totalSprings={springs.length}
        backendConnected={backendConnected}
        onOpenPipeline={() => setActiveModal('pipeline')}
        onOpenFieldValidation={() => setActiveModal('field')}
        onOpenArchitecture={() => setActiveModal('architecture')}
        activeView={activeView}
        setActiveView={setActiveView}
      />

      {/* 2. Main Floating Panels Area (Scrollable sidebars with 3D canvas interaction preserved) */}
      <main className="flex-1 w-full px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 lg:pt-36 pb-6 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6 pointer-events-auto lg:pointer-events-none overflow-y-auto lg:overflow-hidden custom-scrollbar">
        {/* Left Floating Sidebar: Budget & Intervention Optimizer */}
        <div
          onWheel={(e) => e.stopPropagation()}
          className="pointer-events-auto w-full sm:w-auto flex flex-col gap-4 max-h-none lg:max-h-[calc(100vh-10rem)] overflow-y-visible lg:overflow-y-auto overscroll-contain pr-1 custom-scrollbar shrink-0"
        >
          <BudgetOptimizerPanel
            budget={budget}
            setBudget={setBudget}
            totalRechargeLiters={totalRechargeLiters}
            fundedInterventionsCount={fundedInterventionsCount}
            revivedSpringsCount={revivedSpringsCount}
          />
        </div>

        {/* Right Floating Sidebar: Spring Hydrogeology & AI Analysis + GIS Layers */}
        <div
          onWheel={(e) => e.stopPropagation()}
          className="pointer-events-auto w-full sm:w-auto flex flex-col items-center lg:items-end gap-4 max-h-none lg:max-h-[calc(100vh-10rem)] overflow-y-visible lg:overflow-y-auto overscroll-contain pr-2 pl-1 custom-scrollbar shrink-0"
        >
          <SpringAnalysisPanel
            springs={springs}
            selectedSpring={selectedSpring}
            onSelectSpring={onSelectSpring}
            budget={budget}
            onOpenFieldValidation={() => setActiveModal('field')}
          />

          {/* GIS Layer Control docked right below */}
          <GISLayerControl
            layers={gisLayers}
            onToggleLayer={onToggleLayer}
          />
        </div>
      </main>

      {/* 3. Modals & Drawers */}
      <PipelineModal
        isOpen={activeModal === 'pipeline'}
        onClose={() => setActiveModal(null)}
      />

      <FieldValidationModal
        isOpen={activeModal === 'field'}
        onClose={() => setActiveModal(null)}
        selectedSpring={selectedSpring}
      />

      <ArchitectureModal
        isOpen={activeModal === 'architecture'}
        onClose={() => setActiveModal(null)}
      />
    </div>
  );
}

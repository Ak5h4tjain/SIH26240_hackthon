import React, { useState } from 'react';
import HeaderHUD from './ui/HeaderHUD';
import CitizenReportModal from './ui/CitizenReportModal';
import AICopilotModal from './ui/AICopilotModal';
import InteractiveModelLab from './ui/InteractiveModelLab';
import ClimateScenarioSimulator from './ui/ClimateScenarioSimulator';
import SpringComparisonModal from './ui/SpringComparisonModal';
import GoogleMapExplorer from './map/GoogleMapExplorer';
import WorldGlobeView from './globe/WorldGlobeView';
import MapTiler3DView from './maptiler/MapTiler3DView';
import StudentLearningHub from './education/StudentLearningHub';

export default function DashboardUI({
  springs,
  selectedSpring,
  onSelectSpring,
  budget,
  setBudget,
  totalRechargeLiters,
  fundedInterventionsCount,
  revivedSpringsCount,
  backendConnected,
  activeView = 'maptiler3d',
  setActiveView,
}) {
  const [activeModal, setActiveModal] = useState(null); // 'citizen' | 'copilot' | 'lab' | 'climate' | 'compare' | null

  return (
    <div className="absolute inset-0 pointer-events-none z-30 flex flex-col justify-between overflow-hidden">
      {/* 1. Top Bar Header Telemetry HUD */}
      <HeaderHUD
        budget={budget}
        totalRechargeLiters={totalRechargeLiters}
        revivedCount={revivedSpringsCount}
        totalSprings={springs.length}
        backendConnected={backendConnected}
        onOpenReportModal={() => setActiveModal('citizen')}
        onOpenAICopilot={() => setActiveModal('copilot')}
        onOpenModelLab={() => setActiveModal('lab')}
        onOpenClimateSim={() => setActiveModal('climate')}
        onOpenCompare={() => setActiveModal('compare')}
        activeView={activeView}
        setActiveView={setActiveView}
      />

      {/* 2. Dynamic View Rendering (4 Streamlined Modes) */}
      {activeView === 'maptiler3d' ? (
        /* View 1: MapTiler 3D Mountain Terrain View (Himalayan Pilot) */
        <div className="flex-1 w-full h-full pointer-events-auto">
          <MapTiler3DView
            springs={springs}
            selectedSpring={selectedSpring}
            onSelectSpring={onSelectSpring}
            budget={budget}
            onOpenAICopilot={(sp) => {
              if (sp) onSelectSpring(sp);
              setActiveModal('copilot');
            }}
            onOpenReportModal={(sp) => {
              if (sp) onSelectSpring(sp);
              setActiveModal('citizen');
            }}
            onSwitchToGlobe={() => setActiveView('globe')}
            onSwitchToGoogleMap={() => setActiveView('googlemap')}
          />
        </div>
      ) : activeView === 'globe' ? (
        /* View 2: 3D World Globe Map (Global Scale) */
        <div className="flex-1 w-full h-full pointer-events-auto">
          <WorldGlobeView
            onDiveToDarjeeling={() => setActiveView('maptiler3d')}
            onSwitchToGoogleMap={() => setActiveView('googlemap')}
            onSwitchToBigMap={() => setActiveView('googlemap')}
          />
        </div>
      ) : activeView === 'googlemap' ? (
        /* View 3: Fullscreen Google Maps Explorer (All 100 Springs) */
        <div className="flex-1 w-full h-full pointer-events-auto">
          <GoogleMapExplorer
            springs={springs}
            selectedSpring={selectedSpring}
            onSelectSpring={onSelectSpring}
            budget={budget}
            onSwitchTo3D={() => setActiveView('maptiler3d')}
            onSwitchToGlobe={() => setActiveView('globe')}
            onOpenReportModal={() => setActiveModal('citizen')}
            onOpenAICopilot={(sp) => {
              if (sp) onSelectSpring(sp);
              setActiveModal('copilot');
            }}
          />
        </div>
      ) : (
        /* View 4: Youth & Student Water Discovery Hub */
        <div className="flex-1 w-full h-full pointer-events-auto">
          <StudentLearningHub
            onSwitchToMap={() => setActiveView('googlemap')}
            onSwitchTo3D={() => setActiveView('maptiler3d')}
          />
        </div>
      )}

      {/* 3. Citizen Spring Observation Modal */}
      <CitizenReportModal
        isOpen={activeModal === 'citizen'}
        onClose={() => setActiveModal(null)}
        springs={springs}
        selectedSpring={selectedSpring}
      />

      {/* 4. Advanced Interactive AI & Simulation Modals */}
      <AICopilotModal
        isOpen={activeModal === 'copilot'}
        onClose={() => setActiveModal(null)}
        selectedSpring={selectedSpring}
        onSelectSpring={onSelectSpring}
        onSwitchTo3D={() => {
          setActiveModal(null);
          setActiveView('maptiler3d');
        }}
        onSwitchToBigMap={() => {
          setActiveModal(null);
          setActiveView('googlemap');
        }}
      />

      <InteractiveModelLab
        isOpen={activeModal === 'lab'}
        onClose={() => setActiveModal(null)}
        initialSpring={selectedSpring}
      />

      <ClimateScenarioSimulator
        isOpen={activeModal === 'climate'}
        onClose={() => setActiveModal(null)}
        onSelectSpring={(sp) => {
          onSelectSpring(sp);
          setActiveModal(null);
        }}
      />

      <SpringComparisonModal
        isOpen={activeModal === 'compare'}
        onClose={() => setActiveModal(null)}
        springs={springs}
        initialSpring={selectedSpring}
      />
    </div>
  );
}

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Terrain from './Terrain';
import SpringNode from './SpringNode';
import InterventionNode from './InterventionNode';
import GISOverlays from './GISOverlays';

export default function Scene({
  springs,
  selectedSpring,
  onSelectSpring,
  budget,
  gisLayers,
}) {
  return (
    <div className="fixed inset-0 w-full h-full bg-[#050814] z-0">
      <Canvas
        camera={{ position: [0, 26, 42], fov: 52, near: 0.1, far: 1000 }}
        gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
      >
        {/* Dark void atmospheric depth fog */}
        <fog attach="fog" args={['#050814', 25, 120]} />

        {/* Ambient & Directional Lighting */}
        <ambientLight intensity={0.4} color="#00f5ff" />
        <directionalLight position={[20, 35, 25]} intensity={1.6} color="#ffffff" />
        <pointLight position={[-25, 15, -15]} intensity={2.2} color="#00f5ff" distance={90} />
        <pointLight position={[25, -10, 25]} intensity={1.5} color="#8b5cf6" distance={80} />

        <Suspense fallback={null}>
          {/* Main 3D Terrain */}
          <Terrain
            showContours={gisLayers.dem}
            activeLayer={
              gisLayers.geology ? 'geology' :
              gisLayers.risk ? 'risk' :
              gisLayers.suitability ? 'suitability' : 'default'
            }
          />

          {/* Rotated Spatial Reference Coordinate Space (matches Terrain orientation) */}
          <group rotation={[-Math.PI / 2.3, 0, 0]} position={[0, -5, 0]}>
            {/* 1. Spring Nodes (Dried springs vs Revived springs) */}
            {gisLayers.springs &&
              springs.map((spring) => {
                const isSelected = selectedSpring?.id === spring.id;
                const isRevived = budget >= spring.minBudgetRequired;
                return (
                  <SpringNode
                    key={spring.id}
                    spring={spring}
                    isSelected={isSelected}
                    isRevived={isRevived}
                    onSelect={onSelectSpring}
                  />
                );
              })}

            {/* 2. Interactive Engineering Interventions (Check dams, trenches, afforestation) */}
            {gisLayers.interventions &&
              springs.flatMap((spring) =>
                spring.interventions.map((intervention) => {
                  const isFunded = budget >= intervention.minBudget;
                  return (
                    <InterventionNode
                      key={intervention.id}
                      intervention={intervention}
                      isFunded={isFunded}
                    />
                  );
                })
              )}

            {/* 3. Geological & Risk Spatial Overlays */}
            <GISOverlays
              showLineaments={gisLayers.geology}
              showRiskZones={gisLayers.risk}
              showSuitability={gisLayers.suitability}
            />
          </group>
        </Suspense>

        {/* OrbitControls for user interaction (pan, zoom, rotate) */}
        <OrbitControls
          enableDamping
          dampingFactor={0.06}
          maxPolarAngle={Math.PI / 2.05}
          minDistance={12}
          maxDistance={90}
          target={[0, 0, 0]}
        />
      </Canvas>
    </div>
  );
}

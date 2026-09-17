import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { getTerrainHeight } from '../../utils/terrainMath';

export default function SpringNode({ spring, isSelected, isRevived, onSelect }) {
  const groupRef = useRef();
  const ringRef = useRef();
  const sphereRef = useRef();
  const [hovered, setHovered] = useState(false);

  const { x, y } = spring.coords;

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    const terrainZ = getTerrainHeight(x, y, time * 0.12);

    if (groupRef.current) {
      // Place node right at the terrain elevation
      groupRef.current.position.set(x, y, terrainZ + 0.6);
    }

    // Pulse the outer beacon ring
    if (ringRef.current) {
      const scale = 1 + Math.sin(time * 3 + (spring.suitabilityScore % 5)) * 0.25;
      ringRef.current.scale.set(scale, scale, 1);
      ringRef.current.rotation.z = time * 0.5;
    }

    // Breathing pulse for the spring core
    if (sphereRef.current) {
      const s = 1 + Math.sin(time * 4) * 0.15;
      sphereRef.current.scale.set(s, s, s);
    }
  });

  // State colors: Critical red when dry; Vibrant Emerald/Cyan when revived with interventions!
  const nodeColor = isRevived ? '#10b981' : isSelected ? '#38bdf8' : '#ef4444';
  const emissiveColor = isRevived ? '#059669' : isSelected ? '#0284c7' : '#dc2626';

  return (
    <group ref={groupRef}>
      {/* 3D Pulsing Spring Core Sphere */}
      <mesh
        ref={sphereRef}
        onClick={(e) => {
          e.stopPropagation();
          onSelect(spring);
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={() => {
          setHovered(false);
          document.body.style.cursor = 'auto';
        }}
      >
        <sphereGeometry args={[0.95, 32, 32]} />
        <meshStandardMaterial
          color={nodeColor}
          emissive={emissiveColor}
          emissiveIntensity={hovered || isSelected ? 1.6 : 1.1}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Surface Radar Pulse Ring */}
      <mesh ref={ringRef} position={[0, 0, 0.05]}>
        <ringGeometry args={[1.5, 1.9, 32]} />
        <meshBasicMaterial
          color={nodeColor}
          transparent
          opacity={hovered || isSelected ? 0.9 : 0.45}
          side={2}
        />
      </mesh>

      {/* Vertical Holographic Locator Beam */}
      <mesh position={[0, 0, 4]}>
        <cylinderGeometry args={[0.06, 0.15, 8, 16]} />
        <meshBasicMaterial
          color={nodeColor}
          transparent
          opacity={isSelected ? 0.8 : 0.35}
        />
      </mesh>

      {/* Floating Spatial HUD Badge */}
      <Html
        position={[0, 0, 5]}
        center
        distanceFactor={45}
        zIndexRange={[5, 1]}
        style={{ pointerEvents: 'none' }}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
            onSelect(spring);
          }}
          className={`pointer-events-auto cursor-pointer transition-all duration-300 transform select-none ${
            isSelected
              ? 'scale-110 shadow-lg'
              : 'hover:scale-105 opacity-90 hover:opacity-100'
          }`}
        >
          <div
            className={`px-2.5 py-1 rounded-md text-xs font-mono backdrop-blur-md border ${
              isSelected
                ? 'bg-cyan-950/80 border-cyan-400 text-cyan-400 shadow-[0_0_15px_rgba(0,245,255,0.5)]'
                : isRevived
                ? 'bg-emerald-950/80 border-emerald-400 text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.4)]'
                : 'bg-red-950/80 border-red-500/60 text-red-400 shadow-[0_0_12px_rgba(239,68,68,0.3)]'
            }`}
          >
            <div className="flex items-center gap-1.5 whitespace-nowrap font-bold">
              <span
                className={`w-2 h-2 rounded-full animate-ping ${
                  isRevived ? 'bg-emerald-400' : isSelected ? 'bg-cyan-400' : 'bg-red-400'
                }`}
              />
              <span>{spring.code}</span>
              <span className="opacity-60">|</span>
              <span className="text-xs font-semibold">
                {spring.suitabilityScore}/100
              </span>
            </div>
          </div>
        </div>
      </Html>
    </group>
  );
}

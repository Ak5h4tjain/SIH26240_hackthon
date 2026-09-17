import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { getTerrainHeight } from '../../utils/terrainMath';

export default function GISOverlays({ showLineaments, showRiskZones, showSuitability }) {
  const lineamentRef = useRef();
  const riskRef = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    if (riskRef.current) {
      // Pulsing alert for landslide-prone hazard areas
      const pulse = 0.4 + Math.sin(time * 3) * 0.25;
      riskRef.current.material.opacity = pulse;
    }
  });

  return (
    <group>
      {/* 1. Geological Faults & Lineaments (Stage 1 / Stage 2 Data) */}
      {showLineaments && (
        <group>
          {/* Fault Line 1 passing through high suitability springshed */}
          <mesh position={[-5, 5, 4]} rotation={[0, 0, Math.PI / 3.5]}>
            <boxGeometry args={[45, 0.4, 0.4]} />
            <meshStandardMaterial
              color="#a855f7"
              emissive="#7e22ce"
              emissiveIntensity={2.0}
            />
          </mesh>
          <mesh position={[10, -15, 3]} rotation={[0, 0, -Math.PI / 4]}>
            <boxGeometry args={[35, 0.35, 0.35]} />
            <meshStandardMaterial
              color="#c084fc"
              emissive="#9333ea"
              emissiveIntensity={1.8}
            />
          </mesh>
        </group>
      )}

      {/* 2. Landslide & High Geohazard Risk Zone (Stage 4 Risk Map) */}
      {showRiskZones && (
        <group position={[22, 22, 5]}>
          <mesh ref={riskRef} rotation={[0, 0, Math.PI / 6]}>
            <cylinderGeometry args={[7, 7, 0.6, 6]} />
            <meshStandardMaterial
              color="#ef4444"
              emissive="#b91c1c"
              emissiveIntensity={1.2}
              wireframe={true}
              transparent
              opacity={0.6}
            />
          </mesh>
        </group>
      )}

      {/* 3. High Recharge Suitability Catchment Halos (Stage 4 Suitability Map) */}
      {showSuitability && (
        <group>
          <mesh position={[-14, 12, 1.5]}>
            <cylinderGeometry args={[8, 8, 0.3, 32]} />
            <meshBasicMaterial
              color="#10b981"
              transparent
              opacity={0.2}
            />
          </mesh>
          <mesh position={[-22, -18, 1.8]}>
            <cylinderGeometry args={[11, 11, 0.3, 32]} />
            <meshBasicMaterial
              color="#06b6d4"
              transparent
              opacity={0.22}
            />
          </mesh>
        </group>
      )}
    </group>
  );
}

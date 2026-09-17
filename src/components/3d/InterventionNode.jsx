import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { getTerrainHeight } from '../../utils/terrainMath';

export default function InterventionNode({ intervention, isFunded }) {
  const meshGroupRef = useRef();
  const currentZRef = useRef(-6); // start submerged below terrain

  const { offset, type, height = 2.0 } = intervention;

  useFrame(({ clock }, delta) => {
    if (!meshGroupRef.current) return;

    const time = clock.getElapsedTime() * 0.12;
    const groundZ = getTerrainHeight(offset.x, offset.y, time);

    // Target Z position: if funded, rise up so structure sits on the terrain surface!
    // If not funded, stay submerged below terrain (-10)
    const targetZ = isFunded ? groundZ + height / 2 : groundZ - 6;

    // Smoothly animate the cylinder rising out of the terrain (damped lerp)
    currentZRef.current = THREE.MathUtils.damp(
      currentZRef.current,
      targetZ,
      3.5,
      delta
    );

    meshGroupRef.current.position.set(offset.x, offset.y, currentZRef.current);

    // Subtle gentle rotation to draw eye to active engineering works
    if (isFunded) {
      meshGroupRef.current.rotation.z += delta * 0.2;
    }
  });

  if (!isFunded && currentZRef.current < -5) {
    // Hide completely if buried deep
    return null;
  }

  return (
    <group ref={meshGroupRef}>
      {type === 'Check Dam' ? (
        // Glowing masonry check dam cylinder barrier
        <group>
          <mesh>
            <cylinderGeometry args={[1.2, 1.4, height, 18]} />
            <meshStandardMaterial
              color="#10b981"
              emissive="#059669"
              emissiveIntensity={1.4}
              wireframe={true}
              roughness={0.2}
              metalness={0.9}
            />
          </mesh>
          {/* Glowing water retention pool */}
          <mesh position={[0, 0, height * 0.35]}>
            <cylinderGeometry args={[1.6, 1.6, 0.2, 16]} />
            <meshBasicMaterial color="#00f5ff" transparent opacity={0.65} />
          </mesh>
        </group>
      ) : type === 'Contour Trench' ? (
        // Elongated contour trench geometry
        <mesh rotation={[0, 0, Math.PI / 4]}>
          <boxGeometry args={[3.2, 0.9, height]} />
          <meshStandardMaterial
            color="#06b6d4"
            emissive="#0891b2"
            emissiveIntensity={1.3}
            wireframe={true}
            roughness={0.3}
            metalness={0.8}
          />
        </mesh>
      ) : type === 'Afforestation Area' ? (
        // Stylized glowing eco-canopy tree cluster
        <group>
          <mesh position={[0, 0, height * 0.5]}>
            <coneGeometry args={[1.2, height, 8]} />
            <meshStandardMaterial
              color="#22c55e"
              emissive="#15803d"
              emissiveIntensity={1.2}
              wireframe={true}
            />
          </mesh>
        </group>
      ) : (
        // Default glowing cylinder (Check Dam / Percolation Pit)
        <mesh>
          <cylinderGeometry args={[0.9, 1.1, height, 16]} />
          <meshStandardMaterial
            color="#10b981"
            emissive="#059669"
            emissiveIntensity={1.3}
            wireframe={true}
            roughness={0.3}
          />
        </mesh>
      )}

      {/* Surface Base Energy Ring */}
      <mesh position={[0, 0, -height / 2 + 0.1]}>
        <ringGeometry args={[1.3, 1.6, 24]} />
        <meshBasicMaterial
          color="#34d399"
          transparent
          opacity={0.7}
          side={2}
        />
      </mesh>
    </group>
  );
}

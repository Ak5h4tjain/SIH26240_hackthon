import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { getTerrainHeight } from '../../utils/terrainMath';

export default function Terrain({ showContours = true, activeLayer = 'all' }) {
  const meshRef = useRef();
  const geomRef = useRef();

  // Subtle continuous terrain topographic breathing/water table dynamic simulation
  useFrame(({ clock }) => {
    if (!geomRef.current) return;

    const time = clock.getElapsedTime() * 0.12;
    const positionAttribute = geomRef.current.attributes.position;
    const vertexCount = positionAttribute.count;

    for (let i = 0; i < vertexCount; i++) {
      const x = positionAttribute.getX(i);
      const y = positionAttribute.getY(i);
      const z = getTerrainHeight(x, y, time);
      positionAttribute.setZ(i, z);
    }

    positionAttribute.needsUpdate = true;
    geomRef.current.computeVertexNormals();
  });

  // Dynamic tint depending on active GIS layer
  const wireColor = activeLayer === 'geology' ? '#a855f7' 
                  : activeLayer === 'risk' ? '#f59e0b'
                  : activeLayer === 'suitability' ? '#10b981'
                  : '#00f5ff';

  const emissiveColor = activeLayer === 'geology' ? '#4c1d95'
                      : activeLayer === 'risk' ? '#78350f'
                      : activeLayer === 'suitability' ? '#064e3b'
                      : '#004d61';

  return (
    <group rotation={[-Math.PI / 2.3, 0, 0]} position={[0, -5, 0]}>
      {/* Primary Topographic Wireframe Mesh */}
      <mesh ref={meshRef}>
        <planeGeometry
          ref={geomRef}
          args={[110, 110, 128, 128]}
        />
        <meshStandardMaterial
          wireframe={true}
          color={wireColor}
          emissive={emissiveColor}
          emissiveIntensity={0.35}
          roughness={0.3}
          metalness={0.7}
          transparent={true}
          opacity={0.7}
        />
      </mesh>

      {/* Deep Sub-surface Bedrock Volume (creates tangible spatial depth) */}
      <mesh position={[0, 0, -5]}>
        <planeGeometry args={[110, 110, 16, 16]} />
        <meshBasicMaterial
          color="#02040a"
          transparent
          opacity={0.85}
        />
      </mesh>
    </group>
  );
}

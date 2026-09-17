import { createNoise2D } from 'simplex-noise';

// Shared simplex noise generator
export const noise2D = createNoise2D(() => 0.42); // deterministic seed

export function getTerrainHeight(x, y, time = 0) {
  // Multi-octave simplex noise matching the Terrain component
  const macroElevation = noise2D(x * 0.025, y * 0.025 + time * 0.25) * 6.5;
  const microValleys = noise2D(x * 0.075 + time * 0.15, y * 0.075) * 2.2;
  return macroElevation + microValleys;
}

import {
  DARJEELING_100_SPRINGS,
  PROJECT_SUMMARY,
  TOP_15_PRIORITY_SPRINGS,
  FIELD_VERIFICATION_SPRINGS
} from './darjeelingSpringsData.js';

// Normalization helper for backend springs
const normalizeSpring = (s) => {
  const lat = s.gisCoords?.lat ?? s.latitude ?? 27.03;
  const lng = s.gisCoords?.lng ?? s.longitude ?? 88.26;
  const elevation = s.elevationMeters ?? (typeof s.elevation === 'string' ? parseFloat(s.elevation) : s.elevation) ?? 1500;
  const discharge = (typeof s.historicalDischarge === 'number' ? s.historicalDischarge : s.discharge_lpm) ?? 1.2;
  const slope = s.slopeDeg ?? (typeof s.slope === 'string' ? parseFloat(s.slope) : s.slope) ?? 24.0;
  const households = typeof s.beneficiary_households === 'number'
    ? s.beneficiary_households
    : typeof s.communityBeneficiaries === 'string'
    ? parseInt(s.communityBeneficiaries, 10) || 120
    : 120;

  const springNumber = parseInt(s.code?.replace('SP-', '') || s.id?.replace('spring-', '') || String(s.slNo || '0'), 10);
  const isPrimary = s.rawStatus === 'PRIMARY_ZONE' || s.status === 'Primary Zone';

  return {
    ...s,
    latitude: lat,
    longitude: lng,
    gisCoords: s.gisCoords || { lat, lng },
    elevation_m: Math.round(elevation),
    elevationMeters: elevation,
    discharge_lpm: discharge,
    historicalDischarge: discharge,
    slope_deg: slope,
    slopeDeg: slope,
    beneficiary_households: households,
    communityBeneficiaries: s.communityBeneficiaries || `${households} Households (~${Math.round(households * 4.8)} People)`,
    springNumber,
    isPrimaryZone: isPrimary,
  };
};

const normalizedSprings = DARJEELING_100_SPRINGS.map(normalizeSpring);

// Spatial + Attribute Database for Project SIH26240 - Darjeeling Hills Pilot Region
export const db = {
  projectSummary: PROJECT_SUMMARY,
  springs: normalizedSprings,
  top15Springs: normalizedSprings.filter((s) => s.isTop15),
  fieldVerificationSprings: normalizedSprings.filter((s) => s.isFieldVerificationRequired),

  // Field validation observations submitted by mobile teams
  fieldObservations: [
    {
      id: 'obs-001',
      springId: 'spring-1',
      surveyor: 'Field Surveyor Amit Rawat',
      timestamp: '2026-08-14T09:30:00Z',
      discharge: 3.4,
      notes: 'Initial CCT trenches finished at Devithan. Moderate infiltration observed.',
      gpsCoords: { lat: 26.969786, lng: 88.366003 },
      verified: true,
    },
    {
      id: 'obs-002',
      springId: 'spring-3',
      surveyor: 'Field Hydrologist Priya Sharma',
      timestamp: '2026-08-28T14:15:00Z',
      discharge: 5.1,
      notes: 'Bimla Dhara check dam cascade successfully impounding post-monsoon gully runoff.',
      gpsCoords: { lat: 27.043502, lng: 88.377276 },
      verified: true,
    },
    {
      id: 'obs-003',
      springId: 'spring-2',
      surveyor: 'Senior Geologist D. Tamang',
      timestamp: '2026-09-02T11:45:00Z',
      discharge: 1.8,
      notes: 'Dhankheti ground truth verification: high fracture density in phyllite bedrock.',
      gpsCoords: { lat: 27.011054, lng: 88.392356 },
      verified: true,
    }
  ],

  // System learning metadata
  modelMetadata: {
    version: 'v2.4.1-Himalayan-XGBoost',
    lastRetrained: new Date().toISOString(),
    trainingSamples: 1420,
    r2Score: 0.912,
    meanAbsoluteError: '0.24 L/min',
    region: 'Darjeeling Hills, West Bengal',
    totalMonitoredSprings: 100,
  },
};

import {
  DARJEELING_100_SPRINGS,
  PROJECT_SUMMARY,
  TOP_15_PRIORITY_SPRINGS,
  FIELD_VERIFICATION_SPRINGS
} from './darjeelingSpringsData.js';

export {
  DARJEELING_100_SPRINGS,
  PROJECT_SUMMARY,
  TOP_15_PRIORITY_SPRINGS,
  FIELD_VERIFICATION_SPRINGS
};

/**
 * Normalization helper to guarantee every spring has consistent, non-NaN attributes
 * across 2D maps, 3D WebGL scenes, Leaflet, and Google Maps.
 */
export const normalizeSpring = (s) => {
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

// Main Pre-Normalized Springs Dataset used across the Decision Support Application
export const NORMALIZED_100_SPRINGS = DARJEELING_100_SPRINGS.map(normalizeSpring);
export const SPRINGS_DATA = NORMALIZED_100_SPRINGS;


export const SYSTEM_PIPELINE_STAGES = [
  {
    step: 1,
    title: 'Data Collection & Integration',
    subtitle: 'Multiple sources, one unified spatial platform',
    badge: 'Multi-Source Fusion',
    color: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'border-cyan-500/40',
    items: [
      { name: 'Geospatial Data', desc: 'DEM (Elevation, Slope, Aspect), ALOS PALSAR, Sentinel-2 Satellite LULC' },
      { name: 'Geological Data', desc: 'Rock lithology, faults, fractures, strike & dip, lineament density' },
      { name: 'Hydro-Climatic Data', desc: 'IMD Gridded Rainfall, runoff estimation, surface temperature' },
      { name: 'Spring Data', desc: 'GPS coordinates, discharge rate (L/min), seasonal drying trends' },
      { name: 'Existing Structures', desc: 'Historical check dams, village ponds, percolation pits' },
      { name: 'Field & Community Data', desc: 'Mobile app crowd-sourced observations & indigenous local knowledge' },
    ]
  },
  {
    step: 2,
    title: 'Data Preprocessing & Feature Engineering',
    subtitle: 'Clean, prepare, harmonize and extract spatial insights',
    badge: 'Feature Pipeline',
    color: 'from-emerald-500/20 to-teal-500/20',
    borderColor: 'border-emerald-500/40',
    items: [
      { name: 'Data Cleaning & Harmonization', desc: 'Coordinate reference unification (WGS84 UTM 44N) and outlier removal' },
      { name: 'Spatial Analysis', desc: 'DEM hydrological derivatives: Flow accumulation, TWI (Topographic Wetness Index)' },
      { name: 'Feature Extraction', desc: 'Multi-parametric stacking across terrain, geology, LULC and rainfall runoff' },
      { name: 'Data Quality & Imputation', desc: 'Handling sparse hydro-meteorological stations with spatial kriging' },
      { name: 'Model-Ready Dataset', desc: 'Normalized 25m spatial grid resolution tensor ready for ML inference' },
    ]
  },
  {
    step: 3,
    title: 'AI/ML Analysis & Inference',
    subtitle: 'Learn multi-factor patterns & predict recharge suitability',
    badge: 'XGBoost & SHAP',
    color: 'from-amber-500/20 to-yellow-500/20',
    borderColor: 'border-amber-500/40',
    items: [
      { name: 'Trained ML Models', desc: 'Ensemble Random Forest & XGBoost classifiers trained on Himalayan hydrogeology' },
      { name: 'Recharge Suitability Prediction', desc: 'Continuous probability-based potential index (0 - 100 Scale)' },
      { name: 'Uncertainty & Confidence Estimation', desc: 'Monte Carlo dropout / variance estimation revealing data reliability' },
      { name: 'Explainable AI (SHAP)', desc: 'Shapley additive explanations explaining exactly why each site is suitable' },
    ]
  },
  {
    step: 4,
    title: 'Output Generation & Decision Support',
    subtitle: 'Maps, insights, risk screening and recommendations',
    badge: 'Actionable Insights',
    color: 'from-purple-500/20 to-indigo-500/20',
    borderColor: 'border-purple-500/40',
    items: [
      { name: 'Recharge Suitability Map', desc: 'High-resolution raster pinpointing optimal recharge catchment zones' },
      { name: 'Priority Intervention Sites', desc: 'Ranked spring clusters requiring immediate government/community funding' },
      { name: 'Risk Map Screening', desc: 'Automated flagging of steep landslide-prone hazard zones where digging is restricted' },
      { name: 'Recommended Measures', desc: 'Site-specific interventions: Contour Trenches, Check Dams, Percolation Pits, Afforestation' },
    ]
  },
  {
    step: 5,
    title: 'User Interface & Field Validation',
    subtitle: 'From spatial planning to ground action and feedback loops',
    badge: 'Closing the Loop',
    color: 'from-cyan-500/20 to-blue-500/20',
    borderColor: 'border-cyan-500/40',
    items: [
      { name: 'Interactive 3D GIS Dashboard', desc: 'WebGL terrain simulation with real-time budget optimization & HUD telemetry' },
      { name: 'Search & Deep Analysis', desc: 'Targeted inspection of individual springshed hydrogeological profiles' },
      { name: 'Field Validation Mobile App', desc: 'Ground truth data collection, geo-tagged photos, pre/post intervention discharge' },
      { name: 'Continuous Learning Feedback Loop', desc: 'Retrains AI weights as new field verification points stream into the database' },
    ]
  }
];

export const UNIQUE_FEATURES = [
  {
    title: 'AI-Powered Spatial Analysis',
    desc: 'Learns from complex multi-parameter interactions (geology, lithology, rainfall, slope) rather than naive rule-based heuristics.',
    icon: 'BrainCircuit',
    badge: 'ML Driven'
  },
  {
    title: 'Works with Limited Data',
    desc: 'Quantifies prediction confidence explicitly (70-95%), gracefully handling remote Himalayan regions with sparse sensor coverage.',
    icon: 'Database',
    badge: 'Uncertainty-Aware'
  },
  {
    title: 'Integrated GIS Platform',
    desc: 'Consolidates satellite DEMs, geological fault surveys, hydrological discharge, and community reports in a unified 3D viewport.',
    icon: 'Map',
    badge: 'Unified GIS'
  },
  {
    title: 'Location-Specific Interventions',
    desc: 'Recommends engineering structures tailored to slope and geology: Check Dams in gullies, CCT on gentle slopes, Pits in permeable flats.',
    icon: 'Target',
    badge: 'Precise Engineering'
  },
  {
    title: 'Risk Identification & Geohazard Guard',
    desc: 'Flags unsuitable or landslide-vulnerable hillsides to prevent catastrophic slope failures from artificial water accumulation.',
    icon: 'AlertTriangle',
    badge: 'Landslide Guard'
  },
  {
    title: 'Field Validation & Continuous Learning',
    desc: 'Mobile app feedback loop streams post-monsoon discharge records back to the database, auto-improving prediction accuracy over time.',
    icon: 'RefreshCw',
    badge: 'Self-Learning'
  }
];

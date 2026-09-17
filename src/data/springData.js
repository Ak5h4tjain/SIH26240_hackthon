export const SPRINGS_DATA = [
  {
    id: 'spring-a',
    code: 'SP-01-A',
    name: 'Spring A (Binsar Catchment)',
    subdistrict: 'Almora, Uttarakhand',
    elevation: '1,840 m',
    status: 'Critical',
    suitabilityScore: 87,
    suitabilityTier: 'High',
    confidence: 74,
    coords: { x: -14, y: 12 },
    historicalDischarge: 1.4, // L/min
    projectedDischarge: 6.8, // L/min
    dischargeTrend: [
      { month: 'Jan (Pre)', discharge: 1.4 },
      { month: 'Mar', discharge: 1.2 },
      { month: 'May (Dry)', discharge: 0.6 },
      { month: 'Jul (Intervention)', discharge: 3.1 },
      { month: 'Sep (Post)', discharge: 5.8 },
      { month: 'Nov (Sustained)', discharge: 6.8 },
    ],
    topFactors: [
      { name: 'Geology (Limestone Karst)', contribution: '+28%', positive: true },
      { name: 'High Monsoon Rainfall', contribution: '+22%', positive: true },
      { name: 'Moderate Slope (12°-18°)', contribution: '+19%', positive: true },
      { name: 'Near Structural Lineament', contribution: '+18%', positive: true },
    ],
    recommendedInterventions: [
      { type: 'Contour Trench', count: 12, cost: 240000, icon: 'Shovel' },
      { type: 'Check Dam', count: 2, cost: 300000, icon: 'Shield' },
      { type: 'Afforestation', count: '4 Hectares', cost: 110000, icon: 'Trees' },
    ],
    minBudgetRequired: 650000,
    riskLevel: 'Low (Stable bedrock, negligible slip risk)',
    aquiferType: 'Fractured Karstic Dolomite',
    catchmentArea: '42.8 Hectares',
    communityBeneficiaries: '320 Households (1,450 People)',
    interventions: [
      { id: 'int-a1', type: 'Check Dam', offset: { x: -11, y: 15 }, height: 2.2, minBudget: 500000 },
      { id: 'int-a2', type: 'Contour Trench', offset: { x: -16, y: 10 }, height: 1.4, minBudget: 650000 },
      { id: 'int-a3', type: 'Afforestation Area', offset: { x: -14, y: 18 }, height: 1.8, minBudget: 650000 },
    ]
  },
  {
    id: 'spring-b',
    code: 'SP-02-B',
    name: 'Spring B (Kosi Valley Rim)',
    subdistrict: 'Someshwar, Almora',
    elevation: '1,620 m',
    status: 'Drying Rapidly',
    suitabilityScore: 78,
    suitabilityTier: 'Moderate-High',
    confidence: 81,
    coords: { x: 18, y: -10 },
    historicalDischarge: 0.8,
    projectedDischarge: 5.2,
    dischargeTrend: [
      { month: 'Jan (Pre)', discharge: 0.8 },
      { month: 'Mar', discharge: 0.5 },
      { month: 'May (Dry)', discharge: 0.1 },
      { month: 'Jul (Intervention)', discharge: 2.4 },
      { month: 'Sep (Post)', discharge: 4.6 },
      { month: 'Nov (Sustained)', discharge: 5.2 },
    ],
    topFactors: [
      { name: 'High Infiltration Quartzite', contribution: '+31%', positive: true },
      { name: 'Dense Oak-Rhododendron Canopy', contribution: '+24%', positive: true },
      { name: 'Valley Drainage Depression', contribution: '+15%', positive: true },
      { name: 'Steep Runoff Gradient', contribution: '-12%', positive: false },
    ],
    recommendedInterventions: [
      { type: 'Check Dam Series', count: 3, cost: 450000, icon: 'Shield' },
      { type: 'Percolation Pits', count: 25, cost: 350000, icon: 'Waves' },
      { type: 'Contour Bunding', count: '1.2 km', cost: 400000, icon: 'Layers' },
    ],
    minBudgetRequired: 1200000,
    riskLevel: 'Moderate (Monsoon minor creep zone nearby)',
    aquiferType: 'Weathered Quartzite Fissure',
    catchmentArea: '36.5 Hectares',
    communityBeneficiaries: '210 Households (980 People)',
    interventions: [
      { id: 'int-b1', type: 'Check Dam', offset: { x: 20, y: -8 }, height: 2.4, minBudget: 1000000 },
      { id: 'int-b2', type: 'Percolation Pit', offset: { x: 16, y: -13 }, height: 1.2, minBudget: 1200000 },
    ]
  },
  {
    id: 'spring-c',
    code: 'SP-03-C',
    name: 'Spring C (Almora Dhar)',
    subdistrict: 'Hawalbagh Block',
    elevation: '1,750 m',
    status: 'Critical Drought Alert',
    suitabilityScore: 92,
    suitabilityTier: 'Very High Priority',
    confidence: 89,
    coords: { x: -22, y: -18 },
    historicalDischarge: 2.1,
    projectedDischarge: 9.4,
    dischargeTrend: [
      { month: 'Jan (Pre)', discharge: 2.1 },
      { month: 'Mar', discharge: 1.6 },
      { month: 'May (Dry)', discharge: 0.9 },
      { month: 'Jul (Intervention)', discharge: 4.8 },
      { month: 'Sep (Post)', discharge: 8.2 },
      { month: 'Nov (Sustained)', discharge: 9.4 },
    ],
    topFactors: [
      { name: 'Major Fault Line Intersection', contribution: '+34%', positive: true },
      { name: 'Monsoon Orographic Runoff', contribution: '+26%', positive: true },
      { name: 'High Soil Permeability Index', contribution: '+21%', positive: true },
      { name: 'Low Human Urbanization Impact', contribution: '+11%', positive: true },
    ],
    recommendedInterventions: [
      { type: 'Check Dam Cascades', count: 4, cost: 600000, icon: 'Shield' },
      { type: 'Continuous Contour Trenching', count: '3.5 km', cost: 750000, icon: 'Shovel' },
      { type: 'Catchment Afforestation', count: '6 Hectares', cost: 500000, icon: 'Trees' },
    ],
    minBudgetRequired: 1850000,
    riskLevel: 'Low Risk (Excellent structural stability)',
    aquiferType: 'Unconfined Alluvial & Mica Schist',
    catchmentArea: '68.2 Hectares',
    communityBeneficiaries: '540 Households (2,600 People)',
    interventions: [
      { id: 'int-c1', type: 'Check Dam', offset: { x: -20, y: -16 }, height: 2.6, minBudget: 1500000 },
      { id: 'int-c2', type: 'Contour Trench', offset: { x: -25, y: -21 }, height: 1.5, minBudget: 1850000 },
      { id: 'int-c3', type: 'Percolation Pit', offset: { x: -19, y: -22 }, height: 1.3, minBudget: 1850000 },
    ]
  },
  {
    id: 'spring-d',
    code: 'SP-04-D',
    name: 'Spring D (Ranikhet Escarpment)',
    subdistrict: 'Tarikhet, Almora',
    elevation: '1,960 m',
    status: 'Perennial Degraded',
    suitabilityScore: 64,
    suitabilityTier: 'Moderate',
    confidence: 68,
    coords: { x: 22, y: 22 },
    historicalDischarge: 0.5,
    projectedDischarge: 3.8,
    dischargeTrend: [
      { month: 'Jan (Pre)', discharge: 0.5 },
      { month: 'Mar', discharge: 0.4 },
      { month: 'May (Dry)', discharge: 0.05 },
      { month: 'Jul (Intervention)', discharge: 1.8 },
      { month: 'Sep (Post)', discharge: 3.2 },
      { month: 'Nov (Sustained)', discharge: 3.8 },
    ],
    topFactors: [
      { name: 'Fractured Sandstone Bed', contribution: '+25%', positive: true },
      { name: 'Pine Forest Litter Layer', contribution: '+14%', positive: true },
      { name: 'Steep Slope (>32°)', contribution: '-18%', positive: false },
      { name: 'Deficit Winter Snowmelt', contribution: '-12%', positive: false },
    ],
    recommendedInterventions: [
      { type: 'Percolation Pits', count: 35, cost: 420000, icon: 'Waves' },
      { type: 'Bio-engineering Gully Plugs', count: 18, cost: 380000, icon: 'Shield' },
      { type: 'Broadleaf Mixed Afforestation', count: '5 Hectares', cost: 450000, icon: 'Trees' },
    ],
    minBudgetRequired: 2500000,
    riskLevel: 'Caution: Upper slope prone to monsoon debris flows',
    aquiferType: 'Fractured Sandstone & Siltstone',
    catchmentArea: '29.1 Hectares',
    communityBeneficiaries: '180 Households (750 People)',
    interventions: [
      { id: 'int-d1', type: 'Check Dam', offset: { x: 24, y: 19 }, height: 2.0, minBudget: 2200000 },
      { id: 'int-d2', type: 'Percolation Pit', offset: { x: 19, y: 24 }, height: 1.2, minBudget: 2500000 },
    ]
  },
  {
    id: 'spring-e',
    code: 'SP-05-E',
    name: 'Spring E (Champawat Syncline)',
    subdistrict: 'Lohaghat, Champawat',
    elevation: '1,710 m',
    status: 'Depleted Aquifer',
    suitabilityScore: 84,
    suitabilityTier: 'High Priority',
    confidence: 79,
    coords: { x: 2, y: -24 },
    historicalDischarge: 1.1,
    projectedDischarge: 7.6,
    dischargeTrend: [
      { month: 'Jan (Pre)', discharge: 1.1 },
      { month: 'Mar', discharge: 0.7 },
      { month: 'May (Dry)', discharge: 0.3 },
      { month: 'Jul (Intervention)', discharge: 3.5 },
      { month: 'Sep (Post)', discharge: 6.4 },
      { month: 'Nov (Sustained)', discharge: 7.6 },
    ],
    topFactors: [
      { name: 'Limestone Synclinal Valley', contribution: '+29%', positive: true },
      { name: 'Lineament Density Buffer', contribution: '+23%', positive: true },
      { name: 'Subsurface Perched Aquifer', contribution: '+20%', positive: true },
      { name: 'High Soil Organic Carbon', contribution: '+12%', positive: true },
    ],
    recommendedInterventions: [
      { type: 'Subsurface Dyke & Trench', count: 1, cost: 850000, icon: 'Layers' },
      { type: 'Check Dam Cascade', count: 3, cost: 500000, icon: 'Shield' },
      { type: 'Springshed Protection Fencing', count: '2.5 km', cost: 250000, icon: 'Shield' },
    ],
    minBudgetRequired: 3200000,
    riskLevel: 'Low Risk',
    aquiferType: 'Synclinal Dolomitic Limestone',
    catchmentArea: '52.4 Hectares',
    communityBeneficiaries: '410 Households (1,890 People)',
    interventions: [
      { id: 'int-e1', type: 'Check Dam', offset: { x: 4, y: -22 }, height: 2.5, minBudget: 3000000 },
      { id: 'int-e2', type: 'Contour Trench', offset: { x: 0, y: -27 }, height: 1.6, minBudget: 3200000 },
    ]
  }
];

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

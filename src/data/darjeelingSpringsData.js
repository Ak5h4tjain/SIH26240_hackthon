/**
 * Official Project SIH26240 Darjeeling Springs Master Dataset
 * 100 Field-Surveyed & Model-Derived Springs in Darjeeling Hills, West Bengal
 * Integrated directly from SIH26240_APP_DATA_For_Integration
 */

export const PROJECT_SUMMARY = {
  "project_id": "SIH26240",
  "pilot_region": "Darjeeling Hills, West Bengal",
  "total_springs": 100,
  "primary_zones": 88,
  "lower_confidence_zones": 6,
  "field_verification_required": 6,
  "model_derived_zones": 94,
  "total_zone_area_km2": 111.03929999999998,
  "mean_suitability_score": 58.22393928218672,
  "mean_priority_score": 63.72110494317374,
  "suitability_classes": {
    "Moderate": 78,
    "High": 19,
    "Low": 3
  },
  "risk_levels": {
    "Low": 75,
    "High": 20,
    "Moderate": 5
  },
  "priority_classes": {
    "Higher Priority": 74,
    "Lower Priority": 16,
    "Moderate Priority": 10
  },
  "note": "Recharge suitability and priority are pilot decision-support indices. They are not direct measurements of groundwater recharge probability. Field verification is required for unresolved or site-sensitive locations."
};

export const DARJEELING_100_SPRINGS = [
  {
    "id": "spring-1",
    "slNo": 1,
    "code": "SP-001",
    "name": "Devithan",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "1131 m",
    "elevationMeters": 1130.7,
    "slope": "24.9°",
    "slopeDeg": 24.9,
    "rainfall": "3029 mm",
    "rainfallMm": 3029,
    "lulc": "Tree cover",
    "distanceToDrainage": 124,
    "flowAccumulation": 9,
    "clay05cm": 273,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 87,
    "suitabilityScore": 59,
    "suitabilityScoreFloat": 58.8,
    "suitabilityTier": "Moderate",
    "priorityScore": 74,
    "priorityScoreFloat": 74.1,
    "priorityTier": "Higher Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Site-specific recharge assessment",
    "interventionCategory": "Site-specific Assessment",
    "areaKm2": 0.94,
    "evidenceSupportIndex": 0.825,
    "coords": {
      "x": 13.96,
      "y": 5.99
    },
    "coords3d": {
      "x": 13.96,
      "y": 5.99,
      "z": 7.4
    },
    "gisCoords": {
      "lng": 88.366003,
      "lat": 26.969786
    },
    "historicalDischarge": 0.9,
    "projectedDischarge": 3.7,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 0.9
      },
      {
        "month": "Mar",
        "discharge": 0.7
      },
      {
        "month": "May (Dry)",
        "discharge": 0.3
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 2
      },
      {
        "month": "Sep (Post)",
        "discharge": 3.3
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 3.7
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3029 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (24.9°)",
        "contribution": "+11%",
        "positive": true
      },
      {
        "name": "Drainage Distance (124m)",
        "contribution": "+16%",
        "positive": true
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Staggered Trenching & Pits",
        "count": "2.0 km",
        "cost": 607500,
        "icon": "Shovel"
      },
      {
        "type": "Vegetative Filter Strips",
        "count": "4 Hectares",
        "cost": 405000,
        "icon": "Trees"
      },
      {
        "type": "Check Structure",
        "count": 2,
        "cost": 337500,
        "icon": "Shield"
      }
    ],
    "minBudgetRequired": 1350000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "94.0 Hectares",
    "communityBeneficiaries": "439 Households (2021 People)",
    "interventions": [
      {
        "id": "int-1-1",
        "type": "Contour Trench",
        "offset": {
          "x": 15.76,
          "y": 7.79
        },
        "height": 2.2,
        "minBudget": 945000
      },
      {
        "id": "int-1-2",
        "type": "Percolation Pit",
        "offset": {
          "x": 12.36,
          "y": 8.39
        },
        "height": 1.4,
        "minBudget": 1350000
      }
    ]
  },
  {
    "id": "spring-2",
    "slNo": 2,
    "code": "SP-002",
    "name": "Dhankheti",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Phyllite Basin)",
    "elevation": "1020 m",
    "elevationMeters": 1019.6,
    "slope": "18.8°",
    "slopeDeg": 18.8,
    "rainfall": "4050 mm",
    "rainfallMm": 4050,
    "lulc": "Tree cover",
    "distanceToDrainage": 144,
    "flowAccumulation": 29,
    "clay05cm": 264,
    "geology": "Phyllite",
    "status": "Field Verification Required",
    "rawStatus": "FIELD_VERIFICATION_REQUIRED",
    "confidenceLevel": "Unresolved",
    "confidence": 46,
    "suitabilityScore": 72,
    "suitabilityScoreFloat": 72.3,
    "suitabilityTier": "High",
    "priorityScore": 28,
    "priorityScoreFloat": 28,
    "priorityTier": "Lower Priority",
    "isTop15": false,
    "isFieldVerificationRequired": true,
    "riskLevel": "High",
    "indicativeIntervention": "Field verification before intervention",
    "interventionCategory": "Field Verification",
    "areaKm2": null,
    "evidenceSupportIndex": null,
    "coords": {
      "x": 25.58,
      "y": 19.22
    },
    "coords3d": {
      "x": 25.58,
      "y": 19.22,
      "z": 6.62
    },
    "gisCoords": {
      "lng": 88.392356,
      "lat": 27.011054
    },
    "historicalDischarge": 1.6,
    "projectedDischarge": 7,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 1.6
      },
      {
        "month": "Mar",
        "discharge": 1.2
      },
      {
        "month": "May (Dry)",
        "discharge": 0.6
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 3.5
      },
      {
        "month": "Sep (Post)",
        "discharge": 6.2
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 7
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Phyllite)",
        "contribution": "+21%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (4050 mm/yr)",
        "contribution": "+28%",
        "positive": true
      },
      {
        "name": "Terrain Slope (18.8°)",
        "contribution": "+19%",
        "positive": true
      },
      {
        "name": "Drainage Distance (144m)",
        "contribution": "+16%",
        "positive": true
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Ground Truth Geological Survey",
        "count": "Detailed Hydrogeology",
        "cost": 271250,
        "icon": "ShieldCheck"
      },
      {
        "type": "Pilot Percolation Wells",
        "count": 4,
        "cost": 310000,
        "icon": "Waves"
      },
      {
        "type": "Springshed Demarcation Fencing",
        "count": "1.2 km",
        "cost": 193750,
        "icon": "Shield"
      }
    ],
    "minBudgetRequired": 775000,
    "aquiferType": "Phyllite Himalayan Aquifer",
    "catchmentArea": "38.5 Hectares",
    "communityBeneficiaries": "278 Households (1279 People)",
    "interventions": [
      {
        "id": "int-2-1",
        "type": "Contour Trench",
        "offset": {
          "x": 27.38,
          "y": 21.02
        },
        "height": 2.2,
        "minBudget": 542500
      },
      {
        "id": "int-2-2",
        "type": "Percolation Pit",
        "offset": {
          "x": 23.98,
          "y": 21.62
        },
        "height": 1.4,
        "minBudget": 775000
      }
    ]
  },
  {
    "id": "spring-3",
    "slNo": 3,
    "code": "SP-003",
    "name": "Bimla Dhara",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "1670 m",
    "elevationMeters": 1669.7,
    "slope": "22°",
    "slopeDeg": 22,
    "rainfall": "4050 mm",
    "rainfallMm": 4050,
    "lulc": "Tree cover",
    "distanceToDrainage": 110,
    "flowAccumulation": 2,
    "clay05cm": 282,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 90,
    "suitabilityScore": 73,
    "suitabilityScoreFloat": 73.2,
    "suitabilityTier": "High",
    "priorityScore": 80,
    "priorityScoreFloat": 79.5,
    "priorityTier": "Higher Priority",
    "isTop15": true,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Contour trench / infiltration treatment",
    "interventionCategory": "Contour / Infiltration",
    "areaKm2": 1.044,
    "evidenceSupportIndex": 0.764,
    "coords": {
      "x": 18.93,
      "y": 29.62
    },
    "coords3d": {
      "x": 18.93,
      "y": 29.62,
      "z": 11.18
    },
    "gisCoords": {
      "lng": 88.377276,
      "lat": 27.043502
    },
    "historicalDischarge": 0.8,
    "projectedDischarge": 3.5,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 0.8
      },
      {
        "month": "Mar",
        "discharge": 0.6
      },
      {
        "month": "May (Dry)",
        "discharge": 0.3
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 1.8
      },
      {
        "month": "Sep (Post)",
        "discharge": 3.1
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 3.5
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (4050 mm/yr)",
        "contribution": "+28%",
        "positive": true
      },
      {
        "name": "Terrain Slope (22°)",
        "contribution": "+11%",
        "positive": true
      },
      {
        "name": "Drainage Distance (110m)",
        "contribution": "+16%",
        "positive": true
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Continuous Contour Trench",
        "count": "1800 m",
        "cost": 630000,
        "icon": "Shovel"
      },
      {
        "type": "Percolation Pits",
        "count": 18,
        "cost": 420000,
        "icon": "Waves"
      },
      {
        "type": "Catchment Afforestation",
        "count": "3.5 Hectares",
        "cost": 350000,
        "icon": "Trees"
      }
    ],
    "minBudgetRequired": 1400000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "104.4 Hectares",
    "communityBeneficiaries": "458 Households (2108 People)",
    "interventions": [
      {
        "id": "int-3-1",
        "type": "Contour Trench",
        "offset": {
          "x": 20.73,
          "y": 31.42
        },
        "height": 2.2,
        "minBudget": 980000
      },
      {
        "id": "int-3-2",
        "type": "Percolation Pit",
        "offset": {
          "x": 17.33,
          "y": 32.02
        },
        "height": 1.4,
        "minBudget": 1400000
      }
    ]
  },
  {
    "id": "spring-4",
    "slNo": 4,
    "code": "SP-004",
    "name": "Dak Bangla",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Gneiss Basin)",
    "elevation": "1579 m",
    "elevationMeters": 1578.6,
    "slope": "13.4°",
    "slopeDeg": 13.4,
    "rainfall": "3029 mm",
    "rainfallMm": 3029,
    "lulc": "Tree cover",
    "distanceToDrainage": 28,
    "flowAccumulation": 4,
    "clay05cm": 276,
    "geology": "Gneiss",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 87,
    "suitabilityScore": 56,
    "suitabilityScoreFloat": 55.6,
    "suitabilityTier": "Moderate",
    "priorityScore": 74,
    "priorityScoreFloat": 73.5,
    "priorityTier": "Higher Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Site-specific recharge assessment",
    "interventionCategory": "Site-specific Assessment",
    "areaKm2": 1.876,
    "evidenceSupportIndex": 0.859,
    "coords": {
      "x": 7.86,
      "y": 27.38
    },
    "coords3d": {
      "x": 7.86,
      "y": 27.38,
      "z": 10.54
    },
    "gisCoords": {
      "lng": 88.352172,
      "lat": 27.036528
    },
    "historicalDischarge": 0.9,
    "projectedDischarge": 3.6,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 0.9
      },
      {
        "month": "Mar",
        "discharge": 0.7
      },
      {
        "month": "May (Dry)",
        "discharge": 0.3
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 2
      },
      {
        "month": "Sep (Post)",
        "discharge": 3.2
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 3.6
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Gneiss)",
        "contribution": "+32%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3029 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (13.4°)",
        "contribution": "+19%",
        "positive": true
      },
      {
        "name": "Drainage Distance (28m)",
        "contribution": "+16%",
        "positive": true
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Staggered Trenching & Pits",
        "count": "2.0 km",
        "cost": 596250,
        "icon": "Shovel"
      },
      {
        "type": "Vegetative Filter Strips",
        "count": "4 Hectares",
        "cost": 397500,
        "icon": "Trees"
      },
      {
        "type": "Check Structure",
        "count": 2,
        "cost": 331250,
        "icon": "Shield"
      }
    ],
    "minBudgetRequired": 1325000,
    "aquiferType": "Gneiss Himalayan Aquifer",
    "catchmentArea": "187.6 Hectares",
    "communityBeneficiaries": "437 Households (2011 People)",
    "interventions": [
      {
        "id": "int-4-1",
        "type": "Contour Trench",
        "offset": {
          "x": 9.66,
          "y": 29.18
        },
        "height": 2.2,
        "minBudget": 927500
      },
      {
        "id": "int-4-2",
        "type": "Percolation Pit",
        "offset": {
          "x": 6.26,
          "y": 29.78
        },
        "height": 1.4,
        "minBudget": 1325000
      }
    ]
  },
  {
    "id": "spring-5",
    "slNo": 5,
    "code": "SP-005",
    "name": "Devi Dhara",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "1230 m",
    "elevationMeters": 1230.4,
    "slope": "20.8°",
    "slopeDeg": 20.8,
    "rainfall": "3029 mm",
    "rainfallMm": 3029,
    "lulc": "Tree cover",
    "distanceToDrainage": 144,
    "flowAccumulation": 1,
    "clay05cm": 277,
    "geology": "Schist",
    "status": "Lower Confidence Zone",
    "rawStatus": "LOWER_CONFIDENCE_ZONE",
    "confidenceLevel": "Lower",
    "confidence": 62,
    "suitabilityScore": 54,
    "suitabilityScoreFloat": 54.2,
    "suitabilityTier": "Moderate",
    "priorityScore": 34,
    "priorityScoreFloat": 34.1,
    "priorityTier": "Lower Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "Moderate",
    "indicativeIntervention": "Site-specific recharge assessment",
    "interventionCategory": "Site-specific Assessment",
    "areaKm2": 0.562,
    "evidenceSupportIndex": null,
    "coords": {
      "x": 15.62,
      "y": 36.69
    },
    "coords3d": {
      "x": 15.62,
      "y": 36.69,
      "z": 8.1
    },
    "gisCoords": {
      "lng": 88.369774,
      "lat": 27.065567
    },
    "historicalDischarge": 1.5,
    "projectedDischarge": 6,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 1.5
      },
      {
        "month": "Mar",
        "discharge": 1.1
      },
      {
        "month": "May (Dry)",
        "discharge": 0.5
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 3.3
      },
      {
        "month": "Sep (Post)",
        "discharge": 5.3
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 6
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3029 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (20.8°)",
        "contribution": "+19%",
        "positive": true
      },
      {
        "name": "Drainage Distance (144m)",
        "contribution": "+16%",
        "positive": true
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Staggered Trenching & Pits",
        "count": "2.0 km",
        "cost": 382500,
        "icon": "Shovel"
      },
      {
        "type": "Vegetative Filter Strips",
        "count": "4 Hectares",
        "cost": 255000,
        "icon": "Trees"
      },
      {
        "type": "Check Structure",
        "count": 2,
        "cost": 212500,
        "icon": "Shield"
      }
    ],
    "minBudgetRequired": 850000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "56.2 Hectares",
    "communityBeneficiaries": "299 Households (1377 People)",
    "interventions": [
      {
        "id": "int-5-1",
        "type": "Contour Trench",
        "offset": {
          "x": 17.42,
          "y": 38.49
        },
        "height": 2.2,
        "minBudget": 595000
      },
      {
        "id": "int-5-2",
        "type": "Percolation Pit",
        "offset": {
          "x": 14.02,
          "y": 39.09
        },
        "height": 1.4,
        "minBudget": 850000
      }
    ]
  },
  {
    "id": "spring-6",
    "slNo": 6,
    "code": "SP-006",
    "name": "Manager",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "1107 m",
    "elevationMeters": 1106.8,
    "slope": "18.3°",
    "slopeDeg": 18.3,
    "rainfall": "3029 mm",
    "rainfallMm": 3029,
    "lulc": "Tree cover",
    "distanceToDrainage": 248,
    "flowAccumulation": 10,
    "clay05cm": 291,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 87,
    "suitabilityScore": 57,
    "suitabilityScoreFloat": 56.9,
    "suitabilityTier": "Moderate",
    "priorityScore": 72,
    "priorityScoreFloat": 71.8,
    "priorityTier": "Higher Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Site-specific recharge assessment",
    "interventionCategory": "Site-specific Assessment",
    "areaKm2": 1.562,
    "evidenceSupportIndex": 0.777,
    "coords": {
      "x": 15.68,
      "y": 7.15
    },
    "coords3d": {
      "x": 15.68,
      "y": 7.15,
      "z": 7.23
    },
    "gisCoords": {
      "lng": 88.369895,
      "lat": 26.97341
    },
    "historicalDischarge": 0.9,
    "projectedDischarge": 3.6,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 0.9
      },
      {
        "month": "Mar",
        "discharge": 0.7
      },
      {
        "month": "May (Dry)",
        "discharge": 0.3
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 2
      },
      {
        "month": "Sep (Post)",
        "discharge": 3.2
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 3.6
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3029 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (18.3°)",
        "contribution": "+19%",
        "positive": true
      },
      {
        "name": "Drainage Distance (248m)",
        "contribution": "-10%",
        "positive": false
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Staggered Trenching & Pits",
        "count": "2.0 km",
        "cost": 585000,
        "icon": "Shovel"
      },
      {
        "type": "Vegetative Filter Strips",
        "count": "4 Hectares",
        "cost": 390000,
        "icon": "Trees"
      },
      {
        "type": "Check Structure",
        "count": 2,
        "cost": 325000,
        "icon": "Shield"
      }
    ],
    "minBudgetRequired": 1300000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "156.2 Hectares",
    "communityBeneficiaries": "431 Households (1984 People)",
    "interventions": [
      {
        "id": "int-6-1",
        "type": "Contour Trench",
        "offset": {
          "x": 17.48,
          "y": 8.95
        },
        "height": 2.2,
        "minBudget": 910000
      },
      {
        "id": "int-6-2",
        "type": "Percolation Pit",
        "offset": {
          "x": 14.08,
          "y": 9.55
        },
        "height": 1.4,
        "minBudget": 1300000
      }
    ]
  },
  {
    "id": "spring-7",
    "slNo": 7,
    "code": "SP-007",
    "name": "Nursery",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Gneiss Basin)",
    "elevation": "1611 m",
    "elevationMeters": 1610.6,
    "slope": "13.6°",
    "slopeDeg": 13.6,
    "rainfall": "3029 mm",
    "rainfallMm": 3029,
    "lulc": "Tree cover",
    "distanceToDrainage": 41,
    "flowAccumulation": 3,
    "clay05cm": 277,
    "geology": "Gneiss",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 87,
    "suitabilityScore": 55,
    "suitabilityScoreFloat": 54.9,
    "suitabilityTier": "Moderate",
    "priorityScore": 73,
    "priorityScoreFloat": 73.2,
    "priorityTier": "Higher Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Site-specific recharge assessment",
    "interventionCategory": "Site-specific Assessment",
    "areaKm2": 1.876,
    "evidenceSupportIndex": 0.858,
    "coords": {
      "x": 6.68,
      "y": 26.72
    },
    "coords3d": {
      "x": 6.68,
      "y": 26.72,
      "z": 10.77
    },
    "gisCoords": {
      "lng": 88.349508,
      "lat": 27.034455
    },
    "historicalDischarge": 0.9,
    "projectedDischarge": 3.6,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 0.9
      },
      {
        "month": "Mar",
        "discharge": 0.7
      },
      {
        "month": "May (Dry)",
        "discharge": 0.3
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 2
      },
      {
        "month": "Sep (Post)",
        "discharge": 3.2
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 3.6
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Gneiss)",
        "contribution": "+32%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3029 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (13.6°)",
        "contribution": "+19%",
        "positive": true
      },
      {
        "name": "Drainage Distance (41m)",
        "contribution": "+16%",
        "positive": true
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Staggered Trenching & Pits",
        "count": "2.0 km",
        "cost": 596250,
        "icon": "Shovel"
      },
      {
        "type": "Vegetative Filter Strips",
        "count": "4 Hectares",
        "cost": 397500,
        "icon": "Trees"
      },
      {
        "type": "Check Structure",
        "count": 2,
        "cost": 331250,
        "icon": "Shield"
      }
    ],
    "minBudgetRequired": 1325000,
    "aquiferType": "Gneiss Himalayan Aquifer",
    "catchmentArea": "187.6 Hectares",
    "communityBeneficiaries": "436 Households (2007 People)",
    "interventions": [
      {
        "id": "int-7-1",
        "type": "Contour Trench",
        "offset": {
          "x": 8.48,
          "y": 28.52
        },
        "height": 2.2,
        "minBudget": 927500
      },
      {
        "id": "int-7-2",
        "type": "Percolation Pit",
        "offset": {
          "x": 5.08,
          "y": 29.12
        },
        "height": 1.4,
        "minBudget": 1325000
      }
    ]
  },
  {
    "id": "spring-8",
    "slNo": 8,
    "code": "SP-008",
    "name": "Rai Dhara",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "1387 m",
    "elevationMeters": 1387,
    "slope": "33.4°",
    "slopeDeg": 33.4,
    "rainfall": "4050 mm",
    "rainfallMm": 4050,
    "lulc": "Tree cover",
    "distanceToDrainage": 157,
    "flowAccumulation": 7,
    "clay05cm": 274,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 89,
    "suitabilityScore": 66,
    "suitabilityScoreFloat": 65.8,
    "suitabilityTier": "Moderate",
    "priorityScore": 50,
    "priorityScoreFloat": 49.6,
    "priorityTier": "Moderate Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "High",
    "indicativeIntervention": "Contour trench / staggered trench",
    "interventionCategory": "Contour / Infiltration",
    "areaKm2": 1.025,
    "evidenceSupportIndex": 0.782,
    "coords": {
      "x": 19.66,
      "y": 35.3
    },
    "coords3d": {
      "x": 19.66,
      "y": 35.3,
      "z": 9.2
    },
    "gisCoords": {
      "lng": 88.378927,
      "lat": 27.061223
    },
    "historicalDischarge": 1.3,
    "projectedDischarge": 5.5,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 1.3
      },
      {
        "month": "Mar",
        "discharge": 1
      },
      {
        "month": "May (Dry)",
        "discharge": 0.5
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 2.9
      },
      {
        "month": "Sep (Post)",
        "discharge": 4.8
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 5.5
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (4050 mm/yr)",
        "contribution": "+28%",
        "positive": true
      },
      {
        "name": "Terrain Slope (33.4°)",
        "contribution": "-15%",
        "positive": false
      },
      {
        "name": "Drainage Distance (157m)",
        "contribution": "-10%",
        "positive": false
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Continuous Contour Trench",
        "count": "2700 m",
        "cost": 472500,
        "icon": "Shovel"
      },
      {
        "type": "Percolation Pits",
        "count": 18,
        "cost": 315000,
        "icon": "Waves"
      },
      {
        "type": "Catchment Afforestation",
        "count": "3.5 Hectares",
        "cost": 262500,
        "icon": "Trees"
      }
    ],
    "minBudgetRequired": 1050000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "102.5 Hectares",
    "communityBeneficiaries": "354 Households (1627 People)",
    "interventions": [
      {
        "id": "int-8-1",
        "type": "Contour Trench",
        "offset": {
          "x": 21.46,
          "y": 37.1
        },
        "height": 2.2,
        "minBudget": 735000
      },
      {
        "id": "int-8-2",
        "type": "Percolation Pit",
        "offset": {
          "x": 18.06,
          "y": 37.7
        },
        "height": 1.4,
        "minBudget": 1050000
      }
    ]
  },
  {
    "id": "spring-9",
    "slNo": 9,
    "code": "SP-009",
    "name": "Sampang Dhara",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Gneiss Basin)",
    "elevation": "933 m",
    "elevationMeters": 932.5,
    "slope": "26.1°",
    "slopeDeg": 26.1,
    "rainfall": "4050 mm",
    "rainfallMm": 4050,
    "lulc": "Tree cover",
    "distanceToDrainage": 144,
    "flowAccumulation": 12,
    "clay05cm": 268,
    "geology": "Gneiss",
    "status": "Field Verification Required",
    "rawStatus": "FIELD_VERIFICATION_REQUIRED",
    "confidenceLevel": "Unresolved",
    "confidence": 46,
    "suitabilityScore": 72,
    "suitabilityScoreFloat": 71.6,
    "suitabilityTier": "High",
    "priorityScore": 28,
    "priorityScoreFloat": 27.8,
    "priorityTier": "Lower Priority",
    "isTop15": false,
    "isFieldVerificationRequired": true,
    "riskLevel": "High",
    "indicativeIntervention": "Field verification before intervention",
    "interventionCategory": "Field Verification",
    "areaKm2": null,
    "evidenceSupportIndex": null,
    "coords": {
      "x": 31.08,
      "y": 30.07
    },
    "coords3d": {
      "x": 31.08,
      "y": 30.07,
      "z": 6.01
    },
    "gisCoords": {
      "lng": 88.404815,
      "lat": 27.044927
    },
    "historicalDischarge": 1.6,
    "projectedDischarge": 7,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 1.6
      },
      {
        "month": "Mar",
        "discharge": 1.2
      },
      {
        "month": "May (Dry)",
        "discharge": 0.6
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 3.5
      },
      {
        "month": "Sep (Post)",
        "discharge": 6.2
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 7
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Gneiss)",
        "contribution": "+32%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (4050 mm/yr)",
        "contribution": "+28%",
        "positive": true
      },
      {
        "name": "Terrain Slope (26.1°)",
        "contribution": "+11%",
        "positive": true
      },
      {
        "name": "Drainage Distance (144m)",
        "contribution": "+16%",
        "positive": true
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Ground Truth Geological Survey",
        "count": "Detailed Hydrogeology",
        "cost": 271250,
        "icon": "ShieldCheck"
      },
      {
        "type": "Pilot Percolation Wells",
        "count": 4,
        "cost": 310000,
        "icon": "Waves"
      },
      {
        "type": "Springshed Demarcation Fencing",
        "count": "1.2 km",
        "cost": 193750,
        "icon": "Shield"
      }
    ],
    "minBudgetRequired": 775000,
    "aquiferType": "Gneiss Himalayan Aquifer",
    "catchmentArea": "38.5 Hectares",
    "communityBeneficiaries": "277 Households (1276 People)",
    "interventions": [
      {
        "id": "int-9-1",
        "type": "Contour Trench",
        "offset": {
          "x": 32.88,
          "y": 31.87
        },
        "height": 2.2,
        "minBudget": 542500
      },
      {
        "id": "int-9-2",
        "type": "Percolation Pit",
        "offset": {
          "x": 29.48,
          "y": 32.47
        },
        "height": 1.4,
        "minBudget": 775000
      }
    ]
  },
  {
    "id": "spring-10",
    "slNo": 10,
    "code": "SP-010",
    "name": "Singh",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "1076 m",
    "elevationMeters": 1075.8,
    "slope": "17.3°",
    "slopeDeg": 17.3,
    "rainfall": "3029 mm",
    "rainfallMm": 3029,
    "lulc": "Tree cover",
    "distanceToDrainage": 68,
    "flowAccumulation": 3,
    "clay05cm": 277,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 87,
    "suitabilityScore": 58,
    "suitabilityScoreFloat": 57.5,
    "suitabilityTier": "Moderate",
    "priorityScore": 73,
    "priorityScoreFloat": 73.1,
    "priorityTier": "Higher Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Site-specific recharge assessment",
    "interventionCategory": "Site-specific Assessment",
    "areaKm2": 1.681,
    "evidenceSupportIndex": 0.811,
    "coords": {
      "x": 14.76,
      "y": 7.5
    },
    "coords3d": {
      "x": 14.76,
      "y": 7.5,
      "z": 7.01
    },
    "gisCoords": {
      "lng": 88.367814,
      "lat": 26.974497
    },
    "historicalDischarge": 0.9,
    "projectedDischarge": 3.7,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 0.9
      },
      {
        "month": "Mar",
        "discharge": 0.7
      },
      {
        "month": "May (Dry)",
        "discharge": 0.3
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 2
      },
      {
        "month": "Sep (Post)",
        "discharge": 3.3
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 3.7
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3029 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (17.3°)",
        "contribution": "+19%",
        "positive": true
      },
      {
        "name": "Drainage Distance (68m)",
        "contribution": "+16%",
        "positive": true
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Staggered Trenching & Pits",
        "count": "2.0 km",
        "cost": 596250,
        "icon": "Shovel"
      },
      {
        "type": "Vegetative Filter Strips",
        "count": "4 Hectares",
        "cost": 397500,
        "icon": "Trees"
      },
      {
        "type": "Check Structure",
        "count": 2,
        "cost": 331250,
        "icon": "Shield"
      }
    ],
    "minBudgetRequired": 1325000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "168.1 Hectares",
    "communityBeneficiaries": "436 Households (2005 People)",
    "interventions": [
      {
        "id": "int-10-1",
        "type": "Contour Trench",
        "offset": {
          "x": 16.56,
          "y": 9.3
        },
        "height": 2.2,
        "minBudget": 927500
      },
      {
        "id": "int-10-2",
        "type": "Percolation Pit",
        "offset": {
          "x": 13.16,
          "y": 9.9
        },
        "height": 1.4,
        "minBudget": 1325000
      }
    ]
  },
  {
    "id": "spring-11",
    "slNo": 11,
    "code": "SP-011",
    "name": "Swimming Pool Dhara",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Phyllite Basin)",
    "elevation": "1016 m",
    "elevationMeters": 1016.3,
    "slope": "27.7°",
    "slopeDeg": 27.7,
    "rainfall": "4050 mm",
    "rainfallMm": 4050,
    "lulc": "Tree cover",
    "distanceToDrainage": 290,
    "flowAccumulation": 13,
    "clay05cm": 251,
    "geology": "Phyllite",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 88,
    "suitabilityScore": 62,
    "suitabilityScoreFloat": 61.7,
    "suitabilityTier": "Moderate",
    "priorityScore": 71,
    "priorityScoreFloat": 71,
    "priorityTier": "Higher Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Site-specific recharge assessment",
    "interventionCategory": "Site-specific Assessment",
    "areaKm2": 0.34,
    "evidenceSupportIndex": 0.672,
    "coords": {
      "x": 32.52,
      "y": 27.61
    },
    "coords3d": {
      "x": 32.52,
      "y": 27.61,
      "z": 6.6
    },
    "gisCoords": {
      "lng": 88.408086,
      "lat": 27.03723
    },
    "historicalDischarge": 0.9,
    "projectedDischarge": 3.7,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 0.9
      },
      {
        "month": "Mar",
        "discharge": 0.7
      },
      {
        "month": "May (Dry)",
        "discharge": 0.3
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 2
      },
      {
        "month": "Sep (Post)",
        "discharge": 3.3
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 3.7
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Phyllite)",
        "contribution": "+21%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (4050 mm/yr)",
        "contribution": "+28%",
        "positive": true
      },
      {
        "name": "Terrain Slope (27.7°)",
        "contribution": "+11%",
        "positive": true
      },
      {
        "name": "Drainage Distance (290m)",
        "contribution": "-10%",
        "positive": false
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Staggered Trenching & Pits",
        "count": "2.0 km",
        "cost": 585000,
        "icon": "Shovel"
      },
      {
        "type": "Vegetative Filter Strips",
        "count": "4 Hectares",
        "cost": 390000,
        "icon": "Trees"
      },
      {
        "type": "Check Structure",
        "count": 2,
        "cost": 325000,
        "icon": "Shield"
      }
    ],
    "minBudgetRequired": 1300000,
    "aquiferType": "Phyllite Himalayan Aquifer",
    "catchmentArea": "34.0 Hectares",
    "communityBeneficiaries": "429 Households (1971 People)",
    "interventions": [
      {
        "id": "int-11-1",
        "type": "Contour Trench",
        "offset": {
          "x": 34.32,
          "y": 29.41
        },
        "height": 2.2,
        "minBudget": 910000
      },
      {
        "id": "int-11-2",
        "type": "Percolation Pit",
        "offset": {
          "x": 30.92,
          "y": 30.01
        },
        "height": 1.4,
        "minBudget": 1300000
      }
    ]
  },
  {
    "id": "spring-12",
    "slNo": 12,
    "code": "SP-012",
    "name": "SM dhara",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "797 m",
    "elevationMeters": 796.7,
    "slope": "15.3°",
    "slopeDeg": 15.3,
    "rainfall": "4050 mm",
    "rainfallMm": 4050,
    "lulc": "Tree cover",
    "distanceToDrainage": 194,
    "flowAccumulation": 67,
    "clay05cm": 257,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 89,
    "suitabilityScore": 71,
    "suitabilityScoreFloat": 71.4,
    "suitabilityTier": "High",
    "priorityScore": 78,
    "priorityScoreFloat": 77.8,
    "priorityTier": "Higher Priority",
    "isTop15": true,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Contour trench / infiltration treatment",
    "interventionCategory": "Contour / Infiltration",
    "areaKm2": 1.186,
    "evidenceSupportIndex": 0.734,
    "coords": {
      "x": 25.58,
      "y": 8.6
    },
    "coords3d": {
      "x": 25.58,
      "y": 8.6,
      "z": 5.06
    },
    "gisCoords": {
      "lng": 88.392346,
      "lat": 26.977935
    },
    "historicalDischarge": 0.8,
    "projectedDischarge": 3.5,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 0.8
      },
      {
        "month": "Mar",
        "discharge": 0.6
      },
      {
        "month": "May (Dry)",
        "discharge": 0.3
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 1.8
      },
      {
        "month": "Sep (Post)",
        "discharge": 3.1
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 3.5
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (4050 mm/yr)",
        "contribution": "+28%",
        "positive": true
      },
      {
        "name": "Terrain Slope (15.3°)",
        "contribution": "+19%",
        "positive": true
      },
      {
        "name": "Drainage Distance (194m)",
        "contribution": "-10%",
        "positive": false
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Continuous Contour Trench",
        "count": "1200 m",
        "cost": 618750,
        "icon": "Shovel"
      },
      {
        "type": "Percolation Pits",
        "count": 18,
        "cost": 412500,
        "icon": "Waves"
      },
      {
        "type": "Catchment Afforestation",
        "count": "3.5 Hectares",
        "cost": 343750,
        "icon": "Trees"
      }
    ],
    "minBudgetRequired": 1375000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "118.6 Hectares",
    "communityBeneficiaries": "452 Households (2081 People)",
    "interventions": [
      {
        "id": "int-12-1",
        "type": "Contour Trench",
        "offset": {
          "x": 27.38,
          "y": 10.4
        },
        "height": 2.2,
        "minBudget": 962500
      },
      {
        "id": "int-12-2",
        "type": "Percolation Pit",
        "offset": {
          "x": 23.98,
          "y": 11
        },
        "height": 1.4,
        "minBudget": 1375000
      }
    ]
  },
  {
    "id": "spring-13",
    "slNo": 13,
    "code": "SP-013",
    "name": "Singhdhap",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Gneiss Basin)",
    "elevation": "1632 m",
    "elevationMeters": 1631.6,
    "slope": "15.1°",
    "slopeDeg": 15.1,
    "rainfall": "3029 mm",
    "rainfallMm": 3029,
    "lulc": "Tree cover",
    "distanceToDrainage": 55,
    "flowAccumulation": 5,
    "clay05cm": 283,
    "geology": "Gneiss",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 87,
    "suitabilityScore": 59,
    "suitabilityScoreFloat": 58.7,
    "suitabilityTier": "Moderate",
    "priorityScore": 75,
    "priorityScoreFloat": 75.1,
    "priorityTier": "Higher Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Site-specific recharge assessment",
    "interventionCategory": "Site-specific Assessment",
    "areaKm2": 1.799,
    "evidenceSupportIndex": 0.859,
    "coords": {
      "x": 6.16,
      "y": 26.68
    },
    "coords3d": {
      "x": 6.16,
      "y": 26.68,
      "z": 10.91
    },
    "gisCoords": {
      "lng": 88.348315,
      "lat": 27.034334
    },
    "historicalDischarge": 0.9,
    "projectedDischarge": 3.7,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 0.9
      },
      {
        "month": "Mar",
        "discharge": 0.7
      },
      {
        "month": "May (Dry)",
        "discharge": 0.3
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 2
      },
      {
        "month": "Sep (Post)",
        "discharge": 3.3
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 3.7
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Gneiss)",
        "contribution": "+32%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3029 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (15.1°)",
        "contribution": "+19%",
        "positive": true
      },
      {
        "name": "Drainage Distance (55m)",
        "contribution": "+16%",
        "positive": true
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Staggered Trenching & Pits",
        "count": "2.0 km",
        "cost": 607500,
        "icon": "Shovel"
      },
      {
        "type": "Vegetative Filter Strips",
        "count": "4 Hectares",
        "cost": 405000,
        "icon": "Trees"
      },
      {
        "type": "Check Structure",
        "count": 2,
        "cost": 337500,
        "icon": "Shield"
      }
    ],
    "minBudgetRequired": 1350000,
    "aquiferType": "Gneiss Himalayan Aquifer",
    "catchmentArea": "179.9 Hectares",
    "communityBeneficiaries": "443 Households (2037 People)",
    "interventions": [
      {
        "id": "int-13-1",
        "type": "Contour Trench",
        "offset": {
          "x": 7.96,
          "y": 28.48
        },
        "height": 2.2,
        "minBudget": 945000
      },
      {
        "id": "int-13-2",
        "type": "Percolation Pit",
        "offset": {
          "x": 4.56,
          "y": 29.08
        },
        "height": 1.4,
        "minBudget": 1350000
      }
    ]
  },
  {
    "id": "spring-14",
    "slNo": 14,
    "code": "SP-014",
    "name": "Kanchan Dhara",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "1331 m",
    "elevationMeters": 1331.3,
    "slope": "18.8°",
    "slopeDeg": 18.8,
    "rainfall": "3029 mm",
    "rainfallMm": 3029,
    "lulc": "Tree cover",
    "distanceToDrainage": 28,
    "flowAccumulation": 1,
    "clay05cm": 270,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 87,
    "suitabilityScore": 56,
    "suitabilityScoreFloat": 55.9,
    "suitabilityTier": "Moderate",
    "priorityScore": 74,
    "priorityScoreFloat": 73.6,
    "priorityTier": "Higher Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Site-specific recharge assessment",
    "interventionCategory": "Site-specific Assessment",
    "areaKm2": 1.954,
    "evidenceSupportIndex": 0.856,
    "coords": {
      "x": 13.65,
      "y": 36.45
    },
    "coords3d": {
      "x": 13.65,
      "y": 36.45,
      "z": 8.81
    },
    "gisCoords": {
      "lng": 88.365293,
      "lat": 27.064836
    },
    "historicalDischarge": 0.9,
    "projectedDischarge": 3.6,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 0.9
      },
      {
        "month": "Mar",
        "discharge": 0.7
      },
      {
        "month": "May (Dry)",
        "discharge": 0.3
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 2
      },
      {
        "month": "Sep (Post)",
        "discharge": 3.2
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 3.6
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3029 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (18.8°)",
        "contribution": "+19%",
        "positive": true
      },
      {
        "name": "Drainage Distance (28m)",
        "contribution": "+16%",
        "positive": true
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Staggered Trenching & Pits",
        "count": "2.0 km",
        "cost": 596250,
        "icon": "Shovel"
      },
      {
        "type": "Vegetative Filter Strips",
        "count": "4 Hectares",
        "cost": 397500,
        "icon": "Trees"
      },
      {
        "type": "Check Structure",
        "count": 2,
        "cost": 331250,
        "icon": "Shield"
      }
    ],
    "minBudgetRequired": 1325000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "195.4 Hectares",
    "communityBeneficiaries": "438 Households (2013 People)",
    "interventions": [
      {
        "id": "int-14-1",
        "type": "Contour Trench",
        "offset": {
          "x": 15.45,
          "y": 38.25
        },
        "height": 2.2,
        "minBudget": 927500
      },
      {
        "id": "int-14-2",
        "type": "Percolation Pit",
        "offset": {
          "x": 12.05,
          "y": 38.85
        },
        "height": 1.4,
        "minBudget": 1325000
      }
    ]
  },
  {
    "id": "spring-15",
    "slNo": 15,
    "code": "SP-015",
    "name": "Bas Ghari Dhara",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Phyllite Basin)",
    "elevation": "933 m",
    "elevationMeters": 932.5,
    "slope": "26.1°",
    "slopeDeg": 26.1,
    "rainfall": "4050 mm",
    "rainfallMm": 4050,
    "lulc": "Tree cover",
    "distanceToDrainage": 144,
    "flowAccumulation": 12,
    "clay05cm": 268,
    "geology": "Phyllite",
    "status": "Field Verification Required",
    "rawStatus": "FIELD_VERIFICATION_REQUIRED",
    "confidenceLevel": "Unresolved",
    "confidence": 46,
    "suitabilityScore": 71,
    "suitabilityScoreFloat": 70.6,
    "suitabilityTier": "High",
    "priorityScore": 28,
    "priorityScoreFloat": 27.5,
    "priorityTier": "Lower Priority",
    "isTop15": false,
    "isFieldVerificationRequired": true,
    "riskLevel": "High",
    "indicativeIntervention": "Field verification before intervention",
    "interventionCategory": "Field Verification",
    "areaKm2": null,
    "evidenceSupportIndex": null,
    "coords": {
      "x": 31.08,
      "y": 30.07
    },
    "coords3d": {
      "x": 31.08,
      "y": 30.07,
      "z": 6.01
    },
    "gisCoords": {
      "lng": 88.404815,
      "lat": 27.044927
    },
    "historicalDischarge": 1.6,
    "projectedDischarge": 7,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 1.6
      },
      {
        "month": "Mar",
        "discharge": 1.2
      },
      {
        "month": "May (Dry)",
        "discharge": 0.6
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 3.5
      },
      {
        "month": "Sep (Post)",
        "discharge": 6.2
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 7
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Phyllite)",
        "contribution": "+21%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (4050 mm/yr)",
        "contribution": "+28%",
        "positive": true
      },
      {
        "name": "Terrain Slope (26.1°)",
        "contribution": "+11%",
        "positive": true
      },
      {
        "name": "Drainage Distance (144m)",
        "contribution": "+16%",
        "positive": true
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Ground Truth Geological Survey",
        "count": "Detailed Hydrogeology",
        "cost": 271250,
        "icon": "ShieldCheck"
      },
      {
        "type": "Pilot Percolation Wells",
        "count": 4,
        "cost": 310000,
        "icon": "Waves"
      },
      {
        "type": "Springshed Demarcation Fencing",
        "count": "1.2 km",
        "cost": 193750,
        "icon": "Shield"
      }
    ],
    "minBudgetRequired": 775000,
    "aquiferType": "Phyllite Himalayan Aquifer",
    "catchmentArea": "38.5 Hectares",
    "communityBeneficiaries": "276 Households (1271 People)",
    "interventions": [
      {
        "id": "int-15-1",
        "type": "Contour Trench",
        "offset": {
          "x": 32.88,
          "y": 31.87
        },
        "height": 2.2,
        "minBudget": 542500
      },
      {
        "id": "int-15-2",
        "type": "Percolation Pit",
        "offset": {
          "x": 29.48,
          "y": 32.47
        },
        "height": 1.4,
        "minBudget": 775000
      }
    ]
  },
  {
    "id": "spring-16",
    "slNo": 16,
    "code": "SP-016",
    "name": "Dhobi Dhara",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "902 m",
    "elevationMeters": 902.1,
    "slope": "18.4°",
    "slopeDeg": 18.4,
    "rainfall": "3029 mm",
    "rainfallMm": 3029,
    "lulc": "Tree cover",
    "distanceToDrainage": 28,
    "flowAccumulation": 38,
    "clay05cm": 255,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 88,
    "suitabilityScore": 63,
    "suitabilityScoreFloat": 62.6,
    "suitabilityTier": "Moderate",
    "priorityScore": 71,
    "priorityScoreFloat": 71.2,
    "priorityTier": "Higher Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Site-specific recharge assessment",
    "interventionCategory": "Site-specific Assessment",
    "areaKm2": 0.603,
    "evidenceSupportIndex": 0.664,
    "coords": {
      "x": 8.19,
      "y": -16.98
    },
    "coords3d": {
      "x": 8.19,
      "y": -16.98,
      "z": 5.8
    },
    "gisCoords": {
      "lng": 88.35293,
      "lat": 26.898091
    },
    "historicalDischarge": 0.9,
    "projectedDischarge": 3.8,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 0.9
      },
      {
        "month": "Mar",
        "discharge": 0.7
      },
      {
        "month": "May (Dry)",
        "discharge": 0.3
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 2
      },
      {
        "month": "Sep (Post)",
        "discharge": 3.3
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 3.8
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3029 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (18.4°)",
        "contribution": "+19%",
        "positive": true
      },
      {
        "name": "Drainage Distance (28m)",
        "contribution": "+16%",
        "positive": true
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Staggered Trenching & Pits",
        "count": "2.0 km",
        "cost": 585000,
        "icon": "Shovel"
      },
      {
        "type": "Vegetative Filter Strips",
        "count": "4 Hectares",
        "cost": 390000,
        "icon": "Trees"
      },
      {
        "type": "Check Structure",
        "count": 2,
        "cost": 325000,
        "icon": "Shield"
      }
    ],
    "minBudgetRequired": 1300000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "60.3 Hectares",
    "communityBeneficiaries": "429 Households (1974 People)",
    "interventions": [
      {
        "id": "int-16-1",
        "type": "Contour Trench",
        "offset": {
          "x": 9.99,
          "y": -15.18
        },
        "height": 2.2,
        "minBudget": 910000
      },
      {
        "id": "int-16-2",
        "type": "Percolation Pit",
        "offset": {
          "x": 6.59,
          "y": -14.58
        },
        "height": 1.4,
        "minBudget": 1300000
      }
    ]
  },
  {
    "id": "spring-17",
    "slNo": 17,
    "code": "SP-017",
    "name": "Dokan Dhara",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Phyllite Basin)",
    "elevation": "1171 m",
    "elevationMeters": 1171.4,
    "slope": "27.7°",
    "slopeDeg": 27.7,
    "rainfall": "4050 mm",
    "rainfallMm": 4050,
    "lulc": "Tree cover",
    "distanceToDrainage": 290,
    "flowAccumulation": 13,
    "clay05cm": 251,
    "geology": "Phyllite",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 88,
    "suitabilityScore": 62,
    "suitabilityScoreFloat": 61.7,
    "suitabilityTier": "Moderate",
    "priorityScore": 71,
    "priorityScoreFloat": 71.4,
    "priorityTier": "Higher Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Site-specific recharge assessment",
    "interventionCategory": "Site-specific Assessment",
    "areaKm2": 0.15,
    "evidenceSupportIndex": 0.686,
    "coords": {
      "x": 32.51,
      "y": 27.57
    },
    "coords3d": {
      "x": 32.51,
      "y": 27.57,
      "z": 7.69
    },
    "gisCoords": {
      "lng": 88.40805,
      "lat": 27.0371
    },
    "historicalDischarge": 0.9,
    "projectedDischarge": 3.7,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 0.9
      },
      {
        "month": "Mar",
        "discharge": 0.7
      },
      {
        "month": "May (Dry)",
        "discharge": 0.3
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 2
      },
      {
        "month": "Sep (Post)",
        "discharge": 3.3
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 3.7
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Phyllite)",
        "contribution": "+21%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (4050 mm/yr)",
        "contribution": "+28%",
        "positive": true
      },
      {
        "name": "Terrain Slope (27.7°)",
        "contribution": "+11%",
        "positive": true
      },
      {
        "name": "Drainage Distance (290m)",
        "contribution": "-10%",
        "positive": false
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Staggered Trenching & Pits",
        "count": "2.0 km",
        "cost": 585000,
        "icon": "Shovel"
      },
      {
        "type": "Vegetative Filter Strips",
        "count": "4 Hectares",
        "cost": 390000,
        "icon": "Trees"
      },
      {
        "type": "Check Structure",
        "count": 2,
        "cost": 325000,
        "icon": "Shield"
      }
    ],
    "minBudgetRequired": 1300000,
    "aquiferType": "Phyllite Himalayan Aquifer",
    "catchmentArea": "15.0 Hectares",
    "communityBeneficiaries": "430 Households (1978 People)",
    "interventions": [
      {
        "id": "int-17-1",
        "type": "Contour Trench",
        "offset": {
          "x": 34.31,
          "y": 29.37
        },
        "height": 2.2,
        "minBudget": 910000
      },
      {
        "id": "int-17-2",
        "type": "Percolation Pit",
        "offset": {
          "x": 30.91,
          "y": 29.97
        },
        "height": 1.4,
        "minBudget": 1300000
      }
    ]
  },
  {
    "id": "spring-18",
    "slNo": 18,
    "code": "SP-018",
    "name": "Spring 18",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "1954 m",
    "elevationMeters": 1954,
    "slope": "11.3°",
    "slopeDeg": 11.3,
    "rainfall": "3029 mm",
    "rainfallMm": 3029,
    "lulc": "Tree cover",
    "distanceToDrainage": 108,
    "flowAccumulation": 7,
    "clay05cm": 268,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 86,
    "suitabilityScore": 51,
    "suitabilityScoreFloat": 50.9,
    "suitabilityTier": "Moderate",
    "priorityScore": 67,
    "priorityScoreFloat": 67.3,
    "priorityTier": "Higher Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Site-specific recharge assessment",
    "interventionCategory": "Site-specific Assessment",
    "areaKm2": 1.31,
    "evidenceSupportIndex": 0.728,
    "coords": {
      "x": -16.18,
      "y": -15.82
    },
    "coords3d": {
      "x": -16.18,
      "y": -15.82,
      "z": 13.18
    },
    "gisCoords": {
      "lng": 88.297685,
      "lat": 26.901733
    },
    "historicalDischarge": 1,
    "projectedDischarge": 3.9,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 1
      },
      {
        "month": "Mar",
        "discharge": 0.8
      },
      {
        "month": "May (Dry)",
        "discharge": 0.3
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 2.2
      },
      {
        "month": "Sep (Post)",
        "discharge": 3.4
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 3.9
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3029 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (11.3°)",
        "contribution": "+19%",
        "positive": true
      },
      {
        "name": "Drainage Distance (108m)",
        "contribution": "+16%",
        "positive": true
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Staggered Trenching & Pits",
        "count": "2.0 km",
        "cost": 562500,
        "icon": "Shovel"
      },
      {
        "type": "Vegetative Filter Strips",
        "count": "4 Hectares",
        "cost": 375000,
        "icon": "Trees"
      },
      {
        "type": "Check Structure",
        "count": 2,
        "cost": 312500,
        "icon": "Shield"
      }
    ],
    "minBudgetRequired": 1250000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "131.0 Hectares",
    "communityBeneficiaries": "416 Households (1912 People)",
    "interventions": [
      {
        "id": "int-18-1",
        "type": "Contour Trench",
        "offset": {
          "x": -14.38,
          "y": -14.02
        },
        "height": 2.2,
        "minBudget": 875000
      },
      {
        "id": "int-18-2",
        "type": "Percolation Pit",
        "offset": {
          "x": -17.78,
          "y": -13.42
        },
        "height": 1.4,
        "minBudget": 1250000
      }
    ]
  },
  {
    "id": "spring-19",
    "slNo": 19,
    "code": "SP-019",
    "name": "Ghathay",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "1176 m",
    "elevationMeters": 1175.6,
    "slope": "20.5°",
    "slopeDeg": 20.5,
    "rainfall": "3029 mm",
    "rainfallMm": 3029,
    "lulc": "Tree cover",
    "distanceToDrainage": 188,
    "flowAccumulation": 5,
    "clay05cm": 239,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 86,
    "suitabilityScore": 50,
    "suitabilityScoreFloat": 49.5,
    "suitabilityTier": "Moderate",
    "priorityScore": 70,
    "priorityScoreFloat": 69.5,
    "priorityTier": "Higher Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Site-specific recharge assessment",
    "interventionCategory": "Site-specific Assessment",
    "areaKm2": 0.297,
    "evidenceSupportIndex": 0.827,
    "coords": {
      "x": 13.18,
      "y": 4.97
    },
    "coords3d": {
      "x": 13.18,
      "y": 4.97,
      "z": 7.71
    },
    "gisCoords": {
      "lng": 88.364237,
      "lat": 26.966598
    },
    "historicalDischarge": 1,
    "projectedDischarge": 3.9,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 1
      },
      {
        "month": "Mar",
        "discharge": 0.8
      },
      {
        "month": "May (Dry)",
        "discharge": 0.3
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 2.2
      },
      {
        "month": "Sep (Post)",
        "discharge": 3.4
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 3.9
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3029 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (20.5°)",
        "contribution": "+19%",
        "positive": true
      },
      {
        "name": "Drainage Distance (188m)",
        "contribution": "-10%",
        "positive": false
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Staggered Trenching & Pits",
        "count": "2.0 km",
        "cost": 573750,
        "icon": "Shovel"
      },
      {
        "type": "Vegetative Filter Strips",
        "count": "4 Hectares",
        "cost": 382500,
        "icon": "Trees"
      },
      {
        "type": "Check Structure",
        "count": 2,
        "cost": 318750,
        "icon": "Shield"
      }
    ],
    "minBudgetRequired": 1275000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "29.7 Hectares",
    "communityBeneficiaries": "423 Households (1947 People)",
    "interventions": [
      {
        "id": "int-19-1",
        "type": "Contour Trench",
        "offset": {
          "x": 14.98,
          "y": 6.77
        },
        "height": 2.2,
        "minBudget": 892500
      },
      {
        "id": "int-19-2",
        "type": "Percolation Pit",
        "offset": {
          "x": 11.58,
          "y": 7.37
        },
        "height": 1.4,
        "minBudget": 1275000
      }
    ]
  },
  {
    "id": "spring-20",
    "slNo": 20,
    "code": "SP-020",
    "name": "ndir Dhara",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "1949 m",
    "elevationMeters": 1948.5,
    "slope": "9.7°",
    "slopeDeg": 9.7,
    "rainfall": "3029 mm",
    "rainfallMm": 3029,
    "lulc": "Tree cover",
    "distanceToDrainage": 83,
    "flowAccumulation": 4,
    "clay05cm": 272,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 86,
    "suitabilityScore": 50,
    "suitabilityScoreFloat": 49.9,
    "suitabilityTier": "Moderate",
    "priorityScore": 65,
    "priorityScoreFloat": 64.7,
    "priorityTier": "Higher Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Site-specific recharge assessment",
    "interventionCategory": "Site-specific Assessment",
    "areaKm2": 2.053,
    "evidenceSupportIndex": 0.659,
    "coords": {
      "x": -16.17,
      "y": -16.31
    },
    "coords3d": {
      "x": -16.17,
      "y": -16.31,
      "z": 13.14
    },
    "gisCoords": {
      "lng": 88.297706,
      "lat": 26.90018
    },
    "historicalDischarge": 1,
    "projectedDischarge": 3.9,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 1
      },
      {
        "month": "Mar",
        "discharge": 0.8
      },
      {
        "month": "May (Dry)",
        "discharge": 0.3
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 2.2
      },
      {
        "month": "Sep (Post)",
        "discharge": 3.4
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 3.9
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3029 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (9.7°)",
        "contribution": "+19%",
        "positive": true
      },
      {
        "name": "Drainage Distance (83m)",
        "contribution": "+16%",
        "positive": true
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Staggered Trenching & Pits",
        "count": "2.0 km",
        "cost": 551250,
        "icon": "Shovel"
      },
      {
        "type": "Vegetative Filter Strips",
        "count": "4 Hectares",
        "cost": 367500,
        "icon": "Trees"
      },
      {
        "type": "Check Structure",
        "count": 2,
        "cost": 306250,
        "icon": "Shield"
      }
    ],
    "minBudgetRequired": 1225000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "205.3 Hectares",
    "communityBeneficiaries": "406 Households (1870 People)",
    "interventions": [
      {
        "id": "int-20-1",
        "type": "Contour Trench",
        "offset": {
          "x": -14.37,
          "y": -14.51
        },
        "height": 2.2,
        "minBudget": 857500
      },
      {
        "id": "int-20-2",
        "type": "Percolation Pit",
        "offset": {
          "x": -17.77,
          "y": -13.91
        },
        "height": 1.4,
        "minBudget": 1225000
      }
    ]
  },
  {
    "id": "spring-21",
    "slNo": 21,
    "code": "SP-021",
    "name": "Spring 21",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "1523 m",
    "elevationMeters": 1522.7,
    "slope": "28.6°",
    "slopeDeg": 28.6,
    "rainfall": "3029 mm",
    "rainfallMm": 3029,
    "lulc": "Tree cover",
    "distanceToDrainage": 55,
    "flowAccumulation": 5,
    "clay05cm": 272,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 87,
    "suitabilityScore": 57,
    "suitabilityScoreFloat": 57.2,
    "suitabilityTier": "Moderate",
    "priorityScore": 73,
    "priorityScoreFloat": 73.1,
    "priorityTier": "Higher Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Site-specific recharge assessment",
    "interventionCategory": "Site-specific Assessment",
    "areaKm2": 0.88,
    "evidenceSupportIndex": 0.818,
    "coords": {
      "x": 15.08,
      "y": 34.59
    },
    "coords3d": {
      "x": 15.08,
      "y": 34.59,
      "z": 10.15
    },
    "gisCoords": {
      "lng": 88.368548,
      "lat": 27.059032
    },
    "historicalDischarge": 0.9,
    "projectedDischarge": 3.7,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 0.9
      },
      {
        "month": "Mar",
        "discharge": 0.7
      },
      {
        "month": "May (Dry)",
        "discharge": 0.3
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 2
      },
      {
        "month": "Sep (Post)",
        "discharge": 3.3
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 3.7
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3029 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (28.6°)",
        "contribution": "-15%",
        "positive": false
      },
      {
        "name": "Drainage Distance (55m)",
        "contribution": "+16%",
        "positive": true
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Staggered Trenching & Pits",
        "count": "2.0 km",
        "cost": 596250,
        "icon": "Shovel"
      },
      {
        "type": "Vegetative Filter Strips",
        "count": "4 Hectares",
        "cost": 397500,
        "icon": "Trees"
      },
      {
        "type": "Check Structure",
        "count": 2,
        "cost": 331250,
        "icon": "Shield"
      }
    ],
    "minBudgetRequired": 1325000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "88.0 Hectares",
    "communityBeneficiaries": "436 Households (2005 People)",
    "interventions": [
      {
        "id": "int-21-1",
        "type": "Contour Trench",
        "offset": {
          "x": 16.88,
          "y": 36.39
        },
        "height": 2.2,
        "minBudget": 927500
      },
      {
        "id": "int-21-2",
        "type": "Percolation Pit",
        "offset": {
          "x": 13.48,
          "y": 36.99
        },
        "height": 1.4,
        "minBudget": 1325000
      }
    ]
  },
  {
    "id": "spring-22",
    "slNo": 22,
    "code": "SP-022",
    "name": "Noryang Dhara",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "1520 m",
    "elevationMeters": 1520.4,
    "slope": "23°",
    "slopeDeg": 23,
    "rainfall": "4050 mm",
    "rainfallMm": 4050,
    "lulc": "Tree cover",
    "distanceToDrainage": 83,
    "flowAccumulation": 55,
    "clay05cm": 302,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 92,
    "suitabilityScore": 85,
    "suitabilityScoreFloat": 84.7,
    "suitabilityTier": "High",
    "priorityScore": 86,
    "priorityScoreFloat": 85.9,
    "priorityTier": "Higher Priority",
    "isTop15": true,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Drainage-line recharge / small check structure",
    "interventionCategory": "Drainage-line Recharge",
    "areaKm2": 0.414,
    "evidenceSupportIndex": 0.784,
    "coords": {
      "x": 20.08,
      "y": 32.69
    },
    "coords3d": {
      "x": 20.08,
      "y": 32.69,
      "z": 10.13
    },
    "gisCoords": {
      "lng": 88.379887,
      "lat": 27.053083
    },
    "historicalDischarge": 0.7,
    "projectedDischarge": 3.3,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 0.7
      },
      {
        "month": "Mar",
        "discharge": 0.5
      },
      {
        "month": "May (Dry)",
        "discharge": 0.2
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 1.5
      },
      {
        "month": "Sep (Post)",
        "discharge": 2.9
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 3.3
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (4050 mm/yr)",
        "contribution": "+28%",
        "positive": true
      },
      {
        "name": "Terrain Slope (23°)",
        "contribution": "+11%",
        "positive": true
      },
      {
        "name": "Drainage Distance (83m)",
        "contribution": "+16%",
        "positive": true
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Check Dam Cascade",
        "count": 3,
        "cost": 737500,
        "icon": "Shield"
      },
      {
        "type": "Gully Plugs (Loose Boulder)",
        "count": 12,
        "cost": 368750,
        "icon": "Layers"
      },
      {
        "type": "Infiltration Trench",
        "count": "1.5 km",
        "cost": 368750,
        "icon": "Shovel"
      }
    ],
    "minBudgetRequired": 1475000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "41.4 Hectares",
    "communityBeneficiaries": "481 Households (2211 People)",
    "interventions": [
      {
        "id": "int-22-1",
        "type": "Check Dam",
        "offset": {
          "x": 21.88,
          "y": 34.49
        },
        "height": 2.2,
        "minBudget": 1032500
      },
      {
        "id": "int-22-2",
        "type": "Percolation Pit",
        "offset": {
          "x": 18.48,
          "y": 35.09
        },
        "height": 1.4,
        "minBudget": 1475000
      }
    ]
  },
  {
    "id": "spring-23",
    "slNo": 23,
    "code": "SP-023",
    "name": "Pangrey Khola Dhara",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "1184 m",
    "elevationMeters": 1184.3,
    "slope": "28.1°",
    "slopeDeg": 28.1,
    "rainfall": "3029 mm",
    "rainfallMm": 3029,
    "lulc": "Tree cover",
    "distanceToDrainage": 120,
    "flowAccumulation": 1127,
    "clay05cm": 254,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 90,
    "suitabilityScore": 73,
    "suitabilityScoreFloat": 72.9,
    "suitabilityTier": "High",
    "priorityScore": 80,
    "priorityScoreFloat": 79.7,
    "priorityTier": "Higher Priority",
    "isTop15": true,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Drainage-line recharge / small check structure",
    "interventionCategory": "Drainage-line Recharge",
    "areaKm2": 0.814,
    "evidenceSupportIndex": 0.775,
    "coords": {
      "x": 4.45,
      "y": -14.84
    },
    "coords3d": {
      "x": 4.45,
      "y": -14.84,
      "z": 7.78
    },
    "gisCoords": {
      "lng": 88.344451,
      "lat": 26.904779
    },
    "historicalDischarge": 0.8,
    "projectedDischarge": 3.5,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 0.8
      },
      {
        "month": "Mar",
        "discharge": 0.6
      },
      {
        "month": "May (Dry)",
        "discharge": 0.3
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 1.8
      },
      {
        "month": "Sep (Post)",
        "discharge": 3.1
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 3.5
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3029 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (28.1°)",
        "contribution": "-15%",
        "positive": false
      },
      {
        "name": "Drainage Distance (120m)",
        "contribution": "+16%",
        "positive": true
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Check Dam Cascade",
        "count": 3,
        "cost": 700000,
        "icon": "Shield"
      },
      {
        "type": "Gully Plugs (Loose Boulder)",
        "count": 12,
        "cost": 350000,
        "icon": "Layers"
      },
      {
        "type": "Infiltration Trench",
        "count": "1.5 km",
        "cost": 350000,
        "icon": "Shovel"
      }
    ],
    "minBudgetRequired": 1400000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "81.4 Hectares",
    "communityBeneficiaries": "459 Households (2111 People)",
    "interventions": [
      {
        "id": "int-23-1",
        "type": "Check Dam",
        "offset": {
          "x": 6.25,
          "y": -13.04
        },
        "height": 2.2,
        "minBudget": 980000
      },
      {
        "id": "int-23-2",
        "type": "Percolation Pit",
        "offset": {
          "x": 2.85,
          "y": -12.44
        },
        "height": 1.4,
        "minBudget": 1400000
      }
    ]
  },
  {
    "id": "spring-24",
    "slNo": 24,
    "code": "SP-024",
    "name": "Pani Kuwa",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "1720 m",
    "elevationMeters": 1719.6,
    "slope": "27°",
    "slopeDeg": 27,
    "rainfall": "3029 mm",
    "rainfallMm": 3029,
    "lulc": "Tree cover",
    "distanceToDrainage": 327,
    "flowAccumulation": 10,
    "clay05cm": 267,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 86,
    "suitabilityScore": 49,
    "suitabilityScoreFloat": 49.1,
    "suitabilityTier": "Moderate",
    "priorityScore": 64,
    "priorityScoreFloat": 63.5,
    "priorityTier": "Higher Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Site-specific recharge assessment",
    "interventionCategory": "Site-specific Assessment",
    "areaKm2": 0.795,
    "evidenceSupportIndex": 0.633,
    "coords": {
      "x": 3.37,
      "y": -10.37
    },
    "coords3d": {
      "x": 3.37,
      "y": -10.37,
      "z": 11.53
    },
    "gisCoords": {
      "lng": 88.341995,
      "lat": 26.918735
    },
    "historicalDischarge": 1,
    "projectedDischarge": 3.9,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 1
      },
      {
        "month": "Mar",
        "discharge": 0.8
      },
      {
        "month": "May (Dry)",
        "discharge": 0.3
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 2.2
      },
      {
        "month": "Sep (Post)",
        "discharge": 3.4
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 3.9
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3029 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (27°)",
        "contribution": "+11%",
        "positive": true
      },
      {
        "name": "Drainage Distance (327m)",
        "contribution": "-10%",
        "positive": false
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Staggered Trenching & Pits",
        "count": "2.0 km",
        "cost": 540000,
        "icon": "Shovel"
      },
      {
        "type": "Vegetative Filter Strips",
        "count": "4 Hectares",
        "cost": 360000,
        "icon": "Trees"
      },
      {
        "type": "Check Structure",
        "count": 2,
        "cost": 300000,
        "icon": "Shield"
      }
    ],
    "minBudgetRequired": 1200000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "79.5 Hectares",
    "communityBeneficiaries": "402 Households (1850 People)",
    "interventions": [
      {
        "id": "int-24-1",
        "type": "Contour Trench",
        "offset": {
          "x": 5.17,
          "y": -8.57
        },
        "height": 2.2,
        "minBudget": 840000
      },
      {
        "id": "int-24-2",
        "type": "Percolation Pit",
        "offset": {
          "x": 1.77,
          "y": -7.97
        },
        "height": 1.4,
        "minBudget": 1200000
      }
    ]
  },
  {
    "id": "spring-25",
    "slNo": 25,
    "code": "SP-025",
    "name": "Simana Dhara",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "1503 m",
    "elevationMeters": 1503.4,
    "slope": "14.2°",
    "slopeDeg": 14.2,
    "rainfall": "3029 mm",
    "rainfallMm": 3029,
    "lulc": "Tree cover",
    "distanceToDrainage": 120,
    "flowAccumulation": 106,
    "clay05cm": 277,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 89,
    "suitabilityScore": 68,
    "suitabilityScoreFloat": 67.9,
    "suitabilityTier": "Moderate",
    "priorityScore": 77,
    "priorityScoreFloat": 77.4,
    "priorityTier": "Higher Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Drainage-line recharge / small check structure",
    "interventionCategory": "Drainage-line Recharge",
    "areaKm2": 1.375,
    "evidenceSupportIndex": 0.781,
    "coords": {
      "x": 15.82,
      "y": 34.55
    },
    "coords3d": {
      "x": 15.82,
      "y": 34.55,
      "z": 10.02
    },
    "gisCoords": {
      "lng": 88.370231,
      "lat": 27.058905
    },
    "historicalDischarge": 0.8,
    "projectedDischarge": 3.4,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 0.8
      },
      {
        "month": "Mar",
        "discharge": 0.6
      },
      {
        "month": "May (Dry)",
        "discharge": 0.3
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 1.8
      },
      {
        "month": "Sep (Post)",
        "discharge": 3
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 3.4
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3029 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (14.2°)",
        "contribution": "+19%",
        "positive": true
      },
      {
        "name": "Drainage Distance (120m)",
        "contribution": "+16%",
        "positive": true
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Check Dam Cascade",
        "count": 3,
        "cost": 687500,
        "icon": "Shield"
      },
      {
        "type": "Gully Plugs (Loose Boulder)",
        "count": 12,
        "cost": 343750,
        "icon": "Layers"
      },
      {
        "type": "Infiltration Trench",
        "count": "1.5 km",
        "cost": 343750,
        "icon": "Shovel"
      }
    ],
    "minBudgetRequired": 1375000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "137.5 Hectares",
    "communityBeneficiaries": "451 Households (2074 People)",
    "interventions": [
      {
        "id": "int-25-1",
        "type": "Check Dam",
        "offset": {
          "x": 17.62,
          "y": 36.35
        },
        "height": 2.2,
        "minBudget": 962500
      },
      {
        "id": "int-25-2",
        "type": "Percolation Pit",
        "offset": {
          "x": 14.22,
          "y": 36.95
        },
        "height": 1.4,
        "minBudget": 1375000
      }
    ]
  },
  {
    "id": "spring-26",
    "slNo": 26,
    "code": "SP-026",
    "name": "Bal Goan Dhara",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Phyllite Basin)",
    "elevation": "810 m",
    "elevationMeters": 810.4,
    "slope": "27.4°",
    "slopeDeg": 27.4,
    "rainfall": "4050 mm",
    "rainfallMm": 4050,
    "lulc": "Tree cover",
    "distanceToDrainage": 195,
    "flowAccumulation": 6,
    "clay05cm": 236,
    "geology": "Phyllite",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 88,
    "suitabilityScore": 62,
    "suitabilityScoreFloat": 61.5,
    "suitabilityTier": "Moderate",
    "priorityScore": 74,
    "priorityScoreFloat": 73.8,
    "priorityTier": "Higher Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Site-specific recharge assessment",
    "interventionCategory": "Site-specific Assessment",
    "areaKm2": 0.463,
    "evidenceSupportIndex": 0.768,
    "coords": {
      "x": 31.18,
      "y": 25.48
    },
    "coords3d": {
      "x": 31.18,
      "y": 25.48,
      "z": 5.15
    },
    "gisCoords": {
      "lng": 88.405031,
      "lat": 27.0306
    },
    "historicalDischarge": 0.9,
    "projectedDischarge": 3.7,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 0.9
      },
      {
        "month": "Mar",
        "discharge": 0.7
      },
      {
        "month": "May (Dry)",
        "discharge": 0.3
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 2
      },
      {
        "month": "Sep (Post)",
        "discharge": 3.3
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 3.7
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Phyllite)",
        "contribution": "+21%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (4050 mm/yr)",
        "contribution": "+28%",
        "positive": true
      },
      {
        "name": "Terrain Slope (27.4°)",
        "contribution": "+11%",
        "positive": true
      },
      {
        "name": "Drainage Distance (195m)",
        "contribution": "-10%",
        "positive": false
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Staggered Trenching & Pits",
        "count": "2.0 km",
        "cost": 596250,
        "icon": "Shovel"
      },
      {
        "type": "Vegetative Filter Strips",
        "count": "4 Hectares",
        "cost": 397500,
        "icon": "Trees"
      },
      {
        "type": "Check Structure",
        "count": 2,
        "cost": 331250,
        "icon": "Shield"
      }
    ],
    "minBudgetRequired": 1325000,
    "aquiferType": "Phyllite Himalayan Aquifer",
    "catchmentArea": "46.3 Hectares",
    "communityBeneficiaries": "438 Households (2016 People)",
    "interventions": [
      {
        "id": "int-26-1",
        "type": "Contour Trench",
        "offset": {
          "x": 32.98,
          "y": 27.28
        },
        "height": 2.2,
        "minBudget": 927500
      },
      {
        "id": "int-26-2",
        "type": "Percolation Pit",
        "offset": {
          "x": 29.58,
          "y": 27.88
        },
        "height": 1.4,
        "minBudget": 1325000
      }
    ]
  },
  {
    "id": "spring-27",
    "slNo": 27,
    "code": "SP-027",
    "name": "Bich Dhara",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Gneiss/Schist Basin)",
    "elevation": "1821 m",
    "elevationMeters": 1820.5,
    "slope": "29.3°",
    "slopeDeg": 29.3,
    "rainfall": "3029 mm",
    "rainfallMm": 3029,
    "lulc": "Tree cover",
    "distanceToDrainage": 552,
    "flowAccumulation": 2,
    "clay05cm": 279,
    "geology": "Gneiss/Schist",
    "status": "Lower Confidence Zone",
    "rawStatus": "LOWER_CONFIDENCE_ZONE",
    "confidenceLevel": "Lower",
    "confidence": 60,
    "suitabilityScore": 38,
    "suitabilityScoreFloat": 37.9,
    "suitabilityTier": "Low",
    "priorityScore": 27,
    "priorityScoreFloat": 27.2,
    "priorityTier": "Lower Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "Moderate",
    "indicativeIntervention": "Detailed field assessment",
    "interventionCategory": "Detailed Assessment",
    "areaKm2": 1.806,
    "evidenceSupportIndex": null,
    "coords": {
      "x": 6.21,
      "y": 31.69
    },
    "coords3d": {
      "x": 6.21,
      "y": 31.69,
      "z": 12.24
    },
    "gisCoords": {
      "lng": 88.348444,
      "lat": 27.049959
    },
    "historicalDischarge": 1.6,
    "projectedDischarge": 5.8,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 1.6
      },
      {
        "month": "Mar",
        "discharge": 1.2
      },
      {
        "month": "May (Dry)",
        "discharge": 0.6
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 3.5
      },
      {
        "month": "Sep (Post)",
        "discharge": 5.1
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 5.8
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Gneiss/Schist)",
        "contribution": "+21%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3029 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (29.3°)",
        "contribution": "-15%",
        "positive": false
      },
      {
        "name": "Drainage Distance (552m)",
        "contribution": "-10%",
        "positive": false
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Staggered Trenching & Pits",
        "count": "2.0 km",
        "cost": 348750,
        "icon": "Shovel"
      },
      {
        "type": "Vegetative Filter Strips",
        "count": "4 Hectares",
        "cost": 232500,
        "icon": "Trees"
      },
      {
        "type": "Check Structure",
        "count": 2,
        "cost": 193750,
        "icon": "Shield"
      }
    ],
    "minBudgetRequired": 775000,
    "aquiferType": "Gneiss/Schist Himalayan Aquifer",
    "catchmentArea": "180.6 Hectares",
    "communityBeneficiaries": "275 Households (1266 People)",
    "interventions": [
      {
        "id": "int-27-1",
        "type": "Contour Trench",
        "offset": {
          "x": 8.01,
          "y": 33.49
        },
        "height": 2.2,
        "minBudget": 542500
      },
      {
        "id": "int-27-2",
        "type": "Percolation Pit",
        "offset": {
          "x": 4.61,
          "y": 34.09
        },
        "height": 1.4,
        "minBudget": 775000
      }
    ]
  },
  {
    "id": "spring-28",
    "slNo": 28,
    "code": "SP-028",
    "name": "Forest Gate Dhara",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "1520 m",
    "elevationMeters": 1520.4,
    "slope": "21.4°",
    "slopeDeg": 21.4,
    "rainfall": "4050 mm",
    "rainfallMm": 4050,
    "lulc": "Tree cover",
    "distanceToDrainage": 103,
    "flowAccumulation": 51,
    "clay05cm": 302,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 91,
    "suitabilityScore": 84,
    "suitabilityScoreFloat": 83.7,
    "suitabilityTier": "High",
    "priorityScore": 85,
    "priorityScoreFloat": 84.5,
    "priorityTier": "Higher Priority",
    "isTop15": true,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Contour trench / infiltration treatment",
    "interventionCategory": "Contour / Infiltration",
    "areaKm2": 0.294,
    "evidenceSupportIndex": 0.754,
    "coords": {
      "x": 20.04,
      "y": 32.68
    },
    "coords3d": {
      "x": 20.04,
      "y": 32.68,
      "z": 10.13
    },
    "gisCoords": {
      "lng": 88.379778,
      "lat": 27.053061
    },
    "historicalDischarge": 0.7,
    "projectedDischarge": 3.2,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 0.7
      },
      {
        "month": "Mar",
        "discharge": 0.5
      },
      {
        "month": "May (Dry)",
        "discharge": 0.2
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 1.5
      },
      {
        "month": "Sep (Post)",
        "discharge": 2.8
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 3.2
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (4050 mm/yr)",
        "contribution": "+28%",
        "positive": true
      },
      {
        "name": "Terrain Slope (21.4°)",
        "contribution": "+19%",
        "positive": true
      },
      {
        "name": "Drainage Distance (103m)",
        "contribution": "+16%",
        "positive": true
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Continuous Contour Trench",
        "count": "1700 m",
        "cost": 663750,
        "icon": "Shovel"
      },
      {
        "type": "Percolation Pits",
        "count": 18,
        "cost": 442500,
        "icon": "Waves"
      },
      {
        "type": "Catchment Afforestation",
        "count": "3.5 Hectares",
        "cost": 368750,
        "icon": "Trees"
      }
    ],
    "minBudgetRequired": 1475000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "29.4 Hectares",
    "communityBeneficiaries": "476 Households (2188 People)",
    "interventions": [
      {
        "id": "int-28-1",
        "type": "Contour Trench",
        "offset": {
          "x": 21.84,
          "y": 34.48
        },
        "height": 2.2,
        "minBudget": 1032500
      },
      {
        "id": "int-28-2",
        "type": "Percolation Pit",
        "offset": {
          "x": 18.44,
          "y": 35.08
        },
        "height": 1.4,
        "minBudget": 1475000
      }
    ]
  },
  {
    "id": "spring-29",
    "slNo": 29,
    "code": "SP-029",
    "name": "Gyalchen Dhara",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Gneiss/Schist Basin)",
    "elevation": "1817 m",
    "elevationMeters": 1817.4,
    "slope": "29.3°",
    "slopeDeg": 29.3,
    "rainfall": "3029 mm",
    "rainfallMm": 3029,
    "lulc": "Tree cover",
    "distanceToDrainage": 552,
    "flowAccumulation": 2,
    "clay05cm": 279,
    "geology": "Gneiss/Schist",
    "status": "Lower Confidence Zone",
    "rawStatus": "LOWER_CONFIDENCE_ZONE",
    "confidenceLevel": "Lower",
    "confidence": 60,
    "suitabilityScore": 38,
    "suitabilityScoreFloat": 37.9,
    "suitabilityTier": "Low",
    "priorityScore": 27,
    "priorityScoreFloat": 27.2,
    "priorityTier": "Lower Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "Moderate",
    "indicativeIntervention": "Detailed field assessment",
    "interventionCategory": "Detailed Assessment",
    "areaKm2": 1.806,
    "evidenceSupportIndex": null,
    "coords": {
      "x": 6.21,
      "y": 31.68
    },
    "coords3d": {
      "x": 6.21,
      "y": 31.68,
      "z": 12.22
    },
    "gisCoords": {
      "lng": 88.348436,
      "lat": 27.049949
    },
    "historicalDischarge": 1.6,
    "projectedDischarge": 5.8,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 1.6
      },
      {
        "month": "Mar",
        "discharge": 1.2
      },
      {
        "month": "May (Dry)",
        "discharge": 0.6
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 3.5
      },
      {
        "month": "Sep (Post)",
        "discharge": 5.1
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 5.8
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Gneiss/Schist)",
        "contribution": "+21%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3029 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (29.3°)",
        "contribution": "-15%",
        "positive": false
      },
      {
        "name": "Drainage Distance (552m)",
        "contribution": "-10%",
        "positive": false
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Staggered Trenching & Pits",
        "count": "2.0 km",
        "cost": 348750,
        "icon": "Shovel"
      },
      {
        "type": "Vegetative Filter Strips",
        "count": "4 Hectares",
        "cost": 232500,
        "icon": "Trees"
      },
      {
        "type": "Check Structure",
        "count": 2,
        "cost": 193750,
        "icon": "Shield"
      }
    ],
    "minBudgetRequired": 775000,
    "aquiferType": "Gneiss/Schist Himalayan Aquifer",
    "catchmentArea": "180.6 Hectares",
    "communityBeneficiaries": "275 Households (1266 People)",
    "interventions": [
      {
        "id": "int-29-1",
        "type": "Contour Trench",
        "offset": {
          "x": 8.01,
          "y": 33.48
        },
        "height": 2.2,
        "minBudget": 542500
      },
      {
        "id": "int-29-2",
        "type": "Percolation Pit",
        "offset": {
          "x": 4.61,
          "y": 34.08
        },
        "height": 1.4,
        "minBudget": 775000
      }
    ]
  },
  {
    "id": "spring-30",
    "slNo": 30,
    "code": "SP-030",
    "name": "Sanu Dhara",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Phyllite Basin)",
    "elevation": "770 m",
    "elevationMeters": 770.3,
    "slope": "22.8°",
    "slopeDeg": 22.8,
    "rainfall": "4050 mm",
    "rainfallMm": 4050,
    "lulc": "Tree cover",
    "distanceToDrainage": 271,
    "flowAccumulation": 2,
    "clay05cm": 245,
    "geology": "Phyllite",
    "status": "Lower Confidence Zone",
    "rawStatus": "LOWER_CONFIDENCE_ZONE",
    "confidenceLevel": "Lower",
    "confidence": 62,
    "suitabilityScore": 59,
    "suitabilityScoreFloat": 58.6,
    "suitabilityTier": "Moderate",
    "priorityScore": 36,
    "priorityScoreFloat": 36,
    "priorityTier": "Lower Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "Moderate",
    "indicativeIntervention": "Site-specific recharge assessment",
    "interventionCategory": "Site-specific Assessment",
    "areaKm2": 0.21,
    "evidenceSupportIndex": null,
    "coords": {
      "x": 27.25,
      "y": 23.94
    },
    "coords3d": {
      "x": 27.25,
      "y": 23.94,
      "z": 4.87
    },
    "gisCoords": {
      "lng": 88.396123,
      "lat": 27.025794
    },
    "historicalDischarge": 1.5,
    "projectedDischarge": 6.1,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 1.5
      },
      {
        "month": "Mar",
        "discharge": 1.1
      },
      {
        "month": "May (Dry)",
        "discharge": 0.5
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 3.3
      },
      {
        "month": "Sep (Post)",
        "discharge": 5.4
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 6.1
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Phyllite)",
        "contribution": "+21%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (4050 mm/yr)",
        "contribution": "+28%",
        "positive": true
      },
      {
        "name": "Terrain Slope (22.8°)",
        "contribution": "+11%",
        "positive": true
      },
      {
        "name": "Drainage Distance (271m)",
        "contribution": "-10%",
        "positive": false
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Staggered Trenching & Pits",
        "count": "2.0 km",
        "cost": 393750,
        "icon": "Shovel"
      },
      {
        "type": "Vegetative Filter Strips",
        "count": "4 Hectares",
        "cost": 262500,
        "icon": "Trees"
      },
      {
        "type": "Check Structure",
        "count": 2,
        "cost": 218750,
        "icon": "Shield"
      }
    ],
    "minBudgetRequired": 875000,
    "aquiferType": "Phyllite Himalayan Aquifer",
    "catchmentArea": "21.0 Hectares",
    "communityBeneficiaries": "306 Households (1408 People)",
    "interventions": [
      {
        "id": "int-30-1",
        "type": "Contour Trench",
        "offset": {
          "x": 29.05,
          "y": 25.74
        },
        "height": 2.2,
        "minBudget": 612500
      },
      {
        "id": "int-30-2",
        "type": "Percolation Pit",
        "offset": {
          "x": 25.65,
          "y": 26.34
        },
        "height": 1.4,
        "minBudget": 875000
      }
    ]
  },
  {
    "id": "spring-31",
    "slNo": 31,
    "code": "SP-031",
    "name": "7 No. Dhara",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "1266 m",
    "elevationMeters": 1266.1,
    "slope": "23.5°",
    "slopeDeg": 23.5,
    "rainfall": "3029 mm",
    "rainfallMm": 3029,
    "lulc": "Tree cover",
    "distanceToDrainage": 55,
    "flowAccumulation": 14,
    "clay05cm": 308,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 89,
    "suitabilityScore": 67,
    "suitabilityScoreFloat": 66.7,
    "suitabilityTier": "Moderate",
    "priorityScore": 76,
    "priorityScoreFloat": 76.4,
    "priorityTier": "Higher Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Site-specific recharge assessment",
    "interventionCategory": "Site-specific Assessment",
    "areaKm2": 0.596,
    "evidenceSupportIndex": 0.767,
    "coords": {
      "x": -0.12,
      "y": 20.35
    },
    "coords3d": {
      "x": -0.12,
      "y": 20.35,
      "z": 8.35
    },
    "gisCoords": {
      "lng": 88.334083,
      "lat": 27.014595
    },
    "historicalDischarge": 0.9,
    "projectedDischarge": 3.8,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 0.9
      },
      {
        "month": "Mar",
        "discharge": 0.7
      },
      {
        "month": "May (Dry)",
        "discharge": 0.3
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 2
      },
      {
        "month": "Sep (Post)",
        "discharge": 3.3
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 3.8
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3029 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (23.5°)",
        "contribution": "+11%",
        "positive": true
      },
      {
        "name": "Drainage Distance (55m)",
        "contribution": "+16%",
        "positive": true
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Staggered Trenching & Pits",
        "count": "2.0 km",
        "cost": 618750,
        "icon": "Shovel"
      },
      {
        "type": "Vegetative Filter Strips",
        "count": "4 Hectares",
        "cost": 412500,
        "icon": "Trees"
      },
      {
        "type": "Check Structure",
        "count": 2,
        "cost": 343750,
        "icon": "Shield"
      }
    ],
    "minBudgetRequired": 1375000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "59.6 Hectares",
    "communityBeneficiaries": "447 Households (2058 People)",
    "interventions": [
      {
        "id": "int-31-1",
        "type": "Contour Trench",
        "offset": {
          "x": 1.68,
          "y": 22.15
        },
        "height": 2.2,
        "minBudget": 962500
      },
      {
        "id": "int-31-2",
        "type": "Percolation Pit",
        "offset": {
          "x": -1.72,
          "y": 22.75
        },
        "height": 1.4,
        "minBudget": 1375000
      }
    ]
  },
  {
    "id": "spring-32",
    "slNo": 32,
    "code": "SP-032",
    "name": "11no. Dhara",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "1220 m",
    "elevationMeters": 1220.4,
    "slope": "32.3°",
    "slopeDeg": 32.3,
    "rainfall": "3029 mm",
    "rainfallMm": 3029,
    "lulc": "Tree cover",
    "distanceToDrainage": 83,
    "flowAccumulation": 2,
    "clay05cm": 308,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 87,
    "suitabilityScore": 55,
    "suitabilityScoreFloat": 55,
    "suitabilityTier": "Moderate",
    "priorityScore": 46,
    "priorityScoreFloat": 46.4,
    "priorityTier": "Moderate Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "High",
    "indicativeIntervention": "Contour trench / staggered trench",
    "interventionCategory": "Contour / Infiltration",
    "areaKm2": 0.445,
    "evidenceSupportIndex": 0.797,
    "coords": {
      "x": 0.01,
      "y": 20.32
    },
    "coords3d": {
      "x": 0.01,
      "y": 20.32,
      "z": 8.03
    },
    "gisCoords": {
      "lng": 88.33439,
      "lat": 27.014501
    },
    "historicalDischarge": 1.3,
    "projectedDischarge": 5.2,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 1.3
      },
      {
        "month": "Mar",
        "discharge": 1
      },
      {
        "month": "May (Dry)",
        "discharge": 0.5
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 2.9
      },
      {
        "month": "Sep (Post)",
        "discharge": 4.6
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 5.2
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3029 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (32.3°)",
        "contribution": "-15%",
        "positive": false
      },
      {
        "name": "Drainage Distance (83m)",
        "contribution": "+16%",
        "positive": true
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Continuous Contour Trench",
        "count": "2600 m",
        "cost": 450000,
        "icon": "Shovel"
      },
      {
        "type": "Percolation Pits",
        "count": 18,
        "cost": 300000,
        "icon": "Waves"
      },
      {
        "type": "Catchment Afforestation",
        "count": "3.5 Hectares",
        "cost": 250000,
        "icon": "Trees"
      }
    ],
    "minBudgetRequired": 1000000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "44.5 Hectares",
    "communityBeneficiaries": "342 Households (1575 People)",
    "interventions": [
      {
        "id": "int-32-1",
        "type": "Contour Trench",
        "offset": {
          "x": 1.81,
          "y": 22.12
        },
        "height": 2.2,
        "minBudget": 700000
      },
      {
        "id": "int-32-2",
        "type": "Percolation Pit",
        "offset": {
          "x": -1.59,
          "y": 22.72
        },
        "height": 1.4,
        "minBudget": 1000000
      }
    ]
  },
  {
    "id": "spring-33",
    "slNo": 33,
    "code": "SP-033",
    "name": "Devithan Dhara",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Gneiss Basin)",
    "elevation": "1658 m",
    "elevationMeters": 1658.2,
    "slope": "19.3°",
    "slopeDeg": 19.3,
    "rainfall": "3029 mm",
    "rainfallMm": 3029,
    "lulc": "Tree cover",
    "distanceToDrainage": 226,
    "flowAccumulation": 9,
    "clay05cm": 281,
    "geology": "Gneiss",
    "status": "Field Verification Required",
    "rawStatus": "FIELD_VERIFICATION_REQUIRED",
    "confidenceLevel": "Unresolved",
    "confidence": 46,
    "suitabilityScore": 56,
    "suitabilityScoreFloat": 56.3,
    "suitabilityTier": "Moderate",
    "priorityScore": 23,
    "priorityScoreFloat": 22.9,
    "priorityTier": "Lower Priority",
    "isTop15": false,
    "isFieldVerificationRequired": true,
    "riskLevel": "High",
    "indicativeIntervention": "Field verification before intervention",
    "interventionCategory": "Field Verification",
    "areaKm2": null,
    "evidenceSupportIndex": null,
    "coords": {
      "x": -3.13,
      "y": 28.94
    },
    "coords3d": {
      "x": -3.13,
      "y": 28.94,
      "z": 11.1
    },
    "gisCoords": {
      "lng": 88.327271,
      "lat": 27.041375
    },
    "historicalDischarge": 1.7,
    "projectedDischarge": 6.9,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 1.7
      },
      {
        "month": "Mar",
        "discharge": 1.3
      },
      {
        "month": "May (Dry)",
        "discharge": 0.6
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 3.7
      },
      {
        "month": "Sep (Post)",
        "discharge": 6.1
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 6.9
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Gneiss)",
        "contribution": "+32%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3029 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (19.3°)",
        "contribution": "+19%",
        "positive": true
      },
      {
        "name": "Drainage Distance (226m)",
        "contribution": "-10%",
        "positive": false
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Ground Truth Geological Survey",
        "count": "Detailed Hydrogeology",
        "cost": 253750,
        "icon": "ShieldCheck"
      },
      {
        "type": "Pilot Percolation Wells",
        "count": 4,
        "cost": 290000,
        "icon": "Waves"
      },
      {
        "type": "Springshed Demarcation Fencing",
        "count": "1.2 km",
        "cost": 181250,
        "icon": "Shield"
      }
    ],
    "minBudgetRequired": 725000,
    "aquiferType": "Gneiss Himalayan Aquifer",
    "catchmentArea": "38.5 Hectares",
    "communityBeneficiaries": "260 Households (1197 People)",
    "interventions": [
      {
        "id": "int-33-1",
        "type": "Contour Trench",
        "offset": {
          "x": -1.33,
          "y": 30.74
        },
        "height": 2.2,
        "minBudget": 507500
      },
      {
        "id": "int-33-2",
        "type": "Percolation Pit",
        "offset": {
          "x": -4.73,
          "y": 31.34
        },
        "height": 1.4,
        "minBudget": 725000
      }
    ]
  },
  {
    "id": "spring-34",
    "slNo": 34,
    "code": "SP-034",
    "name": "Dhunyal Dhara",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "1015 m",
    "elevationMeters": 1014.9,
    "slope": "20°",
    "slopeDeg": 20,
    "rainfall": "3029 mm",
    "rainfallMm": 3029,
    "lulc": "Tree cover",
    "distanceToDrainage": 144,
    "flowAccumulation": 1,
    "clay05cm": 250,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 86,
    "suitabilityScore": 49,
    "suitabilityScoreFloat": 48.5,
    "suitabilityTier": "Moderate",
    "priorityScore": 67,
    "priorityScoreFloat": 67,
    "priorityTier": "Higher Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Site-specific recharge assessment",
    "interventionCategory": "Site-specific Assessment",
    "areaKm2": 0.321,
    "evidenceSupportIndex": 0.757,
    "coords": {
      "x": 1.25,
      "y": 39.97
    },
    "coords3d": {
      "x": 1.25,
      "y": 39.97,
      "z": 6.59
    },
    "gisCoords": {
      "lng": 88.337184,
      "lat": 27.075792
    },
    "historicalDischarge": 1,
    "projectedDischarge": 3.9,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 1
      },
      {
        "month": "Mar",
        "discharge": 0.8
      },
      {
        "month": "May (Dry)",
        "discharge": 0.3
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 2.2
      },
      {
        "month": "Sep (Post)",
        "discharge": 3.4
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 3.9
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3029 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (20°)",
        "contribution": "+19%",
        "positive": true
      },
      {
        "name": "Drainage Distance (144m)",
        "contribution": "+16%",
        "positive": true
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Staggered Trenching & Pits",
        "count": "2.0 km",
        "cost": 562500,
        "icon": "Shovel"
      },
      {
        "type": "Vegetative Filter Strips",
        "count": "4 Hectares",
        "cost": 375000,
        "icon": "Trees"
      },
      {
        "type": "Check Structure",
        "count": 2,
        "cost": 312500,
        "icon": "Shield"
      }
    ],
    "minBudgetRequired": 1250000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "32.1 Hectares",
    "communityBeneficiaries": "415 Households (1907 People)",
    "interventions": [
      {
        "id": "int-34-1",
        "type": "Contour Trench",
        "offset": {
          "x": 3.05,
          "y": 41.77
        },
        "height": 2.2,
        "minBudget": 875000
      },
      {
        "id": "int-34-2",
        "type": "Percolation Pit",
        "offset": {
          "x": -0.35,
          "y": 42.37
        },
        "height": 1.4,
        "minBudget": 1250000
      }
    ]
  },
  {
    "id": "spring-35",
    "slNo": 35,
    "code": "SP-035",
    "name": "Goan Dhara",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "1023 m",
    "elevationMeters": 1023.4,
    "slope": "20°",
    "slopeDeg": 20,
    "rainfall": "3029 mm",
    "rainfallMm": 3029,
    "lulc": "Tree cover",
    "distanceToDrainage": 144,
    "flowAccumulation": 1,
    "clay05cm": 250,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 86,
    "suitabilityScore": 49,
    "suitabilityScoreFloat": 48.5,
    "suitabilityTier": "Moderate",
    "priorityScore": 67,
    "priorityScoreFloat": 67,
    "priorityTier": "Higher Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Site-specific recharge assessment",
    "interventionCategory": "Site-specific Assessment",
    "areaKm2": 0.321,
    "evidenceSupportIndex": 0.757,
    "coords": {
      "x": 1.21,
      "y": 39.96
    },
    "coords3d": {
      "x": 1.21,
      "y": 39.96,
      "z": 6.65
    },
    "gisCoords": {
      "lng": 88.337096,
      "lat": 27.075761
    },
    "historicalDischarge": 1,
    "projectedDischarge": 3.9,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 1
      },
      {
        "month": "Mar",
        "discharge": 0.8
      },
      {
        "month": "May (Dry)",
        "discharge": 0.3
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 2.2
      },
      {
        "month": "Sep (Post)",
        "discharge": 3.4
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 3.9
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3029 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (20°)",
        "contribution": "+19%",
        "positive": true
      },
      {
        "name": "Drainage Distance (144m)",
        "contribution": "+16%",
        "positive": true
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Staggered Trenching & Pits",
        "count": "2.0 km",
        "cost": 562500,
        "icon": "Shovel"
      },
      {
        "type": "Vegetative Filter Strips",
        "count": "4 Hectares",
        "cost": 375000,
        "icon": "Trees"
      },
      {
        "type": "Check Structure",
        "count": 2,
        "cost": 312500,
        "icon": "Shield"
      }
    ],
    "minBudgetRequired": 1250000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "32.1 Hectares",
    "communityBeneficiaries": "415 Households (1907 People)",
    "interventions": [
      {
        "id": "int-35-1",
        "type": "Contour Trench",
        "offset": {
          "x": 3.01,
          "y": 41.76
        },
        "height": 2.2,
        "minBudget": 875000
      },
      {
        "id": "int-35-2",
        "type": "Percolation Pit",
        "offset": {
          "x": -0.39,
          "y": 42.36
        },
        "height": 1.4,
        "minBudget": 1250000
      }
    ]
  },
  {
    "id": "spring-36",
    "slNo": 36,
    "code": "SP-036",
    "name": "Golai Dhara",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "1550 m",
    "elevationMeters": 1550.4,
    "slope": "28°",
    "slopeDeg": 28,
    "rainfall": "3029 mm",
    "rainfallMm": 3029,
    "lulc": "Tree cover",
    "distanceToDrainage": 364,
    "flowAccumulation": 5,
    "clay05cm": 279,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 86,
    "suitabilityScore": 48,
    "suitabilityScoreFloat": 48.4,
    "suitabilityTier": "Moderate",
    "priorityScore": 67,
    "priorityScoreFloat": 66.5,
    "priorityTier": "Higher Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Site-specific recharge assessment",
    "interventionCategory": "Site-specific Assessment",
    "areaKm2": 1.195,
    "evidenceSupportIndex": 0.745,
    "coords": {
      "x": -4.6,
      "y": 23.32
    },
    "coords3d": {
      "x": -4.6,
      "y": 23.32,
      "z": 10.34
    },
    "gisCoords": {
      "lng": 88.323936,
      "lat": 27.02384
    },
    "historicalDischarge": 1,
    "projectedDischarge": 3.9,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 1
      },
      {
        "month": "Mar",
        "discharge": 0.8
      },
      {
        "month": "May (Dry)",
        "discharge": 0.3
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 2.2
      },
      {
        "month": "Sep (Post)",
        "discharge": 3.4
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 3.9
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3029 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (28°)",
        "contribution": "-15%",
        "positive": false
      },
      {
        "name": "Drainage Distance (364m)",
        "contribution": "-10%",
        "positive": false
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Staggered Trenching & Pits",
        "count": "2.0 km",
        "cost": 562500,
        "icon": "Shovel"
      },
      {
        "type": "Vegetative Filter Strips",
        "count": "4 Hectares",
        "cost": 375000,
        "icon": "Trees"
      },
      {
        "type": "Check Structure",
        "count": 2,
        "cost": 312500,
        "icon": "Shield"
      }
    ],
    "minBudgetRequired": 1250000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "119.5 Hectares",
    "communityBeneficiaries": "413 Households (1899 People)",
    "interventions": [
      {
        "id": "int-36-1",
        "type": "Contour Trench",
        "offset": {
          "x": -2.8,
          "y": 25.12
        },
        "height": 2.2,
        "minBudget": 875000
      },
      {
        "id": "int-36-2",
        "type": "Percolation Pit",
        "offset": {
          "x": -6.2,
          "y": 25.72
        },
        "height": 1.4,
        "minBudget": 1250000
      }
    ]
  },
  {
    "id": "spring-37",
    "slNo": 37,
    "code": "SP-037",
    "name": "Jungle Dhara",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Gneiss Basin)",
    "elevation": "1455 m",
    "elevationMeters": 1455.3,
    "slope": "18.8°",
    "slopeDeg": 18.8,
    "rainfall": "3029 mm",
    "rainfallMm": 3029,
    "lulc": "Tree cover",
    "distanceToDrainage": 31,
    "flowAccumulation": 1,
    "clay05cm": 272,
    "geology": "Gneiss",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 87,
    "suitabilityScore": 56,
    "suitabilityScoreFloat": 55.7,
    "suitabilityTier": "Moderate",
    "priorityScore": 72,
    "priorityScoreFloat": 71.9,
    "priorityTier": "Higher Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Site-specific recharge assessment",
    "interventionCategory": "Site-specific Assessment",
    "areaKm2": 2.031,
    "evidenceSupportIndex": 0.803,
    "coords": {
      "x": -3.9,
      "y": 29.99
    },
    "coords3d": {
      "x": -3.9,
      "y": 29.99,
      "z": 9.68
    },
    "gisCoords": {
      "lng": 88.325516,
      "lat": 27.044667
    },
    "historicalDischarge": 0.9,
    "projectedDischarge": 3.6,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 0.9
      },
      {
        "month": "Mar",
        "discharge": 0.7
      },
      {
        "month": "May (Dry)",
        "discharge": 0.3
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 2
      },
      {
        "month": "Sep (Post)",
        "discharge": 3.2
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 3.6
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Gneiss)",
        "contribution": "+32%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3029 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (18.8°)",
        "contribution": "+19%",
        "positive": true
      },
      {
        "name": "Drainage Distance (31m)",
        "contribution": "+16%",
        "positive": true
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Staggered Trenching & Pits",
        "count": "2.0 km",
        "cost": 596250,
        "icon": "Shovel"
      },
      {
        "type": "Vegetative Filter Strips",
        "count": "4 Hectares",
        "cost": 397500,
        "icon": "Trees"
      },
      {
        "type": "Check Structure",
        "count": 2,
        "cost": 331250,
        "icon": "Shield"
      }
    ],
    "minBudgetRequired": 1325000,
    "aquiferType": "Gneiss Himalayan Aquifer",
    "catchmentArea": "203.1 Hectares",
    "communityBeneficiaries": "432 Households (1986 People)",
    "interventions": [
      {
        "id": "int-37-1",
        "type": "Contour Trench",
        "offset": {
          "x": -2.1,
          "y": 31.79
        },
        "height": 2.2,
        "minBudget": 927500
      },
      {
        "id": "int-37-2",
        "type": "Percolation Pit",
        "offset": {
          "x": -5.5,
          "y": 32.39
        },
        "height": 1.4,
        "minBudget": 1325000
      }
    ]
  },
  {
    "id": "spring-38",
    "slNo": 38,
    "code": "SP-038",
    "name": "Mandal Dhara",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "1015 m",
    "elevationMeters": 1014.9,
    "slope": "20°",
    "slopeDeg": 20,
    "rainfall": "3029 mm",
    "rainfallMm": 3029,
    "lulc": "Tree cover",
    "distanceToDrainage": 144,
    "flowAccumulation": 1,
    "clay05cm": 250,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 86,
    "suitabilityScore": 49,
    "suitabilityScoreFloat": 48.5,
    "suitabilityTier": "Moderate",
    "priorityScore": 67,
    "priorityScoreFloat": 66.9,
    "priorityTier": "Higher Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Site-specific recharge assessment",
    "interventionCategory": "Site-specific Assessment",
    "areaKm2": 0.314,
    "evidenceSupportIndex": 0.756,
    "coords": {
      "x": 1.26,
      "y": 40
    },
    "coords3d": {
      "x": 1.26,
      "y": 40,
      "z": 6.59
    },
    "gisCoords": {
      "lng": 88.33721,
      "lat": 27.075901
    },
    "historicalDischarge": 1,
    "projectedDischarge": 3.9,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 1
      },
      {
        "month": "Mar",
        "discharge": 0.8
      },
      {
        "month": "May (Dry)",
        "discharge": 0.3
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 2.2
      },
      {
        "month": "Sep (Post)",
        "discharge": 3.4
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 3.9
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3029 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (20°)",
        "contribution": "+19%",
        "positive": true
      },
      {
        "name": "Drainage Distance (144m)",
        "contribution": "+16%",
        "positive": true
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Staggered Trenching & Pits",
        "count": "2.0 km",
        "cost": 562500,
        "icon": "Shovel"
      },
      {
        "type": "Vegetative Filter Strips",
        "count": "4 Hectares",
        "cost": 375000,
        "icon": "Trees"
      },
      {
        "type": "Check Structure",
        "count": 2,
        "cost": 312500,
        "icon": "Shield"
      }
    ],
    "minBudgetRequired": 1250000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "31.4 Hectares",
    "communityBeneficiaries": "414 Households (1905 People)",
    "interventions": [
      {
        "id": "int-38-1",
        "type": "Contour Trench",
        "offset": {
          "x": 3.06,
          "y": 41.8
        },
        "height": 2.2,
        "minBudget": 875000
      },
      {
        "id": "int-38-2",
        "type": "Percolation Pit",
        "offset": {
          "x": -0.34,
          "y": 42.4
        },
        "height": 1.4,
        "minBudget": 1250000
      }
    ]
  },
  {
    "id": "spring-39",
    "slNo": 39,
    "code": "SP-039",
    "name": "Mane dhara",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Phyllite Basin)",
    "elevation": "1259 m",
    "elevationMeters": 1258.5,
    "slope": "22.5°",
    "slopeDeg": 22.5,
    "rainfall": "4050 mm",
    "rainfallMm": 4050,
    "lulc": "Tree cover",
    "distanceToDrainage": 31,
    "flowAccumulation": 9,
    "clay05cm": 279,
    "geology": "Phyllite",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 90,
    "suitabilityScore": 78,
    "suitabilityScoreFloat": 77.8,
    "suitabilityTier": "High",
    "priorityScore": 80,
    "priorityScoreFloat": 80.2,
    "priorityTier": "Higher Priority",
    "isTop15": true,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Contour trench / infiltration treatment",
    "interventionCategory": "Contour / Infiltration",
    "areaKm2": 0.365,
    "evidenceSupportIndex": 0.711,
    "coords": {
      "x": 27.63,
      "y": 29.16
    },
    "coords3d": {
      "x": 27.63,
      "y": 29.16,
      "z": 8.3
    },
    "gisCoords": {
      "lng": 88.396992,
      "lat": 27.042086
    },
    "historicalDischarge": 0.8,
    "projectedDischarge": 3.6,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 0.8
      },
      {
        "month": "Mar",
        "discharge": 0.6
      },
      {
        "month": "May (Dry)",
        "discharge": 0.3
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 1.8
      },
      {
        "month": "Sep (Post)",
        "discharge": 3.2
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 3.6
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Phyllite)",
        "contribution": "+21%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (4050 mm/yr)",
        "contribution": "+28%",
        "positive": true
      },
      {
        "name": "Terrain Slope (22.5°)",
        "contribution": "+11%",
        "positive": true
      },
      {
        "name": "Drainage Distance (31m)",
        "contribution": "+16%",
        "positive": true
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Continuous Contour Trench",
        "count": "1800 m",
        "cost": 630000,
        "icon": "Shovel"
      },
      {
        "type": "Percolation Pits",
        "count": 18,
        "cost": 420000,
        "icon": "Waves"
      },
      {
        "type": "Catchment Afforestation",
        "count": "3.5 Hectares",
        "cost": 350000,
        "icon": "Trees"
      }
    ],
    "minBudgetRequired": 1400000,
    "aquiferType": "Phyllite Himalayan Aquifer",
    "catchmentArea": "36.5 Hectares",
    "communityBeneficiaries": "461 Households (2119 People)",
    "interventions": [
      {
        "id": "int-39-1",
        "type": "Contour Trench",
        "offset": {
          "x": 29.43,
          "y": 30.96
        },
        "height": 2.2,
        "minBudget": 980000
      },
      {
        "id": "int-39-2",
        "type": "Percolation Pit",
        "offset": {
          "x": 26.03,
          "y": 31.56
        },
        "height": 1.4,
        "minBudget": 1400000
      }
    ]
  },
  {
    "id": "spring-40",
    "slNo": 40,
    "code": "SP-040",
    "name": "Nipen Dhara",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "1502 m",
    "elevationMeters": 1502.4,
    "slope": "22.8°",
    "slopeDeg": 22.8,
    "rainfall": "3029 mm",
    "rainfallMm": 3029,
    "lulc": "Tree cover",
    "distanceToDrainage": 175,
    "flowAccumulation": 3,
    "clay05cm": 278,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 87,
    "suitabilityScore": 56,
    "suitabilityScoreFloat": 55.8,
    "suitabilityTier": "Moderate",
    "priorityScore": 71,
    "priorityScoreFloat": 71.4,
    "priorityTier": "Higher Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Site-specific recharge assessment",
    "interventionCategory": "Site-specific Assessment",
    "areaKm2": 1.151,
    "evidenceSupportIndex": 0.785,
    "coords": {
      "x": -3,
      "y": 23.26
    },
    "coords3d": {
      "x": -3,
      "y": 23.26,
      "z": 10.01
    },
    "gisCoords": {
      "lng": 88.327561,
      "lat": 27.023654
    },
    "historicalDischarge": 0.9,
    "projectedDischarge": 3.6,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 0.9
      },
      {
        "month": "Mar",
        "discharge": 0.7
      },
      {
        "month": "May (Dry)",
        "discharge": 0.3
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 2
      },
      {
        "month": "Sep (Post)",
        "discharge": 3.2
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 3.6
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3029 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (22.8°)",
        "contribution": "+11%",
        "positive": true
      },
      {
        "name": "Drainage Distance (175m)",
        "contribution": "-10%",
        "positive": false
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Staggered Trenching & Pits",
        "count": "2.0 km",
        "cost": 585000,
        "icon": "Shovel"
      },
      {
        "type": "Vegetative Filter Strips",
        "count": "4 Hectares",
        "cost": 390000,
        "icon": "Trees"
      },
      {
        "type": "Check Structure",
        "count": 2,
        "cost": 325000,
        "icon": "Shield"
      }
    ],
    "minBudgetRequired": 1300000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "115.1 Hectares",
    "communityBeneficiaries": "430 Households (1978 People)",
    "interventions": [
      {
        "id": "int-40-1",
        "type": "Contour Trench",
        "offset": {
          "x": -1.2,
          "y": 25.06
        },
        "height": 2.2,
        "minBudget": 910000
      },
      {
        "id": "int-40-2",
        "type": "Percolation Pit",
        "offset": {
          "x": -4.6,
          "y": 25.66
        },
        "height": 1.4,
        "minBudget": 1300000
      }
    ]
  },
  {
    "id": "spring-41",
    "slNo": 41,
    "code": "SP-041",
    "name": "PokhardhuraDhara",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Gneiss Basin)",
    "elevation": "1591 m",
    "elevationMeters": 1591.2,
    "slope": "14.9°",
    "slopeDeg": 14.9,
    "rainfall": "3029 mm",
    "rainfallMm": 3029,
    "lulc": "Tree cover",
    "distanceToDrainage": 28,
    "flowAccumulation": 4,
    "clay05cm": 292,
    "geology": "Gneiss",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 88,
    "suitabilityScore": 60,
    "suitabilityScoreFloat": 59.6,
    "suitabilityTier": "Moderate",
    "priorityScore": 73,
    "priorityScoreFloat": 73.2,
    "priorityTier": "Higher Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Site-specific recharge assessment",
    "interventionCategory": "Site-specific Assessment",
    "areaKm2": 1.293,
    "evidenceSupportIndex": 0.779,
    "coords": {
      "x": -3.1,
      "y": 29.88
    },
    "coords3d": {
      "x": -3.1,
      "y": 29.88,
      "z": 10.63
    },
    "gisCoords": {
      "lng": 88.327332,
      "lat": 27.044319
    },
    "historicalDischarge": 0.9,
    "projectedDischarge": 3.7,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 0.9
      },
      {
        "month": "Mar",
        "discharge": 0.7
      },
      {
        "month": "May (Dry)",
        "discharge": 0.3
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 2
      },
      {
        "month": "Sep (Post)",
        "discharge": 3.3
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 3.7
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Gneiss)",
        "contribution": "+32%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3029 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (14.9°)",
        "contribution": "+19%",
        "positive": true
      },
      {
        "name": "Drainage Distance (28m)",
        "contribution": "+16%",
        "positive": true
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Staggered Trenching & Pits",
        "count": "2.0 km",
        "cost": 596250,
        "icon": "Shovel"
      },
      {
        "type": "Vegetative Filter Strips",
        "count": "4 Hectares",
        "cost": 397500,
        "icon": "Trees"
      },
      {
        "type": "Check Structure",
        "count": 2,
        "cost": 331250,
        "icon": "Shield"
      }
    ],
    "minBudgetRequired": 1325000,
    "aquiferType": "Gneiss Himalayan Aquifer",
    "catchmentArea": "129.3 Hectares",
    "communityBeneficiaries": "436 Households (2007 People)",
    "interventions": [
      {
        "id": "int-41-1",
        "type": "Contour Trench",
        "offset": {
          "x": -1.3,
          "y": 31.68
        },
        "height": 2.2,
        "minBudget": 927500
      },
      {
        "id": "int-41-2",
        "type": "Percolation Pit",
        "offset": {
          "x": -4.7,
          "y": 32.28
        },
        "height": 1.4,
        "minBudget": 1325000
      }
    ]
  },
  {
    "id": "spring-42",
    "slNo": 42,
    "code": "SP-042",
    "name": "Primary Dhara",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Gneiss Basin)",
    "elevation": "1454 m",
    "elevationMeters": 1454.2,
    "slope": "11.2°",
    "slopeDeg": 11.2,
    "rainfall": "3029 mm",
    "rainfallMm": 3029,
    "lulc": "Tree cover",
    "distanceToDrainage": 31,
    "flowAccumulation": 1,
    "clay05cm": 272,
    "geology": "Gneiss",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 86,
    "suitabilityScore": 50,
    "suitabilityScoreFloat": 49.7,
    "suitabilityTier": "Moderate",
    "priorityScore": 68,
    "priorityScoreFloat": 67.5,
    "priorityTier": "Higher Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Site-specific recharge assessment",
    "interventionCategory": "Site-specific Assessment",
    "areaKm2": 2.039,
    "evidenceSupportIndex": 0.756,
    "coords": {
      "x": -3.78,
      "y": 30.02
    },
    "coords3d": {
      "x": -3.78,
      "y": 30.02,
      "z": 9.67
    },
    "gisCoords": {
      "lng": 88.325792,
      "lat": 27.044765
    },
    "historicalDischarge": 1,
    "projectedDischarge": 3.9,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 1
      },
      {
        "month": "Mar",
        "discharge": 0.8
      },
      {
        "month": "May (Dry)",
        "discharge": 0.3
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 2.2
      },
      {
        "month": "Sep (Post)",
        "discharge": 3.4
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 3.9
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Gneiss)",
        "contribution": "+32%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3029 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (11.2°)",
        "contribution": "+19%",
        "positive": true
      },
      {
        "name": "Drainage Distance (31m)",
        "contribution": "+16%",
        "positive": true
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Staggered Trenching & Pits",
        "count": "2.0 km",
        "cost": 562500,
        "icon": "Shovel"
      },
      {
        "type": "Vegetative Filter Strips",
        "count": "4 Hectares",
        "cost": 375000,
        "icon": "Trees"
      },
      {
        "type": "Check Structure",
        "count": 2,
        "cost": 312500,
        "icon": "Shield"
      }
    ],
    "minBudgetRequired": 1250000,
    "aquiferType": "Gneiss Himalayan Aquifer",
    "catchmentArea": "203.9 Hectares",
    "communityBeneficiaries": "416 Households (1915 People)",
    "interventions": [
      {
        "id": "int-42-1",
        "type": "Contour Trench",
        "offset": {
          "x": -1.98,
          "y": 31.82
        },
        "height": 2.2,
        "minBudget": 875000
      },
      {
        "id": "int-42-2",
        "type": "Percolation Pit",
        "offset": {
          "x": -5.38,
          "y": 32.42
        },
        "height": 1.4,
        "minBudget": 1250000
      }
    ]
  },
  {
    "id": "spring-43",
    "slNo": 43,
    "code": "SP-043",
    "name": "Elachi Spring",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "1237 m",
    "elevationMeters": 1237.3,
    "slope": "29.8°",
    "slopeDeg": 29.8,
    "rainfall": "4050 mm",
    "rainfallMm": 4050,
    "lulc": "Tree cover",
    "distanceToDrainage": 324,
    "flowAccumulation": 5,
    "clay05cm": 270,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 88,
    "suitabilityScore": 61,
    "suitabilityScoreFloat": 61,
    "suitabilityTier": "Moderate",
    "priorityScore": 75,
    "priorityScoreFloat": 75.1,
    "priorityTier": "Higher Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Site-specific recharge assessment",
    "interventionCategory": "Site-specific Assessment",
    "areaKm2": 1.859,
    "evidenceSupportIndex": 0.819,
    "coords": {
      "x": 34.94,
      "y": 4
    },
    "coords3d": {
      "x": 34.94,
      "y": 4,
      "z": 8.15
    },
    "gisCoords": {
      "lng": 88.413552,
      "lat": 26.963563
    },
    "historicalDischarge": 0.9,
    "projectedDischarge": 3.7,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 0.9
      },
      {
        "month": "Mar",
        "discharge": 0.7
      },
      {
        "month": "May (Dry)",
        "discharge": 0.3
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 2
      },
      {
        "month": "Sep (Post)",
        "discharge": 3.3
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 3.7
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (4050 mm/yr)",
        "contribution": "+28%",
        "positive": true
      },
      {
        "name": "Terrain Slope (29.8°)",
        "contribution": "-15%",
        "positive": false
      },
      {
        "name": "Drainage Distance (324m)",
        "contribution": "-10%",
        "positive": false
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Staggered Trenching & Pits",
        "count": "2.0 km",
        "cost": 607500,
        "icon": "Shovel"
      },
      {
        "type": "Vegetative Filter Strips",
        "count": "4 Hectares",
        "cost": 405000,
        "icon": "Trees"
      },
      {
        "type": "Check Structure",
        "count": 2,
        "cost": 337500,
        "icon": "Shield"
      }
    ],
    "minBudgetRequired": 1350000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "185.9 Hectares",
    "communityBeneficiaries": "443 Households (2037 People)",
    "interventions": [
      {
        "id": "int-43-1",
        "type": "Contour Trench",
        "offset": {
          "x": 36.74,
          "y": 5.8
        },
        "height": 2.2,
        "minBudget": 945000
      },
      {
        "id": "int-43-2",
        "type": "Percolation Pit",
        "offset": {
          "x": 33.34,
          "y": 6.4
        },
        "height": 1.4,
        "minBudget": 1350000
      }
    ]
  },
  {
    "id": "spring-44",
    "slNo": 44,
    "code": "SP-044",
    "name": "Soen Spring",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "1421 m",
    "elevationMeters": 1421.4,
    "slope": "19.2°",
    "slopeDeg": 19.2,
    "rainfall": "4050 mm",
    "rainfallMm": 4050,
    "lulc": "Tree cover",
    "distanceToDrainage": 364,
    "flowAccumulation": 1,
    "clay05cm": 272,
    "geology": "Schist",
    "status": "Field Verification Required",
    "rawStatus": "FIELD_VERIFICATION_REQUIRED",
    "confidenceLevel": "Unresolved",
    "confidence": 46,
    "suitabilityScore": 59,
    "suitabilityScoreFloat": 59.3,
    "suitabilityTier": "Moderate",
    "priorityScore": 24,
    "priorityScoreFloat": 23.8,
    "priorityTier": "Lower Priority",
    "isTop15": false,
    "isFieldVerificationRequired": true,
    "riskLevel": "High",
    "indicativeIntervention": "Field verification before intervention",
    "interventionCategory": "Field Verification",
    "areaKm2": null,
    "evidenceSupportIndex": null,
    "coords": {
      "x": 36,
      "y": 4.78
    },
    "coords3d": {
      "x": 36,
      "y": 4.78,
      "z": 9.44
    },
    "gisCoords": {
      "lng": 88.415966,
      "lat": 26.966009
    },
    "historicalDischarge": 1.6,
    "projectedDischarge": 6.6,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 1.6
      },
      {
        "month": "Mar",
        "discharge": 1.2
      },
      {
        "month": "May (Dry)",
        "discharge": 0.6
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 3.5
      },
      {
        "month": "Sep (Post)",
        "discharge": 5.8
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 6.6
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (4050 mm/yr)",
        "contribution": "+28%",
        "positive": true
      },
      {
        "name": "Terrain Slope (19.2°)",
        "contribution": "+19%",
        "positive": true
      },
      {
        "name": "Drainage Distance (364m)",
        "contribution": "-10%",
        "positive": false
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Ground Truth Geological Survey",
        "count": "Detailed Hydrogeology",
        "cost": 253750,
        "icon": "ShieldCheck"
      },
      {
        "type": "Pilot Percolation Wells",
        "count": 4,
        "cost": 290000,
        "icon": "Waves"
      },
      {
        "type": "Springshed Demarcation Fencing",
        "count": "1.2 km",
        "cost": 181250,
        "icon": "Shield"
      }
    ],
    "minBudgetRequired": 725000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "38.5 Hectares",
    "communityBeneficiaries": "263 Households (1211 People)",
    "interventions": [
      {
        "id": "int-44-1",
        "type": "Contour Trench",
        "offset": {
          "x": 37.8,
          "y": 6.58
        },
        "height": 2.2,
        "minBudget": 507500
      },
      {
        "id": "int-44-2",
        "type": "Percolation Pit",
        "offset": {
          "x": 34.4,
          "y": 7.18
        },
        "height": 1.4,
        "minBudget": 725000
      }
    ]
  },
  {
    "id": "spring-45",
    "slNo": 45,
    "code": "SP-045",
    "name": "Sim Dhara",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "1464 m",
    "elevationMeters": 1463.8,
    "slope": "19°",
    "slopeDeg": 19,
    "rainfall": "3029 mm",
    "rainfallMm": 3029,
    "lulc": "Tree cover",
    "distanceToDrainage": 28,
    "flowAccumulation": 3,
    "clay05cm": 285,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 88,
    "suitabilityScore": 62,
    "suitabilityScoreFloat": 61.8,
    "suitabilityTier": "Moderate",
    "priorityScore": 76,
    "priorityScoreFloat": 76.4,
    "priorityTier": "Higher Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Site-specific recharge assessment",
    "interventionCategory": "Site-specific Assessment",
    "areaKm2": 1.94,
    "evidenceSupportIndex": 0.851,
    "coords": {
      "x": 0.39,
      "y": -4.04
    },
    "coords3d": {
      "x": 0.39,
      "y": -4.04,
      "z": 9.74
    },
    "gisCoords": {
      "lng": 88.33525,
      "lat": 26.938485
    },
    "historicalDischarge": 0.9,
    "projectedDischarge": 3.7,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 0.9
      },
      {
        "month": "Mar",
        "discharge": 0.7
      },
      {
        "month": "May (Dry)",
        "discharge": 0.3
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 2
      },
      {
        "month": "Sep (Post)",
        "discharge": 3.3
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 3.7
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3029 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (19°)",
        "contribution": "+19%",
        "positive": true
      },
      {
        "name": "Drainage Distance (28m)",
        "contribution": "+16%",
        "positive": true
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Staggered Trenching & Pits",
        "count": "2.0 km",
        "cost": 618750,
        "icon": "Shovel"
      },
      {
        "type": "Vegetative Filter Strips",
        "count": "4 Hectares",
        "cost": 412500,
        "icon": "Trees"
      },
      {
        "type": "Check Structure",
        "count": 2,
        "cost": 343750,
        "icon": "Shield"
      }
    ],
    "minBudgetRequired": 1375000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "193.9 Hectares",
    "communityBeneficiaries": "447 Households (2058 People)",
    "interventions": [
      {
        "id": "int-45-1",
        "type": "Contour Trench",
        "offset": {
          "x": 2.19,
          "y": -2.24
        },
        "height": 2.2,
        "minBudget": 962500
      },
      {
        "id": "int-45-2",
        "type": "Percolation Pit",
        "offset": {
          "x": -1.21,
          "y": -1.64
        },
        "height": 1.4,
        "minBudget": 1375000
      }
    ]
  },
  {
    "id": "spring-46",
    "slNo": 46,
    "code": "SP-046",
    "name": "Sim Dhara",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "1099 m",
    "elevationMeters": 1098.8,
    "slope": "18.3°",
    "slopeDeg": 18.3,
    "rainfall": "3029 mm",
    "rainfallMm": 3029,
    "lulc": "Tree cover",
    "distanceToDrainage": 248,
    "flowAccumulation": 10,
    "clay05cm": 291,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 87,
    "suitabilityScore": 57,
    "suitabilityScoreFloat": 56.9,
    "suitabilityTier": "Moderate",
    "priorityScore": 72,
    "priorityScoreFloat": 71.8,
    "priorityTier": "Higher Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Site-specific recharge assessment",
    "interventionCategory": "Site-specific Assessment",
    "areaKm2": 1.562,
    "evidenceSupportIndex": 0.777,
    "coords": {
      "x": 15.67,
      "y": 7.14
    },
    "coords3d": {
      "x": 15.67,
      "y": 7.14,
      "z": 7.18
    },
    "gisCoords": {
      "lng": 88.369882,
      "lat": 26.973358
    },
    "historicalDischarge": 0.9,
    "projectedDischarge": 3.6,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 0.9
      },
      {
        "month": "Mar",
        "discharge": 0.7
      },
      {
        "month": "May (Dry)",
        "discharge": 0.3
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 2
      },
      {
        "month": "Sep (Post)",
        "discharge": 3.2
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 3.6
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3029 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (18.3°)",
        "contribution": "+19%",
        "positive": true
      },
      {
        "name": "Drainage Distance (248m)",
        "contribution": "-10%",
        "positive": false
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Staggered Trenching & Pits",
        "count": "2.0 km",
        "cost": 585000,
        "icon": "Shovel"
      },
      {
        "type": "Vegetative Filter Strips",
        "count": "4 Hectares",
        "cost": 390000,
        "icon": "Trees"
      },
      {
        "type": "Check Structure",
        "count": 2,
        "cost": 325000,
        "icon": "Shield"
      }
    ],
    "minBudgetRequired": 1300000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "156.2 Hectares",
    "communityBeneficiaries": "431 Households (1984 People)",
    "interventions": [
      {
        "id": "int-46-1",
        "type": "Contour Trench",
        "offset": {
          "x": 17.47,
          "y": 8.94
        },
        "height": 2.2,
        "minBudget": 910000
      },
      {
        "id": "int-46-2",
        "type": "Percolation Pit",
        "offset": {
          "x": 14.07,
          "y": 9.54
        },
        "height": 1.4,
        "minBudget": 1300000
      }
    ]
  },
  {
    "id": "spring-47",
    "slNo": 47,
    "code": "SP-047",
    "name": "Kali Khola",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "1024 m",
    "elevationMeters": 1024.1,
    "slope": "18.1°",
    "slopeDeg": 18.1,
    "rainfall": "4050 mm",
    "rainfallMm": 4050,
    "lulc": "Tree cover",
    "distanceToDrainage": 120,
    "flowAccumulation": 333,
    "clay05cm": 266,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 92,
    "suitabilityScore": 87,
    "suitabilityScoreFloat": 86.7,
    "suitabilityTier": "High",
    "priorityScore": 84,
    "priorityScoreFloat": 84.4,
    "priorityTier": "Higher Priority",
    "isTop15": true,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Drainage-line recharge / small check structure",
    "interventionCategory": "Drainage-line Recharge",
    "areaKm2": 0.688,
    "evidenceSupportIndex": 0.701,
    "coords": {
      "x": 27.99,
      "y": -13.43
    },
    "coords3d": {
      "x": 27.99,
      "y": -13.43,
      "z": 6.65
    },
    "gisCoords": {
      "lng": 88.397799,
      "lat": 26.909175
    },
    "historicalDischarge": 0.7,
    "projectedDischarge": 3.3,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 0.7
      },
      {
        "month": "Mar",
        "discharge": 0.5
      },
      {
        "month": "May (Dry)",
        "discharge": 0.2
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 1.5
      },
      {
        "month": "Sep (Post)",
        "discharge": 2.9
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 3.3
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (4050 mm/yr)",
        "contribution": "+28%",
        "positive": true
      },
      {
        "name": "Terrain Slope (18.1°)",
        "contribution": "+19%",
        "positive": true
      },
      {
        "name": "Drainage Distance (120m)",
        "contribution": "+16%",
        "positive": true
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Check Dam Cascade",
        "count": 3,
        "cost": 737500,
        "icon": "Shield"
      },
      {
        "type": "Gully Plugs (Loose Boulder)",
        "count": 12,
        "cost": 368750,
        "icon": "Layers"
      },
      {
        "type": "Infiltration Trench",
        "count": "1.5 km",
        "cost": 368750,
        "icon": "Shovel"
      }
    ],
    "minBudgetRequired": 1475000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "68.8 Hectares",
    "communityBeneficiaries": "475 Households (2187 People)",
    "interventions": [
      {
        "id": "int-47-1",
        "type": "Check Dam",
        "offset": {
          "x": 29.79,
          "y": -11.63
        },
        "height": 2.2,
        "minBudget": 1032500
      },
      {
        "id": "int-47-2",
        "type": "Percolation Pit",
        "offset": {
          "x": 26.39,
          "y": -11.03
        },
        "height": 1.4,
        "minBudget": 1475000
      }
    ]
  },
  {
    "id": "spring-48",
    "slNo": 48,
    "code": "SP-048",
    "name": "Hemay Khola",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "1004 m",
    "elevationMeters": 1003.7,
    "slope": "15.2°",
    "slopeDeg": 15.2,
    "rainfall": "4050 mm",
    "rainfallMm": 4050,
    "lulc": "Tree cover",
    "distanceToDrainage": 350,
    "flowAccumulation": 14,
    "clay05cm": 268,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 88,
    "suitabilityScore": 63,
    "suitabilityScoreFloat": 62.6,
    "suitabilityTier": "Moderate",
    "priorityScore": 74,
    "priorityScoreFloat": 74.2,
    "priorityTier": "Higher Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Site-specific recharge assessment",
    "interventionCategory": "Site-specific Assessment",
    "areaKm2": 1.75,
    "evidenceSupportIndex": 0.763,
    "coords": {
      "x": 28.57,
      "y": -3.06
    },
    "coords3d": {
      "x": 28.57,
      "y": -3.06,
      "z": 6.51
    },
    "gisCoords": {
      "lng": 88.399132,
      "lat": 26.94154
    },
    "historicalDischarge": 0.9,
    "projectedDischarge": 3.8,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 0.9
      },
      {
        "month": "Mar",
        "discharge": 0.7
      },
      {
        "month": "May (Dry)",
        "discharge": 0.3
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 2
      },
      {
        "month": "Sep (Post)",
        "discharge": 3.3
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 3.8
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (4050 mm/yr)",
        "contribution": "+28%",
        "positive": true
      },
      {
        "name": "Terrain Slope (15.2°)",
        "contribution": "+19%",
        "positive": true
      },
      {
        "name": "Drainage Distance (350m)",
        "contribution": "-10%",
        "positive": false
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Staggered Trenching & Pits",
        "count": "2.0 km",
        "cost": 607500,
        "icon": "Shovel"
      },
      {
        "type": "Vegetative Filter Strips",
        "count": "4 Hectares",
        "cost": 405000,
        "icon": "Trees"
      },
      {
        "type": "Check Structure",
        "count": 2,
        "cost": 337500,
        "icon": "Shield"
      }
    ],
    "minBudgetRequired": 1350000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "175.0 Hectares",
    "communityBeneficiaries": "440 Households (2023 People)",
    "interventions": [
      {
        "id": "int-48-1",
        "type": "Contour Trench",
        "offset": {
          "x": 30.37,
          "y": -1.26
        },
        "height": 2.2,
        "minBudget": 945000
      },
      {
        "id": "int-48-2",
        "type": "Percolation Pit",
        "offset": {
          "x": 26.97,
          "y": -0.66
        },
        "height": 1.4,
        "minBudget": 1350000
      }
    ]
  },
  {
    "id": "spring-49",
    "slNo": 49,
    "code": "SP-049",
    "name": "Kali Khola",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "1024 m",
    "elevationMeters": 1024.1,
    "slope": "18.1°",
    "slopeDeg": 18.1,
    "rainfall": "4050 mm",
    "rainfallMm": 4050,
    "lulc": "Tree cover",
    "distanceToDrainage": 120,
    "flowAccumulation": 333,
    "clay05cm": 266,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 92,
    "suitabilityScore": 87,
    "suitabilityScoreFloat": 86.7,
    "suitabilityTier": "High",
    "priorityScore": 84,
    "priorityScoreFloat": 84.4,
    "priorityTier": "Higher Priority",
    "isTop15": true,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Drainage-line recharge / small check structure",
    "interventionCategory": "Drainage-line Recharge",
    "areaKm2": 0.688,
    "evidenceSupportIndex": 0.701,
    "coords": {
      "x": 27.99,
      "y": -13.43
    },
    "coords3d": {
      "x": 27.99,
      "y": -13.43,
      "z": 6.65
    },
    "gisCoords": {
      "lng": 88.397799,
      "lat": 26.909175
    },
    "historicalDischarge": 0.7,
    "projectedDischarge": 3.3,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 0.7
      },
      {
        "month": "Mar",
        "discharge": 0.5
      },
      {
        "month": "May (Dry)",
        "discharge": 0.2
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 1.5
      },
      {
        "month": "Sep (Post)",
        "discharge": 2.9
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 3.3
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (4050 mm/yr)",
        "contribution": "+28%",
        "positive": true
      },
      {
        "name": "Terrain Slope (18.1°)",
        "contribution": "+19%",
        "positive": true
      },
      {
        "name": "Drainage Distance (120m)",
        "contribution": "+16%",
        "positive": true
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Check Dam Cascade",
        "count": 3,
        "cost": 737500,
        "icon": "Shield"
      },
      {
        "type": "Gully Plugs (Loose Boulder)",
        "count": 12,
        "cost": 368750,
        "icon": "Layers"
      },
      {
        "type": "Infiltration Trench",
        "count": "1.5 km",
        "cost": 368750,
        "icon": "Shovel"
      }
    ],
    "minBudgetRequired": 1475000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "68.8 Hectares",
    "communityBeneficiaries": "475 Households (2187 People)",
    "interventions": [
      {
        "id": "int-49-1",
        "type": "Check Dam",
        "offset": {
          "x": 29.79,
          "y": -11.63
        },
        "height": 2.2,
        "minBudget": 1032500
      },
      {
        "id": "int-49-2",
        "type": "Percolation Pit",
        "offset": {
          "x": 26.39,
          "y": -11.03
        },
        "height": 1.4,
        "minBudget": 1475000
      }
    ]
  },
  {
    "id": "spring-50",
    "slNo": 50,
    "code": "SP-050",
    "name": "Baidang Jhora",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "1004 m",
    "elevationMeters": 1003.7,
    "slope": "22.4°",
    "slopeDeg": 22.4,
    "rainfall": "4050 mm",
    "rainfallMm": 4050,
    "lulc": "Tree cover",
    "distanceToDrainage": 144,
    "flowAccumulation": 22,
    "clay05cm": 253,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 90,
    "suitabilityScore": 72,
    "suitabilityScoreFloat": 72.4,
    "suitabilityTier": "High",
    "priorityScore": 81,
    "priorityScoreFloat": 80.8,
    "priorityTier": "Higher Priority",
    "isTop15": true,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Contour trench / infiltration treatment",
    "interventionCategory": "Contour / Infiltration",
    "areaKm2": 1.732,
    "evidenceSupportIndex": 0.818,
    "coords": {
      "x": 26.18,
      "y": -5.61
    },
    "coords3d": {
      "x": 26.18,
      "y": -5.61,
      "z": 6.51
    },
    "gisCoords": {
      "lng": 88.393702,
      "lat": 26.933586
    },
    "historicalDischarge": 0.8,
    "projectedDischarge": 3.5,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 0.8
      },
      {
        "month": "Mar",
        "discharge": 0.6
      },
      {
        "month": "May (Dry)",
        "discharge": 0.3
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 1.8
      },
      {
        "month": "Sep (Post)",
        "discharge": 3.1
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 3.5
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (4050 mm/yr)",
        "contribution": "+28%",
        "positive": true
      },
      {
        "name": "Terrain Slope (22.4°)",
        "contribution": "+11%",
        "positive": true
      },
      {
        "name": "Drainage Distance (144m)",
        "contribution": "+16%",
        "positive": true
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Continuous Contour Trench",
        "count": "1800 m",
        "cost": 641250,
        "icon": "Shovel"
      },
      {
        "type": "Percolation Pits",
        "count": 18,
        "cost": 427500,
        "icon": "Waves"
      },
      {
        "type": "Catchment Afforestation",
        "count": "3.5 Hectares",
        "cost": 356250,
        "icon": "Trees"
      }
    ],
    "minBudgetRequired": 1425000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "173.2 Hectares",
    "communityBeneficiaries": "463 Households (2129 People)",
    "interventions": [
      {
        "id": "int-50-1",
        "type": "Contour Trench",
        "offset": {
          "x": 27.98,
          "y": -3.81
        },
        "height": 2.2,
        "minBudget": 997500
      },
      {
        "id": "int-50-2",
        "type": "Percolation Pit",
        "offset": {
          "x": 24.58,
          "y": -3.21
        },
        "height": 1.4,
        "minBudget": 1425000
      }
    ]
  },
  {
    "id": "spring-51",
    "slNo": 51,
    "code": "SP-051",
    "name": "Thapa Dhara",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "1059 m",
    "elevationMeters": 1058.7,
    "slope": "10.3°",
    "slopeDeg": 10.3,
    "rainfall": "4050 mm",
    "rainfallMm": 4050,
    "lulc": "Tree cover",
    "distanceToDrainage": 28,
    "flowAccumulation": 4,
    "clay05cm": 265,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 89,
    "suitabilityScore": 66,
    "suitabilityScoreFloat": 65.7,
    "suitabilityTier": "Moderate",
    "priorityScore": 78,
    "priorityScoreFloat": 77.5,
    "priorityTier": "Higher Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Site-specific recharge assessment",
    "interventionCategory": "Site-specific Assessment",
    "areaKm2": 1.861,
    "evidenceSupportIndex": 0.821,
    "coords": {
      "x": 18.46,
      "y": -7.68
    },
    "coords3d": {
      "x": 18.46,
      "y": -7.68,
      "z": 6.89
    },
    "gisCoords": {
      "lng": 88.376209,
      "lat": 26.927126
    },
    "historicalDischarge": 0.8,
    "projectedDischarge": 3.4,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 0.8
      },
      {
        "month": "Mar",
        "discharge": 0.6
      },
      {
        "month": "May (Dry)",
        "discharge": 0.3
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 1.8
      },
      {
        "month": "Sep (Post)",
        "discharge": 3
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 3.4
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (4050 mm/yr)",
        "contribution": "+28%",
        "positive": true
      },
      {
        "name": "Terrain Slope (10.3°)",
        "contribution": "+19%",
        "positive": true
      },
      {
        "name": "Drainage Distance (28m)",
        "contribution": "+16%",
        "positive": true
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Staggered Trenching & Pits",
        "count": "2.0 km",
        "cost": 618750,
        "icon": "Shovel"
      },
      {
        "type": "Vegetative Filter Strips",
        "count": "4 Hectares",
        "cost": 412500,
        "icon": "Trees"
      },
      {
        "type": "Check Structure",
        "count": 2,
        "cost": 343750,
        "icon": "Shield"
      }
    ],
    "minBudgetRequired": 1375000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "186.1 Hectares",
    "communityBeneficiaries": "451 Households (2076 People)",
    "interventions": [
      {
        "id": "int-51-1",
        "type": "Contour Trench",
        "offset": {
          "x": 20.26,
          "y": -5.88
        },
        "height": 2.2,
        "minBudget": 962500
      },
      {
        "id": "int-51-2",
        "type": "Percolation Pit",
        "offset": {
          "x": 16.86,
          "y": -5.28
        },
        "height": 1.4,
        "minBudget": 1375000
      }
    ]
  },
  {
    "id": "spring-52",
    "slNo": 52,
    "code": "SP-052",
    "name": "Sajbotay Dhara",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "1428 m",
    "elevationMeters": 1428.1,
    "slope": "11°",
    "slopeDeg": 11,
    "rainfall": "3029 mm",
    "rainfallMm": 3029,
    "lulc": "Tree cover",
    "distanceToDrainage": 120,
    "flowAccumulation": 275,
    "clay05cm": 282,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 89,
    "suitabilityScore": 69,
    "suitabilityScoreFloat": 69.3,
    "suitabilityTier": "Moderate",
    "priorityScore": 78,
    "priorityScoreFloat": 78.4,
    "priorityTier": "Higher Priority",
    "isTop15": true,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Drainage-line recharge / small check structure",
    "interventionCategory": "Drainage-line Recharge",
    "areaKm2": 1.974,
    "evidenceSupportIndex": 0.791,
    "coords": {
      "x": 0.74,
      "y": -3.95
    },
    "coords3d": {
      "x": 0.74,
      "y": -3.95,
      "z": 9.49
    },
    "gisCoords": {
      "lng": 88.336026,
      "lat": 26.938771
    },
    "historicalDischarge": 0.8,
    "projectedDischarge": 3.5,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 0.8
      },
      {
        "month": "Mar",
        "discharge": 0.6
      },
      {
        "month": "May (Dry)",
        "discharge": 0.3
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 1.8
      },
      {
        "month": "Sep (Post)",
        "discharge": 3.1
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 3.5
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3029 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (11°)",
        "contribution": "+19%",
        "positive": true
      },
      {
        "name": "Drainage Distance (120m)",
        "contribution": "+16%",
        "positive": true
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Check Dam Cascade",
        "count": 3,
        "cost": 700000,
        "icon": "Shield"
      },
      {
        "type": "Gully Plugs (Loose Boulder)",
        "count": 12,
        "cost": 350000,
        "icon": "Layers"
      },
      {
        "type": "Infiltration Trench",
        "count": "1.5 km",
        "cost": 350000,
        "icon": "Shovel"
      }
    ],
    "minBudgetRequired": 1400000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "197.4 Hectares",
    "communityBeneficiaries": "454 Households (2090 People)",
    "interventions": [
      {
        "id": "int-52-1",
        "type": "Check Dam",
        "offset": {
          "x": 2.54,
          "y": -2.15
        },
        "height": 2.2,
        "minBudget": 980000
      },
      {
        "id": "int-52-2",
        "type": "Percolation Pit",
        "offset": {
          "x": -0.86,
          "y": -1.55
        },
        "height": 1.4,
        "minBudget": 1400000
      }
    ]
  },
  {
    "id": "spring-53",
    "slNo": 53,
    "code": "SP-053",
    "name": "Panisar Dhara",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "1004 m",
    "elevationMeters": 1003.7,
    "slope": "23.6°",
    "slopeDeg": 23.6,
    "rainfall": "3029 mm",
    "rainfallMm": 3029,
    "lulc": "Tree cover",
    "distanceToDrainage": 103,
    "flowAccumulation": 6,
    "clay05cm": 257,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 87,
    "suitabilityScore": 56,
    "suitabilityScoreFloat": 55.8,
    "suitabilityTier": "Moderate",
    "priorityScore": 74,
    "priorityScoreFloat": 73.7,
    "priorityTier": "Higher Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Site-specific recharge assessment",
    "interventionCategory": "Site-specific Assessment",
    "areaKm2": 1.84,
    "evidenceSupportIndex": 0.86,
    "coords": {
      "x": 17.82,
      "y": -7.51
    },
    "coords3d": {
      "x": 17.82,
      "y": -7.51,
      "z": 6.51
    },
    "gisCoords": {
      "lng": 88.37475,
      "lat": 26.927637
    },
    "historicalDischarge": 0.9,
    "projectedDischarge": 3.6,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 0.9
      },
      {
        "month": "Mar",
        "discharge": 0.7
      },
      {
        "month": "May (Dry)",
        "discharge": 0.3
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 2
      },
      {
        "month": "Sep (Post)",
        "discharge": 3.2
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 3.6
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3029 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (23.6°)",
        "contribution": "+11%",
        "positive": true
      },
      {
        "name": "Drainage Distance (103m)",
        "contribution": "+16%",
        "positive": true
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Staggered Trenching & Pits",
        "count": "2.0 km",
        "cost": 596250,
        "icon": "Shovel"
      },
      {
        "type": "Vegetative Filter Strips",
        "count": "4 Hectares",
        "cost": 397500,
        "icon": "Trees"
      },
      {
        "type": "Check Structure",
        "count": 2,
        "cost": 331250,
        "icon": "Shield"
      }
    ],
    "minBudgetRequired": 1325000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "184.0 Hectares",
    "communityBeneficiaries": "438 Households (2015 People)",
    "interventions": [
      {
        "id": "int-53-1",
        "type": "Contour Trench",
        "offset": {
          "x": 19.62,
          "y": -5.71
        },
        "height": 2.2,
        "minBudget": 927500
      },
      {
        "id": "int-53-2",
        "type": "Percolation Pit",
        "offset": {
          "x": 16.22,
          "y": -5.11
        },
        "height": 1.4,
        "minBudget": 1325000
      }
    ]
  },
  {
    "id": "spring-54",
    "slNo": 54,
    "code": "SP-054",
    "name": "Namung Source",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "1226 m",
    "elevationMeters": 1226.4,
    "slope": "29°",
    "slopeDeg": 29,
    "rainfall": "4050 mm",
    "rainfallMm": 4050,
    "lulc": "Tree cover",
    "distanceToDrainage": 28,
    "flowAccumulation": 9,
    "clay05cm": 265,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 90,
    "suitabilityScore": 73,
    "suitabilityScoreFloat": 72.8,
    "suitabilityTier": "High",
    "priorityScore": 78,
    "priorityScoreFloat": 77.9,
    "priorityTier": "Higher Priority",
    "isTop15": true,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Contour trench / infiltration treatment",
    "interventionCategory": "Contour / Infiltration",
    "areaKm2": 0.652,
    "evidenceSupportIndex": 0.718,
    "coords": {
      "x": 27.98,
      "y": -9.68
    },
    "coords3d": {
      "x": 27.98,
      "y": -9.68,
      "z": 8.07
    },
    "gisCoords": {
      "lng": 88.397795,
      "lat": 26.92088
    },
    "historicalDischarge": 0.8,
    "projectedDischarge": 3.5,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 0.8
      },
      {
        "month": "Mar",
        "discharge": 0.6
      },
      {
        "month": "May (Dry)",
        "discharge": 0.3
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 1.8
      },
      {
        "month": "Sep (Post)",
        "discharge": 3.1
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 3.5
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (4050 mm/yr)",
        "contribution": "+28%",
        "positive": true
      },
      {
        "name": "Terrain Slope (29°)",
        "contribution": "-15%",
        "positive": false
      },
      {
        "name": "Drainage Distance (28m)",
        "contribution": "+16%",
        "positive": true
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Continuous Contour Trench",
        "count": "2300 m",
        "cost": 618750,
        "icon": "Shovel"
      },
      {
        "type": "Percolation Pits",
        "count": 18,
        "cost": 412500,
        "icon": "Waves"
      },
      {
        "type": "Catchment Afforestation",
        "count": "3.5 Hectares",
        "cost": 343750,
        "icon": "Trees"
      }
    ],
    "minBudgetRequired": 1375000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "65.3 Hectares",
    "communityBeneficiaries": "453 Households (2082 People)",
    "interventions": [
      {
        "id": "int-54-1",
        "type": "Contour Trench",
        "offset": {
          "x": 29.78,
          "y": -7.88
        },
        "height": 2.2,
        "minBudget": 962500
      },
      {
        "id": "int-54-2",
        "type": "Percolation Pit",
        "offset": {
          "x": 26.38,
          "y": -7.28
        },
        "height": 1.4,
        "minBudget": 1375000
      }
    ]
  },
  {
    "id": "spring-55",
    "slNo": 55,
    "code": "SP-055",
    "name": "Mandir Gairy Dhara",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "1635 m",
    "elevationMeters": 1634.6,
    "slope": "30.5°",
    "slopeDeg": 30.5,
    "rainfall": "3029 mm",
    "rainfallMm": 3029,
    "lulc": "Tree cover",
    "distanceToDrainage": 247,
    "flowAccumulation": 6,
    "clay05cm": 277,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 86,
    "suitabilityScore": 50,
    "suitabilityScoreFloat": 50.4,
    "suitabilityTier": "Moderate",
    "priorityScore": 43,
    "priorityScoreFloat": 42.8,
    "priorityTier": "Moderate Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "High",
    "indicativeIntervention": "Contour trench / staggered trench",
    "interventionCategory": "Contour / Infiltration",
    "areaKm2": 0.4,
    "evidenceSupportIndex": 0.686,
    "coords": {
      "x": 5.49,
      "y": -10.77
    },
    "coords3d": {
      "x": 5.49,
      "y": -10.77,
      "z": 10.94
    },
    "gisCoords": {
      "lng": 88.346795,
      "lat": 26.917494
    },
    "historicalDischarge": 1.4,
    "projectedDischarge": 5.5,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 1.4
      },
      {
        "month": "Mar",
        "discharge": 1
      },
      {
        "month": "May (Dry)",
        "discharge": 0.5
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 3.1
      },
      {
        "month": "Sep (Post)",
        "discharge": 4.8
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 5.5
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3029 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (30.5°)",
        "contribution": "-15%",
        "positive": false
      },
      {
        "name": "Drainage Distance (247m)",
        "contribution": "-10%",
        "positive": false
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Continuous Contour Trench",
        "count": "2400 m",
        "cost": 438750,
        "icon": "Shovel"
      },
      {
        "type": "Percolation Pits",
        "count": 18,
        "cost": 292500,
        "icon": "Waves"
      },
      {
        "type": "Catchment Afforestation",
        "count": "3.5 Hectares",
        "cost": 243750,
        "icon": "Trees"
      }
    ],
    "minBudgetRequired": 975000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "40.0 Hectares",
    "communityBeneficiaries": "330 Households (1517 People)",
    "interventions": [
      {
        "id": "int-55-1",
        "type": "Contour Trench",
        "offset": {
          "x": 7.29,
          "y": -8.97
        },
        "height": 2.2,
        "minBudget": 682500
      },
      {
        "id": "int-55-2",
        "type": "Percolation Pit",
        "offset": {
          "x": 3.89,
          "y": -8.37
        },
        "height": 1.4,
        "minBudget": 975000
      }
    ]
  },
  {
    "id": "spring-56",
    "slNo": 56,
    "code": "SP-056",
    "name": "Kalimati Dhara",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "1030 m",
    "elevationMeters": 1030.3,
    "slope": "16.1°",
    "slopeDeg": 16.1,
    "rainfall": "3245 mm",
    "rainfallMm": 3245,
    "lulc": "Tree cover",
    "distanceToDrainage": 226,
    "flowAccumulation": 1,
    "clay05cm": 245,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 85,
    "suitabilityScore": 46,
    "suitabilityScoreFloat": 45.9,
    "suitabilityTier": "Moderate",
    "priorityScore": 63,
    "priorityScoreFloat": 63,
    "priorityTier": "Higher Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Site-specific recharge assessment",
    "interventionCategory": "Site-specific Assessment",
    "areaKm2": 0.018,
    "evidenceSupportIndex": 0.667,
    "coords": {
      "x": -7.54,
      "y": -30.88
    },
    "coords3d": {
      "x": -7.54,
      "y": -30.88,
      "z": 6.7
    },
    "gisCoords": {
      "lng": 88.317258,
      "lat": 26.854727
    },
    "historicalDischarge": 1.1,
    "projectedDischarge": 4.2,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 1.1
      },
      {
        "month": "Mar",
        "discharge": 0.8
      },
      {
        "month": "May (Dry)",
        "discharge": 0.4
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 2.4
      },
      {
        "month": "Sep (Post)",
        "discharge": 3.7
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 4.2
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3245 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (16.1°)",
        "contribution": "+19%",
        "positive": true
      },
      {
        "name": "Drainage Distance (226m)",
        "contribution": "-10%",
        "positive": false
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Staggered Trenching & Pits",
        "count": "2.0 km",
        "cost": 540000,
        "icon": "Shovel"
      },
      {
        "type": "Vegetative Filter Strips",
        "count": "4 Hectares",
        "cost": 360000,
        "icon": "Trees"
      },
      {
        "type": "Check Structure",
        "count": 2,
        "cost": 300000,
        "icon": "Shield"
      }
    ],
    "minBudgetRequired": 1200000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "1.8 Hectares",
    "communityBeneficiaries": "401 Households (1842 People)",
    "interventions": [
      {
        "id": "int-56-1",
        "type": "Contour Trench",
        "offset": {
          "x": -5.74,
          "y": -29.08
        },
        "height": 2.2,
        "minBudget": 840000
      },
      {
        "id": "int-56-2",
        "type": "Percolation Pit",
        "offset": {
          "x": -9.14,
          "y": -28.48
        },
        "height": 1.4,
        "minBudget": 1200000
      }
    ]
  },
  {
    "id": "spring-57",
    "slNo": 57,
    "code": "SP-057",
    "name": "Shiva Dhara",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "292 m",
    "elevationMeters": 292.3,
    "slope": "13.8°",
    "slopeDeg": 13.8,
    "rainfall": "3245 mm",
    "rainfallMm": 3245,
    "lulc": "Tree cover",
    "distanceToDrainage": 207,
    "flowAccumulation": 2,
    "clay05cm": 239,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 85,
    "suitabilityScore": 45,
    "suitabilityScoreFloat": 45.3,
    "suitabilityTier": "Moderate",
    "priorityScore": 70,
    "priorityScoreFloat": 70,
    "priorityTier": "Higher Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Site-specific recharge assessment",
    "interventionCategory": "Site-specific Assessment",
    "areaKm2": 2.26,
    "evidenceSupportIndex": 0.91,
    "coords": {
      "x": 11.72,
      "y": -27.68
    },
    "coords3d": {
      "x": 11.72,
      "y": -27.68,
      "z": 1.52
    },
    "gisCoords": {
      "lng": 88.360933,
      "lat": 26.864728
    },
    "historicalDischarge": 0.9,
    "projectedDischarge": 3.4,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 0.9
      },
      {
        "month": "Mar",
        "discharge": 0.7
      },
      {
        "month": "May (Dry)",
        "discharge": 0.3
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 2
      },
      {
        "month": "Sep (Post)",
        "discharge": 3
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 3.4
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3245 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (13.8°)",
        "contribution": "+19%",
        "positive": true
      },
      {
        "name": "Drainage Distance (207m)",
        "contribution": "-10%",
        "positive": false
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Staggered Trenching & Pits",
        "count": "2.0 km",
        "cost": 585000,
        "icon": "Shovel"
      },
      {
        "type": "Vegetative Filter Strips",
        "count": "4 Hectares",
        "cost": 390000,
        "icon": "Trees"
      },
      {
        "type": "Check Structure",
        "count": 2,
        "cost": 325000,
        "icon": "Shield"
      }
    ],
    "minBudgetRequired": 1300000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "226.0 Hectares",
    "communityBeneficiaries": "425 Households (1955 People)",
    "interventions": [
      {
        "id": "int-57-1",
        "type": "Contour Trench",
        "offset": {
          "x": 13.52,
          "y": -25.88
        },
        "height": 2.2,
        "minBudget": 910000
      },
      {
        "id": "int-57-2",
        "type": "Percolation Pit",
        "offset": {
          "x": 10.12,
          "y": -25.28
        },
        "height": 1.4,
        "minBudget": 1300000
      }
    ]
  },
  {
    "id": "spring-58",
    "slNo": 58,
    "code": "SP-058",
    "name": "14 Mile Jhora",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "535 m",
    "elevationMeters": 534.8,
    "slope": "15.5°",
    "slopeDeg": 15.5,
    "rainfall": "3245 mm",
    "rainfallMm": 3245,
    "lulc": "Tree cover",
    "distanceToDrainage": 331,
    "flowAccumulation": 5,
    "clay05cm": 234,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 85,
    "suitabilityScore": 44,
    "suitabilityScoreFloat": 44.1,
    "suitabilityTier": "Moderate",
    "priorityScore": 62,
    "priorityScoreFloat": 62.1,
    "priorityTier": "Higher Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Site-specific recharge assessment",
    "interventionCategory": "Site-specific Assessment",
    "areaKm2": 1.655,
    "evidenceSupportIndex": 0.667,
    "coords": {
      "x": 7.7,
      "y": -35.2
    },
    "coords3d": {
      "x": 7.7,
      "y": -35.2,
      "z": 3.22
    },
    "gisCoords": {
      "lng": 88.351823,
      "lat": 26.841244
    },
    "historicalDischarge": 1.1,
    "projectedDischarge": 4.1,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 1.1
      },
      {
        "month": "Mar",
        "discharge": 0.8
      },
      {
        "month": "May (Dry)",
        "discharge": 0.4
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 2.4
      },
      {
        "month": "Sep (Post)",
        "discharge": 3.6
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 4.1
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3245 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (15.5°)",
        "contribution": "+19%",
        "positive": true
      },
      {
        "name": "Drainage Distance (331m)",
        "contribution": "-10%",
        "positive": false
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Staggered Trenching & Pits",
        "count": "2.0 km",
        "cost": 540000,
        "icon": "Shovel"
      },
      {
        "type": "Vegetative Filter Strips",
        "count": "4 Hectares",
        "cost": 360000,
        "icon": "Trees"
      },
      {
        "type": "Check Structure",
        "count": 2,
        "cost": 300000,
        "icon": "Shield"
      }
    ],
    "minBudgetRequired": 1200000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "165.5 Hectares",
    "communityBeneficiaries": "397 Households (1828 People)",
    "interventions": [
      {
        "id": "int-58-1",
        "type": "Contour Trench",
        "offset": {
          "x": 9.5,
          "y": -33.4
        },
        "height": 2.2,
        "minBudget": 840000
      },
      {
        "id": "int-58-2",
        "type": "Percolation Pit",
        "offset": {
          "x": 6.1,
          "y": -32.8
        },
        "height": 1.4,
        "minBudget": 1200000
      }
    ]
  },
  {
    "id": "spring-59",
    "slNo": 59,
    "code": "SP-059",
    "name": "Bar Pipal Dhara",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "535 m",
    "elevationMeters": 534.8,
    "slope": "15.5°",
    "slopeDeg": 15.5,
    "rainfall": "3245 mm",
    "rainfallMm": 3245,
    "lulc": "Tree cover",
    "distanceToDrainage": 331,
    "flowAccumulation": 5,
    "clay05cm": 234,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 85,
    "suitabilityScore": 44,
    "suitabilityScoreFloat": 44.1,
    "suitabilityTier": "Moderate",
    "priorityScore": 62,
    "priorityScoreFloat": 62.1,
    "priorityTier": "Higher Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Site-specific recharge assessment",
    "interventionCategory": "Site-specific Assessment",
    "areaKm2": 1.655,
    "evidenceSupportIndex": 0.667,
    "coords": {
      "x": 7.7,
      "y": -35.2
    },
    "coords3d": {
      "x": 7.7,
      "y": -35.2,
      "z": 3.22
    },
    "gisCoords": {
      "lng": 88.351823,
      "lat": 26.841244
    },
    "historicalDischarge": 1.1,
    "projectedDischarge": 4.1,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 1.1
      },
      {
        "month": "Mar",
        "discharge": 0.8
      },
      {
        "month": "May (Dry)",
        "discharge": 0.4
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 2.4
      },
      {
        "month": "Sep (Post)",
        "discharge": 3.6
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 4.1
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3245 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (15.5°)",
        "contribution": "+19%",
        "positive": true
      },
      {
        "name": "Drainage Distance (331m)",
        "contribution": "-10%",
        "positive": false
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Staggered Trenching & Pits",
        "count": "2.0 km",
        "cost": 540000,
        "icon": "Shovel"
      },
      {
        "type": "Vegetative Filter Strips",
        "count": "4 Hectares",
        "cost": 360000,
        "icon": "Trees"
      },
      {
        "type": "Check Structure",
        "count": 2,
        "cost": 300000,
        "icon": "Shield"
      }
    ],
    "minBudgetRequired": 1200000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "165.5 Hectares",
    "communityBeneficiaries": "397 Households (1828 People)",
    "interventions": [
      {
        "id": "int-59-1",
        "type": "Contour Trench",
        "offset": {
          "x": 9.5,
          "y": -33.4
        },
        "height": 2.2,
        "minBudget": 840000
      },
      {
        "id": "int-59-2",
        "type": "Percolation Pit",
        "offset": {
          "x": 6.1,
          "y": -32.8
        },
        "height": 1.4,
        "minBudget": 1200000
      }
    ]
  },
  {
    "id": "spring-60",
    "slNo": 60,
    "code": "SP-060",
    "name": "Hotel Gairy Dhara",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "860 m",
    "elevationMeters": 859.6,
    "slope": "30.1°",
    "slopeDeg": 30.1,
    "rainfall": "3245 mm",
    "rainfallMm": 3245,
    "lulc": "Tree cover",
    "distanceToDrainage": 226,
    "flowAccumulation": 15,
    "clay05cm": 261,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 87,
    "suitabilityScore": 54,
    "suitabilityScoreFloat": 53.8,
    "suitabilityTier": "Moderate",
    "priorityScore": 44,
    "priorityScoreFloat": 43.6,
    "priorityTier": "Moderate Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "High",
    "indicativeIntervention": "Contour trench / staggered trench",
    "interventionCategory": "Contour / Infiltration",
    "areaKm2": 0.343,
    "evidenceSupportIndex": 0.67,
    "coords": {
      "x": -1.19,
      "y": -31.85
    },
    "coords3d": {
      "x": -1.19,
      "y": -31.85,
      "z": 5.5
    },
    "gisCoords": {
      "lng": 88.331659,
      "lat": 26.851695
    },
    "historicalDischarge": 1.3,
    "projectedDischarge": 5.2,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 1.3
      },
      {
        "month": "Mar",
        "discharge": 1
      },
      {
        "month": "May (Dry)",
        "discharge": 0.5
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 2.9
      },
      {
        "month": "Sep (Post)",
        "discharge": 4.6
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 5.2
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3245 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (30.1°)",
        "contribution": "-15%",
        "positive": false
      },
      {
        "name": "Drainage Distance (226m)",
        "contribution": "-10%",
        "positive": false
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Continuous Contour Trench",
        "count": "2400 m",
        "cost": 438750,
        "icon": "Shovel"
      },
      {
        "type": "Percolation Pits",
        "count": 18,
        "cost": 292500,
        "icon": "Waves"
      },
      {
        "type": "Catchment Afforestation",
        "count": "3.5 Hectares",
        "cost": 243750,
        "icon": "Trees"
      }
    ],
    "minBudgetRequired": 975000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "34.3 Hectares",
    "communityBeneficiaries": "333 Households (1530 People)",
    "interventions": [
      {
        "id": "int-60-1",
        "type": "Contour Trench",
        "offset": {
          "x": 0.61,
          "y": -30.05
        },
        "height": 2.2,
        "minBudget": 682500
      },
      {
        "id": "int-60-2",
        "type": "Percolation Pit",
        "offset": {
          "x": -2.79,
          "y": -29.45
        },
        "height": 1.4,
        "minBudget": 975000
      }
    ]
  },
  {
    "id": "spring-61",
    "slNo": 61,
    "code": "SP-061",
    "name": "School Dhara",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "324 m",
    "elevationMeters": 324.4,
    "slope": "10.5°",
    "slopeDeg": 10.5,
    "rainfall": "3245 mm",
    "rainfallMm": 3245,
    "lulc": "Tree cover",
    "distanceToDrainage": 166,
    "flowAccumulation": 25,
    "clay05cm": 243,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 86,
    "suitabilityScore": 51,
    "suitabilityScoreFloat": 51.1,
    "suitabilityTier": "Moderate",
    "priorityScore": 72,
    "priorityScoreFloat": 72.4,
    "priorityTier": "Higher Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Site-specific recharge assessment",
    "interventionCategory": "Site-specific Assessment",
    "areaKm2": 2.266,
    "evidenceSupportIndex": 0.894,
    "coords": {
      "x": 11.92,
      "y": -25.88
    },
    "coords3d": {
      "x": 11.92,
      "y": -25.88,
      "z": 1.74
    },
    "gisCoords": {
      "lng": 88.361372,
      "lat": 26.870334
    },
    "historicalDischarge": 0.9,
    "projectedDischarge": 3.5,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 0.9
      },
      {
        "month": "Mar",
        "discharge": 0.7
      },
      {
        "month": "May (Dry)",
        "discharge": 0.3
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 2
      },
      {
        "month": "Sep (Post)",
        "discharge": 3.1
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 3.5
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3245 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (10.5°)",
        "contribution": "+19%",
        "positive": true
      },
      {
        "name": "Drainage Distance (166m)",
        "contribution": "-10%",
        "positive": false
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Staggered Trenching & Pits",
        "count": "2.0 km",
        "cost": 596250,
        "icon": "Shovel"
      },
      {
        "type": "Vegetative Filter Strips",
        "count": "4 Hectares",
        "cost": 397500,
        "icon": "Trees"
      },
      {
        "type": "Check Structure",
        "count": 2,
        "cost": 331250,
        "icon": "Shield"
      }
    ],
    "minBudgetRequired": 1325000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "226.6 Hectares",
    "communityBeneficiaries": "433 Households (1994 People)",
    "interventions": [
      {
        "id": "int-61-1",
        "type": "Contour Trench",
        "offset": {
          "x": 13.72,
          "y": -24.08
        },
        "height": 2.2,
        "minBudget": 927500
      },
      {
        "id": "int-61-2",
        "type": "Percolation Pit",
        "offset": {
          "x": 10.32,
          "y": -23.48
        },
        "height": 1.4,
        "minBudget": 1325000
      }
    ]
  },
  {
    "id": "spring-62",
    "slNo": 62,
    "code": "SP-062",
    "name": "Jor Dhara",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "710 m",
    "elevationMeters": 710,
    "slope": "31.1°",
    "slopeDeg": 31.1,
    "rainfall": "3245 mm",
    "rainfallMm": 3245,
    "lulc": "Tree cover",
    "distanceToDrainage": 484,
    "flowAccumulation": 5,
    "clay05cm": 253,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 84,
    "suitabilityScore": 39,
    "suitabilityScoreFloat": 39.3,
    "suitabilityTier": "Low",
    "priorityScore": 37,
    "priorityScoreFloat": 37.1,
    "priorityTier": "Lower Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "High",
    "indicativeIntervention": "Contour trench / staggered trench",
    "interventionCategory": "Contour / Infiltration",
    "areaKm2": 1.561,
    "evidenceSupportIndex": 0.583,
    "coords": {
      "x": -21.88,
      "y": -35.1
    },
    "coords3d": {
      "x": -21.88,
      "y": -35.1,
      "z": 4.45
    },
    "gisCoords": {
      "lng": 88.284749,
      "lat": 26.841557
    },
    "historicalDischarge": 1.4,
    "projectedDischarge": 5.1,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 1.4
      },
      {
        "month": "Mar",
        "discharge": 1
      },
      {
        "month": "May (Dry)",
        "discharge": 0.5
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 3.1
      },
      {
        "month": "Sep (Post)",
        "discharge": 4.5
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 5.1
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3245 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (31.1°)",
        "contribution": "-15%",
        "positive": false
      },
      {
        "name": "Drainage Distance (484m)",
        "contribution": "-10%",
        "positive": false
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Continuous Contour Trench",
        "count": "2500 m",
        "cost": 405000,
        "icon": "Shovel"
      },
      {
        "type": "Percolation Pits",
        "count": 18,
        "cost": 270000,
        "icon": "Waves"
      },
      {
        "type": "Catchment Afforestation",
        "count": "3.5 Hectares",
        "cost": 225000,
        "icon": "Trees"
      }
    ],
    "minBudgetRequired": 900000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "156.1 Hectares",
    "communityBeneficiaries": "310 Households (1425 People)",
    "interventions": [
      {
        "id": "int-62-1",
        "type": "Contour Trench",
        "offset": {
          "x": -20.08,
          "y": -33.3
        },
        "height": 2.2,
        "minBudget": 630000
      },
      {
        "id": "int-62-2",
        "type": "Percolation Pit",
        "offset": {
          "x": -23.48,
          "y": -32.7
        },
        "height": 1.4,
        "minBudget": 900000
      }
    ]
  },
  {
    "id": "spring-63",
    "slNo": 63,
    "code": "SP-063",
    "name": "Sarkarey Dhara",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "812 m",
    "elevationMeters": 811.6,
    "slope": "24.4°",
    "slopeDeg": 24.4,
    "rainfall": "3245 mm",
    "rainfallMm": 3245,
    "lulc": "Tree cover",
    "distanceToDrainage": 265,
    "flowAccumulation": 5,
    "clay05cm": 241,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 86,
    "suitabilityScore": 50,
    "suitabilityScoreFloat": 50,
    "suitabilityTier": "Moderate",
    "priorityScore": 63,
    "priorityScoreFloat": 62.7,
    "priorityTier": "Higher Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Site-specific recharge assessment",
    "interventionCategory": "Site-specific Assessment",
    "areaKm2": 1.016,
    "evidenceSupportIndex": 0.589,
    "coords": {
      "x": -20.47,
      "y": -34.44
    },
    "coords3d": {
      "x": -20.47,
      "y": -34.44,
      "z": 5.16
    },
    "gisCoords": {
      "lng": 88.287963,
      "lat": 26.843612
    },
    "historicalDischarge": 1.1,
    "projectedDischarge": 4.3,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 1.1
      },
      {
        "month": "Mar",
        "discharge": 0.8
      },
      {
        "month": "May (Dry)",
        "discharge": 0.4
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 2.4
      },
      {
        "month": "Sep (Post)",
        "discharge": 3.8
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 4.3
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3245 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (24.4°)",
        "contribution": "+11%",
        "positive": true
      },
      {
        "name": "Drainage Distance (265m)",
        "contribution": "-10%",
        "positive": false
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Staggered Trenching & Pits",
        "count": "2.0 km",
        "cost": 540000,
        "icon": "Shovel"
      },
      {
        "type": "Vegetative Filter Strips",
        "count": "4 Hectares",
        "cost": 360000,
        "icon": "Trees"
      },
      {
        "type": "Check Structure",
        "count": 2,
        "cost": 300000,
        "icon": "Shield"
      }
    ],
    "minBudgetRequired": 1200000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "101.6 Hectares",
    "communityBeneficiaries": "399 Households (1837 People)",
    "interventions": [
      {
        "id": "int-63-1",
        "type": "Contour Trench",
        "offset": {
          "x": -18.67,
          "y": -32.64
        },
        "height": 2.2,
        "minBudget": 840000
      },
      {
        "id": "int-63-2",
        "type": "Percolation Pit",
        "offset": {
          "x": -22.07,
          "y": -32.04
        },
        "height": 1.4,
        "minBudget": 1200000
      }
    ]
  },
  {
    "id": "spring-64",
    "slNo": 64,
    "code": "SP-064",
    "name": "Thulo Khola Source",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "1830 m",
    "elevationMeters": 1830.4,
    "slope": "12.3°",
    "slopeDeg": 12.3,
    "rainfall": "3029 mm",
    "rainfallMm": 3029,
    "lulc": "Tree cover",
    "distanceToDrainage": 120,
    "flowAccumulation": 207,
    "clay05cm": 296,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 89,
    "suitabilityScore": 71,
    "suitabilityScoreFloat": 70.7,
    "suitabilityTier": "High",
    "priorityScore": 80,
    "priorityScoreFloat": 79.5,
    "priorityTier": "Higher Priority",
    "isTop15": true,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Drainage-line recharge / small check structure",
    "interventionCategory": "Drainage-line Recharge",
    "areaKm2": 1.344,
    "evidenceSupportIndex": 0.806,
    "coords": {
      "x": -19.23,
      "y": -3.11
    },
    "coords3d": {
      "x": -19.23,
      "y": -3.11,
      "z": 12.31
    },
    "gisCoords": {
      "lng": 88.290763,
      "lat": 26.941396
    },
    "historicalDischarge": 0.8,
    "projectedDischarge": 3.5,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 0.8
      },
      {
        "month": "Mar",
        "discharge": 0.6
      },
      {
        "month": "May (Dry)",
        "discharge": 0.3
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 1.8
      },
      {
        "month": "Sep (Post)",
        "discharge": 3.1
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 3.5
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3029 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (12.3°)",
        "contribution": "+19%",
        "positive": true
      },
      {
        "name": "Drainage Distance (120m)",
        "contribution": "+16%",
        "positive": true
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Check Dam Cascade",
        "count": 3,
        "cost": 700000,
        "icon": "Shield"
      },
      {
        "type": "Gully Plugs (Loose Boulder)",
        "count": 12,
        "cost": 350000,
        "icon": "Layers"
      },
      {
        "type": "Infiltration Trench",
        "count": "1.5 km",
        "cost": 350000,
        "icon": "Shovel"
      }
    ],
    "minBudgetRequired": 1400000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "134.4 Hectares",
    "communityBeneficiaries": "458 Households (2108 People)",
    "interventions": [
      {
        "id": "int-64-1",
        "type": "Check Dam",
        "offset": {
          "x": -17.43,
          "y": -1.31
        },
        "height": 2.2,
        "minBudget": 980000
      },
      {
        "id": "int-64-2",
        "type": "Percolation Pit",
        "offset": {
          "x": -20.83,
          "y": -0.71
        },
        "height": 1.4,
        "minBudget": 1400000
      }
    ]
  },
  {
    "id": "spring-65",
    "slNo": 65,
    "code": "SP-065",
    "name": "Thulo Khola Source",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "1830 m",
    "elevationMeters": 1830.4,
    "slope": "12.3°",
    "slopeDeg": 12.3,
    "rainfall": "3029 mm",
    "rainfallMm": 3029,
    "lulc": "Tree cover",
    "distanceToDrainage": 120,
    "flowAccumulation": 207,
    "clay05cm": 296,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 89,
    "suitabilityScore": 71,
    "suitabilityScoreFloat": 70.7,
    "suitabilityTier": "High",
    "priorityScore": 80,
    "priorityScoreFloat": 79.5,
    "priorityTier": "Higher Priority",
    "isTop15": true,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Drainage-line recharge / small check structure",
    "interventionCategory": "Drainage-line Recharge",
    "areaKm2": 1.344,
    "evidenceSupportIndex": 0.806,
    "coords": {
      "x": -19.23,
      "y": -3.11
    },
    "coords3d": {
      "x": -19.23,
      "y": -3.11,
      "z": 12.31
    },
    "gisCoords": {
      "lng": 88.290763,
      "lat": 26.941396
    },
    "historicalDischarge": 0.8,
    "projectedDischarge": 3.5,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 0.8
      },
      {
        "month": "Mar",
        "discharge": 0.6
      },
      {
        "month": "May (Dry)",
        "discharge": 0.3
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 1.8
      },
      {
        "month": "Sep (Post)",
        "discharge": 3.1
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 3.5
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3029 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (12.3°)",
        "contribution": "+19%",
        "positive": true
      },
      {
        "name": "Drainage Distance (120m)",
        "contribution": "+16%",
        "positive": true
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Check Dam Cascade",
        "count": 3,
        "cost": 700000,
        "icon": "Shield"
      },
      {
        "type": "Gully Plugs (Loose Boulder)",
        "count": 12,
        "cost": 350000,
        "icon": "Layers"
      },
      {
        "type": "Infiltration Trench",
        "count": "1.5 km",
        "cost": 350000,
        "icon": "Shovel"
      }
    ],
    "minBudgetRequired": 1400000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "134.4 Hectares",
    "communityBeneficiaries": "458 Households (2108 People)",
    "interventions": [
      {
        "id": "int-65-1",
        "type": "Check Dam",
        "offset": {
          "x": -17.43,
          "y": -1.31
        },
        "height": 2.2,
        "minBudget": 980000
      },
      {
        "id": "int-65-2",
        "type": "Percolation Pit",
        "offset": {
          "x": -20.83,
          "y": -0.71
        },
        "height": 1.4,
        "minBudget": 1400000
      }
    ]
  },
  {
    "id": "spring-66",
    "slNo": 66,
    "code": "SP-066",
    "name": "Ramitey Dhara",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "1675 m",
    "elevationMeters": 1674.9,
    "slope": "23.6°",
    "slopeDeg": 23.6,
    "rainfall": "3029 mm",
    "rainfallMm": 3029,
    "lulc": "Tree cover",
    "distanceToDrainage": 214,
    "flowAccumulation": 7,
    "clay05cm": 282,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 87,
    "suitabilityScore": 58,
    "suitabilityScoreFloat": 57.5,
    "suitabilityTier": "Moderate",
    "priorityScore": 73,
    "priorityScoreFloat": 73.3,
    "priorityTier": "Higher Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Site-specific recharge assessment",
    "interventionCategory": "Site-specific Assessment",
    "areaKm2": 1.294,
    "evidenceSupportIndex": 0.819,
    "coords": {
      "x": -19.06,
      "y": -10.72
    },
    "coords3d": {
      "x": -19.06,
      "y": -10.72,
      "z": 11.22
    },
    "gisCoords": {
      "lng": 88.291143,
      "lat": 26.917645
    },
    "historicalDischarge": 0.9,
    "projectedDischarge": 3.7,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 0.9
      },
      {
        "month": "Mar",
        "discharge": 0.7
      },
      {
        "month": "May (Dry)",
        "discharge": 0.3
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 2
      },
      {
        "month": "Sep (Post)",
        "discharge": 3.3
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 3.7
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3029 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (23.6°)",
        "contribution": "+11%",
        "positive": true
      },
      {
        "name": "Drainage Distance (214m)",
        "contribution": "-10%",
        "positive": false
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Staggered Trenching & Pits",
        "count": "2.0 km",
        "cost": 596250,
        "icon": "Shovel"
      },
      {
        "type": "Vegetative Filter Strips",
        "count": "4 Hectares",
        "cost": 397500,
        "icon": "Trees"
      },
      {
        "type": "Check Structure",
        "count": 2,
        "cost": 331250,
        "icon": "Shield"
      }
    ],
    "minBudgetRequired": 1325000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "129.4 Hectares",
    "communityBeneficiaries": "437 Households (2008 People)",
    "interventions": [
      {
        "id": "int-66-1",
        "type": "Contour Trench",
        "offset": {
          "x": -17.26,
          "y": -8.92
        },
        "height": 2.2,
        "minBudget": 927500
      },
      {
        "id": "int-66-2",
        "type": "Percolation Pit",
        "offset": {
          "x": -20.66,
          "y": -8.32
        },
        "height": 1.4,
        "minBudget": 1325000
      }
    ]
  },
  {
    "id": "spring-67",
    "slNo": 67,
    "code": "SP-067",
    "name": "Gokul Jhora Source",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "1851 m",
    "elevationMeters": 1851.3,
    "slope": "21.1°",
    "slopeDeg": 21.1,
    "rainfall": "3029 mm",
    "rainfallMm": 3029,
    "lulc": "Tree cover",
    "distanceToDrainage": 340,
    "flowAccumulation": 13,
    "clay05cm": 283,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 87,
    "suitabilityScore": 55,
    "suitabilityScoreFloat": 55,
    "suitabilityTier": "Moderate",
    "priorityScore": 71,
    "priorityScoreFloat": 71.4,
    "priorityTier": "Higher Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Site-specific recharge assessment",
    "interventionCategory": "Site-specific Assessment",
    "areaKm2": 0.626,
    "evidenceSupportIndex": 0.798,
    "coords": {
      "x": -18.47,
      "y": -4.02
    },
    "coords3d": {
      "x": -18.47,
      "y": -4.02,
      "z": 12.46
    },
    "gisCoords": {
      "lng": 88.292486,
      "lat": 26.938527
    },
    "historicalDischarge": 0.9,
    "projectedDischarge": 3.6,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 0.9
      },
      {
        "month": "Mar",
        "discharge": 0.7
      },
      {
        "month": "May (Dry)",
        "discharge": 0.3
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 2
      },
      {
        "month": "Sep (Post)",
        "discharge": 3.2
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 3.6
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3029 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (21.1°)",
        "contribution": "+19%",
        "positive": true
      },
      {
        "name": "Drainage Distance (340m)",
        "contribution": "-10%",
        "positive": false
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Staggered Trenching & Pits",
        "count": "2.0 km",
        "cost": 585000,
        "icon": "Shovel"
      },
      {
        "type": "Vegetative Filter Strips",
        "count": "4 Hectares",
        "cost": 390000,
        "icon": "Trees"
      },
      {
        "type": "Check Structure",
        "count": 2,
        "cost": 325000,
        "icon": "Shield"
      }
    ],
    "minBudgetRequired": 1300000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "62.6 Hectares",
    "communityBeneficiaries": "430 Households (1978 People)",
    "interventions": [
      {
        "id": "int-67-1",
        "type": "Contour Trench",
        "offset": {
          "x": -16.67,
          "y": -2.22
        },
        "height": 2.2,
        "minBudget": 910000
      },
      {
        "id": "int-67-2",
        "type": "Percolation Pit",
        "offset": {
          "x": -20.07,
          "y": -1.62
        },
        "height": 1.4,
        "minBudget": 1300000
      }
    ]
  },
  {
    "id": "spring-68",
    "slNo": 68,
    "code": "SP-068",
    "name": "Gokul Jhora Source",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "1851 m",
    "elevationMeters": 1851.3,
    "slope": "21.1°",
    "slopeDeg": 21.1,
    "rainfall": "3029 mm",
    "rainfallMm": 3029,
    "lulc": "Tree cover",
    "distanceToDrainage": 340,
    "flowAccumulation": 13,
    "clay05cm": 283,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 87,
    "suitabilityScore": 55,
    "suitabilityScoreFloat": 55,
    "suitabilityTier": "Moderate",
    "priorityScore": 71,
    "priorityScoreFloat": 71.4,
    "priorityTier": "Higher Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Site-specific recharge assessment",
    "interventionCategory": "Site-specific Assessment",
    "areaKm2": 0.626,
    "evidenceSupportIndex": 0.798,
    "coords": {
      "x": -18.47,
      "y": -4.02
    },
    "coords3d": {
      "x": -18.47,
      "y": -4.02,
      "z": 12.46
    },
    "gisCoords": {
      "lng": 88.292486,
      "lat": 26.938527
    },
    "historicalDischarge": 0.9,
    "projectedDischarge": 3.6,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 0.9
      },
      {
        "month": "Mar",
        "discharge": 0.7
      },
      {
        "month": "May (Dry)",
        "discharge": 0.3
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 2
      },
      {
        "month": "Sep (Post)",
        "discharge": 3.2
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 3.6
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3029 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (21.1°)",
        "contribution": "+19%",
        "positive": true
      },
      {
        "name": "Drainage Distance (340m)",
        "contribution": "-10%",
        "positive": false
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Staggered Trenching & Pits",
        "count": "2.0 km",
        "cost": 585000,
        "icon": "Shovel"
      },
      {
        "type": "Vegetative Filter Strips",
        "count": "4 Hectares",
        "cost": 390000,
        "icon": "Trees"
      },
      {
        "type": "Check Structure",
        "count": 2,
        "cost": 325000,
        "icon": "Shield"
      }
    ],
    "minBudgetRequired": 1300000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "62.6 Hectares",
    "communityBeneficiaries": "430 Households (1978 People)",
    "interventions": [
      {
        "id": "int-68-1",
        "type": "Contour Trench",
        "offset": {
          "x": -16.67,
          "y": -2.22
        },
        "height": 2.2,
        "minBudget": 910000
      },
      {
        "id": "int-68-2",
        "type": "Percolation Pit",
        "offset": {
          "x": -20.07,
          "y": -1.62
        },
        "height": 1.4,
        "minBudget": 1300000
      }
    ]
  },
  {
    "id": "spring-69",
    "slNo": 69,
    "code": "SP-069",
    "name": "Mathilo Khola",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "940 m",
    "elevationMeters": 940.1,
    "slope": "34.4°",
    "slopeDeg": 34.4,
    "rainfall": "3245 mm",
    "rainfallMm": 3245,
    "lulc": "Tree cover",
    "distanceToDrainage": 284,
    "flowAccumulation": 3,
    "clay05cm": 242,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 85,
    "suitabilityScore": 41,
    "suitabilityScoreFloat": 40.8,
    "suitabilityTier": "Moderate",
    "priorityScore": 37,
    "priorityScoreFloat": 37.4,
    "priorityTier": "Lower Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "High",
    "indicativeIntervention": "Contour trench / staggered trench",
    "interventionCategory": "Contour / Infiltration",
    "areaKm2": 1.462,
    "evidenceSupportIndex": 0.573,
    "coords": {
      "x": -4.6,
      "y": -32.01
    },
    "coords3d": {
      "x": -4.6,
      "y": -32.01,
      "z": 6.06
    },
    "gisCoords": {
      "lng": 88.323941,
      "lat": 26.85119
    },
    "historicalDischarge": 1.4,
    "projectedDischarge": 5.2,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 1.4
      },
      {
        "month": "Mar",
        "discharge": 1
      },
      {
        "month": "May (Dry)",
        "discharge": 0.5
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 3.1
      },
      {
        "month": "Sep (Post)",
        "discharge": 4.6
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 5.2
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3245 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (34.4°)",
        "contribution": "-15%",
        "positive": false
      },
      {
        "name": "Drainage Distance (284m)",
        "contribution": "-10%",
        "positive": false
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Continuous Contour Trench",
        "count": "2800 m",
        "cost": 405000,
        "icon": "Shovel"
      },
      {
        "type": "Percolation Pits",
        "count": 18,
        "cost": 270000,
        "icon": "Waves"
      },
      {
        "type": "Catchment Afforestation",
        "count": "3.5 Hectares",
        "cost": 225000,
        "icon": "Trees"
      }
    ],
    "minBudgetRequired": 900000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "146.3 Hectares",
    "communityBeneficiaries": "311 Households (1430 People)",
    "interventions": [
      {
        "id": "int-69-1",
        "type": "Contour Trench",
        "offset": {
          "x": -2.8,
          "y": -30.21
        },
        "height": 2.2,
        "minBudget": 630000
      },
      {
        "id": "int-69-2",
        "type": "Percolation Pit",
        "offset": {
          "x": -6.2,
          "y": -29.61
        },
        "height": 1.4,
        "minBudget": 900000
      }
    ]
  },
  {
    "id": "spring-70",
    "slNo": 70,
    "code": "SP-070",
    "name": "Ramitey Dhara II",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "1652 m",
    "elevationMeters": 1651.9,
    "slope": "27.8°",
    "slopeDeg": 27.8,
    "rainfall": "3029 mm",
    "rainfallMm": 3029,
    "lulc": "Tree cover",
    "distanceToDrainage": 151,
    "flowAccumulation": 4,
    "clay05cm": 282,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 87,
    "suitabilityScore": 56,
    "suitabilityScoreFloat": 56.3,
    "suitabilityTier": "Moderate",
    "priorityScore": 71,
    "priorityScoreFloat": 70.6,
    "priorityTier": "Higher Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Site-specific recharge assessment",
    "interventionCategory": "Site-specific Assessment",
    "areaKm2": 1.319,
    "evidenceSupportIndex": 0.747,
    "coords": {
      "x": -19.45,
      "y": -10.85
    },
    "coords3d": {
      "x": -19.45,
      "y": -10.85,
      "z": 11.06
    },
    "gisCoords": {
      "lng": 88.290278,
      "lat": 26.917243
    },
    "historicalDischarge": 0.9,
    "projectedDischarge": 3.6,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 0.9
      },
      {
        "month": "Mar",
        "discharge": 0.7
      },
      {
        "month": "May (Dry)",
        "discharge": 0.3
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 2
      },
      {
        "month": "Sep (Post)",
        "discharge": 3.2
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 3.6
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3029 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (27.8°)",
        "contribution": "+11%",
        "positive": true
      },
      {
        "name": "Drainage Distance (151m)",
        "contribution": "-10%",
        "positive": false
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Staggered Trenching & Pits",
        "count": "2.0 km",
        "cost": 585000,
        "icon": "Shovel"
      },
      {
        "type": "Vegetative Filter Strips",
        "count": "4 Hectares",
        "cost": 390000,
        "icon": "Trees"
      },
      {
        "type": "Check Structure",
        "count": 2,
        "cost": 325000,
        "icon": "Shield"
      }
    ],
    "minBudgetRequired": 1300000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "131.9 Hectares",
    "communityBeneficiaries": "427 Households (1965 People)",
    "interventions": [
      {
        "id": "int-70-1",
        "type": "Contour Trench",
        "offset": {
          "x": -17.65,
          "y": -9.05
        },
        "height": 2.2,
        "minBudget": 910000
      },
      {
        "id": "int-70-2",
        "type": "Percolation Pit",
        "offset": {
          "x": -21.05,
          "y": -8.45
        },
        "height": 1.4,
        "minBudget": 1300000
      }
    ]
  },
  {
    "id": "spring-71",
    "slNo": 71,
    "code": "SP-071",
    "name": "Kharey Khola Source",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "1542 m",
    "elevationMeters": 1542,
    "slope": "27.8°",
    "slopeDeg": 27.8,
    "rainfall": "3029 mm",
    "rainfallMm": 3029,
    "lulc": "Tree cover",
    "distanceToDrainage": 28,
    "flowAccumulation": 16,
    "clay05cm": 274,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 88,
    "suitabilityScore": 63,
    "suitabilityScoreFloat": 62.6,
    "suitabilityTier": "Moderate",
    "priorityScore": 74,
    "priorityScoreFloat": 73.6,
    "priorityTier": "Higher Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Site-specific recharge assessment",
    "interventionCategory": "Site-specific Assessment",
    "areaKm2": 0.554,
    "evidenceSupportIndex": 0.746,
    "coords": {
      "x": -21.4,
      "y": -16.84
    },
    "coords3d": {
      "x": -21.4,
      "y": -16.84,
      "z": 10.29
    },
    "gisCoords": {
      "lng": 88.285842,
      "lat": 26.898523
    },
    "historicalDischarge": 0.9,
    "projectedDischarge": 3.8,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 0.9
      },
      {
        "month": "Mar",
        "discharge": 0.7
      },
      {
        "month": "May (Dry)",
        "discharge": 0.3
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 2
      },
      {
        "month": "Sep (Post)",
        "discharge": 3.3
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 3.8
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3029 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (27.8°)",
        "contribution": "+11%",
        "positive": true
      },
      {
        "name": "Drainage Distance (28m)",
        "contribution": "+16%",
        "positive": true
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Staggered Trenching & Pits",
        "count": "2.0 km",
        "cost": 596250,
        "icon": "Shovel"
      },
      {
        "type": "Vegetative Filter Strips",
        "count": "4 Hectares",
        "cost": 397500,
        "icon": "Trees"
      },
      {
        "type": "Check Structure",
        "count": 2,
        "cost": 331250,
        "icon": "Shield"
      }
    ],
    "minBudgetRequired": 1325000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "55.4 Hectares",
    "communityBeneficiaries": "438 Households (2013 People)",
    "interventions": [
      {
        "id": "int-71-1",
        "type": "Contour Trench",
        "offset": {
          "x": -19.6,
          "y": -15.04
        },
        "height": 2.2,
        "minBudget": 927500
      },
      {
        "id": "int-71-2",
        "type": "Percolation Pit",
        "offset": {
          "x": -23,
          "y": -14.44
        },
        "height": 1.4,
        "minBudget": 1325000
      }
    ]
  },
  {
    "id": "spring-72",
    "slNo": 72,
    "code": "SP-072",
    "name": "Chilauney Dhara",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "842 m",
    "elevationMeters": 842.2,
    "slope": "32.7°",
    "slopeDeg": 32.7,
    "rainfall": "3245 mm",
    "rainfallMm": 3245,
    "lulc": "Tree cover",
    "distanceToDrainage": 124,
    "flowAccumulation": 4,
    "clay05cm": 250,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 86,
    "suitabilityScore": 50,
    "suitabilityScoreFloat": 49.6,
    "suitabilityTier": "Moderate",
    "priorityScore": 43,
    "priorityScoreFloat": 43.2,
    "priorityTier": "Moderate Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "High",
    "indicativeIntervention": "Contour trench / staggered trench",
    "interventionCategory": "Contour / Infiltration",
    "areaKm2": 0.574,
    "evidenceSupportIndex": 0.724,
    "coords": {
      "x": -29.8,
      "y": -34.57
    },
    "coords3d": {
      "x": -29.8,
      "y": -34.57,
      "z": 5.38
    },
    "gisCoords": {
      "lng": 88.266805,
      "lat": 26.84321
    },
    "historicalDischarge": 1.4,
    "projectedDischarge": 5.4,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 1.4
      },
      {
        "month": "Mar",
        "discharge": 1
      },
      {
        "month": "May (Dry)",
        "discharge": 0.5
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 3.1
      },
      {
        "month": "Sep (Post)",
        "discharge": 4.8
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 5.4
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3245 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (32.7°)",
        "contribution": "-15%",
        "positive": false
      },
      {
        "name": "Drainage Distance (124m)",
        "contribution": "+16%",
        "positive": true
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Continuous Contour Trench",
        "count": "2600 m",
        "cost": 438750,
        "icon": "Shovel"
      },
      {
        "type": "Percolation Pits",
        "count": 18,
        "cost": 292500,
        "icon": "Waves"
      },
      {
        "type": "Catchment Afforestation",
        "count": "3.5 Hectares",
        "cost": 243750,
        "icon": "Trees"
      }
    ],
    "minBudgetRequired": 975000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "57.4 Hectares",
    "communityBeneficiaries": "331 Households (1524 People)",
    "interventions": [
      {
        "id": "int-72-1",
        "type": "Contour Trench",
        "offset": {
          "x": -28,
          "y": -32.77
        },
        "height": 2.2,
        "minBudget": 682500
      },
      {
        "id": "int-72-2",
        "type": "Percolation Pit",
        "offset": {
          "x": -31.4,
          "y": -32.17
        },
        "height": 1.4,
        "minBudget": 975000
      }
    ]
  },
  {
    "id": "spring-73",
    "slNo": 73,
    "code": "SP-073",
    "name": "Ek Dharey",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "1350 m",
    "elevationMeters": 1350,
    "slope": "28.5°",
    "slopeDeg": 28.5,
    "rainfall": "3245 mm",
    "rainfallMm": 3245,
    "lulc": "Tree cover",
    "distanceToDrainage": 397,
    "flowAccumulation": 3,
    "clay05cm": 250,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 85,
    "suitabilityScore": 43,
    "suitabilityScoreFloat": 42.6,
    "suitabilityTier": "Moderate",
    "priorityScore": 60,
    "priorityScoreFloat": 59.5,
    "priorityTier": "Moderate Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Site-specific recharge assessment",
    "interventionCategory": "Site-specific Assessment",
    "areaKm2": 0.964,
    "evidenceSupportIndex": 0.607,
    "coords": {
      "x": -30,
      "y": -25.93
    },
    "coords3d": {
      "x": -30,
      "y": -25.93,
      "z": 8.94
    },
    "gisCoords": {
      "lng": 88.26636,
      "lat": 26.870175
    },
    "historicalDischarge": 1.1,
    "projectedDischarge": 4.1,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 1.1
      },
      {
        "month": "Mar",
        "discharge": 0.8
      },
      {
        "month": "May (Dry)",
        "discharge": 0.4
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 2.4
      },
      {
        "month": "Sep (Post)",
        "discharge": 3.6
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 4.1
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3245 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (28.5°)",
        "contribution": "-15%",
        "positive": false
      },
      {
        "name": "Drainage Distance (397m)",
        "contribution": "-10%",
        "positive": false
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Staggered Trenching & Pits",
        "count": "2.0 km",
        "cost": 528750,
        "icon": "Shovel"
      },
      {
        "type": "Vegetative Filter Strips",
        "count": "4 Hectares",
        "cost": 352500,
        "icon": "Trees"
      },
      {
        "type": "Check Structure",
        "count": 2,
        "cost": 293750,
        "icon": "Shield"
      }
    ],
    "minBudgetRequired": 1175000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "96.4 Hectares",
    "communityBeneficiaries": "388 Households (1786 People)",
    "interventions": [
      {
        "id": "int-73-1",
        "type": "Contour Trench",
        "offset": {
          "x": -28.2,
          "y": -24.13
        },
        "height": 2.2,
        "minBudget": 822500
      },
      {
        "id": "int-73-2",
        "type": "Percolation Pit",
        "offset": {
          "x": -31.6,
          "y": -23.53
        },
        "height": 1.4,
        "minBudget": 1175000
      }
    ]
  },
  {
    "id": "spring-74",
    "slNo": 74,
    "code": "SP-074",
    "name": "Ghangeri Dhara",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "1235 m",
    "elevationMeters": 1235,
    "slope": "31.2°",
    "slopeDeg": 31.2,
    "rainfall": "3245 mm",
    "rainfallMm": 3245,
    "lulc": "Tree cover",
    "distanceToDrainage": 309,
    "flowAccumulation": 2,
    "clay05cm": 260,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 85,
    "suitabilityScore": 44,
    "suitabilityScoreFloat": 44.4,
    "suitabilityTier": "Moderate",
    "priorityScore": 39,
    "priorityScoreFloat": 39,
    "priorityTier": "Lower Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "High",
    "indicativeIntervention": "Contour trench / staggered trench",
    "interventionCategory": "Contour / Infiltration",
    "areaKm2": 1.065,
    "evidenceSupportIndex": 0.596,
    "coords": {
      "x": -36,
      "y": -27.37
    },
    "coords3d": {
      "x": -36,
      "y": -27.37,
      "z": 8.13
    },
    "gisCoords": {
      "lng": 88.252752,
      "lat": 26.865667
    },
    "historicalDischarge": 1.4,
    "projectedDischarge": 5.3,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 1.4
      },
      {
        "month": "Mar",
        "discharge": 1
      },
      {
        "month": "May (Dry)",
        "discharge": 0.5
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 3.1
      },
      {
        "month": "Sep (Post)",
        "discharge": 4.7
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 5.3
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3245 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (31.2°)",
        "contribution": "-15%",
        "positive": false
      },
      {
        "name": "Drainage Distance (309m)",
        "contribution": "-10%",
        "positive": false
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Continuous Contour Trench",
        "count": "2500 m",
        "cost": 416250,
        "icon": "Shovel"
      },
      {
        "type": "Percolation Pits",
        "count": 18,
        "cost": 277500,
        "icon": "Waves"
      },
      {
        "type": "Catchment Afforestation",
        "count": "3.5 Hectares",
        "cost": 231250,
        "icon": "Trees"
      }
    ],
    "minBudgetRequired": 925000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "106.5 Hectares",
    "communityBeneficiaries": "317 Households (1456 People)",
    "interventions": [
      {
        "id": "int-74-1",
        "type": "Contour Trench",
        "offset": {
          "x": -34.2,
          "y": -25.57
        },
        "height": 2.2,
        "minBudget": 647500
      },
      {
        "id": "int-74-2",
        "type": "Percolation Pit",
        "offset": {
          "x": -37.6,
          "y": -24.97
        },
        "height": 1.4,
        "minBudget": 925000
      }
    ]
  },
  {
    "id": "spring-75",
    "slNo": 75,
    "code": "SP-075",
    "name": "Saatkanya Dhara",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "1377 m",
    "elevationMeters": 1376.6,
    "slope": "35.4°",
    "slopeDeg": 35.4,
    "rainfall": "3245 mm",
    "rainfallMm": 3245,
    "lulc": "Tree cover",
    "distanceToDrainage": 336,
    "flowAccumulation": 6,
    "clay05cm": 250,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 84,
    "suitabilityScore": 41,
    "suitabilityScoreFloat": 40.6,
    "suitabilityTier": "Moderate",
    "priorityScore": 38,
    "priorityScoreFloat": 37.9,
    "priorityTier": "Lower Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "High",
    "indicativeIntervention": "Contour trench / staggered trench",
    "interventionCategory": "Contour / Infiltration",
    "areaKm2": 1.79,
    "evidenceSupportIndex": 0.603,
    "coords": {
      "x": -29.69,
      "y": -26.01
    },
    "coords3d": {
      "x": -29.69,
      "y": -26.01,
      "z": 9.13
    },
    "gisCoords": {
      "lng": 88.267063,
      "lat": 26.869923
    },
    "historicalDischarge": 1.4,
    "projectedDischarge": 5.2,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 1.4
      },
      {
        "month": "Mar",
        "discharge": 1
      },
      {
        "month": "May (Dry)",
        "discharge": 0.5
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 3.1
      },
      {
        "month": "Sep (Post)",
        "discharge": 4.6
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 5.2
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3245 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (35.4°)",
        "contribution": "-15%",
        "positive": false
      },
      {
        "name": "Drainage Distance (336m)",
        "contribution": "-10%",
        "positive": false
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Continuous Contour Trench",
        "count": "2800 m",
        "cost": 405000,
        "icon": "Shovel"
      },
      {
        "type": "Percolation Pits",
        "count": 18,
        "cost": 270000,
        "icon": "Waves"
      },
      {
        "type": "Catchment Afforestation",
        "count": "3.5 Hectares",
        "cost": 225000,
        "icon": "Trees"
      }
    ],
    "minBudgetRequired": 900000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "179.0 Hectares",
    "communityBeneficiaries": "313 Households (1438 People)",
    "interventions": [
      {
        "id": "int-75-1",
        "type": "Contour Trench",
        "offset": {
          "x": -27.89,
          "y": -24.21
        },
        "height": 2.2,
        "minBudget": 630000
      },
      {
        "id": "int-75-2",
        "type": "Percolation Pit",
        "offset": {
          "x": -31.29,
          "y": -23.61
        },
        "height": 1.4,
        "minBudget": 900000
      }
    ]
  },
  {
    "id": "spring-76",
    "slNo": 76,
    "code": "SP-076",
    "name": "Simana Dhara",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "1239 m",
    "elevationMeters": 1238.7,
    "slope": "25.3°",
    "slopeDeg": 25.3,
    "rainfall": "3245 mm",
    "rainfallMm": 3245,
    "lulc": "Tree cover",
    "distanceToDrainage": 190,
    "flowAccumulation": 3,
    "clay05cm": 266,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 87,
    "suitabilityScore": 55,
    "suitabilityScoreFloat": 54.8,
    "suitabilityTier": "Moderate",
    "priorityScore": 70,
    "priorityScoreFloat": 70,
    "priorityTier": "Higher Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Site-specific recharge assessment",
    "interventionCategory": "Site-specific Assessment",
    "areaKm2": 1.316,
    "evidenceSupportIndex": 0.755,
    "coords": {
      "x": -34.29,
      "y": -26.33
    },
    "coords3d": {
      "x": -34.29,
      "y": -26.33,
      "z": 8.16
    },
    "gisCoords": {
      "lng": 88.256618,
      "lat": 26.868927
    },
    "historicalDischarge": 0.9,
    "projectedDischarge": 3.6,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 0.9
      },
      {
        "month": "Mar",
        "discharge": 0.7
      },
      {
        "month": "May (Dry)",
        "discharge": 0.3
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 2
      },
      {
        "month": "Sep (Post)",
        "discharge": 3.2
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 3.6
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3245 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (25.3°)",
        "contribution": "+11%",
        "positive": true
      },
      {
        "name": "Drainage Distance (190m)",
        "contribution": "-10%",
        "positive": false
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Staggered Trenching & Pits",
        "count": "2.0 km",
        "cost": 585000,
        "icon": "Shovel"
      },
      {
        "type": "Vegetative Filter Strips",
        "count": "4 Hectares",
        "cost": 390000,
        "icon": "Trees"
      },
      {
        "type": "Check Structure",
        "count": 2,
        "cost": 325000,
        "icon": "Shield"
      }
    ],
    "minBudgetRequired": 1300000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "131.6 Hectares",
    "communityBeneficiaries": "425 Households (1955 People)",
    "interventions": [
      {
        "id": "int-76-1",
        "type": "Contour Trench",
        "offset": {
          "x": -32.49,
          "y": -24.53
        },
        "height": 2.2,
        "minBudget": 910000
      },
      {
        "id": "int-76-2",
        "type": "Percolation Pit",
        "offset": {
          "x": -35.89,
          "y": -23.93
        },
        "height": 1.4,
        "minBudget": 1300000
      }
    ]
  },
  {
    "id": "spring-77",
    "slNo": 77,
    "code": "SP-077",
    "name": "Whistle Khola Source",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "1510 m",
    "elevationMeters": 1510.3,
    "slope": "23.1°",
    "slopeDeg": 23.1,
    "rainfall": "3029 mm",
    "rainfallMm": 3029,
    "lulc": "Tree cover",
    "distanceToDrainage": 120,
    "flowAccumulation": 709,
    "clay05cm": 269,
    "geology": "Schist",
    "status": "Field Verification Required",
    "rawStatus": "FIELD_VERIFICATION_REQUIRED",
    "confidenceLevel": "Unresolved",
    "confidence": 46,
    "suitabilityScore": 76,
    "suitabilityScoreFloat": 76.1,
    "suitabilityTier": "High",
    "priorityScore": 29,
    "priorityScoreFloat": 29.3,
    "priorityTier": "Lower Priority",
    "isTop15": false,
    "isFieldVerificationRequired": true,
    "riskLevel": "High",
    "indicativeIntervention": "Field verification before intervention",
    "interventionCategory": "Field Verification",
    "areaKm2": null,
    "evidenceSupportIndex": null,
    "coords": {
      "x": -23.02,
      "y": -19.25
    },
    "coords3d": {
      "x": -23.02,
      "y": -19.25,
      "z": 10.06
    },
    "gisCoords": {
      "lng": 88.282185,
      "lat": 26.891003
    },
    "historicalDischarge": 1.6,
    "projectedDischarge": 7.2,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 1.6
      },
      {
        "month": "Mar",
        "discharge": 1.2
      },
      {
        "month": "May (Dry)",
        "discharge": 0.6
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 3.5
      },
      {
        "month": "Sep (Post)",
        "discharge": 6.3
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 7.2
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3029 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (23.1°)",
        "contribution": "+11%",
        "positive": true
      },
      {
        "name": "Drainage Distance (120m)",
        "contribution": "+16%",
        "positive": true
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Ground Truth Geological Survey",
        "count": "Detailed Hydrogeology",
        "cost": 280000,
        "icon": "ShieldCheck"
      },
      {
        "type": "Pilot Percolation Wells",
        "count": 4,
        "cost": 320000,
        "icon": "Waves"
      },
      {
        "type": "Springshed Demarcation Fencing",
        "count": "1.2 km",
        "cost": 200000,
        "icon": "Shield"
      }
    ],
    "minBudgetRequired": 800000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "38.5 Hectares",
    "communityBeneficiaries": "283 Households (1300 People)",
    "interventions": [
      {
        "id": "int-77-1",
        "type": "Contour Trench",
        "offset": {
          "x": -21.22,
          "y": -17.45
        },
        "height": 2.2,
        "minBudget": 560000
      },
      {
        "id": "int-77-2",
        "type": "Percolation Pit",
        "offset": {
          "x": -24.62,
          "y": -16.85
        },
        "height": 1.4,
        "minBudget": 800000
      }
    ]
  },
  {
    "id": "spring-78",
    "slNo": 78,
    "code": "SP-078",
    "name": "BansghariDhara",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "932 m",
    "elevationMeters": 932,
    "slope": "37.4°",
    "slopeDeg": 37.4,
    "rainfall": "4050 mm",
    "rainfallMm": 4050,
    "lulc": "Tree cover",
    "distanceToDrainage": 166,
    "flowAccumulation": 5,
    "clay05cm": 258,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 87,
    "suitabilityScore": 58,
    "suitabilityScoreFloat": 58.2,
    "suitabilityTier": "Moderate",
    "priorityScore": 46,
    "priorityScoreFloat": 46,
    "priorityTier": "Moderate Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "High",
    "indicativeIntervention": "Contour trench / staggered trench",
    "interventionCategory": "Contour / Infiltration",
    "areaKm2": 1.541,
    "evidenceSupportIndex": 0.72,
    "coords": {
      "x": 31.81,
      "y": -1.36
    },
    "coords3d": {
      "x": 31.81,
      "y": -1.36,
      "z": 6.01
    },
    "gisCoords": {
      "lng": 88.406467,
      "lat": 26.946829
    },
    "historicalDischarge": 1.3,
    "projectedDischarge": 5.3,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 1.3
      },
      {
        "month": "Mar",
        "discharge": 1
      },
      {
        "month": "May (Dry)",
        "discharge": 0.5
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 2.9
      },
      {
        "month": "Sep (Post)",
        "discharge": 4.7
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 5.3
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (4050 mm/yr)",
        "contribution": "+28%",
        "positive": true
      },
      {
        "name": "Terrain Slope (37.4°)",
        "contribution": "-15%",
        "positive": false
      },
      {
        "name": "Drainage Distance (166m)",
        "contribution": "-10%",
        "positive": false
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Continuous Contour Trench",
        "count": "3000 m",
        "cost": 450000,
        "icon": "Shovel"
      },
      {
        "type": "Percolation Pits",
        "count": 18,
        "cost": 300000,
        "icon": "Waves"
      },
      {
        "type": "Catchment Afforestation",
        "count": "3.5 Hectares",
        "cost": 250000,
        "icon": "Trees"
      }
    ],
    "minBudgetRequired": 1000000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "154.1 Hectares",
    "communityBeneficiaries": "341 Households (1569 People)",
    "interventions": [
      {
        "id": "int-78-1",
        "type": "Contour Trench",
        "offset": {
          "x": 33.61,
          "y": 0.44
        },
        "height": 2.2,
        "minBudget": 700000
      },
      {
        "id": "int-78-2",
        "type": "Percolation Pit",
        "offset": {
          "x": 30.21,
          "y": 1.04
        },
        "height": 1.4,
        "minBudget": 1000000
      }
    ]
  },
  {
    "id": "spring-79",
    "slNo": 79,
    "code": "SP-079",
    "name": "Bulbuley Dhara",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "1420 m",
    "elevationMeters": 1420.1,
    "slope": "23.9°",
    "slopeDeg": 23.9,
    "rainfall": "3029 mm",
    "rainfallMm": 3029,
    "lulc": "Tree cover",
    "distanceToDrainage": 124,
    "flowAccumulation": 2,
    "clay05cm": 249,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 86,
    "suitabilityScore": 50,
    "suitabilityScoreFloat": 50.4,
    "suitabilityTier": "Moderate",
    "priorityScore": 69,
    "priorityScoreFloat": 69.2,
    "priorityTier": "Higher Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Site-specific recharge assessment",
    "interventionCategory": "Site-specific Assessment",
    "areaKm2": 1.446,
    "evidenceSupportIndex": 0.8,
    "coords": {
      "x": -26.48,
      "y": -21.67
    },
    "coords3d": {
      "x": -26.48,
      "y": -21.67,
      "z": 9.43
    },
    "gisCoords": {
      "lng": 88.274328,
      "lat": 26.883477
    },
    "historicalDischarge": 1,
    "projectedDischarge": 3.9,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 1
      },
      {
        "month": "Mar",
        "discharge": 0.8
      },
      {
        "month": "May (Dry)",
        "discharge": 0.3
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 2.2
      },
      {
        "month": "Sep (Post)",
        "discharge": 3.4
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 3.9
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3029 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (23.9°)",
        "contribution": "+11%",
        "positive": true
      },
      {
        "name": "Drainage Distance (124m)",
        "contribution": "+16%",
        "positive": true
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Staggered Trenching & Pits",
        "count": "2.0 km",
        "cost": 573750,
        "icon": "Shovel"
      },
      {
        "type": "Vegetative Filter Strips",
        "count": "4 Hectares",
        "cost": 382500,
        "icon": "Trees"
      },
      {
        "type": "Check Structure",
        "count": 2,
        "cost": 318750,
        "icon": "Shield"
      }
    ],
    "minBudgetRequired": 1275000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "144.6 Hectares",
    "communityBeneficiaries": "422 Households (1942 People)",
    "interventions": [
      {
        "id": "int-79-1",
        "type": "Contour Trench",
        "offset": {
          "x": -24.68,
          "y": -19.87
        },
        "height": 2.2,
        "minBudget": 892500
      },
      {
        "id": "int-79-2",
        "type": "Percolation Pit",
        "offset": {
          "x": -28.08,
          "y": -19.27
        },
        "height": 1.4,
        "minBudget": 1275000
      }
    ]
  },
  {
    "id": "spring-80",
    "slNo": 80,
    "code": "SP-080",
    "name": "Charcharey Dhara",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "990 m",
    "elevationMeters": 989.8,
    "slope": "28.8°",
    "slopeDeg": 28.8,
    "rainfall": "4050 mm",
    "rainfallMm": 4050,
    "lulc": "Tree cover",
    "distanceToDrainage": 391,
    "flowAccumulation": 27,
    "clay05cm": 261,
    "geology": "Schist",
    "status": "Lower Confidence Zone",
    "rawStatus": "LOWER_CONFIDENCE_ZONE",
    "confidenceLevel": "Lower",
    "confidence": 63,
    "suitabilityScore": 63,
    "suitabilityScoreFloat": 62.5,
    "suitabilityTier": "Moderate",
    "priorityScore": 38,
    "priorityScoreFloat": 37.6,
    "priorityTier": "Lower Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "Moderate",
    "indicativeIntervention": "Site-specific recharge assessment",
    "interventionCategory": "Site-specific Assessment",
    "areaKm2": 1.144,
    "evidenceSupportIndex": null,
    "coords": {
      "x": 20.81,
      "y": 7.81
    },
    "coords3d": {
      "x": 20.81,
      "y": 7.81,
      "z": 6.41
    },
    "gisCoords": {
      "lng": 88.381527,
      "lat": 26.975459
    },
    "historicalDischarge": 1.4,
    "projectedDischarge": 5.8,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 1.4
      },
      {
        "month": "Mar",
        "discharge": 1
      },
      {
        "month": "May (Dry)",
        "discharge": 0.5
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 3.1
      },
      {
        "month": "Sep (Post)",
        "discharge": 5.1
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 5.8
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (4050 mm/yr)",
        "contribution": "+28%",
        "positive": true
      },
      {
        "name": "Terrain Slope (28.8°)",
        "contribution": "-15%",
        "positive": false
      },
      {
        "name": "Drainage Distance (391m)",
        "contribution": "-10%",
        "positive": false
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Staggered Trenching & Pits",
        "count": "2.0 km",
        "cost": 405000,
        "icon": "Shovel"
      },
      {
        "type": "Vegetative Filter Strips",
        "count": "4 Hectares",
        "cost": 270000,
        "icon": "Trees"
      },
      {
        "type": "Check Structure",
        "count": 2,
        "cost": 225000,
        "icon": "Shield"
      }
    ],
    "minBudgetRequired": 900000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "114.4 Hectares",
    "communityBeneficiaries": "312 Households (1433 People)",
    "interventions": [
      {
        "id": "int-80-1",
        "type": "Contour Trench",
        "offset": {
          "x": 22.61,
          "y": 9.61
        },
        "height": 2.2,
        "minBudget": 630000
      },
      {
        "id": "int-80-2",
        "type": "Percolation Pit",
        "offset": {
          "x": 19.21,
          "y": 10.21
        },
        "height": 1.4,
        "minBudget": 900000
      }
    ]
  },
  {
    "id": "spring-81",
    "slNo": 81,
    "code": "SP-081",
    "name": "DevithanDhara",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "1704 m",
    "elevationMeters": 1703.5,
    "slope": "11.6°",
    "slopeDeg": 11.6,
    "rainfall": "3029 mm",
    "rainfallMm": 3029,
    "lulc": "Tree cover",
    "distanceToDrainage": 62,
    "flowAccumulation": 1,
    "clay05cm": 281,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 86,
    "suitabilityScore": 52,
    "suitabilityScoreFloat": 51.8,
    "suitabilityTier": "Moderate",
    "priorityScore": 68,
    "priorityScoreFloat": 67.8,
    "priorityTier": "Higher Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Site-specific recharge assessment",
    "interventionCategory": "Site-specific Assessment",
    "areaKm2": 2.083,
    "evidenceSupportIndex": 0.731,
    "coords": {
      "x": -7.17,
      "y": 0.08
    },
    "coords3d": {
      "x": -7.17,
      "y": 0.08,
      "z": 11.42
    },
    "gisCoords": {
      "lng": 88.318112,
      "lat": 26.951341
    },
    "historicalDischarge": 1,
    "projectedDischarge": 3.9,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 1
      },
      {
        "month": "Mar",
        "discharge": 0.8
      },
      {
        "month": "May (Dry)",
        "discharge": 0.3
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 2.2
      },
      {
        "month": "Sep (Post)",
        "discharge": 3.4
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 3.9
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3029 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (11.6°)",
        "contribution": "+19%",
        "positive": true
      },
      {
        "name": "Drainage Distance (62m)",
        "contribution": "+16%",
        "positive": true
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Staggered Trenching & Pits",
        "count": "2.0 km",
        "cost": 573750,
        "icon": "Shovel"
      },
      {
        "type": "Vegetative Filter Strips",
        "count": "4 Hectares",
        "cost": 382500,
        "icon": "Trees"
      },
      {
        "type": "Check Structure",
        "count": 2,
        "cost": 318750,
        "icon": "Shield"
      }
    ],
    "minBudgetRequired": 1275000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "208.3 Hectares",
    "communityBeneficiaries": "417 Households (1920 People)",
    "interventions": [
      {
        "id": "int-81-1",
        "type": "Contour Trench",
        "offset": {
          "x": -5.37,
          "y": 1.88
        },
        "height": 2.2,
        "minBudget": 892500
      },
      {
        "id": "int-81-2",
        "type": "Percolation Pit",
        "offset": {
          "x": -8.77,
          "y": 2.48
        },
        "height": 1.4,
        "minBudget": 1275000
      }
    ]
  },
  {
    "id": "spring-82",
    "slNo": 82,
    "code": "SP-082",
    "name": "Dhobi Khola Dhara",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "1114 m",
    "elevationMeters": 1114.2,
    "slope": "5.6°",
    "slopeDeg": 5.6,
    "rainfall": "3245 mm",
    "rainfallMm": 3245,
    "lulc": "Tree cover",
    "distanceToDrainage": 28,
    "flowAccumulation": 5,
    "clay05cm": 252,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 86,
    "suitabilityScore": 49,
    "suitabilityScoreFloat": 49,
    "suitabilityTier": "Moderate",
    "priorityScore": 68,
    "priorityScoreFloat": 67.9,
    "priorityTier": "Higher Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Site-specific recharge assessment",
    "interventionCategory": "Site-specific Assessment",
    "areaKm2": 1.931,
    "evidenceSupportIndex": 0.778,
    "coords": {
      "x": -31.24,
      "y": -40
    },
    "coords3d": {
      "x": -31.24,
      "y": -40,
      "z": 7.28
    },
    "gisCoords": {
      "lng": 88.263542,
      "lat": 26.82627
    },
    "historicalDischarge": 1,
    "projectedDischarge": 3.9,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 1
      },
      {
        "month": "Mar",
        "discharge": 0.8
      },
      {
        "month": "May (Dry)",
        "discharge": 0.3
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 2.2
      },
      {
        "month": "Sep (Post)",
        "discharge": 3.4
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 3.9
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3245 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (5.6°)",
        "contribution": "+19%",
        "positive": true
      },
      {
        "name": "Drainage Distance (28m)",
        "contribution": "+16%",
        "positive": true
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Staggered Trenching & Pits",
        "count": "2.0 km",
        "cost": 573750,
        "icon": "Shovel"
      },
      {
        "type": "Vegetative Filter Strips",
        "count": "4 Hectares",
        "cost": 382500,
        "icon": "Trees"
      },
      {
        "type": "Check Structure",
        "count": 2,
        "cost": 318750,
        "icon": "Shield"
      }
    ],
    "minBudgetRequired": 1275000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "193.1 Hectares",
    "communityBeneficiaries": "418 Households (1921 People)",
    "interventions": [
      {
        "id": "int-82-1",
        "type": "Contour Trench",
        "offset": {
          "x": -29.44,
          "y": -38.2
        },
        "height": 2.2,
        "minBudget": 892500
      },
      {
        "id": "int-82-2",
        "type": "Percolation Pit",
        "offset": {
          "x": -32.84,
          "y": -37.6
        },
        "height": 1.4,
        "minBudget": 1275000
      }
    ]
  },
  {
    "id": "spring-83",
    "slNo": 83,
    "code": "SP-083",
    "name": "Gokul Dhara",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "1230 m",
    "elevationMeters": 1230.1,
    "slope": "21°",
    "slopeDeg": 21,
    "rainfall": "3029 mm",
    "rainfallMm": 3029,
    "lulc": "Tree cover",
    "distanceToDrainage": 124,
    "flowAccumulation": 1,
    "clay05cm": 255,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 86,
    "suitabilityScore": 51,
    "suitabilityScoreFloat": 50.7,
    "suitabilityTier": "Moderate",
    "priorityScore": 72,
    "priorityScoreFloat": 71.6,
    "priorityTier": "Higher Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Site-specific recharge assessment",
    "interventionCategory": "Site-specific Assessment",
    "areaKm2": 1.903,
    "evidenceSupportIndex": 0.876,
    "coords": {
      "x": 3.74,
      "y": -3.28
    },
    "coords3d": {
      "x": 3.74,
      "y": -3.28,
      "z": 8.1
    },
    "gisCoords": {
      "lng": 88.342848,
      "lat": 26.940846
    },
    "historicalDischarge": 0.9,
    "projectedDischarge": 3.5,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 0.9
      },
      {
        "month": "Mar",
        "discharge": 0.7
      },
      {
        "month": "May (Dry)",
        "discharge": 0.3
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 2
      },
      {
        "month": "Sep (Post)",
        "discharge": 3.1
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 3.5
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3029 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (21°)",
        "contribution": "+19%",
        "positive": true
      },
      {
        "name": "Drainage Distance (124m)",
        "contribution": "+16%",
        "positive": true
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Staggered Trenching & Pits",
        "count": "2.0 km",
        "cost": 585000,
        "icon": "Shovel"
      },
      {
        "type": "Vegetative Filter Strips",
        "count": "4 Hectares",
        "cost": 390000,
        "icon": "Trees"
      },
      {
        "type": "Check Structure",
        "count": 2,
        "cost": 325000,
        "icon": "Shield"
      }
    ],
    "minBudgetRequired": 1300000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "190.3 Hectares",
    "communityBeneficiaries": "431 Households (1981 People)",
    "interventions": [
      {
        "id": "int-83-1",
        "type": "Contour Trench",
        "offset": {
          "x": 5.54,
          "y": -1.48
        },
        "height": 2.2,
        "minBudget": 910000
      },
      {
        "id": "int-83-2",
        "type": "Percolation Pit",
        "offset": {
          "x": 2.14,
          "y": -0.88
        },
        "height": 1.4,
        "minBudget": 1300000
      }
    ]
  },
  {
    "id": "spring-84",
    "slNo": 84,
    "code": "SP-084",
    "name": "JungpanaThuloKhola",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "1408 m",
    "elevationMeters": 1407.5,
    "slope": "23.6°",
    "slopeDeg": 23.6,
    "rainfall": "3029 mm",
    "rainfallMm": 3029,
    "lulc": "Tree cover",
    "distanceToDrainage": 63,
    "flowAccumulation": 8,
    "clay05cm": 276,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 88,
    "suitabilityScore": 62,
    "suitabilityScoreFloat": 61.6,
    "suitabilityTier": "Moderate",
    "priorityScore": 76,
    "priorityScoreFloat": 75.6,
    "priorityTier": "Higher Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Site-specific recharge assessment",
    "interventionCategory": "Site-specific Assessment",
    "areaKm2": 1.085,
    "evidenceSupportIndex": 0.826,
    "coords": {
      "x": -7.39,
      "y": -14.79
    },
    "coords3d": {
      "x": -7.39,
      "y": -14.79,
      "z": 9.34
    },
    "gisCoords": {
      "lng": 88.317615,
      "lat": 26.904922
    },
    "historicalDischarge": 0.9,
    "projectedDischarge": 3.7,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 0.9
      },
      {
        "month": "Mar",
        "discharge": 0.7
      },
      {
        "month": "May (Dry)",
        "discharge": 0.3
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 2
      },
      {
        "month": "Sep (Post)",
        "discharge": 3.3
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 3.7
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3029 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (23.6°)",
        "contribution": "+11%",
        "positive": true
      },
      {
        "name": "Drainage Distance (63m)",
        "contribution": "+16%",
        "positive": true
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Staggered Trenching & Pits",
        "count": "2.0 km",
        "cost": 607500,
        "icon": "Shovel"
      },
      {
        "type": "Vegetative Filter Strips",
        "count": "4 Hectares",
        "cost": 405000,
        "icon": "Trees"
      },
      {
        "type": "Check Structure",
        "count": 2,
        "cost": 337500,
        "icon": "Shield"
      }
    ],
    "minBudgetRequired": 1350000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "108.5 Hectares",
    "communityBeneficiaries": "445 Households (2045 People)",
    "interventions": [
      {
        "id": "int-84-1",
        "type": "Contour Trench",
        "offset": {
          "x": -5.59,
          "y": -12.99
        },
        "height": 2.2,
        "minBudget": 945000
      },
      {
        "id": "int-84-2",
        "type": "Percolation Pit",
        "offset": {
          "x": -8.99,
          "y": -12.39
        },
        "height": 1.4,
        "minBudget": 1350000
      }
    ]
  },
  {
    "id": "spring-85",
    "slNo": 85,
    "code": "SP-085",
    "name": "Rolak Khola Source",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "823 m",
    "elevationMeters": 822.9,
    "slope": "28°",
    "slopeDeg": 28,
    "rainfall": "4050 mm",
    "rainfallMm": 4050,
    "lulc": "Tree cover",
    "distanceToDrainage": 120,
    "flowAccumulation": 286,
    "clay05cm": 260,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 92,
    "suitabilityScore": 85,
    "suitabilityScoreFloat": 84.5,
    "suitabilityTier": "High",
    "priorityScore": 84,
    "priorityScoreFloat": 84.3,
    "priorityTier": "Higher Priority",
    "isTop15": true,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Drainage-line recharge / small check structure",
    "interventionCategory": "Drainage-line Recharge",
    "areaKm2": 1.326,
    "evidenceSupportIndex": 0.736,
    "coords": {
      "x": 33.61,
      "y": -1.97
    },
    "coords3d": {
      "x": 33.61,
      "y": -1.97,
      "z": 5.24
    },
    "gisCoords": {
      "lng": 88.410554,
      "lat": 26.944928
    },
    "historicalDischarge": 0.7,
    "projectedDischarge": 3.3,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 0.7
      },
      {
        "month": "Mar",
        "discharge": 0.5
      },
      {
        "month": "May (Dry)",
        "discharge": 0.2
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 1.5
      },
      {
        "month": "Sep (Post)",
        "discharge": 2.9
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 3.3
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (4050 mm/yr)",
        "contribution": "+28%",
        "positive": true
      },
      {
        "name": "Terrain Slope (28°)",
        "contribution": "-15%",
        "positive": false
      },
      {
        "name": "Drainage Distance (120m)",
        "contribution": "+16%",
        "positive": true
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Check Dam Cascade",
        "count": 3,
        "cost": 725000,
        "icon": "Shield"
      },
      {
        "type": "Gully Plugs (Loose Boulder)",
        "count": 12,
        "cost": 362500,
        "icon": "Layers"
      },
      {
        "type": "Infiltration Trench",
        "count": "1.5 km",
        "cost": 362500,
        "icon": "Shovel"
      }
    ],
    "minBudgetRequired": 1450000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "132.6 Hectares",
    "communityBeneficiaries": "475 Households (2185 People)",
    "interventions": [
      {
        "id": "int-85-1",
        "type": "Check Dam",
        "offset": {
          "x": 35.41,
          "y": -0.17
        },
        "height": 2.2,
        "minBudget": 1015000
      },
      {
        "id": "int-85-2",
        "type": "Percolation Pit",
        "offset": {
          "x": 32.01,
          "y": 0.43
        },
        "height": 1.4,
        "minBudget": 1450000
      }
    ]
  },
  {
    "id": "spring-86",
    "slNo": 86,
    "code": "SP-086",
    "name": "Sim Gairy",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "1246 m",
    "elevationMeters": 1246.1,
    "slope": "22.9°",
    "slopeDeg": 22.9,
    "rainfall": "3029 mm",
    "rainfallMm": 3029,
    "lulc": "Tree cover",
    "distanceToDrainage": 103,
    "flowAccumulation": 11,
    "clay05cm": 255,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 87,
    "suitabilityScore": 57,
    "suitabilityScoreFloat": 57.2,
    "suitabilityTier": "Moderate",
    "priorityScore": 74,
    "priorityScoreFloat": 74.2,
    "priorityTier": "Higher Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Site-specific recharge assessment",
    "interventionCategory": "Site-specific Assessment",
    "areaKm2": 1.989,
    "evidenceSupportIndex": 0.852,
    "coords": {
      "x": 4.32,
      "y": -3.67
    },
    "coords3d": {
      "x": 4.32,
      "y": -3.67,
      "z": 8.21
    },
    "gisCoords": {
      "lng": 88.344163,
      "lat": 26.939639
    },
    "historicalDischarge": 0.9,
    "projectedDischarge": 3.7,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 0.9
      },
      {
        "month": "Mar",
        "discharge": 0.7
      },
      {
        "month": "May (Dry)",
        "discharge": 0.3
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 2
      },
      {
        "month": "Sep (Post)",
        "discharge": 3.3
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 3.7
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3029 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (22.9°)",
        "contribution": "+11%",
        "positive": true
      },
      {
        "name": "Drainage Distance (103m)",
        "contribution": "+16%",
        "positive": true
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Staggered Trenching & Pits",
        "count": "2.0 km",
        "cost": 607500,
        "icon": "Shovel"
      },
      {
        "type": "Vegetative Filter Strips",
        "count": "4 Hectares",
        "cost": 405000,
        "icon": "Trees"
      },
      {
        "type": "Check Structure",
        "count": 2,
        "cost": 337500,
        "icon": "Shield"
      }
    ],
    "minBudgetRequired": 1350000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "198.9 Hectares",
    "communityBeneficiaries": "440 Households (2023 People)",
    "interventions": [
      {
        "id": "int-86-1",
        "type": "Contour Trench",
        "offset": {
          "x": 6.12,
          "y": -1.87
        },
        "height": 2.2,
        "minBudget": 945000
      },
      {
        "id": "int-86-2",
        "type": "Percolation Pit",
        "offset": {
          "x": 2.72,
          "y": -1.27
        },
        "height": 1.4,
        "minBudget": 1350000
      }
    ]
  },
  {
    "id": "spring-87",
    "slNo": 87,
    "code": "SP-087",
    "name": "BholayDhara",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "1637 m",
    "elevationMeters": 1636.8,
    "slope": "38°",
    "slopeDeg": 38,
    "rainfall": "3029 mm",
    "rainfallMm": 3029,
    "lulc": "Tree cover",
    "distanceToDrainage": 218,
    "flowAccumulation": 9,
    "clay05cm": 279,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 86,
    "suitabilityScore": 47,
    "suitabilityScoreFloat": 46.9,
    "suitabilityTier": "Moderate",
    "priorityScore": 42,
    "priorityScoreFloat": 42.3,
    "priorityTier": "Moderate Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "High",
    "indicativeIntervention": "Contour trench / staggered trench",
    "interventionCategory": "Contour / Infiltration",
    "areaKm2": 1.029,
    "evidenceSupportIndex": 0.718,
    "coords": {
      "x": -20.05,
      "y": -15.18
    },
    "coords3d": {
      "x": -20.05,
      "y": -15.18,
      "z": 10.95
    },
    "gisCoords": {
      "lng": 88.2889,
      "lat": 26.903722
    },
    "historicalDischarge": 1.4,
    "projectedDischarge": 5.4,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 1.4
      },
      {
        "month": "Mar",
        "discharge": 1
      },
      {
        "month": "May (Dry)",
        "discharge": 0.5
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 3.1
      },
      {
        "month": "Sep (Post)",
        "discharge": 4.8
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 5.4
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3029 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (38°)",
        "contribution": "-15%",
        "positive": false
      },
      {
        "name": "Drainage Distance (218m)",
        "contribution": "-10%",
        "positive": false
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Continuous Contour Trench",
        "count": "3000 m",
        "cost": 427500,
        "icon": "Shovel"
      },
      {
        "type": "Percolation Pits",
        "count": 18,
        "cost": 285000,
        "icon": "Waves"
      },
      {
        "type": "Catchment Afforestation",
        "count": "3.5 Hectares",
        "cost": 237500,
        "icon": "Trees"
      }
    ],
    "minBudgetRequired": 950000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "102.9 Hectares",
    "communityBeneficiaries": "328 Households (1509 People)",
    "interventions": [
      {
        "id": "int-87-1",
        "type": "Contour Trench",
        "offset": {
          "x": -18.25,
          "y": -13.38
        },
        "height": 2.2,
        "minBudget": 665000
      },
      {
        "id": "int-87-2",
        "type": "Percolation Pit",
        "offset": {
          "x": -21.65,
          "y": -12.78
        },
        "height": 1.4,
        "minBudget": 950000
      }
    ]
  },
  {
    "id": "spring-88",
    "slNo": 88,
    "code": "SP-088",
    "name": "Dara GaonDhara",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "1346 m",
    "elevationMeters": 1345.5,
    "slope": "29.4°",
    "slopeDeg": 29.4,
    "rainfall": "3029 mm",
    "rainfallMm": 3029,
    "lulc": "Tree cover",
    "distanceToDrainage": 93,
    "flowAccumulation": 1,
    "clay05cm": 270,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 86,
    "suitabilityScore": 51,
    "suitabilityScoreFloat": 51.2,
    "suitabilityTier": "Moderate",
    "priorityScore": 70,
    "priorityScoreFloat": 69.6,
    "priorityTier": "Higher Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Site-specific recharge assessment",
    "interventionCategory": "Site-specific Assessment",
    "areaKm2": 1.168,
    "evidenceSupportIndex": 0.8,
    "coords": {
      "x": -15.15,
      "y": -24.1
    },
    "coords3d": {
      "x": -15.15,
      "y": -24.1,
      "z": 8.91
    },
    "gisCoords": {
      "lng": 88.300027,
      "lat": 26.875879
    },
    "historicalDischarge": 1,
    "projectedDischarge": 3.9,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 1
      },
      {
        "month": "Mar",
        "discharge": 0.8
      },
      {
        "month": "May (Dry)",
        "discharge": 0.3
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 2.2
      },
      {
        "month": "Sep (Post)",
        "discharge": 3.4
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 3.9
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3029 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (29.4°)",
        "contribution": "-15%",
        "positive": false
      },
      {
        "name": "Drainage Distance (93m)",
        "contribution": "+16%",
        "positive": true
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Staggered Trenching & Pits",
        "count": "2.0 km",
        "cost": 573750,
        "icon": "Shovel"
      },
      {
        "type": "Vegetative Filter Strips",
        "count": "4 Hectares",
        "cost": 382500,
        "icon": "Trees"
      },
      {
        "type": "Check Structure",
        "count": 2,
        "cost": 318750,
        "icon": "Shield"
      }
    ],
    "minBudgetRequired": 1275000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "116.8 Hectares",
    "communityBeneficiaries": "424 Households (1949 People)",
    "interventions": [
      {
        "id": "int-88-1",
        "type": "Contour Trench",
        "offset": {
          "x": -13.35,
          "y": -22.3
        },
        "height": 2.2,
        "minBudget": 892500
      },
      {
        "id": "int-88-2",
        "type": "Percolation Pit",
        "offset": {
          "x": -16.75,
          "y": -21.7
        },
        "height": 1.4,
        "minBudget": 1275000
      }
    ]
  },
  {
    "id": "spring-89",
    "slNo": 89,
    "code": "SP-089",
    "name": "Gaurishanker Mandir Dhara",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "1290 m",
    "elevationMeters": 1290.2,
    "slope": "21.2°",
    "slopeDeg": 21.2,
    "rainfall": "3245 mm",
    "rainfallMm": 3245,
    "lulc": "Tree cover",
    "distanceToDrainage": 120,
    "flowAccumulation": 219,
    "clay05cm": 264,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 90,
    "suitabilityScore": 74,
    "suitabilityScoreFloat": 74.3,
    "suitabilityTier": "High",
    "priorityScore": 82,
    "priorityScoreFloat": 81.8,
    "priorityTier": "Higher Priority",
    "isTop15": true,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Drainage-line recharge / small check structure",
    "interventionCategory": "Drainage-line Recharge",
    "areaKm2": 0.712,
    "evidenceSupportIndex": 0.821,
    "coords": {
      "x": -22.82,
      "y": -25.91
    },
    "coords3d": {
      "x": -22.82,
      "y": -25.91,
      "z": 8.52
    },
    "gisCoords": {
      "lng": 88.282619,
      "lat": 26.870245
    },
    "historicalDischarge": 0.8,
    "projectedDischarge": 3.5,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 0.8
      },
      {
        "month": "Mar",
        "discharge": 0.6
      },
      {
        "month": "May (Dry)",
        "discharge": 0.3
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 1.8
      },
      {
        "month": "Sep (Post)",
        "discharge": 3.1
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 3.5
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3245 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (21.2°)",
        "contribution": "+19%",
        "positive": true
      },
      {
        "name": "Drainage Distance (120m)",
        "contribution": "+16%",
        "positive": true
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Check Dam Cascade",
        "count": 3,
        "cost": 712500,
        "icon": "Shield"
      },
      {
        "type": "Gully Plugs (Loose Boulder)",
        "count": 12,
        "cost": 356250,
        "icon": "Layers"
      },
      {
        "type": "Infiltration Trench",
        "count": "1.5 km",
        "cost": 356250,
        "icon": "Shovel"
      }
    ],
    "minBudgetRequired": 1425000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "71.2 Hectares",
    "communityBeneficiaries": "466 Households (2145 People)",
    "interventions": [
      {
        "id": "int-89-1",
        "type": "Check Dam",
        "offset": {
          "x": -21.02,
          "y": -24.11
        },
        "height": 2.2,
        "minBudget": 997500
      },
      {
        "id": "int-89-2",
        "type": "Percolation Pit",
        "offset": {
          "x": -24.42,
          "y": -23.51
        },
        "height": 1.4,
        "minBudget": 1425000
      }
    ]
  },
  {
    "id": "spring-90",
    "slNo": 90,
    "code": "SP-090",
    "name": "Giday Source",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "1277 m",
    "elevationMeters": 1277,
    "slope": "33.2°",
    "slopeDeg": 33.2,
    "rainfall": "3245 mm",
    "rainfallMm": 3245,
    "lulc": "Tree cover",
    "distanceToDrainage": 164,
    "flowAccumulation": 29,
    "clay05cm": 278,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 87,
    "suitabilityScore": 59,
    "suitabilityScoreFloat": 59.1,
    "suitabilityTier": "Moderate",
    "priorityScore": 47,
    "priorityScoreFloat": 47.4,
    "priorityTier": "Moderate Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "High",
    "indicativeIntervention": "Contour trench / staggered trench",
    "interventionCategory": "Contour / Infiltration",
    "areaKm2": 0.404,
    "evidenceSupportIndex": 0.779,
    "coords": {
      "x": -14.38,
      "y": -24.62
    },
    "coords3d": {
      "x": -14.38,
      "y": -24.62,
      "z": 8.43
    },
    "gisCoords": {
      "lng": 88.301755,
      "lat": 26.874255
    },
    "historicalDischarge": 1.3,
    "projectedDischarge": 5.3,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 1.3
      },
      {
        "month": "Mar",
        "discharge": 1
      },
      {
        "month": "May (Dry)",
        "discharge": 0.5
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 2.9
      },
      {
        "month": "Sep (Post)",
        "discharge": 4.7
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 5.3
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3245 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (33.2°)",
        "contribution": "-15%",
        "positive": false
      },
      {
        "name": "Drainage Distance (164m)",
        "contribution": "-10%",
        "positive": false
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Continuous Contour Trench",
        "count": "2700 m",
        "cost": 461250,
        "icon": "Shovel"
      },
      {
        "type": "Percolation Pits",
        "count": 18,
        "cost": 307500,
        "icon": "Waves"
      },
      {
        "type": "Catchment Afforestation",
        "count": "3.5 Hectares",
        "cost": 256250,
        "icon": "Trees"
      }
    ],
    "minBudgetRequired": 1025000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "40.4 Hectares",
    "communityBeneficiaries": "346 Households (1591 People)",
    "interventions": [
      {
        "id": "int-90-1",
        "type": "Contour Trench",
        "offset": {
          "x": -12.58,
          "y": -22.82
        },
        "height": 2.2,
        "minBudget": 717500
      },
      {
        "id": "int-90-2",
        "type": "Percolation Pit",
        "offset": {
          "x": -15.98,
          "y": -22.22
        },
        "height": 1.4,
        "minBudget": 1025000
      }
    ]
  },
  {
    "id": "spring-91",
    "slNo": 91,
    "code": "SP-091",
    "name": "Lampatey Gairy",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "358 m",
    "elevationMeters": 358.4,
    "slope": "19.6°",
    "slopeDeg": 19.6,
    "rainfall": "3245 mm",
    "rainfallMm": 3245,
    "lulc": "Tree cover",
    "distanceToDrainage": 229,
    "flowAccumulation": 15,
    "clay05cm": 241,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 87,
    "suitabilityScore": 54,
    "suitabilityScoreFloat": 54.1,
    "suitabilityTier": "Moderate",
    "priorityScore": 74,
    "priorityScoreFloat": 73.5,
    "priorityTier": "Higher Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Site-specific recharge assessment",
    "interventionCategory": "Site-specific Assessment",
    "areaKm2": 2.224,
    "evidenceSupportIndex": 0.881,
    "coords": {
      "x": 9.55,
      "y": -27.51
    },
    "coords3d": {
      "x": 9.55,
      "y": -27.51,
      "z": 1.98
    },
    "gisCoords": {
      "lng": 88.356015,
      "lat": 26.865241
    },
    "historicalDischarge": 0.9,
    "projectedDischarge": 3.6,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 0.9
      },
      {
        "month": "Mar",
        "discharge": 0.7
      },
      {
        "month": "May (Dry)",
        "discharge": 0.3
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 2
      },
      {
        "month": "Sep (Post)",
        "discharge": 3.2
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 3.6
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3245 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (19.6°)",
        "contribution": "+19%",
        "positive": true
      },
      {
        "name": "Drainage Distance (229m)",
        "contribution": "-10%",
        "positive": false
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Staggered Trenching & Pits",
        "count": "2.0 km",
        "cost": 596250,
        "icon": "Shovel"
      },
      {
        "type": "Vegetative Filter Strips",
        "count": "4 Hectares",
        "cost": 397500,
        "icon": "Trees"
      },
      {
        "type": "Check Structure",
        "count": 2,
        "cost": 331250,
        "icon": "Shield"
      }
    ],
    "minBudgetRequired": 1325000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "222.4 Hectares",
    "communityBeneficiaries": "437 Households (2011 People)",
    "interventions": [
      {
        "id": "int-91-1",
        "type": "Contour Trench",
        "offset": {
          "x": 11.35,
          "y": -25.71
        },
        "height": 2.2,
        "minBudget": 927500
      },
      {
        "id": "int-91-2",
        "type": "Percolation Pit",
        "offset": {
          "x": 7.95,
          "y": -25.11
        },
        "height": 1.4,
        "minBudget": 1325000
      }
    ]
  },
  {
    "id": "spring-92",
    "slNo": 92,
    "code": "SP-092",
    "name": "Mansi Dhara",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "1390 m",
    "elevationMeters": 1389.5,
    "slope": "13.4°",
    "slopeDeg": 13.4,
    "rainfall": "3029 mm",
    "rainfallMm": 3029,
    "lulc": "Built-up",
    "distanceToDrainage": 63,
    "flowAccumulation": 18,
    "clay05cm": 252,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 86,
    "suitabilityScore": 48,
    "suitabilityScoreFloat": 47.6,
    "suitabilityTier": "Moderate",
    "priorityScore": 69,
    "priorityScoreFloat": 68.6,
    "priorityTier": "Higher Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Site-specific recharge assessment",
    "interventionCategory": "Site-specific Assessment",
    "areaKm2": 1.708,
    "evidenceSupportIndex": 0.826,
    "coords": {
      "x": -27.64,
      "y": -23.68
    },
    "coords3d": {
      "x": -27.64,
      "y": -23.68,
      "z": 9.22
    },
    "gisCoords": {
      "lng": 88.271697,
      "lat": 26.877208
    },
    "historicalDischarge": 1,
    "projectedDischarge": 3.8,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 1
      },
      {
        "month": "Mar",
        "discharge": 0.8
      },
      {
        "month": "May (Dry)",
        "discharge": 0.3
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 2.2
      },
      {
        "month": "Sep (Post)",
        "discharge": 3.3
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 3.8
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3029 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (13.4°)",
        "contribution": "+19%",
        "positive": true
      },
      {
        "name": "Drainage Distance (63m)",
        "contribution": "+16%",
        "positive": true
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Staggered Trenching & Pits",
        "count": "2.0 km",
        "cost": 573750,
        "icon": "Shovel"
      },
      {
        "type": "Vegetative Filter Strips",
        "count": "4 Hectares",
        "cost": 382500,
        "icon": "Trees"
      },
      {
        "type": "Check Structure",
        "count": 2,
        "cost": 318750,
        "icon": "Shield"
      }
    ],
    "minBudgetRequired": 1275000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "170.8 Hectares",
    "communityBeneficiaries": "420 Households (1932 People)",
    "interventions": [
      {
        "id": "int-92-1",
        "type": "Contour Trench",
        "offset": {
          "x": -25.84,
          "y": -21.88
        },
        "height": 2.2,
        "minBudget": 892500
      },
      {
        "id": "int-92-2",
        "type": "Percolation Pit",
        "offset": {
          "x": -29.24,
          "y": -21.28
        },
        "height": 1.4,
        "minBudget": 1275000
      }
    ]
  },
  {
    "id": "spring-93",
    "slNo": 93,
    "code": "SP-093",
    "name": "PaniTanki Source",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "1343 m",
    "elevationMeters": 1342.9,
    "slope": "17.2°",
    "slopeDeg": 17.2,
    "rainfall": "3029 mm",
    "rainfallMm": 3029,
    "lulc": "Tree cover",
    "distanceToDrainage": 120,
    "flowAccumulation": 431,
    "clay05cm": 270,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 90,
    "suitabilityScore": 73,
    "suitabilityScoreFloat": 72.9,
    "suitabilityTier": "High",
    "priorityScore": 78,
    "priorityScoreFloat": 77.5,
    "priorityTier": "Higher Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Drainage-line recharge / small check structure",
    "interventionCategory": "Drainage-line Recharge",
    "areaKm2": 1.092,
    "evidenceSupportIndex": 0.702,
    "coords": {
      "x": -15.48,
      "y": -23.22
    },
    "coords3d": {
      "x": -15.48,
      "y": -23.22,
      "z": 8.89
    },
    "gisCoords": {
      "lng": 88.299277,
      "lat": 26.878624
    },
    "historicalDischarge": 0.8,
    "projectedDischarge": 3.5,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 0.8
      },
      {
        "month": "Mar",
        "discharge": 0.6
      },
      {
        "month": "May (Dry)",
        "discharge": 0.3
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 1.8
      },
      {
        "month": "Sep (Post)",
        "discharge": 3.1
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 3.5
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3029 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (17.2°)",
        "contribution": "+19%",
        "positive": true
      },
      {
        "name": "Drainage Distance (120m)",
        "contribution": "+16%",
        "positive": true
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Check Dam Cascade",
        "count": 3,
        "cost": 687500,
        "icon": "Shield"
      },
      {
        "type": "Gully Plugs (Loose Boulder)",
        "count": 12,
        "cost": 343750,
        "icon": "Layers"
      },
      {
        "type": "Infiltration Trench",
        "count": "1.5 km",
        "cost": 343750,
        "icon": "Shovel"
      }
    ],
    "minBudgetRequired": 1375000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "109.2 Hectares",
    "communityBeneficiaries": "451 Households (2076 People)",
    "interventions": [
      {
        "id": "int-93-1",
        "type": "Check Dam",
        "offset": {
          "x": -13.68,
          "y": -21.42
        },
        "height": 2.2,
        "minBudget": 962500
      },
      {
        "id": "int-93-2",
        "type": "Percolation Pit",
        "offset": {
          "x": -17.08,
          "y": -20.82
        },
        "height": 1.4,
        "minBudget": 1375000
      }
    ]
  },
  {
    "id": "spring-94",
    "slNo": 94,
    "code": "SP-094",
    "name": "Patley Khola Dhara",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "1541 m",
    "elevationMeters": 1541.4,
    "slope": "39.9°",
    "slopeDeg": 39.9,
    "rainfall": "3029 mm",
    "rainfallMm": 3029,
    "lulc": "Tree cover",
    "distanceToDrainage": 68,
    "flowAccumulation": 4,
    "clay05cm": 288,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 86,
    "suitabilityScore": 50,
    "suitabilityScoreFloat": 50.3,
    "suitabilityTier": "Moderate",
    "priorityScore": 44,
    "priorityScoreFloat": 44.4,
    "priorityTier": "Moderate Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "High",
    "indicativeIntervention": "Contour trench / staggered trench",
    "interventionCategory": "Contour / Infiltration",
    "areaKm2": 0.781,
    "evidenceSupportIndex": 0.773,
    "coords": {
      "x": -5.42,
      "y": -1.08
    },
    "coords3d": {
      "x": -5.42,
      "y": -1.08,
      "z": 10.28
    },
    "gisCoords": {
      "lng": 88.322064,
      "lat": 26.947705
    },
    "historicalDischarge": 1.3,
    "projectedDischarge": 5.1,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 1.3
      },
      {
        "month": "Mar",
        "discharge": 1
      },
      {
        "month": "May (Dry)",
        "discharge": 0.5
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 2.9
      },
      {
        "month": "Sep (Post)",
        "discharge": 4.5
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 5.1
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3029 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (39.9°)",
        "contribution": "-15%",
        "positive": false
      },
      {
        "name": "Drainage Distance (68m)",
        "contribution": "+16%",
        "positive": true
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Continuous Contour Trench",
        "count": "3200 m",
        "cost": 438750,
        "icon": "Shovel"
      },
      {
        "type": "Percolation Pits",
        "count": 18,
        "cost": 292500,
        "icon": "Waves"
      },
      {
        "type": "Catchment Afforestation",
        "count": "3.5 Hectares",
        "cost": 243750,
        "icon": "Trees"
      }
    ],
    "minBudgetRequired": 975000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "78.1 Hectares",
    "communityBeneficiaries": "335 Households (1543 People)",
    "interventions": [
      {
        "id": "int-94-1",
        "type": "Contour Trench",
        "offset": {
          "x": -3.62,
          "y": 0.72
        },
        "height": 2.2,
        "minBudget": 682500
      },
      {
        "id": "int-94-2",
        "type": "Percolation Pit",
        "offset": {
          "x": -7.02,
          "y": 1.32
        },
        "height": 1.4,
        "minBudget": 975000
      }
    ]
  },
  {
    "id": "spring-95",
    "slNo": 95,
    "code": "SP-095",
    "name": "Pradhan Dhara",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "1381 m",
    "elevationMeters": 1381,
    "slope": "14.1°",
    "slopeDeg": 14.1,
    "rainfall": "3029 mm",
    "rainfallMm": 3029,
    "lulc": "Tree cover",
    "distanceToDrainage": 149,
    "flowAccumulation": 26,
    "clay05cm": 255,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 87,
    "suitabilityScore": 54,
    "suitabilityScoreFloat": 53.8,
    "suitabilityTier": "Moderate",
    "priorityScore": 71,
    "priorityScoreFloat": 71.1,
    "priorityTier": "Higher Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Site-specific recharge assessment",
    "interventionCategory": "Site-specific Assessment",
    "areaKm2": 1.957,
    "evidenceSupportIndex": 0.806,
    "coords": {
      "x": -27.54,
      "y": -24.14
    },
    "coords3d": {
      "x": -27.54,
      "y": -24.14,
      "z": 9.16
    },
    "gisCoords": {
      "lng": 88.271934,
      "lat": 26.87576
    },
    "historicalDischarge": 0.9,
    "projectedDischarge": 3.6,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 0.9
      },
      {
        "month": "Mar",
        "discharge": 0.7
      },
      {
        "month": "May (Dry)",
        "discharge": 0.3
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 2
      },
      {
        "month": "Sep (Post)",
        "discharge": 3.2
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 3.6
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3029 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (14.1°)",
        "contribution": "+19%",
        "positive": true
      },
      {
        "name": "Drainage Distance (149m)",
        "contribution": "+16%",
        "positive": true
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Staggered Trenching & Pits",
        "count": "2.0 km",
        "cost": 585000,
        "icon": "Shovel"
      },
      {
        "type": "Vegetative Filter Strips",
        "count": "4 Hectares",
        "cost": 390000,
        "icon": "Trees"
      },
      {
        "type": "Check Structure",
        "count": 2,
        "cost": 325000,
        "icon": "Shield"
      }
    ],
    "minBudgetRequired": 1300000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "195.7 Hectares",
    "communityBeneficiaries": "429 Households (1973 People)",
    "interventions": [
      {
        "id": "int-95-1",
        "type": "Contour Trench",
        "offset": {
          "x": -25.74,
          "y": -22.34
        },
        "height": 2.2,
        "minBudget": 910000
      },
      {
        "id": "int-95-2",
        "type": "Percolation Pit",
        "offset": {
          "x": -29.14,
          "y": -21.74
        },
        "height": 1.4,
        "minBudget": 1300000
      }
    ]
  },
  {
    "id": "spring-96",
    "slNo": 96,
    "code": "SP-096",
    "name": "ShivaDhara",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "1588 m",
    "elevationMeters": 1588.4,
    "slope": "36°",
    "slopeDeg": 36,
    "rainfall": "3029 mm",
    "rainfallMm": 3029,
    "lulc": "Tree cover",
    "distanceToDrainage": 186,
    "flowAccumulation": 1,
    "clay05cm": 274,
    "geology": "Schist",
    "status": "Lower Confidence Zone",
    "rawStatus": "LOWER_CONFIDENCE_ZONE",
    "confidenceLevel": "Lower",
    "confidence": 60,
    "suitabilityScore": 43,
    "suitabilityScoreFloat": 43.1,
    "suitabilityTier": "Moderate",
    "priorityScore": 23,
    "priorityScoreFloat": 22.5,
    "priorityTier": "Lower Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "High",
    "indicativeIntervention": "Contour trench / staggered trench",
    "interventionCategory": "Contour / Infiltration",
    "areaKm2": 1.798,
    "evidenceSupportIndex": null,
    "coords": {
      "x": -20.49,
      "y": -16.37
    },
    "coords3d": {
      "x": -20.49,
      "y": -16.37,
      "z": 10.61
    },
    "gisCoords": {
      "lng": 88.2879,
      "lat": 26.90002
    },
    "historicalDischarge": 1.7,
    "projectedDischarge": 6.4,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 1.7
      },
      {
        "month": "Mar",
        "discharge": 1.3
      },
      {
        "month": "May (Dry)",
        "discharge": 0.6
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 3.7
      },
      {
        "month": "Sep (Post)",
        "discharge": 5.6
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 6.4
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3029 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (36°)",
        "contribution": "-15%",
        "positive": false
      },
      {
        "name": "Drainage Distance (186m)",
        "contribution": "-10%",
        "positive": false
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Continuous Contour Trench",
        "count": "2900 m",
        "cost": 326250,
        "icon": "Shovel"
      },
      {
        "type": "Percolation Pits",
        "count": 18,
        "cost": 217500,
        "icon": "Waves"
      },
      {
        "type": "Catchment Afforestation",
        "count": "3.5 Hectares",
        "cost": 181250,
        "icon": "Trees"
      }
    ],
    "minBudgetRequired": 725000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "179.8 Hectares",
    "communityBeneficiaries": "259 Households (1190 People)",
    "interventions": [
      {
        "id": "int-96-1",
        "type": "Contour Trench",
        "offset": {
          "x": -18.69,
          "y": -14.57
        },
        "height": 2.2,
        "minBudget": 507500
      },
      {
        "id": "int-96-2",
        "type": "Percolation Pit",
        "offset": {
          "x": -22.09,
          "y": -13.97
        },
        "height": 1.4,
        "minBudget": 725000
      }
    ]
  },
  {
    "id": "spring-97",
    "slNo": 97,
    "code": "SP-097",
    "name": "Simsaar Dhara",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "1735 m",
    "elevationMeters": 1735.3,
    "slope": "28.7°",
    "slopeDeg": 28.7,
    "rainfall": "3029 mm",
    "rainfallMm": 3029,
    "lulc": "Tree cover",
    "distanceToDrainage": 155,
    "flowAccumulation": 3,
    "clay05cm": 274,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 86,
    "suitabilityScore": 53,
    "suitabilityScoreFloat": 52.7,
    "suitabilityTier": "Moderate",
    "priorityScore": 71,
    "priorityScoreFloat": 70.5,
    "priorityTier": "Higher Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Site-specific recharge assessment",
    "interventionCategory": "Site-specific Assessment",
    "areaKm2": 0.709,
    "evidenceSupportIndex": 0.804,
    "coords": {
      "x": -18.91,
      "y": -13.48
    },
    "coords3d": {
      "x": -18.91,
      "y": -13.48,
      "z": 11.64
    },
    "gisCoords": {
      "lng": 88.2915,
      "lat": 26.909022
    },
    "historicalDischarge": 0.9,
    "projectedDischarge": 3.6,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 0.9
      },
      {
        "month": "Mar",
        "discharge": 0.7
      },
      {
        "month": "May (Dry)",
        "discharge": 0.3
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 2
      },
      {
        "month": "Sep (Post)",
        "discharge": 3.2
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 3.6
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3029 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (28.7°)",
        "contribution": "-15%",
        "positive": false
      },
      {
        "name": "Drainage Distance (155m)",
        "contribution": "-10%",
        "positive": false
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Staggered Trenching & Pits",
        "count": "2.0 km",
        "cost": 585000,
        "icon": "Shovel"
      },
      {
        "type": "Vegetative Filter Strips",
        "count": "4 Hectares",
        "cost": 390000,
        "icon": "Trees"
      },
      {
        "type": "Check Structure",
        "count": 2,
        "cost": 325000,
        "icon": "Shield"
      }
    ],
    "minBudgetRequired": 1300000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "70.9 Hectares",
    "communityBeneficiaries": "427 Households (1963 People)",
    "interventions": [
      {
        "id": "int-97-1",
        "type": "Contour Trench",
        "offset": {
          "x": -17.11,
          "y": -11.68
        },
        "height": 2.2,
        "minBudget": 910000
      },
      {
        "id": "int-97-2",
        "type": "Percolation Pit",
        "offset": {
          "x": -20.51,
          "y": -11.08
        },
        "height": 1.4,
        "minBudget": 1300000
      }
    ]
  },
  {
    "id": "spring-98",
    "slNo": 98,
    "code": "SP-098",
    "name": "Shiva Mandir Dhara",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "548 m",
    "elevationMeters": 547.8,
    "slope": "17°",
    "slopeDeg": 17,
    "rainfall": "3245 mm",
    "rainfallMm": 3245,
    "lulc": "Tree cover",
    "distanceToDrainage": 203,
    "flowAccumulation": 58,
    "clay05cm": 238,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 87,
    "suitabilityScore": 57,
    "suitabilityScoreFloat": 57.4,
    "suitabilityTier": "Moderate",
    "priorityScore": 69,
    "priorityScoreFloat": 68.5,
    "priorityTier": "Higher Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Site-specific recharge assessment",
    "interventionCategory": "Site-specific Assessment",
    "areaKm2": 0.367,
    "evidenceSupportIndex": 0.662,
    "coords": {
      "x": 10.85,
      "y": -34.64
    },
    "coords3d": {
      "x": 10.85,
      "y": -34.64,
      "z": 3.31
    },
    "gisCoords": {
      "lng": 88.358953,
      "lat": 26.842984
    },
    "historicalDischarge": 1,
    "projectedDischarge": 4.1,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 1
      },
      {
        "month": "Mar",
        "discharge": 0.8
      },
      {
        "month": "May (Dry)",
        "discharge": 0.3
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 2.2
      },
      {
        "month": "Sep (Post)",
        "discharge": 3.6
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 4.1
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3245 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (17°)",
        "contribution": "+19%",
        "positive": true
      },
      {
        "name": "Drainage Distance (203m)",
        "contribution": "-10%",
        "positive": false
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Staggered Trenching & Pits",
        "count": "2.0 km",
        "cost": 573750,
        "icon": "Shovel"
      },
      {
        "type": "Vegetative Filter Strips",
        "count": "4 Hectares",
        "cost": 382500,
        "icon": "Trees"
      },
      {
        "type": "Check Structure",
        "count": 2,
        "cost": 318750,
        "icon": "Shield"
      }
    ],
    "minBudgetRequired": 1275000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "36.7 Hectares",
    "communityBeneficiaries": "420 Households (1931 People)",
    "interventions": [
      {
        "id": "int-98-1",
        "type": "Contour Trench",
        "offset": {
          "x": 12.65,
          "y": -32.84
        },
        "height": 2.2,
        "minBudget": 892500
      },
      {
        "id": "int-98-2",
        "type": "Percolation Pit",
        "offset": {
          "x": 9.25,
          "y": -32.24
        },
        "height": 1.4,
        "minBudget": 1275000
      }
    ]
  },
  {
    "id": "spring-99",
    "slNo": 99,
    "code": "SP-099",
    "name": "8 Dhuray Dhara",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "1402 m",
    "elevationMeters": 1401.9,
    "slope": "26.1°",
    "slopeDeg": 26.1,
    "rainfall": "3245 mm",
    "rainfallMm": 3245,
    "lulc": "Tree cover",
    "distanceToDrainage": 28,
    "flowAccumulation": 43,
    "clay05cm": 264,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 89,
    "suitabilityScore": 67,
    "suitabilityScoreFloat": 67.3,
    "suitabilityTier": "Moderate",
    "priorityScore": 77,
    "priorityScoreFloat": 77,
    "priorityTier": "Higher Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Site-specific recharge assessment",
    "interventionCategory": "Site-specific Assessment",
    "areaKm2": 0.791,
    "evidenceSupportIndex": 0.779,
    "coords": {
      "x": -21.94,
      "y": -25.19
    },
    "coords3d": {
      "x": -21.94,
      "y": -25.19,
      "z": 9.3
    },
    "gisCoords": {
      "lng": 88.284635,
      "lat": 26.872477
    },
    "historicalDischarge": 0.8,
    "projectedDischarge": 3.4,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 0.8
      },
      {
        "month": "Mar",
        "discharge": 0.6
      },
      {
        "month": "May (Dry)",
        "discharge": 0.3
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 1.8
      },
      {
        "month": "Sep (Post)",
        "discharge": 3
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 3.4
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3245 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (26.1°)",
        "contribution": "+11%",
        "positive": true
      },
      {
        "name": "Drainage Distance (28m)",
        "contribution": "+16%",
        "positive": true
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Staggered Trenching & Pits",
        "count": "2.0 km",
        "cost": 618750,
        "icon": "Shovel"
      },
      {
        "type": "Vegetative Filter Strips",
        "count": "4 Hectares",
        "cost": 412500,
        "icon": "Trees"
      },
      {
        "type": "Check Structure",
        "count": 2,
        "cost": 343750,
        "icon": "Shield"
      }
    ],
    "minBudgetRequired": 1375000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "79.1 Hectares",
    "communityBeneficiaries": "450 Households (2068 People)",
    "interventions": [
      {
        "id": "int-99-1",
        "type": "Contour Trench",
        "offset": {
          "x": -20.14,
          "y": -23.39
        },
        "height": 2.2,
        "minBudget": 962500
      },
      {
        "id": "int-99-2",
        "type": "Percolation Pit",
        "offset": {
          "x": -23.54,
          "y": -22.79
        },
        "height": 1.4,
        "minBudget": 1375000
      }
    ]
  },
  {
    "id": "spring-100",
    "slNo": 100,
    "code": "SP-100",
    "name": "JungpanaKholaSource",
    "state": "West Bengal",
    "district": "Darjeeling",
    "subdistrict": "Darjeeling Hills (Schist Basin)",
    "elevation": "1380 m",
    "elevationMeters": 1379.5,
    "slope": "28.2°",
    "slopeDeg": 28.2,
    "rainfall": "3029 mm",
    "rainfallMm": 3029,
    "lulc": "Tree cover",
    "distanceToDrainage": 151,
    "flowAccumulation": 20,
    "clay05cm": 276,
    "geology": "Schist",
    "status": "Primary Zone",
    "rawStatus": "PRIMARY_ZONE",
    "confidenceLevel": "Higher",
    "confidence": 87,
    "suitabilityScore": 59,
    "suitabilityScoreFloat": 58.8,
    "suitabilityTier": "Moderate",
    "priorityScore": 74,
    "priorityScoreFloat": 74.2,
    "priorityTier": "Higher Priority",
    "isTop15": false,
    "isFieldVerificationRequired": false,
    "riskLevel": "Low",
    "indicativeIntervention": "Site-specific recharge assessment",
    "interventionCategory": "Site-specific Assessment",
    "areaKm2": 0.666,
    "evidenceSupportIndex": 0.826,
    "coords": {
      "x": -6.99,
      "y": -14.9
    },
    "coords3d": {
      "x": -6.99,
      "y": -14.9,
      "z": 9.15
    },
    "gisCoords": {
      "lng": 88.318518,
      "lat": 26.90459
    },
    "historicalDischarge": 0.9,
    "projectedDischarge": 3.7,
    "dischargeTrend": [
      {
        "month": "Jan (Pre)",
        "discharge": 0.9
      },
      {
        "month": "Mar",
        "discharge": 0.7
      },
      {
        "month": "May (Dry)",
        "discharge": 0.3
      },
      {
        "month": "Jul (Intervention)",
        "discharge": 2
      },
      {
        "month": "Sep (Post)",
        "discharge": 3.3
      },
      {
        "month": "Nov (Sustained)",
        "discharge": 3.7
      }
    ],
    "topFactors": [
      {
        "name": "Geology Lithology (Schist)",
        "contribution": "+27%",
        "positive": true
      },
      {
        "name": "Monsoon Rainfall (3029 mm/yr)",
        "contribution": "+22%",
        "positive": true
      },
      {
        "name": "Terrain Slope (28.2°)",
        "contribution": "-15%",
        "positive": false
      },
      {
        "name": "Drainage Distance (151m)",
        "contribution": "-10%",
        "positive": false
      }
    ],
    "recommendedInterventions": [
      {
        "type": "Staggered Trenching & Pits",
        "count": "2.0 km",
        "cost": 607500,
        "icon": "Shovel"
      },
      {
        "type": "Vegetative Filter Strips",
        "count": "4 Hectares",
        "cost": 405000,
        "icon": "Trees"
      },
      {
        "type": "Check Structure",
        "count": 2,
        "cost": 337500,
        "icon": "Shield"
      }
    ],
    "minBudgetRequired": 1350000,
    "aquiferType": "Schist Himalayan Aquifer",
    "catchmentArea": "66.6 Hectares",
    "communityBeneficiaries": "440 Households (2023 People)",
    "interventions": [
      {
        "id": "int-100-1",
        "type": "Contour Trench",
        "offset": {
          "x": -5.19,
          "y": -13.1
        },
        "height": 2.2,
        "minBudget": 945000
      },
      {
        "id": "int-100-2",
        "type": "Percolation Pit",
        "offset": {
          "x": -8.59,
          "y": -12.5
        },
        "height": 1.4,
        "minBudget": 1350000
      }
    ]
  }
];

export const TOP_15_PRIORITY_SPRINGS = DARJEELING_100_SPRINGS.filter(s => s.isTop15);

export const FIELD_VERIFICATION_SPRINGS = DARJEELING_100_SPRINGS.filter(s => s.isFieldVerificationRequired);

export default DARJEELING_100_SPRINGS;

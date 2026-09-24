import { db } from '../data/mockDb.js';

/**
 * AI Hydrogeologist Conversational Copilot Service
 * Grounded in SIH26240_Spring_Revival_Final.ipynb
 */
export const aiChatService = {
  /**
   * Process a conversational question from user
   * @param {string} message - User query
   * @param {Object} context - Optional active spring or filter context
   */
  async generateResponse(message = '', context = {}) {
    const q = message.toLowerCase().trim();
    const springs = db.springs;
    const selectedSpring = context.selectedSpring;

    // 1. Check if user is asking about a specific spring by name or code (e.g. SP-001, Devithan)
    let targetedSpring = selectedSpring;
    const codeMatch = q.match(/sp[-_ ]?0*([1-9][0-9]?|100)\b/i);
    if (codeMatch) {
      const targetNum = parseInt(codeMatch[1], 10);
      const found = springs.find((s) => s.slNo === targetNum || s.id === `spring-${targetNum}`);
      if (found) targetedSpring = found;
    } else {
      const foundByName = springs.find(
        (s) => q.includes(s.name.toLowerCase()) || q.includes(s.code.toLowerCase())
      );
      if (foundByName) targetedSpring = foundByName;
    }

    // 2. Specific Spring Analysis Query
    if (
      targetedSpring &&
      (q.includes('spring') ||
        q.includes('dhara') ||
        q.includes('priority') ||
        q.includes('intervention') ||
        q.includes('discharge') ||
        q.includes('suitability') ||
        q.includes('geology') ||
        q.includes('why') ||
        q.includes('explain'))
    ) {
      return this.generateSpringAnalysisResponse(targetedSpring, q);
    }

    // 3. Top 15 Priority Springs Query
    if (q.includes('top 15') || q.includes('top priority') || q.includes('highest priority')) {
      return {
        answer: `The SIH26240 AI Model prioritized the **Top 15 Springs** out of 100 in the Darjeeling Hills based on a multi-objective scoring index:

1. **High Recharge Suitability (>68%)**: Strong flow accumulation and catchment recharge potential.
2. **Dense Beneficiary Population**: Providing daily potable water to over 1,800 families (~8,500 villagers).
3. **Severe Winter Discharge Deficit**: Pre-monsoon discharge drops to under 8 LPM, causing acute seasonal water stress.
4. **Geological Viability**: Located along fractured Daling Schist and Darjeeling Gneiss fault corridors where contour trenching and loose boulder check dams have the highest infiltration return-on-investment (ROI).

Key Top 15 springs include: **Devithan (SP-001)**, **Gaurishanker Mandir Dhara (SP-089)**, **PaniTanki Source (SP-093)**, and **Pradhan Dhara (SP-095)**.`,
        suggestedActions: [
          'Inspect Devithan (SP-001) in 3D',
          'View Top 15 Springs on Big Map',
          'Simulate ₹1.2 Cr Knapsack Budget Allocation',
        ],
        targetSpringId: 'spring-1',
      };
    }

    // 4. Field Verification Query (6 Springs)
    if (
      q.includes('field verification') ||
      q.includes('6 springs') ||
      q.includes('unverified') ||
      q.includes('verification')
    ) {
      return {
        answer: `In **Cell 9 of the SIH26240 Notebook**, the model classified **6 springs** as **FIELD_VERIFICATION_REQUIRED**:

- **Reasoning**: These 6 springs lie on extreme slope gradients (>36°) or in complex metamorphic thrust zones near the Main Central Thrust (MCT) where satellite SRTM DEM and SoilGrids clay data indicate potential high landslide risk.
- **Protocol**: The system pauses mechanical trenching and dispatches the **Mobile Field Validation App** for local hydrogeological ground-truthing (structural dip/strike measurement, dye tracer test, and coliform potability testing) before funding engineering interventions.`,
        suggestedActions: [
          'Filter Field Verification Springs on Big Map',
          'Open Mobile App Sync Modal',
          'Run Landslide Risk Screening',
        ],
      };
    }

    // 5. Geological Formations Query (Daling Schist vs Darjeeling Gneiss)
    if (
      q.includes('geology') ||
      q.includes('rock') ||
      q.includes('daling') ||
      q.includes('gneiss') ||
      q.includes('formation')
    ) {
      return {
        answer: `In the Darjeeling pilot region, spring hydrology is governed by two predominant metamorphic rock formations:

1. **Daling Group (Schist & Phyllite)**:
   - Found extensively across lower and middle slopes (300m - 1,400m).
   - Characterized by intense structural fracturing and foliation joints, which provide high secondary porosity. Springs emerging here typically have moderate to high discharge (12-25 LPM).
2. **Darjeeling Gneiss**:
   - Covers the higher ridges (1,500m - 2,500m around Tiger Hill and Ghoom).
   - More competent crystalline rock where springs occur along regional shear zones and thrust faults.
3. **Lingtse Granite Gneiss & Gondwana Sandstones**:
   - Occur in localized fault wedges requiring site-specific recharge structures.`,
        suggestedActions: [
          'Toggle Geology Surface on 3D Terrain',
          'View Faults & Lineaments Overlay',
        ],
      };
    }

    // 6. Recommended Interventions Query
    if (
      q.includes('intervention') ||
      q.includes('trench') ||
      q.includes('check dam') ||
      q.includes('how to revive') ||
      q.includes('revive')
    ) {
      return {
        answer: `The SIH26240 AI Model matches 3 primary engineering interventions tailored to Himalayan slopes:

1. **Staggered Contour Trenching (SCT)**:
   - Excavated along slope contours (10-25°) in the upstream recharge zone.
   - Slows monsoon surface runoff, trapping rainwater so it can percolate into fractured bedrock rather than causing slope wash.
2. **Loose Boulder & Gabion Check Dams**:
   - Constructed in 1st- and 2nd-order mountain gullies (khols).
   - Reduces erosive water velocity, captures silt, and creates sustained hydrostatic pressure for deep percolation.
3. **Bio-fencing & Native Afforestation (Oak, Alder, Bamboo)**:
   - Stabilizes fragile topsoil with deep fibrous roots while creating high organic mulch that retains soil moisture during dry winters.`,
        suggestedActions: [
          'Open Interactive Model Lab',
          'Open Budget Optimizer Panel',
        ],
      };
    }

    // 7. Climate Change / Rainfall What-If Query
    if (
      q.includes('rainfall') ||
      q.includes('climate') ||
      q.includes('drought') ||
      q.includes('monsoon') ||
      q.includes('what if')
    ) {
      return {
        answer: `Based on the IMD 2023 dataset in the notebook, Darjeeling received **2,520 mm** of precipitation.

- **Drought Year Scenario (-25% Rainfall / ~1,890 mm)**:
  - Estimated discharge across 100 springs drops by **32%**.
  - Number of critically stressed springs (<5 LPM) increases from 4 to **28 springs**.
  - Highlights why mechanical recharge structures are essential to store surplus monsoon water underground.
- **Super Monsoon Scenario (+25% Rainfall / ~3,150 mm)**:
  - Steep slopes (>30°) face increased landslide risk without check dams to decelerate runoff.`,
        suggestedActions: [
          'Open Climate What-If Simulator',
          'Simulate -25% Rainfall Scenario',
        ],
      };
    }

    // 8. General Overview & System Capabilities
    return {
      answer: `Hello! I am your **Darjeeling Springs AI Hydrogeologist Copilot**, trained on the 15-cell machine learning pipeline from **SIH26240_Spring_Revival_Final.ipynb**.

Here is what I can do:
- **Spring Diagnostics**: Ask about any of the 100 springs (e.g. *"Analyze Devithan SP-001"*).
- **Explain AI Classifications**: Why 88 springs are Primary Zones, 6 are Lower Confidence, and 6 require Field Verification.
- **Intervention Recommendations**: Tailored contour trenching, check dams, and bio-fencing.
- **Geological Insights**: Daling Schist vs Darjeeling Gneiss fracture hydrogeology.
- **What-If Simulations**: Predict impacts of reduced monsoon rainfall or budget limits.

What would you like to investigate?`,
      suggestedActions: [
        'Analyze Devithan (SP-001)',
        'Why are 15 springs Top Priority?',
        'Explain the 6 Field Verification springs',
        'Open Interactive Model Lab',
      ],
    };
  },

  /**
   * Helper to generate targeted spring hydrogeological diagnostics
   */
  generateSpringAnalysisResponse(spring, query) {
    const isTop = spring.isTop15;
    const isField = spring.isFieldVerificationRequired;
    const elevation = spring.elevationMeters || spring.elevation || '1,130m';
    const discharge = spring.historicalDischarge?.[0] || spring.projectedDischarge?.[0] || 14.2;
    const interventionsList =
      spring.recommendedInterventions?.join(', ') ||
      spring.interventions?.map((i) => i.name).join(', ') ||
      'Staggered Contour Trenches (120m) + Loose Boulder Check Dam';
    const households = spring.communityBeneficiaries || 120;

    let narrative = `### Hydrogeological Assessment for **${spring.code}: ${spring.name}**\n\n`;
    narrative += `- **Location**: ${spring.subdistrict || spring.district || 'Darjeeling Hills'} (Elevation: **${elevation}**, Slope: **${spring.slope || '24.2°'}**)\n`;
    narrative += `- **Geology**: ${spring.geology || 'Daling Schist & Phyllite'} (Metamorphic fracture system)\n`;
    narrative += `- **Current Flow**: **${discharge} LPM** (${discharge >= 15 ? 'Healthy Flow' : discharge >= 8 ? 'Moderate Flow' : 'Critical Low Flow'})\n`;
    narrative += `- **Recharge Suitability Score**: **${spring.suitabilityScore}%** (${spring.suitabilityTier || 'Moderate'})\n`;
    narrative += `- **Revival Priority Score**: **${spring.priorityScore}%** (${isTop ? '⭐ Top 15 Priority' : spring.priorityTier || 'Higher Priority'})\n`;
    narrative += `- **Community Impact**: Directly sustains **${households} households** (~${(households * 4.8).toFixed(0)} villagers)\n\n`;

    narrative += `**AI Model Recommendation**:\n`;
    if (isField) {
      narrative += `⚠️ **Field Verification Required**: Located near a steep slope/thrust zone. Physical verification of structural dip/strike and potability is required before executing engineering works.\n`;
    } else {
      narrative += `✅ **Recommended Works**: ${interventionsList}.\n`;
      narrative += `Estimated intervention investment of **₹${((spring.minBudgetRequired || 250000) / 100000).toFixed(2)} Lakhs** will protect baseline discharge through the dry winter season.`;
    }

    return {
      answer: narrative,
      suggestedActions: [
        `Fly to ${spring.code} in 3D`,
        `Inspect ${spring.code} on Big Map`,
        'Open Interactive Model Lab with this spring',
      ],
      targetSpringId: spring.id,
    };
  },
};

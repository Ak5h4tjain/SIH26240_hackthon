export function buildScenarioPlan(springs, budget) {
  const safeBudget = Number.isFinite(Number(budget)) ? Math.max(0, Number(budget)) : 0;

  const scenarioTemplates = [
    {
      id: 'balanced',
      label: 'Balanced Recovery',
      description: 'Stabilizes the most vulnerable springs with complementary structural and ecological measures.',
      emphasis: { critical: 0.5, moderate: 0.35, outreach: 0.15 },
    },
    {
      id: 'high-impact',
      label: 'High-Impact Revival',
      description: 'Prioritizes the largest and most drought-sensitive catchments to maximize water gain per rupee.',
      emphasis: { critical: 0.6, moderate: 0.2, outreach: 0.2 },
    },
    {
      id: 'equitable',
      label: 'Equitable Community Reach',
      description: 'Maximizes household coverage to distribute resilience across more villages and communities.',
      emphasis: { critical: 0.4, moderate: 0.25, outreach: 0.35 },
    },
  ];

  const totals = springs.reduce(
    (acc, spring) => {
      const beneficiaries = extractBeneficiaryCount(spring.communityBeneficiaries);
      acc.beneficiaries += beneficiaries;
      acc.minBudget += spring.minBudgetRequired;
      acc.recovery += spring.projectedDischarge || spring.historicalDischarge || 1;
      return acc;
    },
    { beneficiaries: 0, minBudget: 0, recovery: 0 }
  );

  const scenarios = scenarioTemplates.map((template) => {
    const fundedSprings = springs
      .map((spring) => {
        const riskWeight = spring.status?.toLowerCase().includes('critical') ? 1.4 : 1.1;
        const viability = Math.min(1, safeBudget / (spring.minBudgetRequired || 1));
        const beneficiaries = extractBeneficiaryCount(spring.communityBeneficiaries);

        const score =
          (viability * 0.4 +
            (spring.suitabilityScore || 70) / 100 * 0.35 +
            (spring.confidence || 75) / 100 * 0.15 +
            riskWeight * 0.1) *
          (1 + (beneficiaries / Math.max(1, totals.beneficiaries)) * 0.2);

        return {
          spring,
          score,
          beneficiaries,
          viability,
        };
      })
      .sort((a, b) => b.score - a.score)
      .slice(0, Math.min(3, springs.length));

    const projectedRecharge = fundedSprings.reduce((sum, item) => {
      const discharge = item.spring.projectedDischarge || item.spring.historicalDischarge || 1;
      return sum + discharge * 95000;
    }, 0);

    const beneficiaries = fundedSprings.reduce((sum, item) => sum + item.beneficiaries, 0);

    const weightedScore = Math.round(
      fundedSprings.reduce((sum, item) => sum + item.score, 0) *
        (template.emphasis.critical * 1.1 + template.emphasis.moderate * 0.8 + template.emphasis.outreach * 1.2) *
        100
    );

    const investmentEfficiency = Math.max(
      1,
      Number(((projectedRecharge / Math.max(safeBudget || 1, 1)) * 1000).toFixed(1))
    );

    return {
      id: template.id,
      label: template.label,
      description: template.description,
      score: weightedScore,
      projectedRecharge: Math.round(projectedRecharge),
      beneficiaries,
      investmentEfficiency,
      focusSprings: fundedSprings.map((entry) => entry.spring.name),
      budgetNeeded: Math.round(fundedSprings.reduce((sum, entry) => sum + entry.spring.minBudgetRequired, 0)),
    };
  });

  return scenarios.sort((a, b) => b.score - a.score);
}

function extractBeneficiaryCount(value) {
  if (typeof value !== 'string') return 0;

  const match = value.match(/(\d+(?:,\d{3})*)/g);
  if (!match) return 0;

  return match.reduce((sum, item) => sum + Number(String(item).replace(/,/g, '')), 0);
}

import test from 'node:test';
import assert from 'node:assert/strict';
import { buildScenarioPlan } from './scenarioPlanner.js';

const springs = [
  {
    id: 'spring-a',
    name: 'Spring A',
    minBudgetRequired: 650000,
    communityBeneficiaries: '320 Households (1,450 People)',
    interventions: [{ minBudget: 500000 }, { minBudget: 650000 }],
  },
  {
    id: 'spring-b',
    name: 'Spring B',
    minBudgetRequired: 1200000,
    communityBeneficiaries: '210 Households (980 People)',
    interventions: [{ minBudget: 1000000 }, { minBudget: 1200000 }],
  },
  {
    id: 'spring-c',
    name: 'Spring C',
    minBudgetRequired: 1850000,
    communityBeneficiaries: '540 Households (2,600 People)',
    interventions: [{ minBudget: 1500000 }, { minBudget: 1850000 }],
  },
];

test('buildScenarioPlan returns a ranked 3-scenario plan for a given budget', () => {
  const plan = buildScenarioPlan(springs, 2400000);

  assert.equal(Array.isArray(plan), true);
  assert.equal(plan.length, 3);
  assert.ok(plan.every((scenario) => scenario.label && scenario.description));
  assert.ok(plan[0].score >= plan[1].score);
  assert.ok(plan[0].projectedRecharge > 0);
  assert.ok(plan[0].beneficiaries >= 0);
});

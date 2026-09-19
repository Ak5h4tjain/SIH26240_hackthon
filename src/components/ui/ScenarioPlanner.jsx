import React from 'react';
import { TrendingUp, MapPinned, Users, ArrowRight } from 'lucide-react';
import { buildScenarioPlan } from '../../utils/scenarioPlanner';

export default function ScenarioPlanner({ springs, budget }) {
  const scenarios = buildScenarioPlan(springs, budget);
  const recommended = scenarios[0];

  const formatL = (value) => new Intl.NumberFormat('en-IN').format(Math.round(value));

  return (
    <div className="pointer-events-auto w-full max-w-md rounded-2xl border border-white/20 bg-slate-950/92 p-4 shadow-2xl backdrop-blur-2xl">
      <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-2.5">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-violet-500/40 bg-violet-500/15 text-violet-300">
            <TrendingUp className="h-4 w-4" />
          </div>
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-violet-300/80">
              Decision Support
            </div>
            <div className="text-xs font-bold text-white">Scenario Planner</div>
          </div>
        </div>
        <span className="rounded-full border border-violet-500/40 bg-violet-500/15 px-2 py-0.5 text-[10px] font-bold text-violet-300">
          AI Ranked
        </span>
      </div>

      <div className="mb-3 rounded-xl border border-violet-500/30 bg-violet-500/10 p-3">
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="text-[10px] uppercase tracking-[0.12em] text-violet-200/80">Recommended</div>
            <div className="text-sm font-extrabold text-white">{recommended.label}</div>
          </div>
          <div className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-1 text-[10px] font-bold text-emerald-300">
            Score {recommended.score}
          </div>
        </div>
        <p className="mt-2 text-[11px] leading-relaxed text-slate-300">{recommended.description}</p>
      </div>

      <div className="mb-3 grid grid-cols-3 gap-2 text-center text-[10px]">
        <div className="rounded-xl border border-white/10 bg-white/5 p-2.5">
          <div className="mb-1 flex justify-center text-cyan-300">
            <TrendingUp className="h-3.5 w-3.5" />
          </div>
          <div className="font-mono text-xs font-bold text-white">{formatL(recommended.projectedRecharge)}</div>
          <div className="text-slate-400">L/yr</div>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-2.5">
          <div className="mb-1 flex justify-center text-emerald-300">
            <Users className="h-3.5 w-3.5" />
          </div>
          <div className="font-mono text-xs font-bold text-white">{formatL(recommended.beneficiaries)}</div>
          <div className="text-slate-400">people</div>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-2.5">
          <div className="mb-1 flex justify-center text-amber-300">
            <MapPinned className="h-3.5 w-3.5" />
          </div>
          <div className="font-mono text-xs font-bold text-white">{recommended.investmentEfficiency}x</div>
          <div className="text-slate-400">efficiency</div>
        </div>
      </div>

      <div className="space-y-2">
        {scenarios.map((scenario, index) => (
          <div
            key={scenario.id}
            className={`rounded-xl border p-2.5 transition-all ${
              index === 0
                ? 'border-violet-500/40 bg-violet-500/10'
                : 'border-white/10 bg-white/5'
            }`}
          >
            <div className="mb-1 flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5">
                <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400">
                  {index + 1}
                </span>
                <span className="text-xs font-bold text-white">{scenario.label}</span>
              </div>
              <span className="font-mono text-[10px] font-bold text-cyan-300">{scenario.score}</span>
            </div>
            <p className="text-[10px] leading-relaxed text-slate-300">{scenario.description}</p>
            <div className="mt-2 flex items-center justify-between text-[10px] text-slate-400">
              <span>{scenario.focusSprings.slice(0, 2).join(' • ')}</span>
              <span className="inline-flex items-center gap-1 font-semibold text-violet-300">
                View <ArrowRight className="h-3 w-3" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

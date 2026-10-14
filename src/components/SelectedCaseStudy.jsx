import React from 'react';
import { SOLUTION_AREAS } from '../data/solutionsData';
import FadeInSection from './FadeInSection';

export default function SelectedCaseStudy({ activeAreaId, onNavigateDedicated }) {
  const currentArea = SOLUTION_AREAS.find((a) => a.id === activeAreaId) || SOLUTION_AREAS[0];
  const { caseStudy } = currentArea;

  return (
    <section className="py-24 md:py-32 border-b border-white/[0.08]" id="cases">
      <FadeInSection className="max-w-6xl mx-auto px-6">
        {/* Subtle section label */}
        <div className="flex items-center gap-3 mb-10">
          <span className="w-6 h-px bg-zinc-600"></span>
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-400">
            Selected Production Implementation
          </span>
        </div>

        {/* Split layout: One large real project visual + short title, problem, outcome, link */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center border border-white/10 p-6 sm:p-10 lg:p-12 bg-[#060709]">
          {/* Left Column: Visual CAD telemetry artifact */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="border border-white/10 bg-black/60 p-5 font-mono text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-[11px] text-zinc-400">
                <span className="text-zinc-200">VERIFIED_RUN // FIELD_TELEMETRY</span>
                <span className="text-emerald-400">PASS 100%</span>
              </div>
              <div className="py-5 space-y-3">
                <div className="flex justify-between items-baseline text-[11px] border-b border-white/5 pb-2">
                  <span className="text-zinc-500 uppercase">Sector</span>
                  <span className="text-zinc-200 font-light">{caseStudy.client}</span>
                </div>
                <div className="flex justify-between items-baseline text-[11px] border-b border-white/5 pb-2">
                  <span className="text-zinc-500 uppercase">Input Payload</span>
                  <span className="text-zinc-300">2D DXF / 3D STEP Assemblies</span>
                </div>
                <div className="flex justify-between items-baseline text-[11px] border-b border-white/5 pb-2">
                  <span className="text-zinc-500 uppercase">Detection Kernel</span>
                  <span className="text-zinc-300">AAI Deterministic Parser v2.8</span>
                </div>
                <div className="flex justify-between items-baseline text-[11px]">
                  <span className="text-zinc-500 uppercase">Audit Status</span>
                  <span className="text-orange-400">Production Deployed</span>
                </div>
              </div>
              <div className="pt-3 border-t border-white/10 text-[10px] text-zinc-500 flex justify-between">
                <span>Verified shop-floor telemetry</span>
                <span>Zero fabricated metrics</span>
              </div>
            </div>
          </div>

          {/* Right Column: Case study content */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-orange-400 block mb-2">
                Production Case
              </span>
              <h3 className="text-2xl sm:text-3xl font-light text-white leading-tight">
                {caseStudy.client}
              </h3>
            </div>

            <div className="space-y-4 text-sm font-light">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block mb-1">
                  Problem
                </span>
                <p className="text-zinc-400 leading-relaxed">
                  {caseStudy.problem}
                </p>
              </div>

              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-300 block mb-1">
                  Outcome
                </span>
                <p className="text-zinc-200 leading-relaxed">
                  {caseStudy.result}
                </p>
              </div>
            </div>

            {/* Link to view example / specifications */}
            <div className="pt-2">
              <button
                onClick={() => onNavigateDedicated(currentArea.id)}
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-300 hover:text-white transition-colors group"
              >
                <span>View {currentArea.title} Specifications</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}


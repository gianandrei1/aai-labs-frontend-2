import React from 'react';
import { ManufacturingVisual } from './ManufacturingVisual';
import FadeInSection from './FadeInSection';

export default function DedicatedSolutionPage({ area, onBack }) {
  if (!area) return null;

  return (
    <div className="pt-24 pb-28 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        {/* Breadcrumb / Back button */}
        <div className="mb-10 flex items-center justify-between border-b border-white/10 pb-4">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-white transition-colors"
          >
            <span>← Back to Overview</span>
          </button>
        </div>

        {/* Header Block */}
        <FadeInSection className="space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-orange-400 uppercase tracking-widest">
            <span>{area.subtitle}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white max-w-4xl">
            {area.title}: {area.headline}
          </h1>

          <p className="text-lg sm:text-xl text-zinc-400 font-light leading-relaxed max-w-3xl pt-2">
            {area.description}
          </p>
        </FadeInSection>

        {/* Primary Technical Visual Showcase */}
        <FadeInSection className="mb-20">
          <ManufacturingVisual type={area.visualType} />
        </FadeInSection>

        {/* Verified Metrics Grid (Clean dividers, no rounded pills) */}
        <FadeInSection className="mb-20 border border-white/10 bg-zinc-950/40">
          <div className="px-6 py-4 border-b border-white/10 text-xs font-mono uppercase tracking-wider text-zinc-400">
            Field Performance Benchmarks
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {area.metrics.map((metric, idx) => (
              <div key={idx} className="p-8 text-center sm:text-left">
                <div className="text-3xl sm:text-4xl font-light text-white font-mono">
                  {metric.value}
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mt-2">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </FadeInSection>

        {/* Deep Dive Capabilities (4 detailed blocks with clean industrial borders) */}
        <FadeInSection className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-[1px] bg-zinc-600"></span>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-400">
              Technical Modules &amp; Subsystems
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
            {area.features.map((feature, idx) => (
              <div key={idx} className="p-8 bg-[#08090b] space-y-3">
                <div className="text-xs font-mono text-zinc-500">
                  <span>MODULE {String(idx + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="text-xl font-light text-white">
                  {feature.name}
                </h3>
                <p className="text-sm text-zinc-400 font-light leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </FadeInSection>

        {/* Case Study Section */}
        <FadeInSection className="mb-20 border border-white/10 p-8 sm:p-12 bg-[#060709]">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-zinc-600"></span>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-400">
              Manufacturing Case Study
            </span>
          </div>

          <h3 className="text-2xl font-light text-white mb-6">
            {area.caseStudy.client}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
            <div className="space-y-2 border-t md:border-t-0 md:border-r border-white/10 pt-4 md:pt-0 md:pr-8">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block">
                Production Challenge
              </span>
              <p className="text-zinc-400 font-light leading-relaxed">
                {area.caseStudy.problem}
              </p>
            </div>

            <div className="space-y-2 pt-4 md:pt-0">
              <span className="text-xs font-mono text-orange-400 uppercase tracking-wider block">
                Implemented Solution &amp; Measured ROI
              </span>
              <p className="text-zinc-200 font-light leading-relaxed">
                {area.caseStudy.result}
              </p>
            </div>
          </div>
        </FadeInSection>

        {/* Bottom CTA & Navigation to next area */}
        <FadeInSection className="border border-white/10 p-8 sm:p-12 bg-zinc-950 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-light text-white mb-1">
              Deploy {area.title} in your workflow
            </h4>
            <p className="text-sm text-zinc-400 font-light">
              We benchmark your drawings and CAD assemblies within 48 hours.
            </p>
          </div>
          <div className="flex items-center gap-4 text-sm font-medium">
            <button
              onClick={onBack}
              className="px-6 py-3 border border-white/20 text-white hover:border-white/50 transition-colors"
            >
              Back to Overview
            </button>
            <a
              href="mailto:contact@aailabs.com"
              className="px-6 py-3 bg-orange-500 text-white hover:bg-orange-600 transition-colors"
            >
              Request Technical Audit
            </a>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}

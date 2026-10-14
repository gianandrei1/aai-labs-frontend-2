import React from 'react';

const SOLUTION_IMAGE_MAP = {
  'cad-error': {
    src: '/error-detection.png',
    alt: 'AAI Labs Error Detection — Automated Drawing Verification & Scale Mismatch Check',
  },
  'quote-breakdown': {
    src: '/quoting.png',
    alt: 'AAI Labs Quoting — Technical Drawing Feature Extraction & Material Cost Breakdown',
  },
  'agent-pipeline': {
    src: '/ai-agents.png',
    alt: 'AAI Labs AI Agents — Autonomous Order Intake & ERP Handoff Workflow',
  },
  'custom-architecture': {
    src: '/custom-solutions.png',
    alt: 'AAI Labs Custom Solutions — Modular Manufacturing Action & Pipeline Engine',
  },
};

export function ManufacturingVisual({ type }) {
  const current = SOLUTION_IMAGE_MAP[type] || SOLUTION_IMAGE_MAP['cad-error'];

  return (
    <div className="border border-white/10 bg-[#07080a] shadow-2xl overflow-hidden w-full h-full min-h-[380px] lg:min-h-[460px] flex flex-col justify-center items-center">
      <div className="relative w-full h-full flex-1 flex items-center justify-center overflow-hidden bg-[#050608] p-3 sm:p-5">
        <img
          key={current.src}
          src={current.src}
          alt={current.alt}
          className="w-full h-full max-h-[540px] object-contain object-center transition-opacity duration-300"
        />
      </div>
    </div>
  );
}


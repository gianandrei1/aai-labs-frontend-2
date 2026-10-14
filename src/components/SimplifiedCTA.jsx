import React from 'react';
import FadeInSection from './FadeInSection';

export default function SimplifiedCTA() {
  return (
    <section className="py-28 md:py-36" id="contact">
      <FadeInSection className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl space-y-7">
          <div className="flex items-center gap-3">
            <span className="w-6 h-px bg-zinc-600"></span>
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-400">
              Start Evaluation
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white leading-tight">
            Deploy Intelligence To Your Manufacturing Floor
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed max-w-xl">
            Evaluate our deterministic CAD parsing and automated estimating kernels on your real production files.
          </p>

          <div className="pt-2 flex items-center gap-4">
            <a
              href="mailto:contact@aai-labs.com"
              className="px-8 py-4 bg-orange-500 text-white font-medium text-sm hover:bg-orange-600 transition-colors inline-block"
            >
              Contact Us
            </a>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}


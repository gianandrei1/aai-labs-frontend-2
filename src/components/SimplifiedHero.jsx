import React from 'react';
import FadeInSection from './FadeInSection';

export default function SimplifiedHero({ onExploreSolutions }) {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center py-8 sm:py-12 lg:py-16 border-b border-white/[0.08]">
      <FadeInSection className="max-w-6xl mx-auto px-6 w-full">
        {/* Eyebrow Label */}
        <div className="inline-flex items-center gap-3 mb-4 sm:mb-6">
          <span className="w-6 h-px bg-zinc-600"></span>
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-400">
            AAI Labs Manufacturing
          </span>
        </div>

        {/* Two-Column Grid: Stays side-by-side from sm (640px+) and up */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Headline, supporting text, and buttons */}
          <div className="sm:col-span-7 flex flex-col justify-between space-y-6 sm:space-y-0 min-w-0">
            <div className="space-y-4 sm:space-y-5 lg:space-y-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight leading-[1.1] text-white">
                Turn manufacturing information into intelligent, actionable workflows.
              </h1>

              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-zinc-400 font-light leading-relaxed max-w-xl">
                Deterministic CAD inspection, automated quotation calculus, and autonomous engineering agents engineered for serious fabrication and machining facilities.
              </p>
            </div>

            {/* CTAs: Aligned to the bottom */}
            <div className="pt-4 sm:pt-6 flex flex-wrap items-center gap-4 sm:gap-6">
              <button
                onClick={onExploreSolutions}
                className="px-6 sm:px-7 py-3 sm:py-3.5 bg-white text-black text-xs sm:text-sm font-medium hover:bg-zinc-200 transition-colors"
              >
                Explore Solutions
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-xs sm:text-sm font-mono tracking-wider text-zinc-400 hover:text-white transition-colors flex items-center gap-2 group"
              >
                <span>Contact Us</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>

          {/* Right Column: Complete, uncropped image display */}
          <div className="sm:col-span-5 flex flex-col min-w-0">
            <div className="border border-white/10 bg-[#07080a] shadow-2xl overflow-hidden w-full h-full min-h-[220px] flex items-center justify-center p-2 sm:p-3">
              <img
                src="/hero-1.png"
                alt="AAI Labs CAD and drawing inspection workflow interface"
                className="w-full h-full object-contain object-center max-h-[460px]"
              />
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}


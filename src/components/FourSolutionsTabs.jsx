import React from 'react';
import { SOLUTION_AREAS } from '../data/solutionsData';
import { ManufacturingVisual } from './ManufacturingVisual';
import FadeInSection from './FadeInSection';

export default function FourSolutionsTabs({ activeAreaId, onSelectArea, onNavigateDedicated }) {
  const currentArea = SOLUTION_AREAS.find((a) => a.id === activeAreaId) || SOLUTION_AREAS[0];

  return (
    <section className="py-24 md:py-32 border-b border-white/[0.08]" id="solutions">
      <FadeInSection className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-6 h-px bg-zinc-600"></span>
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-400">
              Core Capabilities
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white">
            Four Core Solution Areas
          </h2>
        </div>

        {/* Split Layout: The 4 Buttons Box and Image Box are directly aligned */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Left Column: 4 Solution Buttons Container */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="border border-white/10 divide-y divide-white/10 bg-[#000000] h-full flex flex-col justify-between">
              {SOLUTION_AREAS.map((area) => {
                const isActive = area.id === currentArea.id;
                return (
                  <button
                    key={area.id}
                    onClick={() => onSelectArea(area.id)}
                    className={`w-full text-left p-5 sm:p-6 relative transition-all flex-1 flex flex-col justify-center focus:outline-none ${isActive
                        ? 'bg-zinc-900/60 text-white'
                        : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-950/40'
                      }`}
                  >
                    {/* Vertical Active Indicator Line (Left border indicator) */}
                    {isActive && (
                      <span className="absolute top-0 bottom-0 left-0 w-[3px] bg-orange-500"></span>
                    )}

                    <div className="mb-1.5">
                      <span className={`text-[11px] font-mono tracking-widest uppercase ${isActive ? 'text-orange-400' : 'text-zinc-600'}`}>
                        {area.number}
                      </span>
                    </div>

                    <div className={`text-lg sm:text-xl font-light tracking-tight ${isActive ? 'text-white' : 'text-zinc-400'}`}>
                      {area.title}
                    </div>

                    {/* Short one-sentence context when active */}
                    {isActive && (
                      <p className="mt-2 text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                        {area.oneSentenceDesc || area.headline}
                      </p>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: One dominant visual exactly aligned with the 4 buttons */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="w-full h-full flex flex-col">
              <ManufacturingVisual type={currentArea.visualType} />
            </div>
          </div>
        </div>

        {/* Explore Solution Button lower down on the right */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={() => onNavigateDedicated(currentArea.id)}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-orange-400 hover:text-orange-300 transition-colors group"
          >
            <span>Explore {currentArea.title} Architecture</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </FadeInSection>
    </section>
  );
}


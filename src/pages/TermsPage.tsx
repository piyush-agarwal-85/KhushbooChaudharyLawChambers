import React, { useState } from 'react';
import { PageTab } from '../types';
import { IMAGES } from '../assets/images';
import { TERMS_SECTIONS } from '../data/legalData';

interface TermsPageProps {
  onSelectTab: (tab: PageTab) => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onSelectTab }) => {
  const [activeSection, setActiveSection] = useState<string>('01');

  const scrollToSection = (num: string) => {
    setActiveSection(num);
    const element = document.getElementById(`terms-${num}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-[#faf9f6] text-[#1c1917]">
      
      {/* 1. HERO SECTION (Dark Atmospheric) */}
      <section className="relative bg-[#0c0c0e] text-white pt-12 pb-20 border-b border-stone-800 overflow-hidden">
        <div 
          className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 bg-cover bg-right opacity-30 lg:opacity-75 mix-blend-screen pointer-events-none"
          style={{ backgroundImage: `url(${IMAGES.heroLawScalesBooks})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0e] via-[#0c0c0e]/95 lg:via-[#0c0c0e]/75 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs font-sans text-stone-400 mb-6">
            <button
              onClick={() => onSelectTab('home')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Home
            </button>
            <span>›</span>
            <span className="text-stone-200">Terms and Conditions</span>
          </div>

          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#c01224]" />
              <span className="text-xs font-sans font-semibold tracking-widest uppercase text-stone-300">
                LEGAL INFORMATION
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight">
              Terms and Conditions
            </h1>

            <p className="font-sans text-sm sm:text-base text-stone-300 leading-relaxed pt-2">
              By accessing and using this website, you agree to comply with and be bound by the following terms and conditions.
            </p>
          </div>
        </div>
      </section>

      {/* 2. DUAL COLUMN TERMS CONTENT */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left 4 Cols: Sticky "On This Page" Navigation */}
            <div className="hidden lg:block lg:col-span-4 sticky top-28 bg-white border border-stone-200 rounded-lg p-6 shadow-2xs">
              <div className="inline-flex items-center gap-2 mb-4 pb-3 border-b border-stone-100 w-full">
                <span className="w-4 h-[2px] bg-[#c01224]" />
                <span className="text-[11px] font-sans font-bold tracking-widest uppercase text-stone-500">
                  ON THIS PAGE
                </span>
              </div>

              <nav className="space-y-1 text-xs font-sans">
                {TERMS_SECTIONS.map((sec) => {
                  const isActive = activeSection === sec.number;
                  return (
                    <button
                      key={sec.number}
                      onClick={() => scrollToSection(sec.number)}
                      className={`w-full text-left px-3 py-2 rounded flex items-center gap-3 transition-colors cursor-pointer ${
                        isActive
                          ? 'bg-[#fdf2f2] text-[#c01224] font-semibold border-l-2 border-[#c01224]'
                          : 'text-stone-600 hover:bg-stone-50 hover:text-stone-900'
                      }`}
                    >
                      <span className="font-serif text-stone-400 font-bold">{sec.number}</span>
                      <span className="truncate">{sec.title}</span>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Right 8 Cols: Numbered Clauses */}
            <div className="lg:col-span-8 space-y-12">
              {TERMS_SECTIONS.map((sec) => (
                <div
                  key={sec.number}
                  id={`terms-${sec.number}`}
                  className="flex items-start gap-6 pt-4 border-t border-stone-200 first:border-0 first:pt-0"
                >
                  <div className="w-12 h-12 rounded-full border border-[#c01224]/30 bg-[#fdf2f2] text-[#c01224] flex items-center justify-center font-serif text-base font-bold shrink-0 shadow-2xs">
                    {sec.number}
                  </div>

                  <div className="space-y-3 flex-1">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                      {sec.title}
                    </h3>

                    <div className="font-sans text-xs sm:text-sm text-stone-600 space-y-2 leading-relaxed">
                      {sec.content.map((paragraph, pIdx) => (
                        <p key={pIdx}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

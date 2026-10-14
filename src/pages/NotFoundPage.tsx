import React, { useEffect } from 'react';
import { PageTab } from '../types';
import { IMAGES } from '../assets/images';
import { ArrowRight } from 'lucide-react';

interface NotFoundPageProps {
  onSelectTab: (tab: PageTab) => void;
  onOpenConsultation?: () => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onSelectTab }) => {
  useEffect(() => {
    document.title = '404 - Page Not Found | Khushboo Chaudhary Law Chambers';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="relative min-h-[calc(100vh-140px)] bg-[#0c0c0e] text-white flex items-center overflow-hidden border-b border-stone-800/80">
      
      {/* Law Desk with Scales, Stacked Books & Fountain Pen (Attachment 1 reference) */}
      <div 
        className="absolute right-0 top-0 bottom-0 w-full lg:w-[58%] xl:w-[55%] bg-cover bg-center lg:bg-right opacity-40 lg:opacity-100 pointer-events-none select-none transition-opacity duration-300"
        style={{ 
          backgroundImage: `url(${IMAGES.lawScalesBooks404})`,
          backgroundPosition: 'right 30% center',
        }}
      />
      
      {/* Dark luxury gradient overlays for seamless fade into left text content */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0e] via-[#0c0c0e]/95 lg:via-[#0c0c0e]/85 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-transparent to-transparent pointer-events-none opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10 w-full">
        <div className="max-w-xl xl:max-w-2xl space-y-7">
          
          {/* Red line indicator & PAGE NOT FOUND eyebrow */}
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#c01224]" />
            <span className="text-[11px] sm:text-xs font-sans font-semibold tracking-[0.22em] uppercase text-stone-300">
              PAGE NOT FOUND
            </span>
          </div>

          {/* Grand 404 Serif Headline */}
          <div className="space-y-3">
            <h1 className="font-serif text-7xl sm:text-8xl md:text-9xl font-normal text-white tracking-tight leading-none">
              404
            </h1>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-stone-100 leading-[1.18] tracking-tight">
              Looks like you’ve reached the wrong page.
            </h2>
          </div>

          {/* Descriptive message */}
          <p className="font-sans text-sm sm:text-base text-stone-300/90 leading-relaxed max-w-lg font-light">
            The page you are looking for doesn’t exist or may have been moved.
          </p>

          {/* Call to Actions matching Attachment 1 */}
          <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-5">
            {/* Primary Action: Go Back Home */}
            <button
              onClick={() => {
                onSelectTab('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 text-xs font-sans font-semibold tracking-wider uppercase text-white bg-[#c01224] hover:bg-[#a50f1f] active:scale-[0.98] rounded transition-all duration-150 cursor-pointer shadow-md hover:shadow-lg group"
            >
              <span>GO BACK HOME</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            {/* Secondary Action: Explore Practice Areas */}
            <button
              onClick={() => {
                onSelectTab('practice-areas');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-sans font-semibold tracking-wider uppercase text-white border border-stone-600/90 bg-[#121217]/60 hover:bg-[#1c1c24] hover:border-stone-400 active:scale-[0.98] rounded transition-all duration-150 cursor-pointer"
            >
              <span>EXPLORE OUR PRACTICE AREAS</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

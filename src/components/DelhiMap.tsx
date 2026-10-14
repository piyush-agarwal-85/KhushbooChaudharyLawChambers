import React from 'react';
import { ExternalLink, MapPin } from 'lucide-react';

interface DelhiMapProps {
  className?: string;
  heightClass?: string;
  rounded?: boolean;
}

export const DelhiMap: React.FC<DelhiMapProps> = ({
  className = '',
  heightClass = 'h-[360px] md:h-[400px]',
  rounded = true,
}) => {
  return (
    <div
      className={`relative w-full ${heightClass} ${
        rounded ? 'rounded-lg border border-stone-300 shadow-md' : 'border-0'
      } overflow-hidden bg-stone-100 ${className}`}
    >
      {/* Responsive Google Maps Embed */}
      <iframe
        title="Khushboo Chaudhary Law Chambers Google Maps Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.6158281690805!2d77.2434863!3d28.581296699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3003fffffff%3A0x853d7649716759a9!2sIndigo%20Law%20Group!5e0!3m2!1sen!2sin!4v1791277438815!5m2!1sen!2sin"
        className="w-full h-full border-0 absolute inset-0"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />

      {/* Floating Address and Direction Badge */}
      <div className="absolute bottom-4 left-4 sm:left-6 right-4 sm:right-auto sm:max-w-md bg-white/95 backdrop-blur-md px-4 py-3 rounded-lg shadow-xl border border-stone-200 text-xs flex items-center justify-between gap-4 pointer-events-auto z-10">
        <div>
          <div className="font-semibold text-stone-900 flex items-center gap-1.5 font-sans">
            <span className="w-2 h-2 rounded-full bg-[#c01224]" />
            Khushboo Chaudhary Law Chambers
          </div>
          <p className="text-[11px] text-stone-700 mt-1 font-sans leading-tight">
            <span className="font-semibold text-[#c01224]">Office:</span> G-22, LGF, Jangpura Ext Rd, near Eros Cinema
          </p>
          <p className="text-[11px] text-stone-500 mt-0.5 font-sans leading-tight">
            <span className="font-semibold text-stone-700">Chamber:</span> Chamber 346A, Block 1, Delhi High Court
          </p>
        </div>
        <a
          href="https://maps.google.com/?q=G-22+LGF+Jangpura+Extension+New+Delhi"
          target="_blank"
          rel="noreferrer"
          className="p-2.5 rounded bg-stone-100 hover:bg-[#c01224] hover:text-white text-stone-700 transition-colors shrink-0 shadow-2xs flex items-center gap-1.5 font-sans font-medium text-[11px]"
          title="Open directions in Google Maps"
        >
          <span>Map</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};

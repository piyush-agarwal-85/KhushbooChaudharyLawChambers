import React from 'react';
import faviconLogo from '../assets/images/favicon-logo.png';

interface KCLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  textClassName?: string;
}

export const KCLogo: React.FC<KCLogoProps> = ({
  className = '',
  size = 'md',
  showText = false,
  textClassName = '',
}) => {
  const sizeClasses = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9 sm:w-10 sm:h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Interlinked K & C Monogram Image */}
      <div className={`relative ${sizeClasses[size]} rounded-md overflow-hidden shrink-0 flex items-center justify-center transition-transform duration-200 group-hover:scale-105 shadow-sm`}>
        <img
          src={faviconLogo}
          alt="KC Monogram"
          className="w-full h-full object-contain"
        />
      </div>

      {showText && (
        <div className={`flex flex-col text-left ${textClassName}`}>
          <span className="font-serif tracking-[0.12em] sm:tracking-[0.16em] text-xs sm:text-sm md:text-[15px] font-bold text-white uppercase leading-tight">
            KC LEGAL CHAMBERS
          </span>
          <span className="text-[9px] sm:text-[10px] font-sans text-stone-400 tracking-wider mt-0.5">
            Advocates · Legal Research · Advisory
          </span>
        </div>
      )}
    </div>
  );
};

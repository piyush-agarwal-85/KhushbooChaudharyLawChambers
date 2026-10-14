import React from 'react';
import { PracticeArea } from '../types';
import { X, ArrowRight, CheckCircle2, BookOpen, Shield } from 'lucide-react';

interface PracticeAreaModalProps {
  area: PracticeArea | null;
  onClose: () => void;
  onConsult: (areaName: string) => void;
}

export const PracticeAreaModal: React.FC<PracticeAreaModalProps> = ({
  area,
  onClose,
  onConsult,
}) => {
  if (!area) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white text-stone-900 rounded-lg shadow-2xl overflow-hidden my-auto border border-stone-800/40">
        
        {/* Header */}
        <div className="p-6 bg-[#0c0c0e] text-white flex items-center justify-between border-b border-stone-800">
          <div>
            <div className="inline-flex items-center gap-2 mb-1">
              <span className="w-5 h-[2px] bg-[#c01224]" />
              <span className="text-[10px] font-sans font-semibold tracking-widest uppercase text-stone-400">
                PRACTICE AREA OVERVIEW
              </span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-white">
              {area.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-white hover:bg-stone-800 rounded-full transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto font-sans text-xs">
          
          <div>
            <h4 className="font-serif text-base font-bold text-stone-900 mb-2">
              Scope of Practice & Court Representation
            </h4>
            <p className="text-stone-600 leading-relaxed text-sm">
              {area.fullDescription}
            </p>
          </div>

          {/* Key Specializations */}
          <div>
            <h4 className="font-serif text-base font-bold text-stone-900 mb-3 flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#c01224]" />
              <span>Key Matters & Specializations</span>
            </h4>
            <div className="space-y-2">
              {area.keySpecializations.map((spec, i) => (
                <div
                  key={i}
                  className="p-3 bg-[#faf9f6] rounded border border-stone-200/80 flex items-start gap-2.5 text-stone-700"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#c01224] shrink-0 mt-0.5" />
                  <span className="leading-normal">{spec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Statutes */}
          <div>
            <h4 className="font-serif text-base font-bold text-stone-900 mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#c01224]" />
              <span>Relevant Statutory Enactments</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {area.statutes.map((stat, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-stone-100 border border-stone-200 text-stone-700 rounded text-[11px] font-medium"
                >
                  {stat}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 bg-[#faf9f6] border-t border-stone-200 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-stone-600 hover:text-stone-900 cursor-pointer"
          >
            Close
          </button>

          <button
            onClick={() => {
              onClose();
              onConsult(area.title);
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#c01224] hover:bg-[#a50f1f] rounded transition-all cursor-pointer shadow-sm"
          >
            <span>Consult in this Practice Area</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};

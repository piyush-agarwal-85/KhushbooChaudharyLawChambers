import React from 'react';
import { X, FileText, Mail, Ban, User, AlertCircle, ArrowRight } from 'lucide-react';
import { IMAGES } from '../assets/images';
import { CHAMBER_INFO } from '../data/legalData';

interface DisclaimerModalProps {
  isOpen: boolean;
  onAgree: () => void;
  onClose: () => void;
}

export const DisclaimerModal: React.FC<DisclaimerModalProps> = ({
  isOpen,
  onAgree,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white text-stone-900 rounded-lg shadow-2xl overflow-hidden my-auto flex flex-col md:flex-row border border-stone-800">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-stone-500 hover:text-stone-900 bg-white/80 hover:bg-stone-100 rounded-full transition-colors cursor-pointer"
          aria-label="Close Disclaimer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Atmosphere Panel (Dark with Scales and Law Books) */}
        <div className="relative md:w-5/12 bg-[#0c0c0e] text-white p-8 md:p-10 flex flex-col justify-between overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity"
            style={{ backgroundImage: `url(${IMAGES.heroLawScalesBooks})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-[#0c0c0e]/75 to-transparent" />

          <div className="relative z-10 space-y-6 my-auto">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#c01224]" />
              <span className="text-[11px] font-sans font-semibold tracking-widest uppercase text-stone-300">
                DISCLAIMER
              </span>
            </div>

            <h3 className="font-serif text-3xl font-semibold leading-tight text-white">
              Important Information
            </h3>

            <p className="text-sm font-sans text-stone-300 leading-relaxed">
              Please read the following information carefully before proceeding to access the digital portal of Khushboo Chaudhary Law Chambers.
            </p>

            <div className="pt-4 border-t border-stone-800 space-y-2">
              <div className="text-[11px] font-display text-[#c5a059] tracking-widest uppercase">
                Bar Council of India Rule 36
              </div>
              <p className="text-[11px] text-stone-400">
                Standards of Professional Conduct and Etiquette under the Advocates Act, 1961.
              </p>
            </div>
          </div>
        </div>

        {/* Right Policy Panel */}
        <div className="md:w-7/12 p-6 sm:p-8 md:p-10 bg-[#faf9f6] flex flex-col justify-between max-h-[85vh] overflow-y-auto">
          <div className="space-y-4">
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
              The Bar Council of India prohibits the developing of the website for the advertisement by an Advocate.
            </h4>

            <p className="text-xs text-stone-600 font-sans">
              By clicking <span className="font-semibold text-stone-900">“I Agree”</span> below, the user acknowledges the following:
            </p>

            {/* Acknowledgment Cards */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3 bg-white border border-stone-200 rounded text-xs leading-relaxed text-stone-700 shadow-2xs">
                <div className="p-1.5 rounded-full bg-red-50 text-[#c01224] shrink-0 mt-0.5">
                  <FileText className="w-4 h-4" />
                </div>
                <span>
                  This website is meant only for information purposes and not for any advertisement, personal communication, invitation or inducement of any sort from us or any of our members to solicit or advert any work through this website.
                </span>
              </div>

              <div className="flex items-start gap-3 p-3 bg-white border border-stone-200 rounded text-xs leading-relaxed text-stone-700 shadow-2xs">
                <div className="p-1.5 rounded-full bg-red-50 text-[#c01224] shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <span>
                  If you wish to get more information about us or would like to get in touch with <span className="font-semibold text-stone-900">Khushboo Chaudhary Law Chambers</span>, you may contact us on our registered email address: <span className="font-medium text-[#c01224]">{CHAMBER_INFO.email}</span>.
                </span>
              </div>

              <div className="flex items-start gap-3 p-3 bg-white border border-stone-200 rounded text-xs leading-relaxed text-stone-700 shadow-2xs">
                <div className="p-1.5 rounded-full bg-red-50 text-[#c01224] shrink-0 mt-0.5">
                  <Ban className="w-4 h-4" />
                </div>
                <span>
                  There is no sort of advertisement, personal communication, solicitation, invitation or inducement of any sort whatsoever from us or any of our members, and we are not soliciting any work through this website.
                </span>
              </div>

              <div className="flex items-start gap-3 p-3 bg-white border border-stone-200 rounded text-xs leading-relaxed text-stone-700 shadow-2xs">
                <div className="p-1.5 rounded-full bg-red-50 text-[#c01224] shrink-0 mt-0.5">
                  <User className="w-4 h-4" />
                </div>
                <span>
                  The user deliberates and wishes to get more information about us for his/her own information, use and voluntary will.
                </span>
              </div>

              <div className="flex items-start gap-3 p-3 bg-white border border-stone-200 rounded text-xs leading-relaxed text-stone-700 shadow-2xs">
                <div className="p-1.5 rounded-full bg-red-50 text-[#c01224] shrink-0 mt-0.5">
                  <AlertCircle className="w-4 h-4" />
                </div>
                <span>
                  The information provided upon user's specific request is obtained purely by user volition and does not create an advocate-client relationship.
                </span>
              </div>
            </div>

            <p className="text-[11px] text-stone-500 leading-normal pt-2">
              The information provided under this website is strictly available at your request for informational purposes, and should not be interpreted as soliciting or advertisement in any manner. In case the user has any legal issues, the user must seek independent legal advice.
            </p>
          </div>

          <div className="pt-6 mt-4 border-t border-stone-200">
            <button
              onClick={onAgree}
              className="w-full flex items-center justify-center gap-2 py-3 text-xs font-sans font-semibold tracking-wider uppercase text-white bg-[#c01224] hover:bg-[#a50f1f] rounded transition-all shadow-sm hover:shadow-md cursor-pointer"
            >
              <span>I AGREE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

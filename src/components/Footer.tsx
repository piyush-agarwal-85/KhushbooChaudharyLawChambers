import React from 'react';
import { PageTab } from '../types';
import { KCLogo } from './KCLogo';
import { CHAMBER_INFO } from '../data/legalData';
import { MapPin, Phone, Mail, Clock, Linkedin, Instagram } from 'lucide-react';

interface FooterProps {
  onSelectTab: (tab: PageTab) => void;
  onOpenDisclaimer: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectTab,
  onOpenDisclaimer,
}) => {
  return (
    <footer className="relative bg-[#070709] border-t border-stone-800 text-stone-300 pt-16 pb-8 overflow-hidden">
      {/* Background Watermark KC Monogram */}
      <div className="absolute right-6 bottom-10 pointer-events-none opacity-[0.035] select-none text-[200px] lg:text-[260px] font-serif font-bold text-white leading-none">
        KC
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Blurb matching Attachment 1 */}
          <div className="space-y-5">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onSelectTab('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-3 group text-left cursor-pointer"
            >
              <KCLogo size="md" />
              <div className="flex flex-col">
                <span className="font-serif tracking-[0.14em] text-sm sm:text-base font-bold text-white uppercase leading-tight group-hover:text-stone-100 transition-colors">
                  KC LEGAL CHAMBERS
                </span>
                <span className="text-[9px] sm:text-[10px] font-sans text-stone-400 tracking-wider mt-0.5">
                  Advocates · Legal Research · Advisory
                </span>
              </div>
            </a>

            <p className="text-xs font-sans text-stone-400 leading-relaxed max-w-sm">
              {CHAMBER_INFO.blurb}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://www.linkedin.com/company/khushboo-chaudhary-law-chambers/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="w-8 h-8 rounded border border-stone-700/80 flex items-center justify-center text-stone-400 hover:text-white hover:border-stone-500 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.instagram.com/khushboochaudharylawchambers/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram Profile"
                className="w-8 h-8 rounded border border-stone-700/80 flex items-center justify-center text-stone-400 hover:text-white hover:border-stone-500 transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://x.com/kclawchamber"
                target="_blank"
                rel="noreferrer"
                aria-label="X (Twitter) Profile"
                className="w-8 h-8 rounded border border-stone-700/80 flex items-center justify-center text-stone-400 hover:text-white hover:border-stone-500 transition-colors text-xs font-semibold"
              >
                𝕏
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-white font-semibold mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3 text-xs font-sans">
              <li>
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectTab('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectTab('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/practice-areas"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectTab('practice-areas');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Practice Areas
                </a>
              </li>
              <li>
                <a
                  href="/legal-research"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectTab('legal-research');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Legal Research
                </a>
              </li>
              <li>
                <a
                  href="/insights"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectTab('insights');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Insights
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectTab('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Practice Areas matching Attachment 1 */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-white font-semibold mb-5">
              Practice Areas
            </h4>
            <ul className="space-y-3 text-xs font-sans text-stone-400">
              <li>
                <a
                  href="/practice-areas"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectTab('practice-areas');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors text-left block"
                >
                  Constitutional Law
                </a>
              </li>
              <li>
                <a
                  href="/practice-areas"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectTab('practice-areas');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors text-left block"
                >
                  Criminal Law
                </a>
              </li>
              <li>
                <a
                  href="/practice-areas"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectTab('practice-areas');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors text-left block"
                >
                  Litigation & Dispute Resolution
                </a>
              </li>
              <li>
                <a
                  href="/practice-areas"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectTab('practice-areas');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors text-left block"
                >
                  Corporate & Commercial Law
                </a>
              </li>
              <li>
                <a
                  href="/practice-areas"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectTab('practice-areas');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors text-left block"
                >
                  Human Rights & Public Law
                </a>
              </li>
              <li>
                <a
                  href="/practice-areas"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectTab('practice-areas');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors text-left block"
                >
                  Technology, AI & Cyber Law
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="space-y-4">
            <h4 className="font-sans text-xs uppercase tracking-widest text-white font-semibold mb-5">
              Contact Information
            </h4>
            
            {/* Chamber Address */}
            <div className="flex items-start gap-3 text-xs text-stone-400">
              <MapPin className="w-4 h-4 text-[#c01224] shrink-0 mt-0.5" />
              <div>
                <p className="text-stone-300 leading-snug">
                  Chamber No. 346A, Block 1, Lawyers’ Chambers, Delhi High Court, New Delhi – 110003
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs text-stone-400 pt-1">
              <Phone className="w-4 h-4 text-[#c01224] shrink-0" />
              <a href="tel:+918630987774" className="hover:text-white transition-colors">
                +91 8630987774
              </a>
            </div>

            <div className="flex items-center gap-3 text-xs text-stone-400">
              <Mail className="w-4 h-4 text-[#c01224] shrink-0" />
              <a href="mailto:advkhushboochaudhary@gmail.com" className="hover:text-white transition-colors truncate">
                advkhushboochaudhary@gmail.com
              </a>
            </div>

            <div className="flex items-start gap-3 text-xs text-stone-400">
              <Clock className="w-4 h-4 text-[#c01224] shrink-0 mt-0.5" />
              <div>
                <p>Monday to Saturday</p>
                <p className="text-stone-300 font-medium">10:00 AM to 6:00 PM</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal Copyright & Disclaimers */}
        <div className="border-t border-stone-800/80 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-sans text-stone-500">
          <div>
            © 2026 KC Legal Chambers. All rights reserved.
          </div>

          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
            <a
              href="/privacy-policy"
              onClick={(e) => {
                e.preventDefault();
                onSelectTab('privacy-policy');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-stone-300 transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-stone-700">|</span>
            <a
              href="/terms"
              onClick={(e) => {
                e.preventDefault();
                onSelectTab('terms');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-stone-300 transition-colors"
            >
              Terms of Use
            </a>
            <span className="text-stone-700">|</span>
            <button
              onClick={onOpenDisclaimer}
              className="hover:text-stone-300 transition-colors cursor-pointer"
            >
              Legal Disclaimer
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

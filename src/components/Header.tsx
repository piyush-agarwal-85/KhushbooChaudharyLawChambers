import React, { useState } from 'react';
import { PageTab } from '../types';
import { KCLogo } from './KCLogo';
import { Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  currentTab: PageTab;
  onSelectTab: (tab: PageTab) => void;
  onOpenConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  onOpenConsultation,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageTab; label: string; path: string }[] = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'about', label: 'About', path: '/about' },
    { id: 'practice-areas', label: 'Practice Areas', path: '/practice-areas' },
    { id: 'legal-research', label: 'Legal Research', path: '/legal-research' },
    { id: 'insights', label: 'Insights', path: '/insights' },
    { id: 'contact', label: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#0c0c0e]/95 backdrop-blur-md border-b border-stone-800 text-stone-100 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo Zone matching Attachment 1 & 2 */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onSelectTab('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 text-left group cursor-pointer"
          >
            <KCLogo size="md" />

            {/* Chamber Titles */}
            <div className="flex flex-col">
              <span className="font-serif tracking-[0.10em] text-[11px] sm:text-sm font-bold text-white uppercase leading-tight group-hover:text-stone-100 transition-colors">
                KHUSHBOO CHAUDHARY
              </span>
              <span className="font-serif tracking-[0.10em] text-[11px] sm:text-sm font-bold text-white uppercase leading-tight group-hover:text-stone-100 transition-colors">
                LAW CHAMBERS
              </span>
              <span className="text-[9px] sm:text-[10px] font-sans text-stone-400 tracking-wider mt-0.5">
                Advocates · Legal Research · Advisory
              </span>
            </div>
          </a>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <a
                  key={item.id}
                  href={item.path}
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectTab(item.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`text-sm font-sans font-medium transition-colors py-1 relative cursor-pointer ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-stone-300 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#c01224]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Actions Zone */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Primary Consultation Button */}
            <button
              onClick={onOpenConsultation}
              className="group flex items-center gap-2 px-5 py-2.5 text-xs font-sans font-semibold tracking-wider uppercase text-white bg-[#c01224] hover:bg-[#a50f1f] rounded transition-all shadow-sm hover:shadow-md cursor-pointer"
            >
              <span>BOOK A CONSULTATION</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-300 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#111115] border-b border-stone-800 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.path}
                onClick={(e) => {
                  e.preventDefault();
                  onSelectTab(item.id);
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`text-left px-3 py-2 text-sm font-sans rounded transition-colors ${
                  currentTab === item.id
                    ? 'bg-[#c01224]/15 text-[#c01224] font-semibold'
                    : 'text-stone-300 hover:bg-stone-800'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-stone-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#c01224] rounded"
            >
              <span>BOOK A CONSULTATION</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

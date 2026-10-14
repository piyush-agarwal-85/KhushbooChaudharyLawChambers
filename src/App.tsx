/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { PageTab, PracticeArea } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { DisclaimerModal } from './components/DisclaimerModal';
import { PracticeAreaModal } from './components/PracticeAreaModal';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { PracticeAreasPage } from './pages/PracticeAreasPage';
import { LegalResearchPage } from './pages/LegalResearchPage';
import { InsightsPage } from './pages/InsightsPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const PAGE_CONFIG: Record<
  PageTab,
  { title: string; path: string; description: string }
> = {
  home: {
    title: 'Advocate Khushboo Chaudhary | Official Website',
    path: '/',
    description:
      'Official website of Advocate Khushboo Chaudhary, Delhi High Court and Supreme Court advocate offering legal representation, research and advisory across diverse areas of law.',
  },
  about: {
    title: 'About Us | Khushboo Chaudhary Law Chambers',
    path: '/about',
    description:
      'Learn about Khushboo Chaudhary Law Chambers, Advocate Khushboo Chaudhary, our founding principles, and High Court / Supreme Court representation.',
  },
  'practice-areas': {
    title: 'Practice Areas | Khushboo Chaudhary Law Chambers',
    path: '/practice-areas',
    description:
      'Comprehensive legal solutions across Constitutional Law, Criminal Defense, Civil Litigation, Commercial Law, Human Rights, and Technology & AI Law.',
  },
  'legal-research': {
    title: 'Legal Research & Advisory | Khushboo Chaudhary Law Chambers',
    path: '/legal-research',
    description:
      'Rigorous legal research, case law analysis, statutory interpretation, and high-stakes drafting for advocates, corporate counsels, and litigants.',
  },
  insights: {
    title: 'Legal Insights & Publications | Khushboo Chaudhary Law Chambers',
    path: '/insights',
    description:
      'In-depth legal commentary, case analyses, landmark judgment breakdowns, and constitutional policy articles.',
  },
  contact: {
    title: 'Contact Us | Khushboo Chaudhary Law Chambers',
    path: '/contact',
    description:
      'Get in touch with Khushboo Chaudhary Law Chambers. Chamber No. 346A, Block 1, Lawyers’ Chambers, Delhi High Court, New Delhi.',
  },
  'privacy-policy': {
    title: 'Privacy Policy | Khushboo Chaudhary Law Chambers',
    path: '/privacy-policy',
    description:
      'Official privacy policy for Khushboo Chaudhary Law Chambers, outlining data protection, confidential legal communications, and client privacy.',
  },
  terms: {
    title: 'Terms of Use | Khushboo Chaudhary Law Chambers',
    path: '/terms',
    description:
      'Terms and conditions governing the use of the Khushboo Chaudhary Law Chambers website and services.',
  },
  disclaimer: {
    title: 'Legal Disclaimer | Khushboo Chaudhary Law Chambers',
    path: '/disclaimer',
    description:
      'Bar Council of India compliance statement and official legal disclaimer.',
  },
  '404': {
    title: '404 - Page Not Found | Khushboo Chaudhary Law Chambers',
    path: '/404',
    description:
      'The page you are looking for doesn’t exist or may have been moved. Return to Khushboo Chaudhary Law Chambers home or explore our practice areas.',
  },
};

/**
 * Resolves browser URL pathname to internal PageTab
 */
export function getTabFromPath(pathname: string): PageTab {
  const normalized = pathname.trim().replace(/\/+$/, '').toLowerCase();
  
  if (normalized === '' || normalized === '/home') return 'home';
  if (normalized === '/about') return 'about';
  if (normalized === '/practice-areas' || normalized === '/practices') return 'practice-areas';
  if (normalized === '/legal-research' || normalized === '/research') return 'legal-research';
  if (normalized === '/insights' || normalized === '/articles' || normalized === '/blog') return 'insights';
  if (normalized === '/contact' || normalized === '/contact-us') return 'contact';
  if (normalized === '/privacy-policy' || normalized === '/privacy') return 'privacy-policy';
  if (normalized === '/terms' || normalized === '/terms-of-use') return 'terms';
  if (normalized === '/disclaimer') return 'disclaimer';
  if (normalized === '/404') return '404';

  // Any unmatched path is routed to 404
  return '404';
}

export default function App() {
  const [currentTab, setCurrentTab] = useState<PageTab>(() => {
    return getTabFromPath(window.location.pathname);
  });
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationArea, setConsultationArea] = useState<string | undefined>(undefined);
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);
  const [selectedPracticeArea, setSelectedPracticeArea] = useState<PracticeArea | null>(null);

  // Sync document title and meta description with current tab
  const applyPageMeta = useCallback((tab: PageTab) => {
    const config = PAGE_CONFIG[tab] || PAGE_CONFIG['404'];
    document.title = config.title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', config.description);
    }
  }, []);

  // Navigate handler that updates URL history, title, and scrolls to top
  const handleSelectTab = useCallback(
    (tab: PageTab, replace = false) => {
      setCurrentTab(tab);
      applyPageMeta(tab);

      const targetPath = PAGE_CONFIG[tab]?.path ?? '/404';
      if (window.location.pathname !== targetPath) {
        if (replace) {
          window.history.replaceState({ tab }, '', targetPath);
        } else {
          window.history.pushState({ tab }, '', targetPath);
        }
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [applyPageMeta]
  );

  // Handle browser back and forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const tab = getTabFromPath(window.location.pathname);
      setCurrentTab(tab);
      applyPageMeta(tab);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [applyPageMeta]);

  // Initial title and meta application
  useEffect(() => {
    applyPageMeta(currentTab);
    // If the path was unmatched and routed to 404, reflect /404 in history if appropriate
    if (currentTab === '404' && window.location.pathname !== '/404') {
      // Keep user's URL or show 404
      applyPageMeta('404');
    }
  }, [applyPageMeta, currentTab]);

  // Check if user previously agreed to the Bar Council of India disclaimer
  useEffect(() => {
    const hasAgreed = localStorage.getItem('kc_legal_disclaimer_agreed');
    if (!hasAgreed) {
      const timer = setTimeout(() => {
        setIsDisclaimerOpen(true);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAgreeDisclaimer = () => {
    localStorage.setItem('kc_legal_disclaimer_agreed', 'true');
    setIsDisclaimerOpen(false);
  };

  const handleCloseDisclaimer = () => {
    setIsDisclaimerOpen(false);
  };

  const openConsultation = (areaName?: string) => {
    setConsultationArea(areaName);
    setIsConsultationOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0c0c0e] font-sans antialiased text-stone-900 selection:bg-[#c01224] selection:text-white">
      
      {/* Top Header */}
      <Header
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
        onOpenConsultation={() => openConsultation()}
      />

      {/* Main Page Body */}
      <main className="flex-1">
        {currentTab === 'home' && (
          <HomePage
            onSelectTab={handleSelectTab}
            onOpenConsultation={openConsultation}
            onSelectPracticeAreaModal={setSelectedPracticeArea}
          />
        )}

        {currentTab === 'about' && (
          <AboutPage
            onSelectTab={handleSelectTab}
            onOpenConsultation={() => openConsultation()}
          />
        )}

        {currentTab === 'practice-areas' && (
          <PracticeAreasPage
            onSelectTab={handleSelectTab}
            onOpenConsultation={openConsultation}
            onSelectPracticeAreaModal={setSelectedPracticeArea}
          />
        )}

        {currentTab === 'legal-research' && (
          <LegalResearchPage
            onSelectTab={handleSelectTab}
            onOpenConsultation={() => openConsultation()}
          />
        )}

        {currentTab === 'insights' && (
          <InsightsPage
            onSelectTab={handleSelectTab}
            onOpenConsultation={() => openConsultation()}
          />
        )}

        {currentTab === 'contact' && (
          <ContactPage onSelectTab={handleSelectTab} />
        )}

        {currentTab === 'privacy-policy' && (
          <PrivacyPolicyPage onSelectTab={handleSelectTab} />
        )}

        {currentTab === 'terms' && (
          <TermsPage onSelectTab={handleSelectTab} />
        )}

        {currentTab === 'disclaimer' && (
          <div className="bg-[#0c0c0e] py-20 text-white min-h-[60vh] flex items-center justify-center border-b border-stone-800">
            <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="w-6 h-[2px] bg-[#c01224]" />
                <span className="text-xs font-sans font-semibold tracking-widest uppercase text-stone-300">
                  BAR COUNCIL OF INDIA COMPLIANCE
                </span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                Legal Disclaimer & Terms
              </h1>
              <p className="text-sm text-stone-300 leading-relaxed max-w-2xl mx-auto">
                Under the rules of the Bar Council of India, Indian advocates are prohibited from soliciting work or advertising. This website is meant solely for informational purposes and does not constitute an advertisement, solicitation, or legal advice.
              </p>
              <div className="pt-4 flex items-center justify-center gap-4">
                <button
                  onClick={() => setIsDisclaimerOpen(true)}
                  className="px-6 py-3 bg-[#c01224] hover:bg-[#a50f1f] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors cursor-pointer"
                >
                  View Full Bar Council Disclaimer
                </button>
                <button
                  onClick={() => handleSelectTab('home')}
                  className="px-6 py-3 border border-stone-700 hover:border-white text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors cursor-pointer"
                >
                  Return to Home
                </button>
              </div>
            </div>
          </div>
        )}

        {currentTab === '404' && (
          <NotFoundPage
            onSelectTab={handleSelectTab}
            onOpenConsultation={() => openConsultation()}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onSelectTab={handleSelectTab}
        onOpenDisclaimer={() => setIsDisclaimerOpen(true)}
      />

      {/* Multi-Step Consultation Booking Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        preSelectedArea={consultationArea}
      />

      {/* Bar Council of India Compliance Modal */}
      <DisclaimerModal
        isOpen={isDisclaimerOpen}
        onAgree={handleAgreeDisclaimer}
        onClose={handleCloseDisclaimer}
      />

      {/* Practice Area Detail Modal */}
      <PracticeAreaModal
        area={selectedPracticeArea}
        onClose={() => setSelectedPracticeArea(null)}
        onConsult={(area) => openConsultation(area)}
      />

    </div>
  );
}

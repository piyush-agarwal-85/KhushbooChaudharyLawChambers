import React, { useState } from 'react';
import { PageTab } from '../types';
import { IMAGES } from '../assets/images';
import { RESEARCH_SERVICES, INSIGHTS_ARTICLES } from '../data/legalData';
import {
  ArrowRight,
  Gavel,
  FileCheck,
  Scale,
  BookOpen,
  Landmark,
  Laptop,
  CheckCircle2,
  FileText,
  TrendingUp,
  ShieldCheck,
  Users,
  Search,
} from 'lucide-react';

interface LegalResearchPageProps {
  onSelectTab: (tab: PageTab) => void;
  onOpenConsultation: () => void;
}

export const LegalResearchPage: React.FC<LegalResearchPageProps> = ({
  onSelectTab,
  onOpenConsultation,
}) => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Gavel':
        return <Gavel className="w-5 h-5 text-[#c01224]" />;
      case 'FileCheck':
        return <FileCheck className="w-5 h-5 text-[#c01224]" />;
      case 'Scale':
        return <Scale className="w-5 h-5 text-[#c01224]" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-[#c01224]" />;
      case 'Landmark':
        return <Landmark className="w-5 h-5 text-[#c01224]" />;
      case 'Laptop':
        return <Laptop className="w-5 h-5 text-[#c01224]" />;
      default:
        return <FileText className="w-5 h-5 text-[#c01224]" />;
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
            <span className="text-stone-200">Legal Research</span>
          </div>

          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#c01224]" />
              <span className="text-xs font-sans font-semibold tracking-widest uppercase text-stone-300">
                LEGAL RESEARCH
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight">
              Research for Real-World Legal Impact
            </h1>

            <p className="font-sans text-sm sm:text-base text-stone-300 leading-relaxed pt-2">
              In-depth legal research, thoughtful analysis and practical insights to support litigation, advisory and policy matters.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenConsultation()}
                className="group flex items-center gap-2 px-6 py-3.5 text-xs font-sans font-semibold tracking-wider uppercase text-white bg-[#c01224] hover:bg-[#a50f1f] rounded transition-all shadow-sm cursor-pointer"
              >
                <span>DISCUSS YOUR RESEARCH NEEDS</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('research-approach');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center gap-2 px-6 py-3.5 text-xs font-sans font-semibold tracking-wider uppercase text-white border border-stone-600 hover:border-white rounded transition-colors cursor-pointer"
              >
                <span>OUR APPROACH</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW: STRATEGIC RESEARCH */}
      <section className="py-20 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2">
                <span className="w-6 h-[2px] bg-[#c01224]" />
                <span className="text-xs font-sans font-semibold tracking-widest uppercase text-stone-500">
                  OVERVIEW
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-stone-900 leading-tight">
                Strategic Research for Informed Solutions
              </h2>

              <p className="text-sm font-sans text-stone-600 leading-relaxed">
                Our legal research practice supports individuals, businesses and institutions with well-structured, accurate and practical research across diverse areas of law. We combine doctrinal analysis, legislative review and contemporary developments to deliver clear, actionable insights.
              </p>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-[#faf9f6] rounded border border-stone-200">
                <FileText className="w-6 h-6 text-[#c01224] mx-auto mb-2" />
                <h5 className="font-sans text-xs font-bold text-stone-900 leading-snug">In-depth Research</h5>
              </div>

              <div className="p-4 bg-[#faf9f6] rounded border border-stone-200">
                <TrendingUp className="w-6 h-6 text-[#c01224] mx-auto mb-2" />
                <h5 className="font-sans text-xs font-bold text-stone-900 leading-snug">Practical Analysis</h5>
              </div>

              <div className="p-4 bg-[#faf9f6] rounded border border-stone-200">
                <ShieldCheck className="w-6 h-6 text-[#c01224] mx-auto mb-2" />
                <h5 className="font-sans text-xs font-bold text-stone-900 leading-snug">Reliable Insights</h5>
              </div>

              <div className="p-4 bg-[#faf9f6] rounded border border-stone-200">
                <Users className="w-6 h-6 text-[#c01224] mx-auto mb-2" />
                <h5 className="font-sans text-xs font-bold text-stone-900 leading-snug">Client Solutions</h5>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. AREAS OF LEGAL RESEARCH (6 Cards) */}
      <section className="py-20 bg-[#faf9f6] border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-14">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-6 h-[2px] bg-[#c01224]" />
              <span className="text-xs font-sans font-semibold tracking-widest uppercase text-stone-500">
                OUR RESEARCH SERVICES
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-stone-900">
              Areas of Legal Research
            </h2>
            <p className="text-sm font-sans text-stone-600 mt-2">
              Comprehensive research support across a wide spectrum of legal domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {RESEARCH_SERVICES.map((srv) => (
              <div
                key={srv.id}
                className="p-7 bg-white border border-stone-200 rounded-lg space-y-4 hover:border-[#c01224]/50 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-[#fdf2f2] flex items-center justify-center mb-3 group-hover:bg-[#c01224] transition-colors">
                    <div className="group-hover:brightness-0 group-hover:invert transition-all">
                      {getServiceIcon(srv.iconName)}
                    </div>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-[#c01224] transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-xs font-sans text-stone-600 leading-relaxed mt-2">
                    {srv.description}
                  </p>

                  {/* Sample topics */}
                  <div className="mt-4 pt-3 border-t border-stone-100 space-y-1">
                    {srv.examples.map((ex, i) => (
                      <div key={i} className="text-[11px] font-sans text-stone-500 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c01224]" />
                        <span>{ex}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100">
                  <button
                    onClick={() => onOpenConsultation()}
                    className="inline-flex items-center gap-1 text-xs font-sans font-semibold uppercase tracking-wider text-[#c01224] hover:text-[#990e1c] cursor-pointer"
                  >
                    <span>EXPLORE</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. A STRUCTURED AND RESEARCH-DRIVEN PROCESS */}
      <section id="research-approach" className="py-20 bg-[#0c0c0e] text-white border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-6 h-[2px] bg-[#c01224]" />
              <span className="text-xs font-sans font-semibold tracking-widest uppercase text-stone-400">
                OUR APPROACH
              </span>
              <span className="w-6 h-[2px] bg-[#c01224]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-white">
              A Structured and Research-Driven Process
            </h2>
            <p className="text-xs sm:text-sm font-sans text-stone-400 mt-2">
              We follow a rigorous and transparent approach to ensure accuracy, depth and practical relevance in every research assignment.
            </p>
          </div>

          {/* Timeline Process */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            
            <div className="p-6 bg-[#15151a] border border-stone-800 rounded-lg text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#c01224]/20 border border-[#c01224]/50 flex items-center justify-center mx-auto text-[#c01224]">
                <FileText className="w-5 h-5" />
              </div>
              <div className="font-serif text-xs text-[#c01224] font-bold">01</div>
              <h4 className="font-serif text-base font-bold text-white">Understand</h4>
              <p className="text-xs text-stone-400 leading-relaxed font-sans">
                We assess your research objectives and scope.
              </p>
            </div>

            <div className="p-6 bg-[#15151a] border border-stone-800 rounded-lg text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#c01224]/20 border border-[#c01224]/50 flex items-center justify-center mx-auto text-[#c01224]">
                <Search className="w-5 h-5" />
              </div>
              <div className="font-serif text-xs text-[#c01224] font-bold">02</div>
              <h4 className="font-serif text-base font-bold text-white">Research</h4>
              <p className="text-xs text-stone-400 leading-relaxed font-sans">
                We conduct in-depth research using reliable sources and legal databases.
              </p>
            </div>

            <div className="p-6 bg-[#15151a] border border-stone-800 rounded-lg text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#c01224]/20 border border-[#c01224]/50 flex items-center justify-center mx-auto text-[#c01224]">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div className="font-serif text-xs text-[#c01224] font-bold">03</div>
              <h4 className="font-serif text-base font-bold text-white">Analyse</h4>
              <p className="text-xs text-stone-400 leading-relaxed font-sans">
                We analyse findings and identify key legal issues and statutory interplay.
              </p>
            </div>

            <div className="p-6 bg-[#15151a] border border-stone-800 rounded-lg text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#c01224]/20 border border-[#c01224]/50 flex items-center justify-center mx-auto text-[#c01224]">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="font-serif text-xs text-[#c01224] font-bold">04</div>
              <h4 className="font-serif text-base font-bold text-white">Deliver</h4>
              <p className="text-xs text-stone-400 leading-relaxed font-sans">
                We provide clear, well-structured outputs tailored to your needs.
              </p>
            </div>

          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onOpenConsultation()}
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#c01224] hover:bg-[#a50f1f] rounded transition-all cursor-pointer"
            >
              <span>KNOW MORE ABOUT OUR PROCESS</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* 5. DELIVERABLES TAILORED TO YOUR REQUIREMENTS */}
      <section className="py-20 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 rounded-lg overflow-hidden shadow-md border border-stone-200">
              <img
                src={IMAGES.fountainPenLegalDesk}
                alt="Open Law Books on Desk"
                className="w-full h-80 object-cover"
              />
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="w-6 h-[2px] bg-[#c01224]" />
                <span className="text-xs font-sans font-semibold tracking-widest uppercase text-stone-500">
                  TYPES OF OUTPUT
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-stone-900 leading-tight">
                Deliverables Tailored to Your Requirements
              </h2>

              <p className="text-sm font-sans text-stone-600 leading-relaxed">
                Our research output is structured, precise and easy to use, designed to support decision-making and trial strategy.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'Detailed research notes and briefs',
                  'Case law compilations and analysis',
                  'Legal opinions and memoranda',
                  'Comparative law charts and summaries',
                  'Policy and regulatory research reports',
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-[#faf9f6] border border-stone-200 rounded flex items-center gap-3 text-xs font-medium text-stone-800"
                  >
                    <div className="p-1 rounded bg-red-50 text-[#c01224]">
                      <FileCheck className="w-4 h-4" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. BOTTOM BANNER */}
      <section className="py-16 bg-[#0c0c0e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 md:p-12 rounded-xl bg-[#15151a] border border-stone-800 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 max-w-xl">
              <div className="text-[11px] font-sans uppercase tracking-widest text-[#c01224] font-semibold">
                NEED LEGAL RESEARCH SUPPORT?
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                Let’s Discuss Your Research Requirements
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 font-sans">
                Get in touch with our team to discuss your legal research needs and receive clear, reliable and practical support.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenConsultation()}
                className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#c01224] hover:bg-[#a50f1f] rounded transition-all cursor-pointer whitespace-nowrap"
              >
                BOOK A CONSULTATION →
              </button>
              <button
                onClick={() => {
                  onSelectTab('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-stone-200 border border-stone-700 hover:border-white rounded transition-all cursor-pointer whitespace-nowrap"
              >
                CONTACT US →
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

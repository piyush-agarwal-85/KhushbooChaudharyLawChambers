import React from 'react';
import { PageTab, PracticeArea } from '../types';
import { IMAGES } from '../assets/images';
import { PRACTICE_AREAS } from '../data/legalData';
import {
  ArrowRight,
  Gavel,
  Scale,
  Building2,
  FileText,
  BookOpen,
  ShieldCheck,
  Cpu,
  Landmark,
  Briefcase,
  Globe,
  CheckCircle2,
  Phone,
  MessageSquare,
} from 'lucide-react';

interface PracticeAreasPageProps {
  onSelectTab: (tab: PageTab) => void;
  onOpenConsultation: (preselectedArea?: string) => void;
  onSelectPracticeAreaModal: (area: PracticeArea) => void;
}

export const PracticeAreasPage: React.FC<PracticeAreasPageProps> = ({
  onSelectTab,
  onOpenConsultation,
  onSelectPracticeAreaModal,
}) => {
  const getPracticeIcon = (iconName: string) => {
    switch (iconName) {
      case 'Gavel':
        return <Gavel className="w-5 h-5 text-[#c01224]" />;
      case 'Scale':
        return <Scale className="w-5 h-5 text-[#c01224]" />;
      case 'Building2':
        return <Building2 className="w-5 h-5 text-[#c01224]" />;
      case 'FileText':
        return <FileText className="w-5 h-5 text-[#c01224]" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-[#c01224]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#c01224]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#c01224]" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-[#c01224]" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-[#c01224]" />;
      default:
        return <Landmark className="w-5 h-5 text-[#c01224]" />;
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
            <span className="text-stone-200">Practice Areas</span>
          </div>

          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#c01224]" />
              <span className="text-xs font-sans font-semibold tracking-widest uppercase text-stone-300">
                PRACTICE AREAS
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight">
              Comprehensive Legal Solutions
            </h1>

            <p className="font-sans text-sm sm:text-base text-stone-300 leading-relaxed pt-2">
              Strategic legal advice, rigorous research and effective representation across a wide range of practice areas.
            </p>
          </div>
        </div>
      </section>

      {/* 2. TOP TRUST PILLARS STRIP */}
      <section className="py-10 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-4 border-l-2 border-[#c01224] bg-[#faf9f6] rounded-r">
              <div className="flex items-center gap-2">
                <Landmark className="w-4 h-4 text-[#c01224]" />
                <h4 className="font-sans text-xs font-bold text-stone-900">Wide Practice Coverage</h4>
              </div>
              <p className="text-[11px] text-stone-500 mt-1">
                Comprehensive legal solutions across diverse domains.
              </p>
            </div>

            <div className="p-4 border-l-2 border-[#c01224] bg-[#faf9f6] rounded-r">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#c01224]" />
                <h4 className="font-sans text-xs font-bold text-stone-900">Research Driven</h4>
              </div>
              <p className="text-[11px] text-stone-500 mt-1">
                In-depth legal research and well-reasoned solutions.
              </p>
            </div>

            <div className="p-4 border-l-2 border-[#c01224] bg-[#faf9f6] rounded-r">
              <div className="flex items-center gap-2">
                <Scale className="w-4 h-4 text-[#c01224]" />
                <h4 className="font-sans text-xs font-bold text-stone-900">Client Centric</h4>
              </div>
              <p className="text-[11px] text-stone-500 mt-1">
                Personalised guidance with clear and consistent communication.
              </p>
            </div>

            <div className="p-4 border-l-2 border-[#c01224] bg-[#faf9f6] rounded-r">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#c01224]" />
                <h4 className="font-sans text-xs font-bold text-stone-900">Ethical Practice</h4>
              </div>
              <p className="text-[11px] text-stone-500 mt-1">
                Integrity, professionalism and confidentiality.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. AREAS OF EXPERTISE (8 Detailed Cards) */}
      <section className="py-20 bg-[#faf9f6] border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-14 max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-6 h-[2px] bg-[#c01224]" />
              <span className="text-xs font-sans font-semibold tracking-widest uppercase text-stone-500">
                OUR PRACTICE AREAS
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-stone-900">
              Areas of Expertise
            </h2>
            <p className="text-sm font-sans text-stone-600 mt-2 leading-relaxed">
              We provide strategic legal advice and representation across a wide spectrum of practice areas, with a focus on nuanced understanding, thorough research and practical solutions.
            </p>
          </div>

          {/* 8-Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PRACTICE_AREAS.map((area) => (
              <div
                key={area.id}
                className="p-8 bg-white border border-stone-200 rounded-lg space-y-4 hover:border-[#c01224]/60 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div className="w-12 h-12 rounded-full border border-stone-200 bg-[#fdf2f2] flex items-center justify-center shrink-0 group-hover:bg-[#c01224] transition-colors">
                      <div className="group-hover:brightness-0 group-hover:invert transition-all">
                        {getPracticeIcon(area.iconName)}
                      </div>
                    </div>
                    <span className="text-[11px] font-sans font-medium text-stone-400">
                      Chamber Practice
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-stone-900 mt-4 group-hover:text-[#c01224] transition-colors">
                    {area.title}
                  </h3>

                  <p className="text-xs font-sans text-stone-600 leading-relaxed mt-2">
                    {area.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <button
                    onClick={() => onSelectPracticeAreaModal(area)}
                    className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold uppercase tracking-wider text-[#c01224] hover:text-[#990e1c] group cursor-pointer"
                  >
                    <span>KNOW MORE</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>

                  <button
                    onClick={() => onOpenConsultation(area.title)}
                    className="text-[11px] font-sans text-stone-500 hover:text-stone-900 underline cursor-pointer"
                  >
                    Consult on this
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. STRATEGIC. PRACTICAL. CLIENT FOCUSED BANNER */}
      <section className="relative py-20 bg-[#0c0c0e] text-white overflow-hidden border-b border-stone-800">
        <div 
          className="absolute inset-0 opacity-25 bg-cover bg-center mix-blend-screen pointer-events-none"
          style={{ backgroundImage: `url(${IMAGES.fountainPenLegalDesk})` }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl space-y-5">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#c01224]" />
              <span className="text-xs font-sans font-semibold tracking-widest uppercase text-stone-400">
                OUR APPROACH
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-white leading-tight">
              Strategic. Practical. Client Focused.
            </h2>

            <p className="font-sans text-sm text-stone-300 leading-relaxed">
              We combine legal expertise with a practical, solution-oriented approach to help individuals, businesses and institutions navigate complex legal challenges.
            </p>

            <div>
              <button
                onClick={() => onOpenConsultation()}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-sans font-semibold tracking-wider uppercase text-white bg-[#c01224] hover:bg-[#a50f1f] rounded transition-all cursor-pointer shadow-sm"
              >
                <span>DISCUSS YOUR MATTER</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HOW WE WORK (4 Steps) */}
      <section className="py-20 bg-[#faf9f6] border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-14">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-6 h-[2px] bg-[#c01224]" />
              <span className="text-xs font-sans font-semibold tracking-widest uppercase text-stone-500">
                OUR PROCESS
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-stone-900">
              How We Work
            </h2>
            <p className="text-sm font-sans text-stone-600 mt-2">
              A structured and transparent approach to ensure clarity, efficiency and effective outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 bg-white border border-stone-200 rounded-lg space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-serif text-3xl font-light text-stone-400">01</span>
                <MessageSquare className="w-5 h-5 text-[#c01224]" />
              </div>
              <h4 className="font-serif text-base font-bold text-stone-900">
                Initial Consultation
              </h4>
              <p className="text-xs font-sans text-stone-600 leading-relaxed">
                Understand your matter and objectives in a confidential setting.
              </p>
            </div>

            <div className="p-6 bg-white border border-stone-200 rounded-lg space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-serif text-3xl font-light text-stone-400">02</span>
                <FileText className="w-5 h-5 text-[#c01224]" />
              </div>
              <h4 className="font-serif text-base font-bold text-stone-900">
                Research & Analysis
              </h4>
              <p className="text-xs font-sans text-stone-600 leading-relaxed">
                In-depth legal research and strategy development tailored to case merits.
              </p>
            </div>

            <div className="p-6 bg-white border border-stone-200 rounded-lg space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-serif text-3xl font-light text-stone-400">03</span>
                <Scale className="w-5 h-5 text-[#c01224]" />
              </div>
              <h4 className="font-serif text-base font-bold text-stone-900">
                Advice & Representation
              </h4>
              <p className="text-xs font-sans text-stone-600 leading-relaxed">
                Practical advice and effective representation before courts or tribunals.
              </p>
            </div>

            <div className="p-6 bg-white border border-stone-200 rounded-lg space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-serif text-3xl font-light text-stone-400">04</span>
                <ShieldCheck className="w-5 h-5 text-[#c01224]" />
              </div>
              <h4 className="font-serif text-base font-bold text-stone-900">
                Ongoing Support
              </h4>
              <p className="text-xs font-sans text-stone-600 leading-relaxed">
                Continuous guidance, compliance updates and appellate preparedness.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 6. BOOK A CONSULTATION BOTTOM BANNER */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#111115] text-white p-8 md:p-12 rounded-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border border-stone-800">
            <div className="space-y-2 max-w-xl">
              <div className="text-[11px] font-sans uppercase tracking-widest text-[#c01224] font-semibold">
                NEED LEGAL GUIDANCE?
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                Book a Consultation
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 font-sans">
                Discuss your legal matter with our team. We are here to provide clear guidance and effective representation.
              </p>
            </div>

            <button
              onClick={() => onOpenConsultation()}
              className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#c01224] hover:bg-[#a50f1f] rounded transition-all cursor-pointer whitespace-nowrap shrink-0"
            >
              BOOK A CONSULTATION →
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

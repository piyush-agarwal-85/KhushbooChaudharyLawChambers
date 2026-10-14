import React from 'react';
import { PageTab } from '../types';
import { IMAGES } from '../assets/images';
import { CHAMBER_INFO } from '../data/legalData';
import {
  ArrowRight,
  ShieldCheck,
  FileText,
  Scale,
  Landmark,
  Briefcase,
  GraduationCap,
  Sparkles,
  Users,
} from 'lucide-react';

interface AboutPageProps {
  onSelectTab: (tab: PageTab) => void;
  onOpenConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onSelectTab,
  onOpenConsultation,
}) => {
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
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-sans text-stone-400 mb-6">
            <button
              onClick={() => onSelectTab('home')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Home
            </button>
            <span>›</span>
            <span className="text-stone-200">About</span>
          </div>

          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#c01224]" />
              <span className="text-xs font-sans font-semibold tracking-widest uppercase text-stone-300">
                ABOUT US
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight">
              Our Story, Values and Commitment
            </h1>

            <p className="font-sans text-sm sm:text-base text-stone-300 leading-relaxed pt-2">
              A contemporary legal practice committed to strategic legal advice, rigorous research and effective representation across diverse areas of law.
            </p>
          </div>
        </div>
      </section>

      {/* 2. OUR FIRM SECTION */}
      <section className="py-20 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Portrait Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-lg overflow-hidden shadow-lg border border-stone-200">
                <img
                  src={IMAGES.advocateKhushbooPortrait}
                  alt="Advocate Khushboo Chaudhary, Founder & Advocate"
                  className="w-full h-[460px] object-cover object-top"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#7a0c16]/95 backdrop-blur-sm p-4 rounded text-white">
                  <h4 className="font-serif text-base font-semibold leading-tight">
                    Advocate Khushboo Chaudhary
                  </h4>
                  <p className="text-[11px] font-sans text-stone-200 mt-0.5">
                    Founder & Advocate, Khushboo Chaudhary Law Chambers
                  </p>
                </div>
              </div>
            </div>

            {/* Firm Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="w-6 h-[2px] bg-[#c01224]" />
                <span className="text-xs font-sans font-semibold tracking-widest uppercase text-stone-500">
                  OUR FIRM
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-stone-900">
                Khushboo Chaudhary Law Chambers
              </h2>

              <p className="text-sm font-sans text-stone-600 leading-relaxed">
                Khushboo Chaudhary Law Chambers is a contemporary legal practice founded by Advocate Khushboo Chaudhary, dedicated to providing strategic legal advice, rigorous research and effective representation across diverse areas of law.
              </p>

              <p className="text-sm font-sans text-stone-600 leading-relaxed">
                The firm combines traditional legal values with a modern, research-oriented approach to address complex legal challenges faced by individuals, businesses and institutions. At Khushboo Chaudhary Law Chambers, we believe in clarity, integrity and a client-centric approach in every matter we undertake.
              </p>

              <div>
                <button
                  onClick={() => {
                    onSelectTab('practice-areas');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-sans font-semibold tracking-wider uppercase text-white bg-[#c01224] hover:bg-[#a50f1f] rounded transition-all cursor-pointer"
                >
                  <span>OUR PRACTICE AREAS</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* 4 Pillars Horizontal Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-stone-200">
                <div className="p-3.5 bg-[#faf9f6] rounded border border-stone-200/80">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#c01224]" />
                    <h5 className="font-sans text-xs font-bold text-stone-900">Research Driven</h5>
                  </div>
                  <p className="text-[11px] text-stone-500 mt-1">
                    In-depth legal research and well-reasoned solutions.
                  </p>
                </div>

                <div className="p-3.5 bg-[#faf9f6] rounded border border-stone-200/80">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#c01224]" />
                    <h5 className="font-sans text-xs font-bold text-stone-900">Client Centric</h5>
                  </div>
                  <p className="text-[11px] text-stone-500 mt-1">
                    Personalised guidance with clear and consistent communication.
                  </p>
                </div>

                <div className="p-3.5 bg-[#faf9f6] rounded border border-stone-200/80">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#c01224]" />
                    <h5 className="font-sans text-xs font-bold text-stone-900">Ethical Practice</h5>
                  </div>
                  <p className="text-[11px] text-stone-500 mt-1">
                    Integrity, professionalism and complete confidentiality.
                  </p>
                </div>

                <div className="p-3.5 bg-[#faf9f6] rounded border border-stone-200/80">
                  <div className="flex items-center gap-2">
                    <Scale className="w-4 h-4 text-[#c01224]" />
                    <h5 className="font-sans text-xs font-bold text-stone-900">Commitment to Justice</h5>
                  </div>
                  <p className="text-[11px] text-stone-500 mt-1">
                    Dedicated to protecting rights and advancing justice.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. OUR FOUNDER SECTION */}
      <section className="py-20 bg-[#0c0c0e] text-white border-b border-stone-800 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-screen pointer-events-none"
          style={{ backgroundImage: `url(${IMAGES.fountainPenLegalDesk})` }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Bio Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="w-6 h-[2px] bg-[#c01224]" />
                <span className="text-xs font-sans font-semibold tracking-widest uppercase text-stone-400">
                  OUR FOUNDER
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-white">
                Advocate Khushboo Chaudhary
              </h2>
              <div className="text-xs font-sans text-[#c5a059] tracking-wider uppercase font-semibold">
                Founder & Advocate, Khushboo Chaudhary Law Chambers
              </div>

              <p className="text-sm font-sans text-stone-300 leading-relaxed">
                A passionate legal professional with experience in litigation, legal research and advisory, Advocate Khushboo Chaudhary founded Khushboo Chaudhary Law Chambers with a vision to provide thoughtful, research-based and result-oriented legal solutions.
              </p>

              <p className="text-sm font-sans text-stone-300 leading-relaxed">
                Her practice is guided by a strong commitment to integrity, professionalism and the effective representation of clients across diverse areas of law before the Delhi High Court, Supreme Court of India, and statutory commissions.
              </p>

              <div>
                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#c01224] hover:bg-[#a50f1f] rounded transition-all cursor-pointer"
                >
                  <span>SCHEDULE A CONSULTATION</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* 3 Founder Pillars */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-5 bg-[#15151a] border border-stone-800 rounded-lg flex items-start gap-4">
                <div className="p-2.5 rounded bg-[#c01224]/15 text-[#c01224] border border-[#c01224]/30 shrink-0">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Legal Expertise</h4>
                  <p className="text-xs text-stone-400 mt-1 leading-normal">
                    Litigation, advisory and legal research across trial and appellate courts.
                  </p>
                </div>
              </div>

              <div className="p-5 bg-[#15151a] border border-stone-800 rounded-lg flex items-start gap-4">
                <div className="p-2.5 rounded bg-[#c01224]/15 text-[#c01224] border border-[#c01224]/30 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Professional Integrity</h4>
                  <p className="text-xs text-stone-400 mt-1 leading-normal">
                    Ethical, transparent and client-focused approach with strict confidentiality.
                  </p>
                </div>
              </div>

              <div className="p-5 bg-[#15151a] border border-stone-800 rounded-lg flex items-start gap-4">
                <div className="p-2.5 rounded bg-[#c01224]/15 text-[#c01224] border border-[#c01224]/30 shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Continuous Learning</h4>
                  <p className="text-xs text-stone-400 mt-1 leading-normal">
                    Committed to staying updated with legal developments, statutes and new precedents.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. PRINCIPLES THAT GUIDE OUR WORK */}
      <section className="py-20 bg-[#faf9f6] border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-14">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-6 h-[2px] bg-[#c01224]" />
              <span className="text-xs font-sans font-semibold tracking-widest uppercase text-stone-500">
                OUR APPROACH
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-stone-900">
              Principles That Guide Our Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            
            {/* Step 01 */}
            <div className="p-8 bg-white border border-stone-200 rounded-lg relative space-y-4 hover:border-[#c01224]/50 transition-colors">
              <div className="flex items-center justify-between">
                <span className="font-serif text-3xl font-light text-stone-400">01</span>
                <div className="w-10 h-10 rounded-full bg-[#fdf2f2] text-[#c01224] flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900">
                Understand
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed font-sans">
                We take time to understand the facts, objectives and unique requirements of each client before recommending any litigation or advisory path.
              </p>
            </div>

            {/* Step 02 */}
            <div className="p-8 bg-white border border-stone-200 rounded-lg relative space-y-4 hover:border-[#c01224]/50 transition-colors">
              <div className="flex items-center justify-between">
                <span className="font-serif text-3xl font-light text-stone-400">02</span>
                <div className="w-10 h-10 rounded-full bg-[#fdf2f2] text-[#c01224] flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900">
                Analyse
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed font-sans">
                We conduct in-depth legal research and comparative analysis to develop practical, research-backed and strategic solutions for complex legal challenges.
              </p>
            </div>

            {/* Step 03 */}
            <div className="p-8 bg-white border border-stone-200 rounded-lg relative space-y-4 hover:border-[#c01224]/50 transition-colors">
              <div className="flex items-center justify-between">
                <span className="font-serif text-3xl font-light text-stone-400">03</span>
                <div className="w-10 h-10 rounded-full bg-[#fdf2f2] text-[#c01224] flex items-center justify-center">
                  <Scale className="w-5 h-5" />
                </div>
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900">
                Advise & Represent
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed font-sans">
                We provide clear legal advice and effective representation with a focus on long-term outcomes, commercial feasibility, and ethical advocacy.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 5. VISION SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 rounded-lg overflow-hidden shadow-md border border-stone-200">
              <img
                src={IMAGES.classicalCourtColumns}
                alt="Classical Court Columns"
                className="w-full h-80 object-cover"
              />
            </div>

            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2">
                <span className="w-6 h-[2px] bg-[#c01224]" />
                <span className="text-xs font-sans font-semibold tracking-widest uppercase text-stone-500">
                  OUR VISION
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-stone-900 leading-tight">
                Towards a More Just and Informed Society
              </h2>

              <p className="text-sm font-sans text-stone-600 leading-relaxed">
                We strive to contribute to a more just and informed society by delivering high-quality legal services, fostering legal awareness and promoting responsible and ethical legal practice.
              </p>

              <div>
                <button
                  onClick={() => {
                    onSelectTab('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-sans font-semibold tracking-wider uppercase text-white bg-[#c01224] hover:bg-[#a50f1f] rounded transition-all cursor-pointer"
                >
                  <span>GET IN TOUCH</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

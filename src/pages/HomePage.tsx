import React, { useState } from 'react';
import { PageTab, PracticeArea } from '../types';
import { IMAGES } from '../assets/images';
import { CHAMBER_INFO, PRACTICE_AREAS, INSIGHTS_ARTICLES, TESTIMONIALS } from '../data/legalData';
import { DelhiMap } from '../components/DelhiMap';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
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
  Calendar,
  Clock,
  MapPin,
  Quote,
} from 'lucide-react';

interface HomePageProps {
  onSelectTab: (tab: PageTab) => void;
  onOpenConsultation: (preselectedArea?: string) => void;
  onSelectPracticeAreaModal: (area: PracticeArea) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onSelectTab,
  onOpenConsultation,
  onSelectPracticeAreaModal,
}) => {
  // Hero slide state (01, 02, 03)
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const [testimonialIndex, setTestimonialIndex] = useState<number>(0);

  // Quick appointment form state
  const [isAppointmentSubmitting, setIsAppointmentSubmitting] = useState(false);
  const [appointmentState, setAppointmentState] = useState({
    name: '',
    email: '',
    phone: '',
    practiceArea: 'Criminal Law',
    date: '',
    message: '',
    submitted: false,
  });

  const heroSlides = [
    {
      kicker: 'ADVOCACY · RESEARCH · STRATEGY',
      title: 'Precision in Law. Strength in Representation.',
      desc: 'A modern legal practice committed to strategic legal advice, rigorous research and effective representation across diverse areas of law.',
    },
    {
      kicker: 'DELHI HIGH COURT · LITIGATION',
      title: 'Meticulous Case Preparation. Proven Advocacy.',
      desc: 'Representing clients across trial courts, High Court appellate benches, and regulatory tribunals with thorough legal research.',
    },
    {
      kicker: 'ADVISORY · CORPORATE · CYBER',
      title: 'Navigating New Regulatory Paradigms with Authority.',
      desc: 'Comprehensive guidance on the Digital Personal Data Protection Act, AI ethics, corporate compliance, and commercial dispute resolution.',
    },
  ];

  const handleQuickAppointment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsAppointmentSubmitting(true);
    try {
      const payload = {
        access_key: "8e112e23-553d-48b1-8158-8ce44554664d",
        subject: "Khushboo Chaudhary Law Chambers - Quick Appointment Request (Homepage)",
        from_name: "Khushboo Chaudhary Law Chambers",
        name: appointmentState.name,
        email: appointmentState.email,
        phone: appointmentState.phone,
        practiceArea: appointmentState.practiceArea,
        preferredDate: appointmentState.date,
        message: appointmentState.message,
      };

      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      setAppointmentState((prev) => ({ ...prev, submitted: true }));
    } catch (err) {
      console.error("Quick appointment submission error:", err);
      setAppointmentState((prev) => ({ ...prev, submitted: true }));
    } finally {
      setIsAppointmentSubmitting(false);
    }
  };

  const getPracticeIcon = (iconName: string) => {
    switch (iconName) {
      case 'Gavel':
        return <Gavel className="w-6 h-6 text-[#c01224]" />;
      case 'Scale':
        return <Scale className="w-6 h-6 text-[#c01224]" />;
      case 'Building2':
        return <Building2 className="w-6 h-6 text-[#c01224]" />;
      case 'FileText':
        return <FileText className="w-6 h-6 text-[#c01224]" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-[#c01224]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#c01224]" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-[#c01224]" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-[#c01224]" />;
      case 'Globe':
        return <Globe className="w-6 h-6 text-[#c01224]" />;
      default:
        return <Landmark className="w-6 h-6 text-[#c01224]" />;
    }
  };

  return (
    <div className="bg-[#faf9f6] text-[#1c1917]">
      
      {/* 1. HERO SECTION (Dark Chiaroscuro Atmospheric) */}
      <section className="relative bg-[#0c0c0e] text-white pt-12 pb-20 md:py-24 border-b border-stone-800 overflow-hidden">
        {/* Atmospheric Law Chamber Photo on the Right */}
        <div 
          className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 bg-cover bg-right opacity-35 lg:opacity-75 mix-blend-screen pointer-events-none select-none"
          style={{ backgroundImage: `url(${IMAGES.heroLawScalesBooks})` }}
        />
        {/* Subtle dark vignettes to blend seamlessly */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0e] via-[#0c0c0e]/95 lg:via-[#0c0c0e]/70 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Kicker */}
              <div className="flex items-center gap-3">
                <span className="w-8 h-[2px] bg-[#c01224]" />
                <span className="text-xs font-sans font-semibold tracking-widest uppercase text-stone-300">
                  {heroSlides[currentSlide - 1].kicker}
                </span>
              </div>

              {/* Chamber Name */}
              <div className="tracking-tight">
                <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-[0.06em] sm:tracking-[0.10em] uppercase leading-tight">
                  <span className="text-[#c01224] block sm:inline">KHUSHBOO CHAUDHARY</span>{' '}
                  <span className="text-white">LAW CHAMBERS</span>
                </h1>
              </div>

              {/* Tagline / Slide Title */}
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-stone-200 leading-snug max-w-2xl">
                {heroSlides[currentSlide - 1].title}
              </h2>

              {/* Subtitle Prose */}
              <p className="font-sans text-sm md:text-base text-stone-400 max-w-xl leading-relaxed">
                {heroSlides[currentSlide - 1].desc}
              </p>

              {/* Primary CTAs */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenConsultation()}
                  className="group flex items-center gap-2 px-6 py-3.5 text-xs font-sans font-semibold tracking-wider uppercase text-white bg-[#c01224] hover:bg-[#a50f1f] rounded transition-all shadow-sm cursor-pointer"
                >
                  <span>BOOK A CONSULTATION</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>

                <button
                  onClick={() => {
                    onSelectTab('practice-areas');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="flex items-center gap-2 px-6 py-3.5 text-xs font-sans font-semibold tracking-wider uppercase text-white border border-stone-600 hover:border-white rounded transition-colors cursor-pointer"
                >
                  <span>OUR PRACTICE AREAS</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Right Slide Indicator Column */}
            <div className="hidden lg:flex lg:col-span-4 justify-end">
              <div className="flex flex-col items-center space-y-4">
                {[1, 2, 3].map((num) => (
                  <button
                    key={num}
                    onClick={() => setCurrentSlide(num)}
                    className={`font-serif text-sm transition-all duration-300 cursor-pointer ${
                      currentSlide === num
                        ? 'text-[#c01224] font-bold scale-125'
                        : 'text-stone-500 hover:text-stone-300'
                    }`}
                  >
                    0{num}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. COMPREHENSIVE LEGAL SOLUTIONS (Grid of 8 Practice Areas) */}
      <section className="py-20 bg-[#faf9f6] border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="w-6 h-[2px] bg-[#c01224]" />
                <span className="text-xs font-sans font-semibold tracking-widest uppercase text-stone-500">
                  PRACTICE AREAS
                </span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-stone-900">
                Comprehensive Legal Solutions
              </h2>
            </div>

            <button
              onClick={() => {
                onSelectTab('practice-areas');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold uppercase tracking-wider text-[#c01224] hover:text-[#990e1c] group cursor-pointer"
            >
              <span>VIEW ALL</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* 8-Card Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {PRACTICE_AREAS.map((area) => (
              <div
                key={area.id}
                onClick={() => onSelectPracticeAreaModal(area)}
                className="group p-6 bg-white border border-stone-200 rounded-lg hover:border-[#c01224]/50 hover:shadow-md transition-all cursor-pointer flex flex-col items-center text-center justify-between min-h-[170px]"
              >
                <div className="p-3 rounded-full bg-[#fdf2f2] group-hover:bg-[#c01224] group-hover:text-white transition-colors duration-200">
                  <div className="group-hover:brightness-0 group-hover:invert transition-all">
                    {getPracticeIcon(area.iconName)}
                  </div>
                </div>

                <div className="mt-3">
                  <h4 className="font-sans text-xs md:text-sm font-semibold text-stone-900 group-hover:text-[#c01224] transition-colors leading-snug">
                    {area.title}
                  </h4>
                  <div className="w-6 h-[1.5px] bg-stone-300 group-hover:bg-[#c01224] mx-auto mt-2 transition-colors" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. ABOUT KC LEGAL CHAMBERS (Founder & Values Split) */}
      <section className="py-20 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Portrait Card with Badge */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-lg overflow-hidden shadow-lg border border-stone-200 group">
                <img
                  src={IMAGES.advocateKhushbooPortrait}
                  alt="Advocate Khushboo Chaudhary, Founder & Advocate"
                  className="w-full h-[460px] object-cover object-top transition-transform duration-500 group-hover:scale-102"
                />
                
                {/* Red Overlaid Card at bottom */}
                <div 
                  onClick={() => {
                    onSelectTab('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="absolute bottom-4 left-4 right-4 bg-[#7a0c16]/95 backdrop-blur-sm p-4 rounded text-white flex items-center justify-between cursor-pointer hover:bg-[#990e1c] transition-colors"
                >
                  <div>
                    <h4 className="font-serif text-base font-semibold leading-tight">
                      Advocate Khushboo Chaudhary
                    </h4>
                    <p className="text-[11px] font-sans text-stone-200 mt-0.5">
                      Founder & Advocate, Khushboo Chaudhary Law Chambers
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-stone-200 shrink-0" />
                </div>
              </div>
            </div>

            {/* Right Column: Firm Overview & 4 Pillars */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="w-6 h-[2px] bg-[#c01224]" />
                <span className="text-xs font-sans font-semibold tracking-widest uppercase text-stone-500">
                  ABOUT
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
                    onSelectTab('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-sans font-semibold tracking-wider uppercase text-white bg-[#c01224] hover:bg-[#a50f1f] rounded transition-all cursor-pointer"
                >
                  <span>KNOW MORE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* 4 Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-stone-200">
                <div className="p-3 bg-[#faf9f6] rounded border border-stone-200/80">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#c01224]" />
                    <h5 className="font-sans text-xs font-bold text-stone-900">Research Driven</h5>
                  </div>
                  <p className="text-[11px] text-stone-500 mt-1">
                    In-depth legal research and well-reasoned solutions.
                  </p>
                </div>

                <div className="p-3 bg-[#faf9f6] rounded border border-stone-200/80">
                  <div className="flex items-center gap-2">
                    <Scale className="w-4 h-4 text-[#c01224]" />
                    <h5 className="font-sans text-xs font-bold text-stone-900">Client Centric</h5>
                  </div>
                  <p className="text-[11px] text-stone-500 mt-1">
                    Personalised guidance with clear and consistent communication.
                  </p>
                </div>

                <div className="p-3 bg-[#faf9f6] rounded border border-stone-200/80">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#c01224]" />
                    <h5 className="font-sans text-xs font-bold text-stone-900">Ethical Practice</h5>
                  </div>
                  <p className="text-[11px] text-stone-500 mt-1">
                    Integrity, professionalism and complete confidentiality.
                  </p>
                </div>

                <div className="p-3 bg-[#faf9f6] rounded border border-stone-200/80">
                  <div className="flex items-center gap-2">
                    <Landmark className="w-4 h-4 text-[#c01224]" />
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

      {/* 4. STATS STRIP BANNER (Dark Maroon/Mahogany Accent) */}
      <section className="bg-[#111115] text-white py-8 border-y border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            
            <div className="flex flex-col items-center">
              <span className="font-serif text-3xl md:text-4xl font-bold text-[#c01224]">8+</span>
              <span className="text-xs font-sans text-stone-400 mt-1 uppercase tracking-wider">Practice Areas</span>
            </div>

            <div className="flex flex-col items-center">
              <span className="font-serif text-2xl md:text-3xl font-semibold text-white">Research</span>
              <span className="text-xs font-sans text-stone-400 mt-1 uppercase tracking-wider">Driven Approach</span>
            </div>

            <div className="flex flex-col items-center">
              <span className="font-serif text-2xl md:text-3xl font-semibold text-white">Client</span>
              <span className="text-xs font-sans text-stone-400 mt-1 uppercase tracking-wider">Centric Solutions</span>
            </div>

            <div className="flex flex-col items-center">
              <span className="font-serif text-2xl md:text-3xl font-semibold text-white">Commitment</span>
              <span className="text-xs font-sans text-stone-400 mt-1 uppercase tracking-wider">To Justice</span>
            </div>

          </div>
        </div>
      </section>

      {/* 5. LATEST INSIGHTS & ARTICLES */}
      <section className="py-20 bg-[#faf9f6] border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="w-6 h-[2px] bg-[#c01224]" />
                <span className="text-xs font-sans font-semibold tracking-widest uppercase text-stone-500">
                  LATEST INSIGHTS
                </span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-stone-900">
                Articles, Research & Updates
              </h2>
              <p className="text-xs text-stone-500 mt-1">
                Thoughts on contemporary legal issues, research publications and policy developments.
              </p>
            </div>

            <button
              onClick={() => {
                onSelectTab('insights');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold uppercase tracking-wider text-[#c01224] hover:text-[#990e1c] group cursor-pointer"
            >
              <span>VIEW ALL INSIGHTS</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* 3 Featured Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {INSIGHTS_ARTICLES.slice(0, 3).map((article) => (
              <div
                key={article.id}
                onClick={() => {
                  onSelectTab('insights');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group bg-white border border-stone-200 rounded-lg overflow-hidden shadow-2xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="h-44 overflow-hidden relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 bg-[#0c0c0e]/80 backdrop-blur-xs text-white text-[10px] font-sans px-2 py-0.5 rounded">
                      {article.type}
                    </div>
                  </div>

                  <div className="p-5 space-y-2.5">
                    <div className="text-[11px] font-sans text-stone-400">
                      {article.date} · {article.readTime}
                    </div>
                    <h3 className="font-serif text-base font-semibold text-stone-900 group-hover:text-[#c01224] transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-xs font-sans text-stone-500 line-clamp-2 leading-relaxed">
                      {article.summary}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-2 flex items-center text-xs font-semibold text-[#c01224] gap-1 group-hover:gap-2 transition-all">
                  <span>READ ARTICLE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. CLIENT TESTIMONIALS */}
      <section className="py-20 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="w-6 h-[2px] bg-[#c01224]" />
                <span className="text-xs font-sans font-semibold tracking-widest uppercase text-stone-500">
                  CLIENT TESTIMONIALS
                </span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-stone-900">
                Hear From Our Clients
              </h2>
              <p className="text-xs text-stone-500 mt-1">
                Trusted by individuals, businesses and institutions for thoughtful legal guidance and dedicated support.
              </p>
            </div>

            {/* Slider Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setTestimonialIndex((prev) => (prev > 0 ? prev - 1 : TESTIMONIALS.length - 1))}
                className="w-9 h-9 rounded-full border border-stone-300 hover:border-stone-800 flex items-center justify-center text-stone-600 hover:text-stone-900 transition-colors cursor-pointer"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setTestimonialIndex((prev) => (prev < TESTIMONIALS.length - 1 ? prev + 1 : 0))}
                className="w-9 h-9 rounded-full bg-[#c01224] hover:bg-[#a50f1f] text-white flex items-center justify-center transition-colors shadow-xs cursor-pointer"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={t.id}
                className={`p-6 bg-[#faf9f6] border rounded-lg space-y-4 transition-all ${
                  idx === testimonialIndex ? 'border-[#c01224] shadow-sm' : 'border-stone-200'
                }`}
              >
                <Quote className="w-8 h-8 text-[#c01224]/30" />
                <p className="font-serif text-sm text-stone-700 italic leading-relaxed">
                  “{t.quote}”
                </p>
                <div className="pt-3 border-t border-stone-200">
                  <div className="font-sans text-xs font-bold text-stone-900">{t.client}</div>
                  <div className="font-sans text-[11px] text-stone-500 mt-0.5">{t.matter}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. BOOK AN APPOINTMENT FORM SECTION */}
      <section className="py-20 bg-[#0c0c0e] text-white border-b border-stone-800 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-15 bg-cover bg-center mix-blend-screen pointer-events-none"
          style={{ backgroundImage: `url(${IMAGES.fountainPenLegalDesk})` }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Direct Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="w-6 h-[2px] bg-[#c01224]" />
                <span className="text-xs font-sans font-semibold tracking-widest uppercase text-stone-400">
                  CONSULTATION
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-white">
                Book an Appointment
              </h2>

              <p className="text-sm font-sans text-stone-300 leading-relaxed">
                Discuss your legal matter with our team. Fill in the details below and we will get back to you at the earliest.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#151518] border border-stone-800 flex items-center justify-center text-[#c01224]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">{CHAMBER_INFO.phone}</div>
                    <div className="text-[11px] text-stone-400">Talk to our team</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#151518] border border-stone-800 flex items-center justify-center text-[#c01224]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">{CHAMBER_INFO.email}</div>
                    <div className="text-[11px] text-stone-400">Drop us an email</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Embedded Appointment Form */}
            <div className="lg:col-span-7 bg-[#15151a] p-6 sm:p-8 rounded-lg border border-stone-800">
              {!appointmentState.submitted ? (
                <form
                  action="https://api.web3forms.com/submit"
                  method="POST"
                  onSubmit={handleQuickAppointment}
                  className="space-y-4 text-xs font-sans"
                >
                  <input type="hidden" name="access_key" value="8e112e23-553d-48b1-8158-8ce44554664d" />
                  <input type="hidden" name="from_name" value="Khushboo Chaudhary Law Chambers" />
                  <input type="hidden" name="subject" value="Khushboo Chaudhary Law Chambers - Quick Appointment Request (Homepage)" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-stone-300 mb-1">Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={appointmentState.name}
                        onChange={(e) => setAppointmentState({ ...appointmentState, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full px-3 py-2 bg-[#0c0c0e] border border-stone-700 rounded text-white focus:outline-none focus:border-[#c01224]"
                      />
                    </div>

                    <div>
                      <label className="block text-stone-300 mb-1">Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={appointmentState.email}
                        onChange={(e) => setAppointmentState({ ...appointmentState, email: e.target.value })}
                        placeholder="Your email address"
                        className="w-full px-3 py-2 bg-[#0c0c0e] border border-stone-700 rounded text-white focus:outline-none focus:border-[#c01224]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-stone-300 mb-1">Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={appointmentState.phone}
                        onChange={(e) => setAppointmentState({ ...appointmentState, phone: e.target.value })}
                        placeholder="Your phone number"
                        className="w-full px-3 py-2 bg-[#0c0c0e] border border-stone-700 rounded text-white focus:outline-none focus:border-[#c01224]"
                      />
                    </div>

                    <div>
                      <label className="block text-stone-300 mb-1">Practice Area *</label>
                      <select
                        name="practiceArea"
                        value={appointmentState.practiceArea}
                        onChange={(e) => setAppointmentState({ ...appointmentState, practiceArea: e.target.value })}
                        className="w-full px-3 py-2 bg-[#0c0c0e] border border-stone-700 rounded text-white focus:outline-none focus:border-[#c01224]"
                      >
                        {PRACTICE_AREAS.map((a) => (
                          <option key={a.id} value={a.title}>
                            {a.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-stone-300 mb-1">Preferred Date *</label>
                    <input
                      type="date"
                      name="preferredDate"
                      required
                      value={appointmentState.date}
                      onChange={(e) => setAppointmentState({ ...appointmentState, date: e.target.value })}
                      className="w-full px-3 py-2 bg-[#0c0c0e] border border-stone-700 rounded text-white focus:outline-none focus:border-[#c01224]"
                    />
                  </div>

                  <div>
                    <label className="block text-stone-300 mb-1">Message *</label>
                    <textarea
                      name="message"
                      rows={3}
                      required
                      value={appointmentState.message}
                      onChange={(e) => setAppointmentState({ ...appointmentState, message: e.target.value })}
                      placeholder="Tell us about your legal matter..."
                      className="w-full px-3 py-2 bg-[#0c0c0e] border border-stone-700 rounded text-white focus:outline-none focus:border-[#c01224] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isAppointmentSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#c01224] hover:bg-[#a50f1f] rounded transition-all cursor-pointer disabled:opacity-75"
                  >
                    {isAppointmentSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        SUBMITTING APPOINTMENT REQUEST...
                      </span>
                    ) : (
                      <>
                        <span>REQUEST AN APPOINTMENT</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-white">Appointment Request Submitted</h4>
                  <p className="text-xs text-stone-300 max-w-sm mx-auto leading-relaxed">
                    Thank you{appointmentState.name ? `, ${appointmentState.name}` : ''}. We have received your appointment request at Khushboo Chaudhary Law Chambers. Our chamber clerk will connect with you shortly to confirm the appointment.
                  </p>
                  <button
                    onClick={() =>
                      setAppointmentState({
                        name: '',
                        email: '',
                        phone: '',
                        practiceArea: 'Criminal Law',
                        date: '',
                        message: '',
                        submitted: false,
                      })
                    }
                    className="mt-2 px-4 py-1.5 text-xs text-stone-300 bg-stone-800 rounded hover:text-white cursor-pointer transition-colors"
                  >
                    Send another request
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* 8. VISIT OUR CHAMBERS (Chambers location + Interactive DelhiMap) */}
      <section className="py-20 bg-[#faf9f6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Chamber Address & Hours */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="w-6 h-[2px] bg-[#c01224]" />
                <span className="text-xs font-sans font-semibold tracking-widest uppercase text-stone-500">
                  OUR LOCATION
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-stone-900">
                Visit Our Chambers & Office
              </h2>

              <p className="text-sm font-sans text-stone-600 leading-relaxed">
                We are conveniently accessible across two prime New Delhi locations: at the Delhi High Court Lawyers' Chambers and our executive legal office in Jangpura Extension.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#c01224] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-sans text-xs font-bold text-stone-900 uppercase tracking-wide">
                      Chamber Address
                    </h5>
                    <p className="text-xs text-stone-600 mt-0.5 leading-normal">
                      {CHAMBER_INFO.chamberAddress}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#c01224] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-sans text-xs font-bold text-stone-900 uppercase tracking-wide">
                      Office Address
                    </h5>
                    <p className="text-xs text-stone-600 mt-0.5 leading-normal">
                      {CHAMBER_INFO.officeAddress}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Clock className="w-5 h-5 text-[#c01224] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-sans text-xs font-bold text-stone-900 uppercase tracking-wide">
                      Working Hours
                    </h5>
                    <p className="text-xs text-stone-600 mt-0.5">
                      Monday to Saturday: 10:00 AM to 6:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href="https://maps.google.com/?q=G-22+LGF+Jangpura+Extension+New+Delhi"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-sans font-semibold tracking-wider uppercase text-white bg-[#c01224] hover:bg-[#a50f1f] rounded transition-all cursor-pointer shadow-xs"
                >
                  <span>OFFICE DIRECTIONS</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href="https://maps.google.com/?q=Delhi+High+Court+New+Delhi"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-sans font-semibold tracking-wider uppercase text-stone-800 bg-white hover:bg-stone-100 border border-stone-300 rounded transition-all cursor-pointer shadow-2xs"
                >
                  <span>CHAMBER DIRECTIONS</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Column: Delhi Interactive Map Component */}
            <div className="lg:col-span-7">
              <DelhiMap heightClass="h-[360px] md:h-[420px]" />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

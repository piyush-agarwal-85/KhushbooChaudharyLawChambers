import React, { useState } from 'react';
import { PageTab } from '../types';
import { IMAGES } from '../assets/images';
import { CHAMBER_INFO, PRACTICE_AREAS, FAQS } from '../data/legalData';
import { DelhiMap } from '../components/DelhiMap';
import {
  ArrowRight,
  MessageSquare,
  FileText,
  Users,
  MapPin,
  Phone,
  Mail,
  Clock,
  Plus,
  Minus,
  CheckCircle2,
} from 'lucide-react';

interface ContactPageProps {
  onSelectTab: (tab: PageTab) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onSelectTab }) => {
  const [expandedFaq, setExpandedFaq] = useState<string | null>('faq-1');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    practiceArea: 'Criminal Law',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const payload = {
        access_key: "8e112e23-553d-48b1-8158-8ce44554664d",
        subject: "Khushboo Chaudhary Law Chambers - Consultation Enquiry (Contact Page)",
        from_name: "Khushboo Chaudhary Law Chambers",
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        practiceArea: formData.practiceArea,
        message: formData.message,
      };

      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      setFormSubmitted(true);
    } catch (err) {
      console.error("Submission error:", err);
      setFormSubmitted(true);
    } finally {
      setIsSubmitting(false);
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
            <span className="text-stone-200">Contact</span>
          </div>

          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#c01224]" />
              <span className="text-xs font-sans font-semibold tracking-widest uppercase text-stone-300">
                CONTACT US
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight">
              Let’s Discuss Your Legal Matter
            </h1>

            <p className="font-sans text-sm sm:text-base text-stone-300 leading-relaxed pt-2">
              Get in touch with our team for legal advice, research support or to schedule a consultation.
            </p>
          </div>
        </div>
      </section>

      {/* 2. THREE CONTACT CHANNELS STRIP */}
      <section className="py-10 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 bg-[#faf9f6] border border-stone-200 rounded-lg flex items-start gap-4">
              <div className="w-12 h-12 rounded-full border border-stone-200 bg-white flex items-center justify-center text-[#c01224] shrink-0">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-base font-bold text-stone-900">Legal Consultation</h4>
                <p className="text-xs font-sans text-stone-600 mt-1">
                  Discuss your matter with our team of experts.
                </p>
              </div>
            </div>

            <div className="p-6 bg-[#faf9f6] border border-stone-200 rounded-lg flex items-start gap-4">
              <div className="w-12 h-12 rounded-full border border-stone-200 bg-white flex items-center justify-center text-[#c01224] shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-base font-bold text-stone-900">Research Support</h4>
                <p className="text-xs font-sans text-stone-600 mt-1">
                  Get in-depth legal research and analysis.
                </p>
              </div>
            </div>

            <div className="p-6 bg-[#faf9f6] border border-stone-200 rounded-lg flex items-start gap-4">
              <div className="w-12 h-12 rounded-full border border-stone-200 bg-white flex items-center justify-center text-[#c01224] shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-base font-bold text-stone-900">Institutional Enquiries</h4>
                <p className="text-xs font-sans text-stone-600 mt-1">
                  For collaborations, academic and professional inquiries.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. REQUEST A CONSULTATION & CONTACT INFORMATION (Sleek, Reduced Height) */}
      <section className="py-12 sm:py-16 bg-[#faf9f6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Two-Column Grid: Form & Contact Info */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            
            {/* Left 6 Cols: Request a Consultation Form (Reduced Height) */}
            <div className="lg:col-span-6 bg-white p-5 sm:p-6 rounded-xl border border-stone-200 shadow-2xs">
              <div className="mb-3.5">
                <div className="inline-flex items-center gap-1.5 mb-1">
                  <span className="w-4 h-[2px] bg-[#c01224]" />
                  <span className="text-[10px] font-sans font-semibold tracking-widest uppercase text-stone-500">
                    SEND US A MESSAGE
                  </span>
                </div>
                <h2 className="font-serif text-2xl sm:text-[26px] font-semibold text-stone-900 leading-tight">
                  Request a Consultation
                </h2>
                <p className="text-xs text-stone-500 mt-0.5 font-sans">
                  Fill in the details below and we will get back to you at the earliest.
                </p>
              </div>

              {!formSubmitted ? (
                <form
                  action="https://api.web3forms.com/submit"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-3 text-xs font-sans"
                >
                  <input type="hidden" name="access_key" value="8e112e23-553d-48b1-8158-8ce44554664d" />
                  <input type="hidden" name="from_name" value="Khushboo Chaudhary Law Chambers" />
                  <input type="hidden" name="subject" value="Khushboo Chaudhary Law Chambers - Consultation Enquiry (Contact Page)" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-stone-700 mb-1 font-medium text-[11px]">Your full name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Advocate / Client name"
                        className="w-full px-3 py-1.5 sm:py-2 bg-[#faf9f6] border border-stone-300 rounded text-stone-900 focus:outline-none focus:border-[#c01224] text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-stone-700 mb-1 font-medium text-[11px]">Your email address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="email@example.com"
                        className="w-full px-3 py-1.5 sm:py-2 bg-[#faf9f6] border border-stone-300 rounded text-stone-900 focus:outline-none focus:border-[#c01224] text-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-stone-700 mb-1 font-medium text-[11px]">Phone number *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 Phone number"
                        className="w-full px-3 py-1.5 sm:py-2 bg-[#faf9f6] border border-stone-300 rounded text-stone-900 focus:outline-none focus:border-[#c01224] text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-stone-700 mb-1 font-medium text-[11px]">Select a practice area *</label>
                      <select
                        name="practiceArea"
                        value={formData.practiceArea}
                        onChange={(e) => setFormData({ ...formData, practiceArea: e.target.value })}
                        className="w-full px-3 py-1.5 sm:py-2 bg-[#faf9f6] border border-stone-300 rounded text-stone-900 focus:outline-none focus:border-[#c01224] text-xs cursor-pointer"
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
                    <label className="block text-stone-700 mb-1 font-medium text-[11px]">
                      Tell us about your legal matter or requirement *
                    </label>
                    <textarea
                      name="message"
                      rows={2}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Brief overview of facts, dates or relief sought..."
                      className="w-full px-3 py-1.5 sm:py-2 bg-[#faf9f6] border border-stone-300 rounded text-stone-900 focus:outline-none focus:border-[#c01224] text-xs resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-2 sm:py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#c01224] hover:bg-[#a50f1f] rounded transition-all cursor-pointer shadow-sm disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        DISPATCHING REQUEST...
                      </span>
                    ) : (
                      <>
                        <span>REQUEST A CONSULTATION</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="py-6 text-center space-y-2.5">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-stone-900">Consultation Request Dispatched</h4>
                  <p className="text-xs text-stone-600 max-w-sm mx-auto font-sans leading-relaxed">
                    Thank you{formData.name ? `, ${formData.name}` : ''}. We have received your submission at Khushboo Chaudhary Law Chambers. An associate will reach out shortly to schedule your conference.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        practiceArea: 'Criminal Law',
                        message: '',
                      });
                    }}
                    className="mt-1 text-xs text-[#c01224] underline font-semibold cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              )}
            </div>

            {/* Right 6 Cols: Contact Information */}
            <div className="lg:col-span-6 bg-white p-5 sm:p-6 rounded-xl border border-stone-200 shadow-2xs">
              <div className="mb-3.5">
                <div className="inline-flex items-center gap-1.5 mb-1">
                  <span className="w-4 h-[2px] bg-[#c01224]" />
                  <span className="text-[10px] font-sans font-semibold tracking-widest uppercase text-stone-500">
                    GET IN TOUCH
                  </span>
                </div>
                <h2 className="font-serif text-2xl sm:text-[26px] font-semibold text-stone-900 leading-tight">
                  Contact Information
                </h2>
                <p className="text-xs text-stone-500 mt-0.5 font-sans">
                  We are accessible across two strategic New Delhi locations—our High Court Chamber and our Jangpura Extension office.
                </p>
              </div>

              <div className="space-y-3 pt-1">
                {/* Chamber Address */}
                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-full bg-red-50 text-[#c01224] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-sans text-xs font-bold text-stone-900">
                      Chamber Address
                    </h5>
                    <p className="text-xs text-stone-600 mt-0.5 leading-snug">
                      {CHAMBER_INFO.chamberAddress}
                    </p>
                  </div>
                </div>

                {/* Office Address */}
                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-full bg-red-50 text-[#c01224] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-sans text-xs font-bold text-stone-900">
                      Office Address
                    </h5>
                    <p className="text-xs text-stone-600 mt-0.5 leading-snug">
                      {CHAMBER_INFO.officeAddress}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-full bg-red-50 text-[#c01224] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-sans text-xs font-bold text-stone-900">
                      {CHAMBER_INFO.phone}
                    </h5>
                    <p className="text-[11px] text-stone-500 mt-0.5">
                      Talk to our legal team
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-full bg-red-50 text-[#c01224] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-sans text-xs font-bold text-stone-900">
                      {CHAMBER_INFO.email}
                    </h5>
                    <p className="text-[11px] text-stone-500 mt-0.5">
                      Drop us an email anytime
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-full bg-red-50 text-[#c01224] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-sans text-xs font-bold text-stone-900">
                      Monday to Saturday
                    </h5>
                    <p className="text-xs text-stone-600 mt-0.5">
                      10:00 AM to 6:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-3.5 mt-3.5 border-t border-stone-100 flex flex-wrap items-center justify-between gap-2.5">
                <div className="flex items-center gap-2">
                  <a
                    href="https://maps.google.com/?q=G-22+LGF+Jangpura+Extension+New+Delhi"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#c01224] hover:bg-[#a50f1f] rounded transition-all cursor-pointer shadow-2xs"
                  >
                    <span>OFFICE MAP</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href="https://maps.google.com/?q=Delhi+High+Court+New+Delhi"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-stone-800 bg-stone-100 hover:bg-stone-200 border border-stone-300 rounded transition-all cursor-pointer"
                  >
                    <span>CHAMBER MAP</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                <span className="text-[11px] text-stone-500 font-sans">
                  Near Eros Cinema, Jangpura
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. FULL-WIDTH GOOGLE MAP COVERING THE ENTIRE PAGE WIDTH */}
      <section className="w-full relative border-y border-stone-300 bg-stone-100">
        <div className="w-full">
          <DelhiMap heightClass="h-[380px] sm:h-[440px] md:h-[480px]" rounded={false} />
        </div>
      </section>

      {/* 4. FREQUENTLY ASKED QUESTIONS ACCORDION */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center justify-between mb-10 pb-4 border-b border-stone-200">
            <div>
              <div className="inline-flex items-center gap-2 mb-1">
                <span className="w-5 h-[2px] bg-[#c01224]" />
                <span className="text-[11px] font-sans font-semibold tracking-widest uppercase text-stone-500">
                  FREQUENT QUESTIONS
                </span>
              </div>
              <h2 className="font-serif text-3xl font-semibold text-stone-900">
                Frequently Asked Questions
              </h2>
            </div>

            <button
              onClick={() => {
                const el = document.getElementById('faq-accordion');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-xs font-semibold text-[#c01224] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>VIEW ALL FAQS</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div id="faq-accordion" className="space-y-4">
            {FAQS.map((faq) => {
              const isOpen = expandedFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="border border-stone-200 rounded-lg overflow-hidden bg-[#faf9f6]"
                >
                  <button
                    onClick={() => setExpandedFaq(isOpen ? null : faq.id)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif text-base font-bold text-stone-900 hover:text-[#c01224] transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <span className="w-7 h-7 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-600 shrink-0">
                      {isOpen ? <Minus className="w-3.5 h-3.5 text-[#c01224]" /> : <Plus className="w-3.5 h-3.5" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="p-5 pt-0 text-xs font-sans text-stone-600 leading-relaxed border-t border-stone-200/50 bg-white">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
};

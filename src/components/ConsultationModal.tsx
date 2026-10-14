import React, { useState } from 'react';
import { X, ShieldCheck, Users, FileText, ArrowRight, ArrowLeft, CheckCircle2, Calendar, Phone } from 'lucide-react';
import { IMAGES } from '../assets/images';
import { PRACTICE_AREAS } from '../data/legalData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedArea?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  preSelectedArea,
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [stepError, setStepError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    contactMode: 'In-Person Chamber at Delhi High Court',
    entityType: 'Individual',
    practiceArea: preSelectedArea || 'Criminal Law',
    urgency: 'Standard (Within 2-3 days)',
    preferredDate: '',
    message: '',
    acceptedTerms: true,
  });

  if (!isOpen) return null;

  const handleStep1Continue = () => {
    if (!formData.fullName.trim()) {
      setStepError('Please enter your full name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setStepError('Please enter a valid email address.');
      return;
    }
    if (!formData.phone.trim()) {
      setStepError('Please enter your phone number.');
      return;
    }
    setStepError(null);
    setStep(2);
  };

  const handleStep2Continue = () => {
    if (!formData.preferredDate) {
      setStepError('Please select a preferred date.');
      return;
    }
    if (!formData.message.trim()) {
      setStepError('Please provide a brief overview of your legal requirement.');
      return;
    }
    setStepError(null);
    setStep(3);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.acceptedTerms) {
      setStepError('Please acknowledge the terms before submitting.');
      return;
    }
    setIsSubmitting(true);
    setStepError(null);

    try {
      const payload = {
        access_key: "8e112e23-553d-48b1-8158-8ce44554664d",
        subject: "Khushboo Chaudhary Law Chambers - Consultation Booking Request",
        from_name: "Khushboo Chaudhary Law Chambers",
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        practiceArea: formData.practiceArea,
        contactMode: formData.contactMode,
        entityType: formData.entityType,
        urgency: formData.urgency,
        preferredDate: formData.preferredDate || 'Earliest available',
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

      setIsSubmitted(true);
    } catch (err) {
      console.error("Consultation booking submission error:", err);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFormKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (step === 1) {
        e.preventDefault();
        handleStep1Continue();
      } else if (step === 2) {
        if ((e.target as HTMLElement).tagName !== 'TEXTAREA') {
          e.preventDefault();
          handleStep2Continue();
        }
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white text-stone-900 rounded-lg shadow-2xl overflow-hidden my-auto flex flex-col md:flex-row border border-stone-800/40">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-stone-500 hover:text-stone-900 bg-white/80 hover:bg-stone-100 rounded-full transition-colors cursor-pointer"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Atmosphere Panel (Dark) */}
        <div className="relative md:w-5/12 bg-[#0c0c0e] text-white p-8 md:p-10 flex flex-col justify-between overflow-hidden">
          {/* Subtle background image */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity"
            style={{ backgroundImage: `url(${IMAGES.heroLawScalesBooks})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-[#0c0c0e]/80 to-transparent" />

          {/* Content */}
          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#c01224]" />
              <span className="text-[11px] font-sans font-semibold tracking-widest uppercase text-stone-300">
                BOOK A CONSULTATION
              </span>
            </div>

            <h3 className="font-serif text-2xl md:text-3xl font-semibold leading-tight text-white">
              Expert Guidance for Your Legal Matters
            </h3>

            <p className="text-xs md:text-sm font-sans text-stone-300 leading-relaxed">
              Discuss your legal matter with our team and get clear, practical advice tailored to your needs.
            </p>

            <div className="space-y-5 pt-4">
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-[#c01224]/20 border border-[#c01224]/50 flex items-center justify-center shrink-0 text-[#c01224]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="text-xs font-semibold text-white tracking-wide">
                    Confidential Consultation
                  </h5>
                  <p className="text-[11px] text-stone-400 mt-0.5">
                    Your information is always private, privileged and secure.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-[#c01224]/20 border border-[#c01224]/50 flex items-center justify-center shrink-0 text-[#c01224]">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="text-xs font-semibold text-white tracking-wide">
                    Expert Legal Guidance
                  </h5>
                  <p className="text-[11px] text-stone-400 mt-0.5">
                    Discuss your matter with experienced High Court professionals.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-[#c01224]/20 border border-[#c01224]/50 flex items-center justify-center shrink-0 text-[#c01224]">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="text-xs font-semibold text-white tracking-wide">
                    Clear Next Steps
                  </h5>
                  <p className="text-[11px] text-stone-400 mt-0.5">
                    Get practical advice and a structured litigation or advisory roadmap.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 pt-6 border-t border-stone-800 text-[11px] text-stone-400 space-y-1">
            <p><span className="text-stone-300 font-medium">Chamber:</span> Chamber 346A, Block 1, Delhi High Court</p>
            <p><span className="text-stone-300 font-medium">Office:</span> G-22, LGF, Jangpura Extension (near Eros Cinema)</p>
          </div>
        </div>

        {/* Right Form Panel (White) */}
        <div className="md:w-7/12 p-8 md:p-10 bg-[#faf9f6] flex flex-col justify-between">
          {isSubmitted ? (
            <div className="py-6 px-2 text-center space-y-4 my-auto animate-in fade-in duration-300">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-inner">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <span className="text-[10px] font-sans font-semibold tracking-wider uppercase text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  Consultation Request Registered
                </span>
                <h3 className="font-serif text-2xl font-bold text-stone-900 mt-2.5">
                  Thank you, {formData.fullName || 'Counsel / Client'}
                </h3>
                <p className="text-xs text-stone-600 max-w-md mx-auto mt-1 font-sans leading-relaxed">
                  Your consultation booking request has been successfully received by <strong className="text-stone-800">Khushboo Chaudhary Law Chambers</strong>.
                </p>
              </div>

              <div className="bg-white border border-stone-200 rounded-lg p-3.5 text-left text-xs space-y-2 max-w-md mx-auto shadow-2xs">
                <div className="flex justify-between py-1 border-b border-stone-100 text-[11px]">
                  <span className="text-stone-500">Practice Area:</span>
                  <span className="font-semibold text-[#c01224]">{formData.practiceArea}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-100 text-[11px]">
                  <span className="text-stone-500">Target Date:</span>
                  <span className="font-medium text-stone-900">{formData.preferredDate || 'Earliest available'}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-100 text-[11px]">
                  <span className="text-stone-500">Consultation Mode:</span>
                  <span className="font-medium text-stone-900">{formData.contactMode}</span>
                </div>
                <div className="flex justify-between py-1 text-[11px]">
                  <span className="text-stone-500">Contact Number:</span>
                  <span className="font-medium text-stone-900">+91 {formData.phone}</span>
                </div>
              </div>

              <p className="text-[11px] text-stone-500 max-w-sm mx-auto font-sans leading-relaxed">
                Our chamber clerk will contact you shortly to coordinate preliminary documents and confirm your consultation appointment.
              </p>

              <div className="pt-2 flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setStep(1);
                    setFormData({
                      fullName: '',
                      email: '',
                      phone: '',
                      contactMode: 'In-Person Chamber at Delhi High Court',
                      entityType: 'Individual',
                      practiceArea: preSelectedArea || 'Criminal Law',
                      urgency: 'Standard (Within 2-3 days)',
                      preferredDate: '',
                      message: '',
                      acceptedTerms: true,
                    });
                  }}
                  className="px-4 py-2 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded transition-colors cursor-pointer"
                >
                  Book Another
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#c01224] hover:bg-[#a50f1f] rounded transition-all cursor-pointer shadow-sm"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <div>
              {/* Stepper Header */}
              <div className="mb-6">
                <div className="flex items-center justify-between relative mb-2">
                  <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-stone-300 -translate-y-1/2 z-0" />
                  
                  {/* Step 1 */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold font-sans transition-colors ${
                        step >= 1 ? 'bg-[#c01224] text-white shadow-sm' : 'bg-stone-200 text-stone-600'
                      }`}
                    >
                      1
                    </div>
                    <span className="text-[10px] font-sans font-medium text-stone-700 mt-1.5 whitespace-nowrap">
                      Your Details
                    </span>
                  </div>

                  {/* Step 2 */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold font-sans transition-colors ${
                        step >= 2 ? 'bg-[#c01224] text-white shadow-sm' : 'bg-stone-200 text-stone-600'
                      }`}
                    >
                      2
                    </div>
                    <span className="text-[10px] font-sans font-medium text-stone-700 mt-1.5 whitespace-nowrap">
                      Consultation Details
                    </span>
                  </div>

                  {/* Step 3 */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold font-sans transition-colors ${
                        step === 3 ? 'bg-[#c01224] text-white shadow-sm' : 'bg-stone-200 text-stone-600'
                      }`}
                    >
                      3
                    </div>
                    <span className="text-[10px] font-sans font-medium text-stone-700 mt-1.5 whitespace-nowrap">
                      Review & Submit
                    </span>
                  </div>
                </div>
              </div>

              {stepError && (
                <div className="mb-4 p-2.5 bg-red-50 border border-red-200 text-[#c01224] rounded text-xs font-medium">
                  {stepError}
                </div>
              )}

              {/* Form Content submitting to Web3Forms */}
              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                onSubmit={handleSubmit}
                onKeyDown={handleFormKeyDown}
                className="space-y-4"
              >
                {/* Web3Forms configuration metadata */}
                <input type="hidden" name="access_key" value="8e112e23-553d-48b1-8158-8ce44554664d" />
                <input type="hidden" name="from_name" value="Khushboo Chaudhary Law Chambers" />
                <input type="hidden" name="subject" value="Khushboo Chaudhary Law Chambers - Consultation Booking Request" />

                {/* Step 1: Your Details (always in DOM so Web3Forms captures inputs) */}
                <div className={step === 1 ? 'space-y-4 animate-in fade-in duration-200' : 'hidden'}>
                  <div>
                    <div className="inline-flex items-center gap-2 mb-1">
                      <span className="w-5 h-[2px] bg-[#c01224]" />
                      <span className="text-[10px] font-sans font-semibold tracking-wider uppercase text-stone-500">
                        STEP 1 OF 3
                      </span>
                    </div>
                    <h4 className="font-serif text-xl font-semibold text-stone-900">
                      Your Details
                    </h4>
                    <p className="text-xs text-stone-500 mt-0.5">
                      Please provide your basic information so we can get in touch with you.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-medium text-stone-700 mb-1">
                        Full name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required={step === 1}
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Enter your full name"
                        className="w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded focus:outline-none focus:border-[#c01224]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-stone-700 mb-1">
                        Email address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required={step === 1}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Enter your email address"
                        className="w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded focus:outline-none focus:border-[#c01224]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-medium text-stone-700 mb-1">
                        Phone number *
                      </label>
                      <div className="flex border border-stone-300 rounded bg-white overflow-hidden focus-within:border-[#c01224]">
                        <span className="flex items-center gap-1 px-2.5 bg-stone-100 border-r border-stone-200 text-xs text-stone-600 font-medium">
                          <span>🇮🇳</span>
                          <span>+91</span>
                        </span>
                        <input
                          type="tel"
                          name="phone"
                          required={step === 1}
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="Enter your phone number"
                          className="w-full px-3 py-2 text-xs bg-transparent focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-stone-700 mb-1">
                        Preferred mode of contact *
                      </label>
                      <select
                        name="contactMode"
                        value={formData.contactMode}
                        onChange={(e) => setFormData({ ...formData, contactMode: e.target.value })}
                        className="w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded focus:outline-none focus:border-[#c01224]"
                      >
                        <option value="In-Person Chamber at Delhi High Court">In-Person (Delhi High Court Chamber)</option>
                        <option value="In-Person Office at Jangpura Extension">In-Person (Jangpura Extension Office)</option>
                        <option value="Video Conference (Google Meet / Zoom)">Video Conference (Meet / Zoom)</option>
                        <option value="Telephonic Consultation">Telephonic Consultation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Are you an individual or representing an organisation? *
                    </label>
                    <select
                      name="entityType"
                      value={formData.entityType}
                      onChange={(e) => setFormData({ ...formData, entityType: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded focus:outline-none focus:border-[#c01224]"
                    >
                      <option value="Individual">Individual</option>
                      <option value="Corporate / Company">Corporate / Company</option>
                      <option value="Institution / University">Institution / University</option>
                      <option value="Legal Counsel / Law Firm">Legal Counsel / Law Firm</option>
                    </select>
                  </div>
                </div>

                {/* Step 2: Consultation Details (always in DOM so Formspree captures inputs) */}
                <div className={step === 2 ? 'space-y-4 animate-in fade-in duration-200' : 'hidden'}>
                  <div>
                    <div className="inline-flex items-center gap-2 mb-1">
                      <span className="w-5 h-[2px] bg-[#c01224]" />
                      <span className="text-[10px] font-sans font-semibold tracking-wider uppercase text-stone-500">
                        STEP 2 OF 3
                      </span>
                    </div>
                    <h4 className="font-serif text-xl font-semibold text-stone-900">
                      Consultation Details
                    </h4>
                    <p className="text-xs text-stone-500 mt-0.5">
                      Tell us about your legal requirement and schedule preferences.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-medium text-stone-700 mb-1">
                        Practice Area *
                      </label>
                      <select
                        name="practiceArea"
                        value={formData.practiceArea}
                        onChange={(e) => setFormData({ ...formData, practiceArea: e.target.value })}
                        className="w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded focus:outline-none focus:border-[#c01224]"
                      >
                        {PRACTICE_AREAS.map((area) => (
                          <option key={area.id} value={area.title}>
                            {area.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-stone-700 mb-1">
                        Matter Urgency
                      </label>
                      <select
                        name="urgency"
                        value={formData.urgency}
                        onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                        className="w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded focus:outline-none focus:border-[#c01224]"
                      >
                        <option value="Urgent (High Court hearing / bail within 24h)">Urgent (Within 24 hours)</option>
                        <option value="Standard (Within 2-3 days)">Standard (Within 2-3 days)</option>
                        <option value="Exploratory / Advisory">Exploratory / Advisory</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      required={step === 2}
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded focus:outline-none focus:border-[#c01224]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Brief overview of legal requirement *
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      required={step === 2}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please provide a concise description of your matter or legal inquiry..."
                      className="w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded focus:outline-none focus:border-[#c01224] resize-none"
                    />
                  </div>
                </div>

                {/* Step 3: Review & Submit */}
                <div className={step === 3 ? 'space-y-4 animate-in fade-in duration-200' : 'hidden'}>
                  <div>
                    <div className="inline-flex items-center gap-2 mb-1">
                      <span className="w-5 h-[2px] bg-[#c01224]" />
                      <span className="text-[10px] font-sans font-semibold tracking-wider uppercase text-stone-500">
                        STEP 3 OF 3
                      </span>
                    </div>
                    <h4 className="font-serif text-xl font-semibold text-stone-900">
                      Review & Submit
                    </h4>
                    <p className="text-xs text-stone-500 mt-0.5">
                      Verify your booking information prior to confirmation.
                    </p>
                  </div>

                  <div className="bg-white border border-stone-200 rounded p-4 text-xs space-y-2.5">
                    <div className="flex justify-between py-1 border-b border-stone-100">
                      <span className="text-stone-500">Client Name:</span>
                      <span className="font-medium text-stone-900">{formData.fullName || 'Not provided'}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-stone-100">
                      <span className="text-stone-500">Email:</span>
                      <span className="font-medium text-stone-900">{formData.email}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-stone-100">
                      <span className="text-stone-500">Phone:</span>
                      <span className="font-medium text-stone-900">+91 {formData.phone}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-stone-100">
                      <span className="text-stone-500">Practice Area:</span>
                      <span className="font-medium text-[#c01224]">{formData.practiceArea}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-stone-100">
                      <span className="text-stone-500">Mode:</span>
                      <span className="font-medium text-stone-900">{formData.contactMode}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-stone-100">
                      <span className="text-stone-500">Target Date:</span>
                      <span className="font-medium text-stone-900">{formData.preferredDate || 'Earliest available'}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 pt-1 text-[11px] text-stone-600">
                    <input
                      type="checkbox"
                      id="modal-terms"
                      name="acceptedTerms"
                      value="yes"
                      required={step === 3}
                      checked={formData.acceptedTerms}
                      onChange={(e) => setFormData({ ...formData, acceptedTerms: e.target.checked })}
                      className="mt-0.5 rounded border-stone-300 text-[#c01224] focus:ring-[#c01224]"
                    />
                    <label htmlFor="modal-terms">
                      I acknowledge that submitting this consultation request does not create an advocate-client relationship and that my details will be kept strictly confidential.
                    </label>
                  </div>
                </div>

                {/* Form Navigation & Submit Buttons */}
                <div className="pt-4 flex items-center justify-between gap-3 border-t border-stone-200">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={() => {
                        setStepError(null);
                        setStep((prev) => (prev - 1) as 1 | 2 | 3);
                      }}
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded transition-colors cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      Back
                    </button>
                  ) : (
                    <div />
                  )}

                  {step === 1 && (
                    <button
                      type="button"
                      onClick={handleStep1Continue}
                      className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold tracking-wider uppercase text-white bg-[#c01224] hover:bg-[#a50f1f] rounded transition-all shadow-sm cursor-pointer ml-auto"
                    >
                      <span>CONTINUE</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}

                  {step === 2 && (
                    <button
                      type="button"
                      onClick={handleStep2Continue}
                      className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold tracking-wider uppercase text-white bg-[#c01224] hover:bg-[#a50f1f] rounded transition-all shadow-sm cursor-pointer ml-auto"
                    >
                      <span>CONTINUE</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}

                  {step === 3 && (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold tracking-wider uppercase text-white bg-[#c01224] hover:bg-[#a50f1f] rounded transition-all shadow-sm cursor-pointer ml-auto disabled:opacity-75"
                    >
                      {isSubmitting ? (
                        <span className="inline-flex items-center gap-2">
                          <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          SUBMITTING...
                        </span>
                      ) : (
                        <>
                          <span>CONFIRM & SUBMIT</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  )}
                </div>
              </form>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

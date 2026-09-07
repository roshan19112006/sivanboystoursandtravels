import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, ChevronDown, MessageCircle, Phone, Compass } from 'lucide-react';
import { faqsData } from '../data/faqsData';
import { DISPLAY_PHONE, createWhatsAppUrl } from '../utils/whatsapp';
import JsonLd from '../components/JsonLd';

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqsData.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 pb-20">
      <JsonLd type="FAQPage" data={faqSchema} />

      {/* Header */}
      <section className="bg-gradient-to-b from-sky-50 via-white to-[#F8FAFC] py-12 sm:py-16 px-4 text-center border-b border-sky-100">
        <div className="max-w-4xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-widest shadow-sm">
            <Compass className="w-3.5 h-3.5 text-sky-600" />
            <span>Help &amp; Guidance</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Practical answers to help you plan your Rameswaram sightseeing, temple pilgrimage, and outstation trips smoothly.
          </p>
        </div>
      </section>

      {/* FAQs List */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-4">
          {faqsData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="rounded-2xl border border-sky-100 overflow-hidden bg-white shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full text-left p-5 sm:p-6 flex justify-between items-center gap-4 hover:bg-sky-50/50 transition-colors"
                >
                  <span className="text-sm sm:text-base font-extrabold text-slate-900">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-sky-600 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-sky-700' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 pt-1 sm:px-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-sky-50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-sky-100 text-center space-y-4 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900">Still have questions about your trip?</h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
            Talk directly with our local expert for darshan timings, Dhanushkodi entry permissions, or outstation vehicle quotes.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={`tel:${DISPLAY_PHONE}`}
              className="px-6 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs flex items-center gap-2 shadow-sm transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call +91 {DISPLAY_PHONE}</span>
            </a>
            <a
              href={createWhatsAppUrl("Hello Sivan Boys Tours & Travels, I have a question regarding my Rameswaram trip.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-2 shadow-sm transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

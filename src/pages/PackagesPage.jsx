import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, CheckCircle, MessageCircle, ArrowRight, Compass } from 'lucide-react';
import { packagesData } from '../data/packagesData';
import { createWhatsAppUrl } from '../utils/whatsapp';
import JsonLd from '../components/JsonLd';

export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 pb-20">
      <JsonLd type="LocalBusiness" />

      {/* Header Banner */}
      <section className="bg-gradient-to-b from-sky-50 via-white to-[#F8FAFC] py-12 sm:py-16 text-center px-4 border-b border-sky-100">
        <div className="max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-widest shadow-sm">
            <Compass className="w-3.5 h-3.5 text-sky-600" />
            <span>Tour Packages</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Rameswaram &amp; South India Tour Itineraries
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            Customizable private tour itineraries covering sacred temple pilgrimages, coastal landmarks, and scenic hill stations originating from Rameswaram.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {packagesData.map((pkg) => {
            const whatsappUrl = createWhatsAppUrl(`Hello Sivan Boys Tours & Travels, I would like to enquire about the ${pkg.title}.`);

            return (
              <div 
                key={pkg.id}
                className="bg-white rounded-2xl overflow-hidden border border-sky-100 hover:border-sky-300 transition-all flex flex-col shadow-sm hover:shadow-xl group"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={pkg.heroImage}
                    alt={pkg.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] font-bold text-sky-700 uppercase tracking-wider border border-sky-200 shadow-sm">
                    {pkg.category}
                  </span>
                  <span className="absolute bottom-3 right-3 bg-slate-900/80 text-white px-2.5 py-1 rounded-lg text-[11px] font-semibold flex items-center gap-1 shadow-sm">
                    <Clock className="w-3 h-3 text-sky-300" />
                    <span>{pkg.duration}</span>
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900 group-hover:text-sky-600 transition-colors">
                      <Link to={`/packages/${pkg.slug}`}>{pkg.title}</Link>
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                      {pkg.summary}
                    </p>

                    <div className="mt-3.5 space-y-1.5">
                      {pkg.highlights.slice(0, 2).map((hl, idx) => (
                        <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-700">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="truncate">{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-sky-100 flex items-center justify-between">
                    <Link
                      to={`/packages/${pkg.slug}`}
                      className="text-xs font-bold text-sky-600 hover:text-sky-700 transition-colors inline-flex items-center gap-1"
                    >
                      <span>View Itinerary</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Enquire</span>
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Wind, CheckCircle2, MessageCircle, Phone, Compass } from 'lucide-react';
import { vehiclesData } from '../data/vehiclesData';
import { DISPLAY_PHONE, createWhatsAppUrl, buildVehicleEnquiry } from '../utils/whatsapp';
import JsonLd from '../components/JsonLd';

export default function VehiclesPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 pb-20">
      <JsonLd type="LocalBusiness" />

      {/* Header */}
      <section className="bg-gradient-to-b from-sky-50 via-white to-[#F8FAFC] py-12 sm:py-16 text-center px-4 border-b border-sky-100">
        <div className="max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-widest shadow-sm">
            <Compass className="w-3.5 h-3.5 text-sky-600" />
            <span>Fleet</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Travel Vehicles For Every Journey
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            From comfortable sedans to spacious Tempo Travellers and group tourist coaches, all maintained in pristine condition with experienced chauffeurs.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehiclesData.map((v) => {
            const vehicleUrl = createWhatsAppUrl(buildVehicleEnquiry(v.title));

            return (
              <div 
                key={v.id}
                className="bg-white rounded-2xl overflow-hidden border border-sky-100 hover:border-sky-300 shadow-sm hover:shadow-xl transition-all flex flex-col group"
              >
                <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                  <img
                    src={v.image}
                    alt={v.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-0.5 rounded-lg text-[10px] font-bold text-sky-700 uppercase tracking-wider border border-sky-200 shadow-sm">
                    {v.category}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900">{v.title}</h3>
                    
                    <div className="flex items-center gap-3 text-xs text-sky-600 font-semibold mt-1">
                      <span>{v.capacity}</span>
                      <span>•</span>
                      <span>{v.ac}</span>
                    </div>

                    <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                      {v.description}
                    </p>

                    <div className="mt-3.5 space-y-1.5">
                      {v.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-sky-100 flex items-center gap-2">
                    <a
                      href={vehicleUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp Book</span>
                    </a>
                    <a
                      href={`tel:${DISPLAY_PHONE}`}
                      className="p-2.5 rounded-xl bg-sky-50 text-sky-600 hover:bg-sky-100 border border-sky-200 transition-colors"
                      title="Call Now"
                    >
                      <Phone className="w-4 h-4" />
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

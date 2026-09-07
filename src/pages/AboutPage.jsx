import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Phone, Compass, MapPin, Award, Users, HeartHandshake } from 'lucide-react';
import { OWNER_NAME, ESTABLISHED_YEAR, LOCATION, DISPLAY_PHONE } from '../utils/whatsapp';
import JsonLd from '../components/JsonLd';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 pb-20">
      <JsonLd type="LocalBusiness" />

      {/* Header */}
      <section className="bg-gradient-to-b from-sky-50 via-white to-[#F8FAFC] py-12 sm:py-16 text-center px-4 border-b border-sky-100">
        <div className="max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-widest shadow-sm">
            <Compass className="w-3.5 h-3.5 text-sky-600" />
            <span>Serving Travellers Since 2005</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            About Sivan Boys Tours &amp; Travels
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            Two decades of dedicated pilgrimage assistance, local sightseeing, and outstation travels in Rameswaram, Tamil Nadu.
          </p>
        </div>
      </section>

      {/* Story & Values */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-8">
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-sky-100 shadow-sm space-y-4">
          <h2 className="text-xl font-bold text-slate-900">Our Story &amp; Heritage</h2>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            <strong>SIVAN BOYS TOURS &amp; TRAVELS</strong> was established in <strong>{ESTABLISHED_YEAR}</strong> by <strong>{OWNER_NAME}</strong> in {LOCATION}. Growing up in Rameswaram island, our founder recognized the need for an honest, polite, and well-organized travel service dedicated to pilgrims and families visiting this sacred kshetram.
          </p>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            Today, our fleet covers couples, families, and large devotee groups with air-conditioned sedans, Toyota Innovas, and luxury Tempo Travellers. Our chauffeurs are born and raised in Rameswaram, possessing comprehensive knowledge of temple darshan timings, sacred theertham rituals, and safe routes.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-6 rounded-2xl bg-white border border-sky-100 text-center shadow-sm">
            <p className="font-serif text-3xl font-black text-sky-600">2005</p>
            <p className="text-xs text-slate-700 mt-1 font-bold">Founded in Rameswaram</p>
            <p className="text-[11px] text-slate-500 mt-0.5">20+ years of trust</p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-sky-100 text-center shadow-sm">
            <p className="font-serif text-3xl font-black text-sky-600">100%</p>
            <p className="text-xs text-slate-700 mt-1 font-bold">Native Island Chauffeurs</p>
            <p className="text-[11px] text-slate-500 mt-0.5">Punctual &amp; polite drivers</p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-sky-100 text-center shadow-sm">
            <p className="font-serif text-3xl font-black text-sky-600">24/7</p>
            <p className="text-xs text-slate-700 mt-1 font-bold">Dedicated Assistance</p>
            <p className="text-[11px] text-slate-500 mt-0.5">Always a call away</p>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center pt-4">
          <a
            href={`tel:${DISPLAY_PHONE}`}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-sky-600/20 transition-all"
          >
            <Phone className="w-4 h-4" />
            <span>Call R Ramesh: +91 {DISPLAY_PHONE}</span>
          </a>
        </div>
      </section>
    </div>
  );
}

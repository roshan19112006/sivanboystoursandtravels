import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock, ShieldCheck } from 'lucide-react';
import { DISPLAY_PHONE, EMAIL_ADDRESS, OWNER_NAME, LOCATION, createWhatsAppUrl } from '../utils/whatsapp';
import JsonLd from '../components/JsonLd';

export default function ContactPage() {
  const whatsappUrl = createWhatsAppUrl("Hello Sivan Boys Tours & Travels, I would like to get in touch regarding travel services in Rameswaram.");

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 pb-20">
      <JsonLd type="LocalBusiness" />

      {/* Header */}
      <section className="bg-gradient-to-b from-sky-50 via-white to-[#F8FAFC] py-12 text-center px-4 border-b border-sky-100">
        <div className="max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-sky-600 uppercase tracking-widest">24/7 Available</span>
          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">Contact Us</h1>
          <p className="text-xs sm:text-sm text-slate-600">
            Reach out for immediate cab bookings, outstation tour planning, or room assistance in Rameswaram.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-2xl border border-sky-100 text-center space-y-2 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mx-auto">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-bold text-slate-900">Direct Call</h3>
            <p className="text-xs text-slate-500">Proprietor: {OWNER_NAME}</p>
            <p className="text-sm font-bold text-sky-600 pt-1">
              <a href={`tel:${DISPLAY_PHONE}`}>+91 {DISPLAY_PHONE}</a>
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-sky-100 text-center space-y-2 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
              <MessageCircle className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-bold text-slate-900">WhatsApp</h3>
            <p className="text-xs text-slate-500">Fast quotes &amp; itineraries</p>
            <div className="pt-1">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors shadow-sm"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-sky-100 text-center space-y-2 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mx-auto">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-bold text-slate-900">Email Us</h3>
            <p className="text-xs text-slate-500">Tour requests &amp; quotes</p>
            <p className="text-xs font-bold text-sky-700 break-all pt-1">
              <a href={`mailto:${EMAIL_ADDRESS}`}>{EMAIL_ADDRESS}</a>
            </p>
          </div>
        </div>

        {/* Location banner */}
        <div className="bg-white p-6 rounded-2xl border border-sky-100 flex items-start gap-3 shadow-sm">
          <MapPin className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-slate-900">Head Office Location</h4>
            <p className="text-xs text-slate-600">
              Sivan Boys Tours &amp; Travels, {LOCATION}
            </p>
            <p className="text-[11px] text-slate-500">
              Pickups available from Rameswaram Railway Station, Temple North/East Gate, all hotels and resorts.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

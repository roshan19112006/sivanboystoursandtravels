import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { createWhatsAppUrl, DISPLAY_PHONE } from '../utils/whatsapp';

export default function FloatingActions() {
  const whatsappUrl = createWhatsAppUrl("Hello Sivan Boys Tours & Travels, I would like to enquire about travel / vehicle booking in Rameswaram.");

  return (
    <>
      {/* 1. MOBILE BOTTOM ACTION BAR */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-sky-200 px-3 py-2.5 shadow-2xl flex items-center gap-2">
        <a
          href="tel:8838478024"
          className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs tracking-wide shadow-md active:scale-95 transition-all"
        >
          <Phone className="w-4 h-4 text-white" />
          <span>Call Now</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[1.2] flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs tracking-wide shadow-lg shadow-emerald-600/30 active:scale-95 transition-all"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>WhatsApp Us</span>
        </a>
      </div>

      {/* 2. DESKTOP FLOATING BUTTONS */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-50 flex-col items-end gap-3 pointer-events-none">
        <a
          href="tel:8838478024"
          className="pointer-events-auto flex items-center gap-2.5 bg-white border border-sky-200 text-slate-800 px-4 py-2.5 rounded-full shadow-xl hover:scale-105 transition-all group hover:border-sky-400"
          aria-label="Call Sivan Boys Travels"
        >
          <div className="w-8 h-8 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold shadow-sm">
            <Phone className="w-4 h-4" />
          </div>
          <div className="text-left">
            <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Direct Call</p>
            <p className="text-xs font-black text-sky-700">+91 {DISPLAY_PHONE}</p>
          </div>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-full shadow-xl hover:scale-105 transition-all ring-4 ring-emerald-500/20 font-bold text-xs tracking-wide"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span>WhatsApp Booking</span>
        </a>
      </div>
    </>
  );
}

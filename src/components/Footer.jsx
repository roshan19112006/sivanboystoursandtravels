import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle, Compass, ShieldCheck } from 'lucide-react';
import { DISPLAY_PHONE, EMAIL_ADDRESS, OWNER_NAME, LOCATION, createWhatsAppUrl } from '../utils/whatsapp';

export default function Footer() {
  const quickWhatsapp = createWhatsAppUrl("Hello Sivan Boys Tours & Travels, I would like to enquire about Rameswaram tour packages and vehicle hiring.");

  return (
    <footer className="bg-sky-50 text-slate-700 border-t border-sky-100 pt-12 pb-16 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-sky-200">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-sky-600 flex items-center justify-center text-white font-bold">
                <Compass className="w-5 h-5" />
              </div>
              <span className="text-lg font-black tracking-tight text-sky-950">SIVAN BOYS TRAVELS</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Established in 2005 by <strong className="text-slate-900">{OWNER_NAME}</strong> in {LOCATION}. Providing premium sightseeing, temple darshan coordination, outstation vehicle service, and accommodation assistance for travellers across India.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-sky-200 text-xs text-sky-700 font-semibold shadow-sm">
              <ShieldCheck className="w-4 h-4 text-sky-600" />
              <span>Serving Travellers Since 2005</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-sky-900 mb-4">
              Tour Packages
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/packages/rameswaram" className="text-slate-600 hover:text-sky-600 transition-colors">Rameswaram Sightseeing</Link></li>
              <li><Link to="/packages/madurai" className="text-slate-600 hover:text-sky-600 transition-colors">Madurai Meenakshi Tour</Link></li>
              <li><Link to="/packages/kanyakumari" className="text-slate-600 hover:text-sky-600 transition-colors">Kanyakumari Confluence</Link></li>
              <li><Link to="/packages/kodaikanal" className="text-slate-600 hover:text-sky-600 transition-colors">Kodaikanal Hill Trip</Link></li>
              <li><Link to="/packages/kumbakonam" className="text-slate-600 hover:text-sky-600 transition-colors">Kumbakonam Navagraha</Link></li>
              <li><Link to="/packages/andhra-pradesh" className="text-slate-600 hover:text-sky-600 transition-colors">Tirupati Balaji Darshan</Link></li>
              <li><Link to="/packages" className="text-sky-700 font-bold hover:underline">All South India Tours →</Link></li>
            </ul>
          </div>

          {/* Vehicles Fleet */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-sky-900 mb-4">
              Vehicles Fleet
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/vehicles" className="text-slate-600 hover:text-sky-600 transition-colors">AC Sedans (Dzire / Etios)</Link></li>
              <li><Link to="/vehicles" className="text-slate-600 hover:text-sky-600 transition-colors">Toyota Innova Crysta (SUV)</Link></li>
              <li><Link to="/vehicles" className="text-slate-600 hover:text-sky-600 transition-colors">7-Seater Family MPV</Link></li>
              <li><Link to="/vehicles" className="text-slate-600 hover:text-sky-600 transition-colors">12-Seater Luxury Coach</Link></li>
              <li><Link to="/vehicles" className="text-slate-600 hover:text-sky-600 transition-colors">Force Tempo Travellers (14-20)</Link></li>
              <li><Link to="/vehicles" className="text-slate-600 hover:text-sky-600 transition-colors">Tourist Vans & Coaches</Link></li>
              <li><Link to="/gallery" className="text-sky-700 font-bold hover:underline">View Real Fleet Photos</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-sky-900 mb-4">
              Contact Details
            </h4>
            <div className="space-y-2.5 text-xs text-slate-600">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <span>{LOCATION}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-600 shrink-0" />
                <a href="tel:8838478024" className="font-bold text-slate-900 hover:text-sky-600">+91 {DISPLAY_PHONE}</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-600 shrink-0" />
                <a href={`mailto:${EMAIL_ADDRESS}`} className="hover:text-sky-600 break-all">{EMAIL_ADDRESS}</a>
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-sky-200 flex gap-2">
              <a
                href="tel:8838478024"
                className="flex-1 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-center text-xs shadow-sm transition-colors"
              >
                Call
              </a>
              <a
                href={quickWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-center text-xs shadow-sm flex items-center justify-center gap-1 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-2">
          <p>© {new Date().getFullYear()} Sivan Boys Tours & Travels. Rameswaram, Tamil Nadu.</p>
          <div className="flex items-center space-x-3 text-slate-600">
            <Link to="/about" className="hover:text-sky-600">About</Link>
            <span>•</span>
            <Link to="/gallery" className="hover:text-sky-600">Gallery</Link>
            <span>•</span>
            <Link to="/faq" className="hover:text-sky-600">FAQs</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-sky-600">Contact</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

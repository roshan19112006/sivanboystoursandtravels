import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageCircle, Menu, X, ChevronDown, Compass } from 'lucide-react';
import { DISPLAY_PHONE, createWhatsAppUrl } from '../utils/whatsapp';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPackagesDropdownOpen, setIsPackagesDropdownOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Packages", path: "/packages", hasDropdown: true },
    { name: "Vehicles", path: "/vehicles" },
    { name: "GALLERY", path: "/gallery", isHighlight: true },
    { name: "About", path: "/about" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" }
  ];

  const packageSublinks = [
    { name: "Rameswaram Sightseeing & Darshan", path: "/packages/rameswaram" },
    { name: "Madurai Meenakshi Amman Tour", path: "/packages/madurai" },
    { name: "Kanyakumari Confluence Tour", path: "/packages/kanyakumari" },
    { name: "Kodaikanal Hill Getaway", path: "/packages/kodaikanal" },
    { name: "Kumbakonam 9 Navagraha", path: "/packages/kumbakonam" },
    { name: "Kanchipuram Silk & Temples", path: "/packages/kanchipuram" },
    { name: "Tirupati Balaji & Srisailam", path: "/packages/andhra-pradesh" },
    { name: "Kerala Beaches & Kovalam", path: "/packages/kerala" },
    { name: "All South India Circuits", path: "/packages/other-state-tours" }
  ];

  const quickEnquiryUrl = createWhatsAppUrl("Hello Sivan Boys Tours & Travels, I would like to enquire about Rameswaram travels and vehicles.");

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-sky-100 text-slate-800 transition-all shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Brand Name: SIVAN BOYS TOURS & TRAVELS */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="/logo.png" 
              alt="Sivan Boys Tours & Travels Logo" 
              className="w-12 h-12 rounded-xl object-contain drop-shadow-sm group-hover:scale-105 transition-transform bg-white"
            />
            <div>
              <div className="text-lg sm:text-xl font-black tracking-tight text-sky-900 leading-tight">
                SIVAN BOYS
              </div>
              <div className="text-xs sm:text-sm font-bold tracking-wider text-sky-600 leading-none">
                TOURS &amp; TRAVELS
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative group py-2"
                    onMouseEnter={() => setIsPackagesDropdownOpen(true)}
                    onMouseLeave={() => setIsPackagesDropdownOpen(false)}
                  >
                    <Link
                      to={link.path}
                      className="px-3.5 py-2 text-xs uppercase tracking-wider font-bold rounded-lg hover:text-sky-600 flex items-center gap-1 text-slate-700 transition-colors"
                    >
                      <span>{link.name}</span>
                      <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform" />
                    </Link>

                    <div className={`absolute top-full left-0 w-64 bg-white border border-sky-100 rounded-xl shadow-xl py-2 transition-all duration-150 ${isPackagesDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                      <div className="px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-sky-600 border-b border-sky-50 mb-1">
                        Tour Itineraries
                      </div>
                      {packageSublinks.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          className="block px-4 py-2 text-xs text-slate-600 hover:bg-sky-50 hover:text-sky-700 transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                      <div className="border-t border-sky-50 mt-1 pt-1">
                        <Link to="/packages" className="block px-4 py-2 text-xs font-bold text-sky-600 hover:bg-sky-50">
                          View All Packages →
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              }

              const isActive = location.pathname === link.path;

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3.5 py-2 text-xs uppercase tracking-wider font-bold rounded-lg transition-all ${
                    isActive
                      ? 'text-sky-600 bg-sky-50 shadow-sm'
                      : link.isHighlight
                      ? 'text-sky-600 border border-sky-300 hover:bg-sky-50'
                      : 'text-slate-700 hover:text-sky-600 hover:bg-sky-50/50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              to="/enquiry"
              className="px-4 py-2.5 text-xs font-bold rounded-xl border border-sky-200 text-sky-700 hover:bg-sky-50 transition-colors"
            >
              Room Enquiry
            </Link>
            <a
              href="tel:8838478024"
              className="px-4 py-2.5 text-xs font-bold rounded-xl bg-sky-600 hover:bg-sky-700 text-white shadow-md shadow-sky-600/20 transition-all flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call 8838478024</span>
            </a>
            <a
              href={quickEnquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 text-xs font-bold rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-600/20 transition-all flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Right Bar */}
          <div className="flex lg:hidden items-center space-x-2">
            <a
              href="tel:8838478024"
              className="p-2.5 rounded-xl bg-sky-600 text-white font-bold shadow-md"
              aria-label="Call 8838478024"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl bg-sky-50 text-sky-900 border border-sky-200"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-sky-100 px-5 pt-3 pb-6 space-y-2 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-4 py-2.5 rounded-xl text-sm font-bold tracking-wide ${
                location.pathname === link.path
                  ? 'bg-sky-50 text-sky-700 border border-sky-200'
                  : link.isHighlight
                  ? 'text-sky-600 border border-sky-200'
                  : 'text-slate-700 hover:bg-sky-50'
              }`}
            >
              {link.name}
            </Link>
          ))}

          <div className="pt-3 border-t border-sky-100 grid grid-cols-2 gap-3">
            <Link
              to="/enquiry"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-center py-2.5 px-3 bg-sky-50 text-sky-700 rounded-xl text-xs font-bold border border-sky-200"
            >
              Room Enquiry
            </Link>
            <a
              href={quickEnquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center py-2.5 px-3 bg-emerald-600 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-md"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, MessageCircle, MapPin, Calendar, Users, Car, Shield, 
  Clock, CheckCircle, ChevronRight, ArrowRight, Sparkles,
  BedDouble, Compass, Navigation, ChevronDown
} from 'lucide-react';
import { packagesData } from '../data/packagesData';
import { vehiclesData } from '../data/vehiclesData';
import { galleryData } from '../data/galleryData';
import { faqsData } from '../data/faqsData';
import { destinationsData } from '../data/destinationsData';
import { 
  DISPLAY_PHONE, 
  OWNER_NAME, 
  LOCATION, 
  createWhatsAppUrl 
} from '../utils/whatsapp';
import GalleryModal from '../components/GalleryModal';
import JsonLd from '../components/JsonLd';

export default function HomePage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  // Gallery Lightbox state
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const featuredGalleryImages = galleryData.filter(img => img.featured).slice(0, 8);

  const handleOpenLightbox = (image, index) => {
    setSelectedImage(image);
    setSelectedIndex(index);
  };

  const handlePrevImage = () => {
    if (!featuredGalleryImages.length) return;
    const nextIdx = (selectedIndex - 1 + featuredGalleryImages.length) % featuredGalleryImages.length;
    setSelectedIndex(nextIdx);
    setSelectedImage(featuredGalleryImages[nextIdx]);
  };

  const handleNextImage = () => {
    if (!featuredGalleryImages.length) return;
    const nextIdx = (selectedIndex + 1) % featuredGalleryImages.length;
    setSelectedIndex(nextIdx);
    setSelectedImage(featuredGalleryImages[nextIdx]);
  };

  return (
    <div className="bg-[#F8FAFC]">
      <JsonLd type="LocalBusiness" />

      {/* ==========================================
          1. HERO SECTION - FRESH LIGHT BLUE
      ========================================== */}
      <section className="relative bg-gradient-to-b from-sky-100/70 via-sky-50/50 to-white py-16 sm:py-24 border-b border-sky-100 overflow-hidden">
        
        {/* Soft Background Accents */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-sky-200 text-sky-700 text-xs font-bold uppercase tracking-wider shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                <span>Rameswaram • Serving Travellers Since 2005</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
                SIVAN BOYS <span className="text-sky-600 block sm:inline">TOURS &amp; TRAVELS</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Experience seamless <strong>Rameswaram sightseeing</strong>, Ramanathaswamy Temple darshan, 22 holy theertham sacred baths, Dhanushkodi, and iconic Pamban Sea Bridge. Dedicated outstation taxi cabs and family/group travel services across Tamil Nadu and South India.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch lg:items-center justify-center lg:justify-start gap-3 pt-2">
                <a
                  href={createWhatsAppUrl("Hello Sivan Boys Tours & Travels, I would like to book a cab / tour package in Rameswaram.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-2 transition-all active:scale-95"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Book on WhatsApp</span>
                </a>

                <a
                  href="tel:8838478024"
                  className="px-8 py-4 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm shadow-lg shadow-sky-600/25 flex items-center justify-center gap-2 transition-all active:scale-95"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call +91 {DISPLAY_PHONE}</span>
                </a>

                <Link
                  to="/packages"
                  className="px-6 py-4 rounded-xl bg-white hover:bg-sky-50 text-sky-700 border border-sky-200 font-bold text-xs uppercase tracking-wider text-center transition-all shadow-sm"
                >
                  Tour Packages
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="pt-2 flex flex-wrap justify-center lg:justify-start gap-4 text-xs font-semibold text-slate-600">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-sky-600" />
                  <span>Experienced Local Drivers</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-sky-600" />
                  <span>Clean AC Vehicles</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-sky-600" />
                  <span>Room Assistance</span>
                </span>
              </div>

            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] bg-sky-100">
                <img
                  src="/images/gallery/rameswaram/pamban-bridge-01.webp"
                  alt="Pamban Sea Bridge near Rameswaram"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-sky-600/90 text-white px-2.5 py-1 rounded-md self-start mb-1">
                    Featured Destination
                  </span>
                  <h3 className="text-xl font-bold">Pamban Sea Bridge, Rameswaram</h3>
                  <p className="text-xs text-sky-100">Daily sightseeing tours &amp; outstation services</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
          2. METRICS BAR
      ========================================== */}
      <section className="bg-white border-b border-sky-100 py-8 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4 rounded-2xl bg-sky-50/60 border border-sky-100">
            <p className="text-3xl font-black text-sky-700">2005</p>
            <p className="text-xs uppercase tracking-wider text-slate-500 font-bold mt-1">Established</p>
          </div>
          <div className="p-4 rounded-2xl bg-sky-50/60 border border-sky-100">
            <p className="text-3xl font-black text-sky-700">20+ Yrs</p>
            <p className="text-xs uppercase tracking-wider text-slate-500 font-bold mt-1">Travel Experience</p>
          </div>
          <div className="p-4 rounded-2xl bg-sky-50/60 border border-sky-100">
            <p className="text-3xl font-black text-sky-700">100%</p>
            <p className="text-xs uppercase tracking-wider text-slate-500 font-bold mt-1">Local Drivers</p>
          </div>
          <div className="p-4 rounded-2xl bg-sky-50/60 border border-sky-100">
            <p className="text-3xl font-black text-sky-700">24/7</p>
            <p className="text-xs uppercase tracking-wider text-slate-500 font-bold mt-1">Station Pickups</p>
          </div>
        </div>
      </section>

      {/* ==========================================
          3. CORE SERVICES
      ========================================== */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-sky-700 uppercase tracking-widest">Our Services</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-1">
              Travel &amp; Pilgrimage Services
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Comfortable private transport and sincere coordination from arrival to departure in Rameswaram.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Service 1 */}
            <div className="bg-white rounded-2xl p-6 border border-sky-100 hover:border-sky-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Rameswaram Sightseeing</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Full day &amp; half day private vehicle packages covering Ramanathaswamy Temple, Pamban Sea Bridge, Dhanushkodi ghost town, Arichal Munai, Dr. APJ Abdul Kalam Memorial, and Ramar Patham.
                </p>
              </div>
              <Link to="/packages/rameswaram" className="inline-flex items-center gap-1 text-xs font-bold text-sky-600 hover:text-sky-700 mt-5">
                <span>View Route</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-2xl p-6 border border-sky-100 hover:border-sky-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Navigation className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Temple &amp; Pilgrimage Darshan</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Knowledgeable local drivers who guide visiting devotees through the traditional 22 holy kund theertham baths, Agni Theertham seaside snanam, and temple darshan timings.
                </p>
              </div>
              <Link to="/packages/rameswaram" className="inline-flex items-center gap-1 text-xs font-bold text-sky-600 hover:text-sky-700 mt-5">
                <span>Pilgrimage Details</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-2xl p-6 border border-sky-100 hover:border-sky-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Car className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Outstation Taxi &amp; Transfers</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Reliable round-trips and one-way drops connecting Rameswaram to Madurai Airport/Railway, Kanyakumari, Tirupati, Kodaikanal, Kumbakonam, and all South India destinations.
                </p>
              </div>
              <Link to="/vehicles" className="inline-flex items-center gap-1 text-xs font-bold text-sky-600 hover:text-sky-700 mt-5">
                <span>View Vehicles</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* ==========================================
          4. POPULAR PACKAGES
      ========================================== */}
      <section className="py-16 bg-white border-t border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold text-sky-700 uppercase tracking-widest">Itineraries</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-1">
                Popular Tour Packages
              </h2>
            </div>
            <Link
              to="/packages"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:underline uppercase tracking-wider"
            >
              <span>View All Packages</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packagesData.slice(0, 3).map((pkg) => {
              const whatsappUrl = createWhatsAppUrl(`Hello Sivan Boys Tours & Travels, I would like to book or enquire about the ${pkg.title}.`);

              return (
                <div 
                  key={pkg.id}
                  className="bg-sky-50/40 rounded-2xl overflow-hidden border border-sky-100 hover:border-sky-300 transition-all flex flex-col shadow-sm hover:shadow-md group"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-sky-100">
                    <img
                      src={pkg.heroImage}
                      alt={pkg.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-white/95 px-2.5 py-1 rounded text-[10px] font-bold text-sky-800 uppercase tracking-wider shadow-sm">
                      {pkg.category}
                    </span>
                    <span className="absolute bottom-3 right-3 bg-slate-900/80 text-white px-2 py-1 rounded text-[11px] font-semibold flex items-center gap-1">
                      <Clock className="w-3 h-3 text-sky-300" />
                      <span>{pkg.duration}</span>
                    </span>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4 bg-white">
                    <div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                        <Link to={`/packages/${pkg.slug}`}>{pkg.title}</Link>
                      </h3>
                      <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                        {pkg.summary}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-sky-100 flex items-center justify-between">
                      <Link
                        to={`/packages/${pkg.slug}`}
                        className="text-xs font-bold text-sky-700 hover:text-sky-800 transition-colors"
                      >
                        Details →
                      </Link>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm transition-colors"
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

        </div>
      </section>

      {/* ==========================================
          5. VEHICLES FLEET PREVIEW
      ========================================== */}
      <section className="py-16 bg-[#F8FAFC] border-t border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold text-sky-700 uppercase tracking-widest">Fleet</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-1">
                Travel Vehicles For Every Journey
              </h2>
            </div>
            <Link
              to="/vehicles"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:underline uppercase tracking-wider"
            >
              <span>Explore All Fleets</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {vehiclesData.slice(0, 3).map((v) => {
              const bookUrl = createWhatsAppUrl(`Hello Sivan Boys Tours & Travels, I would like to book the ${v.title} in Rameswaram.`);

              return (
                <div key={v.id} className="bg-white rounded-2xl overflow-hidden border border-sky-100 shadow-sm hover:shadow-md transition-all flex flex-col">
                  <div className="relative aspect-[16/10] overflow-hidden bg-sky-100">
                    <img
                      src={v.image}
                      alt={v.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-3 left-3 bg-white/95 px-2.5 py-0.5 rounded text-[10px] font-bold text-sky-800 uppercase tracking-wider shadow-sm">
                      {v.category}
                    </span>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="text-base font-bold text-slate-900">{v.title}</h3>
                      <div className="flex items-center gap-3 text-xs text-sky-700 font-semibold mt-1">
                        <span>{v.capacity}</span>
                        <span>•</span>
                        <span>{v.ac}</span>
                      </div>
                      <p className="text-xs text-slate-600 mt-2 line-clamp-2">
                        {v.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-sky-100 flex items-center justify-between">
                      <a href="tel:8838478024" className="text-xs font-bold text-slate-700 hover:text-sky-600">
                        Call Chauffeur
                      </a>
                      <a
                        href={bookUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Book Vehicle</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ==========================================
          6. GALLERY PREVIEW
      ========================================== */}
      <section className="py-16 bg-white border-t border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold text-sky-700 uppercase tracking-widest">Moments</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-1">
                Explore Our Travel Gallery
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Real photos of destinations, temples, vehicles, and journey memories.
              </p>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs tracking-wider uppercase transition-all shadow-md shadow-sky-600/20"
            >
              <span>View Full Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {featuredGalleryImages.map((image, index) => (
              <div
                key={image.id}
                onClick={() => handleOpenLightbox(image, index)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-sky-100 border border-sky-100 hover:border-sky-300 cursor-pointer shadow-sm hover:shadow-md transition-all"
              >
                <img
                  src={image.src}
                  alt={image.alt || image.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-end text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-sky-300">{image.category}</span>
                  <h4 className="text-xs font-bold truncate">{image.title}</h4>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <GalleryModal
        isOpen={Boolean(selectedImage)}
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
        onPrev={handlePrevImage}
        onNext={handleNextImage}
      />

      {/* ==========================================
          7. ROOM ASSISTANCE CTA BANNER
      ========================================== */}
      <section className="py-12 bg-sky-50 border-y border-sky-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-sky-200 text-sky-700 text-xs font-bold uppercase tracking-wider shadow-sm">
            <BedDouble className="w-3.5 h-3.5" />
            <span>Accommodation Assistance</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Need Hotel Rooms in Rameswaram?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            We assist families and pilgrim groups visiting Rameswaram in arranging clean, verified AC hotel stays and family lodges according to your budget.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <Link
              to="/enquiry"
              className="px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs tracking-wider uppercase transition-all shadow-md shadow-sky-600/20"
            >
              Send Room Enquiry
            </Link>
            <a
              href={createWhatsAppUrl("Hello Sivan Boys Tours & Travels, I need room accommodation assistance in Rameswaram.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-white hover:bg-sky-100 text-sky-700 border border-sky-200 font-bold text-xs tracking-wider uppercase transition-all shadow-sm"
            >
              WhatsApp Room Inquiry
            </a>
          </div>
        </div>
      </section>

      {/* ==========================================
          8. CLEAN FAQS
      ========================================== */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-sky-700 uppercase tracking-widest">FAQ</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqsData.slice(0, 6).map((faq, index) => {
              const isOpen = openFaqIndex === index;

              return (
                <div key={index} className="rounded-2xl border border-sky-100 overflow-hidden bg-sky-50/40">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                    className="w-full text-left p-4 sm:p-5 flex justify-between items-center gap-4 hover:bg-sky-50 transition-colors"
                  >
                    <span className="text-xs sm:text-sm font-bold text-slate-900">{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-sky-600 transition-transform shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="p-4 sm:p-5 pt-0 text-xs text-slate-600 leading-relaxed border-t border-sky-100 bg-white">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <Link to="/faq" className="text-xs font-bold text-sky-600 hover:underline">
              View All Travel FAQs →
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}

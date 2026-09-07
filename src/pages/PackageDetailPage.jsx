import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Clock, CheckCircle2, MessageCircle, Phone, ArrowLeft, Shield, MapPin, Car } from 'lucide-react';
import { packagesData } from '../data/packagesData';
import { DISPLAY_PHONE, createWhatsAppUrl } from '../utils/whatsapp';
import JsonLd from '../components/JsonLd';

export default function PackageDetailPage() {
  const { slug } = useParams();
  const pkg = packagesData.find((p) => p.slug === slug);

  if (!pkg) {
    return <Navigate to="/packages" replace />;
  }

  const enquiryUrl = createWhatsAppUrl(`Hello Sivan Boys Tours & Travels, I would like to book or enquire about the ${pkg.title} from Rameswaram.`);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 pb-20">
      <JsonLd type="LocalBusiness" />

      {/* Header Banner */}
      <section className="bg-gradient-to-b from-sky-50 via-white to-[#F8FAFC] py-10 sm:py-14 border-b border-sky-100 px-4">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/packages"
            className="inline-flex items-center gap-1.5 text-xs text-sky-600 hover:text-sky-700 hover:underline mb-3 font-bold"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Packages</span>
          </Link>

          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-lg bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider border border-sky-200">
              {pkg.category}
            </span>
            <span className="text-xs text-slate-600 flex items-center gap-1 font-semibold">
              <Clock className="w-3.5 h-3.5 text-sky-600" />
              <span>Duration: {pkg.duration}</span>
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {pkg.title}
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-3xl leading-relaxed">
            {pkg.summary}
          </p>
        </div>
      </section>

      {/* Main Details Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-8 space-y-6">
            <div className="rounded-2xl overflow-hidden shadow-sm border border-sky-100 aspect-[16/9] bg-slate-100">
              <img
                src={pkg.heroImage}
                alt={pkg.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Itinerary Highlights */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-sky-100 shadow-sm space-y-6">
              <h2 className="text-lg font-bold text-slate-900">Key Highlights &amp; Inclusions</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {pkg.highlights.map((hl, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>

              {pkg.details && (
                <div className="pt-4 border-t border-sky-100 text-xs sm:text-sm text-slate-600 leading-relaxed space-y-3">
                  <h3 className="font-bold text-slate-900">Tour Description</h3>
                  <p>{pkg.details}</p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar Booking Box */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-sky-200 shadow-md space-y-5 sticky top-24">
              <div>
                <span className="text-[10px] font-bold text-sky-600 uppercase tracking-wider">Direct Island Service</span>
                <h3 className="text-base font-black text-slate-900 mt-1">Book This Tour</h3>
                <p className="text-xs text-slate-600 mt-1">
                  Get instant confirmation and custom vehicle options tailored to your family or group size.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <a
                  href={enquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enquire on WhatsApp</span>
                </a>

                <a
                  href={`tel:${DISPLAY_PHONE}`}
                  className="w-full py-3.5 px-4 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call +91 {DISPLAY_PHONE}</span>
                </a>
              </div>

              <div className="pt-4 border-t border-sky-100 space-y-2 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5 text-sky-600" />
                  <span>Transparent rates, no hidden fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-sky-600" />
                  <span>Doorstep pickup anywhere in Rameswaram</span>
                </div>
                <div className="flex items-center gap-2">
                  <Car className="w-3.5 h-3.5 text-sky-600" />
                  <span>Sedans, Innova, Tempo Travellers &amp; Buses</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

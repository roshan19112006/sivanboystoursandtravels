import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, MessageCircle } from 'lucide-react';
import { createWhatsAppUrl } from '../utils/whatsapp';

export default function GalleryModal({ image, isOpen, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !image) return null;

  const enquiryUrl = createWhatsAppUrl(`Hello Sivan Boys Tours & Travels, I am interested in visiting ${image.title} (${image.location || image.category}) seen in your gallery. Please share details.`);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 backdrop-blur-sm p-4 sm:p-6">
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Main Lightbox Box */}
      <div className="relative z-10 max-w-4xl w-full bg-white border border-sky-100 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        
        {/* Top bar with category & close */}
        <div className="flex justify-between items-center px-4 py-3 border-b border-sky-100 bg-sky-50/80">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-lg text-[11px] font-bold uppercase tracking-wider bg-sky-100 text-sky-800 border border-sky-200">
              {image.category}
            </span>
            <span className="text-xs text-slate-600 flex items-center gap-1 font-semibold">
              <MapPin className="w-3.5 h-3.5 text-sky-600" />
              {image.location || "Rameswaram"}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-sky-100 transition-colors"
            aria-label="Close image lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Display */}
        <div className="relative flex-1 bg-slate-950 flex items-center justify-center min-h-[300px] sm:min-h-[420px] overflow-hidden">
          <img
            src={image.src}
            alt={image.alt || image.title}
            className="max-h-[65vh] w-auto max-w-full object-contain mx-auto transition-transform"
          />

          {/* Prev Button */}
          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/90 hover:bg-sky-600 text-slate-800 hover:text-white transition-all shadow-lg"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/90 hover:bg-sky-600 text-slate-800 hover:text-white transition-all shadow-lg"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Bottom bar with description & CTA */}
        <div className="p-4 bg-white border-t border-sky-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div>
            <h3 className="text-sm sm:text-base font-extrabold text-slate-900">{image.title}</h3>
            <p className="text-xs text-slate-500">{image.alt}</p>
          </div>
          <a
            href={enquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1.5 transition-colors shadow-sm shrink-0"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Enquire For This Destination</span>
          </a>
        </div>

      </div>
    </div>
  );
}

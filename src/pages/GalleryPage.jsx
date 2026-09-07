import React, { useState } from 'react';
import { Camera, MapPin } from 'lucide-react';
import { galleryData } from '../data/galleryData';
import GalleryModal from '../components/GalleryModal';
import JsonLd from '../components/JsonLd';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleOpenLightbox = (image, index) => {
    setSelectedImage(image);
    setSelectedIndex(index);
  };

  const handlePrevImage = () => {
    if (!galleryData.length) return;
    const nextIdx = (selectedIndex - 1 + galleryData.length) % galleryData.length;
    setSelectedIndex(nextIdx);
    setSelectedImage(galleryData[nextIdx]);
  };

  const handleNextImage = () => {
    if (!galleryData.length) return;
    const nextIdx = (selectedIndex + 1) % galleryData.length;
    setSelectedIndex(nextIdx);
    setSelectedImage(galleryData[nextIdx]);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 pb-20">
      <JsonLd type="LocalBusiness" />

      {/* Header Banner */}
      <section className="py-12 sm:py-16 text-center px-4 border-b border-sky-100 bg-gradient-to-b from-sky-50 to-white">
        <div className="max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-sky-200 text-sky-700 text-xs font-bold uppercase tracking-widest shadow-sm">
            <Camera className="w-3.5 h-3.5 text-sky-600" />
            <span>Travel Photography</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Travel Moments With Sivan Boys Tours &amp; Travels
          </h1>

          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            Real photos of our trips, vehicles, pilgrimages, scenic landmarks, and memorable journeys.
          </p>
        </div>
      </section>

      {/* Responsive Grid (2 columns on mobile, 3 on tablet, 4 on desktop) */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex justify-between items-center mb-6 text-xs text-slate-500 px-1">
          <span>Showing <strong className="text-sky-700 font-bold">{galleryData.length}</strong> photos</span>
          <span className="hidden sm:inline text-slate-400">Tap any photo for full view</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
          {galleryData.map((img, index) => (
            <div
              key={img.id}
              onClick={() => handleOpenLightbox(img, index)}
              className="group bg-white rounded-2xl overflow-hidden border border-sky-100 hover:border-sky-300 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col active:scale-95"
            >
              <div className="relative aspect-[4/3] bg-sky-50 overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt || img.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-sky-600 transition-colors line-clamp-1">
                    {img.title}
                  </h3>
                  <p className="text-[10px] sm:text-[11px] text-slate-500 mt-1 flex items-center gap-1 truncate">
                    <MapPin className="w-3 h-3 text-sky-600 shrink-0" />
                    <span>{img.location || "Rameswaram"}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {galleryData.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-sm text-slate-600">No images found in the gallery.</p>
          </div>
        )}
      </section>

      {/* Fullscreen Lightbox Modal */}
      <GalleryModal
        isOpen={Boolean(selectedImage)}
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
        onPrev={handlePrevImage}
        onNext={handleNextImage}
      />
    </div>
  );
}

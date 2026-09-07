import React, { useState } from 'react';
import { Camera, MapPin, Filter } from 'lucide-react';
import { galleryData, GALLERY_CATEGORIES } from '../data/galleryData';
import GalleryModal from '../components/GalleryModal';
import JsonLd from '../components/JsonLd';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filteredImages = activeCategory === "ALL"
    ? galleryData
    : galleryData.filter(img => img.category.toUpperCase() === activeCategory.toUpperCase());

  const handleOpenLightbox = (image, index) => {
    setSelectedImage(image);
    setSelectedIndex(index);
  };

  const handlePrevImage = () => {
    const nextIdx = (selectedIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedIndex(nextIdx);
    setSelectedImage(filteredImages[nextIdx]);
  };

  const handleNextImage = () => {
    const nextIdx = (selectedIndex + 1) % filteredImages.length;
    setSelectedIndex(nextIdx);
    setSelectedImage(filteredImages[nextIdx]);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 pb-16">
      <JsonLd type="LocalBusiness" />

      {/* Header Banner */}
      <section className="py-12 sm:py-16 text-center px-4 border-b border-sky-100 bg-gradient-to-b from-sky-50 to-white">
        <div className="max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-sky-200 text-sky-700 text-xs font-bold uppercase tracking-widest shadow-sm">
            <Camera className="w-3.5 h-3.5 text-sky-600" />
            <span>Travel Photography</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Travel Moments With Sivan Boys Tours &amp; Travels
          </h1>

          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Explore destinations, vehicles, temples, scenic places and memorable journeys from our travels.
          </p>
        </div>
      </section>

      {/* Touch-Friendly Swipeable Filter Bar */}
      <section className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-sky-100 py-3.5 px-4 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none no-scrollbar">
            {GALLERY_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider uppercase whitespace-nowrap transition-all active:scale-95 ${
                    isActive
                      ? 'bg-sky-600 text-white shadow-md shadow-sky-600/20'
                      : 'bg-white text-slate-700 hover:text-sky-700 hover:bg-sky-50 border border-sky-200'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Responsive Grid (2 columns on mobile, 4 on desktop) */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex justify-between items-center mb-5 text-xs text-slate-500 px-1">
          <span>Showing <strong className="text-sky-700">{filteredImages.length}</strong> photo{filteredImages.length !== 1 ? 's' : ''} in <strong className="text-slate-800">{activeCategory}</strong></span>
          <span className="hidden sm:inline">Tap any photo for full view</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
          {filteredImages.map((img, index) => (
            <div
              key={img.id}
              onClick={() => handleOpenLightbox(img, index)}
              className="group bg-white rounded-2xl overflow-hidden border border-sky-100 hover:border-sky-300 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col active:scale-95"
            >
              <div className="relative aspect-[4/3] bg-sky-100 overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt || img.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                <span className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-md px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-bold text-sky-800 uppercase tracking-wider shadow-sm">
                  {img.category}
                </span>
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

        {filteredImages.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-sm text-slate-600">No images found in this category.</p>
            <button
              onClick={() => setActiveCategory("ALL")}
              className="mt-4 px-4 py-2 rounded-xl bg-sky-600 text-white font-bold text-xs shadow-md"
            >
              View All Photos
            </button>
          </div>
        )}
      </section>

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

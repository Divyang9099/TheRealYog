import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Gallery images mapping
  const images = [
    { id: 1, localSrc: '/gallery/WhatsApp Image 2026-04-29 at 1.48.32 PM (1).jpeg', alt: 'Outdoor class with 11 students' },
    { id: 2, localSrc: '/gallery/WhatsApp Image 2026-04-29 at 1.48.32 PM.jpeg', alt: 'Yoga pose demonstration outdoors' },
    { id: 3, localSrc: '/gallery/WhatsApp Image 2026-04-29 at 1.48.33 PM (1).jpeg', alt: 'Group meditation session' },
    { id: 4, localSrc: '/gallery/WhatsApp Image 2026-04-29 at 1.48.33 PM.jpeg', alt: 'Yoga workshop gathering' },
    { id: 5, localSrc: '/gallery/WhatsApp Image 2026-04-29 at 1.48.34 PM.jpeg', alt: 'Advanced asana practice' },
    { id: 6, localSrc: '/gallery/WhatsApp Image 2026-04-29 at 1.58.38 PM.jpeg', alt: 'School yoga session with children' },
    { id: 7, localSrc: '/gallery/WhatsApp Image 2026-04-29 at 1.58.43 PM.jpeg', alt: 'Corporate wellness seminar' },
    { id: 8, localSrc: '/gallery/WhatsApp Image 2026-04-29 at 1.58.46 PM.jpeg', alt: 'Naturopathy consultation' },
  ];

  return (
    <section className="py-24 bg-white" id="gallery">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-forest-500 uppercase tracking-widest mb-3">Visual Journey</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-forest-900 tracking-tight">Our Gallery</h3>
          <p className="text-sand-700 mt-4 max-w-2xl mx-auto">
            Explore moments from our outdoor classes, corporate workshops, and deep meditation sessions.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
            {images.map((img) => (
              <div 
                key={img.id} 
                className="break-inside-avoid cursor-zoom-in overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group"
                onClick={() => setSelectedImage(img)}
              >
                {/* 
                  Using a standard img tag for local preview since the Cloudinary account isn't hooked up yet. 
                  To fully use cloudinary-react once uploaded, swap the <img> below with:
                  <Image publicId={img.publicId} className="..." alt={img.alt} />
                */}
                <img 
                  src={img.localSrc} 
                  alt={img.alt} 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
      </div>

      {/* Full-Screen Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 p-3 rounded-full z-10"
              onClick={() => setSelectedImage(null)}
              aria-label="Close Lightbox"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Lightbox Image */}
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-6xl max-h-full w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
            >
              <img 
                src={selectedImage.localSrc} 
                alt={selectedImage.alt} 
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl border border-white/10"
              />
              <p className="text-white/90 text-center mt-6 text-lg md:text-xl font-medium tracking-wide">
                {selectedImage.alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CDN = 'https://res.cloudinary.com/dhowmzdkh/image/upload/f_auto,q_auto';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { id: 1, src: `${CDN}/gallery-img-1`, alt: 'Outdoor class with students' },
    { id: 2, src: `${CDN}/gallery-img-2`, alt: 'Yoga pose demonstration outdoors' },
    { id: 3, src: `${CDN}/gallery-img-3`, alt: 'Group meditation session' },
    { id: 4, src: `${CDN}/gallery-img-4`, alt: 'Yoga workshop gathering' },
    { id: 5, src: `${CDN}/gallery-img-5`, alt: 'Advanced asana practice' },
    { id: 6, src: `${CDN}/gallery-img-6`, alt: 'School yoga session with children' },
    { id: 7, src: `${CDN}/gallery-img-7`, alt: 'Corporate wellness seminar' },
    { id: 8, src: `${CDN}/gallery-img-8`, alt: 'Naturopathy consultation session' },
  ];

  return (
    <section className="py-12 md:py-24 bg-white" id="gallery">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-xs md:text-sm font-bold text-forest-500 uppercase tracking-widest mb-2">Visual Journey</h2>
          <h3 className="text-2xl md:text-5xl font-bold text-forest-900 tracking-tight">Our Gallery</h3>
          <p className="text-sand-700 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            Explore moments from our outdoor classes, corporate workshops, and deep meditation sessions.
          </p>
        </div>

        <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-6 space-y-3 md:space-y-6">
          {images.map((img) => (
            <div
              key={img.id}
              className="break-inside-avoid cursor-zoom-in overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group"
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img.src}
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
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 p-3 rounded-full z-10"
              onClick={() => setSelectedImage(null)}
              aria-label="Close Lightbox"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-5xl max-h-full w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[85vh] object-contain rounded-2xl shadow-2xl border border-white/10"
              />
              <p className="text-white/90 text-center mt-5 text-base md:text-lg font-semibold tracking-wide">
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

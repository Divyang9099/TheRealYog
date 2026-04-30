import React, { useRef, useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

/* ─── Full-Screen Lightbox ─────────────────────────────────────────────── */
const VideoLightbox = ({ video, onClose }) => {
  const videoRef = useRef(null);

  // Auto-play when lightbox opens
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
    // Prevent body scroll while open
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  // Close on Escape key
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      className="fixed inset-0 z-[200] flex items-center justify-center"
      style={{ background: 'rgba(0,0,0,0.94)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}   /* click backdrop → close */
    >
      {/* Video container — stops propagation so clicking video itself doesn't close */}
      <motion.div
        initial={{ scale: 0.88, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.88, y: 30 }}
        transition={{ type: 'spring', damping: 26, stiffness: 280 }}
        className="relative w-full max-w-sm md:max-w-md lg:max-w-lg mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white/70 hover:text-white flex items-center gap-2 text-sm font-medium transition-colors"
          aria-label="Close video"
        >
          <span>Close</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Video — 9:16 portrait */}
        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-black" style={{ aspectRatio: '9/16' }}>
          <video
            ref={videoRef}
            src={video.src}
            className="w-full h-full object-contain"
            controls
            autoPlay
            playsInline
            loop
          />
        </div>

        {/* Title */}
        <p className="text-white text-center font-semibold mt-4 text-sm md:text-base px-2">
          {video.title}
        </p>
      </motion.div>
    </motion.div>
  );
};

/* ─── Lazy Thumbnail Card ──────────────────────────────────────────────── */
const VideoCard = ({ video, onPlay }) => {
  const containerRef = useRef(null);
  const thumbVideoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  // Lazy-load thumbnail video only when near viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) { setIsVisible(true); observer.disconnect(); }
      },
      { rootMargin: '300px' }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Preview on hover (desktop)
  useEffect(() => {
    if (!thumbVideoRef.current) return;
    if (hovering) thumbVideoRef.current.play().catch(() => {});
    else { thumbVideoRef.current.pause(); thumbVideoRef.current.currentTime = 0; }
  }, [hovering]);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[9/16] bg-forest-800 rounded-2xl overflow-hidden cursor-pointer group shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
      onClick={() => onPlay(video)}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {/* Lazy video thumbnail */}
      {isVisible && (
        <video
          ref={thumbVideoRef}
          src={video.src}
          className="w-full h-full object-cover"
          muted
          playsInline
          preload="metadata"
          loop
        />
      )}

      {/* Play button overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/25 group-hover:bg-black/10 transition-colors duration-300">
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/25 backdrop-blur-md flex items-center justify-center text-white border border-white/40 shadow-lg group-hover:scale-110 group-hover:bg-white/35 transition-all duration-300">
          {/* Fullscreen icon */}
          <svg className="w-5 h-5 md:w-6 md:h-6 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* Fullscreen hint badge */}
      <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm rounded-full px-2 py-0.5 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
          <path d="M8 3H5a2 2 0 00-2 2v3M21 8V5a2 2 0 00-2-2h-3M3 16v3a2 2 0 002 2h3M16 21h3a2 2 0 002-2v-3" />
        </svg>
        <span className="text-white text-[9px] font-medium">Fullscreen</span>
      </div>

      {/* Label */}
      <div className="absolute bottom-0 left-0 right-0 p-3 pt-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
        <p className="text-white text-[11px] md:text-sm font-semibold tracking-wide drop-shadow-md leading-snug">
          {video.title}
        </p>
      </div>
    </div>
  );
};

/* ─── Section ──────────────────────────────────────────────────────────── */
const VideoSection = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const videos = [
    { id: 1, src: 'https://res.cloudinary.com/dhowmzdkh/video/upload/v1777523452/WhatsApp_Video_2026-04-29_at_1.48.26_PM.mp4', title: 'Overhead Arm Stretching Exercise' },
    { id: 2, src: '/videos/WhatsApp Video 2026-04-29 at 1.48.27 PM (1).mp4', title: 'Core & Balance Flow' },
    { id: 3, src: 'https://res.cloudinary.com/dhowmzdkh/video/upload/v1777523460/WhatsApp_Video_2026-04-29_at_1.48.27_PM.mp4', title: 'Morning Flexibility Routine' },
    { id: 4, src: 'https://res.cloudinary.com/dhowmzdkh/video/upload/v1777523462/WhatsApp_Video_2026-04-29_at_1.58.31_PM.mp4', title: 'Pranayama Breathing Technique' },
    { id: 5, src: 'https://res.cloudinary.com/dhowmzdkh/video/upload/v1777523464/WhatsApp_Video_2026-04-29_at_1.58.49_PM.mp4', title: 'Advanced Asana Demonstration' },
    { id: 6, src: 'https://res.cloudinary.com/dhowmzdkh/video/upload/v1777523467/WhatsApp_Video_2026-04-29_at_1.58.52_PM.mp4', title: 'Corporate Desk Stretches' },
  ];

  const handleClose = useCallback(() => setActiveVideo(null), []);

  return (
    <>
      <section className="py-16 md:py-24 bg-forest-900" id="reels">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-xs md:text-sm font-bold text-sand-400 uppercase tracking-widest mb-3">
              Shorts & Reels
            </h2>
            <h3 className="text-2xl md:text-5xl font-bold text-white tracking-tight">
              Practice Anywhere
            </h3>
            <p className="text-forest-100 mt-3 max-w-xl mx-auto text-sm md:text-base">
              Quick, mobile-friendly yoga routines you can follow along with on the go.{' '}
              <span className="text-amber-300 font-medium">Tap any video to watch fullscreen.</span>
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-5 max-w-7xl mx-auto">
            {videos.map((vid) => (
              <VideoCard key={vid.id} video={vid} onPlay={setActiveVideo} />
            ))}
          </div>
        </div>
      </section>

      {/* Full-screen lightbox */}
      <AnimatePresence>
        {activeVideo && (
          <VideoLightbox video={activeVideo} onClose={handleClose} />
        )}
      </AnimatePresence>
    </>
  );
};

export default VideoSection;

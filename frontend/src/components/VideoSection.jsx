import React, { useRef, useState, useEffect } from 'react';

const LazyVideo = ({ src, alt }) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Intersection Observer for Lazy Loading the video source
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '200px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-[9/16] bg-forest-800 rounded-2xl overflow-hidden cursor-pointer group shadow-lg hover:shadow-2xl transition-all"
      onClick={togglePlay}
    >
      {/* Only render the video element if it has scrolled near the viewport */}
      {isVisible && (
        <video
          ref={videoRef}
          src={src}
          className="w-full h-full object-cover"
          loop
          muted
          playsInline
          preload="metadata"
        />
      )}
      
      {/* Play/Pause Overlay */}
      <div className={`absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity duration-300 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/40 shadow-lg">
          {isPlaying ? (
             <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M6 4h4v16H6zm8 0h4v16h-4z"/></svg>
          ) : (
            <svg className="w-5 h-5 md:w-6 md:h-6 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          )}
        </div>
      </div>
      
      {/* Gradient Label */}
      <div className="absolute bottom-0 left-0 right-0 p-4 pt-12 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
        <p className="text-white text-xs md:text-sm font-semibold tracking-wide drop-shadow-md leading-snug">
          {alt}
        </p>
      </div>
    </div>
  );
};

const VideoSection = () => {
  const videos = [
    { id: 1, src: '/videos/WhatsApp Video 2026-04-29 at 1.48.26 PM.mp4', title: 'Overhead Arm Stretching Exercise' },
    { id: 2, src: '/videos/WhatsApp Video 2026-04-29 at 1.48.27 PM (1).mp4', title: 'Core & Balance Flow' },
    { id: 3, src: '/videos/WhatsApp Video 2026-04-29 at 1.48.27 PM.mp4', title: 'Morning Flexibility Routine' },
    { id: 4, src: '/videos/WhatsApp Video 2026-04-29 at 1.58.31 PM.mp4', title: 'Pranayama Breathing Techinque' },
    { id: 5, src: '/videos/WhatsApp Video 2026-04-29 at 1.58.49 PM.mp4', title: 'Advanced Asana Demonstration' },
    { id: 6, src: '/videos/WhatsApp Video 2026-04-29 at 1.58.52 PM.mp4', title: 'Corporate Desk Stretches' },
  ];

  return (
    <section className="py-24 bg-forest-900" id="reels">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold text-sand-400 uppercase tracking-widest mb-3">Shorts & Reels</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Practice Anywhere</h3>
          <p className="text-forest-100 mt-4 max-w-xl mx-auto text-sm md:text-base">
            Quick, mobile-friendly yoga routines you can follow along with on the go. Tap any video to play.
          </p>
        </div>

        {/* Highly optimized 2-column grid for mobile, scaling up for larger screens */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-5 max-w-7xl mx-auto">
          {videos.map((vid) => (
            <LazyVideo key={vid.id} src={vid.src} alt={vid.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

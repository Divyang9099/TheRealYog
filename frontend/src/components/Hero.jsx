import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: i * 0.15, ease: 'easeOut' },
    }),
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden"
      style={{ height: '100svh', minHeight: '600px' }}
    >
      {/* ── Full-screen Background Video (no overlay) ── */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* ── Subtle left-side gradient so text is readable ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          background:
            'linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.2) 55%, transparent 100%)',
        }}
      />

      {/* ── Text Content — top-left ── */}
      <div
        className="absolute left-0 top-0 h-full flex flex-col justify-start pt-24 sm:pt-28 lg:justify-center lg:pt-0 px-6 sm:px-10 lg:px-16 max-w-xl lg:max-w-2xl"
        style={{ zIndex: 2 }}
      >
        {/* Badge */}
        <motion.div
          custom={0}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="mb-5 inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full bg-black/30 backdrop-blur-sm border border-yellow-400/40"
        >
          <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
          <span className="text-yellow-400 text-xs font-semibold tracking-widest uppercase">
            Certified Since 1998
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          custom={1}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="font-serif text-white leading-tight mb-4"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 3.25rem)' }}
        >
          20+ Years of Traditional{' '}
          <span className="italic text-amber-300">Yoga Mastery</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          custom={2}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-gray-200 leading-relaxed mb-8"
          style={{ fontSize: 'clamp(0.85rem, 1.5vw, 1.05rem)' }}
        >
          Certified by Lakulish Institute and Gujarat State Yog Board.
          Experience authentic wellness through Naturopathy and Pranayama.
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={3}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-3"
        >
          <a
            href="#contact"
            className="px-6 py-3 bg-white text-green-900 font-bold rounded-full shadow-lg hover:bg-amber-50 hover:scale-105 transition-all duration-300 text-sm"
          >
            Book a Trial Session
          </a>
          <a
            href="#gallery"
            className="px-6 py-3 bg-black/20 backdrop-blur-sm border-2 border-white text-white font-bold rounded-full hover:bg-white/20 transition-all duration-300 text-sm"
          >
            View Gallery
          </a>
        </motion.div>
      </div>

      {/* ── Uncle photo — absolutely pinned bottom-right ── */}
      <motion.div
        variants={imageVariants}
        initial="hidden"
        animate="visible"
        className="absolute bottom-0 right-0"
        style={{ zIndex: 1 }}
      >
        <img
          src="/mansukh-nobg.png"
          alt="Mansukhbhai Gujarati – Yog Coach performing Sukhasana"
          className="block"
          style={{
            height: '50svh',      /* always fills bottom 50% of hero regardless of device */
            width: 'auto',
            maxWidth: '80vw',
            objectFit: 'contain',
            objectPosition: 'bottom center',
          }}
        />
      </motion.div>

    </section>

  );
};

export default Hero;

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// ─── Cloudinary hero background (f_auto, q_auto, w_1920 for performance) ───
const HERO_BG_URL =
  'https://res.cloudinary.com/dhowmzdkh/image/upload/f_auto,q_auto,w_1920/himalayan-hero-bg';
const HERO_BG_FALLBACK = '/himalayan-hero-bg.png';

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: 'easeOut' },
  }),
};

const Hero = () => {
  // Tracks whether the mobile navbar overlay is open
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const handler = (e) => setNavOpen(e.detail.isOpen);
    window.addEventListener('navbar-menu-toggle', handler);
    return () => window.removeEventListener('navbar-menu-toggle', handler);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden"
      style={{ height: '100svh', minHeight: '600px' }}
    >
      {/* ── AI-Generated Himalayan Sunrise Background Image ── */}
      <img
        src={HERO_BG_URL}
        alt=""
        aria-hidden="true"
        onError={(e) => { e.currentTarget.src = HERO_BG_FALLBACK; }}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0, objectPosition: 'center center' }}
        fetchPriority="high"
      />

      {/* ── Left-to-right gradient overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          background:
            'linear-gradient(to right, rgba(0,0,0,0.52) 0%, rgba(0,0,0,0.20) 50%, transparent 100%)',
        }}
      />

      {/* ── Bottom vignette ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          background: 'linear-gradient(to top, rgba(0,0,0,0.58) 0%, transparent 52%)',
        }}
      />

      {/* ══════════════════════════════════════════════
          MOBILE LAYOUT  (hidden on lg+)
          Coach image right-aligned (or left when nav open),
          text block pinned to the bottom.
      ══════════════════════════════════════════════ */}
      <div
        className="lg:hidden absolute bottom-0 left-0 w-full flex flex-col"
        style={{ zIndex: 2 }}
      >
        {/* ── Coach image wrapper: slides left when nav opens ── */}
        <div
          className="w-full transition-all duration-500 ease-in-out"
          style={{ display: 'flex', justifyContent: navOpen ? 'flex-start' : 'flex-end' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
          >
            <img
              src="https://res.cloudinary.com/dhowmzdkh/image/upload/f_auto,q_auto/v1777523439/mansukh-nobg.png"
              alt="Mansukhbhai Gujarati – Yog Coach"
              className="block"
              style={{
                height: '38svh',
                width: 'auto',
                maxWidth: '62vw',
                objectFit: 'contain',
                objectPosition: 'bottom',
                filter: 'drop-shadow(0 0 28px rgba(255,200,80,0.22))',
                transition: 'filter 0.5s',
              }}
            />
          </motion.div>
        </div>

        {/* ── Text block — full width, pinned at the bottom ── */}
        <div className="w-full px-5 pb-8 pt-2">
          {/* Badge */}
          <motion.div
            custom={0}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="mb-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm border border-yellow-400/40"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
            <span className="text-yellow-400 text-[10px] font-semibold tracking-widest uppercase">
              Certified Since 1998
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            custom={1}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="font-serif text-white leading-tight mb-2"
            style={{ fontSize: 'clamp(1.5rem, 5.5vw, 2.1rem)' }}
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
            className="text-gray-300 leading-relaxed mb-5 text-sm"
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
              className="px-5 py-2.5 bg-white text-green-900 font-bold rounded-full shadow-lg hover:bg-amber-50 hover:scale-105 transition-all duration-300 text-sm"
            >
              Book a Trial Session
            </a>
            <a
              href="#gallery"
              className="px-5 py-2.5 bg-black/20 backdrop-blur-sm border-2 border-white text-white font-bold rounded-full hover:bg-white/20 transition-all duration-300 text-sm"
            >
              View Gallery
            </a>
          </motion.div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          DESKTOP LAYOUT  (hidden on < lg)
          Text left-center, coach pinned bottom-right.
      ══════════════════════════════════════════════ */}
      <div
        className="hidden lg:flex absolute left-0 top-0 h-full flex-col justify-center px-16 max-w-2xl"
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

      {/* Coach photo — desktop only, pinned bottom-right */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
        className="hidden lg:block absolute bottom-0 right-0"
        style={{ zIndex: 2 }}
      >
        <img
          src="https://res.cloudinary.com/dhowmzdkh/image/upload/f_auto,q_auto/v1777523439/mansukh-nobg.png"
          alt="Mansukhbhai Gujarati – Yog Coach performing Sukhasana"
          className="block"
          style={{
            height: '50svh',
            width: 'auto',
            maxWidth: '80vw',
            objectFit: 'contain',
            objectPosition: 'bottom center',
            filter: 'drop-shadow(0 0 32px rgba(255,200,80,0.18))',
          }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ─── Inline SVG Icons ─────────────────────────────────────────────────── */
const icons = {
  Home: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
      <path d="M9 21V12h6v9" />
    </svg>
  ),
  Programs: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <circle cx="12" cy="8" r="4" />
      <path d="M6 20c0-3.314 2.686-6 6-6s6 2.686 6 6" />
      <path d="M17 8c1.5-.5 3 .5 3 2" />
      <path d="M7 8c-1.5-.5-3 .5-3 2" />
    </svg>
  ),
  About: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v4M12 16h.01" />
    </svg>
  ),
  Gallery: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="M21 15l-5-5L5 21" />
    </svg>
  ),
  Contact: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    </svg>
  ),
};

const ArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

const LeafIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-green-400">
    <path d="M12 2C6 2 3 8 3 12c0 5 4 8 9 10 5-2 9-5 9-10 0-4-3-10-9-10z" />
    <path d="M12 2v20" />
  </svg>
);
/* ──────────────────────────────────────────────────────────────────────── */

const navLinks = [
  { name: 'Home',     path: '#' },
  { name: 'Programs', path: '#programs' },
  { name: 'About',    path: '#about' },
  { name: 'Gallery',  path: '#gallery' },
  { name: 'Contact',  path: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen]         = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMenu = (val) => {
    setIsOpen(val);
    window.dispatchEvent(
      new CustomEvent('navbar-menu-toggle', { detail: { isOpen: val } })
    );
  };

  /* spring config for the drawer */
  const drawerVariants = {
    hidden:  { x: '100%', opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: 'spring', damping: 26, stiffness: 260 },
    },
    exit: {
      x: '100%',
      opacity: 0,
      transition: { type: 'spring', damping: 30, stiffness: 300 },
    },
  };

  const itemVariants = {
    hidden:  { opacity: 0, x: 40 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.08 + i * 0.07, duration: 0.28, ease: 'easeOut' },
    }),
  };

  return (
    <>
      {/* ── Top Header Bar ─────────────────────────────────────────── */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? 'bg-white shadow-md py-3' : 'py-5'
        }`}
        style={
          !isScrolled
            ? {
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.34) 0%, rgba(0,0,0,0.06) 100%)',
                backdropFilter: 'blur(6px)',
              }
            : {}
        }
      >
        <div className="container mx-auto px-5 lg:px-12 flex justify-between items-center">
          {/* Logo */}
          <a
            href="#"
            className={`flex items-center gap-2 text-xl font-bold tracking-tight transition-colors duration-300 z-50 relative select-none ${
              isOpen ? 'text-white' : isScrolled ? 'text-green-900' : 'text-white drop-shadow-lg'
            }`}
          >
            <LeafIcon />
            TheRealYoga
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className={`text-sm font-medium transition-colors hover:text-amber-400 ${
                  isScrolled
                    ? 'text-green-900 hover:text-green-700'
                    : 'text-white/90 drop-shadow-md'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-green-700 text-white px-6 py-2 rounded-full font-medium shadow hover:bg-green-800 hover:shadow-md transition-all duration-300"
            >
              Book Now
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden relative z-50 flex flex-col items-center justify-center w-10 h-10 gap-[5px] focus:outline-none"
            onClick={() => toggleMenu(!isOpen)}
            aria-label="Toggle Navigation"
          >
            <span
              className={`block w-6 h-[2px] rounded-full transition-all duration-300 origin-center ${
                isOpen
                  ? 'bg-white rotate-45 translate-y-[7px]'
                  : isScrolled
                  ? 'bg-green-900'
                  : 'bg-white'
              }`}
            />
            <span
              className={`block h-[2px] rounded-full transition-all duration-300 ${
                isOpen ? 'w-0 opacity-0' : 'w-6'
              } ${isScrolled ? 'bg-green-900' : 'bg-white'}`}
            />
            <span
              className={`block w-6 h-[2px] rounded-full transition-all duration-300 origin-center ${
                isOpen
                  ? 'bg-white -rotate-45 -translate-y-[7px]'
                  : isScrolled
                  ? 'bg-green-900'
                  : 'bg-white'
              }`}
            />
          </button>
        </div>
      </header>

      {/* ── Mobile Half-Screen Drawer ───────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dimmed left backdrop — click to close */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 md:hidden"
              style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(3px)' }}
              onClick={() => toggleMenu(false)}
            />

            {/* Drawer panel — slides from right, 78 vw wide */}
            <motion.aside
              key="drawer"
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 h-full z-50 md:hidden flex flex-col"
              style={{
                width: '78vw',
                maxWidth: '320px',
                background:
                  'linear-gradient(165deg, rgba(3,22,14,0.98) 0%, rgba(6,38,22,0.97) 55%, rgba(12,28,20,0.98) 100%)',
                backdropFilter: 'blur(20px)',
                borderLeft: '1px solid rgba(255,255,255,0.07)',
                boxShadow: '-12px 0 60px rgba(0,0,0,0.55)',
              }}
            >
              {/* ── Drawer Header ── */}
              <div className="flex items-center justify-between px-6 pt-6 pb-5 border-b border-white/8">
                <div className="flex items-center gap-2">
                  <LeafIcon />
                  <span className="text-white font-bold text-lg tracking-tight">
                    TheRealYoga
                  </span>
                </div>
                <button
                  onClick={() => toggleMenu(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white/8 text-white/70 hover:bg-white/15 hover:text-white transition-all"
                  aria-label="Close menu"
                >
                  <CloseIcon />
                </button>
              </div>

              {/* ── Subtle tagline ── */}
              <p className="px-6 pt-3 pb-1 text-[10px] tracking-[0.18em] uppercase text-amber-400/70 font-medium">
                Authentic Wellness
              </p>

              {/* ── Nav Links ── */}
              <nav className="flex flex-col px-4 mt-2 flex-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.path}
                    custom={i}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="group flex items-center gap-4 px-3 py-3.5 rounded-xl text-white/75 hover:text-white hover:bg-white/8 transition-all duration-200"
                    onClick={() => toggleMenu(false)}
                  >
                    {/* Icon bubble */}
                    <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-green-900/60 text-green-300 group-hover:bg-green-700/60 group-hover:text-green-200 transition-all duration-200 shrink-0">
                      {icons[link.name]}
                    </span>

                    {/* Label */}
                    <span className="flex-1 font-medium text-[15px] tracking-wide">
                      {link.name}
                    </span>

                    {/* Arrow */}
                    <span className="text-white/20 group-hover:text-amber-400 group-hover:translate-x-1 transition-all duration-200">
                      <ArrowRight />
                    </span>
                  </motion.a>
                ))}
              </nav>

              {/* ── Divider ── */}
              <div className="mx-6 border-t border-white/8 my-3" />

              {/* ── CTA Button ── */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{ delay: 0.38, duration: 0.28 }}
                className="px-5 pb-5"
              >
                <a
                  href="#contact"
                  onClick={() => toggleMenu(false)}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl font-bold text-[15px] text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  style={{
                    background: 'linear-gradient(135deg, #15803d 0%, #166534 100%)',
                    boxShadow: '0 4px 24px rgba(21,128,61,0.40)',
                  }}
                >
                  {/* Calendar icon */}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                  </svg>
                  Book a Trial Session
                </a>
              </motion.div>

              {/* ── Social quick links ── */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.46 }}
                className="flex items-center justify-center gap-4 pb-6"
              >
                {/* WhatsApp */}
                <a
                  href="https://wa.me/919099210660"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-white/8 text-white/50 hover:bg-green-600/40 hover:text-white transition-all"
                  aria-label="WhatsApp"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
                {/* Instagram */}
                <a
                  href="https://instagram.com/therealyog.in"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-white/8 text-white/50 hover:bg-pink-600/40 hover:text-white transition-all"
                  aria-label="Instagram"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r=".5" fill="currentColor" />
                  </svg>
                </a>
                {/* YouTube */}
                <a
                  href="https://www.youtube.com/@TheRealYog/videos"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-white/8 text-white/50 hover:bg-red-600/40 hover:text-white transition-all"
                  aria-label="YouTube"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </motion.div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

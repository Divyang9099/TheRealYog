import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '#' },
    { name: 'Programs', path: '#programs' },
    { name: 'About', path: '#about' },
    { name: 'Gallery', path: '#gallery' },
    { name: 'Contact', path: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-forest-900 tracking-tight">
          TheRealYoga
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className={`text-sm font-medium transition-colors hover:text-forest-600 ${
                isScrolled ? 'text-forest-900' : 'text-white drop-shadow-md'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-forest-600 text-white px-6 py-2 rounded-full font-medium shadow-sm hover:bg-forest-700 hover:shadow-md transition-all duration-300"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile Hamburger Icon */}
        <button
          className="md:hidden flex flex-col items-center justify-center space-y-1.5 w-8 h-8 z-50 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation"
        >
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              isScrolled || isOpen ? 'bg-forest-900' : 'bg-forest-900'
            } ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
          ></span>
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              isScrolled || isOpen ? 'bg-forest-900' : 'bg-forest-900'
            } ${isOpen ? 'opacity-0' : ''}`}
          ></span>
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              isScrolled || isOpen ? 'bg-forest-900' : 'bg-forest-900'
            } ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
          ></span>
        </button>
      </div>

      {/* Mobile Slide-in Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Slide-in panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-50 p-6 flex flex-col md:hidden"
            >
              <div className="flex justify-end mb-8">
                {/* Spacer for the close button which is absolutely positioned */}
                <div className="h-8 w-8"></div>
              </div>
              
              <nav className="flex flex-col space-y-6 flex-grow">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.path}
                    className="text-lg font-medium text-forest-900 hover:text-forest-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
              
              <div className="mt-auto pt-6 border-t border-sand-300">
                <a
                  href="#contact"
                  className="w-full block text-center bg-forest-600 text-white px-6 py-3 rounded-full font-medium shadow-md hover:bg-forest-700 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Book Now
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

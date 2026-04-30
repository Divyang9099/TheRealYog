import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

const BiographyPage = () => {
  const timeline = [
    { year: '1998', title: 'Teaching Journey Begins', desc: 'Mansukhbhai Gujarati started his first yoga classes in Surat, Gujarat, with a small group of dedicated students seeking holistic wellness.' },
    { year: '2001', title: 'Diploma — First Class Honours', desc: 'Earned a First Class Diploma in Yoga Education from Bhavnagar University, establishing his academic foundation in classical yoga pedagogy.' },
    { year: '2004', title: '"B" Grade Certification — Lakulish Institute', desc: 'Received the prestigious "B" Grade Certification from the Lakulish Institute of Yoga & Human Consciousness, one of India\'s most respected yoga bodies.' },
    { year: '2007', title: 'Gujarat State Yog Board Recognition', desc: 'Officially recognised by the Gujarat State Yog Board for excellence in teaching Pranayama and Shatkarma purification practices.' },
    { year: '2010', title: 'School Yoga Initiative', desc: 'Launched a structured yoga program for schools across South Gujarat, eventually reaching over 40 schools and 8,000+ students annually.' },
    { year: '2014', title: 'Corporate Wellness Programs', desc: 'Extended services to diamond factories and corporate offices in Surat, helping workers combat occupational stress and posture-related ailments.' },
    { year: '2018', title: 'Naturopathy Integration', desc: 'Completed advanced training in Naturopathy and began offering personalised healing consultations combining diet therapy with yogic science.' },
    { year: '2024', title: '26 Years · Still Growing', desc: 'Today, with over 26 years of practice, Mansukhbhai continues to inspire thousands through workshops, YouTube, and one-on-one sessions.' },
  ];

  const certifications = [
    'Diploma in Yoga Education — Bhavnagar University (First Class)',
    '"B" Grade Certification — Lakulish Institute of Yoga',
    'Certified Trainer — Gujarat State Yog Board',
    'Naturopathy Practitioner — Advanced Certification',
    'Pranayama & Shatkarma Specialist',
    'School Yoga Educator — Certified by State Board',
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-sand-50 pt-20">

        {/* Hero Banner */}
        <div
          className="relative w-full h-64 md:h-96 flex items-end overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #064e3b 0%, #065f46 60%, #047857 100%)' }}
        >
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'radial-gradient(circle at 70% 50%, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
          <img
            src="https://res.cloudinary.com/dhowmzdkh/image/upload/v1777523430/uncle-headshot.jpg"
            alt="Mansukhbhai Gujarati"
            className="absolute right-0 bottom-0 h-full w-auto object-contain object-bottom opacity-70 md:opacity-90"
          />
          <div className="relative z-10 px-6 md:px-16 pb-8 md:pb-12 max-w-2xl">
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="text-amber-300 text-xs font-bold tracking-widest uppercase mb-2">Full Biography</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Mansukhbhai Gujarati
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="text-green-200 text-sm md:text-base mt-2">
              Yoga Master · Naturopath · 26+ Years of Transformational Teaching
            </motion.p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-20">

          {/* Intro */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="prose prose-lg max-w-none mb-16">
            <p className="text-lg md:text-xl text-sand-800 leading-relaxed mb-6">
              For over two and a half decades, <strong className="text-forest-900">Mansukhbhai Gujarati</strong> has been a beacon of holistic health and authentic yogic wisdom in South Gujarat. His journey is not just that of a teacher — it is a living testament to the transformative power of traditional Indian wellness practices applied to modern life.
            </p>
            <p className="text-base md:text-lg text-sand-800 leading-relaxed mb-6">
              Born and raised in Surat, Mansukhbhai was drawn to yoga from an early age, captivated by the philosophy that true health encompasses the body, mind, and spirit. His formal training began at Bhavnagar University, where he earned a <strong className="text-forest-900">First Class Diploma in Yoga Education</strong>, followed by the prestigious <strong className="text-forest-900">"B" Grade Certification from the Lakulish Institute</strong> — one of India's most revered yoga institutions.
            </p>
            <p className="text-base md:text-lg text-sand-800 leading-relaxed">
              What sets Mansukhbhai apart is his unwavering commitment to authenticity. He teaches classical, textbook-accurate techniques rooted in the Hatha Yoga tradition, Pranayama science, and the Shatkarma purification methods — not diluted or commercialised versions. His students — from school children to diamond factory workers to corporate professionals — all receive the same depth of attention and genuine care.
            </p>
          </motion.div>

          {/* Timeline */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <h2 className="text-2xl md:text-3xl font-bold text-forest-900 mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-amber-400 rounded inline-block" />
              Journey Through Time
            </h2>
            <div className="relative">
              <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-forest-200" />
              <div className="space-y-8">
                {timeline.map((item, i) => (
                  <motion.div key={item.year}
                    initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i }}
                    className="relative pl-14 md:pl-24">
                    <div className="absolute left-0 md:left-4 top-1 w-8 h-8 bg-forest-600 text-white rounded-full flex items-center justify-center text-xs font-bold shadow-md">
                      {i + 1}
                    </div>
                    <div className="bg-white rounded-2xl p-5 md:p-6 shadow-sm border border-sand-200 hover:shadow-md transition-shadow">
                      <span className="text-amber-500 text-xs font-bold tracking-widest uppercase">{item.year}</span>
                      <h3 className="text-base md:text-lg font-bold text-forest-900 mt-1 mb-2">{item.title}</h3>
                      <p className="text-sand-700 text-sm md:text-base leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <div className="mt-16 bg-forest-900 rounded-3xl p-8 md:p-10">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-amber-400">✦</span> Certifications & Credentials
            </h2>
            <ul className="space-y-3">
              {certifications.map((cert, i) => (
                <motion.li key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * i }}
                  className="flex items-start gap-3 text-green-100 text-sm md:text-base">
                  <span className="text-amber-400 mt-0.5 shrink-0">✓</span>
                  {cert}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Teaching Philosophy */}
          <div className="mt-12 bg-amber-50 border border-amber-200 rounded-3xl p-8 md:p-10">
            <h2 className="text-xl md:text-2xl font-bold text-forest-900 mb-4">Teaching Philosophy</h2>
            <blockquote className="text-forest-800 text-base md:text-lg leading-relaxed italic border-l-4 border-amber-400 pl-6">
              "Yoga is not exercise. It is a complete science of living. When you breathe correctly, think correctly, and live in alignment with nature — disease cannot enter. My goal is not to teach yoga. My goal is to help every student rediscover their own natural state of vibrant health."
            </blockquote>
            <p className="text-sand-700 text-sm mt-4 text-right">— Mansukhbhai Gujarati</p>
          </div>

          {/* Back link */}
          <div className="mt-12 text-center">
            <Link to="/#about"
              className="inline-flex items-center gap-2 px-8 py-3 bg-forest-600 text-white font-semibold rounded-full hover:bg-forest-700 transition-colors shadow-md">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BiographyPage;

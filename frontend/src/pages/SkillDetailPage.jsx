import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

const skillsData = {
  asanas: {
    title: 'Asanas',
    subtitle: 'The Art of Yogic Postures',
    image: 'https://res.cloudinary.com/dhowmzdkh/image/upload/v1777523444/skill-asanas.jpg',
    accent: '#065f46',
    proficiency: 94,
    intro: 'Asana practice is the physical cornerstone of yoga — but in Mansukhbhai\'s teaching, it is far more than stretching. Each posture is a precise conversation between body, breath, and awareness.',
    sections: [
      {
        heading: 'What Are Asanas?',
        body: `The word "Asana" literally means "seat" or "posture" in Sanskrit. In the classical Hatha Yoga tradition, asanas are systematic physical positions held with awareness and breath synchronisation. They were originally designed not for aesthetics, but to prepare the body for deep meditation by releasing physical and energetic blockages.

Mansukhbhai teaches over 84 classical asanas drawn from the Hatha Yoga Pradipika and Gherand Samhita — two foundational texts of yogic science — combined with practical modern anatomy understanding.`,
      },
      {
        heading: 'What We Teach',
        body: `Our asana curriculum is structured in progressive levels:

• **Foundation Series** — Standing postures (Tadasana, Vrikshasana), forward bends, and basic twists for beginners
• **Intermediate Series** — Backbends (Bhujangasana, Dhanurasana), inversions (Sarvangasana), and balance postures
• **Advanced Series** — Sirsasana (headstand), Chakrasana, and therapeutic postures for specific conditions
• **Therapeutic Applications** — Targeted sequences for back pain, diabetes, hypertension, and joint disorders`,
      },
      {
        heading: 'Benefits You Can Expect',
        body: `Regular asana practice under proper guidance delivers profound, measurable changes:

• Significant improvement in spinal flexibility and alignment
• Strengthened core and postural muscles
• Stimulation of internal organs improving digestion and metabolism
• Reduction in chronic pain (especially lower back and neck)
• Enhanced proprioception and body awareness
• Improved sleep quality and stress resilience`,
      },
      {
        heading: 'Mansukhbhai\'s Approach',
        body: `Unlike many modern yoga styles that focus on appearance or speed, Mansukhbhai emphasises three principles: Sthira (steadiness), Sukham (comfort), and Prayatna Shaithilya (release of excessive effort). Every student receives individual attention and modifications suitable to their age, flexibility, and health conditions.`,
      },
    ],
  },
  pranayama: {
    title: 'Pranayama & Shatkarma',
    subtitle: 'Mastery of Life Force Through Breath',
    image: 'https://res.cloudinary.com/dhowmzdkh/image/upload/v1777523445/skill-pranayama.jpg',
    accent: '#1e40af',
    proficiency: null,
    intro: 'Prana is the life force that animates every living being. Pranayama — the science of controlling prana through breath — is considered by classical yogic texts to be the most powerful practice for physical and mental transformation.',
    sections: [
      {
        heading: 'The Science of Pranayama',
        body: `Pranayama is not deep breathing. It is a precise, structured science with roots in ancient Indian physiology that modern research is increasingly validating. The breath acts as the only conscious bridge between the voluntary and involuntary nervous systems — making pranayama an unparalleled tool for regulating stress, anxiety, cardiovascular health, and immune function.

Mansukhbhai has studied under senior practitioners of the Lakulish tradition, where pranayama is taught with the same rigour as a medical discipline.`,
      },
      {
        heading: 'Techniques Taught',
        body: `• **Nadi Shodhana** (Alternate Nostril Breathing) — Balances left and right brain hemispheres, calms the nervous system
• **Kapalabhati** — Rapid exhalations that cleanse the respiratory tract and energise the mind  
• **Bhastrika** — Bellows breath for increasing metabolic fire and clearing mental fog
• **Bhramari** — Humming breath that instantly reduces anxiety and blood pressure
• **Ujjayi** — Ocean breath used during asana to build internal heat and focus
• **Sheetali & Sheetkari** — Cooling breaths for summer, anger management, and fever
• **Surya / Chandra Bhedana** — Sun and Moon piercing for energy regulation`,
      },
      {
        heading: 'Shatkarma — Yogic Purification',
        body: `Shatkarma are six classical cleansing techniques described in the Hatha Yoga Pradipika, used to purify the body before pranayama practice:

• **Neti** — Nasal cleansing with saline water (Jal Neti) or thread (Sutra Neti)
• **Dhauti** — Internal cleansing of the digestive tract  
• **Nauli** — Abdominal churning for digestive health
• **Basti** — Yogic enema technique
• **Trataka** — Fixed gazing for eye health and concentration
• **Kapalabhati** — Already listed above as it serves dual purposes`,
      },
      {
        heading: 'Documented Benefits',
        body: `Scientific research and clinical experience confirm that regular Pranayama practice delivers:

• 40–60% reduction in stress hormones (cortisol)
• Measurable improvement in lung capacity and VO2 max
• Significant reduction in blood pressure in hypertensive patients
• Improved focus, reaction time, and cognitive clarity
• Support for anxiety disorder management
• Enhanced immune response`,
      },
    ],
  },
  naturopathy: {
    title: 'Naturopathy & Yogic Science',
    subtitle: 'Healing Through Nature\'s Intelligence',
    image: 'https://res.cloudinary.com/dhowmzdkh/image/upload/v1777523447/skill-naturopathy.jpg',
    accent: '#7c3aed',
    proficiency: null,
    intro: 'Naturopathy recognises that the human body has an innate intelligence and capacity to heal itself when given the right conditions. Combined with yogic science, it creates a complete system for reversing lifestyle diseases.',
    sections: [
      {
        heading: 'What Is Naturopathy?',
        body: `Naturopathy (Prakritik Chikitsa) is a drugless healing system that uses natural agents — diet, water, air, sunlight, earth, fasting, and exercise — to restore the body to its natural state of health. It is not alternative medicine; it is the original medicine, practised long before the era of pharmaceutical intervention.

Mansukhbhai integrates naturopathic principles directly with yogic practices, creating a unified system of healing that addresses the root cause of disease rather than suppressing symptoms.`,
      },
      {
        heading: 'Core Principles',
        body: `• **Vis Medicatrix Naturae** — Trust the healing power of nature
• **Tolle Causam** — Identify and treat the root cause, not just symptoms
• **Primum Non Nocere** — First, do no harm
• **Treat the Whole Person** — Body, mind, and spirit are inseparable
• **Prevention** — The best medicine is preventing disease before it begins
• **Doctor as Teacher** — Educate patients to take responsibility for their health`,
      },
      {
        heading: 'Treatment Modalities Offered',
        body: `• **Therapeutic Diet Plans** — Customised based on Prakriti (body constitution), specific conditions, and seasonal factors
• **Fasting Therapy** — Supervised short fasts (1–3 days) for metabolic reset and detoxification
• **Hydrotherapy** — Hot and cold water applications for pain, inflammation, and circulation
• **Mud Therapy** — Earth packs for joint inflammation, skin conditions, and abdominal health
• **Sunlight Therapy** — Structured sun exposure for Vitamin D, mood disorders, and immunity
• **Yogic Diet Counselling** — Sattvic food principles for mental clarity and spiritual development`,
      },
      {
        heading: 'Conditions Commonly Addressed',
        body: `Naturopathy combined with yoga has shown significant results for:

• Type 2 Diabetes — Blood sugar regulation through diet + specific asanas + pranayama
• Hypertension — Non-pharmacological blood pressure management
• Obesity — Sustainable weight management without crash diets
• Digestive disorders — IBS, constipation, acidity, and gastritis
• Arthritis — Pain management and joint mobility
• Hormonal imbalances — PCOS, thyroid, and adrenal fatigue
• Stress and Anxiety — Comprehensive mind-body protocol`,
      },
    ],
  },
};

const SkillDetailPage = () => {
  const { slug } = useParams();
  const skill = skillsData[slug];

  if (!skill) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-sand-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-forest-900 mb-4">Page not found</h1>
          <Link to="/" className="text-forest-600 underline">← Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-sand-50 pt-20">

        {/* Hero Banner — full image, no crop */}
        <div className="w-full">
          <img
            src={skill.image}
            alt={skill.title}
            className="w-full h-auto block"
            style={{ maxHeight: '70vh', objectFit: 'cover', width: '100%' }}
          />
          {/* Title strip below the image */}
          <div
            className="w-full px-6 md:px-16 py-6 md:py-8"
            style={{ background: `linear-gradient(135deg, ${skill.accent} 0%, ${skill.accent}cc 100%)` }}
          >
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              className="text-amber-300 text-xs font-bold tracking-widest uppercase mb-1">
              Core Discipline
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="text-2xl md:text-5xl font-bold text-white leading-tight mb-1">
              {skill.title}
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
              className="text-white/80 text-sm md:text-lg">
              {skill.subtitle}
            </motion.p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 md:px-8 py-10 md:py-16">

          {/* Intro */}
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-lg md:text-xl text-sand-800 leading-relaxed mb-12 font-medium border-l-4 border-amber-400 pl-6 italic">
            {skill.intro}
          </motion.p>

          {/* Proficiency bar */}
          {skill.proficiency && (
            <div className="mb-10 bg-white rounded-2xl p-6 shadow-sm border border-sand-200">
              <div className="flex justify-between text-sm font-bold text-forest-900 mb-2">
                <span>Teaching Proficiency</span>
                <span className="text-forest-600">{skill.proficiency}%</span>
              </div>
              <div className="w-full h-3 bg-sand-200 rounded-full overflow-hidden">
                <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
                  className="h-full bg-forest-500 rounded-full origin-left"
                  style={{ width: `${skill.proficiency}%` }} />
              </div>
            </div>
          )}

          {/* Content Sections */}
          <div className="space-y-8">
            {skill.sections.map((sec, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-sand-200">
                <h2 className="text-lg md:text-2xl font-bold text-forest-900 mb-4 flex items-center gap-3">
                  <span className="w-6 h-1 rounded bg-amber-400 inline-block shrink-0" />
                  {sec.heading}
                </h2>
                <div className="text-sand-800 text-sm md:text-base leading-relaxed whitespace-pre-line">
                  {sec.body}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 bg-forest-900 rounded-3xl p-8 text-center">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Ready to begin your journey?</h3>
            <p className="text-green-200 mb-6 text-sm md:text-base">Book a free trial session and experience authentic {skill.title} teaching.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/#contact"
                className="px-6 py-3 bg-amber-400 text-forest-900 font-bold rounded-full hover:bg-amber-300 transition-colors shadow-lg">
                Book a Free Trial
              </Link>
              <Link to="/"
                className="px-6 py-3 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-colors border border-white/20">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillDetailPage;

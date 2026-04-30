import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

const programsData = {
  'school-yoga': {
    title: 'School Yoga Programs',
    category: 'Youth & Education',
    image: 'https://res.cloudinary.com/dhowmzdkh/image/upload/v1777523441/program-school.jpg',
    accent: '#0369a1',
    tagline: 'Building Tomorrow\'s Leaders Through Mindful Movement',
    intro: 'Children are the most receptive yogic students. Our school programs plant seeds of health, focus, and emotional resilience that grow with students throughout their lives.',
    stats: [
      { value: '40+', label: 'Schools Covered' },
      { value: '8,000+', label: 'Students Annually' },
      { value: '26 yrs', label: 'Teaching Experience' },
      { value: '100%', label: 'Curriculum Aligned' },
    ],
    sections: [
      {
        heading: 'Program Overview',
        body: `Mansukhbhai's School Yoga Program is a structured, age-appropriate curriculum designed to complement academic education. Unlike generic "exercise" programs, this is a complete development system that addresses physical health, mental focus, emotional regulation, and character building through the lens of classical yoga.

The program is fully adaptable to any school schedule — from 20-minute morning sessions to dedicated 45-minute weekly classes.`,
      },
      {
        heading: 'Curriculum by Age Group',
        body: `**Primary (Classes 1–5, Ages 6–11)**
• Simple breathing exercises (Balloon breath, Bee breath)
• Fun animal poses (Cat, Dog, Cobra, Butterfly)
• Basic relaxation techniques
• Story-based yoga flows
• Focus: Joy, body awareness, basic flexibility

**Middle School (Classes 6–8, Ages 11–14)**
• Sun Salutations (Surya Namaskar) — adapted version
• Standing and balancing postures
• Pranayama basics (Anulom Vilom, Kapalabhati)
• Stress management and exam preparation techniques
• Focus: Confidence, concentration, stress resilience

**High School (Classes 9–12, Ages 14–18)**
• Full classical asana curriculum
• Advanced pranayama techniques
• Meditation introduction
• Yogic lifestyle and diet principles
• Focus: Academic performance, emotional intelligence, career readiness`,
      },
      {
        heading: 'Measurable Academic Benefits',
        body: `Schools that have implemented this program report:

• 25–35% improvement in student attention span during classes
• Reduction in exam-related anxiety among students
• Decrease in disciplinary incidents (improved impulse control)
• Better posture and reduction in backpack-related back pain
• Improved sleep quality reported by parents
• Teachers note increased classroom participation and engagement`,
      },
      {
        heading: 'Program Logistics',
        body: `• **Session Duration**: 20–45 minutes per session
• **Frequency**: Daily, 3x/week, or once weekly (flexible)
• **Venue**: School grounds, assembly hall, or classroom (minimum space required)
• **Equipment**: Yoga mats (provided by school or students), no other equipment needed
• **Teacher Training**: Option to train school's own PE teachers for self-sufficiency
• **Documentation**: Monthly progress reports available upon request`,
      },
    ],
  },
  'corporate-wellness': {
    title: 'Corporate & Diamond Factory Workshops',
    category: 'Workplace Wellness',
    image: 'https://res.cloudinary.com/dhowmzdkh/image/upload/v1777523442/program-corporate.jpg',
    accent: '#b45309',
    tagline: 'Healthier Employees, Stronger Businesses',
    intro: 'Surat\'s diamond industry and corporate sector face unique occupational health challenges. Our targeted wellness programs are built specifically for the demands of these high-intensity work environments.',
    stats: [
      { value: '50+', label: 'Companies Served' },
      { value: '5,000+', label: 'Employees Benefited' },
      { value: '30%', label: 'Avg. Stress Reduction' },
      { value: '4.9★', label: 'Client Satisfaction' },
    ],
    sections: [
      {
        heading: 'The Workplace Wellness Crisis',
        body: `Surat's diamond workers spend 8–12 hours daily in fixed positions — hunched over workbenches with microscopes, performing intricate hand movements under high cognitive load. The result is a predictable epidemic of:

• Cervical spondylitis and chronic neck pain
• Carpal tunnel syndrome and wrist disorders
• Chronic eye strain and headaches
• Severe work-related anxiety and burnout
• Poor posture leading to back disorders

Our corporate program addresses each of these specifically with evidence-based yogic interventions.`,
      },
      {
        heading: 'What the Program Includes',
        body: `**Desk Yoga (15–20 minutes, no mat required)**
• Chair-based stretches for neck, shoulders, and back
• Wrist and hand exercises for repetitive strain prevention
• Eye exercises (Trataka-based) for screen/microscope workers
• Micro-breaks protocol — proven to increase afternoon productivity

**Full Wellness Sessions (45–60 minutes)**
• Complete asana sequence targeting occupational postural issues
• Pranayama for stress management and mental clarity
• Progressive Muscle Relaxation (PMR) for burnout recovery
• Mindfulness-based focus training

**Customised Health Assessments**
• Individual postural analysis
• Recommendations for workstation ergonomic adjustments
• Personalised yoga prescription for specific health conditions`,
      },
      {
        heading: 'ROI for Employers',
        body: `Companies investing in employee wellness programs consistently report:

• Reduced sick days and absenteeism (avg. 25% reduction)
• Higher employee retention and morale
• Decreased health insurance claims
• Increased productivity and reduced errors
• Positive employer brand — attracting quality talent
• ESIC and health audit compliance support

Our programs are structured to deliver measurable outcomes that you can report to HR and management.`,
      },
      {
        heading: 'Engagement Models',
        body: `**Model 1: Weekly On-Site Sessions**
We visit your office or factory. Minimum 10 employees. Flexible scheduling around production shifts.

**Model 2: Intensive Weekend Workshops**
Full-day or half-day immersive wellness retreats for management teams and employees.

**Model 3: Train-the-Trainer**
We certify your HR or wellness coordinators to run daily sessions independently.

**Model 4: Annual Wellness Calendar**
Monthly themed wellness days covering stress management, sleep, nutrition, and mindfulness.`,
      },
    ],
  },
  'naturopathy-sessions': {
    title: 'Naturopathy Sessions',
    category: 'Holistic Healing',
    image: 'https://res.cloudinary.com/dhowmzdkh/image/upload/v1777523443/program-naturopathy.jpg',
    accent: '#065f46',
    tagline: 'Your Body Knows How to Heal — We Help It Remember',
    intro: 'Naturopathy sessions with Mansukhbhai are not appointments — they are partnerships. A complete, unhurried assessment of your health history, lifestyle, constitution, and goals to design a healing path that is uniquely yours.',
    stats: [
      { value: '500+', label: 'Patients Treated' },
      { value: '85%', label: 'Positive Outcomes' },
      { value: '0', label: 'Side Effects' },
      { value: '1:1', label: 'Personal Attention' },
    ],
    sections: [
      {
        heading: 'What to Expect in Your First Session',
        body: `Your initial consultation is a comprehensive 60–90 minute assessment that covers:

• Complete health history review (past and current conditions, medications)
• Prakriti analysis (Ayurvedic body constitution assessment)
• Lifestyle audit — sleep, diet, activity levels, stress patterns
• Posture and physical assessment
• Discussion of your primary health goals
• Design of your personalised healing protocol

You leave with a clear written plan including dietary recommendations, specific yoga practices, and natural therapy prescriptions.`,
      },
      {
        heading: 'Conditions We Address',
        body: `**Metabolic & Lifestyle Diseases**
• Type 2 Diabetes — blood sugar normalisation through diet + specific yoga
• Hypertension — drug-free blood pressure management
• Obesity — sustainable, physiologically sound weight management
• Thyroid disorders — hormonal balance through naturopathic protocol

**Digestive Health**
• Chronic constipation and irregular bowel movements
• Acidity, GERD, and digestive inflammation
• IBS (Irritable Bowel Syndrome)
• Liver health and fatty liver management

**Musculoskeletal**
• Arthritis (both OA and RA) — pain reduction and mobility improvement
• Sciatica and lumbar disc issues
• Frozen shoulder and cervical spondylitis

**Mental & Emotional**
• Anxiety and panic disorders
• Chronic stress and adrenal fatigue
• Insomnia and sleep disorders
• Mild depression support (alongside medical treatment)`,
      },
      {
        heading: 'Natural Treatment Tools Used',
        body: `• **Therapeutic Diet Design** — Sattvic, anti-inflammatory, and condition-specific meal planning
• **Fasting Protocols** — Intermittent fasting, juice fasting, or mono-diet fasting (medically supervised)
• **Hydrotherapy** — Hot and cold water applications, hip baths, steam therapy
• **Mud Therapy** — Cold mud packs for inflammation, abdominal packs for digestion
• **Sunbathing Therapy** — Structured exposure for vitamin D, mood, and immunity
• **Yoga & Pranayama Prescription** — Specific practices for your condition
• **Herbal Recommendations** — Ayurvedic herbs and spices (food-grade) for support`,
      },
      {
        heading: 'Session Structure & Fees',
        body: `**Initial Consultation** — 60–90 minutes
Full assessment, protocol design, and detailed written plan.

**Follow-up Sessions** — 30–45 minutes
Progress review, protocol adjustments, and deeper guidance.

**Frequency**: Typically 4–6 sessions over 2–3 months, then monthly maintenance.

**Home Visits**: Available on request within Surat.

**Online Consultations**: Available for outstation patients via video call.

To book your first session, use the contact form below or WhatsApp directly.`,
      },
    ],
  },
};

const ProgramDetailPage = () => {
  const { slug } = useParams();
  const program = programsData[slug];

  if (!program) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-sand-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-forest-900 mb-4">Program not found</h1>
          <Link to="/" className="text-forest-600 underline">← Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-sand-50 pt-20">

        {/* Hero — full image uncropped */}
        <div className="w-full">
          <img
            src={program.image}
            alt={program.title}
            className="w-full h-auto block"
            style={{ maxHeight: '65vh', objectFit: 'cover', width: '100%' }}
          />
          {/* Title strip below image */}
          <div
            className="w-full px-6 md:px-16 py-5 md:py-8"
            style={{ background: `linear-gradient(135deg, ${program.accent} 0%, ${program.accent}bb 100%)` }}
          >
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="inline-block bg-white/20 text-white text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-2">
              {program.category}
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="text-xl md:text-4xl font-bold text-white leading-tight mb-1">
              {program.title}
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
              className="text-white/80 text-sm md:text-base italic">
              {program.tagline}
            </motion.p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 md:px-8 py-10 md:py-16">

          {/* Intro */}
          <p className="text-lg md:text-xl text-sand-800 leading-relaxed mb-10 border-l-4 border-amber-400 pl-6 italic font-medium">
            {program.intro}
          </p>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {program.stats.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * i }}
                className="bg-white rounded-2xl p-5 text-center shadow-sm border border-sand-200">
                <p className="text-2xl md:text-3xl font-bold text-forest-700">{s.value}</p>
                <p className="text-xs text-sand-600 font-medium mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            {program.sections.map((sec, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
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
            <h3 className="text-xl font-bold text-white mb-2">Interested in this program?</h3>
            <p className="text-green-200 text-sm mb-6">Get in touch for pricing, scheduling, and a free demo session.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href="https://wa.me/919099210660" target="_blank" rel="noreferrer"
                className="px-6 py-3 bg-green-500 text-white font-bold rounded-full hover:bg-green-400 transition-colors shadow-lg">
                WhatsApp Us
              </a>
              <Link to="/#contact"
                className="px-6 py-3 bg-amber-400 text-forest-900 font-bold rounded-full hover:bg-amber-300 transition-colors shadow-lg">
                Send an Enquiry
              </Link>
              <Link to="/"
                className="px-6 py-3 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 border border-white/20 transition-colors">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgramDetailPage;

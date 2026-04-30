import React from 'react';
import { Link } from 'react-router-dom';

const Programs = () => {
  // Array of program data with generated AI images based on the master's photos
  const programsData = [
    {
      id: 1,
      title: 'School Yoga Programs',
      category: 'Youth & Education',
      description: 'Specially designed sessions for students to improve concentration, reduce academic stress, and foster healthy physical development.',
      imageUrl: 'https://res.cloudinary.com/dhowmzdkh/image/upload/v1777523441/program-school.jpg',
      slug: 'school-yoga',
    },
    {
      id: 2,
      title: 'Corporate & Diamond Factory Workshops',
      category: 'Workplace Wellness',
      description: 'Targeted workshops for professionals and diamond workers to alleviate posture-related pain, reduce burnout, and boost productivity.',
      imageUrl: 'https://res.cloudinary.com/dhowmzdkh/image/upload/v1777523442/program-corporate.jpg',
      slug: 'corporate-wellness',
    },
    {
      id: 3,
      title: 'Naturopathy Sessions',
      category: 'Holistic Healing',
      description: 'Personalized natural therapy sessions focusing on dietary changes, herbal remedies, and the body\'s innate ability to heal itself.',
      imageUrl: 'https://res.cloudinary.com/dhowmzdkh/image/upload/v1777523443/program-naturopathy.jpg',
      slug: 'naturopathy-sessions',
    }
  ];

  return (
    <section className="py-12 md:py-24 bg-white" id="programs">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-16 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-xs md:text-sm font-bold text-forest-500 uppercase tracking-widest mb-2">Specialized Offerings</h2>
            <h3 className="text-2xl md:text-5xl font-bold text-forest-900 tracking-tight">Our Signature Programs</h3>
          </div>
          <div>
            <button className="px-6 py-3 bg-forest-100 text-forest-800 font-semibold rounded-full hover:bg-forest-200 transition-colors duration-300">
              View All Programs
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 md:gap-8">
          {programsData.map((program) => (
            <Link
              key={program.id}
              to={`/program/${program.slug}`}
              className="flex flex-col group cursor-pointer"
            >
              {/* Image — full, no crop, no text overlay */}
              <div className="w-full overflow-hidden rounded-xl md:rounded-3xl mb-3 md:mb-4">
                <img
                  src={program.imageUrl}
                  alt={program.title}
                  className="w-full h-auto block group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  style={{ aspectRatio: '4/3', objectFit: 'cover', width: '100%' }}
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="px-1 md:px-2">
                {/* Category badge — now below image, clean */}
                <span className="inline-block bg-forest-100 text-forest-700 text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full mb-1 md:mb-2">
                  {program.category}
                </span>
                <h4 className="text-sm sm:text-base md:text-2xl font-bold text-forest-900 mb-1 md:mb-3 group-hover:text-forest-600 transition-colors leading-tight">
                  {program.title}
                </h4>
                <p className="text-[11px] sm:text-xs md:text-base text-sand-800 leading-relaxed mb-2 md:mb-4 line-clamp-2 md:line-clamp-none">
                  {program.description}
                </p>
                <div className="hidden sm:inline-flex items-center font-semibold text-forest-600 group-hover:text-forest-800 transition-colors text-xs md:text-base">
                  Learn more 
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;

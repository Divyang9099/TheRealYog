import React from 'react';
import { Link } from 'react-router-dom';

const SkillsGrid = () => {
  const skills = [
    {
      id: 1,
      title: 'Asanas',
      description: 'Mastery over physical postures to build strength, flexibility, and perfect balance.',
      image: 'https://res.cloudinary.com/dhowmzdkh/image/upload/v1777523444/skill-asanas.jpg',
      proficiency: 94,
      slug: 'asanas',
      icon: (
        <svg className="w-5 h-5 md:w-7 md:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Pranayama',
      description: 'Advanced breathing techniques for deep inner harmony and mental clarity.',
      image: 'https://res.cloudinary.com/dhowmzdkh/image/upload/v1777523445/skill-pranayama.jpg',
      proficiency: null,
      slug: 'pranayama',
      icon: (
        <svg className="w-5 h-5 md:w-7 md:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Naturopathy',
      description: 'Holistic healing blending natural therapy with ancient yogic sciences.',
      image: 'https://res.cloudinary.com/dhowmzdkh/image/upload/v1777523447/skill-naturopathy.jpg',
      proficiency: null,
      slug: 'naturopathy',
      icon: (
        <svg className="w-5 h-5 md:w-7 md:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-12 md:py-24 bg-sand-50" id="skills">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">

        {/* Section Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-xs md:text-sm font-bold text-forest-500 uppercase tracking-widest mb-2">
            Core Disciplines
          </h2>
          <h3 className="text-2xl md:text-5xl font-bold text-forest-900 tracking-tight">
            Areas of Expertise
          </h3>
        </div>

        {/* ── 2-col on mobile · 3-col on lg ── */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 md:gap-10">
          {skills.map((skill) => (
            <Link
              key={skill.id}
              to={`/skill/${skill.slug}`}
              className="bg-white rounded-2xl md:rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 md:hover:-translate-y-2 transition-all duration-300 border border-sand-200 group flex flex-col cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-32 sm:h-44 md:h-64 overflow-hidden">
                <div className="absolute inset-0 bg-forest-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src={skill.image}
                  alt={skill.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                {/* Floating icon bubble */}
                <div className="absolute -bottom-4 md:-bottom-6 right-3 md:right-8 w-9 h-9 md:w-14 md:h-14 bg-forest-600 text-white rounded-full flex items-center justify-center shadow-lg z-20 group-hover:bg-forest-500 transition-all duration-300">
                  {skill.icon}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-3 sm:p-5 md:p-8 pt-5 md:pt-10 flex flex-col flex-grow">
                <h4 className="text-sm sm:text-base md:text-2xl font-bold text-forest-900 mb-1 md:mb-3 group-hover:text-forest-600 transition-colors leading-tight">
                  {skill.title}
                </h4>
                <p className="text-[11px] sm:text-xs md:text-base text-sand-800 leading-relaxed flex-grow line-clamp-3 md:line-clamp-none">
                  {skill.description}
                </p>

                {skill.proficiency && (
                  <div className="space-y-1 mt-2 md:mt-auto md:space-y-2">
                    <div className="flex justify-between items-center text-[10px] md:text-sm font-bold text-forest-900">
                      <span>Proficiency</span>
                      <span className="text-forest-600">{skill.proficiency}%</span>
                    </div>
                    <div className="w-full h-1.5 md:h-2.5 bg-sand-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-forest-500 rounded-full origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-out"
                        style={{ width: `${skill.proficiency}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsGrid;

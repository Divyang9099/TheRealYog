import React from 'react';

const SkillsGrid = () => {
  const skills = [
    {
      id: 1,
      title: 'Asanas',
      description: 'Mastery over physical postures to build strength, flexibility, and perfect balance. Specialized in traditional techniques.',
      image: '/skill-asanas.png',
      proficiency: 94,
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Pranayama & Shatkarma',
      description: 'Advanced breathing techniques and yogic purification methods designed for deep inner harmony and mental clarity.',
      image: '/skill-pranayama.png',
      proficiency: null,
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Naturopathy & Yogic Science',
      description: 'Holistic healing methodologies blending natural therapeutic diets with the ancient wisdom of yogic sciences.',
      image: '/skill-naturopathy.png',
      proficiency: null,
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-sand-50" id="skills">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-forest-500 uppercase tracking-widest mb-3">Core Disciplines</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-forest-900 tracking-tight">Areas of Expertise</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skills.map((skill) => (
            <div 
              key={skill.id} 
              className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-sand-200 group flex flex-col"
            >
              {/* Image Header */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-forest-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={skill.image} 
                  alt={skill.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Floating Icon */}
                <div className="absolute -bottom-6 right-8 w-14 h-14 bg-forest-600 text-white rounded-full flex items-center justify-center shadow-lg z-20 group-hover:bg-forest-500 group-hover:-translate-y-1 transition-all duration-300">
                  {skill.icon}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 pt-10 flex flex-col flex-grow">
                <h4 className="text-2xl font-bold text-forest-900 mb-3 group-hover:text-forest-600 transition-colors">{skill.title}</h4>
                <p className="text-sand-800 mb-6 leading-relaxed flex-grow">
                  {skill.description}
                </p>

                {/* Progress Bar (Only renders if proficiency is provided) */}
                {skill.proficiency && (
                  <div className="space-y-2 mt-auto">
                    <div className="flex justify-between items-center text-sm font-bold text-forest-900">
                      <span>Proficiency</span>
                      <span className="text-forest-600">{skill.proficiency}%</span>
                    </div>
                    <div className="w-full h-2.5 bg-sand-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-forest-500 rounded-full origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-out" 
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsGrid;

import React from 'react';

const Programs = () => {
  // Array of program data with generated AI images based on the master's photos
  const programsData = [
    {
      id: 1,
      title: 'School Yoga Programs',
      category: 'Youth & Education',
      description: 'Specially designed sessions for students to improve concentration, reduce academic stress, and foster healthy physical development.',
      imageUrl: '/program-school.png',
    },
    {
      id: 2,
      title: 'Corporate & Diamond Factory Workshops',
      category: 'Workplace Wellness',
      description: 'Targeted workshops for professionals and diamond workers to alleviate posture-related pain, reduce burnout, and boost productivity.',
      imageUrl: '/program-corporate.png',
    },
    {
      id: 3,
      title: 'Naturopathy Sessions',
      category: 'Holistic Healing',
      description: 'Personalized natural therapy sessions focusing on dietary changes, herbal remedies, and the body\'s innate ability to heal itself.',
      imageUrl: '/program-naturopathy.png',
    }
  ];

  return (
    <section className="py-24 bg-white" id="programs">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-forest-500 uppercase tracking-widest mb-3">Specialized Offerings</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-forest-900 tracking-tight">Our Signature Programs</h3>
          </div>
          <div>
            <button className="px-6 py-3 bg-forest-100 text-forest-800 font-semibold rounded-full hover:bg-forest-200 transition-colors duration-300">
              View All Programs
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programsData.map((program) => (
            <div 
              key={program.id} 
              className="flex flex-col group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-72 md:h-80 w-full overflow-hidden rounded-3xl mb-6">
                <div className="absolute inset-0 bg-forest-900/10 group-hover:bg-forest-900/0 transition-colors duration-300 z-10"></div>
                <img 
                  src={program.imageUrl} 
                  alt={program.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full z-20">
                  <span className="text-xs font-bold text-forest-800 uppercase tracking-wide">
                    {program.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="px-2">
                <h4 className="text-2xl font-bold text-forest-900 mb-3 group-hover:text-forest-600 transition-colors">
                  {program.title}
                </h4>
                <p className="text-sand-800 leading-relaxed mb-4">
                  {program.description}
                </p>
                <div className="inline-flex items-center font-semibold text-forest-600 group-hover:text-forest-800 transition-colors">
                  Learn more 
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;

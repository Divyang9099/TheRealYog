import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-14 md:py-32 bg-white overflow-hidden" id="about">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* Left Side: Text Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-xs md:text-sm font-bold text-forest-500 uppercase tracking-widest">
                The Master's Journey
              </h2>
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-forest-900 leading-tight">
                A Legacy of Wellness Since 1998
              </h3>
            </div>
            
            <p className="text-base md:text-lg text-sand-800 leading-relaxed">
              For over two decades, our master has been a guiding light in the realm of holistic health and spiritual well-being. Beginning his teaching journey in 1998, he has cultivated an environment of peace, discipline, and profound transformation for thousands of students.
            </p>
            
            <div className="space-y-6 pt-4">
              {/* Credentials */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-forest-100 flex items-center justify-center text-forest-600">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-forest-900">Diploma in Yoga Education</h4>
                  <p className="text-sand-700">Achieved <span className="font-semibold text-forest-700">First Class</span> honors from the prestigious Bhavnagar University.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-forest-100 flex items-center justify-center text-forest-600">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-forest-900">'B' Grade Certification</h4>
                  <p className="text-sand-700">Certified by the renowned Lakulish Institute, demonstrating exceptional mastery and knowledge.</p>
                </div>
              </div>
            </div>
            
            <div className="pt-6">
              <Link
                to="/biography"
                className="inline-block px-8 py-3 bg-white text-forest-900 font-semibold rounded-full border-2 border-forest-900 hover:bg-forest-900 hover:text-white transition-colors duration-300 shadow-sm hover:shadow-md"
              >
                Read Full Biography
              </Link>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="w-full lg:w-1/2 relative">
            {/* Decorative background shape */}
            <div className="absolute top-10 -right-10 w-full h-full bg-sand-200 rounded-3xl -z-10 transform rotate-3"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-forest-100 rounded-full -z-10 blur-3xl opacity-60"></div>
            
            <img 
              src="https://res.cloudinary.com/dhowmzdkh/image/upload/v1777523430/uncle-headshot.jpg" 
              alt="Mansukhbhai Gujarati Yoga Coach Professional Headshot" 
              className="w-full h-auto object-cover rounded-3xl shadow-xl border border-sand-200"
            />
            
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-2 md:-bottom-6 md:-left-6 bg-white p-3 md:p-6 rounded-xl md:rounded-2xl shadow-xl flex items-center gap-2 md:gap-4">
              <div className="w-9 h-9 md:w-12 md:h-12 bg-forest-600 text-white rounded-full flex items-center justify-center font-bold text-sm md:text-xl">
                20+
              </div>
              <div>
                <p className="font-bold text-forest-900 leading-tight text-sm md:text-base">Years of</p>
                <p className="text-sand-700 text-xs md:text-sm">Experience</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;

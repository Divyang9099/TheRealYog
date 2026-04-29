import React from 'react';

const TrustBar = () => {
  const partners = [
    { name: 'Bhavnagar University', id: 1 },
    { name: 'Lakulish Institute', id: 2 },
    { name: 'Gujarat State Yog Board', id: 3 },
  ];

  // We duplicate the array to create a seamless infinite scroll effect
  const repeatedPartners = [...partners, ...partners, ...partners, ...partners];

  return (
    <div className="w-full bg-white py-8 border-b border-sand-300 overflow-hidden relative flex items-center">
      {/* Gradient fades on the edges for a polished look */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-white to-transparent"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-white to-transparent"></div>

      <div className="flex w-max animate-marquee space-x-16 md:space-x-32 pr-16 md:pr-32">
        {repeatedPartners.map((partner, index) => (
          <div key={`${partner.id}-${index}`} className="flex items-center space-x-3 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            {/* Simple placeholder icon for the logo */}
            <svg className="w-8 h-8 text-forest-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
            <span className="text-xl md:text-2xl font-semibold text-forest-900 tracking-tight whitespace-nowrap">
              {partner.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;

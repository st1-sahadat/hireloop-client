

export default function HeroBanner() {
  const stats = [
    {
      value: '50K',
      label: 'Active Jobs',
      path: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    },
    {
      value: '12K',
      label: 'Companies',
      path: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    },
    {
      value: '2M',
      label: 'Job Seekers',
      path: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
    },
    {
      value: '97%',
      label: 'Satisfaction Rate',
      path: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z',
    },
  ];

  return (
    
    <div className="relative min-h-screen overflow-hidden bg-[#050505] flex flex-col font-sans text-white">
      
      {/* Subtle Starry Background Effect (CSS) */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
        style={{ 
          // backgroundImage: "url('/path/to/your/stars.png')",
          backgroundSize: '50px 50px' 
        }}
      >      </div>
      {/* Hero Content */}
      <main className="relative z-10 flex flex-col items-center grow pt-16 px-4 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-3 rounded-full border border-gray-800 bg-[#131417]/80 px-4 py-1.5 text-xs font-medium tracking-wide text-gray-400 mb-8 backdrop-blur-sm relative">
          <svg className="w-4 h-4 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
          <span className="flex items-center gap-2">
            <span className="text-white font-semibold">50,000+</span> NEW JOBS THIS MONTH
          </span>
          {/* Decorative lines */}
          <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-6 h-px bg-gray-800 hidden sm:block"></div>
          <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-6 h-px bg-gray-800 hidden sm:block"></div>
        </div>

        {/* Heading */}
        <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
          Find Your Dream Job Today
        </h1>

        {/* Subheading */}
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
          HireLoop connects top talent with world-class companies. Browse thousands of curated opportunities and land your next role — faster.
        </p>

        {/* Search Bar */}
        <div className="mt-10 w-full max-w-3xl relative">
          <form className="flex flex-col sm:flex-row items-center w-full rounded-xl bg-[#0f1115] border border-gray-800 p-2 shadow-2xl relative z-20">

            {/* Job Title Input */}
            <div className="flex items-center flex-1 w-full px-4 py-3 sm:py-0">
              <svg className="w-5 h-5 text-gray-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
              <input
                type="text"
                placeholder="Job title, skill or company"
                className="w-full bg-transparent border-none outline-none text-sm text-white placeholder-gray-500 ml-3"
              />
            </div>

            {/* Divider */}
            <div className="hidden sm:block h-8 w-px bg-gray-700 mx-1"></div>

            {/* Location Input */}
            <div className="flex items-center flex-1 w-full px-4 py-3 sm:py-0 border-t border-gray-800 sm:border-t-0">
              <svg className="w-5 h-5 text-gray-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <input
                type="text"
                placeholder="Location or Remote"
                className="w-full bg-transparent border-none outline-none text-sm text-white placeholder-gray-500 ml-3"
              />
            </div>

            {/* Search Button */}
            <button type="button" className="w-full sm:w-auto mt-2 sm:mt-0 shrink-0 rounded-lg bg-[#5b5bf6] p-3.5 hover:bg-[#4a4ae0] transition-colors flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </form>
        </div>

        {/* Trending Tags */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs text-gray-400">
          <span className="mr-1">Trending Position</span>
          <a href="#" className="rounded-full bg-[#131417] border border-gray-800 px-3 py-1.5 hover:bg-gray-800 transition-colors">Product Designer</a>
          <a href="#" className="rounded-full bg-[#131417] border border-gray-800 px-3 py-1.5 hover:bg-gray-800 transition-colors">AI Engineering</a>
          <a href="#" className="rounded-full bg-[#131417] border border-gray-800 px-3 py-1.5 hover:bg-gray-800 transition-colors">Dev-ops Engineer</a>
        </div>

        {/* Globe & Stats Section Container */}
        <div className="relative w-full max-w-6xl mx-auto mt-24 sm:mt-32 pb-20">

          {/* Globe Background Image */}
          {/* Using inline style for the specific custom background image path requested */}
          <div
            className="absolute inset-x-0 bottom-0 -top-25 z-0 bg-bottom bg-no-repeat bg-contain opacity-90 pointer-events-none"
            style={{
              backgroundImage: "url('@app/asset/globe.png')",
              // Adding a radial glow to match the design in case the image doesn't have it natively
              boxShadow: "inset 0 -200px 200px -50px rgba(79, 70, 229, 0.3)"
            }}
          ></div>

          {/* Overlay Text */}
          <p className="relative z-10 text-3xl font-medium text-white/90 sm:text-4xl mb-12 text-center drop-shadow-lg">
            Assisting over 15,000 job seekers<br className="hidden sm:block" /> find their dream positions.
          </p>

          {/* Stats Cards Grid */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4">

            {stats.map((stat) => (
              <div key={stat.label} className="bg-[#0a0a0c]/80 backdrop-blur-md border border-gray-800/60 rounded-xl p-6 flex flex-col items-start text-left">
                <svg className="w-6 h-6 text-gray-400 mb-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={stat.path}></path>
                </svg>
                <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}

          </div>
        </div>
      </main>
    </div>
  );
}
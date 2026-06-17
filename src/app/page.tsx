export default function Home() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center min-h-[60vh]">
      {/* Content Columns */}
      <div className="md:col-span-2 space-y-6">
        <h1
          className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent"
          style={{ backgroundImage: 'linear-gradient(90deg, #f8fafc 0%, #e2e8f0 52%, #94a3b8 100%)' }}
        >
          John Victor Esquejo
        </h1>
        
        {/* Typewriter handler for preventing invisible gap after typing */}
        <div className="w-full overflow-hidden">
          <p className="text-xl text-slate-400 font-medium animate-typewriter pr-1">
            Information Systems Graduate & Full-Stack Software Engineer
          </p>
        </div>
        
        <p className="text-slate-400 leading-relaxed max-w-xl">
          I love solving complex backend puzzles and translating business blueprints into high-performance web systems. Currently finishing my Bachelor of Science in Information Systems program with a goal toward software engineering.
        </p>
        
        {/* Call to Actions */}
        <div className="flex items-center space-x-4 pt-2">
          <a 
            href="/ESQUEJO%20RESUME%201.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-5 py-2.5 rounded-lg text-sm transition-all shadow-lg shadow-blue-600/20"
          >
            Download CV
          </a>
          <a 
            href="https://github.com/Ishkihu" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg border border-slate-800 bg-slate-900/40 hover:border-slate-700 text-slate-400 hover:text-slate-100 transition-all"
            aria-label="GitHub Profile"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Profile Image Section - Cleaned Box & Enlarged Astronaut */}
      <div className="flex justify-center md:justify-end">
        {/* Adjusted wrapper constraints to grow the astronaut, completely stripping layout background decorations */}
        <div className="relative group w-56 h-56 md:w-80 md:h-80 transition-all duration-500">
          
          {/* Frameless layout flex pane */}
          <div className="w-full h-full relative flex items-center justify-center">
            
            {/* Enlarged Astronaut SVG (Configured to fill 100% of the newly heightened wrapper constraints) */}
            <svg 
              className="w-full h-full text-slate-400 group-hover:text-slate-300 transition-colors duration-500" 
              viewBox="0 0 200 200" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              style={{ animation: 'bounce 5s ease-in-out infinite' }}
            >
              {/* Star system grid markers */}
              <circle cx="30" cy="40" r="1.5" className="fill-slate-700 animate-pulse" />
              <circle cx="170" cy="60" r="1" className="fill-slate-600" />
              <circle cx="45" cy="150" r="2" className="fill-blue-500/40" />
              <circle cx="160" cy="160" r="1.5" className="fill-slate-700" />
              
              {/* Structural telemetry lines */}
              <path d="M30 40 L60 70 M170 60 L140 90" stroke="rgba(71, 85, 105, 0.2)" strokeWidth="1" strokeDasharray="2 2" />

              {/* Vector Blueprint Geometry */}
              <g className="stroke-current" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                {/* Life Support System Pack */}
                <rect x="65" y="65" width="25" height="55" rx="6" className="fill-slate-950 stroke-slate-600 group-hover:stroke-slate-500 transition-colors" />
                
                {/* Astronaut Exo-Suit Chassis */}
                <rect x="75" y="70" width="50" height="60" rx="16" className="fill-slate-950 stroke-current" />
                
                {/* Primary Helmet Dome */}
                <circle cx="100" cy="55" r="24" className="fill-slate-950 stroke-current" />
                
                {/* Glowing Terminal Interface Visor */}
                <path 
                  d="M84 52 C84 44 91 40 100 40 C109 40 116 44 116 52 C116 57 109 61 100 61 C91 61 84 57 84 52 Z" 
                  className="fill-blue-950/80 stroke-blue-500 group-hover:stroke-blue-400 group-hover:fill-blue-900/50 transition-all duration-500" 
                  strokeWidth="3"
                />
                
                {/* Precision dynamic reflection path */}
                <path d="M90 45 Q98 43 104 46" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="2" strokeLinecap="round" />

                {/* Left Manipulator Assembly (Anchoring Console) */}
                <path d="M76 85 C60 90 60 110 78 112" className="fill-none stroke-current" />
                
                {/* Right Manipulator Assembly (Active System Input) */}
                <path d="M124 85 C138 90 132 102 116 104" className="fill-none stroke-current" />

                {/* Uplink Hardware Configuration */}
                <g className="translate-y-[-2px]">
                  {/* Floating Telemetry Screen Frame */}
                  <path d="M90 102 L93 84 L123 84 L120 102" className="fill-slate-950 stroke-blue-500/80 group-hover:stroke-blue-400 transition-colors" strokeWidth="3" />
                  {/* Real-time Console Rendering Buffers */}
                  <path d="M98 90 H114 M97 94 H108 M100 98 H116" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
                  {/* System Dock Platform */}
                  <path d="M84 105 H126 L122 110 H88 Z" className="fill-slate-900 stroke-current" />
                </g>

                {/* Low-gravity engine thruster particles */}
                <circle cx="92" cy="145" r="2" className="fill-blue-500/30 group-hover:fill-blue-400/60 transition-colors" stroke="none" />
                <circle cx="100" cy="155" r="3" className="fill-blue-600/20 group-hover:fill-blue-500/50 transition-colors" stroke="none" />
                <circle cx="108" cy="142" r="1.5" className="fill-blue-400/40" stroke="none" />
              </g>
            </svg>

          </div>
        </div>
      </div>
    </section>
  );
}
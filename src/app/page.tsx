// src/app/page.tsx
import Image from 'next/image';

export default function Home() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center min-h-[60vh]">
      {/* Content Columns */}
      <div className="md:col-span-2 space-y-6">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-50 via-slate-200 to-slate-400">
          John Victor Esquejo
        </h1>
        
        {/* Typewriter handler for preventing invisible gap after typing */}
        <div className="w-full overflow-hidden">
          <p className="text-xl text-slate-400 font-medium animate-typewriter pr-1">
            Information Systems Graduate & Full-Stack Software Engineer
          </p>
        </div>
        
        <p className="text-slate-400 leading-relaxed max-w-xl">
          I love solving complex backend puzzles and translating business blueprints into high-performance web systems. Currently finishing my BSIS track at the Technological University of the Philippines with a goal toward systems engineering.
        </p>
        
        {/* Call to Actions */}
        <div className="flex items-center space-x-4 pt-2">
          <a 
            href="/assets/CV_JohnVictorEsquejo.pdf" 
            download 
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

      {/* Profile Image Section */}
      <div className="flex justify-center md:justify-end">
        <div className="relative group w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/50 p-4 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="w-full h-full relative rounded-xl overflow-hidden bg-slate-950 flex items-center justify-center border border-slate-900">
            <span className="text-slate-600 text-sm font-mono">[ Avatar Placeholder ]</span>
          </div>
        </div>
      </div>
    </section>
  );
}
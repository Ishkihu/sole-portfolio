// src/app/page.tsx
import Image from 'next/image';
import { skillsData, experiencesData, projectsData } from '@/data/projects';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-blue-500/30">
      
      {/* 1. Header / Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-900">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-mono font-bold text-lg tracking-wider text-blue-400">ISHKIHU.DEV</span>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-6 pt-32 pb-24 space-y-32">
        
        {/* 2. Hero Section */}
        <section id="about" className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-2 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-xs font-mono">
              <span>Available for Full-Stack Internships</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-50 via-slate-200 to-slate-400">
              John Victor Esquejo
            </h1>
            <p className="text-xl text-slate-400 font-medium">
              Information Systems Student & Full-Stack Web Developer
            </p>
            <p className="text-slate-400 leading-relaxed max-w-xl">
              I love solving complex backend puzzles and translating business blueprints into high-performance web systems. Currently finishing my BSIS track at the Technological University of the Philippines with a goal toward systems engineering.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a 
                href="Assets/CV_JohnVictorEsquejo.pdf" 
                download 
                className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-5 py-2.5 rounded-lg text-sm transition-all shadow-lg shadow-blue-600/20"
              >
                Download CV
              </a>
              <a 
                href="https://github.com/Ishkihu" 
                target="_blank" 
                className="p-2.5 rounded-lg border border-slate-800 bg-slate-900/40 hover:border-slate-700 text-slate-400 hover:text-slate-100 transition-all"
                aria-label="GitHub Profile"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/></svg>
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative group w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/50 p-4 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-full h-full relative rounded-xl overflow-hidden bg-slate-950 flex items-center justify-center">
                <span className="text-slate-600 text-sm font-mono">[ Avatar Placeholder ]</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Skills Grid Section */}
        <section id="skills" className="space-y-8 scroll-mt-24">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-100">Technical Skill Set</h2>
            <p className="text-sm text-slate-400 mt-1">Core languages and engine structures I have explored throughout my studies.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillsData.map((skill) => (
              <div key={skill.name} className="p-5 rounded-xl border border-slate-900 bg-slate-900/20 hover:border-slate-800 hover:bg-slate-900/40 transition-all flex items-start space-x-4">
                <img src={skill.iconUrl} alt={skill.name} className="w-8 h-8 flex-shrink-0" />
                <div className="space-y-1">
                  <h3 className="font-semibold text-sm text-slate-200">{skill.name}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Experience Timeline Section */}
        <section id="experience" className="space-y-8 scroll-mt-24">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-100">Experience Tracking</h2>
            <p className="text-sm text-slate-400 mt-1">Academic initiatives and practical technical applications.</p>
          </div>
          <div className="border-l-2 border-slate-900 ml-3 space-y-12">
            {experiencesData.map((exp) => (
              <div key={exp.role} className="relative pl-8 group">
                <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-slate-800 group-hover:bg-blue-500 transition-colors border-2 border-slate-950" />
                <div className="space-y-2">
                  <span className="text-xs font-mono text-blue-400 bg-blue-500/5 border border-blue-500/10 px-2 py-0.5 rounded">
                    {exp.date}
                  </span>
                  <h3 className="text-lg font-bold text-slate-200 pt-1">{exp.role}</h3>
                  <h4 className="text-xs font-mono text-slate-500 uppercase tracking-wider">{exp.company}</h4>
                  <ul className="space-y-1.5 pt-2">
                    {exp.details.map((detail, idx) => (
                      <li key={idx} className="text-sm text-slate-400 flex items-start">
                        <span className="text-blue-500 mr-2 font-mono text-xs select-none">›</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Projects Section */}
        <section id="projects" className="space-y-8 scroll-mt-24">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-100">Documented Repositories</h2>
            <p className="text-sm text-slate-400 mt-1">Click a project card to inspect code composition directly on GitHub.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projectsData.map((project) => (
              <a 
                key={project.title}
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col justify-between p-6 rounded-xl border border-slate-900 bg-slate-900/10 hover:border-slate-800 hover:bg-slate-900/30 transition-all shadow-sm"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                      {project.category}
                    </span>
                    <svg className="w-4 h-4 text-slate-600 group-hover:text-blue-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </div>
                  <h3 className="font-bold text-lg text-slate-200 group-hover:text-slate-100 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-6">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] font-mono bg-slate-950 text-slate-400 px-2 py-0.5 rounded border border-slate-900/60">
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* 6. Contact Section */}
        <section id="contact" className="rounded-2xl border border-slate-900 bg-gradient-to-b from-slate-900/30 to-slate-950 p-8 md:p-12 text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-slate-100">Wanna connect? Let&apos;s Go!</h2>
          <p className="text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
            Feel free to reach out to me regarding internship openings, full-stack pipelines, or backend architectures. I will get back to you as soon as possible!
          </p>
          <div className="pt-2">
            <a 
              href="mailto:johnvictoresquejo@gmail.com" 
              className="inline-block bg-slate-100 hover:bg-slate-200 text-slate-950 font-semibold px-6 py-3 rounded-xl text-sm transition-all shadow-md"
            >
              Send an Email Message
            </a>
          </div>
        </section>

      </main>

      {/* 7. Footer */}
      <footer className="border-t border-slate-900/60 py-8 text-center text-xs text-slate-600 font-mono">
        <p>&copy; {new Date().getFullYear()} Esquejo, John Victor A. All Rights Reserved.</p>
      </footer>

    </div>
  );
}
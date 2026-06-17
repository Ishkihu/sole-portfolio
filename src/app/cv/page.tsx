'use client';

import { ArrowUpRight, Github, Mail, MapPin, Printer } from 'lucide-react';
import { experiencesData, projectsData, skillsData } from '@/data/projects';

export default function CvPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between print:hidden">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-blue-400">Curriculum Vitae</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-50">John Victor Esquejo</h1>
          <p className="mt-1 text-sm text-slate-400">A concise preview that opens in a new tab and prints cleanly to PDF.</p>
        </div>

        <button
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 self-start rounded-lg border border-slate-800 bg-slate-900/60 px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:border-blue-500/40 hover:text-white"
        >
          <Printer className="h-4 w-4" />
          Print / Save as PDF
        </button>
      </div>

      <article className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 shadow-2xl shadow-slate-950/60 print:border-slate-300 print:bg-white print:text-slate-900 print:shadow-none">
        <header className="border-b border-slate-800/80 px-6 py-8 sm:px-8 print:border-slate-200">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-3">
              <span className="inline-flex w-fit rounded-full border border-blue-500/15 bg-blue-500/10 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.25em] text-blue-300 print:border-blue-200 print:bg-blue-50 print:text-blue-700">
                Full-Stack Software Engineer
              </span>
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-50 print:text-slate-900">John Victor Esquejo</h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400 print:text-slate-700">
                  Information Systems graduate focused on systems engineering, backend workflows, and clean interface delivery.
                </p>
              </div>
            </div>

            <div className="grid gap-2 text-sm text-slate-400 sm:grid-cols-2 print:text-slate-700" style={{ minWidth: '360px' }}>
              <a href="mailto:johnvictoresquejo@gmail.com" className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/50 px-3 py-2 transition-colors hover:border-slate-700 hover:text-slate-200 print:border-slate-200 print:bg-transparent">
                <Mail className="h-4 w-4 text-blue-400" />
                johnvictoresquejo@gmail.com
              </a>
              <a href="https://github.com/Ishkihu" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/50 px-3 py-2 transition-colors hover:border-slate-700 hover:text-slate-200 print:border-slate-200 print:bg-transparent">
                <Github className="h-4 w-4 text-blue-400" />
                github.com/Ishkihu
              </a>
              <div className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/50 px-3 py-2 print:border-slate-200 print:bg-transparent">
                <MapPin className="h-4 w-4 text-blue-400" />
                Manila, Philippines
              </div>
              <div className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/50 px-3 py-2 print:border-slate-200 print:bg-transparent">
                <ArrowUpRight className="h-4 w-4 text-blue-400" />
                Available for technical opportunities
              </div>
            </div>
          </div>
        </header>

        <div className="grid gap-8 px-6 py-8 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] print:gap-6 print:px-8 print:py-6">
          <div className="space-y-8">
            <section className="space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-[0.3em] text-blue-400 print:text-blue-700">Experience</h3>
              <div className="space-y-4">
                {experiencesData.slice(0, 3).map((experience) => (
                  <div key={experience.role} className="rounded-2xl border border-slate-800 bg-slate-900/20 p-4 print:border-slate-200 print:bg-white">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h4 className="font-semibold text-slate-100 print:text-slate-900">{experience.role}</h4>
                        <p className="text-xs uppercase tracking-[0.2em] text-slate-500 print:text-slate-600">{experience.company}</p>
                      </div>
                      <span className="text-xs font-mono text-blue-300 print:text-blue-700">{experience.date}</span>
                    </div>
                    <ul className="mt-3 space-y-1.5 text-sm leading-6 text-slate-400 print:text-slate-700">
                      {experience.details.map((detail) => (
                        <li key={detail} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500/80 print:bg-blue-700" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-[0.3em] text-blue-400 print:text-blue-700">Selected Projects</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {projectsData.slice(0, 4).map((project) => (
                  <div key={project.title} className="rounded-2xl border border-slate-800 bg-slate-900/20 p-4 print:border-slate-200 print:bg-white">
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="font-semibold text-slate-100 print:text-slate-900">{project.title}</h4>
                      <span className="rounded-full border border-slate-700 px-2 py-0.5 text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 print:border-slate-300 print:text-slate-600">
                        {project.category}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-400 print:text-slate-700">{project.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-8">
            <section className="space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-[0.3em] text-blue-400 print:text-blue-700">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skillsData.slice(0, 10).map((skill) => (
                  <span key={skill.name} className="rounded-full border border-slate-800 bg-slate-900/40 px-3 py-1.5 text-xs text-slate-300 print:border-slate-200 print:bg-white print:text-slate-700">
                    {skill.name}
                  </span>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-[0.3em] text-blue-400 print:text-blue-700">Profile</h3>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/20 p-4 text-sm leading-6 text-slate-400 print:border-slate-200 print:bg-white print:text-slate-700">
                I build backend-driven systems and responsive interfaces with a focus on reliability, maintainability, and practical delivery.
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-[0.3em] text-blue-400 print:text-blue-700">Education</h3>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/20 p-4 print:border-slate-200 print:bg-white">
                <h4 className="font-semibold text-slate-100 print:text-slate-900">Technological University of the Philippines</h4>
                <p className="mt-1 text-sm text-slate-400 print:text-slate-700">BS Information Systems</p>
                <p className="mt-2 text-sm leading-6 text-slate-500 print:text-slate-600">Finishing the track with a systems engineering direction.</p>
              </div>
            </section>
          </aside>
        </div>
      </article>
    </div>
  );
}
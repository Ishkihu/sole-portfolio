// src/app/projects/page.tsx
'use client';

import { useState } from 'react';
import { projectsData } from '@/data/projects'; // Fixed: Pointing to your updated portfolio dataset file
import SpotlightCard from '@/components/SpotlightCard';

// Comprehensive category options aligning perfectly with your updated interface
type ProjectCategory = 'All' | 'Capstone' | 'Academic' | 'Personal' | 'Industry';

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');

  // Filter projects dynamically by checking exact case-insensitive matching identifiers
  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === 'All') return true;
    return project.category.toLowerCase() === activeCategory.toLowerCase();
  });

  // Fixed: Singular source of truth array containing 'Academic'
  const categories: ProjectCategory[] = ['All', 'Capstone', 'Academic', 'Personal', 'Industry'];

  return (
    <div className="space-y-10">
      {/* Header and Title Meta Section */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-100">GitHub Repositories</h2>
          <p className="text-sm text-slate-400 mt-1">Listed here are the developed projects available on GitHub.</p>
          <p className="text-sm text-slate-400 mt-1">Deployed versions of these projects are also available as live domains.</p>
        </div>

        {/* ─── DYNAMIC FILTER PILLS BAR ─── */}
        <div className="flex flex-wrap gap-2 p-1 bg-slate-900/40 border border-slate-900 rounded-xl max-w-max self-start md:self-end">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-1.5 text-xs font-medium rounded-lg font-mono transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/10'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Display for Filtered Cards */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <SpotlightCard 
              key={project.title}
              href={project.githubUrl || "#"}
              target={project.githubUrl ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="hover:border-slate-800/80 hover:bg-slate-900/20 animate-fadeIn"
            >
              {/* Top Area Details */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                    {project.category}
                  </span>
                  {project.githubUrl && (
                    <svg className="w-4 h-4 text-slate-600 group-hover:text-blue-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  )}
                </div>
                
                <h3 className="font-bold text-lg text-slate-200 group-hover:text-slate-100 transition-colors">
                  {project.title}
                </h3>

                {project.award && (
                  <div className="text-xs font-mono font-medium text-amber-400 bg-amber-500/10 border border-amber-500/20 rounded px-2 py-1 inline-block">
                    {project.award}
                  </div>
                )}

                <p className="text-xs text-slate-400 leading-relaxed">
                  {project.description}
                </p>
              </div>
              
              {/* Bottom Tech Badges Area */}
              <div className="flex flex-wrap gap-1.5 pt-6">
                {project.tech.map((t) => (
                  <span key={t} className="text-[10px] font-mono bg-slate-950 text-slate-400 px-2 py-0.5 rounded border border-slate-900/60">
                    {t}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          ))}
        </div>
      ) : (
        /* Empty Fallback State */
        <div className="text-center py-16 border border-dashed border-slate-900 rounded-xl bg-slate-950/20">
          <p className="text-sm text-slate-500 font-mono">No projects tracked under this category yet.</p>
        </div>
      )}
    </div>
  );
}
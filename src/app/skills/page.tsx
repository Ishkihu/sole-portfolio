import Image from 'next/image';
import { skillsData } from '@/data/projects';

export default function SkillsPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-100">Technical Skill Set</h2>
        <p className="text-sm text-slate-400 mt-1">Core languages and engine structures I have explored throughout my studies.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillsData.map((skill) => (
          <div key={skill.name} className="p-5 rounded-xl border border-slate-900 bg-slate-900/20 hover:border-slate-800 hover:bg-slate-900/40 transition-all flex items-start space-x-4">
            <div className="w-8 h-8 relative flex-shrink-0">
              <Image 
                src={skill.iconUrl} 
                alt={`${skill.name} icon`} 
                unoptimized
                width={32}
                height={32}
              />
            </div>
            <div className="space-y-1">
              <h3 className="font-semibold text-sm text-slate-200">{skill.name}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
import { experiencesData } from '@/data/projects';

export default function ExperiencePage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-100">Experience</h2>
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
    </div>
  );
}
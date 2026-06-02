// src/app/layout.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import PageTransition from '@/components/PageTransition';
import ParticleBackground from '@/components/ParticleBackground'; // Import your new interactive canvas
import '@/app/globals.css'; 

export const metadata: Metadata = {
  title: 'John Victor Esquejo | Portfolio',
  description: 'Full-Stack Software Developer Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-blue-500/30 relative">
        
        {/* ─── INTERACTIVE BACKGROUND LAYER ─── */}
        <ParticleBackground />
        
        {/* Shared Navigation Header */}
        <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-900">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link href="/" className="font-mono font-bold text-lg tracking-wider text-blue-400 hover:opacity-90 transition-opacity">
              ISHKIHU.DEV
            </Link>
            
            <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-400">
              <Link href="/" className="hover:text-blue-400 transition-colors">About</Link>
              <Link href="/skills" className="hover:text-blue-400 transition-colors">Skills</Link>
              <Link href="/experience" className="hover:text-blue-400 transition-colors">Experience</Link>
              <Link href="/projects" className="hover:text-blue-400 transition-colors">Projects</Link>
              
              {/* ─── HOVERABLE BUSINESS CARD CONTAINER ─── */}
              <div className="relative group py-2 cursor-default">
                {/* The Nav Trigger */}
                <span className="hover:text-blue-400 transition-colors select-none">
                  Contact
                </span>

                {/* The Digital Business Card Dropdown */}
                <div className="absolute right-0 top-full pt-4 w-80 scale-95 opacity-0 pointer-events-none group-hover:scale-100 group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 origin-top-right z-50">
                  
                  {/* Inside wrapper containing the actual visual card */}
                  <div className="rounded-xl border border-slate-800 bg-slate-900 p-5 shadow-2xl space-y-4 text-left">
                    
                    {/* Header / Identity */}
                    <div>
                      <h4 className="text-base font-bold text-slate-100 tracking-tight">John Victor Esquejo</h4>
                      <p className="text-xs text-blue-400 font-mono mt-0.5">Full-Stack Web Developer</p>
                    </div>

                    <hr className="border-slate-800" />

                    {/* Contact Details Grid */}
                    <div className="space-y-2.5 text-xs text-slate-400">
                      <div className="flex items-center space-x-2.5">
                        <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                        <a href="mailto:johnvictoresquejo@gmail.com" className="hover:text-slate-200 transition-colors break-all">johnvictoresquejo@gmail.com</a>
                      </div>
                      
                      <div className="flex items-center space-x-2.5">
                        <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                        <a href="https://github.com/Ishkihu" target="_blank" rel="noopener noreferrer" className="hover:text-slate-200 transition-colors">github.com/Ishkihu</a>
                      </div>

                      <div className="flex items-center space-x-2.5 font-mono text-[11px] text-slate-500">
                        <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                        <span>Manila, Philippines</span>
                      </div>
                    </div>

                    <hr className="border-slate-800" />

                    {/* Direct Email Action Button */}
                    <div className="pt-0.5">
                      <a 
                        href="mailto:johnvictoresquejo@gmail.com"
                        className="block text-center bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs py-2 rounded-lg transition-all shadow-md shadow-blue-600/10"
                      >
                        Send an Email Message
                      </a>
                    </div>

                  </div>
                </div>
              </div>

            </nav>
            <div className="flex md:hidden text-xs text-slate-500 font-mono">
              Full-Stack
            </div>
          </div>
        </header>

        {/* Dynamic Page Target Content */}
        <main className="max-w-5xl mx-auto px-6 pt-32 pb-24 relative z-10">
          <PageTransition>
            {children}
          </PageTransition>
        </main>

        {/* Shared Footer */}
        <footer className="border-t border-slate-900/60 py-8 text-center text-xs text-slate-600 font-mono relative z-10">
          <p>&copy; 2026 All Rights Reserved.</p>
          <p>Developed By John Victor Esquejo</p>
        </footer>

      </body>
    </html>
  );
}
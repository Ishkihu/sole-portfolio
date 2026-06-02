// src/components/SpotlightCard.tsx
'use client';

import { useRef, MouseEvent, ReactNode } from 'react';

interface SpotlightCardProps {
  children: ReactNode;
  href: string;
  target: string;
  rel?: string;
  className?: string;
}

export default function SpotlightCard({
  children,
  href,
  target,
  rel,
  className = '',
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    
    // Calculate the cursor position relative to the top-left of the specific card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Set custom CSS properties on the element instance
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <a
      ref={cardRef}
      href={href}
      target={target}
      rel={rel}
      onMouseMove={handleMouseMove}
      className={`relative overflow-hidden group rounded-xl border border-slate-900 bg-slate-900/10 transition-all duration-300 shadow-sm ${className}`}
    >
      {/* ─── DYNAMIC RADIAL GRADIENT HOVER LAYER ─── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
        style={{
          background: `radial-gradient(250px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(59, 130, 246, 0.12), transparent 80%)`,
        }}
      />
      
      {/* Outer border illumination track */}
      <div
        className="pointer-events-none absolute -inset-px rounded-xl border border-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{
          background: `radial-gradient(120px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(59, 130, 246, 0.4), transparent)`,
          maskImage: 'linear-gradient(black, black) stroke-box',
          WebkitMaskImage: 'linear-gradient(black, black) stroke-box',
        }}
      />

      {/* Card Internal Content Layout wrapper to sit above background effects */}
      <div className="relative z-20 flex flex-col justify-between h-full p-6">
        {children}
      </div>
    </a>
  );
}
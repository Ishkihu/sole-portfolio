// src/components/ParticleBackground.tsx
'use client';

import { useEffect, useRef } from 'react';

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      baseAlpha: number;
    }> = [];

    // ─── CEL-SHADED CELESTIAL MOON ENGINE CONFIG ───
    const moon = {
      x: 0,             // Assigned dynamically on resizeCanvas setup
      y: 0,             // Assigned dynamically on resizeCanvas setup
      radius: 38,       // Radial dimension boundary
      vx: 0.03,         // Ultra-slow horizontal drift vector speed
      vy: -0.008,       // Near-static vertical tracking ascent
    };

    // Track mouse coordinates exclusively for scattered ambient dust interactions
    const mouse = { x: null as number | null, y: null as number | null, radius: 110 };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // ─── SAFE SPAWN BOUNDARY ENGINE ───
      // Guarantees the moon won't clip boundaries or hide under the h-16 (64px) sticky navbar header
      const minX = moon.radius + 20;
      const maxX = canvas.width - (moon.radius + 20);
      const minY = moon.radius + 84; // 64px navbar space + 20px structural buffer margin
      const maxY = canvas.height - (moon.radius + 40);

      // Evaluate safe coordinate windows; fallback directly to layout fractions if screen viewport is microscopic
      if (moon.x === 0 && moon.y === 0) {
        moon.x = maxX > minX ? Math.random() * (maxX - minX) + minX : canvas.width / 2;
        moon.y = maxY > minY ? Math.random() * (maxY - minY) + minY : canvas.height / 3;
      }

      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 9500);
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5 + 0.5,
          vx: (Math.random() - 0.5) * 0.12,
          vy: (Math.random() - 0.5) * 0.12,
          baseAlpha: Math.random() * 0.35 + 0.15,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // ─── 1. CEL-SHADED MOON DRAW LOOP & COORDINATE TRACKING ───
      moon.x += moon.vx;
      moon.y += moon.vy;

      // Wrap-around coordinate reset handling loops
      if (moon.x - moon.radius > canvas.width) moon.x = -moon.radius;
      if (moon.x + moon.radius < 0) moon.x = canvas.width + moon.radius;
      if (moon.y + moon.radius < 0) moon.y = canvas.height + moon.radius;
      if (moon.y - moon.radius > canvas.height) moon.y = -moon.radius;

      // A. Flat Atmospheric Halo Bands
      ctx.fillStyle = 'rgba(59, 130, 246, 0.03)'; 
      ctx.beginPath();
      ctx.arc(moon.x, moon.y, moon.radius + 16, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = 'rgba(59, 130, 246, 0.06)'; 
      ctx.beginPath();
      ctx.arc(moon.x, moon.y, moon.radius + 7, 0, Math.PI * 2);
      ctx.fill();

      // B. Solid Core Frame Structure
      ctx.fillStyle = '#e2e8f0'; // Flat Slate-200 Light Side
      ctx.beginPath();
      ctx.arc(moon.x, moon.y, moon.radius, 0, Math.PI * 2);
      ctx.fill();

      // C. Sharp Cel-Shaded Shadow Band Intersection Mask
      ctx.save();
      ctx.beginPath();
      ctx.arc(moon.x, moon.y, moon.radius, 0, Math.PI * 2);
      ctx.clip(); // Restricts downstream brushes exclusively inside the lunar core sphere

      ctx.fillStyle = '#cbd5e1'; // Darker Slate-300 shadow band
      ctx.beginPath();
      // Offsetting the arc circle cuts an explicit flat crescent vector line perfectly
      ctx.arc(moon.x - moon.radius * 0.38, moon.y + moon.radius * 0.38, moon.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore(); // Releases mask context safely

      // D. Flat Comic Vector Craters
      const drawCrater = (offsetX: number, offsetY: number, r: number) => {
        const cx = moon.x + offsetX;
        const cy = moon.y + offsetY;

        // Base structural crater shading depth tier
        ctx.fillStyle = '#94a3b8'; // Slate-400
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fill();

        // Floor highlight tier
        ctx.fillStyle = '#cbd5e1'; // Slate-300 floor step
        ctx.beginPath();
        ctx.arc(cx - r * 0.22, cy + r * 0.22, r * 0.78, 0, Math.PI * 2);
        ctx.fill();
      };

      // Output craters mapped to current vector points
      drawCrater(moon.radius * 0.32, -moon.radius * 0.18, moon.radius * 0.2); 
      drawCrater(-moon.radius * 0.15, -moon.radius * 0.48, moon.radius * 0.12); 
      drawCrater(moon.radius * 0.08, moon.radius * 0.42, moon.radius * 0.15);  

      // ─── 2. AMBIENT DUST LOGIC LAYER (WITH CURSOR REPEL COEFFICIENTS) ───
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Screen boundary wrapped loop parameters
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Interactive particle push field calculations
        if (mouse.x !== null && mouse.y !== null) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            const forceX = (dx / distance) * force * 0.5;
            const forceY = (dy / distance) * force * 0.5;
            p.x += forceX;
            p.y += forceY;
          }
        }

        // Output ambient dots cleanly behind DOM nodes
        ctx.fillStyle = `rgba(241, 245, 249, ${p.baseAlpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    // User action tracking bindings
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    resizeCanvas();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 block w-full h-full bg-slate-950"
    />
  );
}
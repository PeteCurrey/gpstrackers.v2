'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    const content = contentRef.current;

    if (!overlay || !content) return;

    // Entrance Animation
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Initial state: Content is slightly down and invisible
      gsap.set(content, { opacity: 0, y: 20 });
      // Initial state: Overlay is full height
      gsap.set(overlay, { scaleY: 1, transformOrigin: 'top' });

      tl.to(overlay, {
        scaleY: 0,
        duration: 0.8,
        ease: 'power4.inOut',
      })
      .to(content, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
      }, '-=0.3');
    });

    return () => ctx.revert();
  }, [pathname]);

  return (
    <>
      <div 
        ref={overlayRef} 
        className="fixed inset-0 z-[9999] bg-signal pointer-events-none" 
        style={{ transform: 'scaleY(1)' }}
      />
      <div ref={contentRef}>
        {children}
      </div>
    </>
  );
}

'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 11273, suffix: '', label: 'Cars stolen in the UK annually' },
  { value: 96, suffix: '%', label: 'Recovery rate with a professional tracker' },
  { value: 44, suffix: 'M+', prefix: '£', label: 'Rural asset theft in 2024 (NFU Mutual)' },
  { value: 14, suffix: ' days', label: 'Free trial — no credit card required' },
  { value: 4.92, suffix: '/mo', prefix: '£', label: 'Average tracker subscription cost', decimals: 2 },
];

export default function StatsStrip() {
  const containerRef = useRef<HTMLDivElement>(null);
  const numRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      stats.forEach((stat, i) => {
        const el = numRefs.current[i];
        if (!el) return;

        const obj = { val: 0 };
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: 'top 85%',
          onEnter: () => {
            gsap.to(obj, {
              val: stat.value,
              duration: 1.8,
              ease: 'power2.out',
              delay: i * 0.08,
              onUpdate: () => {
                const formatted =
                  stat.decimals
                    ? obj.val.toFixed(stat.decimals)
                    : Math.round(obj.val).toLocaleString('en-GB');
                el.textContent = `${stat.prefix || ''}${formatted}${stat.suffix}`;
              },
            });
          },
          once: true,
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      style={{
        background: 'var(--color-surface)',
        borderBottom: '1px solid var(--color-border)',
        borderTop: '1px solid var(--color-border)',
        padding: '3rem 0',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '2rem',
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              style={{
                textAlign: 'center',
                padding: '1rem',
                borderRight: i < stats.length - 1 ? '1px solid var(--color-border)' : 'none',
              }}
            >
              <div
                className="font-display"
                style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-signal)', display: 'block', lineHeight: 1 }}
              >
                <span ref={(el) => { numRefs.current[i] = el; }}>
                  {stat.prefix || ''}{stat.value.toLocaleString('en-GB')}{stat.suffix}
                </span>
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '13px',
                  color: 'var(--color-muted)',
                  marginTop: '0.4rem',
                  lineHeight: 1.4,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

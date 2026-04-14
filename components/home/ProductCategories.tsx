'use client';
import { useRef, useEffect } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    title: 'Vehicle Trackers',
    href: '/trackers/vehicle-trackers',
    desc: 'Cars, vans, motorcycles, motorhomes. Self-install or professional fit. Pay As You Go.',
    price: 'From £45 · From £59/year',
    stat: '10s update interval',
  },
  {
    title: 'Fleet Trackers',
    href: '/trackers/fleet-trackers',
    desc: 'Real-time fleet visibility. Driver behaviour. Route history. Geofencing.',
    price: 'From £45/vehicle · Fleet pricing available',
    stat: '24/7 live visibility',
  },
  {
    title: 'Insurance Approved',
    href: '/trackers/insurance-approved',
    desc: 'Thatcham-certified. Professional installation. Completion certificate same day.',
    price: 'S5 from £349 · S7 from £189',
    stat: 'Thatcham S5 & S7',
  },
  {
    title: 'Asset Trackers',
    href: '/trackers/asset-trackers',
    desc: 'Tools, equipment, trailers. Magnetic. No wiring. Runs for years.',
    price: 'From £105 · Up to 3-year battery',
    stat: '3-year battery life',
  },
  {
    title: 'Caravan & Motorhome',
    href: '/trackers/caravan-motorhome',
    desc: 'Specialist concealed installation. Geofence alerts. 4G network.',
    price: 'From £105 · Up to 4-year battery',
    stat: '4-year battery life',
  },
  {
    title: 'Plant & Machinery',
    href: '/trackers/plant-machinery',
    desc: 'Excavators, telehandlers, dumpers, tractors, and agricultural machinery.',
    price: 'From £105 · 3-year battery option',
    stat: 'Up to 90-day battery. Covert fit.',
  },
];

function GpsPin({ color = 'var(--color-signal)' }: { color?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
        fill={color}
        fillOpacity="0.8"
      />
      <circle cx="12" cy="9" r="2.5" fill="rgba(7,11,15,0.7)" />
    </svg>
  );
}

export default function ProductCategories() {
  const gridRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            delay: i * 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 85%',
              once: true,
            },
          }
        );
      });
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section-pad" style={{ background: 'var(--color-void)' }}>
      <div className="container">
        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.375rem)',
              fontWeight: 800,
              color: 'var(--color-white)',
              letterSpacing: '-0.02em',
              marginBottom: '0.75rem',
            }}
          >
            Track Everything. Know Everything.
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '17px', color: 'var(--color-muted)' }}>
            Six tracker categories. One platform.
          </p>
        </div>

        {/* 6-card grid */}
        <div
          ref={gridRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {categories.map((cat, i) => {
            const isPlant = cat.title === 'Plant & Machinery';
            const catColor = isPlant ? 'var(--color-alert)' : 'var(--color-signal)';
            const catBorder = isPlant ? 'rgba(245,158,11,0.25)' : 'rgba(14,165,233,0.25)';

            return (
              <Link
                key={cat.href}
                href={cat.href}
                ref={(el) => { cardsRef.current[i] = el; }}
                style={{ textDecoration: 'none', opacity: 0 }}
              >
                <div
                  className="glass-card card-signal-top"
                  style={{ 
                    padding: '1.5rem', 
                    height: '100%', 
                    cursor: 'pointer',
                    borderTop: `2px solid ${catColor}`
                  }}
                >
                  {/* Icon */}
                  <div style={{ marginBottom: '1rem' }}>
                    <GpsPin color={catColor} />
                  </div>

                  {/* Title */}
                  <div
                    className="font-display"
                    style={{
                      fontSize: '22px',
                      fontWeight: 700,
                      color: 'var(--color-white)',
                      marginBottom: '0.5rem',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {cat.title}
                  </div>

                  {/* Stat badge */}
                  <div
                    className="font-mono"
                    style={{
                      fontSize: '10px',
                      letterSpacing: '0.1em',
                      color: catColor,
                      textTransform: 'uppercase',
                      marginBottom: '0.75rem',
                    }}
                  >
                    {cat.stat}
                  </div>

                  {/* Desc */}
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontWeight: 300,
                      fontSize: '14px',
                      color: 'var(--color-muted)',
                      lineHeight: 1.65,
                      marginBottom: '1rem',
                    }}
                  >
                    {cat.desc}
                  </p>

                  {/* Price */}
                  <div
                    className="font-mono"
                    style={{
                      fontSize: '11px',
                      color: 'var(--color-muted)',
                      letterSpacing: '0.04em',
                      marginBottom: '1rem',
                    }}
                  >
                    {cat.price}
                  </div>

                  {/* Explore link */}
                  <div
                    style={{
                      color: catColor,
                      fontFamily: 'var(--font-body)',
                      fontSize: '13px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                    }}
                  >
                    Explore →
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

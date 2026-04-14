'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';

export default function Hero() {
  const labelRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.1 });

      // JetBrains label
      tl.fromTo(
        labelRef.current,
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' },
        0.1
      );
      // H1 line 1 clip reveal
      tl.fromTo(
        line1Ref.current,
        { clipPath: 'inset(0 0 100% 0)' },
        { clipPath: 'inset(0 0 0% 0)', duration: 0.6, ease: 'power3.out' },
        0.3
      );
      // H1 line 2
      tl.fromTo(
        line2Ref.current,
        { clipPath: 'inset(0 0 100% 0)' },
        { clipPath: 'inset(0 0 0% 0)', duration: 0.6, ease: 'power3.out' },
        0.5
      );
      // Body + CTAs
      tl.fromTo(
        bodyRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
        0.9
      );
      // Platform card
      tl.fromTo(
        cardRef.current,
        { opacity: 0, x: 40 },
        { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out' },
        0.7
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'var(--color-void)',
        paddingTop: '112px', /* 40px topbar + 72px nav */
      }}
    >
      {/* Coordinate grid texture */}
      <div
        className="coord-grid"
        style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
      />

      {/* Radial glow — bottom left */}
      <div
        style={{
          position: 'absolute',
          bottom: '-20%',
          left: '-10%',
          width: '70vw',
          height: '70vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Signal pulse — bottom right */}
      <div
        style={{
          position: 'absolute',
          bottom: '12%',
          right: '8%',
          width: '48px',
          height: '48px',
          pointerEvents: 'none',
        }}
      >
        {/* GPS pin */}
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="var(--color-signal)" />
            <circle cx="12" cy="9" r="2.5" fill="var(--color-void)" />
          </svg>
        </div>
        <div className="signal-pulse-ring" />
        <div className="signal-pulse-ring" />
        <div className="signal-pulse-ring" />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 0.85fr)',
            gap: '4rem',
            alignItems: 'center',
          }}
        >
          {/* Left content */}
          <div style={{ maxWidth: '640px' }}>
            {/* JetBrains label */}
            <div
              ref={labelRef}
              className="font-mono"
              style={{
                fontSize: '12px',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'var(--color-signal)',
                marginBottom: '1.5rem',
                opacity: 0,
              }}
            >
              // REAL-TIME GPS TRACKING
            </div>

            {/* H1 */}
            <h1 style={{ margin: 0, marginBottom: '1.5rem' }}>
              <div
                ref={line1Ref}
                className="font-display"
                style={{
                  fontSize: 'clamp(3rem, 8vw, 5.375rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  lineHeight: 0.96,
                  color: 'var(--color-white)',
                  clipPath: 'inset(0 0 100% 0)',
                  display: 'block',
                }}
              >
                TRACK EVERYTHING.
              </div>
              <div
                ref={line2Ref}
                className="font-display"
                style={{
                  fontSize: 'clamp(3rem, 8vw, 5.375rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  lineHeight: 0.96,
                  color: 'var(--color-white)',
                  clipPath: 'inset(0 0 100% 0)',
                  display: 'block',
                  marginTop: '0.1em',
                }}
              >
                KNOW EVERYTHING.
              </div>
            </h1>

            {/* Body + CTAs */}
            <div ref={bodyRef} style={{ opacity: 0 }}>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 300,
                  fontSize: '19px',
                  color: 'rgba(232,237,242,0.72)',
                  maxWidth: '460px',
                  lineHeight: 1.65,
                  marginBottom: '2.5rem',
                }}
              >
                Vehicle trackers, fleet management, insurance-approved devices, and asset protection. From £45. No contracts. Free 14-day trial.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <Link href="/shop" className="btn-signal" style={{ height: '48px', fontSize: '15px' }}>
                  Shop Trackers
                </Link>
                <Link
                  href="/find-my-tracker"
                  className="hero-secondary-link"
                >
                  Find My Tracker →
                </Link>
              </div>
            </div>
          </div>

          {/* Right: Platform mockup card */}
          <div ref={cardRef} style={{ opacity: 0 }} className="hero-card-desktop">
            <PlatformMockupCard />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.4rem',
          opacity: 0.4,
        }}
      >
        <div
          className="font-mono"
          style={{ fontSize: '9px', letterSpacing: '0.14em', color: 'var(--color-muted)', textTransform: 'uppercase' }}
        >
          Scroll
        </div>
        <div
          style={{
            width: '1px',
            height: '32px',
            background: 'linear-gradient(to bottom, var(--color-muted), transparent)',
            animation: 'scrollIndicator 2s ease-in-out infinite',
          }}
        />
      </div>

      <style>{`
        @keyframes scrollIndicator {
          0%, 100% { opacity: 0.4; transform: scaleY(1); }
          50% { opacity: 0.8; transform: scaleY(1.2); }
        }
        @media (max-width: 900px) {
          .hero-card-desktop { display: none; }
        }
      `}</style>
    </section>
  );
}

function PlatformMockupCard() {
  return (
    <div
      style={{
        background: 'rgba(13, 17, 23, 0.92)',
        border: '1px solid rgba(14,165,233,0.2)',
        borderRadius: '12px',
        padding: '0',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 40px 120px rgba(14,165,233,0.12), 0 0 0 1px rgba(14,165,233,0.08)',
      }}
    >
      {/* Card header */}
      <div
        style={{
          padding: '0.75rem 1rem',
          borderBottom: '1px solid var(--color-border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-success)', boxShadow: '0 0 6px var(--color-success)' }} />
          <span
            className="font-mono"
            style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', color: 'var(--color-signal)' }}
          >
            TRAVIO LIVE
          </span>
        </div>
        <span
          className="font-mono"
          style={{ fontSize: '10px', color: 'var(--color-muted)', letterSpacing: '0.06em' }}
        >
          ACTIVE FLEET VIEW
        </span>
      </div>

      {/* Map representation */}
      <div
        style={{
          position: 'relative',
          height: '180px',
          background: '#0a1520',
          overflow: 'hidden',
        }}
      >
        {/* Grid lines to simulate dark map */}
        <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0 }}>
          <defs>
            <pattern id="map-grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="rgba(14,165,233,0.06)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#map-grid)" />
          {/* Road lines */}
          <path d="M 60 20 Q 120 60 180 40 Q 240 20 300 80" stroke="rgba(14,165,233,0.12)" strokeWidth="3" fill="none" />
          <path d="M 20 100 Q 100 120 200 100 Q 280 80 340 130" stroke="rgba(14,165,233,0.1)" strokeWidth="2" fill="none" />
          <path d="M 0 60 L 400 60" stroke="rgba(14,165,233,0.06)" strokeWidth="1" />
          <path d="M 0 130 L 400 130" stroke="rgba(14,165,233,0.06)" strokeWidth="1" />

          {/* Vehicle pins */}
          <g transform="translate(90, 55)">
            <circle r="10" fill="rgba(14,165,233,0.15)" />
            <circle r="5" fill="var(--color-signal)" />
            <circle r="3" fill="white" />
          </g>
          <g transform="translate(210, 95)">
            <circle r="10" fill="rgba(14,165,233,0.15)" />
            <circle r="5" fill="var(--color-signal)" />
            <circle r="3" fill="white" />
          </g>
          <g transform="translate(310, 50)">
            <circle r="12" fill="rgba(245,158,11,0.2)" />
            <circle r="6" fill="var(--color-alert)" />
            <circle r="3" fill="white" />
          </g>
        </svg>

        {/* Signal pulse on active pin */}
        <div
          style={{
            position: 'absolute',
            top: '38px',
            left: '73px',
            width: '34px',
            height: '34px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}
        >
          <div className="signal-pulse-ring" style={{ transform: 'scale(0.6)', transformOrigin: 'center' }} />
        </div>
      </div>

      {/* Status panel */}
      <div style={{ padding: '0.875rem 1rem' }}>
        <div
          className="font-mono"
          style={{
            fontSize: '10px',
            color: 'var(--color-border)',
            letterSpacing: '0.06em',
            marginBottom: '0.625rem',
            paddingBottom: '0.375rem',
            borderBottom: '1px solid var(--color-border)',
          }}
        >
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        </div>

        {[
          { id: 'VAN 001', status: 'MOVING', detail: '42 mph', statusColor: 'var(--color-success)', dot: '●' },
          { id: 'VAN 002', status: 'PARKED', detail: 'Sheffield, S1', statusColor: 'var(--color-signal)', dot: '●' },
          { id: 'VAN 003', status: 'ALERT', detail: 'Geofence breach', statusColor: 'var(--color-alert)', dot: '⚠' },
        ].map((vehicle) => (
          <div
            key={vehicle.id}
            className="font-mono"
            style={{
              fontSize: '11px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0.3rem 0',
              letterSpacing: '0.04em',
            }}
          >
            <span style={{ color: 'var(--color-text)', minWidth: '64px' }}>{vehicle.id}</span>
            <span style={{ color: vehicle.statusColor, minWidth: '70px', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span>{vehicle.dot}</span>
              <span>{vehicle.status}</span>
            </span>
            <span style={{ color: 'var(--color-muted)', textAlign: 'right' }}>{vehicle.detail}</span>
          </div>
        ))}

        <div
          className="font-mono"
          style={{
            fontSize: '10px',
            color: 'var(--color-border)',
            letterSpacing: '0.06em',
            marginTop: '0.375rem',
            paddingTop: '0.375rem',
            borderTop: '1px solid var(--color-border)',
          }}
        >
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        </div>

        <div
          className="font-mono"
          style={{
            fontSize: '10px',
            color: 'var(--color-muted)',
            letterSpacing: '0.06em',
            marginTop: '0.375rem',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <span>LAST UPDATE</span>
          <span style={{ color: 'var(--color-success)' }}>2 seconds ago</span>
        </div>
      </div>
    </div>
  );
}

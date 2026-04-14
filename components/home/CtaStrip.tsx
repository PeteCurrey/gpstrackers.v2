import Link from 'next/link';

export default function CtaStrip() {
  return (
    <section
      style={{
        background: 'var(--color-signal)',
        padding: '4rem 0',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '2rem',
          }}
        >
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(1.75rem, 4vw, 3rem)',
              fontWeight: 800,
              color: 'var(--color-void)',
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
            }}
          >
            Start your free 14-day trial today.
          </h2>

          <div style={{ display: 'flex', gap: '1rem', flexShrink: 0, flexWrap: 'wrap' }}>
            <Link
              href="/shop"
              className="cta-strip-primary"
            >
              Shop Trackers
            </Link>
            <Link
              href="/find-my-tracker"
              className="cta-strip-secondary"
            >
              Find My Tracker →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

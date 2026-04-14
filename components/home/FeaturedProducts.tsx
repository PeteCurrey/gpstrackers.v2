'use client';
import Link from 'next/link';

// Seeded product data (mirrors Sanity schema — used for fallback/demo)
const featuredProducts = [
  {
    id: 'travio-fs100',
    name: 'Travio FS100',
    slug: 'travio-fs100',
    category: 'Fleet / Vehicle',
    tagline: 'The professional fleet standard',
    price: 45,
    compareAtPrice: 65,
    subscriptionAnnual: 59,
    installType: 'Hardwired',
    specs: {
      INSTALL: 'Permanent wire',
      UPDATE: 'Every 10 seconds',
      COVERAGE: '120+ countries',
    },
  },
  {
    id: 'travio-at1',
    name: 'Travio AT1',
    slug: 'travio-at1',
    category: 'Asset Tracker',
    tagline: '3-year battery, magnetic mount',
    price: 105,
    compareAtPrice: undefined,
    subscriptionAnnual: 30,
    installType: 'Magnetic',
    specs: {
      INSTALL: 'Self-fit magnetic',
      UPDATE: 'Every 60 seconds',
      BATTERY: '3-year life',
    },
  },
  {
    id: 'travio-s7',
    name: 'Travio S7 Insurance',
    slug: 'travio-s7',
    category: 'Insurance Approved',
    tagline: 'Thatcham S7 — nationally installed',
    price: 189,
    compareAtPrice: 329,
    subscriptionAnnual: 59,
    installType: 'Professional',
    specs: {
      THATCHAM: 'S7 approved',
      INSTALL: 'Nationwide booking',
      MONITORING: '24/7 Euro control',
    },
  },
  {
    id: 'caravan-shield-ct1',
    name: 'Caravan Shield CT1',
    slug: 'caravan-shield-ct1',
    category: 'Caravan & Motorhome',
    tagline: '4-year battery, concealed installation',
    price: 105,
    compareAtPrice: undefined,
    subscriptionAnnual: 30,
    installType: 'Professional',
    specs: {
      BATTERY: '4-year life',
      INSTALL: 'Concealed fit',
      NETWORK: '4G multi-band',
    },
  },
];

function SignalBars() {
  return (
    <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
      <rect x="0" y="10" width="4" height="6" rx="1" fill="var(--color-signal)" />
      <rect x="5.5" y="6" width="4" height="10" rx="1" fill="var(--color-signal)" />
      <rect x="11" y="2" width="4" height="14" rx="1" fill="var(--color-signal)" />
      <rect x="16.5" y="0" width="3.5" height="16" rx="1" fill="rgba(14,165,233,0.25)" />
    </svg>
  );
}

export default function FeaturedProducts() {
  return (
    <section className="section-pad" style={{ background: 'var(--color-void)' }}>
      <div className="container">
        {/* Heading */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.375rem)',
              fontWeight: 800,
              color: 'var(--color-white)',
              letterSpacing: '-0.02em',
            }}
          >
            Our Most Popular Trackers
          </h2>
          <Link
            href="/shop"
            style={{ color: 'var(--color-signal)', fontFamily: 'var(--font-body)', fontSize: '14px', textDecoration: 'none' }}
          >
            View all →
          </Link>
        </div>

        {/* 4-card grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {featuredProducts.map((p) => (
            <div
              key={p.id}
              className="glass-card card-signal-top"
              style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}
            >
              {/* Signal bars */}
              <div style={{ marginBottom: '1rem' }}>
                <SignalBars />
              </div>

              {/* Category badge */}
              <div
                className="font-mono"
                style={{
                  display: 'inline-block',
                  fontSize: '10px',
                  letterSpacing: '0.1em',
                  color: 'var(--color-signal)',
                  border: '1px solid rgba(14,165,233,0.3)',
                  borderRadius: '4px',
                  padding: '2px 8px',
                  marginBottom: '0.75rem',
                  textTransform: 'uppercase',
                  alignSelf: 'flex-start',
                }}
              >
                {p.category}
              </div>

              {/* Product name */}
              <div
                className="font-display"
                style={{ fontSize: '22px', fontWeight: 700, color: 'var(--color-white)', marginBottom: '0.25rem', letterSpacing: '-0.01em' }}
              >
                {p.name}
              </div>

              {/* Tagline */}
              <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '13px', color: 'var(--color-muted)', marginBottom: '1.25rem' }}>
                {p.tagline}
              </p>

              {/* Pricing */}
              <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                {p.compareAtPrice && (
                  <span className="font-display" style={{ fontSize: '18px', color: 'var(--color-muted)', textDecoration: 'line-through' }}>
                    £{p.compareAtPrice}
                  </span>
                )}
                <span className="font-display" style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-white)' }}>
                  £{p.price}
                </span>
              </div>
              <div className="font-mono" style={{ fontSize: '11px', color: 'var(--color-muted)', marginBottom: '1.25rem', letterSpacing: '0.04em' }}>
                + £{p.subscriptionAnnual}/year subscription
              </div>

              {/* Specs */}
              <div
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  borderRadius: '6px',
                  padding: '0.75rem',
                  marginBottom: '1.25rem',
                  flex: 1,
                }}
              >
                {Object.entries(p.specs).map(([key, val]) => (
                  <div key={key} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem' }}>
                    <span className="font-mono" style={{ fontSize: '10px', color: 'var(--color-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                      {key}
                    </span>
                    <span className="font-mono" style={{ fontSize: '10px', color: 'var(--color-text)', letterSpacing: '0.04em' }}>
                      {val}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                href={`/shop/${p.slug}`}
                className="btn-signal"
                style={{ width: '100%', justifyContent: 'center', height: '42px', fontSize: '14px' }}
              >
                Add to Cart
              </Link>
              <Link
                href={`/shop/${p.slug}`}
                style={{
                  textAlign: 'center',
                  color: 'var(--color-muted)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '13px',
                  textDecoration: 'none',
                  marginTop: '0.5rem',
                  transition: 'color 0.15s',
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--color-signal)')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--color-muted)')}
              >
                View details →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

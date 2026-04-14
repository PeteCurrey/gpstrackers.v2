'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';

type Category = 'all' | 'vehicle' | 'fleet' | 'insurance' | 'asset' | 'caravan' | 'personal';
type PriceRange = 'all' | 'under100' | '100to300' | 'over300';
type InstallType = 'all' | 'self' | 'professional' | 'magnetic';

const allProducts = [
  { id: 'travio-fs100', name: 'Travio FS100', slug: 'travio-fs100', category: 'fleet', tagline: 'The professional fleet standard', price: 45, compareAtPrice: 65, subscriptionAnnual: 59, installType: 'self', thatcham: null },
  { id: 'travio-fs003', name: 'Travio FS003', slug: 'travio-fs003', category: 'vehicle', tagline: 'OBD plug & play — live in 60 seconds', price: 105, subscriptionAnnual: 59, installType: 'self', thatcham: null },
  { id: 'travio-llb', name: 'Travio LLB', slug: 'travio-llb', category: 'asset', tagline: '40-day battery, magnetic mount', price: 150, subscriptionAnnual: 30, installType: 'magnetic', thatcham: null },
  { id: 'travio-at1', name: 'Travio AT1', slug: 'travio-at1', category: 'asset', tagline: '3-year battery — truly covert', price: 105, subscriptionAnnual: 30, installType: 'magnetic', thatcham: null },
  { id: 'travio-s7', name: 'Travio S7 Insurance', slug: 'travio-s7', category: 'insurance', tagline: 'Thatcham S7 — professionally installed', price: 189, compareAtPrice: 329, subscriptionAnnual: 59, installType: 'professional', thatcham: 'S7' },
  { id: 'travio-s5', name: 'Travio S5', slug: 'travio-s5', category: 'insurance', tagline: 'Thatcham S5 with ADR fobs', price: 349, compareAtPrice: 449, subscriptionAnnual: 59, installType: 'professional', thatcham: 'S5' },
  { id: 'travio-s5plus', name: 'Travio S5+', slug: 'travio-s5plus', category: 'insurance', tagline: 'S5 with remote immobilisation', price: 549, compareAtPrice: 599, subscriptionAnnual: 59, installType: 'professional', thatcham: 'S5' },
  { id: 'caravan-shield-ct1', name: 'Caravan Shield CT1', slug: 'caravan-shield-ct1', category: 'caravan', tagline: '4-year battery, concealed installation', price: 105, subscriptionAnnual: 30, installType: 'professional', thatcham: null },
];

const categoryLabels: Record<Category, string> = {
  all: 'All Trackers',
  vehicle: 'Vehicle',
  fleet: 'Fleet',
  insurance: 'Insurance',
  asset: 'Asset',
  caravan: 'Caravan & Motorhome',
  personal: 'Personal & Pet',
};

function SignalBars({ dim = false }: { dim?: boolean }) {
  return (
    <svg width="18" height="14" viewBox="0 0 20 16" fill="none">
      <rect x="0" y="10" width="4" height="6" rx="1" fill={dim ? 'rgba(14,165,233,0.25)' : 'var(--color-signal)'} />
      <rect x="5.5" y="6" width="4" height="10" rx="1" fill={dim ? 'rgba(14,165,233,0.25)' : 'var(--color-signal)'} />
      <rect x="11" y="2" width="4" height="14" rx="1" fill={dim ? 'rgba(14,165,233,0.25)' : 'var(--color-signal)'} />
      <rect x="16.5" y="0" width="3.5" height="16" rx="1" fill="rgba(14,165,233,0.12)" />
    </svg>
  );
}

export default function ShopPage() {
  const [category, setCategory] = useState<Category>('all');
  const [priceRange, setPriceRange] = useState<PriceRange>('all');
  const [install, setInstall] = useState<InstallType>('all');
  const [sort, setSort] = useState<'popular' | 'price-asc' | 'price-desc'>('popular');

  const filtered = useMemo(() => {
    let p = [...allProducts];
    if (category !== 'all') p = p.filter((x) => x.category === category);
    if (priceRange === 'under100') p = p.filter((x) => x.price < 100);
    if (priceRange === '100to300') p = p.filter((x) => x.price >= 100 && x.price <= 300);
    if (priceRange === 'over300') p = p.filter((x) => x.price > 300);
    if (install !== 'all') p = p.filter((x) => x.installType === install);
    if (sort === 'price-asc') p.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') p.sort((a, b) => b.price - a.price);
    return p;
  }, [category, priceRange, install, sort]);

  const filterBtn = (active: boolean) => ({
    fontFamily: 'var(--font-mono)',
    fontSize: '11px',
    letterSpacing: '0.08em',
    padding: '0.4rem 0.875rem',
    borderRadius: '4px',
    cursor: 'pointer',
    border: active ? '1px solid var(--color-signal)' : '1px solid var(--color-border)',
    background: active ? 'rgba(14,165,233,0.1)' : 'transparent',
    color: active ? 'var(--color-signal)' : 'var(--color-muted)',
    transition: 'all 0.15s',
    textTransform: 'uppercase' as const,
  });

  return (
    <>
      {/* Hero */}
      <section
        style={{
          paddingTop: '140px',
          paddingBottom: '3rem',
          background: 'var(--color-void)',
          borderBottom: '1px solid var(--color-border)',
        }}
      >
        <div className="container">
          <div className="font-mono" style={{ fontSize: '11px', color: 'var(--color-signal)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            // GPS TRACKER STORE
          </div>
          <h1
            className="font-display"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 3.75rem)', fontWeight: 800, color: 'var(--color-white)', letterSpacing: '-0.02em', marginBottom: '0.75rem' }}
          >
            Shop GPS Trackers
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '17px', color: 'var(--color-muted)', maxWidth: '520px' }}>
            Eight devices. Every use case. All on one platform. From £45 with a free 14-day trial.
          </p>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="section-pad" style={{ background: 'var(--color-void)' }}>
        <div className="container">
          {/* Filter bar */}
          <div style={{ marginBottom: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {/* Category */}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <span className="font-mono" style={{ fontSize: '10px', color: 'var(--color-muted)', letterSpacing: '0.12em', textTransform: 'uppercase', marginRight: '0.25rem' }}>CATEGORY</span>
              {(Object.keys(categoryLabels) as Category[]).map((c) => (
                <button key={c} onClick={() => setCategory(c)} style={filterBtn(category === c)}>
                  {categoryLabels[c]}
                </button>
              ))}
            </div>
            {/* Price + Install + Sort */}
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <span className="font-mono" style={{ fontSize: '10px', color: 'var(--color-muted)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>PRICE</span>
                {(['all', 'under100', '100to300', 'over300'] as PriceRange[]).map((p) => (
                  <button key={p} onClick={() => setPriceRange(p)} style={filterBtn(priceRange === p)}>
                    {p === 'all' ? 'Any' : p === 'under100' ? 'Under £100' : p === '100to300' ? '£100–£300' : '£300+'}
                  </button>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <span className="font-mono" style={{ fontSize: '10px', color: 'var(--color-muted)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>INSTALL</span>
                {(['all', 'self', 'professional', 'magnetic'] as InstallType[]).map((i) => (
                  <button key={i} onClick={() => setInstall(i)} style={filterBtn(install === i)}>
                    {i === 'all' ? 'Any' : i === 'self' ? 'Self-install' : i === 'professional' ? 'Professional' : 'Magnetic'}
                  </button>
                ))}
              </div>
              <div style={{ marginLeft: 'auto', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <span className="font-mono" style={{ fontSize: '10px', color: 'var(--color-muted)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>SORT</span>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value as typeof sort)}
                  style={{
                    background: 'var(--color-surface-2)',
                    border: '1px solid var(--color-border)',
                    color: 'var(--color-text)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    padding: '0.35rem 0.75rem',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    letterSpacing: '0.06em',
                  }}
                >
                  <option value="popular">POPULARITY</option>
                  <option value="price-asc">PRICE: LOW–HIGH</option>
                  <option value="price-desc">PRICE: HIGH–LOW</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results count */}
          <div className="font-mono" style={{ fontSize: '11px', color: 'var(--color-muted)', letterSpacing: '0.08em', marginBottom: '1.5rem' }}>
            {filtered.length} TRACKER{filtered.length !== 1 ? 'S' : ''} FOUND
          </div>

          {/* Product grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {filtered.map((p) => (
              <div key={p.id} className="glass-card card-signal-top" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <SignalBars />
                  {p.thatcham && (
                    <span className="font-mono" style={{ fontSize: '9px', letterSpacing: '0.1em', color: 'var(--color-alert)', border: '1px solid rgba(245,158,11,0.3)', borderRadius: '3px', padding: '2px 6px' }}>
                      THATCHAM {p.thatcham}
                    </span>
                  )}
                </div>

                <span className="font-mono" style={{ fontSize: '10px', letterSpacing: '0.1em', color: 'var(--color-signal)', border: '1px solid rgba(14,165,233,0.25)', borderRadius: '4px', padding: '2px 8px', alignSelf: 'flex-start', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
                  {p.category}
                </span>

                <div className="font-display" style={{ fontSize: '20px', fontWeight: 700, color: 'var(--color-white)', marginBottom: '0.25rem' }}>
                  {p.name}
                </div>
                <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '13px', color: 'var(--color-muted)', marginBottom: '1.25rem', flex: 1 }}>
                  {p.tagline}
                </p>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '0.25rem' }}>
                  {p.compareAtPrice && (
                    <span className="font-display" style={{ fontSize: '16px', color: 'var(--color-muted)', textDecoration: 'line-through' }}>£{p.compareAtPrice}</span>
                  )}
                  <span className="font-display" style={{ fontSize: '1.875rem', fontWeight: 700, color: 'var(--color-white)' }}>£{p.price}</span>
                </div>
                <div className="font-mono" style={{ fontSize: '10px', color: 'var(--color-muted)', marginBottom: '1.25rem', letterSpacing: '0.04em' }}>
                  + £{p.subscriptionAnnual}/year subscription
                </div>

                <Link href={`/shop/${p.slug}`} className="btn-signal" style={{ width: '100%', justifyContent: 'center', height: '40px', fontSize: '13px' }}>
                  View Details →
                </Link>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '5rem 0', color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              No trackers match your current filters. <button onClick={() => { setCategory('all'); setPriceRange('all'); setInstall('all'); }} style={{ background: 'none', border: 'none', color: 'var(--color-signal)', cursor: 'pointer', fontFamily: 'var(--font-body)', fontSize: '15px' }}>Clear filters</button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

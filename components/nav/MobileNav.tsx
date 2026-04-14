'use client';
import { useEffect } from 'react';
import Link from 'next/link';

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

const navSections = [
  {
    title: 'Trackers',
    links: [
      { label: 'Vehicle Trackers', href: '/trackers/vehicle-trackers' },
      { label: 'Fleet Trackers', href: '/trackers/fleet-trackers' },
      { label: 'Insurance Approved', href: '/trackers/insurance-approved' },
      { label: 'Asset Trackers', href: '/trackers/asset-trackers' },
      { label: 'Caravan & Motorhome', href: '/trackers/caravan-motorhome' },
      { label: 'Personal & Pet', href: '/trackers/personal-pet' },
    ],
  },
  {
    title: 'Fleet',
    links: [
      { label: 'Fleet Management', href: '/fleet' },
      { label: 'Case Studies', href: '/case-studies' },
    ],
  },
  {
    title: 'More',
    links: [
      { label: 'Platform', href: '/platform' },
      { label: 'How It Works', href: '/how-it-works' },
      { label: 'Shop All', href: '/shop' },
      { label: 'Find My Tracker', href: '/find-my-tracker' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];

export default function MobileNav({ open, onClose }: MobileNavProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        background: 'var(--color-void)',
        transform: open ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
        overflowY: 'auto',
        padding: '2rem 1.5rem 3rem',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
        <Link
          href="/"
          onClick={onClose}
          className="font-display"
          style={{ fontSize: '24px', fontWeight: 800, letterSpacing: '0.08em', color: 'var(--color-white)', textDecoration: 'none' }}
        >
          TRAVIO
        </Link>
        <button
          onClick={onClose}
          aria-label="Close menu"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text)', padding: '4px' }}
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M6 6l16 16M22 6L6 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Nav sections */}
      {navSections.map((section) => (
        <div key={section.title} style={{ marginBottom: '2rem' }}>
          <div
            className="font-mono"
            style={{
              fontSize: '10px',
              letterSpacing: '0.14em',
              color: 'var(--color-muted)',
              textTransform: 'uppercase',
              marginBottom: '0.75rem',
              paddingBottom: '0.5rem',
              borderBottom: '1px solid var(--color-border)',
            }}
          >
            {section.title}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.125rem' }}>
            {section.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="mobile-nav-link"
                >
                  {link.label}
                </Link>
            ))}
          </div>
        </div>
      ))}

      {/* CTA */}
      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingTop: '2rem' }}>
        <Link href="/find-my-tracker" onClick={onClose} className="btn-signal" style={{ width: '100%', justifyContent: 'center' }}>
          Find My Tracker
        </Link>
        <Link href="/shop" onClick={onClose} className="btn-ghost" style={{ width: '100%', justifyContent: 'center' }}>
          Shop Trackers
        </Link>
        <div
          className="font-mono"
          style={{ textAlign: 'center', fontSize: '12px', color: 'var(--color-muted)', marginTop: '0.5rem' }}
        >
          03300 600 499
        </div>
      </div>
    </div>
  );
}

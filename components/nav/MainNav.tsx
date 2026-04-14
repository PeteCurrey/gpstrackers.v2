'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import MobileNav from './MobileNav';
import CartIcon from './CartIcon';

const trackerLinks = [
  { label: 'Vehicle Trackers', href: '/trackers/vehicle-trackers', desc: 'Cars, vans, motorcycles' },
  { label: 'Fleet Trackers', href: '/trackers/fleet-trackers', desc: 'Full fleet management' },
  { label: 'Insurance Approved', href: '/trackers/insurance-approved', desc: 'Thatcham S5 & S7' },
  { label: 'Asset Trackers', href: '/trackers/asset-trackers', desc: '3-year battery life' },
  { label: 'Caravan & Motorhome', href: '/trackers/caravan-motorhome', desc: '4-year battery, concealed' },
  { label: 'Personal & Pet', href: '/trackers/personal-pet', desc: 'Family & lone worker' },
];

const fleetLinks = [
  { label: 'Fleet Management', href: '/fleet', desc: 'Full fleet visibility' },
  { label: 'ROI Calculator', href: '/fleet#roi', desc: 'Calculate your savings' },
  { label: 'Case Studies', href: '/case-studies', desc: 'Real-world results' },
];

export default function MainNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (key: string) => {
    if (dropdownTimer.current) clearTimeout(dropdownTimer.current);
    setActiveDropdown(key);
  };

  const handleMouseLeave = () => {
    dropdownTimer.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 40,
          left: 0,
          right: 0,
          height: '72px',
          zIndex: 50,
          display: 'flex',
          alignItems: 'center',
          transition: 'background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease',
          ...(scrolled
            ? {
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                background: 'rgba(7, 11, 15, 0.88)',
                borderBottom: '1px solid var(--color-border)',
              }
            : {
                background: 'transparent',
                borderBottom: '1px solid transparent',
              }),
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            className="font-display"
            style={{
              fontSize: '22px',
              fontWeight: 800,
              letterSpacing: '0.08em',
              color: 'var(--color-white)',
              textDecoration: 'none',
              flexShrink: 0,
            }}
          >
            TRAVIO
          </Link>

          {/* Desktop nav links */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem',
              flex: 1,
              justifyContent: 'center',
            }}
            className="hidden-mobile"
          >
            {/* Trackers dropdown */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => handleMouseEnter('trackers')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                style={{
                  background: 'none',
                  border: 'none',
                  color: activeDropdown === 'trackers' ? 'var(--color-signal)' : 'var(--color-text)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  cursor: 'pointer',
                  padding: '0.5rem 0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  transition: 'color 0.2s',
                }}
              >
                Trackers
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {activeDropdown === 'trackers' && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    marginTop: '8px',
                    background: 'var(--color-surface-2)',
                    border: '1px solid var(--color-border)',
                    borderTop: '2px solid var(--color-signal)',
                    borderRadius: '8px',
                    padding: '0.75rem',
                    minWidth: '560px',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '0.25rem',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                    zIndex: 100,
                  }}
                >
                  {trackerLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setActiveDropdown(null)}
                      className="nav-dropdown-item"
                    >
                      <div className="nav-dropdown-title">
                        {link.label}
                      </div>
                      <div className="nav-dropdown-desc">
                        {link.desc}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Fleet dropdown */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => handleMouseEnter('fleet')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                style={{
                  background: 'none',
                  border: 'none',
                  color: activeDropdown === 'fleet' ? 'var(--color-signal)' : 'var(--color-text)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  cursor: 'pointer',
                  padding: '0.5rem 0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  transition: 'color 0.2s',
                }}
              >
                Fleet
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {activeDropdown === 'fleet' && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    marginTop: '8px',
                    background: 'var(--color-surface-2)',
                    border: '1px solid var(--color-border)',
                    borderTop: '2px solid var(--color-signal)',
                    borderRadius: '8px',
                    padding: '0.75rem',
                    minWidth: '240px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.25rem',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                    zIndex: 100,
                  }}
                >
                  {fleetLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setActiveDropdown(null)}
                      className="nav-dropdown-item"
                    >
                      <div className="nav-dropdown-title">
                        {link.label}
                      </div>
                      <div className="nav-dropdown-desc">
                        {link.desc}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {[
              { label: 'Platform', href: '/platform' },
              { label: 'How It Works', href: '/how-it-works' },
              { label: 'Shop', href: '/shop' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
            <Link
              href="/find-my-tracker"
              className="btn-ghost hidden-mobile"
              style={{ height: '36px', fontSize: '13px', padding: '0 1rem' }}
            >
              Find My Tracker
            </Link>
            <CartIcon />
            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="show-mobile"
              aria-label="Open menu"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                gap: '5px',
                padding: '4px',
              }}
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    display: 'block',
                    width: '24px',
                    height: '2px',
                    background: 'var(--color-text)',
                    borderRadius: '2px',
                    transition: 'background 0.2s',
                  }}
                />
              ))}
            </button>
          </div>
        </div>
      </nav>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />

      <style>{`
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile   { display: none !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: flex !important; }
        }
      `}</style>
    </>
  );
}

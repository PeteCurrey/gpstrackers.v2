'use client';
import Link from 'next/link';
import { useCartStore } from '@/lib/cart/cartStore';

export default function CartIcon() {
  const count = useCartStore((s) => s.items.reduce((acc, i) => acc + i.quantity, 0));

  return (
    <Link
      href="/cart"
      aria-label={`Cart — ${count} items`}
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
        height: '40px',
        color: 'var(--color-text)',
        textDecoration: 'none',
        transition: 'color 0.2s',
      }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--color-signal)')}
      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--color-text)')}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 01-8 0" />
      </svg>
      {count > 0 && (
        <span
          style={{
            position: 'absolute',
            top: '4px',
            right: '4px',
            background: 'var(--color-signal)',
            color: '#fff',
            fontSize: '10px',
            fontFamily: 'var(--font-mono)',
            fontWeight: 500,
            borderRadius: '50%',
            width: '16px',
            height: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            lineHeight: 1,
          }}
        >
          {count > 9 ? '9+' : count}
        </span>
      )}
    </Link>
  );
}

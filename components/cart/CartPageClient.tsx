'use client';

import { useCartStore } from '@/lib/cart/cartStore';
import Link from 'next/link';
import Image from 'next/image';

export default function CartPageClient() {
  const { items, removeItem, updateQuantity, toggleSubscription, total } = useCartStore();

  const subtotal = total();

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
        <div className="w-24 h-24 rounded-full bg-surface-2 flex items-center justify-center mb-8">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--color-muted)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>
        </div>
        <h2 className="display-lg text-white mb-4">Your cart is empty.</h2>
        <p className="font-body text-muted mb-10">Looks like you haven't added any trackers yet.</p>
        <Link href="/shop" className="btn-signal h-14 px-12 text-base font-medium">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
      
      {/* Items List */}
      <div className="lg:col-span-2 flex flex-col gap-6">
        {items.map((item) => (
          <div key={item.id} className="glass-card p-6 flex flex-col md:flex-row gap-8 items-start md:items-center relative">
            <button 
                onClick={() => removeItem(item.id)}
                className="absolute top-4 right-4 text-muted hover:text-alert transition-colors"
                title="Remove item"
            >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
            
            {/* Mock Image */}
            <div className="w-24 h-24 bg-surface-2 rounded-lg border border-border flex items-center justify-center flex-shrink-0">
                <div className="w-1/2 h-1/2 border border-signal/20 rounded-md bg-signal/10 transition-all group-hover:bg-signal/20" />
            </div>

            <div className="flex-1">
                <div className="mono-label text-[10px] mb-1">{item.category}</div>
                <h3 className="font-display text-xl text-white mb-1">{item.name}</h3>
                <div className="font-mono text-sm text-signal mb-4">£{item.price}</div>
                
                {/* Subscription Toggle in Cart */}
                {item.subscriptionAnnual && (
                    <div 
                        className="flex items-center gap-3 cursor-pointer group"
                        onClick={() => toggleSubscription(item.id)}
                    >
                        <div className={`w-8 h-4 rounded-full relative transition-colors ${item.includeSubscription ? 'bg-signal' : 'bg-surface-2'}`}>
                            <div className={`absolute top-0.5 w-3 h-3 bg-white rounded-full transition-all ${item.includeSubscription ? 'left-4.5' : 'left-0.5'}`} />
                        </div>
                        <span className={`font-mono text-[10px] uppercase tracking-widest ${item.includeSubscription ? 'text-white' : 'text-muted group-hover:text-white'}`}>
                            Connect+ Subscription (£{item.subscriptionAnnual}/yr)
                        </span>
                    </div>
                )}
            </div>

            <div className="flex items-center h-10 bg-surface-2 border border-border rounded overflow-hidden">
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="w-10 h-full flex items-center justify-center text-muted hover:text-white transition-colors"
                >
                  <svg width="10" height="2" viewBox="0 0 12 2" fill="currentColor"><rect width="12" height="2" rx="1" /></svg>
                </button>
                <span className="w-10 text-center font-mono text-white text-xs">{item.quantity}</span>
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="w-10 h-full flex items-center justify-center text-muted hover:text-white transition-colors"
                >
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="currentColor"><path d="M5 5V0h2v5h5v2H7v5H5V7H0V5h5z" /></svg>
                </button>
            </div>

            <div className="w-24 text-right">
                <div className="font-display text-xl font-bold text-white">
                    £{ (item.price + (item.includeSubscription && item.subscriptionAnnual ? item.subscriptionAnnual : 0)) * item.quantity }
                </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Sidebar */}
      <div className="glass-card p-8 bg-surface-2 border-border sticky top-32">
        <h3 className="font-display text-2xl text-white mb-8">Order Summary</h3>
        
        <div className="flex flex-col gap-4 mb-8">
            <div className="flex justify-between items-center py-2 border-b border-border/50">
                <span className="font-body text-muted">Subtotal</span>
                <span className="font-mono text-white">£{subtotal}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-border/50">
                <span className="font-body text-muted">Shipping</span>
                <span className="font-mono text-success uppercase text-xs font-bold tracking-widest">FREE NEXT DAY</span>
            </div>
            <div className="flex justify-between items-center pt-4">
                <span className="font-display text-xl text-white font-bold">Total</span>
                <span className="font-display text-3xl text-white font-bold">£{subtotal}</span>
            </div>
            <div className="font-mono text-[9px] text-muted uppercase text-center mt-2 tracking-widest">Includes VAT at 20%</div>
        </div>

        <Link href="/checkout" className="btn-signal w-full h-14 text-base font-medium flex items-center justify-center gap-3">
            Checkout Securely
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
        </Link>
        
        <div className="mt-8 flex flex-col gap-4">
            <div className="flex items-center gap-3 justify-center grayscale opacity-50">
                {/* Mock card logos */}
                <div className="w-8 h-5 bg-white/10 rounded" />
                <div className="w-8 h-5 bg-white/10 rounded" />
                <div className="w-8 h-5 bg-white/10 rounded" />
                <div className="w-8 h-5 bg-white/10 rounded" />
            </div>
            <p className="font-body text-[10px] text-muted text-center leading-relaxed">
                By checking out, you agree to our Terms of Service. Every tracker comes with a 14-day money-back guarantee.
            </p>
        </div>
      </div>

    </div>
  );
}

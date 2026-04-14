'use client';

import { useCartStore } from '@/lib/cart/cartStore';
import Link from 'next/link';

export default function CheckoutPage() {
  const { total } = useCartStore();
  const subtotal = total();

  return (
    <div className="bg-void min-h-screen pt-40 pb-20">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <h1 className="display-xl text-white mb-12">Checkout</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            
            {/* Left: Checkout Form Stub */}
            <div className="flex flex-col gap-10">
                
                {/* 1. Delivery Contact */}
                <div>
                   <div className="flex items-center gap-4 mb-6">
                      <div className="w-8 h-8 rounded-full bg-signal text-void flex items-center justify-center font-bold text-xs uppercase">01</div>
                      <h2 className="display-md text-white">Delivery Details</h2>
                   </div>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input type="text" placeholder="First Name" className="bg-surface-2 border border-border rounded-lg h-12 px-4 font-body text-white focus:border-signal outline-none" />
                      <input type="text" placeholder="Last Name" className="bg-surface-2 border border-border rounded-lg h-12 px-4 font-body text-white focus:border-signal outline-none" />
                      <input type="email" placeholder="Email Address" className="bg-surface-2 border border-border rounded-lg h-12 px-4 font-body text-white focus:border-signal outline-none sm:col-span-2" />
                      <input type="tel" placeholder="Phone Number" className="bg-surface-2 border border-border rounded-lg h-12 px-4 font-body text-white focus:border-signal outline-none sm:col-span-2" />
                      <input type="text" placeholder="Address Line 1" className="bg-surface-2 border border-border rounded-lg h-12 px-4 font-body text-white focus:border-signal outline-none sm:col-span-2" />
                      <input type="text" placeholder="Town / City" className="bg-surface-2 border border-border rounded-lg h-12 px-4 font-body text-white focus:border-signal outline-none" />
                      <input type="text" placeholder="Postcode" className="bg-surface-2 border border-border rounded-lg h-12 px-4 font-body text-white focus:border-signal outline-none" />
                   </div>
                </div>

                {/* 2. Payment Stub */}
                <div>
                   <div className="flex items-center gap-4 mb-6">
                      <div className="w-8 h-8 rounded-full bg-signal text-void flex items-center justify-center font-bold text-xs uppercase">02</div>
                      <h2 className="display-md text-white">Payment Method</h2>
                   </div>
                   <div className="glass-card p-12 border-dashed border-border flex flex-col items-center justify-center text-center">
                       <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-muted)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-4"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
                       <p className="font-body text-muted text-sm max-w-xs">
                          Stripe Elements Integration Placeholder. 
                          Connect your Stripe keys in <code className="text-signal bg-white/5 px-1 rounded">.env.local</code> to enable real payments.
                       </p>
                   </div>
                </div>

            </div>

            {/* Right: Summary */}
            <div className="glass-card p-8 lg:p-12 border-border sticky top-32">
                <h3 className="font-display text-2xl text-white mb-8 pb-4 border-b border-border">Review & Pay</h3>
                
                <div className="flex flex-col gap-4 mb-8">
                    <div className="flex justify-between items-center py-2">
                        <span className="font-body text-muted">Items Subtotal</span>
                        <span className="font-mono text-white">£{subtotal}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                        <span className="font-body text-muted">Shipping</span>
                        <span className="font-mono text-success text-xs font-bold uppercase tracking-widest">FREE</span>
                    </div>
                    <div className="flex justify-between items-center mt-4 pt-6 border-t border-border">
                        <span className="font-display text-2xl text-white font-bold">Total Due</span>
                        <span className="font-display text-4xl text-white font-bold">£{subtotal}</span>
                    </div>
                </div>

                <button 
                  disabled
                  className="w-full h-16 bg-signal/10 border border-signal/30 text-signal font-display text-lg font-bold rounded-lg cursor-not-allowed opacity-50 flex items-center justify-center gap-3"
                >
                    Complete Secure Payment
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
                </button>
                
                <div className="mt-8 flex flex-col gap-4">
                    <div className="flex items-center gap-3 p-4 glass-card border-none bg-white/[0.02]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-success)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                        <div className="flex flex-col">
                            <span className="font-mono text-[9px] text-white uppercase tracking-widest">SECURE CHECKOUT</span>
                            <span className="font-body text-[10px] text-muted">256-bit SSL encrypted.</span>
                        </div>
                    </div>
                </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

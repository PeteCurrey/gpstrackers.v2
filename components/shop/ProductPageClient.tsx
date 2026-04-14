'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCartStore } from '@/lib/cart/cartStore';

interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  tagline: string;
  price: number;
  compareAtPrice?: number;
  subscriptionAnnual?: number;
  thatcham?: string;
  installType: string;
  specs: Array<{ key: string; value: string }>;
  features: string[];
  faqs: Array<{ question: string; answer: string }>;
}

export default function ProductPageClient({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const [includeSubscription, setIncludeSubscription] = useState(true);
  const [activeTab, setActiveTab] = useState<'features' | 'subscription' | 'installation' | 'faq'>('features');
  
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      subscriptionAnnual: product.subscriptionAnnual,
      includeSubscription: includeSubscription,
      slug: product.slug,
      category: product.category,
    });
    // Optional: Add some "added" feedback here
  };

  return (
    <div className="bg-void min-h-screen pt-24 pb-20">
      <div className="container">
        {/* Product Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">
          {/* Left: Product Image Panel */}
          <div className="relative aspect-square glass-card overflow-hidden flex items-center justify-center group">
            <div 
              className="absolute inset-0 bg-gradient-to-br from-signal/10 to-transparent pointer-events-none" 
              style={{ background: 'radial-gradient(circle at center, var(--color-signal-glow) 0%, transparent 70%)' }}
            />
            {/* Visual placeholder for hardware device */}
            <div className="relative z-10 w-2/3 h-2/3 flex flex-col items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full text-signal/80 filter drop-shadow-[0_0_30px_rgba(14,165,233,0.3)]">
                    <rect x="10" y="20" width="80" height="60" rx="8" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2" />
                    <rect x="15" y="25" width="70" height="50" rx="4" fill="currentColor" fillOpacity="0.05" />
                    <circle cx="50" cy="50" r="15" fill="currentColor" fillOpacity="0.1" />
                    <path d="M50 35 L50 42 M50 58 L50 65 M35 50 L42 50 M58 50 L65 50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-signal/10 rounded-full blur-3xl" />
            </div>
            {/* Signal pulse mockup background */}
            <div className="absolute inset-0 opacity-20 pointer-events-none flex items-center justify-center">
                <div className="signal-pulse-ring" style={{ width: '80%', height: '80%' }} />
                <div className="signal-pulse-ring" style={{ width: '80%', height: '80%', animationDelay: '1s' }} />
            </div>
          </div>

          {/* Right: Product Information */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <span className="mono-label">{product.category}</span>
              {product.thatcham && (
                <span className="font-mono text-[10px] text-alert border border-alert/30 px-2 py-0.5 rounded uppercase">
                  Thatcham {product.thatcham}
                </span>
              )}
            </div>
            
            <h1 className="display-lg mb-2 text-white">{product.name}</h1>
            <p className="font-body font-light text-muted text-lg mb-8 leading-relaxed">
              {product.tagline}
            </p>

            <div className="flex items-baseline gap-4 mb-2">
              <span className="font-display text-4xl lg:text-5xl font-bold text-white">£{product.price}</span>
              {product.compareAtPrice && (
                <span className="font-display text-2xl text-muted line-through">£{product.compareAtPrice}</span>
              )}
              {product.compareAtPrice && (
                <span className="bg-alert text-void font-mono text-[10px] font-bold px-2 py-0.5 rounded ml-2">SALE</span>
              )}
            </div>
            
            {product.subscriptionAnnual && (
              <div className="font-mono text-sm text-muted mb-8 tracking-wide">
                DEVICE PRICE + <span className="text-signal">£{product.subscriptionAnnual}/YEAR</span> SUBSCRIPTION
              </div>
            )}

            {/* Subscription Toggle */}
            {product.subscriptionAnnual && (
              <div 
                className="mb-8 p-4 glass-card border-none flex items-center justify-between cursor-pointer group"
                onClick={() => setIncludeSubscription(!includeSubscription)}
                style={{ background: 'rgba(255,255,255,0.02)' }}
              >
                <div className="flex flex-col">
                  <span className="font-body text-sm font-medium text-white mb-0.5">Include Connect+ Subscription</span>
                  <span className="font-body text-xs text-muted">Includes 4G SIM, app access & 90-day history.</span>
                </div>
                <div className={`w-12 h-6 rounded-full relative transition-colors ${includeSubscription ? 'bg-signal' : 'bg-surface-2'}`}>
                  <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${includeSubscription ? 'left-7' : 'left-1'}`} />
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              {/* Quantity Selector */}
              <div className="flex items-center h-12 bg-surface-2 border border-border rounded overflow-hidden">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-full flex items-center justify-center text-muted hover:text-white transition-colors"
                >
                  <svg width="12" height="2" viewBox="0 0 12 2" fill="currentColor"><rect width="12" height="2" rx="1" /></svg>
                </button>
                <span className="w-12 text-center font-mono text-white text-sm">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-full flex items-center justify-center text-muted hover:text-white transition-colors"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor"><path d="M5 5V0h2v5h5v2H7v5H5V7H0V5h5z" /></svg>
                </button>
              </div>
              
              <button 
                onClick={handleAddToCart}
                className="btn-signal flex-1 h-12 text-base font-medium"
              >
                Add to Cart
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 py-3 px-4 glass-card border-none bg-white/[0.02]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-success)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                <span className="font-mono text-[10px] text-muted tracking-wider uppercase">Free Next Day Delivery</span>
              </div>
              <div className="flex items-center gap-3 py-3 px-4 glass-card border-none bg-white/[0.02]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-success)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                <span className="font-mono text-[10px] text-muted tracking-wider uppercase">Free 14-Day Trial</span>
              </div>
            </div>
          </div>
        </div>

        {/* Spec Table */}
        <div className="mb-20">
          <div className="glass-card p-8 lg:p-12 overflow-hidden relative">
             <div className="absolute top-0 right-0 p-8 opacity-5">
                 <svg width="120" height="120" viewBox="0 0 24 24" fill="var(--color-signal)">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                 </svg>
             </div>
             <div className="font-mono text-[10px] text-signal uppercase tracking-[0.2em] mb-8">// TECHNICAL SPECIFICATIONS</div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                {product.specs.map((spec, i) => (
                  <div key={i} className="flex justify-between py-3 border-b border-border/50">
                    <span className="font-mono text-[11px] text-muted uppercase tracking-wider">{spec.key}</span>
                    <span className="font-mono text-[11px] text-white uppercase">{spec.value}</span>
                  </div>
                ))}
             </div>
          </div>
        </div>

        {/* Feature Tabs */}
        <div className="mb-20">
          <div className="flex flex-wrap gap-8 border-b border-border mb-8">
            {(['features', 'subscription', 'installation', 'faq'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 font-mono text-xs uppercase tracking-widest transition-all relative ${activeTab === tab ? 'text-signal' : 'text-muted hover:text-white'}`}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-signal" />
                )}
              </button>
            ))}
          </div>

          <div className="min-h-[300px]">
            {activeTab === 'features' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                {product.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-5 h-5 rounded-full bg-signal/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--color-signal)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    </div>
                    <p className="font-body text-muted leading-relaxed">{feature}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'subscription' && (
              <div className="max-w-3xl">
                <h3 className="display-md text-white mb-6">Transparent Connectivity.</h3>
                <p className="font-body text-muted text-lg leading-relaxed mb-6">
                  Every Travio tracker requires a Connect+ subscription to communicate with our platform. 
                  Unlike other providers, we don't hide costs in complex "Pay As You Go" models or mandatory monthly contracts.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                   <div className="p-6 glass-card border-none bg-white/[0.02]">
                       <div className="font-mono text-signal text-xs mb-2">WHATS INCLUDED</div>
                       <ul className="flex flex-col gap-2">
                           {['4G Multi-network SIM', 'Travio Live Web Access', 'iOS & Android Mobile App', '90-day Journey History', 'SMS Tracking Backup'].map((item, i) => (
                               <li key={i} className="font-body text-sm text-muted flex items-center gap-2">
                                   <div className="w-1 h-1 bg-signal rounded-full" /> {item}
                               </li>
                           ))}
                       </ul>
                   </div>
                   <div className="p-6 glass-card border-none bg-white/[0.02]">
                       <div className="font-mono text-signal text-xs mb-2">PRICING</div>
                       <div className="font-display text-4xl font-bold text-white mb-1">£{product.subscriptionAnnual}</div>
                       <div className="font-mono text-muted text-[10px] uppercase tracking-wider">Per year, billed annually</div>
                   </div>
                </div>
              </div>
            )}

            {activeTab === 'installation' && (
              <div className="max-w-3xl">
                <h3 className="display-md text-white mb-6">Professional Reliability.</h3>
                {product.installType === 'professional' ? (
                  <div className="flex flex-col gap-6">
                    <p className="font-body text-muted text-lg leading-relaxed">
                      Professional installation is included in the price of this device. Once you checkout, our team 
                      will contact you within 24 hours to schedule your installation.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {[
                           { label: 'Booking', val: '24 Hours', desc: 'Typical turnaround' },
                           { label: 'Installation', val: 'Nationwide', desc: 'At your location' },
                           { label: 'Completion', val: 'Same Day', desc: 'Certification issued' }
                        ].map((item, i) => (
                           <div key={i} className="text-center p-6 glass-card border-none bg-white/[0.02]">
                               <div className="font-mono text-signal text-[10px] mb-2 uppercase tracking-widest">{item.label}</div>
                               <div className="font-display text-xl font-bold text-white mb-1">{item.val}</div>
                               <div className="font-body text-xs text-muted">{item.desc}</div>
                           </div>
                        ))}
                    </div>
                  </div>
                ) : (
                  <div>
                    <p className="font-body text-muted text-lg leading-relaxed mb-6">
                      This device is designed for simple, user-friendly installation. Most customers are live in under 5 minutes.
                    </p>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-start gap-4 p-4 glass-card border-none bg-white/[0.02]">
                            <div className="w-8 h-8 rounded-full bg-signal/10 flex items-center justify-center font-mono text-signal text-xs flex-shrink-0">01</div>
                            <p className="font-body text-sm text-muted leading-relaxed">Refer to the included installation guide for the recommended mounting position.</p>
                        </div>
                        <div className="flex items-start gap-4 p-4 glass-card border-none bg-white/[0.02]">
                            <div className="w-8 h-8 rounded-full bg-signal/10 flex items-center justify-center font-mono text-signal text-xs flex-shrink-0">02</div>
                            <p className="font-body text-sm text-muted leading-relaxed">Secure the device using the integrated mounting solutions (Hardwired, OBD, or Magnetic).</p>
                        </div>
                        <div className="flex items-start gap-4 p-4 glass-card border-none bg-white/[0.02]">
                            <div className="w-8 h-8 rounded-full bg-signal/10 flex items-center justify-center font-mono text-signal text-xs flex-shrink-0">03</div>
                            <p className="font-body text-sm text-muted leading-relaxed">Open the Travio Live app and scan the QR code to activate your 14-day free trial.</p>
                        </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'faq' && (
              <div className="max-w-3xl flex flex-col gap-4">
                {product.faqs.map((faq, i) => (
                  <div key={i} className="p-6 glass-card border-none bg-white/[0.02]">
                    <h4 className="font-display text-lg text-white mb-2">{faq.question}</h4>
                    <p className="font-body text-muted text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

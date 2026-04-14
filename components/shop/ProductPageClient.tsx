'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCartStore } from '@/lib/cart/cartStore';
import DeviceMockup from './DeviceMockup';

interface Product {
  id: string;
  name: string;
  slug: string;
  category: string | string[];
  tagline: string;
  price: number;
  compareAtPrice?: number;
  subscriptionAnnual: number; // Changed from optional to match usage
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
      quantity,
      includeSubscription,
      slug: product.slug,
      category: Array.isArray(product.category) ? product.category[0] : product.category,
      subscriptionAnnual: product.subscriptionAnnual,
    });
  };

  const installInstructions = {
    self: {
      title: 'DIY Hardwire Installation',
      desc: 'Typical 30-minute setup. Connects directly to your vehicle\'s 12V/24V permanent live and ground. Ultra-compact design allows for deep concealment behind the dashboard or interior pillars.',
      steps: [
        'Identify a permanent 12V live and ground connection.',
        'Connect the FS100 wires (Red to Live, Black to Ground).',
        'Secure the device using the included 3M industrial adhesive.',
        'Ensure the "This side to sky" label is not obscured by metal.'
      ]
    },
    obd: {
      title: '60-Second OBD Setup',
      desc: 'Zero-wire installation. Plugs directly into your vehicle\'s diagnostic (OBD-II) port. Fits every car manufactured since 1996. Can be moved between vehicles in seconds.',
      steps: [
        'Locate your OBD-II port (usually under the driver-side dash).',
        'Plug the FS003 firmly into the port.',
        'Wait for the status LEDs to turn solid (usually 30-60 seconds).',
        'Open the Travio Live app to verify connection.'
      ]
    },
    professional: {
      title: 'Thatcham-Certified Fitment',
      desc: 'Nationwide professional installation is included. Our Thatcham-approved engineers will come to your home, workplace, or dealership to complete the secure fitment and issue your certificate.',
      steps: [
        'Checkout and pay for your hardware today.',
        'Our booking team will call you within 24 hours to schedule.',
        'An approved engineer completes the covert installation.',
        'Completion certificate issued same-day for your insurer.'
      ]
    },
    magnetic: {
      title: 'Industrial Magnetic Mount',
      desc: 'No wiring required. Featuring high-strength industrial magnets and a sub-30 second setup. Designed to survive vibration, dust, and submersion on site equipment and trailers.',
      steps: [
        'Charge the device fully (rechargeable models only).',
        'Attach to any flat ferous metal surface on the asset.',
        'Ensure the device is not completely shrouded in thick metal.',
        'Set your Geofence boundaries in the Travio Live app.'
      ]
    }
  }[product.installType as 'self' | 'obd' | 'professional' | 'magnetic'] || { 
    title: 'Standard Setup', 
    desc: 'Simple setup instructions included in the box.', 
    steps: ['Power on device', 'Scan QR code', 'Track live'] 
  };

  return (
    <div className="bg-void min-h-screen pt-24 pb-20">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": product.faqs.map(f => ({
              "@type": "Question",
              "name": f.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": f.answer
              }
            }))
          })
        }}
      />
      <div className="container">
        {/* Product Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">
          {/* Left: Product Image Panel */}
          <DeviceMockup name={product.name} category={product.category} className="!aspect-square" />

          {/* Right: Product Information */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-[10px] text-muted border border-border px-2 py-0.5 rounded uppercase tracking-widest">
                {Array.isArray(product.category) ? product.category[0] : product.category}
              </span>
              {product.thatcham && (
                <span className="font-mono text-[10px] text-alert border border-alert/30 px-2 py-0.5 rounded uppercase font-bold tracking-widest">
                  Thatcham {product.thatcham}
                </span>
              )}
            </div>
            
            <h1 className="font-display text-4xl lg:text-6xl font-extrabold mb-2 text-white tracking-tight uppercase">{product.name}</h1>
            <p className="font-body font-light text-muted text-lg mb-8 leading-relaxed opacity-80">
              {product.tagline}
            </p>

            <div className="flex items-baseline gap-4 mb-2">
              <span className="font-display text-4xl lg:text-5xl font-bold text-white tracking-tighter">£{product.price}</span>
              {product.compareAtPrice && (
                <span className="font-display text-2xl text-muted line-through opacity-40">£{product.compareAtPrice}</span>
              )}
              {product.compareAtPrice && (
                <span className="bg-alert text-void font-mono text-[10px] font-bold px-2 py-0.5 rounded ml-2">SAVE £{product.compareAtPrice - product.price}</span>
              )}
            </div>
            
            <div className="font-mono text-xs text-muted mb-8 tracking-widest uppercase">
              DEVICE PRICE + <span className="text-signal font-bold">£{product.subscriptionAnnual}/YEAR</span> CONNECT+
            </div>

            {/* Subscription Toggle */}
            <div 
              className="mb-8 p-5 glass-card border-none flex items-center justify-between cursor-pointer group hover:bg-white/[0.04] transition-colors"
              onClick={() => setIncludeSubscription(!includeSubscription)}
              style={{ background: 'rgba(255,255,255,0.02)' }}
            >
              <div className="flex flex-col gap-1">
                <span className="font-display text-sm font-bold text-white uppercase tracking-widest">Connect+ Subscription</span>
                <span className="font-body text-xs text-muted opacity-70">4G Roaming SIM · App Access · 3-Year Warranty</span>
              </div>
              <div className={`w-12 h-6 rounded-full relative transition-all duration-300 ${includeSubscription ? 'bg-signal' : 'bg-surface-2'}`}>
                <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-300 shadow-sm ${includeSubscription ? 'left-7' : 'left-1'}`} />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center h-14 bg-surface-2 border border-border rounded overflow-hidden">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-14 h-full flex items-center justify-center text-muted hover:text-white transition-colors border-r border-border"
                >
                  <svg width="12" height="2" viewBox="0 0 12 2" fill="currentColor"><rect width="12" height="2" rx="1" /></svg>
                </button>
                <span className="w-14 text-center font-mono text-white text-base font-bold">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-14 h-full flex items-center justify-center text-muted hover:text-white transition-colors border-l border-border"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor"><path d="M5 5V0h2v5h5v2H7v5H5V7H0V5h5z" /></svg>
                </button>
              </div>
              
              <button 
                onClick={handleAddToCart}
                className="btn-signal flex-1 h-14 text-base font-bold uppercase tracking-widest"
              >
                Add to Cart
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 py-3 px-4 glass-card border-none bg-white/[0.02]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-signal)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                <span className="font-mono text-[10px] text-muted tracking-widest uppercase">Free Next Day UK Delivery</span>
              </div>
              <div className="flex items-center gap-3 py-3 px-4 glass-card border-none bg-white/[0.02]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-signal)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                <span className="font-mono text-[10px] text-muted tracking-widest uppercase">UK-Based Tech Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Spec Table */}
        <div className="mb-32">
          <div className="glass-card p-10 lg:p-14 bg-surface-2 border-none">
             <div className="font-mono text-xs text-signal uppercase tracking-[0.2em] mb-10">// TECHNICAL SPECIFICATIONS</div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-6">
                {product.specs.map((spec, i) => (
                  <div key={i} className="flex justify-between py-4 border-b border-white/5">
                    <span className="font-mono text-[11px] text-muted uppercase tracking-widest">{spec.key}</span>
                    <span className="font-mono text-[11px] text-white font-bold uppercase">{spec.value}</span>
                  </div>
                ))}
             </div>
          </div>
        </div>

        {/* Feature Tabs */}
        <div className="mb-20">
          <div className="flex flex-wrap gap-10 border-b border-border/40 mb-10">
            {(['features', 'subscription', 'installation', 'faq'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 font-mono text-[11px] uppercase tracking-[0.2em] transition-all relative ${activeTab === tab ? 'text-signal font-bold' : 'text-muted hover:text-white'}`}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-signal shadow-[0_0_10px_var(--color-signal)]" />
                )}
              </button>
            ))}
          </div>

          <div className="min-h-[400px]">
            {activeTab === 'features' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
                {product.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-5">
                    <div className="w-6 h-6 rounded-full bg-signal/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-signal)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    </div>
                    <div>
                      <p className="font-body text-white text-lg leading-relaxed">{feature}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'subscription' && (
              <div className="max-w-4xl">
                <h3 className="font-display text-3xl lg:text-4xl text-white mb-6 uppercase">Total Visibility. Global Coverage.</h3>
                <p className="font-body text-muted text-lg leading-relaxed mb-10 opacity-70">
                  Your Travio Connect+ subscription covers everything required to keep your asset visible 24/7/365. 
                  No contracts, no data limits, and no hidden roaming charges.
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                   <div className="p-8 glass-card border-none bg-white/[0.03]">
                       <div className="font-mono text-signal text-xs mb-6 tracking-widest uppercase">// CONNECT+ INCLUDES</div>
                       <ul className="flex flex-col gap-4">
                           {['Multi-network 4G Roaming SIM (UK & EU)', 'Travio Live Web Dashboard', 'iOS & Android Tracking App', '90-Day High-Frequency History', 'Instant Push & Email Alerts', 'Active Geofence Support'].map((item, i) => (
                               <li key={i} className="font-body text-sm text-white/80 flex items-center gap-3">
                                   <div className="w-1.5 h-1.5 bg-signal rounded-full shadow-[0_0_5px_var(--color-signal)]" /> {item}
                               </li>
                           ))}
                       </ul>
                   </div>
                   <div className="p-8 glass-card border-none bg-signal/5 flex flex-col justify-center text-center">
                       <div className="font-mono text-signal text-xs mb-3 tracking-widest uppercase">PRICING</div>
                       <div className="font-display text-6xl font-extrabold text-white mb-2 tracking-tighter">£{product.subscriptionAnnual}</div>
                       <div className="font-mono text-muted text-xs uppercase tracking-[0.2em] opacity-60">Per year · Billed annually</div>
                   </div>
                </div>
              </div>
            )}

            {activeTab === 'installation' && (
              <div className="max-w-4xl">
                <h3 className="font-display text-3xl lg:text-4xl text-white mb-4 uppercase">{installInstructions.title}</h3>
                <p className="font-body text-muted text-lg leading-relaxed mb-12 opacity-70">
                  {installInstructions.desc}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {installInstructions.steps.map((step, i) => (
                       <div key={i} className="flex flex-col gap-4 p-6 glass-card border-none bg-white/[0.03] hover:bg-white/[0.05] transition-colors">
                          <div className="font-mono text-xs text-signal font-bold">STEP 0{i+1}</div>
                          <p className="font-body text-sm text-white/80 leading-relaxed">{step}</p>
                       </div>
                    ))}
                </div>
              </div>
            )}

            {activeTab === 'faq' && (
              <div className="max-w-3xl flex flex-col gap-6">
                {product.faqs.map((faq, i) => (
                  <div key={i} className="p-10 glass-card border-none bg-white/[0.02]">
                    <h4 className="font-display text-xl text-white mb-4 uppercase tracking-tight">{faq.question}</h4>
                    <p className="font-body text-muted text-base leading-relaxed opacity-70">{faq.answer}</p>
                  </div>
                ))}
                {product.faqs.length === 0 && (
                   <div className="text-center py-20 opacity-40">
                      <div className="font-mono text-xs tracking-widest uppercase">No specific FAQs for this product yet.</div>
                   </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

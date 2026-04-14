import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How It Works | Setup, Installation & App | Travio',
  description: 'Everything you need to know about setting up your Travio GPS tracker. From installation to platform access and 24/7 monitoring.',
};

export default function HowItWorksPage() {
  const faqData = [
    {
        q: 'How long does physical installation take?',
        a: 'Self-install (OBD) takes under 60 seconds. Hardwired (FS100) typicaly takes 20-30 minutes for a DIY install. Professional installations for insurance trackers usually take about 90 minutes.'
    },
    {
        q: 'Does it work outside the UK?',
        a: 'Yes. Every Travio tracker includes a multi-network roaming SIM that works across the UK, Europe, and in 120+ countries globally at no extra cost.'
    },
    {
        q: 'Can I track on more than one phone?',
        a: 'Absolutely. You can log into the Travio Live app on as many devices as you like. We also support sub-accounts for fleet managers who need to give limited access to others.'
    },
    {
        q: 'What happens if my vehicle is stolen?',
        a: 'Open the app and verify the location immediately. If you have an insurance-approved tracker, our 24/7 monitoring centre will be alerted and will coordinate with the police. For other trackers, use the "Share Live Link" feature to provide the police with real-time tracking.'
    }
  ];

  return (
    <div className="bg-void min-h-screen pt-40 pb-20">
      {/* Schema for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.map(item => ({
              "@type": "Question",
              "name": item.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.a
              }
            }))
          })
        }}
      />

      <div className="container">
        
        <div className="text-center mb-20">
            <div className="mono-label mb-4 text-signal uppercase tracking-[0.2em]">// SETUP & INSTALLATION</div>
            <h1 className="display-xl text-white mb-6">Simple Tech.<br />Powerful Results.</h1>
            <p className="font-body text-muted text-lg lg:text-xl font-light max-w-2xl mx-auto leading-relaxed">
              We've designed Travio to be as easy to install as possible, without compromising on security or data frequency.
            </p>
        </div>

        {/* 1. Hardware Setup */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <div>
                <div className="mono-label mb-4">PHASE 01 // HARDWARE</div>
                <h2 className="display-lg text-white mb-6">Device Installation.</h2>
                <div className="flex flex-col gap-8">
                    <div className="p-6 glass-card border-none bg-surface-2">
                        <div className="font-display text-xl text-white mb-2">Self-Install (OBD)</div>
                        <p className="font-body text-muted text-sm leading-relaxed">Plugs directly into your car's diagnostic port. Best for everyday tracking and driver scoring.</p>
                    </div>
                    <div className="p-6 glass-card border-none bg-surface-2 border-l-2 border-l-signal">
                        <div className="font-display text-xl text-white mb-2">Hardwired (Permanent)</div>
                        <p className="font-body text-muted text-sm leading-relaxed">Connects directly to the 12V/24V battery. Hidden behind the dash or under the bonnet. Most secure for theft recovery.</p>
                    </div>
                    <div className="p-6 glass-card border-none bg-surface-2">
                        <div className="font-display text-xl text-white mb-2">Magnetic (Asset)</div>
                        <p className="font-body text-muted text-sm leading-relaxed">No wires. Integrated 3-year battery. Attach to any metal surface in seconds. Perfect for plant and trailers.</p>
                    </div>
                </div>
            </div>
            <div className="relative">
                <div className="glass-card aspect-square border-border relative overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 coord-grid opacity-10" />
                    <div className="relative w-2/3 h-2/3 border border-signal/20 rounded-xl bg-signal/5 flex items-center justify-center">
                        <div className="signal-pulse-ring" style={{ width: '60%', height: '60%' }} />
                    </div>
                </div>
            </div>
        </div>

        {/* 2. Platform Activation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <div className="order-2 lg:order-1 relative">
                <div className="glass-card aspect-square border-border relative overflow-hidden flex items-center justify-center bg-surface-2">
                    {/* Mock phone UI */}
                    <div className="w-[280px] h-[580px] bg-void rounded-[40px] border-[8px] border-surface p-6 relative overflow-hidden">
                        <div className="w-1/3 h-6 bg-surface absolute top-0 left-1/2 -translate-x-1/2 rounded-b-2xl" />
                        <div className="font-mono text-[8px] text-signal mb-4 mt-6 uppercase tracking-widest">TRAVIO LIVE APP</div>
                        <div className="h-4 w-full bg-surface-2 rounded mb-2" />
                        <div className="h-4 w-2/3 bg-surface-2 rounded mb-8" />
                        <div className="flex-1 bg-signal/10 border border-signal/20 rounded-xl relative">
                             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-signal rounded-full shadow-[0_0_10px_var(--color-signal)]" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="order-1 lg:order-2">
                <div className="mono-label mb-4">PHASE 02 // ACTIVATION</div>
                <h2 className="display-lg text-white mb-6">Platform Sync.</h2>
                <p className="font-body text-muted text-lg mb-8 leading-relaxed">
                   Once the device is powered, it automatically connects to the strongest available network. Download 
                   the Travio Live app, scan the unique QR code on your device, and you're instantly connected.
                </p>
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4 text-white font-body">
                        <div className="w-8 h-8 rounded-full bg-signal text-void flex items-center justify-center font-bold text-xs uppercase">✓</div>
                        <span>App available on iOS and Android</span>
                    </div>
                    <div className="flex items-center gap-4 text-white font-body">
                        <div className="w-8 h-8 rounded-full bg-signal text-void flex items-center justify-center font-bold text-xs uppercase">✓</div>
                        <span>Web dashboard for deep fleet analytics</span>
                    </div>
                    <div className="flex items-center gap-4 text-white font-body">
                        <div className="w-8 h-8 rounded-full bg-signal text-void flex items-center justify-center font-bold text-xs uppercase">✓</div>
                        <span>Multi-user sub-account support</span>
                    </div>
                </div>
            </div>
        </div>

        {/* FAQ Section */}
        <section className="section-pad bg-surface rounded-3xl p-8 lg:p-20 border border-border">
           <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                   <div className="mono-label mb-4 text-signal uppercase tracking-[0.2em]">// FREQUENTLY ASKED</div>
                   <h2 className="display-lg text-white">Got questions?</h2>
                </div>
                
                <div className="flex flex-col gap-4">
                    {faqData.map((item, i) => (
                        <div key={i} className="p-8 glass-card border-none bg-void/50">
                            <h3 className="font-display text-xl text-white mb-2">{item.q}</h3>
                            <p className="font-body text-muted leading-relaxed">{item.a}</p>
                        </div>
                    ))}
                </div>
                
                <div className="mt-12 text-center">
                    <p className="font-body text-muted mb-8">Can't find what you're looking for?</p>
                    <Link href="/fleet#contact" className="btn-signal h-12 px-8 text-sm font-medium">Contact UK Support</Link>
                </div>
           </div>
        </section>

      </div>
    </div>
  );
}

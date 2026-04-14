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
    },
    {
        q: 'How long does the battery last on asset trackers?',
        a: 'The AT1 lasts up to 3 years on a single internal battery. The PT1 Plant tracker lasts up to 90 days in timed report mode or 30 days with more frequent movement-based updates.'
    },
    {
        q: 'Are there any hidden costs or contracts?',
        a: 'No. All our devices are sold without long-term contracts. You pay for the hardware once, and then a transparent annual subscription for the data and platform access.'
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
            <div className="font-mono text-xs mb-4 text-signal uppercase tracking-[0.2em]">// SETUP & INSTALLATION</div>
            <h1 className="font-display text-5xl lg:text-7xl font-extrabold text-white mb-6">Simple Tech.<br />Powerful Results.</h1>
            <p className="font-body text-muted text-lg lg:text-xl font-light max-w-2xl mx-auto leading-relaxed">
              We've designed Travio to be as easy to install as possible, without compromising on security or data frequency.
            </p>
        </div>

        {/* 1. Hardware Setup */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <div>
                <div className="font-mono text-xs mb-4 text-signal tracking-widest uppercase">PHASE 01 // HARDWARE</div>
                <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6">Device Installation.</h2>
                <div className="flex flex-col gap-8">
                    <div className="p-6 glass-card border-none bg-surface-2 group hover:bg-surface-2/80 transition-colors">
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
                        {/* Animated pulse loop */}
                        <div className="absolute inset-0 rounded-full animate-ping opacity-20 border-2 border-signal" />
                        <div className="w-16 h-16 bg-signal rounded-full shadow-[0_0_30px_var(--color-signal)]" />
                    </div>
                </div>
            </div>
        </div>

        {/* 2. Platform Activation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <div className="order-2 lg:order-1 relative">
                <div className="glass-card aspect-square border-border relative overflow-hidden flex items-center justify-center bg-surface-2">
                    {/* Mock phone UI */}
                    <div className="w-[280px] h-[580px] bg-void rounded-[40px] border-[8px] border-surface p-6 relative overflow-hidden shadow-2xl">
                        <div className="w-1/3 h-6 bg-surface absolute top-0 left-1/2 -translate-x-1/2 rounded-b-2xl" />
                        <div className="font-mono text-[8px] text-signal mb-4 mt-6 uppercase tracking-widest">TRAVIO LIVE APP</div>
                        <div className="h-4 w-full bg-surface-2 rounded mb-2" />
                        <div className="h-4 w-2/3 bg-surface-2 rounded mb-8" />
                        <div className="flex-1 bg-signal/5 border border-signal/10 rounded-xl relative overflow-hidden">
                             <div className="absolute inset-0 coord-grid opacity-[0.05]" />
                             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-signal rounded-full shadow-[0_0_15px_var(--color-signal)] animate-pulse" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="order-1 lg:order-2">
                <div className="font-mono text-xs mb-4 text-signal tracking-widest uppercase">PHASE 02 // ACTIVATION</div>
                <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6">Platform Sync.</h2>
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

        {/* 3. Comparison Table */}
        <section className="mb-32 overflow-hidden">
           <div className="text-center mb-12">
               <div className="font-mono text-xs mb-4 text-signal tracking-widest uppercase">// PERFORMANCE COMPARISON</div>
               <h2 className="font-display text-4xl font-bold text-white">Compare Hardware.</h2>
           </div>
           
           <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[800px]">
                 <thead>
                    <tr className="border-b border-border">
                       <th className="py-6 px-4 font-mono text-[10px] text-muted tracking-widest uppercase">Features</th>
                       <th className="py-6 px-4 font-display text-lg text-white font-bold">Hardwired (FS100)</th>
                       <th className="py-6 px-4 font-display text-lg text-white font-bold">OBD (FS003)</th>
                       <th className="py-6 px-4 font-display text-lg text-white font-bold">Magnetic (AT1)</th>
                       <th className="py-6 px-4 font-display text-lg text-white font-bold">Plant (PT1)</th>
                    </tr>
                 </thead>
                 <tbody className="font-body text-sm">
                    <tr className="border-b border-border/50">
                       <td className="py-6 px-4 text-muted">Update Interval</td>
                       <td className="py-6 px-4 text-white">10 Seconds (Live)</td>
                       <td className="py-6 px-4 text-white">15 Seconds (Live)</td>
                       <td className="py-6 px-4 text-white">Timed / Movement</td>
                       <td className="py-6 px-4 text-white">90-Day Timed</td>
                    </tr>
                    <tr className="border-b border-border/50">
                       <td className="py-6 px-4 text-muted">Installation Time</td>
                       <td className="py-6 px-4 text-white">20-30 Mins</td>
                       <td className="py-6 px-4 text-white">Under 60 Secs</td>
                       <td className="py-6 px-4 text-white">Under 30 Secs</td>
                       <td className="py-6 px-4 text-white">Under 30 Secs</td>
                    </tr>
                    <tr className="border-b border-border/50">
                       <td className="py-6 px-4 text-muted">Power Source</td>
                       <td className="py-6 px-4 text-white">Vehicle 12/24V</td>
                       <td className="py-6 px-4 text-white">Diagnostic Port</td>
                       <td className="py-6 px-4 text-white">3-Year Internal</td>
                       <td className="py-6 px-4 text-white">Rechargeable</td>
                    </tr>
                    <tr className="border-b border-border/50">
                       <td className="py-6 px-4 text-muted">Best For</td>
                       <td className="py-6 px-4 text-white">Theft Recovery</td>
                       <td className="py-6 px-4 text-white">Daily Car/Van</td>
                       <td className="py-6 px-4 text-white">Trailers / Tools</td>
                       <td className="py-6 px-4 text-white">Heavy Machinery</td>
                    </tr>
                 </tbody>
              </table>
           </div>
        </section>

        {/* FAQ Section */}
        <section className="section-pad bg-surface rounded-3xl p-8 lg:p-20 border border-border">
           <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                   <div className="font-mono text-xs mb-4 text-signal uppercase tracking-[0.2em]">// FREQUENTLY ASKED</div>
                   <h2 className="font-display text-4xl font-bold text-white">Got questions?</h2>
                </div>
                
                <div className="flex flex-col gap-4">
                    {faqData.map((item, i) => (
                        <div key={i} className="p-8 glass-card border-none bg-void/50">
                            <h3 className="font-display text-xl text-white mb-2">{item.q}</h3>
                            <p className="font-body text-muted leading-relaxed">{item.a}</p>
                        </div>
                    ))}
                </div>
                
                <div className="mt-20 text-center flex flex-col items-center gap-6">
                    <p className="font-body text-muted">Thinking about a fleet rollout? Let's talk.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                       <Link href="/contact" className="btn-signal h-14 px-10">Get a fleet quote</Link>
                       <Link href="/shop" className="btn-ghost h-14 px-10">Start with one device</Link>
                    </div>
                </div>
           </div>
        </section>

      </div>
    </div>
  );
}

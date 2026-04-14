import { Metadata } from 'next';
import Link from 'next/link';
import PlatformMockupCard from '@/components/home/Hero'; // Reuse existing mockup

export const metadata: Metadata = {
  title: 'About Travio | Real Tracking. Real People. Real Results.',
  description: 'The UK\'s most advanced GPS tracking platform. Based in Chesterfield, Derbyshire. Supporting UK businesses from the Midlands to Scotland.',
};

export default function AboutPage() {
  return (
    <div className="bg-void min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-border">
        <div className="coord-grid opacity-[0.04]" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />
        <div className="container relative z-10 text-center lg:text-left">
          <div className="font-mono text-xs tracking-widest uppercase mb-4 text-signal">
            // ABOUT TRAVIO
          </div>
          <h1 className="font-display text-5xl lg:text-7xl font-extrabold text-white mb-6 max-w-4xl tracking-tight leading-[0.95]">
            REAL TRACKING.<br />REAL PEOPLE.<br />REAL RESULTS.
          </h1>
        </div>
      </section>

      {/* SECTION 1: THE BRAND */}
      <section className="section-pad bg-surface">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 glass-card p-2 bg-void/50">
               {/* Note: In a real app we'd import the mockup component specifically, 
                   here we reuse the logic from the Hero if it's exported or just build a fresh one */}
               <div className="p-8 border border-border/40 rounded-lg">
                  <div className="font-mono text-[10px] text-signal mb-4 uppercase tracking-widest">// TRAVIO LIVE v4.2</div>
                  <div className="flex flex-col gap-4">
                     <div className="h-4 w-3/4 bg-white/5 rounded" />
                     <div className="h-32 w-full bg-signal/5 rounded border border-signal/10" />
                     <div className="h-4 w-1/2 bg-white/5 rounded" />
                     <div className="grid grid-cols-2 gap-4">
                        <div className="h-12 bg-white/5 rounded" />
                        <div className="h-12 bg-white/5 rounded" />
                     </div>
                  </div>
               </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6">
                We built the platform we wanted to use.
              </h2>
              <p className="font-body text-muted text-lg leading-relaxed mb-6">
                Travio started with a simple frustration — GPS tracking platforms were either overpriced enterprise software or cheap consumer apps that broke when you needed them most.
              </p>
              <p className="font-body text-muted text-lg leading-relaxed">
                We built something in between: a professional-grade platform with transparent pricing, no contracts, and UK-based support that actually answers the phone. Based in Chesterfield, we serve businesses from Cornwall to the Highlands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE NUMBERS */}
      <section className="py-16 bg-void border-y border-border">
         <div className="container">
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
               {[
                 { val: '2,400+', label: 'Active trackers on platform' },
                 { val: '40+', label: 'UK business clients' },
                 { val: '96%', label: 'Recovery rate' },
                 { val: '< 2hr', label: 'Avg support response' },
                 { val: '£59/yr', label: 'Annual subscription' }
               ].map((s, i) => (
                 <div key={i} className="text-center">
                    <div className="font-mono text-2xl lg:text-3xl font-bold text-signal mb-1 tracking-tighter">{s.val}</div>
                    <div className="font-mono text-[9px] text-muted uppercase tracking-widest leading-tight">{s.label}</div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* SECTION 3: DIFFERENTIATORS */}
      <section className="section-pad bg-surface-2">
         <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="glass-card p-10 bg-void/40 border-signal/10 transition-colors">
                  <div className="font-display text-3xl text-white font-bold mb-4">No contracts.</div>
                  <p className="font-body text-muted leading-relaxed">
                    Month-to-month thinking, annual billing. Cancel anytime. No cancellation fees, no hidden hooks. We keep your business by providing a platform that works.
                  </p>
               </div>
               <div className="glass-card p-10 bg-void/40 border-signal/10 transition-colors">
                  <div className="font-display text-3xl text-white font-bold mb-4">UK support.</div>
                  <p className="font-body text-muted leading-relaxed">
                    Phone, email, and live chat. Real people, based in our Chesterfield headquarters. No bots, no scripts, just technical experts who know the platform inside out.
                  </p>
               </div>
               <div className="glass-card p-10 bg-void/40 border-signal/10 transition-colors">
                  <div className="font-display text-3xl text-white font-bold mb-4">One login.</div>
                  <p className="font-body text-muted leading-relaxed">
                    Every device. Every asset. Commercial fleet or personal car. One dashboard that works on any browser, iOS, or Android device. Total visibility, everywhere.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* SECTION 4: CHESTERFIELD CTA */}
      <section className="section-pad bg-surface">
        <div className="container text-center max-w-4xl">
           <h2 className="font-display text-4xl lg:text-6xl font-extrabold text-white tracking-tight mb-8">
              Based in Chesterfield.<br />Supporting UK businesses.
           </h2>
           <p className="font-body text-muted text-lg mb-12">
              From our Midlands headquarters, we manage the security of thousands of assets. Whether you need one tracker or a fleet solution for 100+ vehicles, we're here to help.
           </p>
           <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-signal h-14 px-10 text-base">
                 Speak to the team
              </Link>
              <Link href="/shop" className="btn-ghost h-14 px-10 text-base">
                 Browse all trackers
              </Link>
           </div>
        </div>
      </section>
    </div>
  );
}

import { Metadata } from 'next';
import Link from 'next/link';
import { caseStudies } from '@/lib/data/caseStudies';

export const metadata: Metadata = {
  title: 'Real World Results | UK GPS Tracking Case Studies | Travio',
  description: 'How UK businesses in logistics, construction, and agriculture use Travio to recover stolen vehicles, cut fuel bills, and improve fleet efficiency.',
};

export default function CaseStudiesPage() {
  return (
    <div className="bg-void min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-border">
        <div className="coord-grid opacity-[0.04]" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />
        <div className="container relative z-10 text-center lg:text-left">
          <div className="font-mono text-xs tracking-widest uppercase mb-4 text-signal">
            // CASE STUDIES & RESULTS
          </div>
          <h1 className="font-display text-5xl lg:text-7xl font-extrabold text-white mb-6 max-w-4xl tracking-tight leading-[0.95]">
            FROM THE FIELD.<br />UK SUCCESS STORIES.
          </h1>
          <p className="font-body text-muted text-lg lg:text-xl max-w-2xl leading-relaxed opacity-80">
            Real hardware. Real recovery. Real ROI. No marketing fluff—just the metrics that keep British businesses moving.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="section-pad bg-surface">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((cs) => (
              <Link key={cs.slug} href={`/case-studies/${cs.slug}`} className="glass-card p-8 flex flex-col group hover:border-signal/50 transition-all bg-void/30">
                 <div className="flex justify-between items-start mb-6">
                    <div className="font-mono text-[9px] px-2 py-0.5 border border-muted/30 rounded uppercase tracking-widest text-muted">
                       {cs.industry}
                    </div>
                    <div className="font-mono text-[10px] text-signal font-bold uppercase tracking-widest">
                       {cs.location}
                    </div>
                 </div>
                 
                 <h2 className="font-display text-2xl font-bold text-white mb-4 group-hover:text-signal transition-colors">
                    {cs.resultLabel}
                 </h2>
                 
                 <div className="flex-1">
                    <div className="flex flex-col gap-3 mb-8">
                       {cs.metrics.map((m, i) => (
                         <div key={i} className="flex justify-between border-b border-white/5 pb-2">
                            <span className="font-mono text-[10px] text-muted tracking-widest uppercase">{m.label}</span>
                            <span className="font-mono text-[11px] text-white font-bold">{m.value}</span>
                         </div>
                       ))}
                    </div>
                 </div>

                 <div className="font-mono text-[10px] text-signal uppercase tracking-widest flex items-center gap-2">
                    Read the study <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
                 </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Quote */}
      <section className="py-24 bg-void border-y border-border">
         <div className="container text-center max-w-3xl">
            <div className="font-mono text-xs text-signal mb-8 tracking-widest uppercase">// 96% RECOVERY RATE</div>
            <h3 className="font-display text-3xl lg:text-5xl font-extrabold text-white mb-10 leading-tight italic">
              "We don't just sell boxes. We provide the security that keeps UK businesses breathing."
           </h3>
           <div className="font-display text-xl text-white font-bold select-none">Pete Currey, Founder</div>
         </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-signal">
         <div className="container flex flex-col lg:flex-row items-center justify-between gap-10 text-center lg:text-left">
            <div>
               <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-void mb-4">Your business next?</h2>
               <p className="font-body text-void/70 text-lg max-w-xl">Get a custom fleet quote or order your first tracker today with free next-day delivery.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 shrink-0">
               <Link href="/contact" className="btn-void h-14 px-10 text-base">Speak to an expert</Link>
               <Link href="/shop" className="h-14 px-10 border border-void/30 flex items-center text-void font-bold hover:bg-void/10 transition-colors">Browse trackers →</Link>
            </div>
         </div>
      </section>
    </div>
  );
}

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { caseStudies } from '@/lib/data/caseStudies';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return { title: 'Case Study Not Found' };

  return {
    title: `${cs.resultLabel} | ${cs.company} Case Study | Travio`,
    description: cs.problem.slice(0, 160),
  };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) notFound();

  return (
    <div className="bg-void min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-border">
        <div className="coord-grid opacity-[0.04]" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />
        <div className="container relative z-10">
          <Link href="/case-studies" className="font-mono text-[10px] text-signal mb-8 hover:underline uppercase tracking-widest block underline-offset-4">
             ← Back to all studies
          </Link>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
             <div className="max-w-3xl">
                <div className="font-mono text-xs tracking-widest uppercase mb-4 text-muted">
                   // REAL-WORLD RESULT: {cs.company}
                </div>
                <h1 className="font-display text-4xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.05]">
                   {cs.resultLabel}
                </h1>
             </div>
             <div className="flex flex-col gap-2 shrink-0 lg:text-right">
                <div className="font-display text-xl text-white font-bold">{cs.company}</div>
                <div className="font-mono text-xs text-muted uppercase tracking-widest">{cs.industry} · {cs.location}</div>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {cs.metrics.map((m, i) => (
               <div key={i} className="glass-card p-6 border-signal/20 flex flex-col items-center text-center bg-void/40">
                  <div className="font-mono text-[10px] text-muted tracking-widest uppercase mb-2">{m.label}</div>
                  <div className="font-display text-3xl font-bold text-white tracking-tighter">{m.value}</div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="section-pad bg-surface">
        <div className="container max-w-4xl">
          <div className="flex flex-col gap-20">
             <div>
                <h2 className="font-mono text-[11px] text-signal mb-6 tracking-widest uppercase">// THE PROBLEM</h2>
                <div className="font-body text-xl lg:text-2xl text-white leading-relaxed font-light mb-4">
                   {cs.problem}
                </div>
             </div>

             <div>
                <h2 className="font-mono text-[11px] text-signal mb-6 tracking-widest uppercase">// THE SOLUTION</h2>
                <div className="font-body text-xl lg:text-2xl text-white leading-relaxed font-light mb-4 text-signal/80">
                   {cs.solution}
                </div>
             </div>

             <div className="p-10 lg:p-14 glass-card bg-void/50 border-signal/30">
                <h2 className="font-mono text-[11px] text-signal mb-8 tracking-widest uppercase">// THE RESULT</h2>
                <div className="font-body text-2xl lg:text-3xl text-white leading-snug font-bold mb-10">
                   {cs.results}
                </div>
                {cs.quote && (
                   <div className="pt-10 border-t border-white/10 mt-10">
                      <div className="font-display text-4xl lg:text-5xl text-signal opacity-30 mb-4 h-12">"</div>
                      <p className="font-body text-xl italic text-muted max-w-2xl mb-6">
                         {cs.quote.text}
                      </p>
                      <div className="font-display text-lg text-white font-bold">
                         {cs.quote.author}
                      </div>
                      <div className="font-mono text-[10px] text-muted uppercase tracking-widest">
                         {cs.quote.position}, {cs.company}
                      </div>
                   </div>
                )}
             </div>
          </div>
        </div>
      </section>

      {/* Recommended for this case */}
      <section className="section-pad bg-void border-t border-border">
         <div className="container text-center">
            <h2 className="font-display text-3xl font-bold text-white mb-10">Ready to secure your business?</h2>
            <div className="flex flex-wrap justify-center gap-6">
               <Link href="/find-my-tracker" className="btn-signal h-14 px-10">Get started with the quiz</Link>
               <Link href="/shop" className="btn-ghost h-14 px-10">Browse all hardware</Link>
            </div>
         </div>
      </section>

      {/* CASE STUDY JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": `${cs.resultLabel} | ${cs.company}`,
            "description": cs.problem,
            "author": {
              "@type": "Organization",
              "name": "Travio"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Travio",
              "logo": {
                "@type": "ImageObject",
                "url": "https://travio.co.uk/logo.png"
              }
            }
          })
        }}
      />
    </div>
  );
}

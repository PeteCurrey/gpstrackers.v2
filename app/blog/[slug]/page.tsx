import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';

const blogPosts: Record<string, {
    category: string;
    title: string;
    excerpt: string;
    date: string;
    readingTime: number;
    slug: string;
    content: string[];
}> = {
    'obd-vs-hardwired-trackers': {
        category: 'BUYING GUIDE',
        title: 'OBD vs Hardwired GPS Trackers: Which Is Right for Your Vehicle?',
        excerpt: 'We break down the key differences between plug-and-play OBD trackers and professionally hardwired devices — including when each makes sense.',
        date: '12 Apr 2026',
        readingTime: 6,
        slug: 'obd-vs-hardwired-trackers',
        content: [
            "When choosing a GPS tracker, one of the first decisions you'll face is how the device will be powered. For most vehicles, this comes down to two main options: OBD (On-Board Diagnostics) plug-and-play devices or hardwired permanent installations.",
            "Each has its pros and cons, and the right choice usually depends on whether you value ease of installation or maximum security and concealment.",
            "### 1. OBD Trackers: The 60-Second Setup",
            "An OBD tracker plugs directly into your car's diagnostic port (the same one mechanics use to check engine faults). This port is usually located under the dashboard on the driver's side.",
            "**Pros:** No tools required. Live in seconds. Easily moved between vehicles. Ideal for leased cars where you can't modify the wiring.",
            "**Cons:** Because they plug into an easy-to-find port, they are also easy for thieves to find and disconnect if they know where to look.",
            "### 2. Hardwired Trackers: The Stealth Choice",
            "A hardwired tracker, like the Travio FS100, is physically wired into the vehicle’s permanent live power supply. It is typically hidden deep behind the dashboard or interior panels.",
            "**Pros:** Almost impossible for a thief to find quickly. Never needs charging. Most secure for theft recovery. Integrated into the heart of the vehicle.",
            "**Cons:** Requires basic automotive wiring knowledge or a professional installer. Not easily moved once fitted.",
            "### Which should you choose?",
            "If you are managing a fleet of delivery vans or want to monitor driver behaviour, an OBD device often wins on convenience. However, if your primary goal is theft protection and recovery for a high-value asset, a hardwired tracker is the industry standard for a reason."
        ]
    },
    'thatcham-s5-vs-s7-guide': {
        category: 'INSURANCE',
        title: 'Thatcham S5 vs S7: What Your Insurer Actually Requires',
        excerpt: 'Category S5 and S7 trackers both offer insurance approval, but they are very different products. Here is what you need to know before you buy.',
        date: '8 Apr 2026',
        readingTime: 5,
        slug: 'thatcham-s5-vs-s7-guide',
        content: [
            "If your insurance provider has told you that you need a 'Thatcham-approved' tracker, you’re likely seeing the terms S5 and S7. Understanding the difference is critical, as fitting the wrong category could void your theft cover.",
            "Thatcham Research is the industry body that tests and certifies vehicle security products for UK insurers. Their system categorises trackers based on the level of security and monitoring they provide.",
            "### Category S7 (The Standard Recommendation)",
            "S7 replaces the old Category 6 and 7 standards. It is the most common requirement for standard road cars, vans, and motorhomes.",
            "An S7 tracker must be professionally installed and connected to a 24/7 Monitoring Centre. If the vehicle is moved without the ignition on, the centre is alerted and begins a recovery process with the police.",
            "### Category S5 (High-Level Security)",
            "S5 is the higher standard, replacing the old Category 5. It is usually required for high-performance vehicles, exotics, or cars valued over £50,000.",
            "The key difference with S5 is **ADR (Automatic Driver Recognition)**. You are provided with two small key-fobs. If the vehicle moves and no fob is detected—even if the original keys are used—an alert is instantly sent to the monitoring centre. This is the ultimate protection against key-cloning and relay theft.",
            "### How do I know which one I need?",
            "Always check your specific insurance policy wording or call your broker. They will specify 'Category S5' or 'Category S7'. If they just say 'Thatcham Approved', S7 is usually sufficient, but S5 offers a much higher level of protection against modern theft methods."
        ]
    }
};

export async function generateStaticParams() {
    return Object.keys(blogPosts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts[slug];
    if (!post) return {};
    return {
        title: post.title,
        description: post.excerpt,
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = blogPosts[slug];
    if (!post) notFound();

    return (
        <div className="bg-void min-h-screen pt-40 pb-20">
            {/* Article JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BlogPosting",
                    "headline": post.title,
                    "description": post.excerpt,
                    "datePublished": post.date,
                    "author": { "@type": "Organization", "name": "Travio" }
                })
                }}
            />

            <div className="container">
                <article className="max-w-3xl mx-auto">
                    
                    <div className="mb-12">
                        <Link href="/blog" className="font-mono text-[10px] text-muted hover:text-signal transition-colors flex items-center gap-2 mb-8 uppercase tracking-widest">
                             <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>
                             Back to Blog
                        </Link>
                        
                        <div className="flex items-center gap-4 mb-6">
                            <span className="mono-label text-signal uppercase tracking-[0.2em]">{post.category}</span>
                            <span className="font-mono text-[10px] text-muted uppercase tracking-widest">{post.readingTime} MIN READ</span>
                        </div>
                        
                        <h1 className="display-xl text-white mb-6 leading-tight">{post.title}</h1>
                        <div className="font-mono text-sm text-muted uppercase tracking-widest">{post.date} // BY TRAVIO EDITORIAL TEAM</div>
                    </div>

                    <div className="glass-card aspect-video border-border mb-16 relative overflow-hidden flex items-center justify-center bg-surface-2 opacity-50">
                        <div className="absolute inset-0 coord-grid opacity-10" />
                        <span className="font-mono text-[10px] text-muted tracking-widest uppercase opacity-40">FEATURED ARTICLE IMAGE</span>
                    </div>

                    <div className="flex flex-col gap-8">
                        {post.content.map((paragraph, i) => {
                            if (paragraph.startsWith('###')) {
                                return <h3 key={i} className="display-md text-white mt-8 mb-2">{paragraph.replace('### ', '')}</h3>;
                            }
                            if (paragraph.startsWith('**')) {
                                return <p key={i} className="font-body text-muted text-lg leading-relaxed"><strong className="text-white">{paragraph.replace(/\*\*/g, '')}</strong></p>;
                            }
                            return <p key={i} className="font-body text-muted text-lg leading-relaxed">{paragraph}</p>;
                        })}
                    </div>

                    {/* Share & Newsletter */}
                    <div className="mt-20 pt-12 border-t border-border">
                        <div className="glass-card p-10 bg-signal text-void text-center">
                            <h4 className="display-md font-bold mb-4">Never miss an update.</h4>
                            <p className="font-body font-medium mb-8 opacity-80">Get the latest vehicle security news and fleet tips delivered straight to your inbox.</p>
                            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                                <input type="email" placeholder="Email Address" className="flex-1 bg-void/10 border border-void/20 h-12 px-4 rounded-lg outline-none placeholder:text-void/40 text-void font-body" />
                                <button type="submit" className="bg-void text-white h-12 px-8 rounded-lg font-body font-medium transition-transform active:scale-95">Subscribe</button>
                            </form>
                        </div>
                    </div>

                </article>
            </div>
        </div>
    );
}

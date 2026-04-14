import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';

import { blogPosts } from '@/lib/data/blog';

export async function generateStaticParams() {
    return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find(p => p.slug === slug);
    if (!post) return {};
    return {
        title: post.title,
        description: post.excerpt,
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = blogPosts.find(p => p.slug === slug);
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
                        <Link href="/blog" className="font-mono text-[10px] text-muted hover:text-signal transition-colors flex items-center gap-2 mb-8 uppercase tracking-widest group">
                             <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>
                             Back to Blog
                        </Link>
                        
                        <div className="flex items-center gap-4 mb-6">
                            <span className="mono-label text-signal uppercase tracking-[0.2em]">{post.category}</span>
                            <span className="font-mono text-[10px] text-muted uppercase tracking-widest">{post.readTime}</span>
                        </div>
                        
                        <h1 className="font-display text-4xl lg:text-6xl font-extrabold text-white mb-6 leading-tight uppercase tracking-tight">{post.title}</h1>
                        <div className="font-mono text-xs text-muted/60 uppercase tracking-widest">{post.date} // TRAVIO EDITORIAL TEAM</div>
                    </div>

                    <div className="glass-card aspect-video border-border mb-16 relative overflow-hidden flex items-center justify-center bg-surface-2 opacity-50">
                        <div className="absolute inset-0 coord-grid opacity-10" />
                        <span className="font-mono text-[10px] text-muted tracking-widest uppercase opacity-40">ARTICLE RESOURCES</span>
                    </div>

                    <div 
                        className="blog-content prose prose-invert max-w-none"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* Newsletter */}
                    <div className="mt-24 pt-16 border-t border-white/5">
                        <div className="glass-card p-10 lg:p-14 bg-white/[0.02] border-none text-center relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-signal" />
                            <h4 className="font-display text-2xl lg:text-3xl font-bold text-white mb-4 uppercase tracking-tight">Stay ahead of the curve.</h4>
                            <p className="font-body text-muted text-base mb-10 max-w-lg mx-auto opacity-70">Get the latest vehicle security insights and regional crime alerts delivered straight to your inbox.</p>
                            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                                <input 
                                  type="email" 
                                  placeholder="Email Address" 
                                  className="flex-1 bg-void/50 border border-border/50 h-14 px-6 rounded-lg outline-none focus:border-signal/50 placeholder:text-muted transition-all text-white font-mono text-sm" 
                                />
                                <button type="submit" className="btn-signal h-14 px-10 text-xs font-bold uppercase tracking-widest">Subscribe</button>
                            </form>
                        </div>
                    </div>

                </article>
            </div>

        </div>
    );
}

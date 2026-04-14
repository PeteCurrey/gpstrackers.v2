import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="bg-void min-h-screen flex items-center justify-center pt-20 overflow-hidden relative">
      <div className="absolute inset-0 coord-grid opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-alert/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container relative z-10 text-center">
        <div className="mono-label text-alert mb-6 uppercase tracking-[0.2em] font-bold">404 // SIGNAL LOST</div>
        <h1 className="display-xl text-white mb-6">Off the Radar.</h1>
        <p className="font-body text-muted text-lg lg:text-xl font-light max-w-lg mx-auto mb-10 leading-relaxed">
          We couldn't locate the page you're looking for. It might have been moved, or the coordinate was incorrect.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn-signal h-14 px-10 text-base font-medium">Return Home</Link>
            <Link href="/shop" className="btn-ghost h-14 px-10 text-base font-medium">Shop Trackers</Link>
        </div>

        <div className="mt-20 opacity-20">
            {/* Visual representation of a "lost signal" map */}
            <div className="w-64 h-64 border border-dashed border-alert/30 rounded-full mx-auto relative flex items-center justify-center">
                <div className="w-1 h-1 bg-alert rounded-full animate-ping" />
                <div className="absolute inset-8 border border-alert/20 rounded-full" />
                <div className="absolute inset-16 border border-alert/10 rounded-full" />
            </div>
        </div>
      </div>
    </div>
  );
}

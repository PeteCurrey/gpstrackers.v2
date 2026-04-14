import type { Metadata } from 'next';
import TrackerQuiz from '@/components/quiz/TrackerQuiz';

export const metadata: Metadata = {
  title: 'Find My Tracker | 60 Second Quiz | Travio',
  description: 'Not sure which GPS tracker is right for you? Take our 60-second quiz to find the perfect device for your car, van, caravan or business asset.',
};

export default function FindMyTrackerPage() {
  return (
    <div className="bg-void min-h-screen pt-40 pb-20 overflow-hidden relative">
      <div className="coord-grid absolute inset-0 opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] opacity-10 bg-signal/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container relative z-10">
        <div className="text-center mb-12">
            <div className="mono-label mb-4 text-signal uppercase tracking-[0.2em]">// FAST RECOMMENDATION</div>
            <h1 className="display-xl text-white mb-6">Find the perfect tracker.</h1>
            <p className="font-body text-muted text-lg lg:text-xl font-light max-w-2xl mx-auto">
              Answer a few simple questions and we'll recommend the best device for your specific needs.
            </p>
        </div>

        <TrackerQuiz />
        
        <div className="mt-16 text-center">
            <p className="font-body text-muted text-sm">Need to talk to a human? <span className="text-white">0330 0600 499</span> (Mon-Fri, 9am-5pm)</p>
        </div>
      </div>
    </div>
  );
}

'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import gsap from 'gsap';

type Step = 'asset' | 'install' | 'thatcham' | 'primary' | 'recommendation';

interface QuizState {
  assetType: 'car' | 'van' | 'motorhome' | 'caravan' | 'asset' | 'other' | null;
  installType: 'self' | 'professional' | 'either' | null;
  needsThatcham: boolean | null;
  isPrimary: boolean | null;
}

export default function TrackerQuiz() {
  const [step, setStep] = useState<Step>('asset');
  const [state, setState] = useState<QuizState>({
    assetType: null,
    installType: null,
    needsThatcham: null,
    isPrimary: null,
  });

  const quizRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Transition helper
  const goToStep = (nextStep: Step) => {
    gsap.to(contentRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.2,
      onComplete: () => {
        setStep(nextStep);
        gsap.to(contentRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.3,
          delay: 0.1,
        });
      },
    });
  };

  const selectAsset = (type: QuizState['assetType']) => {
    setState({ ...state, assetType: type });
    if (type === 'caravan') {
        goToStep('recommendation'); // Dedicated caravan tracker
    } else if (type === 'asset') {
        goToStep('recommendation'); // Asset tracker
    } else {
        goToStep('thatcham');
    }
  };

  const selectThatcham = (needed: boolean) => {
    setState({ ...state, needsThatcham: needed });
    if (needed) {
        goToStep('recommendation'); // Insurance route
    } else {
        goToStep('install');
    }
  };

  const selectInstall = (type: QuizState['installType']) => {
     setState({ ...state, installType: type });
     goToStep('recommendation');
  };

  // Recommendation logic
  const getRecommendation = () => {
    const { assetType, needsThatcham, installType } = state;

    if (assetType === 'caravan') return { name: 'Caravan Shield CT1', slug: 'caravan-shield-ct1', why: 'Specialist concealed installation with a 4-year battery.' };
    if (assetType === 'asset') return { name: 'Travio AT1', slug: 'travio-at1', why: 'Magnetic, 3-year battery, and completely covert.' };
    if (needsThatcham) return { name: 'Travio S7 Insurance', slug: 'travio-s7', why: 'Thatcham certified and professionally installed nationwide.' };
    if (installType === 'self') return { name: 'Travio FS100', slug: 'travio-fs100', why: 'Our best-selling device. Easy to hardwire or hidden.' };
    
    return { name: 'Travio FS100', slug: 'travio-fs100', why: 'The professional standard for live tracking.' };
  };

  const rec = getRecommendation();

  return (
    <div ref={quizRef} className="max-w-4xl mx-auto">
      <div 
        ref={contentRef}
        className="glass-card p-8 lg:p-16 border-border bg-void/50 min-h-[500px] flex flex-col items-center justify-center text-center"
      >
        
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-surface-2">
            <div 
                className="h-full bg-signal transition-all duration-500" 
                style={{ width: step === 'asset' ? '25%' : step === 'thatcham' ? '50%' : step === 'install' ? '75%' : '100%' }}
            />
        </div>

        {step === 'asset' && (
          <>
            <div className="mono-label mb-4 uppercase tracking-[0.2em] text-signal">// STEP 01</div>
            <h2 className="display-lg text-white mb-8">What are you tracking?</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
               {[
                 { id: 'car', label: 'Car', icon: '🚗' },
                 { id: 'van', label: 'Van', icon: '🚐' },
                 { id: 'motorhome', label: 'Motorhome', icon: '🏠' },
                 { id: 'caravan', label: 'Caravan', icon: '🏕️' },
                 { id: 'asset', label: 'Plant / Tools', icon: '🏗️' },
                 { id: 'other', label: 'Other', icon: '📦' },
               ].map((item) => (
                 <button 
                    key={item.id}
                    onClick={() => selectAsset(item.id as QuizState['assetType'])}
                    className="p-6 glass-card border-none bg-surface-2 hover:bg-signal/10 hover:border-signal/50 border border-transparent transition-all flex flex-col items-center gap-3"
                 >
                    <span className="text-3xl">{item.icon}</span>
                    <span className="font-mono text-[11px] text-white uppercase tracking-widest">{item.label}</span>
                 </button>
               ))}
            </div>
          </>
        )}

        {step === 'thatcham' && (
          <>
            <div className="mono-label mb-4 uppercase tracking-[0.2em] text-signal">// STEP 02</div>
            <h2 className="display-lg text-white mb-4">Do you need insurance approval?</h2>
            <p className="font-body text-muted mb-10 max-w-sm">Does your insurer specifically require a Thatcham Category S5 or S7 tracker?</p>
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                <button 
                  onClick={() => selectThatcham(true)}
                  className="flex-1 p-6 glass-card border-none bg-surface-2 hover:bg-signal/10 hover:border-signal/50 border border-transparent transition-all"
                >
                    <div className="font-display text-xl font-bold text-white mb-1">Yes</div>
                    <div className="font-mono text-[10px] text-muted uppercase">Required for policy</div>
                </button>
                <button 
                  onClick={() => selectThatcham(false)}
                  className="flex-1 p-6 glass-card border-none bg-surface-2 hover:bg-signal/10 hover:border-signal/50 border border-transparent transition-all"
                >
                    <div className="font-display text-xl font-bold text-white mb-1">No</div>
                    <div className="font-mono text-[10px] text-muted uppercase">Security use only</div>
                </button>
            </div>
          </>
        )}

        {step === 'install' && (
          <>
            <div className="mono-label mb-4 uppercase tracking-[0.2em] text-signal">// STEP 03</div>
            <h2 className="display-lg text-white mb-4">How do you want to install it?</h2>
            <div className="flex flex-col gap-4 w-full max-w-md">
                <button 
                  onClick={() => selectInstall('self')}
                  className="p-6 glass-card border-none bg-surface-2 hover:bg-signal/10 hover:border-signal/50 border border-transparent transition-all text-left flex items-center gap-6"
                >
                    <div className="text-2xl">🛠️</div>
                    <div className="flex flex-col">
                        <div className="font-display text-lg font-bold text-white">I'll do it myself</div>
                        <div className="font-mono text-[10px] text-muted uppercase">Hardwired or Plug & Play</div>
                    </div>
                </button>
                <button 
                  onClick={() => selectInstall('professional')}
                  className="p-6 glass-card border-none bg-surface-2 hover:bg-signal/10 hover:border-signal/50 border border-transparent transition-all text-left flex items-center gap-6"
                >
                    <div className="text-2xl">👨‍🔧</div>
                    <div className="flex flex-col">
                        <div className="font-display text-lg font-bold text-white">Arrange a professional</div>
                        <div className="font-mono text-[10px] text-muted uppercase">Nationwide specialists</div>
                    </div>
                </button>
            </div>
          </>
        )}

        {step === 'recommendation' && (
          <div className="py-8">
            <div className="mono-label mb-4 uppercase tracking-[0.2em] text-success">// RECOMMENDATION FOUND</div>
            <h2 className="display-lg text-white mb-4">We recommend the {rec.name}.</h2>
            <p className="font-body text-muted text-lg mb-10 max-w-md mx-auto">
              {rec.why}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={`/shop/${rec.slug}`} className="btn-signal h-14 px-10 text-base font-medium">View Tracker Details</Link>
                <button 
                  onClick={() => { goToStep('asset'); setState({ assetType: null, installType: null, needsThatcham: null, isPrimary: null }); }}
                  className="btn-ghost h-14 px-10 text-base font-medium"
                >
                   Start Quiz Again
                </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

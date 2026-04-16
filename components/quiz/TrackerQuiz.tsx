'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { supabase } from '@/lib/supabaseClient';

type Step = 'asset' | 'concern' | 'quantity' | 'install' | 'recommendation';

interface QuizState {
  assetType: string | null;
  concern: string | null;
  quantity: string | null;
  install: string | null;
  email: string;
}

const steps = [
  { id: 'asset', label: 'What are you tracking?' },
  { id: 'concern', label: 'What\'s your biggest concern?' },
  { id: 'quantity', label: 'How many devices do you need?' },
  { id: 'install', label: 'Installation preference?' },
];

const options = {
  asset: [
    { id: 'car-moto', label: 'Car / Motorbike', icon: '🚗' },
    { id: 'van', label: 'Van / Commercial Vehicle', icon: '🚐' },
    { id: 'fleet', label: 'Fleet (2+ vehicles)', icon: '🚛' },
    { id: 'caravan', label: 'Caravan / Motorhome', icon: '🏠' },
    { id: 'plant', label: 'Plant / Equipment / Tools', icon: '🏗️' },
    { id: 'help', label: 'Not Sure — Help Me Decide', icon: '❓' },
  ],
  concern: [
    { id: 'insurance', label: 'Insurance requirement', desc: 'My insurer needs a Thatcham device' },
    { id: 'theft', label: 'Theft recovery', desc: 'I want it back if stolen' },
    { id: 'visibility', label: 'Live visibility', desc: 'I want to see it on a map right now' },
    { id: 'cost', label: 'Lowest cost', desc: 'I want protection for as little as possible' },
  ],
  quantity: [
    { id: '1', label: 'Just 1' },
    { id: '2-5', label: '2–5' },
    { id: '6-25', label: '6–25' },
    { id: '26+', label: '26 or more' },
  ],
  install: [
    { id: 'self', label: 'I\'ll do it myself' },
    { id: 'pro', label: 'I want it professionally fitted' },
    { id: 'any', label: 'Doesn\'t matter — I want the best option' },
  ]
};

export default function TrackerQuiz() {
  const [step, setStep] = useState<Step>('asset');
  const [state, setState] = useState<QuizState>({
    assetType: null,
    concern: null,
    quantity: null,
    install: null,
    email: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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

  const selectOption = (key: keyof QuizState, value: string) => {
    setState({ ...state, [key]: value });
    
    if (key === 'assetType') goToStep('concern');
    if (key === 'concern') goToStep('quantity');
    if (key === 'quantity') {
      if (value === '26+' || value === '6-25' && state.assetType === 'fleet') {
        goToStep('recommendation'); // Direct to fleet quote
      } else {
        goToStep('install');
      }
    }
    if (key === 'install') goToStep('recommendation');
  };

  const getRecommendation = () => {
    const { assetType, concern, install, quantity } = state;

    // Logic Matrix
    if (quantity === '26+' || (quantity === '6-25' && assetType === 'fleet')) {
        return {
            name: 'Fleet Quote',
            slug: null,
            isFleet: true,
            why: 'For fleets of this size, we offer custom tiered pricing and dedicated account management.',
            price: 'Custom',
            sub: 'Custom',
            install: 'Professional'
        };
    }

    if (assetType === 'caravan') {
        return {
            name: 'Caravan Shield CT1',
            slug: 'caravan-shield-ct1',
            why: 'Specialist protection with a 4-year internal battery, perfect for seasonal storage.',
            price: '105',
            sub: '30',
            install: 'Professional'
        };
    }

    if (assetType === 'plant') {
        const prod = concern === 'cost' ? 'AT1' : 'PT1';
        return {
            name: `Travio ${prod}`,
            slug: prod === 'AT1' ? 'travio-at1' : 'travio-pt1',
            why: prod === 'AT1' ? 'The best value covert asset tracker with a 3-year battery.' : 'IP67 site-tough tracker designed for heavy machinery.',
            price: prod === 'AT1' ? '105' : '129',
            sub: prod === 'AT1' ? '30' : '49',
            install: 'Self-install'
        };
    }

    if (concern === 'insurance') {
        return {
            name: 'Travio S7',
            slug: 'travio-s7',
            why: 'Nationwide professional installation included to meet insurer requirements.',
            price: '189',
            sub: '59',
            install: 'Professional'
        };
    }

    if (concern === 'theft' && install === 'pro') {
        return {
            name: 'Travio S5',
            slug: 'travio-s5',
            why: 'Insurance approved with Automatic Driver Recognition for maximum theft recovery.',
            price: '349',
            sub: '59',
            install: 'Professional'
        };
    }

    // Default / All-rounder
    return {
        name: 'Travio FS100',
        slug: 'travio-fs100',
        why: 'Our most popular device. Hardwired for 10-second updates and absolute reliability.',
        price: '45',
        sub: '59',
        install: 'Self-install'
    };
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!state.email) return;

    setIsSubmitting(true);
    try {
      const { error } = await supabase.from('quiz_submissions').insert([
        { 
          email: state.email, 
          asset_type: state.assetType,
          concern: state.concern,
          quantity: state.quantity,
          install: state.install,
          recommendation: getRecommendation().name
        }
      ]);

      if (error) throw error;
      setSubmitted(true);
    } catch (err) {
      console.error('Error saving quiz result:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const rec = getRecommendation();
  const currentStepIndex = steps.findIndex(s => s.id === step);
  const progress = step === 'recommendation' ? 100 : ((currentStepIndex + 1) / steps.length) * 100;

  return (
    <div ref={containerRef} className="max-w-5xl mx-auto px-4 py-8">
      
      {/* Quiz Container */}
      <div className="glass-card border-border bg-void/50 overflow-hidden relative min-h-[600px] flex flex-col">
        
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-surface-2 overflow-hidden">
            <div 
                className="h-full bg-signal transition-all duration-700 ease-out" 
                style={{ width: `${progress}%` }}
            />
        </div>

        <div 
            ref={contentRef}
            className="flex-1 p-8 lg:p-16 flex flex-col items-center justify-center"
        >
            {step === 'asset' && (
                <div className="w-full max-w-4xl text-center">
                    <div className="mono-label mb-4 text-signal uppercase tracking-[0.2em]">// STEP 01: VEHICLE</div>
                    <h2 className="display-lg text-white mb-10">What are you tracking?</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {options.asset.map((opt) => (
                            <button
                                key={opt.id}
                                onClick={() => selectOption('assetType', opt.id)}
                                className={`group p-8 glass-card border-border bg-surface-2 hover:bg-signal/5 hover:border-signal/50 transition-all flex flex-col items-center gap-4 ${state.assetType === opt.id ? 'border-signal bg-signal/5' : ''}`}
                            >
                                <span className="text-4xl group-hover:scale-110 transition-transform">{opt.icon}</span>
                                <span className="font-mono text-[11px] text-white uppercase tracking-widest">{opt.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {step === 'concern' && (
                <div className="w-full max-w-2xl text-center">
                    <div className="mono-label mb-4 text-signal uppercase tracking-[0.2em]">// STEP 02: PRIORITY</div>
                    <h2 className="display-lg text-white mb-10">What's your biggest concern?</h2>
                    <div className="flex flex-col gap-4">
                        {options.concern.map((opt) => (
                            <button
                                key={opt.id}
                                onClick={() => selectOption('concern', opt.id)}
                                className={`group p-6 glass-card border-border bg-surface-2 hover:bg-signal/5 hover:border-signal/50 transition-all flex flex-col items-start text-left gap-1 ${state.concern === opt.id ? 'border-signal bg-signal/5' : ''}`}
                            >
                                <div className="font-display text-xl font-bold text-white">{opt.label}</div>
                                <div className="font-body text-sm text-muted">{opt.desc}</div>
                            </button>
                        ))}
                    </div>
                    <button onClick={() => goToStep('asset')} className="mt-8 text-muted hover:text-white transition-colors text-sm font-mono uppercase tracking-widest">← Back</button>
                </div>
            )}

            {step === 'quantity' && (
                <div className="w-full max-w-2xl text-center">
                    <div className="mono-label mb-4 text-signal uppercase tracking-[0.2em]">// STEP 03: VOLUME</div>
                    <h2 className="display-lg text-white mb-10">How many devices do you need?</h2>
                    <div className="grid grid-cols-2 gap-4">
                        {options.quantity.map((opt) => (
                            <button
                                key={opt.id}
                                onClick={() => selectOption('quantity', opt.id)}
                                className={`group p-8 glass-card border-border bg-surface-2 hover:bg-signal/5 hover:border-signal/50 transition-all flex flex-col items-center gap-2 ${state.quantity === opt.id ? 'border-signal bg-signal/5' : ''}`}
                            >
                                <span className="font-display text-3xl font-bold text-white">{opt.label}</span>
                            </button>
                        ))}
                    </div>
                    <button onClick={() => goToStep('concern')} className="mt-8 text-muted hover:text-white transition-colors text-sm font-mono uppercase tracking-widest">← Back</button>
                </div>
            )}

            {step === 'install' && (
                <div className="w-full max-w-2xl text-center">
                    <div className="mono-label mb-4 text-signal uppercase tracking-[0.2em]">// STEP 04: SETUP</div>
                    <h2 className="display-lg text-white mb-10">Installation preference?</h2>
                    <div className="flex flex-col gap-4">
                        {options.install.map((opt) => (
                            <button
                                key={opt.id}
                                onClick={() => selectOption('install', opt.id)}
                                className={`group p-6 glass-card border-border bg-surface-2 hover:bg-signal/5 hover:border-signal/50 transition-all flex flex-col items-start text-left gap-1 ${state.install === opt.id ? 'border-signal bg-signal/5' : ''}`}
                            >
                                <div className="font-display text-xl font-bold text-white">{opt.label}</div>
                            </button>
                        ))}
                    </div>
                    <button onClick={() => goToStep('quantity')} className="mt-8 text-muted hover:text-white transition-colors text-sm font-mono uppercase tracking-widest">← Back</button>
                </div>
            )}

            {step === 'recommendation' && (
                <div className="w-full max-w-3xl">
                    <div className="text-center mb-12">
                        <div className="mono-label mb-4 text-success uppercase tracking-[0.2em]">// ANALYSIS COMPLETE</div>
                        <h2 className="display-lg text-white mb-2">Your Recommendation.</h2>
                        <p className="font-body text-muted">Based on your tracking requirements and priorities.</p>
                    </div>

                    {/* Recommendation Card */}
                    <div className="glass-card border-signal/30 bg-void p-8 lg:p-12 mb-12 shadow-2xl shadow-signal/10 transition-transform hover:scale-[1.01]">
                        <div className="font-mono text-signal text-xs mb-8 opacity-60">
                            // TRAVIO RECOMMENDATION<br />
                            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            <div>
                                <div className="flex items-center gap-4 mb-2">
                                    <span className="font-mono text-[10px] text-muted uppercase tracking-widest">TRACKING</span>
                                    <span className="font-mono text-[10px] text-white uppercase">{options.asset.find(a => a.id === state.assetType)?.label}</span>
                                </div>
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="font-mono text-[10px] text-muted uppercase tracking-widest">PRIORITY</span>
                                    <span className="font-mono text-[10px] text-white uppercase">{options.concern.find(a => a.id === state.concern)?.label}</span>
                                </div>
                                
                                <h3 className="display-md text-white mb-4">{rec.name}</h3>
                                <p className="font-body text-muted text-lg leading-relaxed">{rec.why}</p>
                            </div>
                            
                            <div className="bg-surface-2/50 border border-border p-6 rounded-sm flex flex-col justify-center gap-4">
                                <div className="flex justify-between items-center border-b border-border pb-3">
                                    <span className="font-mono text-[11px] text-muted uppercase tracking-widest">PRICE</span>
                                    <span className="font-display text-2xl font-bold text-white">£{rec.price}</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-border pb-3">
                                    <span className="font-mono text-[11px] text-muted uppercase tracking-widest">SUBSCRIPTION</span>
                                    <span className="font-display text-lg font-bold text-white">£{rec.sub}/year</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="font-mono text-[11px] text-muted uppercase tracking-widest">INSTALL</span>
                                    <span className="font-display text-lg font-bold text-white">{rec.install}</span>
                                </div>
                            </div>
                        </div>

                        <div className="font-mono text-signal text-xs mb-8 opacity-60">
                            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            {rec.isFleet ? (
                                <Link href="/fleet" className="btn-signal flex-1 h-14 text-base">Get a Fleet Quote →</Link>
                            ) : (
                                <Link href={`/shop/${rec.slug}`} className="btn-signal flex-1 h-14 text-base">Get Protected Now →</Link>
                            )}
                            <button 
                                onClick={() => { setStep('asset'); setState({ assetType: null, concern: null, quantity: null, install: null, email: '' }); }}
                                className="btn-ghost flex-1 h-14 text-base"
                            >
                                Start Over
                            </button>
                        </div>
                    </div>

                    {/* Email Capture */}
                    {!submitted ? (
                        <div className="glass-card border-border bg-surface-2 p-8 text-center max-w-xl mx-auto">
                            <h4 className="font-display text-xl font-bold text-white mb-2">Email me this recommendation</h4>
                            <p className="font-body text-sm text-muted mb-6">Send these results to your inbox to review later.</p>
                            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3">
                                <input 
                                    type="email" 
                                    required
                                    placeholder="Enter your email"
                                    value={state.email}
                                    onChange={(e) => setState({...state, email: e.target.value})}
                                    className="flex-1 bg-void border border-border h-12 px-4 font-body text-white focus:border-signal outline-none transition-colors"
                                />
                                <button 
                                    disabled={isSubmitting}
                                    className="btn-signal h-12 px-8 font-mono text-xs uppercase tracking-widest disabled:opacity-50"
                                >
                                    {isSubmitting ? 'Sending...' : 'Send'}
                                </button>
                            </form>
                        </div>
                    ) : (
                        <div className="text-center p-8 bg-success/10 border border-success/30 rounded-sm">
                            <span className="text-success font-mono text-sm uppercase tracking-widest">Recommendation Sent!</span>
                        </div>
                    )}
                </div>
            )}
        </div>
      </div>
    </div>
  );
}

'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';

type VehicleType = 'Car' | 'Van' | 'Motorcycle' | 'Motorhome' | 'Caravan';

export default function InsuranceSavingsPage() {
  const [vehicleType, setVehicleType] = useState<VehicleType>('Car');
  const [vehicleValue, setVehicleValue] = useState(25000);
  const [currentPremium, setCurrentPremium] = useState<number | ''>('');
  const [postcode, setPostcode] = useState('');

  const savings = useMemo(() => {
    // Default premiums if none entered
    const basePremium = currentPremium || (vehicleType === 'Van' ? 1200 : 600);
    
    // S7: 5-15%, min 60, max 350
    const s7Min = Math.max(60, basePremium * 0.05);
    const s7Max = Math.min(350, basePremium * 0.15);
    
    // S5: 10-20%, min 100, max 500
    const s5Min = Math.max(100, basePremium * 0.10);
    const s5Max = Math.min(500, basePremium * 0.20);

    return {
        s7: { min: Math.round(s7Min), max: Math.round(s7Max) },
        s5: { min: Math.round(s5Min), max: Math.round(s5Max) },
        basePremium
    };
  }, [vehicleType, currentPremium]);

  return (
    <div className="min-h-screen pt-32 pb-20 bg-void relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-signal/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="mono-label mb-4 text-signal uppercase tracking-[0.2em] animate-fade-in">// INSURANCE SAVINGS CALCULATOR</div>
            <h1 className="display-lg text-white mb-6 uppercase">How much could a tracker save you?</h1>
            <p className="font-body text-xl text-muted">Insurers offer significant discounts for Thatcham-approved GPS trackers. Find out your potential saving.</p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Calculator Card */}
            <div className="glass-card border-border bg-surface-2 p-8 lg:p-12 animate-slide-up">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-3">
                        <label className="font-mono text-[10px] text-muted uppercase tracking-widest">VEHICLE TYPE</label>
                        <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
                            {(['Car', 'Van', 'Motorcycle', 'Motorhome', 'Caravan'] as VehicleType[]).map((type) => (
                                <button
                                    key={type}
                                    onClick={() => setVehicleType(type)}
                                    className={`h-10 border text-[11px] font-mono uppercase tracking-widest transition-all ${
                                        vehicleType === type ? 'bg-signal border-signal text-white' : 'bg-void border-border text-muted hover:border-signal/50 hover:text-white'
                                    }`}
                                >
                                    {type}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <div className="flex justify-between items-end">
                            <label className="font-mono text-[10px] text-muted uppercase tracking-widest">VEHICLE VALUE</label>
                            <span className="font-display text-xl font-bold text-white">£{vehicleValue.toLocaleString()}</span>
                        </div>
                        <input 
                            type="range"
                            min={5000}
                            max={200000}
                            step={1000}
                            value={vehicleValue}
                            onChange={(e) => setVehicleValue(Number(e.target.value))}
                            className="w-full accent-signal h-2 bg-void rounded-lg appearance-none cursor-pointer"
                        />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-3">
                            <label className="font-mono text-[10px] text-muted uppercase tracking-widest">CURRENT PREMIUM (OPTIONAL)</label>
                            <input 
                                type="number"
                                placeholder="e.g. 800"
                                value={currentPremium}
                                onChange={(e) => setCurrentPremium(e.target.value === '' ? '' : Number(e.target.value))}
                                className="bg-void border border-border h-12 px-4 font-body text-white outline-none focus:border-signal transition-colors"
                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <label className="font-mono text-[10px] text-muted uppercase tracking-widest">POSTCODE AREA (OPTIONAL)</label>
                            <input 
                                placeholder="e.g. S10"
                                value={postcode}
                                onChange={(e) => setPostcode(e.target.value)}
                                className="bg-void border border-border h-12 px-4 font-body text-white outline-none focus:border-signal transition-colors"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Results Sidebar */}
            <div className="flex flex-col gap-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="glass-card border-signal/30 bg-void p-10 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-signal" />
                    
                    <div className="font-mono text-signal text-[10px] mb-8 opacity-60">
                        ESTIMATED INSURANCE SAVING<br />
                        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                    </div>

                    <div className="space-y-10">
                        <div>
                            <div className="flex justify-between items-end mb-2">
                                <span className="font-display text-xl font-bold text-white">THATCHAM S7</span>
                                <span className="font-display text-3xl font-bold text-signal">£{savings.s7.min}–£{savings.s7.max}</span>
                            </div>
                            <div className="font-mono text-[10px] text-muted uppercase tracking-widest">PER YEAR SAVING</div>
                        </div>

                        <div>
                            <div className="flex justify-between items-end mb-2">
                                <span className="font-display text-xl font-bold text-white">THATCHAM S5</span>
                                <span className="font-display text-3xl font-bold text-signal">£{savings.s5.min}–£{savings.s5.max}</span>
                            </div>
                            <div className="font-mono text-[10px] text-muted uppercase tracking-widest">PER YEAR SAVING</div>
                        </div>
                    </div>

                    <div className="font-mono text-signal text-[10px] my-8 opacity-60">
                        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                    </div>

                    <div className="space-y-4">
                        <div className="flex justify-between items-center text-sm">
                            <span className="font-body text-muted">S7 Device Cost</span>
                            <span className="font-display text-white">£189</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="font-body text-muted">Annual Subscription</span>
                            <span className="font-display text-white">£59</span>
                        </div>
                        <div className="pt-4 border-t border-border flex justify-between items-center">
                            <span className="font-display font-bold text-white">YEAR 1 NET SAVING</span>
                            <span className="font-display text-xl font-bold text-success">
                                £{Math.max(0, savings.s7.min - (189 + 59))}–£{Math.max(0, savings.s7.max - (189 + 59))}
                            </span>
                        </div>
                    </div>

                    <Link href="/trackers/insurance-approved" className="btn-signal w-full h-14 mt-10">
                        Get Your Thatcham Tracker →
                    </Link>
                </div>

                <div className="p-6 bg-surface-2/30 border border-border rounded-sm">
                    <p className="font-body text-xs text-muted leading-relaxed">
                        *Estimates based on typical insurer discounts of 5-15% for S7 and 10-20% for S5 devices. Actual savings depend on your insurer, location, and driving history.
                    </p>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
}

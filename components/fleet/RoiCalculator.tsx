'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function RoiCalculator() {
  const [vehicles, setVehicles] = useState(10);
  const [fuelSpend, setFuelSpend] = useState(400); // per vehicle
  const [adminHours, setAdminHours] = useState(4); // per week
  const [currentCost, setCurrentCost] = useState(15); // per vehicle

  const fuelSavingsRef = useRef<HTMLDivElement>(null);
  const adminTimeRef = useRef<HTMLDivElement>(null);
  const annualSavingRef = useRef<HTMLDivElement>(null);
  const paybackRef = useRef<HTMLDivElement>(null);
  const monthlyCostRef = useRef<HTMLDivElement>(null);

  // Calculations
  const fuelSavingEstimate = vehicles * fuelSpend * 0.15; // 15% saving
  const adminTimeRecovered = adminHours * vehicles; // simplicity for demo
  const travioMonthlyCost = vehicles * 4.92; // avg sub cost
  const annualSaving = (fuelSavingEstimate * 12) + (adminTimeRecovered * 20 * 52) - (travioMonthlyCost * 12);
  const paybackPeriod = 6; // Fixed for demo or could be calculated
  
  const animateValue = (ref: React.RefObject<HTMLDivElement | null>, value: number, prefix = '', suffix = '') => {
      if (!ref.current) return;
      gsap.to(ref.current, {
          textContent: value,
          duration: 0.4,
          ease: 'power2.out',
          snap: { textContent: 1 },
          onUpdate: function() {
              if (ref.current) {
                const val = parseFloat(ref.current.textContent || '0');
                ref.current.textContent = `${prefix}${val.toLocaleString()}${suffix}`;
              }
          }
      });
  };

  useEffect(() => {
    animateValue(fuelSavingsRef, fuelSavingEstimate, '£');
    animateValue(adminTimeRef, adminTimeRecovered, '', ' HOURS');
    animateValue(annualSavingRef, annualSaving, '£');
    animateValue(paybackRef, paybackPeriod, '', ' WEEKS');
    animateValue(monthlyCostRef, 4.92, '£');
  }, [vehicles, fuelSpend, adminHours]);

  return (
    <div className="section-pad bg-surface rounded-3xl overflow-hidden relative border border-border">
      <div className="absolute top-0 left-0 w-full h-1 bg-signal" />
      
      <div className="container">
        <div className="text-center mb-12">
            <div className="mono-label mb-2">// FLEET SAVINGS CALCULATOR</div>
            <h2 className="display-lg text-white">How much could you save?</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Inputs */}
          <div className="flex flex-col gap-8">
            <div className="glass-card p-6 bg-void/50 border-none">
              <div className="flex justify-between items-center mb-4">
                <span className="font-body text-white font-medium">Number of vehicles</span>
                <span className="font-mono text-signal text-lg">{vehicles}</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="100" 
                value={vehicles}
                onChange={(e) => setVehicles(parseInt(e.target.value))}
                className="w-full h-1.5 bg-surface-2 rounded-lg appearance-none cursor-pointer accent-signal"
              />
            </div>

            <div className="glass-card p-6 bg-void/50 border-none">
              <div className="flex justify-between items-center mb-4">
                <span className="font-body text-white font-medium">Monthly fuel spend <span className="text-xs text-muted">(per vehicle)</span></span>
                <span className="font-mono text-signal text-lg">£{fuelSpend}</span>
              </div>
              <input 
                type="range" 
                min="100" 
                max="2000" 
                step="50"
                value={fuelSpend}
                onChange={(e) => setFuelSpend(parseInt(e.target.value))}
                className="w-full h-1.5 bg-surface-2 rounded-lg appearance-none cursor-pointer accent-signal"
              />
            </div>

            <div className="glass-card p-6 bg-void/50 border-none">
              <div className="flex justify-between items-center mb-4">
                <span className="font-body text-white font-medium">Weekly hours lost to admin <span className="text-xs text-muted">(per vehicle)</span></span>
                <span className="font-mono text-signal text-lg">{adminHours}</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="20" 
                value={adminHours}
                onChange={(e) => setAdminHours(parseInt(e.target.value))}
                className="w-full h-1.5 bg-surface-2 rounded-lg appearance-none cursor-pointer accent-signal"
              />
            </div>
          </div>

          {/* Results Output Panel */}
          <div className="glass-card p-8 lg:p-10 border-signal/30 relative">
            <div className="absolute top-4 right-4 text-signal/10 pointer-events-none">
                <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-2h2v2zm0-4H7v-2h2v2zm0-4H7V7h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"/></svg>
            </div>
            
            <div className="flex flex-col gap-6">
                <div className="flex justify-between items-end border-b border-border/50 pb-4">
                    <span className="font-mono text-[11px] text-muted tracking-widest uppercase">FUEL SAVINGS ESTIMATE</span>
                    <div ref={fuelSavingsRef} className="font-mono text-2xl text-signal font-bold">£0</div>
                </div>
                <div className="flex justify-between items-end border-b border-border/50 pb-4">
                    <span className="font-mono text-[11px] text-muted tracking-widest uppercase">ADMIN TIME RECOVERED</span>
                    <div ref={adminTimeRef} className="font-mono text-2xl text-signal font-bold">0 HOURS</div>
                </div>
                <div className="flex justify-between items-end border-b border-border/50 pb-4">
                    <span className="font-mono text-[11px] text-muted tracking-widest uppercase">TYPICAL PAYBACK PERIOD</span>
                    <div ref={paybackRef} className="font-mono text-2xl text-signal font-bold">0 WEEKS</div>
                </div>
                <div className="flex justify-between items-end border-b border-border/50 pb-4">
                    <span className="font-mono text-[11px] text-muted tracking-widest uppercase">COST WITH TRAVIO</span>
                    <div ref={monthlyCostRef} className="font-mono text-2xl text-signal font-bold">£0</div>
                </div>
                
                <div className="mt-4 pt-6 bg-signal/5 p-6 rounded-xl border border-signal/20">
                    <div className="font-mono text-xs text-muted mb-2 text-center uppercase tracking-widest">ESTIMATED ANNUAL SAVINGS</div>
                    <div ref={annualSavingRef} className="font-display text-5xl lg:text-6xl text-center font-bold text-white tracking-tight">£0</div>
                </div>

                <div className="mt-4">
                    <button className="btn-signal w-full h-14 text-base font-medium">Get your detailed fleet quote →</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

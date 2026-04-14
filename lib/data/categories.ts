export interface CategoryContent {
  slug: string;
  name: string;
  label: string;
  h1: string;
  sub: string;
  features: Array<{ label: string; value: string; title: string; desc: string }>;
  useCases: Array<{ title: string; desc: string }>;
  faqs: Array<{ question: string; answer: string }>;
}

export const categories: CategoryContent[] = [
  {
    slug: 'vehicle-trackers',
    name: 'Vehicle',
    label: '// VEHICLE TRACKING',
    h1: 'GPS TRACKERS FOR CARS, VANS & MOTORCYCLES.',
    sub: 'Thatcham-approved options and self-install devices. Protect any road vehicle from £45.',
    features: [
      { label: 'BATTERY', value: '4mA DRAW', title: 'Low Power', desc: 'Wont drain your vehicle battery even if parked for weeks.' },
      { label: 'ROAMING', value: '120 COUNTRIES', title: 'Global Coverage', desc: 'Multi-network 4G SIM works across UK and Europe out of the box.' },
      { label: 'UPDATES', value: '10 SECONDS', title: 'Live Updates', desc: 'Real-time positioning every 10 seconds while the vehicle is moving.' }
    ],
    useCases: [
      { title: 'Personal Vehicle Security', desc: 'Peace of mind for your daily driver. Get alerts if it moves without you.' },
      { title: 'Motorcycle Protection', desc: 'Ultra-compact trackers that can be hidden in tight spaces.' },
      { title: 'Classic Car Tracking', desc: 'Battery-friendly protection for high-value heritage vehicles.' },
      { title: 'Van & Tool Security', desc: 'Defend your livelihood with geofences around your home or job site.' }
    ],
    faqs: [
      { question: 'Will it drain my car battery?', answer: 'Our trackers enter a deep sleep mode when stationary and draw less than 4mA, which is lower than many standard car clocks.' },
      { question: 'Can I install it myself?', answer: 'Yes, we offer hardwired and OBD plug-and-play options that move between vehicles easily.' }
    ]
  },
  {
    slug: 'fleet-trackers',
    name: 'Fleet',
    label: '// FLEET TRACKING',
    h1: 'GPS FLEET TRACKING FOR UK BUSINESSES.',
    sub: 'Real-time location, driver behaviour, and route history. From 2 vans to 200+ vehicles.',
    features: [
      { label: 'EFFICIENCY', value: '22% SAVING', title: 'Fuel Reduction', desc: 'Cut fuel costs through better routing and idling reduction.' },
      { label: 'SCALABLE', value: 'ANY SIZE', title: 'Full Fleet Sync', desc: 'Manage 2 to 2000+ vehicles on a single dashboard.' },
      { label: 'COACHING', value: 'SCORE CARDS', title: 'Driver Behaviour', desc: 'Identify harsh braking, speeding, and rapid acceleration.' }
    ],
    useCases: [
      { title: 'Delivery & Logistics', desc: 'Provide accurate ETAs to customers based on live traffic and vehicle location.' },
      { title: 'Service & Trades', desc: 'Know exactly when your team arrives and leaves a job site for accurate billing.' },
      { title: 'Employee Safety', desc: 'Lone worker protection and emergency support for drivers on the road.' },
      { title: 'Asset Visibility', desc: 'Reduce "lost" equipment by tracking every company asset in real-time.' }
    ],
    faqs: [
      { question: 'Can I see all vehicles at once?', answer: 'Yes, the Travio Live dashboard shows your entire fleet on one map with real-time status.' },
      { question: 'Is it legal to track employees?', answer: 'Yes, provided it is for legitimate business purposes (routing, safety, tax) and disclosed in your employee handbook.' }
    ]
  },
  {
    slug: 'insurance-approved',
    name: 'Insurance Approved',
    label: '// INSURANCE APPROVED',
    h1: 'THATCHAM-APPROVED TRACKERS. PROFESSIONALLY INSTALLED.',
    sub: 'S7 from £189. S5 from £349. Completion certificate issued same day. Nationwide installation.',
    features: [
      { label: 'STANDARD', value: 'THATCHAM S5', title: 'Highest Security', desc: 'S5+ includes remote immobilisation for maximum protection.' },
      { label: 'MONITORED', value: '24/7/365', title: 'Secure Control', desc: 'Active monitoring centre managed by Thatcham-accredited staff.' },
      { label: 'SERVICE', value: 'NATIONWIDE', title: 'UK Installation', desc: 'Approved engineers come to your home, work, or dealership.' }
    ],
    useCases: [
      { title: 'High-Value Cars', desc: 'Most insurers require S5 or S7 tracking for vehicles valued over £40k.' },
      { title: 'Leased Vehicles', desc: 'Protect your deposit and satisfy lease contract security requirements.' },
      { title: 'Motorhomes & Caravans', desc: 'Specialist specialist installations for leisure vehicles to maintain warranty.' },
      { title: 'Security Compliance', desc: 'Reduce your annual premiums by installing an approved tracker.' }
    ],
    faqs: [
      { question: 'How do I get my certificate?', answer: 'Once the engineer completes the fit, your certificate is generated and emailed to you automatically.' },
      { question: 'Does it include monitoring?', answer: 'Yes, all Thatcham trackers include professional 24/7 monitoring response.' }
    ]
  },
  {
    slug: 'asset-trackers',
    name: 'Asset',
    label: '// ASSET TRACKING',
    h1: 'GPS ASSET TRACKERS. UP TO 3-YEAR BATTERY.',
    sub: 'Magnetic. No wiring. No installation. Fits tools, trailers, and equipment in under 60 seconds.',
    features: [
      { label: 'LIFESPAN', value: '3 YEARS', title: 'Extreme Battery', desc: 'Internal power lasts up to 3 years without a single charge.' },
      { label: 'RATING', value: 'IP67 RATED', title: 'Weather Proof', desc: 'Submersion-proof casing designed for external mounting.' },
      { label: 'FITMENT', value: 'MAGNETIC', title: 'Quick Fit', desc: 'Industrial magnets hold firm against heavy vibration.' }
    ],
    useCases: [
      { title: 'Tool & Equipment Hubs', desc: 'Track expensive tool chests and generators moved between sites.' },
      { title: 'Trailers & Skips', desc: 'Monitor static assets that are often left on customer sites unattended.' },
      { title: 'Agricultural Machinery', desc: 'Protect quad bikes, attachments, and high-value farm equipment.' },
      { title: 'Shipping Containers', desc: 'Visibility of high-value cargo across global routes.' }
    ],
    faqs: [
      { question: 'Is it really magnetic?', answer: 'Yes, our industrial-grade magnets are designed for high-vibration site vehicles.' },
      { question: 'What if it\'s inside a container?', answer: 'GPS requires a partial "view" of the sky, but our high-sensitivity chips often work through fiberglass and thin metal.' }
    ]
  },
  {
    slug: 'caravan-motorhome',
    name: 'Caravan & Motorhome',
    label: '// LEISURE TRACKING',
    h1: 'GPS TRACKERS FOR CARAVANS & MOTORHOMES.',
    sub: 'Up to 4-year battery. Specialist concealed installation. Geofence alerts when it moves without you.',
    features: [
      { label: 'SENSORY', value: 'TILT & VIBE', title: 'Tamper Alerts', desc: 'Detects if the vehicle is being lifted or towed even when stationary.' },
      { label: 'POWER', value: '4-YEAR BATT', title: 'Internal Reserve', desc: 'Maintains protection even if the leisure battery is removed for winter storage.' },
      { label: 'ALERTS', value: 'GEOFENCE', title: 'Boundary Guard', desc: 'Instant push notification if your caravan leaves its storage location.' }
    ],
    useCases: [
      { title: 'Winter Storage', desc: 'Peace of mind while your motorhome is parked up for the off-season.' },
      { title: 'Campsite Security', desc: 'Get alerts even while you are asleep if someone attempts to hitch up.' },
      { title: 'Rental Fleet', desc: 'Manage your hire vehicles with ease and verify mileage/usage.' },
      { title: 'Insurance Discounts', desc: 'Most major leisure insurers offer up to 20% discount for tracked caravans.' }
    ],
    faqs: [
      { question: 'Does it work in storage?', answer: 'Yes, our battery-powered models are ideal for storage sites with no power access.' },
      { question: 'Is the siren included?', answer: 'Some models integrate with existing alarms, while others are silent covert trackers for recovery.' }
    ]
  },
  {
    slug: 'plant-machinery',
    name: 'Plant & Machinery',
    label: '// PLANT TRACKING',
    h1: 'GPS TRACKERS FOR PLANT & MACHINERY.',
    sub: 'Excavators, telehandlers, dumpers, and agricultural equipment. IP67. 90-day battery. No wiring.',
    features: [
      { label: 'INDUSTRIAL', value: 'IP67 RATED', title: 'Site Ready', desc: 'Dust-proof and waterproof. Designed for the harshest site conditions.' },
      { label: 'RESILIENT', value: 'ANTI-VIBE', title: 'Stable Fixed', desc: 'Magnetic and screw-mount options that stay put on working machinery.' },
      { label: 'ALERTS', value: 'CURFEW', title: 'Out-of-Hours', desc: 'Alerts if a machine is started or moved outside of working hours.' }
    ],
    useCases: [
      { title: 'Construction Plant', desc: 'Protect excavators, dumpers, and telehandlers on unmanned sites overnight.' },
      { title: 'Agricultural Equipment', desc: 'Track tractors and expensive attachments across vast rural areas.' },
      { title: 'Plant Hire Fleet', desc: 'Monitor runtime hours for accurate maintenance and billing cycles.' },
      { title: 'Small Tool Assets', desc: 'Track wacker plates, generators, and site lights from a single app.' }
    ],
    faqs: [
      { question: 'How is it site-proof?', answer: 'The casing is industrial-grade resin-filled plastic, making it nearly indestructible on site.' },
      { question: 'Can I monitor run-time?', answer: 'Yes, our platform tracks "movement" hours which serves as a proxy for machine activity.' }
    ]
  }
];

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string | string[];
  tagline: string;
  price: number;
  compareAtPrice?: number;
  subscriptionAnnual: number;
  thatcham?: string;
  installType: 'self' | 'professional' | 'magnetic' | 'obd';
  isFeatured?: boolean;
  badge?: string;
  specs: Array<{ key: string; value: string }>;
  features: string[];
  faqs: Array<{ question: string; answer: string }>;
}

export const products: Product[] = [
  {
    id: 'travio-fs100',
    name: 'Travio FS100',
    slug: 'travio-fs100',
    category: 'fleet',
    tagline: 'The professional fleet standard. Hardwired for absolute reliability.',
    price: 45,
    compareAtPrice: 65,
    subscriptionAnnual: 59,
    installType: 'self',
    isFeatured: true,
    specs: [
      { key: 'DEVICE TYPE', value: 'Hardwired Vehicle Tracker' },
      { key: 'CONNECTIVITY', value: '4G Multi-network SIM' },
      { key: 'UPDATE INTERVAL', value: '10 Seconds (Live)' },
      { key: 'POWER', value: '9V – 90V DC' },
      { key: 'BACKUP BATTERY', value: 'Internal 170mAh' }
    ],
    features: [
      'Real-time 10-second location updates',
      'Ignition on/off detection',
      'Internal backup battery in case of tampering',
      'Direct hardwire to vehicle 12/24V system',
      'Ultra-compact design for covert placement'
    ],
    faqs: [
      { question: 'Can I install the FS100 myself?', answer: 'Yes. The FS100 hardwires to a permanent live and ground on your vehicle\'s 12V system. Most confident DIYers complete the install in 20–30 minutes.' },
      { question: 'Will the FS100 drain my battery?', answer: 'The FS100 enters a low-power sleep mode when stationary and draws less than 4mA. This will not affect a healthy vehicle battery.' }
    ]
  },
  {
    id: 'travio-fs003',
    name: 'Travio FS003',
    slug: 'travio-fs003',
    category: 'vehicle',
    tagline: 'OBD plug & play — live in 60 seconds.',
    price: 105,
    subscriptionAnnual: 59,
    installType: 'obd',
    specs: [
      { key: 'DEVICE TYPE', value: 'OBD-II Plug & Play' },
      { key: 'CONNECTIVITY', value: '4G LTE-M' },
      { key: 'PORT', value: 'Standard OBD-II' }
    ],
    features: [
      'No wiring required',
      'Fits every car since 1996',
      'Plug & play — transfer between vehicles easily',
      'Internal backup battery',
      'Detailed engine-on/off reporting'
    ],
    faqs: [
      { question: 'Where is the OBD port?', answer: 'Usually located under the dashboard on the driver\'s side.' }
    ]
  },
  {
    id: 'travio-llb',
    name: 'Travio LLB',
    slug: 'travio-llb',
    category: ['asset', 'plant'],
    tagline: '40-day battery, industrial magnetic mount.',
    price: 150,
    subscriptionAnnual: 30,
    installType: 'magnetic',
    specs: [
      { key: 'BATTERY', value: 'Internal Rechargeable (40-day)' },
      { key: 'MOUNT', value: 'High-strength Industrial Magnet' }
    ],
    features: ['Long battery life', 'Magnetic mount', 'IP65 waterproof'],
    faqs: []
  },
  {
    id: 'travio-at1',
    name: 'Travio AT1',
    slug: 'travio-at1',
    category: ['asset', 'plant'],
    tagline: '3-year battery — truly covert asset protection.',
    price: 105,
    subscriptionAnnual: 30,
    installType: 'magnetic',
    specs: [
      { key: 'BATTERY', value: '3-Year Non-rechargeable' },
      { key: 'MOUNT', value: 'Magnetic / Adhesive' }
    ],
    features: ['3-year battery life', 'Zero installation', 'Undetectable', 'IP67 rated'],
    faqs: []
  },
  {
    id: 'travio-pt1',
    name: 'Travio PT1 Plant Tracker',
    slug: 'travio-pt1',
    category: 'plant',
    tagline: 'Built for sites. Built to survive them.',
    price: 129,
    compareAtPrice: 159,
    subscriptionAnnual: 49,
    installType: 'magnetic',
    specs: [
      { key: 'DEVICE TYPE', value: 'Industrial asset tracker' },
      { key: 'CONNECTIVITY', value: '4G multi-network SIM (included)' },
      { key: 'UPDATE INTERVAL', value: 'On-movement or timed' },
      { key: 'POWER', value: 'Internal battery — up to 90 days' },
      { key: 'MOUNTING', value: 'Industrial-grade magnetic + adhesive' },
      { key: 'INGRESS RATING', value: 'IP67 — dust and submersion proof' },
      { key: 'WARRANTY', value: '12 months' }
    ],
    features: [
      '90-day battery life in timed report mode',
      'IP67 rated — waterproof and dust-proof for site conditions',
      'Industrial magnetic mount — resists vibration',
      'Geofence alerts — know the moment an asset leaves a site',
      'On-movement wake-up — battery conserved when stationary',
      'No wiring required — fits in under 60 seconds'
    ],
    faqs: []
  },
  {
    id: 'travio-s7',
    name: 'Travio S7 Insurance',
    slug: 'travio-s7',
    category: 'insurance',
    tagline: 'Thatcham S7 — professionally installed.',
    price: 189,
    compareAtPrice: 329,
    subscriptionAnnual: 59,
    installType: 'professional',
    thatcham: 'S7',
    specs: [
      { key: 'THATCHAM CATEGORY', value: 'S7 — Asset Location' },
      { key: 'INSTALLATION', value: 'Nationwide Professional Included' }
    ],
    features: ['Insurance approved', '24/7 monitoring centre', 'Nationwide installation', 'Tamper alerts'],
    faqs: []
  },
  {
    id: 'travio-s5',
    name: 'Travio S5',
    slug: 'travio-s5',
    category: 'insurance',
    tagline: 'Thatcham S5 with ADR fobs.',
    price: 349,
    compareAtPrice: 449,
    subscriptionAnnual: 59,
    installType: 'professional',
    thatcham: 'S5',
    specs: [
      { key: 'THATCHAM CATEGORY', value: 'S5 — Theft Recovery' },
      { key: 'ADR FOBS', value: '2x Automatic Driver Recognition' }
    ],
    features: ['Insurance approved', 'ADR Fobs included', '24/7 monitoring centre', 'Driver detection'],
    faqs: []
  },
  {
    id: 'travio-s5plus',
    name: 'Travio S5+',
    slug: 'travio-s5plus',
    category: 'insurance',
    tagline: 'S5 with remote immobilisation.',
    price: 549,
    compareAtPrice: 599,
    subscriptionAnnual: 59,
    installType: 'professional',
    thatcham: 'S5',
    specs: [
      { key: 'IMMOBILISATION', value: 'Remote Police-Authorized' }
    ],
    features: ['All S5 features', 'Remote immobilisation', 'Highest security level'],
    faqs: []
  },
  {
    id: 'caravan-shield-ct1',
    name: 'Caravan Shield CT1',
    slug: 'caravan-shield-ct1',
    category: 'caravan',
    tagline: '4-year battery, concealed installation.',
    price: 105,
    subscriptionAnnual: 30,
    installType: 'professional',
    specs: [
      { key: 'BATTERY', value: '4-Year Internal' }
    ],
    features: ['4-year battery', 'Specialist concealed fit', 'Geofence alerts'],
    faqs: []
  },
  {
    id: 'belt-braces-bundle',
    name: 'Travio Belt & Braces Bundle',
    slug: 'belt-braces-bundle',
    category: ['vehicle', 'fleet'],
    tagline: 'Dual tracker protection. Primary hardwired + Covert battery backup.',
    price: 97.50,
    compareAtPrice: 150,
    subscriptionAnnual: 89,
    badge: 'BUNDLE — SAVE 35%',
    installType: 'self',
    specs: [
      { key: 'PRIMARY', value: 'Travio FS100 (Hardwired)' },
      { key: 'BACKUP', value: 'Travio AT1 (Magnetic)' }
    ],
    features: [
      'Two independent trackers for one vehicle',
      'Thieves find the primary, never the backup',
      'Dual platform visibility',
      'AT1 stays silent until primary is compromised'
    ],
    faqs: []
  }
];

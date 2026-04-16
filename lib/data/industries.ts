export interface Industry {
  slug: string;
  name: string;
  headline: string;
  sub: string;
  heroStat: string;
  heroStatLabel: string;
  painPoints: string[];
  recommendedProducts: string[]; // SKUs
  caseStudy: string | null;
  clients: string[];
}

export const industries: Industry[] = [
  {
    slug: 'construction',
    name: 'Construction',
    headline: 'GPS TRACKING FOR CONSTRUCTION COMPANIES.',
    sub: 'Protect plant, track vehicles, and manage multi-site operations from one dashboard.',
    heroStat: '£800M+',
    heroStatLabel: 'lost to construction plant theft annually in the UK',
    painPoints: [
      'Plant stolen overnight from unguarded sites', 
      'No visibility on where machinery has moved', 
      'Vehicles driven unauthorised outside working hours'
    ],
    recommendedProducts: ['travio-pt1', 'travio-fs100', 'travio-at1'],
    caseStudy: 'hardwick-plant-hire',
    clients: ['Plant hire companies', 'Civil engineering firms', 'General contractors', 'Groundworks specialists'],
  },
  {
    slug: 'logistics',
    name: 'Logistics & Courier',
    headline: 'FLEET TRACKING FOR LOGISTICS & COURIER COMPANIES.',
    sub: 'Real-time location, driver behaviour, and route history across your entire delivery fleet.',
    heroStat: '22%',
    heroStatLabel: 'average fuel reduction for logistics fleets using driver behaviour scoring',
    painPoints: [
      'No visibility on driver routes and behaviour', 
      'Fuel costs rising with no data to challenge them', 
      'Customer delivery queries with no live ETA'
    ],
    recommendedProducts: ['travio-fs100', 'travio-fs003', 'belt-braces-bundle'],
    caseStudy: 'east-midlands-logistics-roi',
    clients: ['Same-day couriers', 'Last-mile delivery', 'Freight operators', 'Multi-drop distribution'],
  },
  {
    slug: 'scaffolding',
    name: 'Scaffolding',
    headline: 'GPS TRACKING FOR SCAFFOLDING COMPANIES.',
    sub: 'Track trailers, lorries, and loose equipment. Know what\'s on which site — live.',
    heroStat: '£500M+',
    heroStatLabel: 'in scaffolding equipment stolen in the UK annually',
    painPoints: [
      'Scaffolding trailers stolen overnight from sites', 
      'No visibility on which lorry is at which job', 
      'Equipment "borrowed" between sites without authorisation'
    ],
    recommendedProducts: ['travio-at1', 'travio-fs100', 'travio-pt1'],
    caseStudy: 'peak-district-scaffolding',
    clients: ['Independent scaffolding contractors', 'National scaffolding firms', 'Temporary structures companies'],
  },
  {
    slug: 'agriculture',
    name: 'Agriculture & Farming',
    headline: 'GPS TRACKING FOR FARMS & AGRICULTURAL BUSINESSES.',
    sub: 'Protect tractors, quad bikes, and machinery across remote land. 90-day battery. No signal needed 24/7.',
    heroStat: '£44M',
    heroStatLabel: 'lost to rural crime in the UK in 2024 (NFU Mutual)',
    painPoints: [
      'Tractors and quads stolen from remote fields overnight', 
      'No mobile signal in parts of the farm', 
      'Large estate — impossible to physically monitor'
    ],
    recommendedProducts: ['travio-pt1', 'travio-at1', 'caravan-shield-ct1'],
    caseStudy: null,
    clients: ['Arable farmers', 'Livestock farmers', 'Agricultural contractors', 'Farm estates'],
  },
  {
    slug: 'plant-hire',
    name: 'Plant Hire',
    headline: 'GPS TRACKING FOR PLANT HIRE COMPANIES.',
    sub: 'Know where every machine is, when it was last moved, and whether it\'s still on the right site.',
    heroStat: '73 days',
    heroStatLabel: 'battery life on the Travio PT1 in real-world site conditions',
    painPoints: [
      'Machines moved between sites without notification', 
      'No asset register accuracy — machines "go missing"', 
      'Insurance claims blocked by no theft evidence'
    ],
    recommendedProducts: ['travio-pt1', 'travio-at1', 'travio-fs100'],
    caseStudy: 'hardwick-plant-hire',
    clients: ['National plant hire chains', 'Independent plant hire', 'Tool hire companies'],
  },
  {
    slug: 'tradesperson',
    name: 'Tradespeople',
    headline: 'GPS TRACKING FOR TRADESPEOPLE.',
    sub: 'Protect your van, your tools, and your livelihood. From £45. Install in 60 seconds.',
    heroStat: '1 in 3',
    heroStatLabel: 'tradespeople have had a van or tools stolen in the last 3 years',
    painPoints: [
      'Van broken into on site for tools', 
      'Van stolen overnight from outside home', 
      'No way to prove van location for insurance claims'
    ],
    recommendedProducts: ['travio-fs100', 'belt-braces-bundle', 'travio-at1'],
    caseStudy: 'mt-electrical-recovery',
    clients: ['Electricians', 'Plumbers', 'Builders', 'Joiners', 'Decorators'],
  },
  {
    slug: 'haulage',
    name: 'Haulage & HGV',
    headline: 'GPS TRACKING FOR HAULAGE & HGV FLEETS.',
    sub: 'Full visibility across your HGV fleet. Driver hours compliance. Live location for every load.',
    heroStat: '89%',
    heroStatLabel: 'of haulage companies report productivity improvement after fleet tracking implementation',
    painPoints: [
      'Driver hours compliance without visibility', 
      'No live ETA for customer queries', 
      'Fuel fraud with no route data to challenge it'
    ],
    recommendedProducts: ['travio-fs100', 'travio-fs003'],
    caseStudy: null,
    clients: ['Owner-operators', 'Regional hauliers', 'National freight operators', 'Container logistics'],
  },
  {
    slug: 'caravan-motorhome-dealers',
    name: 'Caravan & Motorhome Dealers',
    headline: 'GPS TRACKING FOR CARAVAN & MOTORHOME DEALERSHIPS.',
    sub: 'Offer Travio tracking as a dealer add-on. Increase sale value. Protect your demonstrators.',
    heroStat: '4 years',
    heroStatLabel: 'battery life on the Travio Caravan Shield — zero maintenance for your customers',
    painPoints: [
      'Customers lose caravans to theft — damaging your reputation', 
      'Demo stock untracked on premises', 
      'No recurring revenue from after-sales'
    ],
    recommendedProducts: ['caravan-shield-ct1', 'travio-at1'],
    caseStudy: null,
    clients: ['Caravan dealers', 'Motorhome dealers', 'Holiday park operators'],
  },
];

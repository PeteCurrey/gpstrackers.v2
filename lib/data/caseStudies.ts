export interface CaseStudyContent {
  slug: string;
  industry: string;
  company: string;
  location: string;
  resultLabel: string;
  metrics: Array<{ label: string; value: string }>;
  problem: string;
  solution: string;
  results: string;
  quote?: { text: string; author: string; position: string };
}

export const caseStudies: CaseStudyContent[] = [
  {
    slug: 'mt-electrical-recovery',
    industry: 'Electrical Services',
    company: 'MT Electrical Services',
    location: 'Chesterfield',
    resultLabel: 'Stolen van recovered in 4 hours',
    metrics: [
      { label: 'VEHICLES TRACKED', value: '1 van' },
      { label: 'RECOVERY TIME', value: '4 hours' },
      { label: 'OUTCOME', value: 'Full recovery, no loss' }
    ],
    problem: 'MT Electrical had an increase in local vehicle thefts. As a small business, the loss of their primary van and £12,000 worth of specialist equipment would have been financially devastating.',
    solution: 'Installed a Travio FS100 hardwired device for real-time tracking and geofence alerts.',
    results: 'The van was stolen from a residential driveway at 3 AM. A geofence alert immediately notified the owner, who tracked the live location to a lock-up in Rotherham. Police were on-site within 40 minutes and recovered the van with all tools intact.',
    quote: { text: "Paid for itself many times over in one single night.", author: "Mark Thompson", position: "Director" }
  },
  {
    slug: 'east-midlands-logistics-roi',
    industry: 'Logistics',
    company: 'East Midlands Logistics Ltd',
    location: 'Nottingham',
    resultLabel: '22% fuel reduction across 24 vehicles',
    metrics: [
      { label: 'FLEET SIZE', value: '24 vehicles' },
      { label: 'FUEL REDUCTION', value: '22%' },
      { label: 'PAYBACK PERIOD', value: '6 weeks' }
    ],
    problem: 'Fuel spend was rising and the fleet manager had zero visibility over driver idling or harsh acceleration, leading to high maintenance costs and fuel waste.',
    solution: 'Full fleet rollout of FS100 trackers with integrated driver behaviour scoring.',
    results: 'Detailed scoring identification of the "bottom 10%" of drivers led to targeted coaching. Fuel spend dropped by 22% within the first 90 days. Maintenance for brakes and tires also saw a significant reduction.',
    quote: { text: "The ROI was clear within the first 6 weeks of usage.", author: "Sarah Jennings", position: "Fleet Manager" }
  },
  {
    slug: 'peak-district-scaffolding',
    industry: 'Construction',
    company: 'Peak District Scaffolding',
    location: 'Sheffield',
    resultLabel: 'Geofence breach caught overnight theft attempt',
    metrics: [
      { label: 'ASSETS TRACKED', value: '3 trailers + tools' },
      { label: 'ALERT TIME', value: '11 minutes' },
      { label: 'OUTCOME', value: 'Police called, thieves fled' }
    ],
    problem: 'Expensive scaffolding trailers were being left on unmanned sites throughout the Sheffield area, targets for overnight theft.',
    solution: 'Fitted Travio AT1 magnetic battery trackers covertly on all trailers.',
    results: 'At 2:14 AM, a trailer geofence was breached. The owner received a push notification immediately. Police attended within 11 minutes and found the trailer hitched to a vehicle; the thieves fled when the siren approached.',
    quote: { text: "We caught them in the act because of the instant geofence alert.", author: "James Cartwright", position: "Owner" }
  },
  {
    slug: 'hardwick-plant-hire',
    industry: 'Plant Hire',
    company: 'Hardwick Plant Hire',
    location: 'Derbyshire',
    resultLabel: 'Excavator recovered 12 miles from site',
    metrics: [
      { label: 'ASSETS TRACKED', value: '8 machines' },
      { label: 'RECOVERY DISTANCE', value: '12 miles' },
      { label: 'BATTERY LIFE', value: '73 days (PT1)' }
    ],
    problem: 'High-value mini-excavators were being targeted across rural sites where power for tracking was not available.',
    solution: 'Used Travio PT1 Plant Trackers with industrial magnetic mounts and long battery life.',
    results: 'A 2.5-ton excavator was taken during a weekend work stoppage. The PT1 reported location every 4 hours. By the time it reached a suspected site 12 miles away, the team had already coordinates for the police. Device was still at 92% battery.',
    quote: { text: "Site environments are brutal, but the PT1 handles it without issue.", author: "Helen Cartwright", position: "Operations" }
  },
  {
    slug: 'peak-district-equestrian',
    industry: 'Equestrian',
    company: 'Peak District Equestrian Centre',
    location: 'Bakewell',
    resultLabel: 'Three horse trailer alerts in one night',
    metrics: [
      { label: 'TRAILERS TRACKED', value: '3 CT1 devices' },
      { label: 'ALERT AT', value: '2:14am' },
      { label: 'OUTCOME', value: 'Police attended, trailers secured' }
    ],
    problem: 'Trailer theft is an epidemic in rural Derbyshire, often targeted at night in remote stable yards.',
    solution: 'Installed Caravan Shield CT1 trackers for their 4-year battery life and tilt detection.',
    results: 'A group of trailers were targeted. The CT1 detected tilt/movement on the first trailer and sent an immediate alert. The yard owner was able to switch on large-scale site lighting and disrupt the theft.',
    quote: { text: "The peace of mind for our boarders is worth every penny.", author: "James & Helen Cartwright", position: "Owners" }
  },
  {
    slug: 'county-groundworks',
    industry: 'Groundworks',
    company: 'County Groundworks',
    location: 'Leicester',
    resultLabel: 'Full site visibility across 3 locations',
    metrics: [
      { label: 'SITES MONITORED', value: '3' },
      { label: 'ASSETS TRACKED', value: '14' },
      { label: 'ADMIN SAVED', value: '6 hours/week' }
    ],
    problem: 'Managing multiple sites meant tools and machines were constantly being misplaced, leading to downtime and duplicate hiring costs.',
    solution: 'Unified approach tracking every large machine and tool chest on one dashboard.',
    results: 'ADMIN SAVED: 6 hours/week previously spent calling site leads to find equipment. Site efficiency has significantly improved by always knowing where the nearest available dumper or excavator is located.',
    quote: { text: "We no longer hire duplicate machines because we can't find our own.", author: "Richard Evans", position: "Director" }
  }
];

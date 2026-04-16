export interface Comparison {
  slug: string;
  name: string;
  shortName: string;
  strengths: string[];
  weaknesses: string[];
  priceComparison: {
    travio: string;
    competitor: string;
  };
}

export const comparisons: Comparison[] = [
  {
    slug: 'travio-vs-itrack',
    name: 'iTrack',
    shortName: 'iTrack',
    strengths: ['Low initial hardware price', 'Self-install focus'],
    weaknesses: ['Limited customer support', 'Hidden data charges in some plans', 'Basic platform interface'],
    priceComparison: {
      travio: '£45 + £59/yr',
      competitor: '£30 + £60/yr'
    }
  },
  {
    slug: 'travio-vs-quartix',
    name: 'Quartix',
    shortName: 'Quartix',
    strengths: ['Long-standing industry presence', 'Detailed reports'],
    weaknesses: ['Long-term contracts (12-36 months)', 'Higher annual costs', 'Dated mobile interface'],
    priceComparison: {
      travio: '£45 + £59/yr',
      competitor: '£0 + £180/yr (Contract)'
    }
  },
  {
    slug: 'travio-vs-ram-tracking',
    name: 'RAM Tracking',
    shortName: 'RAM',
    strengths: ['Business fleet scale', 'Installation network'],
    weaknesses: ['Aggressive sales tactics', 'Complex pricing structure', 'No transparent self-install options'],
    priceComparison: {
      travio: '£45 + £59/yr',
      competitor: 'Quote Based (High)'
    }
  },
];

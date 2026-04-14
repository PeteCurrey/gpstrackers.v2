import { MetadataRoute } from 'next';

const BASE_URL = 'https://travio.co.uk';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/shop',
    '/fleet',
    '/platform',
    '/how-it-works',
    '/find-my-tracker',
    '/case-studies',
    '/blog',
    '/cart',
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic slugs (Normally fetched from Sanity)
  const productSlugs = [
    'travio-fs100', 'travio-at1', 'travio-s7', 'travio-s5', 'travio-s5plus', 
    'travio-fs003', 'travio-llb', 'caravan-shield-ct1'
  ];
  
  const blogSlugs = [
    'obd-vs-hardwired-trackers', 'thatcham-s5-vs-s7-guide', 
    'driver-behaviour-scoring-case-study', 'vehicle-theft-trends-2026',
    'hidden-cost-of-paper-logs', 'concealment-locations-guide'
  ];

  const caseStudySlugs = [
    'mt-electrical-recovery', 'east-midlands-logistics-roi',
    'peak-equestrian-prevention', 'jct600-visibility',
    'build-it-construction-tracking', 'sheffield-council-optimisation'
  ];

  const productRoutes = productSlugs.map((slug) => ({
    url: `${BASE_URL}/shop/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const blogRoutes = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const caseStudyRoutes = caseStudySlugs.map((slug) => ({
    url: `${BASE_URL}/case-studies/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...routes, ...productRoutes, ...blogRoutes, ...caseStudyRoutes];
}

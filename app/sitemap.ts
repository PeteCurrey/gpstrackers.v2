import { MetadataRoute } from 'next';
import { categories } from '@/lib/data/categories';
import { products } from '@/lib/data/products';
import { caseStudies } from '@/lib/data/caseStudies';
import { blogPosts } from '@/lib/data/blog';
import { vehicles } from '@/lib/data/vehicles';
import { industries } from '@/lib/data/industries';
import { locations } from '@/lib/data/locations';
import { comparisons } from '@/lib/data/comparisons';

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
    '/about',
    '/cart',
    '/trade',
    '/pricing',
    '/tools/theft-risk',
    '/tools/fleet-advisor',
    '/tools/insurance-savings',
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const productRoutes = products.map((p) => ({
    url: `${BASE_URL}/shop/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const categoryRoutes = categories.map((c) => ({
    url: `${BASE_URL}/trackers/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const caseStudyRoutes = caseStudies.map((cs) => ({
    url: `${BASE_URL}/case-studies/${cs.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Programmatic SEO Routes
  const vehicleRoutes = vehicles.map((v) => ({
    url: `${BASE_URL}/vehicles/${v.make}/${v.model}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  const industryRoutes = industries.map((i) => ({
    url: `${BASE_URL}/industries/${i.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const locationRoutes = locations.map((l) => ({
    url: `${BASE_URL}/locations/${l.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  const comparisonRoutes = comparisons.map((c) => ({
    url: `${BASE_URL}/compare/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  return [
    ...routes, 
    ...productRoutes, 
    ...categoryRoutes, 
    ...blogRoutes, 
    ...caseStudyRoutes,
    ...vehicleRoutes,
    ...industryRoutes,
    ...locationRoutes,
    ...comparisonRoutes
  ];
}

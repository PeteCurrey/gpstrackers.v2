import { MetadataRoute } from 'next';
import { categories } from '@/lib/data/categories';
import { products } from '@/lib/data/products';
import { caseStudies } from '@/lib/data/caseStudies';
import { blogPosts } from '@/lib/data/blog';

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

  const categoryRoutes = Object.keys(categories).map((slug) => ({
    url: `${BASE_URL}/trackers/${slug}`,
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

  return [
    ...routes, 
    ...productRoutes, 
    ...categoryRoutes, 
    ...blogRoutes, 
    ...caseStudyRoutes
  ];
}

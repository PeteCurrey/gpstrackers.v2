import { sanityClient } from './client';

export interface Product {
  _id: string;
  name: string;
  slug: { current: string };
  category: string;
  tagline: string;
  price: number;
  compareAtPrice?: number;
  subscriptionAnnual?: number;
  subscriptionMonthly?: number;
  thatchamCategory?: string;
  installType: string;
  images?: Array<{ asset: { _ref: string } }>;
  specs?: Record<string, string>;
  features?: string[];
  faqs?: Array<{ question: string; answer: string }>;
  isFeatured?: boolean;
  inStock: boolean;
  seoTitle?: string;
  seoDescription?: string;
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  category?: string;
  publishedAt: string;
  readingTime?: number;
  mainImage?: { asset: { _ref: string } };
}

export interface CaseStudy {
  _id: string;
  title: string;
  slug: { current: string };
  sector?: string;
  company?: string;
  resultStatement?: string;
  metrics?: Array<{ label: string; value: string }>;
  problem?: string;
  solution?: string;
  results?: string;
}

export async function getFeaturedProducts(): Promise<Product[]> {
  return sanityClient.fetch(`
    *[_type == "product" && isFeatured == true] | order(_createdAt asc) [0...4] {
      _id, name, slug, category, tagline, price, compareAtPrice,
      subscriptionAnnual, thatchamCategory, installType, images, specs, inStock
    }
  `);
}

export async function getAllProducts(): Promise<Product[]> {
  return sanityClient.fetch(`
    *[_type == "product"] | order(price asc) {
      _id, name, slug, category, tagline, price, compareAtPrice,
      subscriptionAnnual, thatchamCategory, installType, images, specs, inStock, isFeatured
    }
  `);
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  return sanityClient.fetch(`
    *[_type == "product" && slug.current == $slug][0] {
      _id, name, slug, category, tagline, price, compareAtPrice,
      subscriptionAnnual, subscriptionMonthly, thatchamCategory, installType,
      images, specs, features, faqs, inStock, seoTitle, seoDescription
    }
  `, { slug });
}

export async function getRelatedProducts(category: string, excludeId: string): Promise<Product[]> {
  return sanityClient.fetch(`
    *[_type == "product" && category == $category && _id != $excludeId] | order(_createdAt asc) [0...3] {
      _id, name, slug, category, tagline, price, subscriptionAnnual, installType, inStock
    }
  `, { category, excludeId });
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  return sanityClient.fetch(`
    *[_type == "blogPost"] | order(publishedAt desc) [0...6] {
      _id, title, slug, excerpt, category, publishedAt, readingTime, mainImage
    }
  `);
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  return sanityClient.fetch(`
    *[_type == "blogPost" && slug.current == $slug][0]
  `, { slug });
}

export async function getCaseStudies(): Promise<CaseStudy[]> {
  return sanityClient.fetch(`
    *[_type == "caseStudy"] | order(_createdAt asc) {
      _id, title, slug, sector, company, resultStatement, metrics
    }
  `);
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
  return sanityClient.fetch(`
    *[_type == "caseStudy" && slug.current == $slug][0]
  `, { slug });
}

export async function getAllProductSlugs(): Promise<string[]> {
  const results = await sanityClient.fetch(`*[_type == "product"]{ "slug": slug.current }`);
  return results.map((r: { slug: string }) => r.slug);
}

export async function getAllBlogSlugs(): Promise<string[]> {
  const results = await sanityClient.fetch(`*[_type == "blogPost"]{ "slug": slug.current }`);
  return results.map((r: { slug: string }) => r.slug);
}

export async function getAllCaseStudySlugs(): Promise<string[]> {
  const results = await sanityClient.fetch(`*[_type == "caseStudy"]{ "slug": slug.current }`);
  return results.map((r: { slug: string }) => r.slug);
}

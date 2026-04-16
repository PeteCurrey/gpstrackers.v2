import type { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import StatsStrip from '@/components/home/StatsStrip';
import ProductCategories from '@/components/home/ProductCategories';
import PlatformShowcase from '@/components/home/PlatformShowcase';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import BeltBraces from '@/components/home/BeltBraces';
import HowItWorks from '@/components/home/HowItWorks';
import SocialProof from '@/components/home/SocialProof';
import BlogPreview from '@/components/home/BlogPreview';
import CtaStrip from '@/components/home/CtaStrip';
import PressLogos from '@/components/home/PressLogos';

export const metadata: Metadata = {
  title: 'Travio GPS Trackers | Track Everything. Know Everything.',
  description:
    "The UK's most advanced GPS tracking platform. Vehicle trackers, fleet management, insurance-approved devices, and asset protection. From £45. No contracts. Free 14-day trial.",
  openGraph: {
    title: 'Travio GPS Trackers | Track Everything. Know Everything.',
    description:
      "The UK's most advanced GPS tracking platform. From £45, no contracts, free 14-day trial.",
    url: 'https://travio.co.uk',
  },
};

// Organization JSON-LD for homepage
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Travio',
  url: 'https://travio.co.uk',
  logo: 'https://travio.co.uk/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '03300600499',
    contactType: 'customer service',
    areaServed: 'GB',
    availableLanguage: 'English',
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'GB',
  },
  sameAs: [
    'https://www.linkedin.com/company/travio',
    'https://www.facebook.com/traviouk',
    'https://www.instagram.com/traviouk',
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Hero />
      <StatsStrip />
      <ProductCategories />
      <PlatformShowcase />
      <FeaturedProducts />
      <PressLogos />
      <BeltBraces />
      <HowItWorks />
      <SocialProof />
      <BlogPreview />
      <CtaStrip />
    </>
  );
}

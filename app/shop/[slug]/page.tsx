import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProductPageClient from '@/components/shop/ProductPageClient';

// Static product data — will be replaced with Sanity fetch once CMS is configured
const products: Record<string, {
  id: string; name: string; slug: string; category: string; tagline: string;
  price: number; compareAtPrice?: number; subscriptionAnnual?: number;
  thatcham?: string; installType: string;
  specs: Array<{ key: string; value: string }>;
  features: string[];
  faqs: Array<{ question: string; answer: string }>;
}> = {
  'travio-fs100': {
    id: 'travio-fs100', name: 'Travio FS100', slug: 'travio-fs100',
    category: 'Fleet / Vehicle', tagline: 'The hardwired fleet standard. Always on, always connected.',
    price: 45, compareAtPrice: 65, subscriptionAnnual: 59,
    installType: 'self',
    specs: [
      { key: 'DEVICE TYPE', value: 'Hardwired fleet tracker' },
      { key: 'CONNECTIVITY', value: '4G multi-network SIM (included)' },
      { key: 'UPDATE INTERVAL', value: 'Every 10 seconds (configurable)' },
      { key: 'POWER', value: 'Vehicle battery (permanent live)' },
      { key: 'DIMENSIONS', value: '65 × 40 × 18mm' },
      { key: 'WARRANTY', value: '12 months' },
      { key: 'COUNTRIES', value: '120+ (roaming SIM)' },
      { key: 'PLATFORM', value: 'Travio Live (web + iOS + Android)' },
      { key: 'SUBSCRIPTION', value: '£59/year (required)' },
    ],
    features: [
      'Real-time GPS tracking — update every 10 seconds',
      'Hardwired to vehicle battery — never loses power',
      'Multi-network 4G SIM included — no extra cost',
      'Journey history — 90 days stored on Travio Live',
      'Geofencing — set zones, get breach alerts instantly',
      'Driver behaviour scoring — speed, braking, idle time',
      'SMS backup — text the device, receive a Google Maps link',
      'Works in 120+ countries — roaming SIM included',
    ],
    faqs: [
      { question: 'How difficult is the FS100 to install?', answer: 'The FS100 requires hardwiring to your vehicle\'s battery. Most experienced DIYers complete this in 20–30 minutes. Full installation guides are provided. If you\'d prefer professional installation, we can arrange this via our nationwide installer network.' },
      { question: 'Is a subscription required?', answer: 'Yes — the £59/year Travio Connect+ subscription is required for the device to function. This covers your SIM, platform access, 90-day data storage, app access, and SMS backup tracking.' },
      { question: 'Will it work in Europe?', answer: 'Yes. The included multi-network 4G SIM works in 120+ countries including all EU member states. No additional charges apply for European use.' },
      { question: 'Can I transfer the subscription to a new vehicle?', answer: 'Yes. The subscription follows the device, not the vehicle. If you sell the vehicle, simply remove the FS100 and re-install it in your new one.' },
    ],
  },
  'travio-at1': {
    id: 'travio-at1', name: 'Travio AT1', slug: 'travio-at1',
    category: 'Asset Tracker', tagline: '3-year battery. Magnetic. Completely covert.',
    price: 105, subscriptionAnnual: 30,
    installType: 'magnetic',
    specs: [
      { key: 'DEVICE TYPE', value: 'Battery-powered asset tracker' },
      { key: 'BATTERY LIFE', value: 'Up to 3 years (standby)' },
      { key: 'MOUNT', value: 'Magnetic — no wiring required' },
      { key: 'WATERPROOF', value: 'IP67 — submersible to 1m' },
      { key: 'UPDATE INTERVAL', value: 'Configurable (movement-based)' },
      { key: 'DIMENSIONS', value: '84 × 50 × 22mm' },
      { key: 'WARRANTY', value: '12 months' },
      { key: 'SUBSCRIPTION', value: '£30/year (required)' },
    ],
    features: [
      'No wiring — magnetic mount means install anywhere in seconds',
      '3-year battery life in normal usage patterns',
      'Perfect covert backup device for Belt & Braces protection',
      'IP67 waterproof — withstands weather and wash',
      'Movement-triggered alerts — only transmits when needed',
      '50% off when purchased with Travio FS100',
    ],
    faqs: [
      { question: 'How long does the battery actually last?', answer: 'Battery life depends heavily on how often the device transmits. In standby mode with movement-triggered updates, most users achieve 2–3 years. In frequent tracking mode, expect 6–12 months.' },
      { question: 'Can I use the AT1 as a standalone tracker?', answer: 'Yes — the AT1 works perfectly as a standalone device for tools, trailers, and equipment. The 50% discount applies only when purchased with an FS100.' },
      { question: 'How strong is the magnet?', answer: 'Very strong. The neodymium magnet is rated for vehicle-speed use and will not detach under normal driving conditions. However, we recommend a secondary mount point for added security in high-vibration environments.' },
    ],
  },
  'travio-s7': {
    id: 'travio-s7', name: 'Travio S7 Insurance', slug: 'travio-s7',
    category: 'Insurance Approved', tagline: 'Thatcham S7 certified. Professionally installed nationwide.',
    price: 189, compareAtPrice: 329, subscriptionAnnual: 59,
    thatcham: 'S7', installType: 'professional',
    specs: [
      { key: 'THATCHAM CATEGORY', value: 'S7 — Insurance Approved' },
      { key: 'MONITORING', value: '24/7 European Control Centre' },
      { key: 'INSTALLATION', value: 'Professional — nationwide' },
      { key: 'BOOKING', value: 'Within 3 working days' },
      { key: 'CERTIFICATE', value: 'Issued same day as installation' },
      { key: 'SUBSCRIPTION', value: '£59/year (required)' },
      { key: 'WARRANTY', value: '12 months' },
    ],
    features: [
      'Thatcham S7 certification — accepted by all major UK insurers',
      'Professional installation included in the price',
      'Completion certificate issued same day — send to your insurer immediately',
      'Nationwide installation network — typically within 3 working days',
      '24/7 European Monitoring Centre included',
      'Full platform access — Travio Live web + iOS + Android',
    ],
    faqs: [
      { question: 'Does this satisfy my insurer\'s requirement?', answer: 'Thatcham S7 is accepted by all major UK insurers including Aviva, Direct Line, NFU Mutual, and AXA. Contact your insurer to confirm the specific category required for your vehicle.' },
      { question: 'What does professional installation involve?', answer: 'A certified Travio installer visits your location and typically completes the installation within 90 minutes. The device is concealed within the vehicle body. You\'ll receive a completion certificate the same day.' },
      { question: 'What if the vehicle is stolen?', answer: 'If your vehicle is stolen, the 24/7 monitoring centre will be alerted and will coordinate with police to assist with recovery. Our fleet has a 96% recovery rate when a professional tracker is fitted.' },
    ],
  },
  'travio-s5': {
    id: 'travio-s5', name: 'Travio S5', slug: 'travio-s5',
    category: 'Insurance Approved', tagline: 'Thatcham S5 with ADR driver ID fobs.',
    price: 349, compareAtPrice: 449, subscriptionAnnual: 59,
    thatcham: 'S5', installType: 'professional',
    specs: [
      { key: 'THATCHAM CATEGORY', value: 'S5 — Insurance Approved' },
      { key: 'DRIVER ID', value: 'ADR fobs included (2)' },
      { key: 'MONITORING', value: '24/7 European Control Centre' },
      { key: 'INSTALLATION', value: 'Professional — nationwide' },
      { key: 'SUBSCRIPTION', value: '£59/year (required)' },
    ],
    features: [
      'Thatcham S5 — highest category for high-value vehicles',
      '2 × ADR driver identification fobs included',
      'Alert raised if vehicle moves without an authorised fob present',
      'Professional installation included',
      '24/7 monitoring with police liaison',
    ],
    faqs: [
      { question: 'What is an ADR fob?', answer: 'An Approved Driver Recognition (ADR) fob is a small key-fob device that identifies authorised drivers. The tracker monitors whether a fob is present when the vehicle moves. If not, an alert is raised immediately.' },
      { question: 'Do I need S5 or S7?', answer: 'S7 is required by most standard insurers for everyday vehicles. S5 is typically required for high-performance vehicles, exotics, or by specialist insurers. Check your policy wording or call us for advice.' },
    ],
  },
  'travio-s5plus': {
    id: 'travio-s5plus', name: 'Travio S5+', slug: 'travio-s5plus',
    category: 'Insurance Approved', tagline: 'S5 with remote immobilisation capability.',
    price: 549, compareAtPrice: 599, subscriptionAnnual: 59,
    thatcham: 'S5', installType: 'professional',
    specs: [
      { key: 'THATCHAM CATEGORY', value: 'S5 — Insurance Approved' },
      { key: 'IMMOBILISATION', value: 'Remote (via Travio Live)' },
      { key: 'DRIVER ID', value: 'ADR fobs included (2)' },
      { key: 'MONITORING', value: '24/7 European Control Centre' },
      { key: 'INSTALLATION', value: 'Professional — nationwide' },
      { key: 'SUBSCRIPTION', value: '£59/year (required)' },
    ],
    features: [
      'Remote immobilisation — stop the vehicle remotely via the platform',
      'Thatcham S5 certification',
      '2 × ADR driver identification fobs',
      'Police can authorise remote stop during pursuit',
      'Highest level of vehicle protection available',
    ],
    faqs: [
      { question: 'Is remote immobilisation safe?', answer: 'Remote immobilisation is designed for use when the vehicle is stationary or moving at very low speed. The system will not immobilise at road speed. Police coordination is recommended before activating.' },
    ],
  },
  'travio-fs003': {
    id: 'travio-fs003', name: 'Travio FS003', slug: 'travio-fs003',
    category: 'Vehicle', tagline: 'OBD plug & play — live in under a minute.',
    price: 105, subscriptionAnnual: 59,
    installType: 'self',
    specs: [
      { key: 'DEVICE TYPE', value: 'OBD plug & play tracker' },
      { key: 'INSTALL', value: 'Plug into OBD port — under 60 seconds' },
      { key: 'POWER', value: 'OBD port (vehicle battery)' },
      { key: 'UPDATE INTERVAL', value: 'Every 30 seconds (configurable)' },
      { key: 'SUBSCRIPTION', value: '£59/year (required)' },
    ],
    features: [
      'No tools, no wiring — plugs directly into any OBD2 port',
      'Compatible with all EU vehicles manufactured after 2001',
      'Real-time tracking and journey history',
      'Platform access via Travio Live',
    ],
    faqs: [
      { question: 'Where is my OBD port?', answer: 'The OBD2 port is typically located under the dashboard on the driver\'s side, within 60cm of the steering wheel. Your vehicle manual will confirm the exact location.' },
      { question: 'Is the FS003 as secure as a hardwired tracker?', answer: 'No — because the FS003 is visible and can be unplugged, it offers less tamper resistance than a hardwired device. For maximum security, consider the FS100 (hardwired) or a dual FS100 + AT1 setup.' },
    ],
  },
  'travio-llb': {
    id: 'travio-llb', name: 'Travio LLB', slug: 'travio-llb',
    category: 'Asset', tagline: 'Long life battery. Magnetic. 40-day standby.',
    price: 150, subscriptionAnnual: 30,
    installType: 'magnetic',
    specs: [
      { key: 'BATTERY LIFE', value: 'Up to 40 days continuous' },
      { key: 'MOUNT', value: 'Magnetic — no wiring' },
      { key: 'UPDATE INTERVAL', value: 'Every 60 seconds' },
      { key: 'WATERPROOF', value: 'IP65' },
      { key: 'SUBSCRIPTION', value: '£30/year (required)' },
    ],
    features: [
      '40-day battery — charge once, forget for over a month',
      'Magnetic attachment — instant deploy without tools',
      'Perfect for rental equipment and shared plant',
      'Rechargeable via USB-C',
    ],
    faqs: [
      { question: 'How do I recharge the LLB?', answer: 'The LLB charges via USB-C. A full charge from empty takes approximately 3 hours and provides up to 40 days of active tracking.' },
    ],
  },
  'caravan-shield-ct1': {
    id: 'caravan-shield-ct1', name: 'Caravan Shield CT1', slug: 'caravan-shield-ct1',
    category: 'Caravan & Motorhome', tagline: '4-year battery with concealed specialist installation.',
    price: 105, subscriptionAnnual: 30,
    installType: 'professional',
    specs: [
      { key: 'BATTERY LIFE', value: 'Up to 4 years' },
      { key: 'INSTALLATION', value: 'Concealed specialist fit' },
      { key: 'NETWORK', value: '4G multi-band' },
      { key: 'MOVEMENT ALERTS', value: 'Instant push notification' },
      { key: 'GEOFENCING', value: 'Up to 10 zones' },
      { key: 'SUBSCRIPTION', value: '£30/year (required)' },
    ],
    features: [
      '4-year battery life — outlasts most caravans\' ownership period',
      'Concealed installation — invisible to thieves',
      'Movement alerts the moment your caravan is disturbed',
      'Geofence your storage site — alert if boundary is crossed',
      'Winter storage monitoring — track without visiting',
    ],
    faqs: [
      { question: 'Can the tracker be installed in a motorhome?', answer: 'Yes. The CT1 is suitable for both caravans and motorhomes. Professional installation is included and our fitters specialise in caravan and motorhome concealment.' },
      { question: 'Will 4 years of battery really last?', answer: 'Yes — the 4-year figure is based on month-long check intervals in storage mode switching to active tracking on movement detection. Most owners achieve the full 4-year life.' },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(products).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = products[slug];
  if (!p) return {};
  return {
    title: `${p.name} | ${p.category} GPS Tracker`,
    description: `${p.tagline}. From £${p.price}${p.subscriptionAnnual ? ` + £${p.subscriptionAnnual}/year subscription` : ''}. Free 14-day trial.`,
    openGraph: { title: p.name, description: p.tagline },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products[slug];
  if (!product) notFound();

  // Product JSON-LD
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.tagline,
    offers: {
      '@type': 'Offer',
      price: product.price.toString(),
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
      seller: { '@type': 'Organization', name: 'Travio' },
    },
  };

  const faqSchema = product.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: product.faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <ProductPageClient product={product} />
    </>
  );
}

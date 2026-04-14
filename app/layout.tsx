import type { Metadata } from 'next';
import { Barlow_Condensed, Outfit, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import TopBar from '@/components/nav/TopBar';
import MainNav from '@/components/nav/MainNav';
import Footer from '@/components/Footer';
import LenisProvider from '@/components/providers/LenisProvider';
import Script from 'next/script';

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-display-loaded',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-body-loaded',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono-loaded',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://travio.co.uk'),
  title: {
    template: '%s | Travio GPS Trackers',
    default: 'Travio GPS Trackers | Track Everything. Know Everything.',
  },
  description:
    "The UK's most advanced GPS tracking platform. Vehicle trackers, fleet management, insurance-approved devices, and asset protection. From £45. No contracts. Free 14-day trial.",
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'Travio GPS Trackers',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-GB"
      className={`${barlowCondensed.variable} ${outfit.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        {GA4_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA4_ID}');
              `}
            </Script>
          </>
        )}
      </head>
      <body>
        <LenisProvider>
          <div id="cookie-consent-banner" />
          <TopBar />
          <MainNav />
          <main>{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}

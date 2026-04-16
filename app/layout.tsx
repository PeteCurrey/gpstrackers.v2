import type { Metadata } from 'next';
import { Barlow_Condensed, Outfit, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import TopBar from '@/components/nav/TopBar';
import MainNav from '@/components/nav/MainNav';
import Footer from '@/components/Footer';
import LenisProvider from '@/components/providers/LenisProvider';
import AssistantWidget from '@/components/ai/AssistantWidget';
import ExitIntentModal from '@/components/ui/ExitIntentModal';

import PageTransition from '@/components/providers/PageTransition';

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-display',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-body',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://travio.co.uk'),
  title: {
    template: '%s | Travio GPS Trackers',
    default: 'Travio GPS Trackers | Track Everything. Know Everything.',
  },
  description: "The UK's most advanced GPS tracking platform.",
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://travio.co.uk',
    siteName: 'Travio',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@traviogps',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-GB"
      className={`${barlowCondensed.variable} ${outfit.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body>
        <LenisProvider>
          <div id="cookie-consent-banner" />
          <TopBar />
          <MainNav />
          <main>
            <PageTransition>
              {children}
            </PageTransition>
          </main>
          <Footer />
          <AssistantWidget />
          <ExitIntentModal />
        </LenisProvider>
      </body>
    </html>
  );
}

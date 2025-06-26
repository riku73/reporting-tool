import type { Metadata } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-primary',
  display: 'swap'
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap'
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap'
});

export const metadata: Metadata = {
  title: {
    default: 'SEO4Life - Référencement IA Luxembourg | Agence SEO Expert',
    template: '%s | SEO4Life Luxembourg',
  },
  description: 'Agence SEO Luxembourg spécialisée en référencement naturel assisté par IA. Optimisation pour AI Overviews Google, featured snippets et recherche vocale. Expertise SEO/GEO/AEO pour PME luxembourgeoises. Audit gratuit et résultats garantis.',
  keywords: [
    'SEO Luxembourg',
    'référencement naturel Luxembourg',
    'agence SEO Luxembourg',
    'SEO IA Luxembourg',
    'AEO optimisation Luxembourg',
    'référencement local Luxembourg',
    'audit SEO gratuit Luxembourg',
    'consultant SEO fintech Luxembourg',
    'AI Overviews optimisation Luxembourg',
    'featured snippets SEO Luxembourg',
    'recherche vocale SEO Luxembourg',
    'AEO Answer Engine Optimization'
  ],
  authors: [{ name: 'SEO4Life' }],
  creator: 'SEO4Life',
  publisher: 'SEO4Life',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://seo4life.lu'),
  alternates: {
    canonical: '/',
    languages: {
      'fr-LU': '/fr',
      'en-LU': '/en',
      'de-LU': '/de',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_LU',
    url: 'https://seo4life.lu',
    title: 'SEO4Life - Référencement IA Luxembourg | Agence SEO Expert',
    description: 'Agence SEO Luxembourg spécialisée en référencement naturel assisté par IA. Expertise SEO/GEO/AEO pour PME luxembourgeoises.',
    siteName: 'SEO4Life',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SEO4Life - Agence SEO IA Luxembourg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO4Life - Référencement IA Luxembourg',
    description: 'Agence SEO Luxembourg spécialisée en référencement naturel assisté par IA.',
    images: ['/twitter-image.jpg'],
    creator: '@SEO4Life_LU',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SEO4Life',
  alternateName: 'SEO4Life Luxembourg',
  url: 'https://seo4life.lu',
  logo: 'https://seo4life.lu/logo.png',
  description: 'Agence SEO Luxembourg spécialisée en référencement naturel assisté par IA',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Luxembourg',
    addressCountry: 'LU',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+352-XX-XX-XX-XX',
    contactType: 'Customer Service',
    availableLanguage: ['French', 'English', 'German'],
  },
  sameAs: [
    'https://www.linkedin.com/company/seo4life-luxembourg',
    'https://twitter.com/SEO4Life_LU',
  ],
  founder: {
    '@type': 'Person',
    name: 'SEO4Life Team',
  },
  foundingDate: '2024',
  areaServed: {
    '@type': 'Country',
    name: 'Luxembourg',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services SEO',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'SEO Technique IA',
          description: 'Audit automatisé et optimisations prédictives'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'SEO Local (GEO)',
          description: 'Domination locale Luxembourg + Grande Région'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AEO (Answer Engine)',
          description: 'Optimisation Alexa, Siri, Google Assistant'
        }
      }
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${spaceGrotesk.variable} ${jetBrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#FF6B35" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
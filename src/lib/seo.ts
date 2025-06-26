import { Metadata } from 'next';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
  locale?: string;
}

const defaultKeywords = [
  'SEO Luxembourg',
  'référencement naturel Luxembourg',
  'agence SEO Luxembourg',
  'SEO IA Luxembourg',
  'AEO optimisation Luxembourg',
  'référencement local Luxembourg',
  'audit SEO gratuit Luxembourg',
  'consultant SEO fintech Luxembourg'
];

export function generateSEOMetadata({
  title,
  description = 'Agence SEO Luxembourg spécialisée en référencement naturel assisté par IA. Expertise SEO/GEO/AEO pour PME luxembourgeoises. Audit gratuit et résultats garantis.',
  keywords = [],
  canonical,
  ogImage = '/og-image.jpg',
  noindex = false,
  locale = 'fr-LU'
}: SEOProps = {}): Metadata {
  const siteTitle = 'SEO4Life - Référencement IA Luxembourg';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://seo4life.lu';
  
  return {
    title: fullTitle,
    description,
    keywords: [...defaultKeywords, ...keywords],
    
    // Canonical URL
    alternates: {
      canonical: canonical ? `${baseUrl}${canonical}` : baseUrl,
      languages: {
        'fr-LU': `${baseUrl}/fr`,
        'en-LU': `${baseUrl}/en`,
        'de-LU': `${baseUrl}/de`,
      },
    },
    
    // OpenGraph
    openGraph: {
      type: 'website',
      locale,
      url: canonical ? `${baseUrl}${canonical}` : baseUrl,
      title: fullTitle,
      description,
      siteName: 'SEO4Life',
      images: [
        {
          url: `${baseUrl}${ogImage}`,
          width: 1200,
          height: 630,
          alt: title || siteTitle,
        },
      ],
    },
    
    // Twitter
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [`${baseUrl}${ogImage}`],
      creator: '@SEO4Life_LU',
    },
    
    // Robots
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    
    // Additional meta tags
    other: {
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'default',
      'apple-mobile-web-app-title': 'SEO4Life',
      'application-name': 'SEO4Life',
      'msapplication-TileColor': '#FF6B35',
      'msapplication-config': '/browserconfig.xml',
    },
  };
}

export function generateStructuredData(type: 'Organization' | 'LocalBusiness' | 'Service' | 'Article', data: any) {
  const baseData = {
    '@context': 'https://schema.org',
    '@type': type,
  };

  switch (type) {
    case 'Organization':
      return {
        ...baseData,
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
        ...data,
      };

    case 'LocalBusiness':
      return {
        ...baseData,
        '@type': 'ProfessionalService',
        name: 'SEO4Life',
        description: 'Agence SEO Luxembourg spécialisée en référencement naturel assisté par IA',
        url: 'https://seo4life.lu',
        telephone: '+352-XX-XX-XX-XX',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Luxembourg',
          addressRegion: 'Luxembourg',
          addressCountry: 'LU',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '49.6116',
          longitude: '6.1319',
        },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00',
        },
        priceRange: '€€€',
        ...data,
      };

    case 'Service':
      return {
        ...baseData,
        name: data.name || 'Services SEO IA',
        description: data.description || 'Services de référencement naturel assisté par IA',
        provider: {
          '@type': 'Organization',
          name: 'SEO4Life',
          url: 'https://seo4life.lu',
        },
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
        },
        ...data,
      };

    case 'Article':
      return {
        ...baseData,
        headline: data.title,
        description: data.description,
        image: data.image || 'https://seo4life.lu/og-image.jpg',
        author: {
          '@type': 'Organization',
          name: 'SEO4Life',
          url: 'https://seo4life.lu',
        },
        publisher: {
          '@type': 'Organization',
          name: 'SEO4Life',
          logo: {
            '@type': 'ImageObject',
            url: 'https://seo4life.lu/logo.png',
          },
        },
        datePublished: data.publishedAt || new Date().toISOString(),
        dateModified: data.updatedAt || new Date().toISOString(),
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': data.url || 'https://seo4life.lu',
        },
        ...data,
      };

    default:
      return baseData;
  }
}

export function generateBreadcrumbStructuredData(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}

export function generateFAQStructuredData(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
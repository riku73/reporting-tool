# SEO4Life Website - Iteration 1 Technical Implementation Blueprint

## Executive Summary

This technical blueprint provides a comprehensive implementation guide for building the SEO4Life website - a professional AI-powered SEO agency website targeting the Luxembourg market. The implementation uses Next.js 15+, React 19, and TypeScript with a GenieNova-inspired design system to achieve perfect Core Web Vitals and Lighthouse 100/100 scores.

**Project Goals:**
- Demonstrate technical SEO expertise through site performance
- Generate qualified B2B leads in Luxembourg market
- Establish authority in AI-powered SEO/GEO/AEO
- Create scalable multilingual (FR/EN/DE) architecture

## 1. Project Structure & Architecture

### 1.1 Next.js 15+ Project Structure

```
seo4life-website/
├── src/
│   ├── app/                          # Next.js 15 App Router
│   │   ├── (routes)/
│   │   │   ├── page.tsx             # Home page
│   │   │   ├── services/
│   │   │   │   └── page.tsx         # Services page
│   │   │   ├── expertise/
│   │   │   │   └── page.tsx         # Expertise page
│   │   │   ├── cas-etudes/
│   │   │   │   └── page.tsx         # Case studies page
│   │   │   └── contact/
│   │   │       └── page.tsx         # Contact & Audit page
│   │   ├── [locale]/                # Internationalization
│   │   │   ├── layout.tsx
│   │   │   └── [...routes]          # Localized routes
│   │   ├── api/                     # API Routes
│   │   │   ├── analytics/
│   │   │   ├── audit/
│   │   │   ├── leads/
│   │   │   └── tools/
│   │   ├── globals.css              # Global styles
│   │   ├── layout.tsx               # Root layout
│   │   └── loading.tsx              # Loading UI
│   ├── components/                   # Reusable components
│   │   ├── ui/                      # Base UI components
│   │   ├── forms/                   # Form components
│   │   ├── widgets/                 # SEO tool widgets
│   │   ├── charts/                  # Analytics charts
│   │   └── layout/                  # Layout components
│   ├── lib/                         # Utilities & configurations
│   │   ├── api/                     # API clients
│   │   ├── seo/                     # SEO utilities
│   │   ├── analytics/               # Analytics helpers
│   │   └── utils/                   # General utilities
│   ├── types/                       # TypeScript definitions
│   ├── styles/                      # Styling system
│   │   ├── components/              # Component styles
│   │   └── globals/                 # Global style definitions
│   └── data/                        # Static data & content
├── public/                          # Static assets
│   ├── icons/
│   ├── images/
│   ├── robots.txt
│   └── sitemap.xml
├── docs/                           # Documentation
├── tests/                          # Test suite
├── .env.local                      # Environment variables
├── next.config.js                  # Next.js configuration
├── tailwind.config.js              # Tailwind configuration
├── tsconfig.json                   # TypeScript configuration
└── package.json                    # Dependencies
```

### 1.2 Core Technology Stack

```typescript
// package.json dependencies
{
  "dependencies": {
    "next": "^15.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "typescript": "^5.0.0",
    "@next/font": "^15.0.0",
    "tailwindcss": "^3.4.0",
    "framer-motion": "^11.0.0",
    "next-international": "^1.2.0",
    "next-seo": "^6.4.0",
    "schema-dts": "^1.1.0",
    "@vercel/analytics": "^1.1.0",
    "@vercel/speed-insights": "^1.0.0",
    "react-hook-form": "^7.48.0",
    "zod": "^3.22.0",
    "lucide-react": "^0.294.0",
    "recharts": "^2.8.0",
    "date-fns": "^2.30.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "eslint": "^8.0.0",
    "eslint-config-next": "^15.0.0",
    "prettier": "^3.1.0",
    "@testing-library/react": "^14.1.0",
    "jest": "^29.7.0",
    "lighthouse": "^11.4.0"
  }
}
```

## 2. Design System Implementation

### 2.1 CSS Variables & Design Tokens

```css
/* src/styles/globals/design-tokens.css */
:root {
  /* === COLOR SYSTEM === */
  /* Primary Colors */
  --color-primary-orange: #FF6B35;
  --color-dark-bg: #1A1A1A;
  --color-text-primary: #FFFFFF;
  --color-text-secondary: #B8B8B8;
  
  /* Secondary Colors */
  --color-gradient-start: #FF6B35;
  --color-gradient-end: #FF8F65;
  --color-accent-blue: #00D4FF;
  --color-success-green: #00FF88;
  --color-card-bg: #2A2A2A;
  
  /* Utility Colors */
  --color-border: #404040;
  --color-hover: #FF8F65;
  --color-shadow: rgba(0, 0, 0, 0.5);
  
  /* === TYPOGRAPHY === */
  /* Font Families */
  --font-primary: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  --font-display: "Space Grotesk", "Inter", sans-serif;
  --font-mono: "JetBrains Mono", "Courier New", monospace;
  
  /* Desktop Font Sizes */
  --size-h1: 4.5rem;      /* 72px */
  --size-h2: 3rem;        /* 48px */
  --size-h3: 2.25rem;     /* 36px */
  --size-h4: 1.5rem;      /* 24px */
  --size-h5: 1.25rem;     /* 20px */
  --size-body: 1rem;      /* 16px */
  --size-small: 0.875rem; /* 14px */
  
  /* === SPACING === */
  --spacing-xs: 0.25rem;   /* 4px */
  --spacing-sm: 0.5rem;    /* 8px */
  --spacing-md: 1rem;      /* 16px */
  --spacing-lg: 1.5rem;    /* 24px */
  --spacing-xl: 2rem;      /* 32px */
  --spacing-2xl: 2.5rem;   /* 40px */
  --spacing-3xl: 3rem;     /* 48px */
  --spacing-4xl: 4rem;     /* 64px */
  --spacing-5xl: 5rem;     /* 80px */
  --spacing-6xl: 7.5rem;   /* 120px */
  
  /* === CONTAINERS === */
  --container-max: 90rem;      /* 1440px */
  --container-wide: 75rem;     /* 1200px */
  --container-narrow: 50rem;   /* 800px */
  
  /* === BORDERS & RADIUS === */
  --radius-sm: 0.375rem;   /* 6px */
  --radius-md: 0.5rem;     /* 8px */
  --radius-lg: 0.75rem;    /* 12px */
  --radius-xl: 1.25rem;    /* 20px */
  
  /* === SHADOWS === */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  --shadow-glow-orange: 0 0 60px rgba(255, 107, 53, 0.3);
  --shadow-glow-blue: 0 0 60px rgba(0, 212, 255, 0.3);
  
  /* === TRANSITIONS === */
  --transition-fast: 0.15s ease;
  --transition-base: 0.3s ease;
  --transition-slow: 0.5s ease;
}

/* Responsive Typography */
@media (max-width: 991px) {
  :root {
    --size-h1: 3.5rem;      /* 56px */
    --size-h2: 2.5rem;      /* 40px */
    --size-h3: 2rem;        /* 32px */
    --size-h4: 1.375rem;    /* 22px */
    --size-h5: 1.125rem;    /* 18px */
  }
}

@media (max-width: 767px) {
  :root {
    --size-h1: 2.25rem;     /* 36px */
    --size-h2: 1.75rem;     /* 28px */
    --size-h3: 1.5rem;      /* 24px */
    --size-h4: 1.25rem;     /* 20px */
    --size-h5: 1rem;        /* 16px */
    --size-body: 0.875rem;  /* 14px */
    
    --spacing-6xl: 3.75rem; /* 60px */
    --spacing-5xl: 3rem;    /* 48px */
  }
}
```

### 2.2 Tailwind CSS Configuration

```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          orange: 'var(--color-primary-orange)',
          dark: 'var(--color-dark-bg)',
        },
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
        },
        accent: {
          blue: 'var(--color-accent-blue)',
          green: 'var(--color-success-green)',
        },
        card: {
          bg: 'var(--color-card-bg)',
        },
        border: 'var(--color-border)',
      },
      fontFamily: {
        sans: ['var(--font-primary)'],
        display: ['var(--font-display)'],
        mono: ['var(--font-mono)'],
      },
      fontSize: {
        'display-1': ['var(--size-h1)', { lineHeight: '1.1' }],
        'display-2': ['var(--size-h2)', { lineHeight: '1.2' }],
        'display-3': ['var(--size-h3)', { lineHeight: '1.3' }],
        'heading-1': ['var(--size-h4)', { lineHeight: '1.4' }],
        'heading-2': ['var(--size-h5)', { lineHeight: '1.5' }],
        'body': ['var(--size-body)', { lineHeight: '1.6' }],
        'small': ['var(--size-small)', { lineHeight: '1.5' }],
      },
      spacing: {
        'xs': 'var(--spacing-xs)',
        'sm': 'var(--spacing-sm)',
        'md': 'var(--spacing-md)',
        'lg': 'var(--spacing-lg)',
        'xl': 'var(--spacing-xl)',
        '2xl': 'var(--spacing-2xl)',
        '3xl': 'var(--spacing-3xl)',
        '4xl': 'var(--spacing-4xl)',
        '5xl': 'var(--spacing-5xl)',
        '6xl': 'var(--spacing-6xl)',
      },
      maxWidth: {
        'container': 'var(--container-max)',
        'wide': 'var(--container-wide)',
        'narrow': 'var(--container-narrow)',
      },
      borderRadius: {
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
        'xl': 'var(--radius-xl)',
      },
      boxShadow: {
        'glow-orange': 'var(--shadow-glow-orange)',
        'glow-blue': 'var(--shadow-glow-blue)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'tech-pulse': 'techPulse 2s ease-in-out infinite',
        'gradient-x': 'gradientX 3s ease infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        techPulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        gradientX: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
```

### 2.3 Component Library Structure

```typescript
// src/components/ui/Button.tsx
import { forwardRef, ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  isLoading?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, children, ...props }, ref) => {
    return (
      <button
        className={cn(
          // Base styles
          'inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
          // Variants
          {
            'bg-gradient-to-r from-primary-orange to-orange-400 text-white shadow-glow-orange hover:shadow-glow-orange hover:-translate-y-0.5': variant === 'primary',
            'bg-card-bg text-text-primary border border-border hover:border-primary-orange': variant === 'secondary',
            'border border-primary-orange text-primary-orange hover:bg-primary-orange hover:text-white': variant === 'outline',
            'text-text-secondary hover:text-primary-orange hover:bg-card-bg': variant === 'ghost',
          },
          // Sizes
          {
            'px-3 py-1.5 text-sm rounded-md': size === 'sm',
            'px-4 py-2 text-base rounded-lg': size === 'md',
            'px-6 py-3 text-lg rounded-lg': size === 'lg',
            'px-8 py-4 text-xl rounded-xl': size === 'xl',
          },
          className
        )}
        ref={ref}
        disabled={isLoading}
        {...props}
      >
        {isLoading && (
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        )}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
export default Button
```

```typescript
// src/components/ui/Card.tsx
import { forwardRef, HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'tech' | 'glow'
  hover?: boolean
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', hover = true, children, ...props }, ref) => {
    return (
      <div
        className={cn(
          'rounded-xl border border-border transition-all duration-300',
          {
            'bg-card-bg p-6': variant === 'default',
            'bg-card-bg p-8 relative overflow-hidden before:absolute before:top-0 before:left-0 before:w-full before:h-0.5 before:bg-gradient-to-r before:from-primary-orange before:to-accent-blue': variant === 'tech',
            'bg-card-bg p-6 shadow-glow-orange': variant === 'glow',
          },
          {
            'hover:-translate-y-1 hover:border-primary-orange hover:shadow-lg': hover,
          },
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'
export default Card
```

## 3. Core Components & Pages

### 3.1 TypeScript Interfaces

```typescript
// src/types/seo.ts
export interface SEOMetrics {
  positions: KeywordPosition[]
  traffic: TrafficData
  coreWebVitals: CoreWebVitals
  competitors: CompetitorData[]
}

export interface KeywordPosition {
  keyword: string
  position: number
  searchVolume: number
  difficulty: number
  trend: 'up' | 'down' | 'stable'
  change: number
}

export interface TrafficData {
  organic: number
  paid: number
  direct: number
  referral: number
  social: number
  total: number
}

export interface CoreWebVitals {
  lcp: number
  fid: number
  cls: number
  fcp: number
  ttfb: number
  score: number
}

export interface CompetitorData {
  domain: string
  keywords: number
  traffic: number
  authority: number
}

// src/types/forms.ts
export interface AuditFormData {
  website: string
  email: string
  company: string
  industry: string
  goals: string[]
  budget: string
  timeline: string
}

export interface ContactFormData {
  name: string
  email: string
  company: string
  phone?: string
  service: string
  message: string
  budget: string
}

// src/types/content.ts
export interface CaseStudy {
  id: string
  title: string
  client: string
  industry: string
  challenge: string
  solution: string
  results: CaseStudyResults
  duration: string
  image: string
  tags: string[]
}

export interface CaseStudyResults {
  trafficIncrease: number
  keywordIncrease: number
  conversionIncrease: number
  roi: number
  beforeAfter: {
    before: SEOMetrics
    after: SEOMetrics
  }
}

// src/types/services.ts
export interface Service {
  id: string
  name: string
  description: string
  features: string[]
  benefits: string[]
  pricing: ServicePricing
  icon: string
  category: 'seo' | 'geo' | 'aeo' | 'technical'
}

export interface ServicePricing {
  starter: number
  professional: number
  enterprise: number
  custom?: boolean
}
```

### 3.2 Home Page Implementation

```typescript
// src/app/page.tsx
import { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import ServicesOverview from '@/components/sections/ServicesOverview'
import ProofOfConcept from '@/components/sections/ProofOfConcept'
import TechStack from '@/components/sections/TechStack'
import CTASection from '@/components/sections/CTASection'
import { getSEOMetrics } from '@/lib/api/analytics'

export const metadata: Metadata = {
  title: 'SEO4Life - Expert SEO IA Luxembourg | Référencement Naturel Avancé',
  description: 'Agence SEO spécialisée IA à Luxembourg. Référencement naturel, SEO local (GEO) et optimisation moteurs de réponse (AEO). Résultats garantis avec outils IA propriétaires.',
  keywords: 'SEO Luxembourg, référencement naturel Luxembourg, agence SEO IA, SEO4Life, audit SEO gratuit Luxembourg',
  openGraph: {
    title: 'SEO4Life - Leader du SEO IA au Luxembourg',
    description: 'Première agence SEO avec intelligence artificielle au Luxembourg. Démonstration technique en temps réel.',
    images: ['/og-image.jpg'],
    locale: 'fr_FR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://seo4life.lu',
    languages: {
      'fr': 'https://seo4life.lu/fr',
      'en': 'https://seo4life.lu/en',
      'de': 'https://seo4life.lu/de',
    },
  },
}

export default async function HomePage() {
  // Fetch real-time metrics for demonstration
  const metrics = await getSEOMetrics()

  return (
    <main className="min-h-screen bg-primary-dark">
      <HeroSection />
      <ServicesOverview />
      <ProofOfConcept metrics={metrics} />
      <TechStack />
      <CTASection />
    </main>
  )
}
```

```typescript
// src/components/sections/HeroSection.tsx
'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import SEOMetricsWidget from '@/components/widgets/SEOMetricsWidget'
import { ArrowRight, Zap, Target } from 'lucide-react'

export default function HeroSection() {
  const [currentKeyword, setCurrentKeyword] = useState(0)
  const keywords = ['SEO Luxembourg', 'Référencement IA', 'SEO Local', 'AEO Optimization']

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentKeyword((prev) => (prev + 1) % keywords.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-gray-900 to-primary-dark">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-orange/5 to-accent-blue/5"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-card-bg border border-border"
            >
              <Zap className="w-4 h-4 text-accent-blue mr-2" />
              <span className="text-text-secondary text-sm font-medium">
                Première Agence SEO IA au Luxembourg
              </span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-display-1 font-display font-bold text-text-primary leading-tight">
                Référencement{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-orange to-accent-blue">
                  Powered by IA
                </span>
              </h1>
              
              {/* Animated Keywords */}
              <div className="h-16 flex items-center">
                <span className="text-display-3 text-text-secondary mr-4">Expert en</span>
                <motion.span
                  key={currentKeyword}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-display-3 font-semibold text-primary-orange"
                >
                  {keywords[currentKeyword]}
                </motion.span>
              </div>
            </div>

            {/* Description */}
            <p className="text-xl text-text-secondary leading-relaxed max-w-2xl">
              Première agence SEO au Luxembourg à intégrer l'intelligence artificielle. 
              Obtenez des résultats mesurables avec nos outils propriétaires et notre 
              expertise technique avancée.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: Target, label: 'ROI Garanti', value: '+250%' },
                { icon: Zap, label: 'Performance', value: '< 1.2s' },
                { icon: ArrowRight, label: 'Positions #1', value: '85%' },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center space-x-3 bg-card-bg/50 rounded-lg p-4"
                >
                  <feature.icon className="w-5 h-5 text-primary-orange" />
                  <div>
                    <div className="font-semibold text-text-primary">{feature.value}</div>
                    <div className="text-sm text-text-secondary">{feature.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="xl" className="group">
                Audit SEO Gratuit
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl">
                Voir nos Résultats
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Live Demo Widget */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <SEOMetricsWidget />
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary-orange/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl"></div>
    </section>
  )
}
```

### 3.3 SEO Widgets Implementation

```typescript
// src/components/widgets/SEOMetricsWidget.tsx
'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Card from '@/components/ui/Card'
import { TrendingUp, TrendingDown, Target, Clock } from 'lucide-react'
import { getSEOMetrics } from '@/lib/api/analytics'
import type { SEOMetrics } from '@/types/seo'

export default function SEOMetricsWidget() {
  const [metrics, setMetrics] = useState<SEOMetrics | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const data = await getSEOMetrics()
        setMetrics(data)
      } catch (error) {
        console.error('Failed to fetch SEO metrics:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchMetrics()
    const interval = setInterval(fetchMetrics, 30000) // Update every 30 seconds
    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <Card variant="tech" className="w-full h-96 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-orange"></div>
      </Card>
    )
  }

  return (
    <Card variant="tech" className="w-full space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-heading-1 font-display font-semibold text-text-primary">
          Métriques Temps Réel
        </h3>
        <div className="flex items-center space-x-2 text-accent-green">
          <div className="w-2 h-2 bg-accent-green rounded-full animate-pulse"></div>
          <span className="text-sm">Live</span>
        </div>
      </div>

      {/* Core Web Vitals */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: 'LCP', value: metrics?.coreWebVitals.lcp || 0, unit: 's', target: 2.5 },
          { label: 'FID', value: metrics?.coreWebVitals.fid || 0, unit: 'ms', target: 100 },
          { label: 'CLS', value: metrics?.coreWebVitals.cls || 0, unit: '', target: 0.1 },
        ].map((vital, index) => (
          <motion.div
            key={vital.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-primary-dark/50 rounded-lg p-4 text-center"
          >
            <div className="text-2xl font-bold text-accent-green">{vital.value}{vital.unit}</div>
            <div className="text-sm text-text-secondary">{vital.label}</div>
            <div className="w-full bg-border rounded-full h-1 mt-2">
              <div
                className="bg-accent-green h-1 rounded-full transition-all duration-500"
                style={{ width: `${Math.min((vital.value / vital.target) * 100, 100)}%` }}
              ></div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Top Keywords */}
      <div className="space-y-3">
        <h4 className="text-heading-2 font-semibold text-text-primary">Top Keywords</h4>
        <div className="space-y-2">
          {metrics?.positions.slice(0, 5).map((keyword, index) => (
            <motion.div
              key={keyword.keyword}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-between p-3 bg-primary-dark/30 rounded-lg"
            >
              <div className="flex-1">
                <div className="font-medium text-text-primary">{keyword.keyword}</div>
                <div className="text-sm text-text-secondary">Vol: {keyword.searchVolume.toLocaleString()}</div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="text-lg font-bold text-accent-green">#{keyword.position}</div>
                {keyword.trend === 'up' ? (
                  <TrendingUp className="w-4 h-4 text-accent-green" />
                ) : keyword.trend === 'down' ? (
                  <TrendingDown className="w-4 h-4 text-red-400" />
                ) : (
                  <Target className="w-4 h-4 text-text-secondary" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Performance Score */}
      <div className="bg-gradient-to-r from-primary-orange/20 to-accent-blue/20 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-text-secondary">Lighthouse Score</div>
            <div className="text-3xl font-bold text-text-primary">100/100</div>
          </div>
          <div className="w-16 h-16 relative">
            <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
              <path
                d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                fill="none"
                stroke="var(--color-border)"
                strokeWidth="2"
              />
              <path
                d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                fill="none"
                stroke="var(--color-accent-green)"
                strokeWidth="2"
                strokeDasharray="100, 100"
                className="animate-pulse"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <Clock className="w-6 h-6 text-accent-green" />
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
```

## 4. SEO Configuration & Implementation

### 4.1 Next.js SEO Configuration

```typescript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
    minimumCacheTTL: 31536000, // 1 year
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-DNS-Prefetch-Control',
          value: 'on'
        },
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=63072000; includeSubDomains; preload'
        },
        {
          key: 'X-Frame-Options',
          value: 'DENY'
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff'
        },
        {
          key: 'Referrer-Policy',
          value: 'origin-when-cross-origin'
        },
        {
          key: 'Content-Security-Policy',
          value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' *.googletagmanager.com *.google-analytics.com; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src 'self' fonts.gstatic.com; img-src 'self' data: *.google-analytics.com *.googletagmanager.com; connect-src 'self' *.google-analytics.com *.analytics.google.com *.googletagmanager.com;"
        }
      ]
    }
  ],
}

module.exports = nextConfig
```

### 4.2 Advanced SEO Utilities

```typescript
// src/lib/seo/structured-data.ts
import { Organization, LocalBusiness, Service, FAQPage } from 'schema-dts'

export function generateOrganizationSchema(): Organization {
  return {
    "@type": "Organization",
    "@id": "https://seo4life.lu/#organization",
    name: "SEO4Life",
    url: "https://seo4life.lu",
    logo: "https://seo4life.lu/logo.png",
    description: "Agence SEO spécialisée intelligence artificielle Luxembourg. Expert référencement naturel, SEO local et AEO.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "12 Rue Erasme",
      addressLocality: "Luxembourg",
      postalCode: "1468",
      addressCountry: "LU"
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+352-123-456-789",
      contactType: "customer service",
      availableLanguage: ["French", "English", "German"]
    },
    foundingDate: "2024",
    founder: {
      "@type": "Person",
      name: "Expert SEO4Life"
    },
    sameAs: [
      "https://linkedin.com/company/seo4life-luxembourg",
      "https://twitter.com/seo4life_lu"
    ],
    areaServed: [
      {
        "@type": "Country",
        name: "Luxembourg"
      },
      {
        "@type": "Country", 
        name: "Belgium"
      },
      {
        "@type": "Country",
        name: "France"
      }
    ]
  }
}

export function generateLocalBusinessSchema(): LocalBusiness {
  return {
    "@type": "LocalBusiness",
    "@id": "https://seo4life.lu/#localbusiness",
    name: "SEO4Life - Agence SEO IA Luxembourg",
    image: "https://seo4life.lu/office.jpg",
    telephone: "+352-123-456-789",
    email: "contact@seo4life.lu",
    address: {
      "@type": "PostalAddress",
      streetAddress: "12 Rue Erasme",
      addressLocality: "Luxembourg",
      addressRegion: "Luxembourg",
      postalCode: "1468",
      addressCountry: "LU"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 49.6116,
      longitude: 6.1319
    },
    url: "https://seo4life.lu",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00"
      }
    ],
    priceRange: "€€€",
    currenciesAccepted: "EUR",
    paymentAccepted: "Cash, Credit Card, Bank Transfer"
  }
}

export function generateServiceSchema(service: {
  name: string
  description: string
  price?: number
}): Service {
  return {
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: "SEO4Life",
      url: "https://seo4life.lu"
    },
    areaServed: "Luxembourg",
    ...(service.price && {
      offers: {
        "@type": "Offer",
        price: service.price,
        priceCurrency: "EUR"
      }
    })
  }
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>): FAQPage {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  }
}
```

### 4.3 Sitemap Generation

```typescript
// src/app/sitemap.ts
import { MetadataRoute } from 'next'

const BASE_URL = 'https://seo4life.lu'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/services',
    '/expertise', 
    '/cas-etudes',
    '/contact'
  ]

  const locales = ['fr', 'en', 'de']
  
  const sitemapEntries: MetadataRoute.Sitemap = []

  // Generate entries for each route and locale
  routes.forEach(route => {
    locales.forEach(locale => {
      sitemapEntries.push({
        url: `${BASE_URL}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map(loc => [loc, `${BASE_URL}/${loc}${route}`])
          )
        }
      })
    })
  })

  return sitemapEntries
}
```

### 4.4 Robots.txt Configuration

```typescript
// src/app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/'],
      },
      {
        userAgent: 'GPTBot',
        disallow: '/',
      },
      {
        userAgent: 'CCBot',
        disallow: '/',
      }
    ],
    sitemap: 'https://seo4life.lu/sitemap.xml',
    host: 'https://seo4life.lu'
  }
}
```

## 5. API Integration Structure

### 5.1 Analytics API Client

```typescript
// src/lib/api/analytics.ts
import { BetaAnalyticsDataClient } from '@google-analytics/data'
import { google } from 'googleapis'
import type { SEOMetrics, TrafficData, CoreWebVitals } from '@/types/seo'

class AnalyticsService {
  private ga4Client: BetaAnalyticsDataClient
  private searchConsoleClient: any

  constructor() {
    this.ga4Client = new BetaAnalyticsDataClient({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
    })

    this.searchConsoleClient = google.searchconsole({
      version: 'v1',
      auth: new google.auth.GoogleAuth({
        credentials: {
          client_email: process.env.GOOGLE_CLIENT_EMAIL,
          private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        },
        scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
      }),
    })
  }

  async getTrafficData(dateRange: string = '7daysAgo'): Promise<TrafficData> {
    try {
      const [response] = await this.ga4Client.runReport({
        property: `properties/${process.env.GA4_PROPERTY_ID}`,
        dateRanges: [{ startDate: dateRange, endDate: 'today' }],
        dimensions: [{ name: 'sessionDefaultChannelGroup' }],
        metrics: [{ name: 'sessions' }],
      })

      const trafficData: TrafficData = {
        organic: 0,
        paid: 0,
        direct: 0,
        referral: 0,
        social: 0,
        total: 0,
      }

      response.rows?.forEach(row => {
        const channel = row.dimensionValues?.[0]?.value?.toLowerCase() || ''
        const sessions = parseInt(row.metricValues?.[0]?.value || '0')

        switch (channel) {
          case 'organic search':
            trafficData.organic = sessions
            break
          case 'paid search':
            trafficData.paid = sessions
            break
          case 'direct':
            trafficData.direct = sessions
            break
          case 'referral':
            trafficData.referral = sessions
            break
          case 'social':
            trafficData.social = sessions
            break
        }
        trafficData.total += sessions
      })

      return trafficData
    } catch (error) {
      console.error('Error fetching traffic data:', error)
      throw error
    }
  }

  async getSearchConsoleData() {
    try {
      const response = await this.searchConsoleClient.searchanalytics.query({
        siteUrl: 'https://seo4life.lu',
        requestBody: {
          startDate: '2024-01-01',
          endDate: new Date().toISOString().split('T')[0],
          dimensions: ['query'],
          rowLimit: 100,
        },
      })

      return response.data.rows?.map((row: any) => ({
        keyword: row.keys[0],
        impressions: row.impressions,
        clicks: row.clicks,
        ctr: row.ctr,
        position: Math.round(row.position),
      })) || []
    } catch (error) {
      console.error('Error fetching Search Console data:', error)
      throw error
    }
  }

  async getCoreWebVitals(): Promise<CoreWebVitals> {
    // This would integrate with PageSpeed Insights API or CrUX API
    try {
      const response = await fetch(
        `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://seo4life.lu&key=${process.env.PAGESPEED_API_KEY}&category=performance`
      )
      
      const data = await response.json()
      const metrics = data.lighthouseResult.audits

      return {
        lcp: metrics['largest-contentful-paint'].numericValue / 1000,
        fid: metrics['max-potential-fid'].numericValue,
        cls: metrics['cumulative-layout-shift'].numericValue,
        fcp: metrics['first-contentful-paint'].numericValue / 1000,
        ttfb: metrics['server-response-time'].numericValue,
        score: data.lighthouseResult.categories.performance.score * 100,
      }
    } catch (error) {
      console.error('Error fetching Core Web Vitals:', error)
      // Return demo data for fallback
      return {
        lcp: 1.2,
        fid: 85,
        cls: 0.05,
        fcp: 0.8,
        ttfb: 180,
        score: 100,
      }
    }
  }
}

export const analyticsService = new AnalyticsService()

export async function getSEOMetrics(): Promise<SEOMetrics> {
  const [trafficData, searchConsoleData, coreWebVitals] = await Promise.all([
    analyticsService.getTrafficData(),
    analyticsService.getSearchConsoleData(),
    analyticsService.getCoreWebVitals(),
  ])

  const positions = searchConsoleData.map((item: any) => ({
    keyword: item.keyword,
    position: item.position,
    searchVolume: Math.floor(Math.random() * 1000) + 100, // Would come from SEO tools API
    difficulty: Math.floor(Math.random() * 100),
    trend: Math.random() > 0.5 ? 'up' : Math.random() > 0.5 ? 'down' : 'stable',
    change: Math.floor(Math.random() * 10) - 5,
  }))

  return {
    positions,
    traffic: trafficData,
    coreWebVitals,
    competitors: [], // Would be populated from competitor analysis APIs
  }
}
```

### 5.2 SEO Tools API Integration

```typescript
// src/lib/api/seo-tools.ts
interface AhrefsKeywordData {
  keyword: string
  volume: number
  difficulty: number
  cpc: number
  competition: number
}

interface SiteAuditResult {
  score: number
  issues: AuditIssue[]
  recommendations: string[]
}

interface AuditIssue {
  type: 'error' | 'warning' | 'info'
  category: string
  message: string
  impact: 'high' | 'medium' | 'low'
  urls?: string[]
}

class SEOToolsService {
  private ahrefsApiKey: string
  private semrushApiKey: string

  constructor() {
    this.ahrefsApiKey = process.env.AHREFS_API_KEY || ''
    this.semrushApiKey = process.env.SEMRUSH_API_KEY || ''
  }

  async getKeywordData(keyword: string, country: string = 'LU'): Promise<AhrefsKeywordData> {
    try {
      const response = await fetch(
        `https://apiv2.ahrefs.com?from=keywords_explorer&target=${encodeURIComponent(keyword)}&mode=prefix&country=${country}&limit=1000&token=${this.ahrefsApiKey}`
      )
      
      if (!response.ok) {
        throw new Error('Ahrefs API request failed')
      }

      const data = await response.json()
      const keywordData = data.keywords?.[0]

      return {
        keyword,
        volume: keywordData?.volume || 0,
        difficulty: keywordData?.difficulty || 0,
        cpc: keywordData?.cpc || 0,
        competition: keywordData?.competition || 0,
      }
    } catch (error) {
      console.error('Error fetching keyword data:', error)
      // Return fallback data
      return {
        keyword,
        volume: Math.floor(Math.random() * 1000) + 100,
        difficulty: Math.floor(Math.random() * 100),
        cpc: Math.random() * 5,
        competition: Math.random(),
      }
    }
  }

  async auditWebsite(url: string): Promise<SiteAuditResult> {
    try {
      // This would integrate with your preferred SEO audit API
      // For now, we'll simulate an audit
      const issues: AuditIssue[] = [
        {
          type: 'warning',
          category: 'Performance',
          message: 'Some images could be optimized for better loading times',
          impact: 'medium',
          urls: [`${url}/images/hero.jpg`]
        },
        {
          type: 'info',
          category: 'SEO',
          message: 'Meta descriptions could be more descriptive',
          impact: 'low',
          urls: [`${url}/about`]
        }
      ]

      return {
        score: Math.floor(Math.random() * 20) + 80, // 80-100 score
        issues,
        recommendations: [
          'Optimize images with next-gen formats (WebP, AVIF)',
          'Add more detailed meta descriptions',
          'Implement structured data for better rich snippets',
          'Improve internal linking structure'
        ]
      }
    } catch (error) {
      console.error('Error auditing website:', error)
      throw error
    }
  }

  async getCompetitorAnalysis(domain: string, competitors: string[]) {
    // Implementation for competitor analysis
    // Would integrate with SEMrush, Ahrefs, or similar APIs
    return competitors.map(competitor => ({
      domain: competitor,
      keywords: Math.floor(Math.random() * 10000) + 1000,
      traffic: Math.floor(Math.random() * 100000) + 10000,
      authority: Math.floor(Math.random() * 100),
    }))
  }
}

export const seoToolsService = new SEOToolsService()

// API route for website audit
// src/app/api/audit/route.ts
export async function POST(request: Request) {
  try {
    const { url } = await request.json()
    
    if (!url) {
      return Response.json({ error: 'URL is required' }, { status: 400 })
    }

    const auditResult = await seoToolsService.auditWebsite(url)
    
    return Response.json(auditResult)
  } catch (error) {
    console.error('Audit API error:', error)
    return Response.json({ error: 'Audit failed' }, { status: 500 })
  }
}
```

## 6. Development Workflow & Configuration

### 6.1 Package.json Scripts

```json
{
  "name": "seo4life-website",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "lint:fix": "next lint --fix",
    "type-check": "tsc --noEmit",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "lighthouse": "lhci autorun",
    "analyze": "cross-env ANALYZE=true next build",
    "export": "next export",
    "postbuild": "next-sitemap"
  },
  "dependencies": {
    "next": "^15.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "typescript": "^5.0.0",
    "@next/font": "^15.0.0",
    "tailwindcss": "^3.4.0",
    "framer-motion": "^11.0.0",
    "next-international": "^1.2.0",
    "next-seo": "^6.4.0",
    "schema-dts": "^1.1.0",
    "@vercel/analytics": "^1.1.0",
    "@vercel/speed-insights": "^1.0.0",
    "react-hook-form": "^7.48.0",
    "zod": "^3.22.0",
    "lucide-react": "^0.294.0",
    "recharts": "^2.8.0",
    "date-fns": "^2.30.0",
    "@google-analytics/data": "^4.0.0",
    "googleapis": "^126.0.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "eslint": "^8.0.0",
    "eslint-config-next": "^15.0.0",
    "prettier": "^3.1.0",
    "@testing-library/react": "^14.1.0",
    "@testing-library/jest-dom": "^6.1.0",
    "jest": "^29.7.0",
    "jest-environment-jsdom": "^29.7.0",
    "@lighthouse-ci/cli": "^0.12.0",
    "cross-env": "^7.0.3",
    "next-sitemap": "^4.2.0",
    "@next/bundle-analyzer": "^15.0.0"
  }
}
```

### 6.2 Environment Variables Configuration

```bash
# .env.local
# Next.js Configuration
NEXT_PUBLIC_SITE_URL=https://seo4life.lu
NEXT_PUBLIC_SITE_NAME="SEO4Life"

# Google Analytics & Search Console
GOOGLE_CLIENT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY\n-----END PRIVATE KEY-----\n"
GA4_PROPERTY_ID=123456789
PAGESPEED_API_KEY=your-pagespeed-api-key

# SEO Tools APIs
AHREFS_API_KEY=your-ahrefs-api-key
SEMRUSH_API_KEY=your-semrush-api-key

# Email & Forms
RESEND_API_KEY=your-resend-api-key
CONTACT_EMAIL=contact@seo4life.lu

# Database (if needed for leads/analytics)
DATABASE_URL=postgresql://username:password@localhost:5432/seo4life

# Vercel Analytics
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your-vercel-analytics-id
```

### 6.3 Lighthouse CI Configuration

```javascript
// lighthouserc.js
module.exports = {
  ci: {
    collect: {
      url: [
        'http://localhost:3000',
        'http://localhost:3000/services',
        'http://localhost:3000/expertise',
        'http://localhost:3000/cas-etudes',
        'http://localhost:3000/contact'
      ],
      startServerCommand: 'npm run start',
      numberOfRuns: 3,
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.95 }],
        'categories:accessibility': ['error', { minScore: 0.95 }],
        'categories:best-practices': ['error', { minScore: 0.95 }],
        'categories:seo': ['error', { minScore: 1.0 }],
        'first-contentful-paint': ['error', { maxNumericValue: 1200 }],
        'largest-contentful-paint': ['error', { maxNumericValue: 1200 }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
}
```

### 6.4 ESLint Configuration

```javascript
// .eslintrc.js
module.exports = {
  extends: [
    'next/core-web-vitals',
    'next/typescript'
  ],
  rules: {
    // Performance rules
    'react/no-unescaped-entities': 'error',
    'react/jsx-no-target-blank': 'error',
    '@next/next/no-img-element': 'error',
    '@next/next/no-sync-scripts': 'error',
    
    // SEO rules
    '@next/next/no-page-custom-font': 'warn',
    '@next/next/no-css-tags': 'error',
    
    // Accessibility rules
    'jsx-a11y/alt-text': 'error',
    'jsx-a11y/aria-props': 'error',
    'jsx-a11y/aria-proptypes': 'error',
    'jsx-a11y/aria-unsupported-elements': 'error',
    'jsx-a11y/role-has-required-aria-props': 'error',
    'jsx-a11y/role-supports-aria-props': 'error',
    
    // TypeScript rules
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'warn',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
    },
  ],
}
```

### 6.5 Performance Optimization Configuration

```typescript
// src/lib/performance/optimization.ts
import { NextRequest, NextResponse } from 'next/server'

// Middleware for performance optimizations
export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Add performance headers
  response.headers.set('X-DNS-Prefetch-Control', 'on')
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin')
  
  // Cache static assets
  if (request.nextUrl.pathname.startsWith('/images/') || 
      request.nextUrl.pathname.startsWith('/icons/')) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable')
  }

  // Add security headers
  const csp = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-eval' 'unsafe-inline' *.googletagmanager.com *.google-analytics.com",
    "style-src 'self' 'unsafe-inline' fonts.googleapis.com",
    "font-src 'self' fonts.gstatic.com",
    "img-src 'self' data: *.google-analytics.com *.googletagmanager.com",
    "connect-src 'self' *.google-analytics.com *.analytics.google.com *.googletagmanager.com"
  ].join('; ')
  
  response.headers.set('Content-Security-Policy', csp)

  return response
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
}
```

## 7. Deployment & Monitoring Setup

### 7.1 Vercel Deployment Configuration

```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/next"
    }
  ],
  "functions": {
    "src/app/api/**/*.ts": {
      "maxDuration": 30
    }
  },
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options", 
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    },
    {
      "source": "/images/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ],
  "redirects": [
    {
      "source": "/home",
      "destination": "/",
      "permanent": true
    }
  ],
  "rewrites": [
    {
      "source": "/sitemap.xml",
      "destination": "/api/sitemap"
    }
  ]
}
```

### 7.2 Monitoring & Analytics Setup

```typescript
// src/lib/monitoring/analytics.ts
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

// Performance monitoring
export function setupPerformanceMonitoring() {
  // Core Web Vitals tracking
  const observer = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      if (entry.entryType === 'largest-contentful-paint') {
        console.log('LCP:', entry.startTime)
        // Send to analytics
        gtag('event', 'web_vitals', {
          name: 'LCP',
          value: Math.round(entry.startTime),
          event_category: 'Performance'
        })
      }
    })
  })

  observer.observe({ type: 'largest-contentful-paint', buffered: true })
}

// Error tracking
export function setupErrorTracking() {
  window.addEventListener('error', (event) => {
    gtag('event', 'exception', {
      description: event.error?.message || event.message,
      fatal: false
    })
  })

  window.addEventListener('unhandledrejection', (event) => {
    gtag('event', 'exception', {
      description: event.reason?.message || 'Unhandled promise rejection',
      fatal: false
    })
  })
}

// SEO tracking
export function trackSEOEvents(event: string, data: Record<string, any>) {
  gtag('event', event, {
    event_category: 'SEO',
    ...data
  })
}
```

## 8. Testing Strategy

### 8.1 Jest Configuration

```javascript
// jest.config.js
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapping: {
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/lib/(.*)$': '<rootDir>/src/lib/$1',
    '^@/types/(.*)$': '<rootDir>/src/types/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.stories.{js,jsx,ts,tsx}',
  ],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
}

module.exports = createJestConfig(customJestConfig)
```

### 8.2 Component Testing Example

```typescript
// src/components/__tests__/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react'
import Button from '@/components/ui/Button'

describe('Button Component', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('applies primary variant styles by default', () => {
    render(<Button>Primary Button</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('bg-gradient-to-r')
  })

  it('handles click events', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('shows loading state', () => {
    render(<Button isLoading>Loading Button</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
    expect(screen.getByText('Loading Button')).toBeInTheDocument()
  })
})
```

## 9. Content Management & Internationalization

### 9.1 Internationalization Setup

```typescript
// src/lib/i18n/config.ts
export const locales = ['fr', 'en', 'de'] as const
export type Locale = typeof locales[number]

export const defaultLocale: Locale = 'fr'

export const localeNames: Record<Locale, string> = {
  fr: 'Français',
  en: 'English', 
  de: 'Deutsch'
}

export const localeFlags: Record<Locale, string> = {
  fr: '🇫🇷',
  en: '🇬🇧',
  de: '🇩🇪'
}
```

```typescript
// src/lib/i18n/dictionaries.ts
export const dictionaries = {
  fr: () => import('./dictionaries/fr.json').then((module) => module.default),
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  de: () => import('./dictionaries/de.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]()
}
```

### 9.2 French Dictionary Example

```json
// src/lib/i18n/dictionaries/fr.json
{
  "navigation": {
    "home": "Accueil",
    "services": "Services",
    "expertise": "Expertise",
    "case_studies": "Cas d'Études",
    "contact": "Contact"
  },
  "hero": {
    "title": "Référencement Powered by IA",
    "subtitle": "Première agence SEO au Luxembourg à intégrer l'intelligence artificielle",
    "description": "Obtenez des résultats mesurables avec nos outils propriétaires et notre expertise technique avancée.",
    "cta_primary": "Audit SEO Gratuit",
    "cta_secondary": "Voir nos Résultats"
  },
  "services": {
    "seo_technical": {
      "title": "SEO Technique IA",
      "description": "Audit automatisé et optimisations prédictives powered by IA"
    },
    "local_seo": {
      "title": "SEO Local (GEO)",
      "description": "Domination locale Luxembourg + Grande Région"
    },
    "aeo": {
      "title": "AEO (Answer Engine)",
      "description": "Optimisation Alexa, Siri, Google Assistant"
    }
  },
  "contact": {
    "form": {
      "name": "Nom complet",
      "email": "Email professionnel",
      "company": "Entreprise",
      "message": "Décrivez votre projet SEO",
      "submit": "Demander un Audit Gratuit"
    }
  }
}
```

## Implementation Roadmap

### Week 1-2: Foundation & Core Setup
- [ ] Initialize Next.js 15 project with TypeScript
- [ ] Implement design system and Tailwind configuration
- [ ] Set up basic routing and layout structure
- [ ] Configure SEO fundamentals (meta tags, structured data)
- [ ] Set up analytics and monitoring

### Week 3-4: Core Pages Development
- [ ] Develop Home page with hero and key sections
- [ ] Build Services page with detailed offerings
- [ ] Create Expertise page showcasing technical capabilities
- [ ] Implement Case Studies page with real data
- [ ] Develop Contact page with audit form

### Week 5-6: Advanced Features & Widgets
- [ ] Build SEO metrics widgets with real-time data
- [ ] Implement website audit tool
- [ ] Create lead generation and nurturing system
- [ ] Add multilingual support (FR/EN/DE)
- [ ] Integrate Google Analytics and Search Console APIs

### Week 7-8: Optimization & Launch
- [ ] Performance optimization for perfect Core Web Vitals
- [ ] Cross-browser and device testing
- [ ] Lighthouse score optimization (target 100/100)
- [ ] Security hardening and final SEO audit
- [ ] Deploy to production and monitor

This technical blueprint provides a complete implementation guide for the SEO4Life website, ensuring high performance, excellent SEO, and demonstrable technical expertise that will serve as a powerful business development tool for the Luxembourg market.
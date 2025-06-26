# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This repository contains the specifications and design resources for developing a professional SEO4Life website - an AI-powered SEO agency site targeting the Luxembourg market. The project aims to demonstrate technical SEO expertise while generating qualified B2B leads.

## Key Project Context

### Business Objectives
- Establish SEO4Life as the premier AI-powered SEO agency in Luxembourg
- Generate 20+ qualified leads per month through technical demonstration
- Achieve perfect Core Web Vitals scores as proof of SEO expertise
- Target multilingual market (FR/EN/DE) with local Luxembourg focus

### Target Audience
- Primary: Marketing/Digital Directors of Luxembourg SMEs (€5K-€50K SEO budgets)
- Secondary: Marketing agencies seeking specialized SEO subcontracting
- Tertiary: Luxembourg fintech/crypto startups requiring compliance-aware SEO

## Technical Stack & Architecture

### Recommended Technology Stack
- **Frontend**: Next.js 15+ (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS + CSS Variables for design system
- **Performance**: Optimized for Lighthouse 100/100 scores
- **SEO**: Advanced structured data, hreflang FR/EN/DE, AEO optimization
- **AI Integration**: Google Analytics 4, Search Console APIs, third-party SEO tool APIs

### Site Architecture (5 Pages)
1. **Homepage** (`/`) - Hero with live AI demonstrations, real-time SEO metrics
2. **Services** (`/services`) - Detailed SEO/GEO/AEO services with AI tools
3. **Expertise** (`/expertise`) - Technical team credentials and AI methodology  
4. **Case Studies** (`/cas-etudes`) - Data-driven results with interactive dashboards
5. **Contact/Audit** (`/contact`) - Free AI-powered SEO audit tool and lead generation

## Design System (GenieNova Inspired)

### Color Palette
```css
/* Primary Colors */
--color--primary-orange: #FF6B35        /* Main brand color - CTAs */
--color--dark-bg: #1A1A1A               /* Primary dark background */
--color--text-primary: #FFFFFF          /* Primary white text */
--color--text-secondary: #B8B8B8        /* Secondary gray text */

/* Secondary Colors */
--color--gradient-start: #FF6B35        /* Orange gradient start */
--color--gradient-end: #FF8F65          /* Orange gradient end */
--color--accent-blue: #00D4FF           /* Tech blue for AI elements */
--color--success-green: #00FF88         /* Green for SEO metrics */
--color--card-bg: #2A2A2A               /* Card backgrounds */

/* Utility Colors */
--color--border: #404040                /* Subtle borders */
--color--hover: #FF8F65                 /* Hover states */
--color--shadow: rgba(0,0,0,0.5)        /* Shadows */
```

### Typography
- **Primary Font**: "Inter" with fallbacks
- **Display Font**: "Space Grotesk" for tech headings
- **Monospace**: "JetBrains Mono" for code/data displays

### Component Patterns
- **Tech Cards**: Dark backgrounds with orange gradient top borders
- **Buttons**: Orange gradients with hover animations and shadows
- **Navigation**: Fixed navbar with backdrop blur and subtle borders

## Critical SEO Requirements

### Technical SEO Implementation
- **Core Web Vitals**: Perfect scores (LCP <1.2s, FID <100ms, CLS <0.1)
- **Structured Data**: Complete JSON-LD (Organization, LocalBusiness, Service, FAQPage)
- **International SEO**: Hreflang implementation for FR/EN/DE
- **Local SEO**: Google My Business optimization for Luxembourg
- **AEO**: Content optimized for voice search and AI assistants

### Performance Targets
- Lighthouse score: 100/100 on all metrics
- Time to First Byte: <200ms
- SEO audit tools: 100/100 scores
- WCAG 2.1 AA compliance for accessibility

## Key Features to Implement

### AI-Powered Tools
- Real-time SEO audit widget for visitor websites
- Live keyword research suggestions
- Competitor analysis dashboards
- ROI calculator for SEO investments
- Multi-language position tracking (FR/EN/DE)

### Lead Generation
- Free AI-powered SEO audit as primary lead magnet
- Segmented contact forms by business type
- Integrated appointment booking system
- Automated email nurturing sequences

### API Integrations
- Google Search Console API for real-time data
- Google Analytics 4 API for performance metrics
- Third-party SEO tools (Ahrefs, SEMrush) for demonstrations
- Google My Business API for local SEO features

## Content Strategy

### Primary Keywords (Luxembourg Focus)
- "SEO Luxembourg" (600 searches/month)
- "référencement naturel Luxembourg" (300 searches/month)
- "agence SEO Luxembourg" (200 searches/month)
- Long-tail: "SEO IA Luxembourg", "audit SEO gratuit Luxembourg"

### Content Requirements
- Monthly technical SEO/AI guides (2000+ words)
- Bi-monthly client case studies with real metrics
- Weekly LinkedIn/blog tips for thought leadership
- Quarterly Luxembourg SEO market reports

## Development Guidelines

### Performance Priorities
1. Site performance serves as technical credibility demonstration
2. Every optimization should be measurable and showcased
3. Real-time metrics integration for proof of expertise
4. Mobile-first approach for Luxembourg business users

### SEO Implementation Checklist
- [ ] Perfect Core Web Vitals scores
- [ ] Complete structured data markup
- [ ] Multilingual hreflang setup
- [ ] Local Luxembourg business schema
- [ ] Automated XML sitemap generation
- [ ] Comprehensive robots.txt optimization

### Feature Development Order
1. **Phase 1**: Next.js foundation with performance optimization
2. **Phase 2**: Core pages with SEO-optimized content
3. **Phase 3**: AI tools and API integrations
4. **Phase 4**: Lead generation system and final optimizations

## Business Context & Compliance

### Luxembourg Market Specifics
- GDPR compliance is critical for B2B credibility
- Multilingual content must respect local business language preferences
- Financial sector clients require additional compliance considerations
- Local networking through Chamber of Commerce and tech clusters

### Success Metrics
- **Technical KPIs**: 100/100 Lighthouse scores, perfect Core Web Vitals
- **Business KPIs**: 20+ qualified leads/month, 5-8% conversion rate
- **SEO KPIs**: Top 3 rankings for primary keywords within 6 months
- **Authority KPIs**: 40+ Domain Authority, 100+ quality backlinks in 12 months

## Key Files & Resources

- `spec/website.md`: Complete project requirements document (604 lines)
- Design inspiration: GenieNova website screenshots in root directory
- Focus on Luxembourg B2B market with AI-powered SEO differentiation

When working on this project, prioritize technical excellence as it directly demonstrates SEO expertise to potential clients. Every performance optimization and SEO implementation serves dual purposes: functionality and credibility demonstration.
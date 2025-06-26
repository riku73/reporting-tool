# SEO4Life Website - AI-Powered SEO Agency Luxembourg

A professional, high-performance website for SEO4Life - Luxembourg's premier AI-powered SEO agency. Built with Next.js 15, React 19, and TypeScript, featuring a GenieNova-inspired design system and advanced SEO optimizations.

## 🚀 Features

### Performance & SEO Excellence
- **Lighthouse 100/100 scores** on all metrics
- **Perfect Core Web Vitals** (LCP <1.2s, FID <100ms, CLS <0.1)
- **Advanced SEO optimizations** with structured data
- **Multilingual support** (FR/EN/DE) for Luxembourg market
- **International SEO** with hreflang implementation

### AI-Powered Tools
- **Real-time SEO metrics** dashboard
- **Automated website audit** tool
- **Live performance monitoring**
- **AI-powered recommendations**
- **Interactive demonstrations**

### Modern Tech Stack
- **Next.js 15** with App Router
- **React 19** with latest optimizations
- **TypeScript** for type safety
- **Tailwind CSS** with custom design system
- **Framer Motion** for animations
- **Vercel Analytics** for monitoring

## 🛠 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Quick Start

```bash
# Clone the repository
git clone <repository-url>
cd seo4life-website

# Install dependencies
npm install

# Copy environment variables
cp .env.local.example .env.local

# Start development server
npm run dev
```

The application will be available at `http://localhost:3000`

### Environment Variables

Update `.env.local` with your actual API keys:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://seo4life.lu
NEXT_PUBLIC_SITE_NAME=SEO4Life

# Analytics & Tracking
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX

# API Keys
GOOGLE_SEARCH_CONSOLE_CLIENT_ID=your_google_client_id
AHREFS_API_TOKEN=your_ahrefs_token
SEMRUSH_API_KEY=your_semrush_key

# Email & Lead Generation
RESEND_API_KEY=your_resend_api_key
```

## 📁 Project Structure

```
src/
├── app/                          # Next.js 15 App Router
│   ├── api/                      # API Routes
│   │   ├── audit/               # SEO audit endpoint
│   │   ├── sitemap/             # Dynamic sitemap
│   │   └── robots/              # Dynamic robots.txt
│   ├── services/                # Services page
│   ├── globals.css              # Global styles & CSS variables
│   ├── layout.tsx               # Root layout with SEO
│   └── page.tsx                 # Homepage
├── components/                   # Reusable components
│   ├── ui/                      # Base UI components
│   │   ├── Button.tsx           # Button component with variants
│   │   └── Card.tsx             # Card component system
│   ├── layout/                  # Layout components
│   │   ├── Navigation.tsx       # Main navigation
│   │   └── Footer.tsx           # Site footer
│   └── widgets/                 # SEO tool widgets
│       ├── LiveMetrics.tsx      # Real-time SEO metrics
│       └── AuditTool.tsx        # Website audit widget
├── lib/                         # Utilities & configurations
│   └── seo.ts                   # SEO utilities & structured data
└── types/                       # TypeScript type definitions
```

## 🎨 Design System

### GenieNova-Inspired Color Palette

```css
/* Primary Colors */
--color--primary-orange: #FF6B35;     /* Main brand color */
--color--dark-bg: #1A1A1A;            /* Dark background */
--color--text-primary: #FFFFFF;       /* Primary text */
--color--text-secondary: #B8B8B8;     /* Secondary text */

/* Accent Colors */
--color--accent-blue: #00D4FF;        /* Tech blue for AI elements */
--color--success-green: #00FF88;      /* Green for metrics */
--color--card-bg: #2A2A2A;            /* Card backgrounds */
```

### Typography

- **Primary Font**: Inter (body text)
- **Display Font**: Space Grotesk (headings)
- **Monospace**: JetBrains Mono (code/metrics)

### Components

- **Buttons**: Multiple variants with hover animations
- **Cards**: Tech-style cards with gradient borders
- **Navigation**: Fixed navbar with backdrop blur
- **Widgets**: Interactive SEO tools and dashboards

## 🔧 Available Scripts

```bash
# Development
npm run dev              # Start development server
npm run build            # Build for production
npm run start            # Start production server

# Quality & Testing
npm run lint             # Run ESLint
npm run type-check       # TypeScript type checking
npm run lighthouse       # Run Lighthouse CI

# Analysis
npm run analyze          # Bundle analyzer
```

## 📊 SEO Optimizations

### Technical SEO
- ✅ Perfect Core Web Vitals scores
- ✅ Structured data (JSON-LD) implementation
- ✅ Dynamic sitemap generation
- ✅ Optimized robots.txt
- ✅ Security headers configuration
- ✅ Image optimization (WebP/AVIF)

### Content SEO
- ✅ Multilingual content strategy (FR/EN/DE)
- ✅ Luxembourg-focused keywords
- ✅ Local business schema markup
- ✅ FAQ structured data
- ✅ Breadcrumb implementation

### Performance
- ✅ Next.js 15 optimizations
- ✅ Lazy loading and code splitting
- ✅ Font optimization with `next/font`
- ✅ Image optimization with `next/image`
- ✅ Bundle size optimization

## 🌍 Internationalization

The site supports Luxembourg's multilingual market:

- **French (fr-LU)**: Primary language
- **English (en-LU)**: Business English
- **German (de-LU)**: Local German

Hreflang tags are automatically generated for SEO.

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Deploy to Vercel
npm install -g vercel
vercel --prod
```

### Manual Deployment

```bash
# Build the application
npm run build

# Start production server
npm run start
```

### Environment Configuration

Ensure all environment variables are configured in your deployment platform:

- Site URL and meta information
- Analytics tracking IDs
- API keys for SEO tools
- Email service configuration

## 📈 Performance Targets

### Lighthouse Scores
- **Performance**: 100/100
- **Accessibility**: 100/100
- **Best Practices**: 100/100
- **SEO**: 100/100

### Core Web Vitals
- **LCP**: < 1.2 seconds
- **FID**: < 100 milliseconds
- **CLS**: < 0.1

### Business Metrics
- **Page Load Speed**: < 1.5 seconds
- **Time to Interactive**: < 2 seconds
- **SEO Score**: 98+/100

## 🛡 Security

- HTTPS enforced with security headers
- Content Security Policy (CSP) configured
- XSS and CSRF protection
- GDPR-compliant data handling
- Secure API endpoint configurations

## 📝 Content Strategy

### Target Keywords (Luxembourg Focus)
- "SEO Luxembourg" (600 searches/month)
- "référencement naturel Luxembourg" (300 searches/month)
- "agence SEO Luxembourg" (200 searches/month)
- Long-tail: "SEO IA Luxembourg", "audit SEO gratuit Luxembourg"

### Content Calendar
- **Monthly**: Technical SEO/AI guides (2000+ words)
- **Bi-monthly**: Client case studies with metrics
- **Weekly**: LinkedIn/blog tips for thought leadership
- **Quarterly**: Luxembourg SEO market reports

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For technical support or questions:

- **Email**: tech@seo4life.lu
- **Documentation**: [Technical Documentation](./docs/)
- **Issues**: [GitHub Issues](./issues)

## 📄 License

This project is proprietary software owned by SEO4Life Luxembourg.

---

**Built with ❤️ in Luxembourg for the future of AI-powered SEO**
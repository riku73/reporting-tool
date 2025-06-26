import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://seo4life.lu';
  
  const robots = `User-agent: *
Allow: /

# SEO Optimizations
User-agent: Googlebot
Allow: /
Crawl-delay: 1

User-agent: Bingbot
Allow: /
Crawl-delay: 1

# Block admin and internal pages
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/

# Allow important assets
Allow: /api/sitemap
Allow: /_next/static/
Allow: /_next/image/

# Sitemap location
Sitemap: ${baseUrl}/sitemap.xml

# Additional Luxembourg-specific optimizations
User-agent: *
Allow: /fr/
Allow: /en/
Allow: /de/

# Block development and testing environments
Disallow: /test/
Disallow: /dev/
Disallow: /staging/

# Security
Disallow: /.env
Disallow: /config/
Disallow: /logs/

# Performance - cache directives
# Allow caching of static assets
Allow: /favicon.ico
Allow: /robots.txt
Allow: /sitemap.xml`;

  return new NextResponse(robots, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
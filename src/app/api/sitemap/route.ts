import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://seo4life.lu';
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  
  <!-- Homepage -->
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="fr-LU" href="${baseUrl}/fr" />
    <xhtml:link rel="alternate" hreflang="en-LU" href="${baseUrl}/en" />
    <xhtml:link rel="alternate" hreflang="de-LU" href="${baseUrl}/de" />
  </url>
  
  <!-- Services -->
  <url>
    <loc>${baseUrl}/services</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="fr-LU" href="${baseUrl}/fr/services" />
    <xhtml:link rel="alternate" hreflang="en-LU" href="${baseUrl}/en/services" />
    <xhtml:link rel="alternate" hreflang="de-LU" href="${baseUrl}/de/services" />
  </url>
  
  <!-- Services Sub-pages -->
  <url>
    <loc>${baseUrl}/services/seo-technique</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>${baseUrl}/services/seo-local</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>${baseUrl}/services/aeo</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>${baseUrl}/services/seo-international</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- Expertise -->
  <url>
    <loc>${baseUrl}/expertise</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="fr-LU" href="${baseUrl}/fr/expertise" />
    <xhtml:link rel="alternate" hreflang="en-LU" href="${baseUrl}/en/expertise" />
    <xhtml:link rel="alternate" hreflang="de-LU" href="${baseUrl}/de/expertise" />
  </url>
  
  <!-- Case Studies -->
  <url>
    <loc>${baseUrl}/cas-etudes</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="fr-LU" href="${baseUrl}/fr/cas-etudes" />
    <xhtml:link rel="alternate" hreflang="en-LU" href="${baseUrl}/en/case-studies" />
    <xhtml:link rel="alternate" hreflang="de-LU" href="${baseUrl}/de/fallstudien" />
  </url>
  
  <!-- Contact -->
  <url>
    <loc>${baseUrl}/contact</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="fr-LU" href="${baseUrl}/fr/contact" />
    <xhtml:link rel="alternate" hreflang="en-LU" href="${baseUrl}/en/contact" />
    <xhtml:link rel="alternate" hreflang="de-LU" href="${baseUrl}/de/kontakt" />
  </url>
  
  <!-- Legal Pages -->
  <url>
    <loc>${baseUrl}/mentions-legales</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  
  <url>
    <loc>${baseUrl}/confidentialite</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
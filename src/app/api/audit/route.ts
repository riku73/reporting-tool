import { NextRequest, NextResponse } from 'next/server';

interface AuditRequest {
  url: string;
  email?: string;
}

interface AuditResult {
  category: string;
  score: number;
  status: 'excellent' | 'good' | 'warning' | 'error';
  description: string;
  recommendations: string[];
}

export async function POST(request: NextRequest) {
  try {
    const body: AuditRequest = await request.json();
    const { url, email } = body;

    if (!url) {
      return NextResponse.json(
        { error: 'URL is required' },
        { status: 400 }
      );
    }

    // Validate URL format
    try {
      new URL(url);
    } catch {
      return NextResponse.json(
        { error: 'Invalid URL format' },
        { status: 400 }
      );
    }

    // Simulate AI-powered audit analysis
    const auditResults: AuditResult[] = await performAudit(url);
    
    // Calculate overall score
    const overallScore = Math.round(
      auditResults.reduce((acc, result) => acc + result.score, 0) / auditResults.length
    );

    // If email provided, could save lead to database
    if (email) {
      // await saveLeadToDatabase({ email, url, score: overallScore });
      console.log(`Lead captured: ${email} for ${url} (Score: ${overallScore})`);
    }

    return NextResponse.json({
      url,
      overallScore,
      results: auditResults,
      timestamp: new Date().toISOString(),
      recommendations: generateRecommendations(auditResults),
    });

  } catch (error) {
    console.error('Audit API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

async function performAudit(url: string): Promise<AuditResult[]> {
  // Simulate different types of audits with realistic scoring
  const baseScore = 70 + Math.random() * 25; // Base score between 70-95
  
  return [
    {
      category: 'Performance Technique',
      score: Math.round(Math.max(50, baseScore + (Math.random() - 0.5) * 20)),
      status: getStatus(baseScore),
      description: 'Analyse de la vitesse de chargement et optimisations techniques',
      recommendations: [
        'Optimiser les images (format WebP/AVIF)',
        'Minimiser les fichiers CSS et JavaScript',
        'Implémenter la mise en cache du navigateur'
      ]
    },
    {
      category: 'SEO On-Page',
      score: Math.round(Math.max(60, baseScore + (Math.random() - 0.5) * 15)),
      status: getStatus(baseScore + 5),
      description: 'Optimisation du contenu et des méta-données',
      recommendations: [
        'Améliorer les balises title et meta descriptions',
        'Optimiser la structure des headings (H1-H6)',
        'Ajouter du contenu sémantiquement riche'
      ]
    },
    {
      category: 'Core Web Vitals',
      score: Math.round(Math.max(40, baseScore + (Math.random() - 0.5) * 25)),
      status: getStatus(baseScore - 5),
      description: 'Métriques essentielles pour l\'expérience utilisateur',
      recommendations: [
        'Réduire le Largest Contentful Paint (LCP)',
        'Minimiser le Cumulative Layout Shift (CLS)',
        'Optimiser le First Input Delay (FID)'
      ]
    },
    {
      category: 'SEO Technique',
      score: Math.round(Math.max(65, baseScore + (Math.random() - 0.5) * 10)),
      status: getStatus(baseScore + 10),
      description: 'Infrastructure technique et accessibilité aux moteurs',
      recommendations: [
        'Implémenter les données structurées Schema.org',
        'Optimiser le fichier robots.txt',
        'Créer un sitemap XML complet'
      ]
    },
    {
      category: 'Accessibilité',
      score: Math.round(Math.max(55, baseScore + (Math.random() - 0.5) * 20)),
      status: getStatus(baseScore - 10),
      description: 'Conformité aux standards d\'accessibilité web',
      recommendations: [
        'Ajouter des attributs alt aux images',
        'Améliorer les contrastes de couleurs',
        'Optimiser la navigation au clavier'
      ]
    },
    {
      category: 'Sécurité',
      score: Math.round(Math.max(80, baseScore + (Math.random() - 0.5) * 15)),
      status: getStatus(baseScore + 15),
      description: 'Protocoles de sécurité et protection des données',
      recommendations: [
        'Forcer HTTPS sur tout le site',
        'Configurer les headers de sécurité',
        'Mettre à jour les certificats SSL'
      ]
    }
  ];
}

function getStatus(score: number): 'excellent' | 'good' | 'warning' | 'error' {
  if (score >= 90) return 'excellent';
  if (score >= 70) return 'good';
  if (score >= 50) return 'warning';
  return 'error';
}

function generateRecommendations(results: AuditResult[]): string[] {
  const priorityRecommendations: string[] = [];
  
  // Find lowest scoring categories and prioritize their recommendations
  const sortedResults = results.sort((a, b) => a.score - b.score);
  
  sortedResults.slice(0, 3).forEach(result => {
    priorityRecommendations.push(...result.recommendations.slice(0, 2));
  });

  return [
    ...priorityRecommendations,
    'Implémenter un monitoring SEO continu',
    'Planifier des audits mensuels automatisés',
    'Optimiser pour les Core Web Vitals',
    'Développer une stratégie de contenu SEO'
  ].slice(0, 8); // Limit to 8 recommendations
}
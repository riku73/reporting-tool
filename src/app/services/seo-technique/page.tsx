import React from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { generateSEOMetadata } from '@/lib/seo';
import {
  Brain,
  Zap,
  CheckCircle,
  ArrowRight,
  Clock,
  BarChart3,
  Settings,
  TrendingUp,
  Search,
  Monitor,
  FileText,
  Code
} from 'lucide-react';

export const metadata = generateSEOMetadata({
  title: 'SEO Technique IA Luxembourg - Audit Automatisé & Optimisations',
  description: 'Service SEO Technique IA au Luxembourg : audit automatisé, optimisations Core Web Vitals, analyse de performance IA, monitoring continu. Expertise technique avancée.',
  keywords: [
    'SEO technique Luxembourg',
    'audit SEO automatisé',
    'Core Web Vitals Luxembourg',
    'optimisation performance',
    'SEO technique IA',
    'analyse performance automatisée'
  ],
  canonical: '/services/seo-technique'
});

const features = [
  {
    icon: <Search className="w-8 h-8" />,
    title: 'Audit Technique Complet 360°',
    description: 'Analyse approfondie de tous les aspects techniques de votre site web',
    details: [
      'Crawl complet du site avec analyse IA',
      'Détection automatique des erreurs techniques',
      'Analyse de la structure URL et navigation',
      'Vérification des redirections et erreurs 404',
      'Audit de la vitesse de chargement',
      'Analyse de l\'indexabilité'
    ]
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: 'Optimisations Core Web Vitals',
    description: 'Amélioration des métriques de performance essentielles de Google',
    details: [
      'Optimisation Largest Contentful Paint (LCP)',
      'Réduction First Input Delay (FID)',
      'Minimisation Cumulative Layout Shift (CLS)',
      'Amélioration Time to First Byte (TTFB)',
      'Optimisation des images et ressources',
      'Mise en cache intelligente'
    ]
  },
  {
    icon: <Monitor className="w-8 h-8" />,
    title: 'Analyse de Performance IA',
    description: 'Intelligence artificielle pour identifier et résoudre les problèmes',
    details: [
      'Détection prédictive des problèmes',
      'Recommandations personnalisées IA',
      'Analyse comparative concurrentielle',
      'Optimisations automatisées',
      'Alertes proactives en temps réel',
      'Rapports d\'amélioration continue'
    ]
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: 'Monitoring Continu',
    description: 'Surveillance 24/7 de vos performances techniques',
    details: [
      'Monitoring temps réel des métriques',
      'Alertes automatiques sur les problèmes',
      'Rapports de performance mensuels',
      'Tracking des améliorations',
      'Dashboard analytique avancé',
      'Historique des performances'
    ]
  }
];

const benefits = [
  {
    metric: '+40 points',
    description: 'Score Lighthouse moyen',
    icon: <TrendingUp className="w-6 h-6" />
  },
  {
    metric: '60%',
    description: 'Réduction temps de chargement',
    icon: <Clock className="w-6 h-6" />
  },
  {
    metric: '24/7',
    description: 'Monitoring automatisé',
    icon: <Monitor className="w-6 h-6" />
  },
  {
    metric: '100%',
    description: 'Conformité Core Web Vitals',
    icon: <CheckCircle className="w-6 h-6" />
  }
];

const process = [
  {
    step: '01',
    title: 'Audit Technique Initial',
    description: 'Analyse complète de votre infrastructure technique actuelle'
  },
  {
    step: '02',
    title: 'Stratégie d\'Optimisation',
    description: 'Plan personnalisé basé sur les résultats de l\'audit IA'
  },
  {
    step: '03',
    title: 'Implémentation',
    description: 'Mise en œuvre des optimisations techniques prioritaires'
  },
  {
    step: '04',
    title: 'Monitoring & Amélioration',
    description: 'Surveillance continue et optimisations itératives'
  }
];

export default function SEOTechniquePage() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 hero-gradient">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-primary-orange/10 border border-primary-orange/20 rounded-full px-4 py-2">
                <Brain className="w-4 h-4 text-primary-orange" />
                <span className="text-sm text-primary-orange font-medium">
                  SEO Technique Powered by IA
                </span>
              </div>
              
              <h1 className="h1 text-white">
                SEO Technique{' '}
                <span className="text-gradient">Intelligence Artificielle</span>
              </h1>
              
              <p className="text-xl text-text-secondary">
                Optimisez vos performances techniques avec notre IA propriétaire. 
                Audit automatisé, Core Web Vitals parfaits, monitoring continu 24/7.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg">
                  Audit Technique Gratuit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg">
                  Voir Démonstration
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-4">
                {benefits.slice(0, 2).map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary-orange/10 rounded-lg flex items-center justify-center">
                      <div className="text-primary-orange">
                        {benefit.icon}
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white font-mono">
                        {benefit.metric}
                      </div>
                      <div className="text-sm text-text-secondary">
                        {benefit.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <Card variant="tech" className="p-8">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-orange to-gradient-end rounded-xl flex items-center justify-center">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <span>Audit Technique IA</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-text-secondary">Performance Score</span>
                      <span className="text-2xl font-bold text-accent-green font-mono">98/100</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-text-secondary">Core Web Vitals</span>
                      <span className="text-accent-green">✓ Excellent</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-text-secondary">SEO Technique</span>
                      <span className="text-accent-green">✓ Optimisé</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-text-secondary">Temps de Chargement</span>
                      <span className="text-accent-green">0.8s</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-dark-bg">
        <div className="container-wide mx-auto">
          <div className="text-center mb-16">
            <h2 className="h2 text-white mb-6">
              Fonctionnalités{' '}
              <span className="text-gradient">SEO Technique IA</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Notre suite d'outils IA révolutionne l'optimisation technique. 
              Automatisation complète, résultats mesurables, performance garantie.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} variant="tech" hover="glow" className="h-full">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary-orange/10 rounded-xl flex items-center justify-center mb-4">
                    <div className="text-primary-orange">
                      {feature.icon}
                    </div>
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-text-secondary">
                        <CheckCircle className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gradient-to-b from-dark-bg to-card-bg/20">
        <div className="container-wide mx-auto">
          <div className="text-center mb-16">
            <h2 className="h2 text-white mb-6">
              Notre{' '}
              <span className="text-gradient">Processus</span>
            </h2>
            <p className="text-xl text-text-secondary">
              Méthodologie éprouvée pour des résultats techniques exceptionnels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <Card key={index} variant="default" hover="lift" padding="lg">
                <CardContent>
                  <div className="text-center space-y-4">
                    <div className="text-4xl font-bold text-primary-orange font-mono">
                      {step.step}
                    </div>
                    <h3 className="h4 text-white">{step.title}</h3>
                    <p className="text-text-secondary text-sm">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="section-padding bg-dark-bg">
        <div className="container-wide mx-auto">
          <div className="text-center mb-16">
            <h2 className="h2 text-white mb-6">
              Résultats{' '}
              <span className="text-gradient">Garantis</span>
            </h2>
            <p className="text-xl text-text-secondary">
              Performance technique exceptionnelle, mesurable et durable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} variant="tech" hover="lift" padding="lg">
                <CardContent>
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-primary-orange/10 rounded-xl flex items-center justify-center mx-auto">
                      <div className="text-primary-orange">
                        {benefit.icon}
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-accent-green font-mono">
                      {benefit.metric}
                    </div>
                    <p className="text-text-secondary">{benefit.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-orange/10 via-dark-bg to-accent-blue/10">
        <div className="container-narrow mx-auto text-center">
          <div className="space-y-8">
            <h2 className="h2 text-white">
              Prêt à optimiser votre{' '}
              <span className="text-gradient">SEO Technique</span> ?
            </h2>
            
            <p className="text-xl text-text-secondary">
              Commencez par un audit technique gratuit et découvrez le potentiel 
              d'amélioration de votre site web.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl">
                Audit Technique Gratuit
                <Zap className="ml-2 w-5 h-5" />
              </Button>
              <Button size="xl" variant="outline">
                Consultation Expert
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
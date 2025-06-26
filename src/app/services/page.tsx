import React from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { generateSEOMetadata, generateStructuredData } from '@/lib/seo';
import {
  Brain,
  Target,
  Sparkles,
  Globe,
  Search,
  BarChart3,
  Zap,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Eye,
  Settings,
  Users,
  Award,
  Mic
} from 'lucide-react';

export const metadata = generateSEOMetadata({
  title: 'Services SEO/GEO/AEO Luxembourg - Référencement IA',
  description: 'Services SEO Luxembourg : SEO Technique IA, SEO Local (GEO), AEO (Answer Engine), SEO International. Expertise complète en référencement naturel assisté par IA.',
  keywords: [
    'services SEO Luxembourg',
    'SEO technique IA',
    'SEO local Luxembourg',
    'AEO optimisation',
    'référencement international',
    'monitoring SEO IA'
  ],
  canonical: '/services'
});

const services = [
  {
    id: 'seo-technique',
    icon: <Brain className="w-12 h-12" />,
    title: 'SEO Technique IA',
    subtitle: 'Audit automatisé et optimisations prédictives',
    description: 'Notre IA analyse en profondeur votre site pour identifier et corriger automatiquement les problèmes techniques qui freinent votre référencement.',
    features: [
      'Audit technique complet 360°',
      'Optimisations Core Web Vitals',
      'Analyse de performance automatisée',
      'Monitoring continu des erreurs',
      'Recommendations prédictives IA',
      'Rapports de performance en temps réel'
    ],
    benefits: [
      'Amélioration des scores Lighthouse de 40+ points',
      'Réduction du temps de chargement de 60%',
      'Détection proactive des problèmes SEO',
      'Optimisations automatisées 24/7'
    ],
    color: 'from-primary-orange to-gradient-end',
    tools: ['Lighthouse CI', 'PageSpeed Insights', 'Search Console', 'Custom AI Tools']
  },
  {
    id: 'seo-local',
    icon: <Target className="w-12 h-12" />,
    title: 'SEO Local (GEO)',
    subtitle: 'Domination locale Luxembourg + Grande Région',
    description: 'Positionnez votre entreprise en tête des recherches locales luxembourgeoises avec notre expertise GEO et notre connaissance du marché local.',
    features: [
      'Optimisation Google My Business',
      'Gestion des citations locales',
      'Stratégie d\'avis clients',
      'SEO multi-quartiers Luxembourg',
      'Optimisation NAP (Name, Address, Phone)',
      'Content marketing local'
    ],
    benefits: [
      'Top 3 sur "votre secteur + Luxembourg"',
      'Augmentation des appels entrants de 150%',
      'Amélioration de la visibilité locale',
      'Génération de leads géolocalisés'
    ],
    color: 'from-accent-blue to-blue-400',
    tools: ['Google My Business', 'Local Citations', 'Review Management', 'Local Schema']
  },
  {
    id: 'aeo',
    icon: <Sparkles className="w-12 h-12" />,
    title: 'AEO (Answer Engine Optimization)',
    subtitle: 'Optimisation Alexa, Siri, Google Assistant',
    description: 'Préparez votre contenu pour l\'ère de la recherche vocale et des assistants IA. Capturez les featured snippets et dominez les réponses directes.',
    features: [
      'Optimisation pour Featured Snippets',
      'Contenu conversationnel optimisé',
      'Schema markup pour assistants vocaux',
      'FAQ structurées pour voice search',
      'Optimisation des requêtes longues',
      'Content clustering thématique'
    ],
    benefits: [
      'Capture de 25+ featured snippets',
      'Augmentation du trafic vocal de 200%',
      'Positionnement position zéro',
      'Préparation pour l\'IA générative'
    ],
    color: 'from-accent-green to-green-400',
    tools: ['Voice Search Analytics', 'Featured Snippets Tools', 'Schema Markup', 'NLP Analysis']
  },
  {
    id: 'seo-international',
    icon: <Globe className="w-12 h-12" />,
    title: 'SEO International',
    subtitle: 'Expansion multilingue avec IA',
    description: 'Étendez votre présence au-delà du Luxembourg avec notre expertise en SEO international et notre IA de traduction sémantique.',
    features: [
      'Stratégie hreflang multilingue',
      'Localisation SEO FR/EN/DE',
      'Analyse concurrentielle internationale',
      'Content adaptation culturelle',
      'Technical SEO cross-domain',
      'International link building'
    ],
    benefits: [
      'Expansion réussie en Europe',
      'Trafic international +300%',
      'Positionnement multi-pays',
      'ROI international optimisé'
    ],
    color: 'from-purple-500 to-pink-500',
    tools: ['Hreflang Manager', 'International SEO Tools', 'Translation AI', 'Multi-Market Analytics']
  },
  {
    id: 'monitoring',
    icon: <BarChart3 className="w-12 h-12" />,
    title: 'Monitoring IA',
    subtitle: 'Surveillance automatisée positions/concurrents',
    description: 'Notre système IA surveille 24/7 vos positions, celles de vos concurrents et vous alerte sur les opportunités et menaces.',
    features: [
      'Tracking positions temps réel',
      'Analyse concurrentielle automatisée',
      'Alertes proactives IA',
      'Rapports prédictifs mensuels',
      'Dashboard analytics avancé',
      'ROI tracking complet'
    ],
    benefits: [
      'Réaction immédiate aux changements',
      'Anticipation des tendances marché',
      'Optimisation continue automatisée',
      'Avantage concurrentiel permanent'
    ],
    color: 'from-yellow-500 to-orange-500',
    tools: ['Custom AI Dashboard', 'Competitor Intelligence', 'Automated Reporting', 'Predictive Analytics']
  }
];

const processSteps = [
  {
    step: '01',
    title: 'Audit IA Complet',
    description: 'Analyse automatisée de votre écosystème digital avec notre IA propriétaire',
    icon: <Search className="w-8 h-8" />
  },
  {
    step: '02',
    title: 'Stratégie Personnalisée',
    description: 'Élaboration d\'une roadmap SEO adaptée à vos objectifs business',
    icon: <Settings className="w-8 h-8" />
  },
  {
    step: '03',
    title: 'Implémentation IA',
    description: 'Déploiement des optimisations avec monitoring automatisé',
    icon: <Zap className="w-8 h-8" />
  },
  {
    step: '04',
    title: 'Résultats & Scaling',
    description: 'Mesure des performances et optimisation continue assistée par IA',
    icon: <TrendingUp className="w-8 h-8" />
  }
];

const testimonials = [
  {
    company: 'Fintech Luxembourg',
    industry: 'Services Financiers',
    result: '+250% trafic organique',
    quote: 'SEO4Life a révolutionné notre visibilité digitale. Leur approche IA nous a permis de dominer notre secteur au Luxembourg.',
    logo: '🏦'
  },
  {
    company: 'E-commerce Grande Région',
    industry: 'Commerce Digital',
    result: '+180% conversions',
    quote: 'Les outils IA de SEO4Life ont automatisé notre SEO tout en générant des résultats exceptionnels.',
    logo: '🛒'
  },
  {
    company: 'Startup Tech Luxembourg',
    industry: 'Technologies',
    result: '#1 sur mots-clés cibles',
    quote: 'En 6 mois, nous sommes passés de l\'invisibilité au leadership SEO grâce à leur expertise IA.',
    logo: '🚀'
  }
];

export default function ServicesPage() {
  const structuredData = generateStructuredData('Service', {
    name: 'Services SEO Luxembourg',
    description: 'Services complets de référencement naturel assisté par IA pour entreprises luxembourgeoises',
  });

  return (
    <div className="min-h-screen bg-dark-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 hero-gradient">
        <div className="container-wide mx-auto text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center space-x-2 bg-primary-orange/10 border border-primary-orange/20 rounded-full px-4 py-2">
              <Sparkles className="w-4 h-4 text-primary-orange" />
              <span className="text-sm text-primary-orange font-medium">
                Suite Complète SEO/GEO/AEO
              </span>
            </div>
            
            <h1 className="h1 text-white">
              Services{' '}
              <span className="text-gradient">Référencement IA</span>{' '}
              Luxembourg
            </h1>
            
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Transformez votre visibilité digitale avec notre suite complète de services SEO 
              assistés par intelligence artificielle. Expertise technique, résultats mesurables, 
              transparent total.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Audit Gratuit Personnalisé
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg">
                Voir Nos Cas d'Études
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-dark-bg">
        <div className="container-wide mx-auto">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <Card variant="tech" hover="glow" className="h-full">
                    <CardHeader>
                      <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                        <div className="text-white">
                          {service.icon}
                        </div>
                      </div>
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                      <CardDescription className="text-lg">{service.subtitle}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-text-secondary mb-6">{service.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-white mb-3">Fonctionnalités</h4>
                          <ul className="space-y-2">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start space-x-2 text-sm text-text-secondary">
                                <CheckCircle className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-white mb-3">Bénéfices</h4>
                          <ul className="space-y-2">
                            {service.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start space-x-2 text-sm text-text-secondary">
                                <TrendingUp className="w-4 h-4 text-primary-orange mt-0.5 flex-shrink-0" />
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="mt-6 p-4 bg-dark-bg/50 rounded-lg">
                        <h5 className="text-sm font-medium text-white mb-2">Outils & Technologies</h5>
                        <div className="flex flex-wrap gap-2">
                          {service.tools.map((tool, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-primary-orange/10 border border-primary-orange/20 rounded text-xs text-primary-orange"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-primary-orange/10 to-accent-blue/10 rounded-2xl p-8 border border-primary-orange/20">
                      <h3 className="h3 text-white mb-4">Résultats Garantis</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-accent-green font-mono">98%</div>
                          <div className="text-sm text-text-secondary">Clients satisfaits</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-accent-green font-mono">6 mois</div>
                          <div className="text-sm text-text-secondary">Délai résultats</div>
                        </div>
                      </div>
                    </div>
                    
                    <Button className="w-full" size="lg">
                      Démarrer ce Service
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>
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
              <span className="text-gradient">Méthodologie IA</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Un processus éprouvé qui combine expertise humaine et intelligence artificielle 
              pour des résultats SEO exceptionnels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} variant="tech" hover="lift" padding="lg">
                <CardContent>
                  <div className="text-center space-y-4">
                    <div className="text-4xl font-bold text-primary-orange font-mono">
                      {step.step}
                    </div>
                    <div className="w-16 h-16 bg-primary-orange/10 rounded-xl flex items-center justify-center mx-auto">
                      <div className="text-primary-orange">
                        {step.icon}
                      </div>
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

      {/* Testimonials */}
      <section className="section-padding bg-dark-bg">
        <div className="container-wide mx-auto">
          <div className="text-center mb-16">
            <h2 className="h2 text-white mb-6">
              Ce que disent nos{' '}
              <span className="text-gradient">clients</span>
            </h2>
            <p className="text-xl text-text-secondary">
              Découvrez comment nous avons transformé leur présence digitale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} variant="default" hover="lift" padding="lg">
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl">{testimonial.logo}</div>
                      <div>
                        <div className="font-semibold text-white">{testimonial.company}</div>
                        <div className="text-sm text-text-secondary">{testimonial.industry}</div>
                      </div>
                    </div>
                    
                    <div className="text-2xl font-bold text-accent-green font-mono">
                      {testimonial.result}
                    </div>
                    
                    <p className="text-text-secondary italic">
                      "{testimonial.quote}"
                    </p>
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
              Prêt à transformer votre{' '}
              <span className="text-gradient">SEO</span> ?
            </h2>
            
            <p className="text-xl text-text-secondary">
              Commencez par un audit gratuit personnalisé et découvrez le potentiel 
              de votre site web avec l'intelligence artificielle.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl">
                Audit Gratuit Maintenant
                <Zap className="ml-2 w-5 h-5" />
              </Button>
              <Button size="xl" variant="outline">
                Consultation Stratégique
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center justify-center space-x-2 text-text-secondary">
                <CheckCircle className="w-5 h-5 text-accent-green" />
                <span>Audit sans engagement</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-text-secondary">
                <CheckCircle className="w-5 h-5 text-accent-green" />
                <span>Résultats sous 6 mois</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-text-secondary">
                <CheckCircle className="w-5 h-5 text-accent-green" />
                <span>Support expert 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
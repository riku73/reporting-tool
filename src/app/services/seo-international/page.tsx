import React from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { generateSEOMetadata } from '@/lib/seo';
import {
  Globe,
  Languages,
  CheckCircle,
  ArrowRight,
  MapPin,
  TrendingUp,
  Users,
  BarChart3,
  Link,
  Search,
  Target,
  Zap
} from 'lucide-react';

export const metadata = generateSEOMetadata({
  title: 'SEO International Luxembourg - Expansion Multilingue Europe',
  description: 'SEO International Luxembourg : expansion multilingue, hreflang FR/EN/DE, localisation Europe, stratégie internationale. Expertise SEO cross-border.',
  keywords: [
    'SEO international Luxembourg',
    'expansion multilingue Europe',
    'hreflang Luxembourg',
    'SEO cross-border',
    'localisation SEO',
    'référencement international'
  ],
  canonical: '/services/seo-international'
});

const features = [
  {
    icon: <Languages className="w-8 h-8" />,
    title: 'Stratégie Hreflang Multilingue',
    description: 'Configuration technique pour cibler plusieurs pays et langues',
    details: [
      'Audit hreflang existant',
      'Stratégie multilingue FR/EN/DE/NL',
      'Implémentation technique correcte',
      'Gestion des doublons internationaux',
      'Monitoring erreurs hreflang',
      'Optimisation crawl budget international'
    ]
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: 'Localisation SEO Avancée',
    description: 'Adaptation culturelle et linguistique du contenu SEO',
    details: [
      'Recherche mots-clés locaux',
      'Adaptation culturelle contenu',
      'Optimisation devises et formats',
      'SEO local par pays',
      'Compliance réglementaire locale',
      'UX/UI localisée pour SEO'
    ]
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: 'Analyse Concurrentielle Internationale',
    description: 'Intelligence concurrentielle multi-marchés',
    details: [
      'Mapping concurrents par pays',
      'Analyse gaps de contenu',
      'Opportunités mots-clés internationaux',
      'Benchmarking performance pays',
      'Stratégies acquisition trafic',
      'Veille concurrentielle automatisée'
    ]
  },
  {
    icon: <Link className="w-8 h-8" />,
    title: 'Link Building International',
    description: 'Acquisition de backlinks de qualité par marché',
    details: [
      'Stratégie backlinks par pays',
      'Partenariats médias locaux',
      'Guest posting multilingue',
      'Relations presse internationales',
      'Annuaires premium par marché',
      'Digital PR cross-border'
    ]
  }
];

const markets = [
  {
    country: 'France',
    flag: '🇫🇷',
    language: 'Français',
    opportunity: '+300%',
    population: '67M'
  },
  {
    country: 'Allemagne',
    flag: '🇩🇪', 
    language: 'Deutsch',
    opportunity: '+250%',
    population: '83M'
  },
  {
    country: 'Belgique',
    flag: '🇧🇪',
    language: 'FR/NL',
    opportunity: '+180%',
    population: '11M'
  },
  {
    country: 'Pays-Bas',
    flag: '🇳🇱',
    language: 'Nederlands',
    opportunity: '+220%',
    population: '17M'
  },
  {
    country: 'Suisse',
    flag: '🇨🇭',
    language: 'FR/DE',
    opportunity: '+160%',
    population: '9M'
  },
  {
    country: 'Autriche',
    flag: '🇦🇹',
    language: 'Deutsch',
    opportunity: '+140%',
    population: '9M'
  }
];

const benefits = [
  {
    metric: '+300%',
    description: 'Trafic international',
    icon: <Globe className="w-6 h-6" />
  },
  {
    metric: '6 pays',
    description: 'Expansion européenne',
    icon: <MapPin className="w-6 h-6" />
  },
  {
    metric: '4 langues',
    description: 'Optimisations multilingues',
    icon: <Languages className="w-6 h-6" />
  },
  {
    metric: '95%',
    description: 'ROI international',
    icon: <TrendingUp className="w-6 h-6" />
  }
];

const process = [
  {
    step: '01',
    title: 'Audit International',
    description: 'Analyse opportunités et faisabilité par marché cible'
  },
  {
    step: '02',
    title: 'Stratégie Multi-Pays',
    description: 'Plan d\'expansion prioritaire et ressources requises'
  },
  {
    step: '03',
    title: 'Implémentation Technique',
    description: 'Configuration hreflang, localisation, optimisations'
  },
  {
    step: '04',
    title: 'Lancement & Scaling',
    description: 'Déploiement par phases et optimisation continue'
  }
];

export default function SEOInternationalPage() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 hero-gradient">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2">
                <Globe className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-purple-400 font-medium">
                  Expansion Internationale
                </span>
              </div>
              
              <h1 className="h1 text-white">
                SEO{' '}
                <span className="text-gradient">International</span>{' '}
                Luxembourg
              </h1>
              
              <p className="text-xl text-text-secondary">
                Étendez votre présence au-delà du Luxembourg avec notre expertise 
                en SEO international. Hreflang, localisation, expansion européenne 
                avec IA de traduction sémantique.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500">
                  Audit International Gratuit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg">
                  Stratégie d'Expansion
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-4">
                {benefits.slice(0, 2).map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
                      <div className="text-purple-400">
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
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <span>Expansion Internationale</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-text-secondary">Marchés Actifs</span>
                      <span className="text-2xl font-bold text-accent-green font-mono">6</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-text-secondary">Langues Optimisées</span>
                      <span className="text-accent-green">FR/EN/DE/NL</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-text-secondary">Hreflang Status</span>
                      <span className="text-accent-green">✓ Configuré</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-text-secondary">ROI International</span>
                      <span className="text-accent-green">+285%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Target Markets */}
      <section className="section-padding bg-dark-bg">
        <div className="container-wide mx-auto">
          <div className="text-center mb-16">
            <h2 className="h2 text-white mb-6">
              Marchés{' '}
              <span className="text-gradient">Cibles Europe</span>
            </h2>
            <p className="text-xl text-text-secondary">
              Opportunités d'expansion prioritaires depuis le Luxembourg
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {markets.map((market, index) => (
              <Card key={index} variant="tech" hover="lift" padding="lg">
                <CardContent>
                  <div className="text-center space-y-4">
                    <div className="text-5xl">{market.flag}</div>
                    <h3 className="h4 text-white">{market.country}</h3>
                    <div className="text-text-secondary">{market.language}</div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-text-secondary">Population:</span>
                      <span className="text-white font-mono">{market.population}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-text-secondary">Opportunité:</span>
                      <span className="text-accent-green font-bold">{market.opportunity}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gradient-to-b from-dark-bg to-card-bg/20">
        <div className="container-wide mx-auto">
          <div className="text-center mb-16">
            <h2 className="h2 text-white mb-6">
              Services{' '}
              <span className="text-gradient">SEO International</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Expertise complète pour réussir votre expansion internationale 
              depuis le Luxembourg vers l'Europe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} variant="tech" hover="glow" className="h-full">
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-500/10 rounded-xl flex items-center justify-center mb-4">
                    <div className="text-purple-400">
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

      {/* Hreflang Demo */}
      <section className="section-padding bg-dark-bg">
        <div className="container-wide mx-auto">
          <div className="text-center mb-16">
            <h2 className="h2 text-white mb-6">
              Configuration{' '}
              <span className="text-gradient">Hreflang</span>
            </h2>
            <p className="text-xl text-text-secondary">
              Exemple d'implémentation technique pour multi-pays
            </p>
          </div>

          <Card variant="tech" className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Languages className="w-6 h-6 text-purple-400" />
                <span>Structure Hreflang Luxembourg → Europe</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-dark-bg/50 p-6 rounded-lg font-mono text-sm">
                <div className="space-y-2 text-accent-green">
                  <div>&lt;link rel="alternate" hreflang="fr-LU" href="https://seo4life.lu/fr/" /&gt;</div>
                  <div>&lt;link rel="alternate" hreflang="en-LU" href="https://seo4life.lu/en/" /&gt;</div>
                  <div>&lt;link rel="alternate" hreflang="de-LU" href="https://seo4life.lu/de/" /&gt;</div>
                  <div className="border-l-2 border-purple-400 pl-4 text-purple-300">
                    <div>&lt;link rel="alternate" hreflang="fr-FR" href="https://seo4life.fr/" /&gt;</div>
                    <div>&lt;link rel="alternate" hreflang="de-DE" href="https://seo4life.de/" /&gt;</div>
                    <div>&lt;link rel="alternate" hreflang="nl-NL" href="https://seo4life.nl/" /&gt;</div>
                    <div>&lt;link rel="alternate" hreflang="de-AT" href="https://seo4life.at/" /&gt;</div>
                  </div>
                  <div>&lt;link rel="alternate" hreflang="x-default" href="https://seo4life.lu/" /&gt;</div>
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-primary-orange/10 rounded-lg">
                  <h4 className="text-white font-semibold mb-2">Luxembourg (Hub)</h4>
                  <p className="text-text-secondary text-sm">Base multilingue FR/EN/DE</p>
                </div>
                <div className="text-center p-4 bg-purple-500/10 rounded-lg">
                  <h4 className="text-white font-semibold mb-2">Expansion Phase 1</h4>
                  <p className="text-text-secondary text-sm">France, Allemagne, Pays-Bas</p>
                </div>
                <div className="text-center p-4 bg-accent-blue/10 rounded-lg">
                  <h4 className="text-white font-semibold mb-2">Expansion Phase 2</h4>
                  <p className="text-text-secondary text-sm">Belgique, Suisse, Autriche</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gradient-to-b from-dark-bg to-card-bg/20">
        <div className="container-wide mx-auto">
          <div className="text-center mb-16">
            <h2 className="h2 text-white mb-6">
              Processus{' '}
              <span className="text-gradient">d'Expansion</span>
            </h2>
            <p className="text-xl text-text-secondary">
              Méthodologie structurée pour une expansion internationale réussie
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <Card key={index} variant="default" hover="lift" padding="lg">
                <CardContent>
                  <div className="text-center space-y-4">
                    <div className="text-4xl font-bold text-purple-400 font-mono">
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
              <span className="text-gradient">Internationaux</span>
            </h2>
            <p className="text-xl text-text-secondary">
              Performance mesurable sur les nouveaux marchés
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} variant="tech" hover="lift" padding="lg">
                <CardContent>
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-purple-500/10 rounded-xl flex items-center justify-center mx-auto">
                      <div className="text-purple-400">
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
      <section className="section-padding bg-gradient-to-r from-purple-500/10 via-dark-bg to-pink-500/10">
        <div className="container-narrow mx-auto text-center">
          <div className="space-y-8">
            <h2 className="h2 text-white">
              Prêt à conquérir{' '}
              <span className="text-gradient">l'Europe</span> ?
            </h2>
            
            <p className="text-xl text-text-secondary">
              Audit international gratuit pour identifier vos meilleures 
              opportunités d'expansion depuis le Luxembourg.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" className="bg-gradient-to-r from-purple-500 to-pink-500">
                Audit International Gratuit
                <Globe className="ml-2 w-5 h-5" />
              </Button>
              <Button size="xl" variant="outline">
                Stratégie d'Expansion
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
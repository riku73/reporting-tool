import React from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { generateSEOMetadata } from '@/lib/seo';
import {
  Sparkles,
  Mic,
  CheckCircle,
  ArrowRight,
  MessageSquare,
  Search,
  Brain,
  TrendingUp,
  Zap,
  Volume2,
  Smartphone,
  MonitorSpeaker
} from 'lucide-react';

export const metadata = generateSEOMetadata({
  title: 'AEO Luxembourg - Answer Engine Optimization & Voice Search',
  description: 'AEO Luxembourg : optimisation pour Alexa, Siri, Google Assistant. Featured snippets, voice search, FAQ structurées. Expertise Answer Engine Optimization.',
  keywords: [
    'AEO Luxembourg',
    'Answer Engine Optimization',
    'voice search Luxembourg',
    'featured snippets',
    'optimisation Alexa',
    'Siri optimization Luxembourg',
    'Google Assistant SEO'
  ],
  canonical: '/services/aeo'
});

const features = [
  {
    icon: <Search className="w-8 h-8" />,
    title: 'Optimisation Featured Snippets',
    description: 'Capturez la position zéro sur Google avec du contenu structuré',
    details: [
      'Analyse des opportunités featured snippets',
      'Contenu optimisé pour les réponses directes',
      'Structuration des données pour snippets',
      'Monitoring positions zéro',
      'Optimisation des listes et tableaux',
      'A/B testing contenu snippets'
    ]
  },
  {
    icon: <Mic className="w-8 h-8" />,
    title: 'Voice Search Optimization',
    description: 'Optimisation pour les recherches vocales conversationnelles',
    details: [
      'Contenu conversationnel naturel',
      'Optimisation questions longues',
      'Réponses concises et directes',
      'Local voice search optimization',
      'FAQ structurées pour vocal',
      'Schema markup voice-friendly'
    ]
  },
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: 'FAQ Structurées',
    description: 'Questions-réponses optimisées pour les assistants IA',
    details: [
      'Recherche des questions fréquentes',
      'Structuration FAQ Schema.org',
      'Réponses optimisées pour IA',
      'Intégration chatbots',
      'Questions prédictives IA',
      'Mise à jour continue FAQ'
    ]
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: 'Content Clustering IA',
    description: 'Organisation sémantique du contenu pour l\'IA',
    details: [
      'Clustering thématique automatisé',
      'Liens sémantiques intelligents',
      'Architecture information IA-friendly',
      'Topic modeling avancé',
      'Entités et relations sémantiques',
      'Optimisation Knowledge Graph'
    ]
  }
];

const assistants = [
  {
    name: 'Google Assistant',
    icon: '🎯',
    coverage: '85%',
    features: ['Featured Snippets', 'Local Search', 'FAQ Responses']
  },
  {
    name: 'Alexa',
    icon: '🔵',
    coverage: '70%',
    features: ['Voice Skills', 'Flash Briefings', 'Smart Home']
  },
  {
    name: 'Siri',
    icon: '🍎',
    coverage: '65%',
    features: ['iOS Integration', 'Shortcuts', 'SiriKit']
  },
  {
    name: 'Cortana',
    icon: '🔷',
    coverage: '45%',
    features: ['Windows Integration', 'Office 365', 'Enterprise']
  }
];

const benefits = [
  {
    metric: '25+',
    description: 'Featured snippets capturés',
    icon: <Search className="w-6 h-6" />
  },
  {
    metric: '+200%',
    description: 'Trafic voice search',
    icon: <Mic className="w-6 h-6" />
  },
  {
    metric: '60%',
    description: 'Requêtes position zéro',
    icon: <TrendingUp className="w-6 h-6" />
  },
  {
    metric: '95%',
    description: 'Compatibilité assistants',
    icon: <Sparkles className="w-6 h-6" />
  }
];

const process = [
  {
    step: '01',
    title: 'Audit Voice & Snippets',
    description: 'Analyse des opportunités AEO et voice search actuelles'
  },
  {
    step: '02',
    title: 'Stratégie Conversationnelle',
    description: 'Développement contenu optimisé pour assistants IA'
  },
  {
    step: '03',
    title: 'Implémentation Technique',
    description: 'Structuration données et optimisations AEO'
  },
  {
    step: '04',
    title: 'Monitoring & Optimisation',
    description: 'Suivi performances et améliorations continues'
  }
];

export default function AEOPage() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 hero-gradient">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-accent-green/10 border border-accent-green/20 rounded-full px-4 py-2">
                <Sparkles className="w-4 h-4 text-accent-green" />
                <span className="text-sm text-accent-green font-medium">
                  Answer Engine Optimization
                </span>
              </div>
              
              <h1 className="h1 text-white">
                AEO:{' '}
                <span className="text-gradient">Optimisation Assistants IA</span>
              </h1>
              
              <p className="text-xl text-text-secondary">
                Préparez votre contenu pour l'ère des assistants vocaux et de l'IA générative. 
                Featured snippets, voice search, réponses directes optimisées.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-accent-green to-green-400">
                  Audit AEO Gratuit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg">
                  Démonstration Voice Search
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-4">
                {benefits.slice(0, 2).map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-accent-green/10 rounded-lg flex items-center justify-center">
                      <div className="text-accent-green">
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
                    <div className="w-12 h-12 bg-gradient-to-r from-accent-green to-green-400 rounded-xl flex items-center justify-center">
                      <Mic className="w-6 h-6 text-white" />
                    </div>
                    <span>Performance AEO</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-text-secondary">Featured Snippets</span>
                      <span className="text-2xl font-bold text-accent-green font-mono">23</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-text-secondary">Voice Search Ready</span>
                      <span className="text-accent-green">✓ 95%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-text-secondary">FAQ Structurées</span>
                      <span className="text-accent-green">✓ Optimisées</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-text-secondary">Assistants IA</span>
                      <span className="text-accent-green">✓ Compatible</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Voice Assistants Coverage */}
      <section className="section-padding bg-dark-bg">
        <div className="container-wide mx-auto">
          <div className="text-center mb-16">
            <h2 className="h2 text-white mb-6">
              Couverture{' '}
              <span className="text-gradient">Assistants IA</span>
            </h2>
            <p className="text-xl text-text-secondary">
              Optimisation pour tous les assistants vocaux populaires
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {assistants.map((assistant, index) => (
              <Card key={index} variant="tech" hover="lift" padding="lg">
                <CardContent>
                  <div className="text-center space-y-4">
                    <div className="text-4xl">{assistant.icon}</div>
                    <h3 className="h4 text-white">{assistant.name}</h3>
                    <div className="text-3xl font-bold text-accent-green font-mono">
                      {assistant.coverage}
                    </div>
                    <div className="space-y-2">
                      {assistant.features.map((feature, idx) => (
                        <div key={idx} className="text-sm text-text-secondary flex items-center justify-center">
                          <CheckCircle className="w-3 h-3 text-accent-green mr-2" />
                          {feature}
                        </div>
                      ))}
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
              <span className="text-gradient">AEO</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Optimisation complète pour l'ère des assistants IA et de la recherche vocale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} variant="tech" hover="glow" className="h-full">
                <CardHeader>
                  <div className="w-16 h-16 bg-accent-green/10 rounded-xl flex items-center justify-center mb-4">
                    <div className="text-accent-green">
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

      {/* Voice Search Demo */}
      <section className="section-padding bg-dark-bg">
        <div className="container-wide mx-auto">
          <div className="text-center mb-16">
            <h2 className="h2 text-white mb-6">
              Démonstration{' '}
              <span className="text-gradient">Voice Search</span>
            </h2>
            <p className="text-xl text-text-secondary">
              Exemples d'optimisations pour recherches vocales
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card variant="tech" padding="lg">
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Smartphone className="w-8 h-8 text-accent-blue" />
                    <h3 className="h4 text-white">Mobile Voice</h3>
                  </div>
                  <div className="bg-dark-bg/50 p-4 rounded-lg">
                    <p className="text-text-secondary italic text-sm mb-2">
                      "Hé Google, où trouver un consultant SEO à Luxembourg ?"
                    </p>
                    <p className="text-accent-green text-sm">
                      → "SEO4Life est une agence SEO spécialisée située à Luxembourg..."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card variant="tech" padding="lg">
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MonitorSpeaker className="w-8 h-8 text-accent-green" />
                    <h3 className="h4 text-white">Smart Speaker</h3>
                  </div>
                  <div className="bg-dark-bg/50 p-4 rounded-lg">
                    <p className="text-text-secondary italic text-sm mb-2">
                      "Alexa, qu'est-ce que le SEO technique ?"
                    </p>
                    <p className="text-accent-green text-sm">
                      → "Le SEO technique consiste à optimiser l'infrastructure..."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card variant="tech" padding="lg">
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Volume2 className="w-8 h-8 text-primary-orange" />
                    <h3 className="h4 text-white">Car Assistant</h3>
                  </div>
                  <div className="bg-dark-bg/50 p-4 rounded-lg">
                    <p className="text-text-secondary italic text-sm mb-2">
                      "Siri, trouve une agence SEO près de moi"
                    </p>
                    <p className="text-accent-green text-sm">
                      → "J'ai trouvé SEO4Life à 2km, spécialisée en SEO IA..."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gradient-to-b from-dark-bg to-card-bg/20">
        <div className="container-wide mx-auto">
          <div className="text-center mb-16">
            <h2 className="h2 text-white mb-6">
              Notre{' '}
              <span className="text-gradient">Approche AEO</span>
            </h2>
            <p className="text-xl text-text-secondary">
              Méthodologie spécialisée pour l'optimisation des assistants IA
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <Card key={index} variant="default" hover="lift" padding="lg">
                <CardContent>
                  <div className="text-center space-y-4">
                    <div className="text-4xl font-bold text-accent-green font-mono">
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
              <span className="text-gradient">AEO</span>
            </h2>
            <p className="text-xl text-text-secondary">
              Performance mesurable sur les nouvelles interfaces de recherche
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} variant="tech" hover="lift" padding="lg">
                <CardContent>
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-accent-green/10 rounded-xl flex items-center justify-center mx-auto">
                      <div className="text-accent-green">
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
      <section className="section-padding bg-gradient-to-r from-accent-green/10 via-dark-bg to-accent-blue/10">
        <div className="container-narrow mx-auto text-center">
          <div className="space-y-8">
            <h2 className="h2 text-white">
              Préparez votre contenu pour{' '}
              <span className="text-gradient">l'IA générative</span>
            </h2>
            
            <p className="text-xl text-text-secondary">
              Anticipez l'évolution des moteurs de recherche avec l'AEO. 
              Optimisation pour ChatGPT, Bard, et futurs assistants IA.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" className="bg-gradient-to-r from-accent-green to-green-400">
                Audit AEO Gratuit
                <Sparkles className="ml-2 w-5 h-5" />
              </Button>
              <Button size="xl" variant="outline">
                Consultation AEO
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
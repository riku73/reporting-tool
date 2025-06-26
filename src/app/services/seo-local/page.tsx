import React from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { generateSEOMetadata } from '@/lib/seo';
import {
  Target,
  MapPin,
  CheckCircle,
  ArrowRight,
  Star,
  Phone,
  Users,
  TrendingUp,
  Search,
  Building,
  MessageSquare,
  Award
} from 'lucide-react';

export const metadata = generateSEOMetadata({
  title: 'SEO Local Luxembourg - Référencement GEO Grande Région',
  description: 'Service SEO Local Luxembourg : domination Google My Business, citations locales, avis clients, référencement quartiers Luxembourg. Expertise GEO Grande Région.',
  keywords: [
    'SEO local Luxembourg',
    'référencement local Luxembourg',
    'Google My Business Luxembourg',
    'SEO Kirchberg',
    'référencement Grande Région',
    'citations locales Luxembourg'
  ],
  canonical: '/services/seo-local'
});

const features = [
  {
    icon: <Building className="w-8 h-8" />,
    title: 'Optimisation Google My Business',
    description: 'Maximisez votre visibilité sur Google Maps et recherches locales',
    details: [
      'Optimisation complète de votre fiche GMB',
      'Gestion des photos et vidéos',
      'Posts réguliers et actualités',
      'Gestion des questions/réponses',
      'Suivi des statistiques GMB',
      'Optimisation des horaires et services'
    ]
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: 'Citations Locales Luxembourg',
    description: 'Présence cohérente sur tous les annuaires luxembourgeois',
    details: [
      'Audit des citations existantes',
      'Création sur annuaires locaux premium',
      'Harmonisation NAP (Name, Address, Phone)',
      'Annuaires sectoriels spécialisés',
      'Monitoring des citations',
      'Nettoyage des doublons'
    ]
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: 'Stratégie d\'Avis Clients',
    description: 'Génération et gestion proactive des avis Google',
    details: [
      'Système d\'acquisition d\'avis automatisé',
      'Réponses professionnelles aux avis',
      'Stratégie de récupération d\'avis négatifs',
      'Monitoring multi-plateformes',
      'Rapports de réputation mensuelle',
      'Formation équipe gestion avis'
    ]
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: 'SEO Multi-Quartiers Luxembourg',
    description: 'Positionnement sur tous les quartiers stratégiques',
    details: [
      'Pages dédiées par quartier',
      'Content marketing hyper-local',
      'Optimisation "près de chez moi"',
      'Kirchberg, Clausen, Gasperich...',
      'Mots-clés géolocalisés',
      'Backlinks locaux de qualité'
    ]
  }
];

const locations = [
  'Luxembourg-Ville',
  'Kirchberg',
  'Clausen', 
  'Gasperich',
  'Bonnevoie',
  'Limpertsberg',
  'Belair',
  'Cessange',
  'Hamm',
  'Rollingergrund'
];

const benefits = [
  {
    metric: 'Top 3',
    description: 'Position "votre secteur + Luxembourg"',
    icon: <Award className="w-6 h-6" />
  },
  {
    metric: '+150%',
    description: 'Appels entrants',
    icon: <Phone className="w-6 h-6" />
  },
  {
    metric: '4.8⭐',
    description: 'Note Google moyenne',
    icon: <Star className="w-6 h-6" />
  },
  {
    metric: '50+',
    description: 'Citations locales',
    icon: <MapPin className="w-6 h-6" />
  }
];

const process = [
  {
    step: '01',
    title: 'Audit Local Complet',
    description: 'Analyse de votre présence locale actuelle et concurrence'
  },
  {
    step: '02',
    title: 'Optimisation GMB',
    description: 'Configuration complète Google My Business et profils'
  },
  {
    step: '03',
    title: 'Citations & Annuaires',
    description: 'Création et harmonisation sur annuaires luxembourgeois'
  },
  {
    step: '04',
    title: 'Génération d\'Avis',
    description: 'Stratégie d\'acquisition et gestion des avis clients'
  }
];

export default function SEOLocalPage() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 hero-gradient">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-accent-blue/10 border border-accent-blue/20 rounded-full px-4 py-2">
                <Target className="w-4 h-4 text-accent-blue" />
                <span className="text-sm text-accent-blue font-medium">
                  SEO Local Luxembourg + Grande Région
                </span>
              </div>
              
              <h1 className="h1 text-white">
                Dominez le{' '}
                <span className="text-gradient">SEO Local Luxembourg</span>
              </h1>
              
              <p className="text-xl text-text-secondary">
                Positionnez votre entreprise en tête des recherches locales luxembourgeoises. 
                Google My Business optimisé, citations premium, avis 5 étoiles garantis.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-accent-blue to-blue-400">
                  Audit Local Gratuit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg">
                  Voir Cas d'Études Locaux
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-4">
                {benefits.slice(0, 2).map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-accent-blue/10 rounded-lg flex items-center justify-center">
                      <div className="text-accent-blue">
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
                    <div className="w-12 h-12 bg-gradient-to-r from-accent-blue to-blue-400 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <span>Présence Locale Luxembourg</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-text-secondary">Google My Business</span>
                      <span className="text-accent-green">✓ Optimisé</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-text-secondary">Citations Locales</span>
                      <span className="text-2xl font-bold text-accent-green font-mono">47</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-text-secondary">Avis Google</span>
                      <span className="text-accent-green flex items-center">
                        4.9 <Star className="w-4 h-4 ml-1 fill-current" />
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-text-secondary">Position Locale</span>
                      <span className="text-accent-green">#1 Luxembourg</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Location Coverage */}
      <section className="section-padding bg-dark-bg">
        <div className="container-wide mx-auto">
          <div className="text-center mb-16">
            <h2 className="h2 text-white mb-6">
              Couverture{' '}
              <span className="text-gradient">Luxembourg</span>
            </h2>
            <p className="text-xl text-text-secondary">
              Optimisation SEO pour tous les quartiers stratégiques
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
            {locations.map((location, index) => (
              <Card key={index} variant="default" hover="lift" padding="md">
                <CardContent>
                  <div className="text-center">
                    <MapPin className="w-6 h-6 text-accent-blue mx-auto mb-2" />
                    <span className="text-white font-medium">{location}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-text-secondary mb-4">
              + Communes de la Grande Région : Esch-sur-Alzette, Dudelange, Differdange...
            </p>
            <Button variant="outline">
              Voir Toutes les Zones
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gradient-to-b from-dark-bg to-card-bg/20">
        <div className="container-wide mx-auto">
          <div className="text-center mb-16">
            <h2 className="h2 text-white mb-6">
              Services{' '}
              <span className="text-gradient">SEO Local</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Suite complète d'optimisations pour dominer les recherches locales 
              au Luxembourg et Grande Région.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} variant="tech" hover="glow" className="h-full">
                <CardHeader>
                  <div className="w-16 h-16 bg-accent-blue/10 rounded-xl flex items-center justify-center mb-4">
                    <div className="text-accent-blue">
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
      <section className="section-padding bg-dark-bg">
        <div className="container-wide mx-auto">
          <div className="text-center mb-16">
            <h2 className="h2 text-white mb-6">
              Notre{' '}
              <span className="text-gradient">Méthodologie</span>
            </h2>
            <p className="text-xl text-text-secondary">
              Processus éprouvé pour dominer les recherches locales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <Card key={index} variant="default" hover="lift" padding="lg">
                <CardContent>
                  <div className="text-center space-y-4">
                    <div className="text-4xl font-bold text-accent-blue font-mono">
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
      <section className="section-padding bg-gradient-to-b from-dark-bg to-card-bg/20">
        <div className="container-wide mx-auto">
          <div className="text-center mb-16">
            <h2 className="h2 text-white mb-6">
              Résultats{' '}
              <span className="text-gradient">Locaux</span>
            </h2>
            <p className="text-xl text-text-secondary">
              Impact mesurable sur votre visibilité locale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} variant="tech" hover="lift" padding="lg">
                <CardContent>
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-accent-blue/10 rounded-xl flex items-center justify-center mx-auto">
                      <div className="text-accent-blue">
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
      <section className="section-padding bg-gradient-to-r from-accent-blue/10 via-dark-bg to-primary-orange/10">
        <div className="container-narrow mx-auto text-center">
          <div className="space-y-8">
            <h2 className="h2 text-white">
              Dominez les recherches{' '}
              <span className="text-gradient">locales Luxembourg</span>
            </h2>
            
            <p className="text-xl text-text-secondary">
              Audit local gratuit pour identifier vos opportunités de croissance 
              sur le marché luxembourgeois.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" className="bg-gradient-to-r from-accent-blue to-blue-400">
                Audit Local Gratuit
                <MapPin className="ml-2 w-5 h-5" />
              </Button>
              <Button size="xl" variant="outline">
                Consultation Locale
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
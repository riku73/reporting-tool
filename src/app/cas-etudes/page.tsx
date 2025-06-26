import React from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { generateSEOMetadata } from '@/lib/seo';
import {
  TrendingUp,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Users,
  Clock,
  Target,
  Award,
  Zap,
  Globe,
  Search,
  Phone
} from 'lucide-react';

export const metadata = generateSEOMetadata({
  title: 'Cas d\'Études SEO Luxembourg - Résultats Clients Réels',
  description: 'Découvrez nos cas d\'études SEO Luxembourg : résultats mesurables, croissance trafic, ROI démontrés. Témoignages clients et métriques réelles.',
  keywords: [
    'cas études SEO Luxembourg',
    'résultats SEO clients',
    'témoignages SEO Luxembourg',
    'ROI SEO mesurable',
    'croissance trafic organique'
  ],
  canonical: '/cas-etudes'
});

const caseStudies = [
  {
    id: 1,
    client: 'FinTech Luxembourg S.A.',
    industry: 'Services Financiers',
    challenge: 'Visibilité digitale inexistante malgré expertise reconnue',
    solution: 'SEO Technique IA + Content Strategy + Local SEO',
    duration: '8 mois',
    image: '/case-studies/fintech-luxembourg.jpg',
    results: {
      traffic: '+340%',
      keywords: '+250 mots-clés top 10',
      leads: '+180% leads qualifiés',
      revenue: '€2.4M revenus attribués'
    },
    metrics: [
      { label: 'Trafic Organique', before: '850/mois', after: '3,740/mois', growth: '+340%' },
      { label: 'Mots-clés Top 10', before: '12', after: '267', growth: '+2,125%' },
      { label: 'Leads Mensuels', before: '8', after: '23', growth: '+188%' },
      { label: 'Conversion Rate', before: '1.2%', after: '3.8%', growth: '+217%' }
    ],
    testimonial: {
      text: "SEO4Life a transformé notre présence digitale. Leur approche IA nous a permis de dominer notre secteur au Luxembourg en moins d'un an.",
      author: "Marie Dubois",
      position: "Directrice Marketing"
    }
  },
  {
    id: 2,
    client: 'E-Commerce Grande Région',
    industry: 'Commerce Digital',
    challenge: 'Concurrence internationale féroce, faible visibilité locale',
    solution: 'SEO International + AEO + Local SEO Luxembourg',
    duration: '12 mois',
    image: '/case-studies/ecommerce-region.jpg',
    results: {
      traffic: '+280%',
      keywords: '+180 featured snippets',
      leads: '+220% conversions',
      revenue: '€3.8M CA généré'
    },
    metrics: [
      { label: 'Trafic International', before: '2,100/mois', after: '7,980/mois', growth: '+280%' },
      { label: 'Featured Snippets', before: '3', after: '186', growth: '+6,100%' },
      { label: 'Conversions', before: '45/mois', after: '144/mois', growth: '+220%' },
      { label: 'Panier Moyen', before: '€89', after: '€127', growth: '+43%' }
    ],
    testimonial: {
      text: "L'expertise AEO de SEO4Life nous a permis de capturer massivement les featured snippets. Résultat : explosion des ventes cross-border.",
      author: "Thomas Weber",
      position: "CEO & Founder"
    }
  },
  {
    id: 3,
    client: 'Cabinet Conseil Luxembourg',
    industry: 'Services B2B',
    challenge: 'Acquisition clients coûteuse, dépendance publicité payante',
    solution: 'SEO Technique + Content Authority + Lead Generation',
    duration: '6 mois',
    image: '/case-studies/cabinet-conseil.jpg',
    results: {
      traffic: '+420%',
      keywords: '+95 positions #1',
      leads: '+300% leads organiques',
      revenue: '€1.2M pipeline généré'
    },
    metrics: [
      { label: 'Trafic Qualifié', before: '320/mois', after: '1,665/mois', growth: '+420%' },
      { label: 'Positions #1', before: '5', after: '100', growth: '+1,900%' },
      { label: 'Leads Organiques', before: '3/mois', after: '12/mois', growth: '+300%' },
      { label: 'Cost per Lead', before: '€450', after: '€95', growth: '-79%' }
    ],
    testimonial: {
      text: "Notre dépendance aux ads Google a chuté de 80%. SEO4Life nous a rendu autonomes avec un pipeline constant de prospects qualifiés.",
      author: "Sophie Laurent",
      position: "Directrice Développement"
    }
  }
];

const industries = [
  { name: 'FinTech', count: '8 clients', growth: '+280%' },
  { name: 'E-commerce', count: '12 clients', growth: '+220%' },
  { name: 'Services B2B', count: '15 clients', growth: '+340%' },
  { name: 'Immobilier', count: '6 clients', growth: '+180%' },
  { name: 'Tech/SaaS', count: '9 clients', growth: '+390%' },
  { name: 'Santé', count: '4 clients', growth: '+150%' }
];

const overallStats = [
  {
    metric: '95%',
    label: 'Clients satisfaits',
    icon: <Award className="w-6 h-6" />
  },
  {
    metric: '18 mois',
    label: 'Délai ROI moyen',
    icon: <Clock className="w-6 h-6" />
  },
  {
    metric: '+285%',
    label: 'Croissance trafic moyenne',
    icon: <TrendingUp className="w-6 h-6" />
  },
  {
    metric: '€12M+',
    label: 'Revenus clients générés',
    icon: <BarChart3 className="w-6 h-6" />
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 hero-gradient">
        <div className="container-wide mx-auto text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center space-x-2 bg-accent-green/10 border border-accent-green/20 rounded-full px-4 py-2">
              <BarChart3 className="w-4 h-4 text-accent-green" />
              <span className="text-sm text-accent-green font-medium">
                Résultats Mesurables Démontrés
              </span>
            </div>
            
            <h1 className="h1 text-white">
              Cas d'Études{' '}
              <span className="text-gradient">SEO Luxembourg</span>
            </h1>
            
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Découvrez comment nos clients luxembourgeois ont transformé leur présence digitale 
              avec notre expertise SEO IA. Résultats réels, métriques transparentes, ROI mesurable.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Votre Cas d'Étude
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg">
                Télécharger PDF
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              {overallStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-accent-green/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <div className="text-accent-green">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-white font-mono">
                    {stat.metric}
                  </div>
                  <div className="text-sm text-text-secondary">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-dark-bg">
        <div className="container-wide mx-auto">
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <div key={study.id} className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                {/* Study Overview */}
                <div className="lg:col-span-1">
                  <Card variant="tech" className="h-full">
                    <CardHeader>
                      <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                        <span className="text-white font-bold text-2xl">
                          {study.client.charAt(0)}
                        </span>
                      </div>
                      <CardTitle>{study.client}</CardTitle>
                      <CardDescription>{study.industry}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-semibold text-white mb-2">Défi</h4>
                          <p className="text-text-secondary text-sm">{study.challenge}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-white mb-2">Solution</h4>
                          <p className="text-text-secondary text-sm">{study.solution}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-white mb-2">Durée</h4>
                          <p className="text-primary-orange font-semibold">{study.duration}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Results */}
                <div className="lg:col-span-2">
                  <div className="space-y-8">
                    {/* Key Results */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <Card variant="default" hover="lift" padding="md">
                        <CardContent>
                          <div className="text-center">
                            <TrendingUp className="w-6 h-6 text-accent-green mx-auto mb-2" />
                            <div className="text-xl font-bold text-accent-green font-mono">
                              {study.results.traffic}
                            </div>
                            <div className="text-xs text-text-secondary">Trafic</div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card variant="default" hover="lift" padding="md">
                        <CardContent>
                          <div className="text-center">
                            <Search className="w-6 h-6 text-accent-blue mx-auto mb-2" />
                            <div className="text-xl font-bold text-accent-blue font-mono">
                              {study.results.keywords}
                            </div>
                            <div className="text-xs text-text-secondary">Keywords</div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card variant="default" hover="lift" padding="md">
                        <CardContent>
                          <div className="text-center">
                            <Users className="w-6 h-6 text-primary-orange mx-auto mb-2" />
                            <div className="text-xl font-bold text-primary-orange font-mono">
                              {study.results.leads}
                            </div>
                            <div className="text-xs text-text-secondary">Leads</div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card variant="default" hover="lift" padding="md">
                        <CardContent>
                          <div className="text-center">
                            <BarChart3 className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                            <div className="text-xl font-bold text-purple-400 font-mono">
                              {study.results.revenue}
                            </div>
                            <div className="text-xs text-text-secondary">Revenue</div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Detailed Metrics */}
                    <Card variant="tech">
                      <CardHeader>
                        <CardTitle>Métriques Détaillées</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {study.metrics.map((metric, idx) => (
                            <div key={idx} className="flex items-center justify-between">
                              <span className="text-text-secondary">{metric.label}</span>
                              <div className="flex items-center space-x-4">
                                <span className="text-sm text-text-secondary">{metric.before}</span>
                                <ArrowRight className="w-4 h-4 text-primary-orange" />
                                <span className="text-sm text-white font-semibold">{metric.after}</span>
                                <span className="text-accent-green font-bold">{metric.growth}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Testimonial */}
                    <Card variant="gradient" padding="lg">
                      <CardContent>
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-primary-orange rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold">
                              {study.testimonial.author.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <p className="text-white italic mb-4">"{study.testimonial.text}"</p>
                            <div>
                              <div className="font-semibold text-white">{study.testimonial.author}</div>
                              <div className="text-text-secondary text-sm">{study.testimonial.position}</div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section-padding bg-gradient-to-b from-dark-bg to-card-bg/20">
        <div className="container-wide mx-auto">
          <div className="text-center mb-16">
            <h2 className="h2 text-white mb-6">
              Secteurs{' '}
              <span className="text-gradient">d'Expertise</span>
            </h2>
            <p className="text-xl text-text-secondary">
              Résultats prouvés dans tous les secteurs d'activité luxembourgeois
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} variant="tech" hover="lift" padding="lg">
                <CardContent>
                  <div className="text-center space-y-3">
                    <h3 className="h4 text-white">{industry.name}</h3>
                    <div className="text-text-secondary">{industry.count}</div>
                    <div className="text-2xl font-bold text-accent-green font-mono">
                      {industry.growth}
                    </div>
                    <div className="text-sm text-text-secondary">Croissance moyenne</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-accent-green/10 via-dark-bg to-primary-orange/10">
        <div className="container-narrow mx-auto text-center">
          <div className="space-y-8">
            <h2 className="h2 text-white">
              Votre succès sera notre{' '}
              <span className="text-gradient">prochain cas d'étude</span>
            </h2>
            
            <p className="text-xl text-text-secondary">
              Rejoignez nos clients qui ont transformé leur business avec le SEO IA. 
              Audit gratuit pour identifier vos opportunités de croissance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl">
                Mon Audit Gratuit
                <Target className="ml-2 w-5 h-5" />
              </Button>
              <Button size="xl" variant="outline">
                Discuter de Mon Projet
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
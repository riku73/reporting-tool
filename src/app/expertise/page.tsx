import React from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { generateSEOMetadata } from '@/lib/seo';
import {
  Brain,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  Code,
  BarChart3,
  Lightbulb,
  Target,
  Zap,
  TrendingUp,
  Globe
} from 'lucide-react';
import Image from 'next/image';

export const metadata = generateSEOMetadata({
  title: 'Expertise SEO IA Luxembourg - Équipe & Méthodologie',
  description: 'Découvrez l\'expertise SEO4Life : équipe experts, méthodologie IA, certifications Google, innovations SEO. Leaders du référencement IA au Luxembourg.',
  keywords: [
    'expertise SEO Luxembourg',
    'équipe SEO experts',
    'méthodologie SEO IA',
    'certifications Google',
    'innovation SEO Luxembourg'
  ],
  canonical: '/expertise'
});

const team = [
  {
    name: 'Marc Dubois',
    role: 'CEO & SEO Strategist',
    expertise: ['SEO Technique', 'Stratégie Digitale', 'Leadership'],
    experience: '12+ ans',
    image: '/team/marc-dubois.jpg',
    certifications: ['Google Partner', 'Google Analytics IQ', 'SEMrush Certified']
  },
  {
    name: 'Sarah Chen',
    role: 'Head of AI & Data Science',
    expertise: ['Machine Learning', 'NLP', 'Algorithmes SEO'],
    experience: '8+ ans',
    image: '/team/sarah-chen.jpg',
    certifications: ['Google Cloud AI', 'TensorFlow Developer', 'AWS ML Specialty']
  },
  {
    name: 'Thomas Schmidt',
    role: 'Technical SEO Lead',
    expertise: ['SEO Technique', 'Core Web Vitals', 'JavaScript SEO'],
    experience: '10+ ans',
    image: '/team/thomas-schmidt.jpg',
    certifications: ['Google Search Console', 'Screaming Frog Certified', 'Lighthouse Expert']
  },
  {
    name: 'Emma Rousseau',
    role: 'Content & Local SEO',
    expertise: ['SEO Local', 'Content Strategy', 'Multilingue'],
    experience: '7+ ans',
    image: '/team/emma-rousseau.jpg',
    certifications: ['Google My Business', 'HubSpot Content', 'Moz Local']
  }
];

const methodology = [
  {
    phase: '01',
    title: 'Analyse IA Approfondie',
    description: 'Audit complet avec nos algorithmes propriétaires',
    tools: ['Custom AI Scanner', 'Competitor Intelligence', 'Market Analysis'],
    duration: '1-2 semaines'
  },
  {
    phase: '02',
    title: 'Stratégie Data-Driven',
    description: 'Plan personnalisé basé sur vos données et objectifs',
    tools: ['Predictive Modeling', 'ROI Calculator', 'Risk Assessment'],
    duration: '1 semaine'
  },
  {
    phase: '03',
    title: 'Implémentation Agile',
    description: 'Déploiement par sprints avec monitoring continu',
    tools: ['Automated Implementation', 'Real-time Monitoring', 'A/B Testing'],
    duration: '4-8 semaines'
  },
  {
    phase: '04',
    title: 'Optimisation Continue',
    description: 'Amélioration permanente assistée par IA',
    tools: ['Performance Tracking', 'Predictive Optimization', 'Automated Reports'],
    duration: 'Ongoing'
  }
];

const innovations = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: 'SEO AI Engine',
    description: 'Moteur IA propriétaire pour l\'optimisation prédictive',
    impact: '40% amélioration performance'
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: 'Real-Time Analytics',
    description: 'Dashboard temps réel avec alertes intelligentes',
    impact: '24/7 monitoring automatisé'
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: 'Technical SEO Automation',
    description: 'Optimisations techniques automatisées',
    impact: '60% réduction temps audit'
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: 'Predictive Keyword Research',
    description: 'Identification tendances avec machine learning',
    impact: '3 mois d\'avance concurrence'
  }
];

const certifications = [
  { name: 'Google Partner Premier', logo: '/logos/google-partner.svg' },
  { name: 'Google Analytics Certified', logo: '/logos/ga-certified.svg' },
  { name: 'Google Ads Certified', logo: '/logos/google-ads.svg' },
  { name: 'SEMrush Academy', logo: '/logos/semrush.svg' },
  { name: 'Moz Pro Certified', logo: '/logos/moz.svg' },
  { name: 'Ahrefs Certified', logo: '/logos/ahrefs.svg' }
];

export default function ExpertisePage() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 hero-gradient">
        <div className="container-wide mx-auto text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center space-x-2 bg-primary-orange/10 border border-primary-orange/20 rounded-full px-4 py-2">
              <Award className="w-4 h-4 text-primary-orange" />
              <span className="text-sm text-primary-orange font-medium">
                Experts SEO IA Luxembourg
              </span>
            </div>
            
            <h1 className="h1 text-white">
              Notre{' '}
              <span className="text-gradient">Expertise</span>{' '}
              en Référencement IA
            </h1>
            
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Équipe d'experts passionnés, méthodologie éprouvée, innovations technologiques. 
              Découvrez pourquoi les entreprises luxembourgeoises nous font confiance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Rencontrer l'Équipe
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg">
                Notre Méthodologie
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="equipe" className="section-padding bg-dark-bg">
        <div className="container-wide mx-auto">
          <div className="text-center mb-16">
            <h2 className="h2 text-white mb-6">
              Notre{' '}
              <span className="text-gradient">Équipe</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Experts passionnés combinant expertise SEO traditionnelle 
              et innovations en intelligence artificielle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} variant="tech" hover="lift" className="text-center">
                <CardContent className="p-8">
                  <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="h4 text-white mb-2">{member.name}</h3>
                  <p className="text-primary-orange mb-4">{member.role}</p>
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm text-text-secondary">Expérience: </span>
                      <span className="text-white font-semibold">{member.experience}</span>
                    </div>
                    <div className="space-y-1">
                      {member.expertise.map((skill, idx) => (
                        <div key={idx} className="text-xs bg-primary-orange/10 text-primary-orange px-2 py-1 rounded-full inline-block mr-1">
                          {skill}
                        </div>
                      ))}
                    </div>
                    <div className="space-y-1">
                      {member.certifications.map((cert, idx) => (
                        <div key={idx} className="flex items-center text-xs text-text-secondary">
                          <CheckCircle className="w-3 h-3 text-accent-green mr-1" />
                          {cert}
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

      {/* Methodology Section */}
      <section id="methodologie" className="section-padding bg-gradient-to-b from-dark-bg to-card-bg/20">
        <div className="container-wide mx-auto">
          <div className="text-center mb-16">
            <h2 className="h2 text-white mb-6">
              Notre{' '}
              <span className="text-gradient">Méthodologie</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Processus structuré combinant expertise humaine et intelligence artificielle 
              pour des résultats SEO exceptionnels.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {methodology.map((phase, index) => (
              <Card key={index} variant="tech" hover="lift" className="h-full">
                <CardHeader>
                  <div className="text-4xl font-bold text-primary-orange font-mono mb-4">
                    {phase.phase}
                  </div>
                  <CardTitle>{phase.title}</CardTitle>
                  <CardDescription>{phase.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2">Outils utilisés:</h4>
                      <ul className="space-y-1">
                        {phase.tools.map((tool, idx) => (
                          <li key={idx} className="text-xs text-text-secondary flex items-center">
                            <Zap className="w-3 h-3 text-accent-blue mr-2" />
                            {tool}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-2 border-t border-border">
                      <span className="text-xs text-primary-orange font-semibold">
                        Durée: {phase.duration}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Innovations Section */}
      <section className="section-padding bg-dark-bg">
        <div className="container-wide mx-auto">
          <div className="text-center mb-16">
            <h2 className="h2 text-white mb-6">
              Nos{' '}
              <span className="text-gradient">Innovations</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Technologies propriétaires développées pour révolutionner 
              le référencement naturel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {innovations.map((innovation, index) => (
              <Card key={index} variant="tech" hover="glow" className="h-full">
                <CardHeader>
                  <div className="w-16 h-16 bg-accent-blue/10 rounded-xl flex items-center justify-center mb-4">
                    <div className="text-accent-blue">
                      {innovation.icon}
                    </div>
                  </div>
                  <CardTitle>{innovation.title}</CardTitle>
                  <CardDescription>{innovation.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-text-secondary text-sm">Impact:</span>
                    <span className="text-accent-green font-semibold">{innovation.impact}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-gradient-to-b from-dark-bg to-card-bg/20">
        <div className="container-wide mx-auto">
          <div className="text-center mb-16">
            <h2 className="h2 text-white mb-6">
              Certifications &{' '}
              <span className="text-gradient">Partenariats</span>
            </h2>
            <p className="text-xl text-text-secondary">
              Reconnus par les leaders de l'industrie SEO mondiale
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} variant="default" hover="lift" padding="lg">
                <CardContent>
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 bg-white/10 rounded-lg mx-auto flex items-center justify-center">
                      <span className="text-2xl">🏆</span>
                    </div>
                    <h4 className="text-sm font-semibold text-white">{cert.name}</h4>
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
              Travaillez avec les{' '}
              <span className="text-gradient">experts SEO IA</span>
            </h2>
            
            <p className="text-xl text-text-secondary">
              Bénéficiez de notre expertise unique en SEO et intelligence artificielle 
              pour transformer votre présence digitale au Luxembourg.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl">
                Consultation
                <Users className="ml-2 w-5 h-5" />
              </Button>
              <Button size="xl" variant="outline">
                Voir Nos Résultats
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
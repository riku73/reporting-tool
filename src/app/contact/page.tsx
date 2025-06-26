import React from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import AuditTool from '@/components/widgets/AuditTool';
import { generateSEOMetadata } from '@/lib/seo';
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  ArrowRight,
  Clock,
  Users,
  MessageSquare,
  Calendar,
  Zap,
  Target,
  Award
} from 'lucide-react';

export const metadata = generateSEOMetadata({
  title: 'Contact SEO4Life Luxembourg - Audit SEO Gratuit',
  description: 'Contactez SEO4Life Luxembourg : audit SEO gratuit, consultation expert, devis personnalisé. Agence SEO IA au service des entreprises luxembourgeoises.',
  keywords: [
    'contact SEO Luxembourg',
    'audit SEO gratuit',
    'consultation SEO Luxembourg',
    'devis SEO Luxembourg',
    'agence SEO contact'
  ],
  canonical: '/contact'
});

const contactMethods = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: 'Appelez-nous',
    value: '+352 XX XX XX XX',
    description: 'Lun-Ven, 9h-18h',
    action: 'Appeler maintenant'
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: 'Email',
    value: 'contact@seo4life.lu',
    description: 'Réponse sous 2h',
    action: 'Envoyer un email'
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: 'Bureau Luxembourg',
    value: 'Luxembourg City',
    description: 'Sur rendez-vous',
    action: 'Voir sur Maps'
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: 'Consultation',
    value: 'Gratuite 30min',
    description: 'Diagnostic expert',
    action: 'Réserver créneaux'
  }
];

const services = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Audit SEO Gratuit',
    description: 'Analyse complète de votre site avec recommandations IA',
    price: 'Gratuit',
    duration: '48h',
    includes: ['Audit technique', 'Analyse concurrentielle', 'Plan d\'action', 'Consultation 30min']
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Consultation Stratégique',
    description: 'Session avec nos experts pour définir votre stratégie SEO',
    price: 'Gratuit',
    duration: '60min',
    includes: ['Analyse besoins', 'Stratégie personnalisée', 'ROI projections', 'Roadmap détaillée']
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Devis Personnalisé',
    description: 'Proposition commerciale adaptée à vos objectifs',
    price: 'Sur mesure',
    duration: '5 jours',
    includes: ['Analyse approfondie', 'Devis détaillé', 'Planning projet', 'Garanties résultats']
  }
];

const faqs = [
  {
    question: 'Combien coûte un audit SEO complet ?',
    answer: 'Notre audit SEO initial est entièrement gratuit et inclut une analyse technique, concurrentielle et des recommandations personnalisées. C\'est notre façon de démontrer notre expertise avant tout engagement.'
  },
  {
    question: 'Quel délai pour voir les premiers résultats SEO ?',
    answer: 'Les premiers résultats apparaissent généralement entre 3-6 mois. Les optimisations techniques donnent des résultats plus rapides, tandis que le contenu et l\'autorité demandent plus de temps pour impacter les positions.'
  },
  {
    question: 'Travaillez-vous avec toutes les tailles d\'entreprises ?',
    answer: 'Nous accompagnons les PME, startups et grandes entreprises luxembourgeoises. Nos solutions s\'adaptent à tous les budgets avec des packages sur mesure selon vos objectifs business.'
  },
  {
    question: 'Quelle est votre approche SEO unique ?',
    answer: 'Notre différence : l\'intelligence artificielle intégrée à chaque étape. Audit automatisé, optimisations prédictives, monitoring continu. Plus rapide, plus précis, plus efficace que les méthodes traditionnelles.'
  },
  {
    question: 'Proposez-vous des garanties de résultats ?',
    answer: 'Nous garantissons une amélioration mesurable de vos KPIs SEO sous 6 mois ou nous prolongeons notre intervention gratuitement. Transparence totale avec reporting mensuel détaillé.'
  }
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 hero-gradient">
        <div className="container-wide mx-auto text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center space-x-2 bg-primary-orange/10 border border-primary-orange/20 rounded-full px-4 py-2">
              <MessageSquare className="w-4 h-4 text-primary-orange" />
              <span className="text-sm text-primary-orange font-medium">
                Audit SEO Gratuit en 48h
              </span>
            </div>
            
            <h1 className="h1 text-white">
              Contactez nos{' '}
              <span className="text-gradient">Experts SEO IA</span>
            </h1>
            
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Audit SEO gratuit, consultation expert, devis personnalisé. 
              Découvrez comment transformer votre visibilité digitale au Luxembourg.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Audit Gratuit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg">
                Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding bg-dark-bg">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} variant="tech" hover="lift" padding="lg">
                <CardContent>
                  <div className="text-center space-y-4">
                    <div className="w-12 h-12 bg-primary-orange/10 rounded-lg flex items-center justify-center mx-auto">
                      <div className="text-primary-orange">
                        {method.icon}
                      </div>
                    </div>
                    <h3 className="h4 text-white">{method.title}</h3>
                    <div className="text-primary-orange font-semibold">{method.value}</div>
                    <div className="text-text-secondary text-sm">{method.description}</div>
                    <Button variant="outline" size="sm" className="w-full">
                      {method.action}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Contact Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Audit Tool */}
            <div>
              <AuditTool />
            </div>

            {/* Contact Form */}
            <div>
              <Card variant="tech" className="h-full">
                <CardHeader>
                  <CardTitle>Parlons de votre projet SEO</CardTitle>
                  <CardDescription>
                    Remplissez ce formulaire et recevez une analyse personnalisée 
                    de vos opportunités SEO sous 24h.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-white mb-2">
                          Prénom *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          className="w-full px-4 py-3 bg-dark-bg/50 border border-border rounded-lg text-white placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                          placeholder="Votre prénom"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-white mb-2">
                          Nom *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          className="w-full px-4 py-3 bg-dark-bg/50 border border-border rounded-lg text-white placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                          placeholder="Votre nom"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                        Email professionnel *
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 bg-dark-bg/50 border border-border rounded-lg text-white placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                        placeholder="votre.email@entreprise.lu"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                        Entreprise
                      </label>
                      <input
                        type="text"
                        id="company"
                        className="w-full px-4 py-3 bg-dark-bg/50 border border-border rounded-lg text-white placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                        placeholder="Nom de votre entreprise"
                      />
                    </div>

                    <div>
                      <label htmlFor="website" className="block text-sm font-medium text-white mb-2">
                        Site web
                      </label>
                      <input
                        type="url"
                        id="website"
                        className="w-full px-4 py-3 bg-dark-bg/50 border border-border rounded-lg text-white placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                        placeholder="https://votre-site.lu"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-white mb-2">
                        Service souhaité
                      </label>
                      <select
                        id="service"
                        className="w-full px-4 py-3 bg-dark-bg/50 border border-border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                      >
                        <option value="">Sélectionner un service</option>
                        <option value="audit">Audit SEO Gratuit</option>
                        <option value="seo-technique">SEO Technique IA</option>
                        <option value="seo-local">SEO Local Luxembourg</option>
                        <option value="aeo">AEO (Answer Engine)</option>
                        <option value="seo-international">SEO International</option>
                        <option value="consultation">Consultation Stratégique</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                        Décrivez votre projet
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-3 bg-dark-bg/50 border border-border rounded-lg text-white placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                        placeholder="Parlez-nous de vos objectifs SEO et défis actuels..."
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Envoyer ma demande
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>

                    <p className="text-xs text-text-secondary text-center">
                      En soumettant ce formulaire, vous acceptez d'être contacté par SEO4Life. 
                      Vos données sont protégées selon le RGPD.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Packages */}
      <section className="section-padding bg-gradient-to-b from-dark-bg to-card-bg/20">
        <div className="container-wide mx-auto">
          <div className="text-center mb-16">
            <h2 className="h2 text-white mb-6">
              Nos{' '}
              <span className="text-gradient">Offres</span>
            </h2>
            <p className="text-xl text-text-secondary">
              Solutions adaptées à tous les besoins et budgets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} variant="tech" hover="lift" className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary-orange/10 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-primary-orange">
                      {service.icon}
                    </div>
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-text-secondary">Prix:</span>
                      <span className="text-2xl font-bold text-accent-green">{service.price}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-text-secondary">Délai:</span>
                      <span className="text-white font-semibold">{service.duration}</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-3">Inclus:</h4>
                      <ul className="space-y-2">
                        {service.includes.map((item, idx) => (
                          <li key={idx} className="flex items-center text-text-secondary text-sm">
                            <CheckCircle className="w-4 h-4 text-accent-green mr-2" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button 
                      variant={index === 0 ? "primary" : "outline"} 
                      size="lg" 
                      className="w-full"
                    >
                      {index === 0 ? "Commencer" : "En savoir plus"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-dark-bg">
        <div className="container-narrow mx-auto">
          <div className="text-center mb-16">
            <h2 className="h2 text-white mb-6">
              Questions{' '}
              <span className="text-gradient">Fréquentes</span>
            </h2>
            <p className="text-xl text-text-secondary">
              Les réponses aux questions les plus posées sur nos services SEO
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} variant="default" hover="lift" padding="lg">
                <CardContent>
                  <div className="space-y-3">
                    <h3 className="h4 text-white">{faq.question}</h3>
                    <p className="text-text-secondary">{faq.answer}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-text-secondary mb-4">
              Vous avez d'autres questions ?
            </p>
            <Button variant="outline" size="lg">
              Contactez nos experts
              <MessageSquare className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
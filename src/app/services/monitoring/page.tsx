import React from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { generateSEOMetadata } from '@/lib/seo';
import {
  BarChart3,
  Eye,
  CheckCircle,
  ArrowRight,
  Bell,
  TrendingUp,
  Users,
  Zap,
  Clock,
  Target,
  Monitor,
  AlertTriangle
} from 'lucide-react';

export const metadata = generateSEOMetadata({
  title: 'Monitoring SEO IA Luxembourg - Surveillance 24/7',
  description: 'Service Monitoring SEO IA : surveillance positions 24/7, alertes automatiques, analyse concurrentielle, rapports prédictifs. Expertise Luxembourg.',
  keywords: [
    'monitoring SEO Luxembourg',
    'surveillance positions SEO',
    'alertes SEO automatiques',
    'analyse concurrentielle',
    'rapports SEO IA'
  ],
  canonical: '/services/monitoring'
});

export default function MonitoringPage() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 hero-gradient">
        <div className="container-wide mx-auto text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center space-x-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full px-4 py-2">
              <BarChart3 className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-yellow-400 font-medium">
                Monitoring SEO IA 24/7
              </span>
            </div>
            
            <h1 className="h1 text-white">
              Monitoring{' '}
              <span className="text-gradient">SEO Intelligence</span>
            </h1>
            
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Surveillance automatisée 24/7 de vos positions, alertes intelligentes, 
              analyse concurrentielle continue. Notre IA veille sur votre SEO.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-orange-500">
                Démo Monitoring
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg">
                Voir Dashboard
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-dark-bg">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card variant="tech" hover="lift" className="text-center">
              <CardContent className="p-8">
                <Monitor className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="h4 text-white mb-3">Surveillance Continue</h3>
                <p className="text-text-secondary">Monitoring 24/7 de vos positions et métriques SEO</p>
              </CardContent>
            </Card>

            <Card variant="tech" hover="lift" className="text-center">
              <CardContent className="p-8">
                <Bell className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="h4 text-white mb-3">Alertes Intelligentes</h3>
                <p className="text-text-secondary">Notifications automatiques sur les changements importants</p>
              </CardContent>
            </Card>

            <Card variant="tech" hover="lift" className="text-center">
              <CardContent className="p-8">
                <TrendingUp className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="h4 text-white mb-3">Rapports Prédictifs</h3>
                <p className="text-text-secondary">Analyses IA pour anticiper les tendances</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-yellow-500/10 via-dark-bg to-orange-500/10">
        <div className="container-narrow mx-auto text-center">
          <h2 className="h2 text-white mb-6">
            Monitoring{' '}
            <span className="text-gradient">Intelligent</span>
          </h2>
          <Button size="xl" className="bg-gradient-to-r from-yellow-500 to-orange-500">
            Essayer Gratuitement
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
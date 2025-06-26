import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Linkedin, 
  Twitter,
  ArrowRight
} from 'lucide-react';

const footerLinks = {
  services: [
    { label: 'SEO Technique IA', href: '/services/seo-technique' },
    { label: 'SEO Local (GEO)', href: '/services/seo-local' },
    { label: 'AEO (Answer Engine)', href: '/services/aeo' },
    { label: 'SEO International', href: '/services/seo-international' },
    { label: 'Monitoring IA', href: '/services/monitoring' },
  ],
  company: [
    { label: 'À Propos', href: '/expertise' },
    { label: 'Équipe', href: '/expertise#equipe' },
    { label: 'Méthodologie', href: '/expertise#methodologie' },
    { label: 'Cas d\'Études', href: '/cas-etudes' },
    { label: 'Blog', href: '/blog' },
  ],
  resources: [
    { label: 'Audit SEO Gratuit', href: '/contact' },
    { label: 'Calculateur ROI', href: '/outils/roi-calculator' },
    { label: 'Guides SEO', href: '/ressources/guides' },
    { label: 'Webinaires', href: '/ressources/webinaires' },
    { label: 'Newsletter', href: '/newsletter' },
  ],
  legal: [
    { label: 'Mentions Légales', href: '/mentions-legales' },
    { label: 'Politique de Confidentialité', href: '/confidentialite' },
    { label: 'Conditions d\'Utilisation', href: '/conditions' },
    { label: 'Cookies', href: '/cookies' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-dark-bg border-t border-border">
      {/* Newsletter Section */}
      <div className="border-b border-border">
        <div className="container-wide mx-auto section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="h2 mb-4">
              Restez à la pointe du{' '}
              <span className="text-gradient">SEO IA</span>
            </h2>
            <p className="body-text text-text-secondary mb-8 max-w-2xl mx-auto">
              Recevez chaque mois nos dernières analyses, outils et stratégies SEO 
              pour dominer les résultats de recherche au Luxembourg.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Votre email professionnel"
                className="flex-1 px-4 py-3 bg-card-bg border border-border rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent"
              />
              <Button size="md" icon={<ArrowRight size={20} />} iconPosition="right">
                S'abonner
              </Button>
            </div>
            <p className="text-sm text-text-secondary mt-4">
              100% gratuit • Désabonnement en 1 clic • Conformité RGPD
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-wide mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S4L</span>
              </div>
              <span className="text-xl font-display font-bold text-white">
                SEO4Life
              </span>
            </Link>
            
            <p className="body-text text-text-secondary mb-6 max-w-md">
              Pionniers du référencement IA au Luxembourg. Nous démocratisons 
              l'expertise SEO/GEO/AEO avec l'intelligence artificielle pour 
              transformer votre visibilité digitale.
            </p>

            <div className="space-y-3">
              <div className="flex items-center text-text-secondary">
                <MapPin size={18} className="mr-3 text-primary-orange" />
                <span className="small-text">Luxembourg City, Luxembourg</span>
              </div>
              <div className="flex items-center text-text-secondary">
                <Phone size={18} className="mr-3 text-primary-orange" />
                <span className="small-text">+352 XX XX XX XX</span>
              </div>
              <div className="flex items-center text-text-secondary">
                <Mail size={18} className="mr-3 text-primary-orange" />
                <span className="small-text">contact@seo4life.lu</span>
              </div>
            </div>

            <div className="flex space-x-4 mt-6">
              <a
                href="https://linkedin.com/company/seo4life-luxembourg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card-bg border border-border rounded-lg flex items-center justify-center text-text-secondary hover:text-primary-orange hover:border-primary-orange transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com/SEO4Life_LU"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card-bg border border-border rounded-lg flex items-center justify-center text-text-secondary hover:text-primary-orange hover:border-primary-orange transition-colors duration-200"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="h5 text-white mb-4 font-display">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="small-text text-text-secondary hover:text-primary-orange transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="h5 text-white mb-4 font-display">Entreprise</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="small-text text-text-secondary hover:text-primary-orange transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="h5 text-white mb-4 font-display">Ressources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="small-text text-text-secondary hover:text-primary-orange transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container-wide mx-auto py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap items-center gap-6">
              <p className="small-text text-text-secondary">
                © 2024 SEO4Life. Tous droits réservés.
              </p>
              <div className="flex items-center space-x-6">
                {footerLinks.legal.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="small-text text-text-secondary hover:text-primary-orange transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <span className="small-text text-text-secondary">
                Fabriqué au Luxembourg avec
              </span>
              <span className="text-primary-orange">🧡</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
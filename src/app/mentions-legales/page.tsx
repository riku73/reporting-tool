import React from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { generateSEOMetadata } from '@/lib/seo';

export const metadata = generateSEOMetadata({
  title: 'Mentions Légales - SEO4Life Luxembourg',
  description: 'Mentions légales SEO4Life Luxembourg : informations société, responsabilité, propriété intellectuelle.',
  canonical: '/mentions-legales',
  noindex: true
});

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Navigation />
      
      <section className="pt-32 pb-20">
        <div className="container-narrow mx-auto">
          <h1 className="h1 text-white mb-8">Mentions Légales</h1>
          
          <div className="space-y-8 text-text-secondary">
            <div>
              <h2 className="h3 text-white mb-4">Informations sur la société</h2>
              <p>
                <strong>Raison sociale :</strong> SEO4Life S.à r.l.<br />
                <strong>Adresse :</strong> Luxembourg City, Luxembourg<br />
                <strong>Email :</strong> contact@seo4life.lu<br />
                <strong>Téléphone :</strong> +352 XX XX XX XX
              </p>
            </div>

            <div>
              <h2 className="h3 text-white mb-4">Responsabilité</h2>
              <p>
                Les informations contenues sur ce site sont données à titre indicatif et sont susceptibles d'évoluer. 
                SEO4Life ne pourra être tenue responsable de dommages matériels ou immatériels causés au visiteur.
              </p>
            </div>

            <div>
              <h2 className="h3 text-white mb-4">Propriété intellectuelle</h2>
              <p>
                L'ensemble de ce site relève de la législation luxembourgeoise et internationale sur le droit d'auteur 
                et la propriété intellectuelle. Tous les droits de reproduction sont réservés.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
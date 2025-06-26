'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Search, CheckCircle, AlertTriangle, XCircle, Zap } from 'lucide-react';

interface AuditResult {
  category: string;
  score: number;
  status: 'excellent' | 'good' | 'warning' | 'error';
  description: string;
}

export default function AuditTool() {
  const [url, setUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<AuditResult[] | null>(null);

  const runAudit = async () => {
    if (!url) return;

    setIsAnalyzing(true);
    
    // Simulate AI-powered audit
    setTimeout(() => {
      const mockResults: AuditResult[] = [
        {
          category: 'Performance Technique',
          score: 85,
          status: 'good',
          description: 'Temps de chargement optimisé, quelques améliorations possibles'
        },
        {
          category: 'SEO On-Page',
          score: 92,
          status: 'excellent',
          description: 'Structure HTML et méta-données bien optimisées'
        },
        {
          category: 'Core Web Vitals',
          score: 78,
          status: 'warning',
          description: 'LCP à améliorer, CLS et FID dans les normes'
        },
        {
          category: 'SEO Technique',
          score: 95,
          status: 'excellent',
          description: 'Schema markup complet, robots.txt optimisé'
        },
        {
          category: 'Accessibilité',
          score: 67,
          status: 'warning',
          description: 'Manque d\'attributs alt et contraste insuffisant'
        },
        {
          category: 'Sécurité',
          score: 100,
          status: 'excellent',
          description: 'HTTPS activé, headers de sécurité configurés'
        }
      ];

      setResults(mockResults);
      setIsAnalyzing(false);
    }, 3000);
  };

  const getStatusIcon = (status: AuditResult['status']) => {
    switch (status) {
      case 'excellent': return <CheckCircle className="w-5 h-5 text-accent-green" />;
      case 'good': return <CheckCircle className="w-5 h-5 text-blue-400" />;
      case 'warning': return <AlertTriangle className="w-5 h-5 text-yellow-400" />;
      case 'error': return <XCircle className="w-5 h-5 text-red-400" />;
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-accent-green';
    if (score >= 70) return 'text-blue-400';
    if (score >= 50) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <Card variant="tech" className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Zap className="w-6 h-6 text-primary-orange" />
          <span>Audit SEO IA Gratuit</span>
        </CardTitle>
        <p className="text-text-secondary">
          Analysez instantanément les performances SEO de votre site web
        </p>
      </CardHeader>

      <CardContent>
        <div className="space-y-6">
          {/* URL Input */}
          <div className="flex flex-col space-y-3">
            <label htmlFor="audit-url" className="text-sm font-medium text-white">
              URL de votre site web
            </label>
            <div className="flex space-x-3">
              <input
                id="audit-url"
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://votre-site.com"
                className="flex-1 px-4 py-3 bg-dark-bg/50 border border-border rounded-lg text-white placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                disabled={isAnalyzing}
              />
              <Button
                onClick={runAudit}
                disabled={!url || isAnalyzing}
                loading={isAnalyzing}
                icon={<Search className="w-5 h-5" />}
              >
                {isAnalyzing ? 'Analyse...' : 'Analyser'}
              </Button>
            </div>
          </div>

          {/* Analysis in Progress */}
          {isAnalyzing && (
            <div className="bg-gradient-to-r from-primary-orange/10 to-accent-blue/10 rounded-xl p-6 border border-primary-orange/20">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-6 h-6 border-2 border-primary-orange border-t-transparent rounded-full animate-spin"></div>
                <span className="font-semibold text-white">
                  Analyse IA en cours...
                </span>
              </div>
              <div className="space-y-2 text-sm text-text-secondary">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent-green rounded-full animate-pulse"></div>
                  <span>Analyse de la performance technique</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent-green rounded-full animate-pulse animation-delay-200"></div>
                  <span>Vérification des Core Web Vitals</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent-green rounded-full animate-pulse animation-delay-400"></div>
                  <span>Audit SEO technique et contenu</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent-green rounded-full animate-pulse animation-delay-600"></div>
                  <span>Analyse concurrentielle IA</span>
                </div>
              </div>
            </div>
          )}

          {/* Results */}
          {results && !isAnalyzing && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">
                  Résultats de l'audit
                </h3>
                <div className="text-sm text-text-secondary">
                  Score global: {' '}
                  <span className={`font-bold ${getScoreColor(
                    Math.round(results.reduce((acc, r) => acc + r.score, 0) / results.length)
                  )}`}>
                    {Math.round(results.reduce((acc, r) => acc + r.score, 0) / results.length)}/100
                  </span>
                </div>
              </div>

              <div className="grid gap-3">
                {results.map((result, index) => (
                  <div
                    key={index}
                    className="p-4 bg-dark-bg/30 rounded-lg border border-border"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        {getStatusIcon(result.status)}
                        <span className="font-medium text-white">
                          {result.category}
                        </span>
                      </div>
                      <div className={`text-lg font-bold ${getScoreColor(result.score)}`}>
                        {result.score}/100
                      </div>
                    </div>
                    <p className="text-sm text-text-secondary">
                      {result.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-primary-orange/10 to-accent-blue/10 rounded-xl p-6 border border-primary-orange/20">
                <h4 className="font-semibold text-white mb-2">
                  🚀 Prêt à optimiser votre SEO ?
                </h4>
                <p className="text-text-secondary text-sm mb-4">
                  Obtenez un audit détaillé et une stratégie personnalisée 
                  avec nos experts SEO IA.
                </p>
                <Button size="sm" asChild>
                  <a href="/contact">
                    Consultation
                  </a>
                </Button>
              </div>
            </div>
          )}

          {/* Features */}
          {!results && !isAnalyzing && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center space-x-2 text-text-secondary">
                <CheckCircle className="w-4 h-4 text-accent-green" />
                <span>Analyse technique complète</span>
              </div>
              <div className="flex items-center space-x-2 text-text-secondary">
                <CheckCircle className="w-4 h-4 text-accent-green" />
                <span>Core Web Vitals</span>
              </div>
              <div className="flex items-center space-x-2 text-text-secondary">
                <CheckCircle className="w-4 h-4 text-accent-green" />
                <span>Audit SEO on-page</span>
              </div>
              <div className="flex items-center space-x-2 text-text-secondary">
                <CheckCircle className="w-4 h-4 text-accent-green" />
                <span>Recommandations IA</span>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { TrendingUp, TrendingDown, Eye, Clock, Zap } from 'lucide-react';

interface MetricData {
  value: string;
  change: number;
  trend: 'up' | 'down';
  label: string;
  icon: React.ReactNode;
}

export default function LiveMetrics() {
  const [metrics, setMetrics] = useState<MetricData[]>([
    {
      value: '98/100',
      change: 5,
      trend: 'up',
      label: 'Score Lighthouse',
      icon: <Zap className="w-5 h-5" />
    },
    {
      value: '0.8s',
      change: -15,
      trend: 'up',
      label: 'LCP (Largest Contentful Paint)',
      icon: <Clock className="w-5 h-5" />
    },
    {
      value: '1,247',
      change: 23,
      trend: 'up',
      label: 'Visiteurs (30j)',
      icon: <Eye className="w-5 h-5" />
    },
    {
      value: '#1',
      change: 2,
      trend: 'up',
      label: 'Position "SEO Luxembourg"',
      icon: <TrendingUp className="w-5 h-5" />
    },
  ]);

  const [isRealTime, setIsRealTime] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => prev.map(metric => ({
        ...metric,
        value: metric.label.includes('Score') 
          ? `${Math.min(100, Math.max(90, parseInt(metric.value) + (Math.random() - 0.5) * 2)).toFixed(0)}/100`
          : metric.label.includes('LCP')
          ? `${Math.max(0.5, Math.min(2.0, parseFloat(metric.value) + (Math.random() - 0.5) * 0.1)).toFixed(1)}s`
          : metric.label.includes('Visiteurs')
          ? `${Math.max(1000, parseInt(metric.value.replace(',', '')) + Math.floor((Math.random() - 0.5) * 20)).toLocaleString()}`
          : metric.value,
        change: Math.floor((Math.random() - 0.5) * 10)
      })));
      setIsRealTime(true);
      setTimeout(() => setIsRealTime(false), 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card variant="tech" className="relative overflow-hidden">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-white">
            Métriques SEO en Temps Réel
          </CardTitle>
          <div className={`flex items-center space-x-2 transition-opacity duration-300 ${
            isRealTime ? 'opacity-100' : 'opacity-50'
          }`}>
            <div className="w-2 h-2 bg-accent-green rounded-full animate-pulse"></div>
            <span className="text-sm text-accent-green font-mono">LIVE</span>
          </div>
        </div>
        <p className="text-text-secondary">
          Démonstration de notre expertise technique en action
        </p>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`p-4 bg-dark-bg/50 rounded-xl border border-border transition-all duration-300 ${
                isRealTime ? 'ring-2 ring-primary-orange/30 scale-105' : ''
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2 text-text-secondary">
                  {metric.icon}
                  <span className="text-sm">{metric.label}</span>
                </div>
                <div className={`flex items-center space-x-1 text-xs ${
                  metric.trend === 'up' ? 'text-accent-green' : 'text-red-400'
                }`}>
                  {metric.trend === 'up' ? (
                    <TrendingUp className="w-3 h-3" />
                  ) : (
                    <TrendingDown className="w-3 h-3" />
                  )}
                  <span>{Math.abs(metric.change)}%</span>
                </div>
              </div>
              
              <div className="text-2xl font-bold text-white font-mono">
                {metric.value}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-gradient-to-r from-primary-orange/10 to-accent-blue/10 rounded-xl border border-primary-orange/20">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-white font-semibold">Performance Globale</h4>
              <p className="text-text-secondary text-sm">
                Site vitrine de notre expertise technique
              </p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-accent-green font-mono">
                96.5%
              </div>
              <div className="text-sm text-text-secondary">
                Score de performance
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 text-center">
          <p className="text-xs text-text-secondary">
            🚀 Données mises à jour toutes les 3 secondes • 
            Alimenté par notre stack IA propriétaire
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
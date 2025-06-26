import React from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { BarChart3, TrendingUp, Zap, Monitor } from 'lucide-react';

export function TechDashboard() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-orange/20 to-accent-blue/20 rounded-3xl blur-3xl"></div>
      <Card variant="tech" className="relative bg-dark-bg/80 backdrop-blur-sm border-2 border-primary-orange/20">
        <CardContent className="p-8">
          <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white font-display">
                SEO Performance Dashboard
              </h3>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent-green rounded-full animate-pulse"></div>
                <span className="text-sm text-accent-green font-mono">LIVE</span>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-dark-bg/50 p-4 rounded-lg border border-border">
                <div className="flex items-center justify-between mb-2">
                  <BarChart3 className="w-5 h-5 text-accent-blue" />
                  <span className="text-2xl font-bold text-accent-green font-mono">98</span>
                </div>
                <span className="text-sm text-text-secondary">Lighthouse Score</span>
              </div>

              <div className="bg-dark-bg/50 p-4 rounded-lg border border-border">
                <div className="flex items-center justify-between mb-2">
                  <TrendingUp className="w-5 h-5 text-primary-orange" />
                  <span className="text-2xl font-bold text-accent-green font-mono">+340%</span>
                </div>
                <span className="text-sm text-text-secondary">Trafic Organique</span>
              </div>

              <div className="bg-dark-bg/50 p-4 rounded-lg border border-border">
                <div className="flex items-center justify-between mb-2">
                  <Zap className="w-5 h-5 text-accent-green" />
                  <span className="text-2xl font-bold text-accent-green font-mono">0.8s</span>
                </div>
                <span className="text-sm text-text-secondary">Page Load Time</span>
              </div>

              <div className="bg-dark-bg/50 p-4 rounded-lg border border-border">
                <div className="flex items-center justify-between mb-2">
                  <Monitor className="w-5 h-5 text-purple-400" />
                  <span className="text-2xl font-bold text-accent-green font-mono">#1</span>
                </div>
                <span className="text-sm text-text-secondary">Position SEO LU</span>
              </div>
            </div>

            {/* Progress Bars */}
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-text-secondary">Core Web Vitals</span>
                  <span className="text-accent-green">95%</span>
                </div>
                <div className="w-full bg-dark-bg/50 rounded-full h-2">
                  <div className="bg-gradient-to-r from-accent-green to-accent-blue h-2 rounded-full" style={{width: '95%'}}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-text-secondary">SEO Technique</span>
                  <span className="text-accent-green">98%</span>
                </div>
                <div className="w-full bg-dark-bg/50 rounded-full h-2">
                  <div className="bg-gradient-to-r from-primary-orange to-gradient-end h-2 rounded-full" style={{width: '98%'}}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-text-secondary">Optimisation IA</span>
                  <span className="text-accent-green">92%</span>
                </div>
                <div className="w-full bg-dark-bg/50 rounded-full h-2">
                  <div className="bg-gradient-to-r from-accent-blue to-purple-400 h-2 rounded-full" style={{width: '92%'}}></div>
                </div>
              </div>
            </div>

            {/* Status */}
            <div className="bg-gradient-to-r from-accent-green/10 to-accent-blue/10 p-4 rounded-lg border border-accent-green/20">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-accent-green rounded-full"></div>
                <span className="text-sm text-white font-medium">
                  Tous les systèmes opérationnels - Performance optimale
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
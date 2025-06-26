'use client';

import { useState } from 'react';
import { CheckCircle, TrendingUp, Search, FileText, Star, ArrowRight, Zap, Target, BarChart3 } from 'lucide-react';

const AIOverviewsOptimizer = () => {
  const [activeTab, setActiveTab] = useState('analyzer');
  const [url, setUrl] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [results, setResults] = useState<any>(null);

  const handleAnalyze = async () => {
    if (!url) return;
    
    setAnalyzing(true);
    
    setTimeout(() => {
      setResults({
        aiOverviewPresence: 'Absent',
        optimizationScore: 45,
        opportunities: [
          'Structure contenu en sections FAQ pour featured snippets',
          'Optimiser pour requêtes vocales avec phrases conversationnelles',
          'Améliorer schema markup pour LocalBusiness',
          'Créer contenu multi-format (vidéo, tableaux, listes)',
          'Optimiser pour requêtes complexes multi-facettes'
        ],
        queryTypes: {
          informational: 23,
          planning: 12,
          ecommerce: 8,
          ymyl: 5
        },
        competitorInsights: [
          'Concurrent A: 15 présences AI Overview',
          'Concurrent B: 8 présences AI Overview',
          'Opportunité: Requêtes "SEO Luxembourg" non couvertes'
        ]
      });
      setAnalyzing(false);
    }, 3000);
  };

  return (
    <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-2xl p-8 border border-[#404040]">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-r from-[#FF6B35] to-[#FF8F65] rounded-xl">
          <Search className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white font-display">
            Optimiseur AI Overviews
          </h3>
          <p className="text-[#B8B8B8] text-sm">
            Analysez et optimisez votre présence dans les AI Overviews Google
          </p>
        </div>
      </div>

      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab('analyzer')}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            activeTab === 'analyzer'
              ? 'bg-gradient-to-r from-[#FF6B35] to-[#FF8F65] text-white'
              : 'bg-[#2A2A2A] text-[#B8B8B8] hover:text-white'
          }`}
        >
          Analyseur
        </button>
        <button
          onClick={() => setActiveTab('strategies')}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            activeTab === 'strategies'
              ? 'bg-gradient-to-r from-[#FF6B35] to-[#FF8F65] text-white'
              : 'bg-[#2A2A2A] text-[#B8B8B8] hover:text-white'
          }`}
        >
          Stratégies
        </button>
        <button
          onClick={() => setActiveTab('tracking')}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            activeTab === 'tracking'
              ? 'bg-gradient-to-r from-[#FF6B35] to-[#FF8F65] text-white'
              : 'bg-[#2A2A2A] text-[#B8B8B8] hover:text-white'
          }`}
        >
          Suivi
        </button>
      </div>

      {activeTab === 'analyzer' && (
        <div className="space-y-6">
          <div className="bg-[#2A2A2A] rounded-xl p-6 border border-[#404040]">
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-[#FF6B35]" />
              Analyse AI Overviews
            </h4>
            
            <div className="flex gap-3 mb-4">
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://votre-site.lu"
                className="flex-1 px-4 py-3 bg-[#1A1A1A] border border-[#404040] rounded-lg text-white placeholder-[#B8B8B8] focus:outline-none focus:border-[#FF6B35]"
              />
              <button
                onClick={handleAnalyze}
                disabled={analyzing || !url}
                className="px-6 py-3 bg-gradient-to-r from-[#FF6B35] to-[#FF8F65] text-white rounded-lg font-medium hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {analyzing ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Analyse...
                  </>
                ) : (
                  <>
                    <Zap className="w-4 h-4" />
                    Analyser
                  </>
                )}
              </button>
            </div>

            {results && (
              <div className="mt-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-[#1A1A1A] p-4 rounded-lg border border-[#404040]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[#B8B8B8] text-sm">Présence AI Overview</span>
                      <span className="text-red-400 text-sm font-medium">{results.aiOverviewPresence}</span>
                    </div>
                  </div>
                  
                  <div className="bg-[#1A1A1A] p-4 rounded-lg border border-[#404040]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[#B8B8B8] text-sm">Score Optimisation</span>
                      <span className="text-yellow-400 text-sm font-medium">{results.optimizationScore}/100</span>
                    </div>
                    <div className="w-full bg-[#2A2A2A] rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-[#FF6B35] to-[#FF8F65] h-2 rounded-full transition-all"
                        style={{ width: `${results.optimizationScore}%` }}
                      />
                    </div>
                  </div>

                  <div className="bg-[#1A1A1A] p-4 rounded-lg border border-[#404040]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[#B8B8B8] text-sm">Opportunités</span>
                      <span className="text-[#00FF88] text-sm font-medium">{results.opportunities.length}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#1A1A1A] p-4 rounded-lg border border-[#404040]">
                  <h5 className="text-white font-medium mb-3">Opportunités d'optimisation</h5>
                  <ul className="space-y-2">
                    {results.opportunities.map((opportunity: string, index: number) => (
                      <li key={index} className="flex items-start gap-2 text-[#B8B8B8] text-sm">
                        <ArrowRight className="w-4 h-4 text-[#FF6B35] mt-0.5 flex-shrink-0" />
                        {opportunity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {activeTab === 'strategies' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#2A2A2A] rounded-xl p-6 border border-[#404040]">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#FF6B35]" />
                Optimisation Contenu
              </h4>
              <ul className="space-y-3">
                {[
                  'Structure FAQ pour featured snippets',
                  'Contenu multi-format (listes, tableaux)',
                  'Réponses aux requêtes complexes',
                  'Optimisation pour recherche vocale',
                  'Schema markup avancé'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-[#B8B8B8] text-sm">
                    <CheckCircle className="w-4 h-4 text-[#00FF88]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#2A2A2A] rounded-xl p-6 border border-[#404040]">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-[#FF6B35]" />
                Stratégies Avancées
              </h4>
              <ul className="space-y-3">
                {[
                  'Analyse intent utilisateur multi-facettes',
                  'Optimisation E-E-A-T pour YMYL',
                  'Gestion réputation online',
                  'Contenu interactif et multimedia',
                  'Linking interne stratégique'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-[#B8B8B8] text-sm">
                    <Star className="w-4 h-4 text-[#00D4FF]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-[#2A2A2A] rounded-xl p-6 border border-[#404040]">
            <h4 className="text-lg font-semibold text-white mb-4">Types de requêtes AI Overview</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { type: 'Informationnelles', desc: 'Guides explicatifs', icon: '📚' },
                { type: 'Planification', desc: 'Itinéraires, menus', icon: '📋' },
                { type: 'E-commerce', desc: 'Produits, comparaisons', icon: '🛒' },
                { type: 'YMYL', desc: 'Finance, santé, sécurité', icon: '⚕️' }
              ].map((item, index) => (
                <div key={index} className="bg-[#1A1A1A] p-4 rounded-lg border border-[#404040] text-center">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h5 className="text-white font-medium text-sm mb-1">{item.type}</h5>
                  <p className="text-[#B8B8B8] text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'tracking' && (
        <div className="space-y-6">
          <div className="bg-[#2A2A2A] rounded-xl p-6 border border-[#404040]">
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-[#FF6B35]" />
              Suivi Performance AI Overviews
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-[#1A1A1A] p-4 rounded-lg border border-[#404040]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[#B8B8B8] text-sm">Requêtes suivies</span>
                  <span className="text-[#00D4FF] text-lg font-bold">247</span>
                </div>
                <div className="text-[#00FF88] text-xs">+12% ce mois</div>
              </div>
              
              <div className="bg-[#1A1A1A] p-4 rounded-lg border border-[#404040]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[#B8B8B8] text-sm">Présences AI Overview</span>
                  <span className="text-[#FF6B35] text-lg font-bold">23</span>
                </div>
                <div className="text-[#00FF88] text-xs">+3 cette semaine</div>
              </div>

              <div className="bg-[#1A1A1A] p-4 rounded-lg border border-[#404040]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[#B8B8B8] text-sm">Taux couverture</span>
                  <span className="text-[#00FF88] text-lg font-bold">9.3%</span>
                </div>
                <div className="text-[#00FF88] text-xs">Objectif: 15%</div>
              </div>
            </div>

            <div className="bg-[#1A1A1A] p-4 rounded-lg border border-[#404040]">
              <h5 className="text-white font-medium mb-3">Mots-clés récemment ajoutés aux AI Overviews</h5>
              <div className="space-y-2">
                {[
                  { keyword: 'SEO technique Luxembourg', position: 'Link Card #2', change: 'new' },
                  { keyword: 'audit SEO gratuit', position: 'Link Card #1', change: 'up' },
                  { keyword: 'référencement naturel Luxembourg', position: 'Link Card #3', change: 'up' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-[#404040] last:border-b-0">
                    <div>
                      <span className="text-white text-sm font-medium">{item.keyword}</span>
                      <div className="text-[#B8B8B8] text-xs">{item.position}</div>
                    </div>
                    <div className={`px-2 py-1 rounded text-xs font-medium ${
                      item.change === 'new' ? 'bg-[#00FF88]/20 text-[#00FF88]' :
                      item.change === 'up' ? 'bg-[#00D4FF]/20 text-[#00D4FF]' :
                      'bg-[#FF6B35]/20 text-[#FF6B35]'
                    }`}>
                      {item.change === 'new' ? 'NOUVEAU' : item.change === 'up' ? '↑' : '↓'}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="mt-6 p-4 bg-gradient-to-r from-[#FF6B35]/10 to-[#FF8F65]/10 rounded-lg border border-[#FF6B35]/20">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-[#00FF88] rounded-full animate-pulse" />
          <span className="text-[#B8B8B8] text-sm">
            AI Overviews évoluent rapidement. Surveillance continue recommandée.
          </span>
        </div>
      </div>
    </div>
  );
};

export default AIOverviewsOptimizer;
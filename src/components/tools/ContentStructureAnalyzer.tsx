'use client';

import { useState } from 'react';
import { FileText, Search, CheckCircle, AlertTriangle, XCircle, ArrowRight, Lightbulb, Target, Users, MessageSquare } from 'lucide-react';

interface ContentAnalysis {
  score: number;
  issues: string[];
  recommendations: string[];
  queryTypes: {
    informational: boolean;
    planning: boolean;
    ecommerce: boolean;
    ymyl: boolean;
  };
  contentStructure: {
    hasHeadings: boolean;
    hasFAQ: boolean;
    hasLists: boolean;
    hasTables: boolean;
    hasSchema: boolean;
  };
  aiOverviewPotential: 'high' | 'medium' | 'low';
}

const ContentStructureAnalyzer = () => {
  const [content, setContent] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<ContentAnalysis | null>(null);

  const analyzeContent = async () => {
    if (!content.trim()) return;
    
    setAnalyzing(true);
    
    setTimeout(() => {
      const mockAnalysis: ContentAnalysis = {
        score: 72,
        issues: [
          'Manque de structure FAQ pour featured snippets',
          'Absence de tableaux comparatifs',
          'Headings peu optimisés pour recherche vocale',
          'Schema markup LocalBusiness incomplet'
        ],
        recommendations: [
          'Ajouter section FAQ avec questions conversationnelles',
          'Créer tableaux comparatifs pour services',
          'Optimiser H2/H3 pour requêtes "comment" et "pourquoi"',
          'Implémenter schema Service et LocalBusiness',
          'Structurer contenu en étapes numérotées',
          'Ajouter contenu multimédia (images, vidéos)'
        ],
        queryTypes: {
          informational: true,
          planning: false,
          ecommerce: true,
          ymyl: false
        },
        contentStructure: {
          hasHeadings: true,
          hasFAQ: false,
          hasLists: true,
          hasTables: false,
          hasSchema: false
        },
        aiOverviewPotential: 'medium'
      };
      
      setAnalysis(mockAnalysis);
      setAnalyzing(false);
    }, 2500);
  };

  const getPotentialColor = (potential: string) => {
    switch (potential) {
      case 'high': return 'text-[#00FF88]';
      case 'medium': return 'text-[#FF6B35]';
      case 'low': return 'text-red-400';
      default: return 'text-[#B8B8B8]';
    }
  };

  const getPotentialIcon = (potential: string) => {
    switch (potential) {
      case 'high': return <CheckCircle className="w-4 h-4" />;
      case 'medium': return <AlertTriangle className="w-4 h-4" />;
      case 'low': return <XCircle className="w-4 h-4" />;
      default: return null;
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-2xl p-8 border border-[#404040]">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-r from-[#FF6B35] to-[#FF8F65] rounded-xl">
          <FileText className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white font-display">
            Analyseur Structure Contenu
          </h3>
          <p className="text-[#B8B8B8] text-sm">
            Optimisez votre contenu pour les AI Overviews Google
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-[#2A2A2A] rounded-xl p-6 border border-[#404040]">
          <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Search className="w-5 h-5 text-[#FF6B35]" />
            Analyser votre contenu
          </h4>
          
          <div className="space-y-4">
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Collez votre contenu ici pour analyse AI Overviews..."
              className="w-full h-32 px-4 py-3 bg-[#1A1A1A] border border-[#404040] rounded-lg text-white placeholder-[#B8B8B8] focus:outline-none focus:border-[#FF6B35] resize-none"
            />
            
            <button
              onClick={analyzeContent}
              disabled={analyzing || !content.trim()}
              className="px-6 py-3 bg-gradient-to-r from-[#FF6B35] to-[#FF8F65] text-white rounded-lg font-medium hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {analyzing ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Analyse en cours...
                </>
              ) : (
                <>
                  <Search className="w-4 h-4" />
                  Analyser le contenu
                </>
              )}
            </button>
          </div>
        </div>

        {analysis && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#2A2A2A] p-4 rounded-lg border border-[#404040]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[#B8B8B8] text-sm">Score Global</span>
                  <span className="text-[#FF6B35] text-lg font-bold">{analysis.score}/100</span>
                </div>
                <div className="w-full bg-[#1A1A1A] rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-[#FF6B35] to-[#FF8F65] h-2 rounded-full transition-all"
                    style={{ width: `${analysis.score}%` }}
                  />
                </div>
              </div>
              
              <div className="bg-[#2A2A2A] p-4 rounded-lg border border-[#404040]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[#B8B8B8] text-sm">Potentiel AI Overview</span>
                  <div className={`flex items-center gap-1 ${getPotentialColor(analysis.aiOverviewPotential)}`}>
                    {getPotentialIcon(analysis.aiOverviewPotential)}
                    <span className="text-sm font-medium capitalize">{analysis.aiOverviewPotential}</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#2A2A2A] p-4 rounded-lg border border-[#404040]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[#B8B8B8] text-sm">Problèmes détectés</span>
                  <span className="text-yellow-400 text-lg font-bold">{analysis.issues.length}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#2A2A2A] rounded-xl p-6 border border-[#404040]">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-400" />
                  Problèmes identifiés
                </h4>
                <ul className="space-y-2">
                  {analysis.issues.map((issue, index) => (
                    <li key={index} className="flex items-start gap-2 text-[#B8B8B8] text-sm">
                      <XCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                      {issue}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#2A2A2A] rounded-xl p-6 border border-[#404040]">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-[#00FF88]" />
                  Recommandations
                </h4>
                <ul className="space-y-2">
                  {analysis.recommendations.slice(0, 4).map((rec, index) => (
                    <li key={index} className="flex items-start gap-2 text-[#B8B8B8] text-sm">
                      <ArrowRight className="w-4 h-4 text-[#00FF88] mt-0.5 flex-shrink-0" />
                      {rec}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-[#2A2A2A] rounded-xl p-6 border border-[#404040]">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-[#FF6B35]" />
                Analyse structure contenu
              </h4>
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {Object.entries(analysis.contentStructure).map(([key, value]) => {
                  const labels = {
                    hasHeadings: 'Titres H1-H6',
                    hasFAQ: 'Section FAQ',
                    hasLists: 'Listes/Puces',
                    hasTables: 'Tableaux',
                    hasSchema: 'Schema Markup'
                  };
                  
                  return (
                    <div key={key} className="bg-[#1A1A1A] p-3 rounded-lg border border-[#404040] text-center">
                      <div className={`text-2xl mb-2 ${value ? 'text-[#00FF88]' : 'text-red-400'}`}>
                        {value ? '✓' : '✗'}
                      </div>
                      <div className="text-[#B8B8B8] text-xs">
                        {labels[key as keyof typeof labels]}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-[#2A2A2A] rounded-xl p-6 border border-[#404040]">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-[#00D4FF]" />
                Types de requêtes optimisées
              </h4>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries(analysis.queryTypes).map(([key, value]) => {
                  const labels = {
                    informational: 'Informationnelles',
                    planning: 'Planification',
                    ecommerce: 'E-commerce',
                    ymyl: 'YMYL'
                  };
                  
                  const icons = {
                    informational: '📚',
                    planning: '📋',
                    ecommerce: '🛒',
                    ymyl: '⚕️'
                  };
                  
                  return (
                    <div key={key} className={`p-3 rounded-lg border text-center ${
                      value 
                        ? 'bg-[#00FF88]/10 border-[#00FF88]/30' 
                        : 'bg-[#1A1A1A] border-[#404040]'
                    }`}>
                      <div className="text-2xl mb-1">{icons[key as keyof typeof icons]}</div>
                      <div className={`text-xs ${value ? 'text-[#00FF88]' : 'text-[#B8B8B8]'}`}>
                        {labels[key as keyof typeof labels]}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#FF6B35]/10 to-[#FF8F65]/10 rounded-xl p-6 border border-[#FF6B35]/20">
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="w-6 h-6 text-[#FF6B35]" />
                <h4 className="text-lg font-semibold text-white">Plan d'action personnalisé</h4>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-[#FF6B35] text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                  <span className="text-[#B8B8B8] text-sm">Implémenter structure FAQ avec questions conversationnelles</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-[#FF6B35] text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                  <span className="text-[#B8B8B8] text-sm">Ajouter schema markup LocalBusiness et Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-[#FF6B35] text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                  <span className="text-[#B8B8B8] text-sm">Créer tableaux comparatifs pour améliorer les réponses</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentStructureAnalyzer;
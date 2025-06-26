'use client';

import { useState, useEffect } from 'react';
import { TrendingUp, Eye, Search, ArrowUp, ArrowDown, Minus, Target, BarChart3 } from 'lucide-react';

interface AIOverviewData {
  keyword: string;
  position: string;
  status: 'present' | 'absent' | 'new';
  change: 'up' | 'down' | 'stable' | 'new';
  clicks: number;
  impressions: number;
}

const AIOverviewsTracker = () => {
  const [data, setData] = useState<AIOverviewData[]>([]);
  const [stats, setStats] = useState({
    totalKeywords: 0,
    aiOverviewPresence: 0,
    coverageRate: 0,
    newThisWeek: 0
  });

  useEffect(() => {
    const mockData: AIOverviewData[] = [
      {
        keyword: 'SEO Luxembourg',
        position: 'Link Card #1',
        status: 'present',
        change: 'up',
        clicks: 247,
        impressions: 3420
      },
      {
        keyword: 'référencement naturel Luxembourg',
        position: 'Link Card #3',
        status: 'present',
        change: 'stable',
        clicks: 156,
        impressions: 2180
      },
      {
        keyword: 'audit SEO gratuit Luxembourg',
        position: 'Link Card #2',
        status: 'new',
        change: 'new',
        clicks: 89,
        impressions: 1650
      },
      {
        keyword: 'agence SEO Luxembourg',
        position: 'N/A',
        status: 'absent',
        change: 'down',
        clicks: 0,
        impressions: 980
      },
      {
        keyword: 'SEO IA Luxembourg',
        position: 'Link Card #1',
        status: 'present',
        change: 'up',
        clicks: 198,
        impressions: 2890
      },
      {
        keyword: 'optimisation AEO Luxembourg',
        position: 'Link Card #4',
        status: 'new',
        change: 'new',
        clicks: 45,
        impressions: 780
      }
    ];

    setData(mockData);
    setStats({
      totalKeywords: mockData.length,
      aiOverviewPresence: mockData.filter(item => item.status === 'present').length + mockData.filter(item => item.status === 'new').length,
      coverageRate: Math.round(((mockData.filter(item => item.status === 'present').length + mockData.filter(item => item.status === 'new').length) / mockData.length) * 100),
      newThisWeek: mockData.filter(item => item.status === 'new').length
    });
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'present': return 'text-[#00FF88]';
      case 'new': return 'text-[#00D4FF]';
      case 'absent': return 'text-red-400';
      default: return 'text-[#B8B8B8]';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'present': return 'bg-[#00FF88]/20 text-[#00FF88]';
      case 'new': return 'bg-[#00D4FF]/20 text-[#00D4FF]';
      case 'absent': return 'bg-red-400/20 text-red-400';
      default: return 'bg-[#B8B8B8]/20 text-[#B8B8B8]';
    }
  };

  const getChangeIcon = (change: string) => {
    switch (change) {
      case 'up': return <ArrowUp className="w-3 h-3 text-[#00FF88]" />;
      case 'down': return <ArrowDown className="w-3 h-3 text-red-400" />;
      case 'new': return <Target className="w-3 h-3 text-[#00D4FF]" />;
      default: return <Minus className="w-3 h-3 text-[#B8B8B8]" />;
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-2xl p-8 border border-[#404040]">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-r from-[#FF6B35] to-[#FF8F65] rounded-xl">
          <BarChart3 className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white font-display">
            Suivi AI Overviews
          </h3>
          <p className="text-[#B8B8B8] text-sm">
            Monitoring temps réel de vos performances dans les AI Overviews
          </p>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <div className="w-2 h-2 bg-[#00FF88] rounded-full animate-pulse" />
          <span className="text-[#B8B8B8] text-sm">Live</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-[#2A2A2A] p-4 rounded-lg border border-[#404040]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[#B8B8B8] text-sm">Mots-clés suivis</span>
            <Search className="w-4 h-4 text-[#FF6B35]" />
          </div>
          <div className="text-2xl font-bold text-white">{stats.totalKeywords}</div>
          <div className="text-[#00FF88] text-xs">+3 ce mois</div>
        </div>

        <div className="bg-[#2A2A2A] p-4 rounded-lg border border-[#404040]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[#B8B8B8] text-sm">Présences AI Overview</span>
            <Eye className="w-4 h-4 text-[#00FF88]" />
          </div>
          <div className="text-2xl font-bold text-[#00FF88]">{stats.aiOverviewPresence}</div>
          <div className="text-[#00FF88] text-xs">+2 cette semaine</div>
        </div>

        <div className="bg-[#2A2A2A] p-4 rounded-lg border border-[#404040]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[#B8B8B8] text-sm">Taux de couverture</span>
            <TrendingUp className="w-4 h-4 text-[#00D4FF]" />
          </div>
          <div className="text-2xl font-bold text-[#00D4FF]">{stats.coverageRate}%</div>
          <div className="text-[#00FF88] text-xs">+5% vs mois dernier</div>
        </div>

        <div className="bg-[#2A2A2A] p-4 rounded-lg border border-[#404040]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[#B8B8B8] text-sm">Nouveaux cette semaine</span>
            <Target className="w-4 h-4 text-[#00D4FF]" />
          </div>
          <div className="text-2xl font-bold text-[#00D4FF]">{stats.newThisWeek}</div>
          <div className="text-[#00D4FF] text-xs">Excellent progrès</div>
        </div>
      </div>

      <div className="bg-[#2A2A2A] rounded-xl p-6 border border-[#404040]">
        <div className="flex items-center justify-between mb-6">
          <h4 className="text-lg font-semibold text-white flex items-center gap-2">
            <Search className="w-5 h-5 text-[#FF6B35]" />
            Performance par mot-clé
          </h4>
          <div className="text-sm text-[#B8B8B8]">
            Dernière mise à jour: il y a 5 min
          </div>
        </div>

        <div className="space-y-4">
          {data.map((item, index) => (
            <div key={index} className="bg-[#1A1A1A] p-4 rounded-lg border border-[#404040] hover:border-[#FF6B35]/30 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-white font-medium">{item.keyword}</span>
                  <div className="flex items-center gap-1">
                    {getChangeIcon(item.change)}
                  </div>
                </div>
                <div className={`px-2 py-1 rounded text-xs font-medium ${getStatusBadge(item.status)}`}>
                  {item.status === 'present' ? 'PRÉSENT' : 
                   item.status === 'new' ? 'NOUVEAU' : 'ABSENT'}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-[#B8B8B8]">Position:</span>
                  <div className={`font-medium ${getStatusColor(item.status)}`}>
                    {item.position}
                  </div>
                </div>
                <div>
                  <span className="text-[#B8B8B8]">Clics (7j):</span>
                  <div className="text-white font-medium">{item.clicks}</div>
                </div>
                <div>
                  <span className="text-[#B8B8B8]">Impressions (7j):</span>
                  <div className="text-white font-medium">{item.impressions.toLocaleString()}</div>
                </div>
                <div>
                  <span className="text-[#B8B8B8]">CTR:</span>
                  <div className="text-white font-medium">
                    {item.clicks > 0 ? ((item.clicks / item.impressions) * 100).toFixed(1) : '0.0'}%
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#2A2A2A] rounded-xl p-6 border border-[#404040]">
          <h4 className="text-lg font-semibold text-white mb-4">Tendances hebdomadaires</h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[#B8B8B8] text-sm">Nouvelles présences</span>
              <div className="flex items-center gap-2">
                <ArrowUp className="w-4 h-4 text-[#00FF88]" />
                <span className="text-[#00FF88] font-medium">+2</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#B8B8B8] text-sm">Positions améliorées</span>
              <div className="flex items-center gap-2">
                <ArrowUp className="w-4 h-4 text-[#00FF88]" />
                <span className="text-[#00FF88] font-medium">+1</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#B8B8B8] text-sm">Positions perdues</span>
              <div className="flex items-center gap-2">
                <ArrowDown className="w-4 h-4 text-red-400" />
                <span className="text-red-400 font-medium">-1</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#2A2A2A] rounded-xl p-6 border border-[#404040]">
          <h4 className="text-lg font-semibold text-white mb-4">Prochaines optimisations</h4>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#FF6B35] rounded-full" />
              <span className="text-[#B8B8B8] text-sm">Optimiser "agence SEO Luxembourg"</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#00D4FF] rounded-full" />
              <span className="text-[#B8B8B8] text-sm">Créer contenu FAQ "SEO local"</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#00FF88] rounded-full" />
              <span className="text-[#B8B8B8] text-sm">Améliorer schema LocalBusiness</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-[#FF6B35]/10 to-[#FF8F65]/10 rounded-lg border border-[#FF6B35]/20">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-[#00FF88] rounded-full animate-pulse" />
          <span className="text-[#B8B8B8] text-sm">
            <strong className="text-[#FF6B35]">Insight IA:</strong> Vos performances AI Overviews sont en progression. 
            Focus recommandé sur les requêtes "agence SEO" pour maximiser la visibilité.
          </span>
        </div>
      </div>
    </div>
  );
};

export default AIOverviewsTracker;
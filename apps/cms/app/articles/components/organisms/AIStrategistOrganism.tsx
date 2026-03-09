
import React from 'react';
import { GlassCard, Button } from 'ui';
import { Sparkles, Search, TrendingUp, BarChart2 } from 'lucide-react';
import { AIKeywordResearch } from 'data';

interface AIStrategistOrganismProps {
  topic: string;
  setTopic: (v: string) => void;
  isResearching: boolean;
  recommendations: AIKeywordResearch[];
  onResearch: () => void;
  onSelect: (rec: AIKeywordResearch) => void;
  selectedId?: string;
}

export const AIStrategistOrganism: React.FC<AIStrategistOrganismProps> = ({
  topic, setTopic, isResearching, recommendations, onResearch, onSelect, selectedId
}) => {
  return (
    <div className="space-y-6">
      <GlassCard variant="solid" className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-brand-500/10 text-brand-600">
            <Sparkles size={20} />
          </div>
          <div>
            <h3 className="text-sm font-black uppercase tracking-widest">AI Content Strategist</h3>
            <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Research keywords & generate titles</p>
          </div>
        </div>

        <div className="flex gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
            <input 
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="Enter topic (e.g. Mesin Kasir Laundry)..."
              className="w-full pl-10 pr-4 py-3 bg-zinc-100 dark:bg-black border-none rounded-xl text-sm focus:ring-2 focus:ring-brand-500 transition-all"
            />
          </div>
          <Button 
            onClick={onResearch}
            disabled={isResearching || !topic}
            className="bg-zinc-900 dark:bg-white dark:text-black font-black uppercase tracking-widest text-[10px] px-6"
          >
            {isResearching ? 'RESEARCHING...' : 'RESEARCH'}
          </Button>
        </div>
      </GlassCard>

      {recommendations.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-400">
              {selectedId ? 'Selected Recommendation' : 'Research Results'}
            </h4>
            {selectedId && (
              <button 
                onClick={() => onSelect(null as any)}
                className="text-[10px] font-black uppercase tracking-widest text-brand-600 hover:text-brand-500 transition-colors"
              >
                Show All Titles
              </button>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {recommendations
              .filter(rec => !selectedId || selectedId === rec.suggestedTitle)
              .map((rec, idx) => (
              <button
                key={idx}
                onClick={() => onSelect(rec)}
                className={`text-left p-4 rounded-2xl border transition-all duration-300 group
                  ${selectedId === rec.suggestedTitle 
                    ? 'border-brand-500 bg-brand-500/5 ring-1 ring-brand-500 md:col-span-2' 
                    : 'border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:border-brand-500/50'
                  }`}
              >
              <div className="flex justify-between items-start mb-2">
                <span className={`px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest
                  ${rec.level === 'LOW' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                  {rec.level} DIFFICULTY
                </span>
                <div className="flex items-center gap-3 text-[10px] font-bold text-zinc-400">
                  <span className="flex items-center gap-1"><TrendingUp size={12} /> {rec.volume.toLocaleString()}</span>
                  <span className="flex items-center gap-1"><BarChart2 size={12} /> {rec.difficulty}</span>
                </div>
              </div>
              <h4 className="font-bold text-sm text-zinc-900 dark:text-white mb-1 group-hover:text-brand-600 transition-colors">
                {rec.suggestedTitle}
              </h4>
              <p className="text-[10px] text-zinc-500 italic leading-relaxed">{rec.reasoning}</p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

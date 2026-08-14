import React from 'react';
import { KEY_ACHIEVEMENTS } from '../data/committeeData';
import { CheckCircle2, Server, Globe, FileSpreadsheet, UserCheck, ArrowRight, Zap, Cpu, Network, ShieldCheck } from 'lucide-react';

interface KeyAchievementsProps {
  onSelectDeliverable?: (id: number) => void;
}

export const KeyAchievements: React.FC<KeyAchievementsProps> = ({ onSelectDeliverable }) => {
  const getPillarIcon = (num: string) => {
    switch (num) {
      case '01':
        return <Server className="w-5 h-5 text-blue-500" />;
      case '02':
        return <UserCheck className="w-5 h-5 text-emerald-500" />;
      case '03':
        return <FileSpreadsheet className="w-5 h-5 text-indigo-500" />;
      case '06':
        return <Globe className="w-5 h-5 text-cyan-500" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-emerald-500" />;
    }
  };

  const getDeliverableId = (num: string) => {
    switch (num) {
      case '01': return 1;
      case '02': return 2;
      case '03': return 3;
      case '06': return 6;
      default: return 1;
    }
  };

  return (
    <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
              Key Strategic Milestones
            </span>
            <span className="text-xs text-slate-500 font-medium">
              4 Completed Core Deliverables
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Key Achievements & Digital Foundation
          </h3>
        </div>
        <div className="bg-slate-50 border border-slate-200 px-4 py-2 rounded-xl text-xs text-slate-600 max-w-md">
          <span className="font-semibold text-slate-900">Enabling Subsequent Services:</span>{' '}
          Provides foundational architecture for papers, streaming, hybrid venues, and digital archives.
        </div>
      </div>

      {/* Emphasized Narrative */}
      <div className="bg-gradient-to-r from-blue-50/80 via-indigo-50/50 to-cyan-50/80 border border-blue-100 rounded-xl p-4 sm:p-5 mb-8 text-slate-700 text-sm sm:text-base leading-relaxed">
        <p className="font-medium text-slate-900 mb-1 flex items-center gap-2">
          <Zap className="w-4 h-4 text-blue-600 shrink-0" />
          Core Foundation Summary:
        </p>
        <p className="text-slate-700">
          {KEY_ACHIEVEMENTS.summary}
        </p>
      </div>

      {/* 4 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {KEY_ACHIEVEMENTS.pillars.map((pillar) => (
          <div
            key={pillar.id}
            onClick={() => onSelectDeliverable && onSelectDeliverable(getDeliverableId(pillar.num))}
            className="group relative bg-slate-50/80 hover:bg-white border border-slate-200 hover:border-blue-400/80 rounded-xl p-4 sm:p-5 transition-all duration-200 hover:shadow-md cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 shadow-sm flex items-center justify-center group-hover:scale-105 transition-transform">
                  {getPillarIcon(pillar.num)}
                </div>
                <span className="text-xs font-mono font-bold text-slate-400">
                  #{pillar.num}
                </span>
              </div>
              <h4 className="font-bold text-slate-900 text-base mb-1.5 group-hover:text-blue-600 transition-colors">
                {pillar.title}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {pillar.desc}
              </p>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-slate-200/80 text-xs">
              <span className="font-semibold text-emerald-700 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                {pillar.status}
              </span>
              <span className="text-blue-600 font-medium group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
                Inspect <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Integrated Downstream Services Capability Grid */}
      <div className="bg-slate-900 text-white rounded-xl p-5 sm:p-6 border border-slate-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Network className="w-4 h-4 text-cyan-400" />
            <h4 className="text-sm font-bold text-white tracking-wide uppercase">
              Integrated Subsequent Services Enabled by Foundation
            </h4>
          </div>
          <span className="text-xs text-slate-400">
            Readiness Phase: August–November 2026
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {KEY_ACHIEVEMENTS.foundationCapabilities.map((cap, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2.5 bg-slate-800/80 border border-slate-700/70 rounded-lg px-3.5 py-2.5 text-xs text-slate-200"
            >
              <div className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
              <span>{cap}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

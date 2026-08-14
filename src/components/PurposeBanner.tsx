import React from 'react';
import { Target, CheckCircle2, Clock, Calendar, ArrowRight, ShieldCheck, Sparkles, Database, Globe } from 'lucide-react';
import { EXECUTIVE_PURPOSE } from '../data/committeeData';

interface PurposeBannerProps {
  onExploreDeliverables: () => void;
  onViewPriorities: () => void;
}

export const PurposeBanner: React.FC<PurposeBannerProps> = ({
  onExploreDeliverables,
  onViewPriorities
}) => {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-blue-900/50 shadow-xl relative overflow-hidden">
      {/* Subtle decorative mesh */}
      <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 -mb-10 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        {/* Section Tag */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-400/30 tracking-wide uppercase">
            <Target className="w-3.5 h-3.5 text-blue-400" />
            Executive Purpose & Mandate
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-950/70 text-emerald-300 border border-emerald-800">
            <Clock className="w-3.5 h-3.5 text-emerald-400" />
            Status as of August 2026
          </span>
        </div>

        {/* Purpose Headline */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white mb-3">
          ICT and Services Committee – Progress on COMSTEDA 23 Preparation
        </h2>

        {/* Purpose Statement Box */}
        <div className="bg-slate-800/80 border-l-4 border-blue-500 p-4 rounded-r-xl mb-6 text-slate-200 text-sm sm:text-base leading-relaxed">
          <p className="font-medium text-slate-100 mb-1">
            Core Mandate & Purpose:
          </p>
          <p className="text-slate-300">
            {EXECUTIVE_PURPOSE.mandate}
          </p>
        </div>

        {/* Narrative Summary */}
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
          <span className="font-semibold text-white">Status as of August 2026: </span>
          {EXECUTIVE_PURPOSE.statusSummary}
        </p>

        {/* Key Metrics / Snapshot Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6">
          <div className="bg-slate-800/60 border border-slate-700/80 rounded-xl p-3.5 hover:border-emerald-500/40 transition-colors">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
              <span>Completed</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-emerald-400 font-mono">4</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Key activities live</div>
          </div>

          <div className="bg-slate-800/60 border border-slate-700/80 rounded-xl p-3.5 hover:border-amber-500/40 transition-colors">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
              <span>Ongoing / Pending</span>
              <Clock className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-amber-400 font-mono">2</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Keynotes & Payment</div>
          </div>

          <div className="bg-slate-800/60 border border-slate-700/80 rounded-xl p-3.5 hover:border-blue-500/40 transition-colors">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
              <span>Planned Actions</span>
              <Calendar className="w-4 h-4 text-blue-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-blue-300 font-mono">17</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Aug.–Nov. 2026 plan</div>
          </div>

          <div className="bg-slate-800/60 border border-slate-700/80 rounded-xl p-3.5 hover:border-cyan-500/40 transition-colors">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
              <span>Digital Foundation</span>
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-cyan-300 font-mono">100%</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Core systems active</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-1">
          <button
            id="btn-view-completed-deliverables"
            onClick={onExploreDeliverables}
            className="flex items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-md shadow-emerald-900/30"
          >
            <CheckCircle2 className="w-4 h-4" />
            Inspect 4 Completed Deliverables
          </button>

          <button
            id="btn-view-priority-activities"
            onClick={onViewPriorities}
            className="flex items-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 rounded-xl text-xs sm:text-sm font-semibold transition-all"
          >
            <span>Next 9 Priority Activities</span>
            <ArrowRight className="w-4 h-4 text-blue-400" />
          </button>
        </div>
      </div>
    </section>
  );
};

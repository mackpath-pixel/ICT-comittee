import React from 'react';
import { Layers, Calendar, CheckCircle2, FileText, Sparkles, Download, Bell, Activity } from 'lucide-react';

interface HeaderProps {
  activeTab: 'report' | 'agenda' | 'systems';
  setActiveTab: (tab: 'report' | 'agenda' | 'systems') => void;
  onPrintReport: () => void;
  savedCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onPrintReport,
  savedCount
}) => {
  return (
    <header className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-40 shadow-lg">
      {/* Top Notification / Briefing Strip */}
      <div className="bg-blue-950/80 border-b border-blue-900/60 px-4 py-1.5 text-xs text-blue-200 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 font-semibold text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-2 py-0.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            Status: August 2026
          </span>
          <span className="hidden sm:inline text-slate-400">|</span>
          <span className="font-medium text-slate-200">
            ICT & Services Committee • Implementation of Revised COMSTEDA 23 Action Plan
          </span>
        </div>
        <div className="flex items-center gap-3 text-slate-300">
          <span className="bg-blue-900/60 px-2 py-0.5 rounded text-[11px] font-mono text-blue-300">
            4 of 23 Activities Completed (17.4%)
          </span>
          <span className="text-emerald-300 font-medium text-[11px] flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Digital Foundation Active
          </span>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 p-0.5 flex items-center justify-center shadow-md shadow-blue-500/20">
            <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
              <Layers className="w-5 h-5 text-cyan-400" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg sm:text-xl font-bold tracking-tight text-white flex items-center gap-2">
                COMSTEDA 23
                <span className="text-xs uppercase px-2 py-0.5 rounded font-mono font-medium bg-blue-500/20 text-blue-300 border border-blue-400/30">
                  ICT & Services
                </span>
              </h1>
            </div>
            <p className="text-xs text-slate-400 line-clamp-1">
              Progress on Conference Preparation & Real-Time Attendee Agenda Portal
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
          <nav className="flex items-center bg-slate-800/90 p-1 rounded-xl border border-slate-700/80 shadow-inner">
            <button
              id="tab-committee-report"
              onClick={() => setActiveTab('report')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                activeTab === 'report'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              Committee Progress Report
            </button>

            <button
              id="tab-attendee-agenda"
              onClick={() => setActiveTab('agenda')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap relative ${
                activeTab === 'agenda'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
              }`}
            >
              <Calendar className="w-3.5 h-3.5 text-cyan-400" />
              <span>Real-Time Attendee Agenda</span>
              {savedCount > 0 && (
                <span className="ml-1 px-1.5 py-0.2 bg-amber-500 text-slate-950 font-bold rounded-full text-[10px]">
                  {savedCount}
                </span>
              )}
            </button>

            <button
              id="tab-digital-systems"
              onClick={() => setActiveTab('systems')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                activeTab === 'systems'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
              }`}
            >
              <Activity className="w-3.5 h-3.5 text-emerald-400" />
              Deliverables & Systems Lab
            </button>
          </nav>

          {/* Quick Print/Export Action */}
          <button
            id="btn-print-report"
            onClick={onPrintReport}
            title="Print or Export Executive Progress Briefing"
            className="flex items-center gap-1.5 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 rounded-xl text-xs font-medium transition-all shrink-0"
          >
            <Download className="w-3.5 h-3.5 text-blue-400" />
            <span className="hidden sm:inline">Export Report</span>
          </button>
        </div>
      </div>
    </header>
  );
};

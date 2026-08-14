import React, { useState } from 'react';
import { COMPLETED_DELIVERABLES } from '../data/committeeData';
import { CheckCircle2, Server, UserCheck, FileSpreadsheet, Globe, ArrowRight, ExternalLink, ShieldCheck, Cpu, Code2, Terminal } from 'lucide-react';

interface CompletedDeliverablesProps {
  onOpenSimulator?: (tool: 'registration' | 'abstract' | 'website') => void;
}

export const CompletedDeliverables: React.FC<CompletedDeliverablesProps> = ({ onOpenSimulator }) => {
  const [activeDeliverableId, setActiveDeliverableId] = useState<number>(1);

  const activeDeliverable = COMPLETED_DELIVERABLES.find(d => d.id === activeDeliverableId) || COMPLETED_DELIVERABLES[0];

  const getDeliverableIcon = (id: number) => {
    switch (id) {
      case 1:
        return <Server className="w-5 h-5 text-blue-600" />;
      case 2:
        return <UserCheck className="w-5 h-5 text-emerald-600" />;
      case 3:
        return <FileSpreadsheet className="w-5 h-5 text-indigo-600" />;
      case 6:
        return <Globe className="w-5 h-5 text-cyan-600" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
              Completed Deliverables (4/4 Core Foundation)
            </span>
            <span className="text-xs text-slate-500 font-mono">
              Ready for Operational Integration
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Detailed Deliverables & System Architecture
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Deep-dive into the four established digital touchpoints powering COMSTEDA 23.
          </p>
        </div>

        {/* Deliverable Selector Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 bg-slate-100/80 p-1.5 rounded-xl border border-slate-200">
          {COMPLETED_DELIVERABLES.map((del) => (
            <button
              key={del.id}
              onClick={() => setActiveDeliverableId(del.id)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeDeliverableId === del.id
                  ? 'bg-white text-slate-900 shadow-xs border border-slate-200/80'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
              }`}
            >
              {getDeliverableIcon(del.id)}
              <span>{del.numberRef}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Selected Deliverable Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Specifications & Narrative */}
        <div className="lg:col-span-7 space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center shadow-sm">
              {getDeliverableIcon(activeDeliverable.id)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider">
                  {activeDeliverable.numberRef}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  {activeDeliverable.completionDate}
                </span>
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-slate-900">
                {activeDeliverable.title}
              </h4>
            </div>
          </div>

          {/* Deliverable Summary */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 text-slate-700 text-xs sm:text-sm leading-relaxed">
            <p className="font-semibold text-slate-900 mb-1">
              Deliverable Summary:
            </p>
            <p>{activeDeliverable.summary}</p>
          </div>

          {/* Key Outputs List */}
          <div>
            <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">
              Verified Technical Outputs & Deliverables:
            </h5>
            <ul className="space-y-2">
              {activeDeliverable.keyOutputs.map((out, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 bg-white border border-slate-200 rounded-lg p-3 text-xs sm:text-sm text-slate-700 hover:border-blue-300 transition-colors"
                >
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>{out}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: System Specifications & Live Interactive Verification */}
        <div className="lg:col-span-5 bg-slate-900 text-white rounded-xl p-5 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-cyan-400" />
              <h5 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                Operational System Architecture
              </h5>
            </div>
            <span className="text-[11px] text-emerald-400 font-mono flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Verified Active
            </span>
          </div>

          {/* System Spec Matrix */}
          <div className="space-y-2.5">
            {activeDeliverable.systemSpecs.map((spec, i) => (
              <div
                key={i}
                className="flex items-center justify-between bg-slate-800/80 border border-slate-700/60 rounded-lg px-3.5 py-2.5 text-xs"
              >
                <span className="text-slate-400">{spec.label}</span>
                <span className="font-mono font-medium text-cyan-300 text-right">{spec.value}</span>
              </div>
            ))}
          </div>

          {/* Interactive Inspection Terminal / Action */}
          <div className="pt-3 border-t border-slate-800">
            <div className="bg-slate-950 rounded-lg p-3 border border-slate-800 font-mono text-[11px] text-slate-300 space-y-1 mb-3">
              <div className="text-cyan-400 flex items-center gap-1.5">
                <Terminal className="w-3 h-3" />
                <span>COMSTEDA-23://systems/status</span>
              </div>
              <div className="text-slate-400">
                [OK] Health check passed for {activeDeliverable.numberRef}
              </div>
              <div className="text-emerald-400">
                [READY] Interfaces online and routed to committee database
              </div>
            </div>

            {onOpenSimulator && (
              <div className="flex gap-2">
                {activeDeliverable.id === 2 && (
                  <button
                    onClick={() => onOpenSimulator('registration')}
                    className="w-full flex items-center justify-center gap-2 px-3.5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold transition-all shadow-md"
                  >
                    <span>Test Live Registration & Pass Issuance</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}

                {activeDeliverable.id === 3 && (
                  <button
                    onClick={() => onOpenSimulator('abstract')}
                    className="w-full flex items-center justify-center gap-2 px-3.5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold transition-all shadow-md"
                  >
                    <span>Test Live Abstract Submission Portal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}

                {activeDeliverable.id === 6 && (
                  <button
                    onClick={() => onOpenSimulator('website')}
                    className="w-full flex items-center justify-center gap-2 px-3.5 py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg text-xs font-semibold transition-all shadow-md"
                  >
                    <span>Inspect Public Website Information Hub</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                )}

                {activeDeliverable.id === 1 && (
                  <div className="w-full text-center py-2 text-xs text-slate-400 bg-slate-800/60 rounded-lg">
                    ICT System Architecture Baseline Approved
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

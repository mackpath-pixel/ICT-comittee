import React, { useState } from 'react';
import { NEXT_PRIORITIES } from '../data/committeeData';
import { PriorityActivity } from '../types';
import { AlertCircle, Clock, CheckSquare, Calendar, ChevronRight, Users, ShieldAlert, ArrowRight, Sparkles, Filter } from 'lucide-react';

export const NextPriorityRoadmap: React.FC = () => {
  const [selectedPriority, setSelectedPriority] = useState<PriorityActivity | null>(NEXT_PRIORITIES[0]);
  const [filterLevel, setFilterLevel] = useState<'all' | 'Critical' | 'High' | 'Medium'>('all');

  const filteredPriorities = NEXT_PRIORITIES.filter(p => {
    if (filterLevel === 'all') return true;
    return p.priorityLevel === filterLevel;
  });

  const getPriorityBadge = (level: string) => {
    switch (level) {
      case 'Critical':
        return (
          <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-rose-100 text-rose-800 border border-rose-200">
            Critical
          </span>
        );
      case 'High':
        return (
          <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-amber-100 text-amber-800 border border-amber-200">
            High Priority
          </span>
        );
      default:
        return (
          <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-blue-100 text-blue-800 border border-blue-200">
            Medium
          </span>
        );
    }
  };

  return (
    <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 border border-amber-200">
              Immediate Action Pipeline
            </span>
            <span className="text-xs text-slate-500 font-mono">
              9 Priority Activities
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Next Priority Activities & Implementation Roadmap
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Key ongoing and upcoming operational work streams requiring immediate committee coordination.
          </p>
        </div>

        {/* Priority Filter */}
        <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs">
          <button
            onClick={() => setFilterLevel('all')}
            className={`px-3 py-1 rounded-lg font-medium transition-all ${
              filterLevel === 'all' ? 'bg-white text-slate-900 shadow-xs font-semibold' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            All 9 Items
          </button>
          <button
            onClick={() => setFilterLevel('Critical')}
            className={`px-3 py-1 rounded-lg font-medium transition-all ${
              filterLevel === 'Critical' ? 'bg-rose-600 text-white shadow-xs font-semibold' : 'text-rose-700 hover:bg-rose-50'
            }`}
          >
            Critical
          </button>
          <button
            onClick={() => setFilterLevel('High')}
            className={`px-3 py-1 rounded-lg font-medium transition-all ${
              filterLevel === 'High' ? 'bg-amber-600 text-white shadow-xs font-semibold' : 'text-amber-700 hover:bg-amber-50'
            }`}
          >
            High
          </button>
        </div>
      </div>

      {/* 2-Column Layout: Priority List + Detail Action Plan */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: 9 Priority Items List */}
        <div className="lg:col-span-5 space-y-2.5 max-h-[560px] overflow-y-auto pr-1">
          {filteredPriorities.map((item, index) => {
            const isSelected = selectedPriority?.name === item.name;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedPriority(item)}
                className={`p-3.5 sm:p-4 rounded-xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-blue-50/70 border-blue-400 shadow-xs'
                    : 'bg-slate-50/60 hover:bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="font-mono text-xs font-bold text-slate-400">
                    → Priority #{index + 1}
                  </span>
                  {getPriorityBadge(item.priorityLevel)}
                </div>

                <h4 className={`text-sm font-bold leading-snug mb-1 ${isSelected ? 'text-blue-900' : 'text-slate-800'}`}>
                  {item.name}
                </h4>

                <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    {item.period}
                  </span>
                  <span className={`text-[11px] font-medium ${
                    item.status === 'Ongoing/Pending' ? 'text-amber-600' : 'text-slate-500'
                  }`}>
                    {item.status}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Selected Priority Detailed Action Checklist & Ownership */}
        {selectedPriority && (
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-5">
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-200">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  {getPriorityBadge(selectedPriority.priorityLevel)}
                  <span className="text-xs text-slate-500 font-medium">
                    Timeline: {selectedPriority.period}
                  </span>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-slate-900">
                  {selectedPriority.name}
                </h4>
              </div>
              <div className="text-right">
                <span className="text-[11px] text-slate-500 block">Status:</span>
                <span className="text-xs font-semibold px-2 py-0.5 bg-amber-100 text-amber-800 rounded border border-amber-200">
                  {selectedPriority.status}
                </span>
              </div>
            </div>

            {/* Scope / Objective */}
            <div>
              <h5 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                Activity Objective & Deliverable Scope:
              </h5>
              <p className="text-xs sm:text-sm text-slate-700 bg-white p-3.5 rounded-xl border border-slate-200 leading-relaxed">
                {selectedPriority.description}
              </p>
            </div>

            {/* Action Items Checklist */}
            <div>
              <h5 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2 flex items-center justify-between">
                <span>Immediate Operational Action Items:</span>
                <span className="text-slate-500 text-[11px] font-normal">
                  {selectedPriority.actionItems.length} items to complete
                </span>
              </h5>
              <div className="space-y-2">
                {selectedPriority.actionItems.map((action, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 bg-white p-3 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors"
                  >
                    <CheckSquare className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700">{action}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Lead Unit */}
            <div className="flex items-center justify-between bg-blue-50/80 border border-blue-200/80 rounded-xl p-3 text-xs">
              <div className="flex items-center gap-2 text-slate-700">
                <Users className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="font-semibold text-slate-900">Lead Responsible Unit:</span>
                <span className="text-blue-900 font-medium">{selectedPriority.leadUnit}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

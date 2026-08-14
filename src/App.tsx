/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { PurposeBanner } from './components/PurposeBanner';
import { KeyAchievements } from './components/KeyAchievements';
import { ActivityMatrixTable } from './components/ActivityMatrixTable';
import { CompletedDeliverables } from './components/CompletedDeliverables';
import { NextPriorityRoadmap } from './components/NextPriorityRoadmap';
import { AttendeeAgendaPortal } from './components/AttendeeAgendaPortal';
import { DigitalSystemsLab } from './components/DigitalSystemsLab';
import { PrintableReportModal } from './components/PrintableReportModal';
import { Layers, Calendar, CheckCircle2, ShieldCheck, Mail, Globe, Sparkles, ArrowUp } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'report' | 'agenda' | 'systems'>('report');
  const [savedSessionIds, setSavedSessionIds] = useState<string[]>(['ses-101', 'ses-201']);
  const [showPrintModal, setShowPrintModal] = useState(false);
  const [systemsLabInitialSubTab, setSystemsLabInitialSubTab] = useState<'registration' | 'abstract' | 'payment' | 'website'>('registration');

  // Load saved bookmarks from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('comsteda23_saved_sessions');
      if (stored) {
        setSavedSessionIds(JSON.parse(stored));
      }
    } catch (e) {
      console.warn('Could not read bookmarks from localStorage');
    }
  }, []);

  const handleToggleBookmark = (sessionId: string) => {
    setSavedSessionIds(prev => {
      const updated = prev.includes(sessionId)
        ? prev.filter(id => id !== sessionId)
        : [...prev, sessionId];
      try {
        localStorage.setItem('comsteda23_saved_sessions', JSON.stringify(updated));
      } catch (e) {
        console.warn('Could not save bookmarks');
      }
      return updated;
    });
  };

  const handleOpenSimulator = (tool: 'registration' | 'abstract' | 'website') => {
    setSystemsLabInitialSubTab(tool);
    setActiveTab('systems');
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-100/70 text-slate-800 font-sans flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Header Bar */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onPrintReport={() => setShowPrintModal(true)}
        savedCount={savedSessionIds.length}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8">
        {/* VIEW 1: Committee Progress Report */}
        {activeTab === 'report' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* 1. Purpose Banner */}
            <PurposeBanner
              onExploreDeliverables={() => scrollToSection('section-completed-deliverables')}
              onViewPriorities={() => scrollToSection('section-priority-roadmap')}
            />

            {/* 2. Key Achievements & Digital Foundation */}
            <KeyAchievements
              onSelectDeliverable={(id) => {
                scrollToSection('section-completed-deliverables');
              }}
            />

            {/* 3. Action Plan Implementation Matrix (Activities 1 to 23) */}
            <div id="section-activity-matrix">
              <ActivityMatrixTable />
            </div>

            {/* 4. Completed Deliverables Deep-Dive */}
            <div id="section-completed-deliverables">
              <CompletedDeliverables onOpenSimulator={handleOpenSimulator} />
            </div>

            {/* 5. Next Priority Activities (Aug.–Nov. 2026) */}
            <div id="section-priority-roadmap">
              <NextPriorityRoadmap />
            </div>
          </div>
        )}

        {/* VIEW 2: Real-Time Attendee Agenda */}
        {activeTab === 'agenda' && (
          <div className="animate-in fade-in duration-200">
            <AttendeeAgendaPortal
              savedSessionIds={savedSessionIds}
              onToggleBookmark={handleToggleBookmark}
            />
          </div>
        )}

        {/* VIEW 3: Digital Systems & Verification Lab */}
        {activeTab === 'systems' && (
          <div className="animate-in fade-in duration-200">
            <DigitalSystemsLab initialSubTab={systemsLabInitialSubTab} />
          </div>
        )}
      </main>

      {/* Executive Briefing PDF / Print Modal */}
      {showPrintModal && (
        <PrintableReportModal onClose={() => setShowPrintModal(false)} />
      )}

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 py-8 mt-12 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-blue-600/30 border border-blue-500/40 flex items-center justify-center text-blue-400 font-bold">
              C23
            </div>
            <div>
              <div className="font-semibold text-slate-200">
                COMSTEDA 23 • ICT and Services Committee
              </div>
              <div className="text-[11px] text-slate-500">
                Status as of August 2026 • Revised Action Plan Execution
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <button
              onClick={() => {
                setActiveTab('agenda');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-cyan-400 transition-colors"
            >
              Attendee Agenda Hub
            </button>
            <span>•</span>
            <button
              onClick={() => {
                setActiveTab('systems');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-emerald-400 transition-colors"
            >
              Systems Lab
            </button>
            <span>•</span>
            <button
              onClick={() => setShowPrintModal(true)}
              className="hover:text-blue-400 transition-colors"
            >
              Export Report PDF
            </button>
          </div>

          <div className="text-slate-500 text-[11px] font-mono">
            Digital Foundation Active (Activities 1, 2, 3, 6)
          </div>
        </div>
      </footer>
    </div>
  );
}

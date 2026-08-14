import React from 'react';
import { ALL_ACTIVITIES, COMPLETED_DELIVERABLES, NEXT_PRIORITIES, EXECUTIVE_PURPOSE, KEY_ACHIEVEMENTS } from '../data/committeeData';
import { Printer, Download, X, CheckCircle2, Clock, ShieldCheck, FileText } from 'lucide-react';

interface PrintableReportModalProps {
  onClose: () => void;
}

export const PrintableReportModal: React.FC<PrintableReportModalProps> = ({ onClose }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-4xl w-full p-6 sm:p-10 shadow-2xl border border-slate-200 my-8 space-y-6 max-h-[92vh] overflow-y-auto">
        {/* Modal Controls Bar (Hidden during window.print) */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 print:hidden">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-600" />
            <span className="font-bold text-slate-900 text-sm">
              Official Committee Executive Briefing (August 2026)
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold shadow-xs"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Document Body */}
        <div className="space-y-6 text-slate-800 text-xs sm:text-sm leading-relaxed font-sans print:text-black">
          {/* Header */}
          <div className="border-b-2 border-slate-900 pb-4">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-slate-900">
                  COMSTEDA 23 • ICT and Services Committee
                </h1>
                <h2 className="text-sm font-semibold text-slate-600">
                  Progress on COMSTEDA Preparation – Status as of August 2026
                </h2>
              </div>
              <div className="text-right text-xs">
                <div className="font-mono font-bold text-blue-700">REPORT NO: ICT/COM23/2026-08</div>
                <div className="text-slate-500">Date: August 2026</div>
              </div>
            </div>
          </div>

          {/* 1. Purpose */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold uppercase text-slate-900 border-b border-slate-200 pb-1">
              1. Purpose of the Briefing
            </h3>
            <p className="text-slate-700">
              {EXECUTIVE_PURPOSE.mandate}
            </p>
            <p className="text-slate-700 font-medium">
              <span className="font-bold">Current Standing: </span>
              {EXECUTIVE_PURPOSE.statusSummary}
            </p>
          </div>

          {/* 2. Key Achievements & Digital Foundation */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold uppercase text-slate-900 border-b border-slate-200 pb-1">
              2. Key Achievements & Digital Foundation
            </h3>
            <p className="text-slate-700">
              {KEY_ACHIEVEMENTS.summary}
            </p>
          </div>

          {/* 3. Completed Deliverables Table */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold uppercase text-slate-900 border-b border-slate-200 pb-1">
              3. Completed Core Deliverables
            </h3>
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100 font-semibold border-b border-slate-200">
                  <tr>
                    <th className="p-2 w-12">No.</th>
                    <th className="p-2">Deliverable</th>
                    <th className="p-2">Output / Milestone</th>
                    <th className="p-2 w-28">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {COMPLETED_DELIVERABLES.map(d => (
                    <tr key={d.id}>
                      <td className="p-2 font-mono font-bold">{d.id}</td>
                      <td className="p-2 font-semibold">{d.title}</td>
                      <td className="p-2">{d.summary}</td>
                      <td className="p-2 font-semibold text-emerald-700">🟢 Completed</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 4. Action Plan Status Table (Activities 1 to 23) */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold uppercase text-slate-900 border-b border-slate-200 pb-1">
              4. Revised Action Plan Implementation Matrix (Activities 1–23)
            </h3>
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <table className="w-full text-left text-[11px]">
                <thead className="bg-slate-100 font-semibold border-b border-slate-200">
                  <tr>
                    <th className="p-1.5 w-10">No.</th>
                    <th className="p-1.5 min-w-[140px]">Activity</th>
                    <th className="p-1.5 min-w-[90px]">Planned Period</th>
                    <th className="p-1.5 min-w-[110px]">Status</th>
                    <th className="p-1.5">Output / Progress</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {ALL_ACTIVITIES.map(a => (
                    <tr key={a.id} className={a.id <= 6 ? 'bg-slate-50/60 font-medium' : ''}>
                      <td className="p-1.5 font-mono">{a.id}</td>
                      <td className="p-1.5">{a.activity}</td>
                      <td className="p-1.5">{a.plannedPeriod}</td>
                      <td className="p-1.5">{a.statusText}</td>
                      <td className="p-1.5 text-slate-600">{a.output}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 5. Immediate Priority Work Streams */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold uppercase text-slate-900 border-b border-slate-200 pb-1">
              5. Next Priority Activities (Immediate Focus: Aug.–Nov. 2026)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {NEXT_PRIORITIES.map((p, idx) => (
                <div key={p.id} className="p-2 border border-slate-200 rounded-lg bg-slate-50">
                  <div className="font-bold text-slate-900">
                    → {p.name}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Lead: {p.leadUnit} ({p.period})
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sign-off footer */}
          <div className="pt-6 mt-6 border-t-2 border-slate-300 flex justify-between text-xs text-slate-500">
            <div>Submitted by: Lead Systems Architect & ICT Committee</div>
            <div>Approved: COMSTEDA 23 General Secretariat</div>
          </div>
        </div>
      </div>
    </div>
  );
};

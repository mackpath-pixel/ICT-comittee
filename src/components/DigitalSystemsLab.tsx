import React, { useState } from 'react';
import { INITIAL_REGISTRATIONS, INITIAL_ABSTRACTS } from '../data/committeeData';
import { RegistrationRecord, AbstractSubmission } from '../types';
import {
  UserCheck,
  FileSpreadsheet,
  QrCode,
  CheckCircle2,
  AlertCircle,
  Search,
  Sparkles,
  Download,
  CreditCard,
  Building,
  Mail,
  Globe,
  PlusCircle,
  Send,
  ShieldCheck,
  Server
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface DigitalSystemsLabProps {
  initialSubTab?: 'registration' | 'abstract' | 'payment' | 'website';
}

export const DigitalSystemsLab: React.FC<DigitalSystemsLabProps> = ({ initialSubTab = 'registration' }) => {
  const [subTab, setSubTab] = useState<'registration' | 'abstract' | 'payment' | 'website'>(initialSubTab);

  // Registration Simulator State
  const [registrations, setRegistrations] = useState<RegistrationRecord[]>(INITIAL_REGISTRATIONS);
  const [regForm, setRegForm] = useState({
    fullName: '',
    email: '',
    institution: '',
    country: 'Nigeria',
    regType: 'Regular Attendee' as RegistrationRecord['regType']
  });
  const [issuedPass, setIssuedPass] = useState<RegistrationRecord | null>(INITIAL_REGISTRATIONS[0]);

  // Abstract Submission State
  const [abstracts, setAbstracts] = useState<AbstractSubmission[]>(INITIAL_ABSTRACTS);
  const [abstractForm, setAbstractForm] = useState({
    title: '',
    primaryAuthor: '',
    email: '',
    affiliation: '',
    track: 'ICT & Emerging Tech',
    abstractSummary: '',
    keywords: ''
  });
  const [lastSubmittedAbstract, setLastSubmittedAbstract] = useState<AbstractSubmission | null>(null);

  // Payment Verification State
  const [searchRegId, setSearchRegId] = useState('COM23-REG-1051');
  const [verifiedRecord, setVerifiedRecord] = useState<RegistrationRecord | null>(null);
  const [paymentActionMessage, setPaymentActionMessage] = useState<string | null>(null);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!regForm.fullName || !regForm.email) return;

    const newRecord: RegistrationRecord = {
      regId: `COM23-REG-${1050 + registrations.length + 1}`,
      fullName: regForm.fullName,
      email: regForm.email,
      institution: regForm.institution || 'Independent Delegate',
      country: regForm.country,
      regType: regForm.regType,
      status: 'Confirmed',
      dateRegistered: '2026-08-14',
      ticketCode: `PASS-${Math.floor(10000 + Math.random() * 90000)}-EXP`
    };

    setRegistrations([newRecord, ...registrations]);
    setIssuedPass(newRecord);
    setRegForm({
      fullName: '',
      email: '',
      institution: '',
      country: 'Nigeria',
      regType: 'Regular Attendee'
    });

    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleAbstractSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!abstractForm.title || !abstractForm.primaryAuthor || !abstractForm.abstractSummary) return;

    const newAbstract: AbstractSubmission = {
      abstractId: `ABS-2026-09${abstracts.length + 1}`,
      title: abstractForm.title,
      primaryAuthor: abstractForm.primaryAuthor,
      email: abstractForm.email,
      affiliation: abstractForm.affiliation,
      track: abstractForm.track,
      abstractSummary: abstractForm.abstractSummary,
      keywords: abstractForm.keywords.split(',').map(k => k.trim()).filter(Boolean),
      submissionDate: '2026-08-14',
      status: 'Received'
    };

    setAbstracts([newAbstract, ...abstracts]);
    setLastSubmittedAbstract(newAbstract);
    setAbstractForm({
      title: '',
      primaryAuthor: '',
      email: '',
      affiliation: '',
      track: 'ICT & Emerging Tech',
      abstractSummary: '',
      keywords: ''
    });

    confetti({
      particleCount: 45,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  const handleVerifyPayment = (e: React.FormEvent) => {
    e.preventDefault();
    const found = registrations.find(
      r => r.regId.toLowerCase() === searchRegId.trim().toLowerCase() ||
           r.email.toLowerCase() === searchRegId.trim().toLowerCase()
    );

    if (found) {
      setVerifiedRecord(found);
      setPaymentActionMessage(null);
    } else {
      setVerifiedRecord(null);
      setPaymentActionMessage('No registration found matching the entered ID or email.');
    }
  };

  const handleApprovePaymentInLab = (regId: string) => {
    setRegistrations(prev =>
      prev.map(r => r.regId === regId ? { ...r, status: 'Confirmed' } : r)
    );
    if (verifiedRecord && verifiedRecord.regId === regId) {
      setVerifiedRecord({ ...verifiedRecord, status: 'Confirmed' });
    }
    setPaymentActionMessage('Payment successfully verified by Joint ICT-Finance workflow. Pass active.');
    confetti({ particleCount: 30, spread: 50 });
  };

  return (
    <div className="space-y-6">
      {/* Subtab Navigation */}
      <div className="flex flex-wrap items-center gap-2 bg-slate-900 text-white p-2 rounded-2xl border border-slate-800 shadow-md">
        <button
          onClick={() => setSubTab('registration')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            subTab === 'registration'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'text-slate-300 hover:text-white hover:bg-slate-800'
          }`}
        >
          <UserCheck className="w-4 h-4 text-emerald-400" />
          <span>Activity 2: Registration & Badge Generator</span>
        </button>

        <button
          onClick={() => setSubTab('abstract')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            subTab === 'abstract'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'text-slate-300 hover:text-white hover:bg-slate-800'
          }`}
        >
          <FileSpreadsheet className="w-4 h-4 text-indigo-400" />
          <span>Activity 3: Abstract Submission System</span>
        </button>

        <button
          onClick={() => setSubTab('payment')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            subTab === 'payment'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'text-slate-300 hover:text-white hover:bg-slate-800'
          }`}
        >
          <CreditCard className="w-4 h-4 text-amber-400" />
          <span>Activity 5: Payment Verification Desk</span>
        </button>

        <button
          onClick={() => setSubTab('website')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            subTab === 'website'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'text-slate-300 hover:text-white hover:bg-slate-800'
          }`}
        >
          <Globe className="w-4 h-4 text-cyan-400" />
          <span>Activity 6: Conference Website Uptime</span>
        </button>
      </div>

      {/* Tab 1: Registration & Pass Generator */}
      {subTab === 'registration' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Registration Form */}
          <div className="lg:col-span-6 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
            <div className="border-b border-slate-100 pb-3">
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                🟢 Completed & Live System
              </span>
              <h3 className="text-lg font-bold text-slate-900 mt-1.5">
                Participant Registration System
              </h3>
              <p className="text-xs text-slate-500">
                Register a new delegate to test instant confirmation and digital attendee pass generation.
              </p>
            </div>

            <form onSubmit={handleRegister} className="space-y-3.5 text-xs sm:text-sm">
              <div>
                <label className="block font-semibold text-slate-800 mb-1">
                  Full Name & Title:
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Ngozi Eze"
                  value={regForm.fullName}
                  onChange={e => setRegForm({ ...regForm, fullName: e.target.value })}
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-800 mb-1">
                    Official Email:
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@university.edu"
                    value={regForm.email}
                    onChange={e => setRegForm({ ...regForm, email: e.target.value })}
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-800 mb-1">
                    Registration Type:
                  </label>
                  <select
                    value={regForm.regType}
                    onChange={e => setRegForm({ ...regForm, regType: e.target.value as RegistrationRecord['regType'] })}
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-700"
                  >
                    <option value="Presenter">Presenter (Paper Author)</option>
                    <option value="Regular Attendee">Regular Delegate</option>
                    <option value="Student">Student Delegate</option>
                    <option value="Committee / VIP">Committee / VIP Guest</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-800 mb-1">
                    Institution / University:
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Obafemi Awolowo University"
                    value={regForm.institution}
                    onChange={e => setRegForm({ ...regForm, institution: e.target.value })}
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-800 mb-1">
                    Country:
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Nigeria, Ghana, Kenya..."
                    value={regForm.country}
                    onChange={e => setRegForm({ ...regForm, country: e.target.value })}
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold flex items-center justify-center gap-2 transition-all shadow-md shadow-blue-500/20"
              >
                <PlusCircle className="w-4 h-4" />
                <span>Complete Registration & Issue Pass</span>
              </button>
            </form>

            {/* Recent Registrations Quick Table */}
            <div className="pt-3 border-t border-slate-100">
              <span className="text-xs font-bold text-slate-700 block mb-2">
                Live Registration Records in Database ({registrations.length}):
              </span>
              <div className="space-y-1.5 max-h-40 overflow-y-auto pr-1 text-xs">
                {registrations.map(r => (
                  <div
                    key={r.regId}
                    onClick={() => setIssuedPass(r)}
                    className={`flex items-center justify-between p-2 rounded-lg border cursor-pointer transition-colors ${
                      issuedPass?.regId === r.regId
                        ? 'bg-blue-50 border-blue-300'
                        : 'bg-slate-50 hover:bg-slate-100 border-slate-200'
                    }`}
                  >
                    <div>
                      <span className="font-semibold text-slate-900">{r.fullName}</span>
                      <span className="text-slate-500 text-[11px] block">{r.regId} • {r.regType}</span>
                    </div>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                      r.status === 'Confirmed' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                    }`}>
                      {r.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Digital Badge / Pass Preview */}
          <div className="lg:col-span-6 space-y-4">
            {issuedPass ? (
              <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-2xl p-6 border border-blue-800 shadow-xl relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 border-b border-blue-800/80 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-sm">
                      C23
                    </div>
                    <div>
                      <h4 className="text-sm font-bold tracking-tight">COMSTEDA 23 OFFICIAL PASS</h4>
                      <p className="text-[10px] text-blue-300">ICT Committee Electronic Credential</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                    {issuedPass.status}
                  </span>
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="text-[11px] text-blue-300 uppercase tracking-wider block">Delegate Name</span>
                    <div className="text-xl font-bold text-white">{issuedPass.fullName}</div>
                    <div className="text-xs text-slate-300">{issuedPass.institution} • {issuedPass.country}</div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 bg-slate-800/80 p-3 rounded-xl border border-slate-700/80 text-xs">
                    <div>
                      <span className="text-slate-400 text-[10px] block">Registration ID:</span>
                      <span className="font-mono font-bold text-cyan-300">{issuedPass.regId}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 text-[10px] block">Pass Category:</span>
                      <span className="font-semibold text-amber-300">{issuedPass.regType}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 text-[10px] block">Date Issued:</span>
                      <span className="text-slate-200">{issuedPass.dateRegistered}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 text-[10px] block">Access Security:</span>
                      <span className="text-emerald-400 font-mono">ALL HALLS ACCESS</span>
                    </div>
                  </div>

                  {/* QR Code Simulation */}
                  <div className="flex items-center justify-between bg-white text-slate-900 p-4 rounded-xl">
                    <div className="space-y-1">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-700">Digital Gate Verification</div>
                      <div className="text-[11px] font-mono text-slate-500">{issuedPass.ticketCode}</div>
                      <div className="text-[10px] text-emerald-700 font-medium">✓ Cryptographically signed by ICT Secretariat</div>
                    </div>
                    <div className="w-16 h-16 bg-slate-100 border border-slate-300 rounded-lg flex items-center justify-center p-1">
                      <QrCode className="w-14 h-14 text-slate-900" />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-slate-100 rounded-2xl p-10 text-center text-slate-500 text-sm">
                Select or register a participant to view their digital badge pass.
              </div>
            )}
          </div>
        </div>
      )}

      {/* Tab 2: Abstract Submission System */}
      {subTab === 'abstract' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
            <div className="border-b border-slate-100 pb-3">
              <span className="text-xs font-semibold text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-200">
                🟢 Completed & Tested Pipeline
              </span>
              <h3 className="text-lg font-bold text-slate-900 mt-1.5">
                Online Abstract Submission System
              </h3>
              <p className="text-xs text-slate-500">
                Test manuscript submission workflow across 6 thematic scientific tracks with peer review routing.
              </p>
            </div>

            <form onSubmit={handleAbstractSubmit} className="space-y-3.5 text-xs sm:text-sm">
              <div>
                <label className="block font-semibold text-slate-800 mb-1">
                  Manuscript / Abstract Title:
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Autonomous LoRa Sensor Networks for Watershed Quality Telemetry"
                  value={abstractForm.title}
                  onChange={e => setAbstractForm({ ...abstractForm, title: e.target.value })}
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-800 mb-1">
                    Primary Author:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Prof. Oluwaseun Davies"
                    value={abstractForm.primaryAuthor}
                    onChange={e => setAbstractForm({ ...abstractForm, primaryAuthor: e.target.value })}
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-800 mb-1">
                    Primary Author Email:
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="author@institution.edu"
                    value={abstractForm.email}
                    onChange={e => setAbstractForm({ ...abstractForm, email: e.target.value })}
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-800 mb-1">
                    Thematic Track:
                  </label>
                  <select
                    value={abstractForm.track}
                    onChange={e => setAbstractForm({ ...abstractForm, track: e.target.value })}
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-slate-700"
                  >
                    <option value="ICT & Emerging Tech">ICT & Emerging Tech</option>
                    <option value="Sustainable Science">Sustainable Science & Green Tech</option>
                    <option value="Digital Transformation">Digital Transformation & Policy</option>
                    <option value="Energy & Environment">Energy, Grids & Environment</option>
                    <option value="Health Informatics">Health Informatics & Telemedicine</option>
                    <option value="Science Education">Science & Technological Education</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-800 mb-1">
                    Keywords (comma separated):
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. IoT, Sensors, LoRaWAN, Water"
                    value={abstractForm.keywords}
                    onChange={e => setAbstractForm({ ...abstractForm, keywords: e.target.value })}
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="font-semibold text-slate-800">
                    Abstract Summary (Max 300 words):
                  </label>
                  <span className="text-[11px] text-slate-400 font-mono">
                    {abstractForm.abstractSummary.split(/\s+/).filter(Boolean).length} words
                  </span>
                </div>
                <textarea
                  rows={4}
                  required
                  placeholder="Outline background, methodological approach, empirical findings, and scientific contribution..."
                  value={abstractForm.abstractSummary}
                  onChange={e => setAbstractForm({ ...abstractForm, abstractSummary: e.target.value })}
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold flex items-center justify-center gap-2 transition-all shadow-md shadow-indigo-500/20"
              >
                <Send className="w-4 h-4" />
                <span>Submit Abstract to Reviewer Desk</span>
              </button>
            </form>
          </div>

          {/* Submissions Pipeline Status */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Reviewer Queue Pipeline
                </span>
                <span className="text-xs text-indigo-400 font-mono">{abstracts.length} Manuscripts</span>
              </div>

              <div className="space-y-3 max-h-[460px] overflow-y-auto pr-1">
                {abstracts.map(abs => (
                  <div
                    key={abs.abstractId}
                    className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-3.5 space-y-2 text-xs"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-bold text-indigo-300">{abs.abstractId}</span>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                        abs.status === 'Accepted'
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                          : abs.status === 'Under Review'
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                          : 'bg-blue-500/20 text-blue-300 border border-blue-500/40'
                      }`}>
                        {abs.status}
                      </span>
                    </div>

                    <h5 className="font-bold text-white text-xs leading-snug">
                      {abs.title}
                    </h5>

                    <div className="text-[11px] text-slate-300">
                      Author: <span className="text-slate-100 font-medium">{abs.primaryAuthor}</span> ({abs.track})
                    </div>

                    <p className="text-[11px] text-slate-400 line-clamp-2 italic bg-slate-900/60 p-2 rounded border border-slate-800">
                      "{abs.abstractSummary}"
                    </p>

                    <div className="flex flex-wrap gap-1 pt-1">
                      {abs.keywords.map((k, i) => (
                        <span key={i} className="text-[10px] bg-slate-700 text-slate-300 px-1.5 py-0.5 rounded">
                          #{k}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Payment Verification Desk */}
      {subTab === 'payment' && (
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-xs font-semibold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
              🟡 Activity 5: Ongoing Priority Activity
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-1.5">
              Joint ICT – Finance Payment Verification Workflow
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Reconciles electronic gateway payments, bank deposits, and registration passes before granting physical conference badge printing.
            </p>
          </div>

          {/* Search Lookup */}
          <form onSubmit={handleVerifyPayment} className="max-w-xl flex gap-2">
            <div className="flex-1 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Enter Registration ID (e.g. COM23-REG-1051) or email..."
                value={searchRegId}
                onChange={e => setSearchRegId(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold"
            >
              Verify Record
            </button>
          </form>

          {paymentActionMessage && (
            <div className="p-3 bg-blue-50 text-blue-900 border border-blue-200 rounded-xl text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
              <span>{paymentActionMessage}</span>
            </div>
          )}

          {verifiedRecord && (
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200">
                <div>
                  <span className="font-mono text-xs font-bold text-blue-600">{verifiedRecord.regId}</span>
                  <h4 className="text-base font-bold text-slate-900">{verifiedRecord.fullName}</h4>
                  <span className="text-xs text-slate-500">{verifiedRecord.email} • {verifiedRecord.institution}</span>
                </div>
                <div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    verifiedRecord.status === 'Confirmed'
                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                      : 'bg-amber-100 text-amber-800 border border-amber-200'
                  }`}>
                    {verifiedRecord.status}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="bg-white p-3 rounded-lg border border-slate-200">
                  <span className="text-slate-500 block text-[11px]">Ticket Category:</span>
                  <span className="font-semibold text-slate-900">{verifiedRecord.regType}</span>
                </div>
                <div className="bg-white p-3 rounded-lg border border-slate-200">
                  <span className="text-slate-500 block text-[11px]">Pass Code:</span>
                  <span className="font-mono font-semibold text-slate-900">{verifiedRecord.ticketCode}</span>
                </div>
                <div className="bg-white p-3 rounded-lg border border-slate-200">
                  <span className="text-slate-500 block text-[11px]">Payment Clearance:</span>
                  <span className="font-semibold text-slate-900">
                    {verifiedRecord.status === 'Confirmed' ? 'Cleared & Verified' : 'Awaiting Bank Match'}
                  </span>
                </div>
              </div>

              {verifiedRecord.status !== 'Confirmed' && (
                <div className="flex justify-end pt-2">
                  <button
                    onClick={() => handleApprovePaymentInLab(verifiedRecord.regId)}
                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-sm"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Approve Wire Receipt & Issue Verified Pass</span>
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Tab 4: Conference Website Uptime & Performance */}
      {subTab === 'website' && (
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs font-semibold text-cyan-800 bg-cyan-50 px-2.5 py-0.5 rounded-full border border-cyan-200">
                🟢 Activity 6: Completed & Publicly Launched
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-1.5">
                Conference Website & Public Information Hub
              </h3>
              <p className="text-xs text-slate-500">
                Official single-source-of-truth portal serving schedules, keynotes, downloads, and committee bulletins.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-mono font-bold text-emerald-700">99.98% Uptime</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
              <div className="text-xs text-slate-500 mb-1">Lighthouse Performance</div>
              <div className="text-2xl sm:text-3xl font-bold text-emerald-600 font-mono">98/100</div>
              <div className="text-[10px] text-slate-400 mt-0.5">Optimized CDN Cache</div>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
              <div className="text-xs text-slate-500 mb-1">Accessibility (a11y)</div>
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 font-mono">100%</div>
              <div className="text-[10px] text-slate-400 mt-0.5">WCAG 2.1 AA Certified</div>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
              <div className="text-xs text-slate-500 mb-1">Average Page Load</div>
              <div className="text-2xl sm:text-3xl font-bold text-cyan-600 font-mono">0.64s</div>
              <div className="text-[10px] text-slate-400 mt-0.5">Global Edge Nodes</div>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
              <div className="text-xs text-slate-500 mb-1">Active Visitors Today</div>
              <div className="text-2xl sm:text-3xl font-bold text-indigo-600 font-mono">1,842</div>
              <div className="text-[10px] text-slate-400 mt-0.5">Across 18 Countries</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

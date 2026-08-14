import React, { useState, useMemo } from 'react';
import { SAMPLE_AGENDA_SESSIONS } from '../data/committeeData';
import { AgendaSession, LiveQuestion } from '../types';
import {
  Calendar,
  Clock,
  MapPin,
  User,
  Bookmark,
  BookmarkCheck,
  MessageSquare,
  ThumbsUp,
  BarChart2,
  Search,
  Filter,
  Radio,
  Send,
  Download,
  Share2,
  Sparkles,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  X
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface AttendeeAgendaPortalProps {
  savedSessionIds: string[];
  onToggleBookmark: (sessionId: string) => void;
}

const INITIAL_QUESTIONS: LiveQuestion[] = [
  {
    id: "q-1",
    sessionId: "ses-101",
    author: "Dr. Tunde Oladipo",
    affiliation: "Covenant University",
    question: "How will regional network infrastructure handle cross-border telemetry without introducing high packet latency?",
    upvotes: 24,
    timestamp: "2 mins ago",
    isAnswered: false
  },
  {
    id: "q-2",
    sessionId: "ses-101",
    author: "Mariam Sow",
    affiliation: "West Africa Science Foundation",
    question: "Will the digital proceedings be indexed in open access repositories immediately post-conference?",
    upvotes: 18,
    timestamp: "5 mins ago",
    isAnswered: true
  },
  {
    id: "q-3",
    sessionId: "ses-103",
    author: "Eng. Patrick Mensah",
    affiliation: "KNUST Ghana",
    question: "What microcontrollers were tested for the edge anomaly detection algorithms?",
    upvotes: 9,
    timestamp: "12 mins ago",
    isAnswered: false
  }
];

export const AttendeeAgendaPortal: React.FC<AttendeeAgendaPortalProps> = ({
  savedSessionIds,
  onToggleBookmark
}) => {
  const [selectedDay, setSelectedDay] = useState<number | 'all'>(1);
  const [selectedTrack, setSelectedTrack] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showSavedOnly, setShowSavedOnly] = useState(false);
  const [expandedSessionId, setExpandedSessionId] = useState<string | null>("ses-101");
  const [activeQaSession, setActiveQaSession] = useState<AgendaSession | null>(null);
  const [activePollSession, setActivePollSession] = useState<AgendaSession | null>(null);

  // Live Q&A state
  const [questions, setQuestions] = useState<LiveQuestion[]>(INITIAL_QUESTIONS);
  const [newQuestionText, setNewQuestionText] = useState('');
  const [authorName, setAuthorName] = useState('Attendee Delegate');
  const [authorAffiliation, setAuthorAffiliation] = useState('Research Institute');

  // Live Poll state
  const [pollVotes, setPollVotes] = useState<{ [key: string]: number }>({
    'opt-1': 42,
    'opt-2': 28,
    'opt-3': 19,
    'opt-4': 11
  });
  const [userVotedOpt, setUserVotedOpt] = useState<string | null>(null);

  const tracks = useMemo(() => {
    return Array.from(new Set(SAMPLE_AGENDA_SESSIONS.map(s => s.track)));
  }, []);

  const filteredSessions = useMemo(() => {
    return SAMPLE_AGENDA_SESSIONS.filter(session => {
      const matchesDay = selectedDay === 'all' || session.day === selectedDay;
      const matchesTrack = selectedTrack === 'all' || session.track === selectedTrack;
      const matchesSearch =
        session.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        session.speaker.toLowerCase().includes(searchQuery.toLowerCase()) ||
        session.room.toLowerCase().includes(searchQuery.toLowerCase()) ||
        session.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesSaved = !showSavedOnly || savedSessionIds.includes(session.id);

      return matchesDay && matchesTrack && matchesSearch && matchesSaved;
    });
  }, [selectedDay, selectedTrack, searchQuery, showSavedOnly, savedSessionIds]);

  const handleUpvoteQuestion = (qId: string) => {
    setQuestions(prev =>
      prev.map(q => (q.id === qId ? { ...q, upvotes: q.upvotes + 1 } : q))
    );
  };

  const handlePostQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newQuestionText.trim() || !activeQaSession) return;

    const newQ: LiveQuestion = {
      id: `q-${Date.now()}`,
      sessionId: activeQaSession.id,
      author: authorName.trim() || 'Delegate',
      affiliation: authorAffiliation.trim() || 'COMSTEDA 23 Attendee',
      question: newQuestionText.trim(),
      upvotes: 1,
      timestamp: 'Just now',
      isAnswered: false
    };

    setQuestions([newQ, ...questions]);
    setNewQuestionText('');
  };

  const handleVotePoll = (optId: string) => {
    if (userVotedOpt) return;
    setUserVotedOpt(optId);
    setPollVotes(prev => ({
      ...prev,
      [optId]: (prev[optId] || 0) + 1
    }));
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.7 }
    });
  };

  const totalPollVotes: number = (Object.values(pollVotes) as number[]).reduce((a: number, b: number) => a + b, 0);

  return (
    <div className="space-y-6">
      {/* Top Interactive Banner */}
      <section className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-blue-800/80 shadow-lg relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 flex items-center gap-1.5">
                <Radio className="w-3 h-3 text-cyan-400 animate-pulse" />
                Live Conference Agenda Engine
              </span>
              <span className="text-xs text-blue-200">
                November 16–18, 2026
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white mb-2">
              Real-Time Conference Agenda & Attendee Interaction
            </h2>
            <p className="text-xs sm:text-sm text-blue-100/80 max-w-2xl leading-relaxed">
              Explore multi-track schedules, participate in live Q&A sessions, vote in interactive polls, and build your personalized attendance itinerary.
            </p>
          </div>

          {/* Quick Stats Banner */}
          <div className="flex items-center gap-3 bg-blue-950/80 border border-blue-800 p-3.5 rounded-xl self-start md:self-auto shrink-0">
            <div className="text-center px-2">
              <div className="text-lg sm:text-xl font-bold text-cyan-400 font-mono">3 Days</div>
              <div className="text-[11px] text-blue-200">Conference</div>
            </div>
            <div className="h-8 w-px bg-blue-800" />
            <div className="text-center px-2">
              <div className="text-lg sm:text-xl font-bold text-emerald-400 font-mono">5 Tracks</div>
              <div className="text-[11px] text-blue-200">Thematic Areas</div>
            </div>
            <div className="h-8 w-px bg-blue-800" />
            <div className="text-center px-2">
              <div className="text-lg sm:text-xl font-bold text-amber-400 font-mono">{savedSessionIds.length}</div>
              <div className="text-[11px] text-blue-200">My Saved</div>
            </div>
          </div>
        </div>
      </section>

      {/* Agenda Controls Bar: Day Tabs, Track Selector, Search, Bookmarks Toggle */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-sm space-y-4">
        {/* Row 1: Day Selectors */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-1 hidden sm:inline">
              Day:
            </span>
            <button
              onClick={() => setSelectedDay(1)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                selectedDay === 1
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Day 1 • Nov 16</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse ml-1" title="Plenary in session" />
            </button>

            <button
              onClick={() => setSelectedDay(2)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                selectedDay === 2
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Day 2 • Nov 17</span>
            </button>

            <button
              onClick={() => setSelectedDay(3)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                selectedDay === 3
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Day 3 • Nov 18</span>
            </button>

            <button
              onClick={() => setSelectedDay('all')}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedDay === 'all'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All 3 Days
            </button>
          </div>

          {/* Bookmarked filter toggle */}
          <button
            onClick={() => setShowSavedOnly(!showSavedOnly)}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              showSavedOnly
                ? 'bg-amber-500 text-slate-950 shadow-sm'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${showSavedOnly ? 'fill-current' : ''}`} />
            <span>My Bookmarked Sessions ({savedSessionIds.length})</span>
          </button>
        </div>

        {/* Row 2: Search & Track Filter Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
          <div className="sm:col-span-6 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search session title, speaker name, room, or topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            />
          </div>

          <div className="sm:col-span-6">
            <select
              value={selectedTrack}
              onChange={(e) => setSelectedTrack(e.target.value)}
              className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-700 font-medium"
            >
              <option value="all">All Tracks & Thematic Areas</option>
              {tracks.map((tr) => (
                <option key={tr} value={tr}>
                  {tr}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Sessions List */}
      <div className="space-y-4">
        {filteredSessions.length === 0 ? (
          <div className="bg-white rounded-2xl p-10 text-center border border-slate-200">
            <p className="text-slate-600 font-medium mb-2">No agenda sessions match your active filters.</p>
            <button
              onClick={() => {
                setSelectedDay('all');
                setSelectedTrack('all');
                setSearchQuery('');
                setShowSavedOnly(false);
              }}
              className="px-4 py-2 bg-blue-600 text-white rounded-xl text-xs font-semibold"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          filteredSessions.map((session) => {
            const isBookmarked = savedSessionIds.includes(session.id);
            const isExpanded = expandedSessionId === session.id;
            const sessionQuestions = questions.filter(q => q.sessionId === session.id);

            return (
              <div
                key={session.id}
                className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden shadow-xs hover:shadow-md ${
                  session.isLiveNow
                    ? 'border-cyan-400 ring-2 ring-cyan-400/20'
                    : isBookmarked
                    ? 'border-amber-300'
                    : 'border-slate-200/90'
                }`}
              >
                {/* Session Card Header */}
                <div className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                    <div className="flex flex-wrap items-center gap-2">
                      {session.isLiveNow && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-600 text-white animate-pulse">
                          <Radio className="w-3 h-3" />
                          LIVE SESSION NOW
                        </span>
                      )}

                      <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-200">
                        {session.track}
                      </span>

                      <span className="text-xs text-slate-500 font-medium">
                        {session.dateStr}
                      </span>
                    </div>

                    {/* Action buttons: Bookmark, Share, Q&A */}
                    <div className="flex items-center gap-1.5 self-end sm:self-auto">
                      <button
                        onClick={() => {
                          onToggleBookmark(session.id);
                          if (!isBookmarked) {
                            confetti({ particleCount: 25, spread: 40 });
                          }
                        }}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                          isBookmarked
                            ? 'bg-amber-100 text-amber-900 border border-amber-300 hover:bg-amber-200'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                        title={isBookmarked ? 'Remove from schedule' : 'Add to My Schedule'}
                      >
                        {isBookmarked ? (
                          <>
                            <BookmarkCheck className="w-3.5 h-3.5 text-amber-700" />
                            <span>Saved</span>
                          </>
                        ) : (
                          <>
                            <Bookmark className="w-3.5 h-3.5 text-slate-500" />
                            <span>Bookmark</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Title & Metadata */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 leading-snug">
                    {session.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 mb-4">
                    <span className="flex items-center gap-1.5 font-medium text-slate-800 bg-slate-100 px-2.5 py-1 rounded-lg">
                      <Clock className="w-3.5 h-3.5 text-blue-600" />
                      {session.startTime} – {session.endTime}
                    </span>

                    <span className="flex items-center gap-1.5 font-medium text-slate-700 bg-slate-100 px-2.5 py-1 rounded-lg">
                      <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                      {session.room}
                    </span>
                  </div>

                  {/* Speaker Information */}
                  <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100 mb-4">
                    {session.speakerAvatar ? (
                      <img
                        src={session.speakerAvatar}
                        alt={session.speaker}
                        referrerPolicy="no-referrer"
                        className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-xs"
                      />
                    ) : (
                      <div className="w-11 h-11 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">
                        {session.speaker[0]}
                      </div>
                    )}
                    <div>
                      <div className="text-xs font-bold text-slate-900">
                        {session.speaker}
                      </div>
                      <div className="text-[11px] text-slate-600">
                        {session.speakerRole} • <span className="text-slate-500">{session.affiliation}</span>
                      </div>
                    </div>
                  </div>

                  {/* Expandable Abstract Details */}
                  {isExpanded ? (
                    <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-700 border-t border-slate-100">
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">Session Abstract:</h4>
                        <p className="leading-relaxed bg-blue-50/40 p-3 rounded-xl border border-blue-100/60 text-slate-700">
                          {session.abstractText}
                        </p>
                      </div>

                      {/* Topic Tags */}
                      <div className="flex flex-wrap items-center gap-1.5 pt-1">
                        <span className="text-xs text-slate-500 font-medium mr-1">Tags:</span>
                        {session.tags.map((t, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-600"
                          >
                            #{t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : null}

                  {/* Interaction Footer Bar: Expand Abstract, Open Q&A, Open Poll */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-4 mt-2 border-t border-slate-100">
                    <button
                      onClick={() => setExpandedSessionId(isExpanded ? null : session.id)}
                      className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                    >
                      {isExpanded ? (
                        <>
                          Hide Session Details <ChevronUp className="w-3.5 h-3.5" />
                        </>
                      ) : (
                        <>
                          View Abstract & Tags <ChevronDown className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setActiveQaSession(session)}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-800 border border-blue-200 rounded-lg text-xs font-semibold transition-all"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-blue-600" />
                        <span>Live Q&A</span>
                        <span className="px-1.5 py-0.2 bg-blue-600 text-white rounded-full text-[10px] font-mono font-bold">
                          {sessionQuestions.length}
                        </span>
                      </button>

                      {session.pollsActive && (
                        <button
                          onClick={() => setActivePollSession(session)}
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-purple-50 hover:bg-purple-100 text-purple-800 border border-purple-200 rounded-lg text-xs font-semibold transition-all"
                        >
                          <BarChart2 className="w-3.5 h-3.5 text-purple-600" />
                          <span>Audience Poll</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Live Q&A Modal */}
      {activeQaSession && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl border border-slate-200 flex flex-col max-h-[90vh]">
            <div className="flex items-start justify-between gap-3 pb-3 border-b border-slate-100">
              <div>
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider flex items-center gap-1">
                  <MessageSquare className="w-3.5 h-3.5" /> Live Audience Q&A
                </span>
                <h3 className="text-base font-bold text-slate-900 line-clamp-1">
                  {activeQaSession.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveQaSession(null)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Questions List */}
            <div className="flex-1 overflow-y-auto py-4 space-y-3 pr-1">
              {questions.filter(q => q.sessionId === activeQaSession.id).length === 0 ? (
                <div className="text-center py-8 text-slate-500 text-xs sm:text-sm">
                  No questions yet for this session. Be the first to ask the speaker!
                </div>
              ) : (
                questions
                  .filter(q => q.sessionId === activeQaSession.id)
                  .map((q) => (
                    <div
                      key={q.id}
                      className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 space-y-2"
                    >
                      <div className="flex items-center justify-between text-xs">
                        <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                          <span>{q.author}</span>
                          <span className="text-slate-400 font-normal">({q.affiliation})</span>
                        </div>
                        <span className="text-[11px] text-slate-400">{q.timestamp}</span>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                        {q.question}
                      </p>

                      <div className="flex items-center justify-between pt-1 text-xs">
                        {q.isAnswered ? (
                          <span className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-[11px] font-semibold border border-emerald-200">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Answered live by speaker
                          </span>
                        ) : (
                          <span className="text-slate-400 text-[11px]">Pending moderation</span>
                        )}

                        <button
                          onClick={() => handleUpvoteQuestion(q.id)}
                          className="flex items-center gap-1 px-2.5 py-1 bg-white hover:bg-blue-50 text-slate-700 hover:text-blue-700 border border-slate-200 rounded-lg text-xs font-semibold transition-colors"
                        >
                          <ThumbsUp className="w-3 h-3 text-blue-600" />
                          <span>{q.upvotes}</span>
                        </button>
                      </div>
                    </div>
                  ))
              )}
            </div>

            {/* Post New Question Form */}
            <form onSubmit={handlePostQuestion} className="pt-3 border-t border-slate-100 space-y-3">
              <div className="grid grid-cols-2 gap-2 text-xs">
                <input
                  type="text"
                  placeholder="Your Name (e.g. Dr. Jane Doe)"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs"
                />
                <input
                  type="text"
                  placeholder="Institution / Affiliation"
                  value={authorAffiliation}
                  onChange={(e) => setAuthorAffiliation(e.target.value)}
                  className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs"
                />
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type your question for the speaker..."
                  value={newQuestionText}
                  onChange={(e) => setNewQuestionText(e.target.value)}
                  className="flex-1 px-3.5 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                />
                <button
                  type="submit"
                  disabled={!newQuestionText.trim()}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Live Poll Modal */}
      {activePollSession && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200">
            <div className="flex items-start justify-between gap-3 pb-3 border-b border-slate-100 mb-4">
              <div>
                <span className="text-xs font-semibold text-purple-600 uppercase tracking-wider flex items-center gap-1">
                  <BarChart2 className="w-3.5 h-3.5" /> Real-Time Plenary Poll
                </span>
                <h3 className="text-base font-bold text-slate-900">
                  Topic: Priority Telemetry Protocol for Regional Microgrids
                </h3>
              </div>
              <button
                onClick={() => setActivePollSession(null)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 mb-4">
              Which telemetry standard should the regional scientific council prioritize for national IoT grid monitoring?
            </p>

            <div className="space-y-3 mb-6">
              {[
                { id: 'opt-1', label: 'MQTT over TLS on Cellular 4G/5G' },
                { id: 'opt-2', label: 'LoRaWAN Long-Range Mesh Network' },
                { id: 'opt-3', label: 'Decentralized Peer-to-Peer WebSockets' },
                { id: 'opt-4', label: 'Low-Earth Orbit Satellite Uplinks' },
              ].map((opt) => {
                const votes = pollVotes[opt.id] || 0;
                const percentage = totalPollVotes > 0 ? Math.round((votes / totalPollVotes) * 100) : 0;
                const isSelected = userVotedOpt === opt.id;

                return (
                  <button
                    key={opt.id}
                    onClick={() => handleVotePoll(opt.id)}
                    disabled={!!userVotedOpt}
                    className={`w-full text-left p-3 rounded-xl border transition-all relative overflow-hidden ${
                      isSelected
                        ? 'border-purple-500 bg-purple-50/50'
                        : 'border-slate-200 hover:border-purple-300 bg-white'
                    }`}
                  >
                    {/* Background Progress Bar */}
                    <div
                      className="absolute inset-0 bg-purple-100/60 transition-all duration-500 pointer-events-none"
                      style={{ width: `${percentage}%` }}
                    />

                    <div className="relative z-10 flex items-center justify-between text-xs sm:text-sm">
                      <span className="font-semibold text-slate-800">{opt.label}</span>
                      <span className="font-mono font-bold text-purple-700">{percentage}% ({votes})</span>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500 pt-3 border-t border-slate-100">
              <span>Total Votes: {totalPollVotes} delegates</span>
              <button
                onClick={() => setActivePollSession(null)}
                className="px-4 py-1.5 bg-slate-900 text-white rounded-lg font-semibold"
              >
                Close Poll
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

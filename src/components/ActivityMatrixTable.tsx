import React, { useState, useMemo } from 'react';
import { ALL_ACTIVITIES } from '../data/committeeData';
import { ActivityItem, ActivityStatus } from '../types';
import { Search, Filter, CheckCircle2, Clock, Calendar, ArrowUpDown, ChevronRight, X, User, Layers, Sparkles } from 'lucide-react';

interface ActivityMatrixTableProps {
  onSelectActivity?: (activity: ActivityItem) => void;
}

export const ActivityMatrixTable: React.FC<ActivityMatrixTableProps> = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | ActivityStatus>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [selectedActivity, setSelectedActivity] = useState<ActivityItem | null>(null);
  const [sortField, setSortField] = useState<'id' | 'activity' | 'plannedPeriod' | 'progressPercentage'>('id');
  const [sortAsc, setSortAsc] = useState(true);

  // Status counts
  const counts = useMemo(() => {
    return {
      all: ALL_ACTIVITIES.length,
      completed: ALL_ACTIVITIES.filter(a => a.status === 'completed').length,
      ongoing: ALL_ACTIVITIES.filter(a => a.status === 'ongoing').length,
      planned: ALL_ACTIVITIES.filter(a => a.status === 'planned').length,
    };
  }, []);

  const categories = useMemo(() => {
    return Array.from(new Set(ALL_ACTIVITIES.map(a => a.category)));
  }, []);

  const filteredActivities = useMemo(() => {
    return ALL_ACTIVITIES.filter(item => {
      const matchesSearch =
        item.activity.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.output.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.lead.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.plannedPeriod.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesStatus = statusFilter === 'all' || item.status === statusFilter;
      const matchesCategory = categoryFilter === 'all' || item.category === categoryFilter;

      return matchesSearch && matchesStatus && matchesCategory;
    }).sort((a, b) => {
      let comparison = 0;
      if (sortField === 'id') {
        comparison = a.id - b.id;
      } else if (sortField === 'activity') {
        comparison = a.activity.localeCompare(b.activity);
      } else if (sortField === 'plannedPeriod') {
        comparison = a.plannedPeriod.localeCompare(b.plannedPeriod);
      } else if (sortField === 'progressPercentage') {
        comparison = a.progressPercentage - b.progressPercentage;
      }
      return sortAsc ? comparison : -comparison;
    });
  }, [searchQuery, statusFilter, categoryFilter, sortField, sortAsc]);

  const handleSort = (field: 'id' | 'activity' | 'plannedPeriod' | 'progressPercentage') => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(true);
    }
  };

  const getStatusBadge = (status: ActivityStatus, text: string) => {
    if (status === 'completed') {
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          Completed
        </span>
      );
    }
    if (status === 'ongoing') {
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
          {text.includes('Pending/Not reported') ? 'Pending / Unreported' : 'Ongoing / Pending'}
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">
        <span className="w-2 h-2 rounded-full bg-slate-400"></span>
        Planned / Ongoing
      </span>
    );
  };

  return (
    <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 border border-blue-200">
              Revised Action Plan Matrix
            </span>
            <span className="text-xs text-slate-500 font-mono">
              Activities 1 to 23
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            COMSTEDA 23 Action Plan Implementation Status
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Comprehensive tracking of all 23 activities from foundational systems to post-conference archiving.
          </p>
        </div>

        {/* Quick Summary Pills */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setStatusFilter('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              statusFilter === 'all'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            All Activities ({counts.all})
          </button>
          <button
            onClick={() => setStatusFilter('completed')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              statusFilter === 'completed'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200'
            }`}
          >
            🟢 Completed ({counts.completed})
          </button>
          <button
            onClick={() => setStatusFilter('ongoing')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              statusFilter === 'ongoing'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'bg-amber-50 text-amber-800 hover:bg-amber-100 border border-amber-200'
            }`}
          >
            🟡 Ongoing / Pending ({counts.ongoing})
          </button>
          <button
            onClick={() => setStatusFilter('planned')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              statusFilter === 'planned'
                ? 'bg-slate-700 text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
            }`}
          >
            ⚪ Planned ({counts.planned})
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 mb-6">
        <div className="sm:col-span-6 relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search activities, outputs, leads, or months..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="sm:col-span-3">
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="w-full px-3 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-700"
          >
            <option value="all">All Functional Domains</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-3 flex items-center justify-end text-xs text-slate-500">
          Showing <span className="font-semibold text-slate-800 mx-1">{filteredActivities.length}</span> of {ALL_ACTIVITIES.length} activities
        </div>
      </div>

      {/* Interactive Table */}
      <div className="overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full text-left text-xs sm:text-sm">
          <thead className="bg-slate-50/90 text-slate-700 border-b border-slate-200 font-semibold">
            <tr>
              <th
                onClick={() => handleSort('id')}
                className="py-3 px-3.5 sm:px-4 cursor-pointer hover:text-blue-600 w-16"
              >
                <div className="flex items-center gap-1">
                  <span>No.</span>
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th
                onClick={() => handleSort('activity')}
                className="py-3 px-4 cursor-pointer hover:text-blue-600 min-w-[220px]"
              >
                <div className="flex items-center gap-1">
                  <span>Activity</span>
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th
                onClick={() => handleSort('plannedPeriod')}
                className="py-3 px-4 cursor-pointer hover:text-blue-600 min-w-[140px]"
              >
                <div className="flex items-center gap-1">
                  <span>Planned Period</span>
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th className="py-3 px-4 min-w-[160px]">Status</th>
              <th className="py-3 px-4 min-w-[280px]">Output / Progress</th>
              <th
                onClick={() => handleSort('progressPercentage')}
                className="py-3 px-4 cursor-pointer hover:text-blue-600 min-w-[110px]"
              >
                <div className="flex items-center gap-1">
                  <span>Progress</span>
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th className="py-3 px-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            {filteredActivities.length === 0 ? (
              <tr>
                <td colSpan={7} className="py-8 text-center text-slate-500 text-sm">
                  No activities found matching your filters.
                </td>
              </tr>
            ) : (
              filteredActivities.map((item) => (
                <tr
                  key={item.id}
                  onClick={() => setSelectedActivity(item)}
                  className={`hover:bg-slate-50/80 transition-colors cursor-pointer ${
                    item.id <= 6 ? 'bg-blue-50/20' : ''
                  }`}
                >
                  <td className="py-3.5 px-3.5 sm:px-4 font-mono font-bold text-slate-800">
                    <span className="w-7 h-7 rounded-lg bg-slate-100 border border-slate-200 inline-flex items-center justify-center text-xs">
                      {item.id}
                    </span>
                  </td>

                  <td className="py-3.5 px-4 font-semibold text-slate-900">
                    <div>{item.activity}</div>
                    <span className="text-[11px] font-normal text-slate-500">
                      {item.category} • Lead: {item.lead}
                    </span>
                  </td>

                  <td className="py-3.5 px-4 font-medium text-slate-700 whitespace-nowrap">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{item.plannedPeriod}</span>
                    </div>
                  </td>

                  <td className="py-3.5 px-4">
                    {getStatusBadge(item.status, item.statusText)}
                  </td>

                  <td className="py-3.5 px-4 text-slate-600">
                    <p className="line-clamp-2 leading-relaxed">
                      {item.output}
                    </p>
                  </td>

                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-16 bg-slate-100 rounded-full h-2 overflow-hidden border border-slate-200">
                        <div
                          className={`h-full rounded-full transition-all ${
                            item.progressPercentage === 100
                              ? 'bg-emerald-500'
                              : item.progressPercentage > 0
                              ? 'bg-amber-500'
                              : 'bg-slate-300'
                          }`}
                          style={{ width: `${item.progressPercentage}%` }}
                        />
                      </div>
                      <span className="font-mono text-xs font-medium text-slate-700">
                        {item.progressPercentage}%
                      </span>
                    </div>
                  </td>

                  <td className="py-3.5 px-4 text-right">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedActivity(item);
                      }}
                      className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      title="View Details"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Activity Detail Modal / Drawer */}
      {selectedActivity && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-start justify-between gap-4 mb-4 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center font-mono font-bold text-blue-700">
                  #{selectedActivity.id}
                </div>
                <div>
                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                    {selectedActivity.category}
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900">
                    {selectedActivity.activity}
                  </h4>
                </div>
              </div>
              <button
                onClick={() => setSelectedActivity(null)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-2 gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                <div>
                  <span className="text-slate-500 block text-[11px] mb-0.5">Planned Period:</span>
                  <span className="font-semibold text-slate-900">{selectedActivity.plannedPeriod}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[11px] mb-0.5">Status:</span>
                  <div>{getStatusBadge(selectedActivity.status, selectedActivity.statusText)}</div>
                </div>
                <div>
                  <span className="text-slate-500 block text-[11px] mb-0.5">Priority:</span>
                  <span className="font-semibold text-slate-900">{selectedActivity.priority} Priority</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[11px] mb-0.5">Progress:</span>
                  <span className="font-mono font-bold text-blue-600">{selectedActivity.progressPercentage}% Complete</span>
                </div>
              </div>

              <div>
                <h5 className="font-semibold text-slate-800 mb-1">Output / Progress Report:</h5>
                <p className="text-slate-600 bg-blue-50/50 p-3 rounded-lg border border-blue-100/70 leading-relaxed">
                  {selectedActivity.output}
                </p>
              </div>

              <div>
                <h5 className="font-semibold text-slate-800 mb-1">Responsible Unit / Lead:</h5>
                <div className="flex items-center gap-2 text-slate-700">
                  <User className="w-4 h-4 text-slate-400" />
                  <span>{selectedActivity.lead}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setSelectedActivity(null)}
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl transition-all"
              >
                Close Activity Overview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

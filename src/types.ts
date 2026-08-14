export type ActivityStatus = 'completed' | 'ongoing' | 'planned';

export interface ActivityItem {
  id: number;
  activity: string;
  plannedPeriod: string;
  status: ActivityStatus;
  statusText: string;
  output: string;
  category: 'Foundation' | 'Core Systems' | 'Conference Operations' | 'Hybrid & Tech' | 'Post-Conference';
  priority: 'High' | 'Medium' | 'Normal';
  progressPercentage: number;
  lead: string;
}

export interface DeliverableCard {
  id: number;
  numberRef: string;
  title: string;
  status: 'Completed' | 'Ongoing';
  completionDate: string;
  summary: string;
  keyOutputs: string[];
  systemSpecs: { label: string; value: string }[];
  category: string;
}

export interface PriorityActivity {
  id: number;
  name: string;
  period: string;
  leadUnit: string;
  description: string;
  actionItems: string[];
  status: 'Ongoing/Pending' | 'Planned';
  priorityLevel: 'Critical' | 'High' | 'Medium';
}

export interface AgendaSession {
  id: string;
  day: number;
  dateStr: string;
  startTime: string;
  endTime: string;
  title: string;
  track: 'Plenary' | 'ICT & Emerging Tech' | 'Sustainable Science' | 'Digital Transformation' | 'Workshop & Panels';
  room: string;
  speaker: string;
  speakerRole: string;
  affiliation: string;
  speakerAvatar?: string;
  abstractText: string;
  tags: string[];
  isLiveNow?: boolean;
  questionsCount: number;
  pollsActive?: boolean;
}

export interface LiveQuestion {
  id: string;
  sessionId: string;
  author: string;
  affiliation: string;
  question: string;
  upvotes: number;
  timestamp: string;
  isAnswered: boolean;
}

export interface RegistrationRecord {
  regId: string;
  fullName: string;
  email: string;
  institution: string;
  country: string;
  regType: 'Presenter' | 'Regular Attendee' | 'Student' | 'Committee / VIP';
  status: 'Confirmed' | 'Pending Payment Verification' | 'Under Review';
  dateRegistered: string;
  ticketCode: string;
}

export interface AbstractSubmission {
  abstractId: string;
  title: string;
  primaryAuthor: string;
  email: string;
  affiliation: string;
  track: string;
  abstractSummary: string;
  keywords: string[];
  submissionDate: string;
  status: 'Received' | 'Under Review' | 'Accepted' | 'Revision Requested';
}

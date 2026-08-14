import { ActivityItem, DeliverableCard, PriorityActivity, AgendaSession, RegistrationRecord, AbstractSubmission } from '../types';

export const EXECUTIVE_PURPOSE = {
  title: "Purpose of the ICT & Services Committee Progress Briefing",
  mandate: "To report on the implementation of the COMSTEDA 23 revised action plan as of August 2026, highlighting foundational digital deliverables completed to date and outlining immediate operational priorities for conference readiness.",
  statusSummary: "The ICT and Services Committee has commenced implementation of the COMSTEDA 23 revised action plan. To date, four key activities have been completed, covering ICT planning and requirements, participant registration, abstract submission, and establishment of the conference website.",
  reportingDate: "August 2026",
  conferenceName: "COMSTEDA 23",
  conferenceFullName: "23rd Committee on Science, Technology and Economic Development Annual Conference",
};

export const KEY_ACHIEVEMENTS = {
  headline: "Establishment of the Initial Digital Foundation for COMSTEDA 23",
  summary: "The committee has established the initial digital foundation for COMSTEDA 23. The core planning and requirements have been defined, while online participant registration, abstract submission and the conference website have been established. These systems provide the basis for integrating subsequent services, including paper management, participant communication, hybrid participation, live streaming, technical support, feedback and digital archiving.",
  pillars: [
    {
      id: "req",
      num: "01",
      title: "ICT Planning & Requirements",
      desc: "Requirements, enterprise system architecture, network topologies, and modular work breakdown structure established.",
      status: "🟢 Completed",
    },
    {
      id: "reg",
      num: "02",
      title: "Participant Registration",
      desc: "End-to-end online registration and automated confirmation system developed, load tested, and activated.",
      status: "🟢 Completed",
    },
    {
      id: "abs",
      num: "03",
      title: "Abstract Submission",
      desc: "Online abstract submission portal, multi-track tagging, reviewer routing schema developed and deployed.",
      status: "🟢 Completed",
    },
    {
      id: "web",
      num: "06",
      title: "Conference Website",
      desc: "Official conference web portal developed and launched as the public single source of truth.",
      status: "🟢 Completed",
    }
  ],
  foundationCapabilities: [
    "Unified Participant Database & Single Sign-On Ready",
    "Paper & Abstract Routing Pipeline",
    "Multi-tier Payment Status Synchronization Hook",
    "Hybrid Live Stream & Virtual Auditorium Gateway",
    "Real-Time Schedule & Agenda Notification Engine",
    "Automated Badging, Attendance & Archiving Store"
  ]
};

export const ALL_ACTIVITIES: ActivityItem[] = [
  {
    id: 1,
    activity: "Digital planning and requirements",
    plannedPeriod: "July 2026",
    status: "completed",
    statusText: "🟢 Completed",
    output: "ICT requirements, system architecture and work breakdown prepared",
    category: "Foundation",
    priority: "High",
    progressPercentage: 100,
    lead: "Lead Systems Architect & ICT Committee"
  },
  {
    id: 2,
    activity: "Participant registration",
    plannedPeriod: "July 2026",
    status: "completed",
    statusText: "🟢 Completed",
    output: "Online registration and confirmation system developed/tested",
    category: "Core Systems",
    priority: "High",
    progressPercentage: 100,
    lead: "Registration Sub-Committee"
  },
  {
    id: 3,
    activity: "Abstract submission",
    plannedPeriod: "July–August 2026",
    status: "completed",
    statusText: "🟢 Completed",
    output: "Online abstract submission system developed/tested",
    category: "Core Systems",
    priority: "High",
    progressPercentage: 100,
    lead: "Editorial & Academic ICT Desk"
  },
  {
    id: 4,
    activity: "Keynote speaker information",
    plannedPeriod: "July 2026",
    status: "ongoing",
    statusText: "🟡 Pending/Not reported",
    output: "To be confirmed (Speaker profile assets & presentation schedule collation)",
    category: "Core Systems",
    priority: "High",
    progressPercentage: 35,
    lead: "Program Committee Liaison"
  },
  {
    id: 5,
    activity: "Payment verification",
    plannedPeriod: "July–August 2026",
    status: "ongoing",
    statusText: "🟡 Ongoing/Pending",
    output: "Joint ICT–Finance automated reconciliation workflow",
    category: "Core Systems",
    priority: "High",
    progressPercentage: 60,
    lead: "Joint ICT – Finance Team"
  },
  {
    id: 6,
    activity: "Conference website",
    plannedPeriod: "July–August 2026",
    status: "completed",
    statusText: "🟢 Completed",
    output: "Conference website developed/launched with mobile responsive layout",
    category: "Foundation",
    priority: "High",
    progressPercentage: 100,
    lead: "Web Development & Content Team"
  },
  {
    id: 7,
    activity: "Full-paper management system",
    plannedPeriod: "August 2026",
    status: "planned",
    statusText: "⚪ Planned/Ongoing",
    output: "Peer-review routing, camera-ready upload, and manuscript status tracking",
    category: "Conference Operations",
    priority: "High",
    progressPercentage: 20,
    lead: "Technical Program Secretariat"
  },
  {
    id: 8,
    activity: "Mobile & responsive web application",
    plannedPeriod: "August–September 2026",
    status: "planned",
    statusText: "⚪ Planned/Ongoing",
    output: "Attendee conference companion app with real-time schedule & networking",
    category: "Core Systems",
    priority: "High",
    progressPercentage: 15,
    lead: "App Dev Sub-Team"
  },
  {
    id: 9,
    activity: "Digital communication & notification channels",
    plannedPeriod: "August–October 2026",
    status: "planned",
    statusText: "⚪ Planned/Ongoing",
    output: "Automated SMS/Email broadcast and attendee announcements system",
    category: "Conference Operations",
    priority: "Medium",
    progressPercentage: 25,
    lead: "Comms & Outreach Unit"
  },
  {
    id: 10,
    activity: "Internet and venue network infrastructure",
    plannedPeriod: "August–September 2026",
    status: "planned",
    statusText: "⚪ Planned/Ongoing",
    output: "Dedicated high-density Wi-Fi 6, failover fiber links, and stage cabling",
    category: "Hybrid & Tech",
    priority: "High",
    progressPercentage: 10,
    lead: "Network Engineering Unit"
  },
  {
    id: 11,
    activity: "Hybrid conference & virtual auditorium platform",
    plannedPeriod: "September 2026",
    status: "planned",
    statusText: "⚪ Planned/Ongoing",
    output: "Interactive virtual staging, breakout rooms, and remote speaker hub",
    category: "Hybrid & Tech",
    priority: "High",
    progressPercentage: 15,
    lead: "Hybrid Operations Team"
  },
  {
    id: 12,
    activity: "End-to-end integration testing & load verification",
    plannedPeriod: "September–October 2026",
    status: "planned",
    statusText: "⚪ Planned/Ongoing",
    output: "Stress testing across concurrent registration, live streaming and QA systems",
    category: "Foundation",
    priority: "High",
    progressPercentage: 5,
    lead: "QA & Security Desk"
  },
  {
    id: 13,
    activity: "Live streaming and AV technical support",
    plannedPeriod: "September–November 2026",
    status: "planned",
    statusText: "⚪ Planned/Ongoing",
    output: "Multi-camera broadcast feeds, low-latency streaming CDN, and on-site AV desk",
    category: "Hybrid & Tech",
    priority: "High",
    progressPercentage: 10,
    lead: "Broadcast & AV Services"
  },
  {
    id: 14,
    activity: "On-site badge printing & QR check-in kiosks",
    plannedPeriod: "September–October 2026",
    status: "planned",
    statusText: "⚪ Planned/Ongoing",
    output: "Rapid scan thermal badge printing terminals and attendance logging",
    category: "Conference Operations",
    priority: "Medium",
    progressPercentage: 10,
    lead: "Logistics & Registration"
  },
  {
    id: 15,
    activity: "Interactive Q&A and real-time attendee polling system",
    plannedPeriod: "August–September 2026",
    status: "planned",
    statusText: "⚪ Planned/Ongoing",
    output: "Audience engagement engine with moderation dashboard for session chairs",
    category: "Conference Operations",
    priority: "Medium",
    progressPercentage: 30,
    lead: "Audience Interaction Desk"
  },
  {
    id: 16,
    activity: "Exhibitor & sponsor virtual showcase portal",
    plannedPeriod: "September 2026",
    status: "planned",
    statusText: "⚪ Planned/Ongoing",
    output: "Digital exhibition booths, product video streams, and partner leads portal",
    category: "Core Systems",
    priority: "Normal",
    progressPercentage: 5,
    lead: "Sponsorship Committee Liaison"
  },
  {
    id: 17,
    activity: "ICT helpdesk and participant support ticketing",
    plannedPeriod: "October–November 2026",
    status: "planned",
    statusText: "⚪ Planned/Ongoing",
    output: "Omnichannel attendee support desk (Live chat, WhatsApp bot, physical counter)",
    category: "Conference Operations",
    priority: "Medium",
    progressPercentage: 5,
    lead: "Support Operations Desk"
  },
  {
    id: 18,
    activity: "Digital signage and dynamic hall schedule displays",
    plannedPeriod: "October 2026",
    status: "planned",
    statusText: "⚪ Planned/Ongoing",
    output: "Cloud-managed digital display screens at plenary halls and concourse",
    category: "Hybrid & Tech",
    priority: "Normal",
    progressPercentage: 0,
    lead: "Venue Operations"
  },
  {
    id: 19,
    activity: "Speaker preview room & presentation management",
    plannedPeriod: "October–November 2026",
    status: "planned",
    statusText: "⚪ Planned/Ongoing",
    output: "Central slide upload server, formatting check desk, and lectern push network",
    category: "Hybrid & Tech",
    priority: "High",
    progressPercentage: 0,
    lead: "Speaker Liaison & AV Lead"
  },
  {
    id: 20,
    activity: "Cybersecurity, backup & data privacy compliance",
    plannedPeriod: "August–November 2026",
    status: "planned",
    statusText: "⚪ Planned/Ongoing",
    output: "SSL/TLS encryption, daily snapshots, GDPR/DPA compliance audits",
    category: "Foundation",
    priority: "High",
    progressPercentage: 25,
    lead: "Information Security Officer"
  },
  {
    id: 21,
    activity: "Post-session attendee feedback and evaluation system",
    plannedPeriod: "November 2026",
    status: "planned",
    statusText: "⚪ Planned/Ongoing",
    output: "Instant digital survey with aggregate reporting for conference analytics",
    category: "Post-Conference",
    priority: "Normal",
    progressPercentage: 0,
    lead: "Quality Assurance Unit"
  },
  {
    id: 22,
    activity: "Digital certificates of participation & presentation generation",
    plannedPeriod: "November 2026",
    status: "planned",
    statusText: "⚪ Planned/Ongoing",
    output: "Automated cryptographic verification QR code certificate issuing system",
    category: "Post-Conference",
    priority: "Medium",
    progressPercentage: 0,
    lead: "Secretariat & ICT Team"
  },
  {
    id: 23,
    activity: "Conference digital proceedings and repository archiving",
    plannedPeriod: "November 2026",
    status: "planned",
    statusText: "⚪ Planned/Ongoing",
    output: "Indexed open-access proceedings archive with DOI and video library",
    category: "Post-Conference",
    priority: "Medium",
    progressPercentage: 0,
    lead: "Archival & Publications Desk"
  }
];

export const COMPLETED_DELIVERABLES: DeliverableCard[] = [
  {
    id: 1,
    numberRef: "Activity 1",
    title: "ICT Planning & Requirements",
    status: "Completed",
    completionDate: "July 2026",
    summary: "Comprehensive technical architecture, resource capacity calculations, and operational work breakdown structure established to guide all digital touchpoints.",
    keyOutputs: [
      "Enterprise System Architecture Document & Data Schema",
      "Network bandwidth and Wi-Fi load models (est. 1,200 concurrent users)",
      "Tiered access control for committee, reviewers, presenters, and attendees",
      "Disaster recovery and automated cloud backup protocols"
    ],
    systemSpecs: [
      { label: "Target Capacity", value: "3,500 Registered Delegates" },
      { label: "Architecture", value: "Cloud-Native Modular Microservices" },
      { label: "Redundancy", value: "Dual ISP Failover + Multi-region CDN" },
      { label: "Security Level", value: "TLS 1.3 + Role-Based Access Control" }
    ],
    category: "Foundation"
  },
  {
    id: 2,
    numberRef: "Activity 2",
    title: "Participant Registration System",
    status: "Completed",
    completionDate: "July 2026",
    summary: "Production-ready online registration system with dynamic attendee categorisation, auto-generated digital confirmation passes, and real-time database recording.",
    keyOutputs: [
      "Self-service registration portal with presenter/student/VIP classifications",
      "Instant email confirmation with unique QR attendee pass generation",
      "Real-time administrative registration dashboard with CSV export",
      "Capacity management per track and master workshop scheduling"
    ],
    systemSpecs: [
      { label: "System Status", value: "Live & Accepting Registrations" },
      { label: "Confirmation Latency", value: "< 1.8 seconds per pass" },
      { label: "Validation", value: "Integrated ID & Email deduplication" },
      { label: "Pass Format", value: "Cryptographic QR Code + PDF Pass" }
    ],
    category: "Core Systems"
  },
  {
    id: 3,
    numberRef: "Activity 3",
    title: "Abstract Submission System",
    status: "Completed",
    completionDate: "July–August 2026",
    summary: "Multi-track submission pipeline supporting paper metadata, abstract summaries, author affiliations, keyword tagging, and double-blind reviewer assignment readiness.",
    keyOutputs: [
      "Streamlined submission workflow supporting 6 major conference tracks",
      "Automated file validation (PDF / Docx compliance checks)",
      "Co-author acknowledgment notifications and tracking dashboard",
      "Reviewer scoring rubric framework and blinded workflow test passed"
    ],
    systemSpecs: [
      { label: "Supported Tracks", value: "6 Thematic Scientific Areas" },
      { label: "Review Model", value: "Double-Blind Peer Evaluation Ready" },
      { label: "Upload Constraints", value: "Max 300 words summary + 20MB file" },
      { label: "Audit Log", value: "Timestamped version revisions enabled" }
    ],
    category: "Core Systems"
  },
  {
    id: 6,
    numberRef: "Activity 6",
    title: "Conference Website",
    status: "Completed",
    completionDate: "July–August 2026",
    summary: "Central digital touchpoint for COMSTEDA 23, delivering conference schedules, venue information, committee rosters, keynote previews, and integrated system links.",
    keyOutputs: [
      "Responsive, high-performance responsive web portal with high accessibility",
      "Direct integration links to Registration, Abstract Portal, and Program Hub",
      "Announcements ticker for real-time committee notices and deadlines",
      "Mobile-optimized progressive layout with offline agenda caching support"
    ],
    systemSpecs: [
      { label: "Portal Status", value: "Launched & Publicly Accessible" },
      { label: "Performance Score", value: "98/100 Lighthouse Performance" },
      { label: "Mobile Readiness", value: "100% Adaptive Viewports" },
      { label: "Uptime SLA", value: "99.95% Target Availability" }
    ],
    category: "Foundation"
  }
];

export const NEXT_PRIORITIES: PriorityActivity[] = [
  {
    id: 4,
    name: "Keynote Speaker Information",
    period: "August 2026 (Immediate)",
    leadUnit: "Program Committee Liaison & ICT Web Team",
    description: "Obtain confirmed biographical profiles, high-resolution media assets, talk abstracts, and specific AV/hybrid presentation requirements from all plenary speakers.",
    actionItems: [
      "Collect finalized abstracts & speaker bios from international speakers",
      "Publish dedicated speaker spotlight cards on the conference portal",
      "Schedule pre-conference virtual tech check with remote keynotes"
    ],
    status: "Ongoing/Pending",
    priorityLevel: "Critical"
  },
  {
    id: 5,
    name: "Payment Verification System",
    period: "August 2026 (Immediate)",
    leadUnit: "Joint ICT – Finance Working Group",
    description: "Finalize automated reconciliation between bank wire transfers, electronic payment gateways, and registered attendee profiles to clear conference tickets.",
    actionItems: [
      "Connect payment gateway webhooks to registration database",
      "Deploy Finance administrative verification portal for manual wire receipts",
      "Enable automated 'Payment Cleared' SMS/Email badge delivery"
    ],
    status: "Ongoing/Pending",
    priorityLevel: "Critical"
  },
  {
    id: 7,
    name: "Full-Paper Management System",
    period: "August–September 2026",
    leadUnit: "Technical Program Secretariat",
    description: "Deploy camera-ready paper submission portal, peer-review management system, and automated plagiarism/format checking routines.",
    actionItems: [
      "Configure reviewer assignment algorithm based on track tags",
      "Set up blind scoring rubric and rebuttal workflow",
      "Interface accepted papers with proceedings publisher template"
    ],
    status: "Planned",
    priorityLevel: "High"
  },
  {
    id: 8,
    name: "Mobile & Responsive Web Application",
    period: "August–September 2026",
    leadUnit: "Application Development Sub-Committee",
    description: "Package the progressive web app (PWA) companion with offline schedule caching, session bookmarking, and push notification capabilities for attendees.",
    actionItems: [
      "Finalize offline sync for multi-track session schedules",
      "Implement personalized 'My Conference Schedule' planner",
      "Test push notification relays for urgent room changes & announcements"
    ],
    status: "Planned",
    priorityLevel: "High"
  },
  {
    id: 9,
    name: "Digital Communication Channels",
    period: "August–October 2026",
    leadUnit: "Communications & Outreach Team",
    description: "Establish automated communication funnels including attendee broadcast newsletters, reminder triggers, and WhatsApp community channels.",
    actionItems: [
      "Configure transactional email templates with verified sender signatures",
      "Set up scheduled reminder cadences (T-30 days, T-7 days, T-24 hours)",
      "Establish official attendee support channel and FAQ automated bot"
    ],
    status: "Planned",
    priorityLevel: "Medium"
  },
  {
    id: 10,
    name: "Internet & Venue Network Infrastructure",
    period: "August–September 2026",
    leadUnit: "Network Engineering & Infrastructure Desk",
    description: "Perform on-site RF surveys, provision dedicated high-throughput leased lines (1 Gbps symmetric), and install high-density APs across all session halls.",
    actionItems: [
      "Conduct venue site survey with local telecommunications provider",
      "Deploy dual-redundant fiber optic links with 4G/5G backup failover",
      "Establish separate VLANs for Plenary Streaming, Presenters, and Public Attendees"
    ],
    status: "Planned",
    priorityLevel: "High"
  },
  {
    id: 11,
    name: "Hybrid Conference Platform",
    period: "September 2026",
    leadUnit: "Hybrid Operations & Technical Unit",
    description: "Deploy integrated virtual auditorium for global delegates, including two-way interactive audio/video, remote breakout sessions, and chat moderation.",
    actionItems: [
      "Integrate low-latency WebRTC / RTMP streaming platform with attendee pass auth",
      "Provision virtual breakout rooms for parallel technical sessions",
      "Train virtual room moderators on speaker queue management"
    ],
    status: "Planned",
    priorityLevel: "High"
  },
  {
    id: 12,
    name: "End-to-End Testing & Integration Simulation",
    period: "September–October 2026",
    leadUnit: "QA & Systems Integration Group",
    description: "Execute comprehensive full-scale dry run simulating peak registration, concurrent abstract reviews, live streams, and simultaneous Q&A queries.",
    actionItems: [
      "Run load stress testing simulating 2,500 simultaneous active connections",
      "Conduct simulated cyber incident response & failover drill",
      "Perform user acceptance testing with representative committee members"
    ],
    status: "Planned",
    priorityLevel: "Critical"
  },
  {
    id: 13,
    name: "Streaming and Technical Support Desks",
    period: "September–November 2026",
    leadUnit: "Broadcast & AV Support Services",
    description: "Finalize broadcast camera gear, multi-channel vision mixers, live captioning integration, and physical ICT technician staffing for each venue hall.",
    actionItems: [
      "Procure multi-camera capture rigs and hardware encoders for 4 main halls",
      "Establish real-time speech-to-text automated captioning pipeline",
      "Draft duty roster for student volunteer tech stewards and helpdesk leads"
    ],
    status: "Planned",
    priorityLevel: "High"
  }
];

export const SAMPLE_AGENDA_SESSIONS: AgendaSession[] = [
  {
    id: "ses-101",
    day: 1,
    dateStr: "Day 1 - Nov 16, 2026",
    startTime: "08:30",
    endTime: "09:45",
    title: "Opening Ceremony & Ministerial Plenary on Digital Sovereignty in Science",
    track: "Plenary",
    room: "Grand Auditorium Hall A",
    speaker: "Prof. Dr. Amina Bello & H.E. Minister of Innovation",
    speakerRole: "Keynote Plenary Speaker",
    affiliation: "Federal Council on Science & Technology",
    speakerAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    abstractText: "Setting the strategic vision for COMSTEDA 23: examining how regional technological infrastructure and open scientific platforms accelerate economic transformation across developing regions.",
    tags: ["Plenary", "Digital Sovereignty", "Policy & Strategy"],
    isLiveNow: true,
    questionsCount: 14,
    pollsActive: true
  },
  {
    id: "ses-102",
    day: 1,
    dateStr: "Day 1 - Nov 16, 2026",
    startTime: "10:15",
    endTime: "11:45",
    title: "High-Performance Computing Architectures for Climate Modeling",
    track: "ICT & Emerging Tech",
    room: "Room 102 - Technical Wing",
    speaker: "Dr. Marcus Vance",
    speakerRole: "Lead Research Scientist",
    affiliation: "Institute of Distributed Systems",
    speakerAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    abstractText: "Scalable parallel computing models tailored for real-time meteorological forecasting and agricultural disaster risk management in subtropical zones.",
    tags: ["Cloud & HPC", "Climate Tech", "Algorithms"],
    isLiveNow: false,
    questionsCount: 8,
    pollsActive: false
  },
  {
    id: "ses-103",
    day: 1,
    dateStr: "Day 1 - Nov 16, 2026",
    startTime: "10:15",
    endTime: "11:45",
    title: "Renewable Energy Smart Grids: Edge AI in Rural Electrification",
    track: "Sustainable Science",
    room: "Room 104 - Green Tech Hub",
    speaker: "Eng. Farida Al-Mansoor",
    speakerRole: "Director of Energy Informatics",
    affiliation: "Clean Energy Alliance",
    speakerAvatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    abstractText: "Practical deployment of distributed microcontroller-based edge algorithms for balancing decentralized solar-microgrid loads with minimal telemetry latency.",
    tags: ["Smart Grids", "Edge AI", "Clean Energy"],
    isLiveNow: false,
    questionsCount: 5,
    pollsActive: true
  },
  {
    id: "ses-104",
    day: 1,
    dateStr: "Day 1 - Nov 16, 2026",
    startTime: "13:30",
    endTime: "15:00",
    title: "Interactive Panel: Cyber-Physical Resilience in Critical Infrastructure",
    track: "Workshop & Panels",
    room: "Symposium Hall B",
    speaker: "Panel: Dr. Elena Rostova, Samuel K. Osei, Prof. David Chen",
    speakerRole: "Moderated Expert Panel",
    affiliation: "International Cyber Defense Consortium",
    speakerAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    abstractText: "Cross-sector examination of telemetry protection, zero-trust protocols, and real-time anomaly detection across national power, transport, and banking backbones.",
    tags: ["Cybersecurity", "Zero Trust", "Infrastructure"],
    isLiveNow: false,
    questionsCount: 19,
    pollsActive: true
  },
  {
    id: "ses-201",
    day: 2,
    dateStr: "Day 2 - Nov 17, 2026",
    startTime: "09:00",
    endTime: "10:30",
    title: "Keynote: Foundation AI Models for Vernacular Language Education",
    track: "Plenary",
    room: "Grand Auditorium Hall A",
    speaker: "Prof. Kenneth Nwachukwu",
    speakerRole: "Chair of Computational Linguistics",
    affiliation: "Center for Advanced Language Tech",
    speakerAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    abstractText: "Overcoming language resource constraints in regional educational systems through low-compute multilingual model fine-tuning and open corpus initiatives.",
    tags: ["Artificial Intelligence", "NLP", "Education Tech"],
    isLiveNow: false,
    questionsCount: 12,
    pollsActive: true
  },
  {
    id: "ses-202",
    day: 2,
    dateStr: "Day 2 - Nov 17, 2026",
    startTime: "11:00",
    endTime: "12:30",
    title: "Decentralized Public Health Surveillance via Federated Analytics",
    track: "Digital Transformation",
    room: "Room 102 - Technical Wing",
    speaker: "Dr. Sofia Morales",
    speakerRole: "Principal Health Epidemiologist",
    affiliation: "Global Telehealth Network",
    speakerAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    abstractText: "Privacy-preserving telemetry exchange frameworks enabling regional medical centers to detect epidemiological clusters without transferring sensitive patient records.",
    tags: ["Health Tech", "Federated Learning", "Data Privacy"],
    isLiveNow: false,
    questionsCount: 6,
    pollsActive: false
  },
  {
    id: "ses-203",
    day: 2,
    dateStr: "Day 2 - Nov 17, 2026",
    startTime: "14:00",
    endTime: "16:00",
    title: "Hands-on Workshop: Rapid Prototyping of IoT Environmental Sensors",
    track: "Workshop & Panels",
    room: "Innovation Maker Lab 3",
    speaker: "Tariq Ibrahim & ICT Hardware Team",
    speakerRole: "Lead Systems Engineer",
    affiliation: "COMSTEDA Maker Labs",
    speakerAvatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80",
    abstractText: "Participants will configure, flash, and connect LoRaWAN air-quality and soil moisture probes to the centralized conference streaming dashboard.",
    tags: ["Hands-On", "IoT", "Sensors & Hardware"],
    isLiveNow: false,
    questionsCount: 9,
    pollsActive: false
  },
  {
    id: "ses-301",
    day: 3,
    dateStr: "Day 3 - Nov 18, 2026",
    startTime: "09:30",
    endTime: "11:00",
    title: "Policy Forum: Framework for Open Scientific Data & Public Repositories",
    track: "Digital Transformation",
    room: "Grand Auditorium Hall A",
    speaker: "Dr. Hans Lindqvist & Regional Rectors Forum",
    speakerRole: "Special Envoy on Open Science",
    affiliation: "International Science Council",
    speakerAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80",
    abstractText: "Standardizing metadata schemes, persistent identifiers (DOIs), and cross-institutional access treaties for published scientific outputs.",
    tags: ["Open Science", "Data Governance", "Policy"],
    isLiveNow: false,
    questionsCount: 7,
    pollsActive: true
  },
  {
    id: "ses-302",
    day: 3,
    dateStr: "Day 3 - Nov 18, 2026",
    startTime: "11:30",
    endTime: "13:00",
    title: "Best Paper Awards & COMSTEDA 23 Valedictory Declarations",
    track: "Plenary",
    room: "Grand Auditorium Hall A",
    speaker: "COMSTEDA 23 Steering Committee & ICT Leads",
    speakerRole: "Conference Executive Council",
    affiliation: "COMSTEDA General Secretariat",
    speakerAvatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
    abstractText: "Announcement of top peer-reviewed research awards, adoption of conference resolutions, and handover to COMSTEDA 24 host delegation.",
    tags: ["Awards", "Valedictory", "Plenary"],
    isLiveNow: false,
    questionsCount: 4,
    pollsActive: false
  }
];

export const INITIAL_REGISTRATIONS: RegistrationRecord[] = [
  {
    regId: "COM23-REG-1049",
    fullName: "Dr. Adebayo Ogunlesi",
    email: "a.ogunlesi@unilag.edu.ng",
    institution: "University of Lagos, Faculty of Engineering",
    country: "Nigeria",
    regType: "Presenter",
    status: "Confirmed",
    dateRegistered: "2026-07-28",
    ticketCode: "PASS-77291-EXP"
  },
  {
    regId: "COM23-REG-1050",
    fullName: "Prof. Catherine Dubois",
    email: "c.dubois@polytechnique.fr",
    institution: "Institut Polytechnique de Paris",
    country: "France",
    regType: "Presenter",
    status: "Confirmed",
    dateRegistered: "2026-07-29",
    ticketCode: "PASS-88392-EXP"
  },
  {
    regId: "COM23-REG-1051",
    fullName: "Kofi Mensah",
    email: "kmensah@ug.edu.gh",
    institution: "University of Ghana",
    country: "Ghana",
    regType: "Student",
    status: "Pending Payment Verification",
    dateRegistered: "2026-08-03",
    ticketCode: "PASS-99102-PEN"
  },
  {
    regId: "COM23-REG-1052",
    fullName: "Dr. Zainab Al-Hassan",
    email: "z.alhassan@kust.edu.ng",
    institution: "Kano University of Science & Technology",
    country: "Nigeria",
    regType: "Regular Attendee",
    status: "Confirmed",
    dateRegistered: "2026-08-08",
    ticketCode: "PASS-10294-EXP"
  }
];

export const INITIAL_ABSTRACTS: AbstractSubmission[] = [
  {
    abstractId: "ABS-2026-088",
    title: "Real-Time Microgrid Anomaly Detection via Edge Distributed Neural Models",
    primaryAuthor: "Dr. Adebayo Ogunlesi",
    email: "a.ogunlesi@unilag.edu.ng",
    affiliation: "University of Lagos",
    track: "Sustainable Science",
    abstractSummary: "We present a decentralized neural network model running directly on microcontroller nodes for predictive fault detection in micro-hydro and solar rural grids, achieving 97.4% accuracy under intermittent telemetry.",
    keywords: ["Smart Grids", "Edge AI", "Neural Networks", "Rural Electrification"],
    submissionDate: "2026-08-02",
    status: "Accepted"
  },
  {
    abstractId: "ABS-2026-089",
    title: "Low-Bandwidth Video Compression Protocols for Hybrid Classroom Networks",
    primaryAuthor: "Prof. Catherine Dubois",
    email: "c.dubois@polytechnique.fr",
    affiliation: "Institut Polytechnique de Paris",
    track: "ICT & Emerging Tech",
    abstractSummary: "An adaptive perceptual neural codec designed for sub-100kbps uplinks, preserving facial clarity and whiteboard slide legibility across congested cellular data channels.",
    keywords: ["Video Coding", "WebRTC", "Distance Education", "Bandwidth Optimization"],
    submissionDate: "2026-08-05",
    status: "Under Review"
  },
  {
    abstractId: "ABS-2026-090",
    title: "Sovereign Cloud Data Warehouses for Transnational Research Registries",
    primaryAuthor: "Dr. Zainab Al-Hassan",
    email: "z.alhassan@kust.edu.ng",
    affiliation: "Kano University of Science & Technology",
    track: "Digital Transformation",
    abstractSummary: "Architectural blueprint for federated research databases enforcing regional data protection acts while enabling cross-border algorithmic queries without raw data egress.",
    keywords: ["Data Sovereignty", "Cloud Architecture", "Federated Queries", "GDPR/DPA"],
    submissionDate: "2026-08-11",
    status: "Received"
  }
];

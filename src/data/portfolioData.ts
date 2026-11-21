export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface ValueFlowNode {
  id: string;
  step: string;
  title: string;
  summary: string;
}

export interface ExpertiseItem {
  index: string;
  title: string;
  description: string;
  capabilities: string[];
  motif: 'requirements' | 'product' | 'delivery' | 'presales' | 'process' | 'stakeholders';
}

export interface AICapabilityDetail {
  index: string;
  title: string;
  description: string;
  networkLabel: string;
  networkAngleDeg: number;
  focusOutcome: string;
}

export interface ExperienceRole {
  id: string;
  organisation: string;
  role: string;
  period: string;
  summary: string;
  secondaryNote?: string;
  isCurrent?: boolean;
}

export interface ProjectItem {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  organisation: string;
  role: string;
  discipline: 'Product Ownership' | 'Business Analysis' | 'Project Delivery';
  description: string;
  capabilities: string[];
  featured?: boolean;
  accentGradient: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  keyQuestion: string;
}

export type GalleryCategory =
  | 'All'
  | 'Speaking & Presentations'
  | 'Product Demonstrations'
  | 'Knowledge Sharing'
  | 'Professional Moments';

export interface GalleryPhoto {
  id: string;
  src: string;
  originalFilename: string;
  alt: string;
  caption: string;
  category: Exclude<GalleryCategory, 'All'>;
  aspectClass: string;
  isGroupPhoto?: boolean;
  permissionNote?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  note?: string;
  items: string[];
}

export interface EducationItem {
  id: string;
  qualification: string;
  institution: string;
  distinction?: string;
  verificationNote?: string;
}

export const PROFILE_IDENTITY = {
  name: 'Kavindra Jayamal Diyagaha',
  shortName: 'Kavindra Diyagaha',
  currentRole: 'Senior Business Analyst',
  currentOrganisation: 'iTechro',
  location: 'Sri Lanka',
  phoneDisplay: '+94 77 555 9579',
  phoneHref: 'tel:+94775559579',
  emails: ['connect.kavindra@gmail.com', 'contact.kavindrajay@gmail.com'],
  linkedinUrl: 'https://www.linkedin.com/in/kavindra-diyagaha/',
  youtubeUrl: 'https://youtu.be/EaEtS289pCI?si=iLChiwauB-ZnRnwW',
  youtubeEmbedUrl: 'https://www.youtube-nocookie.com/embed/EaEtS289pCI',
  positioning:
    'Business-to-Technology Transformation Professional with strong experience across Business Analysis, Product Ownership, Project Delivery and Solution Consulting.',
  heroPortrait: '/assets/aistudio/profile-pic__20_-1_e0a3b060.png',
  aboutPortrait: '/assets/aistudio/20250603_153725_51753ac4.jpg',
  storyMomentPhoto: '/assets/aistudio/20231214_200551_74e90596.jpg',
};

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'expertise', label: 'Expertise', href: '#expertise' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'in-action', label: 'In Action', href: '#in-action' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const HERO_FLOATING_DISCIPLINES = [
  'Business Analysis',
  'Product Ownership',
  'Solution Thinking',
  'Project Delivery',
  'Stakeholder Collaboration',
];

export const VALUE_FLOW_NODES: ValueFlowNode[] = [
  {
    id: 'challenges',
    step: '01',
    title: 'Business Challenges',
    summary: 'Uncover operational needs, constraints, and real organisational context.',
  },
  {
    id: 'analysis',
    step: '02',
    title: 'Analysis & Discovery',
    summary: 'Map processes, clarify stakeholder expectations, and structure requirements.',
  },
  {
    id: 'solution',
    step: '03',
    title: 'Solution Definition',
    summary: 'Evaluate practical software options, rules, and functional designs.',
  },
  {
    id: 'delivery',
    step: '04',
    title: 'Product & Delivery',
    summary: 'Prioritise backlogs, align technical teams, and coordinate execution.',
  },
  {
    id: 'outcomes',
    step: '05',
    title: 'Business Outcomes',
    summary: 'Validate implemented capabilities against agreed objectives and UAT.',
  },
];

export const CORE_EXPERTISE: ExpertiseItem[] = [
  {
    index: '01',
    title: 'Business Analysis & Requirements Engineering',
    description:
      'Understanding business challenges, eliciting stakeholder needs, analysing processes, defining functional and non-functional requirements, and translating complex information into clear actionable specifications.',
    capabilities: [
      'Requirements Elicitation',
      'BPMN',
      'Process Mapping',
      'BRD/FRD/SRS',
      'User Stories',
      'Acceptance Criteria',
      'UAT',
    ],
    motif: 'requirements',
  },
  {
    index: '02',
    title: 'Product Ownership & Product Thinking',
    description:
      'Connecting customer needs and business priorities with product features, roadmaps, backlogs, and releases.',
    capabilities: [
      'Product Roadmaps',
      'Backlog Management',
      'Feature Prioritisation',
      'Stakeholder Engagement',
      'Release Planning',
      'Product Demonstrations',
    ],
    motif: 'product',
  },
  {
    index: '03',
    title: 'Project & Delivery Coordination',
    description:
      'Supporting the movement from requirements and plans to implemented solutions through planning, coordination, stakeholder communication, milestones, dependencies, and validation.',
    capabilities: [
      'Project Planning',
      'Delivery Coordination',
      'Scope Management',
      'Change Requests',
      'Vendor Collaboration',
    ],
    motif: 'delivery',
  },
  {
    index: '04',
    title: 'Solution Consulting & Pre-Sales',
    description:
      'Understanding client challenges, shaping solution approaches, and communicating technology capabilities through proposals, presentations, demonstrations, and proofs of concept.',
    capabilities: [
      'Solution Discovery',
      'RFP/EOI Support',
      'Proposals',
      'Presentations',
      'Product Demos',
      'POCs',
    ],
    motif: 'presales',
  },
  {
    index: '05',
    title: 'Digital Transformation & Process Improvement',
    description:
      'Analysing existing workflows, identifying improvement opportunities, and shaping how software and automation can address organisational needs.',
    capabilities: [
      'BPMN',
      'Workflow Automation',
      'Business Process Modelling',
      'Business Rules',
      'Low-Code/No-Code Platforms',
    ],
    motif: 'process',
  },
  {
    index: '06',
    title: 'Stakeholder Collaboration & Communication',
    description:
      'Connecting business stakeholders, management, technical teams, development teams, and external partners through effective communication and shared understanding.',
    capabilities: [
      'Stakeholder Engagement',
      'Workshops',
      'Facilitation',
      'Training',
      'Presentations',
      'Expectation Management',
    ],
    motif: 'stakeholders',
  },
];

export const AI_ERA_CAPABILITIES: AICapabilityDetail[] = [
  {
    index: '01',
    title: 'Understanding the Real Business Problem',
    description:
      'Working beyond an initial request to uncover the underlying business needs, processes, constraints, dependencies, and stakeholder expectations.',
    networkLabel: 'Analysis',
    networkAngleDeg: -90,
    focusOutcome: 'Problem clarity before solution speed',
  },
  {
    index: '02',
    title: 'Stakeholder Alignment & Trust',
    description:
      'Connecting people with different responsibilities, priorities, and perspectives to develop shared understanding and realistic expectations.',
    networkLabel: 'Stakeholders',
    networkAngleDeg: -38,
    focusOutcome: 'Shared understanding across teams',
  },
  {
    index: '03',
    title: 'Critical Thinking & Analysis',
    description:
      'Questioning assumptions, evaluating requirements, identifying gaps, analysing information, and considering business and delivery implications.',
    networkLabel: 'Communication',
    networkAngleDeg: 13,
    focusOutcome: 'Rigorous evaluation of options and trade-offs',
  },
  {
    index: '04',
    title: 'Solution Thinking & Design Collaboration',
    description:
      'Translating business needs into workable functional solutions through process design, solution options, business rules, information flows, and technical collaboration.',
    networkLabel: 'Solution Thinking',
    networkAngleDeg: 64,
    focusOutcome: 'Practical functional architecture & workflows',
  },
  {
    index: '05',
    title: 'Product Judgement & Prioritisation',
    description:
      'Connecting customer needs, product objectives, stakeholder expectations, features, priorities, and implementation considerations.',
    networkLabel: 'Product Decisions',
    networkAngleDeg: 115,
    focusOutcome: 'Deliberate prioritisation of what matters most',
  },
  {
    index: '06',
    title: 'Communication & Pre-Sales Demonstrations',
    description:
      'Explaining software capabilities and solution value through presentations, proposals, demonstrations, proofs of concept, and knowledge sharing.',
    networkLabel: 'Delivery',
    networkAngleDeg: 167,
    focusOutcome: 'Coordinated execution from discovery to launch',
  },
  {
    index: '07',
    title: 'Delivery Alignment & Validation',
    description:
      'Helping ensure business requirements, agreed scope, implementation activities, and acceptance criteria remain connected.',
    networkLabel: 'Validation',
    networkAngleDeg: 218,
    focusOutcome: 'Confidence that delivered solutions meet business intent',
  },
];

export const EXPERIENCE_ROLES: ExperienceRole[] = [
  {
    id: 'itechro',
    organisation: 'iTechro',
    role: 'Senior Business Analyst',
    period: 'June 2026 – Present',
    summary:
      'Working across business discovery, pre-sales, solution definition, requirements analysis, scope definition, delivery agreements, stakeholder collaboration, and implementation readiness.',
    secondaryNote:
      'Also contributing to internal AI-assisted delivery process improvement alongside leadership and technical colleagues.',
    isCurrent: true,
  },
  {
    id: 'enadoc-po',
    organisation: 'Enadoc / Tech One Global',
    role: 'Product Owner',
    period: 'August 2024 – June 2026',
    summary:
      'Product ownership for Enadoc and Flowdoh, including roadmaps, backlogs, prioritisation, stakeholder engagement, requirements, release-related activities, product presentations, demonstrations, and enablement.',
  },
  {
    id: 'enadoc-ba',
    organisation: 'Enadoc / Tech One Global',
    role: 'Business Analyst',
    period: 'January 2023 – August 2024',
    summary:
      'Worked on enterprise document management and workflow automation implementations involving international client engagements, business requirements, process modelling, Agile collaboration, implementation coordination, and UAT.',
  },
  {
    id: 'digital-x-labs',
    organisation: 'Digital X Labs',
    role: 'Associate Project Manager',
    period: 'January 2022 – January 2023',
    summary:
      'Worked on customer data platforms, digital engagement, marketing technology, and software delivery projects involving planning, stakeholder coordination, budgets, procurement, vendor communication, and delivery tracking.',
  },
  {
    id: 'epic-psba',
    organisation: 'Epic Lanka Technologies',
    role: 'Product Specialist – Business Analyst',
    period: 'March 2020 – January 2022',
    summary:
      'Worked with DOXPRO Spaces and e-commerce products, including business analysis, workflow configuration, product demonstrations, proofs of concept, pre-sales, and feature-related collaboration.',
  },
  {
    id: 'epic-tba',
    organisation: 'Epic Lanka Technologies',
    role: 'Trainee Business Analyst',
    period: 'March 2019 – March 2020',
    summary:
      'Supported enterprise and public-sector software implementations through requirements documentation, process analysis, stakeholder communication, testing, and implementation support.',
  },
  {
    id: 'daraz',
    organisation: 'Daraz',
    role: 'Content Intern',
    period: 'November 2018 – February 2019',
    summary:
      'Supported digital content management and quality-control activities in an e-commerce environment.',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'enadoc',
    index: '01',
    title: 'Enadoc',
    subtitle: 'Enterprise Document Management & Archival',
    organisation: 'Enadoc / Tech One Global',
    role: 'Product Owner',
    discipline: 'Product Ownership',
    description:
      'Worked on product roadmaps, backlog management, feature requirements, stakeholder communication, product validation, release-related activities, demonstrations, and product enablement.',
    capabilities: [
      'Product Ownership',
      'Backlog Management',
      'Enterprise Content Management',
      'Stakeholder Collaboration',
      'Presentations',
    ],
    featured: true,
    accentGradient: 'from-[#EEF3FF] via-[#F7F9FF] to-[#F2EFFF]',
  },
  {
    id: 'flowdoh',
    index: '02',
    title: 'Flowdoh',
    subtitle: 'Low-Code / No-Code Workflow Automation',
    organisation: 'Enadoc / Tech One Global',
    role: 'Product Owner',
    discipline: 'Product Ownership',
    description:
      'Worked on requirements, prioritisation, stakeholder engagement, feature coordination, release-related activities, and product demonstrations for a workflow automation platform.',
    capabilities: [
      'Product Ownership',
      'Workflow Automation',
      'Business Process Understanding',
      'Product Communication',
    ],
    featured: true,
    accentGradient: 'from-[#F2EFFF] via-[#F8F8FF] to-[#EEF3FF]',
  },
  {
    id: 'doxpro',
    index: '03',
    title: 'DOXPRO Spaces',
    subtitle: 'Business Workflow Management',
    organisation: 'Epic Lanka Technologies',
    role: 'Product Specialist – Business Analyst',
    discipline: 'Business Analysis',
    description:
      'Worked on requirements analysis, workflow configuration, product feature collaboration, client demonstrations, pre-sales documentation, and proof-of-concept environments.',
    capabilities: [
      'Business Analysis',
      'Workflow Configuration',
      'Product Demonstrations',
      'Pre-Sales',
      'POCs',
    ],
    accentGradient: 'from-[#EEF4FF] via-[#FFFFFF] to-[#F4F6FC]',
  },
  {
    id: 'e3-cdp',
    index: '04',
    title: 'E3 Customer Data Platform',
    subtitle: 'Customer Data & Digital Engagement',
    organisation: 'Digital X Labs',
    role: 'Associate Project Manager',
    discipline: 'Project Delivery',
    description:
      'Supported project planning, requirements coordination, stakeholder engagement, delivery tracking, and technical collaboration involving customer data and digital engagement technology.',
    capabilities: [
      'Project Coordination',
      'Requirements Analysis',
      'Stakeholder Management',
      'Delivery Planning',
    ],
    accentGradient: 'from-[#F4F1FF] via-[#FFFFFF] to-[#EEF3FF]',
  },
  {
    id: 'lucky-1',
    index: '05',
    title: 'Lucky 1',
    subtitle: 'Lottery Management Platform',
    organisation: 'Digital X Labs',
    role: 'Associate Project Manager',
    discipline: 'Project Delivery',
    description:
      'Worked on project planning and coordination activities including requirements discussions, stakeholder communication, delivery tracking, and implementation-related coordination.',
    capabilities: [
      'Project Delivery',
      'Stakeholder Coordination',
      'Requirements Analysis',
      'Implementation Support',
    ],
    accentGradient: 'from-[#F8F7F4] via-[#FFFFFF] to-[#EEF3FF]',
  },
  {
    id: 'enterprise-implementations',
    index: '06',
    title: 'Enterprise Workflow & Document Management Implementations',
    subtitle: 'Enterprise Software Implementation',
    organisation: 'Enadoc / Tech One Global',
    role: 'Business Analyst',
    discipline: 'Business Analysis',
    description:
      'Worked on requirements elicitation, business process modelling, user stories, acceptance criteria, technical clarifications, implementation coordination, and UAT across client engagements in Sri Lanka and overseas.',
    capabilities: [
      'Requirements Engineering',
      'BPMN',
      'Enterprise Software',
      'Stakeholder Collaboration',
      'UAT',
    ],
    accentGradient: 'from-[#EEF3FF] via-[#FAFBFD] to-[#F2EFFF]',
  },
  {
    id: 'public-sector',
    index: '07',
    title: 'Public-Sector Digitisation',
    subtitle: 'Enterprise & Government Software Implementations',
    organisation: 'Epic Lanka Technologies',
    role: 'Trainee Business Analyst',
    discipline: 'Business Analysis',
    description:
      'Supported enterprise and public-sector implementations involving business requirements, documentation, process analysis, stakeholder collaboration, and testing.',
    capabilities: [
      'Business Analysis',
      'Requirements Documentation',
      'Process Modelling',
      'Software Testing Support',
    ],
    accentGradient: 'from-[#F4F5FA] via-[#FFFFFF] to-[#EEF3FF]',
  },
];

export const WORKING_APPROACH: ProcessStep[] = [
  {
    step: '01',
    title: 'Understand',
    description:
      'Explore the business challenge, stakeholder expectations, existing processes, constraints, and intended outcomes.',
    keyQuestion: 'What is the actual operational need behind the request?',
  },
  {
    step: '02',
    title: 'Analyse',
    description:
      'Translate information into requirements, process models, business rules, dependencies, and decisions.',
    keyQuestion: 'Where are the gaps, rules, dependencies, and edge cases?',
  },
  {
    step: '03',
    title: 'Shape',
    description:
      'Collaborate on solution options, functional designs, scope boundaries, and delivery considerations.',
    keyQuestion: 'Which practical solution path fits both business goals and constraints?',
  },
  {
    step: '04',
    title: 'Align',
    description:
      'Create shared understanding across stakeholders and technical teams.',
    keyQuestion: 'Do business owners and delivery teams share the same picture?',
  },
  {
    step: '05',
    title: 'Support Delivery',
    description:
      'Maintain requirements clarity, address questions, support coordination, and help keep implementation activities aligned.',
    keyQuestion: 'Are delivery milestones and clarifications moving smoothly?',
  },
  {
    step: '06',
    title: 'Validate',
    description:
      'Confirm that implemented functionality aligns with business requirements, acceptance criteria, and stakeholder expectations.',
    keyQuestion: 'Does the delivered outcome solve the problem reliably?',
  },
];

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  'All',
  'Speaking & Presentations',
  'Product Demonstrations',
  'Knowledge Sharing',
  'Professional Moments',
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'stage-presentation',
    src: '/assets/aistudio/IMG-20240120-WA0000_dd36f15f.jpg',
    originalFilename: 'IMG-20240120-WA0000.jpg',
    alt: 'Kavindra Jayamal Diyagaha speaking on stage during a business workflow presentation',
    caption: 'Speaking on business workflows and software capabilities during an industry event.',
    category: 'Speaking & Presentations',
    aspectClass: 'aspect-[3/4]',
  },
  {
    id: 'product-demo-stage',
    src: '/assets/aistudio/Screenshot_20240123_211034_LinkedIn_ec28c65c.jpg',
    originalFilename: 'Screenshot_20240123_211034_LinkedIn.jpg',
    alt: 'Kavindra presenting workflow automation solutions on stage with a handheld microphone',
    caption: 'Demonstrating workflow automation capabilities and practical business use cases.',
    category: 'Product Demonstrations',
    aspectClass: 'aspect-[4/3]',
  },
  {
    id: 'business-workflows-hall',
    src: '/assets/aistudio/20240119_185617_e45ff309.jpg',
    originalFilename: '20240119_185617.jpg',
    alt: 'Kavindra presenting Business Workflows on stage in front of a conference screen',
    caption: 'Presenting business workflow scenarios to an audience of professionals.',
    category: 'Speaking & Presentations',
    aspectClass: 'aspect-[3/4]',
  },
  {
    id: 'campus-knowledge-sharing',
    src: '/assets/aistudio/MicrosoftTeams-image__6__a7389560.jpg',
    originalFilename: 'MicrosoftTeams-image (6).jpg',
    alt: 'Kavindra facilitating a campus knowledge-sharing session covering analytical and communication skills',
    caption: 'Facilitating a campus knowledge-sharing session on analytical, communication, and stakeholder skills.',
    category: 'Knowledge Sharing',
    aspectClass: 'aspect-[4/3]',
  },
  {
    id: 'workshop-training-lab',
    src: '/assets/aistudio/tmp_368fad25-482e-4ece-bb85-52e33fad062f_f4061db3.jpeg',
    originalFilename: 'tmp_368fad25-482e-4ece-bb85-52e33fad062f.jpeg',
    alt: 'Kavindra conducting a hands-on software workshop and product enablement session in a computer lab',
    caption: 'Conducting a hands-on workflow software workshop and enablement session.',
    category: 'Knowledge Sharing',
    aspectClass: 'aspect-[4/3]',
  },
  {
    id: 'editorial-portrait',
    src: '/assets/aistudio/20250603_153725_51753ac4.jpg',
    originalFilename: '20250603_153725.jpg',
    alt: 'Full-length professional portrait of Kavindra Jayamal Diyagaha in formal blazer',
    caption: 'Full-length professional portrait at an engagement venue.',
    category: 'Professional Moments',
    aspectClass: 'aspect-[3/4]',
  },
  {
    id: 'icsdb-conference-moment',
    src: '/assets/aistudio/20231214_200551_74e90596.jpg',
    originalFilename: '20231214_200551.jpg',
    alt: 'Kavindra representing Enadoc Pvt Ltd at ICSDB 2023 with recognition presented to the organisation',
    caption: 'Representing Enadoc Pvt Ltd at ICSDB 2023 following organisational recognition.',
    category: 'Professional Moments',
    aspectClass: 'aspect-[3/4]',
  },
  {
    id: 'team-group-photo',
    src: '/assets/aistudio/IMG-20240221-WA0003_f058d951.jpg',
    originalFilename: 'IMG-20240221-WA0003.jpg',
    alt: 'Group photograph of Kavindra with colleagues at a professional engagement',
    caption: 'Collaborative team engagement photograph.',
    category: 'Professional Moments',
    aspectClass: 'aspect-[4/3]',
    isGroupPhoto: true,
    permissionNote: 'Group photo: confirm colleague publication consent prior to public release.',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'business-analysis',
    title: 'Business Analysis',
    items: [
      'Requirements Elicitation',
      'Requirements Engineering',
      'Business Process Analysis',
      'BPMN',
      'Process Mapping',
      'BRD',
      'FRD',
      'SRS',
      'User Stories',
      'Use Cases',
      'Acceptance Criteria',
      'UAT',
      'Requirements Traceability',
    ],
  },
  {
    id: 'product-ownership',
    title: 'Product Ownership',
    items: [
      'Product Roadmaps',
      'Backlog Management',
      'Prioritisation',
      'Feature Definition',
      'Product Requirements',
      'Stakeholder Engagement',
      'Release Planning',
      'Product Demonstrations',
      'Agile/Scrum Collaboration',
    ],
  },
  {
    id: 'project-delivery',
    title: 'Project & Delivery',
    items: [
      'Project Planning',
      'Delivery Coordination',
      'Milestone Tracking',
      'Scope Management',
      'Change Requests',
      'Risk and Dependency Tracking',
      'Vendor Coordination',
      'Implementation Support',
    ],
  },
  {
    id: 'solution-consulting',
    title: 'Solution Consulting & Pre-Sales',
    items: [
      'Solution Discovery',
      'Client Workshops',
      'Business Process Design',
      'Solution Definition',
      'Product Presentations',
      'Proofs of Concept',
      'Proposals',
      'RFP/EOI Responses',
      'Compliance Matrices',
      'Integration Requirements',
    ],
  },
  {
    id: 'familiar-tools',
    title: 'Familiar Tools',
    note: 'Tools used across analysis, product collaboration, visual communication, and technical coordination.',
    items: [
      'Jira',
      'Azure DevOps',
      'Microsoft Visio',
      'Microsoft Power BI',
      'Figma',
      'Adobe XD',
      'Canva',
      'Adobe Photoshop',
      'Microsoft Office',
      'SQL Server Management Studio',
      'Visual Studio',
      'AnyLogic',
      'Windows',
      'Linux',
    ],
  },
  {
    id: 'technology-domains',
    title: 'Technology Domains',
    items: [
      'Enterprise Content Management',
      'Document Management',
      'Digital Archiving',
      'Workflow Automation',
      'Low-Code/No-Code Platforms',
      'Customer Data Platforms',
      'Marketing Technology',
      'E-Commerce',
      'Enterprise Software Implementations',
      'Public-Sector Digitalisation',
    ],
  },
];

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    id: 'coventry-bsc',
    qualification: 'BSc (Hons) Information Technology for Business',
    institution: 'Coventry University, United Kingdom',
    distinction: 'First Class Honours',
  },
  {
    id: 'bcs-ba',
    qualification: 'Business Analysis Qualification',
    institution: 'BCS — The Chartered Institute for IT',
    verificationNote: 'Exact certificate title pending verification against original qualification document.',
  },
  {
    id: 'nibm-hdc',
    qualification: 'Higher Diploma in Computer Based Information Systems',
    institution: 'National Institute of Business Management, Sri Lanka',
  },
  {
    id: 'nibm-dcsd',
    qualification: 'Diploma in Computer System Designing',
    institution: 'National Institute of Business Management, Sri Lanka',
  },
];

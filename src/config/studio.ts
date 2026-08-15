export interface NavItem {
  label: string;
  href: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  summary: string;
  description: string;
  tags: string[];
  metrics?: string;
  image?: string;
  status?: string;
  githubUrl?: string;
  deployedUrl?: string;
  features?: string[];
  versionComparison?: string;
  researchNote?: string;
}

export interface AiProjectItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  achievement: string;
  interest: string;
  highlights: string[];
  additionalInfo?: string;
  links?: { label: string; url: string }[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  achievements: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  cgpa?: string;
  coursework?: string[];
  details?: string;
}

export interface StudioConfig {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  phone?: string;
  github: string;
  linkedin: string;
  twitter: string;
  nav: NavItem[];
}

export interface SkillItem {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  iconName: "code" | "layout" | "server" | "database" | "terminal" | "cpu";
  skills: SkillItem[];
}

export const studioConfig: StudioConfig = {
  name: "Aakash B Shetty",
  title: "Full-Stack Developer & Creative Technologist",
  tagline: "Building intuitive full-stack web applications with robust database architectures, smart AI integrations, and sleek editorial UI.",
  bio: "I'm a full-stack developer who genuinely enjoys building software that works flawlessly under the hood while feeling intuitive on the surface.",
  location: "Mysuru, India",
  email: "aakashshetty1928@gmail.com",
  phone: "6364024121",
  github: "https://github.com/shetty051",
  linkedin: "https://www.linkedin.com/in/aakash-b-shetty/",
  twitter: "https://twitter.com",
  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Projects", href: "#projects" },
    { label: "AI", href: "#ai" },
  ],
};

export const skillsData: SkillCategory[] = [
  {
    title: "Languages",
    iconName: "code",
    skills: [
      { name: "C++", level: 90 },
      { name: "Python", level: 70 },
      { name: "JavaScript / TypeScript", level: 50 },
    ],
  },
  {
    title: "Frontend",
    iconName: "layout",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
    ],
  },
  {
    title: "Backend",
    iconName: "server",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "NestJS", level: 50 },
    ],
  },
  {
    title: "Databases",
    iconName: "database",
    skills: [
      { name: "MySQL", level: 90 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 45 },
    ],
  },
  {
    title: "DevOps & Tools",
    iconName: "terminal",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 50 },
    ],
  },
  {
    title: "Core CS",
    iconName: "cpu",
    skills: [
      { name: "Data Structures & Algorithms", level: 90 },
      { name: "RDBMS Design", level: 90 },
      { name: "Object-Oriented Programming", level: 80 },
    ],
  },
];

export const colorThemeTokens = {
  light: {
    bgPrimary: "#F9F8F6",
    bgSecondary: "#F0EEE9",
    bgCard: "rgba(255, 255, 255, 0.75)",
    textPrimary: "#141413",
    textSecondary: "#52504C",
    textMuted: "#8C8983",
    accent: "#8B3E2F", // Terracotta Rust
    accentIndigo: "#2D3A4E", // Deep Slate Indigo
    border: "rgba(20, 20, 19, 0.08)",
  },
  dark: {
    bgPrimary: "#0C0C0D",
    bgSecondary: "#141416",
    bgCard: "rgba(24, 24, 28, 0.7)",
    textPrimary: "#F4F4F5",
    textSecondary: "#A1A1AA",
    textMuted: "#71717A",
    accent: "#E07A5F", // Warm Amber Terracotta
    accentIndigo: "#818CF8", // Electric Indigo Accent
    border: "rgba(244, 244, 245, 0.1)",
  },
};

export const projectsData: ProjectItem[] = [
  {
    id: "collabowrite-2",
    title: "CollaboWrite 2.0",
    subtitle: "Real-time Collaborative Writing Platform",
    category: "Full-Stack Web App",
    year: "2025",
    summary: "Full-stack collaborative writing platform featuring real-time analytics for writers and a fork/branch engine for collaborative document versioning.",
    description: "CollaboWrite 2.0 was architected for remote writing teams and content creators who require real-time collaborative editing paired with Git-like document branching. Designed with a dual-frontend architecture separating reader and writer experiences, it provides auth-gated interactions, granular branch management, and live engagement metrics.",
    tags: ["React", "Vite", "Node.js", "Express", "MongoDB", "Prisma"],
    status: "Completed",
    githubUrl: "https://github.com/shetty051/CollaboWrite",
    deployedUrl: "https://collabo-write-2-0.vercel.app/",
    metrics: "Real-time sync & branch merging across parallel sessions",
    features: [
      "Real-time analytics on story performance, reader drop-offs, and writing velocity",
      "Collaborative document versioning with Git-like fork and branch features",
      "Protected reader and writer experiences with auth-gated interaction modes",
      "Interactive social ecosystem with commenting, rating, and author follow systems",
    ],
    versionComparison: "CollaboWrite 2.0 completely reimagines v1.0 by transitioning from a single monolithic frontend to a decoupled dual-frontend architecture (reader vs writer). It introduces Git-style story branching, live analytical telemetry, and Prisma ORM for relational query optimization over initial flat document stores.",
  },
  {
    id: "trackmyhabits",
    title: "TrackMyHabits",
    subtitle: "AI-Assisted Habit Analytics Application",
    category: "Full-Stack & AI",
    year: "2026",
    summary: "AI-assisted habit-tracking application featuring an animated mascot (Rooney), personalized nudges, and streak analytics.",
    description: "TrackMyHabits combines habit tracking psychology with generative AI guidance. Built on Next.js, NestJS, PostgreSQL, and Prisma ORM, it automates daily streak rolls, handles freeze-day protections, and delivers personalized contextual nudges driven by Gemini API.",
    tags: ["Next.js", "NestJS", "Prisma", "PostgreSQL", "Framer Motion", "Gemini API"],
    status: "Completed",
    githubUrl: "https://github.com/shetty051/TrackMyHabits",
    deployedUrl: "https://trackmyhabits-ashen.vercel.app/",
    metrics: "Gemini API dynamic nudge engine & interactive mascot",
    features: [
      "Animated AI mascot (Rooney) reacting dynamically to user progress and streak gains",
      "Contextual AI nudges powered by Gemini API based on habit completion history",
      "Automated day-rollover engine and streak-freeze safety buffer protection",
      "Interactive progress charts, streak heatmaps, and habit completion analytics",
    ],
  },
  {
    id: "parkinsons-detection-ai",
    title: "Parkinson's Disease Detection AI",
    subtitle: "Multi-Modal Deep Learning Diagnostic System",
    category: "AI & Machine Learning",
    year: "2026",
    summary: "Multi-modal deep learning model employing a late-fusion neural architecture to combine vocal and motor telemetry for early Parkinson's detection.",
    description: "This research initiative explores non-invasive early detection of Parkinson's Disease. Utilizing a late-fusion deep neural network architecture built in Python, the system processes acoustic voice features alongside hand tremor motor telemetry to yield high diagnostic accuracy under limited clinical training datasets.",
    tags: ["Python", "Deep Learning", "TensorFlow / PyTorch", "Late-Fusion", "Healthcare AI"],
    status: "In Development",
    metrics: "Late-fusion multi-modal telemetry classification",
    researchNote: "Research Phase: Currently undergoing validation against multi-modal clinical benchmark datasets. Source code repository is under academic review.",
    features: [
      "Multi-modal telemetry processing combining acoustic vocal spectrographs and motor signals",
      "Late-fusion neural architecture uniting independent feature extraction pipelines",
      "Specialized loss formulation optimized for high performance on limited clinical datasets",
    ],
  },
  {
    id: "collabowrite-1",
    title: "CollaboWrite 1.0",
    subtitle: "Initial Collaborative Text Prototype",
    category: "Full-Stack Web App",
    year: "2024",
    summary: "The initial prototype of CollaboWrite establishing collaborative online story creation and community feedback loops.",
    description: "CollaboWrite 1.0 laid the groundwork for collaborative online writing, featuring real-time story submissions, user commenting, and community voting engines built on React and Node.js.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    status: "Completed",
    githubUrl: "https://github.com/shetty051/CollaboWrite-1.0",
    deployedUrl: "https://collabo-write-five.vercel.app/",
    features: [
      "Shared community story creation canvas",
      "User authentication and story submission portal",
      "Comment streams and community rating system",
    ],
  },
  {
    id: "holdemhub",
    title: "HoldemHub",
    subtitle: "Texas Hold'em Poker Table & Game Engine",
    category: "Web Game Engine",
    year: "2024",
    summary: "Interactive Texas Hold'em web workstation featuring real-time hand evaluation, pot calculations, and multiplayer state management.",
    description: "HoldemHub brings the strategic depth of Texas Hold'em poker to the web with an interactive table UI, automated hand evaluation algorithms, pot splitting rules, and smooth turn management.",
    tags: ["React", "JavaScript", "Tailwind CSS", "Web Sockets"],
    status: "Completed",
    githubUrl: "https://github.com/shetty051/HoldemHub",
    deployedUrl: "https://hold-em-hub.vercel.app/",
    features: [
      "Real-time Texas Hold'em poker hand strength evaluator",
      "Side pot calculation algorithm and dynamic turn timer",
      "Responsive poker table user interface with chip animations",
    ],
  },
];

export const aiProjectsData: AiProjectItem[] = [
  {
    id: "writing-filmography",
    title: "Writing & Filmography",
    category: "Literary & Creative Arts",
    tagline: "Crafting narratives through prose, fiction, and cinematic storytelling.",
    description: "Self-published author of two published novels, currently penning a third manuscript aimed at traditional publishing houses. Driven by narrative arcs, character psychology, and evocative atmosphere.",
    achievement: "Recipient of the Notion Press 'Rising Star' Award for debut novel performance.",
    interest: "Cinematic storytelling, editorial prose, and digital content creation.",
    highlights: [
      "Author of 2 self-published novels with active readership",
      "Notion Press 'Rising Star' Award winner for debut fiction",
      "Currently authoring a third novel for traditional publication",
      "Editor and essayist at 'The sign of the burnt petals'",
    ],
    links: [
      {
        label: "Blog: The Sign of the Burnt Petals",
        url: "https://thesignoftheburntpetals.wordpress.com/",
      },
      {
        label: "Notion Press Author Profile",
        url: "https://notionpress.com",
      },
    ],
  },
  {
    id: "public-speaking",
    title: "Public Speaking & Communication",
    category: "Oratory & Leadership",
    tagline: "Advocating effective speech, rhetoric, and leadership development.",
    description: "Active speaker, speech coach, and advocate for persuasive communication. Experienced in delivering keynote addresses, competitive speeches, and leading public relations strategy.",
    achievement: "1st Place Champion in Division A International Speech Contest (Toastmasters, 2025).",
    interest: "Speech coaching, rhetorical theory, and organizational leadership development.",
    additionalInfo: "Served as Vice President of Public Relations (VP-PR) for Toastmasters in 2024, driving community outreach and brand communications.",
    highlights: [
      "1st Place — Division A International Speech Contest (Toastmasters, 2025)",
      "Served as Vice President of Public Relations (VP-PR), Toastmasters (2024)",
      "YouTube content creator sharing speech analyses and communication frameworks",
      "Mentor and workshop facilitator for emerging public speakers",
    ],
    links: [
      {
        label: "YouTube Channel: @AakashShetty",
        url: "https://www.youtube.com/@AakashShetty-qy9tb",
      },
      {
        label: "Toastmasters Member Profile",
        url: "https://www.toastmasters.org",
      },
    ],
  },
  {
    id: "volunteering-contributions",
    title: "Volunteering & Community Leadership",
    category: "Event Management & Outreach",
    tagline: "Orchestrating impactful events and empowering collaborative communities.",
    description: "Actively involved in organizing, directing, and executing large-scale events and technical symposiums across department and college levels. Passionate about community building and team dynamics.",
    achievement: "Played a pivotal leadership role in organizing and executing multiple high-impact college and department events.",
    interest: "Community building, event management, and team leadership.",
    highlights: [
      "Lead organizer for major college-level and departmental technical events",
      "Spearheaded volunteer teams and logistical operations for student symposiums",
      "Fostered inclusive student developer communities and peer mentorship groups",
    ],
    links: [
      {
        label: "Event Leadership & Community Portfolio",
        url: "https://github.com/shetty051",
      },
    ],
  },
];

export const experienceData: ExperienceItem[] = [
  {
    period: "2024 — Present",
    role: "Lead Creative Engineer",
    company: "Studio Atelier Digital",
    location: "San Francisco, CA",
    description: "Directing front-end architecture and creative technology for flagship digital products and brand experiences.",
    achievements: [
      "Architected Next.js App Router design system used by 50+ engineers",
      "Reduced main thread frame drops by 45% using Framer Motion hardware-accelerated layouts",
      "Mentored junior engineers in typography math and CSS custom properties",
    ],
  },
  {
    period: "2021 — 2024",
    role: "Senior UI/UX Engineer",
    company: "Verve Media Lab",
    location: "New York, NY",
    description: "Engineered high-performance editorial websites and interactive WebGL storytelling pieces.",
    achievements: [
      "Led technical execution of 12 award-winning digital feature publications",
      "Implemented dark/light mode seamless color blending system",
    ],
  },
  {
    period: "2018 — 2021",
    role: "Front-End Developer",
    company: "Monolith Craft Interactive",
    location: "Austin, TX",
    description: "Developed responsive web applications, component libraries, and interactive web tools.",
    achievements: [
      "Built cross-platform component library in React & TypeScript",
      "Increased Lighthouse performance scores from 72 to 98 average",
    ],
  },
];

export const educationData: EducationItem[] = [
  {
    degree: "B.E. in Computer Science – AI/ML",
    institution: "Vidyavardhaka College of Engineering",
    location: "Mysuru, Karnataka",
    period: "2023 – Present",
    cgpa: "8.28",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "DevOps",
      "Machine Learning",
      "Deep Learning",
    ],
    details: "Specializing in Artificial Intelligence and Machine Learning applications, full-stack web engineering, and relational database systems.",
  },
  {
    degree: "PUC (Pre-University Course)",
    institution: "BGS PU College",
    location: "Mysuru, Karnataka",
    period: "2021 – 2023",
    details: "Completed Pre-University education focusing on Physics, Chemistry, Mathematics, and Computer Science.",
  },
  {
    degree: "Secondary School Education (10th Grade)",
    institution: "Mysore West Lions Sevaniketan School",
    location: "Mysuru, Karnataka",
    period: "2012 – 2021",
    details: "Foundational academic schooling with active involvement in technical science projects and computer fundamentals.",
  },
];

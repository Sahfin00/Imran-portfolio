/**
 * Single source of truth for all portfolio content.
 * Add new projects, experiences, certifications, awards etc. here —
 * the UI renders whatever is in these arrays, no layout changes needed.
 */

export const profile = {
  name: "Md. Imran Hossain",
  role: "Electrical & Electronic Engineering Student | Emerging Engineer | Student Leader",
  institution: "Chittagong University of Engineering & Technology (CUET)",
  batch: "2023",
  graduation: "2028",
  headline: "Engineering ideas into possibilities.",
  intro:
    "I'm an Electrical & Electronic Engineering undergraduate at CUET, building experience across engineering, technology, leadership, organizational activities and professional development — one project, one responsibility, one lesson at a time.",
  email: "u2302131@student.cuet.ac.bd",
  linkedin: "https://www.linkedin.com/in/imrancueteee/",
};

export const navSections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "journey", label: "Journey" },
  { id: "projects", label: "Projects" },
  { id: "leadership", label: "Leadership" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
] as const;

export const heroStats = [
  { value: 140, suffix: "", label: "CVs collected for JobSpecs 2026" },
  { value: 5, suffix: "+", label: "Organizations & clubs involved" },
  { value: 2, suffix: "", label: "Engineering projects completed" },
];

export const currentlyExploring = [
  "Analog & digital electronics fundamentals",
  "Circuit simulation with Proteus & LTspice",
  "Python for engineering problem solving",
  "Power system & transformer design basics",
  "Leadership and event management practice",
];

export const aboutMilestones = [
  { year: "2023", title: "Joined CUET" },
  { year: "2024", title: "Engineering Projects" },
  { year: "2025", title: "Leadership & Organizations" },
  { year: "2026", title: "Professional Development" },
  { year: "2028", title: "Career / Higher Studies" },
];

export const education = [
  {
    institution: "Chittagong University of Engineering & Technology (CUET)",
    degree: "B.Sc. in Electrical & Electronic Engineering (EEE)",
    period: "Batch 2023 — Expected Graduation 2028",
    status: "Ongoing",
    details: [
      { label: "CGPA", value: "3.91 / 4.00" },
      {
        label: "Relevant coursework",
        value:
          "Electrical Circuits, Electronics, Electrical Machines, Power Systems, Control Systems, Signals & Systems, Electromagnetic Fields, Digital Electronics, Engineering Mathematics, Numerical Methods, Power Electronics",
      },
      {
        label: "Academic achievements",
        value:
          "Maintaining a strong 3.91 CGPA while actively participating in technical projects, professional organizations, leadership activities, and career-development programs.",
      },
      {
        label: "Research interests",
        value:
          "Electrical & Electronic Engineering, Power & Energy Systems, Electrical Machines, Power Electronics, Renewable Energy, Embedded Systems, Electronics, and emerging engineering technologies.",
      },
      {
        label: "Laboratory experience",
        value:
          "Hands-on experience with electrical and electronic laboratory work, including circuit analysis and simulation, electronics, electrical machines, transformers, synchronous generators, measurement and instrumentation, and engineering design projects. Experience using Proteus, LTspice, and MATLAB for simulation, analysis, and technical work.",
      },
    ],
  },
];

export type Involvement = {
  role: string;
  org: string;
  meta?: string;
  period: string;
  points: string[];
  highlight?: string;
};

export const involvement: Involvement[] = [
  {
    role: "Campus Ambassador",
    org: "JobSpecs 2026",
    meta: "Spectrum — A Professional Skill Development Club, KUET",
    period: "2026",
    points: [
      "Promoted the JobSpecs 2026 National Job Fair across campus",
      "Collected 140 CVs from students and graduates",
    ],
    highlight: "Recognized as Best Campus Ambassador",
  },
  {
    role: "Assistant Secretary",
    org: "CUET Career Fest 2026",
    period: "2026",
    points: [
      "Involved in career-event organization and coordination",
      "Supported student engagement across fest activities",
    ],
  },
  {
    role: "Executive Member",
    org: "CUET Career Club",
    period: "Ongoing",
    points: [
      "Continued involvement in career development activities",
      "Contributes to student professional programs",
    ],
  },
  {
    role: "Executive Member",
    org: "IEEE CUET Student Branch",
    period: "2026",
    points: [
      "Involvement with a recognized technical and professional student organization",
    ],
  },
  {
    role: "Executive Member",
    org: "Green For Peace",
    period: "2026",
    points: ["Community engagement and volunteer-led initiatives"],
  },
];

export const leadership = [
  {
    org: "CUET Career Club",
    role: "Executive Member",
    note: "Career development and student professional activities.",
  },
  {
    org: "CUET Career Fest 2026",
    role: "Assistant Secretary",
    note: "Event organization, coordination and student engagement.",
  },
  {
    org: "IEEE CUET Student Branch",
    role: "Executive Member",
    note: "Technical and professional student community.",
  },
  {
    org: "Green For Peace",
    role: "Executive Member",
    note: "Community and environmental engagement.",
  },
  {
    org: "JobSpecs 2026",
    role: "Campus Ambassador",
    note: "Campus outreach, promotion and networking.",
  },
];

export const leadershipSkills = [
  "Leadership",
  "Communication",
  "Teamwork",
  "Event Coordination",
  "Networking",
  "Responsibility",
  "Community Engagement",
];

export type Project = {
  index: string;
  title: string;
  tagline: string;
  tags: string[];
  reportUrl: string;
  sections: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    index: "01",
    title: "PIR Sensor Security Alarm",
    tagline: "An electronics security project built around a PIR motion sensor alarm system.",
    tags: ["Electronics", "Sensors", "Security"],
    reportUrl:
      "https://drive.google.com/file/d/1vyz71Ur905xSeIg3DPr7u1U9UPn6TEnW/view?usp=sharing",
    sections: [
      {
        label: "Overview",
        value:
          "A PIR (passive infrared) sensor based alarm system that detects motion in a monitored area and triggers an audible alert.",
      },
      { label: "Objective", value: "To be added" },
      { label: "Components / technology used", value: "To be added" },
      { label: "How it works", value: "To be added" },
      { label: "Key learning", value: "To be added" },
      { label: "Images", value: "To be added" },
      { label: "Future improvements", value: "To be added" },
    ],
  },
  {
    index: "02",
    title: "63 kVA Transformer Design",
    tagline: "A completed electrical machine design project covering a 63 kVA transformer.",
    tags: ["Power", "Machine Design", "Calculations"],
    reportUrl:
      "https://drive.google.com/file/d/1N1Tzq2UBUVzk3P-9OR_ul_PGadYCFQjn/view?usp=sharing",
    sections: [
      { label: "Design objective", value: "To be added" },
      { label: "Design methodology", value: "To be added" },
      { label: "Engineering calculations", value: "To be added" },
      { label: "Key specifications", value: "To be added" },
      { label: "Software / tools used", value: "To be added" },
      { label: "Results", value: "To be added" },
      { label: "Lessons learned", value: "To be added" },
      { label: "Documentation / images", value: "To be added" },
    ],
  },
];

export const skillGroups = [
  {
    title: "Engineering & Technical",
    items: [
      { name: "Electrical & Electronic Engineering" },
      { name: "Circuit Design" },
      { name: "Electronics" },
      { name: "Technical Project Development" },
    ],
  },
  {
    title: "Programming",
    items: [{ name: "C" }, { name: "C++" }, { name: "Python", level: "Intermediate" }, { name: "MATLAB" }],
  },
  {
    title: "Engineering Tools",
    items: [{ name: "Proteus" }, { name: "LTspice" }],
  },
  {
    title: "Productivity",
    items: [{ name: "Microsoft Office" }],
  },
  {
    title: "Professional Skills",
    items: [
      { name: "Leadership" },
      { name: "Teamwork" },
      { name: "Communication" },
      { name: "Event Coordination" },
      { name: "Networking" },
      { name: "Problem Solving" },
    ],
  },
];

export const professionalDevelopment = [
  {
    year: "2026",
    title: "Aspire Leaders Program",
    org: "Harvard University — Harvard Business School",
    note: "Selected for a global leadership development program featuring learning and guidance from Harvard faculty and professors, focused on leadership, communication, critical thinking, professional development, and personal growth. Participated in collaborative learning with students from diverse backgrounds and perspectives.",
  },
];

export const achievements = [
  {
    featured: true,
    title: "Best Campus Ambassador",
    event: "JobSpecs 2026",
    org: "Spectrum — A Professional Skill Development Club, KUET",
    metric: { value: 140, label: "CVs collected" },
    note: "Recognized as Best Campus Ambassador for outreach and engagement during the JobSpecs 2026 National Job Fair campaign.",
  },
];

export const journey = [
  {
    year: "2023",
    items: ["Began the EEE journey at CUET"],
  },
  {
    year: "2024 — 2026",
    items: [
      "Career Club involvement",
      "Career Fest participation",
      "Technical projects",
      "Organizational activities",
    ],
  },
  {
    year: "2026",
    items: [
      "JobSpecs Campus Ambassador",
      "140 CVs collected",
      "Best Campus Ambassador",
      "IEEE CUET Student Branch",
      "Green For Peace",
      "Aspire Leaders Program",
    ],
  },
  {
    year: "2026 — 2028",
    items: [
      "Continue engineering education",
      "Build technical portfolio",
      "Develop leadership and professional experience",
      "Explore research and career opportunities",
    ],
  },
];

export const stillBuilding = [
  { label: "Current projects", value: "Expanding the electronics project portfolio" },
  { label: "Currently learning", value: "Circuit simulation, Python, power systems" },
  { label: "Research interests", value: "To be defined through coursework and labs" },
  { label: "Technologies exploring", value: "Proteus, LTspice, MATLAB" },
  { label: "Upcoming goals", value: "Internships, technical competitions, research exposure" },
];

export type IndustrialTour = {
  org: string;
  location?: string;
  date?: string;
  summary: string;
  photos: string[];
};

export const industrialTours: IndustrialTour[] = [
  {
    org: "General Electric Manufacturing Company Ltd. (GEMCO)",
    summary:
      "EEE department industrial tour providing practical exposure to electrical equipment manufacturing, industrial machinery, manufacturing processes, and real-world engineering practices.",
    photos: [
      "https://i.postimg.cc/rpThXsYN/gemco-01.jpg",
      "https://i.postimg.cc/R0mP5hbd/gemco-02.jpg",
      "https://i.postimg.cc/8CGyQcnX/gemco-03.jpg",
      "https://i.postimg.cc/VNw7QvHK/gemco-04.jpg",
      "https://i.postimg.cc/5tJPdykZ/gemco-05.jpg",
      "https://i.postimg.cc/7L4B8hQc/gemco-06.jpg",
    ],
  },
  {
    org: "Transcom Beverages Ltd.",
    location: "Chattogram",
    date: "4 July 2026",
    summary:
      "Industrial tour providing exposure to beverage manufacturing, production processes, quality control, industrial operations, and practical application of engineering principles in large-scale manufacturing.",
    photos: [
      "https://i.postimg.cc/kgQcc9Xc/transcom-01.jpg",
      "https://i.postimg.cc/RZ7RR9V8/transcom-02.jpg",
      "https://i.postimg.cc/13GHHP5d/transcom-03.jpg",
      "https://i.postimg.cc/y8mPPBYb/transcom-04.jpg",
      "https://i.postimg.cc/fRcKKZTg/transcom-05.jpg",
      "https://i.postimg.cc/W4s7YKh9/transcom-06.jpg",
    ],
  },
];
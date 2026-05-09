export type Screen =
  | "lock"
  | "home"
  | "about"
  | "projects"
  | "project-detail"
  | "skills"
  | "contact"
  | "resume"

export interface Project {
  id: string
  name: string
  subtitle: string
  role: string
  period: string
  description: string
  tech: string[]
  highlights: string[]
  links: { github: string; demo: string }
  featured: boolean
  category: string
  rating: number
  size: string
  color: string
}

export interface Skill {
  name: string
  level: string
  category: string
  color: string
}

export const projects: Project[] = [
  {
    id: "cooking-buddy",
    name: "Cooking Buddy",
    subtitle: "Recipe Discovery App",
    role: "Solo Developer",
    period: "2025",
    description:
      "A comprehensive mobile app for discovering, saving, and organizing cooking recipes with AI-powered personalized recommendations and social features.",
    tech: ["React Native", "Expo", "Supabase", "TypeScript"],
    highlights: [
      "Built intelligent recipe feed with advanced search and filtering",
      "Implemented secure authentication and user profiles with Supabase",
      "Designed pixel-perfect responsive UI for both Android & iOS",
      "Integrated real-time favorites and recipe sharing functionality",
    ],
    links: {
      github: "https://github.com/Vishalsingh1910",
      demo: "",
    },
    featured: true,
    category: "FOOD & LIFESTYLE",
    rating: 4.8,
    size: "18MB",
    color: "#FF6B35",
  },
  {
    id: "fittrack",
    name: "FitTrack",
    subtitle: "Habit & Workout Tracker",
    role: "Solo Developer",
    period: "2023",
    description:
      "A minimalist yet powerful habit and workout tracking app designed to help users build consistent daily routines with streak tracking and smart reminders.",
    tech: ["React Native", "Expo", "AsyncStorage", "React Hooks"],
    highlights: [
      "Developed intuitive calendar-based interface for daily tracking",
      "Implemented efficient local data persistence using AsyncStorage",
      "Created custom React hooks for clean state management",
      "Built streak tracking system with motivational notifications",
    ],
    links: {
      github: "https://github.com/Vishalsingh1910",
      demo: "",
    },
    featured: false,
    category: "HEALTH & FITNESS",
    rating: 4.6,
    size: "12MB",
    color: "#6C63FF",
  },
]

export const skillGroups = [
  {
    title: "CORE LANGUAGES",
    skills: [
      { name: "JavaScript", level: "Expert", color: "#F7DF1E", icon: "JS" },
      { name: "TypeScript", level: "Advanced", color: "#3178C6", icon: "TS" },
    ],
  },
  {
    title: "MOBILE & FRONTEND",
    skills: [
      { name: "React Native", level: "Expert", color: "#61DAFB", icon: "RN" },
      { name: "Expo Ecosystem", level: "Advanced", color: "#000020", icon: "EX", toggle: true },
      { name: "React Navigation", level: "Expert", color: "#6C63FF", icon: "RV" },
    ],
  },
  {
    title: "STATE MANAGEMENT",
    skills: [
      { name: "Redux", level: "Advanced", color: "#764ABC", icon: "RX" },
      { name: "Context API", level: "Expert", color: "#61DAFB", icon: "CA" },
    ],
  },
  {
    title: "DEVOPS & CLOUD",
    skills: [
      { name: "Firebase", level: "Advanced", color: "#FFCA28", icon: "FB" },
      { name: "Supabase", level: "Proficient", color: "#3ECF8E", icon: "SB" },
      { name: "Git & GitHub", level: "Advanced", color: "#F05032", icon: "GH" },
    ],
  },
  {
    title: "DESIGN",
    skills: [
      { name: "Figma", level: "Proficient", color: "#F24E1E", icon: "FG" },
      { name: "UI/UX Design", level: "Proficient", color: "#FF7262", icon: "UX" },
    ],
  },
]

export const personalInfo = {
  name: "Vishal Singh",
  title: "React Native Developer",
  email: "vishalrsingh@zohomail.in",
  github: "https://github.com/Vishalsingh1910",
  linkedin: "https://www.linkedin.com/in/vishal-singh-306214262/",
  resumeUrl: "https://drive.google.com/file/d/1t-LgZbsRQZVEf0lxycH2QhV-c5VpxVjy/view?usp=sharing",
  coverLetterUrl: "https://drive.google.com/file/d/1pKLSk5RrGQBjl6qr__ilwbdp5QUMo6s8/view?usp=drive_link",
  bio: "Passionate about crafting fluid, 60fps mobile experiences. Specialist in cross-platform architecture, smooth animations, and high-performance native modules.",
  bio2: "Over 2+ years building diverse mobile apps — from lifestyle and productivity tools to complex business solutions. Every project sharpens my skills in performance optimization and elegant UX.",
  stats: { apps: "5+", years: "2+", commits: "50+" },
  location: "India",
  available: true,
}

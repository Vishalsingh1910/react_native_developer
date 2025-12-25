// app/page.tsx
"use client"

import Link from "next/link"
import { useState } from "react"

const skills = [
  { name: "React Native", level: 90, category: "Mobile" },
  { name: "Expo", level: 85, category: "Mobile" },
  { name: "TypeScript", level: 80, category: "Language" },
  { name: "JavaScript", level: 90, category: "Language" },
  { name: "React Navigation", level: 85, category: "Mobile" },
  { name: "REST APIs", level: 80, category: "Backend" },
  { name: "Firebase", level: 75, category: "Backend" },
  { name: "Supabase", level: 70, category: "Backend" },
  { name: "Redux", level: 75, category: "State" },
  { name: "Context API", level: 85, category: "State" },
  { name: "Git & GitHub", level: 85, category: "Tools" },
  { name: "Figma", level: 70, category: "Design" },
]

const projects = [
  {
    name: "Cookify",
    subtitle: "Recipe Discovery App",
    role: "Solo Developer",
    period: "2024",
    description:
      "A comprehensive mobile app for discovering, saving, and organizing cooking recipes with AI-powered personalized recommendations and social features.",
    tech: ["React Native", "Expo", "Supabase", "React Navigation", "TypeScript"],
    highlights: [
      "Built intelligent recipe feed with advanced search and filtering capabilities",
      "Implemented secure authentication and user profile management with Supabase",
      "Designed pixel-perfect responsive UI optimized for both Android and iOS platforms",
      "Integrated real-time favorites and recipe sharing functionality",
    ],
    links: {
      github: "https://github.com/your-username/cookify",
      demo: "",
    },
    featured: true,
  },
  {
    name: "FitTrack",
    subtitle: "Habit & Workout Tracker",
    role: "Solo Developer",
    period: "2023",
    description:
      "A minimalist yet powerful habit and workout tracking app designed to help users build consistent daily routines with streak tracking and smart reminders.",
    tech: ["React Native", "Expo", "AsyncStorage", "React Hooks"],
    highlights: [
      "Developed intuitive calendar-based interface for tracking daily progress",
      "Implemented efficient local data persistence using AsyncStorage",
      "Created custom React hooks for clean state management architecture",
      "Built streak tracking system with motivational notifications",
    ],
    links: {
      github: "https://github.com/your-username/fittrack",
      demo: "",
    },
    featured: false,
  },
]

const experiences = [
  {
    company: "Freelance Development",
    role: "React Native Developer",
    period: "2023 – Present",
    location: "Remote",
    description:
      "Specializing in cross-platform mobile app development using React Native and Expo, with a focus on delivering high-quality, performant applications from concept to deployment.",
    highlights: [
      "Successfully delivered 5+ mobile applications from ideation to App Store/Play Store deployment",
      "Architected scalable codebases using TypeScript and modern React patterns",
      "Integrated complex third-party services including authentication, real-time databases, and payment systems",
      "Collaborated with cross-functional teams using agile methodologies and modern development tools",
      "Maintained 95%+ crash-free user sessions across all deployed applications",
    ],
    current: true,
  },
]

export default function HomePage() {
  const [activeSkillCategory, setActiveSkillCategory] = useState("All")
  const skillCategories = ["All", "Mobile", "Language", "Backend", "State", "Tools", "Design"]
  
  const filteredSkills = activeSkillCategory === "All" 
    ? skills 
    : skills.filter(skill => skill.category === activeSkillCategory)

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-sky-400 to-cyan-300 rounded-lg flex items-center justify-center">
              <span className="text-slate-950 font-bold text-sm">VS</span>
            </div>
            <span className="text-lg font-semibold text-slate-100">
              Vishal Singh
            </span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm text-slate-400">
            <a href="#about" className="hover:text-sky-400 transition-colors duration-200">
              About
            </a>
            <a href="#skills" className="hover:text-sky-400 transition-colors duration-200">
              Skills
            </a>
            <a href="#projects" className="hover:text-sky-400 transition-colors duration-200">
              Projects
            </a>
            <a href="#experience" className="hover:text-sky-400 transition-colors duration-200">
              Experience
            </a>
            <a href="#contact" className="hover:text-sky-400 transition-colors duration-200">
              Contact
            </a>
          </nav>
          <button className="md:hidden p-2 text-slate-400 hover:text-slate-100">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      <div className="relative mx-auto max-w-6xl px-6 py-12 space-y-32">
        {/* Hero Section */}
        <section className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between min-h-[80vh] pt-12">
          <div className="space-y-8 lg:w-2/3">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-500/10 border border-sky-500/20 rounded-full text-sky-400 text-sm font-medium">
                <div className="w-2 h-2 bg-sky-400 rounded-full animate-pulse"></div>
                Available for new opportunities
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-tight">
                <span className="text-slate-100">Hi, I'm</span>
                <br />
                <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                  Vishal Singh
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-300 font-light leading-relaxed">
                React Native Developer crafting beautiful, performant mobile experiences
              </p>
              
              <p className="max-w-2xl text-lg text-slate-400 leading-relaxed">
                With 2+ years of experience in React Native and Expo, I transform ideas into 
                production-ready mobile applications that users love. Passionate about clean code, 
                smooth animations, and exceptional user experiences.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-cyan-400 px-8 py-4 rounded-xl font-semibold text-slate-950 hover:from-sky-400 hover:to-cyan-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-sky-500/25"
              >
                View My Work
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border-2 border-slate-700 px-8 py-4 rounded-xl font-semibold text-slate-100 hover:border-sky-400 hover:text-sky-400 transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-slate-800">
              <div className="text-center">
                <div className="text-3xl font-bold text-sky-400">2+</div>
                <div className="text-sm text-slate-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-sky-400">5+</div>
                <div className="text-sm text-slate-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-sky-400">95%</div>
                <div className="text-sm text-slate-400">Crash-Free Sessions</div>
              </div>
            </div>
          </div>
          
          {/* Hero Card */}
          <div className="lg:w-1/3">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-cyan-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-cyan-300 rounded-xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-slate-950" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-100">React Native Expert</h3>
                    <p className="text-slate-400">Cross-Platform Mobile Development</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-slate-300">
                    <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
                    <span>📱 iOS & Android Development</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span>⚡ Expo & React Native CLI</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>🔥 Firebase & Supabase Integration</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>🎨 UI/UX Implementation</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-slate-700">
                  <p className="text-sm text-slate-400 italic">
                    "Turning complex ideas into simple, elegant mobile solutions"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold tracking-tight">About Me</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Passionate about creating mobile experiences that make a difference
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="prose prose-lg prose-slate prose-invert">
                <p className="text-lg leading-relaxed text-slate-300">
                  My journey with React Native began with a simple fascination: the ability to write once and deploy everywhere. 
                  What started as curiosity has evolved into a deep expertise in cross-platform mobile development.
                </p>
                <p className="text-lg leading-relaxed text-slate-300">
                  Over the past two years, I've had the privilege of working on diverse projects – from lifestyle and productivity 
                  apps to complex business solutions. Each project has taught me something new about performance optimization, 
                  user experience design, and the art of writing maintainable code.
                </p>
                <p className="text-lg leading-relaxed text-slate-300">
                  I believe great mobile apps are born from the intersection of solid technical architecture and thoughtful user 
                  experience. Whether it's implementing smooth animations, optimizing bundle sizes, or ensuring accessibility, 
                  I'm committed to delivering applications that users genuinely enjoy using.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-slate-900/50 backdrop-blur border border-slate-700/50 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold mb-6 text-slate-100">What Drives Me</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-sky-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-sky-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-200">Code Quality</h4>
                      <p className="text-slate-400">Writing clean, maintainable code that scales with your business</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-200">Performance</h4>
                      <p className="text-slate-400">Optimizing every interaction for smooth, responsive experiences</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-200">User Experience</h4>
                      <p className="text-slate-400">Crafting intuitive interfaces that users love to interact with</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold tracking-tight">Technical Skills</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              A comprehensive toolkit for building exceptional mobile experiences
            </p>
          </div>
          
          {/* Skill Categories Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {skillCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveSkillCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSkillCategory === category
                    ? "bg-sky-500 text-slate-950 shadow-lg shadow-sky-500/25"
                    : "bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:text-slate-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill) => (
              <div
                key={skill.name}
                className="group bg-slate-900/50 backdrop-blur border border-slate-700/50 rounded-xl p-6 hover:border-sky-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-slate-100 group-hover:text-sky-400 transition-colors">
                    {skill.name}
                  </h3>
                  <span className="text-xs px-2 py-1 bg-slate-800 rounded-full text-slate-400">
                    {skill.category}
                  </span>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Proficiency</span>
                    <span className="text-sky-400 font-medium">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-sky-500 to-cyan-400 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold tracking-tight">Featured Projects</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Real-world applications showcasing my expertise in React Native development
            </p>
          </div>
          
          <div className="space-y-12">
            {projects.map((project, index) => (
              <article
                key={project.name}
                className={`group relative ${project.featured ? 'lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center' : ''}`}
              >
                {project.featured && (
                  <div className="absolute -top-4 left-6 z-10">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-sky-500 to-cyan-400 text-slate-950 text-sm font-semibold rounded-full">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                      Featured Project
                    </span>
                  </div>
                )}
                
                <div className={`relative ${project.featured ? 'order-2' : ''}`}>
                  <div className="absolute -inset-1 bg-gradient-to-r from-sky-500/20 to-cyan-400/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-1000"></div>
                  <div className="relative bg-slate-900/80 backdrop-blur border border-slate-700/50 rounded-2xl p-8 group-hover:border-sky-500/50 transition-all duration-300">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <h3 className="text-2xl font-bold text-slate-100 group-hover:text-sky-400 transition-colors">
                            {project.name}
                          </h3>
                          {project.featured && (
                            <div className="w-2 h-2 bg-sky-400 rounded-full animate-pulse"></div>
                          )}
                        </div>
                        <p className="text-sky-400 font-medium">{project.subtitle}</p>
                        <div className="flex items-center gap-4 text-sm text-slate-400">
                          <span>{project.role}</span>
                          <span>•</span>
                          <span>{project.period}</span>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        {project.links.github && (
                          <Link
                            href={project.links.github}
                            target="_blank"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-slate-100 rounded-lg transition-all duration-200 text-sm font-medium"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            GitHub
                          </Link>
                        )}
                        {project.links.demo && (
                          <Link
                            href={project.links.demo}
                            target="_blank"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-sky-500 hover:bg-sky-400 text-slate-950 rounded-lg transition-all duration-200 text-sm font-medium"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            Live Demo
                          </Link>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-lg text-slate-300 leading-relaxed mb-6">
                      {project.description}
                    </p>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-3">
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {project.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start gap-3 text-slate-300">
                              <div className="w-1.5 h-1.5 bg-sky-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-3">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-slate-800/80 text-slate-300 rounded-full text-sm font-medium border border-slate-700/50"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {project.featured && (
                  <div className="order-1 mb-8 lg:mb-0">
                    <div className="relative group/image">
                      <div className="absolute -inset-4 bg-gradient-to-r from-sky-500/20 to-cyan-400/20 rounded-2xl blur-xl opacity-0 group-hover/image:opacity-100 transition duration-1000"></div>
                      <div className="relative bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
                        <div className="aspect-[4/5] bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center">
                          <div className="text-center space-y-4">
                            <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-cyan-300 rounded-2xl mx-auto flex items-center justify-center">
                              <svg className="w-8 h-8 text-slate-950" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z"/>
                              </svg>
                            </div>
                            <div>
                              <h4 className="text-lg font-semibold text-slate-200">{project.name}</h4>
                              <p className="text-slate-400">Mobile App Preview</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold tracking-tight">Professional Experience</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Building expertise through hands-on development and continuous learning
            </p>
          </div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <article
                key={exp.company}
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-sky-500/10 to-cyan-400/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative bg-slate-900/80 backdrop-blur border border-slate-700/50 rounded-2xl p-8 group-hover:border-sky-500/50 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <h3 className="text-2xl font-bold text-slate-100 group-hover:text-sky-400 transition-colors">
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <span className="inline-flex items-center gap-1 px-3 py-1 bg-sky-500/20 border border-sky-500/30 text-sky-400 text-xs font-medium rounded-full">
                            <div className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-pulse"></div>
                            Current
                          </span>
                        )}
                      </div>
                      <div className="space-y-1">
                        <p className="text-lg font-semibold text-sky-400">{exp.company}</p>
                        <div className="flex items-center gap-4 text-slate-400">
                          <span className="flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {exp.period}
                          </span>
                          {exp.location && (
                            <>
                              <span>•</span>
                              <span className="flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                {exp.location}
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-lg text-slate-300 leading-relaxed mb-6">
                    {exp.description}
                  </p>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-4">
                      Key Accomplishments
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {exp.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-sky-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-3 h-3 text-sky-400" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            </svg>
                          </div>
                          <span className="text-slate-300 leading-relaxed">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Let's Work Together</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Ready to bring your mobile app idea to life? I'd love to hear about your project and discuss how we can create something amazing together.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="space-y-8">
                <div className="bg-slate-900/50 backdrop-blur border border-slate-700/50 rounded-2xl p-8">
                  <h3 className="text-2xl font-semibold mb-6 text-slate-100">Get In Touch</h3>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-sky-500/20 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm">Email</p>
                        <a href="mailto:vishalrsingh@zohomail.in" className="text-slate-100 hover:text-sky-400 transition-colors">
                          vishalrsingh@zohomail.in
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-slate-500/20 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm">GitHub</p>
                        <Link href="https://github.com/Vishalsingh1910" target="_blank" className="text-slate-100 hover:text-sky-400 transition-colors">
                          Vishalsingh1910
                        </Link>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm">LinkedIn</p>
                        <Link href="https://www.linkedin.com/in/vishal-singh-306214262/" target="_blank" className="text-slate-100 hover:text-sky-400 transition-colors">
                          Vishal Singh
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* CTA Card */}
              <div className="space-y-6">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-cyan-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                  <div className="relative bg-slate-900/80 backdrop-blur border border-slate-700/50 rounded-2xl p-8">
                    <h3 className="text-2xl font-semibold mb-4 text-slate-100">Ready to Start?</h3>
                    <p className="text-slate-300 mb-6 leading-relaxed">
                      Whether you have a detailed project brief or just an idea, I'm here to help turn your vision into a reality. Let's discuss your requirements and create something exceptional.
                    </p>
                    
                    <div className="space-y-4">
                      <a
                        href="mailto:vishalrsingh@zohomail.in"
                        className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-cyan-400 px-6 py-4 rounded-xl font-semibold text-slate-950 hover:from-sky-400 hover:to-cyan-300 transition-all duration-300 transform hover:scale-105"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Send Me an Email
                      </a>
                      
                      <div className="text-center">
                        <p className="text-slate-400 text-sm">
                          Typically responds within 24 hours
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-800/50 pt-12 pb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-sky-400 to-cyan-300 rounded-xl flex items-center justify-center">
                <span className="text-slate-950 font-bold">VS</span>
              </div>
              <div>
                <p className="font-semibold text-slate-100">Vishal Singh</p>
                <p className="text-sm text-slate-400">React Native Developer</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <Link href="https://github.com/your-username" target="_blank" className="text-slate-400 hover:text-slate-100 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </Link>
              <Link href="https://www.linkedin.com/in/your-linkedin" target="_blank" className="text-slate-400 hover:text-slate-100 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </Link>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-slate-800/50 text-center">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Vishal Singh. Crafted with Next.js, TypeScript & Tailwind CSS.
            </p>
          </div>
        </footer>
      </div>
    </main>
  )
}

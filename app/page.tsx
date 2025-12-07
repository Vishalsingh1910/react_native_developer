// app/page.tsx
"use client"

import Link from "next/link"

const skills = [
  "React Native",
  "Expo",
  "TypeScript / JavaScript",
  "React Navigation",
  "REST APIs",
  "Firebase / Supabase",
  "State Management (Redux / Context)",
  "Git & GitHub",
]

const projects = [
  {
    name: "Cookify – Recipe Discovery App",
    role: "Solo Developer",
    period: "2024",
    description:
      "A mobile app for discovering and saving cooking recipes with personalized recommendations.",
    tech: ["React Native", "Expo", "Supabase", "React Navigation"],
    highlights: [
      "Built a feed of curated recipes with search and filters",
      "Implemented auth, favorites, and user profiles with Supabase",
      "Designed responsive UI that works well on both Android and iOS",
    ],
    links: {
      github: "https://github.com/your-username/cookify",
      demo: "",
    },
  },
  {
    name: "FitTrack – Habit & Workout Tracker",
    role: "Solo Developer",
    period: "2023",
    description:
      "A simple tracker to build daily workout and habit routines with streaks and reminders.",
    tech: ["React Native", "Expo", "AsyncStorage"],
    highlights: [
      "Created calendar-based UI to track daily progress",
      "Local data persistence using AsyncStorage",
      "Used custom hooks to manage app state cleanly",
    ],
    links: {
      github: "https://github.com/your-username/fittrack",
      demo: "",
    },
  },
]

const experiences = [
  {
    company: "Freelance / Personal Projects",
    role: "React Native Developer",
    period: "2023 – Present",
    description:
      "Building mobile apps using React Native and Expo, focusing on clean UI, performance, and smooth user experience.",
    highlights: [
      "Developed multiple apps from idea to deployment (Android/iOS)",
      "Integrated REST APIs, authentication, and real-time updates",
      "Collaborated with designers and back-end devs using Git and task boards",
    ],
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* Navbar */}
      <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <span className="text-sm font-medium text-slate-300">
            Vishal Singh
          </span>
          <nav className="flex gap-4 text-sm text-slate-400">
            <a href="#about" className="hover:text-slate-50">
              About
            </a>
            <a href="#skills" className="hover:text-slate-50">
              Skills
            </a>
            <a href="#projects" className="hover:text-slate-50">
              Projects
            </a>
            <a href="#experience" className="hover:text-slate-50">
              Experience
            </a>
            <a href="#contact" className="hover:text-slate-50">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-4 py-10 space-y-20">
        {/* Hero */}
        <section className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.25em] text-sky-400">
              React Native Developer
            </p>
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
                Vishal Singh
              </span>
              .
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-slate-300 md:text-base">
              I&apos;m a React Native developer with around 2 years of experience
              building mobile apps using React Native and Expo. I enjoy turning
              ideas into smooth, production-ready apps with clean, maintainable
              code.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <a
                href="#projects"
                className="rounded-full bg-sky-500 px-4 py-2 font-medium text-slate-950 hover:bg-sky-400"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-full border border-slate-700 px-4 py-2 font-medium text-slate-100 hover:border-sky-400"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="mt-6 w-full max-w-xs rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-300 md:mt-0">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Quick Snapshot
            </p>
            <ul className="mt-3 space-y-1.5">
              <li>📱 2+ years in React Native & Expo</li>
              <li>⚛️ Strong with TypeScript & component-driven UIs</li>
              <li>☁️ Experience with Firebase / Supabase backends</li>
              <li>🚀 Focus on performance, UX, and clean code</li>
            </ul>
          </div>
        </section>

        {/* About */}
        <section id="about" className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">About</h2>
          <p className="text-sm leading-relaxed text-slate-300 md:text-base">
            I started working with React Native because I love the idea of using
            one codebase to build apps for both Android and iOS. Over the last
            two years, I&apos;ve worked on multiple projects – from cooking and
            lifestyle apps to productivity tools. I care a lot about readable
            code, smooth animations, and making sure the app feels fast and
            intuitive for users.
          </p>
          <p className="text-sm leading-relaxed text-slate-300 md:text-base">
            I&apos;m comfortable building screens from Figma designs, hooking
            up REST APIs, managing state, and shipping builds using Expo. I
            enjoy learning new tools and patterns that make development faster
            and codebases easier to maintain.
          </p>
        </section>

        {/* Skills */}
        <section id="skills" className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-100"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">Projects</h2>
          <div className="space-y-4">
            {projects.map((project) => (
              <article
                key={project.name}
                className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4"
              >
                <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
                  <div>
                    <h3 className="text-base font-semibold text-slate-50 md:text-lg">
                      {project.name}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {project.role} · {project.period}
                    </p>
                  </div>
                  <div className="flex gap-3 text-xs">
                    {project.links.github && (
                      <Link
                        href={project.links.github}
                        target="_blank"
                        className="text-sky-400 hover:underline"
                      >
                        GitHub
                      </Link>
                    )}
                    {project.links.demo && (
                      <Link
                        href={project.links.demo}
                        target="_blank"
                        className="text-sky-400 hover:underline"
                      >
                        Live Demo
                      </Link>
                    )}
                  </div>
                </div>
                <p className="mt-3 text-sm text-slate-300">
                  {project.description}
                </p>
                <ul className="mt-3 space-y-1 text-sm text-slate-300">
                  {project.highlights.map((h) => (
                    <li key={h}>• {h}</li>
                  ))}
                </ul>
                <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-200">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-slate-800 px-2 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">Experience</h2>
          <div className="space-y-4">
            {experiences.map((exp) => (
              <article
                key={exp.company}
                className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4"
              >
                <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
                  <div>
                    <h3 className="text-base font-semibold text-slate-50 md:text-lg">
                      {exp.role}
                    </h3>
                    <p className="text-xs text-slate-400">{exp.company}</p>
                  </div>
                  <p className="text-xs text-slate-400">{exp.period}</p>
                </div>
                <p className="mt-3 text-sm text-slate-300">
                  {exp.description}
                </p>
                <ul className="mt-3 space-y-1 text-sm text-slate-300">
                  {exp.highlights.map((h) => (
                    <li key={h}>• {h}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="space-y-4 border-t border-slate-800 pt-8">
          <h2 className="text-xl font-semibold tracking-tight">Contact</h2>
          <p className="text-sm text-slate-300 md:text-base">
            Want to work together or have a project in mind? Feel free to reach out.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-slate-200">
            <a
              href="mailto:your-email@example.com"
              className="rounded-full border border-slate-700 px-4 py-2 hover:border-sky-400"
            >
              your-email@example.com
            </a>
            <Link
              href="https://github.com/your-username"
              target="_blank"
              className="rounded-full border border-slate-700 px-4 py-2 hover:border-sky-400"
            >
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/your-linkedin"
              target="_blank"
              className="rounded-full border border-slate-700 px-4 py-2 hover:border-sky-400"
            >
              LinkedIn
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Vishal Singh. Built with Next.js & Tailwind CSS.
        </footer>
      </div>
    </main>
  )
}

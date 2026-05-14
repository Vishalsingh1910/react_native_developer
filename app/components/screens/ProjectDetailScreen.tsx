"use client"
import { motion } from "framer-motion"
import { Project } from "../../data/portfolio"
import StatusBar from "../StatusBar"

interface ProjectDetailScreenProps {
  project: Project
  onBack: () => void
}

export default function ProjectDetailScreen({ project, onBack }: ProjectDetailScreenProps) {
  const emoji = project.id === "cooking-buddy" ? "🍳" : "💪"

  const techIcons: Record<string, string> = {
    "React Native": "📱",
    Expo: "🚀",
    TypeScript: "🔷",
    Supabase: "🟢",
    Firebase: "🔥",
    Redux: "🔮",
    "Context API": "⚛️",
    AsyncStorage: "💾",
    "React Hooks": "🪝",
  }

  return (
    <motion.div
      className="absolute inset-0 flex flex-col"
      style={{ background: "#0D0B1E" }}
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 32 }}
    >
      <StatusBar />

      {/* Dynamic island */}
      <div className="flex justify-center mt-1">
        <div className="w-28 h-7 bg-black rounded-full" />
      </div>

      {/* Nav bar */}
      <div className="flex items-center justify-between px-4 py-2">
        <button onClick={onBack} className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.1)" }}>
          <span className="text-white text-lg">‹</span>
        </button>
        <div className="flex gap-2">
          <button className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.1)" }}>
            <span className="text-white text-sm">↗</span>
          </button>
          <button className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.1)" }}>
            <span className="text-white text-sm">•••</span>
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Hero */}
        <div className="h-36 relative" style={{ background: `linear-gradient(135deg, ${project.color}88, ${project.color}44, #6C63FF44)` }}>
          <div className="absolute inset-0 flex items-center justify-center text-6xl">{emoji}</div>
          <div className="absolute inset-0" style={{ background: "linear-gradient(0deg, #0D0B1E 0%, transparent 60%)" }} />
        </div>

        <div className="px-4 space-y-4 pb-6">
          {/* Title row */}
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0" style={{ background: `${project.color}33`, border: `1px solid ${project.color}55` }}>
              {emoji}
            </div>
            <div className="flex-1">
              <h1 className="text-white text-[18px] font-bold">{project.name}</h1>
              <p className="text-[#6C63FF] text-[11px] font-semibold tracking-wider">SOLO DEVELOPER • MOBILE APP</p>
            </div>
            <a
              href={project.links.github || "https://github.com/Vishalsingh1910"}
              target="_blank"
              className="px-4 py-1.5 rounded-full text-white text-[12px] font-bold"
              style={{ background: "#6C63FF" }}
            >
              VIEW
            </a>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-4 gap-1.5 text-center">
            {[
              { label: "RATING", value: `${project.rating} ★` },
              { label: "CATEGORY", value: project.category.split("&")[0].trim() },
              { label: "YEAR", value: project.period },
              { label: "SIZE", value: project.size },
            ].map((s) => (
              <div key={s.label} className="rounded-xl py-2 px-1" style={{ background: "rgba(255,255,255,0.06)" }}>
                <p className="text-white/40 text-[8px] font-semibold tracking-wider">{s.label}</p>
                <p className="text-white text-[12px] font-bold mt-0.5">{s.value}</p>
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <div>
            <h2 className="text-white text-[14px] font-bold mb-3">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <div key={t} className="flex flex-col items-center gap-1">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center text-xl" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}>
                    {techIcons[t] || "⚡"}
                  </div>
                  <span className="text-white/40 text-[9px] text-center leading-tight max-w-[44px]">{t.replace(" ", "\n")}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Description */}
          <div>
            <h2 className="text-white text-[14px] font-bold mb-2">The Challenge</h2>
            <p className="text-white/60 text-[13px] leading-relaxed">{project.description}</p>
          </div>

          {/* Highlights */}
          <div>
            <h2 className="text-white text-[14px] font-bold mb-2">Key Achievements</h2>
            <div className="space-y-2">
              {project.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "#6C63FF33" }}>
                    <span className="text-[#6C63FF] text-[10px]">✓</span>
                  </div>
                  <p className="text-white/70 text-[12px] leading-relaxed">{h}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Role badge */}
          <div className="flex items-center gap-3 p-3 rounded-2xl" style={{ background: "rgba(108,99,255,0.15)", border: "1px solid rgba(108,99,255,0.3)" }}>
            <div className="w-9 h-9 rounded-xl bg-[#6C63FF] flex items-center justify-center text-sm">🛡️</div>
            <div>
              <p className="text-white text-[13px] font-semibold">Solo Mobile Developer</p>
              <p className="text-white/50 text-[11px]">Full-stack development of this project</p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-3">
            <a
              href={project.links.github || "https://github.com/Vishalsingh1910"}
              target="_blank"
              className="flex-1 py-3 rounded-2xl text-center font-bold text-white text-[14px] flex items-center justify-center gap-2"
              style={{ background: "linear-gradient(135deg,#6C63FF,#5046E5)" }}
            >
              <span>🚀</span> View Code
            </a>
            <button className="px-4 py-3 rounded-2xl font-bold text-white text-[14px] flex items-center justify-center" style={{ background: "rgba(255,255,255,0.1)" }}>
              ‹/›
            </button>
          </div>
        </div>
      </div>

      {/* Home indicator */}
      <div className="flex justify-center pb-4">
        <div className="w-28 h-1 bg-white/20 rounded-full" />
      </div>
    </motion.div>
  )
}

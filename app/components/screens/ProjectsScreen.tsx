"use client"
import { motion } from "framer-motion"
import { projects, Project } from "../../data/portfolio"
import StatusBar from "../StatusBar"

interface ProjectsScreenProps {
  onBack: () => void
  onSelect: (p: Project) => void
}

export default function ProjectsScreen({ onBack, onSelect }: ProjectsScreenProps) {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col"
      style={{ background: "#0D0B1E" }}
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 32 }}
    >
      <StatusBar />

      {/* Dynamic island */}
      <div className="flex justify-center mt-1">
        <div className="w-28 h-7 bg-black rounded-full" />
      </div>

      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3">
        <button onClick={onBack} className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.1)" }}>
          <span className="text-white text-lg">‹</span>
        </button>
        <h1 className="text-white text-[17px] font-semibold flex-1 text-center">Projects</h1>
        <div className="w-8" />
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto px-4 space-y-3 pb-4">
        {projects.map((project, i) => (
          <motion.button
            key={project.id}
            onClick={() => onSelect(project)}
            className="w-full rounded-2xl overflow-hidden text-left"
            style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 + 0.1 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center gap-3 p-3">
              {/* App icon */}
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0" style={{ background: `${project.color}33`, border: `1px solid ${project.color}44` }}>
                {project.id === "cooking-buddy" ? "🍳" : "💪"}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h2 className="text-white text-[15px] font-bold">{project.name}</h2>
                  <span className="text-white/30 text-lg">›</span>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {project.tech.slice(0, 2).map((t) => (
                    <span key={t} className="text-[10px] px-2 py-0.5 rounded-full text-white/60" style={{ background: "rgba(255,255,255,0.08)" }}>
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-white/50 text-[11px] mt-1 leading-tight line-clamp-2">{project.description}</p>
              </div>
            </div>
          </motion.button>
        ))}

        {/* More coming soon */}
        <div className="rounded-2xl p-4 text-center" style={{ background: "rgba(255,255,255,0.04)", border: "1px dashed rgba(255,255,255,0.15)" }}>
          <p className="text-white/30 text-[12px]">✦ More projects coming soon ✦</p>
        </div>
      </div>

      {/* Home indicator */}
      <div className="flex justify-center pb-4">
        <div className="w-28 h-1 bg-white/20 rounded-full" />
      </div>
    </motion.div>
  )
}

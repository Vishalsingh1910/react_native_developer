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
      style={{
        background:
          "radial-gradient(circle at top,#1E293B 0%,#0D0B1E 45%,#050507 100%)",
      }}
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 32 }}
    >
      <StatusBar />

      {/* Header */}
      <div className="flex items-center gap-3 px-5 pt-4 pb-4 mt-2">
        <button
          onClick={onBack}
          className="w-10 h-10 rounded-full flex items-center justify-center border border-white/10"
          style={{ background: "rgba(255,255,255,0.08)" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <h1 className="text-white text-[18px] font-bold flex-1 text-center pr-10">
          Projects
        </h1>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto px-5 space-y-6 pb-10 scrollbar-hide pt-2">
        {projects.map((project, i) => (
          <motion.button
            key={project.id}
            onClick={() => onSelect(project)}
            className="w-full text-left"
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: i * 0.1 + 0.1, duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            whileTap={{ scale: 0.98 }}
            style={{
              borderRadius: 28,
              padding: "24px",
              background: "linear-gradient(135deg, rgba(255,255,255,0.11) 0%, rgba(255,255,255,0.05) 100%)",
              backdropFilter: "blur(40px)",
              WebkitBackdropFilter: "blur(40px)",
              border: "1px solid rgba(255,255,255,0.25)",
              boxShadow: `
                inset 0 0 0 1px rgba(255,255,255,0.1),
                inset 0 1px 0 0 rgba(255,255,255,0.25),
                inset 0 -1px 0 0 rgba(0,0,0,0.3),
                0 8px 32px rgba(0,0,0,0.25),
                0 2px 8px rgba(0,0,0,0.15)
              `,
              overflow: "hidden",
            }}
          >
            <div className="flex flex-col gap-5">
              {/* Header: Icon + Info */}
              <div className="flex items-center gap-4 w-full">
                {/* App icon */}
                <div
                  className="w-14 h-14 rounded-[18px] flex items-center justify-center shrink-0 shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${project.color}, ${project.color}dd)`,
                    border: `1px solid ${project.color}55`,
                  }}
                >
                  <span className="text-[26px]">
                    {project.id === "cooking-buddy" ? "🍳" : "💪"}
                  </span>
                </div>

                {/* Title & Tech */}
                <div className="flex-1 min-w-0">
                  <h2 className="text-white text-[19px] font-bold tracking-tight truncate">
                    {project.name}
                  </h2>
                  <p className="text-white/50 text-[13px] font-medium mt-1 truncate">
                    {project.tech.slice(0, 3).join(" • ")}
                  </p>
                </div>

                {/* Arrow */}
                <div className="opacity-30 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </div>
              </div>

              {/* Highlights (Bullet Points) */}
              <div className="w-full space-y-3 pt-5 border-t border-white/[0.05]">
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-white/40 text-[16px] mt-[-2px]">{"•"}</span>
                    <p className="text-white/70 text-[14px] leading-relaxed flex-1">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.button>
        ))}

        {/* More coming soon */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: projects.length * 0.1 + 0.2 }}
          className="rounded-[28px] py-6 px-4 text-center border border-white/[0.08]"
          style={{
            background: "rgba(255,255,255,0.02)",
            borderStyle: "dashed",
          }}
        >
          <p className="text-white/40 text-[14px] font-medium tracking-wide">
            ✦ More projects coming soon ✦
          </p>
        </motion.div>
      </div>

      {/* Home indicator */}
      <div className="flex justify-center pb-3 pt-2">
        <div className="w-32 h-1 bg-white/20 rounded-full" />
      </div>
    </motion.div>
  )
}

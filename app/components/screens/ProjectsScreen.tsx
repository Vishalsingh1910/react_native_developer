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
        background: "radial-gradient(circle at top, #1E293B 0%, #0D0B1E 45%, #050507 100%)",
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

      <div className="flex-1 overflow-y-auto px-5 space-y-5 pb-10 scrollbar-hide pt-2">
        {projects.map((project, i) => (
          <motion.button
            key={project.id}
            onClick={() => onSelect(project)}
            className="w-full text-left relative overflow-hidden group"
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: i * 0.1 + 0.1, duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            whileTap={{ scale: 0.98 }}
            style={{
              borderRadius: 24,
              padding: "20px",
              background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.15), 0 8px 32px rgba(0,0,0,0.3)",
            }}
          >
            {/* Dynamic ambient glow based on project color */}
            <div 
              className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-20 pointer-events-none transition-opacity group-hover:opacity-40"
              style={{ background: project.color }}
            />

            <div className="flex flex-col gap-4 relative z-10">
              {/* Header: Icon + Info */}
              <div className="flex items-start justify-between w-full">
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-[16px] flex items-center justify-center shrink-0 shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${project.color}, ${project.color}aa)`,
                      border: `1px solid ${project.color}55`,
                    }}
                  >
                    <span className="text-[22px]">
                      {project.id === "cooking-buddy" ? "🍳" : "💪"}
                    </span>
                  </div>
                  <div>
                    <h2 className="text-white text-[18px] font-bold tracking-tight">
                      {project.name}
                    </h2>
                    <p className="text-[#00D4FF] text-[12px] font-semibold mt-0.5 tracking-wide uppercase">
                      {project.category}
                    </p>
                  </div>
                </div>

                <div className="opacity-30 shrink-0 mt-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </div>
              </div>

              {/* Description Snippet */}
              <p className="text-white/60 text-[13px] leading-relaxed line-clamp-2 font-medium">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tech.slice(0, 3).map(tech => (
                  <span 
                    key={tech} 
                    className="px-2.5 py-1 rounded-lg text-[10px] font-bold tracking-wider"
                    style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)" }}
                  >
                    {tech.toUpperCase()}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="px-2 py-1 rounded-lg text-[10px] font-bold tracking-wider text-white/40">
                    +{project.tech.length - 3}
                  </span>
                )}
              </div>
            </div>
          </motion.button>
        ))}

        {/* More coming soon */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: projects.length * 0.1 + 0.2 }}
          className="rounded-[24px] py-6 px-4 text-center border border-white/[0.08]"
          style={{
            background: "rgba(255,255,255,0.02)",
            borderStyle: "dashed",
            marginTop: "16px",
          }}
        >
          <p className="text-white/40 text-[13px] font-bold tracking-widest uppercase">
            ✦ More projects coming soon ✦
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}

"use client"
import { motion } from "framer-motion"
import { skillGroups } from "../../data/portfolio"
import StatusBar from "../StatusBar"

interface SkillsScreenProps {
  onBack: () => void
}

export default function SkillsScreen({ onBack }: SkillsScreenProps) {
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
      <div className="px-4 py-3">
        <button onClick={onBack} className="text-[#6C63FF] text-[14px] font-semibold flex items-center gap-1 mb-2">
          <span>‹</span> Back
        </button>
        <h1 className="text-white text-[24px] font-bold">Skills &amp; Tech</h1>
      </div>

      {/* Dev Engine Card */}
      <div className="mx-4 mb-3 p-3 rounded-2xl flex items-center gap-3" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}>
        <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl" style={{ background: "rgba(255,255,255,0.1)" }}>
          ⌨️
        </div>
        <div className="flex-1">
          <p className="text-white text-[14px] font-bold">Dev Engine</p>
          <p className="text-white/50 text-[11px]">Developer: Vishal Singh</p>
          <p className="text-white/50 text-[11px]">Version: 2.0-stable</p>
        </div>
        <span className="text-[10px] font-bold px-2 py-1 rounded-full" style={{ background: "#00FF8833", color: "#00FF88" }}>
          ACTIVE
        </span>
      </div>

      {/* Skill groups */}
      <div className="flex-1 overflow-y-auto px-4 space-y-4 pb-4">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <p className="text-white/30 text-[11px] font-semibold tracking-widest mb-1.5 px-1">{group.title}</p>
            <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
              {group.skills.map((skill, i) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-3 px-3 py-3"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    borderTop: i > 0 ? "1px solid rgba(255,255,255,0.06)" : undefined,
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-[11px] font-bold flex-shrink-0"
                    style={{ background: `${skill.color}44`, color: skill.color }}
                  >
                    {skill.icon}
                  </div>
                  <span className="text-white text-[14px] flex-1">{skill.name}</span>
                  {"toggle" in skill && skill.toggle ? (
                    <div className="w-11 h-6 rounded-full flex items-center px-0.5" style={{ background: "#34C759" }}>
                      <div className="w-5 h-5 bg-white rounded-full ml-auto" />
                    </div>
                  ) : (
                    <div className="flex items-center gap-1">
                      <span className="text-white/30 text-[12px]">{skill.level}</span>
                      <span className="text-white/20 text-sm">›</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Available indicator */}
        <div className="rounded-2xl p-3 flex items-center gap-3" style={{ background: "rgba(108,99,255,0.12)", border: "1px solid rgba(108,99,255,0.25)" }}>
          <span className="text-xl">🚀</span>
          <div>
            <p className="text-[#6C63FF] text-[13px] font-bold">Open to new projects</p>
            <p className="text-white/50 text-[11px]">Available for freelance & full-time</p>
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

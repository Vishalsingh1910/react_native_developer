"use client"
import { motion } from "framer-motion"
import { personalInfo } from "../../data/portfolio"
import StatusBar from "../StatusBar"

interface ResumeScreenProps {
  onBack: () => void
}

export default function ResumeScreen({ onBack }: ResumeScreenProps) {
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
        <h1 className="text-white text-[17px] font-semibold flex-1 text-center">Resume</h1>
        <div className="w-8" />
      </div>

      <div className="flex-1 overflow-y-auto px-4 space-y-4 pb-4">
        {/* Resume document preview card */}
        <div className="rounded-2xl overflow-hidden" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
          <div className="h-48 flex items-center justify-center" style={{ background: "linear-gradient(135deg,#1A1730,#12102A)" }}>
            <div className="text-center space-y-2">
              <div className="text-6xl">📄</div>
              <p className="text-white font-bold text-[15px]">Vishal Singh</p>
              <p className="text-white/50 text-[12px]">React Native Developer</p>
              <div className="flex justify-center gap-2 mt-2">
                <span className="text-[10px] px-2 py-0.5 rounded-full text-white/60" style={{ background: "rgba(255,255,255,0.08)" }}>2+ Years Exp</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full text-white/60" style={{ background: "rgba(255,255,255,0.08)" }}>5+ Apps</span>
              </div>
            </div>
          </div>
          <div className="px-4 py-3 border-t" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
            <p className="text-white/40 text-[11px] text-center">Tap below to open full document</p>
          </div>
        </div>

        {/* Quick summary */}
        <div className="space-y-2">
          {[
            { icon: "💼", title: "Experience", desc: "Freelance React Native Developer • 2023–Present" },
            { icon: "📱", title: "Specialty", desc: "Cross-platform mobile apps (iOS & Android)" },
            { icon: "🛠️", title: "Stack", desc: "React Native, Expo, TypeScript, Supabase, Firebase" },
            { icon: "🎓", title: "Skills", desc: "5+ production apps shipped, 95%+ crash-free sessions" },
          ].map((item) => (
            <div key={item.title} className="flex items-center gap-3 p-3 rounded-xl" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <span className="text-xl">{item.icon}</span>
              <div>
                <p className="text-white text-[12px] font-semibold">{item.title}</p>
                <p className="text-white/50 text-[11px]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Action buttons */}
        <div className="space-y-3">
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            className="w-full py-3.5 rounded-2xl text-center font-bold text-white text-[14px] flex items-center justify-center gap-2"
            style={{ background: "linear-gradient(135deg,#6C63FF,#5046E5)" }}
          >
            <span>📄</span> Open Resume
          </a>
          <a
            href={personalInfo.coverLetterUrl}
            target="_blank"
            className="w-full py-3.5 rounded-2xl text-center font-bold text-white/80 text-[14px] flex items-center justify-center gap-2"
            style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}
          >
            <span>✉️</span> Open Cover Letter
          </a>
        </div>

        {/* Response time */}
        <div className="rounded-2xl p-3 text-center" style={{ background: "rgba(108,99,255,0.12)", border: "1px solid rgba(108,99,255,0.25)" }}>
          <p className="text-[#6C63FF] text-[12px] font-semibold">📬 Typically responds within 24 hours</p>
          <p className="text-white/40 text-[11px] mt-0.5">{personalInfo.email}</p>
        </div>
      </div>

      {/* Home indicator */}
      <div className="flex justify-center pb-4">
        <div className="w-28 h-1 bg-white/20 rounded-full" />
      </div>
    </motion.div>
  )
}

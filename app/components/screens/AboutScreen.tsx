"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { personalInfo } from "../../data/portfolio"
import { Screen } from "../../data/portfolio"
import StatusBar from "../StatusBar"

interface AboutScreenProps {
  onBack: () => void
  onNavigate: (s: Screen) => void
}

export default function AboutScreen({ onBack, onNavigate }: AboutScreenProps) {
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
          About Me
        </h1>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto px-5 space-y-6 pb-10 scrollbar-hide">
        {/* Profile Card */}
        <div 
          className="relative rounded-3xl overflow-hidden mt-4 shadow-2xl p-6 flex flex-col items-center"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.15)",
            boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.2), 0 10px 40px rgba(0,0,0,0.5)"
          }}
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-[#6C63FF] rounded-full blur-3xl opacity-30 pointer-events-none" />

          <div className="w-28 h-28 rounded-full border-2 border-white/20 p-1 mb-4 z-10 relative">
            <div className="w-full h-full rounded-full overflow-hidden">
              <Image src="/avatar.png" alt="Vishal Singh" width={112} height={112} className="w-full h-full object-cover" />
            </div>
          </div>

          <h2 className="text-white text-2xl font-bold tracking-tight">{personalInfo.name}</h2>
          <p className="text-[#00D4FF] text-sm font-semibold tracking-wide mt-1 uppercase">{personalInfo.title}</p>
          
          <div className="flex gap-4 mt-6 w-full">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex-1 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-95"
              style={{
                background: "linear-gradient(135deg, #6C63FF 0%, #5046E5 100%)",
                boxShadow: "0 4px 15px rgba(108, 99, 255, 0.4)"
              }}
            >
              <span className="text-white text-sm font-bold">Hire Me</span>
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all active:scale-95"
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)"
              }}
            >
              <span className="text-xl">🐙</span>
            </a>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { value: personalInfo.stats.apps, label: "APPS" },
            { value: personalInfo.stats.years, label: "YEARS XP" },
            { value: personalInfo.stats.commits, label: "COMMITS" },
          ].map((s) => (
            <div key={s.label} className="rounded-2xl py-4 text-center" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <p className="text-white text-xl font-bold">{s.value}</p>
              <p className="text-white/40 text-[9px] font-bold tracking-widest mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Bio Card */}
        <div className="rounded-3xl p-6" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}>
          <h3 className="text-white text-sm font-bold mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#34C759]"></span> Background
          </h3>
          <p className="text-white/70 text-[14px] leading-relaxed font-medium">
            {personalInfo.bio}
          </p>
          <p className="text-white/70 text-[14px] leading-relaxed font-medium mt-3">
            {personalInfo.bio2}
          </p>
        </div>

      </div>
    </motion.div>
  )
}

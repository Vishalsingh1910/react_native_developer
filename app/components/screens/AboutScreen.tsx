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

      {/* Nav */}
      <div className="flex items-center justify-between px-4 py-2">
        <button onClick={onBack} className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.1)" }}>
          <span className="text-white text-lg">‹</span>
        </button>
        <button className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.1)" }}>
          <span className="text-white text-sm">•••</span>
        </button>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto">
        {/* Header gradient banner */}
        <div className="relative h-28" style={{ background: "linear-gradient(135deg, #6C63FF 0%, #C084FC 50%, #F472B6 100%)" }}>
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
            <div className="w-24 h-24 rounded-full border-4 overflow-hidden" style={{ borderColor: "#0D0B1E" }}>
              <Image src="/avatar.png" alt="Vishal Singh" width={96} height={96} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div className="pt-14 px-4 space-y-5">
          {/* Name & title */}
          <div className="text-center">
            <h1 className="text-white text-[22px] font-bold">{personalInfo.name}</h1>
            <p className="text-[#6C63FF] text-[14px] font-semibold mt-0.5">{personalInfo.title}</p>
          </div>

          {/* Hire me + share */}
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex-1 py-3 rounded-full text-center font-bold text-white text-[14px]"
              style={{ background: "linear-gradient(135deg,#6C63FF,#5046E5)" }}
            >
              Hire Me
            </a>
            <button className="w-11 h-11 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.1)" }}>
              <span className="text-white text-sm">↗</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { value: personalInfo.stats.apps, label: "APPS" },
              { value: personalInfo.stats.years, label: "YEARS XP" },
              { value: personalInfo.stats.commits, label: "COMMITS" },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl py-3 text-center" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <p className="text-white text-[18px] font-bold">{s.value}</p>
                <p className="text-white/40 text-[9px] font-semibold tracking-wider mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Bio */}
          <div>
            <h2 className="text-white/40 text-[11px] font-bold tracking-widest mb-2">BIO</h2>
            <p className="text-white/80 text-[13px] leading-relaxed">{personalInfo.bio}</p>
            <p className="text-white/60 text-[13px] leading-relaxed mt-2">{personalInfo.bio2}</p>
          </div>

          {/* Info rows */}
          <div className="space-y-2 pb-4">
            <div className="flex items-center gap-3 py-3 px-3 rounded-xl" style={{ background: "rgba(255,255,255,0.05)" }}>
              <span className="text-lg">📍</span>
              <div>
                <p className="text-white/40 text-[10px] tracking-wider">LOCATION</p>
                <p className="text-white text-[13px] font-medium">{personalInfo.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 py-3 px-3 rounded-xl" style={{ background: "rgba(255,255,255,0.05)" }}>
              <span className="text-lg">✉️</span>
              <div>
                <p className="text-white/40 text-[10px] tracking-wider">EMAIL</p>
                <p className="text-white text-[13px] font-medium">{personalInfo.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 py-3 px-3 rounded-xl" style={{ background: "rgba(255,255,255,0.05)" }}>
              <span className="text-lg">🐙</span>
              <div>
                <p className="text-white/40 text-[10px] tracking-wider">GITHUB</p>
                <a href={personalInfo.github} target="_blank" className="text-[#6C63FF] text-[13px] font-medium">Vishalsingh1910</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom tab bar */}
      <div className="px-4 pb-4">
        <div className="rounded-2xl flex justify-around py-3" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)" }}>
          {[
            { icon: "🏠", label: "Home", action: onBack },
            { icon: "👤", label: "About", active: true, action: () => {} },
            { icon: "📁", label: "Projects", action: () => onNavigate("projects") },
            { icon: "✉️", label: "Contact", action: () => onNavigate("contact") },
          ].map((t) => (
            <button key={t.label} onClick={t.action} className="flex flex-col items-center gap-0.5">
              <span className="text-lg">{t.icon}</span>
              <span className={`text-[10px] ${t.active ? "text-[#6C63FF]" : "text-white/40"}`}>{t.label}</span>
            </button>
          ))}
        </div>
        <div className="flex justify-center mt-2">
          <div className="w-28 h-1 bg-white/20 rounded-full" />
        </div>
      </div>
    </motion.div>
  )
}

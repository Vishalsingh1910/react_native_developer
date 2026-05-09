"use client"
import { motion } from "framer-motion"

interface ControlCenterProps {
  onClose: () => void
}

export default function ControlCenter({ onClose }: ControlCenterProps) {
  const techStack = [
    { label: "React N.", color: "#61DAFB", emoji: "📱" },
    { label: "TS", color: "#3178C6", emoji: "🔷" },
    { label: "JS", color: "#F7DF1E", emoji: "🟡" },
    { label: "Expo", color: "#000020", emoji: "🚀" },
    { label: "Firebase", color: "#FFCA28", emoji: "🔥" },
  ]

  return (
    <motion.div
      className="absolute inset-0 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(10px)" }} />

      <motion.div
        className="absolute inset-x-0 top-0"
        style={{ background: "rgba(20,18,50,0.95)", backdropFilter: "blur(30px)", borderBottom: "1px solid rgba(255,255,255,0.1)" }}
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Status bar area */}
        <div className="flex items-center justify-between px-5 pt-3 pb-1">
          <span className="text-white/60 text-[13px] font-semibold">9:41</span>
          <div className="flex gap-1 text-white/60 text-[13px]">▲ ▲ ▲</div>
        </div>

        <div className="px-4 py-3 space-y-3">
          {/* Toggle Grid */}
          <div className="grid grid-cols-2 gap-3">
            {/* Connectivity toggles */}
            <div className="rounded-2xl p-3" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { icon: "📶", label: "WiFi", on: true },
                  { icon: "🔵", label: "BT", on: false },
                  { icon: "✈️", label: "Airplane", on: false },
                  { icon: "📡", label: "Hotspot", on: false },
                ].map((t) => (
                  <div key={t.label} className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg ${t.on ? "bg-[#6C63FF]" : "bg-white/10"}`}>
                      {t.icon}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dark / Lock */}
            <div className="space-y-2">
              <div className="rounded-2xl p-3 flex flex-col items-center gap-1" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", minHeight: 64 }}>
                <span className="text-2xl">🌙</span>
                <span className="text-white/50 text-[10px] font-semibold tracking-wider">DARK</span>
              </div>
              <div className="rounded-2xl p-3 flex flex-col items-center gap-1" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", minHeight: 64 }}>
                <span className="text-2xl">🔒</span>
                <span className="text-white/50 text-[10px] font-semibold tracking-wider">LOCK</span>
              </div>
            </div>
          </div>

          {/* Sliders */}
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl p-3 flex flex-col justify-between" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", minHeight: 80 }}>
              <div className="flex-1 flex items-center justify-center">
                <div className="w-1.5 h-12 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.15)" }}>
                  <div className="w-full bg-white/60 rounded-full" style={{ height: "70%" }} />
                </div>
              </div>
              <div className="flex justify-center mt-2">
                <span className="text-white/50 text-lg">☀️</span>
              </div>
            </div>
            <div className="rounded-2xl p-3 flex flex-col justify-between" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", minHeight: 80 }}>
              <div className="flex-1 flex items-center justify-center">
                <div className="w-1.5 h-12 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.15)" }}>
                  <div className="w-full bg-white/60 rounded-full" style={{ height: "55%" }} />
                </div>
              </div>
              <div className="flex justify-center mt-2">
                <span className="text-white/50 text-lg">🔊</span>
              </div>
            </div>
          </div>

          {/* Music player */}
          <div className="rounded-2xl p-3 flex items-center gap-3" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-400 to-amber-600 flex items-center justify-center text-xl flex-shrink-0">🎵</div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-[13px] font-semibold truncate">Current Vibe</p>
              <p className="text-white/50 text-[11px] truncate">Lo-fi Coding Beats (Chill)</p>
              <div className="mt-1 h-0.5 rounded-full overflow-hidden bg-white/10">
                <div className="h-full w-2/5 bg-[#6C63FF] rounded-full" />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white/60 text-sm">⏮</span>
              <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-xs">⏸</div>
              <span className="text-white/60 text-sm">⏭</span>
            </div>
          </div>

          {/* Quick tiles */}
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl p-3 flex items-center gap-2" style={{ background: "rgba(52,199,89,0.15)", border: "1px solid rgba(52,199,89,0.3)" }}>
              <span className="text-xl">💼</span>
              <div>
                <p className="text-[#34C759] text-[12px] font-bold">Hire Me</p>
                <p className="text-white/50 text-[10px]">Available Now</p>
              </div>
            </div>
            <div className="rounded-2xl p-3 flex items-center gap-2" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <span className="text-xl">🔔</span>
              <div>
                <p className="text-white text-[12px] font-bold">Sound</p>
                <p className="text-white/50 text-[10px]">On (Vibrate)</p>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="rounded-2xl p-3" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-white/40 text-[10px] font-semibold tracking-widest">TECH STACK</span>
              <span className="text-white/30 text-[10px]">▾</span>
            </div>
            <div className="flex gap-3">
              {techStack.map((t) => (
                <div key={t.label} className="flex flex-col items-center gap-1">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center text-base" style={{ background: `${t.color}22`, border: `1px solid ${t.color}44` }}>
                    {t.emoji}
                  </div>
                  <span className="text-white/40 text-[9px]">{t.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Home bar */}
          <div className="flex justify-center pb-1">
            <div className="w-28 h-1 bg-white/20 rounded-full" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

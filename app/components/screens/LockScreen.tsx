"use client"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import StatusBar from "../StatusBar"

interface LockScreenProps {
  onUnlock: () => void
}

export default function LockScreen({ onUnlock }: LockScreenProps) {
  const [time, setTime] = useState({ h: "09", m: "41" })
  const [date, setDate] = useState("")

  useEffect(() => {
    const update = () => {
      const now = new Date()
      setTime({
        h: String(now.getHours()).padStart(2, "0"),
        m: String(now.getMinutes()).padStart(2, "0"),
      })
      setDate(
        now.toLocaleDateString("en-US", {
          weekday: "long",
          month: "long",
          day: "numeric",
        })
      )
    }
    update()
    const t = setInterval(update, 1000)
    return () => clearInterval(t)
  }, [])

  const notifications = [
    {
      app: "PORTFOLIO APP",
      time: "now",
      icon: "🚀",
      iconBg: "#6C63FF",
      title: "Project 'Cooking Buddy' is now Live",
      body: "A new recipe discovery app with AI features has been added to the showcase.",
    },
    {
      app: "GITHUB",
      time: "2m ago",
      icon: "⌨️",
      iconBg: "#2D333B",
      title: "Consistency is King",
      body: "100+ contributions tracked this month in open source repositories.",
    },
    {
      app: "SYSTEM",
      time: "1h ago",
      icon: "👤",
      iconBg: "#3D3757",
      title: "Experience Updated",
      body: "React Native Developer profile has been updated with new skills.",
    },
  ]

  return (
    <motion.div
      className="absolute inset-0 flex flex-col"
      style={{ background: "linear-gradient(180deg, #0D0B2E 0%, #0A0818 100%)" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ y: "-100%", opacity: 0 }}
      transition={{ duration: 0.45, ease: [0.32, 0, 0.67, 0] }}
    >
      <StatusBar />

      {/* Dynamic Island */}
      <div className="flex justify-center mt-1 mb-2">
        <div className="w-28 h-7 bg-black rounded-full" />
      </div>

      {/* Clock */}
      <div className="flex flex-col items-center pt-4 pb-6">
        <p className="text-white/60 text-sm font-medium mb-1">{date}</p>
        <h1 className="text-white font-bold" style={{ fontSize: 80, lineHeight: 1, letterSpacing: -3 }}>
          {time.h}:{time.m}
        </h1>
      </div>

      {/* Notifications */}
      <div className="flex-1 px-4 space-y-3 overflow-y-auto">
        {notifications.map((n, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.1, duration: 0.4 }}
            className="rounded-2xl px-4 py-3"
            style={{ background: "rgba(255,255,255,0.08)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.1)" }}
          >
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg flex-shrink-0" style={{ background: n.iconBg }}>
                {n.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-0.5">
                  <span className="text-white/40 text-[10px] font-semibold tracking-wider">{n.app}</span>
                  <span className="text-white/40 text-[10px]">{n.time}</span>
                </div>
                <p className="text-white text-[13px] font-semibold leading-tight">{n.title}</p>
                <p className="text-white/60 text-[12px] leading-tight mt-0.5">{n.body}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Actions */}
      <div className="px-8 pb-4">
        <div className="flex justify-between items-center mb-6">
          <button className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.15)" }}>
            <span className="text-xl">📄</span>
          </button>
          <button className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.15)" }}>
            <span className="text-xl">✉️</span>
          </button>
        </div>

        <motion.button
          onClick={onUnlock}
          className="w-full flex flex-col items-center gap-1"
          whileTap={{ scale: 0.97 }}
        >
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 12l5-5 5 5" stroke="#6C63FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5 16l5-5 5 5" stroke="#6C63FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
            </svg>
          </motion.div>
          <span className="text-white/50 text-[13px] font-medium">Swipe up to open</span>
          <div className="w-32 h-1 bg-white/30 rounded-full mt-1" />
        </motion.button>
      </div>
    </motion.div>
  )
}

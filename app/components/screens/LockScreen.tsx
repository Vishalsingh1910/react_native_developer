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
      title: "Project 'Cooking Buddy' soon gonna go live!",
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
    // {
    //   app: "SYSTEM",
    //   time: "1h ago",
    //   icon: "👤",
    //   iconBg: "#3D3757",
    //   title: "Experience Updated",
    //   body: "React Native Developer profile has been updated with new skills.",
    // },
  ]

  return (
    <motion.div
      className="absolute inset-0"
      style={{
        background: "linear-gradient(180deg, #0D0B2E 0%, #0A0818 100%)",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        overflow: "hidden",
      }}
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
      <div className="relative flex flex-col items-center pt-8 pb-10">
        <div
          className="absolute w-40 h-40 rounded-full blur-3xl opacity-20"
          style={{ background: "#6C63FF" }}
        />

        <p className="text-white/70 text-sm font-medium mb-2" style={{ color: "white" }}>
          {date}
        </p>

        <h1
          className="relative text-white font-bold"
          style={{
            fontSize: 70,
            lineHeight: 1,
            letterSpacing: -4,
            textShadow: "0 0 30px rgba(108,99,255,0.25)",
            color: "whitesmoke",
          }}
        >
          {time.h}:{time.m}
        </h1>
      </div>

      {/* Scrollable middle + pinned bottom — single flex column taking remaining height */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minHeight: 0, overflow: "hidden" }}>

        {/* Notifications — scrolls freely */}
        <div style={{ flex: 1, overflowY: "auto", minHeight: 0, padding: "8px 16px", display: "flex", flexDirection: "column", gap: 12 }}>
          {notifications.map((n, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.15 + i * 0.1, duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              style={{
                borderRadius: 20,
                background: "linear-gradient(135deg, rgba(255,255,255,0.11) 0%, rgba(255,255,255,0.05) 100%)",
                backdropFilter: "blur(40px)",
                WebkitBackdropFilter: "blur(40px)",
                border: "1px solid rgba(255,255,255,0.14)",
                // Top-edge highlight — the "good edge" the user wants
                boxShadow: `
                  0 1px 0 0 rgba(255,255,255,0.18) inset,
                  0 -1px 0 0 rgba(0,0,0,0.2) inset,
                  0 8px 32px rgba(0,0,0,0.25),
                  0 2px 8px rgba(0,0,0,0.15)
                `,
                overflow: "hidden",
                display: "flex",
                alignItems: "stretch",
              }}
            >
              {/* Left accent bar */}
              <div style={{ width: 3, background: n.iconBg, flexShrink: 0, borderRadius: "20px 0 0 20px", opacity: 0.85 }} />

              {/* Card body */}
              <div style={{ flex: 1, padding: "12px 14px 12px 12px" }}>
                {/* Header row */}
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 7 }}>
                  {/* App icon */}
                  <div
                    style={{
                      width: 28, height: 28, borderRadius: 8, flexShrink: 0,
                      background: n.iconBg,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 14,
                      boxShadow: `0 0 10px ${n.iconBg}55`,
                    }}
                  >
                    {n.icon}
                  </div>
                  <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.08em", color: "rgba(255,255,255,0.6)", textTransform: "uppercase", flex: 1 }}>
                    {n.app}
                  </span>
                  <span style={{ fontSize: 10, color: "rgba(255,255,255,0.45)" }}>{n.time}</span>
                </div>

                {/* Title */}
                <p style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.95)", lineHeight: 1.3, margin: 0, marginBottom: 3 }}>
                  {n.title}
                </p>
                {/* Body */}
                <p style={{ fontSize: 11.5, color: "rgba(255,255,255,0.6)", lineHeight: 1.4, margin: 0 }}>
                  {n.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Actions — always at the very bottom of the phone frame */}
        <div style={{ flexShrink: 0, padding: "12px 32px 24px", display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
          {/* Quick-action icons */}
          {/* <div className="flex justify-between items-center w-full">
            <button
              className="w-16 h-16 rounded-2xl flex items-center justify-center"
              style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <span className="text-3xl">📄</span>
            </button>
            <button
              className="w-16 h-16 rounded-2xl flex items-center justify-center"
              style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <span className="text-3xl">✉️</span>
            </button>
          </div> */}

          {/* Swipe to unlock */}
          <motion.button
            onClick={onUnlock}
            className="w-full flex justify-center items-center py-3 bg-transparent border-none outline-none"
            whileTap={{ scale: 0.98 }}
          >
            <motion.span
              className="text-sm font-medium tracking-wide"
              animate={{ opacity: [0.45, 1, 0.45] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              style={{ color: "whitesmoke" }}
            >
              Tap here to unlock
            </motion.span>
          </motion.button>
        </div>

      </div>
    </motion.div>
  )
}

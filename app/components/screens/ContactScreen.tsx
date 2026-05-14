"use client"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { personalInfo } from "../../data/portfolio"
import StatusBar from "../StatusBar"

interface ContactScreenProps {
  onBack: () => void
}

const contacts = [
  { label: "Email", value: personalInfo.email, icon: "✉️", href: `mailto:${personalInfo.email}` },
  { label: "LinkedIn", value: "vishal-singh-306214262", icon: "💼", href: personalInfo.linkedin },
  { label: "GitHub", value: "Vishalsingh1910", icon: "🐙", href: personalInfo.github },
]

export default function ContactScreen({ onBack }: ContactScreenProps) {
  const [inputValue, setInputValue] = useState("")
  const [messages, setMessages] = useState<{ from: "visitor" | "me"; text: string }[]>([])
  const [replied, setReplied] = useState(false)

  const handleSend = () => {
    if (!inputValue.trim()) return
    const newMsg = { from: "visitor" as const, text: inputValue }
    setMessages((prev) => [...prev, newMsg])
    setInputValue("")
    if (!replied) {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            from: "me",
            text: "Thanks for stopping by! I'm currently open to new opportunities. Let's connect through any of these channels:",
          },
        ])
        setReplied(true)
      }, 800)
    }
  }

  return (
    <motion.div
      className="absolute inset-0 flex flex-col"
      style={{ background: "#0D0B1E" }}
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 32 }}
    >
      <StatusBar />

      {/* Dynamic island */}
      <div className="flex justify-center mt-1">
        <div className="w-28 h-7 bg-black rounded-full" />
      </div>

      {/* Chat header */}
      <div className="flex items-center gap-3 px-4 py-2 border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
        <button onClick={onBack} className="text-[#6C63FF] text-lg">‹</button>
        <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-[#6C63FF]">
          <Image src="/avatar.png" alt="Vishal" width={36} height={36} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1">
          <p className="text-white text-[14px] font-semibold">Vishal</p>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-[#34C759]" />
            <p className="text-[#34C759] text-[11px]">Active Now</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="text-white/50 text-lg">📹</button>
          <button className="text-white/50 text-lg">📞</button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
        {/* Default intro message */}
        <div className="text-center">
          <span className="text-white/30 text-[11px]">TODAY</span>
        </div>

        {/* Visitor default */}
        <div className="flex items-end gap-2">
          <div className="w-7 h-7 rounded-full overflow-hidden flex-shrink-0">
            <div className="w-full h-full bg-white/20 flex items-center justify-center text-sm">👤</div>
          </div>
          <div className="max-w-[70%]">
            <span className="text-white/30 text-[10px] mb-1 block">Visitor</span>
            <div className="px-3 py-2.5 rounded-[18px] rounded-bl-[4px]" style={{ background: "rgba(255,255,255,0.1)" }}>
              <p className="text-white text-[13px]">Hey, I love your work! How can I reach out for a project?</p>
            </div>
          </div>
        </div>

        {/* My default reply */}
        <div className="flex flex-col items-end">
          <span className="text-white/30 text-[10px] mb-1">Vishal</span>
          <div className="max-w-[75%] space-y-2">
            <div className="px-3 py-2.5 rounded-[18px] rounded-br-[4px]" style={{ background: "linear-gradient(135deg,#6C63FF,#5046E5)" }}>
              <p className="text-white text-[13px]">
                Thanks for stopping by! I'm currently open to new opportunities. Let's connect through any of these channels:
              </p>
            </div>
            {contacts.map((c) => (
              <a key={c.label} href={c.href} target="_blank" className="flex items-center justify-between px-3 py-2.5 rounded-xl" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}>
                <div className="flex items-center gap-2">
                  <span className="text-base">{c.icon}</span>
                  <div>
                    <p className="text-white text-[12px] font-semibold">{c.label}</p>
                    <p className="text-white/50 text-[10px] truncate max-w-[140px]">{c.value}</p>
                  </div>
                </div>
                <span className="text-white/30 text-sm">↗</span>
              </a>
            ))}
          </div>
        </div>

        {/* Dynamic messages */}
        <AnimatePresence>
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${msg.from === "me" ? "justify-end" : "items-end gap-2"}`}
            >
              {msg.from === "visitor" && (
                <div className="w-7 h-7 rounded-full bg-white/20 flex-shrink-0 flex items-center justify-center text-sm">👤</div>
              )}
              <div
                className="max-w-[70%] px-3 py-2.5 rounded-[18px]"
                style={{
                  background: msg.from === "me" ? "linear-gradient(135deg,#6C63FF,#5046E5)" : "rgba(255,255,255,0.1)",
                  borderRadius: msg.from === "me" ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
                }}
              >
                <p className="text-white text-[13px]">{msg.text}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Input bar */}
      <div className="px-3 pb-4">
        <div className="flex items-center gap-2 px-3 py-2 rounded-2xl" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}>
          <button className="w-7 h-7 rounded-full flex items-center justify-center text-white/50 text-lg">+</button>
          <input
            className="flex-1 bg-transparent text-white text-[13px] outline-none placeholder-white/30"
            placeholder="Type a message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button onClick={handleSend} className="w-7 h-7 rounded-full flex items-center justify-center text-sm" style={{ background: "#6C63FF" }}>
            ›
          </button>
        </div>
        <div className="flex justify-center mt-2">
          <div className="w-28 h-1 bg-white/20 rounded-full" />
        </div>
      </div>
    </motion.div>
  )
}

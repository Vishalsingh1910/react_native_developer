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
      style={{ background: "#0D0B1E", width: "100%", height: "100%" }}
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 32 }}
    >
      <StatusBar />

      {/* Header */}
      <div className="flex items-center gap-3 px-6 pt-4 pb-6 mt-4">
        <button onClick={onBack} className="w-12 h-12 rounded-full flex items-center justify-center border border-white/20" style={{ background: "rgba(255,255,255,0.15)" }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <h1 className="text-white text-[20px] font-bold flex-1 text-center pr-12">Resume</h1>
      </div>
      <div className="space-y-5">
        {/* Resume Button */}
        <motion.a
          whileTap={{ scale: 0.98 }}
          href={personalInfo.resumeUrl}
          target="_blank"
          className="
      relative
      overflow-hidden
      w-full
      rounded-[28px]
      px-6
      py-5
      flex
      items-center
      justify-between
      border
      border-white/[0.08]
      backdrop-blur-2xl
      shadow-2xl
    "
          style={{
            background:
              "linear-gradient(135deg,#7C5CFF 0%,#5B8CFF 100%)",
          }}
        >
          {/* Glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-3xl rounded-full" />

          <div className="flex items-center gap-4 z-10">
            <div
              className="
          w-14
          h-14
          rounded-2xl
          flex
          items-center
          justify-center
          text-2xl
          bg-white/15
          border
          border-white/10
        "
            >
              📄
            </div>

            <div>
              <p className="text-white text-[16px] font-semibold tracking-tight">
                Resume
              </p>

              <p className="text-white/70 text-[12px] mt-1">
                View complete resume PDF
              </p>
            </div>
          </div>

          <div className="z-10">
            <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center border border-white/10">
              <span className="text-white text-lg">→</span>
            </div>
          </div>
        </motion.a>

        {/* Cover Letter Button */}
        <motion.a
          whileTap={{ scale: 0.98 }}
          href={personalInfo.coverLetterUrl}
          target="_blank"
          className="
      relative
      overflow-hidden
      w-full
      rounded-[28px]
      px-6
      py-5
      flex
      items-center
      justify-between
      border
      border-white/[0.06]
      backdrop-blur-2xl
    "
          style={{
            background: "rgba(255,255,255,0.06)",
          }}
        >
          {/* subtle glow */}
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full" />

          <div className="flex items-center gap-4 z-10">
            <div
              className="
          w-14
          h-14
          rounded-2xl
          flex
          items-center
          justify-center
          text-2xl
          bg-white/8
          border
          border-white/10
        "
            >
              ✉️
            </div>

            <div>
              <p className="text-white text-[16px] font-semibold tracking-tight">
                Cover Letter
              </p>

              <p className="text-white/60 text-[12px] mt-1">
                Read introduction letter
              </p>
            </div>
          </div>

          <div className="z-10">
            <div className="w-10 h-10 rounded-full bg-white/8 flex items-center justify-center border border-white/10">
              <span className="text-white text-lg">→</span>
            </div>
          </div>
        </motion.a>
      </div>
    </motion.div>
  )
}
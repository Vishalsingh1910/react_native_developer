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
      style={{
        background:
          "radial-gradient(circle at top,#1E293B 0%,#0D0B1E 45%,#050507 100%)",
      }}
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 32 }}
    >
      <StatusBar />

      {/* Header */}
      <div className="flex items-center gap-3 px-5 pt-4 pb-4 mt-2">
        <button onClick={onBack} className="w-10 h-10 rounded-full flex items-center justify-center border border-white/10" style={{ background: "rgba(255,255,255,0.08)" }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <h1 className="text-white text-[18px] font-bold flex-1 text-center pr-10">Resume</h1>
      </div>
      
      <div className="space-y-5 px-5">
        {/* Resume */}
        <motion.a
          whileTap={{ scale: 0.98 }}
          href={personalInfo.resumeUrl}
          target="_blank"
          className="flex items-center justify-between w-full active:opacity-90 transition-all"
          style={{
            borderRadius: 16,
            padding: "8px",
            marginTop:"8px",
            background: "linear-gradient(135deg, rgba(255,255,255,0.11) 0%, rgba(255,255,255,0.05) 100%)",
            backdropFilter: "blur(40px)",
            WebkitBackdropFilter: "blur(40px)",
            border: "1px solid rgba(255,255,255,0.25)",
            boxShadow: `
              inset 0 0 0 1px rgba(255,255,255,0.1),
              inset 0 1px 0 0 rgba(255,255,255,0.25),
              inset 0 -1px 0 0 rgba(0,0,0,0.3),
              0 8px 32px rgba(0,0,0,0.25),
              0 2px 8px rgba(0,0,0,0.15)
            `,
            overflow: "hidden",
          }}
        >
          <div className="flex items-center gap-4">
            {/* Icon */}
            <div
              className="w-14 h-14 rounded-[18px] flex items-center justify-center shrink-0 shadow-lg"
              style={{
                background: "linear-gradient(135deg,#F97316,#EA580C)",
                border: "1px solid #EA580C55"
              }}
            >
              <span className="text-[26px]">📄</span>
            </div>

            {/* Text */}
            <div>
              <p className="text-white text-[19px] font-bold tracking-tight">
                Open Resume
              </p>

              <p className="text-white/50 text-[13px] font-medium mt-1">
                PDF • Updated recently
              </p>
            </div>
          </div>

          {/* Arrow */}
          <div className="opacity-30 shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </div>
        </motion.a>

        {/* Cover Letter */}
        <motion.a
          whileTap={{ scale: 0.98 }}
          href={personalInfo.coverLetterUrl}
          target="_blank"
          className="flex items-center justify-between w-full active:opacity-90 transition-all"
          style={{
            borderRadius: 16,
            padding: "8px",
            marginTop:"8px",
            background: "linear-gradient(135deg, rgba(255,255,255,0.11) 0%, rgba(255,255,255,0.05) 100%)",
            backdropFilter: "blur(40px)",
            WebkitBackdropFilter: "blur(40px)",
            border: "1px solid rgba(255,255,255,0.25)",
            boxShadow: `
              inset 0 0 0 1px rgba(255,255,255,0.1),
              inset 0 1px 0 0 rgba(255,255,255,0.25),
              inset 0 -1px 0 0 rgba(0,0,0,0.3),
              0 8px 32px rgba(0,0,0,0.25),
              0 2px 8px rgba(0,0,0,0.15)
            `,
            overflow: "hidden",
          }}
        >
          <div className="flex items-center gap-4">
            {/* Icon */}
            <div
              className="w-14 h-14 rounded-[18px] flex items-center justify-center shrink-0 shadow-lg"
              style={{
                background: "linear-gradient(135deg,#65A30D,#4D7C0F)",
                border: "1px solid #4D7C0F55"
              }}
            >
              <span className="text-[26px]">✉️</span>
            </div>

            {/* Text */}
            <div>
              <p className="text-white text-[19px] font-bold tracking-tight">
                Open Cover Letter
              </p>

              <p className="text-white/50 text-[13px] font-medium mt-1">
                DOCX • Professional introduction
              </p>
            </div>
          </div>

          {/* Arrow */}
          <div className="opacity-30 shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </div>
        </motion.a>
      </div>
    </motion.div>
  )
}
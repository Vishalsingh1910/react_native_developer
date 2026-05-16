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
      <div className="flex items-center gap-3 px-6 pt-4 pb-6 mt-4">
        <button onClick={onBack} className="w-12 h-12 rounded-full flex items-center justify-center border border-white/20" style={{ background: "rgba(255,255,255,0.15)" }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <h1 className="text-white text-[20px] font-bold flex-1 text-center pr-12">Resume</h1>
      </div>
      <div className="space-y-5">
        {/* Resume */}
        <motion.a
          whileTap={{ scale: 0.98 }}
          href={personalInfo.resumeUrl}
          target="_blank"
          className="
      flex
      items-center
      justify-between
      rounded-[24px]
      px-5
      py-5
      border
      border-white/[0.05]
      bg-white/[0.03]
      backdrop-blur-xl
      active:opacity-90
      transition-all
    "
        >
          <div className="flex items-center gap-4">
            {/* Icon */}
            <div
              className="
          w-14
          h-14
          rounded-2xl
          flex
          items-center
          justify-center
          shrink-0
        "
              style={{
                background:
                  "linear-gradient(135deg,#F97316,#EA580C)",
              }}
            >
              <span className="text-[26px]">📄</span>
            </div>

            {/* Text */}
            <div>
              <p className="text-white text-[20px] font-semibold tracking-tight">
                Open Resume
              </p>

              <p className="text-white/45 text-[13px] mt-1">
                PDF • Updated recently
              </p>
            </div>
          </div>

          {/* Arrow */}
          <div className="opacity-40">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.2"
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
          className="
      flex
      items-center
      justify-between
      rounded-[24px]
      px-5
      py-5
      border
      border-white/[0.05]
      bg-white/[0.03]
      backdrop-blur-xl
      active:opacity-90
      transition-all
    "
        >
          <div className="flex items-center gap-4">
            {/* Icon */}
            <div
              className="
          w-14
          h-14
          rounded-2xl
          flex
          items-center
          justify-center
          shrink-0
        "
              style={{
                background:
                  "linear-gradient(135deg,#65A30D,#4D7C0F)",
              }}
            >
              <span className="text-[24px]">✉️</span>
            </div>

            {/* Text */}
            <div>
              <p className="text-white text-[20px] font-semibold tracking-tight">
                Open Cover Letter
              </p>

              <p className="text-white/45 text-[13px] mt-1">
                DOCX • Professional introduction
              </p>
            </div>
          </div>

          {/* Arrow */}
          <div className="opacity-40">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.2"
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
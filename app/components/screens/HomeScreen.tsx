"use client"
import React from "react"
import { motion } from "framer-motion"
import { Screen } from "../../data/portfolio"
import StatusBar from "../StatusBar"

interface HomeScreenProps {
  onNavigate: (screen: Screen, project?: any) => void
  onOpenControlCenter: () => void
}

interface DockIconProps {
  icon: React.ReactNode
  color: string
  onClick?: () => void
  label?: string
  large?: boolean
}

const DockIcon = ({
  icon,
  color,
  onClick,
  label,
  large,
}: DockIconProps) => (
  <div className="flex flex-col items-center gap-1">
    <motion.button
      onClick={onClick}
      whileHover={{
        scale: 1.08,
        y: -4,
      }}
      whileTap={{
        scale: 0.9,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 18,
      }}
      className={`
        ${large ? "w-[58px] h-[58px]" : "w-[48px] h-[48px]"}
        rounded-[16px]
        flex
        items-center
        justify-center
        shadow-xl
        relative
      `}
      style={{
        background: color,
      }}
    >
      {/* Top Reflection */}
      <div
        className="
          absolute
          top-1
          left-1
          right-1
          h-[35%]
          rounded-[12px]
          bg-white/15
        "
      />

      <div className="relative z-10">
        {icon}
      </div>
    </motion.button>

    {label && (
      <span
        className="
          text-[11px]
          font-medium
          tracking-wide
          leading-none
        "
        style={{color: "whitesmoke", paddingTop: 2}}
      >
        {label}
      </span>
    )}
  </div>
)

export default function HomeScreen({ onNavigate, onOpenControlCenter }: HomeScreenProps) {

  return (
    <motion.div
      style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, display: "flex", flexDirection: "column", overflow: "hidden", background: "linear-gradient(160deg, #0D0B2E 0%, #090718 60%, #0A0818 100%)" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35 }}
    >
      <StatusBar />

      <motion.div
        animate={{
          rotate: [0, 2, -2, 0],
          scale: [1, 1.03, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="relative flex flex-col items-center mt-8"
      >
        {/* Glow */}
        <div className="absolute inset-0 blur-3xl bg-cyan-400/30 rounded-full scale-125" />

        <img
          src="https://reactnative.dev/img/header_logo.svg"
          alt="React Native"
          className="w-[200px] h-[200px] relative z-10"
        />
      </motion.div>

      <div style={{ position: "absolute", bottom: "96px", left: 0, right: 0, padding: "0 20px", display: "flex", flexDirection: "column", gap: "20px" }}>
        <div className="grid grid-cols-4 gap-3" style={{ background: "transparent" }}>
          <DockIcon icon="⌨️" label="Projects" color="linear-gradient(135deg,#6C63FF,#5046E5)" onClick={() => onNavigate("projects")} />
          <DockIcon icon="⚙️" label="Skills" color="linear-gradient(135deg,#FF9500,#FF6B00)" onClick={() => onNavigate("skills")} />
          <DockIcon icon="👤" label="About" color="linear-gradient(135deg,#2D3250,#424769)" onClick={() => onNavigate("about")} />
          <DockIcon icon="✉️" label="Contact" color="linear-gradient(135deg,#007AFF,#0056CC)" onClick={() => onNavigate("contact")} />
        </div>
        <div className="grid grid-cols-4 gap-3" style={{ background: "transparent" }}>
          <DockIcon icon="📄" label="Resume" color="linear-gradient(135deg,#34C759,#248A3D)" onClick={() => onNavigate("resume")} />
          <DockIcon icon="🔧" label="Tools" color="linear-gradient(135deg,#3D3757,#2D2B45)" onClick={() => onNavigate("skills")} />
          <DockIcon icon="📱" label="Gallery" color="linear-gradient(135deg,#1C1C3A,#2D2B45)" onClick={() => onNavigate("projects")} />
          <DockIcon icon="ℹ️" label="Info" color="linear-gradient(135deg,#2D3250,#424769)" onClick={() => onNavigate("about")} />
        </div>
      </div>

      {/* Dock — absolutely pinned to bottom */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "10px 18px 16px" }}>
        <div className="rounded-3xl p-3 flex justify-around" style={{ background: "transparent" }}>
          <DockIcon icon="📞" large color="linear-gradient(135deg,#34C759,#248A3D)" onClick={() => window.open("tel:+919033789778", "_self")} />
          <DockIcon
            color="linear-gradient(135deg,#25D366,#128C7E)"
            large
            onClick={() => window.open("https://wa.me/919033789778?text=Hi%20Vishal%2C%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect!", "_blank")}
            icon={
              <svg viewBox="0 0 32 32" width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.61 1.824 6.51L4 29l7.695-1.798A12.94 12.94 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3z" fill="#fff" />
                <path d="M21.93 18.612c-.306-.153-1.81-.893-2.09-.995-.28-.103-.484-.153-.688.153-.204.306-.79.995-.969 1.199-.178.204-.357.23-.663.077-.306-.153-1.29-.475-2.458-1.513-.908-.809-1.52-1.808-1.699-2.114-.178-.306-.019-.471.134-.623.137-.137.306-.357.459-.536.153-.178.204-.306.306-.51.103-.204.051-.383-.026-.536-.077-.153-.688-1.659-.943-2.27-.248-.597-.5-.516-.688-.526l-.587-.01c-.204 0-.535.077-.815.383-.28.306-1.07 1.046-1.07 2.552 0 1.506 1.096 2.96 1.249 3.164.153.204 2.157 3.294 5.228 4.621.73.315 1.3.503 1.744.644.733.233 1.4.2 1.927.121.588-.088 1.81-.74 2.065-1.455.255-.714.255-1.327.178-1.455-.076-.128-.28-.204-.587-.357z" fill="#25D366" />
              </svg>
            }
          />
          <DockIcon icon="⚙️" large color="linear-gradient(135deg,#8E8E93,#636366)" onClick={onOpenControlCenter} />
        </div>
      </div>
    </motion.div>
  )
}

"use client"
import { motion } from "framer-motion"
import { Screen, projects } from "../../data/portfolio"
import StatusBar from "../StatusBar"

interface HomeScreenProps {
  onNavigate: (screen: Screen, project?: any) => void
  onOpenControlCenter: () => void
}

const AppIcon = ({ icon, label, color, onClick }: { icon: string; label: string; color: string; onClick: () => void }) => (
  <motion.button
    onClick={onClick}
    className="flex flex-col items-center gap-1.5"
    whileTap={{ scale: 0.88 }}
    transition={{ type: "spring", stiffness: 400, damping: 20 }}
  >
    <div className="w-[60px] h-[60px] rounded-[14px] flex items-center justify-center shadow-lg text-2xl" style={{ background: color }}>
      {icon}
    </div>
    <span className="text-white/80 text-[11px] font-medium text-center leading-tight">{label}</span>
  </motion.button>
)

const DockIcon = ({ icon, color, onClick }: { icon: string; color: string; onClick?: () => void }) => (
  <motion.button
    onClick={onClick}
    className="w-[56px] h-[56px] rounded-[13px] flex items-center justify-center shadow-lg text-2xl"
    style={{ background: color }}
    whileTap={{ scale: 0.88 }}
    transition={{ type: "spring", stiffness: 400, damping: 20 }}
  >
    {icon}
  </motion.button>
)

export default function HomeScreen({ onNavigate, onOpenControlCenter }: HomeScreenProps) {
  const featuredProject = projects[0]

  return (
    <motion.div
      style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, display: "flex", flexDirection: "column", overflow: "hidden" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35 }}
    >
      <StatusBar />

      {/* Dynamic Island - "OPEN FOR ROLES" */}
      {/* <div className="flex justify-center mt-1 mb-3">
        <div className="bg-black rounded-full flex items-center gap-2 px-3 h-7 min-w-[110px]">
          <span className="w-2 h-2 rounded-full bg-[#00FF88] animate-pulse flex-shrink-0" />
          <span className="text-white text-[11px] font-semibold tracking-wide">OPEN FOR ROLES</span>
        </div>
      </div> */}

      <div className="flex-1 overflow-y-auto px-4 space-y-4" style={{ paddingBottom: "96px" }}>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-2xl p-3" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}>
            <div className="text-white/40 text-[10px] font-semibold tracking-widest mb-1">GITHUB</div>
            <div className="flex items-center gap-1 mb-0.5">
              <span className="text-yellow-400 text-sm">★</span>
              <span className="text-white text-xl font-bold">50+</span>
            </div>
            <div className="text-white/50 text-[11px]">Total Stars</div>
          </div>
          <div className="rounded-2xl p-3" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}>
            <div className="text-white/40 text-[10px] font-semibold tracking-widest mb-1">ACTIVE</div>
            <div className="flex items-center gap-1 mb-0.5">
              <span className="text-[#00D4FF] text-sm">⚡</span>
              <span className="text-[#00D4FF] text-[13px] font-bold leading-tight">Cooking Buddy</span>
            </div>
            <div className="text-white/50 text-[11px]">In Development</div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2">
          <AppIcon icon="⌨️" label="Projects" color="linear-gradient(135deg,#6C63FF,#5046E5)" onClick={() => onNavigate("projects")} />
          <AppIcon icon="⚙️" label="Skills" color="linear-gradient(135deg,#FF9500,#FF6B00)" onClick={() => onNavigate("skills")} />
          <AppIcon icon="👤" label="About" color="linear-gradient(135deg,#2D3250,#424769)" onClick={() => onNavigate("about")} />
          <AppIcon icon="✉️" label="Contact" color="linear-gradient(135deg,#007AFF,#0056CC)" onClick={() => onNavigate("contact")} />
        </div>

        <motion.button
          onClick={() => onNavigate("project-detail", featuredProject)}
          className="w-full rounded-2xl overflow-hidden text-left"
          style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(108,99,255,0.3)" }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="h-32 relative overflow-hidden" style={{ background: "linear-gradient(135deg,#FF6B35,#FF9500,#6C63FF)" }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-5xl">🍳</span>
            </div>
            <div className="absolute top-2 left-3">
              <span className="text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-full text-white" style={{ background: "rgba(0,0,0,0.4)" }}>
                FEATURED
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-16" style={{ background: "linear-gradient(0deg, rgba(14,12,46,1), transparent)" }} />
            <div className="absolute bottom-2 left-3">
              <p className="text-white font-bold text-[16px]">{featuredProject.name}</p>
            </div>
          </div>
          <div className="px-3 py-2.5 flex items-center justify-between">
            <span className="text-white/50 text-[12px]">React Native • Expo • Supabase</span>
            <span className="text-[#6C63FF]">›</span>
          </div>
        </motion.button>

        <div className="grid grid-cols-4 gap-2">
          <AppIcon icon="📄" label="Resume" color="linear-gradient(135deg,#34C759,#248A3D)" onClick={() => onNavigate("resume")} />
          <AppIcon icon="🔧" label="Tools" color="linear-gradient(135deg,#3D3757,#2D2B45)" onClick={() => onNavigate("skills")} />
          <AppIcon icon="📱" label="Gallery" color="linear-gradient(135deg,#1C1C3A,#2D2B45)" onClick={() => onNavigate("projects")} />
          <AppIcon icon="ℹ️" label="Info" color="linear-gradient(135deg,#2D3250,#424769)" onClick={() => onNavigate("about")} />
        </div>

        <p className="text-center text-white/20 text-[10px]">Swipe from top for Control Center</p>
      </div>

      {/* Dock — absolutely pinned to bottom */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "10px 18px 16px" }}>
        <div className="rounded-3xl p-3 flex justify-around">
          <DockIcon icon="📞" color="linear-gradient(135deg,#34C759,#248A3D)" onClick={() => onNavigate("contact")} />
          <DockIcon icon="💬" color="linear-gradient(135deg,#34C759,#248A3D)" onClick={() => onNavigate("contact")} />
          <DockIcon icon="⚙️" color="linear-gradient(135deg,#8E8E93,#636366)" onClick={onOpenControlCenter} />
        </div>
      </div>
    </motion.div>
  )
}

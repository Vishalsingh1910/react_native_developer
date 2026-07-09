"use client"
import { motion } from "framer-motion"
import { skillGroups } from "../../data/portfolio"
import StatusBar from "../StatusBar"

interface SkillsScreenProps {
  onBack: () => void
}

export default function SkillsScreen({ onBack }: SkillsScreenProps) {
  return (
    <motion.div
      className="absolute inset-0 w-full h-full flex flex-col overflow-hidden"
      style={{
        background: "radial-gradient(circle at top, #1E293B 0%, #0D0B1E 45%, #050507 100%)",
      }}
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 32 }}
    >
      <StatusBar />

      {/* Header */}
      <div className="flex items-center gap-3 px-5 pt-4 pb-4 mt-2">
        <button
          onClick={onBack}
          className="w-10 h-10 rounded-full flex items-center justify-center border border-white/10"
          style={{ background: "rgba(255,255,255,0.08)" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <h1 className="text-white text-[18px] font-bold flex-1 text-center pr-10">
          Skills & Tech
        </h1>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 w-full overflow-y-auto px-5 space-y-6 pb-10 scrollbar-hide pt-2">
        
        {/* Dev Engine Card */}
        <div 
          className="relative rounded-3xl p-5 flex items-center gap-4 overflow-hidden shadow-2xl" 
          style={{ 
            background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)", 
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.15)",
            boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.2), 0 10px 40px rgba(0,0,0,0.5)"
          }}
        >
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#34C759] rounded-full blur-3xl opacity-20 pointer-events-none" />
          
          <div className="w-14 h-14 rounded-[16px] flex items-center justify-center text-3xl shadow-lg relative z-10" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05))", border: "1px solid rgba(255,255,255,0.2)" }}>
            ⌨️
          </div>
          <div className="flex-1 relative z-10">
            <p className="text-white text-[16px] font-bold tracking-tight">Dev Engine</p>
            <p className="text-[#00D4FF] text-[11px] font-bold uppercase tracking-wider mt-0.5">Vishal Singh • v2.0</p>
          </div>
          <div className="relative z-10 bg-[#34C759]/20 border border-[#34C759]/50 px-3 py-1.5 rounded-full flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-[#34C759] rounded-full animate-pulse" />
            <span className="text-[#34C759] text-[10px] font-bold tracking-wider">ACTIVE</span>
          </div>
        </div>

        {/* Skill groups */}
        <div className="space-y-5">
          {skillGroups.map((group, index) => (
            <motion.div 
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
            >
              <p className="text-white/40 text-[11px] font-bold tracking-widest mb-2 px-1 uppercase">{group.title}</p>
              <div 
                className="rounded-[24px] overflow-hidden" 
                style={{ 
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {group.skills.map((skill, i) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-4 px-4 py-3.5 relative overflow-hidden group"
                    style={{
                      borderTop: i > 0 ? "1px solid rgba(255,255,255,0.05)" : undefined,
                    }}
                  >
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" 
                      style={{ background: skill.color }}
                    />
                    
                    <div
                      className="w-10 h-10 rounded-[12px] flex items-center justify-center text-[12px] font-bold shrink-0 shadow-sm"
                      style={{ 
                        background: `linear-gradient(135deg, ${skill.color}33, ${skill.color}11)`, 
                        color: skill.color,
                        border: `1px solid ${skill.color}44` 
                      }}
                    >
                      {skill.icon}
                    </div>
                    
                    <div className="flex-1">
                      <span className="text-white text-[15px] font-semibold">{skill.name}</span>
                      
                      {!("toggle" in skill) && (
                        <div className="w-full h-1 bg-white/10 rounded-full mt-2 overflow-hidden">
                          <motion.div 
                            className="h-full rounded-full"
                            style={{ background: skill.color }}
                            initial={{ width: 0 }}
                            animate={{ width: skill.level === "Expert" ? "95%" : skill.level === "Advanced" ? "80%" : "65%" }}
                            transition={{ duration: 1, delay: 0.5 }}
                          />
                        </div>
                      )}
                    </div>

                    {"toggle" in skill && skill.toggle ? (
                      <div className="w-12 h-7 rounded-full flex items-center px-0.5 shadow-inner" style={{ background: "#34C759" }}>
                        <div className="w-6 h-6 bg-white rounded-full ml-auto shadow-sm" />
                      </div>
                    ) : (
                      <div className="shrink-0 text-right">
                        <span className="text-white/40 text-[11px] font-bold uppercase tracking-wider">{skill.level}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Available indicator */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="rounded-[24px] p-5 flex items-center gap-4 mt-4" 
          style={{ 
            background: "linear-gradient(135deg, rgba(108,99,255,0.15) 0%, rgba(108,99,255,0.05) 100%)", 
            border: "1px solid rgba(108,99,255,0.3)",
            boxShadow: "0 8px 32px rgba(108,99,255,0.1)"
          }}
        >
          <div className="w-12 h-12 bg-[#6C63FF]/20 rounded-full flex items-center justify-center text-2xl border border-[#6C63FF]/40">
            🚀
          </div>
          <div>
            <p className="text-white text-[15px] font-bold">Open to new projects</p>
            <p className="text-white/60 text-[13px] font-medium mt-0.5">Available for freelance & full-time</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

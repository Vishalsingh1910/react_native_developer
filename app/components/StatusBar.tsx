"use client"
import { useState, useEffect } from "react"

export default function StatusBar({ light = false }: { light?: boolean }) {
  const [time, setTime] = useState("")

  useEffect(() => {
    const update = () => {
      const now = new Date()
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      )
    }
    update()
    const t = setInterval(update, 1000)
    return () => clearInterval(t)
  }, [])

  const color = light ? "text-white" : "text-white"

  return (
    <div className={`flex items-center justify-between px-5 pt-2 pb-0 ${color} z-10 relative`} style={{ minHeight: 45, paddingLeft: 10, paddingRight: 10 }}>
      <span className="text-[15px] font-semibold tracking-tight" style={{ color: "white" }}>{time}</span>
      <div className="flex items-center gap-[5px]">
        {/* Signal bars */}
        <svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor" opacity="0.9" style={{ color: "white" }}>
          <rect x="0" y="7" width="3" height="4" rx="0.5" />
          <rect x="4.5" y="5" width="3" height="6" rx="0.5" />
          <rect x="9" y="2.5" width="3" height="8.5" rx="0.5" />
          <rect x="13.5" y="0" width="3" height="11" rx="0.5" />
        </svg>
        {/* WiFi */}
        <svg width="15" height="11" viewBox="0 0 15 11" fill="currentColor" opacity="0.9" style={{ color: "white" }}>
          <path d="M7.5 8.5a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4z" />
          <path d="M7.5 5.5c1.4 0 2.6.6 3.5 1.5l1-1.1A6 6 0 0 0 7.5 4a6 6 0 0 0-4.5 1.9l1 1.1A4.2 4.2 0 0 1 7.5 5.5z" />
          <path d="M7.5 2.5c2.4 0 4.5 1 6 2.6l1-1.1A9 9 0 0 0 7.5.5a9 9 0 0 0-7 3.5l1 1.1A7.2 7.2 0 0 1 7.5 2.5z" />
        </svg>
        {/* Battery */}
        <div className="flex items-center">
          <div
            className="w-[25px] h-[12px] rounded-[3px] border border-white/50 relative flex items-center p-[2px]"
            style={{ color: "white" }}
          >
            <div className="h-full bg-white rounded-[1.5px]" style={{ width: "75%", color: "white" }} />
          </div>
          <div className="w-[2px] h-[5px] bg-white/50 rounded-r-sm ml-[1px]" style={{ color: "white" }} />
        </div>
      </div>
    </div>
  )
}

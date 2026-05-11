"use client"

import { useState, useRef } from "react"
import { AnimatePresence } from "framer-motion"
import { Screen, Project } from "./data/portfolio"
import LockScreen from "./components/screens/LockScreen"
import HomeScreen from "./components/screens/HomeScreen"
import ControlCenter from "./components/screens/ControlCenter"
import AboutScreen from "./components/screens/AboutScreen"
import ProjectsScreen from "./components/screens/ProjectsScreen"
import ProjectDetailScreen from "./components/screens/ProjectDetailScreen"
import SkillsScreen from "./components/screens/SkillsScreen"
import ContactScreen from "./components/screens/ContactScreen"
import ResumeScreen from "./components/screens/ResumeScreen"

export default function PortfolioOS() {
  const [screen, setScreen] = useState<Screen>("lock")
  const [prevScreen, setPrevScreen] = useState<Screen>("lock")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [controlCenterOpen, setControlCenterOpen] = useState(false)
  const touchStartY = useRef(0)
  const phoneRef = useRef<HTMLDivElement>(null)

  const navigate = (to: Screen, project?: Project) => {
    setPrevScreen(screen)
    if (project) setSelectedProject(project)
    setScreen(to)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const dy = e.changedTouches[0].clientY - touchStartY.current
    if (dy > 60 && screen === "lock") {
      navigate("home")
    }
    if (dy < -60 && screen === "home") {
      setControlCenterOpen(true)
    }
  }

  return (
    <main className="portfolio-os-wrapper">
      {/* Animated background */}
      <div className="os-background">
        <div className="os-glow glow-1" />
        <div className="os-glow glow-2" />
        <div className="os-glow glow-3" />
      </div>

      {/* Outer label top-left */}
      <div className="os-label-topleft">
        <span className="os-label-name">Vishal Singh</span>
        <span className="os-label-role">React Native Developer</span>
      </div>

      {/* Phone Frame */}
      <div
        ref={phoneRef}
        className="phone-frame"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Hardware buttons */}
        <div className="phone-btn-vol-up" />
        <div className="phone-btn-vol-down" />
        <div className="phone-btn-power" />

        {/* Screen */}
        <div className="phone-screen">
          <AnimatePresence mode="wait">
            {screen === "lock" && (
              <LockScreen key="lock" onUnlock={() => navigate("home")} />
            )}
            {screen === "home" && (
              <HomeScreen
                key="home"
                onNavigate={navigate}
                onOpenControlCenter={() => setControlCenterOpen(!controlCenterOpen)}
              />
            )}
            {screen === "about" && (
              <AboutScreen key="about" onBack={() => navigate("home")} onNavigate={navigate} />
            )}
            {screen === "projects" && (
              <ProjectsScreen
                key="projects"
                onBack={() => navigate("home")}
                onSelect={(p) => navigate("project-detail", p)}
              />
            )}
            {screen === "project-detail" && selectedProject && (
              <ProjectDetailScreen
                key="project-detail"
                project={selectedProject}
                onBack={() => navigate("projects")}
              />
            )}
            {screen === "skills" && (
              <SkillsScreen key="skills" onBack={() => navigate("home")} />
            )}
            {screen === "contact" && (
              <ContactScreen key="contact" onBack={() => navigate("home")} />
            )}
            {screen === "resume" && (
              <ResumeScreen key="resume" onBack={() => navigate("home")} />
            )}
          </AnimatePresence>

          {/* Control Center Overlay */}
          <AnimatePresence>
            {controlCenterOpen && (
              <ControlCenter key="cc" onClose={() => setControlCenterOpen(false)} />
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Outer label bottom */}
      {/* <div className="os-label-bottom">
        <span>BUILT WITH PRECISION</span>
        <span className="os-label-dot">•</span>
        <span>REACT NATIVE DEVELOPER</span>
      </div> */}
    </main>
  )
}

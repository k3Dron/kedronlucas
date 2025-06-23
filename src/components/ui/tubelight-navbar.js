"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Home, User, Briefcase, FileText, Share2 } from "lucide-react"
import { cn } from "@/components/utils"

const navItems = [
  { name: "Hero", url: "#hero", icon: Home },
  { name: "About", url: "#about", icon: User },
  { name: "Experience", url: "#experience", icon: Briefcase },
  { name: "Projects", url: "#projects", icon: FileText },
  { name: "Social", url: "#social", icon: Share2 },
]

export function NavBar({ className }) {
  const [activeTab, setActiveTab] = useState(navItems[0].name)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div
      className={cn(
        "fixed top-8 left-1/2 -translate-x-1/2 z-50",
        className
      )}
    >
      <div className="h-15 flex items-center gap-8 bg-white/10 border border-white/20 backdrop-blur-lg py-6 px-2 rounded-full shadow-lg">
        <div className="w-6 sm:w-3" />
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer px-6 py-3 rounded-full transition-colors",
                "text-white/ hover:text-white",
                isActive && "bg-white/10 text-white"
              )}
            >
              <Icon size={28} strokeWidth={2.25} />
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-white/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-white rounded-t-full">
                    <div className="absolute w-12 h-6 bg-white/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-white/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-white/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}

        <div className="w-6 sm:w-3" />
        
      </div>
    </div>
  )
}

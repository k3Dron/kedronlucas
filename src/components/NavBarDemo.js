"use client"

import { Home, User, Briefcase, FileText, Share2 } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

export function NavBarDemo() {
  const navItems = [
    { name: 'Home', url: '#hero', icon: Home },
    { name: 'About', url: '#about', icon: User },
    { name: 'Experience', url: '#experience', icon: Briefcase },
    { name: 'Projects', url: '#projects', icon: FileText },
    { name: 'Social', url: '#social', icon: Share2 },
  ]

  return <NavBar items={navItems} />
}

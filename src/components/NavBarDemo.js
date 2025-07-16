"use client"

import { Home, User, Image, FileText, Share2 } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

export function NavBarDemo() {
  const navItems = [
    { name: 'Home', url: '#hero', icon: Home },
    { name: 'About', url: '#about', icon: User }, // Use Briefcase or another suitable icon
    { name: 'Gallary', url: '#gallary', icon: Image },
    { name: 'Projects', url: '#projects', icon: FileText },
    { name: 'Social', url: '#social', icon: Share2 },
  ]

  return <NavBar items={navItems} />
}

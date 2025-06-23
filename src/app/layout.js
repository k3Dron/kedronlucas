import './globals.css'
import { NavBarDemo } from '@/components/NavBarDemo' 
import SnakeGame from "@/components/SnakeGame";
import { SplashCursor } from "@/components/ui/splash-cursor"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="scroll-smooth bg-white text-black">
        <SplashCursor />
        <NavBarDemo />
        <main>{children}</main>
      </body>
    </html>
  )
}


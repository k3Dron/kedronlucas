import './globals.css'
import { NavBar } from '@/components/ui/tubelight-navbar' 
import { SplashCursor } from "@/components/ui/splash-cursor"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="scroll-smooth bg-white text-black">
        <SplashCursor />
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  )
}


"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { User, Briefcase, FolderOpen, Heart, Mail } from "lucide-react"

export default function PillNav() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="h-full flex items-center">
      <nav 
        className={`rounded-full bg-black flex flex-col items-center transition-all duration-300 py-4 ${
          isScrolled ? "shadow-md shadow-black/20" : ""
        }`}
      >
        <Link 
          href="/" 
          className="p-3 hover:bg-gray-800 rounded-t-full transition-colors flex items-center justify-center"
          aria-label="Home"
        >
          <User className="h-5 w-5 text-gray-300" />
        </Link>
        
        <div className="w-6 h-px bg-gray-700"></div>
        
        <Link 
          href="/experiences" 
          className="p-3 hover:bg-gray-800 transition-colors flex items-center justify-center"
          aria-label="Experience"
        >
          <Briefcase className="h-5 w-5 text-gray-300" />
        </Link>
        
        <div className="w-6 h-px bg-gray-700"></div>
        
        <Link 
          href="/projects" 
          className="p-3 hover:bg-gray-800 transition-colors flex items-center justify-center"
          aria-label="Projects"
        >
          <FolderOpen className="h-5 w-5 text-gray-300" />
        </Link>
        
        <div className="w-6 h-px bg-gray-700"></div>
        
        <Link 
          href="/interests" 
          className="p-3 hover:bg-gray-800 transition-colors flex items-center justify-center"
          aria-label="Interests"
        >
          <Heart className="h-5 w-5 text-gray-300" />
        </Link>
        
        <div className="w-6 h-px bg-gray-700"></div>
        
        <Link 
          href="/#contact" 
          className="p-3 hover:bg-gray-800 rounded-b-full transition-colors flex items-center justify-center"
          aria-label="Contact"
        >
          <Mail className="h-5 w-5 text-gray-300" />
        </Link>
      </nav>
    </div>
  )
}

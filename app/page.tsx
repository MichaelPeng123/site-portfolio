import Link from "next/link"
import { ArrowRight, Linkedin, Instagram, Facebook } from "lucide-react"

import Hero from "@/components/hero"
import Timeline from "@/components/timeline"
import Projects from "@/components/projects"
import Interests from "@/components/interests"
import Skills from "@/components/skills"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Education & Work Experience Section */}
      <section id="experience" className="py-20 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Education & Experience</h2>
          <Timeline />
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 md:px-6 bg-gray-900 text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
          <p className="mb-8 max-w-xl mx-auto text-gray-300">Have an idea that you want to discuss? Feel free to reach out!</p>
          <Link
            href="mailto:mpeng893@g.ucla.edu"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-md hover:bg-gray-200 transition-colors"
          >
            Contact Me <ArrowRight className="h-4 w-4" />
          </Link>
          <div className="flex justify-center gap-8 mt-10">
            <a href="https://www.linkedin.com/in/mich-peng/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-8 w-8 text-blue-400 hover:text-blue-600 transition-colors" />
            </a>
            <a href="https://www.instagram.com/mpeng894" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="h-8 w-8 text-pink-400 hover:text-pink-600 transition-colors" />
            </a>
            <a href="https://www.facebook.com/michael.peng.5682/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook className="h-8 w-8 text-blue-500 hover:text-blue-700 transition-colors" />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

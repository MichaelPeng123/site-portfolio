import Image from "next/image"
import Link from "next/link"
import { ArrowDown } from "lucide-react"

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/sf-img2.jpg"
          alt="Portfolio Cover"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl flex flex-col items-center">
        {/* Circular Headshot */}
        <div className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-white shadow-lg overflow-hidden mb-8 md:mb-10">
          <Image
            src="/headshot4.jpg"
            alt="Your Headshot"
            width={300}
            height={300}
            className="object-cover w-full h-full"
            priority
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          Yo! I'm <span className="text-gray-200">Michael!</span>
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-gray-200 leading-relaxed">
          Software Engineer | Based in SF
        </p>
        <div className="flex flex-wrap gap-5 justify-center">
          <Link
            href="/experiences"
            className="px-8 py-3 bg-white text-gray-900 rounded-md hover:bg-gray-200 transition-colors"
          >
            View My Work
          </Link>
          <Link
            href="/projects"
            className="px-8 py-3 border border-white text-white rounded-md hover:bg-white/10 transition-colors"
          >
            See Projects
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <Link href="/experiences" className="text-white">
          <ArrowDown className="h-8 w-8" />
        </Link>
      </div>
    </div>
  )
}

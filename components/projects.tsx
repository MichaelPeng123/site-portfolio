import Link from "next/link"
import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import SnapSellDetails from "./details/SnapSellDetails"
import FoodProcurementsDetails from "./details/FoodProcurementsDetails"
import DevAtlasDetails from "./details/DevAtlasDetails"

// Define a type for projects
interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
  logo?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "SnapSell",
    description: "Automation software for efficiency converting sales videos into Facebook marketplace listings.",
    link: "https://devpost.com/software/snapsell",
    logo: "/proj-logos/snapsell-logo.png",
    featured: true,
  },
  {
    id: 6,
    title: "Food Procurements",
    description: "Comprehensive agentic comparison of high school food prices for minimizing food procurement expenses.",
    link: "https://github.com/MichaelPeng123/foodprocurements",
    logo: "/proj-logos/procurements.png",
    featured: true,
  },
  {
    id: 9,
    title: "DevAtlas",
    description: "RAG tool built off an organizational knowledge graph for pinpointing feature ownership in company codebase.",
    link: "https://devpost.com/software/devatlas-32ewbz",
    logo: "/proj-logos/devatlas-logo.png",
    featured: true,
  },
  {
    id: 2,
    title: "Autonomous Drone Delivery System",
    description: "End-to-end drone delivery system that connects a deep learning autonomous navigation algorithm with an e-commerce app.",
    link: "https://github.com/AutonomousDeliveryDrone/Autonomous-Drone-Delivery-System",
  },
  {
    id: 3,
    title: "Classroom Connections",
    description: "A user-friendly classroom chat application that fosters healthy communication between teachers and students; with embedded chatting, a Q/A system and a conflict calendar.",
    link: "https://github.com/codifyasia/ClassroomConnections",
  },
  {
    id: 4,
    title: "Epidemic Modeling Research",
    description: "Research paper on COVID-19 Modeling with Family Networks and Modified Containment Policies.",
    link: "https://github.com/MichaelPeng123/Epidemic-Modeling-Research",
  },
  {
    id: 5,
    title: "Plantar Fasciitis Prediction Research",
    description: "Plantar fasciitis risk diagnosis using an arduino coupled with machine learning analysis to encourage safe and efficient running form.",
    link: "https://github.com/MichaelPeng123/Plantar-Fasciitis-Prediction-Research",
  },
  {
    id: 7,
    title: "Race Global",
    description: "App that uses location tracking and real time data transfer to simulate remote races for runners and athletes.",
    link: "https://github.com/codifyasia/RaceGlobal",
  },
  {
    id: 8,
    title: "Snipes.io",
    description: "Team-based, IRL scavenger hunt game that aggregates periodic flicks throughout the day into a real time shared photo album for friend circles.",
    link: "https://github.com/GavinWon/snipes.io",
  },
]

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Featured Projects with Dropdowns */}
      {featured.map((project) => (
        <Accordion type="single" collapsible key={project.id}>
          <AccordionItem value={project.title} className="!border-b-0">
            <AccordionTrigger className="flex flex-col md:flex-row items-center bg-white rounded-xl overflow-hidden border border-gray-200 p-6 gap-6 transition-shadow hover:shadow-lg">
              {project.logo && (
                <div className="flex-shrink-0 flex items-center justify-center">
                  <Image
                    src={project.logo}
                    alt={`${project.title} logo`}
                    width={160}
                    height={160}
                    className="object-contain rounded-lg"
                    priority
                  />
                </div>
              )}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 text-base mb-4 leading-relaxed">{project.description}</p>
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-base text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  View Project <ExternalLink className="ml-1.5 h-4 w-4" />
                </Link>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4">
              {project.title === "DevAtlas" && <DevAtlasDetails />}
              {project.title === "Food Procurements" && <FoodProcurementsDetails />}
              {project.title === "SnapSell" && <SnapSellDetails />}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}

      {/* Other Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {others.map((project) => (
          <div
            key={project.id}
            className="group bg-white rounded-lg overflow-hidden border border-gray-100 transition-shadow duration-300 hover:shadow-lg"
          >
            <div className="p-6">
              <h3 className="text-lg font-medium mb-3">{project.title}</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.description}</p>
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-gray-700 hover:text-gray-900 transition-colors"
              >
                View Project <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

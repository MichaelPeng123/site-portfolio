"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Briefcase, GraduationCap } from "lucide-react"
import Image from "next/image"

// Sample data - replace with your own
const workExperiences = [
  {
    id: 1,
    title: "Research Intern",
    company: "UC Berkeley Center for Augmented Cognition",
    period: "Jun 2021 – Sep 2021",
    description: "Deployed an AR plugin library in Unity for touchless typing with D435i cameras and increased build precision by 60% through automated testing while scaling build process efficiency by 300% with CMake.",
    logo: "/logos/berkeley-logo.jpeg"
  },
  {
    id: 2,
    title: "Software Engineering Intern",
    company: "OmniML",
    period: "Jun 2022 – Sep 2022",
    description: "Developed a web crawler to compile warehouse image datasets and finetuned a YOLOx deep learning model for real-time tracking of warehouse objects, achieving 92% accuracy with deployment to a Qualcomm device.",
    logo: "/logos/omniml_logo.jpeg"
  },
  {
    id: 3,
    title: "Software Development Engineer Intern",
    company: "Amazon",
    period: "Jun 2023 – Sep 2023",
    description: "Implemented touch notifications for Alexa devices on book releases and added URL linkage to message payloads, decreasing notification image rendering latency by 80%. Developed action handling for user intents with comprehensive testing.",
    logo: "/logos/amazon-logo.jpeg"
  },
  {
    id: 4,
    title: "Tech Director",
    company: "LA Hacks",
    period: "Sep 2021 – May 2024",
    description: "Led tech team to develop various sites and portals for Los Angeles' biggest hackathon, implementing frontend components with React and Tailwind while optimizing server throughput to increase user traffic capacity by 40%.",
    logo: "/logos/lahacks-logo.jpeg"
  },
  {
    id: 5,
    title: "Software Engineering Intern",
    company: "Databricks",
    period: "Jun 2024 – Sep 2024",
    description: "Centralized garbage collection for purging canceled accounts and workspaces to improve GDPR compliance. Implemented schema validation system and reduced system downtime by 60% with Grafana dashboards for cleanup tasks.",
    logo: "/logos/databricks-logo.jpeg"
  },
  {
    id: 6,
    title: "Infrastructure Research Engineer",
    company: "UCLA Economics Department",
    period: "Sep 2024 – Jun 2025",
    description: "Researched approaches to analyzing cafeteria food price disparity amoungst the public education sector and developed a centralized AI-integrated platform for procurement optimizations. See project section for more details.",
    logo: "/logos/ucla-logo.jpeg"
  },
  {
    id: 7,
    title: "Founding Engineer",
    company: "Hemut",
    period: "Sep 2024 – Jun 2025",
    description: "Developed an all in one trucking software that integrates AI with distribution management and fleet organization. Part of YC's x25 batch. ",
    logo: "/logos/hemut_logo.jpg"
  },
]

const educationHistory = [
  {
    id: 1,
    degree: "High School Credits",
    institution: "West Valley College",
    period: "2020 - 2021",
    logo: "/logos/wvc.png"
  },
  {
    id: 2,
    degree: "Diploma ",
    institution: "Lynbrook High School",
    period: "2017 - 2021",
    logo: "/logos/lynbrook-logo.jpeg"
  },
  {
    id: 3,
    degree: "Bachelor's in Computer Science",
    institution: "UCLA",
    period: "2021 - 2025",
    logo: "/logos/ucla-logo.jpeg"
  },
]

export default function Timeline() {
  const [expandedItems, setExpandedItems] = useState<number[]>([])

  const toggleExpand = (id: number) => {
    setExpandedItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <div className="py-8">
      <div className="relative max-w-6xl mx-auto">
        {/* Center divider line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education Column */}
          <div className="space-y-8">
            {educationHistory.map((edu) => (
              <div key={edu.id} className="flex flex-col md:items-end mb-8">
                <div className="md:text-right max-w-md md:mr-8 relative flex items-start gap-4">
                  <div className="flex-1">
                    <h4 className="font-medium text-lg">{edu.degree}</h4>
                    <p className="text-gray-600">{edu.institution}</p>
                    <p className="text-sm text-gray-500">{edu.period}</p>
                  </div>
                  <div className="w-12 h-12 relative flex-shrink-0">
                    <Image 
                      src={edu.logo} 
                      alt={`${edu.institution} logo`}
                      width={48}
                      height={48}
                      className="object-contain rounded-md"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Work Experience Column */}
          <div className="space-y-8">
            {workExperiences.map((work) => (
              <div key={work.id} className="flex flex-col mb-8">
                <div className="max-w-md md:ml-8 relative">
                  <div className="flex justify-between items-start gap-4">
                    <div className="w-12 h-12 relative flex-shrink-0">
                      <Image 
                        src={work.logo} 
                        alt={`${work.company} logo`}
                        width={48}
                        height={48}
                        className="object-contain rounded-md"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-lg">{work.title}</h4>
                      <p className="text-gray-600">{work.company}</p>
                      <p className="text-sm text-gray-500">{work.period}</p>
                    </div>
                    <button
                      onClick={() => toggleExpand(work.id)}
                      className="text-gray-500 hover:text-gray-700 p-1"
                      aria-label={expandedItems.includes(work.id) ? "Collapse details" : "Expand details"}
                    >
                      {expandedItems.includes(work.id) ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                  
                  {expandedItems.includes(work.id) && (
                    <div className="mt-3 text-gray-700">{work.description}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

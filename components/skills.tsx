import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const skills = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Java", "C++", "SQL"]
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "Figma", "Jira", "VS Code", "Postman"]
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Redux", "Tailwind CSS", "HTML5", "CSS3"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "FastAPI", "Flask", "REST APIs", "GraphQL"]
  },
  {
    category: "AI/Data",
    items: ["Pandas", "NumPy", "scikit-learn", "TensorFlow", "PyTorch", "OpenAI API"]
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MongoDB", "MySQL", "SQLite", "Redis"]
  },
  {
    category: "Cloud",
    items: ["AWS", "GCP", "Vercel", "Firebase", "Heroku"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 md:px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold mb-4 text-center text-black">Skills</h2>
        <p className="text-gray-700 mb-12 text-center text-lg max-w-2xl mx-auto">
          Skills are organized from most experienced to least (left–right, top–down)
        </p>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill) => (
            <Accordion type="single" collapsible key={skill.category}>
              <AccordionItem value={skill.category}>
                <AccordionTrigger className="text-xl font-semibold bg-gray-100 text-black rounded-lg px-6 py-4 shadow-md border border-gray-200">
                  {skill.category}
                </AccordionTrigger>
                <AccordionContent className="bg-gray-50 text-gray-800 rounded-b-lg px-6 py-4 border-t border-gray-200">
                  <ul className="list-disc pl-5 space-y-1">
                    {skill.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}

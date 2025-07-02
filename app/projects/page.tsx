import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen py-20 px-5 md:px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
          <Projects />
        <div className="mt-20">
          <Skills />
        </div>
      </div>
    </main>
  );
} 
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

export default function DevAtlasDetails() {
  return (
    <div className="bg-amber-50 text-gray-800 text-left space-y-4 rounded-xl p-6 border border-amber-200">
      <h4 className="font-semibold text-xl text-gray-800">About DevAtlas</h4>
      <p className="text-lg text-gray-700">
        DevAtlas is inspired by the daily struggles of developers who spend hours trying to pinpoint ownership in a codebase. According to the GitHub Octoverse Report 2023, 70% of developers say unclear ownership slows down their ability to fix bugs and make updates. 
      </p>
      <div className="text-lg text-gray-700 space-y-2">
        <div className="font-semibold">Key Features & Workflow:</div>
        <ul className="list-disc pl-6 space-y-1">
          <li>Automatically draws data from an organization's Github and Slack to construct a knowledge graph connecting developers to the features they've worked on.</li>
          <li>Uses relations and cross-functional interactions to build a RAG model that serves as an agentic assistant for codebase and workflow questions.</li>
          <li>Removes the friction of hunting through Git histories, Slack messages, or tribal knowledge by providing instant answers to questions like "Who built the authentication feature?" or "Who should I ask about the billing page?"</li>
          <li>Designed to integrate seamlessly into developers' workflows, saving significant development time and effort as teams and codebases grow.</li>
        </ul>
      </div>
      <div className="mt-4">
        <h5 className="font-semibold text-lg mb-1 text-gray-800">Tech Stack</h5>
        <div className="flex flex-col md:flex-row gap-3">
          <div className="bg-amber-200 rounded-lg px-4 py-2 text-lg font-medium shadow-sm border border-amber-300 flex-1">
            <span className="text-blue-700">Frontend:</span> React, Next.js, Tailwind CSS, V0, Figma
          </div>
          <div className="bg-amber-200 rounded-lg px-4 py-2 text-lg font-medium shadow-sm border border-amber-300 flex-1">
            <span className="text-green-700">AI/ML:</span> Gemini, Fetch.ai, Python, Supabase
          </div>
          <div className="bg-amber-200 rounded-lg px-4 py-2 text-lg font-medium shadow-sm border border-amber-300 flex-1">
            <span className="text-purple-700">Integrations:</span> Github API, Slack API, Agentic Workflows
          </div>
        </div>
      </div>
      <div className="mt-4 relative max-w-2xl mx-auto">
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <Image src="/devatlas/devatlas-1.png" alt="DevAtlas screenshot 1" width={500} height={300} className="rounded-lg object-cover w-full" />
            </CarouselItem>
            <CarouselItem>
              <Image src="/devatlas/devatlas-3.png" alt="DevAtlas screenshot 3" width={500} height={300} className="rounded-lg object-cover w-full" />
            </CarouselItem>
            <CarouselItem>
              <Image src="/devatlas/devatlas-2.png" alt="DevAtlas screenshot 2" width={500} height={300} className="rounded-lg object-cover w-full" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
} 
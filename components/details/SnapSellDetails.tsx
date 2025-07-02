import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

export default function SnapSellDetails() {
  return (
    <div className="bg-amber-50 text-gray-800 text-left space-y-4 rounded-xl p-6 border border-amber-200">
      <h4 className="font-semibold text-xl text-gray-800">About SnapSell</h4>
      <p className="text-lg text-gray-700">
        SnapSell was inspired by the challenge students face in selling unused items due to the tedious listing process, which often leads to environmental waste from abandoned, reusable goods—especially in college towns. 
      </p>
      <p className="text-lg text-gray-700">SnapSell is a platform that enables users to efficiently sell their unused items, includes the following features:</p>
      <ul className="text-lg text-gray-700 list-disc pl-6 space-y-1">
        <li>Converts narrated walkthrough videos into professional sales listings using AI for descriptions, pricing, and categorization.</li>
        <li>One-click posting and dashboard management for all listings via Facebook Marketplace integration.</li>
        <li>AI agents automate buyer communication and negotiation.</li>
        <li>Smart scheduling with Google Calendar integration, context-aware of user availability and location.</li>
        <li>Automatically suggests optimal meeting times for item exchanges.</li>
      </ul>
      <div className="mt-4">
        <h5 className="font-semibold text-lg mb-1 text-gray-800">Tech Stack</h5>
        <div className="flex flex-col md:flex-row gap-3">
          <div className="bg-amber-200 rounded-lg px-4 py-2 text-lg font-medium shadow-sm border border-amber-300 flex-1">
            <span className="text-blue-700">Frontend:</span> React, Next.js, Tailwind CSS
          </div>
          <div className="bg-amber-200 rounded-lg px-4 py-2 text-lg font-medium shadow-sm border border-amber-300 flex-1">
            <span className="text-green-700">Backend:</span> Python, Selenium, Gemini, Anthropic, FastAPI
          </div>
          <div className="bg-amber-200 rounded-lg px-4 py-2 text-lg font-medium shadow-sm border border-amber-300 flex-1">
            <span className="text-purple-700">Integrations:</span> Google Calendar API, Facebook API
          </div>
        </div>
      </div>
      <div className="mt-4 relative max-w-2xl mx-auto">
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <Image src="/snap-sell/snapsell-1.png" alt="SnapSell screenshot 1" width={550} height={300} className="rounded-lg object-cover w-full" />
            </CarouselItem>
            <CarouselItem>
              <Image src="/snap-sell/snapsell-3.png" alt="SnapSell screenshot 3" width={500} height={300} className="rounded-lg object-cover w-full" />
            </CarouselItem>
            <CarouselItem>
              <Image src="/snap-sell/snapsell-2.png" alt="SnapSell screenshot 2" width={500} height={300} className="rounded-lg object-cover w-full" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
} 
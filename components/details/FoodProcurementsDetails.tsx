import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

export default function FoodProcurementsDetails() {
  return (
    <div className="bg-amber-50 text-gray-800 text-left space-y-4 rounded-xl p-6 border border-amber-200">
      <h4 className="font-semibold text-xl text-gray-800">About Food Procurements</h4>
      <p className="text-lg text-gray-700">
        The Food Price Procurement Project aims to help clients minimize food procurement costs by providing a comprehensive comparison of high school food prices. This project serves to close the disparity between the prices of food in different high schools to make supply chains more equitable. 
      </p>
      <p className="text-lg text-gray-700">
        Built under the supervision of UCLA's economics department, this app gathers detailed food price data from multiple high schools, enabling clients to make informed decisions and optimize their food expenses.
      </p>
      <div className="text-lg text-gray-700 space-y-2">
        <div className="font-semibold">Key Features:</div>
        <ul className="list-disc pl-6 space-y-1">
          <li>Automatic file parser for converting procurement data into standardized metrics aggregated in a centralized storage system.</li>
          <li>Comparison tool for evaluating current expenses against collected data for all schools within a certain distance threshold.</li>
          <li>Cost optimization insights and recommendations for items that occupy heavy volume in a school's procurement budget.</li>
        </ul>
        <div>
          Overall, this platform streamlines the process of uploading and comparing procurement data to promote efficient cost optimization in the education sector.
        </div>
      </div>
      <div className="mt-4">
        <h5 className="font-semibold text-lg mb-1 text-gray-800">Tech Stack</h5>
        <div className="flex flex-col md:flex-row gap-3">
          <div className="bg-amber-200 rounded-lg px-4 py-2 text-lg font-medium shadow-sm border border-amber-300 flex-1">
            <span className="text-blue-700">Frontend:</span> React, Next.js, Tailwind CSS, Shadcn UI
          </div>
          <div className="bg-amber-200 rounded-lg px-4 py-2 text-lg font-medium shadow-sm border border-amber-300 flex-1">
            <span className="text-green-700">Backend:</span> Python, Supabase, Firebase, PyPDF, Flask
          </div>
          <div className="bg-amber-200 rounded-lg px-4 py-2 text-lg font-medium shadow-sm border border-amber-300 flex-1">
            <span className="text-purple-700">Integrations:</span> Google Sheets API, Claude API
          </div>
        </div>
      </div>
      <div className="mt-4 relative max-w-2xl mx-auto">
        <Carousel>
          <CarouselContent>
          <CarouselItem>
              <Image src="/food-procurements/procurements-3.png" alt="Food Procurements screenshot 2" width={500} height={300} className="rounded-lg object-cover w-full" />
            </CarouselItem>
            <CarouselItem>
              <Image src="/food-procurements/procurements-1.png" alt="Food Procurements screenshot 1" width={550} height={300} className="rounded-lg object-cover w-full" />
            </CarouselItem>
            <CarouselItem>
              <Image src="/food-procurements/procurements-2.png" alt="Food Procurements screenshot 2" width={500} height={300} className="rounded-lg object-cover w-full" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
} 
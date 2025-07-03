import { Music, Book, Plane, Camera, Code, Coffee } from "lucide-react"
import Image from "next/image"

// Sample interests - replace with your own
const interests = [
  {
    icon: <Music className="h-6 w-6" />,
    title: "EDM",
    description: "I enjoy pretty much all genres of EDM, and am a huge fan of raves and festivals. ",
  },
  {
    icon: <Book className="h-6 w-6" />,
    title: "Basketball",
    description: "You can catch me in the gym playing pickup most days of the week. ",
  },
  {
    icon: <Plane className="h-6 w-6" />,
    title: "Travel",
    description: "This year, I've been to New York, Vegas, Chicago, and New Orleans, as well as Mexico, Japan and Korea. Planning to add to this list. ",
  },
  {
    icon: <Camera className="h-6 w-6" />,
    title: "Board Games",
    description: "Some of my favorites are Poker, Coup, Avalon, and any form of Charades. ",
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Weightlifting & Health",
    description: "I enjoy going to the gym to stay in shape to compensate for not having the best diet.",
  },
  {
    icon: <Coffee className="h-6 w-6" />,
    title: "Games",
    description: "Currently very into Marvel Rivals and Repo. Hoping to get my hands on a Nintendo Switch 2 soon.",
  },
]

export default function Interests() {
  const photos = [
    "p1.jpeg", "p2.jpeg", "p3.jpeg", "p4.jpeg", "p5.jpeg", "p6.jpeg", "p7.jpeg", "p8.jpeg", "p9.jpeg", "p10.jpeg", "p11.jpeg", "p12.jpeg", "p13.jpeg", "p14.jpeg", "p15.jpeg", "p16.jpeg", "p17.jpeg", "p18.jpeg", "p19.jpeg", "p20.jpeg", "p21.jpeg", "p22.jpeg"
  ];
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">Interests</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {interests.map((interest, index) => (
        <div key={index} className="flex items-start space-x-5 p-4 rounded-lg hover:bg-gray-50 transition-colors">
          <div className="p-3 bg-gray-100 rounded-full text-gray-700">{interest.icon}</div>
          <div>
            <h3 className="font-medium text-lg tracking-tight">{interest.title}</h3>
            <p className="text-gray-600 mt-2 leading-relaxed">{interest.description}</p>
          </div>
        </div>
      ))}
      </div>
      {/* Photo Gallery */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold mb-6 text-center">Photo Gallery</h3>
        {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {photos.map((photo) => (
            <div key={photo} className="relative aspect-[4/3] rounded-lg overflow-hidden group">
              <Image
                src={`/photos/${photo}`}
                alt={photo}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                priority={false}
              />
            </div>
          ))}
        </div> */}
      </div>
    </div>
  )
}

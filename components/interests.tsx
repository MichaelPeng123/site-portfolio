import { Music, CircleDot, Plane, Gamepad2, Dumbbell, Gamepad, Circle } from "lucide-react"
import Image from "next/image"

// Sample interests - replace with your own
const interests = [
  {
    icon: <Music className="h-6 w-6" />,
    title: "EDM",
    description: "I enjoy pretty much all genres of EDM, and am a huge fan of raves and festivals. ",
  },
  {
    icon: <CircleDot className="h-6 w-6" />,
    title: "Basketball",
    description: "You can catch me in the gym playing pickup most days of the week. ",
  },
  {
    icon: <Plane className="h-6 w-6" />,
    title: "Travel",
    description: "This year, I've been to New York, Vegas, Chicago, and New Orleans, as well as Mexico, Japan and Korea. More to come! ",
  },
  {
    icon: <Gamepad2 className="h-6 w-6" />,
    title: "Board Games",
    description: "Some of my favorites are Poker, Coup, Avalon, and more. ",
  },
  {
    icon: <Dumbbell className="h-6 w-6" />,
    title: "Weightlifting & Health",
    description: "I enjoy going to the gym to stay in shape to compensate for having very mismanaged diet.",
  },
  {
    icon: <Gamepad className="h-6 w-6" />,
    title: "Games",
    description: "Currently playing a lot of Marvel Rivals and Repo. Hoping to get my hands on a Nintendo Switch 2 soon.",
  },
]

export default function Interests() {
  // All images from the portfolio-photos folder
  const photos = [
    "100_0947.JPG",
    "78705965-6319-4BAC-9732-3854BB04E10DDSC01267.jpg",
    "A1B463B9-710D-4EF7-BE93-D4F77EA185A2.jpg",
    "FA86AA82-EF6C-4084-88BF-58E47432A707.jpg",
    "IMG_1053.jpg",
    "IMG_1533.jpg",
    "IMG_1631.JPEG",
    "IMG_2395.JPG",
    "IMG_6088.JPG",
    "IMG_3732.JPG",
    "IMG_4270.JPG",
    "IMG_5596.jpg",
    "IMG_3704.JPG",
    "IMG_6985.JPG",
    "IMG_7814.jpg",
    "IMG_7816.JPG",
    "IMG_7854.JPG",
    "IMG_7916.JPG",
    "IMG_8031.JPG",
    "IMG_8039.JPG",
    "IMG_8052.jpg",
    "IMG_8310.JPG",
    "IMG_8462.JPG",
    "IMG_8468.JPG",
    "IMG_8487.jpg"
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
      <div className="mt-24">
        <h3 className="text-2xl font-bold mb-6 text-center">Gallery Of Travels & Interests</h3>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {photos.map((photo, index) => (
            <div key={photo} className="break-inside-avoid mb-4">
              <div className="relative w-full rounded-lg overflow-hidden group">
                <Image
                  src={`/portfolio-photos/${photo}`}
                  alt={`Portfolio photo ${index + 1}`}
                  width={400}
                  height={600}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index < 6}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

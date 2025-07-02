import { Music, Book, Plane, Camera, Code, Coffee } from "lucide-react"

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
    </div>
  )
}

import { useState } from "react"
import ProjectCard from "./ProjectCard"
import ProjectCarousel from "./ProjectCarousel"
import GeminiBg from "../assets/Gemini.png"
import ChatWithPdfbg from "../assets/ChatWithPdf.png"
import FoodSaverbg from "../assets/FoodSaver.png"
import VisionAIbg from "../assets/VisionAi.png"
import Sociopediabg from "../assets/Sociopedia.png"
import ColdEmailGeneratorbg from "../assets/ColdEmailGenerator.png"
import FilmWarebg from "../assets/FilmWare.png"

 export const projects = [
  {
    title: "Gemini Clone",
    description: "A clone of Google's Gemini using Gemini-1.5-flash API",
    githubLink: "https://github.com/SohamChaudhari2004/Gemini_Clone",
    liveLink: "https://gemini-clone-three-bay.vercel.app/",
    image: GeminiBg,
    category: "ai-ml",
  },
  {
    title: "Cold email generator",
    description: "A generative AI project using Langchain and Llama 3.1",
    githubLink: "https://github.com/SohamChaudhari2004/Cold_Email_Generator",
    liveLink: "",
    image: ColdEmailGeneratorbg,
    category: "ai-ml",
  },
  {
    title: "Sociolair",
    description: "Social media for sociopaths. A web application using MERN stack",
    githubLink: "https://github.com/SohamChaudhari2004/SocioLair",
    liveLink: "",
    image: Sociopediabg,
    category: "web-dev",
  },
  {
    title: "FilmWare",
    description: "A movie flashcard website using ReactJS and CSS frameworks",
    githubLink: "https://github.com/SohamChaudhari2004/FilmWare",
    liveLink: "",
    image: FilmWarebg,
    category: "web-dev",
  },
  {
    title: "Food Saver",
    description: "A dynamic web application for effective distribution of surplus food.",
    githubLink: "https://github.com/SohamChaudhari2004/MiniProjSE_2k24",
    liveLink: "https://adorable-starlight-3a663d.netlify.app/",
    image: FoodSaverbg,
    category: "web-dev",
  },
  {
    title: "Chat With PDF",
    description: "Interact with PDF files using chat-based queries.",
    githubLink: "https://github.com/SohamChaudhari2004/ChatWithPDF",
    liveLink: "https://chatwithpdf-sohamchaudhari2004.streamlit.app/",
    image: ChatWithPdfbg,
    category: "ai-ml",
  },
  {
    title: "VISION AI",
    description: "An AI-powered solution for efficient video and image analysis.",
    githubLink: "https://github.com/SohamChaudhari2004/hack_frontend",
    liveLink: "https://hack-frontend-eta.vercel.app/",
    image: VisionAIbg,
    category: "ai-ml",
  },
]

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all")

  

  const filteredProjects = projects.filter((project) => activeCategory === "all" || project.category === activeCategory)

  return (
    <div className="w-full flex flex-col justify-center items-center px-4 py-8 sm:px-6 lg:px-8 bg-transparent">
      <h1 className="text-white text-3xl font-bold mb-8">Projects</h1>

      <ProjectCarousel projects={projects} />

      <div className="flex justify-center space-x-4 my-8">
        <button
          className={`px-4 py-2 rounded-md ${
            activeCategory === "all" ? "bg-red-500 text-white" : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => setActiveCategory("all")}
        >
          All Projects
        </button>
        <button
          className={`px-4 py-2 rounded-md ${
            activeCategory === "web-dev" ? "bg-red-500 text-white" : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => setActiveCategory("web-dev")}
        >
          Web Dev
        </button>
        <button
          className={`px-4 py-2 rounded-md ${
            activeCategory === "ai-ml" ? "bg-red-500 text-white" : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => setActiveCategory("ai-ml")}
        >
          AI/ML
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-7xl mx-auto">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
            image={project.image}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects


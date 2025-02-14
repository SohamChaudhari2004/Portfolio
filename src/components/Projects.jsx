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
import LangDetectBg from "../assets/langDetectionBG.png"
import WebScraperbg from "../assets/webScrapper.png"
import CarRenatalBg from "../assets/CarRental.png"
 export const projects = [
  {
    title: "Gemini Clone",
    description: "A clone of Google's Gemini, powered by the Gemini-1.5-flash API, replicating core functionalities for advanced AI-driven conversations and tasks.",
    githubLink: "https://github.com/SohamChaudhari2004/Gemini_Clone",
    liveLink: "https://gemini-clone-three-bay.vercel.app/",
    image: GeminiBg,
    category: "ai-ml",
  },
  {
    title: "Cold email generator",
    description: "A generative AI project utilizing Langchain and Llama 3.1 to develop advanced language models that generate context-aware responses and automate various tasks efficiently.",
    githubLink: "https://github.com/SohamChaudhari2004/Cold_Email_Generator",
    liveLink: "",
    image: ColdEmailGeneratorbg,
    category: "ai-ml",
  },
  {
    title: "Sociolair",
    description: "A web application built with the MERN stack, designed as a social media platform tailored for sociopaths, offering unique features and interactions suited to this specific user base.",
    githubLink: "https://github.com/SohamChaudhari2004/SocioLair",
    liveLink: "",
    image: Sociopediabg,
    category: "web-dev",
  },
  {
    title: "FilmWare",
    description: "A movie flashcard website built with ReactJS and CSS frameworks, allowing users to browse and interact with movie details through a dynamic and visually appealing interface.",
    githubLink: "https://github.com/SohamChaudhari2004/FilmWare",
    liveLink: "",
    image: FilmWarebg,
    category: "web-dev",
  },
  {
    title: "ChatBase",
    description: "A real-time chat application built with React and Firebase, allowing users to engage in instant messaging with seamless communication and data synchronization.",
    githubLink: "https://github.com/SohamChaudhari2004/ChatBase",
    liveLink: "",
    image: "",
    category: "web-dev",
  },
  {
    title: "E-Commerce Website",
    description: "An e-commerce application built with the MERN stack, integrated with Stripe for payments and Cloudinary for efficient image storage and management, offering a seamless shopping experience.",
    githubLink: "https://github.com/SohamChaudhari2004/E-Commerce",
    liveLink: "",
    image: "",
    category: "web-dev",
  },
  {
    title: "Food Saver",
    description: "A dynamic web application designed to efficiently distribute surplus food, connecting donors and recipients to reduce food waste and support communities in need.",
    githubLink: "https://github.com/SohamChaudhari2004/MiniProjSE_2k24",
    liveLink: "https://adorable-starlight-3a663d.netlify.app/",
    image: FoodSaverbg,
    category: "web-dev",
  },
  {
    title: "Chat With PDF",
    description: "An AI-powered tool that allows users to interact with PDF files through chat-based queries, enabling easy and efficient information retrieval.",
    githubLink: "https://github.com/SohamChaudhari2004/ChatWithPDF",
    liveLink: "https://chatwithpdf-sohamchaudhari2004.streamlit.app/",
    image: ChatWithPdfbg,
    category: "ai-ml",
  },
  {
    title: "VISION AI",
    description: "An AI-powered solution for efficient video and image analysis, leveraging advanced machine learning models to enhance visual data processing and superscaling solutions.",
    githubLink: "https://github.com/SohamChaudhari2004/hack_frontend",
    liveLink: "https://hack-frontend-eta.vercel.app/",
    image: VisionAIbg,
    category: "ai-ml",
  },
  {
    title: "Language-Detector",
    description: "A language detection application built using Python, FastAPI, and Streamlit, containerized with Docker, to detect and display the language of input text in real-time.",
    githubLink: "https://github.com/SohamChaudhari2004/Language-detection-Model",
    liveLink: "https://langdetection.streamlit.app/",
    image: LangDetectBg,
    category: "ai-ml",
  },
  {
    title: "Web scrapper",
    description: "A universal web scraper that extracts and formats structured data from web pages using AI models, with support for multiple output formats (JSON, CSV) and query-based responses.",
    githubLink: "https://github.com/SohamChaudhari2004/WebScraper",
    liveLink: "",
    image: WebScraperbg,
    category: "ai-ml",
  },
  {
    title: "Car Rental Application",
    description: "A car rental application built with Flutter, offering a seamless user experience to browse, book, and manage car rentals with ease and efficiency.",
    githubLink: "https://github.com/SohamChaudhari2004/CarRentFlutter",
    liveLink: "",
    image: CarRenatalBg,
    category: "apps",
  },
]

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all")

  

  const filteredProjects = projects.filter((project) => activeCategory === "all" || project.category === activeCategory)

  return (
    <div className="w-full flex flex-col justify-center items-center px-4 py-8 sm:px-6 lg:px-8 bg-transparent">
      <h1 className="text-red-400 text-3xl font-mono font-bold mb-8">PROJECTS</h1>

      {/* <ProjectCarousel projects={projects} /> */}

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
            activeCategory === "ai-ml" ? "bg-red-500 text-white" : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => setActiveCategory("ai-ml")}
        >
          AI/ML
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
            activeCategory === "apps" ? "bg-red-500 text-white" : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => setActiveCategory("apps")}
        >
          Apps
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


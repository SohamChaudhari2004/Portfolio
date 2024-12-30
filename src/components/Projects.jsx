// Projects.jsx

import ProjectCard from './ProjectCard';
import GeminiBg from '../assets/Gemini.png';
import ChatWithPdfbg from '../assets/ChatWithPdf.png';
import FoodSaverbg from '../assets/FoodSaver.png';
import VisionAIbg from '../assets/VisionAi.png';
import Sociopediabg from '../assets/Sociopedia.png';
import ColdEmailGeneratorbg from '../assets/ColdEmailGenerator.png';
import FilmWarebg from '../assets/FilmWare.png';

const Projects = () => {
  const project = [
    {
      title: 'Gemini Clone',
      description: "A clone of Google's Gemini using Gemini-1.5-flash API",
      githubLink: 'https://github.com/SohamChaudhari2004/Gemini_Clone',
      liveLink: 'https://gemini-clone-three-bay.vercel.app/',
      image: GeminiBg,
    },
    {
      title: 'Cold email generator',
      description: 'A generative AI project using Langchain and Llama 3.1',
      githubLink: 'https://github.com/SohamChaudhari2004/Cold_Email_Generator',
      liveLink: '',
      image: ColdEmailGeneratorbg,
    },
    {
      title: 'Sociolair',
      description: 'Social media for sociopaths. A web application using MERN stack',
      githubLink: 'https://github.com/SohamChaudhari2004/SocioLair',
      liveLink: '',
      image: Sociopediabg,
    },
    {
      title: 'FilmWare',
      description: 'A movie flashcard website using ReactJS and CSS frameworks',
      githubLink: 'https://github.com/SohamChaudhari2004/FilmWare',
      liveLink: '',
      image: FilmWarebg,
    },
    {
      title: 'Food Saver',
      description: 'A dynamic web application for effective distribution of surplus food.',
      githubLink: 'https://github.com/SohamChaudhari2004/MiniProjSE_2k24',
      liveLink: 'https://adorable-starlight-3a663d.netlify.app/',
      image: FoodSaverbg,
    },
    {
      title: 'Chat With PDF',
      description: 'Interact with PDF files using chat-based queries.',
      githubLink: 'https://github.com/SohamChaudhari2004/ChatWithPDF',
      liveLink: 'https://chatwithpdf-sohamchaudhari2004.streamlit.app/',
      image: ChatWithPdfbg,
    },
    {
      title: 'VISION AI',
      description: 'An AI-powered solution for efficient video and image analysis.',
      githubLink: 'https://github.com/SohamChaudhari2004/hack_frontend',
      liveLink: 'https://hack-frontend-eta.vercel.app/',
      image: VisionAIbg,
    },
  ];

  return (
    <div className="w-full px-4 py-8 sm:px-6 lg:px-8 bg-transparent">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-7xl mx-auto">
        {project.map((project, index) => (
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
  );
};

export default Projects;
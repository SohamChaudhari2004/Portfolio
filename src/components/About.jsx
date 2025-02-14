import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Code, Brain, GraduationCap, Trophy } from "lucide-react";
import profilePic from "../assets/profile.png"; // Replace with your profile image

const AboutMe = () => {
  return (
    <div className="container mx-auto px-6 md:px-12 py-16 flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-16">
      {/* Profile Picture */}
      {/* Uncomment if you want to display a profile image */}
      {/* <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-40 h-40 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-lg border-4 border-red-400"
      >
        <img 
          src={profilePic} 
          alt="Soham Chaudhari" 
          className="w-full h-full object-cover"
        />
      </motion.div> */}

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="max-w-2xl text-center md:text-left"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-red-400">
          About Me
        </h2>

        <div className="space-y-4 text-lg text-gray-300">
          <p>
            Hi, I'm <span className="text-red-400 font-semibold">Soham Chaudhari</span>, a dedicated 
            <span className="font-semibold"> B.E. Computer Engineering</span> student with expertise in 
            <span className="text-red-400"> web development</span>, <span className="text-red-400">machine learning</span>, 
            and <span className="text-red-400">AI applications</span>.  
          </p>
          <p>
            I specialize in developing dynamic full-stack applications using the <span className="font-semibold">MERN stack</span> 
            and integrating AI solutions with <span className="font-semibold">Langchain</span>, <span className="font-semibold">PyTorch</span>, 
            and <span className="font-semibold">Transformers</span>. My goal is to bridge creativity and technology to build 
            impactful solutions for real-world challenges.
          </p>
        </div>

        {/* Key Interests */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
          <div className="flex items-center bg-gray-800 px-4 py-2 rounded-lg shadow-md">
            <Code className="w-6 h-6 text-red-400 mr-2" /> 
            <span className="text-white">Web Development</span>
          </div>
          <div className="flex items-center bg-gray-800 px-4 py-2 rounded-lg shadow-md">
            <Brain className="w-6 h-6 text-red-400 mr-2" />
            <span className="text-white">Machine Learning & AI</span> 
          </div>
        </div>

        {/* Education */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-red-400 flex items-center">
            <GraduationCap className="w-6 h-6 mr-2" /> Education
          </h3>
          <p className="text-gray-300 mt-2">
            <span className="font-semibold">Vivekanand Education Society’s Institute of Technology</span>  
            <br /> B.E. Computer Engineering (CGPA: 8.00) 
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-red-400 flex items-center">
            <Code className="w-6 h-6 mr-2" /> Featured Projects
          </h3>
          <ul className="text-gray-300 mt-2 space-y-2">
            <li>
              <span className="font-semibold text-red-400">Vision AI:</span> AI-powered image and video 
              upscaling using <span className="font-semibold">ESRGAN, GFPGAN, and CodeFormer</span>.
            </li>
            <li>
              <span className="font-semibold text-red-400">Cold Email Generator:</span> Automated outreach 
              tool leveraging <span className="font-semibold">Llama-3.1, Langchain, and ChromaDB</span>.
            </li>
            <li>
              <span className="font-semibold text-red-400">Vayu Mitra:</span> AI-based satellite air quality 
              downscaling solution using <span className="font-semibold">LightGBM and Scikit-learn</span>.
            </li>
          </ul>
        </div>

        {/* Hackathon Achievements */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-red-400 flex items-center">
            <Trophy className="w-6 h-6 mr-2" /> Hackathons & Achievements
          </h3>
        
          <p className="text-gray-300 mt-2">
            <span className="font-bold text-xl">Hack2Future 2024:
              <br />
              </span> Secured a <span className="text-red-400 font-bold">top 10</span>  position in the Hack2Future 2024 hackathon at IIIT Dharwad, competing among 1,700+ participants. Developed Vision AI, an advanced AI-powered solution for efficient video and image analysis, leveraging machine learning to enhance visual data processing. The project showcased innovation in real-time object detection, scene recognition, and automated insights.
          </p>
          <p className="text-gray-300 mt-2">
            <span className="font-bold text-xl">IIT Ropar @Medino'sXAdvitiya'25 :
              <br />
              </span> Secured <span className="text-red-400 font-bold">Runner Up(2nd)</span> position at Medino'sXAdvitiya'25 2025,Hosted at IIT Ropar. The event was a online hackathon that challenged my AI/ML skills and I was able to create a symptom analyzer chatbot and a OCR based prescription reader.
          </p>
        </div>

        {/* Skills & Technologies */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-red-400">Skills & Technologies</h3>
          <p className="text-gray-300 mt-2">
            <span className="font-semibold text-red-400">Programming:</span> Python, JavaScript, Java <br />
            <span className="font-semibold text-red-400">Web Technologies:</span> ReactJS, Express.js, Node.js, FastAPI <br />
            <span className="font-semibold text-red-400">Databases:</span> MongoDB, MySQL, ChromaDB <br />
            <span className="font-semibold text-red-400">AI & ML:</span> PyTorch, Langchain, Hugging Face, OpenCV <br />
            <span className="font-semibold text-red-400">Tools:</span> Git, Postman, Docker, Firebase
          </p>
        </div>

        {/* Contact Info */}
        <div className="mt-8 space-y-3 text-gray-300">
          <div className="flex items-center justify-center md:justify-start">
            <Mail className="w-5 h-5 text-red-400 mr-2" /> sohamrc08@email.com
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <MapPin className="w-5 h-5 text-red-400 mr-2" /> Mumbai, Maharashtra, India
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMe;

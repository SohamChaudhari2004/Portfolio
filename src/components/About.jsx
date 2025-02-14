import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Code, Brain } from "lucide-react";
import profilePic from "../assets/profile.png"; // Replace with your profile image

const AboutMe = () => {
  return (
    <div className="container mx-auto px-6 md:px-12 py-16 flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-16">
      {/* Profile Picture */}
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
            Hi, I'm <span className="text-red-400 font-semibold">Soham Chaudhari</span>, a dedicated <span className="font-semibold">B.E. Computer Engineering</span> student with a passion for <span className="text-red-400">web development</span> and <span className="text-red-400">machine learning</span>.
          </p>
          <p>
            I specialize in building dynamic applications using <span className="font-semibold">MERN stack</span> and exploring the power of <span className="font-semibold">Generative AI</span>. My goal is to bridge creativity and technology to solve real-world problems.
          </p>
        </div>

        {/* Key Interests */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
          <div className="flex items-center bg-gray-800 px-4 py-2 rounded-lg shadow-md">
            <Code className="w-6 h-6 text-red-400 mr-2" /> 
            <span className="text-white">Web Development
            </span>
          </div>
          <div className="flex items-center bg-gray-800 px-4 py-2 rounded-lg shadow-md">
            <Brain className="w-6 h-6 text-red-400 mr-2" />
            <span className="text-white">Machine Learning</span> 
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-8 space-y-3 text-gray-300">
          <div className="flex items-center justify-center md:justify-start">
            <Mail className="w-5 h-5 text-red-400 mr-2" /> 
            sohamrc08@gmail.com
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

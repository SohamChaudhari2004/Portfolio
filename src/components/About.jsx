import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/profile.png'; // Replace with your profile image

const AboutMe = () => {
  return (
    <div className="min-h-screen flex flex-col py-10 px-4 bg-gtransparent">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Profile Image */}
        <div className="flex-1 flex justify-center mb-6 md:mb-0">
          <motion.img
            className="w-60 h-60 p-10 md:w-80 md:h-80 rounded-full object-cover border-4 border-gray-700 shadow-lg"
            src={profilePic}
            alt="Profile"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 md:ml-10">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-gray-300 mb-4"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h1>

          <motion.p
            className="text-gray-300 text-lg md:text-xl mb-4 leading-relaxed"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hello! I'm SOHAM CHAUDHARI, a passionate software developer with a knack for creating innovative solutions to complex problems. With expertise in full-stack development, I have experience in crafting elegant, user-friendly interfaces and robust backend systems.
          </motion.p>

          <motion.p
            className="text-gray-300 text-lg md:text-xl mb-4 leading-relaxed"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            My journey in tech started with a curiosity for how things work, leading me to develop skills in various programming languages and technologies. From building dynamic web applications to optimizing performance, I'm dedicated to continuous learning and growth in this ever-evolving field.
          </motion.p>

          <motion.div
            className="flex flex-col md:flex-row gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a
              href="contact"
              className="bg-transparent border w-full border-slate-600 text-white py-2 px-4 rounded-lg text-center hover:bg-gray-600 transition duration-300"
            >
              Contact Me
            </a>
            
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

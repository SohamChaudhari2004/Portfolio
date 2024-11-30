import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/profile.png"; // Replace with your profile image
import Achievements from "./Achievements";

const AboutMe = () => {
  return (
    <div className="container mx-auto px-4 mb-60 -mt-20 flex flex-col md:flex-row items-center justify-center  md:space-y-0 md:space-x-12">
      {/* Profile Picture */}
      {/* <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-lg"
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
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-300">
          About Me
        </h2>

        <div className="space-y-4 text-base md:text-lg text-gray-200">
          <p>
            Hello! I'm SOHAM CHAUDHARI, a dedicated B.E. Computer Engineering
            student with a passion for web development and an emerging interest
            in data science and machine learning. I thrive on building dynamic
            web applications and leveraging technology to solve practical
            challenges.
          </p>
          <p>
            My journey in tech is fueled by curiosity and a commitment to
            innovation. With experience in full-stack development and generative
            AI, I continually strive to contribute to impactful projects that
            bridge creativity and cutting-edge technology.
          </p>
        </div>

        {/* Contact Me Button */}
        {/* <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-6 py-3 bg-transparent text-white rounded-lg shadow-md  transition-colors duration-300"
        >
          Contact Me
        </motion.button> */}
      </motion.div>
    </div>
  );
};

export default AboutMe;

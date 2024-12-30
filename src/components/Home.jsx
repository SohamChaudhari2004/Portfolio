import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/profile.png";
import Profile from "../assets/personalpic.png";
import TypingAnimation from "./magicui/typing-animation";
import ShinyButton from "./magicui/shiny-button";
import AboutMe from "./About";

const Home = () => {
  const download = () => {
    window.open(
      "https://drive.google.com/file/d/11y7EMW0O3Z-N-tE0tMd7g5j76iNT-lh6/view?usp=drive_link",
      "_blank"
    );
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row min-h-screen h-full overflow-hidden py-10 px-4">
        {/* Profile Image */}
        <div className="flex items-center justify-center relative md:ml-60 mb-8 md:mb-0">
          <motion.img
            className="w-72 h-72 md:w-96 md:h-96 rounded-full p-4 md:p-8"
            src={Profile}
            alt="Profile"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeIn" }}
          />
        </div>

        {/* Text and Button */}
        <div className="flex-1 flex flex-col items-center md:items-start justify-center md:ml-10 text-center md:text-left">
          <motion.div
            className="flex flex-col items-center md:items-start"
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <TypingAnimation
              className="text-red-400 font-bold font-mono text-4xl md:text-7xl"
              duration={100}
              text="SOHAM CHAUDHARI"
            />
            <TypingAnimation
              className="text-blue-200 text-3xl md:text-5xl font-mono mt-4 md:mt-10"
              duration={100}
              text="Software Developer"
            />
            <motion.div
              onClick={download}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative mt-8 md:mt-10"
            >
              <ShinyButton
                className="bg-gray-400 text-gray-950"
                text="Download Resume"
              />
              <motion.div
                className="absolute inset-0 bg-gray-500 rounded-full opacity-0"
                initial={{ opacity: 0, scale: 0 }}
                whileHover={{ opacity: 0.3, scale: 1.2 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
      <AboutMe />
    </div>
  );
};

export default Home;

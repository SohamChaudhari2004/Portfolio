import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/profile.png";
import Profile from "../assets/personalpic.png";
import TypingAnimation from "./magicui/typing-animation";
import ShinyButton from "./magicui/shiny-button";
import AboutMe from "./About";
import { projects } from "./Projects";
import SkillCard from "./SkillsCard";
import ProjectCarousel from "./ProjectCarousel";
import Achievements from "./Achievements";
const Home = () => {
  const download = () => {
    window.open(
      `https://drive.google.com/file/d/1_Kuoj6SvZygGLO0vwUY7RcJE3bnPzow6/view?usp=sharing`,
      "_blank"
    );
  };

  return (
    <div className="flex flex-col ">
      <div className="flex flex-col md:flex-row mb-20 mt-20 h-full overflow-hidden py-10 px-4">
        {/* Profile Image */}
        <div className="flex items-center justify-center  relative md:ml-60 mb-8 md:mb-0">
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
              className="text-blue-200 ml-16 text-3xl md:text-5xl font-mono mt-4 md:mt-10"
              duration={100}
              text="Software Developer"
            />
            <motion.div
              onClick={download}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              duration={300}
              className="relative mt-8 md:mt-10"
            >
              <button className="relative inline-flex items-center justify-center rounded-2xl p-3 ml-48 text-gray-300 border border-gray-300 overflow-hidden group">
                <span className="relative z-10">Download Resume</span>
                <div className="absolute inset-0 bg-gradient-to-r group-hover:opacity-100 animate-gradient-x ease-in-out"></div>
                {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 translate-x-[-100%] animate-shine"></div> */}
              </button>
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
      <ProjectCarousel className='w-96 mb-20' projects={projects}/>
        <SkillCard/>
        <Achievements/>
        {/* <AboutMe/> */}
    </div>
  );
};

export default Home;

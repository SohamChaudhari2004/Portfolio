import React from "react";
import profilePic from "../assets/img1.jpg";
import TypingAnimation from "./magicui/typing-animation";
import ShinyButton from "./magicui/shiny-button";
import Resume from "../assets/Resume_soham_R_Chaudhari.pdf";

const About = () => {
  const download = ()=>{
    window.open('https://drive.google.com/file/d/1HbIQLoUFcWLPlrVNcijqd65QAAsuOI30/view?usp=drive_link', '_blank')
  }

  return (
    <div className="flex absolute mt-16">
      <img
        className="w-96 h-96 relative ml-20 rounded-full "
        src={profilePic}
        alt=""
      />
      <div className="  flex items-start flex-col justify-center ml-10 mb-10 ">
        <div className="relative justify-center items-center ">
          <TypingAnimation
            className="relative text-red-400 font-bold font-mono text-7xl mt-10 "
            duration={100}
            text="SOHAM CHAUDHARI"
          />
          {/* <TypingAnimation className='relative text-white font-bold text-7xl mt-10 left-24 delay-200' duration={200}  text="CHAUDHARI"  /> */}
        </div>

        <TypingAnimation
          className="relative  text-blue-200 text-5xl font-mono m-10 mt-10 ml-32 "
          duration={300}
          text="Web Developer"
        />
        <div onClick={download}>
          <ShinyButton
          className="bg-gray-400 ml-48 text-gray-950"
          text="Download Resume"
        />
        </div>
        
      </div>
    </div>
  );
};

export default About;

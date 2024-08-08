import React from "react";
import GithubIcon from "../assets/github.svg";
import LinkedIcon from '../assets/LinkedIn.svg'
function Navbar() {

  const githubRedirect =()=>{
    window.open('https://github.com/SohamChaudhari2004', '_blank')
  }
  const linkedinRedirect =()=>{
    window.open('https://www.linkedin.com/in/soham-chaudhari-5214501b2/', '_blank');
  }
 

  return (
    <div className="flex justify-between mx-14 items-center   bg-transparent my-10">
      <div className="invert font-bold font-mono border border-gray-500 p-2  text-2xl">
      PORTFOLIO
      </div>

      <nav className="flex justify-center  items-center ">
        <div className="w-half px-10 py-2 rounded-full border border-gray-500 ">
          <ul className="flex text-gray-300 text-center font-semibold font-mono justify-center  ">
            <li className="z-20 hover:bg-gray-700 rounded-full px-4 py-2 cursor-pointer">
              Home
            </li>
            <li  className="z-20 hover:bg-gray-700 rounded-full px-4 py-2 cursor-pointer">About</li>
            <li className="z-20 hover:bg-gray-700 rounded-full px-4 py-2 cursor-pointer">
              Projects
            </li>
            <li className="z-20 hover:bg-gray-700 rounded-full px-4 py-2 cursor-pointer">
              Contact
            </li>
            <li className="z-20 hover:bg-gray-700 rounded-full px-4 py-2 cursor-pointer">
              Skills
            </li>
            <li className="z-20 hover:bg-gray-700 rounded-full px-4 py-2 cursor-pointer">
              Contact
            </li>
          </ul>
        </div>
      </nav>
      <div className="flex gap-5  z-10">
      <img className="w-10 invert h-10 cursor-pointer" onClick={githubRedirect} src={GithubIcon} alt="alr" />
      <img className="w-10 h-10 cursor-pointer " onClick={linkedinRedirect} src={LinkedIcon} alt="alr" />
      </div>
    </div>
  );
}

export default Navbar;

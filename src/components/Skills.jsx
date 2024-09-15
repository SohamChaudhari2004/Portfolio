import React from "react";
import TypingAnimation from "./magicui/typing-animation";
import IconCloud from "./magicui/icon-cloud";
import WordPullUp from "./magicui/word-pull-up";
import Javascript from "../assets/javascript.svg";
import Java from "../assets/java.svg";
import Python from "../assets/python.svg";
import Git from "../assets/git.svg";
import Github from "../assets/github.svg";
import Postman from "../assets/postman.svg";
import MongoDB from "../assets/mongodb.svg";
import Express from "../assets/expressjs.svg";
import ReactIcon from "../assets/react.svg";
import Node from "../assets/node.svg";
import SQL from '../assets/SQL.svg';
import MYSQL from '../assets/mysql.svg';
import Tailwind from '../assets/Tailwind.svg';
import Numpy from '../assets/numpy.svg';
import Pandas from '../assets/pandas.svg';

const Skills = () => {
  const slugs = [
    "typescript", "javascript", "java", "react", "android", "html5", "css3",
    "nodedotjs", "express", "nextdotjs", "amazonaws", "firebase", "vercel",
    "docker", "git", "jira", "github", "gitlab", "visualstudiocode",
    "androidstudio", "figma",
  ];

  const SkillSection = ({ title, items }) => (
    <div className="flex flex-col items-start w-full mb-6">
      <p className="text-2xl font-mono flex text-blue-500 mb-2">
        <TypingAnimation duration={100} className='text-2xl' text={`${title}:`} />
      </p>
      <div className="flex flex-wrap gap-2">
        {items.map((item, index) => (
          <div key={index} className="flex justify-center gap-2 items-center text-xl border border-gray-500 py-2 px-3">
            <img className={`size-8 ${item.invert ? 'invert' : ''}`} src={item.icon} alt="" />
            <span className="text-red-400">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const skillSections = [
    {
      title: "Languages",
      items: [
        { name: "JavaScript", icon: Javascript, invert: true },
        { name: "Java", icon: Java, invert: true },
        { name: "Python", icon: Python, invert: false },
      ],
    },
    {
      title: "Developer-Tools",
      items: [
        { name: "Git", icon: Git, invert: false },
        { name: "Github", icon: Github, invert: true },
        { name: "Postman", icon: Postman, invert: true },
      ],
    },
    {
      title: "Frameworks",
      items: [
        { name: "ExpressJs", icon: Express, invert: true },
        { name: "ReactJs", icon: ReactIcon, invert: false },
        { name: "NodeJs", icon: Node, invert: true },
        { name: "TailwindCSS", icon: Tailwind, invert: false },
      ],
    },
    {
      title: "Databases",
      items: [
        { name: "MongoDB", icon: MongoDB, invert: false },
        { name: "SQL", icon: SQL, invert: true },
        { name: "MYSQL", icon: MYSQL, invert: true },
      ],
    },
    {
      title: "Libraries",
      items: [
        { name: "Pandas", icon: Pandas, invert: false },
        { name: "Numpy", icon: Numpy, invert: false },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 -mt-8">
      <WordPullUp
        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-[-0.02em] text-red-400 dark:text-white mb-8"
        words="My Skills"
      />
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 p-4 flex -mt-8 items-center justify-center invert">
          <IconCloud className="w-full h-[400px] lg:h-[600px] " iconSlugs={slugs} />
        </div>
        <div className="w-full lg:w-1/2 p-4">
          {skillSections.map((section, index) => (
            <SkillSection key={index} title={section.title} items={section.items} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
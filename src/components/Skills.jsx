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
import SQL from '../assets/sql.svg';
import MYSQL from '../assets/mysql.svg';
import Tailwind from '../assets/tailwind.svg';
import Numpy from '../assets/numpy.svg'
import Pandas from '../assets/pandas.svg'
import { SiTensorflow, SiMongodb } from "react-icons/si"; // Substitute icons

const Skills = () => {
  const slugs = [
    "typescript", "javascript", "java", "react", "android", "html5", "css3",
    "nodedotjs", "express", "nextdotjs", "amazonaws", "firebase", "vercel",
    "docker", "git", "jira", "github", "gitlab", "visualstudiocode",
    "androidstudio", "figma",
  ];

  const SkillSection = ({ title, items }) => (
    <section className="flex flex-col items-start w-full mb-6">
      <h2 className="text-2xl font-mono text-blue-500 mb-2">
        <TypingAnimation duration={100} className="text-2xl" text={`${title}:`} />
      </h2>
      <div className="flex flex-wrap gap-2">
        {items.map((item, index) => (
          <div key={index} className="flex justify-center gap-2 items-center text-xl border border-gray-500 py-2 px-3 rounded-lg">
            {item.icon ? (
              <img className={`w-8 h-8 ${item.invert ? 'invert' : ''}`} src={item.icon} alt={item.name} />
            ) : (
              <item.reactIcon className="w-8 h-8 text-blue-500" />
            )}
            <span className="text-red-400">{item.name}</span>
          </div>
        ))}
      </div>
    </section>
  );

  const skillSections = [
    {
      title: "Programming Languages",
      items: [
        { name: "JavaScript", icon: Javascript, invert: true },
        { name: "Java", icon: Java, invert: true },
        { name: "Python", icon: Python, invert: false },
      ],
    },
    {
      title: "Web Technologies",
      items: [
        { name: "React.js", icon: ReactIcon, invert: false },
        { name: "Express.js", icon: Express, invert: true },
        { name: "Node.js", icon: Node, invert: true },
      ],
    },
    {
      title: "Database Systems",
      items: [
        { name: "MongoDB", icon: MongoDB, invert: false },
        { name: "Oracle SQL", icon: SQL, invert: true },
        { name: "MySQL", icon: MYSQL, invert: true },
        { name: "ChromaDB", reactIcon: SiMongodb, invert: false }, // Substitute icon
      ],
    },
    {
      title: "Data Science & Machine Learning",
      items: [
        { name: "Langchain", reactIcon: SiTensorflow, invert: false }, // Substitute icon
        { name: "Groq", reactIcon: SiTensorflow, invert: false }, // Substitute icon
      ],
    },
    {
      title: "Mathematical & Statistical Tools",
      items: [
        { name: "NumPy", icon: Numpy, invert: false },
        { name: "Pandas", icon: Pandas, invert: false },
      ],
    },
    {
      title: "Other Tools & Technologies",
      items: [
        { name: "Git", icon: Git, invert: false },
        { name: "GitHub", icon: Github, invert: true },
        { name: "Postman", icon: Postman, invert: true },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 -mt-10">
      <WordPullUp
        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-[-0.02em] text-red-400 dark:text-white mb-8"
        words="My Skills"
      />
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 p-4 flex mb-60 items-center invert justify-center">
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

import { AiFillCopyrightCircle } from "react-icons/ai"; 
import { DiJava } from "react-icons/di"; 
import { SiPython } from "react-icons/si"; 
// src/components/Skills.jsx
import React from "react";
import "./Skills.css";

// Import icons from react-icons (you can add more as needed)
import { FaJsSquare, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaDatabase, FaCode } from "react-icons/fa";
import { SiExpress, SiMongodb, SiC, SiCplusplus, SiMysql } from "react-icons/si";


const skills = [
  { name: "JavaScript", icon: <FaJsSquare color="#f0db4f" /> },
  { name: "HTML5", icon: <FaHtml5 color="#e34c26" /> },
  { name: "CSS3", icon: <FaCss3Alt color="#264de4" /> },
  { name: "React", icon: <FaReact color="#61dafb" /> },
  { name: "Node.js", icon: <FaNodeJs color="#68a063" /> },
  { name: "Express.js", icon: <SiExpress color="#ffffff" /> },
  { name: "MongoDB", icon: <SiMongodb color="#4db33d" /> },
  { name: "Git", icon: <FaGitAlt color="#f1502f" /> },
  { name: "GitHub", icon: <FaGithub color="#ffffff" /> },
  { name: "Java", icon: <DiJava color="#b9451fff" /> },
  { name: "C Program", icon: <SiC color="#00599C" /> },
  { name: "C++", icon: <SiCplusplus color="#00599C" /> },
  { name: "NoSQL", icon: <FaDatabase color="#f29111" /> },
  { name: "MySQL", icon: <SiMysql color="#00758F" /> },
  { name: "VS Code", icon: <FaCode color="#007ACC" /> }, // fallback icon
];



const Skills = () => {<AiFillCopyrightCircle />
  return (
    <section id="skills" className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-card">
            {skill.icon}
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

// src/components/Projects.jsx
import "./Projects.css"

const projects = [
  {
    title: "Gear-Up",
    description: "Gear-Up is a web-based car rental platform that allows users to easily browse, book, and manage car rentals online. It offers a smooth user experience with secure booking, real-time availability, and an admin dashboard for managing cars and users.",
    link: "https://gear-up-mern-frontend-tfhs.onrender.com",
  },
  {
    title: "STayZY",
    description: "A full-stack hotel booking platform where users can browse and book hotels online. Built with React, Node.js, and MongoDB, it features a responsive UI, hotel listings, and secure booking functionality.",
    link: "https://stayzy-frontend.onrender.com",
  },
  {
    title: "DO.ON",
    description: "DO.ON is a web application designed to help users manage and track tasks effortlessly. Built with React and Node.js, it offers a clean interface, task organization, and real-time updates to boost productivity.",
    link: "https://to-do-list-mern-frontend-xl7x.onrender.com",
  },
  {
    title: "Gaming Gloves",
    description: "Gaming Gloves – Innovative wearable gloves that allow gamers to control games using hand gestures. They provide an immersive gaming experience with precise motion tracking and intuitive controls, enhancing gameplay beyond traditional controllers.",
  },
  {
    title: "DOX-AI",
    description: "DOX-AI – An AI-powered platform that helps users build, optimize, and analyze resumes. It provides feedback on resume quality, matches resumes to job descriptions, and offers insights to improve job applications",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2>Projects</h2>
        <div className="project-grid">
          {projects.map((project, i) => (
            <div key={i} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

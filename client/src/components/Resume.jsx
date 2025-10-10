// src/components/Resume.jsx
import "./Resume.css";
import resumePDF from "../assets/Parveez updated new.pdf"; // Add your PDF file in assets

export default function Resume() {
  return (
    <section id="resume" className="resume-section">
      <div className="container">
        <h2>Resume</h2>
        <div className="resume-content">
          <div className="resume-summary">
            <h3>Professional Summary</h3>
            <p>
              MERN Stack Developer with expertise in building full-stack web applications,
              creating seamless user experiences, and developing scalable backend systems.
              Strong problem-solving skills and passionate about learning new technologies.
            </p>

            <h3>Education</h3>
            <ul>
              <li>Bachelor of Computer Science, P.A. College Of Engineering Mangalore , 2025</li>
              <li>Full-Stack Web Development Courses , Zephyr Technologies Mangalore , 2025</li>
            </ul>

            <h3>Languages</h3>
            <ul>
        <li>English – Read, Write, Speak</li>
    <li>Hindi – Read, Write, Speak</li>
    <li>Kannada – Read, Write, Speak</li>
    <li>Malayalam – Speak</li>
    <li>Arabic – Read, Write</li>
              
            </ul>
<h3>Certification</h3>
<ul>
  <li>Postman Student expert.</li>
<li>IBM Developer Skills Network.</li>
<li>Rooman Technologies Cloud Application Developer.</li>
<li>Wadhwani Foundation Life Skills (Jeevan Kaushal).</li>
</ul>

          </div>

          <div className="resume-download">
            <a href={resumePDF} download className="download-btn">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

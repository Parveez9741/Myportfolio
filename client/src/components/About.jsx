// src/components/About.jsx
import "./About.css";
import profilePic from "../assets/WhatsApp Image 2025-10-19 at 15.26.24_693dd699.jpg";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container container">
        <h2>About Me</h2>
        <div className="about-content professional">
          {/* Left Side: Profile Picture */}
          <div className="about-image">
            <img src={profilePic} alt="Mohammed Parveez" />
          </div>

          {/* Right Side: Information */}
          <div className="about-info">
            <h3>Hello, I’m <span className="highlight">Mohammed Parveez</span></h3>
            <p>
              I am a passionate <strong>MERN Stack Developer</strong> from <strong>Mangalore, India </strong>.
              <br />I specialize in building modern, responsive web applications with seamless user experiences.
            </p>
            <ul className="info-list">
              <li><strong>Contact:</strong> +91 9741387341</li>
              <li><strong>Email:</strong> mfarwiz1234@gmail.com</li>
              <li><strong>Education:</strong> Bachelor of Computer Science, P.A College Of Engineering Mangalore, 2025</li>
              <li><strong>Experience:</strong> Full-Stack Web Developer Trainee , Zephyr Technologies Mangalore , 2025</li>
            </ul>
            <p>
              I am dedicated to crafting scalable and efficient web solutions, and I love turning complex problems into elegant designs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

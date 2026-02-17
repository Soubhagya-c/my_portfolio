import { useState } from "react";
import "../styles/hero.css";
import profile from "../assets/profile.jpeg";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  const [theme, setTheme] = useState("blue");

  return (
    <div className={`layout ${theme}`}>
      
    

    

      {/* MAIN HERO SECTION */}
      <section className="hero">
        <div className="hero-inner">

          <div className="hero-content">
            <h1 className="hero-name">
              Soubhagya <span>Chikkamath</span>
            </h1>

            <h2 className="hero-title">
              🎓 Computer Science Graduate | Java Full Stack Developer | Web Developer | 
            </h2>

            <p className="hero-text">
          Java Full Stack Developer with hands-on experience in designing and developing scalable web applications using Java, Spring Boot, React.js, and MongoDB.
           Skilled in building RESTful APIs, implementing secure authentication, and integrating dynamic frontend interfaces with robust backend services. Experienced in developing responsive UI using Tailwind CSS and Material UI. Strong understanding of microservices architecture, database design, and performance optimization. 
          Passionate about writing clean, maintainable code and contributing to high-quality production systems.
            </p>

            <p className="hero-text">
              Frontend Developer with expertise in React.js, JavaScript (ES6+), HTML5, CSS3, and Tailwind CSS, specializing in building modern, responsive, and high-performance web interfaces. 
              Strong understanding of component-based architecture, state management, and API integration.
               Experienced in converting Figma designs into pixel-perfect UI and optimizing applications for performance and scalability. 
              Passionate about delivering seamless user experiences.
            </p>
          </div>

          <div className="hero-image">
            <img src={profile} alt="Profile" />
          </div>

        </div>
      </section>
    </div>
  );
}
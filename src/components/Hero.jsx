import { useState } from "react";
import "../styles/hero.css";
import profile from "../assets/profile.jpeg";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  const [theme, setTheme] = useState("blue");

  return (
    <div className={`layout ${theme}`}>
      
      {/* LEFT SIDEBAR */}
      <aside className="sidebar">
        <h3>Theme Settings</h3>

        <label>Choose Theme</label>
        <select onChange={(e) => setTheme(e.target.value)}>
          <option value="blue">Blue</option>
          <option value="purple">Purple</option>
          <option value="green">Green</option>
           <option value="pink">Pink</option>
        </select>

        <div className="sidebar-icons">
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaGithub /></a>
          <a href="#"><FaEnvelope /></a>
        </div>
      </aside>

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
          Java Full Stack Developer skilled in Java, Spring Boot, React.js, and MongoDB with experience building responsive and scalable web applications.
           Strong knowledge of REST APIs, database design,
           and frontend-backend integration. Eager to contribute to real-world projects in a dynamic development environment.
            </p>

            <p className="hero-text">
              Frontend Developer skilled in React.js, JavaScript, HTML, CSS, and Tailwind CSS, 
              with experience building responsive and scalable web interfaces.
               Strong understanding of component-based architecture and API integration.
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
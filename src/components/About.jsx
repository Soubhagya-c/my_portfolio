import "../styles/about.css";
import profile from "../assets/profile1.jpeg";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

export default function About() {
  return (
    <section className="about">
      <h2 className="about-title">About Me</h2>
      <div className="about-container">

        {/* LEFT IMAGE */}
        <div className="about-image">
          <img src={profile} alt="Profile" />
          <p className="about-name">Soubhagya Chikkamath</p>
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-content">

          <p>
            I am a Full Stack Developer specializing in React.js and Java-based backend systems, with hands-on experience in building scalable, production-ready web applications.
             My expertise lies in designing clean frontend architectures and developing robust RESTful services using Spring Boot.
          </p>

          <p>
           I have developed multiple real-world applications including a College Management System, Movie Explorer, Task Manager, and Quiz Application.
            These projects involved implementing REST APIs, authentication mechanisms, database design, and seamless frontend-backend integration using MongoDB and MySQL.
          </p>

          <p>
            Core Skills:
Java | Spring Boot | React.js | JavaScript | MongoDB | MySQL | REST APIs | Git | OOP | Data Structures
          </p>

          <p>
            Open to opportunities in Full Stack Development, Frontend Development, and Java Backend roles.
          </p>

          {/* CONTACT INFO */}
          <div className="about-contact">
            <div><FaMapMarkerAlt /> Bangalore, Karnataka</div>
            <div><FaPhone /> 9019657790</div>
            <div><FaEnvelope /> soubhagyac2001@gmail.com</div>
          </div>

        </div>

      </div>

    </section>
  );
}
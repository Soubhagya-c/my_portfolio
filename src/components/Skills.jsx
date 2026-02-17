import "../styles/skills.css";
import {
  FaJava,
  FaPython,
  FaReact,
  FaGitAlt,
  FaDocker,
  FaLinux,
} from "react-icons/fa";

import {
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiSpringboot,
  SiHibernate,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiPostman,
  SiApachemaven,
} from "react-icons/si";

export default function Skills() {
  return (
    <section className="skills">
      <h2 className="skills-title">Technical Skills</h2>

      <div className="skills-grid">

        {/* Programming Languages */}
        <div className="skill-card">
          <h3>Programming Languages</h3>
          <div className="skill-items">
            <Skill icon={<FaJava />} name="Java" />
            <Skill icon={<FaPython />} name="Python" />
            <Skill icon={<SiMysql />} name="SQL" />
          </div>
        </div>

        {/* Core Concepts */}
        <div className="skill-card">
          <h3>Core Concepts</h3>
          <div className="skill-items">
            <Skill name="OOP" />
            <Skill name="Data Structures & Algorithms" />
            <Skill name="Exception Handling" />
          </div>
        </div>

        {/* Backend */}
        <div className="skill-card">
          <h3>Backend Technologies</h3>
          <div className="skill-items">
            <Skill icon={<SiSpringboot />} name="Spring Boot" />
            <Skill icon={<SiHibernate />} name="Hibernate" />
            <Skill name="JDBC" />
            <Skill name="Servlet" />
          </div>
        </div>

        {/* Frontend */}
        <div className="skill-card">
          <h3>Frontend Technologies</h3>
          <div className="skill-items">
            <Skill icon={<SiHtml5 />} name="HTML5" />
            <Skill icon={<SiCss3 />} name="CSS3" />
            <Skill icon={<SiJavascript />} name="JavaScript" />
            <Skill icon={<FaReact />} name="React" />
          </div>
        </div>

        {/* Databases */}
        <div className="skill-card">
          <h3>Databases</h3>
          <div className="skill-items">
            <Skill icon={<SiMysql />} name="MySQL" />
            <Skill icon={<SiMongodb />} name="MongoDB" />
            <Skill icon={<SiPostgresql />} name="PostgreSQL" />
          </div>
        </div>

        {/* Tools */}
        <div className="skill-card">
          <h3>Tools & Platforms</h3>
          <div className="skill-items">
            <Skill icon={<FaDocker />} name="Docker" />
            <Skill icon={<FaLinux />} name="Linux" />
            <Skill icon={<FaGitAlt />} name="Git" />
            <Skill icon={<SiApachemaven />} name="Maven" />
            <Skill icon={<SiPostman />} name="Postman" />
          </div>
        </div>

        {/* Web Concepts */}
        <div className="skill-card">
          <h3>Web Concepts</h3>
          <div className="skill-items">
            <Skill name="REST APIs" />
            <Skill name="MVC Architecture" />
            <Skill name="CRUD Operations" />
          </div>
        </div>

      </div>
    </section>
  );
}

/* Reusable Skill Component */
function Skill({ icon, name }) {
  return (
    <div className="skill-item">
      {icon && <span className="skill-icon">{icon}</span>}
      <span>{name}</span>
    </div>
  );
}
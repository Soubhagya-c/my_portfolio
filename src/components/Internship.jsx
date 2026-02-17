import "../styles/internship.css";
import { FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";

export default function Internship() {
  return (
    <section className="internship">
      <h2 className="internship-title">Internship Experience</h2>

      <div className="internship-container">

        {/* Internship 1 */}
        <div className="internship-card">
          <div className="internship-header">
            <h3>Java Full-Stack Intern</h3>
            <span className="internship-type">Training + Project Based</span>
          </div>

          <div className="internship-company">
            <FaBriefcase />
            <span>Kodnest Technologies</span>
          </div>

          <div className="internship-location">
            <FaMapMarkerAlt />
            <span>Bangalore, Karnataka</span>
          </div>

          <ul className="internship-points">
            <li>
              Developed full-stack applications using <strong>Java, Spring Boot,
              Hibernate, HTML, CSS, and JavaScript</strong>.
            </li>

            <li>
              Designed and implemented scalable <strong>RESTful APIs</strong>.
            </li>

            <li>
              Integrated <strong>MySQL databases</strong> using JDBC and Hibernate.
            </li>

            <li>
              Collaborated on <strong>3+ mini projects</strong> and implemented
              <strong> 50+ SQL queries</strong>.
            </li>

            <li>
              Followed <strong>MVC architecture</strong> and REST standards.
            </li>
          </ul>
        </div>

        {/* Internship 2 */}
        <div className="internship-card">
          <div className="internship-header">
            <h3>Java Full-Stack Intern</h3>
            <span className="internship-type">45 Days Internship</span>
          </div>

          <div className="internship-company">
            <FaBriefcase />
            <span>Athreya Technologies</span>
          </div>

          <div className="internship-location">
            <FaMapMarkerAlt />
            <span>Hubli</span>
          </div>

          <ul className="internship-points">
            <li>
              Designed and developed a <strong>College Management System</strong>.
            </li>

            <li>
              Gained hands-on experience in <strong>Java, JSP, Servlets, and MySQL</strong>.
            </li>

            <li>
              Implemented CRUD operations and backend validations.
            </li>

            <li>
              Applied full-stack development concepts in real-time project environment.
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}
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
              Hibernate, and React</strong>.
            </li>

            <li>
              Designed and implemented scalable <strong>REST APIs</strong> with proper
              exception handling and validation.
            </li>

            <li>
              Integrated <strong>MySQL databases</strong> using JDBC and Hibernate with
              optimized queries and indexing.
            </li>

            <li>
              Used <strong>Git</strong> for version control, branching, merging, and
              collaborative development workflows.
            </li>

            <li>
              Worked with <strong>JSON data handling</strong> and frontend-backend integration.
            </li>

            <li>
              Collaborated on <strong>3+ mini projects</strong> and implemented
              <strong> 50+ SQL queries</strong>.
            </li>

            <li>
              Followed <strong>MVC architecture</strong> and REST standards for clean and
              maintainable code structure.
            </li>
          </ul>
        </div>

        {/* Internship 2 */}
        <div className="internship-card">
          <div className="internship-header">
            <h3>Java Intern</h3>
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
              Developed a <strong>College Management System</strong> to manage
              student records, faculty details, and course data efficiently.
            </li>

            <li>
              Implemented complete <strong>CRUD operations</strong> with server-side
              validations using <strong>Java, JSP, and Servlets</strong>.
            </li>

            <li>
              Integrated <strong>MySQL database</strong> with optimized SQL queries and
              relational schema design.
            </li>

            <li>
              Followed <strong>MVC architecture</strong> to maintain clean separation
              between presentation, business logic, and data layers.
            </li>

            <li>
              Used <strong>Git</strong> for version control and collaborated on project
              modules using structured branching strategy.
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}
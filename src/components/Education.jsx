import "../styles/education.css";
import educationImg from "../assets/education.jpeg";

export default function Education() {
  return (
    <section className="education">
      <h2 className="education-title">Education</h2>

      <div className="education-container">

        {/* LEFT SIDE - TIMELINE */}
        <div className="timeline">

          {/* MCA */}
          <div className="timeline-item">
            <div className="timeline-year">2023 – 2024</div>

            <div className="timeline-content">
              <div className="degree-header">
                <h3>MCA in Computer Applications</h3>
                <span className="cgpa-badge">CGPA: 9.38 / 10</span>
              </div>

              <h4>KLE College of Engineering and Technology, Chikodi</h4>

              <p>
                Specialized in software engineering and full-stack development.
                Built Agriculture Web Application as a major academic project.
              </p>

              <ul>
                <li>Worked with React & Spring Boot</li>
                <li>Designed REST APIs</li>
                <li>Database modeling & optimization</li>
              </ul>
            </div>
          </div>

          {/* BSC */}
          <div className="timeline-item">
            <div className="timeline-year">2019 – 2022</div>

            <div className="timeline-content">
              <div className="degree-header">
                <h3>BSC in Computer Science</h3>
                <span className="cgpa-badge">CGPA: 8.2 / 10</span>
              </div>

              <h4>Karnataka Science Dharwad</h4>

              <p>
                Built strong foundation in Java, Data Structures,
                and Object-Oriented Programming principles.
              </p>

              <ul>
                <li>Core Java & SQL</li>
                <li>Mini full-stack projects</li>
                <li>Technical workshops participation</li>
              </ul>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div className="education-image">
          <img src={educationImg} alt="Education" />
        </div>

      </div>
    </section>
  );
}
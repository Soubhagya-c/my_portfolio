import "../styles/certification.css";

export default function Certification() {
  return (
    <section className="training">
      <h2 className="training-title">Certification</h2>

      <div className="training-timeline">

        {/* Training 1 */}
        <div className="training-item">
          <div className="training-dot"></div>

          <div className="training-content">
            <h3>Java Full-Stack Development</h3>
            <p className="training-institute">
              Kodnest Technologies · Bangalore
            </p>

            <p className="training-desc">
              Intensive hands-on training focused on building scalable
              enterprise applications using Java ecosystem technologies.
            </p>

            <div className="training-tags">
              <span>Core Java</span>
              <span>Spring Boot</span>
              <span>Hibernate</span>
              <span>REST APIs</span>
              <span>MySQL</span>
              <span>MVC</span>
            </div>
          </div>
        </div>

        {/* Training 2 */}
        <div className="training-item">
          <div className="training-dot"></div>

          <div className="training-content">
            <h3>Core Java & OOP Mastery</h3>
            <p className="training-institute">
              Athreya Technologies · Hubli
            </p>

            <p className="training-desc">
              Strengthened programming fundamentals with deep focus on
              object-oriented design, problem solving, and backend logic implementation.
            </p>

            <div className="training-tags">
              <span>OOP</span>
              <span>Data Structures</span>
              <span>Exception Handling</span>
              <span>JDBC</span>
              <span>CRUD Operations</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
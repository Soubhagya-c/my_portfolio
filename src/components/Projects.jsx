import "../styles/projects.css";

export default function Projects() {
  return (
    <section className="projects">
      <h2 className="projects-title">Projects</h2>

      {/* ================= PROJECT 1 ================= */}
      <div className="project-section">

        <h3 className="project-name">
          Agro Genius
        </h3>

        <div className="project-meta">
          <span>📅 March 2024– August 2024</span>
          <span>🏢 KLE Engineering College, Chikodi</span>
          <span>🏷 Main Project</span>
        </div>

        <p className="project-description">
        The primary objective of this project was to develop a scalable backend system that efficiently manages crop data, inventory records, and user information through secure RESTful APIs. The platform ensures structured storage and smooth retrieval of agricultural data to support digital farming solutions.

One of the key features of the application is the Crop and Inventory Management Module, which enables efficient tracking of crop details, stock availability, and user activities. This system helps streamline agricultural operations and improve decision-making through organized data management.
      </p>

      <h4>Key Features:</h4>
      <ul>
        <li>Developed RESTful APIs for crop, inventory, and user management modules</li>
        <li>Implemented Hibernate ORM for efficient relational data handling</li>
        <li>Optimized SQL queries to improve performance and reduce response time by 25%</li>
        <li>Followed MVC architecture and REST standards for scalable backend design</li>
        <li>Integrated MySQL database for structured data management</li>
      </ul>

      <h4>Tech Stack:</h4>
      <div className="tech-badges">
        <span>Java</span>
        <span>Spring Boot</span>
        <span>Hibernate</span>
        <span>MySQL</span>
        <span>REST API</span>
        <span>MVC Architecture</span>
      </div>

      </div>

      {/* ================= PROJECT 2 ================= */}
      <div className="project-section">

        <h3 className="project-name">
          Hospital Management System
        </h3>

        <div className="project-meta">
          <span>📅 Feb 2022 – Sep 2022</span>
          <span>🏷 Main Project</span>
        </div>

        <p className="project-description">
          The primary objective of this project was to develop a healthcare management system that streamlines hospital operations through multiple functional modules. 
          The system includes patient record management, appointment scheduling, and billing functionalities to ensure organized and efficient healthcare services.
        </p>

        <h4>Key Features:</h4>
        <ul>
          <li>Developed 5+ functional modules including Patient Records, Appointment Scheduling, and Billing Management</li>
          <li>Implemented JDBC-based CRUD operations for efficient database interaction</li>
          <li>Added backend validation to ensure data accuracy and integrity</li>
          <li>Enabled secure storage and retrieval of patient and billing information</li>
          <li>Designed modular structure for easy maintenance and scalability</li>
        </ul>

        <h4>Tech Stack:</h4>
        <div className="tech-badges">
          <span>Java</span>
          <span>JavaScript</span>
          <span>JDBC</span>
          <span>MySQL</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>Apache Tomcat</span>
        </div>

      </div>

          {/* ================= PROJECT 3 ================= */}
      <div className="project-section">

        <h3 className="project-name">
          College Management System
        </h3>

        <div className="project-meta">
          <span>📅 Dec 2021 – Jan 2022</span>
          <span>🏷 Mini Project</span>
        </div>

        <p className="project-description">
         The primary objective of this project was to develop a College Management System that efficiently manages academic and administrative data through secure RESTful APIs.
         The application includes dedicated modules for student management, faculty management, course allocation, and attendance tracking, helping streamline academic processes and improve data organization within the institution.
        </p>

        <h4>Key Features:</h4>
        <ul>
          <li>Built RESTful APIs for managing academic and administrative data</li>
          <li>Designed modules for Students, Faculty, Courses, and Attendance Management</li>
          <li>Attendance Tracking System with Reports</li>
          <li>Student Information Management (Add, Update, Delete, Search, Pagination)</li>
          <li>Database Normalization & Optimized Queries</li>
        </ul>

        <h4>Tech Stack:</h4>
        <div className="tech-badges">
          <span>Java</span>
          <span>JavaScript</span>
          <span>JDBC</span>
          <span>MySQL</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>Apache Tomcat</span>
        </div>

      </div>

    </section>
  );
}
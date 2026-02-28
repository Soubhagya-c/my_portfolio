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
          Task Manager Web Application
        </h3>

        <div className="project-meta">
          <span>📅 January 2026</span>
          <span>🏷 Personal Project</span>
          <span>🌐 Deployed on Vercel</span> {/* Change to Netlify if needed */}
        </div>

        <p className="project-description">
          The primary objective of this project was to build a modern, responsive task management system that enables users to create, track, and update tasks in real-time. The application provides a centralized dashboard with key performance metrics, improving task visibility and productivity.

          The system features dynamic task routing, real-time status updates, and automatic dashboard synchronization using React Context API. The architecture follows a scalable component-based design for maintainability and performance.
        </p>

        <h4>Key Features:</h4>
        <ul>
          <li>Developed using <strong>React.js functional components</strong> and Hooks</li>
          <li>Implemented global state management using <strong>React Context API</strong></li>
          <li>Built interactive <strong>Dashboard with KPI metrics</strong> (Total, Pending, Completed)</li>
          <li>Integrated <strong>React Router</strong> with dynamic routing (/tasks/:id)</li>
          <li>Implemented real-time task status updates with automatic UI re-rendering</li>
          <li>Designed responsive modern UI with animated progress bars and card layouts</li>
          <li>Followed component-based architecture for scalable and maintainable structure</li>
          <li>Deployed application to production using <strong>Vercel</strong></li> {/* Change if Netlify */}
        </ul>

        <h4>Tech Stack:</h4>
        <div className="tech-badges">
          <span>React.js</span>
          <span>JavaScript (ES6+)</span>
          <span>React Router</span>
          <span>Context API</span>
          <span>CSS3</span>
          <span>Responsive Design</span>
          <span>Vercel</span> {/* Change if Netlify */}
        </div>

      </div>

      {/* ================= PROJECT 3 ================= */}
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

          {/* ================= PROJECT 4 ================= */}
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
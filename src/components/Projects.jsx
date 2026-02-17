import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import "../styles/projects.css";

// Enhanced project data structure
const projectsData = [
  {
    id: 1,
    title: "Agro Management System",
    duration: "2024 – 2025",
    role: "Lead Backend Developer",
    description: "Enterprise-scale agricultural management platform serving 500+ farmers with real-time inventory tracking and predictive analytics.",
    technologies: [
      { name: "Java", category: "language", icon: "☕", proficiency: 95 },
      { name: "Spring Boot", category: "framework", icon: "🍃", proficiency: 90 },
      { name: "Hibernate", category: "orm", icon: "🗃️", proficiency: 85 },
      { name: "MySQL", category: "database", icon: "🐬", proficiency: 88 },
      { name: "Redis", category: "cache", icon: "⚡", proficiency: 75 },
      { name: "Docker", category: "devops", icon: "🐳", proficiency: 80 }
    ],
    achievements: [
      { metric: "25%", label: "Faster Response Time", icon: "⚡" },
      { metric: "500+", label: "Active Farmers", icon: "👨‍🌾" },
      { metric: "99.9%", label: "Uptime", icon: "📈" }
    ],
    features: [
      "RESTful APIs with comprehensive documentation using OpenAPI 3.0",
      "Advanced caching layer reducing database load by 40%",
      "Real-time crop monitoring with WebSocket integration",
      "Automated inventory forecasting using ML algorithms",
      "Role-based access control with JWT and OAuth2"
    ],
    links: {
      github: "https://github.com/yourusername/agro-management",
      live: "https://agro-demo.com",
      caseStudy: "#"
    }
  },
  {
    id: 2,
    title: "Hospital Management System",
    duration: "2023 – 2024",
    role: "Full Stack Developer",
    description: "Comprehensive healthcare platform managing 50,000+ patient records with integrated appointment scheduling and billing automation.",
    technologies: [
      { name: "Java", category: "language", icon: "☕", proficiency: 92 },
      { name: "JDBC", category: "database", icon: "🔌", proficiency: 85 },
      { name: "MySQL", category: "database", icon: "🐬", proficiency: 87 },
      { name: "Servlet", category: "web", icon: "🌐", proficiency: 82 },
      { name: "JSP", category: "frontend", icon: "📄", proficiency: 78 },
      { name: "JavaScript", category: "frontend", icon: "📜", proficiency: 75 }
    ],
    achievements: [
      { metric: "30%", label: "Less Manual Work", icon: "🤖" },
      { metric: "10k+", label: "Patients Served", icon: "👥" },
      { metric: "24/7", label: "Availability", icon: "⏰" }
    ],
    features: [
      "Multi-module system with patient records, appointments, and billing",
      "Automated workflow optimization reducing administrative overhead",
      "Secure data encryption for HIPAA compliance",
      "Real-time availability tracking for 50+ doctors",
      "Automated invoice generation with PDF export"
    ],
    links: {
      github: "https://github.com/yourusername/hospital-management",
      caseStudy: "#"
    }
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredTech, setHoveredTech] = useState(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.section 
      ref={containerRef}
      className="projects"
      style={{ opacity }}
      initial={{ backgroundColor: "#0a0a0a" }}
      animate={{ backgroundColor: "#0b1220" }}
      transition={{ duration: 1 }}
    >
      {/* Animated background particles */}
      <div className="projects-bg">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="bg-particle"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0
            }}
            animate={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="projects-content">
        {/* Title with animated gradient */}
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="projects-title">
            <span className="gradient-text">Featured</span>
            <span className="title-separator"></span>
            <span className="title-sub">Projects</span>
          </h2>
          <motion.p 
            className="projects-subtitle"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            Crafting scalable solutions with cutting-edge technology
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="projects-container"
          style={{ y }}
        >
          {projectsData.map((project, index) => (
            <ProjectCard 
              key={project.id}
              project={project}
              index={index}
              isInView={isInView}
              selectedProject={selectedProject}
              setSelectedProject={setSelectedProject}
              hoveredTech={hoveredTech}
              setHoveredTech={setHoveredTech}
            />
          ))}
        </motion.div>

        {/* Statistics Section */}
        <motion.div 
          className="projects-stats"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <div className="stat-item">
            <span className="stat-number">10+</span>
            <span className="stat-label">Projects Completed</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">100K+</span>
            <span className="stat-label">Lines of Code</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">98%</span>
            <span className="stat-label">Client Satisfaction</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">5+</span>
            <span className="stat-label">Technologies Mastered</span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

function ProjectCard({ project, index, isInView, selectedProject, setSelectedProject, hoveredTech, setHoveredTech }) {
  const cardRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100
    });
  };

  return (
    <motion.div
      ref={cardRef}
      className={`project-card ${selectedProject === project.id ? 'expanded' : ''}`}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
    >
      {/* Dynamic gradient background */}
      <motion.div 
        className="card-gradient"
        animate={{
          background: isHovered 
            ? `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(94, 234, 212, 0.15), transparent 50%)`
            : 'none'
        }}
        transition={{ duration: 0.1 }}
      />

      {/* Card Header */}
      <div className="project-header">
        <motion.div 
          className="project-title-group"
          animate={{ x: isHovered ? 10 : 0 }}
        >
          <h3>{project.title}</h3>
          <span className="project-role">{project.role}</span>
        </motion.div>
        <motion.span 
          className="project-duration"
          animate={{ 
            scale: isHovered ? 1.1 : 1,
            color: isHovered ? '#5eead4' : '#94a3b8'
          }}
        >
          {project.duration}
        </motion.span>
      </div>

      {/* Project Description */}
      <motion.p 
        className="project-description"
        initial={{ opacity: 0.8 }}
        animate={{ opacity: isHovered ? 1 : 0.8 }}
      >
        {project.description}
      </motion.p>

      {/* Achievement Metrics */}
      <div className="project-metrics">
        {project.achievements.map((achievement, i) => (
          <motion.div 
            key={i}
            className="metric-item"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1 * i }}
            whileHover={{ scale: 1.1, backgroundColor: '#2d3b4f' }}
          >
            <span className="metric-icon">{achievement.icon}</span>
            <span className="metric-value">{achievement.metric}</span>
            <span className="metric-label">{achievement.label}</span>
          </motion.div>
        ))}
      </div>

      {/* Technology Stack with Proficiency */}
      <div className="tech-stack">
        {project.technologies.map((tech, i) => (
          <motion.div
            key={i}
            className="tech-item"
            onHoverStart={() => setHoveredTech(tech.name)}
            onHoverEnd={() => setHoveredTech(null)}
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <span className="tech-icon">{tech.icon}</span>
            <span className="tech-name">{tech.name}</span>
            <motion.div 
              className="tech-proficiency"
              initial={{ width: 0 }}
              animate={{ width: `${tech.proficiency}%` }}
              transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
            />
          </motion.div>
        ))}
      </div>

      {/* Features List */}
      <motion.ul 
        className="project-points"
        animate={{ height: selectedProject === project.id ? 'auto' : '120px' }}
        transition={{ duration: 0.3 }}
      >
        {project.features.map((feature, i) => (
          <motion.li 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * i }}
            whileHover={{ x: 10, color: '#5eead4' }}
          >
            <span className="feature-bullet">▹</span>
            {feature}
          </motion.li>
        ))}
      </motion.ul>

      {/* Action Buttons */}
      <div className="project-actions">
        {Object.entries(project.links).map(([key, url], i) => (
          url && (
            <motion.a
              key={key}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={`action-btn ${key}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * i }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              {key === 'github' && '📦'}
              {key === 'live' && '🚀'}
              {key === 'caseStudy' && '📚'}
              <span>
                {key === 'github' && 'View Code'}
                {key === 'live' && 'Live Demo'}
                {key === 'caseStudy' && 'Case Study'}
              </span>
            </motion.a>
          )
        ))}
      </div>

      {/* Expand indicator */}
      <motion.div 
        className="expand-indicator"
        animate={{ rotate: selectedProject === project.id ? 180 : 0 }}
      >
        ▼
      </motion.div>
    </motion.div>
  );
}
// Navbar.jsx
import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/navbar.css";

const navItems = [
  { id: "home", label: "Home", icon: "🏠" },
  { id: "about", label: "About", icon: "👤" },
  { id: "skills", label: "Skills", icon: "⚡" },
  { id: "education", label: "Education", icon: "🎓" },
  { id: "certification", label: "Certification", icon: "📜" },
  { id: "projects", label: "Projects", icon: "💼" },
  { id: "contact", label: "Contact", icon: "📧" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeDropdownItem, setActiveDropdownItem] = useState(null);
  const dropdownRef = useRef(null);
  const navRef = useRef(null);

  // Throttled scroll handler for performance
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);

    // Find active section based on viewport
    const allSections = [
      "home", "about", "skills", 
      "academic-education", "courses-training", "certifications",
      "projects", "contact"
    ];
    
    const scrollPosition = window.scrollY + 100;

    for (const sectionId of allSections) {
      const section = document.getElementById(sectionId);
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          // Check if this is a dropdown item
          const parentItem = navItems.find(item => 
            item.dropdown?.some(d => d.path === sectionId)
          );
          
          if (parentItem) {
            setActive(parentItem.id);
            const dropdownItem = parentItem.dropdown.find(d => d.path === sectionId);
            setActiveDropdownItem(dropdownItem?.id);
          } else {
            setActive(sectionId);
            setActiveDropdownItem(null);
          }
          break;
        }
      }
    }
  }, []);

  useEffect(() => {
    let ticking = false;
    
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", scrollListener, { passive: true });
    
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener("scroll", scrollListener);
  }, [handleScroll]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    setMenuOpen(false);
    setOpenDropdown(null);
    
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Handle dropdown item click
  const handleDropdownItemClick = (parentId, item) => {
    setActive(parentId);
    setActiveDropdownItem(item.id);
    scrollToSection(item.path);
    setOpenDropdown(null);
  };

  // Animation variants
  const dropdownVariants = {
    hidden: { 
      opacity: 0, 
      y: -10,
      transition: { duration: 0.2 }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.3,
        staggerChildren: 0.05
      }
    }
  };

  const dropdownItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  const linkVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95 }
  };

  return (
    <>
      <motion.nav
        ref={navRef}
        className={`navbar ${scrolled ? "scrolled" : ""} ${menuOpen ? "menu-open" : ""}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="nav-container">
          
          {/* Logo with animation */}
          <motion.div
            className="logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("home")}
          >
            <span className="logo-text">S</span>
            <span className="logo-dot">.</span>
            <span className="logo-full">oubhagya</span>
            <span className="logo-badge">Portfolio</span>
          </motion.div>

          {/* Desktop Navigation */}
          <ul className="nav-links" ref={dropdownRef}>
            {navItems.map((item) => (
              <li 
                key={item.id}
                className={item.dropdown ? "has-dropdown" : ""}
                onMouseEnter={() => item.dropdown && setOpenDropdown(item.id)}
                onMouseLeave={() => item.dropdown && setOpenDropdown(null)}
              >
                <motion.div
                  variants={linkVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      if (item.dropdown) {
                        setOpenDropdown(openDropdown === item.id ? null : item.id);
                      } else {
                        scrollToSection(item.id);
                      }
                    }}
                    className={`
                      ${active === item.id ? "active" : ""}
                      ${item.dropdown ? "dropdown-trigger" : ""}
                    `}
                  >
                    <span className="nav-icon">{item.icon}</span>
                    <span className="nav-label">{item.label}</span>
                    {item.dropdown && (
                      <motion.span 
                        className="dropdown-arrow"
                        animate={{ rotate: openDropdown === item.id ? 180 : 0 }}
                      >
                        ▼
                      </motion.span>
                    )}
                  </a>
                </motion.div>

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <AnimatePresence>
                    {openDropdown === item.id && (
                      <motion.ul
                        className="dropdown-menu"
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                      >
                        {item.dropdown.map((dropdownItem) => (
                          <motion.li
                            key={dropdownItem.id}
                            variants={dropdownItemVariants}
                            whileHover={{ x: 5 }}
                          >
                            <a
                              href={`#${dropdownItem.path}`}
                              onClick={(e) => {
                                e.preventDefault();
                                handleDropdownItemClick(item.id, dropdownItem);
                              }}
                              className={activeDropdownItem === dropdownItem.id ? "active" : ""}
                            >
                              <span className="dropdown-icon">{dropdownItem.icon}</span>
                              <span className="dropdown-label">{dropdownItem.label}</span>
                              {activeDropdownItem === dropdownItem.id && (
                                <motion.span 
                                  className="active-indicator"
                                  layoutId="activeDropdown"
                                />
                              )}
                            </a>
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop Resume Button */}
          <motion.a
            href="/resume.pdf"
            className="resume-btn"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="btn-text">Resume</span>
            <span className="btn-icon">📄</span>
          </motion.a>

          {/* Hamburger Menu Button */}
          <motion.div
            className={`hamburger ${menuOpen ? "toggle" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span></span>
            <span></span>
            <span></span>
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="mobile-menu-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            
            <motion.div
              className="mobile-menu"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="mobile-menu-header">
                <h3>Navigation</h3>
                <motion.button
                  className="close-menu"
                  onClick={() => setMenuOpen(false)}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ✕
                </motion.button>
              </div>

              <ul className="mobile-nav-links">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.id}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ 
                      x: 0, 
                      opacity: 1,
                      transition: { delay: index * 0.1 }
                    }}
                  >
                    {item.dropdown ? (
                      <>
                        <div 
                          className="mobile-dropdown-trigger"
                          onClick={() => setOpenDropdown(openDropdown === item.id ? null : item.id)}
                        >
                          <span className="nav-icon">{item.icon}</span>
                          <span className="nav-label">{item.label}</span>
                          <motion.span 
                            className="dropdown-arrow"
                            animate={{ rotate: openDropdown === item.id ? 180 : 0 }}
                          >
                            ▼
                          </motion.span>
                        </div>
                        
                        <AnimatePresence>
                          {openDropdown === item.id && (
                            <motion.ul 
                              className="mobile-dropdown-menu"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                            >
                              {item.dropdown.map((dropdownItem, idx) => (
                                <motion.li
                                  key={dropdownItem.id}
                                  initial={{ x: -20, opacity: 0 }}
                                  animate={{ 
                                    x: 0, 
                                    opacity: 1,
                                    transition: { delay: idx * 0.05 }
                                  }}
                                >
                                  <a
                                    href={`#${dropdownItem.path}`}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      handleDropdownItemClick(item.id, dropdownItem);
                                      setMenuOpen(false);
                                    }}
                                    className={activeDropdownItem === dropdownItem.id ? "active" : ""}
                                  >
                                    <span className="dropdown-icon">{dropdownItem.icon}</span>
                                    <span className="dropdown-label">{dropdownItem.label}</span>
                                  </a>
                                </motion.li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <a
                        href={`#${item.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(item.id);
                        }}
                        className={active === item.id ? "active" : ""}
                      >
                        <span className="nav-icon">{item.icon}</span>
                        <span className="nav-label">{item.label}</span>
                      </a>
                    )}
                  </motion.li>
                ))}
              </ul>

              <div className="mobile-menu-footer">
                <motion.a
                  href="/resume.pdf"
                  className="mobile-resume-btn"
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download Resume
                </motion.a>
                
                <div className="social-links">
                  <a href="https://github.com/Soubhagya-c" target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a href="https://www.linkedin.com/in/soubhagya09" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
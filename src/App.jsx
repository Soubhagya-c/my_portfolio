import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Certification from "./components/Certification";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import "./styles/global.css";
import Internship from "./components/Internship";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>
        <section id="internship">
          <Internship />
        </section>
        
        <section id="education">
          <Education />
        </section>

        <section id="certifications">
          <Certification />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 Soubhagya. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default App;
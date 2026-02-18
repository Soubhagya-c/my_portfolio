import { FaGlobe, FaFlagUsa, FaHome } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import "../styles/languages.css";

const languages = [
  {
    name: "English",
    level: "Professional Working Proficiency",
    icon: <FaFlagUsa />,
    meta: "EN • Business Communication"
  },
  {
    name: "Kannada",
    level: "Native Proficiency",
    icon: <FaHome />,
    meta: "KN • Native Language"
  },
  {
    name: "Telugu",
    level: "Beginner",
    icon: <MdLanguage />,
    meta: "TE • Basic Understanding"
  }
];

export default function Languages() {
  return (
    <section className="languages">
      <div className="languages-header">
        
        <h2>Languages</h2>
      </div>

      <div className="languages-grid">
        {languages.map((lang, index) => (
          <div key={index} className="language-card">
            <div className="language-icon">
              {lang.icon}
            </div>

            <div className="language-content">
              <h3>{lang.name}</h3>
              <p>{lang.level}</p>
              <span className="language-meta">{lang.meta}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
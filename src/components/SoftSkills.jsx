import "../styles/softskills.css";
import { 
  FaUsers, 
  FaLightbulb, 
  FaClock, 
  FaComments, 
  FaCheckCircle, 
  FaSyncAlt 
} from "react-icons/fa";

export default function SoftSkills() {
  return (
    <section className="softskills">
      <h2 className="softskills-title">Soft Skills</h2>

      <div className="softskills-grid">

        <div className="softskill-card">
          <FaUsers className="icon" />
          <h3>Team Collaboration</h3>
          <p>Ability to work effectively in team environments and contribute to shared goals.</p>
        </div>

        <div className="softskill-card">
          <FaLightbulb className="icon" />
          <h3>Problem Solving</h3>
          <p>Strong analytical thinking and structured problem-solving approach.</p>
        </div>

        <div className="softskill-card">
          <FaClock className="icon" />
          <h3>Time Management</h3>
          <p>Efficient in prioritizing tasks and meeting deadlines consistently.</p>
        </div>

        <div className="softskill-card">
          <FaComments className="icon" />
          <h3>Communication</h3>
          <p>Clear verbal and written communication skills for technical discussions.</p>
        </div>

        <div className="softskill-card">
          <FaCheckCircle className="icon" />
          <h3>Attention to Detail</h3>
          <p>Focused on writing clean, maintainable, and high-quality code.</p>
        </div>

        <div className="softskill-card">
          <FaSyncAlt className="icon" />
          <h3>Adaptability</h3>
          <p>Quick learner, adaptable to new technologies and dynamic environments.</p>
        </div>

      </div>
    </section>
  );
}
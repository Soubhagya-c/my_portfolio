import "../styles/contact.css";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section className="contact">
      <h2 className="contact-heading">Contact Me</h2>

      <div className="contact-wrapper">

        {/* LEFT SIDE FORM */}
        <div className="contact-form">
          <h3>Send me a message</h3>

          <form>
            <div className="form-group">
              <label>Name <span>*</span></label>
              <input type="text" placeholder="Your name" required />
            </div>

            <div className="form-group">
              <label>Email <span>*</span></label>
              <input type="email" placeholder="Your email" required />
            </div>

            <div className="form-group">
              <label>Message <span>*</span></label>
              <textarea placeholder="Your message" rows="5" required></textarea>
            </div>

            <button type="submit" className="send-btn">
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT SIDE INFO */}
        <div className="contact-info">
          <h3>Contact Information</h3>

          <div className="info-item">
            <FaMapMarkerAlt />
            <div>
              <strong>Location</strong>
              <p>Bangalore, Karnataka, India</p>
            </div>
          </div>

          <div className="info-item">
            <FaEnvelope />
            <div>
              <strong>Email</strong>
              <p>soubhagyac2001@gmail.com</p>
            </div>
          </div>

          <div className="info-item">
            <FaPhone />
            <div>
              <strong>Phone</strong>
              <p>+91 9019657790</p>
            </div>
          </div>

          <h4 className="connect-title">Connect With Me</h4>

          <div className="connect-buttons">
            <a href="#" className="linkedin">
              <FaLinkedin /> LinkedIn
            </a>

            <a href="#" className="github">
              <FaGithub /> GitHub
            </a>

            <a href="mailto:soubhagyac2001@gmail.com" className="email">
              <FaEnvelope /> Email
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
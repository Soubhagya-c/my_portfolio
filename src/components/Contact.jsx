import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import "../styles/contact.css";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8pqc1en",
        "template_7j3n6jk",
        form.current,
        "hl5uKiFsh9cmUbskG"
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          form.current.reset();
        },
        () => {
          toast.error("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="contact">
      <h2 className="contact-heading">Contact Me</h2>

      <div className="contact-wrapper">

        {/* LEFT SIDE FORM */}
        <div className="contact-form">
          <h3>Send me a message</h3>

          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <label>Name <span>*</span></label>
              <input type="text" name="name" placeholder="Your name" required />
            </div>

            <div className="form-group">
              <label>Email <span>*</span></label>
              <input type="email" name="email" placeholder="Your email" required />
            </div>

            <div className="form-group">
              <label>Message <span>*</span></label>
              <textarea name="message" placeholder="Your message" rows="5" required />
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
            <a href="https://www.linkedin.com/in/soubhagya09/" className="linkedin">
              <FaLinkedin /> LinkedIn
            </a>

            <a href="https://github.com/Soubhagya-c" className="github">
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
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

import "./css/Contact.css";

export default function Contact() {
  return (
    <section className="contact" id="contact" data-aos="zoom-in">

      <h2 className="section-title" id="contact">Contact Me</h2>

<p className="subtitle">
  Feel free to reach out for any opportunities, collaborations, or inquiries.
</p>

      <div className="contact-card">

        <div
      
          className="contact-item"
        >
          <FaEnvelope />
          <span>mohamedyasser7675@gmail.com</span>
        </div>

        <a
          href="tel:01204854126"
          className="contact-item"
        >
          <FaPhone />
          <span>01204830233</span>
        </a>

        <a
          href="https://linkedin.com/in/mohamed-yasser-55a26a418"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
        >
          <FaLinkedin />
          <span>LinkedIn</span>
        </a>

        <a
          href="https://instagram.com/mohamed_y_asser"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
        >
          <FaInstagram />
          <span>instagram</span>
        </a>

      </div>



    </section>
  );
}
import "./css/About.css";

export default function About() {
  return (
    <section className="about" data-aos="fade-right">

      <div className="about-container">

        {/* LEFT SIDE */}
        <div className="about-text">

          <span className="badge">Front-End Developer</span>

          <h2 id="about">About Me</h2>

          <p>
            I'm a <span className="highlight">Front-End Developer</span> specializing in React.js,
            passionate about building modern, responsive, and user-friendly web applications.
          </p>

          <p>
            I graduated in 2024 with a Bachelor's Degree in Management Information Systems (MIS),
            and I focus on writing clean, scalable, and maintainable code.
          </p>



        </div>

      </div>

    </section>
  );
}
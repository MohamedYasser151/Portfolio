import Me from "../assets/projects/me.png";
import "./css/Hero.css";

export default function Hero() {
  return (
    <section className="hero" data-aos="fade-up">

      {/* LEFT SIDE */}
      <div className="hero-content">

        <p className="intro">Hi, I'm</p>

        <h1 className="name">Mohamed Yasser</h1>

        <h2 className="role">
          React Front-End Developer
        </h2>

        <p className="desc">
          I build modern, responsive, and user-friendly web applications using React.js,
          focusing on performance, clean UI, and scalable architecture.
        </p>
<button className="hero-btn" onClick={() => {
  document.getElementById("project")?.scrollIntoView({ behavior: "smooth" });
}}>
  View Projects
</button>

      </div>

      {/* RIGHT SIDE */}
      <div className="hero-image">
        <img src={Me} alt="Mohamed Yasser" />
      </div>

    </section>
  );
}
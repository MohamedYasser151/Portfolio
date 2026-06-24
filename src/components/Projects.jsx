import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

/* LOGOS */
import codekids from "../assets/projects/codekids.png";
import thebest from "../assets/projects/thebest.png";
import alexchem from "../assets/projects/alexchem.png";
import fashionwave from "../assets/projects/fashionwave.png";
import './css/Project.css'
export default function Projects() {
  return (
    <section className="section" data-aos="fade-up">
<h2 className="section-title" id="projects">Projects</h2>
<Swiper
  modules={[Autoplay, Navigation, Pagination]}
  spaceBetween={25}
  loop={true}   
 autoplay={{
  delay: 2000,
  pauseOnMouseEnter: true,
}}
  navigation={{
    nextEl: ".next-arrow",
    prevEl: ".prev-arrow",
  }}
  pagination={{ clickable: true }}

  breakpoints={{
    0: { slidesPerView: 1 },
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
    1440: { slidesPerView: 3 },
  }}
>

        {projects.map((p) => (
          <SwiperSlide key={p.name}>
            <div className="project-card">

              <img src={p.logo} className="project-logo" />

              <h3 className="name">{p.name}</h3>
              <p>{p.desc}</p>

              <div className="tech">
                {p.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>

              <a href={p.live} target="_blank" className="live-btn">
                Live Demo
              </a>

            </div>
          </SwiperSlide>
        ))}

      </Swiper>

      {/* CUSTOM ARROWS */}
      <div className="swiper-nav">
        <div className="prev-arrow">‹</div>
        <div className="next-arrow">›</div>
      </div>
    </section>
  );
}

/* DATA */
const projects = [
  {
    name: "Code Kids",
    desc: "Educational platform for teaching programming to children through interactive lessons and hands-on coding activities.",
    tech: ["React.js", "Node.js", "Express.js", "MySQL", "Bootstrap", "CSS3"],
    live: "https://code-kids-nine.vercel.app/",
    logo: codekids
  },

  {
    name: "The Best",
    desc: "Online voting platform developed for the National Youth Union allowing users to vote for the best young athlete securely.",
    tech: ["React.js", "Node.js", "Express.js", "MySQL", "Bootstrap", "CSS3"],
    live: "https://the-best-eta.vercel.app/",
    logo: thebest
  },

  {
    name: "Alex Chem",
    desc: "Chemical products management web application for organizing and managing product data with a responsive interface.",
    tech: ["React.js", "Node.js", "Express.js", "MySQL", "Bootstrap", "CSS3"],
    live: "https://alex-chem.vercel.app/",
    logo: alexchem
  },

  {
    name: "Fashion Wave",
    desc: "E-commerce web application for fashion products with modern UI and responsive shopping experience.",
    tech: ["React.js", "Node.js", "Express.js", "MySQL", "Bootstrap", "CSS3"],
    live: "https://fashionwave-ten.vercel.app/",
    logo: fashionwave
  }
];
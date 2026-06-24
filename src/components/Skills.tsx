import {
  FaReact,
  FaNodeJs,
  FaGit,
  FaBootstrap,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiFigma,
  SiSass,
} from "react-icons/si";

import './css/Skills.css'

export default function Skills() {
  const skills = [
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3Alt />, name: "CSS3" },
    { icon: <SiJavascript />, name: "JavaScript (ES6+)" },
    { icon: <FaReact />, name: "React.js" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <FaBootstrap />, name: "Bootstrap" },
    { icon: <SiSass />, name: "Sass" },
    { icon: <FaPhp />, name: "PHP" },
    { icon: <FaGit />, name: "Git" },
    { icon: <SiFigma />, name: "Figma UI Design" }
  ];

  return (
    <section className="section" data-aos="fade-right">
      <h2 className="section-title" id="skills">Skills</h2>

      <div className="skills-grid">
        {skills.map((s) => (
          <div className="skill-card" key={s.name}>
            <div className="icon">{s.icon}</div>
            <p>{s.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
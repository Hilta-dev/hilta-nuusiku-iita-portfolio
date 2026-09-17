import React, { useEffect, useState } from "react";
import {
  ArrowUpRight, Code2, Network, Github, Gitlab,
  Mail, Menu, Moon, Server, Sparkles, Sun, X
} from "lucide-react";
import { projects } from "./data/projects";
import { skills } from "./data/skills";
import { learningAreas } from "./data/learning";

const EMAIL = "hiltan004@gmail.com";
const GITHUB = "https://github.com/Hilta-dev";
const GITLAB = "https://gitlab.com/Hilta";

function Navbar({ dark, setDark }) {
  const [open, setOpen] = useState(false);
  const links = ["About", "Skills", "Projects", "Education", "Hackathons", "Learning", "Contact"];

  return (
    <header className="navbar">
      <a className="brand" href="#home" onClick={() => setOpen(false)}>
        <span className="brand-mark">HN</span>
        <span>Hilta Nuusiku Iita</span>
      </a>

      <nav className={open ? "nav-links open" : "nav-links"}>
        {links.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>
            {link}
          </a>
        ))}
      </nav>

      <div className="nav-actions">
        <button className="icon-button" onClick={() => setDark(!dark)} aria-label="Toggle dark mode">
          {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text && <p className="section-lead">{text}</p>}
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="hero section-shell">
      <div className="hero-copy">
        
        <h1>Hilta Nuusiku Iita</h1>
        <h2>Computer Science Student <span>,</span> Aspiring Software Developer</h2>
        <p className="hero-text">
          Building practical software solutions while exploring backend development,
          AI applications, databases, and emerging technologies.
        </p>
        
       

      <div className="hero-visual" aria-hidden="true">
        <div className="orb orb-one" />
        <div className="orb orb-two" />
        <div className="code-window">
          <div className="window-bar"><i /><i /><i /></div>
          <div className="code-lines">
            <span><b>01</b> <em>class</em> Developer &#123;</span>
            <span><b>02</b> &nbsp; <em>String</em> focus = <strong>"build"</strong>;</span>
            <span><b>03</b> &nbsp; <em>String</em> mindset = <strong>"learn"</strong>;</span>
            <span><b>04</b> &nbsp; <em>boolean</em> curious = <strong>true</strong>;</span>
            <span><b>05</b> &#125;</span>
          </div>
        </div>
        
      </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section-shell section">
      <SectionHeading eyebrow="1. About" title="Curious by nature. Practical by approach." />
      <div className="about-grid">
        <div className="about-highlight">
          <span>a)</span>
          <h3>Learn.</h3>
          <span>b)</span>
          <h3>Build.</h3>
          <span>c)</span>
          <h3>Improve.</h3>
        </div>
        <div className="about-text">
          <p>
            I am a Computer Science Student interested in turning what I learn into
            practical software projects. I enjoy exploring how applications work
            behind the scenes, working with data, and finding ways technology can
            solve real problems.
          </p>
          <p>
            My journey is still developing, and I am intentionally building my skills
            through coursework, personal projects, and collaborative experiences such
            as hackathons. I value curiosity, continuous learning, teamwork, and
            creating software that gives me something meaningful to learn from.
          </p>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section-shell section tinted">
      <SectionHeading
        eyebrow="2. Tech Stack"
        title="Tools I work with"
        text="A growing toolkit built through coursework, projects, and hands-on practice."
      />
      <div className="skills-grid">
        {skills.map((skill) => <span className="skill-chip" key={skill}>{skill}</span>)}
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const isProgress = project.status === "In Progress";
  return (
    <article className={`project-card ${project.featured ? "featured" : ""}`}>
      <div className="project-top">
        <span className={`project-status ${isProgress ? "progress" : "complete"}`}>
          <span /> {project.status}
        </span>
        <span className="project-number">{project.featured ? "1" : "2"}</span>
      </div>
      <p className="project-eyebrow">{project.eyebrow}</p>
      <h3>{project.title}</h3>
      <p className="project-description">{project.description}</p>

      <div className="project-details">
        <div>
          <h4>Problem / focus</h4>
          <p>{project.problem}</p>
        </div>
        <div>
          <h4>{isProgress ? "Planned features" : "Key features"}</h4>
          <ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
        </div>
        <div>
          <h4>My contribution</h4>
          <p>{project.contribution}</p>
        </div>
      </div>

      <div className="tech-row">
        {project.technologies.map((tech) => <span key={tech}>{tech}</span>)}
      </div>

      <div className="project-actions">
        <a className="button primary small" href={project.github} target="_blank" rel="noreferrer">
          GitHub <Github size={15} />
        </a>
        {project.demo ? (
          <a className="button secondary small" href={project.demo} target="_blank" rel="noreferrer">
            {project.demoLabel} <ArrowUpRight size={15} />
          </a>
        ) : (
          <span className="link-placeholder">https://github.com/Hilta-dev</span>
        )}
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section id="projects" className="section-shell section">
      <SectionHeading
        eyebrow="3. Featured Projects"
        title="Projects that reflect my learning"
        text="A small but intentional collection. More projects will be added as I build them."
      />
      <div className="projects-grid">
        {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="section-shell section tinted">
      <SectionHeading eyebrow="4. Education" title="Academic foundation" />
      <div className="timeline-card">
        <div className="timeline-icon"><Code2 size={22} /></div>
        <div>
          <p className="eyebrow">Current Education</p>
          <h3>Namibia University of Science and Technology</h3>
          <p>Computer Science (2nd year)</p>
          <span className="muted">Building foundations across programming, databases, systems, and software development.</span>
        </div>
      </div>
    </section>
  );
}

function Hackathons() {
  return (
    <section id="hackathons" className="section-shell section">
      <SectionHeading eyebrow="5. Hackathons & Achievements" title="Learning beyond the classroom" />
      <div className="achievement-card">
        <div className="achievement-icon"><Sparkles size={23} /></div>
        <div>
          <p className="eyebrow">Submitted</p>
          <h3>IBM TechXchange Dev Day 2026</h3>
          <p>
            Participated in the hackathon (solo) experience and developed <strong>CodeSentry</strong>,
            an AI-assisted developer tool focused on code and database-related review.
          </p>
        </div>
        </div>
    </section>
  );
}

function Learning() {
  return (
    <section id="learning" className="section-shell section tinted">
      <SectionHeading
        
        title="What I’m exploring next -> "
        text="Areas I am actively developing my understanding of."
      />
      <div className="learning-grid">
        {learningAreas.map((area, index) => {
          const Icon = [Server, Sparkles, Network, Code2, Github][index];
          return (
            <article className="learning-card" key={area.title}>
              <div className="learning-icon"><Icon size={19} /></div>
              <h3>{area.title}</h3>
              <p>{area.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section-shell section contact-section">
      <div className="contact-card">
        <div>
          <p className="eyebrow">7. Contact</p>
          <h2>Let’s connect.</h2>
          <p>
            I’m always interested in learning, building, and connecting with other
            people in technology.
          </p>
        </div>
        <div className="contact-links">
          <a href={`mailto:${EMAIL}`}><Mail size={18} /><span>{EMAIL}</span><ArrowUpRight size={16} /></a>
          <a href={GITHUB} target="_blank" rel="noreferrer"><Github size={18} /><span>github.com/Hilta-dev</span><ArrowUpRight size={16} /></a>
          <a href={GITLAB} target="_blank" rel="noreferrer"><Gitlab size={18} /><span>gitlab.com/Hilta</span><ArrowUpRight size={16} /></a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="section-shell footer-inner">
        <span>Hilta Nuusiku Iita</span>
        <span>Computer Science Student @NUST,  Namibia</span>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}

export default function App() {
  const [dark, setDark] = useState(() => localStorage.getItem("hilta-theme") === "dark");

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    localStorage.setItem("hilta-theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <>
      <Navbar dark={dark} setDark={setDark} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Hackathons />
        <Learning />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

import ProjectCard from "./ProjectCard.jsx";
import Projects from "./projects.js";
import { useEffect, useState } from "react";
import NightmareScene from "./NightmareScene.jsx";
import Skills from "./Skills.jsx";
import Contact from "./Contact.jsx";
import useGsapAnimations from "./useGsapAnimations.js";
import CustomCursor from "./ketan.jsx";
import useMagnetic from "./useMagnetic.js";
import Footer from "./Footer.jsx";

/* =========================================================
   TYPEWRITER
========================================================= */

function Typewriter({ sketchMode }) {

  const texts = [
    "I build modern web experiences.",
    "I turn ideas into interactive products.",
    "I create websites that feel alive.",
    "I build with JavaScript, React & Node.js.",
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {

    const currentText = texts[textIndex];

    const speed = deleting ? 35 : 70;

    const timer = setTimeout(() => {

      if (!deleting) {

        setDisplayText(
          currentText.substring(
            0,
            displayText.length + 1
          )
        );

        if (
          displayText.length + 1 ===
          currentText.length
        ) {
          setDeleting(true);
        }

      } else {

        setDisplayText(
          currentText.substring(
            0,
            displayText.length - 1
          )
        );

        if (displayText.length === 0) {

          setDeleting(false);

          setTextIndex(
            (prev) =>
              (prev + 1) % texts.length
          );
        }
      }

    }, speed);

    return () => clearTimeout(timer);

  }, [
    displayText,
    deleting,
    textIndex
  ]);

  return (
    <div
      className={`hero-bio ${
        sketchMode
          ? "sketch-text"
          : "nightmare-text"
      }`}
    >
      <span>
        {displayText}
      </span>

      <span className="cursor">
        |
      </span>
    </div>
  );
}


/* =========================================================
   NAVBAR
========================================================= */

function Navbar({ sketchMode, toggleMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${menuOpen ? "menu-open" : ""}`}>

      {/* LOGO */}
      <div className="logo">
        <span className="logo-symbol">
          ◈
        </span>

        <span>
          KETAN
        </span>
      </div>


      {/* DESKTOP LINKS */}
      <div className="nav-links">

        <a className="magnetic" href="#home">HOME</a>

        <a className="magnetic" href="#about">ABOUT</a>

        <a className="magnetic" href="#skills">SKILLS</a>

        <a className="magnetic" href="#projects">PROJECTS</a>

        <a className="magnetic" href="#contact">CONTACT</a>

      </div>


      {/* DESKTOP MODE BUTTON */}
      <button
        className="mode-button"
        onClick={toggleMode}
        aria-label="Toggle portfolio mode"
      >
        <span className="mode-icon">
          {sketchMode ? "✏" : "◉"}
        </span>

        <span className="mode-name">
          {sketchMode ? "SKETCH" : "NIGHTMARE"}
        </span>

        <span className="mode-status" />
      </button>


      {/* MOBILE MENU BUTTON */}
      <button
        className={`menu-toggle ${
          menuOpen ? "active" : ""
        }`}
        onClick={() =>
          setMenuOpen((prev) => !prev)
        }
        aria-label="Toggle navigation"
      >
        <span />
        <span />
        <span />
      </button>


      {/* MOBILE MENU */}
      <div className="mobile-menu">

        <a href="#home" onClick={closeMenu}>
          HOME
        </a>

        <a href="#about" onClick={closeMenu}>
          ABOUT
        </a>

        <a href="#skills" onClick={closeMenu}>
          SKILLS
        </a>

        <a href="#projects" onClick={closeMenu}>
          PROJECTS
        </a>

        <a href="#contact" onClick={closeMenu}>
          CONTACT
        </a>

        <button
          onClick={() => {
            toggleMode();
            closeMenu();
          }}
        >
          {sketchMode ? "✏ SKETCH" : "◉ NIGHTMARE"}
        </button>

      </div>

    </nav>
  );
}

/* =========================================================
   HERO
========================================================= */

function Hero({ sketchMode }) {

  return (

    <section
      id="home"
      className="hero"
    >

      <div className="hero-content hero-visible">

        {/* INTRO */}

        <div className="hero-intro">

          <span className="intro-line" />

          <span className="intro-text">
            HELLO, I'M
          </span>

          <span className="intro-line" />

        </div>


        {/* NAME */}

        <h1
          className="hero-name"
          data-text="KETAN"
        >

          <span className="name-letter">
            K
          </span>

          <span className="name-letter">
            E
          </span>

          <span className="name-letter">
            T
          </span>

          <span className="name-letter">
            A
          </span>

          <span className="name-letter">
            N
          </span>

        </h1>


        {/* ROLE */}

        <div className="hero-role">

          <span>
            SOFTWARE ENGINEER
          </span>

          <span className="role-divider">
            /
          </span>

          <span>
            WEB DEVELOPER
          </span>

        </div>


        {/* TYPEWRITER */}

        <Typewriter
          sketchMode={sketchMode}
        />


        {/* BUTTONS */}

        <div className="hero-actions">

          <a
  href="#projects"
  className="hero-button primary-button magnetic"
>

            <span>
              EXPLORE MY WORLD
            </span>

            <span className="button-arrow">
              →
            </span>

          </a>


          <a
  href="#about"
  className="hero-button secondary-button magnetic"
>
            ABOUT ME
          </a>

        </div>


        {/* SCROLL */}

        <div className="scroll-indicator">

          <span>
            SCROLL TO EXPLORE
          </span>

          <div className="scroll-line">
            <span />
          </div>

        </div>

      </div>

    </section>
  );
}


/* =========================================================
   ABOUT
========================================================= */

function About() {

  return (

    <section
      id="about"
      className="about-section"
    >

      <div className="about-container">

        {/* LABEL */}

        <div className="section-label">

          <span className="section-number">
            01
          </span>

          <span className="section-line" />

          <span>
            ABOUT
          </span>

        </div>


        {/* TITLE */}

        <h2 className="about-title">

          I BUILD

          <span>
            DIGITAL
          </span>

          EXPERIENCES.

        </h2>


        {/* CONTENT */}

        <div className="about-grid">

          {/* DESCRIPTION */}

          <div className="about-description">

            <p className="about-highlight">

              I'm Ketan — a software
              engineer & web developer
              who enjoys turning ideas
              into interactive digital
              experiences.

            </p>


            <p>

              I build modern websites,
              web applications and
              digital products with a
              focus on clean design,
              smooth interactions and
              meaningful user experiences.

            </p>


            <p>

              I enjoy working across
              both frontend and backend
              technologies, constantly
              learning new tools and
              experimenting with creative
              ways to build for the web.

            </p>

          </div>


          {/* INFO */}

          <div className="about-info">

            <div className="info-card">

              <span className="info-number">
                01
              </span>

              <div>

                <h3>
                  DEVELOPMENT
                </h3>

                <p>
                  Building responsive
                  and scalable web
                  applications.
                </p>

              </div>

            </div>


            <div className="info-card">

              <span className="info-number">
                02
              </span>

              <div>

                <h3>
                  INTERACTION
                </h3>

                <p>
                  Creating smooth
                  animations and
                  immersive interfaces.
                </p>

              </div>

            </div>


            <div className="info-card">

              <span className="info-number">
                03
              </span>

              <div>

                <h3>
                  EXPLORATION
                </h3>

                <p>
                  Learning,
                  experimenting and
                  pushing creative ideas.
                </p>

              </div>

            </div>

          </div>

        </div>


        {/* TECHNOLOGIES */}

        <div className="about-tech">

          <div className="tech-heading">
            TECHNOLOGIES I WORK WITH
          </div>

          <div className="tech-list">

            <span>Java</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Node.js</span>
            <span>MongoDB</span>
            <span>Three.js</span>

          </div>

        </div>

      </div>

    </section>
  );
}


/* =========================================================
   PROJECTS
========================================================= */

function ProjectsSection() {

  return (

    <section
      id="projects"
      className="projects-section"
    >

      <div className="projects-container">

        {/* SECTION HEADER */}

        <div className="section-label">

          <span className="section-number">
            03
          </span>

          <span className="section-line" />

          <span>
            SELECTED WORK
          </span>

        </div>


        {/* TITLE */}

        <div className="projects-heading">

          <h2>

            THINGS

            <span>
              I BUILD.
            </span>

          </h2>

          <p>

            A collection of projects,
            experiments and digital
            experiences I've built.

          </p>

        </div>


        {/* PROJECT GRID */}

        <div className="projects-grid">

          {Projects.map((project, index) => (

            <ProjectCard
              key={`${project.title}-${index}`}
              project={project}
              index={index}
            />

          ))}

        </div>


        {/* FOOTER */}

        <div className="projects-footer">

          <span>
            MORE PROJECTS IN DEVELOPMENT
          </span>

          <span>
            03 / 04
          </span>

        </div>

      </div>

    </section>
  );
}


/* =========================================================
   APP
========================================================= */

function App() {

  const [sketchMode, setSketchMode] =
    useState(false);
      useGsapAnimations();
      useMagnetic();

  /* =======================================================
     MODE TOGGLE
  ======================================================= */

  const toggleMode = () => {

    setSketchMode(
      (previous) => !previous
    );

  };


  /* =======================================================
     MAIN RETURN
  ======================================================= */

  return (

    <main
      className={`portfolio ${
        sketchMode
          ? "sketch-mode"
          : "nightmare-mode"
      }`}
    >
      <CustomCursor />

      {/* =================================================
          3D BACKGROUND
      ================================================= */}

      <div className="scene-layer">

        <NightmareScene
          sketchMode={sketchMode}
        />

      </div>


      {/* =================================================
          NAVBAR
      ================================================= */}

      <Navbar
        sketchMode={sketchMode}
        toggleMode={toggleMode}
      />


      {/* =================================================
          HERO
      ================================================= */}

      <Hero
        sketchMode={sketchMode}
      />


      {/* =================================================
          ABOUT
      ================================================= */}

      <About />


      {/* =================================================
          SKILLS
      ================================================= */}

      <Skills
        sketchMode={sketchMode}
      />


      {/* =================================================
          PROJECTS
      ================================================= */}

      <ProjectsSection />


      {/* =================================================
          CONTACT
      ================================================= */}

      <Contact
        sketchMode={sketchMode}
      />
        <Footer
  sketchMode={sketchMode}
/>

      {/* =================================================
          CORNER INFO
      ================================================= */}

      <div className="corner-info top-left">

        <span>
          01
        </span>

        <span>
          / PORTFOLIO
        </span>

      </div>


      <div className="corner-info bottom-right">

        <span>
          INDIA
        </span>

        <span>
          / 2026
        </span>

      </div>

    </main>
  );
}


/* =========================================================
   EXPORT
========================================================= */

export default App;
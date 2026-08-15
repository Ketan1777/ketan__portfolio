
function Footer({ sketchMode }) {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className={`footer-section ${
        sketchMode
          ? "sketch-footer"
          : "nightmare-footer"
      }`}
    >

      <div className="footer-container">

        {/* TOP LINE */}

        <div className="footer-top">

          <span>
            KETAN
          </span>

          <span>
            SOFTWARE ENGINEER / WEB DEVELOPER
          </span>

        </div>


        {/* MAIN */}

        <div className="footer-main">

          <h2>
            LET'S BUILD
            <span>
              SOMETHING.
            </span>
          </h2>

          <button
            className="footer-top-button"
            onClick={scrollToTop}
          >
            BACK TO TOP
            <span>↑</span>
          </button>

        </div>


        {/* LINKS */}

        <div className="footer-links">

          <div className="footer-group">

            <span className="footer-label">
              NAVIGATION
            </span>

            <a href="#home">
              HOME
            </a>

            <a href="#about">
              ABOUT
            </a>

            <a href="#skills">
              SKILLS
            </a>

            <a href="#projects">
              PROJECTS
            </a>

            <a href="#contact">
              CONTACT
            </a>

          </div>


          <div className="footer-group">

            <span className="footer-label">
              SOCIAL
            </span>

            <a
              href="https://github.com/Ketan1777"
              target="_blank"
              rel="noopener noreferrer"
            >
              GITHUB ↗
            </a>

            <a
              href="https://www.linkedin.com/in/ketan-tiwari-70b07a2a6"
              target="_blank"
              rel="noopener noreferrer"
            >
              LINKEDIN ↗
            </a>

            <a
              href="https://www.instagram.com/prime_ketan_17"
              target="_blank"
              rel="noopener noreferrer"
            >
              INSTAGRAM ↗
            </a>

          </div>


          <div className="footer-group">

            <span className="footer-label">
              CONTACT
            </span>

            <a href="mailto:ketantiwarii86@gmail.com">
              ketantiwarii86@gmail.com
            </a>

          </div>

        </div>


        {/* BOTTOM */}

        <div className="footer-bottom">

          <span>
            © 2026 KETAN. ALL RIGHTS RESERVED.
          </span>

          <span>
            MADE WITH REACT + GSAP
          </span>

        </div>

      </div>

    </footer>
  );
}

export default Footer;



import { useEffect, useRef } from "react";
import gsap from "gsap";

function ProjectCard({ project, index }) {

  const cardRef = useRef(null);

  useEffect(() => {

    const card = cardRef.current;

    if (!card) return;

    const handleMouseMove = (event) => {

      const rect = card.getBoundingClientRect();

      const x =
        event.clientX - rect.left;

      const y =
        event.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX =
        ((y - centerY) / centerY) * -4;

      const rotateY =
        ((x - centerX) / centerX) * 4;

      gsap.to(card, {
        rotateX,
        rotateY,
        duration: 0.35,
        ease: "power2.out",
        transformPerspective: 1000,
      });

    };

    const handleMouseLeave = () => {

      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.6,
        ease: "power3.out",
      });

    };

    card.addEventListener(
      "mousemove",
      handleMouseMove
    );

    card.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    return () => {

      card.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      card.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );

    };

  }, []);


  if (!project) return null;


  return (

    <article
      ref={cardRef}
      className="project-card"
      style={{
        "--card-index": index,
      }}
    >

      {/* GLOW */}

      <div className="project-card-glow" />


      {/* NUMBER */}

      <div className="project-card-number">

        {project.number || `0${index + 1}`}

      </div>


      {/* CONTENT */}

      <div className="project-card-content">

        <div className="project-card-top">

          <span className="project-card-index">
            PROJECT {project.number || `0${index + 1}`}
          </span>

          <span className="project-card-status">
            ●
          </span>

        </div>


        {/* TITLE */}

        <h3 className="project-card-title">

          {project.title}

        </h3>


        {/* DESCRIPTION */}

        <p className="project-card-description">

          {project.description}

        </p>


        {/* TECHNOLOGIES */}

        {project.tech?.length > 0 && (

          <div className="project-tech">

            {project.tech.map(
              (tech, techIndex) => (

                <span
                  key={`${tech}-${techIndex}`}
                >
                  {tech}
                </span>

              )
            )}

          </div>

        )}


        {/* LINK */}

        <div className="project-card-bottom">

          {project.link &&
          project.link !== "#" ? (

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link magnetic"
            >

              <span>
                VIEW PROJECT
              </span>

              <span className="project-arrow">
                ↗
              </span>

            </a>

          ) : (

            <span
              className="project-link project-link-disabled"
            >

              <span>
                COMING SOON
              </span>

              <span className="project-arrow">
                ↗
              </span>

            </span>

          )}

        </div>

      </div>

    </article>

  );

}

export default ProjectCard;


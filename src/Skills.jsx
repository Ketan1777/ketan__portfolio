import { useEffect, useRef } from "react";
import SkillsData from "./skills.js";

function Skills({ sketchMode }) {

  const sectionRef = useRef(null);

  useEffect(() => {

    const section = sectionRef.current;

    if (!section) return;

    const cards =
      section.querySelectorAll(".skill-card");

    const handleMouseMove = (event) => {

      cards.forEach((card) => {

        const rect =
          card.getBoundingClientRect();

        const x =
          event.clientX - rect.left;

        const y =
          event.clientY - rect.top;

        const centerX =
          rect.width / 2;

        const centerY =
          rect.height / 2;

        const rotateX =
          ((y - centerY) / centerY) * -4;

        const rotateY =
          ((x - centerX) / centerX) * 4;

        card.style.setProperty(
          "--rotate-x",
          `${rotateX}deg`
        );

        card.style.setProperty(
          "--rotate-y",
          `${rotateY}deg`
        );

      });
    };

    const handleMouseLeave = () => {

      cards.forEach((card) => {

        card.style.setProperty(
          "--rotate-x",
          "0deg"
        );

        card.style.setProperty(
          "--rotate-y",
          "0deg"
        );

      });
    };

    section.addEventListener(
      "mousemove",
      handleMouseMove
    );

    section.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    return () => {

      section.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      section.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );

    };

  }, []);

  return (

    <section
      id="skills"
      ref={sectionRef}
      className={`skills-section ${
        sketchMode
          ? "skills-sketch"
          : "skills-nightmare"
      }`}
    >

      <div className="skills-container">

        {/* HEADER */}

        <div className="section-label">

          <span className="section-number">
            02
          </span>

          <span className="section-line" />

          <span>
            SKILLS
          </span>

        </div>


        {/* TITLE */}

        <div className="skills-heading">

          <h2>

            WHAT I
            <span>
              WORK WITH.
            </span>

          </h2>

          <p>
            Technologies and tools I use
            to turn ideas into digital
            experiences.
          </p>

        </div>


        {/* SKILLS GRID */}

        <div className="skills-grid">

          {SkillsData.map((group) => (

            <article
              className="skill-card"
              key={group.category}
            >

              {/* CARD TOP */}

              <div className="skill-card-top">

                <span className="skill-number">
                  {group.number}
                </span>

                <span className="skill-category">
                  {group.category}
                </span>

              </div>


              {/* SKILLS */}

              <div className="skill-list">

                {group.skills.map(
                  (skill, index) => (

                    <div
                      className="skill-item"
                      key={skill}
                    >

                      <span className="skill-index">
                        {String(index + 1).padStart(
                          2,
                          "0"
                        )}
                      </span>

                      <span className="skill-name">
                        {skill}
                      </span>

                      <span className="skill-arrow">
                        ↗
                      </span>

                    </div>

                  )
                )}

              </div>


              {/* CARD FOOTER */}

              <div className="skill-card-footer">

                <span>
                  {group.skills.length} SKILLS
                </span>

                <span>
                  ●
                </span>

              </div>

            </article>

          ))}

        </div>


        {/* BOTTOM STATEMENT */}

        <div className="skills-footer">

          <span>
            CONSTANTLY LEARNING.
          </span>

          <span>
            ALWAYS BUILDING.
          </span>

        </div>

      </div>

    </section>
  );
}

export default Skills;

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function useGsapAnimations() {

  useLayoutEffect(() => {

    const ctx = gsap.context(() => {

      /* =====================================================
         ABOUT SECTION
      ===================================================== */

      gsap.from(".about-section .section-label", {
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 80%",
          once: true,
        },

        opacity: 0,
        x: -60,
        duration: 1,
        ease: "power3.out",
      });


      gsap.from(".about-title", {
        scrollTrigger: {
          trigger: ".about-title",
          start: "top 85%",
          once: true,
        },

        opacity: 0,
        y: 70,
        duration: 1.1,
        ease: "power3.out",
      });


      gsap.from(".about-description p", {
        scrollTrigger: {
          trigger: ".about-description",
          start: "top 80%",
          once: true,
        },

        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });


      gsap.from(".info-card", {
        scrollTrigger: {
          trigger: ".about-info",
          start: "top 80%",
          once: true,
        },

        opacity: 0,
        x: 60,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });


      /* =====================================================
         TECHNOLOGIES
      ===================================================== */

      gsap.from(".about-tech", {
        scrollTrigger: {
          trigger: ".about-tech",
          start: "top 85%",
          once: true,
        },

        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
      });


      gsap.from(".tech-list span", {
        scrollTrigger: {
          trigger: ".tech-list",
          start: "top 85%",
          once: true,
        },

        opacity: 0,
        y: 20,
        scale: 0.8,
        duration: 0.5,
        stagger: 0.08,
        ease: "back.out(1.7)",
      });


      /* =====================================================
         SKILLS
      ===================================================== */

      gsap.from("#skills .section-label", {
        scrollTrigger: {
          trigger: "#skills",
          start: "top 80%",
          once: true,
        },

        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: "power3.out",
      });


      gsap.from("#skills h2", {
        scrollTrigger: {
          trigger: "#skills",
          start: "top 75%",
          once: true,
        },

        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out",
      });


      gsap.from(
        "#skills .skill-card, #skills .skill-item",
        {
          scrollTrigger: {
            trigger: "#skills",
            start: "top 70%",
            once: true,
          },

          opacity: 0,
          y: 50,
          scale: 0.9,
          duration: 0.7,
          stagger: 0.08,
          ease: "back.out(1.4)",
        }
      );


      /* =====================================================
         PROJECTS
      ===================================================== */

      gsap.from(".projects-section .section-label", {
        scrollTrigger: {
          trigger: ".projects-section",
          start: "top 80%",
          once: true,
        },

        opacity: 0,
        x: -60,
        duration: 0.9,
        ease: "power3.out",
      });


      gsap.from(".projects-heading h2", {
        scrollTrigger: {
          trigger: ".projects-heading",
          start: "top 80%",
          once: true,
        },

        opacity: 0,
        y: 70,
        duration: 1,
        ease: "power3.out",
      });


      gsap.from(".projects-heading p", {
        scrollTrigger: {
          trigger: ".projects-heading",
          start: "top 80%",
          once: true,
        },

        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.15,
        ease: "power3.out",
      });


      /* =====================================================
         PROJECT CARDS
      ===================================================== */

      gsap.from(".project-card", {
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 80%",
          once: true,
        },

        opacity: 0,
        y: 100,
        rotateX: 12,
        scale: 0.92,
        duration: 1,
        stagger: 0.18,
        ease: "power3.out",
      });


      /* =====================================================
         PROJECT FOOTER
      ===================================================== */

      gsap.from(".projects-footer", {
        scrollTrigger: {
          trigger: ".projects-footer",
          start: "top 90%",
          once: true,
        },

        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
      });


      /* =====================================================
         CONTACT
      ===================================================== */

      gsap.from("#contact .section-label", {
        scrollTrigger: {
          trigger: "#contact",
          start: "top 80%",
          once: true,
        },

        opacity: 0,
        x: -60,
        duration: 0.9,
        ease: "power3.out",
      });


      gsap.from(
        "#contact h2, #contact .contact-title",
        {
          scrollTrigger: {
            trigger: "#contact",
            start: "top 75%",
            once: true,
          },

          opacity: 0,
          y: 80,
          duration: 1.1,
          ease: "power3.out",
        }
      );


      gsap.from(
        "#contact .contact-card, #contact .contact-info, #contact form",
        {
          scrollTrigger: {
            trigger: "#contact",
            start: "top 70%",
            once: true,
          },

          opacity: 0,
          y: 60,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
        }
      );


      /* =====================================================
         REFRESH SCROLLTRIGGER
      ===================================================== */

      ScrollTrigger.refresh();

    });

    return () => ctx.revert();

  }, []);

}

export default useGsapAnimations;


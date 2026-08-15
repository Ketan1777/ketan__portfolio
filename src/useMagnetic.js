
import { useEffect } from "react";
import gsap from "gsap";

function useMagnetic() {

  useEffect(() => {

    // Disable magnetic effect on mobile/touch devices
    if (
      window.matchMedia("(hover: none)").matches ||
      window.innerWidth < 768
    ) {
      return;
    }

    const elements = document.querySelectorAll(
      ".magnetic"
    );

    const handlers = [];

    elements.forEach((element) => {

      const moveHandler = (event) => {

        const rect =
          element.getBoundingClientRect();

        const x =
          event.clientX -
          (rect.left + rect.width / 2);

        const y =
          event.clientY -
          (rect.top + rect.height / 2);

        gsap.to(element, {
          x: x * 0.25,
          y: y * 0.25,
          duration: 0.4,
          ease: "power3.out",
        });

      };

      const leaveHandler = () => {

        gsap.to(element, {
          x: 0,
          y: 0,
          duration: 0.6,
          ease: "elastic.out(1, 0.4)",
        });

      };

      element.addEventListener(
        "mousemove",
        moveHandler
      );

      element.addEventListener(
        "mouseleave",
        leaveHandler
      );

      handlers.push({
        element,
        moveHandler,
        leaveHandler,
      });

    });

    return () => {

      handlers.forEach(
        ({
          element,
          moveHandler,
          leaveHandler,
        }) => {

          element.removeEventListener(
            "mousemove",
            moveHandler
          );

          element.removeEventListener(
            "mouseleave",
            leaveHandler
          );

        }
      );

    };

  }, []);

}

export default useMagnetic;


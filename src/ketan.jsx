import { useEffect, useRef } from "react";
import gsap from "gsap";

function CustomCursor() {
  const cursor = useRef(null);
  const cursorDot = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      gsap.to(cursor.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.35,
        ease: "power3.out",
      });

      gsap.to(cursorDot.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.08,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener(
        "mousemove",
        moveCursor
      );
    };
  }, []);

  return (
    <>
      <div
        ref={cursor}
        className="custom-cursor"
      />

      <div
        ref={cursorDot}
        className="custom-cursor-dot"
      />
    </>
  );
}

export default CustomCursor;
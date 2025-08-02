// ScrambledText.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import "./ScrambledText.css";

gsap.registerPlugin(SplitText, ScrambleTextPlugin);

const ScrambledText = ({
  as: Tag = "h2", // dynamic tag
  radius = 100,
  duration = 1.2,
  speed = 0.5,
  scrambleChars = ".:",
  className = "",
  style = {},
  children,
}) => {
  const rootRef = useRef(null);
  const charsRef = useRef([]);

  useEffect(() => {
    if (!rootRef.current) return;

    const el = rootRef.current.querySelector("h1, h2, h3, h4, h5, h6");
    const split = SplitText.create(el, {
      type: "chars",
      charsClass: "char",
    });

    charsRef.current = split.chars;
    charsRef.current.forEach((c) => {
      gsap.set(c, {
        display: "inline-block",
        attr: { "data-content": c.innerHTML },
      });
    });

    const handleMove = (e) => {
      charsRef.current.forEach((c) => {
        const { left, top, width, height } = c.getBoundingClientRect();
        const dx = e.clientX - (left + width / 2);
        const dy = e.clientY - (top + height / 2);
        const dist = Math.hypot(dx, dy);

        if (dist < radius) {
          gsap.to(c, {
            overwrite: true,
            duration: duration * (1 - dist / radius),
            scrambleText: {
              text: c.dataset.content || "",
              chars: scrambleChars,
              speed,
            },
            ease: "none",
          });
        }
      });
    };

    const container = rootRef.current;
    container.addEventListener("pointermove", handleMove);

    return () => {
      container.removeEventListener("pointermove", handleMove);
      split.revert();
    };
  }, [radius, duration, speed, scrambleChars]);

  return (
    <div ref={rootRef} className={`text-block ${className}`} style={style}>
      <Tag className="scramble-heading bebas">{children}</Tag>
    </div>
  );
};

export default ScrambledText;

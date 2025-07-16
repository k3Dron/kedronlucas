import React from "react";

const Button = ({ text = "Click Me", Icon, scrollToId }) => {
  const handleClick = (e) => {
    e.preventDefault(); // Prevent default link behavior if any

    if (typeof window !== "undefined" && scrollToId) {
      const target = document.getElementById(scrollToId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.pushState(null, "", `#${scrollToId}`); // Optional: updates the URL
      }
    }
  };

  return (
    <button
      onClick={handleClick}
      className="relative overflow-hidden group rounded-full p1px font-semibold transition-all"
    >
      {/* Animated gradient border */}
      <span className="absolute inset-0 z-0 rounded-full p-[2px] bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 animate-border" />

      {/* Inner content */}
      <span className="relative z-10 flex items-center gap-2 rounded-full bg-white text-black group-hover:bg-black group-hover:text-white transition-all duration-300 pbutton">
        {Icon && <Icon className="w-5 h-5 transition-colors duration-300" />}
        <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "25px" }}>
          {text}
        </span>
      </span>
    </button>
  );
};

export default Button;

import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Typing animation state
  const fullText = "Healing Minds, Restoring Balance.";
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  const links = ["Home", "About", "Services", "Contact"];

  const toggleMenu = () => setIsOpen(!isOpen);

  // ⭐ Typing Animation Effect
  useEffect(() => {
    const typingSpeed = isDeleting ? 180 : 240;
    const timeout = setTimeout(() => {
      setDisplayedText(fullText.substring(0, index));

      if (!isDeleting && index < fullText.length) {
        setIndex(index + 1);
      } else if (isDeleting && index > 0) {
        setIndex(index - 1);
      } else if (index === fullText.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (index === 0 && isDeleting) {
        setIsDeleting(false);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  // ⭐ Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      links.forEach((link) => {
        const section = document.getElementById(link.toLowerCase());
        if (section) {
          if (
            scrollPosition >= section.offsetTop &&
            scrollPosition < section.offsetTop + section.offsetHeight
          ) {
            setActiveSection(link.toLowerCase());
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="w-full bg-gray-900 dark:bg-gray-950 text-white shadow-md fixed top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">

        {/* LOGO + Typing Animation */}
        <h1
          className="text-2xl font-bold text-white cursor-pointer hover:text-blue-600 transition duration-300 text-center"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          MASHELE THERAPEUTIC SERVICE

          <span className="block text-sm font-semibold text-green-400 mt-0 transition duration-300">
            {displayedText}
            <span className="blinking-cursor">|</span>
          </span>
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-lg">
          {links.map((link) => (
            <li key={link} className="relative group">
              <a
                href={`#${link.toLowerCase()}`}
                className={`transition duration-300 ${
                  activeSection === link.toLowerCase()
                    ? "text-blue-600 font-bold"
                    : "text-white hover:text-blue-600"
                }`}
              >
                {link}
              </a>

              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-blue-600 transition-all duration-300 ${
                  activeSection === link.toLowerCase()
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              ></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-3xl cursor-pointer hover:text-blue-600 transition duration-300"
          onClick={toggleMenu}
        >
          ☰
        </div>
      </div>

      {/* Mobile Slide-In Menu */}
      <div
        className={`
          md:hidden fixed top-0 right-0 h-half bg-white shadow-lg
          w-1/2 transition-transform duration-300
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <ul className="flex flex-col items-center gap-6 py-6">
          {links.map((link) => (
            <li
              key={link}
              className={`text-lg transition duration-300 ${
                activeSection === link.toLowerCase()
                  ? "text-blue-600 font-bold"
                  : "text-gray-700 hover:text-blue-600 hover:scale-105"
              }`}
            >
              <a href={`#${link.toLowerCase()}`} onClick={() => setIsOpen(false)}>
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Cursor Animation */}
      <style>
        {`
          .blinking-cursor {
            display: inline-block;
            margin-left: 2px;
            width: 1px;
            background-color: white;
            animation: blink 0.7s infinite;
          }

          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;

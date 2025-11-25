import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const links = ["Home", "About", "Services", "Contact"];

  const toggleMenu = () => setIsOpen(!isOpen);

  // Scroll listener to set active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // offset for navbar height
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
    <nav className="w-full bg-yellow-200 shadow-md fixed top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-700 cursor-pointer hover:text-blue-800 transition duration-300">
          PP Mashele Social Worker
        </h1>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 text-lg text-gray-700">
          {links.map((link) => (
            <li key={link} className="relative group">
              <a
                href={`#${link.toLowerCase()}`}
                className={`transition duration-300 scale-105 ${
                  activeSection === link.toLowerCase()
                    ? "text-blue-600 font-bold"
                    : "hover:text-blue-600"
                }`}
              >
                {link}
              </a>
              <span
                className={`absolute left-0 -bottom-1 w-0.5 h-0.5 bg-blue-600 transition-all ${
                  activeSection === link.toLowerCase() ? "w-full" : "group-hover:w-full"
                }`}
              ></span>
            </li>
          ))}
        </ul>

        {/* Mobile menu icon */}
        <div
          className="md:hidden text-3xl cursor-pointer hover:text-blue-600 transition duration-300"
          onClick={toggleMenu}
        >
          ☰
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="md:hidden bg-white w-full shadow-md flex flex-col items-center gap-6 py-4">
          {links.map((link) => (
            <li
              key={link}
              className={`text-lg transition duration-300 hover:scale-105 ${
                activeSection === link.toLowerCase() ? "text-blue-600 font-bold" : "text-gray-700 hover:text-blue-600"
              }`}
            >
              <a href={`#${link.toLowerCase()}`} onClick={() => setIsOpen(false)}>
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

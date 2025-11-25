import React from "react";
import bgImage from "../assets/images/background.jpg"; // your background image

const Home: React.FC = () => (
  <section
    id="home"
    className="h-screen flex flex-col justify-center items-center text-center px-6 bg-cover bg-center relative"
    style={{ backgroundImage: `url(${bgImage})` }}
  >
    {/* Overlay for better text readability */}
    <div className="absolute inset-0 bg-black bg-opacity-40"></div>

    <div className="relative z-10 max-w-3xl">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
        Compassionate Support for Your Well-Being
      </h1>
      <p className="text-lg md:text-2xl text-white/90 mb-6">
        Professional social work services for individuals, families, and children.
      </p>
      <button
        onClick={() => {
          const contactSection = document.getElementById("contact");
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
        className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
      >
        Contact Me
      </button>
    </div>
  </section>
);

export default Home;

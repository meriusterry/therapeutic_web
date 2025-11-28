import React from "react";
import bgImage from "../assets/images/background.jpg"; // your background image

const Home: React.FC = () => (
  <section
    id="home"
    className="h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden"
    style={{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    {/* Overlay with subtle zoom on desktop */}
    <div className="absolute inset-0 bg-black bg-opacity-40 md:animate-zoom"></div>

    <div className="relative z-10 max-w-3xl space-y-6">
      {/* Main heading with fade + slide + subtle scale */}
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fadeInUpScale">
        Compassionate Support for Your Well-Being
      </h1>

      {/* Subtext with delayed fade and slide */}
      <p className="text-lg md:text-2xl text-white/90 animate-fadeInUpScale delay-200">
       Professional social work services with care, empathy, and guidance for individuals, families, and children, helping you navigate life’s challenges and thrive.

      </p>

      {/* Button with bounce + hover animation */}
      <button
        onClick={() => {
          const contactSection = document.getElementById("contact");
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
        className="bg-green-500 text-white px-8 py-3 rounded-lg text-lg hover:bg-green-700 transform hover:scale-110 transition duration-500 animate-bounceIn delay-400"
      >
        Contact Me
      </button>
    </div>

    {/* Tailwind animations */}
    <style>
      {`
        /* Fade in and slide up with scale */
        @keyframes fadeInUpScale {
          0% { opacity: 0; transform: translateY(30px) scale(3); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-fadeInUpScale {
          animation: fadeInUpScale 4s ease forwards;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }

        /* Bounce effect for button */
        @keyframes bounceIn {
          0% { opacity: 0; transform: scale(0.3); }
          50% { opacity: 1; transform: scale(1.1); }
          70% { transform: scale(0.95); }
          100% { transform: scale(1); }
        }
        .animate-bounceIn {
          animation: bounceIn 0.8s ease forwards;
        }

        /* Subtle zoom for background overlay */
        @keyframes zoom {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        .animate-zoom {
          animation: zoom 20s ease-in-out infinite;
        }

        /* Mobile background adjustments */
        @media (max-width: 767px) {
          section {
            background-size: contain;  
            background-repeat: no-repeat;
          }
        }
      `}
    </style>
  </section>
);

export default Home;

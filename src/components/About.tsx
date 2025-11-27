import React from "react";

const About: React.FC = () => (
  <section
    id="about"
    className="py-20 px-6 bg-gray-50 dark:bg-gray-900"
  >
    <div
      className="
        max-w-5xl mx-auto text-center 
        bg-white dark:bg-gray-800 
        rounded-2xl p-10 shadow-xl relative overflow-hidden 
        transform transition duration-500 hover:shadow-2xl hover:-translate-y-1
        animate-fadeInUp
      "
    >
      {/* Left reflective gradient */}
      <div className="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-blue-400/20 to-transparent pointer-events-none animate-gradientSlide"></div>

      <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6 animate-fadeInUp delay-100">
        About us
      </h2>

      <p className="text-lg text-gray-700 dark:text-gray-300 leading-8 mb-6 animate-fadeInUp delay-200">
        Mashele Therapeutic Services is a mental-health practice committed to providing compassionate and 
        confidential support for individuals, teens, students, and organisations. 
        We offer both in-person and online counselling, making quality emotional support accessible and flexible.
        <br /><br />
       Our work focuses on promoting emotional wellness, guiding clients through stress, 
       anxiety, depression, trauma, grief, and personal life challenges. We also provide specialised Teen 
       & Student Counselling, as well as Employee Wellness and EAP-related services that strengthen workplace 
       wellbeing.  
        <br /><br />
        We believe in holistic, ethical, and client-centred practice, supporting each person with respect,
        empathy, and evidence-based interventions.
        <br /><br />
       Healing Minds. Restoring Balance. .
      </p>

      
    </div>

    {/* Tailwind animations */}
    <style>
      {`
        /* Fade in and slide up */
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease forwards;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }

        /* Left gradient slide animation */
        @keyframes gradientSlide {
          0% { left: -10%; }
          50% { left: 0; }
          100% { left: -10%; }
        }
        .animate-gradientSlide {
          animation: gradientSlide 5s ease-in-out infinite;
        }
      `}
    </style>
  </section>
);

export default About;

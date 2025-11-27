import React, { useState } from "react";

// Import your images
import individualImg from "../assets/images/individualpic.jpeg";
import coupleImg from "../assets/images/couple.jpg";
import teenImg from "../assets/images/teenpic.jpeg";
import stressImg from "../assets/images/stressetc.png";
import traumaImg from "../assets/images/traumac.jpg";
import psychosocialImg from "../assets/images/psychologysup.jpg";
import wellnessImg from "../assets/images/wellness.jpg";
import workplaceImg from "../assets/images/wellness.jpg";
import chronicImg from "../assets/images/medication.jpg";

interface Service {
  title: string;
  img: string;
  price: string;
  description: string;
}

const services: Service[] = [
  {
    title: "Individual Counseling",
    img: individualImg,
    price: "R500 / session",
    description:
      "One-on-one therapeutic support focused on emotional well-being, mental health, and personal growth."
  },
  {
    title: "Couple Counseling",
    img: coupleImg,
    price: "R750 / session",
    description:
      "Support for couples to improve communication, resolve conflict, and build stronger relationships."
  },
  {
    title: "Teen & Student Counseling",
    img: teenImg,
    price: "R350 / session",
    description:
      "Guidance for young people facing emotional, academic, social, or behavioral challenges."
  },
  
  {
    title: "Trauma & Grief Counseling",
    img: traumaImg,
    price: "R500 / session",
    description:
      "Professional support to navigate loss, traumatic events, and emotional wounds."
  },
  {
    title: "Psychosocial Support",
    img: psychosocialImg,
    price: "R500 / session",
    description:
      "Holistic support addressing emotional, social, and psychological well-being."
  },
  {
    title: "Wellness & Personal Development",
    img: wellnessImg,
    price: "R600 / session",
    description:
      "Coaching and therapeutic guidance to help clients grow, heal, and achieve personal goals."
  },
  {
    title: "Workplace Wellness Programmes",
    img: workplaceImg,
    price: "R600 / session",
    description:
      "Employee well-being sessions, conflict resolution, burnout prevention, and workplace support."
  },
  {
    title: "Stress, Anxiety & Depression Support",
    img: stressImg,
    price: "R500 / session",
    description:
      "Therapeutic interventions aimed at reducing stress, managing anxiety, and improving mental wellness."
  },
  {
    title: "Support for Chronic Treatment Clients",
    img: chronicImg,
    price: "R500 / session",
    description:
      "Emotional and psychosocial support for clients undergoing chronic medical treatment."
  }
];

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section id="services" className="py-20 px-6 bg-gradient-to-b from-blue-100 via-blue-50 to-white">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 animate-fadeInUp">
        Services Offered
      </h2>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {services.map((service, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedService(service)}
            className="cursor-pointer relative group rounded-2xl overflow-hidden shadow-md transform transition duration-500 hover:scale-105 hover:shadow-2xl animate-fadeInUp"
     
            style={{ animationDelay: `${idx * 200}ms` }}
          >
            <div className="bg-gradient-to-tr from-blue-100 to-teal-200 p-6 flex justify-center items-center">
              <img src={service.img} alt={service.title} className="w-full h-full object-contain rounded-xl" />
            </div>
            <div className="p-6 text-center">
              <p className="text-lg md:text-xl text-gray-800 font-semibold">{service.title}</p>
              <p className="text-blue-600 font-medium mt-2">View Details </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 animate-fadeIn"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-white dark:bg-gray-900 p-4 rounded-2xl max-w-sm w-3/4 shadow-2xl animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100 mb-4">
              {selectedService.title}
            </h3>

            <img
              src={selectedService.img}
              alt={selectedService.title}
              className="w-full h-56 object-cover rounded-xl mb-4"
            />

            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-center mb-4">
              {selectedService.description}
            </p>

            <p className="text-xl font-semibold text-blue-600 text-center mb-6">
              {selectedService.price}
            </p>

            <button
              onClick={() => setSelectedService(null)}
              className="w-full bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Animations */}
      <style>
        {`
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(40px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.8s ease forwards;
          }

          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
          .animate-fadeIn {
            animation: fadeIn 0.4s ease forwards;
          }

          @keyframes scaleUp {
            0% { transform: scale(0.7); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
          .animate-scaleUp {
            animation: scaleUp 0.35s ease forwards;
          }
        `}
      </style>
    </section>
  );
};

export default Services;

import React from "react";

// Import your images
import individualImg from "../assets/images/individual.jpg";
import coupleImg from "../assets/images/couple.jpg";
import teenImg from "../assets/images/individual.jpg";
import stressImg from "../assets/images/individual.jpg";
import traumaImg from "../assets/images/individual.jpg";
import psychosocialImg from "../assets/images/individual.jpg";
import wellnessImg from "../assets/images/individual.jpg";
import workplaceImg from "../assets/images/individual.jpg";
import chronicImg from "../assets/images/individual.jpg";

interface Service {
  title: string;
  img: string;
}

const services: Service[] = [
  { title: "Individual Counseling", img: individualImg },
  { title: "Couple Counseling", img: coupleImg },
  { title: "Teen & Student Counseling", img: teenImg },
  { title: "Stress, Anxiety & Depression Support", img: stressImg },
  { title: "Trauma & Grief Counseling", img: traumaImg },
  { title: "Psychosocial Support", img: psychosocialImg },
  { title: "Wellness & Personal Development", img: wellnessImg },
  { title: "Workplace Wellness Programmes", img: workplaceImg },
  { title: "Support for Clients on Chronic Treatment or Medication", img: chronicImg },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 px-6 bg-gradient-to-b from-blue-50 via-blue-100 to-white">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Services Offered
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="rounded-2xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            {/* Gradient top image area */}
            <div className="bg-gradient-to-tr from-blue-400 to-teal-400 p-6 flex justify-center">
              <img
                src={service.img}
                alt={service.title}
                className="w-28 h-28 md:w-32 md:h-32 object-contain"
              />
            </div>
            <div className="p-6 text-center">
              <p className="text-lg md:text-xl text-gray-800 font-semibold">
                {service.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

import React from "react";
import Logo from "../assets/images/bg.jpeg"; // adjust relative path

const Footer: React.FC = () => (
  <footer className="bg-gray-900 dark:bg-gray-950 text-white dark:text-gray-300 py-6 px-6">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 text-center md:text-left">


      {/* Branding */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">
          PP Mashele Social Worker
        </h2>
        <p className="text-sm text-gray-400 leading-6">
            Social Worker in private practice BSW(UJ), EAP(UP)  <br />
          Practice No: <span className="text-blue-400">1286846</span> <br />
          SACSSP No: <span className="text-blue-400">1055164</span>
        </p>
      </div>

      {/* Navigation */}
      <div>
        <h3 className="text-xl font-semibold mb-2 text-blue-400">Navigation</h3>
        <ul className="space-y-1">
          <li>
            <a href="#home" className="hover:text-blue-400 transition">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-400 transition">About</a>
          </li>
          <li>
            <a href="#services" className="hover:text-blue-400 transition">Services</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </li>
        </ul>
      </div>

      {/* Address + Map */}
      <div>
        <h3 className="text-xl font-semibold mb-2 text-blue-400">Address</h3>
        <p className="text-sm leading-6 mb-4">
          
          Hazyview, Game,
          White River & Nelspruit
        </p>

      </div>

      {/* Contact */}
      <div>
        <h3 className="text-xl font-semibold mb-2 text-blue-400">Contact</h3>
        <p className="mt-2 text-sm leading-6">
          <span className="font-medium text-white">Phone:</span><br />
          <a href="tel:+27123456789" className="text-blue-400 hover:underline">
            +27 76 196 9267
          </a>
        </p>
        <p className="mt-0 text-sm leading-6">
          <span className="font-medium text-white">Email:</span><br />
          <a href="mailto:info@socialworker.co.za" className="text-blue-400 hover:underline">
            masheleprosperityphum@gmail.com
          </a>
        </p>
      </div>

<div>
  <h3 className="text-xl font-semibold mb-2 text-blue-400">Payment Methods</h3>
  <p className="text-sm leading-6">
   <span className="font-medium">Cash</span><br /> <span className="font-medium">EFT</span><br /> <span className="font-medium">Medical Aid</span>.
  </p>
</div>

    </div>

    {/* Bottom text */}
    <div className="text-center mt-6 text-gray-500 text-sm">
      &copy; {new Date().getFullYear()} Mashele Therapeutic Service — All rights reserved.
    </div>
  </footer>
);

export default Footer;

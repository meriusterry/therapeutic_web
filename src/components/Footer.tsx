import React from "react";

const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-white text-center py-6">
    <p>&copy; {new Date().getFullYear()} Private Social Worker. All rights reserved.</p>

      <p className="text-lg text-blue-500 text-font-bold leading-8">
        Practice No : 1286846 / SACSSP No: 1055164
      </p>
  </footer>
);

export default Footer;

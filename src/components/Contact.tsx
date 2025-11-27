import React, { useState } from "react";
import contactImg from "../assets/images/individual.jpg"; // your image

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSending(true);
    setFeedback(null);

    // Simulate sending for 1 second
    await new Promise((res) => setTimeout(res, 1000));

    // Show success feedback
    setFeedback("Thank you! Your message has been submitted. We will contact you soon");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSending(false);
  };

  return (
    <section id="contact" className="py-20 px-6 bg-blue-100">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Contact Me
      </h2>

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start gap-10">
        {/* Contact info */}
        <div className="flex-1 bg-blue-50 p-6 rounded-lg shadow mt-10">
          <p className="text-md text-gray-700 mb-0">
            Phone:
          </p>
          <p className="text-md text-gray-700 mb-2">
             <strong>076 196 9267</strong>
          </p>
          <p className="text-md text-gray-700 mb-0">
            Email:
          </p>
          <p className="text-md text-gray-700 mb-6">
            <strong>masheleprosperityphum@gmail.com</strong>
          </p>
          
          
       
          <a
            href="https://wa.me/27761969267"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition mb-6 w-full">
              WhatsApp Me
            </button>
          </a>

        

         
        </div>


 
          {/* Contact form */}
          <form onSubmit={handleSubmit} className="space-y-4">

           {feedback && (
  <p className="mt-4 text-center text-green-600  hover:bg-green-700 font-bold text-xl drop-shadow-md">
    {feedback}
  </p>
)}
 <p className="text-md text-gray-700 mb-0">
          Contact form
          </p>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows={5}
            />

            <button
              type="submit"
              disabled={isSending}
              className={`w-full px-6 py-3 rounded-lg text-white transition ${
                isSending
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700"
              }`}
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>

      
      </div>
    </section>
  );
};

export default Contact;

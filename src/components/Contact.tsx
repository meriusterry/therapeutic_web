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
    setFeedback("Thank you! Your message has been submitted.");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSending(false);
  };

  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Contact Me
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-10">
        {/* Contact info */}
        <div className="flex-1 bg-blue-50 p-10 rounded-lg shadow">
          <p className="text-xl text-gray-700 mb-4">
            📞 Phone: <strong>076 196 9277</strong>
          </p>
          <p className="text-xl text-gray-700 mb-2">
            ✉ Email: <strong>masheleprosperityphum@gmail.com</strong>
          </p>
          
          
          <p className="text-xl text-gray-700 mb-6">
            📍 Location: <strong>Mpumalanga / Hazyview / Online</strong>
          </p>
          <a
            href="https://wa.me/27761969277"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition mb-6 w-full">
              WhatsApp Me
            </button>
          </a>

        

          {feedback && (
            <p className="mt-4 text-center text-green-600">{feedback}</p>
          )}
        </div>

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="space-y-4">
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
                  : "bg-blue-600 hover:bg-blue-700"
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

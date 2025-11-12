import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="pt-28 pb-16 px-6 min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold mb-4 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Let’s <span className="text-blue-600">Connect</span>
        </motion.h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          Have a question or want to collaborate? Feel free to reach out — I’d love to hear from you!
        </p>

        {/* Contact Form */}
        <motion.form
          action="mailto:chandrucyril@gmail.com"
          method="POST"
          encType="text/plain"
          className="bg-white dark:bg-gray-800 shadow-lg rounded-3xl p-8 max-w-xl mx-auto text-left"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="Name"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="Email"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="Message"
              required
              rows="4"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </motion.form>

        {/* Social Links */}
        <div className="mt-12 flex justify-center gap-8 text-3xl text-gray-600 dark:text-gray-300">
          <motion.a
            href="https://www.linkedin.com/in/cyrilchandru3012"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#0077b5" }}
            className="transition duration-200"
          >
            <FaLinkedin />
          </motion.a>

          <motion.a
            href="https://github.com/Cyril3012"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#333" }}
            className="transition duration-200"
          >
            <FaGithub />
          </motion.a>

          <motion.a
            href="mailto:chandrucyril@gmail.com"
            whileHover={{ scale: 1.2, color: "#d14836" }}
            className="transition duration-200"
          >
            <FaEnvelope />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

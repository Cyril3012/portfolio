import React, { useEffect } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import profile from "../assets/Profile.jpg";
import resume from "../assets/Cyril_P_Resume.pdf";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Experience from "../pages/Experience";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

const Home = () => {
  useEffect(() => {
    // Smooth scroll for internal links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        target?.scrollIntoView({ behavior: "smooth" });
      });
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      
      {/* Hero / Intro Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 p-6 pt-24"
      >
        {/* Left Section */}
        <div className="max-w-2xl text-center md:text-left">
          <h1 className="text-5xl font-extrabold mb-4 text-gray-900 dark:text-white leading-tight">
            Building Scalable Systems — <br /> DevOps Simplified
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
            I’m <span className="font-semibold text-gray-900 dark:text-white">Cyril P</span>, a DevOps Engineer passionate about automation, CI/CD, and scalable cloud systems.
            I help teams bridge development and operations efficiently with secure and optimized pipelines.
          </p>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-6 text-2xl mb-8">
            <a
              href="https://www.linkedin.com/in/cyrilchandru3012"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Cyril3012"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              <FaGithub />
            </a>
            <a href="mailto:chandrucyril@gmail.com" className="hover:text-red-600">
              <FaEnvelope />
            </a>
          </div>

          {/* Buttons */}
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href={resume}
              download="Cyril_P_DevOps_Engineer_Resume.pdf"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-medium"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 font-medium"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Profile Card */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-3xl p-6 flex flex-col items-center w-72">
          <img
            src={profile}
            alt="Cyril P"
            className="rounded-2xl w-48 h-48 object-cover mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Cyril P</h3>
          <p className="text-gray-500 dark:text-gray-400">DevOps Engineer & Java Developer</p>
        </div>
      </section>

      {/* Add All Sections */}
      <section id="about" className="py-20 w-full max-w-6xl px-6">
        <About />
      </section>

      <section id="skills" className="py-20 w-full max-w-6xl px-6 bg-gray-100 dark:bg-gray-800 rounded-2xl">
        <Skills />
      </section>

      <section id="experience" className="py-20 w-full max-w-6xl px-6">
        <Experience />
      </section>

      <section id="projects" className="py-20 w-full max-w-6xl px-6 bg-gray-100 dark:bg-gray-800 rounded-2xl">
        <Projects />
      </section>

      <section id="contact" className="py-20 w-full max-w-6xl px-6">
        <Contact />
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-600 dark:text-gray-400 text-sm">
        © {new Date().getFullYear()} Cyril P — Built with React & TailwindCSS
      </footer>
    </div>
  );
};

export default Home;

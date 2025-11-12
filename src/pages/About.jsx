import React from "react";

const About = () => {
  return (
    <section className="pt-28 px-6 min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 border-b-2 border-blue-600 inline-block">
          About Me
        </h2>
        <p className="text-lg leading-relaxed mb-6">
          Hello! I’m <span className="font-semibold text-blue-600">Cyril P</span>, a
          DevOps Engineer with 2.4 years of experience bridging infrastructure and backend development.
          I specialize in managing scalable cloud and on-premises environments and automating secure CI/CD pipelines.
        </p>
      </div>
    </section>
  );
};

export default About;  // ✅ this is the important line


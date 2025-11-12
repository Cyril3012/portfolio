import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const experiences = [
  {
    title: "DevOps Engineer",
    company: "Emphatic Sense Technology Pvt Ltd, Chennai",
    period: "June 2023 – October 2025",
    details: [
      "CI/CD Pipelines: Designed and executed robust CI/CD pipelines for Spring Boot and React applications with rollback support, SonarQube integration, and OWASP-compliant dependency management — reducing deployment downtime by 70% across Windows and Linux (on-prem and cloud).",
      "Cloud Migration & Cost Optimization: Migrated 9 production websites from AWS (EC2, S3, CloudFront, ALB, Route 53, SES) to DigitalOcean, achieving approximately 65% cost reduction with minimal downtime.",
      "Server Setup & Automation: Built and maintained hybrid environments (Linux & Windows, on-prem & cloud). Automated log rotation, database backups, and monitoring using Shell and Batch scripts.",
      "Monitoring & Alerting: Implemented Prometheus + Grafana dashboards and developed a custom agentless monitoring solution (Java + SSH) for tracking system health across multiple environments.",
      "GitOps & Repository Management: Maintained organization-wide GitHub repositories and configured Slack-based notifications for merges and deletions; supported developers in resolving Git-related issues.",
      "Java Development: Developed REST APIs using Java, Spring Boot, and Microservices for modules like Master Screens, Purchase Requests, Authentication/Authorization (RBAC), and Work Orders. Fixed production bugs and optimized dashboards.",
      "Contributed to Agile/Scrum workflows through sprint planning and client sync-ups, delivering 100% client-aligned outcomes with innovative, optimized solutions.",
    ],
  },
  {
    title: "Backend Intern — Java",
    company: "Emphatic Sense Technology Pvt Ltd, Chennai",
    period: "February 2023 – April 2023",
    details: [
      "Learned and applied SDLC methodologies in a real-time environment.",
      "Built API prototypes using Spring Boot and gained experience with REST APIs, microservice architecture, and backend workflows.",
      "Worked with UML, RDBMS design, and database integration for API development.",
      "Collaborated with senior developers to understand Agile processes and DevOps lifecycle.",
    ],
  },
];

const education = [
  {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "Anna University, Tamil Nadu, India",
    period: "2017 – 2021",
    details: [
      "Completed undergraduate degree with focus on software engineering and backend development.",
      "Developed academic projects using Java, Spring Boot, and MySQL, focusing on real-world system design.",
    ],
  },
];

const Experience = () => {
  return (
    <section className="pt-28 pb-20 px-6 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Work Experience Section */}
        <h2 className="text-4xl font-extrabold mb-12 text-center text-gray-900 dark:text-white">
          Work <span className="text-blue-600">Experience</span>
        </h2>

        <div className="relative border-l-4 border-blue-600 ml-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="mb-10 ml-6 bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full text-white">
                <FaBriefcase size={14} />
              </div>
              <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400">
                {exp.title}
              </h3>
              <h4 className="font-medium text-gray-700 dark:text-gray-300">
                {exp.company}
              </h4>
              <p className="text-sm italic text-gray-500 dark:text-gray-400 mb-3">
                {exp.period}
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                {exp.details.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Education Section */}
        <h2 className="text-4xl font-extrabold mb-12 mt-20 text-center text-gray-900 dark:text-white">
          Education
        </h2>
        <div className="relative border-l-4 border-blue-600 ml-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="mb-10 ml-6 bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full text-white">
                <FaGraduationCap size={14} />
              </div>
              <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400">
                {edu.degree}
              </h3>
              <h4 className="font-medium text-gray-700 dark:text-gray-300">
                {edu.institution}
              </h4>
              <p className="text-sm italic text-gray-500 dark:text-gray-400 mb-3">
                {edu.period}
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                {edu.details.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

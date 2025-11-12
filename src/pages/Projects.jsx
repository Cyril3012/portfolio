import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Yoga — AWS Web App (LAMP Stack Migration)",
    description: `Deployed and managed 9 PHP-MySQL websites on AWS EC2 (Bitnami & manual LAMP setups) behind an Application Load Balancer for high availability. 
    Optimized performance by integrating S3 and CloudFront for static assets, configured VPC and IAM for security, and monitored using CloudWatch. 
    Migrated 8 sites to DigitalOcean Droplets with Spaces (Free CDN), SSL via Let's Encrypt, and automated RClone + MySQL backups achieving 65% cost savings.`,
    tags: ["AWS", "EC2", "S3", "CloudFront", "DigitalOcean", "Bash", "RClone"],
    image: "https://cdn-icons-png.flaticon.com/512/919/919830.png",
  },
  {
    title: "Chrysalis — On-Prem VPN Microservices",
    description: `Set up, monitored, and maintained development, staging, and production environments in a secure VPN. 
    Designed CI/CD pipelines in Jenkins deploying Spring Boot microservices and React microfrontends via PowerShell Remoting (SSH-restricted). 
    Configured Java services as Windows services using NSSM ensuring auto-restart, and automated database & file backups via Batch scripts and Task Scheduler.`,
    tags: ["Spring Boot", "React", "Jenkins", "NSSM", "PowerShell", "Windows"],
    image: "https://cdn-icons-png.flaticon.com/512/5969/5969181.png",
  },
  {
    title: "Urakata — DevOps Centralized Monitoring",
    description: `Developed a monolithic Spring Boot + Thymeleaf application to enable secure, agentless monitoring (CPU, RAM, Disk, Service status) via SSH. 
    Removed dependency on external monitoring tools, reducing infrastructure costs while improving maintainability and visibility of server health.`,
    tags: ["Spring Boot", "Thymeleaf", "SSH", "Monitoring", "H2 Database"],
    image: "https://cdn-icons-png.flaticon.com/512/4228/4228699.png",
  },
  {
    title: "GLIM — Cloud Microservices (AWS + DigitalOcean)",
    description: `Configured development environments on AWS EC2 and RDS for backend, with DigitalOcean for microfrontend hosting. 
    Built Jenkins-based CI/CD pipelines to automate deployments via SSH and Maven. 
    Secured infrastructure with VPC and firewall rules ensuring controlled access and compliance.`,
    tags: ["AWS", "DigitalOcean", "Jenkins", "RDS", "Microservices", "Firewall"],
    image: "https://cdn-icons-png.flaticon.com/512/2721/2721270.png",
  },
];

const Projects = () => {
  return (
    <section className="pt-28 pb-16 px-6 min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-12 text-gray-900 dark:text-white">
          Featured <span className="text-blue-600">Projects</span>
        </h2>

        {/* Project Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-3xl overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-44 object-contain p-6 bg-gray-100 dark:bg-gray-700"
              />
              <div className="p-6 text-left">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

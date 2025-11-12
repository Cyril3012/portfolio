import React from "react";

const SkillBar = ({ label, value }) => (
  <div className="mb-4">
    <p className="text-gray-700 font-medium mb-1">{label}</p>
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div
        className="bg-blue-600 h-2.5 rounded-full"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  </div>
);

const Skills = () => {
  return (
    <section className="pt-24 pb-16 px-6 bg-gray-50 min-h-screen flex items-start justify-center">
      <div className="max-w-6xl w-full mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Cloud Platforms */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b-2 border-blue-500 inline-block">
              Cloud Platforms
            </h3>
            <SkillBar label="AWS (Amazon Web Services)" value={60} />
            <SkillBar label="DigitalOcean" value={85} />
          </div>

          {/* CI/CD & DevOps Tools */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b-2 border-blue-500 inline-block">
              CI/CD & DevOps Tools
            </h3>
            <SkillBar label="Jenkins" value={85} />
            <SkillBar label="Maven" value={75} />
            <SkillBar label="SonarQube" value={70} />
          </div>

          {/* Containerization & Orchestration */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b-2 border-blue-500 inline-block">
              Containerization & Orchestration
            </h3>
            <SkillBar label="Docker" value={80} />
            <SkillBar label="Kubernetes (EKS)" value={70} />
          </div>

          {/* Monitoring & Observability */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b-2 border-blue-500 inline-block">
              Monitoring & Observability
            </h3>
            <SkillBar label="Prometheus" value={80} />
            <SkillBar label="Grafana" value={75} />
            <SkillBar label="Scripting Agentless Monitoring" value={85} />
          </div>

          {/* Programming & Scripting */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b-2 border-blue-500 inline-block">
              Programming & Scripting
            </h3>
            <SkillBar label="Java (Spring Boot)" value={80} />
            <SkillBar label="Bash / Shell Scripting" value={85} />
            <SkillBar label="PowerShell" value={70} />
          </div>

          {/* Databases */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b-2 border-green-500 inline-block">
              Databases
            </h3>
            <SkillBar label="MySQL" value={85} />
            <SkillBar label="Microsoft SQL Server (MSSQL)" value={80} />
            <SkillBar label="PostgreSQL" value={70} />
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

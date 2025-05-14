import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <h3>Intranet Web App</h3>
            <p>Developed a lightweight internal portal for manufacturing data tracking and reporting, integrated with SQL Server and Power BI.</p>
          </div>
          <div className="project-card">
            <h3>Patient Confidentiality System</h3>
            <p>Built for 3M Healthcare, ensuring HIPAA compliance and secure record management.</p>
          </div>
          {/* Add more projects here */}
        </div>
      </div>
    </section>
  );
};

export default Projects;

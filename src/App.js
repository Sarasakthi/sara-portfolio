import React from 'react';

const projects = [
  {
    title: "Manufacturing Task Tracker",
    description: "An internal tool for managing daily shopfloor activities.",
    techStack: "ASP.NET Core, SQL Server, Bootstrap, jQuery",
    githubLink: "https://github.com/sara/task-tracker",
    impact: "Reduced task reporting time by 70%."
  },
  {
    title: "Inventory Dashboard",
    description: "Real-time dashboard for warehouse inventory control.",
    techStack: "Blazor Server, Entity Framework Core, Power BI",
    githubLink: "https://github.com/sara/inventory-dashboard",
    impact: "Improved inventory accuracy by 40%."
  }
];

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1>Sara Sakthikumar</h1>
      <p>Full Stack Developer | ASP.NET Core | SQL Server | Power BI</p>

      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p><strong>Tech Stack:</strong> {project.techStack}</p>
          <p><strong>Impact:</strong> {project.impact}</p>
          <a href={project.githubLink} target="_blank" rel="noreferrer">View on GitHub</a>
        </div>
      ))}

      <h2>Contact</h2>
      <p>Email: <a href="mailto:sara@example.com">sara@example.com</a></p>
      <p>LinkedIn: <a href="https://linkedin.com/in/sara">linkedin.com/in/sara</a></p>
      <p>GitHub: <a href="https://github.com/sara">github.com/sara</a></p>
    </div>
  );
}

export default App;
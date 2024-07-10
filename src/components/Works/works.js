import React from "react"
import "./works.css"

const Works = () => {

    const projects = [
        {
            title: "Project 1",
            description: "Short description of Project 1",
            githubLink: "https://github.com/yourusername/project1"
        },
        {
            title: "Project 2",
            description: "Short description of Project 2",
            githubLink: "https://github.com/yourusername/project2"
        },
        {
            title: "Project 3",
            description: "Short description of Project 2",
            githubLink: "https://github.com/yourusername/project2"
        },
        // Add more projects as needed
    ];

    return (
        <section id='works'>
            <h2 className="workstitle">My Projects</h2>
            <span className="worksDesc">A glimpse of the projects I've been working on...</span>
            <div className="projectList">
                {projects.map((project, index) => (
                    <div key={index} className="projectItem">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                            View on GitHub
                        </a>
                    </div>
                ))}
            </div>
        
        </section>
    );
}

export default Works
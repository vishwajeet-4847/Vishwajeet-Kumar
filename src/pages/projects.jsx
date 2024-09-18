import React from "react";
import ProjectCard from "./components/utility/project-card";
import Section from "./components/utility/section";
import SectionTitle from "./components/utility/section-title";
import projects from "../project-details";
const Projects = ()=>{
    
    return(
        
        <Section className="container ">
            <SectionTitle title="View My Work"/>
<div className="card-container">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
</div>
</Section>
           
        
    );
};

export default Projects;
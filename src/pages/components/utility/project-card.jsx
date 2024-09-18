import React, { useState } from "react";

const ProjectCard = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    window.open(project.link, "_blank");
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`project-card ${isFlipped ? "flipped" : ""}`} onClick={handleClick}>
      <div className="front">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="back" onClick={handleFlip}>
        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
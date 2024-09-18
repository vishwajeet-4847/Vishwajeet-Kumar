import React, { useState } from "react";
import Button from "./button";

const WorkCard = ({ image, title, description, projectLink }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    const handleHover = () => {
        setIsFlipped(true);
    };

    const handleMouseLeave = () => {
        setIsFlipped(false);
    };

    return (
        <div className={`work-card ${isFlipped ? "flipped" : ""}`}>
            <div className="card-front" onClick={handleClick} onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
                <img src={image} alt={title} />
                <div className="card-description">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
            <div className="card-back" onClick={handleClick} onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
            <Button link="/projects" content="View My Work" /> 
            </div>
        </div>
    );
};

export default WorkCard;
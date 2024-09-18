import React from "react";
import Button from "./button";

const ButtonBox = () => (
    <div className="button-box">
        <Button link="/projects" content="View My Work" class="button"/>
        <Button link="/contact" content="Contact Me" class="button"/>
        <a href="./resume.pdf" className="button" download="Vishwajeet_kumar">Resume</a>
    </div>
);

export default ButtonBox;
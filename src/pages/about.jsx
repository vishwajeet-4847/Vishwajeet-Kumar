import React from "react";
import Section from "./components/utility/section";
import AboutInfo from "./about-info";
import DigitalCreations from "./digital-creation";


const About = ()=>{
    return(
       <Section className="container">
        <AboutInfo />
        <DigitalCreations />
       </Section>
    );
};

export default About;
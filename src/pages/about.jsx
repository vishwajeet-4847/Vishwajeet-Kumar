import React from "react";
import Section from "./components/utility/section";
import AboutInfo from "./about-info";
import DigitalCreations from "./digital-creation";


const About = ()=>{
    return(
       <Section className=" section">
        <div className="container">        
            <AboutInfo />
            </div>
      
      
        <div className>
        <DigitalCreations />
        </div>

       </Section>
    );
};

export default About;
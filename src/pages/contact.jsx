import React from "react";
import ContactForm from "./components/utility/ContactForm";
import Section from "./components/utility/section";
import SectionTitle from "./components/utility/section-title";

const Contact = ()=>{
    return (
      
            <div className="contact-container">
            <Section className="container contact-container">
                <SectionTitle title="Get in touch with me"/>
            <ContactForm />

            </Section>
            </div>

    
    );
};

export default Contact;
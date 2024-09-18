import React from "react";

const Section = (props) => (
    <section className={props.className}>
        {props.children}
    </section>
);

export default Section;
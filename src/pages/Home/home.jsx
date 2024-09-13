import React from "react";


const Home = ()=>{
    return (
        <section className="hero-section container">
        <div className="columns">
            <div className="column is-half">
                <button className="hire-resume-btn">Hire Me</button>
                <button className="lets-talk-btn">Let's Talk</button>
            </div>
            <div className="column is-half">
                <img src="./images/pic-1.png" alt="my-pic" />
            </div>
        </div>
    </section>
    );
};

export default Home;
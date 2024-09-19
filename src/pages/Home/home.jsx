import React from "react";

import Separator from "../components/utility/separator";
import ButtonBox from "../components/utility/button-box";

import PicBox from "../components/utility/pic-box";
import Section from "../components/utility/section";
import HeroText from "../components/utility/hero-text";
import TitleInfo from "./title-info";
import SectionTitle from "../components/utility/section-title";
import WorkCard from "../components/utility/work-card";

import Container from "../components/utility/container";

import WorkCards from "../../workcard";

const Home = () => (
    <>
        <Section className="hero">
            <div className="hero-section container">
            <PicBox class="my-pic" img="./images/pic-1.png" alt="Vishwajeet Kumar" />
            <HeroText />  
            <Separator />
            <TitleInfo /> 
            <ButtonBox />
            </div>
        </Section>
        <Section className="section">
            <div className="continer can-work">
            <SectionTitle title="can work on"/>
            <Container class="card-container">
            {WorkCards.map((workCard, index) => (
                    <WorkCard key={index} image={workCard.image} title={workCard.title} description={workCard.description} />
                ))}
            </Container>
            </div>
        </Section>
    </>
);

export default Home;
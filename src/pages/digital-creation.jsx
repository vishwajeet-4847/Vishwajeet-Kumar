import React from 'react';
import SectionTitle from './components/utility/section-title';
import CreationCard from './components/utility/creation-card';

const DigitalCreations = () => {
  return (
    <div className="digital-creation ">
      <SectionTitle title="Digital creations" />
      <div className="cardbox card-container">
        <CreationCard
          title="Digital clock in python || Digital clock using tkinter || just in 3-mins"
          videoSrc="https://www.youtube.com/embed/CBn8IUKajys"
        />
        <CreationCard
          title="WAP to make a user input list || Python || List-01"
          videoSrc="https://www.youtube.com/embed/imdUW9VhIGk"
        />
        <CreationCard
          title="Operations on list || Python || list-02"
          videoSrc="https://www.youtube.com/embed/YVaqyWkHwVo"
        />
      </div>
    </div>
  );
};

export default DigitalCreations;
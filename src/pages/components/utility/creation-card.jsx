import React from 'react';

const CreationCard = ({ title, videoSrc }) => {
  return (
    <div className="creation-card">
      <div className="frame-box">
        <iframe
          src={videoSrc}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default CreationCard;
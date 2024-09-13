import React from "react";

const SocialIcon = (props)=>{
    return(
      <li >
         <a href={props.url} target="_blank" rel="noopener noreferrer">
         <i className={props.icon}></i></a>
      </li>
    );
};
export default SocialIcon;
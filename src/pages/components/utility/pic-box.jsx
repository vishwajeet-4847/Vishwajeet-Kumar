import React from "react";

const PicBox = (props)=>{
    return(
        <div className={props.class}>
            <img src={props.img} alt={props.alt} />
           
        </div>
    );
 
};

export default PicBox;
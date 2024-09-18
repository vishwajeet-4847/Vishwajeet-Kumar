import React from "react";
import { NavLink } from "react-router-dom";

const Button = (props) => (
    <NavLink to={props.link} className={props.class}>{props.content}</NavLink>
);

export default Button;
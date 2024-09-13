import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <nav >
            <ul>
                <li>
                    <NavLink to="/"  className={({isActive})=>{ return isActive ? "red":""}}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({isActive})=>{ return isActive ? "red":""}}>About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className={({isActive})=>{ return isActive ? "red":""}}>Contact</NavLink>
                </li>
                <li>
                    <NavLink to="/projects" className={({isActive})=>{ return isActive ? "red":""}}>Projects</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

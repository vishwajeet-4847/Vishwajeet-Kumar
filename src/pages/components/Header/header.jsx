import React, { useState, useEffect , useCallback} from "react";
import Navbar from "./navbar";
import "./header.css";

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleClick = useCallback((event) => {
      if (event.target.closest(".menu-button") || event.target.closest(".navbar")) {
        setMenuOpen(!isMenuOpen);
      } else {
        setMenuOpen(false);
      }
    }, [isMenuOpen]);
  
    useEffect(() => {
      document.addEventListener("click", handleClick);
      return () => {
        document.removeEventListener("click", handleClick);
      };
    }, [handleClick]);

  return (
    <header className={isMenuOpen ? "header header-open" : "header"}>
      <div className="main-header">
        <h2>Vishwa<span>jeet</span></h2>
        <div
          className={isMenuOpen ? "menu-button menu-open-button" : "menu-button"}
        >
          <div className="menu-bar"></div>
          <div className="menu-bar"></div>
          <div className="menu-bar"></div>
        </div>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
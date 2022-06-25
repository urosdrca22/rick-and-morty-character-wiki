import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import "./Navbar.css";

const Navbar = () => {
  const { setPageNumber } = useGlobalContext();

  const resetPageNumber = () => {
    setPageNumber(1);
  };

  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/" onClick={resetPageNumber}>
          <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/63f4e270-f230-427d-b501-9fcd96a68d2f/d8othol-21af3a10-ea54-4ade-a06c-88bec9505f68.png"
            alt="Rick and Morty Logo"
            className="logo"
          ></img>
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/" onClick={resetPageNumber}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/episodes">Episodes</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./navbar.mobule.css";

export const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-brand">GITHUB SEARCH</div>
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink exact to="/" className="nav-link">
          Main
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/about" className="nav-link">
          Info
        </NavLink>
      </li>
    </ul>
  </nav>
);
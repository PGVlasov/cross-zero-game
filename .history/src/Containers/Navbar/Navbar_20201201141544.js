import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./navbar.module.css";

export const Navbar = () => (
  <nav className={classes.navbar}>
    <div className={classes.navbarHeader}>GITHUB SEARCH</div>
    <ul className={classes.ul}>
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
      <li className="nav-item">
        <NavLink to="/about" className="nav-link">
          Player
        </NavLink>
      </li>
    </ul>
  </nav>
);

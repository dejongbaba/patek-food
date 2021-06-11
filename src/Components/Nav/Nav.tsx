import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/png/logo.png";
import "./nav.scss";
type NavType = {};
function Nav(props: NavType) {
  return (
    <nav className="nav">
      <NavLink exact activeClassName="active" to="/">
        <span>Home</span>
      </NavLink>
      <NavLink activeClassName="active" to="/about">
        <span>About</span>
      </NavLink>
      <NavLink activeClassName="active" to="/">
        <img className="nav-logo" src={logo} alt="patek logo" />
      </NavLink>
      <NavLink activeClassName="active" to="/products">
        <span>Products</span>
      </NavLink>
      <NavLink activeClassName="active" to="/contact">
        <span>Contact</span>
      </NavLink>
    </nav>
  );
}

export default Nav;

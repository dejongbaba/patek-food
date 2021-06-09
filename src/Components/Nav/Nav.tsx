import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/svg/Patec Foods Logo 1.svg";
import "./nav.scss";
type NavType = {};
function Nav(props: NavType) {
  return (
    <nav className="nav">
      <Link to="/">
        <span>Home</span>
      </Link>
      <Link to="/about">
        <span>About</span>
      </Link>
      <Link to="/">
        <img className="nav-logo" src={logo} alt="patek logo" />
      </Link>
      <Link to="/products">
        <span>Products</span>
      </Link>
      <Link to="/contact">
        <span>Contact</span>
      </Link>
    </nav>
  );
}

export default Nav;

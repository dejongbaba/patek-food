import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/png/logo.png";
import "./nav.scss";

const Nav = React.forwardRef<{
  menu: React.RefObject<HTMLElement>;
  hamburger: React.RefObject<HTMLButtonElement>;
}>((prop, ref: any) => {
  // @ts-ignore
  return (
    <nav className="nav" ref={ref}>
      <NavLink activeClassName="active" to="/">
        <img className="nav-logo" src={logo} alt="patek logo" />
      </NavLink>
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
});

export default Nav;

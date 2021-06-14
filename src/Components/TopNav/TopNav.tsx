import React from "react";
import "./TopNav.scss";

const TopNav = React.forwardRef<HTMLButtonElement>((props, ref) => {
  return (
    <div className="top-nav position-relative">
      <div className="pf-nav-hamburger position-absolute top-right">
        <button className="pf-nav-hamburger-button" ref={ref} />
      </div>
      <div className="top-nav-social">
        <a href="www.facebook.com" target="_blank">
          <i className="fa-1x fab fa-facebook" />
        </a>
        <a href="www.instagram.com" target="_blank">
          <i className="fa-1x fab fa-instagram" />
        </a>
        <a href="www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fa-1x fab fa-linkedin" />
        </a>
      </div>
      <div className="top-nav-contact">
        <a
          href="tel:+234 802 9432 334"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fas fa-phone" />
          <span>+234 802 9432 334</span>
        </a>
        <a
          href="mailto:info@patecfoods.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fas fa-envelope" />
          <span>info@patecfoods.com</span>
        </a>
      </div>
    </div>
  );
});

export default TopNav;

import React from "react";
import "./TopNav.scss";
import logoIcon from "../../assets/png/logo.png";
const TopNav = React.forwardRef<HTMLButtonElement>((props, ref) => {
    return (
        <div className="top-nav position-relative">
            <div className="pf-nav-hamburger position-absolute top-right-6">
                <button
                    className="pf-nav-hamburger-button no-outline"
                    ref={ref}
                />
            </div>
            <div className="position-absolute logo-area bg-white  w-100">
                <img
                    alt=""
                    src={logoIcon}
                    className="w-25 md-d-none position-absolute"
                />
            </div>

            <div className="top-nav-social">
                <a href="www.facebook.com" target="_blank">
                    <i className="fa-1x fab fa-facebook" />
                </a>
                <a href="www.instagram.com" target="_blank">
                    <i className="fa-1x fab fa-instagram" />
                </a>
                <a
                    href="www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fa-1x fab fa-linkedin" />
                </a>
            </div>
            <div className="top-nav-contact">
                <a
                    className="md-d-flex align-center"
                    href="tel:+2348185000028"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fa fas fa-phone" />
                    <span> +234 818 500 0028</span>
                </a>
                <a
                    className="d-none md-d-flex align-center"
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

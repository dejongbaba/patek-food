import React from "react";
import "./footer.scss";
import footerLogo from "../../assets/png/logo.png";
import phoneCalling from "../../assets/svg/Calling.svg";
// import cartIcon from "../../assets/png/shopping-cart.png";

function Footer() {
  return (
    <footer className="w-80 md-w-70 pb-2 md-pb-0 d-flex position-relative flex-column md-flex-row mx-auto bg-pattern">
      {/*<div className="br-50-p-cent d-flex align-center  position-fixed justify-center bg-green bottom-right-2 w-70-px h-70-px">*/}
      {/*  <img className="w-30" src={cartIcon} alt="" />*/}
      {/*  <div className="bg-white br-50-p-cent box-shadow-1 w-30px h-30 d-flex position-absolute top-right-5 align-center justify-center">*/}
      {/*    4*/}
      {/*  </div>*/}
      {/*</div>*/}
      <div className="md-p-2 flex-grow-1">
        <img className="w-100-px" src={footerLogo} alt="" />
        <div className="d-flex align-space-between">
          <img className="mr-1 " src={phoneCalling} alt="" />
          <div>
            <p className="text-green text-medium">+234 8084 232 2342</p>
            <p>Available 24/7 everyday</p>
            <p className="text-green text-medium">
              <a
                className="text-green"
                href="mailto:info@patecfoods.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                info@patecfoods.com
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="md-p-2 flex-grow-1">
        <p className="text-green font-bold">Links</p>
        <ul className="d-flex flex-wrap unstyled-list pl-0 text-gray">
          <li className="w-50">
            <a className="text-undecorated text-gray" href="/">
              Home
            </a>
          </li>
          <li className="w-50">
            <a className="text-undecorated text-gray" href="/about">
              About us
            </a>
          </li>
          <li className="w-50">
            <a className="text-undecorated text-gray" href="/products">
              Products
            </a>
          </li>
          <li className="w-50">
            <a className="text-undecorated text-gray" href="/contact">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      <div className="md-p-2 flex-grow-1">
        <p className="text-green font-bold">Subscribe to our Newsletter</p>
        <div className="d-flex">
          <input
            type="text"
            className="bg-gray-light px-1 no-shadow no-outline no-border br-1 no-border mr-1"
          />
          <button
            type="button"
            className="square-btn  br-0-5 no-border bg-color"
          >
            <i className="fa fas fa-paper-plane text-white" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

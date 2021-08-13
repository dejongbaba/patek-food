import React from "react";
import "./Banner.scss";
import logo from "../../assets/png/Patec Foods Logo.png";

function Banner({
    description = "Patec Foods is an aquaculture production and processing company\n" +
        "                focused on transforming the aquaculture industry in Nigeria and\n" +
        "                significantly empowering smallholder farmers.",
}) {
    return (
        <div className="banner">
            <div className="banner-image-wrapper">
                <img src={logo} alt="patek banner" />
            </div>
            <p>{description}</p>
        </div>
    );
}

export default Banner;

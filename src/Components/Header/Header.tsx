import React from "react";
import "./Header.scss";
import headerImg from "../../assets/jpeg/patek-home.jpeg";
import { Link } from "react-router-dom";

export type HeaderType = {
    image: string;
    title: string;
    description: string;
    link: string;
    linkText: string;
};

function Header({
    image = headerImg,
    title,
    description,
    link = "",
    linkText,
}: Partial<HeaderType>) {
    return (
        <div
            className="header"
            style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6) 0%,rgba(0,0,0,0.6) 100%),url(${image}`,
            }}
        >
            {/*<img src={image} alt="" />*/}
            <div className="header-center">
                <h1
                    className="header-title"
                    data-aos-delay="200"
                    data-aos="animation-translate-y"
                >
                    {title}
                </h1>
                <p
                    className="header-description"
                    data-aos-delay="500"
                    data-aos="animation-translate-y"
                >
                    {description}{" "}
                </p>
                <Link
                    to={link}
                    className="header-button"
                    data-aos-delay="700"
                    data-aos="animation-translate-y"
                >
                    {linkText}
                </Link>
            </div>
        </div>
    );
}

export default Header;

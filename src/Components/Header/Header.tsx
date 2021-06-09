import React from "react";
import "./Header.scss";
import headerImg from "../../assets/png/frog-patek.png";
export type HeaderType = {
  image: string;
  title: string;
  description: string;
  link: string;
};

function Header({
  image = headerImg,
  title,
  description,
  link,
}: Partial<HeaderType>) {
  return (
    <div className="header">
      <img src={image} alt="" />
      <div className="header-center">
        <h1 className="header-title">{title}</h1>
        <p className="header-description">{description} </p>
        <a href={link} className="header-button">
          Learn More
        </a>
      </div>
    </div>
  );
}

export default Header;

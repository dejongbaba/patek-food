import React from 'react';
import './Banner.scss';
import logo from '../../assets/png/Patec Foods Logo.png';

function Banner() {
    return (
        <div className='banner'>
            <div className='banner-image-wrapper'>
            <img src={logo} alt="patek banner"/>
            </div>
            <p>Patec Foods is an aquaculture production and processing company that is focused on transforming the aquaculture industry in Nigeria and significantly empowering small holdersmallholder farmers.
                We are committed to providing the best quality, oven dried catfish available in the marketplace, </p>
        </div>
    );
}

export default Banner;

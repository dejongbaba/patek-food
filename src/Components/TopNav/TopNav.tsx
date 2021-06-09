import React from 'react';
import './TopNav.scss';
import faceBook from '../../assets/svg/facebook.svg';
import linkedIn from '../../assets/svg/linkedIn.svg';
import instagram from "../../assets/svg/instagram.svg";
import email from "../../assets/svg/email.svg";
import phone from "../../assets/svg/phone.svg";
type TopNavType = {

}

function TopNav(props:TopNavType) {
    return (
        <div className='top-nav'>
            <div className="top-nav-social">
                <img src={faceBook} alt="facebook"/>
                <img src={instagram} alt="instagram"/>
                <img src={linkedIn} alt="linkedIn"/>
            </div>
            <div className="top-nav-contact">
                <span><img src={phone} alt="contact"/> <span>+234 802 9432 334</span></span>
                <span><img src={email} alt="email"/> <span>info@patecfoods.com</span></span>

            </div>
        </div>
    );
}

export default TopNav;

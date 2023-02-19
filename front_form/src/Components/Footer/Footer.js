import React from 'react';
import './footer.css';
import socialGrup from './img/social_grup.png';
import sunBig from './img/Sun_big_footer.png';
import sunGreen from './img/sun_green_footer.png';
import sunBlue from './img/sun_blue_footer.png';

const Footer = () => {
    return (
        <>
            <div className="Bg_footer">
                <div className="footer">
                    <div className="social_block">
                        <img className="social_list" src={socialGrup} alt="" />
                        <img className="sunBig" src={sunBig} alt="" />
                        <img className="sunGreen" src={sunGreen} alt="" />
                        <img className="sunBlue" src={sunBlue} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
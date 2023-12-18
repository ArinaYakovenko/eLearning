import React from 'react';
import footerLogo from '../assets/images/Footer_logo.svg';

const Footer = () => {
  return (
    <footer>
      <div className='footer-block'>
        <div className="container-block">
          <div className="footer-navigation">
            <div className="footer-logo">
              <img src={footerLogo} alt="footerLogo" />
              <p>Taking learning to the next level</p>
            </div>
            <div className="navigation">
              <ul>
                <li><a href="#">Home eLearning</a></li>
                <li><a href="#">eLearning Development </a></li>
                <li><a href="#">Custom eLearning </a></li>
                <li><a href="#">Price Quote Services</a></li>
                <li><a href="#">Mobile Learning </a></li>
                <li><a href="#">eLearning for Retail </a></li>
                <li><a href="#">Instructional Design</a></li>
                <li><a href="#">Product Training </a></li>
                <li><a href="#">eLearning Packages </a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container-block">
          <p>Copyright © 2016 eLearning Company</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;

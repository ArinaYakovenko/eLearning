import React from 'react';
import HeaderCarousel from './HeaderCarousel';
import logo from '../assets/images/LogoCol.svg';

const Header = () => {
  const setDarkMode = () => {
    document.querySelector('body').setAttribute('data-theme', 'dark');
    document.querySelector('.mode-name').textContent = 'Nightmode';
  }

  const setLightMode = () => {
    document.querySelector('body').setAttribute('data-theme', 'light');
    document.querySelector('.mode-name').textContent = 'Daymode';

  }

  const toggleTheme = (e) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  }

  return (<>
    <header id='header'>
      <div className="container-block">
        <div className="welcome-page">
          <div className="toggle-block">
            <img className='logo' src={logo} alt="logo" />
            <p>Taking Learning to the Next Level</p>
            <div className="toggle-mode">
              <label className="switch">
                <input type="checkbox" onChange={toggleTheme} />
                <span className='slider'><p className='mode-name'>Daymode</p></span>
              </label>
            </div>
          </div>
          <HeaderCarousel />
        </div>
      </div>
    </header>
    <nav>
      <div className="container-block">
        <div className="menu">
          <img src={logo} alt="logo" />
          <ul className='navigation'>
            <li><a href="#header">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#design">Instructional Design</a></li>
            <li><a href="#">eLearning Development</a></li>
            <li><a href="#">eLearning Price Quote</a></li>
            <li><a href="#">eLearning Packages</a></li>
            <li><a href="#feedback">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </>)
}

export default Header
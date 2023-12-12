import React from 'react';
import UncontrolledExample from './Slides';

//img
import logo from '../assets/images/LogoCol.svg';
import day_mode from '../assets/images/daymode.svg'

const Header = () => {

  return (
    <header>
      <div className="container-block">
        <div className="welcome-page">
          <div className="toggle-block">
            <img className='logo' src={logo} alt="logo" />
            <p>Taking Learning to the Next Level</p>
            <div className="toggle-mode">
              <p>Daymode</p>
              <div className="toggle-img">
                <img src={day_mode} alt="day_mode" />
              </div>
            </div>
          </div>
          <UncontrolledExample />
        </div>
      </div>
    </header>
  )
}

export default Header
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

//Images
import services from '../assets/images/services.png';
import inst_design from '../assets/images/instr_design.png';
import el_develop from '../assets/images/eL_development.png';
import el_packages from '../assets/images/eL_packages.png';
import letter from '../assets/images/letter.svg';

const HeaderCarousel = () => {
    return (
        <div className="carousel">
            <Carousel>
                <Carousel.Item>
                    <div className="carousel-block">
                        <div className="carousel-img">
                            <img src={services} alt="services" />
                            <p>Services</p>
                        </div>
                        <div className="carousel-img">
                            <img src={inst_design} alt="inst_design" />
                            <p>Instructional
                                Design</p>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="carousel-block">
                        <div className="carousel-img">
                            <img src={el_develop} alt="el_develop" />
                            <p>eLearning
                                Development</p>
                        </div>
                        <div className="carousel-img">
                            <img src={el_packages} alt="el_packages" />
                            <p>eLearning Price Quote</p>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="carousel-block">
                        <div className="carousel-img">
                            <img src={inst_design} alt="inst_design" />
                            <p>eLearning Packages</p>
                        </div>
                        <div className="carousel-img last">
                            <img className='letter' src={letter} alt="letter" />
                            <p>Contact us</p>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default HeaderCarousel;
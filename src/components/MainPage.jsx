import React, { useEffect, useState } from 'react';
import Services from './Services';
import DesignLearning from './DesignLearning';

// images
import instruct1 from '../assets/images/Instructional1.png';
import instruct2 from '../assets/images/Instructional2.png';
import checked from '../assets/images/checked.svg';

const MainPage = () => {
  const [scroll, setScroll] = useState(0)
  const [opacity, setOpacity] = useState(0.1);

  useEffect(() => {
    const newOpacity = scroll >= 2000 ? Math.min((scroll - 2000) / 200, 1) : 0.1;
    if (newOpacity >= 0.1) {
      setOpacity(newOpacity);
    }
  }, [scroll]);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (<>
    <main className='main-page'>
      <Services scroll={scroll} />
      <DesignLearning scroll={scroll} />
      <div className="container-block">
        <section id='design' className='instructional-design'>
          <div className="decoration">
            <div className="decoration-circle-top"></div>
            <svg xmlns="http://www.w3.org/2000/svg" width="1162" height="1059" viewBox="0 0 1162 1059" fill="none">
              <path d="M2 6.10352e-05V496C2 507.046 10.9543 516 22 516H1140C1151.05 516 1160 524.954 1160 536V1058.5" stroke={scroll >= 2000 ? 'var(--green)' : "#343434"} strokeOpacity={opacity} strokeWidth="3" />
            </svg>
            <div className="decoration-circle-bottom"></div>
          </div>
          <div className="design-block">
            <h1>Instructional Design</h1>
            <div className="design-info first">
              <img src={instruct1} alt="instruct1" />
              <div className='info'>
                <h4>We know learning inside and out</h4>
                <p>Our instructional design team will work hard to align your business goals with your learning objectives to ensure the training supports your business strategies.</p>
                <ul>
                  <li><span><img src={checked} alt="checked" /></span> Each project requires a unique approach, and we are ready for the challenge</li>
                  <li><span><img src={checked} alt="checked" /></span> Our expertise in the training and development industry will make your project a successe</li>
                  <li><span><img src={checked} alt="checked" /></span> Your goals and deadlines are our priority</li>
                </ul>
              </div>
            </div>
            <div className="design-info second">
              <div className='info'>
                <h4>Our clients love the work we do</h4>
                <p>We pride ourselves on developing training strategies with the learners in mind, ensuring your time and resources are well utilized.</p>
                <ul>
                  <li><span><img src={checked} alt="checked" /></span> We start each project with a careful analysiys of your
                    learning needs</li>
                  <li><span><img src={checked} alt="checked" /></span> We constantly look for ways to save your time and money while exceeding your expectations</li>
                  <li><span><img src={checked} alt="checked" /></span> We don't stop working until you are satisfied with the products
                    we deliver</li>
                </ul>
              </div>
              <img src={instruct2} alt="instruct2" />
            </div>
          </div>
        </section>
      </div>
    </main >
  </>)
}

export default MainPage;
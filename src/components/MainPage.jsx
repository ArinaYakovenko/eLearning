import React from 'react';
import Services from './Services';
import DesignLearning from './DesignLearning';

// images
import instruct1 from '../assets/images/Instructional1.png';
import instruct2 from '../assets/images/Instructional2.png';
import checked from '../assets/images/checked.svg';

const MainPage = () => {
  return (<>
    <main className='main-page'>
      <Services />
      <DesignLearning />
      <div className="container-block">
        <section id='design' className='instructional-design'>
          <div className="design-block">
            <h1>Instructional Design</h1>
            <div className="design-info">
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
            <div className="design-info">
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
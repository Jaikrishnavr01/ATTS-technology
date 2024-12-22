import React from 'react';
import './About.css';
import aboutimage from '../assets/about.svg'

const About = () => {
  return (
    <div id="nextSection" className="about">
      <div className="about-content">
        <div className="text-container">
          <h1>Transforming Jewellery Store Operations</h1>
          <p>
            AURUMM revolutionizes the way jewellery stores operate, offering seamless solutions for gold saving schemes, online sales platforms, and inventory management. Streamline operations, increase productivity, and double your revenue with our longstanding cutting-edge solutions!
            <br />
            Welcome to a future of innovation, efficiency, and brilliance.
            <br />
            Welcome to AURUMM.
          </p>
        </div>
        <div className="about-image">
          <img src={aboutimage} alt="AURUMM" />
        </div>
      </div>
    </div>
  );
};

export default About;

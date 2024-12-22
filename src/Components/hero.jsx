import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import './Hero.css';

function Hero() {
  const [showDescription, setShowDescription] = useState(false);

  // Generate an array of bubble elements
  const bubbles = Array.from({ length: 20 }).map((_, index) => (
    <div
      key={index}
      className="bubble"
      style={{
        width: `${Math.random() * 100 + 50}px`, // Bubble size: 50px to 150px
        height: `${Math.random() * 100 + 50}px`,
        left: `${Math.random() * 100}vw`, // Random horizontal position
        animationDelay: `${Math.random() * 5}s`, // Delay to stagger animations
        animationDuration: `${Math.random() * 10 + 10}s`, // Animation duration
      }}
    ></div>
  ));

  return (
    <div className="hero">
      {bubbles} {/* Render bubbles */}
      <div className="herotext">
        <TypeAnimation
          sequence={[
            '360° Software Solutions for your Jewellery Store',
            1000, // Pause for 1 second
            () => setShowDescription(true), // Set showDescription to true
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: '2em' }}
          repeat={0} // Ensures the animation runs only once
        />
        {showDescription && (
          <div className="hero_desc">
            <p>
              Take Your Jewellery Store to the Next Level with AURUMM - The
              Ultimate Software Suite
            </p>
            <button className="hero_btn">Schedule A Demo</button>
          </div>
        )}
      </div>
     
  <a href="#nextSection" className="scroll-down-btn">
    <span className="arrow">&#8593;</span>
  </a>
    </div>
  );
}

export default Hero;

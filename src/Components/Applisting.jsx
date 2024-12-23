import React, { useState } from 'react';
import './Applisting.css'; 
import App1 from '../assets/app1.svg';
import App2 from '../assets/app2.svg';
import App3 from '../assets/app3.svg';
import logo1 from '../assets/logo1.svg';

const Applisting = () => {
  // Initialize state with a default content (e.g., 'learnMore')
  const [activeContent, setActiveContent] = useState('auPay');  

  // Function to handle button click and set active content
  const handleButtonClick = (contentId) => {
    setActiveContent(contentId);  // Set the active content based on the button clicked
  };

  return (
    <div className="app-listing-container" id='product1'>
      <h1 className="section-title">Featured Apps</h1>
      <p className="section-description">AURUMM for Your Jewellery Business</p>

      {/* Card Container */}
      <div className="card-container">
        {/* Card 1 */}
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={logo1} alt="App 1" className="app-icon"/>
              <h2 className="card-title">AU PAY</h2>
            </div>
            <div className="flip-card-back">
              <h2 className="card-title">An Exclusive Gold Savings Scheme Payment App</h2>
              
              <p className="card-description">Make gold scheme payments simple and easy for your customers with AU Pay - the ultimate jewellery finance partner.</p>
              <button className="cta-button" onClick={() => handleButtonClick('auPay')}>Get Started</button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={logo1} alt="App 2" className="app-icon"/>
              <h2 className="card-title">AU SALES</h2>
            </div>
            <div className="flip-card-back">
              <h2 className="card-title">All-Round Inventory Management Assistant</h2>
            
              <p className="card-description">If you`'`re looking for a holistic store management solution, then AU Sales is the only app you need!</p>
              <button className="cta-button" onClick={() => handleButtonClick('auSales')}>Get Started</button>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={logo1} alt="App 3" className="app-icon"/>
              <h2 className="card-title">AU SHOP</h2>
            </div>
            <div className="flip-card-back">
              <h2 className="card-title">Give Your Fine Jewellery A Sleek Online Platform</h2>
              <p className="card-description">Are you ready to give your customers the ultimate online jewellery shopping experience? Discover AU Shop and let`'`s begin!</p>
              <button className="cta-button" onClick={() => handleButtonClick('auShop')}>Get Started</button>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons Below Cards */}
      <div className="cta-buttons-container" >
        <button className="cta-button" onClick={() => handleButtonClick('auPay')}>Au Pay</button>
        <button className="cta-button" onClick={() => handleButtonClick('auSales')}>Au Sales</button>
        <button className="cta-button" onClick={() => handleButtonClick('auShop')}>Au Shop</button>
      </div>

      {/* Conditional Content Display */}
      <div className="content-display">
        {/* Displaying default content (Learn More) */}
        {activeContent === 'auPay' && (
          <div>
            <div class="container1">
        <div class="image">
            <img src={App1}  alt="The Golden Gold App"/>
        </div>
        <div class="content">
            <h1>The Golden Gold App</h1>
            <h2>We're Making Jewellery Scheme Payments Easier.</h2>
            <p>
                Discover innovative solutions for managing your jewellery investment schemes with ease and transparency. 
                Our app offers user-friendly features for tracking, saving, and planning your investments.
            </p>
        </div>
    </div>
          </div>
        )}

        {activeContent === 'auSales' && (
           <div>
        <div class="container1">
        <div class="image">
            <img src={App2}  alt="The Golden Gold App"/>
        </div>
        <div class="content">
        <h1>The Hybrid ERP Magic</h1>
        <h2>Inventory Management Excellence In Every Tap</h2>
        <p>
                Simplify and optimize your inventory management with intuitive tools designed for efficiency. 
                Track, manage, and streamline operations effortlessly, ensuring precision and productivity at every step.
            </p>
        </div>
    </div>
         </div>
        )}

        {activeContent === 'auShop' && (
            <div>
            <div class="container1">
        <div class="image">
            <img src={App3} height={'400'}  alt="The Golden Gold App"/>
        </div>
        <div class="content">
        <h1>Open Your Shop To World</h1>
        <h2>A Smooth Jewellery Shopping Experience</h2>
        <p>
        Expand your jewellery business globally with our app. Enjoy easy navigation, secure payments, and personalized shopping—making it simple for customers to discover and buy your creations.
            </p>
        </div>
    </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Applisting;

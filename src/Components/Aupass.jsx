import React from 'react';
import './Aupass.css';
import App1 from '../assets/app1.svg'
import App4 from '../assets/app4.svg'
import EnhancedFeatures from './EnhancedFeatures';

const Aupass = () => {
  return (
    <div className="aup-container">
      <header className="aup-header">
        <h5>AU PAY</h5>
        <hr />
        <h2>An Exclusive Savings Scheme Payment App for Your Jewellery Store!</h2>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/">Home</a></li>
            <li className="breadcrumb-item"><a href="/">Product & Features</a></li>
            <li className="breadcrumb-item active" aria-current="page">Aupay</li>
          </ol>
        </nav>
      </header>

      <div className="aup-main-content">
        <section className="aup-section">
          <div className="text-content">
            <h5>AU PAY</h5>
            <h3>The Golden Gold App</h3>
            <h3>We're Making Jewellery Scheme Payments Easier.</h3>
            <p>
              AU Pay introduces a chit scheme payment system that transcends the ordinary - providing your patrons with a
              secure and efficient way to make their jewellery dreams a reality. Whether they're acquiring a timeless piece for
              themselves or expressing love through a thoughtful gift, AU Pay ensures that every installment paid is smooth and
              as memorable as the purchase itself. Give your customers an immersive chit-scheme management platform where
              sophistication meets simplicity - experience AU Pay today!
            </p>
          </div>
          <div className="image-content">
            <img src={App1} alt="AU PAY" />
          </div>
        </section>

        <section className="aup-section">
          <div className="image-content">
            <img src={App4} alt="Digi Gold" />
          </div>
          <div className="text-content1">
            <h5>AU PAY</h5>
            <h3>Digi Gold</h3>
            <h3>Next-Gen Gold Investment Platform</h3>
            <p>
              DIGI GOLD offers real-time investment in gold, fully backed by actual gold stored in secure vaults. With
              AU.Pay‘s DIGI GOLD, your customers can easily buy, store, and sell gold online in small, affordable amounts.
              Whether it‘s 1 gram or 100 grams, DIGI GOLD provides a secure, accessible, and convenient investment solution
              for all.
            </p>
          </div>
        </section>
      </div>
      <EnhancedFeatures/>
    </div>
  );
};
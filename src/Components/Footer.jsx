import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Logo and Description */}
        <div style={styles.section}>
          <img src={logo} alt="AURUMM" style={styles.logo} />
          <p style={styles.text}>
            World-class technical solutions for elevated jewellery store operations.
          </p>
        </div>

        {/* Quick Links */}
        <div style={styles.section}>
          <h4 style={styles.heading}>QUICKLINKS</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}><Link to="/" style={styles.link}>Home</Link></li>
            <li style={styles.listItem}><Link to="contact" href="#contact" style={styles.link}>Contact Us</Link></li>
          </ul>
        </div>

        {/* Solutions */}
        <div style={styles.section}>
          <h4 style={styles.heading}>SOLUTIONS</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}><a href="#product1" style={styles.link}>AU Pay</a></li>
            <li style={styles.listItem}><a href="#product1" style={styles.link}>AU Sales</a></li>
            <li style={styles.listItem}><a href="#product1" style={styles.link}>AU Shop</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div style={styles.section}>
          <h4 style={styles.heading}>Contact</h4>
          <p style={styles.text}>0422 4957575</p>
          <h4 style={styles.heading}>Email</h4>
          <p style={styles.text}>support@atts.in</p>
        </div>
      </div>

      {/* Bottom Text */}
      <div style={styles.bottomText}>
        Aurumm made by <strong>Jai Krishna</strong>. All Rights Reserved © 2024.
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#f5f5f5',
    padding: '20px 40px',
    borderTop: '1px solid #ddd',
    textAlign: 'center',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'start',
    marginBottom: '20px',
  },
  section: {
    flex: '1 1 200px',
    margin: '10px',
  },
  logo: {
    width: '100px',
    marginBottom: '10px',
  },
  text: {
    fontSize: '14px',
    color: '#555',
  },
  heading: {
    fontSize: '16px',
    marginBottom: '10px',
    fontWeight: 'bold',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  },
  listItem: {
    fontSize: '14px',
    color: '#555',
    marginBottom: '5px',
  },
  link: {
    textDecoration: 'none',
    color: '#555',
    fontSize: '14px',
  },
  bottomText: {
    fontSize: '12px',
    color: '#888',
  },
};

export default Footer;

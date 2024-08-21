import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'; // Adjusted import for Twitter
import { IoCall } from 'react-icons/io5';
import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <>
      <hr className="footer-divider" />
      <div className="footer">
        <div className="footer-section">
          <Link className='footer-link' to="terms">Terms Of Services</Link><br />
          <Link className='footer-link' to="privacy">Privacy Policy</Link>
        </div>
        <div className="footer-section">
          <div className="social-icons">
            <FaFacebook className='social-icon' />
            <FaInstagram className='social-icon' />
            <FaTwitter className='social-icon' />
          </div>
          <div className="contact-info">
            <IoCall className='contact-icon' />
            <p>Call us at:</p>
             <p className="phone-number">987654321</p>
          </div>
        </div>
        <div className="footer-section">
          <Link className='footer-link' to="explorenorthindia">North India</Link><br />
          <Link className='footer-link' to="exploresouthindia">South India</Link><br />
          <Link className='footer-link' to="about">About Tourly</Link><br />
        </div>
        <div className="footer-section">
          <Link className='footer-link' to="home">Home</Link><br />
          <Link className='footer-link' to="blog">Client Testimonials</Link><br />
          <Link className='footer-link' to="contact">Contact Us</Link><br />
        </div>
        <div className="footer-section">
          <img src="https://tourly.pt/static/media/payment-methods.14097047.svg" alt="Payment Methods" className="payment-img" />
        </div>
      </div>
      <p className="footer-bottom">© Tourly 2024 | <span className="highlight">Build By Elgoritmo</span> | Credits</p>
    </>
  );
}

export default Footer;

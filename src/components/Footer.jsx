import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-deepBlue text-white py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Contact Information */}
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-semibold">MelaHealth</h3>
          <p>Connecting Communities with Quality Healthcare</p>
        </div>
        {/* Links */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="/privacy" className="hover:text-accent">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-accent">
            Terms of Service
          </a>
          <a href="/contact" className="hover:text-accent">
            Contact Us
          </a>
        </div>
        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white border-t text-gray-700 text-sm">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-6 gap-8">
        
        {/* Logo & Description */}
        <div className="md:col-span-1 space-y-4">
          <div className="text-2xl font-bold text-blue-800">JobBox</div>
          <p className="text-gray-500">
            JobBox is the heart of the design community and the best resource to discover and connect with designers and jobs worldwide.
          </p>
          <div className="flex space-x-4 text-blue-600 text-lg">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
          </div>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Resources</h3>
          <ul className="space-y-1">
            <li>About us</li>
            <li>Our Team</li>
            <li>Products</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Community */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Community</h3>
          <ul className="space-y-1">
            <li>Feature</li>
            <li>Pricing</li>
            <li>Credit</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Quick links</h3>
          <ul className="space-y-1">
            <li>iOS</li>
            <li>Android</li>
            <li>Microsoft</li>
            <li>Desktop</li>
          </ul>
        </div>

        {/* More */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">More</h3>
          <ul className="space-y-1">
            <li>Privacy</li>
            <li>Help</li>
            <li>Terms</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Download App */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Download App</h3>
          <p className="text-gray-500 mb-4">Download our Apps and get extra 15% Discount on your first Order…!</p>
          <div className="flex flex-col gap-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Apple_App_Store_badge.svg"
              alt="App Store"
              className="w-32"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="w-32"
            />
          </div>
        </div>
      </div>

      <div className="border-t py-4 mt-6 text-center text-gray-500 text-xs flex flex-col md:flex-row justify-between max-w-7xl mx-auto px-4">
        <div>Copyright © 2025. JobPortal all rights reserved</div>
        <div className="space-x-4 mt-2 md:mt-0">
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
          <span>Security</span>
        </div>
      </div>

      {/* Scroll to top button */}
      <div className="fixed bottom-5 right-5">
        <button className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700">
          ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;

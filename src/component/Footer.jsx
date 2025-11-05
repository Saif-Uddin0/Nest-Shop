import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-gray-100 text-gray-700 border-t border-gray-50 mt-10  shadow-inner">
      {/* Main Footer Section */}
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10">
        {/* Logo & Info */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <img
              src="https://nest-frontend-v6.vercel.app/assets/imgs/theme/logo.svg"
              alt="Nest Logo"
              className="h-10"
            />
          </div>
          <p className="text-sm text-gray-600">
            Awesome grocery store website template
          </p>
          <div className="space-y-2 text-sm text-gray-600">
            <p>
              <strong>Address:</strong> 5171 W Campbell Ave, Kent, Utah 53127,
              United States
            </p>
            <p>
              <strong>Call Us:</strong> (+91) - 540-025-124553
            </p>
            <p>
              <strong>Email:</strong> sale@Nest.com
            </p>
            <p>
              <strong>Hours:</strong> 10:00 - 18:00, Mon - Sat
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 text-gray-500">
            <a href="#" className="hover:text-green-600 transition-colors">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-green-600 transition-colors">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-green-600 transition-colors">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-green-600 transition-colors">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-gray-900">Company</h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li>
              <a
                href="#"
                className="hover:text-green-600 transition-colors duration-200"
              >
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors">
                Delivery Information
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors">
                Support Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors">
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* Account */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-gray-900">Account</h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li>
              <a href="#" className="hover:text-green-600 transition-colors">
                Sign In
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors">
                View Cart
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors">
                My Wishlist
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors">
                Track My Order
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors">
                Help Ticket
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors">
                Shipping Details
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors">
                Compare Products
              </a>
            </li>
          </ul>
        </div>

        {/* Corporate */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-gray-900">Corporate</h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li>
              <a href="#" className="hover:text-green-600 transition-colors">
                Become a Vendor
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors">
                Affiliate Program
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors">
                Farm Business
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors">
                Farm Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors">
                Our Suppliers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors">
                Accessibility
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors">
                Promotions
              </a>
            </li>
          </ul>
        </div>

        {/* Popular */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-gray-900">Popular</h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li>
              <a href="#" className="hover:text-green-600 transition-colors">
                Milk & Flavoured Milk
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors">
                Butter and Margarine
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors">
                Eggs Substitutes
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors">
                Marmalades
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors">
                Sour Cream and Dips
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors">
                Tea & Kombucha
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors">
                Cheese
              </a>
            </li>
          </ul>
        </div>

        {/* Install App */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-gray-900">Install App</h3>
          <p className="text-sm text-gray-600 mb-3">
            From App Store or Google Play
          </p>
          <div className="flex gap-2 mb-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-10 rounded-lg shadow-sm hover:scale-105 transition-transform duration-300"
            />
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="h-10 rounded-lg shadow-sm hover:scale-105 transition-transform duration-300"
            />
          </div>
          <p className="text-sm text-gray-600">Secured Payment Gateways</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 mt-10 pt-6 text-center text-sm text-gray-500">
        <p>
          © 2025{" "}
          <span className="font-semibold text-green-600">
            Nest Mart & Grocery
          </span>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

// src/components/Footer.tsx
import React from "react";
import { Home, Phone, Mail, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaRss,
  FaYoutube,
} from "react-icons/fa";

// Import images locally
import visa from "../assets/visa.jpg";
import paypal from "../assets/paypal.jpg";
import discover from "../assets/discover.jpg";
import maestro from "../assets/maestro.jpg";
import mastercard from "../assets/mastercard.jpg";
                          
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 border-t">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand & Contact */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-900">kapee.</h1>
          <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat mattis eros.
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Home size={18} /> Lorem Ipsum, 2046 Lorem Ipsum
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} /> 576-245-2478
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} /> info@kapee.com
            </li>
            <li className="flex items-center gap-2">
              <Clock size={18} /> Mon - Fri / 9:00 AM - 6:00 PM
            </li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="font-bold mb-4 text-gray-900 uppercase tracking-wide">
            Information
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-yellow-600">About Us</Link></li>
            <li><Link to="/store-location" className="hover:text-yellow-600">Store Location</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-600">Contact Us</Link></li>
            <li><Link to="/shipping" className="hover:text-yellow-600">Shipping & Delivery</Link></li>
            <li><Link to="/news" className="hover:text-yellow-600">Latest News</Link></li>
            <li><Link to="/sitemap" className="hover:text-yellow-600">Our Sitemap</Link></li>
          </ul>
        </div>

        {/* Our Service */}
        <div>
          <h3 className="font-bold mb-4 text-gray-900 uppercase tracking-wide">
            Our Service
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/privacy" className="hover:text-yellow-600">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-yellow-600">Terms of Sale</Link></li>
            <li><Link to="/customer-service" className="hover:text-yellow-600">Customer Service</Link></li>
            <li><Link to="/delivery" className="hover:text-yellow-600">Delivery Information</Link></li>
            <li><Link to="/payments" className="hover:text-yellow-600">Payments</Link></li>
            <li><Link to="/saved-cards" className="hover:text-yellow-600">Saved Cards</Link></li>
          </ul>
        </div>

        {/* My Account + Newsletter */}
        <div>
          <h3 className="font-bold mb-4 text-gray-900 uppercase tracking-wide">
            My Account
          </h3>
          <ul className="space-y-2 text-sm mb-6">
            <li><Link to="/account" className="hover:text-yellow-600">My Account</Link></li>
            <li><Link to="/shop" className="hover:text-yellow-600">My Shop</Link></li>
            <li><Link to="/cart" className="hover:text-yellow-600">My Cart</Link></li>
            <li><Link to="/checkout" className="hover:text-yellow-600">Checkout</Link></li>
            <li><Link to="/wishlist" className="hover:text-yellow-600">My Wishlist</Link></li>
            <li><Link to="/tracking" className="hover:text-yellow-600">Tracking Order</Link></li>
          </ul>

          {/* Newsletter */}
          <h3 className="font-bold mb-3 text-gray-900">Newsletter</h3>
          <p className="text-sm mb-3">
            Subscribe to our mailing list to get the new updates!
          </p>
          <div className="flex gap-2 mb-5">
            <input
              type="email"
              placeholder="Your email address"
              className="px-3 py-2 rounded-l border border-gray-300 flex-1 focus:outline-none"
            />
            <button className="bg-yellow-500 px-4 py-2 rounded-r text-white font-semibold hover:bg-yellow-600">
              SIGN UP
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3 flex-wrap">
            <a href="#" className="bg-blue-600 w-8 h-8 flex items-center justify-center rounded text-white"><FaFacebookF size={14} /></a>
            <a href="#" className="bg-black w-8 h-8 flex items-center justify-center rounded text-white"><FaTwitter size={14} /></a>
            <a href="#" className="bg-pink-600 w-8 h-8 flex items-center justify-center rounded text-white"><FaInstagram size={14} /></a>
            <a href="#" className="bg-blue-500 w-8 h-8 flex items-center justify-center rounded text-white"><FaLinkedinIn size={14} /></a>
            <a href="#" className="bg-red-600 w-8 h-8 flex items-center justify-center rounded text-white"><FaYoutube size={14} /></a>
            <a href="#" className="bg-orange-500 w-8 h-8 flex items-center justify-center rounded text-white"><FaRss size={14} /></a>
            <a href="#" className="bg-red-700 w-8 h-8 flex items-center justify-center rounded text-white"><FaPinterestP size={14} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-100 border-t py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>Kapee © 2025 by PressLayouts. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-yellow-600">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-yellow-600">Terms of Use</Link>
            <Link to="/help" className="hover:text-yellow-600">Help Center</Link>
          </div>
          <div className="flex gap-3">
            <img src={visa} alt="Visa" className="h-6" />
            <img src={paypal} alt="PayPal" className="h-6" />
            <img src={discover} alt="Discover" className="h-6" />
            <img src={maestro} alt="Maestro" className="h-6" />
            <img src={mastercard} alt="MasterCard" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

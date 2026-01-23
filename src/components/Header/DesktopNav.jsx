import React from "react";
import logo from "../../assets/imgs/logo-enhanced.png";
import { NavLink } from "react-router-dom";
function DesktopNav() {
  // Note: Import these at the top of your actual file:
  // import { Link, NavLink } from "react-router-dom";
  // import logo from "../../assets/imgs/logo-enhanced.png";
  
  return (
    <div className="hidden md:flex items-center justify-between w-full max-w-7xl mx-auto px-6">
      {/* Left Navigation Items */}
      <div className="flex gap-8 lg:gap-10 items-center flex-1 justify-end z-30">
        <NavLink to="/" className="text-lg lg:text-xl text-white transition-colors duration-300">
          Home
        </NavLink>
        <NavLink to="/services" className="text-lg lg:text-xl hover:text-rose-600 transition-colors duration-300">
          Styling
        </NavLink>
        <NavLink to="/service-package" className="text-lg lg:text-xl hover:text-rose-600 transition-colors duration-300 whitespace-nowrap">
          Service Package
        </NavLink>
      </div>

      {/* Centered Logo */}
      <div className="flex-shrink-0 px-8 lg:px-12 z-30">
        <a href="/">
          <img 
            src={logo} 
            alt="La Vie Rose Logo" 
            className="w-28 lg:w-32 h-auto object-contain hover:scale-105 transition-transform duration-300"
          />
        </a>
      </div>

      {/* Right Navigation Items */}
      <div className="flex gap-8 lg:gap-10 items-center flex-1 justify-start z-30">
        <NavLink to="/our-story" className="text-lg lg:text-xl hover:text-rose-600 transition-colors duration-300 whitespace-nowrap">
          Our Story
        </NavLink>
        <NavLink to="/contact-us" className="text-lg lg:text-xl hover:text-rose-600 transition-colors duration-300">
          Contact
        </NavLink>
      </div>
    </div>
  );
}

export default DesktopNav;
import React from "react";
import { MapPin, Phone, Facebook, Instagram } from "lucide-react";
import Divider from "./Divider";
import ContactInfo from "./ContactInfo";
import BrandSection from "./BrandSection";
import SocialAndLinks from "./SocialAndLinks";
function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <BrandSection />

          {/* Contact Info */}
          <ContactInfo />

          {/* Quick Links & Social */}
          <SocialAndLinks />
        </div>

        {/* Divider */}
        <Divider />
      </div>
    </footer>
  );
}

export default Footer;

import React from "react";
import Anchor from "../Header/Anchor";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "../../assets/logo.webp";
import logo2 from "../../assets/logo2.jpg";
import logo3 from "../../assets/logo3.jpeg";

const Footer2: React.FC = () => {
  return (
    <footer className="bg-violet-500 text-color py-10 px-6 md:px-20 flex flex-col flex-wrap">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img src={logo} alt="logo" className="h-24 w-24 rounded-full" />
          <p className="text-sm mt-6 max-w-xs mb-5">
            Precious Lamb is a registered 501 (c)3 that provides full-day Christ-centered,
            quality education and care to children 18 months to five years old experiencing
            homelessness at no cost to the parent. Through early education, we seek to foster
            permanent positive change in our families.
          </p>
          <div className=" flex items-center space-x-4">
            <img src={logo3} alt="Top Rated 2024" className="h-16 w-16 rounded-full" />
            <img src={logo2} alt="Platinum Transparency 2024" className="h-16 w-16 rounded-full" />
          </div>
        </div>

        {/* Quick Menu */}
        <div className="flex flex-col items-center md:items-start ml-30">
          <h3 className="text-lg font-bold mb-2">Quick Menu</h3>
          <ul className="space-y-2 text-sm text-center md:text-left">
            <li><a href="#about" className="hover:underline">About Us</a></li>
            <li><a href="#work" className="hover:underline">Our Work</a></li>
            <li><a href="#get-involved" className="hover:underline">Get Involved</a></li>
            <li><a href="#donate" className="hover:underline">Donate</a></li>
            <li><a href="#careers" className="hover:underline">Careers</a></li>
          </ul>
        </div>

        {/* Contact & CTA */}
        <div className="flex flex-col items-center md:ml-26">
          <h3 className="text-lg font-bold">Get in Touch</h3>
          <div className="flex space-x-4 mt-4">
            <Anchor title={<FaFacebookF size={20} />} />
            <Anchor title={<FaYoutube size={20} />} />
            <Anchor title={<FaInstagram size={20} />} />
          </div>
          <button className="h-9 mt-6 rounded-lg px-4 bg-lime-500 transition-all hover:bg-lime-600 duration-500">
            CONTACT
          </button>
        </div>
      </div>

      {/* Apply CTA */}
      <div className="flex justify-center">
        <div className="p-6 rounded-lg text-center w-full max-w-sm">
          <h3 className="text-xl font-bold font-serif">Want to Work With Us?</h3>
          <button className="h-10 font-serif mt-6 rounded-lg px-4 bg-lime-500 transition-all duration-500 hover:bg-lime-600">
            Apply Today
          </button>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col md:flex-row justify-around border-t border-color pt-4 text-center text-sm">
        <p>&copy; 2025 Precious Lamb, All Rights Reserved.</p>
        <p>
          Powered by <a href="https://morweb.org" className="underline">Morweb.org</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer2;
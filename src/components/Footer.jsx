import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-14 px-6 md:px-20">
      {/* Top grid */}
      <div className="grid md:grid-cols-3 gap-12">
        {/* About */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">
            IELTS Institute
          </h3>
          <p className="mb-4">
            Helping students achieve their dreams with expert guidance,
            interactive courses, and modern AI tools.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="text-gray-400 hover:text-white transition">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Courses
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-white mb-4">Contact</h4>
          <p>Email: info@ieltsinstitute.com</p>
          <p>Phone: +91 1234567890</p>
          <p className="mt-2">Address: 123, Education Street, Delhi, India</p>
        </div>
      </div>

      {/* Bottom line */}
      <p className="text-center text-gray-500 mt-12">
        © 2025 IELTS Institute. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

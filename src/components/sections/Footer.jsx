import React from 'react';
import swizzLogo from '../../assets/images/swizzaround-logo.png';
import { MdOutlineEmail } from 'react-icons/md';
import { IoIosSend } from 'react-icons/io';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

function Footer() {
  return (
    <div className="flex flex-col gap-8 px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32 py-8 bg-gray-100">
      {/* Top Section */}
      <div className="flex flex-col gap-6 lg:flex-row lg:justify-between lg:items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <img src={swizzLogo} className="w-10" alt="SwizzAround Logo" />
          <p className="font-semibold text-base lg:text-lg">SwizzAround</p>
        </div>

        {/* Email Subscription */}
        <div className="border-2 flex items-center pl-2 py-1 rounded-lg relative w-full lg:w-auto">
          <MdOutlineEmail size={20} />
          <input
            className="w-full px-2 py-2 text-sm lg:text-base outline-none"
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
          />
          <button className="bg-[#003f67] p-2 rounded-lg">
            <IoIosSend size={20} color="white" />
          </button>
        </div>
      </div>

      <hr className="border-gray-300" />

      {/* Links Section */}
      <div className="grid grid-cols-12 gap-6">
        {/* About */}
        <div className="col-span-12 sm:col-span-6 lg:col-span-3 flex flex-col">
          <p className="font-semibold mb-2 text-base lg:text-lg">About</p>
          <a href="#" className="text-gray-500 text-sm lg:text-base leading-6">
            About Us
          </a>
          <a href="#" className="text-gray-500 text-sm lg:text-base leading-6">
            Features
          </a>
          <a href="#" className="text-gray-500 text-sm lg:text-base leading-6">
            New
          </a>
          <a href="#" className="text-gray-500 text-sm lg:text-base leading-6">
            Careers
          </a>
        </div>

        {/* Company */}
        <div className="col-span-12 sm:col-span-6 lg:col-span-3 flex flex-col">
          <p className="font-semibold mb-2 text-base lg:text-lg">Company</p>
          <a href="#" className="text-gray-500 text-sm lg:text-base leading-6">
            Our Team
          </a>
          <a href="#" className="text-gray-500 text-sm lg:text-base leading-6">
            Partner with Us
          </a>
          <a href="#" className="text-gray-500 text-sm lg:text-base leading-6">
            FAQ
          </a>
          <a href="#" className="text-gray-500 text-sm lg:text-base leading-6">
            Blog
          </a>
        </div>

        {/* Support */}
        <div className="col-span-12 sm:col-span-6 lg:col-span-3 flex flex-col">
          <p className="font-semibold mb-2 text-base lg:text-lg">Support</p>
          <a href="#" className="text-gray-500 text-sm lg:text-base leading-6">
            Account
          </a>
          <a href="#" className="text-gray-500 text-sm lg:text-base leading-6">
            Support Center
          </a>
          <a href="#" className="text-gray-500 text-sm lg:text-base leading-6">
            Feedback
          </a>
          <a href="#" className="text-gray-500 text-sm lg:text-base leading-6">
            Contact Us
          </a>
          <a href="#" className="text-gray-500 text-sm lg:text-base leading-6">
            Accessibility
          </a>
        </div>

        {/* Social Media */}
        <div className="col-span-12 sm:col-span-6 lg:col-span-3 flex flex-col">
          <p className="font-semibold mb-2 text-base lg:text-lg">Social Media</p>
          <div className="flex gap-4">
            <a href="#" aria-label="Instagram">
              <BsInstagram size={24} color="#003f67" />
            </a>
            <a href="#" aria-label="Facebook">
              <FaFacebook size={24} color="#003f67" />
            </a>
            <a href="#" aria-label="Twitter">
              <BsTwitter size={24} color="#003f67" />
            </a>
          </div>
        </div>
      </div>

      <hr className="border-gray-300" />

      {/* Bottom Section */}
      <p className="text-sm lg:text-base text-center text-gray-500">
        © 2024 SwizzAround. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;

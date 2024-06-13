import React from 'react';
import swizzLogo from '../../assets/images/swizzaround-logo.png';
import { MdOutlineEmail } from 'react-icons/md';
import { IoIosSend } from 'react-icons/io';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
function Footer() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:justify-between ">
        <div className="flex items-center">
          <img src={swizzLogo} className="w-10" alt="SwizzAround Logo" />
          <p className="font-semibold text-sm">SwizzAround</p>
        </div>
        <div className="border-2 flex items-center pl-2 py-[0.15rem] pr-[0.15rem] rounded-lg relative">
          <MdOutlineEmail size={20} />
          <input
            className="w-full px-2 py-1"
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
          />
          <IoIosSend
            size={35}
            className="bg-[#003f67] p-2 rounded-lg"
            color="white"
          />
        </div>
      </div>
      <hr />
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-6 lg:col-span-3 flex flex-col">
          <p className="font-semibold mb-2">About</p>
          <a href="" className="text-gray-500 text-sm leading-6">
            About Us
          </a>
          <a href="" className="text-gray-500 text-sm leading-6">
            Features
          </a>
          <a href="" className="text-gray-500 text-sm leading-6">
            New
          </a>
          <a href="" className="text-gray-500 text-sm leading-6">
            Careers
          </a>
        </div>
        <div className="col-span-6 lg:col-span-3 flex flex-col">
          <p className="font-semibold mb-2">Company</p>
          <a href="" className="text-gray-500 text-sm leading-6">
            Our Team
          </a>
          <a href="" className="text-gray-500 text-sm leading-6">
            Partner with Us
          </a>
          <a href="" className="text-gray-500 text-sm leading-6">
            FAQ
          </a>
          <a href="" className="text-gray-500 text-sm leading-6">
            Blog
          </a>
        </div>
        <div className="col-span-6 lg:col-span-3 flex flex-col">
          <p className="font-semibold mb-2">Support</p>
          <a href="" className="text-gray-500 text-sm leading-6">
            Account
          </a>
          <a href="" className="text-gray-500 text-sm leading-6">
            Support Center
          </a>
          <a href="" className="text-gray-500 text-sm leading-6">
            Feedback
          </a>
          <a href="" className="text-gray-500 text-sm leading-6">
            Contact Us
          </a>
          <a href="" className="text-gray-500 text-sm leading-6">
            Accessibility
          </a>
        </div>
        <div className="col-span-6 lg:col-span-3 flex flex-col">
          <p className="font-semibold mb-2">Social Media</p>
          <div className="flex gap-4">
            <BsInstagram size={20} color="#003f67" />
            <FaFacebook size={20} color="#003f67" />
            <BsTwitter size={20} color="#003f67" />
          </div>
        </div>
      </div>
      <hr />
      <p className="text-sm text-center">
        © 2024 SwizzAround. Copyright and All rights reserved.
      </p>
    </div>
  );
}

export default Footer;

import React, { useState } from 'react';
import johnDoe from '../../assets/images/johndoe.jpg';
import photoCard1 from '../../assets/images/photoCard1.png';
import photoCard2 from '../../assets/images/photoCard2.png';
import photoCard3 from '../../assets/images/photoCard3.png';
import { IoMdBookmark } from 'react-icons/io';
import Button from '../common/Button';

function Tours() {
  return (
    <div className="p-4">
      <div className="">
        <p className="text-xl lg:text-3xl">What They Say ━━</p>
        <p className="text-3xl font-bold lg:text-7xl ">What Our Customer</p>
        <p className="text-3xl">Say About Us</p>
      </div>
      <div className="p-4 my-4 border-2 rounded-xl relative">
        <IoMdBookmark size={60} className="absolute right-2 -top-5" />
        <div className="flex items-center gap-2 py-4 px-2">
          <img src={johnDoe} alt="" className="rounded-full w-12" />
          <div className="">
            <p className="font-semibold">John Doe</p>
            <p className="text-sm text-gray-500">Travel Enthusiast</p>
          </div>
        </div>
        <hr />
        <p className="">
          "This platform is very helpful because there are many beautiful
          destinations here and this platform really help me in finding
          beautiful destinations and also very good service so I really like to
          use SwizzAround when I want to go traveling with my family."
        </p>
        <p className="text-xl mt-3">⭐⭐⭐⭐⭐</p>
      </div>

      <div className="flex flex-col gap-4 items-center relative mt-12">
        <div
          className={`w-4/5 bg-white border-2 p-2 
          }`}
        >
          <img src={photoCard1} alt="" />
        </div>
        <div className={`w-4/5 bg-white border-2 p-2 `}>
          <img src={photoCard2} alt="" />
        </div>
        <div className={`w-4/5 bg-white border-2 p-2`}>
          <img src={photoCard3} alt="" />
        </div>
      </div>

      <div className="text-center bg-customBlue-1/10 p-6 my-12 rounded-3xl">
        <p className="text-3xl font-bold">
          Let's Don't Miss The 50% Discount &
        </p>
        <p className="text-3xl font-normal">Explore the Beauty of the World</p>
        <p className="text-gray-600 mb-4">
          We have many special offers especially for you
        </p>
        <Button isFilled={true} color={'#003f67'} buttonLabel={'Get Started'} />
      </div>
    </div>
  );
}

export default Tours;

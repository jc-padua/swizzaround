import React from 'react';
import Button from '../common/Button';
import { CiLocationOn } from 'react-icons/ci';
import { IoPeopleOutline } from 'react-icons/io5';
import { RiCalendarCheckLine, RiCalendarCloseFill } from 'react-icons/ri';
import interlaken from '../../assets/images/interlaken.png';
import jungfraujoch from '../../assets/images/jungfraujoch.png';
import lakegeneva from '../../assets/images/lakegeneva.png';
import lucerne from '../../assets/images/lucerne.png';
import lugano from '../../assets/images/lugano.png';
import swizzNationalPark from '../../assets/images/switzNationalPark.png';

function Destination() {
  const destinations = [
    {
      key: 'interlaken',
      name: 'Interlaken',
      location: 'Bernese Oberland, Switzerland',
      price: 5000,
      image: interlaken,
    },
    {
      key: 'jungfraujoch',
      name: 'Jungfraujoch',
      location: 'Bernese Oberland, Switzerland',
      price: 4500,
      image: jungfraujoch,
    },
    {
      key: 'lakegeneva',
      name: 'Lake Geneva',
      location: 'Valais Cantons, Switzerland',
      price: 3000,
      image: lakegeneva,
    },
    {
      key: 'lucerne',
      name: 'Lucerne',
      location: 'Lucerne Canton, Switzerland',
      price: 2500,
      image: lucerne,
    },
    {
      key: 'lugano',
      name: 'Lugano',
      location: 'Ticino Canton, Switzerland',
      price: 5000,
      image: lugano,
    },
    {
      key: 'swizzNationalPark',
      name: 'Switzerland National Park',
      location: 'Graubünden Canton, Switzerland',
      image: swizzNationalPark,
      price: 5500,
    },
  ];

  return (
    <div className="my-12 xl:my-6 flex flex-col ">
      <div className="bg-slate-500/10 rounded-xl p-8 xl:p-2 my-16 xl:my-0 xl:mx-48 relative xl:flex xl:flex-col xl:justify-center">
        <div className="flex flex-col gap-3 mb-4 text-center">
          <p className="text-xl lg:text-2xl">Top Destination ━━</p>
          <p className="text-3xl lg:text-4xl ">
            <span className="font-bold">Let's Explore</span> Your Dream
          </p>
          <p className="text-3xl lg:text-4xl font-medium">Destination Here!</p>
          <p className="text-sm lg:text-xl text-slate-500 my-2">
            We have recommended popular destinations every week so you don't
            have to worry about your dream destination with SwissAround.
          </p>
        </div>

        <div className="flex flex-col min-lg:flex-row min-lg:absolute min-lg:-bottom-12 gap-4 lg:gap-2 rounded-lg p-4 mt-8 bg-white  shadow-[0_7px_60px_-15px_rgba(0,0,0,0.3)]">
          <div className="flex flex-col xl:flex-row gap-4 xl:items-center xl:justify-center ">
            <div className="flex gap-4 items-center">
              <CiLocationOn
                size={30}
                color="#003f67"
                className="bg-[#003f67]/10 rounded-full p-2 mb-1"
              />
              <div className="">
                <p className="font-semibold">Location</p>
                <p className="text-gray-500 text-sm">Where are you going?</p>
              </div>
            </div>
            <hr />
            <div className="flex gap-4 items-center">
              <IoPeopleOutline
                size={30}
                color="#003f67"
                className="bg-[#003f67]/10 rounded-full p-2 mb-1"
              />
              <div className="">
                <p className="font-semibold">Person</p>
                <p className="text-gray-500 text-sm">How many person?</p>
              </div>
            </div>
            <hr />
            <div className="flex gap-4 items-center">
              <RiCalendarCheckLine
                size={30}
                color="#003f67"
                className="bg-[#003f67]/10 rounded-full p-2 mb-1"
              />
              <div className="">
                <p className="font-semibold">Check In</p>
                <p className="text-gray-500 text-sm">03 August 2024</p>
              </div>
            </div>
            <hr />
            <div className="flex gap-4 items-center">
              <RiCalendarCloseFill
                size={30}
                color="#003f67"
                className="bg-[#003f67]/10 rounded-full p-2 mb-1"
              />
              <div className="">
                <p className="font-semibold">Check Out</p>
                <p className="text-gray-500 text-sm">14 August 2024</p>
              </div>
            </div>
            <hr />
            <Button buttonLabel={'Get Started'} isFilled={true} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-5 mt-20 xl:mx-32">
        {destinations.map(destination => (
          <div
            key={destination.key}
            className="col-span-12 md:col-span-6 lg:col-span-4 rounded-lg border-2 p-2"
          >
            <div>
              <img
                src={destination.image}
                alt=""
                className="aspect-auto object-fill h-52 w-full rounded-lg"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="">
                <p className="mt-4 font-semibold text-sm">{destination.name}</p>
                <p className="flex items-center gap-1 text-xs mb-3 text-gray-600">
                  <span>
                    <CiLocationOn size={20} color="#003f67" />
                  </span>
                  {destination.location}
                </p>
              </div>
              <Button buttonLabel={`₣${destination.price}`} />
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-4">
        <Button buttonLabel={'See More'} isFilled={true} />
      </div>
    </div>
  );
}

export default Destination;

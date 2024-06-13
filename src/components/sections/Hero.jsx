import React, { useEffect } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { CiCalendarDate } from 'react-icons/ci';
import Button from '../common/Button';
import switzLandscape1 from '../../assets/images/switz-landscape1.png';
import switzLandscape2 from '../../assets/images/switz-landscape2.png';
import switzPortrait1 from '../../assets/images/switz-portrait1.png';
import switzPortrait2 from '../../assets/images/switz-portrait2.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';

import { useScreenSize } from '../../context/ScreenSizeContext';

function Hero() {
  const { screenSize } = useScreenSize();

  const Carousel = (
    <>
      <Swiper
        spaceBetween={40}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper rounded-2xl my-20 lg:w-1/2"
      >
        <SwiperSlide>
          <img
            className="rounded-2xl aspect-auto shadow-[0_7px_60px_-15px_rgba(0,0,0,0.3)] "
            src={switzLandscape1}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-2xl aspect-auto shadow-[0_7px_60px_-15px_rgba(0,0,0,0.3)]"
            src={switzLandscape2}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-2xl aspect-auto shadow-[0_7px_60px_-15px_rgba(0,0,0,0.3)]"
            src={switzPortrait2}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" rounded-2xl aspect-auto shadow-[0_7px_60px_-15px_rgba(0,0,0,0.3)]"
            src={switzPortrait1}
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );

  const getCurrentDate = () => {
    const date = new Date();

    const day = date.getDate().toString().padStart(2, '0');
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();

    return `${day} ${month}, ${year}`;
  };

  return (
    <div className="flex flex-col min-h-[85vh] lg:flex-row pt-8">
      <div className="lg:px-16 lg:relative lg:w-1/2 lg:flex lg:flex-col">
        <div className="flex flex-col gap-3 my-4">
          <p className="text-xl lg:text-2xl">✈️ Explore the World ━━</p>
          <p className="text-3xl lg:text-4xl font-bold">Discover The</p>
          <p className="text-3xl lg:text-4xl font-medium">Best Destinations</p>
          <p className="text-3xl lg:text-4xl font-medium mb-4">
            In Switzerland
          </p>
          <p className="text-md lg:text-xl text-slate-500 mb-6">
            Let's find your dream destinations here we will recommend you a
            beautiful place and a cheap trip with your beloved family.
          </p>

          <div className="lg:absolute lg:bottom-20 lg:z-10 lg:w-[40rem] bg-white w-full rounded-lg shadow-[0_7px_60px_-15px_rgba(0,0,0,0.3)]">
            <div className="flex flex-col lg:flex-row lg:justify-around gap-5 p-4">
              <div className="location flex gap-4  lg:items-center">
                <div className="bg-customBlue-3/20 p-2 rounded-full inline-block">
                  <CiLocationOn size={30} className="text-customBlue-2" />
                </div>
                <div className="">
                  <p className="text-sm">Location</p>
                  <p className="text-sm">Where are you going?</p>
                </div>
              </div>
              <div className="date flex gap-4 lg:items-center">
                <div className="bg-customBlue-3/20 p-2 rounded-full inline-block">
                  <CiCalendarDate size={30} className="text-customBlue-2" />
                </div>
                <div className="">
                  <p>Select Date</p>
                  <p>{getCurrentDate()}</p>
                </div>
              </div>
              <Button buttonLabel={'Get Started'} isFilled={true} />
            </div>
          </div>
        </div>
      </div>

      {screenSize <= 1024 ? (
        Carousel
      ) : (
        <div className="lg:w-1/2 lg:grid lg:grid-cols-2 lg:grid-rows-2 gap-4 ">
          <div className="relative flex items-end justify-self-end">
            <img
              className="w-72 aspect-auto rounded-2xl shadow-[0_7px_60px_-15px_rgba(0,0,0,0.3)]"
              src={switzPortrait1}
              alt=""
            />
            <div className="absolute bottom-7 -left-52 backdrop-blur-xl bg-blue-400/20 px-10 py-6 w-64 text-center rounded-lg shadow-[0_7px_60px_-15px_rgba(0,0,0,0.3)]">
              <p className="font-bold text-lg">100+ Destinations</p>
              <p>More than 100 Travelers use this platform</p>
            </div>
          </div>
          <div className="flex items-end relative">
            <div className="absolute top-20 left-10 backdrop-blur-xl bg-blue-400/20 px-5 py-4 text-center rounded-lg shadow-[0_7px_60px_-15px_rgba(0,0,0,0.3)]">
              <p className="font-bold text-lg">100%</p>
              <p>Verified</p>
            </div>
            <img
              className="rounded-2xl aspect-auto shadow-[0_7px_60px_-15px_rgba(0,0,0,0.3)] "
              src={switzLandscape1}
              alt=""
            />
          </div>
          <div className="row-start-2 ">
            <img
              className="rounded-2xl h-80 aspect-auto shadow-[0_7px_60px_-15px_rgba(0,0,0,0.3)]"
              src={switzLandscape2}
              alt=""
            />
          </div>
          <div className="row-start-2 aspect-auto ">
            <img
              className="w-80 rounded-2xl shadow-[0_7px_60px_-15px_rgba(0,0,0,0.3)]"
              src={switzPortrait2}
              alt=""
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Hero;

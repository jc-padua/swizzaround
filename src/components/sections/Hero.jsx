import React from 'react';
import { CiLocationOn, CiCalendarDate } from 'react-icons/ci';
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
    <Swiper
      spaceBetween={40}
      centeredSlides={true}
      autoplay={{ delay: 3500, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper rounded-2xl my-20 lg:w-1/2"
    >
      <SwiperSlide>
        <img className="rounded-2xl aspect-auto shadow-lg" src={switzLandscape1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="rounded-2xl aspect-auto shadow-lg" src={switzLandscape2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="rounded-2xl aspect-auto shadow-lg" src={switzPortrait2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="rounded-2xl aspect-auto shadow-lg" src={switzPortrait1} alt="" />
      </SwiperSlide>
    </Swiper>
  );

  const getCurrentDate = () => {
    const date = new Date();
    const day = date.getDate().toString().padStart(2, '0');
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    return `${day} ${month}, ${year}`;
  };

  return (
    <div className="flex flex-col min-h-[85vh] lg:flex-row pt-8 2xl:pt-16">
      <div className="lg:px-16 lg:relative lg:w-1/2 lg:flex lg:flex-col 2xl:px-32 pt-20">
        <div className="flex items-center flex-col gap-3 my-4 2xl:gap-6">
          <p className="text-xl lg:text-2xl xl:text-4xl 2xl:text-5xl">✈️ Explore the World ━━</p>
          <p className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold">Discover The</p>
          <p className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-medium">Best Destinations</p>
          <p className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-medium mb-4">In Switzerland</p>
          <p className="text-center text-md lg:text-lg xl:text-xl 2xl:text-2xl text-slate-500 mb-6">
            Let's find your dream destinations here we will recommend you a beautiful place and a cheap trip with your
            beloved family.
          </p>

          <div className="book-now bg-white w-full max-w-7xl mx-auto rounded-xl shadow-lg">
  <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-6 px-4 py-4 md:px-8 md:py-6 xl:px-2 xl:py-8">
    <div className="location flex gap-3 items-center">
      <div className="bg-customBlue-3/20 p-2 rounded-full">
        <CiLocationOn size={16} className="text-customBlue-2" />
      </div>
      <div>
        <p className="text-sm lg:text-base xl:text-md font-semibold">
          Location
        </p>
        <p className="text-xs lg:text-sm xl:md text-gray-500">
          Where are you going?
        </p>
      </div>
    </div>
    <div className="date flex gap-3 items-center">
      <div className="bg-customBlue-3/20 p-2 rounded-full">
        <CiCalendarDate size={16} className="text-customBlue-2" />
      </div>
      <div>
        <p className="text-sm lg:text-base xl:text-md font-semibold">
          Select Date
        </p>
        <p className="text-xs lg:text-sm xl:md text-gray-500">
          {getCurrentDate()}
        </p>
      </div>
    </div>
    <div className="w-full lg:w-auto flex justify-center">
      <Button
        buttonLabel={'Get Started'}
        isFilled={true}
        className="text-sm lg:text-base xl:text-lg px-5 py-2 lg:px-6 lg:py-3"
      />
    </div>
  </div>
</div>

        </div>
      </div>

      {screenSize <= 1024 ? (
        Carousel
      ) : (
        <div className="lg:w-1/2 lg:grid lg:grid-cols-2 lg:grid-rows-2 gap-4 2xl:gap-8">
          <div className=" relative flex items-end justify-self-end">
            <img
              className="w-72 xl:w-56 2xl:w-80 aspect-auto rounded-2xl shadow-lg"
              src={switzPortrait1}
              alt=""
            />
            <div className="absolute -top-10 -left-56 2xl:-left-44 backdrop-blur-xl bg-blue-400/20 px-4 py-6 xl:py-4 xl:px-4 2xl:px-6 2xl:py-4 w-64 2xl:w-80 text-center rounded-lg shadow-lg">
              <p className="font-bold text-lg xl:text-base 2xl:text-xl">100+ Destinations</p>
              <p className="xl:text-base 2xl:text-lg">More than 100 Travelers use this platform</p>
            </div>
          </div>
          <div className=" flex items-end relative">
            <img className="rounded-2xl aspect-auto shadow-lg " src={switzLandscape1} alt="" />
            <div className="absolute left-10 2xl:-bottom-16 2xl:left-16 backdrop-blur-xl bg-blue-400/20 px-5 py-4 2xl:px-8 2xl:py-6 text-center rounded-lg shadow-lg">
              <p className="font-bold text-lg 2xl:text-xl">100%</p>
              <p className="2xl:text-lg">Verified</p>
            </div>
          </div>
          <div className="row-start-2 flex justify-end">
            <img
              className="rounded-2xl h-80 xl:h-48 2xl:h-64 aspect-auto shadow-lg"
              src={switzLandscape2}
              alt=""
            />
          </div>
          <div className=" row-start-2 aspect-auto">
            <img
              className="w-80 xl:w-56 2xl:w-72 rounded-2xl shadow-lg"
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

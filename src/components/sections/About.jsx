import React from 'react';
import { FaMapSigns } from 'react-icons/fa';
import { FaPersonWalkingLuggage } from 'react-icons/fa6';
import { MdOutlineFlightTakeoff } from 'react-icons/md';
import switzAbout1 from '../../assets/images/switz-about1.png';
import switzAbout2 from '../../assets/images/switz-about2.png';
import switzAbout3 from '../../assets/images/switz-about3.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import { useScreenSize } from '../../context/ScreenSizeContext';

function About() {
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
        className="mySwiper my-20 rounded-2xl"
      >
        <SwiperSlide>
          <img
            className=" rounded-2xl aspect-auto shadow-[0_7px_60px_-15px_rgba(0,0,0,0.3)]"
            src={switzAbout1}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-2xl aspect-auto shadow-[0_7px_60px_-15px_rgba(0,0,0,0.3)] "
            src={switzAbout2}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-2xl aspect-auto shadow-[0_7px_60px_-15px_rgba(0,0,0,0.3)]"
            src={switzAbout3}
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );

  const { screenSize } = useScreenSize();

  return (
    <div>
      <div className="">
        <div className="my-4">
          <p className="text-xl lg:text-3xl">About ━━</p>
          <p className="text-3xl lg:text-7xl font-bold">We Recommend</p>
          <p className="text-3xl lg:text-7xl font-medium">
            Beautiful Destinations
          </p>
          <p className="text-3xl lg:text-7xl font-medium mb-4">Every Month</p>
          <p className="text-sm lg:text-4xl text-slate-500 mb-4">
            Let's choose you dream destinations here we provide many
            destionations and we offer the best destinations every week.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col bg-gray-600/5 items-center px-6 py-4 rounded-lg">
            <p className="font-semibold">2000+</p>
            <p className="text-sm text-gray-500">Our Explorers</p>
          </div>
          <div className="flex flex-col bg-gray-600/5 items-center px-6 py-4 rounded-lg">
            <p className="font-semibold">100+</p>
            <p className="text-sm text-gray-500">Destinations</p>
          </div>
          <div className="flex flex-col bg-gray-600/5 items-center px-6 py-4 rounded-lg">
            <p className="font-semibold">20+</p>
            <p className="text-sm text-gray-500">Years Experience</p>
          </div>
        </div>

        {
          //TODO: Picture layout in Desktop view
          Carousel
        }

        <div className="my-12">
          <p className="text-lg lg:text-3xl mb-2">What We Give ━━</p>
          <p className="text-3xl lg:text-7xl font-bold">Best Features</p>
          <p className="text-3xl lg:text-7xl font-medium mb-4">For You</p>
          <p className="text-sm lg:text-4xl text-slate-500 mb-4">
            We will provide the best features for those of you who want to
            travel comfortably with your family.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <div className="p-4 rounded-lg bg-gray-600/5">
            <FaMapSigns
              size={40}
              color="#003f67"
              className="bg-[#003f67]/10 rounded-lg p-2 mb-1"
            />
            <p className="font-semibold mb-2">Lots of Choices</p>
            <p className="text-xs text-gray-500">
              We have provided several choices of destinations and very cheap
              traveling packages
            </p>
          </div>
          <div className="p-4 rounded-lg bg-gray-600/5">
            <FaPersonWalkingLuggage
              size={40}
              color="#003f67"
              className="bg-[#003f67]/10 rounded-lg p-2 mb-1"
            />
            <p className="font-semibold mb-2">Best Tour Guide</p>
            <p className="text-xs text-gray-500">
              We provide professional tour guide and provide people who
              understand the place.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-gray-600/5">
            <MdOutlineFlightTakeoff
              size={40}
              color="#003f67"
              className="bg-[#003f67]/10 rounded-lg p-2 mb-1"
            />
            <p className="font-semibold mb-2">Easy Booking</p>
            <p className="text-xs text-gray-500">
              We will also make it easier for users to book tickets or book the
              place you want.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

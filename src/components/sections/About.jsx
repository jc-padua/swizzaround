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
          className="rounded-2xl aspect-auto shadow-[0_7px_60px_-15px_rgba(0,0,0,0.3)]"
          src={switzAbout1}
          alt="About Image 1"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="rounded-2xl aspect-auto shadow-[0_7px_60px_-15px_rgba(0,0,0,0.3)]"
          src={switzAbout2}
          alt="About Image 2"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="rounded-2xl aspect-auto shadow-[0_7px_60px_-15px_rgba(0,0,0,0.3)]"
          src={switzAbout3}
          alt="About Image 3"
        />
      </SwiperSlide>
    </Swiper>
  );

  const { screenSize } = useScreenSize();

  return (
    <div className="p-4 md:p-8 lg:p-16">
      {/* About Section */}
      <div className="flex flex-col lg:flex-row-reverse gap-8">
        {/* Text Section */}
        <div className="flex flex-col justify-center lg:w-1/2">
          <p className="text-xl lg:text-2xl text-customBlue-2">About ━━</p>
          <p className="text-3xl lg:text-4xl font-bold">We Recommend</p>
          <p className="text-3xl lg:text-4xl font-medium">Beautiful Destinations</p>
          <p className="text-3xl lg:text-4xl font-medium mb-4">Every Month</p>
          <p className="text-sm lg:text-lg text-slate-500 mb-6">
            Let's choose your dream destinations here. We provide many destinations and offer the best destinations every week.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex flex-col bg-gray-600/5 items-center px-6 py-4 rounded-lg shadow-lg">
              <p className="font-semibold text-lg">2000+</p>
              <p className="text-sm text-gray-500">Our Explorers</p>
            </div>
            <div className="flex flex-col bg-gray-600/5 items-center px-6 py-4 rounded-lg shadow-lg">
              <p className="font-semibold text-lg">100+</p>
              <p className="text-sm text-gray-500">Destinations</p>
            </div>
            <div className="flex flex-col bg-gray-600/5 items-center px-6 py-4 rounded-lg shadow-lg">
              <p className="font-semibold text-lg">20+</p>
              <p className="text-sm text-gray-500">Years Experience</p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        {screenSize <= 1024 ? (
          Carousel
        ) : (
          <div className="flex flex-col gap-10 relative lg:w-1/2">
            <div className="flex justify-center">
              <img
                className="rounded-2xl border-2 border-white w-[30rem] -translate-x-10 -translate-y-5"
                src={switzAbout1}
                alt="About Image 1"
              />
            </div>
            <img
              className="rounded-2xl border-2 border-white w-[17rem] absolute -bottom-5 right-20"
              src={switzAbout2}
              alt="About Image 2"
            />
            <img
              className="rounded-2xl border-2 border-white w-[15rem] absolute top-10 -right-5"
              src={switzAbout3}
              alt="About Image 3"
            />
          </div>
        )}
      </div>

      {/* Features Section */}
      <div className="flex flex-col lg:flex-row gap-8 mt-16">
        {/* Text Section */}
        <div className="lg:w-1/2">
          <p className="text-lg lg:text-2xl text-customBlue-2 mb-2">What We Give ━━</p>
          <p className="text-3xl lg:text-4xl font-bold">Best Features</p>
          <p className="text-3xl lg:text-4xl font-medium mb-4">For You</p>
          <p className="text-sm lg:text-lg text-slate-500">
            We will provide the best features for those of you who want to travel comfortably with your family.
          </p>
        </div>

        {/* Features Cards */}
        <div className="flex flex-wrap gap-6 lg:w-1/2">
          <div className="p-4 rounded-lg bg-gray-600/5 shadow-lg">
            <FaMapSigns size={40} color="#003f67" className="bg-[#003f67]/10 rounded-lg p-2 mb-2" />
            <p className="font-semibold text-lg mb-2">Lots of Choices</p>
            <p className="text-sm text-gray-500">
              We have provided several choices of destinations and very cheap traveling packages.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-gray-600/5 shadow-lg">
            <FaPersonWalkingLuggage size={40} color="#003f67" className="bg-[#003f67]/10 rounded-lg p-2 mb-2" />
            <p className="font-semibold text-lg mb-2">Best Tour Guide</p>
            <p className="text-sm text-gray-500">
              We provide professional tour guides who understand the place.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-gray-600/5 shadow-lg">
            <MdOutlineFlightTakeoff size={40} color="#003f67" className="bg-[#003f67]/10 rounded-lg p-2 mb-2" />
            <p className="font-semibold text-lg mb-2">Easy Booking</p>
            <p className="text-sm text-gray-500">
              We make it easier for users to book tickets or reserve the place they want.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

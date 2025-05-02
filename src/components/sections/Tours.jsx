import React from 'react';
import johnDoe from '../../assets/images/johndoe.jpg';
import photoCard1 from '../../assets/images/photoCard1.png';
import photoCard2 from '../../assets/images/photoCard2.png';
import photoCard3 from '../../assets/images/photoCard3.png';
import { IoMdBookmark } from 'react-icons/io';
import Button from '../common/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import { useScreenSize } from '../../context/ScreenSizeContext';

function Tours() {
  const { screenSize } = useScreenSize();

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
      className="mySwiper rounded-2xl my-20 lg:w-1/2"
    >
      <SwiperSlide>
        <img
          className="rounded-2xl aspect-auto shadow-[0_7px_60px_-15px_rgba(0,0,0,0.3)]"
          src={photoCard1}
          alt="Customer Review 1"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="rounded-2xl aspect-auto shadow-[0_7px_60px_-15px_rgba(0,0,0,0.3)]"
          src={photoCard2}
          alt="Customer Review 2"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="rounded-2xl aspect-auto shadow-[0_7px_60px_-15px_rgba(0,0,0,0.3)]"
          src={photoCard3}
          alt="Customer Review 3"
        />
      </SwiperSlide>
    </Swiper>
  );

  return (
    <div className="p-4 md:p-8 lg:p-16">
      {/* Header Section */}
      <div className="flex flex-col gap-2 text-center mb-8">
        <p className="text-xl lg:text-3xl text-customBlue-2">What They Say ━━</p>
        <p className="text-3xl font-bold lg:text-4xl">What Our Customers</p>
        <p className="text-3xl lg:text-2xl">Say About Us</p>
      </div>

      {/* Testimonial Section */}
      <div className="lg:flex lg:items-center lg:gap-8">
        {/* Testimonial Card */}
        <div className="lg:w-1/2 p-6 my-4 border-2 rounded-xl relative shadow-lg bg-white">
          <IoMdBookmark size={40} className="absolute right-4 -top-6 text-customBlue-2" />
          <div className="flex items-center gap-4 py-4">
            <img src={johnDoe} alt="John Doe" className="rounded-full w-16" />
            <div>
              <p className="font-semibold text-lg">John Doe</p>
              <p className="text-sm text-gray-500">Travel Enthusiast</p>
            </div>
          </div>
          <hr className="mb-4" />
          <p className="text-gray-700 leading-7">
            "This platform is very helpful because there are many beautiful destinations here, and this platform really
            helps me in finding beautiful destinations. The service is also very good, so I really like to use
            SwizzAround when I want to go traveling with my family."
          </p>
          <p className="text-xl mt-4 text-yellow-500">⭐⭐⭐⭐⭐</p>
        </div>

        {/* Carousel or Static Images */}
        {screenSize >= 1040 ? (
          Carousel
        ) : (
          <div className="lg:w-1/2 flex flex-col gap-4 items-center mt-12">
            <div className="w-4/5 bg-white border-2 p-2 rounded-lg shadow-lg">
              <img src={photoCard1} alt="Customer Review 1" />
            </div>
            <div className="w-4/5 bg-white border-2 p-2 rounded-lg shadow-lg">
              <img src={photoCard2} alt="Customer Review 2" />
            </div>
            <div className="w-4/5 bg-white border-2 p-2 rounded-lg shadow-lg">
              <img src={photoCard3} alt="Customer Review 3" />
            </div>
          </div>
        )}
      </div>

      {/* Call-to-Action Section */}
      <div className="flex flex-col gap-4 text-center bg-customBlue-1/10 p-8 my-12 rounded-3xl shadow-lg">
        <p className="text-2xl lg:text-3xl font-bold">Don't Miss the 50% Discount &</p>
        <p className="text-2xl lg:text-3xl font-normal">Explore the Beauty of the World</p>
        <p className="text-gray-600 mb-4">We have many special offers especially for you</p>
        <div>
          <Button
            isFilled={true}
            color={'#003f67'}
            buttonLabel={'Get Started'}
            className="text-sm md:text-base lg:text-lg px-6 py-3"
          />
        </div>
      </div>
    </div>
  );
}

export default Tours;

"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "../styles/Header.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Link from "next/link";
export default function Header() {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        draggable
        autoplay={{ delay: 5000 }}
        loop={true}
        className="h-[400px] lg:!h-[700px]"
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        <SwiperSlide>
          <div className="w-full h-full slide1Bg flex items-center px-4 md:px-14 lg:px-12 2xl:px-20">
            <div className="flex flex-col gap-3 md:gap-4 lg:gap-8 ">
              <h2 className="text-xl md:text-3xl lg:text-4xl  text-white">
                Illuminate Your Calgary Home
              </h2>
              <h3 className="text-4xl md:text-5xl xl:text-7xl font-bold text-primary leading-snug">
                Modern Chandelier <br /> near Calgary
              </h3>
              <Link href={"/products/all"} className="w-max dark:text-black" >
                <button className="bg-white rounded-full p-3 px-5 md:px-5 lg:px-10 w-max text-sm md:text-base lg:text-xl font-semibold">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full slide1Bg flex items-center px-4 md:px-14 lg:px-12 2xl:px-20">
            <div className="flex flex-col gap-8">
              <h2 className="text-xl md:text-3xl lg:text-4xl  text-white">
                Energy-Saving LED Lighting Solutions
              </h2>
              <h3 className="text-4xl md:text-5xl xl:text-7xl font-bold text-primary leading-snug">
                Energy-Efficient LED <br /> Lights YY
              </h3>
              <Link href={"/contact-us"} className="w-max dark:text-black" >
                <button className="bg-white rounded-full p-3 px-5 md:px-5 lg:px-10 w-max text-sm md:text-base lg:text-xl font-semibold">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full slide1Bg flex items-center px-4 md:px-14 lg:px-12 2xl:px-20">
            <div className="flex flex-col gap-8">
              <h2 className="text-xl md:text-3xl lg:text-4xl  text-white">
                Designer Vanity Lights For Homes
              </h2>
              <h3 className="text-4xl md:text-5xl xl:text-7xl font-bold text-primary leading-snug">
                Designer Vanity <br /> Lights Calgary
              </h3>
              <Link href={"/products/all"} className="w-max dark:text-black" >
                <button className="bg-white rounded-full p-3 px-5 md:px-5 lg:px-10 w-max text-sm md:text-base lg:text-xl font-semibold">
                  See More
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full slide1Bg flex items-center px-4 md:px-14 lg:px-12 2xl:px-20">
            <div className="flex flex-col gap-8">
              <h2 className="text-xl md:text-3xl lg:text-4xl  text-white">
                Stylish Ceiling and Vanity Fixtures
              </h2>
              <h3 className="text-4xl md:text-5xl xl:text-7xl font-bold text-primary leading-snug">
                Designer Ceiling <br /> & Vanity Calgary!
              </h3>
              <Link href={"tel:+14033242525"} className="w-max dark:text-black" >
                <button className="bg-white rounded-full p-3 px-5 md:px-5 lg:px-10 w-max text-sm md:text-base lg:text-xl font-semibold">
                  Call Now
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <div className="swiper-button-next !hidden md:!block"></div>
        <div className="swiper-button-prev !hidden md:!block"></div>
      </Swiper>
    </div>
  );
}

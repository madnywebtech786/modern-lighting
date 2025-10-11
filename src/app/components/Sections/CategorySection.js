'use client';
import React from 'react';
import Link from 'next/link'; // ✅ Import Link
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay } from 'swiper/modules';
import '../styles/Header.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const categories = [
  { name: 'Chandelier', link: '/products/chandelier' },
  { name: 'Wall Light', link: '/products/wallLights' },
  { name: 'Vanity', link: '/products/vanityLight' },
  { name: 'Pendant', link: '/products/singlePendantLights' },
  { name: 'Ceiling', link: '/products/ceilingLight' },
  { name: 'Outdoor', link: '/products/outdoorWallLight' },
  { name: 'Dinning', link: '/products/diningLights' },
];

export default function CategorySection() {
  return (
    <div className="flex py-16 z-10 cursor-pointer">
      <Swiper
        modules={[Pagination, A11y, Autoplay]}
        slidesPerView={2}
        draggable
        autoplay={{ delay: 8000 }}
        loop={true}
        className="h-full"
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
          1240: { slidesPerView: 6 },
        }}
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index} className="p-2">
            <Link href={category.link}>
              <div
                data-aos="zoom-in"
                data-aos-delay={index * 200}
                className="w-40 h-40 rounded-full flex gap-2 lg:gap-0 section1 justify-center items-center relative mx-auto hover:scale-105 transition-transform duration-300"
              >
                <div className="w-full h-full z-20 absolute bg-black opacity-10 rounded-full"></div>
                <h2 className="relative text-center z-20 text-white text-lg font-semibold">
                  {category.name}
                </h2>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

// Gallery Section - Responsive Mosaic Layout
import Image from "next/image";
import React from "react";

export default function page() {
  const galleryItems = [
    {
      id: 1,
      image: "/images/IMG_5657.webp",
      width: "w-full md:w-1/3",
      height: "h-48 md:h-64",
    },
    {
      id: 2,
      image: "/images/IMG_5664~2.webp",
      width: "w-full md:w-1/3",
      height: "h-48 md:h-64",
    },
    {
      id: 3,
      image: "/images/IMG_5665~2.webp",
      width: "w-full md:w-1/3",
      height: "h-48 md:h-64",
    },
    {
      id: 4,
      image: "/images/IMG_5667~2.webp",
      width: "w-full md:w-2/3",
      height: "h-48 md:h-64",
    },
    {
      id: 5,
      image: "/images/IMG_5668~2.webp",
      width: "w-full md:w-1/3",
      height: "h-48 md:h-64",
    },
    {
      id: 6,
      image: "/images/IMG_5671~2.webp",
      width: "w-full md:w-1/3",
      height: "h-48 md:h-64",
    },
    {
      id: 7,
      image: "/images/IMG_5678~2.webp",
      width: "w-full md:w-1/3",
      height: "h-48 md:h-64",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-center py-40 aboutUs text-white">
        <h2 className="text-5xl font-semibold">Our Gallery</h2>
      </div>
      <section className="p-4 py-16 md:p-10 lg:p-20 bg-white">
        <div className="">
          {/* Responsive Mosaic Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Row 1 - 3 equal images */}
            <div className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <Image
                width={700}
                height={700}
                src={galleryItems[0].image}
                alt="Junk Car Collection"
                className={`w-full ${galleryItems[0].height} object-cover`}
              />
            </div>
            <div className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <Image
                width={700}
                height={700}
                src={galleryItems[1].image}
                alt="Free Towing Service"
                className={`w-full ${galleryItems[1].height} object-cover`}
              />
            </div>
            <div className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <Image
                width={700}
                height={700}
                src={galleryItems[2].image}
                alt="Cash Payment"
                className={`w-full ${galleryItems[2].height} object-cover`}
              />
            </div>

            {/* Row 2 - 1 wide image */}
            <div className="md:col-span-2 overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <Image
                width={800}
                height={700}
                src={galleryItems[3].image}
                alt="Eco-Friendly Recycling"
                className={`w-full ${galleryItems[3].height} object-cover`}
              />
            </div>

            {/* Row 3 - 2 images */}
            <div className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <Image
                width={700}
                height={700}
                src={galleryItems[4].image}
                alt="Same Day Service"
                className={`w-full ${galleryItems[4].height} object-cover`}
              />
            </div>
            <div className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <Image
                width={700}
                height={700}
                src={galleryItems[5].image}
                alt="Customer Satisfaction"
                className={`w-full ${galleryItems[5].height} object-cover`}
              />
            </div>
            <div className="md:col-span-2 overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <Image
                width={800}
                height={700}
                src={galleryItems[6].image}
                alt="Eco-Friendly Recycling"
                className={`w-full ${galleryItems[3].height} object-cover`}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

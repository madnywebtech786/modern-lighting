import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BrandsSection() {
  const brandsImages = [
    {
      img: "/images/brands/lit-up-logo.png",
      link: "/products/litupLighting",
    },
    {
      img: "/images/brands/Kendal-Logo.png",
      link: "/products/kendalLights",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {brandsImages.map((item) => (
        <Link href={item.link}>
          <div className="overflow-hidden rounded-lg w-full p-2">
            <Image
              src={item.img}
              alt="brand image"
              width={300}
              height={300}
              className="rounded-lg border-4 border-transparent w-full h-52 hover:border-primary duration-200"
            />
          </div>
        </Link>
      ))}
    </div>
  );
}

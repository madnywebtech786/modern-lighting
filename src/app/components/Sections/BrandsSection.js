import Image from "next/image";
import React from "react";

export default function BrandsSection() {
  const brandsImages = [
    "/images/brands/lit-up-logo.png",
    "/images/brands/Kendal-Logo.png",
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {brandsImages.map((img) => (
        <div className="overflow-hidden rounded-lg w-full p-2">
          <Image src={img} alt="brand image" width={300} height={300} className="rounded-lg border-4 border-transparent w-full h-52 hover:border-primary duration-200" />
        </div>
      ))}
    </div>
  );
}

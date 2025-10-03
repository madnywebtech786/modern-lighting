import Image from "next/image";
import React from "react";

export default function TestimonialCard({ testimonial = {} }) {
  const {
    name = "Client Name",
    designation = "Client Designation",
    avatar = "/images/client1.jpg",
    rating = 5,
    text = "Excellent service and modern lights — highly recommended!",
  } = testimonial;

  // ensure rating is between 0 and 5
  const safeRating = Math.max(0, Math.min(5, Math.round(rating)));

  return (
    <div className="bg-white rounded-xl p-5 shadow-lg min-h-[180px]">
      <div className="flex justify-between lg:items-center gap-5 flex-col lg:flex-row">
        <div className="flex gap-5 items-center">
          <Image
            src={avatar}
            alt={name}
            className="rounded-full w-14 h-14"
            width={300}
            height={300}
          />
          <div className="flex flex-col gap-1">
            <h2 className="text-lg text-black font-bold">{name}</h2>
            <p className="text-sm text-primary font-semibold">{designation}</p>
          </div>
        </div>

        <div className="flex items-center" aria-hidden>
          {Array.from({ length: 5 }).map((_, i) => (
            <Image
              key={i}
              src={"/images/icons/Star.svg"}
              alt={i < safeRating ? "star-filled" : "star-empty"}
              width={17}
              height={17}
              className={i < safeRating ? "" : "opacity-40"}
            />
          ))}
        </div>
      </div>

      <p className="text-gray-400 text-sm mt-5">{text}</p>
    </div>
  );
}

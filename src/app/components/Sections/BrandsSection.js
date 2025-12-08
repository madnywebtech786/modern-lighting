"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BrandsSection() {
  const brandsImages = [
    {
      img: "/images/brands/lit-up-logo.png",
      link: "/products/litupLighting",
      name: "Lit-Up Lighting",
      tagline: "Illuminate Your Space",
    },
    {
      img: "/images/brands/Kendal-Logo.png",
      link: "/products/kendalLights",
      name: "Kendal Lights",
      tagline: "Modern Elegance",
    },
    {
      img: "/images/brands/artika-pro-logo.png",
      link: "/products/artikaProLights",
      name: "Artika Pro",
      tagline: "Professional Lighting",
    },
     {
      img: "/images/brands/canarm.png",
      link: "/products/canarmLights",
      name: "Canarm Lights",
      tagline: "Value , Knowledge and quality",
    },
    
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
      {brandsImages.map((item, index) => (
        <Link href={item.link} key={index}>
          <div className="relative group h-full">
            {/* Futuristic card with gradient border */}
            <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-2xl overflow-hidden h-full min-h-[300px] md:min-h-[380px] transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:shadow-[0_20px_60px_rgba(251,205,14,0.4)]">
              {/* Animated gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-primaryLight to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl"></div>

              {/* Glowing top border - animated */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

              {/* Glowing bottom border - animated */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

              {/* Inner border glow with animation */}
              <div className="absolute inset-[2px] rounded-2xl border-2 border-transparent group-hover:border-primary/50 transition-all duration-700 group-hover:shadow-[inset_0_0_30px_rgba(251,205,14,0.2)]"></div>

              {/* Dark overlay with button - slides up from bottom */}
              <div className="absolute inset-0 bg-black/70 backdrop-blur-sm translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out flex items-center justify-center z-20">
                <div className="px-10 py-4 bg-primary text-black font-bold rounded-full text-base shadow-[0_0_30px_rgba(251,205,14,0.8)] hover:shadow-[0_0_40px_rgba(251,205,14,1)] hover:scale-110 transition-all duration-300 cursor-pointer">
                  View Collection
                </div>
              </div>

              {/* Content container */}
              <div className="relative z-10 p-6 md:p-8 flex flex-col items-center justify-center h-full">
                {/* Logo container with fixed dimensions */}
                <div className="relative w-full max-w-[350px] h-[230px] mb-6 flex items-center justify-center mx-auto">
                  <div className="relative w-full h-full bg-gradient-to-br from-white via-gray-50 to-white rounded-xl p-8 flex items-center justify-center group-hover:shadow-2xl transition-all duration-500 overflow-hidden">
                    {/* Animated border on hover with glow */}
                    <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-primary transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(251,205,14,0.5)]"></div>

                    {/* Rotating gradient background on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Corner accents */}
                    <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-primary/0 group-hover:border-primary transition-all duration-300"></div>
                    <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-primary/0 group-hover:border-primary transition-all duration-300"></div>

                    {/* Logo with consistent sizing */}
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={item.img}
                        alt={item.name}
                        width={280}
                        height={180}
                        className="object-contain max-w-full max-h-full relative z-10 group-hover:scale-105 group-hover:drop-shadow-[0_5px_15px_rgba(251,205,14,0.3)] transition-all duration-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Brand name and tagline */}
                <div className="text-center space-y-2">
                  <h3 className="text-xl md:text-2xl font-bold text-white transition-all duration-500">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-400 transition-colors duration-500">
                    {item.tagline}
                  </p>
                </div>

                {/* Decorative corner accents - animated */}
                <div className="absolute top-4 left-4 w-10 h-10 border-l-2 border-t-2 border-primary/20 group-hover:border-primary group-hover:w-12 group-hover:h-12 transition-all duration-700"></div>
                <div className="absolute bottom-4 right-4 w-10 h-10 border-r-2 border-b-2 border-primary/20 group-hover:border-primary group-hover:w-12 group-hover:h-12 transition-all duration-700"></div>

                {/* Additional corner decorations */}
                <div className="absolute top-4 right-4 w-10 h-10 border-r-2 border-t-2 border-primary/20 opacity-50 group-hover:border-primary group-hover:opacity-100 transition-all duration-700"></div>
                <div className="absolute bottom-4 left-4 w-10 h-10 border-l-2 border-b-2 border-primary/20 opacity-50 group-hover:border-primary group-hover:opacity-100 transition-all duration-700"></div>
              </div>

              {/* Enhanced animated background particles effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-1000">
                <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary rounded-full animate-pulse shadow-[0_0_10px_rgba(251,205,14,0.8)]"></div>
                <div
                  className="absolute top-3/4 right-1/3 w-2 h-2 bg-primaryLight rounded-full animate-pulse shadow-[0_0_8px_rgba(252,250,192,0.6)]"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="absolute bottom-1/3 left-2/3 w-2.5 h-2.5 bg-primary rounded-full animate-pulse shadow-[0_0_10px_rgba(251,205,14,0.8)]"
                  style={{ animationDelay: "0.4s" }}
                ></div>
                <div
                  className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-primaryLight rounded-full animate-pulse shadow-[0_0_6px_rgba(252,250,192,0.6)]"
                  style={{ animationDelay: "0.6s" }}
                ></div>
                <div
                  className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_8px_rgba(251,205,14,0.8)]"
                  style={{ animationDelay: "0.8s" }}
                ></div>
              </div>
            </div>

            {/* Enhanced shadow effect underneath */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/0 via-primary/30 to-primary/40 rounded-2xl opacity-0 group-hover:opacity-100 blur-3xl -z-20 transition-opacity duration-700"></div>
          </div>
        </Link>
      ))}
    </div>
  );
}

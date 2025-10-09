import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import SectionDivider from "../SectionDivider";

// Replace categories with category groups from your product data (4 categories, 4 products each)
const categories = [
  {
    name: "Chandelier",
    products: [
      {
        name: "LD16505-10",
        description:
          "Modern crystal chandelier  statement lighting for dining rooms and grand foyers, energy-efficient LED options.",
        images: [
          "/images/lights/chandelier/LD16505-10.jpg",
          "/images/lights/chandelier/LD16505-10.jpg",
          "/images/lights/chandelier/LD16505-10.jpg",
        ],
        tag: "New",
        addDate: "12/16/2024",
      },
      {
        name: "14088-600",
        description:
          "Contemporary multi-ring chandelier  scalable sizes for high ceilings, premium finish and long-life LEDs.",
        images: [
          "/images/lights/chandelier/14088-600.JPG",
          "/images/lights/chandelier/14088-600.JPG",
          "/images/lights/chandelier/14088-600.JPG",
        ],
        tag: "Featured",
        addDate: "12/10/2024",
      },
      {
        name: "AC8802-1 D600 BK",
        description:
          "Sculptural black chandelier  modern silhouette for kitchens, dining rooms and luxury residential projects.",
        images: [
          "/images/lights/chandelier/AC8802-1 D600 BK.jpg",
          "/images/lights/chandelier/AC8802-1 D600 BK.jpg",
          "/images/lights/chandelier/AC8802-1 D600 BK.jpg",
        ],
        tag: "Best Seller",
        addDate: "12/07/2024",
      },
      {
        name: "LC83007",
        description:
          "Elegant ring chandelier  soft ambient illumination, dimmable driver, ideal for living and dining spaces.",
        images: [
          "/images/lights/chandelier/LC83007.JPG",
          "/images/lights/chandelier/LC83007.JPG",
          "/images/lights/chandelier/LC83007.JPG",
        ],
        tag: "New",
        addDate: "12/01/2024",
      },
    ],
    desc: "Chandeliers for Calgary homes: designer statement fixtures, energy-efficient LED options and scalable sizes for high-ceiling spaces.",
  },
  {
    name: "vanity Light",
    products: [
      {
        name: "ACW12332-3",
        description:
          "Three-light vanity bar  clean modern design, ideal for bathroom mirrors and makeup stations with bright, even output.",
        images: [
          "/images/lights/vanity-light/ACW12332-3.JPG",
          "/images/lights/vanity-light/ACW12332-3.JPG",
          "/images/lights/vanity-light/ACW12332-3.JPG",
        ],
        tag: "New",
        addDate: "12/12/2024",
      },
      {
        name: "LCW17512-3",
        description:
          "Compact vanity light  low-glare, even illumination and easy wall-mount installation for residential bathrooms.",
        images: [
          "/images/lights/vanity-light/LCW17512-3.jpg",
          "/images/lights/vanity-light/LCW17512-3.jpg",
          "/images/lights/vanity-light/LCW17512-3.jpg",
        ],
        tag: "Featured",
        addDate: "12/08/2024",
      },
      {
        name: "LPW15019-4 CH",
        description:
          "Four-light chrome vanity  polished finish and adjustable heads for precise, flattering mirror lighting.",
        images: [
          "/images/lights/vanity-light/LPW15019-4 CH.JPG",
          "/images/lights/vanity-light/LPW15019-4 CH.JPG",
          "/images/lights/vanity-light/LPW15019-4 CH.JPG",
        ],
        tag: "Best Seller",
        addDate: "12/05/2024",
      },
      {
        name: "WB1222-4",
        description:
          "Slim vanity sconce  minimal profile, reliable LED output and moisture-resistant construction for bathrooms.",
        images: [
          "/images/lights/vanity-light/WB1222-4.jpg",
          "/images/lights/vanity-light/WB1222-4.jpg",
          "/images/lights/vanity-light/WB1222-4.jpg",
        ],
        tag: "New",
        addDate: "12/01/2024",
      },
    ],
    desc: "Vanity lights: even, flattering mirror illumination with low-glare LEDs, moisture-resistant finishes and modern profiles for bathrooms.",
  },
  {
    name: "dining Lights",
    products: [
      {
        name: "LDD10211-7 GD",
        description:
          "Linear dining pendant  wide, even light spread perfect above dining tables and kitchen islands with warm LEDs.",
        images: [
          "/images/lights/dinning-lights/LDD10211-7 GD.JPG",
          "/images/lights/dinning-lights/LDD10211-7 GD.JPG",
          "/images/lights/dinning-lights/LDD10211-7 GD.JPG",
        ],
        tag: "New",
        addDate: "12/15/2024",
      },
      {
        name: "LPC3071-860X300 GD on",
        description:
          "Extended bar pendant  modern profile for large dining tables, dimmable and low-glare design.",
        images: [
          "/images/lights/dinning-lights/LPC3071-860X300 GD on.JPG",
          "/images/lights/dinning-lights/LPC3071-860X300 GD on.JPG",
          "/images/lights/dinning-lights/LPC3071-860X300 GD on.JPG",
        ],
        tag: "Featured",
        addDate: "12/10/2024",
      },
      {
        name: "LPC1205-3",
        description:
          "Round pendant clusters  versatile accents for dining nooks and island seating with warm LED output.",
        images: [
          "/images/lights/chandelier/LPC1205-3.jpg",
          "/images/lights/chandelier/LPC1205-3.jpg",
          "/images/lights/chandelier/LPC1205-3.jpg",
        ],
        tag: "Best Seller",
        addDate: "12/05/2024",
      },
      {
        name: "BC84006-4 BK 720X180X180",
        description:
          "Decorative multi-light pendant  bold finish and precise beam control for focused dining illumination.",
        images: [
          "/images/lights/dinning-lights/BC84006-4 BK 720X180X180.jpg",
          "/images/lights/dinning-lights/BC84006-4 BK 720X180X180.jpg",
          "/images/lights/dinning-lights/BC84006-4 BK 720X180X180.jpg",
        ],
        tag: "New",
        addDate: "12/01/2024",
      },
    ],
    desc: "Dining lights & pendants: focused, dimmable fixtures for tables and islands  modern finishes, warm LED tones and low-glare designs.",
  },
  {
    name: "wall Lights",
    products: [
      {
        name: "LPW14322",
        description:
          "Contemporary wall light  minimalist profile for hallways and living rooms, easy surface-mount installation.",
        images: [
          "/images/lights/wall-lights/LPW14322.jpg",
          "/images/lights/wall-lights/LPW14322.jpg",
          "/images/lights/wall-lights/LPW14322.jpg",
        ],
        tag: "New",
        addDate: "12/14/2024",
      },
      {
        name: "14 Inch Up Down LED",
        description:
          "Up/down wall sconce  sculpted beam for architectural accenting and outdoor-rated variants available.",
        images: [
          "/images/lights/wall-lights/14 Inch Up Down LED Wall Light 01.jpg",
          "/images/lights/wall-lights/14 Inch Up Down LED Wall Light 01.jpg",
          "/images/lights/wall-lights/14 Inch Up Down LED Wall Light 01.jpg",
        ],
        tag: "Best Seller",
        addDate: "12/10/2024",
      },
      {
        name: "8-inch-12w-led-wall-light",
        description:
          "Compact LED wall light  efficient, low-profile fixture for stairways, halls and bedside accent lighting.",
        images: [
          "/images/lights/wall-lights/8-inch-12w-led-wall-light.jpg",
          "/images/lights/wall-lights/8-inch-12w-led-wall-light.jpg",
          "/images/lights/wall-lights/8-inch-12w-led-wall-light.jpg",
        ],
        tag: "Featured",
        addDate: "12/06/2024",
      },
      {
        name: "W14145 2",
        description:
          "Decorative gold wall sconce  premium finish and soft diffused light for living spaces and bedrooms.",
        images: [
          "/images/lights/wall-lights/W14145 2.jpg",
          "/images/lights/wall-lights/W14145 2.jpg",
          "/images/lights/wall-lights/W14145 2.jpg",
        ],
        tag: "New",
        addDate: "12/01/2024",
      },
    ],
    desc: "Wall lights: accent and ambient sconces for hallways, bedrooms and exteriors  efficient LEDs, low-profile designs and premium finishes.",
  },
];

export default function InDemand() {
  const [activeCategory, setActiveCategory] = useState(categories[0].name);
  const [intervalId, setIntervalId] = useState(null); // Store the interval ID

  const handleCategoryChange = (categoryName) => {
    setActiveCategory(categoryName);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCategory((prevCategory) => {
        const currentIndex = categories.findIndex(
          (category) => category.name === prevCategory
        );
        const nextIndex = (currentIndex + 1) % categories.length;
        return categories[nextIndex].name;
      });
    }, 5000);
    setIntervalId(interval); // Store the interval ID

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="px-4 md:px-8 lg:px-12 2xl:px-20 py-10 dark:text-black">
      <div className="flex flex-col gap-0 text-center" data-aos="zoom-out-up">
        <h2 className="text-base text-primary">Illuminate Every Space</h2>
        <SectionDivider />

        <h3 className="text-3xl lg:text-4xl font-bold">
          Lighting Solutions for Every Need
        </h3>
      </div>

      <div className="mt-12 w-full flex gap-4 flex-col lg:flex-row">
        {/* Left section for category details */}
        <div className="flex flex-col w-full lg:w-1/2 gap-4">
          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-bold w-full lg:w-2/3"
            data-aos="fade-right"
            data-aos-delay="50"
          >
            Find the Perfect Light for Every Setting
          </h2>
          <p className="text-base" data-aos="fade-down" data-aos-delay="100">
            Whether you're creating a cozy indoor retreat, lighting up your
            backyard, or outfitting a bustling office, we offer lighting
            solutions designed to fit your unique style and purpose. Explore our
            diverse categories and discover the perfect balance of functionality
            and design.
          </p>

          {/* Loop through categories */}
          {categories.map((category, idx) => (
            <div
              key={category.name}
              className={`flex flex-col gap-2 p-4 rounded-lg small-category group transition-all duration-300 cursor-pointer ${
                activeCategory === category.name
                  ? "bg-primaryLight active-small-category"
                  : "bg-gray-100"
              }`}
              onClick={() => handleCategoryChange(category.name)}
            >
              <div className="flex gap-4 items-center">
                <div
                  className={`p-2 small-category-text-div rounded-lg transition-all duration-400 ${
                    activeCategory === category.name
                      ? "bg-primary"
                      : "bg-gray-200"
                  }`}
                >
                  <p
                    className={`text-4xl font-bold text-black outline-text transition-all duration-300 small-category-text ${
                      activeCategory === category.name ? "text-white" : ""
                    }`}
                  >
                    {(idx + 1).toString().padStart(2, "0")}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-lg font-bold uppercase">
                    {category.name}
                  </h2>
                  <p className="text-sm">{category.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right section for products */}
        <div className="flex flex-col items-center w-full lg:w-1/2 lg:pl-12 py-8 h-full">
          <div className="">
            {/* Display products for the active category */}
            {categories
              .filter((category) => category.name === activeCategory)
              .map((category) => (
                <div key={category.name}>
                  <div className="grid grid-cols-2 gap-3 w-full">
                    {category.products.slice(0, 2).map((product, index) => (
                      <div key={index} className="">
                        <ProductCard
                          product={product}
                          className={`!min-h-[250px] h-[350px] ${
                            index === 1 ? "mt-5" : ""
                          }`}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 w-full mt-5 gap-3">
                    {category.products.slice(2, 4).map((product, index) => (
                      <div key={index} className="">
                        <ProductCard
                          product={product}
                          className={`!min-h-[250px] h-[350px] ${
                            index === 1 ? "mt-5" : ""
                          }`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

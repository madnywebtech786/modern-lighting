export const navData = {
  shopBy: {
    type: 1,

    link: "/shop-by",

    imgs: [
      "/images/bed1.jpg",
      "/images/Scandinavian1.png",
      "/images/testimonials.png",
    ],

    categories: {
      "Shop by Style": {
        link: "/shop-by-style",

        imgs: ["/images/bed1.jpg", "/images/bed1.jpg"],

        subcategories: {
          Scandinavian: {
            link: "/products/scandinavian",

            imgs: [
              "/images/Scandinavian1.png",
              "/images/Scandinavian2.png",
              "/images/Scandinavian3.png",
            ],

            children: {
              Child1: {
                link: "/child1",

                imgs: ["/images/Chandeliers2.png", "/images/bed1.jpg"],
              },

              Child2: {
                link: "/child2",

                imgs: ["/images/Chandeliers1.png", "/images/bed1.jpg"],
              },
            },
          },

          Minimalistic: {
            link: "/products/minimalistic",

            imgs: [
              "/images/bed1.jpg",
              "/images/Scandinavian2.png",
              "/images/testimonials.png",
            ],

            children: null,
          },
          Metropolitan: {
            link: "/products/Metropolitan",

            imgs: [
              "/images/Scandinavian1.png",
              "/images/Chandeliers2.png",
              "/images/bgAttached.png",
            ],

            children: null,
          },
          "Mid-Century": {
            link: "/products/Mid-Century",

            imgs: [
              "/images/Chandeliers2.png",
              "/images/bgAttached.png",
              "/images/Scandinavian2.png",
            ],

            children: null,
          },
        },
      },
      "Shop by Room": {
        link: "/shop-by-style",

        imgs: ["/images/bed1.jpg", "/images/bed1.jpg"],

        subcategories: {
          "Living Room": {
            link: "/products/living-room",
            imgs: [
              "/images/testimonials.png",
              "/images/Chandeliers2.png",
              "/images/bgAttached.png",
            ],
            children: null,
          },
          "Dining Room": {
            link: "/products/dining-room",
            imgs: [
              "/images/bed1.jpg",
              "/images/Scandinavian1.png",
              "/images/testimonials.png",
            ],
            children: null,
          },
          Bedroom: {
            link: "/products/bedroom",
            imgs: [
              "/images/Chandeliers2.png",
              "/images/bgAttached.png",
              "/images/Scandinavian2.png",
            ],
            children: null,
          },
          Bathroom: {
            link: "/products/bathroom",
            imgs: [
              "/images/Scandinavian1.png",
              "/images/Chandeliers2.png",
              "/images/bgAttached.png",
            ],
            children: null,
          },
          Staircase: {
            link: "/products/staircase",
            imgs: [
              "/images/bed1.jpg",
              "/images/bgAttached.png",
              "/images/testimonials.png",
            ],
            children: null,
          },
          Foyer: {
            link: "/products/foyer",
            imgs: [
              "/images/bed1.jpg",
              "/images/Chandeliers2.png",
              "/images/bgAttached.png",
            ],
            children: null,
          },
          Office: {
            link: "/products/office",
            imgs: [
              "/images/Scandinavian1.png",
              "/images/Chandeliers2.png",
              "/images/bgAttached.png",
            ],
            children: null,
          },
          Patio: {
            link: "/products/patio",
            imgs: [
              "/images/testimonials.png",
              "/images/Chandeliers2.png",
              "/images/bgAttached.png",
            ],

            children: null,
          },
        },
      },
      "Shop by Type": {
        link: "/shop-by-type",

        imgs: ["/images/bed1.jpg", "/images/bed1.jpg"],

        subcategories: {
          "Modern Chandelier": {
            link: "/products/chandelier",

            imgs: ["/images/bed1.jpg", "/images/bed1.jpg", "/images/bed1.jpg"],

            children: null,
          },

          "Crystal Chandelier": {
            link: "/products/chandelier",

            imgs: ["/images/bed1.jpg", "/images/bed1.jpg", "/images/bed1.jpg"],

            children: null,
          },
          "Wall Light": {
            link: "/products/wallLights",

            imgs: ["/images/bed1.jpg", "/images/bed1.jpg", "/images/bed1.jpg"],

            children: null,
          },
          "Ceiling Light": {
            link: "/products/ceilingLight",

            imgs: ["/images/bed1.jpg", "/images/bed1.jpg", "/images/bed1.jpg"],

            children: null,
          },
          "Pendant Light": {
            link: "/products/islandLights",

            imgs: ["/images/bed1.jpg", "/images/bed1.jpg", "/images/bed1.jpg"],

            children: null,
          },
          "Outdoor Light": {
            link: "/products/outdoorWallLight",

            imgs: ["/images/bed1.jpg", "/images/bed1.jpg", "/images/bed1.jpg"],

            children: null,
          },
          "Vanity Light": {
            link: "/products/vanityLight",

            imgs: ["/images/bed1.jpg", "/images/bed1.jpg", "/images/bed1.jpg"],

            children: null,
          },
          "Hardware & Accessories": {
            link: "/minimalistic",

            imgs: ["/images/bed1.jpg", "/images/bed1.jpg", "/images/bed1.jpg"],

            children: null,
          },
        },
      },
      "Shop by Collection": {
        link: "/shop-by-collection",

        imgs: ["/images/testimonials.png", "/images/Chandeliers2.png"],

        subcategories: {
          "Obsidian Collection": {
            link: "/products/obsidian-collection",
            imgs: [
              "/images/bed1.jpg",
              "/images/Scandinavian1.png",
              "/images/testimonials.png",
            ],

            children: null,
          },
          "Celestial Collection": {
            link: "/products/celestial-collection",
            imgs: [
              "/images/bed1.jpg",
              "/images/Scandinavian2.png",
              "/images/testimonials.png",
            ],

            children: null,
          },
          "Aurelius Collection": {
            link: "/products/aurelius-collection",
            imgs: [
              "/images/aurelius1.jpg",
              "/images/aurelius2.jpg",
              "/images/aurelius3.jpg",
            ],
            children: null,
          },
          "Angelica Collection": {
            link: "/products/angelica-collection",
            imgs: [
              "/images/angelica1.jpg",
              "/images/angelica2.jpg",
              "/images/angelica3.jpg",
            ],
            children: null,
          },
          "Emma Collection": {
            link: "/products/emma-collection",
            imgs: [
              "/images/emma1.jpg",
              "/images/emma2.jpg",
              "/images/emma3.jpg",
            ],
            children: null,
          },
          "Raven Collection": {
            link: "/products/raven-collection",
            imgs: [
              "/images/raven1.jpg",
              "/images/raven2.jpg",
              "/images/raven3.jpg",
            ],
            children: null,
          },
          "Umbra Collection": {
            link: "/products/umbra-collection",
            imgs: [
              "/images/umbra1.jpg",
              "/images/umbra2.jpg",
              "/images/umbra3.jpg",
            ],
            children: null,
          },
        },
      },
    },
  },

  IndoorLighting: {
    type: 2,
    categoryText: "Shop by Room",
    subCategoryText: "Indoor Lights",

    categories: {
      "Dining Room": {
        link: "/dining-room",

        imgs: ["/images/testimonials.png", "/images/Scandinavian1.png"],
      },

      "Living Room": {
        link: "/living-room",

        imgs: ["/images/living1.jpg", "/images/living2.jpg"],
      },

      "Bed Room": {
        link: "/bedroom",

        imgs: ["/images/bedroom1.jpg", "/images/bedroom2.jpg"],
      },
    },

    subcategories: {
      "Modern Chandeliers": {
        link: "/modern-chandeliers",

        imgs: ["/images/chandelier1.jpg", "/images/chandelier2.jpg"],
      },

      "Crystal Chandeliers": {
        link: "/crystal-chandeliers",

        imgs: ["/images/chandelier3.jpg", "/images/chandelier4.jpg"],
      },

      "Ceiling Lights": {
        link: "/ceiling-lights",

        imgs: ["/images/ceiling1.jpg", "/images/ceiling2.jpg"],
      },
    },
  },
  OutdoorLighting: {
    type: 2,
    categoryText: "Shop by Room",
    subCategoryText: "Outdoor Lights",

    categories: {
      "Dining Room": {
        link: "/products/dining-room",

        imgs: ["/images/testimonials.png", "/images/Scandinavian1.png"],
      },

      "Living Room": {
        link: "/products/living-room",

        imgs: ["/images/living1.jpg", "/images/living2.jpg"],
      },

      "Bed Room": {
        link: "/products/bedroom",

        imgs: ["/images/bedroom1.jpg", "/images/bedroom2.jpg"],
      },
    },

    subcategories: {
      "Modern Chandeliers": {
        link: "/chandelier",

        imgs: ["/images/chandelier1.jpg", "/images/chandelier2.jpg"],
      },

      "Crystal Chandeliers": {
        link: "/crystal-chandeliers",

        imgs: ["/images/chandelier3.jpg", "/images/chandelier4.jpg"],
      },

      "Ceiling Lights": {
        link: "/ceiling-lights",

        imgs: ["/images/ceiling1.jpg", "/images/ceiling2.jpg"],
      },
    },
  },

  otherLinks: [
    { name: "Electrical Supplies", link: "/electrical-supplies" },
    { name: "Fashion lights", link: "/fashion-lights" },
    { name: "Best Seller", link: "/best-seller" },
    { name: "New Arrivals", link: "/new-arrivals" },
    { name: "About", link: "/about-us" },

    { name: "Contact", link: "/contact" },

    { name: "Blog", link: "/blog" },
  ],
};

export const products = {
  1: {
    name: "LPD3191-4",
    description: "Product 1 - LPD3191-4",
    images: [
      "/images/lights/ceiling-light/LPD3191-4.JPG",
      "/images/lights/ceiling-light/LPD3191-4.JPG",
      "/images/lights/ceiling-light/LPD3191-4.JPG",
    ],

    addDate: "09/29/2025",
  },
  2: {
    name: "LPD8599R- 300",
    description: "Product 2 - LPD8599R- 300",
    images: [
      "/images/lights/ceiling-light/LPD8599R- 300.jpg",
      "/images/lights/ceiling-light/LPD8599R- 300.jpg",
      "/images/lights/ceiling-light/LPD8599R- 300.jpg",
    ],

    addDate: "09/29/2025",
  },
  3: {
    name: "LPD14401-3 BK",
    description: "Product 3 - LPD14401-3 BK",
    images: [
      "/images/lights/single-pendant-lights/LPD14401-3 BK.jpg",
      "/images/lights/single-pendant-lights/LPD14401-3 BK.jpg",
      "/images/lights/single-pendant-lights/LPD14401-3 BK.jpg",
    ],

    addDate: "09/29/2025",
  },
  4: {
    name: "LPD17500R-1 BK 2",
    description: "Product 4 - LPD17500R-1 BK 2",
    images: [
      "/images/lights/single-pendant-lights/LPD17500R-1 BK 2.jpg",
      "/images/lights/single-pendant-lights/LPD17500R-1 BK 2.jpg",
      "/images/lights/single-pendant-lights/LPD17500R-1 BK 2.jpg",
    ],

    addDate: "09/29/2025",
  },
  5: {
    name: "LX83007-360X360",
    description: "Product 5 - LX83007-360X360",
    images: [
      "/images/lights/ceiling-light/LX83007-360X360.JPG",
      "/images/lights/ceiling-light/LX83007-360X360.JPG",
      "/images/lights/ceiling-light/LX83007-360X360.JPG",
    ],

    addDate: "09/29/2025",
  },
  7: {
    name: "W14145",
    description: "Product 7 - W14145",
    images: [
      "/images/lights/wall-lights/W14145.jpg",
      "/images/lights/wall-lights/W14145.jpg",
      "/images/lights/wall-lights/W14145.jpg",
    ],

    addDate: "09/29/2025",
  },
  8: {
    name: "LD16505-10",
    description: "Product 8 - LD16505-10",
    images: [
      "/images/lights/chandelier/LD16505-10.jpg",
      "/images/lights/chandelier/LD16505-10.jpg",
      "/images/lights/chandelier/LD16505-10.jpg",
    ],

    addDate: "09/29/2025",
  },
  9: {
    name: "LDD10211-7 GD",
    description: "Product 9 - LDD10211-7 GD",
    images: [
      "/images/lights/dinning-lights/LDD10211-7 GD.JPG",
      "/images/lights/dinning-lights/LDD10211-7 GD.JPG",
      "/images/lights/dinning-lights/LDD10211-7 GD.JPG",
    ],

    addDate: "09/29/2025",
  },
  10: {
    name: "LPC1205-3",
    description: "Product 10 - LPC1205-3",
    images: [
      "/images/lights/chandelier/LPC1205-3.jpg",
      "/images/lights/chandelier/LPC1205-3.jpg",
      "/images/lights/chandelier/LPC1205-3.jpg",
    ],

    addDate: "09/29/2025",
  },
  11: {
    name: "LPC3071-860X300 GD on",
    description: "Product 11 - LPC3071-860X300 GD on",
    images: [
      "/images/lights/dinning-lights/LPC3071-860X300 GD on.JPG",
      "/images/lights/dinning-lights/LPC3071-860X300 GD on.JPG",
      "/images/lights/dinning-lights/LPC3071-860X300 GD on.JPG",
    ],

    addDate: "09/29/2025",
  },
  12: {
    name: "LPC3071-860X300 PBK OFF",
    description: "Product 12 - LPC3071-860X300 PBK OFF",
    images: [
      "/images/lights/dinning-lights/LPC3071-860X300 PBK OFF.jpg",
      "/images/lights/dinning-lights/LPC3071-860X300 PBK OFF.jpg",
      "/images/lights/dinning-lights/LPC3071-860X300 PBK OFF.jpg",
    ],

    addDate: "09/29/2025",
  },
  13: {
    name: "LPC8150-1",
    description: "Product 13 - LPC8150-1",
    images: [
      "/images/lights/single-pendant-lights/LPC8150-1.jpg",
      "/images/lights/single-pendant-lights/LPC8150-1.jpg",
      "/images/lights/single-pendant-lights/LPC8150-1.jpg",
    ],

    addDate: "09/29/2025",
  },
  14: {
    name: "LPC8150-23",
    description: "Product 14 - LPC8150-23",
    images: [
      "/images/lights/chandelier/LPC8150-23.jpg",
      "/images/lights/chandelier/LPC8150-23.jpg",
      "/images/lights/chandelier/LPC8150-23.jpg",
    ],

    addDate: "09/29/2025",
  },
  15: {
    name: "LPC8150-7",
    description: "Product 15 - LPC8150-7",
    images: [
      "/images/lights/dinning-lights/LPC8150-7.jpg",
      "/images/lights/dinning-lights/LPC8150-7.jpg",
      "/images/lights/dinning-lights/LPC8150-7.jpg",
    ],

    addDate: "09/29/2025",
  },
  16: {
    name: "13",
    description: "Product 16 - 13",
    images: [
      "/images/lights/outdoor-wall-light/13.jpg",
      "/images/lights/outdoor-wall-light/13.jpg",
      "/images/lights/outdoor-wall-light/13.jpg",
    ],

    addDate: "09/29/2025",
  },
  17: {
    name: "23",
    description: "Product 17 - 23",
    images: [
      "/images/lights/outdoor-wall-light/23.jpg",
      "/images/lights/outdoor-wall-light/23.jpg",
      "/images/lights/outdoor-wall-light/23.jpg",
    ],

    addDate: "09/29/2025",
  },
  18: {
    name: "33",
    description: "Product 18 - 33",
    images: [
      "/images/lights/outdoor-wall-light/33.jpg",
      "/images/lights/outdoor-wall-light/33.jpg",
      "/images/lights/outdoor-wall-light/33.jpg",
    ],

    addDate: "09/29/2025",
  },
  19: {
    name: "43",
    description: "Product 19 - 43",
    images: [
      "/images/lights/outdoor-wall-light/43.jpg",
      "/images/lights/outdoor-wall-light/43.jpg",
      "/images/lights/outdoor-wall-light/43.jpg",
    ],

    addDate: "09/29/2025",
  },
  20: {
    name: "5W圆形03_05_03",
    description: "Product 20 - 5W圆形03_05_03",
    images: [
      "/images/lights/landscape-lights/5W圆形03_05_03.png",
      "/images/lights/landscape-lights/5W圆形03_05_03.png",
      "/images/lights/landscape-lights/5W圆形03_05_03.png",
    ],

    addDate: "09/29/2025",
  },
  21: {
    name: "5W圆形03_05_04",
    description: "Product 21 - 5W圆形03_05_04",
    images: [
      "/images/lights/landscape-lights/5W圆形03_05_04.png",
      "/images/lights/landscape-lights/5W圆形03_05_04.png",
      "/images/lights/landscape-lights/5W圆形03_05_04.png",
    ],

    addDate: "09/29/2025",
  },
  22: {
    name: "5W圆形03_05_07",
    description: "Product 22 - 5W圆形03_05_07",
    images: [
      "/images/lights/landscape-lights/5W圆形03_05_07.png",
      "/images/lights/landscape-lights/5W圆形03_05_07.png",
      "/images/lights/landscape-lights/5W圆形03_05_07.png",
    ],

    addDate: "09/29/2025",
  },
  23: {
    name: "ACW12332-3",
    description: "Product 23 - ACW12332-3",
    images: [
      "/images/lights/vanity-light/ACW12332-3.JPG",
      "/images/lights/vanity-light/ACW12332-3.JPG",
      "/images/lights/vanity-light/ACW12332-3.JPG",
    ],

    addDate: "09/29/2025",
  },
  24: {
    name: "ACW12332-5",
    description: "Product 24 - ACW12332-5",
    images: [
      "/images/lights/vanity-light/ACW12332-5.JPG",
      "/images/lights/vanity-light/ACW12332-5.JPG",
      "/images/lights/vanity-light/ACW12332-5.JPG",
    ],

    addDate: "09/29/2025",
  },
  25: {
    name: "LCW17512-3",
    description: "Product 25 - LCW17512-3",
    images: [
      "/images/lights/vanity-light/LCW17512-3.jpg",
      "/images/lights/vanity-light/LCW17512-3.jpg",
      "/images/lights/vanity-light/LCW17512-3.jpg",
    ],

    addDate: "09/29/2025",
  },
  26: {
    name: "LCW17512-4",
    description: "Product 26 - LCW17512-4",
    images: [
      "/images/lights/vanity-light/LCW17512-4.jpg",
      "/images/lights/vanity-light/LCW17512-4.jpg",
      "/images/lights/vanity-light/LCW17512-4.jpg",
    ],

    addDate: "09/29/2025",
  },
  27: {
    name: "LCW17512-5",
    description: "Product 27 - LCW17512-5",
    images: [
      "/images/lights/vanity-light/LCW17512-5.jpg",
      "/images/lights/vanity-light/LCW17512-5.jpg",
      "/images/lights/vanity-light/LCW17512-5.jpg",
    ],

    addDate: "09/29/2025",
  },
  28: {
    name: "LCW17513-3",
    description: "Product 28 - LCW17513-3",
    images: [
      "/images/lights/vanity-light/LCW17513-3.jpg",
      "/images/lights/vanity-light/LCW17513-3.jpg",
      "/images/lights/vanity-light/LCW17513-3.jpg",
    ],

    addDate: "09/29/2025",
  },
  29: {
    name: "LCW17513-4",
    description: "Product 29 - LCW17513-4",
    images: [
      "/images/lights/vanity-light/LCW17513-4.jpg",
      "/images/lights/vanity-light/LCW17513-4.jpg",
      "/images/lights/vanity-light/LCW17513-4.jpg",
    ],

    addDate: "09/29/2025",
  },
  30: {
    name: "LCW17513-5",
    description: "Product 30 - LCW17513-5",
    images: [
      "/images/lights/vanity-light/LCW17513-5.jpg",
      "/images/lights/vanity-light/LCW17513-5.jpg",
      "/images/lights/vanity-light/LCW17513-5.jpg",
    ],

    addDate: "09/29/2025",
  },
  31: {
    name: "LCW17515-3-",
    description: "Product 31 - LCW17515-3-",
    images: [
      "/images/lights/vanity-light/LCW17515-3-.jpg",
      "/images/lights/vanity-light/LCW17515-3-.jpg",
      "/images/lights/vanity-light/LCW17515-3-.jpg",
    ],

    addDate: "09/29/2025",
  },
  32: {
    name: "LCW17515-4",
    description: "Product 32 - LCW17515-4",
    images: [
      "/images/lights/vanity-light/LCW17515-4.jpg",
      "/images/lights/vanity-light/LCW17515-4.jpg",
      "/images/lights/vanity-light/LCW17515-4.jpg",
    ],

    addDate: "09/29/2025",
  },
  33: {
    name: "LD1195-600",
    description: "Product 33 - LD1195-600",
    images: [
      "/images/lights/vanity-light/LD1195-600.JPG",
      "/images/lights/vanity-light/LD1195-600.JPG",
      "/images/lights/vanity-light/LD1195-600.JPG",
    ],

    addDate: "09/29/2025",
  },
  34: {
    name: "LD8855-3",
    description: "Product 34 - LD8855-3",
    images: [
      "/images/lights/vanity-light/LD8855-3.JPG",
      "/images/lights/vanity-light/LD8855-3.JPG",
      "/images/lights/vanity-light/LD8855-3.JPG",
    ],

    addDate: "09/29/2025",
  },
  35: {
    name: "LD8855-4",
    description: "Product 35 - LD8855-4",
    images: [
      "/images/lights/vanity-light/LD8855-4.JPG",
      "/images/lights/vanity-light/LD8855-4.JPG",
      "/images/lights/vanity-light/LD8855-4.JPG",
    ],

    addDate: "09/29/2025",
  },
  36: {
    name: "LPW10419-3",
    description: "Product 36 - LPW10419-3",
    images: [
      "/images/lights/vanity-light/LPW10419-3.jpg",
      "/images/lights/vanity-light/LPW10419-3.jpg",
      "/images/lights/vanity-light/LPW10419-3.jpg",
    ],

    addDate: "09/29/2025",
  },
  37: {
    name: "LPW10419-4",
    description: "Product 37 - LPW10419-4",
    images: [
      "/images/lights/vanity-light/LPW10419-4.jpg",
      "/images/lights/vanity-light/LPW10419-4.jpg",
      "/images/lights/vanity-light/LPW10419-4.jpg",
    ],

    addDate: "09/29/2025",
  },
  38: {
    name: "LPW10419-5",
    description: "Product 38 - LPW10419-5",
    images: [
      "/images/lights/vanity-light/LPW10419-5.jpg",
      "/images/lights/vanity-light/LPW10419-5.jpg",
      "/images/lights/vanity-light/LPW10419-5.jpg",
    ],

    addDate: "09/29/2025",
  },
  39: {
    name: "LPW15015-3",
    description: "Product 39 - LPW15015-3",
    images: [
      "/images/lights/vanity-light/LPW15015-3.jpg",
      "/images/lights/vanity-light/LPW15015-3.jpg",
      "/images/lights/vanity-light/LPW15015-3.jpg",
    ],

    addDate: "09/29/2025",
  },
  40: {
    name: "LPW15019-3 BK",
    description: "Product 40 - LPW15019-3 BK",
    images: [
      "/images/lights/vanity-light/LPW15019-3 BK.jpg",
      "/images/lights/vanity-light/LPW15019-3 BK.jpg",
      "/images/lights/vanity-light/LPW15019-3 BK.jpg",
    ],

    addDate: "09/29/2025",
  },
  41: {
    name: "LPW15019-4 BK",
    description: "Product 41 - LPW15019-4 BK",
    images: [
      "/images/lights/vanity-light/LPW15019-4 BK.JPG",
      "/images/lights/vanity-light/LPW15019-4 BK.JPG",
      "/images/lights/vanity-light/LPW15019-4 BK.JPG",
    ],

    addDate: "09/29/2025",
  },
  42: {
    name: "LPW15019-4 CH",
    description: "Product 42 - LPW15019-4 CH",
    images: [
      "/images/lights/vanity-light/LPW15019-4 CH.JPG",
      "/images/lights/vanity-light/LPW15019-4 CH.JPG",
      "/images/lights/vanity-light/LPW15019-4 CH.JPG",
    ],

    addDate: "09/29/2025",
  },
  43: {
    name: "LPW15019-4-",
    description: "Product 43 - LPW15019-4-",
    images: [
      "/images/lights/vanity-light/LPW15019-4-.jpg",
      "/images/lights/vanity-light/LPW15019-4-.jpg",
      "/images/lights/vanity-light/LPW15019-4-.jpg",
    ],

    addDate: "09/29/2025",
  },
  44: {
    name: "LPW15020-4 CH+BK",
    description: "Product 44 - LPW15020-4 CH+BK",
    images: [
      "/images/lights/vanity-light/LPW15020-4 CH+BK.JPG",
      "/images/lights/vanity-light/LPW15020-4 CH+BK.JPG",
      "/images/lights/vanity-light/LPW15020-4 CH+BK.JPG",
    ],

    addDate: "09/29/2025",
  },
  45: {
    name: "LPW15021-4",
    description: "Product 45 - LPW15021-4",
    images: [
      "/images/lights/vanity-light/LPW15021-4.jpg",
      "/images/lights/vanity-light/LPW15021-4.jpg",
      "/images/lights/vanity-light/LPW15021-4.jpg",
    ],

    addDate: "09/29/2025",
  },
  46: {
    name: "W14145 2",
    description: "Product 46 - W14145 2",
    images: [
      "/images/lights/vanity-light/W14145 2.psd",
      "/images/lights/vanity-light/W14145 2.psd",
      "/images/lights/vanity-light/W14145 2.psd",
    ],

    addDate: "09/29/2025",
  },
  47: {
    name: "W14145",
    description: "Product 47 - W14145",
    images: [
      "/images/lights/vanity-light/W14145.psd",
      "/images/lights/vanity-light/W14145.psd",
      "/images/lights/vanity-light/W14145.psd",
    ],

    addDate: "09/29/2025",
  },
  48: {
    name: "WB1222-3",
    description: "Product 48 - WB1222-3",
    images: [
      "/images/lights/vanity-light/WB1222-3.jpg",
      "/images/lights/vanity-light/WB1222-3.jpg",
      "/images/lights/vanity-light/WB1222-3.jpg",
    ],

    addDate: "09/29/2025",
  },
  49: {
    name: "WB1222-4",
    description: "Product 49 - WB1222-4",
    images: [
      "/images/lights/vanity-light/WB1222-4.jpg",
      "/images/lights/vanity-light/WB1222-4.jpg",
      "/images/lights/vanity-light/WB1222-4.jpg",
    ],

    addDate: "09/29/2025",
  },
  50: {
    name: "WB1222-5",
    description: "Product 50 - WB1222-5",
    images: [
      "/images/lights/vanity-light/WB1222-5.jpg",
      "/images/lights/vanity-light/WB1222-5.jpg",
      "/images/lights/vanity-light/WB1222-5.jpg",
    ],

    addDate: "09/29/2025",
  },
  51: {
    name: "WB8802S-3",
    description: "Product 51 - WB8802S-3",
    images: [
      "/images/lights/vanity-light/WB8802S-3.JPG",
      "/images/lights/vanity-light/WB8802S-3.JPG",
      "/images/lights/vanity-light/WB8802S-3.JPG",
    ],

    addDate: "09/29/2025",
  },
  52: {
    name: "WB8802S-5",
    description: "Product 52 - WB8802S-5",
    images: [
      "/images/lights/vanity-light/WB8802S-5.JPG",
      "/images/lights/vanity-light/WB8802S-5.JPG",
      "/images/lights/vanity-light/WB8802S-5.JPG",
    ],

    addDate: "09/29/2025",
  },
  53: {
    name: "WB8802S-6",
    description: "Product 53 - WB8802S-6",
    images: [
      "/images/lights/vanity-light/WB8802S-6.JPG",
      "/images/lights/vanity-light/WB8802S-6.JPG",
      "/images/lights/vanity-light/WB8802S-6.JPG",
    ],

    addDate: "09/29/2025",
  },
  54: {
    name: "03",
    description: "Product 54 - 03",
    images: [
      "/images/lights/wall-lights/03.jpg",
      "/images/lights/wall-lights/03.jpg",
      "/images/lights/wall-lights/03.jpg",
    ],

    addDate: "09/29/2025",
  },
  55: {
    name: "04",
    description: "Product 55 - 04",
    images: [
      "/images/lights/wall-lights/04.jpg",
      "/images/lights/wall-lights/04.jpg",
      "/images/lights/wall-lights/04.jpg",
    ],

    addDate: "09/29/2025",
  },
  56: {
    name: "14 Inch Up Down LED Wall Light 01",
    description: "Product 56 - 14 Inch Up Down LED Wall Light 01",
    images: [
      "/images/lights/wall-lights/14 Inch Up Down LED Wall Light 01.jpg",
      "/images/lights/wall-lights/14 Inch Up Down LED Wall Light 01.jpg",
      "/images/lights/wall-lights/14 Inch Up Down LED Wall Light 01.jpg",
    ],

    addDate: "09/29/2025",
  },
  57: {
    name: "14 Inch Up Down LED Wall Light 04",
    description: "Product 57 - 14 Inch Up Down LED Wall Light 04",
    images: [
      "/images/lights/wall-lights/14 Inch Up Down LED Wall Light 04.jpg",
      "/images/lights/wall-lights/14 Inch Up Down LED Wall Light 04.jpg",
      "/images/lights/wall-lights/14 Inch Up Down LED Wall Light 04.jpg",
    ],

    addDate: "09/29/2025",
  },
  58: {
    name: "14''",
    description: "Product 58 - 14''",
    images: [
      "/images/lights/wall-lights/14''.png",
      "/images/lights/wall-lights/14''.png",
      "/images/lights/wall-lights/14''.png",
    ],

    addDate: "09/29/2025",
  },
  59: {
    name: "8-inch-12w-led-wall-light-2",
    description: "Product 59 - 8-inch-12w-led-wall-light-2",
    images: [
      "/images/lights/wall-lights/8-inch-12w-led-wall-light-2.jpg",
      "/images/lights/wall-lights/8-inch-12w-led-wall-light-2.jpg",
      "/images/lights/wall-lights/8-inch-12w-led-wall-light-2.jpg",
    ],

    addDate: "09/29/2025",
  },
  60: {
    name: "8-inch-12w-led-wall-light-3",
    description: "Product 60 - 8-inch-12w-led-wall-light-3",
    images: [
      "/images/lights/wall-lights/8-inch-12w-led-wall-light-3.jpg",
      "/images/lights/wall-lights/8-inch-12w-led-wall-light-3.jpg",
      "/images/lights/wall-lights/8-inch-12w-led-wall-light-3.jpg",
    ],

    addDate: "09/29/2025",
  },
  61: {
    name: "8-inch-12w-led-wall-light",
    description: "Product 61 - 8-inch-12w-led-wall-light",
    images: [
      "/images/lights/wall-lights/8-inch-12w-led-wall-light.jpg",
      "/images/lights/wall-lights/8-inch-12w-led-wall-light.jpg",
      "/images/lights/wall-lights/8-inch-12w-led-wall-light.jpg",
    ],

    addDate: "09/29/2025",
  },
  62: {
    name: "8寸 三角壁灯",
    description: "Product 62 - 8寸 三角壁灯",
    images: [
      "/images/lights/wall-lights/8寸 三角壁灯.png",
      "/images/lights/wall-lights/8寸 三角壁灯.png",
      "/images/lights/wall-lights/8寸 三角壁灯.png",
    ],

    addDate: "09/29/2025",
  },
  63: {
    name: "LPW10249 CP",
    description: "Product 63 - LPW10249 CP",
    images: [
      "/images/lights/wall-lights/LPW10249 CP.png",
      "/images/lights/wall-lights/LPW10249 CP.png",
      "/images/lights/wall-lights/LPW10249 CP.png",
    ],

    addDate: "09/29/2025",
  },
  64: {
    name: "LPW14322",
    description: "Product 64 - LPW14322",
    images: [
      "/images/lights/wall-lights/LPW14322.jpg",
      "/images/lights/wall-lights/LPW14322.jpg",
      "/images/lights/wall-lights/LPW14322.jpg",
    ],

    addDate: "09/29/2025",
  },
  65: {
    name: "LPW14401-1 BK copy",
    description: "Product 65 - LPW14401-1 BK copy",
    images: [
      "/images/lights/wall-lights/LPW14401-1 BK copy.jpeg",
      "/images/lights/wall-lights/LPW14401-1 BK copy.jpeg",
      "/images/lights/wall-lights/LPW14401-1 BK copy.jpeg",
    ],

    addDate: "09/29/2025",
  },
  66: {
    name: "LPW15014-3",
    description: "Product 66 - LPW15014-3",
    images: [
      "/images/lights/wall-lights/LPW15014-3.jpg",
      "/images/lights/wall-lights/LPW15014-3.jpg",
      "/images/lights/wall-lights/LPW15014-3.jpg",
    ],

    addDate: "09/29/2025",
  },
  67: {
    name: "LPW3007 GD",
    description: "Product 67 - LPW3007 GD",
    images: [
      "/images/lights/wall-lights/LPW3007 GD.jpg",
      "/images/lights/wall-lights/LPW3007 GD.jpg",
      "/images/lights/wall-lights/LPW3007 GD.jpg",
    ],

    addDate: "09/29/2025",
  },
  68: {
    name: "LPW9385",
    description: "Product 68 - LPW9385",
    images: [
      "/images/lights/wall-lights/LPW9385.jpg",
      "/images/lights/wall-lights/LPW9385.jpg",
      "/images/lights/wall-lights/LPW9385.jpg",
    ],

    addDate: "09/29/2025",
  },
  69: {
    name: "14088-600",
    description: "Product 69 - 14088-600",
    images: [
      "/images/lights/chandelier/14088-600.JPG",
      "/images/lights/chandelier/14088-600.JPG",
      "/images/lights/chandelier/14088-600.JPG",
    ],

    addDate: "09/29/2025",
  },
  70: {
    name: "14088-800+500",
    description: "Product 70 - 14088-800+500",
    images: [
      "/images/lights/chandelier/14088-800+500.JPG",
      "/images/lights/chandelier/14088-800+500.JPG",
      "/images/lights/chandelier/14088-800+500.JPG",
    ],

    addDate: "09/29/2025",
  },
  71: {
    name: "AC8599R-3-1",
    description: "Product 71 - AC8599R-3-1",
    images: [
      "/images/lights/chandelier/AC8599R-3-1.jpg",
      "/images/lights/chandelier/AC8599R-3-1.jpg",
      "/images/lights/chandelier/AC8599R-3-1.jpg",
    ],

    addDate: "09/29/2025",
  },
  72: {
    name: "AC8599R-4--",
    description: "Product 72 - AC8599R-4--",
    images: [
      "/images/lights/chandelier/AC8599R-4--.jpg",
      "/images/lights/chandelier/AC8599R-4--.jpg",
      "/images/lights/chandelier/AC8599R-4--.jpg",
    ],

    addDate: "09/29/2025",
  },
  73: {
    name: "AC8599S-3",
    description: "Product 73 - AC8599S-3",
    images: [
      "/images/lights/chandelier/AC8599S-3.jpg",
      "/images/lights/chandelier/AC8599S-3.jpg",
      "/images/lights/chandelier/AC8599S-3.jpg",
    ],

    addDate: "09/29/2025",
  },
  74: {
    name: "AC8599S-6 GD",
    description: "Product 74 - AC8599S-6 GD",
    images: [
      "/images/lights/chandelier/AC8599S-6 GD.jpg",
      "/images/lights/chandelier/AC8599S-6 GD.jpg",
      "/images/lights/chandelier/AC8599S-6 GD.jpg",
    ],

    addDate: "09/29/2025",
  },
  75: {
    name: "AC8802-1 D600 BK",
    description: "Product 75 - AC8802-1 D600 BK",
    images: [
      "/images/lights/chandelier/AC8802-1 D600 BK.jpg",
      "/images/lights/chandelier/AC8802-1 D600 BK.jpg",
      "/images/lights/chandelier/AC8802-1 D600 BK.jpg",
    ],

    addDate: "09/29/2025",
  },
  76: {
    name: "AC8802-2 BK",
    description: "Product 76 - AC8802-2 BK",
    images: [
      "/images/lights/chandelier/AC8802-2 BK.JPG",
      "/images/lights/chandelier/AC8802-2 BK.JPG",
      "/images/lights/chandelier/AC8802-2 BK.JPG",
    ],

    addDate: "09/29/2025",
  },
  77: {
    name: "AC8802-5",
    description: "Product 77 - AC8802-5",
    images: [
      "/images/lights/chandelier/AC8802-5.jpg",
      "/images/lights/chandelier/AC8802-5.jpg",
      "/images/lights/chandelier/AC8802-5.jpg",
    ],

    addDate: "09/29/2025",
  },
  78: {
    name: "AC8802-600+400+200",
    description: "Product 78 - AC8802-600+400+200",
    images: [
      "/images/lights/chandelier/AC8802-600+400+200.JPG",
      "/images/lights/chandelier/AC8802-600+400+200.JPG",
      "/images/lights/chandelier/AC8802-600+400+200.JPG",
    ],

    addDate: "09/29/2025",
  },
  79: {
    name: "BC84004-3 D450 H500",
    description: "Product 79 - BC84004-3 D450 H500",
    images: [
      "/images/lights/single-pendant-lights/BC84004-3 D450 H500.jpg",
      "/images/lights/single-pendant-lights/BC84004-3 D450 H500.jpg",
      "/images/lights/single-pendant-lights/BC84004-3 D450 H500.jpg",
    ],

    addDate: "09/29/2025",
  },
  80: {
    name: "BC84004-6 GD D860 H500 MaxH1200",
    description: "Product 80 - BC84004-6 GD D860 H500 MaxH1200",
    images: [
      "/images/lights/chandelier/BC84004-6GDD860H500MaxH1200.jpg",
      "/images/lights/chandelier/BC84004-6GDD860H500MaxH1200.jpg",
      "/images/lights/chandelier/BC84004-6GDD860H500MaxH1200.jpg",
    ],

    addDate: "09/29/2025",
  },
  81: {
    name: "BC84004-8+4 D860 H500 MaxH1200",
    description: "Product 81 - BC84004-8+4 D860 H500 MaxH1200",
    images: [
      "/images/lights/chandelier/BC84004-8+4D860H500MaxH1200.jpg",
      "/images/lights/chandelier/BC84004-8+4D860H500MaxH1200.jpg",
      "/images/lights/chandelier/BC84004-8+4D860H500MaxH1200.jpg",
    ],

    addDate: "09/29/2025",
  },
  82: {
    name: "BC84006-4 BK 720X180X180",
    description: "Product 82 - BC84006-4 BK 720X180X180",
    images: [
      "/images/lights/dinning-lights/BC84006-4 BK 720X180X180.jpg",
      "/images/lights/dinning-lights/BC84006-4 BK 720X180X180.jpg",
      "/images/lights/dinning-lights/BC84006-4 BK 720X180X180.jpg",
    ],

    addDate: "09/29/2025",
  },
  83: {
    name: "BC84006-5 BK 920X180X180",
    description: "Product 83 - BC84006-5 BK 920X180X180",
    images: [
      "/images/lights/dinning-lights/BC84006-5 BK 920X180X180.jpg",
      "/images/lights/dinning-lights/BC84006-5 BK 920X180X180.jpg",
      "/images/lights/dinning-lights/BC84006-5 BK 920X180X180.jpg",
    ],

    addDate: "09/29/2025",
  },
  84: {
    name: "BC84011-8+4",
    description: "Product 84 - BC84011-8+4",
    images: [
      "/images/lights/chandelier/BC84011-8+4.jpg",
      "/images/lights/chandelier/BC84011-8+4.jpg",
      "/images/lights/chandelier/BC84011-8+4.jpg",
    ],

    addDate: "09/29/2025",
  },
  85: {
    name: "BC84023-1 BK",
    description: "Product 85 - BC84023-1 BK",
    images: [
      "/images/lights/single-pendant-lights/BC84023-1 BK.jpg",
      "/images/lights/single-pendant-lights/BC84023-1 BK.jpg",
      "/images/lights/single-pendant-lights/BC84023-1 BK.jpg",
    ],

    addDate: "09/29/2025",
  },
  86: {
    name: "BC84023-3L BK 2",
    description: "Product 86 - BC84023-3L BK 2",
    images: [
      "/images/lights/dinning-lights/BC84023-3L BK 2.jpg",
      "/images/lights/dinning-lights/BC84023-3L BK 2.jpg",
      "/images/lights/dinning-lights/BC84023-3L BK 2.jpg",
    ],

    addDate: "09/29/2025",
  },
  87: {
    name: "BC84023-3L GD",
    description: "Product 87 - BC84023-3L GD",
    images: [
      "/images/lights/dinning-lights/BC84023-3L GD.jpg",
      "/images/lights/dinning-lights/BC84023-3L GD.jpg",
      "/images/lights/dinning-lights/BC84023-3L GD.jpg",
    ],

    addDate: "09/29/2025",
  },
  88: {
    name: "BC84023-6R GD",
    description: "Product 88 - BC84023-6R GD",
    images: [
      "/images/lights/chandelier/BC84023-6R GD.jpg",
      "/images/lights/chandelier/BC84023-6R GD.jpg",
      "/images/lights/chandelier/BC84023-6R GD.jpg",
    ],

    addDate: "09/29/2025",
  },
  89: {
    name: "BC84023-7 BK",
    description: "Product 89 - BC84023-7 BK",
    images: [
      "/images/lights/chandelier/BC84023-7 BK.jpg",
      "/images/lights/chandelier/BC84023-7 BK.jpg",
      "/images/lights/chandelier/BC84023-7 BK.jpg",
    ],

    addDate: "09/29/2025",
  },
  90: {
    name: "BX84012-7 BK 1040X480X310",
    description: "Product 90 - BX84012-7 BK 1040X480X310",
    images: [
      "/images/lights/dinning-lights/BX84012-7 BK 1040X480X310.png",
      "/images/lights/dinning-lights/BX84012-7 BK 1040X480X310.png",
      "/images/lights/dinning-lights/BX84012-7 BK 1040X480X310.png",
    ],

    addDate: "09/29/2025",
  },
  91: {
    name: "CA17533-61 BK",
    description: "Product 91 - CA17533-61 BK",
    images: [
      "/images/lights/chandelier/CA17533-61 BK.png",
      "/images/lights/chandelier/CA17533-61 BK.png",
      "/images/lights/chandelier/CA17533-61 BK.png",
    ],

    addDate: "09/29/2025",
  },
  92: {
    name: "CA17533-61 GD",
    description: "Product 92 - CA17533-61 GD",
    images: [
      "/images/lights/chandelier/CA17533-61 GD.png",
      "/images/lights/chandelier/CA17533-61 GD.png",
      "/images/lights/chandelier/CA17533-61 GD.png",
    ],

    addDate: "09/29/2025",
  },
  93: {
    name: "CB8693-3 (D800+D600+D400mm) H1200mm LED 87w 2835 led, materails Aluminum+ACrylic",
    description:
      "Product 93 - CB8693-3 (D800+D600+D400mm) H1200mm LED 87w 2835 led, materails Aluminum+ACrylic",
    images: [
      "/images/lights/chandelier/CB8693-3(D800+D600+D400mm)H1200mmLED87w2835led,materailsAluminu+ACrylic.JPG",
      "/images/lights/chandelier/CB8693-3(D800+D600+D400mm)H1200mmLED87w2835led,materailsAluminu+ACrylic.JPG",
      "/images/lights/chandelier/CB8693-3(D800+D600+D400mm)H1200mmLED87w2835led,materailsAluminu+ACrylic.JPG",
    ],

    addDate: "09/29/2025",
  },
  94: {
    name: "CB8693-5(D800+D700+D600+D500+D400) LED 97w 2835 led, materails Aluminum+ACrylic",
    description:
      "Product 94 - CB8693-5(D800+D700+D600+D500+D400) LED 97w 2835 led, materails Aluminum+ACrylic",
    images: [
      "/images/lights/chandelier/CB8693-5(D800+D700+D600+D500+D400)LED97w2835led,materailsAluminu+ACrylic.JPG",
      "/images/lights/chandelier/CB8693-5(D800+D700+D600+D500+D400)LED97w2835led,materailsAluminu+ACrylic.JPG",
      "/images/lights/chandelier/CB8693-5(D800+D700+D600+D500+D400)LED97w2835led,materailsAluminu+ACrylic.JPG",
    ],

    addDate: "09/29/2025",
  },
  95: {
    name: "CB8730B-3 Pendant Light D350 H1200mm LED 24W Aluminum+acrylic+crystal",
    description:
      "Product 95 - CB8730B-3 Pendant Light D350 H1200mm LED 24W Aluminum+acrylic+crystal",
    images: [
      "/images/lights/chandelier/CB8730B-3 Pendant Light D350 H1200mm LED 24W Aluminum+acrylic+crystal.png",
      "/images/lights/chandelier/CB8730B-3 Pendant Light D350 H1200mm LED 24W Aluminum+acrylic+crystal.png",
      "/images/lights/chandelier/CB8730B-3 Pendant Light D350 H1200mm LED 24W Aluminum+acrylic+crystal.png",
    ],

    addDate: "09/29/2025",
  },
  96: {
    name: "CN8020-1000",
    description: "Product 96 - CN8020-1000",
    images: [
      "/images/lights/chandelier/CN8020-1000.JPG",
      "/images/lights/chandelier/CN8020-1000.JPG",
      "/images/lights/chandelier/CN8020-1000.JPG",
    ],

    addDate: "09/29/2025",
  },
  97: {
    name: "CN8020-600",
    description: "Product 97 - CN8020-600",
    images: [
      "/images/lights/chandelier/CN8020-600.jpg",
      "/images/lights/chandelier/CN8020-600.jpg",
      "/images/lights/chandelier/CN8020-600.jpg",
    ],

    addDate: "09/29/2025",
  },
  98: {
    name: "LC83001-4",
    description: "Product 98 - LC83001-4",
    images: [
      "/images/lights/chandelier/LC83001-4.jpg",
      "/images/lights/chandelier/LC83001-4.jpg",
      "/images/lights/chandelier/LC83001-4.jpg",
    ],

    addDate: "09/29/2025",
  },
  99: {
    name: "LC83007",
    description: "Product 99 - LC83007",
    images: [
      "/images/lights/chandelier/LC83007.JPG",
      "/images/lights/chandelier/LC83007.JPG",
      "/images/lights/chandelier/LC83007.JPG",
    ],

    addDate: "09/29/2025",
  },
  100: {
    name: "LD10733-2",
    description: "Product 100 - LD10733-2",
    images: [
      "/images/lights/chandelier/LD10733-2.JPG",
      "/images/lights/chandelier/LD10733-2.JPG",
      "/images/lights/chandelier/LD10733-2.JPG",
    ],

    addDate: "09/29/2025",
  },
  101: {
    name: "LD10733-3",
    description: "Product 101 - LD10733-3",
    images: [
      "/images/lights/chandelier/LD10733-3.JPG",
      "/images/lights/chandelier/LD10733-3.JPG",
      "/images/lights/chandelier/LD10733-3.JPG",
    ],

    addDate: "09/29/2025",
  },
  102: {
    name: "LD6805-400+200",
    description: "Product 102 - LD6805-400+200",
    images: [
      "/images/lights/chandelier/LD6805-400+200.jpg",
      "/images/lights/chandelier/LD6805-400+200.jpg",
      "/images/lights/chandelier/LD6805-400+200.jpg",
    ],

    addDate: "09/29/2025",
  },
  103: {
    name: "LD6805-6",
    description: "Product 103 - LD6805-6",
    images: [
      "/images/lights/chandelier/LD6805-6.png",
      "/images/lights/chandelier/LD6805-6.png",
      "/images/lights/chandelier/LD6805-6.png",
    ],

    addDate: "09/29/2025",
  },
  104: {
    name: "LD8802-200",
    description: "Product 104 - LD8802-200",
    images: [
      "/images/lights/chandelier/LD8802-200.JPG",
      "/images/lights/chandelier/LD8802-200.JPG",
      "/images/lights/chandelier/LD8802-200.JPG",
    ],

    addDate: "09/29/2025",
  },
  105: {
    name: "LD9045",
    description: "Product 105 - LD9045",
    images: [
      "/images/lights/chandelier/LD9045.jpg",
      "/images/lights/chandelier/LD9045.jpg",
      "/images/lights/chandelier/LD9045.jpg",
    ],

    addDate: "09/29/2025",
  },
  106: {
    name: "LP3196-4 BK",
    description: "Product 106 - LP3196-4 BK",
    images: [
      "/images/lights/single-pendant-lights/LP3196-4 BK.jpg",
      "/images/lights/single-pendant-lights/LP3196-4 BK.jpg",
      "/images/lights/single-pendant-lights/LP3196-4 BK.jpg",
    ],

    addDate: "09/29/2025",
  },
  107: {
    name: "LP3196-4 GD",
    description: "Product 107 - LP3196-4 GD",
    images: [
      "/images/lights/single-pendant-lights/LP3196-4 GD.jpg",
      "/images/lights/single-pendant-lights/LP3196-4 GD.jpg",
      "/images/lights/single-pendant-lights/LP3196-4 GD.jpg",
    ],

    addDate: "09/29/2025",
  },
  109: {
    name: "LPC14195",
    description: "Product 109 - LPC14195",
    images: [
      "/images/lights/single-pendant-lights/LPC14195.jpg",
      "/images/lights/single-pendant-lights/LPC14195.jpg",
      "/images/lights/single-pendant-lights/LPC14195.jpg",
    ],

    addDate: "09/29/2025",
  },
  110: {
    name: "LPD17500R-46 BK",
    description: "Product 110 - LPD17500R-46 BK",
    images: [
      "/images/lights/chandelier/LPD17500R-46 BK.jpg",
      "/images/lights/chandelier/LPD17500R-46 BK.jpg",
      "/images/lights/chandelier/LPD17500R-46 BK.jpg",
    ],

    addDate: "09/29/2025",
  },
  111: {
    name: "LPD17500R-5 BK",
    description: "Product 111 - LPD17500R-5 BK",
    images: [
      "/images/lights/chandelier/LPD17500R-5 BK.jpg",
      "/images/lights/chandelier/LPD17500R-5 BK.jpg",
      "/images/lights/chandelier/LPD17500R-5 BK.jpg",
    ],

    addDate: "09/29/2025",
  },
  112: {
    name: "LPD17530-23 BK",
    description: "Product 112 - LPD17530-23 BK",
    images: [
      "/images/lights/chandelier/LPD17530-23 BK.jpg",
      "/images/lights/chandelier/LPD17530-23 BK.jpg",
      "/images/lights/chandelier/LPD17530-23 BK.jpg",
    ],

    addDate: "09/29/2025",
  },
  114: {
    name: "LPD17530-7",
    description: "Product 114 - LPD17530-7",
    images: [
      "/images/lights/chandelier/LPD17530-7.jpg",
      "/images/lights/chandelier/LPD17530-7.jpg",
      "/images/lights/chandelier/LPD17530-7.jpg",
    ],

    addDate: "09/29/2025",
  },
  115: {
    addDate: "11/16/2025",
    description: "CENA Brass Desk Lamp",
    images: [
      "/images/lights/kendal-lights/PTL8705-BRS.jpg",
      "/images/lights/kendal-lights/PTL8705-BRS.jpg",
      "/images/lights/kendal-lights/PTL8705-BRS.jpg",
    ],
    name: "PTL8705-BRS",
  },
  116: {
    addDate: "11/16/2025",
    description: "TESA Black Desk Lamp",
    images: [
      "/images/lights/kendal-lights/PTL6401-BLK.jpg",
      "/images/lights/kendal-lights/PTL6401-BLK.jpg",
      "/images/lights/kendal-lights/PTL6401-BLK.jpg",
    ],
    name: "PTL6401-BLK",
  },
  117: {
    addDate: "11/16/2025",
    description: "FLUX Black Desk Lamp",
    images: [
      "/images/lights/kendal-lights/PTL6201-BLK.jpg",
      "/images/lights/kendal-lights/PTL6201-BLK.jpg",
      "/images/lights/kendal-lights/PTL6201-BLK.jpg",
    ],
    name: "PTL6201-BLK",
  },
  118: {
    addDate: "11/16/2025",
    description: "ICAN Brass Desk Lamp",
    images: [
      "/images/lights/kendal-lights/PTL6901-BRS.jpg",
      "/images/lights/kendal-lights/PTL6901-BRS.jpg",
      "/images/lights/kendal-lights/PTL6901-BRS.jpg",
    ],
    name: "PTL6901-BRS",
  },
  119: {
    addDate: "11/16/2025",
    description: "TAVV Black Desk Lamp",
    images: [
      "/images/lights/kendal-lights/PTL4094-BLK.jpg",
      "/images/lights/kendal-lights/PTL4094-BLK.jpg",
      "/images/lights/kendal-lights/PTL4094-BLK.jpg",
    ],
    name: "PTL4094-BLK",
  },
  120: {
    addDate: "11/16/2025",
    description: "IBIZA Black Desk Lamp",
    images: [
      "/images/lights/kendal-lights/PTL5020-BLK.jpg",
      "/images/lights/kendal-lights/PTL5020-BLK.jpg",
      "/images/lights/kendal-lights/PTL5020-BLK.jpg",
    ],
    name: "PTL5020-BLK",
  },
  121: {
    addDate: "11/16/2025",
    description: "IGGY Black Desk Lamp",
    images: [
      "/images/lights/kendal-lights/PTL5021-BLK.jpg",
      "/images/lights/kendal-lights/PTL5021-BLK.jpg",
      "/images/lights/kendal-lights/PTL5021-BLK.jpg",
    ],
    name: "PTL5021-BLK",
  },
  122: {
    addDate: "11/16/2025",
    description: "LAHOYA Satin Nickel Desk Lamp",
    images: [
      "/images/lights/kendal-lights/PTL5015-SN.jpg",
      "/images/lights/kendal-lights/PTL5015-SN.jpg",
      "/images/lights/kendal-lights/PTL5015-SN.jpg",
    ],
    name: "PTL5015-SN",
  },
  123: {
    addDate: "11/16/2025",
    description: "DOVA Black Desk Lamp",
    images: [
      "/images/lights/kendal-lights/PTL5006-BLK.jpg",
      "/images/lights/kendal-lights/PTL5006-BLK.jpg",
      "/images/lights/kendal-lights/PTL5006-BLK.jpg",
    ],
    name: "PTL5006-BLK",
  },
  124: {
    addDate: "11/16/2025",
    description: "MERA Black Floor Lamp",
    images: [
      "/images/lights/kendal-lights/PTL5007-BLK.jpg",
      "/images/lights/kendal-lights/PTL5007-BLK.jpg",
      "/images/lights/kendal-lights/PTL5007-BLK.jpg",
    ],
    name: "PTL5007-BLK",
  },
  125: {
    addDate: "11/16/2025",
    description: "TAVV Satin Nickel Desk Lamp",
    images: [
      "/images/lights/kendal-lights/PTL4094-SN.jpg",
      "/images/lights/kendal-lights/PTL4094-SN.jpg",
      "/images/lights/kendal-lights/PTL4094-SN.jpg",
    ],
    name: "PTL4094-SN",
  },
  126: {
    addDate: "11/16/2025",
    description: "JEXX Black Desk Lamp",
    images: [
      "/images/lights/kendal-lights/PTL5002-BLK.jpg",
      "/images/lights/kendal-lights/PTL5002-BLK.jpg",
      "/images/lights/kendal-lights/PTL5002-BLK.jpg",
    ],
    name: "PTL5002-BLK",
  },
  127: {
    name: "PTL8708-CH",
    description: "VORA Chrome Table Lamp",
    images: [
      "/images/lights/kendal-lights/PTL8708-CH.jpg",
      "/images/lights/kendal-lights/PTL8708-CH.jpg",
      "/images/lights/kendal-lights/PTL8708-CH.jpg",
    ],

    addDate: "11/16/2025",
  },
  128: {
    name: "PTL8708-BRS",
    description: "VORA Brass Table Lamp",
    images: [
      "/images/lights/kendal-lights/PTL8708-BRS.jpg",
      "/images/lights/kendal-lights/PTL8708-BRS.jpg",
      "/images/lights/kendal-lights/PTL8708-BRS.jpg",
    ],

    addDate: "11/16/2025",
  },
  129: {
    name: "PTL8708-BLK",
    description: "VORA Black Table Lamp",
    images: [
      "/images/lights/kendal-lights/PTL8708-BLK.jpg",
      "/images/lights/kendal-lights/PTL8708-BLK.jpg",
      "/images/lights/kendal-lights/PTL8708-BLK.jpg",
    ],

    addDate: "11/16/2025",
  },
  130: {
    name: "PTL5008-OCB",
    description: "VOXX Oilcan Brass Table Lamp",
    images: [
      "/images/lights/kendal-lights/PTL5008-OCB.jpg",
      "/images/lights/kendal-lights/PTL5008-OCB.jpg",
      "/images/lights/kendal-lights/PTL5008-OCB.jpg",
    ],

    addDate: "11/16/2025",
  },
  131: {
    name: "PTL5008-SV",
    description: "VOXX Silver Table Lamp",
    images: [
      "/images/lights/kendal-lights/PTL5008-SV.jpg",
      "/images/lights/kendal-lights/PTL5008-SV.jpg",
      "/images/lights/kendal-lights/PTL5008-SV.jpg",
    ],

    addDate: "11/16/2025",
  },
  132: {
    name: "PTL5010-BLK",
    description: "RAZZ Black Table Lamp",
    images: [
      "/images/lights/kendal-lights/PTL5010-BLK.jpg",
      "/images/lights/kendal-lights/PTL5010-BLK.jpg",
      "/images/lights/kendal-lights/PTL5010-BLK.jpg",
    ],

    addDate: "11/16/2025",
  },
  133: {
    name: "PTL7816-CH",
    description: "STRATE Chrome Table Lamp",
    images: [
      "/images/lights/kendal-lights/PTL7816-CH.jpg",
      "/images/lights/kendal-lights/PTL7816-CH.jpg",
      "/images/lights/kendal-lights/PTL7816-CH.jpg",
    ],

    addDate: "11/16/2025",
  },
  134: {
    name: "PTL8015-CH",
    description: "ARCH Chrome Table Lamp",
    images: [
      "/images/lights/kendal-lights/PTL8015-CH.jpg",
      "/images/lights/kendal-lights/PTL8015-CH.jpg",
      "/images/lights/kendal-lights/PTL8015-CH.jpg",
    ],

    addDate: "11/16/2025",
  },
  135: {
    name: "PTL4092-CH",
    description: "MILAN Chrome Table Lamp",
    images: [
      "/images/lights/kendal-lights/PTL4092-CH.jpg",
      "/images/lights/kendal-lights/PTL4092-CH.jpg",
      "/images/lights/kendal-lights/PTL4092-CH.jpg",
    ],

    addDate: "11/16/2025",
  },
  136: {
    addDate: "11/16/2025",
    description: "DOVU Brass & Black Floor Lamp",
    images: [
      "/images/lights/kendal-lights/FL8702-BRSBLK.jpg",
      "/images/lights/kendal-lights/FL8702-BRSBLK.jpg",
      "/images/lights/kendal-lights/FL8702-BRSBLK.jpg",
    ],
    name: "FL8702-BRS/BLK",
  },
  137: {
    addDate: "11/16/2025",
    description: "CENA Brass Floor Lamp",
    images: [
      "/images/lights/kendal-lights/FL8705-BRS.jpg",
      "/images/lights/kendal-lights/FL8705-BRS.jpg",
      "/images/lights/kendal-lights/FL8705-BRS.jpg",
    ],
    name: "FL8705-BRS",
  },
  138: {
    addDate: "11/16/2025",
    description: "SLEY Black & Brass Floor Lamp",
    images: [
      "/images/lights/kendal-lights/FL6601-BLKBRS.jpg",
      "/images/lights/kendal-lights/FL6601-BLKBRS.jpg",
      "/images/lights/kendal-lights/FL6601-BLKBRS.jpg",
    ],
    name: "FL6601-BLK/BRS",
  },
  139: {
    addDate: "11/16/2025",
    description: "TESA Black Floor Lamp",
    images: [
      "/images/lights/kendal-lights/FL6401-BLK.jpg",
      "/images/lights/kendal-lights/FL6401-BLK.jpg",
      "/images/lights/kendal-lights/FL6401-BLK.jpg",
    ],
    name: "FL6401-BLK",
  },
  140: {
    addDate: "11/16/2025",
    description: "FLUX Black Floor Lamp",
    images: [
      "/images/lights/kendal-lights/FL6201-BLK.jpg",
      "/images/lights/kendal-lights/FL6201-BLK.jpg",
      "/images/lights/kendal-lights/FL6201-BLK.jpg",
    ],
    name: "FL6201-BLK",
  },
  141: {
    addDate: "11/16/2025",
    description: "QUOR Black Floor Lamp",
    images: [
      "/images/lights/kendal-lights/FL7101-BLK.jpg",
      "/images/lights/kendal-lights/FL7101-BLK.jpg",
      "/images/lights/kendal-lights/FL7101-BLK.jpg",
    ],
    name: "FL7101-BLK",
  },
  142: {
    addDate: "11/16/2025",
    description: "BRON Black & Stainless Steel Floor Lamp",
    images: [
      "/images/lights/kendal-lights/FL7001-BLKSS.jpg",
      "/images/lights/kendal-lights/FL7001-BLKSS.jpg",
      "/images/lights/kendal-lights/FL7001-BLKSS.jpg",
    ],
    name: "FL7001-BLK/SS",
  },
  143: {
    addDate: "11/16/2025",
    description: "OSLO TWINS Brass Floor Lamp",
    images: [
      "/images/lights/kendal-lights/FL4048-2-BRS.jpg",
      "/images/lights/kendal-lights/FL4048-2-BRS.jpg",
      "/images/lights/kendal-lights/FL4048-2-BRS.jpg",
    ],
    name: "FL4048-2-BRS",
  },
  144: {
    addDate: "11/16/2025",
    description: "OSLO Black Floor Lamp",
    images: [
      "/images/lights/kendal-lights/FL4048-BLK.jpg",
      "/images/lights/kendal-lights/FL4048-BLK.jpg",
      "/images/lights/kendal-lights/FL4048-BLK.jpg",
    ],
    name: "FL4048-BLK",
  },
  145: {
    addDate: "11/16/2025",
    description: "IGGY Satin Nickel Floor Lamp",
    images: [
      "/images/lights/kendal-lights/FL5021-SN.jpg",
      "/images/lights/kendal-lights/FL5021-SN.jpg",
      "/images/lights/kendal-lights/FL5021-SN.jpg",
    ],
    name: "FL5021-SN",
  },
  146: {
    addDate: "11/16/2025",
    description: "LAHOYA Satin Nickel Floor Lamp",
    images: [
      "/images/lights/kendal-lights/FL5015-SN.jpg",
      "/images/lights/kendal-lights/FL5015-SN.jpg",
      "/images/lights/kendal-lights/FL5015-SN.jpg",
    ],
    name: "FL5015-SN",
  },
  147: {
    name: "TC5024-BLK/SN",
    description: "NOLA Black & Satin Nickel Torchiere",
    images: [
      "/images/lights/kendal-lights/TC5024-BLKSN.jpg",
      "/images/lights/kendal-lights/TC5024-BLKSN.jpg",
      "/images/lights/kendal-lights/TC5024-BLKSN.jpg",
    ],

    addDate: "11/16/2025",
  },
  148: {
    name: "TC5023-BLK/BRS",
    description: "PLEX Black & Brass Torchiere",
    images: [
      "/images/lights/kendal-lights/TC5023-BLKBRS.jpg",
      "/images/lights/kendal-lights/TC5023-BLKBRS.jpg",
      "/images/lights/kendal-lights/TC5023-BLKBRS.jpg",
    ],

    addDate: "11/16/2025",
  },
  149: {
    name: "TC5020-BLK",
    description: "IBIZA Black Torchiere",
    images: [
      "/images/lights/kendal-lights/TC5020-BLK.jpg",
      "/images/lights/kendal-lights/TC5020-BLK.jpg",
      "/images/lights/kendal-lights/TC5020-BLK.jpg",
    ],

    addDate: "11/16/2025",
  },
  150: {
    name: "TC5020-SN",
    description: "IBIZA Satin Nickel Torchiere",
    images: [
      "/images/lights/kendal-lights/TC5020-SN.jpg",
      "/images/lights/kendal-lights/TC5020-SN.jpg",
      "/images/lights/kendal-lights/TC5020-SN.jpg",
    ],

    addDate: "11/16/2025",
  },
  151: {
    name: "TC5021-BLK",
    description: "IGGY Black Torchiere",
    images: [
      "/images/lights/kendal-lights/TC5021-BLK.jpg",
      "/images/lights/kendal-lights/TC5021-BLK.jpg",
      "/images/lights/kendal-lights/TC5021-BLK.jpg",
    ],

    addDate: "11/16/2025",
  },
  152: {
    name: "TC5021-SN",
    description: "IGGY Satin Nickel Torchiere",
    images: [
      "/images/lights/kendal-lights/TC5021-SN.jpg",
      "/images/lights/kendal-lights/TC5021-SN.jpg",
      "/images/lights/kendal-lights/TC5021-SN.jpg",
    ],

    addDate: "11/16/2025",
  },
  153: {
    name: "TC5011-BLK",
    description: "ZORA Black Torchiere",
    images: [
      "/images/lights/kendal-lights/TC5011-BLK.jpg",
      "/images/lights/kendal-lights/TC5011-BLK.jpg",
      "/images/lights/kendal-lights/TC5011-BLK.jpg",
    ],

    addDate: "11/16/2025",
  },
  154: {
    name: "TC5011-SN",
    description: "ZORA Satin Nickel Torchiere",
    images: [
      "/images/lights/kendal-lights/TC5011-SN.jpg",
      "/images/lights/kendal-lights/TC5011-SN.jpg",
      "/images/lights/kendal-lights/TC5011-SN.jpg",
    ],

    addDate: "11/16/2025",
  },
  155: {
    name: "TC5012-BLK/SN",
    description: "ELLA Black & Satin Nickel Torchiere",
    images: [
      "/images/lights/kendal-lights/TC5012-BLKSN.jpg",
      "/images/lights/kendal-lights/TC5012-BLKSN.jpg",
      "/images/lights/kendal-lights/TC5012-BLKSN.jpg",
    ],

    addDate: "11/16/2025",
  },
  156: {
    name: "TC5012-SN",
    description: "ELLA Satin Nickel Torchiere",
    images: [
      "/images/lights/kendal-lights/TC5012-SN.jpg",
      "/images/lights/kendal-lights/TC5012-SN.jpg",
      "/images/lights/kendal-lights/TC5012-SN.jpg",
    ],

    addDate: "11/16/2025",
  },
  157: {
    addDate: "11/16/2025",
    description: "MARIN 8-Light LED Rectangular Pan",
    images: [
      "/images/lights/kendal-lights/PF279-8LRT-BLK.png",
      "/images/lights/kendal-lights/PF279-8LRT-BLK.png",
      "/images/lights/kendal-lights/PF279-8LRT-BLK.png",
    ],
    name: "PF279-8LRT-BLK",
  },
  158: {
    addDate: "11/16/2025",
    description: "MARIN 13-Light LED Pendant Pan",
    images: [
      "/images/lights/kendal-lights/PF279-13LPA-BLK.png",
      "/images/lights/kendal-lights/PF279-13LPA-BLK.png",
      "/images/lights/kendal-lights/PF279-13LPA-BLK.png",
    ],
    name: "PF279-13LPA-BLK",
  },
  159: {
    addDate: "11/16/2025",
    description: "MARIN 1-Light LED Pendant",
    images: [
      "/images/lights/kendal-lights/PF279-1LPE-BLK.png",
      "/images/lights/kendal-lights/PF279-1LPE-BLK.png",
      "/images/lights/kendal-lights/PF279-1LPE-BLK.png",
    ],
    name: "PF279-1LPE-BLK",
  },
  160: {
    addDate: "11/16/2025",
    description: "ZOLA Brass 3-CCT LED Linear Dot Fixture",
    images: [
      "/images/lights/kendal-lights/PF276-BRS.jpg",
      "/images/lights/kendal-lights/PF276-BRS.jpg",
      "/images/lights/kendal-lights/PF276-BRS.jpg",
    ],
    name: "PF276-BRS",
  },
  161: {
    addDate: "11/16/2025",
    description: "TRAVARE Black LED Bar",
    images: [
      "/images/lights/kendal-lights/PF268-BLKCLR.jpg",
      "/images/lights/kendal-lights/PF268-BLKCLR.jpg",
      "/images/lights/kendal-lights/PF268-BLKCLR.jpg",
    ],
    name: "PF268-BLK/CLR",
  },
  162: {
    addDate: "11/16/2025",
    description: "SOLICA 1-Light Black LED Pendant",
    images: [
      "/images/lights/kendal-lights/PF269-BLKCLR.jpg",
      "/images/lights/kendal-lights/PF269-BLKCLR.jpg",
      "/images/lights/kendal-lights/PF269-BLKCLR.jpg",
    ],
    name: "PF269-BLK/CLR",
  },
  163: {
    addDate: "11/16/2025",
    description: "SOLICA 3-Light Brass LED Pendant",
    images: [
      "/images/lights/kendal-lights/PF269-3LPA-BRSCLR.jpg",
      "/images/lights/kendal-lights/PF269-3LPA-BRSCLR.jpg",
      "/images/lights/kendal-lights/PF269-3LPA-BRSCLR.jpg",
    ],
    name: "PF269-3LPA-BRS/CLR",
  },
  164: {
    addDate: "11/16/2025",
    description: "SOLICA 5-Light Brass LED Pendant",
    images: [
      "/images/lights/kendal-lights/PF269-5LPA-BRSCLR.jpg",
      "/images/lights/kendal-lights/PF269-5LPA-BRSCLR.jpg",
      "/images/lights/kendal-lights/PF269-5LPA-BRSCLR.jpg",
    ],
    name: "PF269-5LPA-BRS/CLR",
  },
  165: {
    addDate: "11/16/2025",
    description: "SOREN 3-Light Pendant Pan",
    images: [
      "/images/lights/kendal-lights/PF271-3LPA-BLK.jpg",
      "/images/lights/kendal-lights/PF271-3LPA-BLK.jpg",
      "/images/lights/kendal-lights/PF271-3LPA-BLK.jpg",
    ],
    name: "PF271-3LPA-BLK",
  },
  166: {
    addDate: "11/16/2025",
    description: "SILHOUETTES 6-Light LED Rectangular Pan",
    images: [
      "/images/lights/kendal-lights/PF265-6LRT-BLK.jpg",
      "/images/lights/kendal-lights/PF265-6LRT-BLK.jpg",
      "/images/lights/kendal-lights/PF265-6LRT-BLK.jpg",
    ],
    name: "PF265-6LRT-BLK",
  },
  167: {
    addDate: "11/16/2025",
    description: "CIRCOLS 5-Light LED Pendant Bar",
    images: [
      "/images/lights/kendal-lights/PF328-5LBR-BLKBRS.jpg",
      "/images/lights/kendal-lights/PF328-5LBR-BLKBRS.jpg",
      "/images/lights/kendal-lights/PF328-5LBR-BLKBRS.jpg",
    ],
    name: "PF328-5LBR-BLK/BRS",
  },
  168: {
    addDate: "11/16/2025",
    description: "PHAEDRA 9-Light LED Pendant Bar",
    images: [
      "/images/lights/kendal-lights/PF321-9LBR-BLK.jpg",
      "/images/lights/kendal-lights/PF321-9LBR-BLK.jpg",
      "/images/lights/kendal-lights/PF321-9LBR-BLK.jpg",
    ],
    name: "PF321-9LBR-BLK",
  },
  169: {
    addDate: "11/16/2025",
    description: "PRADO 32 in. LED Pendant",
    images: [
      "/images/lights/kendal-lights/PF310-BLK.jpg",
      "/images/lights/kendal-lights/PF310-BLK.jpg",
      "/images/lights/kendal-lights/PF310-BLK.jpg",
    ],
    name: "PF310-BLK",
  },
  170: {
    addDate: "11/16/2025",
    description: "RINGS 24 inches Brass LED Vanity",
    images: [
      "/images/lights/kendal-lights/VF1824-BRS.jpg",
      "/images/lights/kendal-lights/VF1824-BRS.jpg",
      "/images/lights/kendal-lights/VF1824-BRS.jpg",
    ],
    name: "VF1824-BRS",
  },
  171: {
    addDate: "11/16/2025",
    description: "WATERFORD 6-Light LED Vanity",
    images: [
      "/images/lights/kendal-lights/VF8300-6L-CHBLK.jpg",
      "/images/lights/kendal-lights/VF8300-6L-CHBLK.jpg",
      "/images/lights/kendal-lights/VF8300-6L-CHBLK.jpg",
    ],
    name: "VF8300-6L-CH/BLK",
  },
  172: {
    addDate: "11/16/2025",
    description: "ICE AGE 24 in. Chrome LED Vanity",
    images: [
      "/images/lights/kendal-lights/VF1500-CH.jpg",
      "/images/lights/kendal-lights/VF1500-CH.jpg",
      "/images/lights/kendal-lights/VF1500-CH.jpg",
    ],
    name: "VF1500-CH",
  },
  173: {
    addDate: "11/16/2025",
    description: "RINGS 30 inches LED Vanity",
    images: [
      "/images/lights/kendal-lights/VF1830-CH.jpg",
      "/images/lights/kendal-lights/VF1830-CH.jpg",
      "/images/lights/kendal-lights/VF1830-CH.jpg",
    ],
    name: "VF1830-CH",
  },
  174: {
    addDate: "11/16/2025",
    description: "ORACLE 30 inches LED Vanity",
    images: [
      "/images/lights/kendal-lights/VF2030-CH.jpg",
      "/images/lights/kendal-lights/VF2030-CH.jpg",
      "/images/lights/kendal-lights/VF2030-CH.jpg",
    ],
    name: "VF2030-CH",
  },
  175: {
    addDate: "11/16/2025",
    description: "ANGLES 24 inches LED Vanity",
    images: [
      "/images/lights/kendal-lights/VF2224-CH.jpg",
      "/images/lights/kendal-lights/VF2224-CH.jpg",
      "/images/lights/kendal-lights/VF2224-CH.jpg",
    ],
    name: "VF2224-CH",
  },
  176: {
    addDate: "11/16/2025",
    description: "ANGLES 36 inches LED Vanity",
    images: [
      "/images/lights/kendal-lights/VF2236-CH.jpg",
      "/images/lights/kendal-lights/VF2236-CH.jpg",
      "/images/lights/kendal-lights/VF2236-CH.jpg",
    ],
    name: "VF2236-CH",
  },
  177: {
    addDate: "11/16/2025",
    description: "SABRA 23 inches LED Vanity",
    images: [
      "/images/lights/kendal-lights/VF2323-CH.jpg",
      "/images/lights/kendal-lights/VF2323-CH.jpg",
      "/images/lights/kendal-lights/VF2323-CH.jpg",
    ],
    name: "VF2323-CH",
  },
  178: {
    addDate: "11/16/2025",
    description: "SABRA 31 inches LED Vanity",
    images: [
      "/images/lights/kendal-lights/VF2331-CH.jpg",
      "/images/lights/kendal-lights/VF2331-CH.jpg",
      "/images/lights/kendal-lights/VF2331-CH.jpg",
    ],
    name: "VF2331-CH",
  },
  179: {
    addDate: "11/16/2025",
    description: "SOREN 3-Light Chrome Vanity",
    images: [
      "/images/lights/kendal-lights/VF2710-3L-CH.jpg",
      "/images/lights/kendal-lights/VF2710-3L-CH.jpg",
      "/images/lights/kendal-lights/VF2710-3L-CH.jpg",
    ],
    name: "VF2710-3L-CH",
  },
  180: {
    addDate: "11/16/2025",
    description: "ORBITRON 5-Light Chrome Vanity",
    images: [
      "/images/lights/kendal-lights/VF8800-5L-CH.jpg",
      "/images/lights/kendal-lights/VF8800-5L-CH.jpg",
      "/images/lights/kendal-lights/VF8800-5L-CH.jpg",
    ],
    name: "VF8800-5L-CH",
  },
  181: {
    addDate: "11/16/2025",
    description: "SHIMERA 1-Light Chrome Vanity Light",
    images: [
      "/images/lights/kendal-lights/VF7200-1L-CH.jpg",
      "/images/lights/kendal-lights/VF7200-1L-CH.jpg",
      "/images/lights/kendal-lights/VF7200-1L-CH.jpg",
    ],
    name: "VF7200-1L-CH",
  },
  182: {
    addDate: "11/16/2025",
    description: "SHIMERA 3-Light Chrome Vanity Light",
    images: [
      "/images/lights/kendal-lights/VF7200-3L-CH.jpg",
      "/images/lights/kendal-lights/VF7200-3L-CH.jpg",
      "/images/lights/kendal-lights/VF7200-3L-CH.jpg",
    ],
    name: "VF7200-3L-CH",
  },
  183: {
    addDate: "11/16/2025",
    description: "CRYSTORAMA 1-Light Chrome Vanity Light",
    images: [
      "/images/lights/kendal-lights/VF7400-1L-CH.jpg",
      "/images/lights/kendal-lights/VF7400-1L-CH.jpg",
      "/images/lights/kendal-lights/VF7400-1L-CH.jpg",
    ],
    name: "VF7400-1L-CH",
  },
  184: {
    addDate: "11/16/2025",
    description: "CRYSTORAMA 3-Light Chrome Vanity Light",
    images: [
      "/images/lights/kendal-lights/VF7400-3L-CH.jpg",
      "/images/lights/kendal-lights/VF7400-3L-CH.jpg",
      "/images/lights/kendal-lights/VF7400-3L-CH.jpg",
    ],
    name: "VF7400-3L-CH",
  },
  185: {
    addDate: "11/16/2025",
    description: "SOLARO 1-Light Chrome Vanity Light",
    images: [
      "/images/lights/kendal-lights/VF4000-1L-CH.jpg",
      "/images/lights/kendal-lights/VF4000-1L-CH.jpg",
      "/images/lights/kendal-lights/VF4000-1L-CH.jpg",
    ],
    name: "VF4000-1L-CH",
  },
  186: {
    addDate: "11/16/2025",
    description: "SOLARO 3-Light Chrome Vanity Light",
    images: [
      "/images/lights/kendal-lights/VF4000-3L-CH.jpg",
      "/images/lights/kendal-lights/VF4000-3L-CH.jpg",
      "/images/lights/kendal-lights/VF4000-3L-CH.jpg",
    ],
    name: "VF4000-3L-CH",
  },
  187: {
    addDate: "11/16/2025",
    description: "PARAMOUNT 3-Light Chrome Vanity Light with Linen Glass",
    images: [
      "/images/lights/kendal-lights/VF2500-3L-CH.jpg",
      "/images/lights/kendal-lights/VF2500-3L-CH.jpg",
      "/images/lights/kendal-lights/VF2500-3L-CH.jpg",
    ],
    name: "VF2500-3L-CH",
  },
  188: {
    addDate: "11/16/2025",
    description: "AURORA 1-Light Satin Nickel Vanity Light with Linen Glass",
    images: [
      "/images/lights/kendal-lights/VF2400-1L-SN.jpg",
      "/images/lights/kendal-lights/VF2400-1L-SN.jpg",
      "/images/lights/kendal-lights/VF2400-1L-SN.jpg",
    ],
    name: "VF2400-1L-SN",
  },
  189: {
    addDate: "11/16/2025",
    description: "AURORA 5-Light Chrome Vanity Light with Linen Glass",
    images: [
      "/images/lights/kendal-lights/VF2400-5L-CH.jpg",
      "/images/lights/kendal-lights/VF2400-5L-CH.jpg",
      "/images/lights/kendal-lights/VF2400-5L-CH.jpg",
    ],
    name: "VF2400-5L-CH",
  },
  190: {
    name: "VF3400-1L-CH",
    description: "MADISON 1-Light Chrome Vanity Light",
    images: [
      "/images/lights/kendal-lights/VF3400-1L-CH.jpg",
      "/images/lights/kendal-lights/VF3400-1L-CH.jpg",
      "/images/lights/kendal-lights/VF3400-1L-CH.jpg",
    ],

    addDate: "11/16/2025",
  },
  191: {
    name: "VF3400-1L-SN",
    description: "MADISON 1-Light Satin Nickel Vanity Light",
    images: [
      "/images/lights/kendal-lights/VF3400-1L-SN.jpg",
      "/images/lights/kendal-lights/VF3400-1L-SN.jpg",
      "/images/lights/kendal-lights/VF3400-1L-SN.jpg",
    ],

    addDate: "11/16/2025",
  },
  192: {
    name: "VF3400-2L-CH",
    description: "MADISON 2-Light Chrome Vanity Light",
    images: [
      "/images/lights/kendal-lights/VF3400-2L-CH.jpg",
      "/images/lights/kendal-lights/VF3400-2L-CH.jpg",
      "/images/lights/kendal-lights/VF3400-2L-CH.jpg",
    ],

    addDate: "11/16/2025",
  },
  193: {
    name: "VF3400-2L-SN",
    description: "MADISON 2-Light Satin Nickel Vanity Light",
    images: [
      "/images/lights/kendal-lights/VF3400-2L-SN.jpg",
      "/images/lights/kendal-lights/VF3400-2L-SN.jpg",
      "/images/lights/kendal-lights/VF3400-2L-SN.jpg",
    ],

    addDate: "11/16/2025",
  },
  194: {
    addDate: "11/16/2025",
    description: "12W Integrated LED Black Track Cylinder",
    images: [
      "/images/lights/kendal-lights/TLED-56-BLK.jpg",
      "/images/lights/kendal-lights/TLED-56-BLK.jpg",
      "/images/lights/kendal-lights/TLED-56-BLK.jpg",
    ],
    name: "TLED-56-BLK",
  },
  195: {
    addDate: "11/16/2025",
    description: "20W Integrated LED White Track Cylinder",
    images: [
      "/images/lights/kendal-lights/TLED-57-MWH.jpg",
      "/images/lights/kendal-lights/TLED-57-MWH.jpg",
      "/images/lights/kendal-lights/TLED-57-MWH.jpg",
    ],
    name: "TLED-57-MWH",
  },
  196: {
    addDate: "11/16/2025",
    description: "12W Integrated LED Black Track Cylinder",
    images: [
      "/images/lights/kendal-lights/TLED-58-BLK.jpg",
      "/images/lights/kendal-lights/TLED-58-BLK.jpg",
      "/images/lights/kendal-lights/TLED-58-BLK.jpg",
    ],
    name: "TLED-58-BLK",
  },
  197: {
    addDate: "11/16/2025",
    description: "20W Integrated LED White Track Cylinder",
    images: [
      "/images/lights/kendal-lights/TLED-59-MWH.jpg",
      "/images/lights/kendal-lights/TLED-59-MWH.jpg",
      "/images/lights/kendal-lights/TLED-59-MWH.jpg",
    ],
    name: "TLED-59-MWH",
  },
  198: {
    addDate: "11/16/2025",
    description: "12W Integrated LED Black Track Cylinder",
    images: [
      "/images/lights/kendal-lights/TLED-60-BLK.jpg",
      "/images/lights/kendal-lights/TLED-60-BLK.jpg",
      "/images/lights/kendal-lights/TLED-60-BLK.jpg",
    ],
    name: "TLED-60-BLK",
  },
  199: {
    addDate: "11/16/2025",
    description: "12W Integrated LED White Track Cylinder",
    images: [
      "/images/lights/kendal-lights/TLED-61-MWH.jpg",
      "/images/lights/kendal-lights/TLED-61-MWH.jpg",
      "/images/lights/kendal-lights/TLED-61-MWH.jpg",
    ],
    name: "TLED-61-MWH",
  },
  200: {
    addDate: "11/16/2025",
    description: "15W Integrated LED Black Wall Washer Track Cylinder",
    images: [
      "/images/lights/kendal-lights/TLED-62-BLK.jpg",
      "/images/lights/kendal-lights/TLED-62-BLK.jpg",
      "/images/lights/kendal-lights/TLED-62-BLK.jpg",
    ],
    name: "TLED-62-BLK",
  },
  201: {
    addDate: "11/16/2025",
    description: "15W Integrated LED Zoom Lense White Track Cylinder",
    images: [
      "/images/lights/kendal-lights/TLED-82-MWH.jpg",
      "/images/lights/kendal-lights/TLED-82-MWH.jpg",
      "/images/lights/kendal-lights/TLED-82-MWH.jpg",
    ],
    name: "TLED-82-MWH",
  },
  202: {
    addDate: "11/16/2025",
    description: "8W Integrated LED White Track Cylinder",
    images: [
      "/images/lights/kendal-lights/TLED-84-MWH.jpg",
      "/images/lights/kendal-lights/TLED-84-MWH.jpg",
      "/images/lights/kendal-lights/TLED-84-MWH.jpg",
    ],
    name: "TLED-84-MWH",
  },
  203: {
    addDate: "11/16/2025",
    description: "12W LED Track Cylinder",
    images: [
      "/images/lights/kendal-lights/TLED-50-MWH.jpg",
      "/images/lights/kendal-lights/TLED-50-MWH.jpg",
      "/images/lights/kendal-lights/TLED-50-MWH.jpg",
    ],
    name: "TLED-50-MWH",
  },
  204: {
    addDate: "11/16/2025",
    description: "12W LED Track Cylinder",
    images: [
      "/images/lights/kendal-lights/TLED-53-BLK.jpg",
      "/images/lights/kendal-lights/TLED-53-BLK.jpg",
      "/images/lights/kendal-lights/TLED-53-BLK.jpg",
    ],
    name: "TLED-53-BLK",
  },
  205: {
    addDate: "11/16/2025",
    description: "Integrated LED Track Cylinder",
    images: [
      "/images/lights/kendal-lights/TLED-14-BLK.jpg",
      "/images/lights/kendal-lights/TLED-14-BLK.jpg",
      "/images/lights/kendal-lights/TLED-14-BLK.jpg",
    ],
    name: "TLED-14-BLK",
  },
  206: {
    addDate: "11/16/2025",
    description: "Integrated LED Dim-to-Warm Track Cylinder",
    images: [
      "/images/lights/kendal-lights/TLED-12DW-BLK.jpg",
      "/images/lights/kendal-lights/TLED-12DW-BLK.jpg",
      "/images/lights/kendal-lights/TLED-12DW-BLK.jpg",
    ],
    name: "TLED-12DW-BLK",
  },
  207: {
    name: "MS2S-CF-BLK",
    description:
      "MAGNA Black 2 Meter surface / pendant mount dual input magnetic channel",
    images: [
      "/images/lights/kendal-lights/MS2S-CF-BLK.jpg",
      "/images/lights/kendal-lights/MS2S-CF-BLK.jpg",
      "/images/lights/kendal-lights/MS2S-CF-BLK.jpg",
    ],

    addDate: "11/16/2025",
  },
  208: {
    name: "MS3S-CF-WH",
    description:
      "MAGNA Black 3 Meter surface / pendant mount dual input magnetic channel",
    images: [
      "/images/lights/kendal-lights/MS3S-CF-WH.jpg",
      "/images/lights/kendal-lights/MS3S-CF-WH.jpg",
      "/images/lights/kendal-lights/MS3S-CF-WH.jpg",
    ],

    addDate: "11/16/2025",
  },
  209: {
    name: "MS3S-CF-BLK",
    description:
      "MAGNA Black 3 Meter surface / pendant mount dual input magnetic channel",
    images: [
      "/images/lights/kendal-lights/MS3S-CF-BLK.jpg",
      "/images/lights/kendal-lights/MS3S-CF-BLK.jpg",
      "/images/lights/kendal-lights/MS3S-CF-BLK.jpg",
    ],

    addDate: "11/16/2025",
  },
  210: {
    name: "MS1S-BLK",
    description: "MAGNA Black 1 Meter surface / pendant mount magnetic channel",
    images: [
      "/images/lights/kendal-lights/MS1S-BLK.jpg",
      "/images/lights/kendal-lights/MS1S-BLK.jpg",
      "/images/lights/kendal-lights/MS1S-BLK.jpg",
    ],

    addDate: "11/16/2025",
  },
  211: {
    name: "MS1S-WH",
    description: "MAGNA White 1 Meter surface / pendant mount magnetic channel",
    images: [
      "/images/lights/kendal-lights/MS1S-WH.jpg",
      "/images/lights/kendal-lights/MS1S-WH.jpg",
      "/images/lights/kendal-lights/MS1S-WH.jpg",
    ],

    addDate: "11/16/2025",
  },
  212: {
    name: "MS1R-BLK",
    description: "MAGNA Black 1 Meter recessed magnetic channel",
    images: [
      "/images/lights/kendal-lights/MS1R-BLK.jpg",
      "/images/lights/kendal-lights/MS1R-BLK.jpg",
      "/images/lights/kendal-lights/MS1R-BLK.jpg",
    ],

    addDate: "11/16/2025",
  },
  213: {
    name: "MS1R-WH",
    description: "MAGNA White 1 Meter recessed magnetic channel",
    images: [
      "/images/lights/kendal-lights/MS1R-WH.jpg",
      "/images/lights/kendal-lights/MS1R-WH.jpg",
      "/images/lights/kendal-lights/MS1R-WH.jpg",
    ],

    addDate: "11/16/2025",
  },
  214: {
    name: "MS2S-CF-WH",
    description:
      "MAGNA White 2 Meter surface / pendant mount  dual input magnetic channel",
    images: [
      "/images/lights/kendal-lights/MS2S-CF-WH.jpg",
      "/images/lights/kendal-lights/MS2S-CF-WH.jpg",
      "/images/lights/kendal-lights/MS2S-CF-WH.jpg",
    ],

    addDate: "11/16/2025",
  },
  215: {
    name: "MS2R-BLK",
    description: "MAGNA Black 2 Meter recessed magnetic channel",
    images: [
      "/images/lights/kendal-lights/MS2R-BLK.jpg",
      "/images/lights/kendal-lights/MS2R-BLK.jpg",
      "/images/lights/kendal-lights/MS2R-BLK.jpg",
    ],

    addDate: "11/16/2025",
  },
  216: {
    name: "MS2R-WH",
    description: "MAGNA White 2 Meter recessed magnetic channel",
    images: [
      "/images/lights/kendal-lights/MS2R-WH.jpg",
      "/images/lights/kendal-lights/MS2R-WH.jpg",
      "/images/lights/kendal-lights/MS2R-WH.jpg",
    ],

    addDate: "11/16/2025",
  },
  217: {
    name: "MS3R-BLK",
    description: "MAGNA Black 3 Meter recessed magnetic channel",
    images: [
      "/images/lights/kendal-lights/MS3R-BLK.jpg",
      "/images/lights/kendal-lights/MS3R-BLK.jpg",
      "/images/lights/kendal-lights/MS3R-BLK.jpg",
    ],

    addDate: "11/16/2025",
  },
  218: {
    name: "MS3R-WH",
    description: "MAGNA White 3 Meter recessed magnetic channel",
    images: [
      "/images/lights/kendal-lights/MS3R-WH.jpg",
      "/images/lights/kendal-lights/MS3R-WH.jpg",
      "/images/lights/kendal-lights/MS3R-WH.jpg",
    ],

    addDate: "11/16/2025",
  },
  219: {
    addDate: "11/16/2025",
    description: "MAGNA Black 6W Dot magnetic LED track light",
    images: [
      "/images/lights/kendal-lights/MSL111-BLK.jpg",
      "/images/lights/kendal-lights/MSL111-BLK.jpg",
      "/images/lights/kendal-lights/MSL111-BLK.jpg",
    ],
    name: "MSL111-BLK",
  },
  220: {
    addDate: "11/16/2025",
    description: "MAGNA White 12W Dot magnetic LED track light",
    images: [
      "/images/lights/kendal-lights/MSL112-WH.jpg",
      "/images/lights/kendal-lights/MSL112-WH.jpg",
      "/images/lights/kendal-lights/MSL112-WH.jpg",
    ],
    name: "MSL112-WH",
  },
  221: {
    addDate: "11/16/2025",
    description: "MAGNA Black 24W Dot magnetic LED track light",
    images: [
      "/images/lights/kendal-lights/MSL113-BLK.jpg",
      "/images/lights/kendal-lights/MSL113-BLK.jpg",
      "/images/lights/kendal-lights/MSL113-BLK.jpg",
    ],
    name: "MSL113-BLK",
  },
  222: {
    addDate: "11/16/2025",
    description: "MAGNA White 8W Diffused Linear magnetic LED track light",
    images: [
      "/images/lights/kendal-lights/MSL121-WH.jpg",
      "/images/lights/kendal-lights/MSL121-WH.jpg",
      "/images/lights/kendal-lights/MSL121-WH.jpg",
    ],
    name: "MSL121-WH",
  },
  223: {
    addDate: "11/16/2025",
    description: "MAGNA Black 15W Diffused Linear magnetic LED track light",
    images: [
      "/images/lights/kendal-lights/MSL122-BLK.jpg",
      "/images/lights/kendal-lights/MSL122-BLK.jpg",
      "/images/lights/kendal-lights/MSL122-BLK.jpg",
    ],
    name: "MSL122-BLK",
  },
  224: {
    addDate: "11/16/2025",
    description: "MAGNA Black 8W Folding magnetic LED track light",
    images: [
      "/images/lights/kendal-lights/MSL131-BLK.jpg",
      "/images/lights/kendal-lights/MSL131-BLK.jpg",
      "/images/lights/kendal-lights/MSL131-BLK.jpg",
    ],
    name: "MSL131-BLK",
  },
  225: {
    addDate: "11/16/2025",
    description: "MAGNA Black 12W Wall Washer magnetic LED track light",
    images: [
      "/images/lights/kendal-lights/MSL141-BLK.jpg",
      "/images/lights/kendal-lights/MSL141-BLK.jpg",
      "/images/lights/kendal-lights/MSL141-BLK.jpg",
    ],
    name: "MSL141-BLK",
  },
  226: {
    addDate: "11/16/2025",
    description: "MAGNA White 12W Wall Washer magnetic LED track light",
    images: [
      "/images/lights/kendal-lights/MSL141-WH.jpg",
      "/images/lights/kendal-lights/MSL141-WH.jpg",
      "/images/lights/kendal-lights/MSL141-WH.jpg",
    ],
    name: "MSL141-WH",
  },
  227: {
    addDate: "11/16/2025",
    description: "MAGNA Black 15W Extended Depth magnetic LED track light",
    images: [
      "/images/lights/kendal-lights/MSL152-BLK.jpg",
      "/images/lights/kendal-lights/MSL152-BLK.jpg",
      "/images/lights/kendal-lights/MSL152-BLK.jpg",
    ],
    name: "MSL152-BLK",
  },
  228: {
    addDate: "11/16/2025",
    description: "MAGNA White 15W Extended Depth magnetic LED track light",
    images: [
      "/images/lights/kendal-lights/MSL152-WH.jpg",
      "/images/lights/kendal-lights/MSL152-WH.jpg",
      "/images/lights/kendal-lights/MSL152-WH.jpg",
    ],
    name: "MSL152-WH",
  },
  229: {
    name: "MSP301-BLK",
    description: "MAGNA Black Magnetic track 5W LED Pendant",
    images: [
      "/images/lights/kendal-lights/MSP301-BLK.jpg",
      "/images/lights/kendal-lights/MSP301-BLK.jpg",
      "/images/lights/kendal-lights/MSP301-BLK.jpg",
    ],

    addDate: "11/16/2025",
  },
  230: {
    name: "MSP301-WH",
    description: "MAGNA White Magnetic track 5W LED Pendant",
    images: [
      "/images/lights/kendal-lights/MSP301-WH.jpg",
      "/images/lights/kendal-lights/MSP301-WH.jpg",
      "/images/lights/kendal-lights/MSP301-WH.jpg",
    ],

    addDate: "11/16/2025",
  },
  231: {
    name: "MSP302-BLK",
    description: "MAGNA Black Magnetic track 10W LED Pendant",
    images: [
      "/images/lights/kendal-lights/MSP302-BLK.jpg",
      "/images/lights/kendal-lights/MSP302-BLK.jpg",
      "/images/lights/kendal-lights/MSP302-BLK.jpg",
    ],

    addDate: "11/16/2025",
  },
  232: {
    name: "MSP302-WH",
    description: "MAGNA White Magnetic track 10W LED Pendant",
    images: [
      "/images/lights/kendal-lights/MSP302-WH.jpg",
      "/images/lights/kendal-lights/MSP302-WH.jpg",
      "/images/lights/kendal-lights/MSP302-WH.jpg",
    ],

    addDate: "11/16/2025",
  },
  233: {
    name: "MSP303-BLK",
    description: "MAGNA Black Magnetic track 20W LED Pendant",
    images: [
      "/images/lights/kendal-lights/MSP303-BLK.jpg",
      "/images/lights/kendal-lights/MSP303-BLK.jpg",
      "/images/lights/kendal-lights/MSP303-BLK.jpg",
    ],

    addDate: "11/16/2025",
  },
  234: {
    name: "MSP303-WH",
    description: "MAGNA White Magnetic track 20W LED Pendant",
    images: [
      "/images/lights/kendal-lights/MSP303-WH.jpg",
      "/images/lights/kendal-lights/MSP303-WH.jpg",
      "/images/lights/kendal-lights/MSP303-WH.jpg",
    ],

    addDate: "11/16/2025",
  },
  235: {
    name: "MSP304-BLK",
    description: "MAGNA Black Magnetic track 10W LED Cone Pendant",
    images: [
      "/images/lights/kendal-lights/MSP304-BLK.jpg",
      "/images/lights/kendal-lights/MSP304-BLK.jpg",
      "/images/lights/kendal-lights/MSP304-BLK.jpg",
    ],

    addDate: "11/16/2025",
  },
  236: {
    name: "MSP304-WH",
    description: "MAGNA White Magnetic track 10W LED Cone Pendant",
    images: [
      "/images/lights/kendal-lights/MSP304-WH.jpg",
      "/images/lights/kendal-lights/MSP304-WH.jpg",
      "/images/lights/kendal-lights/MSP304-WH.jpg",
    ],

    addDate: "11/16/2025",
  },
  237: {
    name: "MSP305-BLK",
    description: "MAGNA Black Magnetic track 10W LED Globe Pendant",
    images: [
      "/images/lights/kendal-lights/MSP305-BLK.jpg",
      "/images/lights/kendal-lights/MSP305-BLK.jpg",
      "/images/lights/kendal-lights/MSP305-BLK.jpg",
    ],

    addDate: "11/16/2025",
  },
  238: {
    name: "MSP305-WH",
    description: "MAGNA White Magnetic track 10W LED Globe Pendant",
    images: [
      "/images/lights/kendal-lights/MSP305-WH.jpg",
      "/images/lights/kendal-lights/MSP305-WH.jpg",
      "/images/lights/kendal-lights/MSP305-WH.jpg",
    ],

    addDate: "11/16/2025",
  },
  239: {
    name: "MSP306-BLK",
    description: "MAGNA Black Magnetic track 10W LED acrylic Pendant",
    images: [
      "/images/lights/kendal-lights/MSP306-BLK.jpg",
      "/images/lights/kendal-lights/MSP306-BLK.jpg",
      "/images/lights/kendal-lights/MSP306-BLK.jpg",
    ],

    addDate: "11/16/2025",
  },
  240: {
    name: "MSP306-WH",
    description: "MAGNA White Magnetic track 10W LED acrylic Pendant",
    images: [
      "/images/lights/kendal-lights/MSP306-WH.jpg",
      "/images/lights/kendal-lights/MSP306-WH.jpg",
      "/images/lights/kendal-lights/MSP306-WH.jpg",
    ],

    addDate: "11/16/2025",
  },
  241: {
    name: "MSP307-BLK",
    description: "MAGNA Black Magnetic track 15W LED Step Pendant",
    images: [
      "/images/lights/kendal-lights/MSP307-BLK.jpg",
      "/images/lights/kendal-lights/MSP307-BLK.jpg",
      "/images/lights/kendal-lights/MSP307-BLK.jpg",
    ],

    addDate: "11/16/2025",
  },
  242: {
    name: "MSP307-WH",
    description: "MAGNA White Magnetic track 15W LED Step Pendant",
    images: [
      "/images/lights/kendal-lights/MSP307-WH.jpg",
      "/images/lights/kendal-lights/MSP307-WH.jpg",
      "/images/lights/kendal-lights/MSP307-WH.jpg",
    ],

    addDate: "11/16/2025",
  },

  243: {
    name: "LIT2406",
    description: "ALCONA",
    images: [
      "/images/lights/litup-lighting/LIT2406.png",
      "/images/lights/litup-lighting/LIT2406.png",
      "/images/lights/litup-lighting/LIT2406.png",
    ],

    addDate: "11/17/2025",
  },
  244: {
    name: "LIT2430",
    description: "ALCONA",
    images: [
      "/images/lights/litup-lighting/LIT2430.png",
      "/images/lights/litup-lighting/LIT2430.png",
      "/images/lights/litup-lighting/LIT2430.png",
    ],

    addDate: "11/17/2025",
  },
  245: {
    name: "LIT2431",
    description: "ALCONA",
    images: [
      "/images/lights/litup-lighting/LIT2431.png",
      "/images/lights/litup-lighting/LIT2431.png",
      "/images/lights/litup-lighting/LIT2431.png",
    ],

    addDate: "11/17/2025",
  },
  246: {
    name: "LIT2432",
    description: "ALCONA",
    images: [
      "/images/lights/litup-lighting/LIT2432.png",
      "/images/lights/litup-lighting/LIT2432.png",
      "/images/lights/litup-lighting/LIT2432.png",
    ],

    addDate: "11/17/2025",
  },
  247: {
    name: "LIT2433",
    description: "ALCONA",
    images: [
      "/images/lights/litup-lighting/LIT2433.png",
      "/images/lights/litup-lighting/LIT2433.png",
      "/images/lights/litup-lighting/LIT2433.png",
    ],

    addDate: "11/17/2025",
  },
  248: {
    name: "LIT2434",
    description: "ALCONA",
    images: [
      "/images/lights/litup-lighting/LIT2434.png",
      "/images/lights/litup-lighting/LIT2434.png",
      "/images/lights/litup-lighting/LIT2434.png",
    ],

    addDate: "11/17/2025",
  },
  249: {
    name: "LIT2435",
    description: "ALCONA",
    images: [
      "/images/lights/litup-lighting/LIT2435.png",
      "/images/lights/litup-lighting/LIT2435.png",
      "/images/lights/litup-lighting/LIT2435.png",
    ],

    addDate: "11/17/2025",
  },
  250: {
    name: "LIT2441",
    description: "ALCONA",
    images: [
      "/images/lights/litup-lighting/LIT2441.png",
      "/images/lights/litup-lighting/LIT2441.png",
      "/images/lights/litup-lighting/LIT2441.png",
    ],

    addDate: "11/17/2025",
  },
  251: {
    name: "LIT2442",
    description: "ALCONA",
    images: [
      "/images/lights/litup-lighting/LIT2442.png",
      "/images/lights/litup-lighting/LIT2442.png",
      "/images/lights/litup-lighting/LIT2442.png",
    ],

    addDate: "11/17/2025",
  },
  252: {
    name: "LIT2484",
    description: "ALCONA",
    images: [
      "/images/lights/litup-lighting/LIT2484.png",
      "/images/lights/litup-lighting/LIT2484.png",
      "/images/lights/litup-lighting/LIT2484.png",
    ],

    addDate: "11/17/2025",
  },
  253: {
    name: "LIT2487",
    description: "ALCONA",
    images: [
      "/images/lights/litup-lighting/LIT2487.png",
      "/images/lights/litup-lighting/LIT2487.png",
      "/images/lights/litup-lighting/LIT2487.png",
    ],

    addDate: "11/17/2025",
  },
  254: {
    name: "LIT2532",
    description: "ALICE",
    images: [
      "/images/lights/litup-lighting/LIT2532.png",
      "/images/lights/litup-lighting/LIT2532.png",
      "/images/lights/litup-lighting/LIT2532.png",
    ],

    addDate: "11/17/2025",
  },
  255: {
    name: "LIT2533BK+MC",
    description: "ALICE",
    images: [
      "/images/lights/litup-lighting/LIT2533BK+MC.png",
      "/images/lights/litup-lighting/LIT2533BK+MC.png",
      "/images/lights/litup-lighting/LIT2533BK+MC.png",
    ],

    addDate: "11/17/2025",
  },
  256: {
    name: "LIT2533SN+MC",
    description: "ALICE",
    images: [
      "/images/lights/litup-lighting/LIT2533SN+MC.png",
      "/images/lights/litup-lighting/LIT2533SN+MC.png",
      "/images/lights/litup-lighting/LIT2533SN+MC.png",
    ],

    addDate: "11/17/2025",
  },
  257: {
    name: "LIT3330",
    description: "ATHENS",
    images: [
      "/images/lights/litup-lighting/LIT3330.png",
      "/images/lights/litup-lighting/LIT3330.png",
      "/images/lights/litup-lighting/LIT3330.png",
    ],

    addDate: "11/17/2025",
  },
  258: {
    name: "LIT3341",
    description: "ATHENS",
    images: [
      "/images/lights/litup-lighting/LIT3341.png",
      "/images/lights/litup-lighting/LIT3341.png",
      "/images/lights/litup-lighting/LIT3341.png",
    ],

    addDate: "11/17/2025",
  },
  259: {
    name: "LIT3342",
    description: "ATHENS",
    images: [
      "/images/lights/litup-lighting/LIT3342.png",
      "/images/lights/litup-lighting/LIT3342.png",
      "/images/lights/litup-lighting/LIT3342.png",
    ],

    addDate: "11/17/2025",
  },
  260: {
    name: "LIT3342SN+MC",
    description: "ATHENS",
    images: [
      "/images/lights/litup-lighting/LIT3342SN+MC.png",
      "/images/lights/litup-lighting/LIT3342SN+MC.png",
      "/images/lights/litup-lighting/LIT3342SN+MC.png",
    ],

    addDate: "11/17/2025",
  },
  261: {
    name: "LIT2730",
    description: "BALDWIN",
    images: [
      "/images/lights/litup-lighting/LIT2730.png",
      "/images/lights/litup-lighting/LIT2730.png",
      "/images/lights/litup-lighting/LIT2730.png",
    ],

    addDate: "11/17/2025",
  },
  262: {
    name: "LIT2732",
    description: "BALDWIN",
    images: [
      "/images/lights/litup-lighting/LIT2732.png",
      "/images/lights/litup-lighting/LIT2732.png",
      "/images/lights/litup-lighting/LIT2732.png",
    ],

    addDate: "11/17/2025",
  },
  263: {
    name: "LIT2742",
    description: "BALDWIN",
    images: [
      "/images/lights/litup-lighting/LIT2742.png",
      "/images/lights/litup-lighting/LIT2742.png",
      "/images/lights/litup-lighting/LIT2742.png",
    ],

    addDate: "11/17/2025",
  },
  264: {
    name: "FL2201",
    description: "BAYFIELD",
    images: [
      "/images/lights/litup-lighting/FL2201.png",
      "/images/lights/litup-lighting/FL2201.png",
      "/images/lights/litup-lighting/FL2201.png",
    ],

    addDate: "11/17/2025",
  },
  265: {
    name: "FL2202",
    description: "BAYFIELD",
    images: [
      "/images/lights/litup-lighting/FL2202.png",
      "/images/lights/litup-lighting/FL2202.png",
      "/images/lights/litup-lighting/FL2202.png",
    ],

    addDate: "11/17/2025",
  },
  266: {
    name: "TL2113",
    description: "BAYFIELD",
    images: [
      "/images/lights/litup-lighting/TL2113.png",
      "/images/lights/litup-lighting/TL2113.png",
      "/images/lights/litup-lighting/TL2113.png",
    ],

    addDate: "11/17/2025",
  },
  267: {
    name: "TL2114",
    description: "BAYFIELD",
    images: [
      "/images/lights/litup-lighting/TL2114.png",
      "/images/lights/litup-lighting/TL2114.png",
      "/images/lights/litup-lighting/TL2114.png",
    ],

    addDate: "11/17/2025",
  },
  268: {
    name: "TL2115",
    description: "BAYFIELD",
    images: [
      "/images/lights/litup-lighting/TL2115.png",
      "/images/lights/litup-lighting/TL2115.png",
      "/images/lights/litup-lighting/TL2115.png",
    ],

    addDate: "11/17/2025",
  },
  269: {
    name: "TL2112",
    description: "BOUCLAIR",
    images: [
      "/images/lights/litup-lighting/TL2112.png",
      "/images/lights/litup-lighting/TL2112.png",
      "/images/lights/litup-lighting/TL2112.png",
    ],

    addDate: "11/17/2025",
  },
  270: {
    name: "LIT4209",
    description: "BRANTWOOD",
    images: [
      "/images/lights/litup-lighting/LIT4209.png",
      "/images/lights/litup-lighting/LIT4209.png",
      "/images/lights/litup-lighting/LIT4209.png",
    ],

    addDate: "11/17/2025",
  },
  271: {
    name: "LIT4210 BK+MC",
    description: "BRANTWOOD",
    images: [
      "/images/lights/litup-lighting/LIT4210_BK+MC.png",
      "/images/lights/litup-lighting/LIT4210_BK+MC.png",
      "/images/lights/litup-lighting/LIT4210_BK+MC.png",
    ],

    addDate: "11/17/2025",
  },
  272: {
    name: "LIT4230",
    description: "BRANTWOOD",
    images: [
      "/images/lights/litup-lighting/LIT4230.png",
      "/images/lights/litup-lighting/LIT4230.png",
      "/images/lights/litup-lighting/LIT4230.png",
    ],

    addDate: "11/17/2025",
  },
  273: {
    name: "LIT4232",
    description: "BRANTWOOD",
    images: [
      "/images/lights/litup-lighting/LIT4232.png",
      "/images/lights/litup-lighting/LIT4232.png",
      "/images/lights/litup-lighting/LIT4232.png",
    ],

    addDate: "11/17/2025",
  },
  274: {
    name: "LIT4251",
    description: "BRANTWOOD",
    images: [
      "/images/lights/litup-lighting/LIT4251.png",
      "/images/lights/litup-lighting/LIT4251.png",
      "/images/lights/litup-lighting/LIT4251.png",
    ],

    addDate: "11/17/2025",
  },
  275: {
    name: "LIT4251BK+MC",
    description: "BRANTWOOD",
    images: [
      "/images/lights/litup-lighting/LIT4251BK+MC.png",
      "/images/lights/litup-lighting/LIT4251BK+MC.png",
      "/images/lights/litup-lighting/LIT4251BK+MC.png",
    ],

    addDate: "11/17/2025",
  },
  276: {
    name: "LIT3434",
    description: "CAPEROL",
    images: [
      "/images/lights/litup-lighting/LIT3434.png",
      "/images/lights/litup-lighting/LIT3434.png",
      "/images/lights/litup-lighting/LIT3434.png",
    ],

    addDate: "11/17/2025",
  },
  277: {
    name: "LIT3442",
    description: "CAPEROL",
    images: [
      "/images/lights/litup-lighting/LIT3442.png",
      "/images/lights/litup-lighting/LIT3442.png",
      "/images/lights/litup-lighting/LIT3442.png",
    ],

    addDate: "11/17/2025",
  },
  278: {
    name: "LIT3184",
    description: "CATHIE WOOD",
    images: [
      "/images/lights/litup-lighting/LIT3184.png",
      "/images/lights/litup-lighting/LIT3184.png",
      "/images/lights/litup-lighting/LIT3184.png",
    ],

    addDate: "11/17/2025",
  },
  279: {
    name: "LIT3186",
    description: "CATHIE WOOD",
    images: [
      "/images/lights/litup-lighting/LIT3186.png",
      "/images/lights/litup-lighting/LIT3186.png",
      "/images/lights/litup-lighting/LIT3186.png",
    ],

    addDate: "11/17/2025",
  },
  280: {
    name: "LIT3502",
    description: "CHARLESTON",
    images: [
      "/images/lights/litup-lighting/LIT3502.png",
      "/images/lights/litup-lighting/LIT3502.png",
      "/images/lights/litup-lighting/LIT3502.png",
    ],

    addDate: "11/17/2025",
  },
  281: {
    name: "LIT3531",
    description: "CHARLESTON",
    images: [
      "/images/lights/litup-lighting/LIT3531.png",
      "/images/lights/litup-lighting/LIT3531.png",
      "/images/lights/litup-lighting/LIT3531.png",
    ],

    addDate: "11/17/2025",
  },
  282: {
    name: "LIT3532",
    description: "CHARLESTON",
    images: [
      "/images/lights/litup-lighting/LIT3532.png",
      "/images/lights/litup-lighting/LIT3532.png",
      "/images/lights/litup-lighting/LIT3532.png",
    ],

    addDate: "11/17/2025",
  },
  283: {
    name: "LIT3931BK",
    description: "DAWSON",
    images: [
      "/images/lights/litup-lighting/LIT3931BK.png",
      "/images/lights/litup-lighting/LIT3931BK.png",
      "/images/lights/litup-lighting/LIT3931BK.png",
    ],

    addDate: "11/17/2025",
  },
  284: {
    name: "LIT3932",
    description: "DAWSON",
    images: [
      "/images/lights/litup-lighting/LIT3932.png",
      "/images/lights/litup-lighting/LIT3932.png",
      "/images/lights/litup-lighting/LIT3932.png",
    ],

    addDate: "11/17/2025",
  },
  285: {
    name: "LIT3933BK",
    description: "DAWSON",
    images: [
      "/images/lights/litup-lighting/LIT3933BK.png",
      "/images/lights/litup-lighting/LIT3933BK.png",
      "/images/lights/litup-lighting/LIT3933BK.png",
    ],

    addDate: "11/17/2025",
  },
  286: {
    name: "LIT3950",
    description: "DAWSON",
    images: [
      "/images/lights/litup-lighting/LIT3950.png",
      "/images/lights/litup-lighting/LIT3950.png",
      "/images/lights/litup-lighting/LIT3950.png",
    ],

    addDate: "11/17/2025",
  },
  287: {
    name: "LIT3951BK+MC In Stock",
    description: "DAWSON",
    images: [
      "/images/lights/litup-lighting/LIT3951BK+MC_In_Stock.png",
      "/images/lights/litup-lighting/LIT3951BK+MC_In_Stock.png",
      "/images/lights/litup-lighting/LIT3951BK+MC_In_Stock.png",
    ],

    addDate: "11/17/2025",
  },
  288: {
    name: "LIT4022",
    description: "DEKA",
    images: [
      "/images/lights/litup-lighting/LIT4022.png",
      "/images/lights/litup-lighting/LIT4022.png",
      "/images/lights/litup-lighting/LIT4022.png",
    ],

    addDate: "11/17/2025",
  },
  289: {
    name: "LIT4023",
    description: "DEKA",
    images: [
      "/images/lights/litup-lighting/LIT4023.png",
      "/images/lights/litup-lighting/LIT4023.png",
      "/images/lights/litup-lighting/LIT4023.png",
    ],

    addDate: "11/17/2025",
  },
  290: {
    name: "LIT4024",
    description: "DEKA",
    images: [
      "/images/lights/litup-lighting/LIT4024.png",
      "/images/lights/litup-lighting/LIT4024.png",
      "/images/lights/litup-lighting/LIT4024.png",
    ],

    addDate: "11/17/2025",
  },
  291: {
    name: "LIT3630",
    description: "DELTA",
    images: [
      "/images/lights/litup-lighting/LIT3630.png",
      "/images/lights/litup-lighting/LIT3630.png",
      "/images/lights/litup-lighting/LIT3630.png",
    ],

    addDate: "11/17/2025",
  },
  292: {
    name: "LIT3631",
    description: "DELTA",
    images: [
      "/images/lights/litup-lighting/LIT3631.png",
      "/images/lights/litup-lighting/LIT3631.png",
      "/images/lights/litup-lighting/LIT3631.png",
    ],

    addDate: "11/17/2025",
  },
  293: {
    name: "LIT5833",
    description: "DEVON",
    images: [
      "/images/lights/litup-lighting/LIT5833.png",
      "/images/lights/litup-lighting/LIT5833.png",
      "/images/lights/litup-lighting/LIT5833.png",
    ],

    addDate: "11/17/2025",
  },
  294: {
    name: "LIT5833SN+CH  In stock",
    description: "DEVON",
    images: [
      "/images/lights/litup-lighting/LIT5833SN+CH_In_stock.png",
      "/images/lights/litup-lighting/LIT5833SN+CH_In_stock.png",
      "/images/lights/litup-lighting/LIT5833SN+CH_In_stock.png",
    ],

    addDate: "11/17/2025",
  },
  295: {
    name: "LIT5834",
    description: "DEVON",
    images: [
      "/images/lights/litup-lighting/LIT5834.png",
      "/images/lights/litup-lighting/LIT5834.png",
      "/images/lights/litup-lighting/LIT5834.png",
    ],

    addDate: "11/17/2025",
  },
  296: {
    name: "LIT5834SN+CH 1 In stock",
    description: "DEVON",
    images: [
      "/images/lights/litup-lighting/LIT5834SN+CH_1_In_stock.png",
      "/images/lights/litup-lighting/LIT5834SN+CH_1_In_stock.png",
      "/images/lights/litup-lighting/LIT5834SN+CH_1_In_stock.png",
    ],

    addDate: "11/17/2025",
  },
  297: {
    name: "LIT5835BK+CH In Stock",
    description: "DEVON",
    images: [
      "/images/lights/litup-lighting/LIT5835BK+CH_In_Stock.png",
      "/images/lights/litup-lighting/LIT5835BK+CH_In_Stock.png",
      "/images/lights/litup-lighting/LIT5835BK+CH_In_Stock.png",
    ],

    addDate: "11/17/2025",
  },
  298: {
    name: "LIT5841",
    description: "DEVON",
    images: [
      "/images/lights/litup-lighting/LIT5841.jpeg",
      "/images/lights/litup-lighting/LIT5841.jpeg",
      "/images/lights/litup-lighting/LIT5841.jpeg",
    ],

    addDate: "11/17/2025",
  },
  299: {
    name: "LIT5841SN+CH 1 In Stock",
    description: "DEVON",
    images: [
      "/images/lights/litup-lighting/LIT5841SN+CH_1_In_Stock.png",
      "/images/lights/litup-lighting/LIT5841SN+CH_1_In_Stock.png",
      "/images/lights/litup-lighting/LIT5841SN+CH_1_In_Stock.png",
    ],

    addDate: "11/17/2025",
  },
  300: {
    name: "LIT3001",
    description: "DUNCAN",
    images: [
      "/images/lights/litup-lighting/LIT3001.png",
      "/images/lights/litup-lighting/LIT3001.png",
      "/images/lights/litup-lighting/LIT3001.png",
    ],

    addDate: "11/17/2025",
  },
  301: {
    name: "LIT3022",
    description: "DUNCAN",
    images: [
      "/images/lights/litup-lighting/LIT3022.png",
      "/images/lights/litup-lighting/LIT3022.png",
      "/images/lights/litup-lighting/LIT3022.png",
    ],

    addDate: "11/17/2025",
  },
  302: {
    name: "LIT3023",
    description: "DUNCAN",
    images: [
      "/images/lights/litup-lighting/LIT3023.png",
      "/images/lights/litup-lighting/LIT3023.png",
      "/images/lights/litup-lighting/LIT3023.png",
    ],

    addDate: "11/17/2025",
  },
  303: {
    name: "LIT3024",
    description: "DUNCAN",
    images: [
      "/images/lights/litup-lighting/LIT3024.png",
      "/images/lights/litup-lighting/LIT3024.png",
      "/images/lights/litup-lighting/LIT3024.png",
    ],

    addDate: "11/17/2025",
  },
  304: {
    name: "LIT3201",
    description: "ELLIOT",
    images: [
      "/images/lights/litup-lighting/LIT3201.png",
      "/images/lights/litup-lighting/LIT3201.png",
      "/images/lights/litup-lighting/LIT3201.png",
    ],

    addDate: "11/17/2025",
  },
  305: {
    name: "LIT3222",
    description: "ELLIOT",
    images: [
      "/images/lights/litup-lighting/LIT3222.png",
      "/images/lights/litup-lighting/LIT3222.png",
      "/images/lights/litup-lighting/LIT3222.png",
    ],

    addDate: "11/17/2025",
  },
  306: {
    name: "LIT3223",
    description: "ELLIOT",
    images: [
      "/images/lights/litup-lighting/LIT3223.png",
      "/images/lights/litup-lighting/LIT3223.png",
      "/images/lights/litup-lighting/LIT3223.png",
    ],

    addDate: "11/17/2025",
  },
  307: {
    name: "LIT3224",
    description: "ELLIOT",
    images: [
      "/images/lights/litup-lighting/LIT3224.png",
      "/images/lights/litup-lighting/LIT3224.png",
      "/images/lights/litup-lighting/LIT3224.png",
    ],

    addDate: "11/17/2025",
  },
  308: {
    name: "LIT3806BK-MC",
    description: "ELORA",
    images: [
      "/images/lights/litup-lighting/LIT3806BK-MC.png",
      "/images/lights/litup-lighting/LIT3806BK-MC.png",
      "/images/lights/litup-lighting/LIT3806BK-MC.png",
    ],

    addDate: "11/17/2025",
  },
  309: {
    name: "LIT3830BK-MC",
    description: "ELORA",
    images: [
      "/images/lights/litup-lighting/LIT3830BK-MC.png",
      "/images/lights/litup-lighting/LIT3830BK-MC.png",
      "/images/lights/litup-lighting/LIT3830BK-MC.png",
    ],

    addDate: "11/17/2025",
  },
  310: {
    name: "LIT3833BK-MC",
    description: "ELORA",
    images: [
      "/images/lights/litup-lighting/LIT3833BK-MC.png",
      "/images/lights/litup-lighting/LIT3833BK-MC.png",
      "/images/lights/litup-lighting/LIT3833BK-MC.png",
    ],

    addDate: "11/17/2025",
  },
  311: {
    name: "LIT5322",
    description: "EMERALD",
    images: [
      "/images/lights/litup-lighting/LIT5322.png",
      "/images/lights/litup-lighting/LIT5322.png",
      "/images/lights/litup-lighting/LIT5322.png",
    ],

    addDate: "11/17/2025",
  },
  312: {
    name: "LIT5323",
    description: "EMERALD",
    images: [
      "/images/lights/litup-lighting/LIT5323.png",
      "/images/lights/litup-lighting/LIT5323.png",
      "/images/lights/litup-lighting/LIT5323.png",
    ],

    addDate: "11/17/2025",
  },
  313: {
    name: "LIT5324",
    description: "EMERALD",
    images: [
      "/images/lights/litup-lighting/LIT5324.png",
      "/images/lights/litup-lighting/LIT5324.png",
      "/images/lights/litup-lighting/LIT5324.png",
    ],

    addDate: "11/17/2025",
  },
  314: {
    name: "LIT5325",
    description: "EMERALD",
    images: [
      "/images/lights/litup-lighting/LIT5325.png",
      "/images/lights/litup-lighting/LIT5325.png",
      "/images/lights/litup-lighting/LIT5325.png",
    ],

    addDate: "11/17/2025",
  },
  315: {
    name: "LIT2901",
    description: "ERIE",
    images: [
      "/images/lights/litup-lighting/LIT2901.png",
      "/images/lights/litup-lighting/LIT2901.png",
      "/images/lights/litup-lighting/LIT2901.png",
    ],

    addDate: "11/17/2025",
  },
  316: {
    name: "LIT2922",
    description: "ERIE",
    images: [
      "/images/lights/litup-lighting/LIT2922.png",
      "/images/lights/litup-lighting/LIT2922.png",
      "/images/lights/litup-lighting/LIT2922.png",
    ],

    addDate: "11/17/2025",
  },
  317: {
    name: "LIT2923",
    description: "ERIE",
    images: [
      "/images/lights/litup-lighting/LIT2923.png",
      "/images/lights/litup-lighting/LIT2923.png",
      "/images/lights/litup-lighting/LIT2923.png",
    ],

    addDate: "11/17/2025",
  },
  318: {
    name: "LIT2924",
    description: "ERIE",
    images: [
      "/images/lights/litup-lighting/LIT2924.png",
      "/images/lights/litup-lighting/LIT2924.png",
      "/images/lights/litup-lighting/LIT2924.png",
    ],

    addDate: "11/17/2025",
  },
  319: {
    name: "LIT4510",
    description: "GOVAN",
    images: [
      "/images/lights/litup-lighting/LIT4510.png",
      "/images/lights/litup-lighting/LIT4510.png",
      "/images/lights/litup-lighting/LIT4510.png",
    ],

    addDate: "11/17/2025",
  },
  320: {
    name: "LIT5205 – 30K",
    description: "HILLSVIEW",
    images: [
      "/images/lights/litup-lighting/LIT5205_–_30K.png",
      "/images/lights/litup-lighting/LIT5205_–_30K.png",
      "/images/lights/litup-lighting/LIT5205_–_30K.png",
    ],

    addDate: "11/17/2025",
  },
  321: {
    name: "LIT5205 – 40K",
    description: "HILLSVIEW",
    images: [
      "/images/lights/litup-lighting/LIT5205_–_40K.png",
      "/images/lights/litup-lighting/LIT5205_–_40K.png",
      "/images/lights/litup-lighting/LIT5205_–_40K.png",
    ],

    addDate: "11/17/2025",
  },
  322: {
    name: "LIT5207 – 30K",
    description: "HILLSVIEW",
    images: [
      "/images/lights/litup-lighting/LIT5207_–_30K.png",
      "/images/lights/litup-lighting/LIT5207_–_30K.png",
      "/images/lights/litup-lighting/LIT5207_–_30K.png",
    ],

    addDate: "11/17/2025",
  },
  323: {
    name: "LIT5207 – 40K",
    description: "HILLSVIEW",
    images: [
      "/images/lights/litup-lighting/LIT5207_–_40K.png",
      "/images/lights/litup-lighting/LIT5207_–_40K.png",
      "/images/lights/litup-lighting/LIT5207_–_40K.png",
    ],

    addDate: "11/17/2025",
  },
  324: {
    name: "LIT5209 – 30K",
    description: "HILLSVIEW",
    images: [
      "/images/lights/litup-lighting/LIT5209_–_30K.png",
      "/images/lights/litup-lighting/LIT5209_–_30K.png",
      "/images/lights/litup-lighting/LIT5209_–_30K.png",
    ],

    addDate: "11/17/2025",
  },
  325: {
    name: "LIT5209 – 40K",
    description: "HILLSVIEW",
    images: [
      "/images/lights/litup-lighting/LIT5209_–_40K.png",
      "/images/lights/litup-lighting/LIT5209_–_40K.png",
      "/images/lights/litup-lighting/LIT5209_–_40K.png",
    ],

    addDate: "11/17/2025",
  },
  326: {
    name: "LIT5212",
    description: "HILLSVIEW",
    images: [
      "/images/lights/litup-lighting/LIT5212.png",
      "/images/lights/litup-lighting/LIT5212.png",
      "/images/lights/litup-lighting/LIT5212.png",
    ],

    addDate: "11/17/2025",
  },
  327: {
    name: "LIT5212WH/BK",
    description: "HILLSVIEW",
    images: [
      "/images/lights/litup-lighting/LIT5212WHBK.png",
      "/images/lights/litup-lighting/LIT5212WHBK.png",
      "/images/lights/litup-lighting/LIT5212WHBK.png",
    ],

    addDate: "11/17/2025",
  },
  328: {
    name: "LIT5216WH/BK",
    description: "HILLSVIEW",
    images: [
      "/images/lights/litup-lighting/LIT5216WHBK.png",
      "/images/lights/litup-lighting/LIT5216WHBK.png",
      "/images/lights/litup-lighting/LIT5216WHBK.png",
    ],

    addDate: "11/17/2025",
  },
  329: {
    name: "NL1901 WH-5K-PIR",
    description: "HURON",
    images: [
      "/images/lights/litup-lighting/NL1901_WH-5K-PIR.png",
      "/images/lights/litup-lighting/NL1901_WH-5K-PIR.png",
      "/images/lights/litup-lighting/NL1901_WH-5K-PIR.png",
    ],

    addDate: "11/17/2025",
  },
  330: {
    name: "PART1912",
    description: "HURON",
    images: [
      "/images/lights/litup-lighting/PART1912.png",
      "/images/lights/litup-lighting/PART1912.png",
      "/images/lights/litup-lighting/PART1912.png",
    ],

    addDate: "11/17/2025",
  },
  331: {
    name: "UC1912",
    description: "HURON",
    images: [
      "/images/lights/litup-lighting/UC1912.png",
      "/images/lights/litup-lighting/UC1912.png",
      "/images/lights/litup-lighting/UC1912.png",
    ],

    addDate: "11/17/2025",
  },
  332: {
    name: "UC1915",
    description: "HURON",
    images: [
      "/images/lights/litup-lighting/UC1915.png",
      "/images/lights/litup-lighting/UC1915.png",
      "/images/lights/litup-lighting/UC1915.png",
    ],

    addDate: "11/17/2025",
  },
  333: {
    name: "UC1920",
    description: "HURON",
    images: [
      "/images/lights/litup-lighting/UC1920.png",
      "/images/lights/litup-lighting/UC1920.png",
      "/images/lights/litup-lighting/UC1920.png",
    ],

    addDate: "11/17/2025",
  },
  334: {
    name: "UC1924",
    description: "HURON",
    images: [
      "/images/lights/litup-lighting/UC1924.png",
      "/images/lights/litup-lighting/UC1924.png",
      "/images/lights/litup-lighting/UC1924.png",
    ],

    addDate: "11/17/2025",
  },
  335: {
    name: "UC1930",
    description: "HURON",
    images: [
      "/images/lights/litup-lighting/UC1930.png",
      "/images/lights/litup-lighting/UC1930.png",
      "/images/lights/litup-lighting/UC1930.png",
    ],

    addDate: "11/17/2025",
  },
  336: {
    name: "LIT5530",
    description: "JARDIN",
    images: [
      "/images/lights/litup-lighting/LIT5530.png",
      "/images/lights/litup-lighting/LIT5530.png",
      "/images/lights/litup-lighting/LIT5530.png",
    ],

    addDate: "11/17/2025",
  },
  337: {
    name: "LIT5531",
    description: "JARDIN",
    images: [
      "/images/lights/litup-lighting/LIT5531.png",
      "/images/lights/litup-lighting/LIT5531.png",
      "/images/lights/litup-lighting/LIT5531.png",
    ],

    addDate: "11/17/2025",
  },
  338: {
    name: "LIT5532",
    description: "JARDIN",
    images: [
      "/images/lights/litup-lighting/LIT5532.png",
      "/images/lights/litup-lighting/LIT5532.png",
      "/images/lights/litup-lighting/LIT5532.png",
    ],

    addDate: "11/17/2025",
  },
  339: {
    name: "LIT5533",
    description: "JARDIN",
    images: [
      "/images/lights/litup-lighting/LIT5533.png",
      "/images/lights/litup-lighting/LIT5533.png",
      "/images/lights/litup-lighting/LIT5533.png",
    ],

    addDate: "11/17/2025",
  },
  340: {
    name: "LIT5534BK+MC-CL",
    description: "JARDIN",
    images: [
      "/images/lights/litup-lighting/LIT5534BK+MC-CL.png",
      "/images/lights/litup-lighting/LIT5534BK+MC-CL.png",
      "/images/lights/litup-lighting/LIT5534BK+MC-CL.png",
    ],

    addDate: "11/17/2025",
  },
  341: {
    name: "LIT5731",
    description: "KASLO",
    images: [
      "/images/lights/litup-lighting/LIT5731.png",
      "/images/lights/litup-lighting/LIT5731.png",
      "/images/lights/litup-lighting/LIT5731.png",
    ],

    addDate: "11/17/2025",
  },
  342: {
    name: "LIT5732",
    description: "KASLO",
    images: [
      "/images/lights/litup-lighting/LIT5732.png",
      "/images/lights/litup-lighting/LIT5732.png",
      "/images/lights/litup-lighting/LIT5732.png",
    ],

    addDate: "11/17/2025",
  },
  343: {
    name: "LIT5741",
    description: "KASLO",
    images: [
      "/images/lights/litup-lighting/LIT5741.png",
      "/images/lights/litup-lighting/LIT5741.png",
      "/images/lights/litup-lighting/LIT5741.png",
    ],

    addDate: "11/17/2025",
  },
  344: {
    name: "LIT5742",
    description: "KASLO",
    images: [
      "/images/lights/litup-lighting/LIT5742.png",
      "/images/lights/litup-lighting/LIT5742.png",
      "/images/lights/litup-lighting/LIT5742.png",
    ],

    addDate: "11/17/2025",
  },
  345: {
    name: "LIT5422",
    description: "LOUISE",
    images: [
      "/images/lights/litup-lighting/LIT5422.png",
      "/images/lights/litup-lighting/LIT5422.png",
      "/images/lights/litup-lighting/LIT5422.png",
    ],

    addDate: "11/17/2025",
  },
  346: {
    name: "LIT5423",
    description: "LOUISE",
    images: [
      "/images/lights/litup-lighting/LIT5423.png",
      "/images/lights/litup-lighting/LIT5423.png",
      "/images/lights/litup-lighting/LIT5423.png",
    ],

    addDate: "11/17/2025",
  },
  347: {
    name: "LIT5424",
    description: "LOUISE",
    images: [
      "/images/lights/litup-lighting/LIT5424.png",
      "/images/lights/litup-lighting/LIT5424.png",
      "/images/lights/litup-lighting/LIT5424.png",
    ],

    addDate: "11/17/2025",
  },
  348: {
    name: "FL1804-30",
    description: "PARIS",
    images: [
      "/images/lights/litup-lighting/FL1804-30.jpg",
      "/images/lights/litup-lighting/FL1804-30.jpg",
      "/images/lights/litup-lighting/FL1804-30.jpg",
    ],

    addDate: "11/17/2025",
  },
  349: {
    name: "FL1804-40",
    description: "PARIS",
    images: [
      "/images/lights/litup-lighting/FL1804-40.jpg",
      "/images/lights/litup-lighting/FL1804-40.jpg",
      "/images/lights/litup-lighting/FL1804-40.jpg",
    ],

    addDate: "11/17/2025",
  },
  350: {
    name: "FL1806-30",
    description: "PARIS",
    images: [
      "/images/lights/litup-lighting/FL1806-30.jpg",
      "/images/lights/litup-lighting/FL1806-30.jpg",
      "/images/lights/litup-lighting/FL1806-30.jpg",
    ],

    addDate: "11/17/2025",
  },
  351: {
    name: "FL1806-40",
    description: "PARIS",
    images: [
      "/images/lights/litup-lighting/FL1806-40.jpg",
      "/images/lights/litup-lighting/FL1806-40.jpg",
      "/images/lights/litup-lighting/FL1806-40.jpg",
    ],

    addDate: "11/17/2025",
  },
  352: {
    name: "LIT4824",
    description: "SUMMER",
    images: [
      "/images/lights/litup-lighting/LIT4824.png",
      "/images/lights/litup-lighting/LIT4824.png",
      "/images/lights/litup-lighting/LIT4824.png",
    ],

    addDate: "11/17/2025",
  },
  353: {
    name: "LIT4826",
    description: "SUMMER",
    images: [
      "/images/lights/litup-lighting/LIT4826.png",
      "/images/lights/litup-lighting/LIT4826.png",
      "/images/lights/litup-lighting/LIT4826.png",
    ],

    addDate: "11/17/2025",
  },
  354: {
    name: "LIT4828",
    description: "SUMMER",
    images: [
      "/images/lights/litup-lighting/LIT4828.png",
      "/images/lights/litup-lighting/LIT4828.png",
      "/images/lights/litup-lighting/LIT4828.png",
    ],

    addDate: "11/17/2025",
  },
  355: {
    name: "LIT37186",
    description: "VIKING",
    images: [
      "/images/lights/litup-lighting/LIT37186.png",
      "/images/lights/litup-lighting/LIT37186.png",
      "/images/lights/litup-lighting/LIT37186.png",
    ],

    addDate: "11/17/2025",
  },
  356: {
    name: "LIT37188",
    description: "VIKING",
    images: [
      "/images/lights/litup-lighting/LIT37188.png",
      "/images/lights/litup-lighting/LIT37188.png",
      "/images/lights/litup-lighting/LIT37188.png",
    ],

    addDate: "11/17/2025",
  },
  357: {
    name: "LIT37198BK",
    description: "VIKING",
    images: [
      "/images/lights/litup-lighting/LIT37198BK.png",
      "/images/lights/litup-lighting/LIT37198BK.png",
      "/images/lights/litup-lighting/LIT37198BK.png",
    ],

    addDate: "11/17/2025",
  },
  358: {
    name: "LIT37286",
    description: "VIKING",
    images: [
      "/images/lights/litup-lighting/LIT37286.png",
      "/images/lights/litup-lighting/LIT37286.png",
      "/images/lights/litup-lighting/LIT37286.png",
    ],

    addDate: "11/17/2025",
  },
  359: {
    name: "LIT37288",
    description: "VIKING",
    images: [
      "/images/lights/litup-lighting/LIT37288.png",
      "/images/lights/litup-lighting/LIT37288.png",
      "/images/lights/litup-lighting/LIT37288.png",
    ],

    addDate: "11/17/2025",
  },
  360: {
    name: "LIT37384",
    description: "VIKING",
    images: [
      "/images/lights/litup-lighting/LIT37384.png",
      "/images/lights/litup-lighting/LIT37384.png",
      "/images/lights/litup-lighting/LIT37384.png",
    ],

    addDate: "11/17/2025",
  },
  361: {
    name: "LIT37388",
    description: "VIKING",
    images: [
      "/images/lights/litup-lighting/LIT37388.png",
      "/images/lights/litup-lighting/LIT37388.png",
      "/images/lights/litup-lighting/LIT37388.png",
    ],

    addDate: "11/17/2025",
  },
  362: {
    name: "LIT37398BK",
    description: "VIKING",
    images: [
      "/images/lights/litup-lighting/LIT37398BK.png",
      "/images/lights/litup-lighting/LIT37398BK.png",
      "/images/lights/litup-lighting/LIT37398BK.png",
    ],

    addDate: "11/17/2025",
  },
  363: {
    name: "LIT37484",
    description: "VIKING",
    images: [
      "/images/lights/litup-lighting/LIT37484.png",
      "/images/lights/litup-lighting/LIT37484.png",
      "/images/lights/litup-lighting/LIT37484.png",
    ],

    addDate: "11/17/2025",
  },
  364: {
    name: "LIT37486",
    description: "VIKING",
    images: [
      "/images/lights/litup-lighting/LIT37486.png",
      "/images/lights/litup-lighting/LIT37486.png",
      "/images/lights/litup-lighting/LIT37486.png",
    ],

    addDate: "11/17/2025",
  },
  365: {
    name: "LIT37786",
    description: "VIKING",
    images: [
      "/images/lights/litup-lighting/LIT37786.png",
      "/images/lights/litup-lighting/LIT37786.png",
      "/images/lights/litup-lighting/LIT37786.png",
    ],

    addDate: "11/17/2025",
  },
  366: {
    name: "LIT37788",
    description: "VIKING",
    images: [
      "/images/lights/litup-lighting/LIT37788.png",
      "/images/lights/litup-lighting/LIT37788.png",
      "/images/lights/litup-lighting/LIT37788.png",
    ],

    addDate: "11/17/2025",
  },
  367: {
    name: "LIT37798BK",
    description: "VIKING",
    images: [
      "/images/lights/litup-lighting/LIT37798BK.jpg",
      "/images/lights/litup-lighting/LIT37798BK.jpg",
      "/images/lights/litup-lighting/LIT37798BK.jpg",
    ],

    addDate: "11/17/2025",
  },
  368: {
    name: "LIT37888BK-SEN",
    description: "VIKING",
    images: [
      "/images/lights/litup-lighting/LIT37888BK-SEN.png",
      "/images/lights/litup-lighting/LIT37888BK-SEN.png",
      "/images/lights/litup-lighting/LIT37888BK-SEN.png",
    ],

    addDate: "11/17/2025",
  },
  369: {
    name: "LIT37986",
    description: "VIKING",
    images: [
      "/images/lights/litup-lighting/LIT37986.png",
      "/images/lights/litup-lighting/LIT37986.png",
      "/images/lights/litup-lighting/LIT37986.png",
    ],

    addDate: "11/17/2025",
  },
  370: {
    name: "LIT59186BK",
    description: "VOYAGER",
    images: [
      "/images/lights/litup-lighting/LIT59186BK.png",
      "/images/lights/litup-lighting/LIT59186BK.png",
      "/images/lights/litup-lighting/LIT59186BK.png",
    ],

    addDate: "11/17/2025",
  },
  371: {
    name: "LIT59186BK (Copy)",
    description: "VOYAGER",
    images: [
      "/images/lights/litup-lighting/LIT59186BK_(Copy).png",
      "/images/lights/litup-lighting/LIT59186BK_(Copy).png",
      "/images/lights/litup-lighting/LIT59186BK_(Copy).png",
    ],

    addDate: "11/17/2025",
  },
  372: {
    name: "LIT59188BK",
    description: "VOYAGER",
    images: [
      "/images/lights/litup-lighting/LIT59188BK.png",
      "/images/lights/litup-lighting/LIT59188BK.png",
      "/images/lights/litup-lighting/LIT59188BK.png",
    ],

    addDate: "11/17/2025",
  },
  373: {
    name: "LIT50130",
    description: "WELLINGTON",
    images: [
      "/images/lights/litup-lighting/LIT50130.png",
      "/images/lights/litup-lighting/LIT50130.png",
      "/images/lights/litup-lighting/LIT50130.png",
    ],

    addDate: "11/17/2025",
  },
  374: {
    name: "LIT50186",
    description: "WELLINGTON",
    images: [
      "/images/lights/litup-lighting/LIT50186.png",
      "/images/lights/litup-lighting/LIT50186.png",
      "/images/lights/litup-lighting/LIT50186.png",
    ],

    addDate: "11/17/2025",
  },
  375: {
    name: "LIT50188",
    description: "WELLINGTON",
    images: [
      "/images/lights/litup-lighting/LIT50188.png",
      "/images/lights/litup-lighting/LIT50188.png",
      "/images/lights/litup-lighting/LIT50188.png",
    ],

    addDate: "11/17/2025",
  },
  376: {
    name: "LIT60186",
    description: "WOODLAND",
    images: [
      "/images/lights/litup-lighting/LIT60186.png",
      "/images/lights/litup-lighting/LIT60186.png",
      "/images/lights/litup-lighting/LIT60186.png",
    ],

    addDate: "11/17/2025",
  },
  377: {
    name: "LIT3951BK+MC In Stock",
    description: "DAWSON",
    images: [
      "/images/lights/litup-lighting/LIT3951BK+MC_In_Stock.png",
      "/images/lights/litup-lighting/LIT3951BK+MC_In_Stock.png",
      "/images/lights/litup-lighting/LIT3951BK+MC_In_Stock.png",
    ],

    addDate: "11/17/2025",
  },
  378: {
    name: "LIT6402",
    description: "BANFF",
    images: [
      "/images/lights/litup-lighting/LIT6402.png",
      "/images/lights/litup-lighting/LIT6402.png",
      "/images/lights/litup-lighting/LIT6402.png",
    ],

    addDate: "11/17/2025",
  },
  379: {
    name: "LIT6422BK-CRY-3CCT",
    description: "BANFF",
    images: [
      "/images/lights/litup-lighting/LIT6422BK-CRY-3CCT.png",
      "/images/lights/litup-lighting/LIT6422BK-CRY-3CCT.png",
      "/images/lights/litup-lighting/LIT6422BK-CRY-3CCT.png",
    ],

    addDate: "11/17/2025",
  },
  380: {
    name: "LIT6423BK-CRY-3CCT",
    description: "BANFF",
    images: [
      "/images/lights/litup-lighting/LIT6423BK-CRY-3CCT.png",
      "/images/lights/litup-lighting/LIT6423BK-CRY-3CCT.png",
      "/images/lights/litup-lighting/LIT6423BK-CRY-3CCT.png",
    ],

    addDate: "11/17/2025",
  },
  381: {
    name: "LIT6424BK-CRY-3CCT",
    description: "BANFF",
    images: [
      "/images/lights/litup-lighting/LIT6424BK-CRY-3CCT.png",
      "/images/lights/litup-lighting/LIT6424BK-CRY-3CCT.png",
      "/images/lights/litup-lighting/LIT6424BK-CRY-3CCT.png",
    ],

    addDate: "11/17/2025",
  },
  382: {
    name: "LIT6431",
    description: "BANFF",
    images: [
      "/images/lights/litup-lighting/LIT6431.png",
      "/images/lights/litup-lighting/LIT6431.png",
      "/images/lights/litup-lighting/LIT6431.png",
    ],

    addDate: "11/17/2025",
  },
  383: {
    name: "LIT6434BK-CRY-3CCT",
    description: "BANFF",
    images: [
      "/images/lights/litup-lighting/LIT6434BK-CRY-3CCT.png",
      "/images/lights/litup-lighting/LIT6434BK-CRY-3CCT.png",
      "/images/lights/litup-lighting/LIT6434BK-CRY-3CCT.png",
    ],

    addDate: "11/17/2025",
  },
  384: {
    name: "LIT6443",
    description: "BANFF",
    images: [
      "/images/lights/litup-lighting/LIT6443.png",
      "/images/lights/litup-lighting/LIT6443.png",
      "/images/lights/litup-lighting/LIT6443.png",
    ],

    addDate: "11/17/2025",
  },
  385: {
    name: "LIT6451BK-CRY-3CCT",
    description: "BANFF",
    images: [
      "/images/lights/litup-lighting/LIT6451BK-CRY-3CCT.png",
      "/images/lights/litup-lighting/LIT6451BK-CRY-3CCT.png",
      "/images/lights/litup-lighting/LIT6451BK-CRY-3CCT.png",
    ],

    addDate: "11/17/2025",
  },
  386: {
    name: "LIT6931BK+MC",
    description: "CASA LOMA",
    images: [
      "/images/lights/litup-lighting/LIT6931BK+MC.png",
      "/images/lights/litup-lighting/LIT6931BK+MC.png",
      "/images/lights/litup-lighting/LIT6931BK+MC.png",
    ],

    addDate: "11/17/2025",
  },
  387: {
    name: "LIT6932BK+MC",
    description: "CASA LOMA",
    images: [
      "/images/lights/litup-lighting/LIT6932BK+MC.png",
      "/images/lights/litup-lighting/LIT6932BK+MC.png",
      "/images/lights/litup-lighting/LIT6932BK+MC.png",
    ],

    addDate: "11/17/2025",
  },
  388: {
    name: "LIT6951BK+MC",
    description: "CASA LOMA",
    images: [
      "/images/lights/litup-lighting/LIT6951BK+MC.png",
      "/images/lights/litup-lighting/LIT6951BK+MC.png",
      "/images/lights/litup-lighting/LIT6951BK+MC.png",
    ],

    addDate: "11/17/2025",
  },
  389: {
    name: "LIT3122",
    description: "CATHIE WOOD VANITY",
    images: [
      "/images/lights/litup-lighting/LIT3122.png",
      "/images/lights/litup-lighting/LIT3122.png",
      "/images/lights/litup-lighting/LIT3122.png",
    ],

    addDate: "11/17/2025",
  },
  390: {
    name: "LIT3123",
    description: "CATHIE WOOD VANITY",
    images: [
      "/images/lights/litup-lighting/LIT3123.png",
      "/images/lights/litup-lighting/LIT3123.png",
      "/images/lights/litup-lighting/LIT3123.png",
    ],

    addDate: "11/17/2025",
  },
  391: {
    name: "LIT3124",
    description: "CATHIE WOOD VANITY",
    images: [
      "/images/lights/litup-lighting/LIT3124.png",
      "/images/lights/litup-lighting/LIT3124.png",
      "/images/lights/litup-lighting/LIT3124.png",
    ],

    addDate: "11/17/2025",
  },
  392: {
    name: "LIT3125",
    description: "CATHIE WOOD VANITY",
    images: [
      "/images/lights/litup-lighting/LIT3125.png",
      "/images/lights/litup-lighting/LIT3125.png",
      "/images/lights/litup-lighting/LIT3125.png",
    ],

    addDate: "11/17/2025",
  },
  393: {
    name: "LIT6230",
    description: "HUNTSVILLE",
    images: [
      "/images/lights/litup-lighting/LIT6230.png",
      "/images/lights/litup-lighting/LIT6230.png",
      "/images/lights/litup-lighting/LIT6230.png",
    ],

    addDate: "11/17/2025",
  },
  394: {
    name: "LIT6231",
    description: "HUNTSVILLE",
    images: [
      "/images/lights/litup-lighting/LIT6231.png",
      "/images/lights/litup-lighting/LIT6231.png",
      "/images/lights/litup-lighting/LIT6231.png",
    ],

    addDate: "11/17/2025",
  },
  395: {
    name: "LIT6232",
    description: "HUNTSVILLE",
    images: [
      "/images/lights/litup-lighting/LIT6232.png",
      "/images/lights/litup-lighting/LIT6232.png",
      "/images/lights/litup-lighting/LIT6232.png",
    ],

    addDate: "11/17/2025",
  },
  396: {
    name: "LIT6122 In Stock",
    description: "MORAINE VANITY",
    images: [
      "/images/lights/litup-lighting/LIT6122_In_Stock.png",
      "/images/lights/litup-lighting/LIT6122_In_Stock.png",
      "/images/lights/litup-lighting/LIT6122_In_Stock.png",
    ],

    addDate: "11/17/2025",
  },
  397: {
    name: "LIT6123   In Stock",
    description: "MORAINE VANITY",
    images: [
      "/images/lights/litup-lighting/LIT6123_In_Stock.png",
      "/images/lights/litup-lighting/LIT6123_In_Stock.png",
      "/images/lights/litup-lighting/LIT6123_In_Stock.png",
    ],

    addDate: "11/17/2025",
  },
  398: {
    name: "LIT6124  In Stock",
    description: "MORAINE VANITY",
    images: [
      "/images/lights/litup-lighting/LIT6124_In_Stock.png",
      "/images/lights/litup-lighting/LIT6124_In_Stock.png",
      "/images/lights/litup-lighting/LIT6124_In_Stock.png",
    ],

    addDate: "11/17/2025",
  },
  399: {
    name: "LIT6125  In Stock",
    description: "MORAINE VANITY",
    images: [
      "/images/lights/litup-lighting/LIT6125_In_Stock.png",
      "/images/lights/litup-lighting/LIT6125_In_Stock.png",
      "/images/lights/litup-lighting/LIT6125_In_Stock.png",
    ],

    addDate: "11/17/2025",
  },
  400: {
    name: "LIT7122BK-3CCT",
    description: "TAHOE VANITY",
    images: [
      "/images/lights/litup-lighting/LIT7122BK-3CCT.png",
      "/images/lights/litup-lighting/LIT7122BK-3CCT.png",
      "/images/lights/litup-lighting/LIT7122BK-3CCT.png",
    ],

    addDate: "11/17/2025",
  },
  401: {
    name: "LIT7123BK-3CCT",
    description: "TAHOE VANITY",
    images: [
      "/images/lights/litup-lighting/LIT7123BK-3CCT.png",
      "/images/lights/litup-lighting/LIT7123BK-3CCT.png",
      "/images/lights/litup-lighting/LIT7123BK-3CCT.png",
    ],

    addDate: "11/17/2025",
  },
  402: {
    name: "LIT7124BK-3CCT",
    description: "TAHOE VANITY",
    images: [
      "/images/lights/litup-lighting/LIT7124BK-3CCT.png",
      "/images/lights/litup-lighting/LIT7124BK-3CCT.png",
      "/images/lights/litup-lighting/LIT7124BK-3CCT.png",
    ],

    addDate: "11/17/2025",
  },
  403: {
    name: "LIT70186BK",
    description: "VANHILL OUTDOOR",
    images: [
      "/images/lights/litup-lighting/LIT70186BK.png",
      "/images/lights/litup-lighting/LIT70186BK.png",
      "/images/lights/litup-lighting/LIT70186BK.png",
    ],

    addDate: "11/17/2025",
  },
  404: {
    name: "LIT70188BK",
    description: "VANHILL OUTDOOR",
    images: [
      "/images/lights/litup-lighting/LIT70188BK.png",
      "/images/lights/litup-lighting/LIT70188BK.png",
      "/images/lights/litup-lighting/LIT70188BK.png",
    ],

    addDate: "11/17/2025",
  },
  405: {
    name: "LIT63130 BK-CL",
    description: "WARREN OUTDOOR",
    images: [
      "/images/lights/litup-lighting/LIT63130_BK-CL.png",
      "/images/lights/litup-lighting/LIT63130_BK-CL.png",
      "/images/lights/litup-lighting/LIT63130_BK-CL.png",
    ],

    addDate: "11/17/2025",
  },
  406: {
    name: "LIT63186 BK-CL",
    description: "WARREN OUTDOOR",
    images: [
      "/images/lights/litup-lighting/LIT63186_BK-CL.png",
      "/images/lights/litup-lighting/LIT63186_BK-CL.png",
      "/images/lights/litup-lighting/LIT63186_BK-CL.png",
    ],

    addDate: "11/17/2025",
  },
  407: {
    name: "LIT63190 BK-CL",
    description: "WARREN OUTDOOR",
    images: [
      "/images/lights/litup-lighting/LIT63190_BK-CL.png",
      "/images/lights/litup-lighting/LIT63190_BK-CL.png",
      "/images/lights/litup-lighting/LIT63190_BK-CL.png",
    ],

    addDate: "11/17/2025",
  },
  408: {
    name: "LIT63192 BK-CL",
    description: "WARREN OUTDOOR",
    images: [
      "/images/lights/litup-lighting/LIT63192_BK-CL.png",
      "/images/lights/litup-lighting/LIT63192_BK-CL.png",
      "/images/lights/litup-lighting/LIT63192_BK-CL.png",
    ],

    addDate: "11/17/2025",
  },
  409: {
    name: "LIT5205 – 30K",
    description: "HILLSVIEW",
    images: [
      "/images/lights/litup-lighting/LIT5205_–_30K.png",
      "/images/lights/litup-lighting/LIT5205_–_30K.png",
      "/images/lights/litup-lighting/LIT5205_–_30K.png",
    ],

    addDate: "11/17/2025",
  },
  410: {
    name: "LIT5205 – 40K",
    description: "HILLSVIEW",
    images: [
      "/images/lights/litup-lighting/LIT5205_–_40K.png",
      "/images/lights/litup-lighting/LIT5205_–_40K.png",
      "/images/lights/litup-lighting/LIT5205_–_40K.png",
    ],

    addDate: "11/17/2025",
  },
  411: {
    name: "LIT5207 – 30K",
    description: "HILLSVIEW",
    images: [
      "/images/lights/litup-lighting/LIT5207_–_30K.png",
      "/images/lights/litup-lighting/LIT5207_–_30K.png",
      "/images/lights/litup-lighting/LIT5207_–_30K.png",
    ],

    addDate: "11/17/2025",
  },
  412: {
    name: "LIT5207 – 40K",
    description: "HILLSVIEW",
    images: [
      "/images/lights/litup-lighting/LIT5207_–_40K.png",
      "/images/lights/litup-lighting/LIT5207_–_40K.png",
      "/images/lights/litup-lighting/LIT5207_–_40K.png",
    ],

    addDate: "11/17/2025",
  },
  413: {
    name: "LIT5209 – 30K",
    description: "HILLSVIEW",
    images: [
      "/images/lights/litup-lighting/LIT5209_–_30K.png",
      "/images/lights/litup-lighting/LIT5209_–_30K.png",
      "/images/lights/litup-lighting/LIT5209_–_30K.png",
    ],

    addDate: "11/17/2025",
  },
  414: {
    name: "LIT5209 – 40K",
    description: "HILLSVIEW",
    images: [
      "/images/lights/litup-lighting/LIT5209_–_40K.png",
      "/images/lights/litup-lighting/LIT5209_–_40K.png",
      "/images/lights/litup-lighting/LIT5209_–_40K.png",
    ],

    addDate: "11/17/2025",
  },
  415: {
    name: "LIT5212",
    description: "HILLSVIEW",
    images: [
      "/images/lights/litup-lighting/LIT5212.png",
      "/images/lights/litup-lighting/LIT5212.png",
      "/images/lights/litup-lighting/LIT5212.png",
    ],

    addDate: "11/17/2025",
  },
  416: {
    name: "LIT5212WH/BK",
    description: "HILLSVIEW",
    images: [
      "/images/lights/litup-lighting/LIT5212WHBK.png",
      "/images/lights/litup-lighting/LIT5212WHBK.png",
      "/images/lights/litup-lighting/LIT5212WHBK.png",
    ],

    addDate: "11/17/2025",
  },
  417: {
    name: "LIT5216WH/BK",
    description: "HILLSVIEW",
    images: [
      "/images/lights/litup-lighting/LIT5216WHBK.png",
      "/images/lights/litup-lighting/LIT5216WHBK.png",
      "/images/lights/litup-lighting/LIT5216WHBK.png",
    ],

    addDate: "11/17/2025",
  },
  418: {
    name: "LIT6731BK",
    description: "WATERTON",
    images: [
      "/images/lights/litup-lighting/LIT6731BK.png",
      "/images/lights/litup-lighting/LIT6731BK.png",
      "/images/lights/litup-lighting/LIT6731BK.png",
    ],

    addDate: "11/17/2025",
  },
  419: {
    name: "LIT6732BK",
    description: "WATERTON",
    images: [
      "/images/lights/litup-lighting/LIT6732BK.png",
      "/images/lights/litup-lighting/LIT6732BK.png",
      "/images/lights/litup-lighting/LIT6732BK.png",
    ],

    addDate: "11/17/2025",
  },
  420: {
    name: "LIT6733BK",
    description: "WATERTON",
    images: [
      "/images/lights/litup-lighting/LIT6733BK.png",
      "/images/lights/litup-lighting/LIT6733BK.png",
      "/images/lights/litup-lighting/LIT6733BK.png",
    ],

    addDate: "11/17/2025",
  },
  421: {
    name: "LIT72186BK-SD",
    description: "WATER GARDEN",
    images: [
      "/images/lights/litup-lighting/LIT72186BK-SD.png",
      "/images/lights/litup-lighting/LIT72186BK-SD.png",
      "/images/lights/litup-lighting/LIT72186BK-SD.png",
    ],

    addDate: "11/17/2025",
  },
  422: {
    name: "LIT72188BK-SD",
    description: "WATER GARDEN",
    images: [
      "/images/lights/litup-lighting/LIT72188BK-SD.png",
      "/images/lights/litup-lighting/LIT72188BK-SD.png",
      "/images/lights/litup-lighting/LIT72188BK-SD.png",
    ],

    addDate: "11/17/2025",
  },
  423: {
    name: "LIT2532",
    description: "ALICE",
    images: [
      "/images/lights/litup-lighting/LIT2532.png",
      "/images/lights/litup-lighting/LIT2532.png",
      "/images/lights/litup-lighting/LIT2532.png",
    ],

    addDate: "11/17/2025",
  },
  424: {
    name: "LIT2533BK+MC",
    description: "ALICE",
    images: [
      "/images/lights/litup-lighting/LIT2533BK+MC.png",
      "/images/lights/litup-lighting/LIT2533BK+MC.png",
      "/images/lights/litup-lighting/LIT2533BK+MC.png",
    ],

    addDate: "11/17/2025",
  },
  425: {
    name: "LIT2533SN+MC",
    description: "ALICE",
    images: [
      "/images/lights/litup-lighting/LIT2533SN+MC.png",
      "/images/lights/litup-lighting/LIT2533SN+MC.png",
      "/images/lights/litup-lighting/LIT2533SN+MC.png",
    ],

    addDate: "11/17/2025",
  },
  426: {
    name: "LIT5833",
    description: "DEVON",
    images: [
      "/images/lights/litup-lighting/LIT5833.png",
      "/images/lights/litup-lighting/LIT5833.png",
      "/images/lights/litup-lighting/LIT5833.png",
    ],

    addDate: "11/17/2025",
  },
  427: {
    name: "LIT5833SN+CH  In stock",
    description: "DEVON",
    images: [
      "/images/lights/litup-lighting/LIT5833SN+CH_In_stock.png",
      "/images/lights/litup-lighting/LIT5833SN+CH_In_stock.png",
      "/images/lights/litup-lighting/LIT5833SN+CH_In_stock.png",
    ],

    addDate: "11/17/2025",
  },
  428: {
    name: "LIT5834",
    description: "DEVON",
    images: [
      "/images/lights/litup-lighting/LIT5834.png",
      "/images/lights/litup-lighting/LIT5834.png",
      "/images/lights/litup-lighting/LIT5834.png",
    ],

    addDate: "11/17/2025",
  },
  429: {
    name: "LIT5834SN+CH 1 In stock",
    description: "DEVON",
    images: [
      "/images/lights/litup-lighting/LIT5834SN+CH_1_In_stock.png",
      "/images/lights/litup-lighting/LIT5834SN+CH_1_In_stock.png",
      "/images/lights/litup-lighting/LIT5834SN+CH_1_In_stock.png",
    ],

    addDate: "11/17/2025",
  },
  430: {
    name: "LIT5835BK+CH In Stock",
    description: "DEVON",
    images: [
      "/images/lights/litup-lighting/LIT5835BK+CH_In_Stock.png",
      "/images/lights/litup-lighting/LIT5835BK+CH_In_Stock.png",
      "/images/lights/litup-lighting/LIT5835BK+CH_In_Stock.png",
    ],

    addDate: "11/17/2025",
  },
  431: {
    name: "LIT5841",
    description: "DEVON",
    images: [
      "/images/lights/litup-lighting/LIT5841.jpeg",
      "/images/lights/litup-lighting/LIT5841.jpeg",
      "/images/lights/litup-lighting/LIT5841.jpeg",
    ],

    addDate: "11/17/2025",
  },
  432: {
    name: "LIT5841SN+CH 1 In Stock",
    description: "DEVON",
    images: [
      "/images/lights/litup-lighting/LIT5841SN+CH_1_In_Stock.png",
      "/images/lights/litup-lighting/LIT5841SN+CH_1_In_Stock.png",
      "/images/lights/litup-lighting/LIT5841SN+CH_1_In_Stock.png",
    ],

    addDate: "11/17/2025",
  },
  433: {
    name: "LIT5731SN+MC  In-stock",
    description: "KASLO SN",
    images: [
      "/images/lights/litup-lighting/LIT5731SN+MC_In-stock.png",
      "/images/lights/litup-lighting/LIT5731SN+MC_In-stock.png",
      "/images/lights/litup-lighting/LIT5731SN+MC_In-stock.png",
    ],

    addDate: "11/17/2025",
  },
  434: {
    name: "LIT5732SN+MC  In-stock",
    description: "KASLO SN",
    images: [
      "/images/lights/litup-lighting/LIT5732SN+MC_In-stock.png",
      "/images/lights/litup-lighting/LIT5732SN+MC_In-stock.png",
      "/images/lights/litup-lighting/LIT5732SN+MC_In-stock.png",
    ],

    addDate: "11/17/2025",
  },
  435: {
    name: "LIT5741SN+MC In-stock",
    description: "KASLO SN",
    images: [
      "/images/lights/litup-lighting/LIT5741SN+MC_In-stock.png",
      "/images/lights/litup-lighting/LIT5741SN+MC_In-stock.png",
      "/images/lights/litup-lighting/LIT5741SN+MC_In-stock.png",
    ],

    addDate: "11/17/2025",
  },
  436: {
    name: "LIT5742SN+MC  In-stock",
    description: "KASLO SN",
    images: [
      "/images/lights/litup-lighting/LIT5742SN+MC_In-stock.png",
      "/images/lights/litup-lighting/LIT5742SN+MC_In-stock.png",
      "/images/lights/litup-lighting/LIT5742SN+MC_In-stock.png",
    ],

    addDate: "11/17/2025",
  },
  437: {
    name: "LIT7609BK-GD-3CCT In Stock",
    description: "CAMROSE",
    images: [
      "/images/lights/litup-lighting/LIT7609BK-GD-3CCT_In_Stock.png",
      "/images/lights/litup-lighting/LIT7609BK-GD-3CCT_In_Stock.png",
      "/images/lights/litup-lighting/LIT7609BK-GD-3CCT_In_Stock.png",
    ],

    addDate: "11/17/2025",
  },
  438: {
    name: "LIT7610BK-GD-5CCT In Stock",
    description: "CAMROSE",
    images: [
      "/images/lights/litup-lighting/LIT7610BK-GD-5CCT_In_Stock.png",
      "/images/lights/litup-lighting/LIT7610BK-GD-5CCT_In_Stock.png",
      "/images/lights/litup-lighting/LIT7610BK-GD-5CCT_In_Stock.png",
    ],

    addDate: "11/17/2025",
  },
  439: {
    name: "LIT7632BK-GD-5CCT In-Stock",
    description: "CAMROSE",
    images: [
      "/images/lights/litup-lighting/LIT7632BK-GD-5CCT_In-Stock.png",
      "/images/lights/litup-lighting/LIT7632BK-GD-5CCT_In-Stock.png",
      "/images/lights/litup-lighting/LIT7632BK-GD-5CCT_In-Stock.png",
    ],

    addDate: "11/17/2025",
  },
  440: {
    name: "LIT7533BK+MC  In Stock",
    description: "ATOMIUM",
    images: [
      "/images/lights/litup-lighting/LIT7533BK+MC_In_Stock.png",
      "/images/lights/litup-lighting/LIT7533BK+MC_In_Stock.png",
      "/images/lights/litup-lighting/LIT7533BK+MC_In_Stock.png",
    ],

    addDate: "11/17/2025",
  },
  441: {
    name: "LIT7536BK+MC In Stock",
    description: "ATOMIUM",
    images: [
      "/images/lights/litup-lighting/LIT7536BK+MC_In_Stock.png",
      "/images/lights/litup-lighting/LIT7536BK+MC_In_Stock.png",
      "/images/lights/litup-lighting/LIT7536BK+MC_In_Stock.png",
    ],

    addDate: "11/17/2025",
  },
  442: {
    name: "LIT7410BK-CRY  In Stock",
    description: "SKYLON",
    images: [
      "/images/lights/litup-lighting/LIT7410BK-CRY_In_Stock.png",
      "/images/lights/litup-lighting/LIT7410BK-CRY_In_Stock.png",
      "/images/lights/litup-lighting/LIT7410BK-CRY_In_Stock.png",
    ],

    addDate: "11/17/2025",
  },
  443: {
    name: "LIT7410GD-CRY In-Stock",
    description: "SKYLON",
    images: [
      "/images/lights/litup-lighting/LIT7410GD-CRY_In-Stock.png",
      "/images/lights/litup-lighting/LIT7410GD-CRY_In-Stock.png",
      "/images/lights/litup-lighting/LIT7410GD-CRY_In-Stock.png",
    ],

    addDate: "11/17/2025",
  },
  444: {
    name: "LIT7410SN-CRY In-stock",
    description: "SKYLON",
    images: [
      "/images/lights/litup-lighting/LIT7410SN-CRY_In-stock.png",
      "/images/lights/litup-lighting/LIT7410SN-CRY_In-stock.png",
      "/images/lights/litup-lighting/LIT7410SN-CRY_In-stock.png",
    ],

    addDate: "11/17/2025",
  },
  445: {
    name: "LIT7431BK-MC-CRY",
    description: "SKYLON",
    images: [
      "/images/lights/litup-lighting/LIT7431BK-MC-CRY.png",
      "/images/lights/litup-lighting/LIT7431BK-MC-CRY.png",
      "/images/lights/litup-lighting/LIT7431BK-MC-CRY.png",
    ],

    addDate: "11/17/2025",
  },
  446: {
    name: "LIT7432BK-CRY  In Stock",
    description: "SKYLON",
    images: [
      "/images/lights/litup-lighting/LIT7432BK-CRY_In_Stock.png",
      "/images/lights/litup-lighting/LIT7432BK-CRY_In_Stock.png",
      "/images/lights/litup-lighting/LIT7432BK-CRY_In_Stock.png",
    ],

    addDate: "11/17/2025",
  },
  447: {
    name: "LIT7432GD-CRY In-Stock",
    description: "SKYLON",
    images: [
      "/images/lights/litup-lighting/LIT7432GD-CRY_In-Stock.png",
      "/images/lights/litup-lighting/LIT7432GD-CRY_In-Stock.png",
      "/images/lights/litup-lighting/LIT7432GD-CRY_In-Stock.png",
    ],

    addDate: "11/17/2025",
  },
  448: {
    name: "LIT7432SN-CRY In-Stock",
    description: "SKYLON",
    images: [
      "/images/lights/litup-lighting/LIT7432SN-CRY_In-Stock.png",
      "/images/lights/litup-lighting/LIT7432SN-CRY_In-Stock.png",
      "/images/lights/litup-lighting/LIT7432SN-CRY_In-Stock.png",
    ],

    addDate: "11/17/2025",
  },
  449: {
    name: "LIT7434BK-CRY In Stock",
    description: "SKYLON",
    images: [
      "/images/lights/litup-lighting/LIT7434BK-CRY_In_Stock.png",
      "/images/lights/litup-lighting/LIT7434BK-CRY_In_Stock.png",
      "/images/lights/litup-lighting/LIT7434BK-CRY_In_Stock.png",
    ],

    addDate: "11/17/2025",
  },
  450: {
    name: "LIT7434GD-CRY In-Stock",
    description: "SKYLON",
    images: [
      "/images/lights/litup-lighting/LIT7434GD-CRY_In-Stock.png",
      "/images/lights/litup-lighting/LIT7434GD-CRY_In-Stock.png",
      "/images/lights/litup-lighting/LIT7434GD-CRY_In-Stock.png",
    ],

    addDate: "11/17/2025",
  },
  451: {
    name: "LIT7434SN-CRYIn-Stock",
    description: "SKYLON",
    images: [
      "/images/lights/litup-lighting/LIT7434SN-CRYIn-Stock.png",
      "/images/lights/litup-lighting/LIT7434SN-CRYIn-Stock.png",
      "/images/lights/litup-lighting/LIT7434SN-CRYIn-Stock.png",
    ],

    addDate: "11/17/2025",
  },
  452: {
    name: "LIT7436BK-CRY In-Stock",
    description: "SKYLON",
    images: [
      "/images/lights/litup-lighting/LIT7436BK-CRY_In-Stock.png",
      "/images/lights/litup-lighting/LIT7436BK-CRY_In-Stock.png",
      "/images/lights/litup-lighting/LIT7436BK-CRY_In-Stock.png",
    ],

    addDate: "11/17/2025",
  },
  453: {
    name: "LIT7451BK-MC-CRY",
    description: "SKYLON",
    images: [
      "/images/lights/litup-lighting/LIT7451BK-MC-CRY.png",
      "/images/lights/litup-lighting/LIT7451BK-MC-CRY.png",
      "/images/lights/litup-lighting/LIT7451BK-MC-CRY.png",
    ],

    addDate: "11/17/2025",
  },
  454: {
    name: "LIT6822SN+BK-OP In-stock",
    description: "JASPER",
    images: [
      "/images/lights/litup-lighting/LIT6822SN+BK-OP_In-stock.png",
      "/images/lights/litup-lighting/LIT6822SN+BK-OP_In-stock.png",
      "/images/lights/litup-lighting/LIT6822SN+BK-OP_In-stock.png",
    ],

    addDate: "11/17/2025",
  },
  455: {
    name: "LIT6830BK+GD-OP  In-stock",
    description: "JASPER",
    images: [
      "/images/lights/litup-lighting/LIT6830BK+GD-OP_In-stock.png",
      "/images/lights/litup-lighting/LIT6830BK+GD-OP_In-stock.png",
      "/images/lights/litup-lighting/LIT6830BK+GD-OP_In-stock.png",
    ],

    addDate: "11/17/2025",
  },
  456: {
    name: "LIT6834BK+GD-OP In-stock",
    description: "JASPER",
    images: [
      "/images/lights/litup-lighting/LIT6834BK+GD-OP_In-stock.png",
      "/images/lights/litup-lighting/LIT6834BK+GD-OP_In-stock.png",
      "/images/lights/litup-lighting/LIT6834BK+GD-OP_In-stock.png",
    ],

    addDate: "11/17/2025",
  },
  457: {
    name: "LIT6835BK+GD-OPIn-Stock",
    description: "JASPER",
    images: [
      "/images/lights/litup-lighting/LIT6835BK+GD-OPIn-Stock.png",
      "/images/lights/litup-lighting/LIT6835BK+GD-OPIn-Stock.png",
      "/images/lights/litup-lighting/LIT6835BK+GD-OPIn-Stock.png",
    ],

    addDate: "11/17/2025",
  },
  458: {
    name: "LIT6836BK+GD-OP In-stock",
    description: "JASPER",
    images: [
      "/images/lights/litup-lighting/LIT6836BK+GD-OP_In-stock.png",
      "/images/lights/litup-lighting/LIT6836BK+GD-OP_In-stock.png",
      "/images/lights/litup-lighting/LIT6836BK+GD-OP_In-stock.png",
    ],

    addDate: "11/17/2025",
  },
  459: {
    name: "LIT6836SN+BK-OP In-stock",
    description: "JASPER",
    images: [
      "/images/lights/litup-lighting/LIT6836SN+BK-OP_In-stock.png",
      "/images/lights/litup-lighting/LIT6836SN+BK-OP_In-stock.png",
      "/images/lights/litup-lighting/LIT6836SN+BK-OP_In-stock.png",
    ],

    addDate: "11/17/2025",
  },
  460: {
    name: "LIT4209",
    description: "BRANTWOOD",
    images: [
      "/images/lights/litup-lighting/LIT4209.png",
      "/images/lights/litup-lighting/LIT4209.png",
      "/images/lights/litup-lighting/LIT4209.png",
    ],

    addDate: "11/17/2025",
  },
  461: {
    name: "LIT4210 BK+MC",
    description: "BRANTWOOD",
    images: [
      "/images/lights/litup-lighting/LIT4210_BK+MC.png",
      "/images/lights/litup-lighting/LIT4210_BK+MC.png",
      "/images/lights/litup-lighting/LIT4210_BK+MC.png",
    ],

    addDate: "11/17/2025",
  },
  462: {
    name: "LIT4230",
    description: "BRANTWOOD",
    images: [
      "/images/lights/litup-lighting/LIT4230.png",
      "/images/lights/litup-lighting/LIT4230.png",
      "/images/lights/litup-lighting/LIT4230.png",
    ],

    addDate: "11/17/2025",
  },
  463: {
    name: "LIT4232",
    description: "BRANTWOOD",
    images: [
      "/images/lights/litup-lighting/LIT4232.png",
      "/images/lights/litup-lighting/LIT4232.png",
      "/images/lights/litup-lighting/LIT4232.png",
    ],

    addDate: "11/17/2025",
  },
  464: {
    name: "LIT4251",
    description: "BRANTWOOD",
    images: [
      "/images/lights/litup-lighting/LIT4251.png",
      "/images/lights/litup-lighting/LIT4251.png",
      "/images/lights/litup-lighting/LIT4251.png",
    ],

    addDate: "11/17/2025",
  },
  465: {
    name: "LIT4251BK+MC",
    description: "BRANTWOOD",
    images: [
      "/images/lights/litup-lighting/LIT4251BK+MC.png",
      "/images/lights/litup-lighting/LIT4251BK+MC.png",
      "/images/lights/litup-lighting/LIT4251BK+MC.png",
    ],

    addDate: "11/17/2025",
  },
  466: {
    name: "LIT3330",
    description: "ATHENS",
    images: [
      "/images/lights/litup-lighting/LIT3330.png",
      "/images/lights/litup-lighting/LIT3330.png",
      "/images/lights/litup-lighting/LIT3330.png",
    ],

    addDate: "11/17/2025",
  },
  467: {
    name: "LIT3341",
    description: "ATHENS",
    images: [
      "/images/lights/litup-lighting/LIT3341.png",
      "/images/lights/litup-lighting/LIT3341.png",
      "/images/lights/litup-lighting/LIT3341.png",
    ],

    addDate: "11/17/2025",
  },
  468: {
    name: "LIT3342",
    description: "ATHENS",
    images: [
      "/images/lights/litup-lighting/LIT3342.png",
      "/images/lights/litup-lighting/LIT3342.png",
      "/images/lights/litup-lighting/LIT3342.png",
    ],

    addDate: "11/17/2025",
  },
  469: {
    name: "LIT3342SN+MC",
    description: "ATHENS",
    images: [
      "/images/lights/litup-lighting/LIT3342SN+MC.png",
      "/images/lights/litup-lighting/LIT3342SN+MC.png",
      "/images/lights/litup-lighting/LIT3342SN+MC.png",
    ],

    addDate: "11/17/2025",
  },
  470: {
    name: "LIT8323BK-CL-3CCT In-Stock",
    description: "ST. CLAIR VANITY",
    images: [
      "/images/lights/litup-lighting/LIT8323BK-CL-3CCT_In-Stock.png",
      "/images/lights/litup-lighting/LIT8323BK-CL-3CCT_In-Stock.png",
      "/images/lights/litup-lighting/LIT8323BK-CL-3CCT_In-Stock.png",
    ],

    addDate: "11/17/2025",
  },
  471: {
    name: "LIT8324BK-CL-3CCTIn-Stock",
    description: "ST. CLAIR VANITY",
    images: [
      "/images/lights/litup-lighting/LIT8324BK-CL-3CCTIn-Stock.png",
      "/images/lights/litup-lighting/LIT8324BK-CL-3CCTIn-Stock.png",
      "/images/lights/litup-lighting/LIT8324BK-CL-3CCTIn-Stock.png",
    ],

    addDate: "11/17/2025",
  },
  472: {
    name: "LIT8210BK-CRY-3CCT In-Stock",
    description: "PORTO FLUSH MOUNT",
    images: [
      "/images/lights/litup-lighting/LIT8210BK-CRY-3CCT_In-Stock.png",
      "/images/lights/litup-lighting/LIT8210BK-CRY-3CCT_In-Stock.png",
      "/images/lights/litup-lighting/LIT8210BK-CRY-3CCT_In-Stock.png",
    ],

    addDate: "11/17/2025",
  },
  473: {
    name: "LIT8211BK-CRY-3CCT In-Stock",
    description: "PORTO FLUSH MOUNT",
    images: [
      "/images/lights/litup-lighting/LIT8211BK-CRY-3CCT_In-Stock.png",
      "/images/lights/litup-lighting/LIT8211BK-CRY-3CCT_In-Stock.png",
      "/images/lights/litup-lighting/LIT8211BK-CRY-3CCT_In-Stock.png",
    ],

    addDate: "11/17/2025",
  },
  474: {
    name: "LIT8122BK+MC In-Stock",
    description: "SUPERIOR VANITY",
    images: [
      "/images/lights/litup-lighting/LIT8122BK+MC_In-Stock.png",
      "/images/lights/litup-lighting/LIT8122BK+MC_In-Stock.png",
      "/images/lights/litup-lighting/LIT8122BK+MC_In-Stock.png",
    ],

    addDate: "11/17/2025",
  },
  475: {
    name: "LIT8123BK+MC In-Stock",
    description: "SUPERIOR VANITY",
    images: [
      "/images/lights/litup-lighting/LIT8123BK+MC_In-Stock.png",
      "/images/lights/litup-lighting/LIT8123BK+MC_In-Stock.png",
      "/images/lights/litup-lighting/LIT8123BK+MC_In-Stock.png",
    ],

    addDate: "11/17/2025",
  },
  476: {
    name: "LIT309-6-3000K",
    description: "BULBS",
    images: [
      "/images/lights/litup-lighting/LIT309-6-3000K.png",
      "/images/lights/litup-lighting/LIT309-6-3000K.png",
      "/images/lights/litup-lighting/LIT309-6-3000K.png",
    ],

    addDate: "11/17/2025",
  },
  477: {
    name: "LITA19-10-3000KM",
    description: "BULBS",
    images: [
      "/images/lights/litup-lighting/LITA19-10-3000KM.png",
      "/images/lights/litup-lighting/LITA19-10-3000KM.png",
      "/images/lights/litup-lighting/LITA19-10-3000KM.png",
    ],

    addDate: "11/17/2025",
  },
  478: {
    name: "LITA19-30K PIR",
    description: "BULBS",
    images: [
      "/images/lights/litup-lighting/LITA19-30K_PIR.jpg",
      "/images/lights/litup-lighting/LITA19-30K_PIR.jpg",
      "/images/lights/litup-lighting/LITA19-30K_PIR.jpg",
    ],

    addDate: "11/17/2025",
  },
  479: {
    name: "LITA19-6-3000K",
    description: "BULBS",
    images: [
      "/images/lights/litup-lighting/LITA19-6-3000K.png",
      "/images/lights/litup-lighting/LITA19-6-3000K.png",
      "/images/lights/litup-lighting/LITA19-6-3000K.png",
    ],

    addDate: "11/17/2025",
  },
  480: {
    name: "LITA19-8-30K DD",
    description: "BULBS",
    images: [
      "/images/lights/litup-lighting/LITA19-8-30K_DD.jpg",
      "/images/lights/litup-lighting/LITA19-8-30K_DD.jpg",
      "/images/lights/litup-lighting/LITA19-8-30K_DD.jpg",
    ],

    addDate: "11/17/2025",
  },
  481: {
    name: "LITC35-4-3000K",
    description: "BULBS",
    images: [
      "/images/lights/litup-lighting/LITC35-4-3000K.png",
      "/images/lights/litup-lighting/LITC35-4-3000K.png",
      "/images/lights/litup-lighting/LITC35-4-3000K.png",
    ],

    addDate: "11/17/2025",
  },
  482: {
    name: "LITE11-5-30K",
    description: "BULBS",
    images: [
      "/images/lights/litup-lighting/LITE11-5-30K.png",
      "/images/lights/litup-lighting/LITE11-5-30K.png",
      "/images/lights/litup-lighting/LITE11-5-30K.png",
    ],

    addDate: "11/17/2025",
  },
  483: {
    name: "LITG16-6-3000K",
    description: "BULBS",
    images: [
      "/images/lights/litup-lighting/LITG16-6-3000K.png",
      "/images/lights/litup-lighting/LITG16-6-3000K.png",
      "/images/lights/litup-lighting/LITG16-6-3000K.png",
    ],

    addDate: "11/17/2025",
  },
  484: {
    name: "LITG25-6-3000K",
    description: "BULBS",
    images: [
      "/images/lights/litup-lighting/LITG25-6-3000K.png",
      "/images/lights/litup-lighting/LITG25-6-3000K.png",
      "/images/lights/litup-lighting/LITG25-6-3000K.png",
    ],

    addDate: "11/17/2025",
  },
  485: {
    name: "LITG4-5-30K",
    description: "BULBS",
    images: [
      "/images/lights/litup-lighting/LITG4-5-30K.png",
      "/images/lights/litup-lighting/LITG4-5-30K.png",
      "/images/lights/litup-lighting/LITG4-5-30K.png",
    ],

    addDate: "11/17/2025",
  },
  486: {
    name: "LITG9-3-40K",
    description: "BULBS",
    images: [
      "/images/lights/litup-lighting/LITG9-3-40K.png",
      "/images/lights/litup-lighting/LITG9-3-40K.png",
      "/images/lights/litup-lighting/LITG9-3-40K.png",
    ],

    addDate: "11/17/2025",
  },
  487: {
    name: "LIT7729BK-CR In-Stock",
    description: "PETRA",
    images: [
      "/images/lights/litup-lighting/LIT7729BK-CR_In-Stock.png",
      "/images/lights/litup-lighting/LIT7729BK-CR_In-Stock.png",
      "/images/lights/litup-lighting/LIT7729BK-CR_In-Stock.png",
    ],

    addDate: "11/17/2025",
  },
  488: {
    name: "LIT7730BK-CRIn-Stock",
    description: "PETRA",
    images: [
      "/images/lights/litup-lighting/LIT7730BK-CRIn-Stock.png",
      "/images/lights/litup-lighting/LIT7730BK-CRIn-Stock.png",
      "/images/lights/litup-lighting/LIT7730BK-CRIn-Stock.png",
    ],

    addDate: "11/17/2025",
  },
};

export const categoriesData = {
  ceilingLight: [1, 2, 5],
  chandelier: [
    8, 10, 14, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 80, 81, 84, 88, 89, 91,
    92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 110, 111, 112,
    114,
  ],
  diningLights: [9, 11, 12, 15, 82, 83, 86, 87, 90],
  outdoorWallLight: [16, 17, 18, 19],
  vanityLight: [
    23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
    42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53,
  ],
  wallLights: [7, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68],
  landScapeLights: [20, 21, 22],
  singlePendantLights: [3, 4, 13, 79, 85, 106, 107, 109],
  kendalLights: [
    115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129,
    130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144,
    145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159,
    160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174,
    175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189,
    190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204,
    205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219,
    220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234,
    235, 236, 237, 238, 239, 240, 241, 242,
  ],
  litupLighting: [
    243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257,
    258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272,
    273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287,
    288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302,
    303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317,
    318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332,
    333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347,
    348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362,
    363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377,
    378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392,
    393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407,
    408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422,
    423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437,
    438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452,
    453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467,
    468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482,
    483, 484, 485, 486, 487, 488,
  ],
};

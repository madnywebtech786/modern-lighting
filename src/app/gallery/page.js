'use client'
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

export default function page() {
  const galleryItems = [
    {
      id: 1,
      image: "/images/IMG_5678~2.webp",
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

  // --- Popup gallery state ---
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // touch swipe support
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const loadTimeoutRef = useRef(null);

  function openGallery(index) {
    // ensure loader shows until image is loaded
    setIsLoading(true);
    setCurrentIndex(index);
    setIsOpen(true);
  }

  function closeGallery() {
    setIsOpen(false);
    setIsLoading(true);
    if (loadTimeoutRef.current) {
      clearTimeout(loadTimeoutRef.current);
      loadTimeoutRef.current = null;
    }
  }

  function prevImage(e) {
    e?.stopPropagation();
    setIsLoading(true);
    setCurrentIndex((i) => (i - 1 + galleryItems.length) % galleryItems.length);
  }

  function nextImage(e) {
    e?.stopPropagation();
    setIsLoading(true);
    setCurrentIndex((i) => (i + 1) % galleryItems.length);
  }

  // Preload adjacent images to avoid lag
  useEffect(() => {
    if (!isOpen) return;
    const nextIdx = (currentIndex + 1) % galleryItems.length;
    const prevIdx = (currentIndex - 1 + galleryItems.length) % galleryItems.length;

    const imgNext = new window.Image();
    imgNext.src = galleryItems[nextIdx].image;
    const imgPrev = new window.Image();
    imgPrev.src = galleryItems[prevIdx].image;

    return () => {
      imgNext.src = "";
      imgPrev.src = "";
    };
  }, [currentIndex, isOpen]);

  // keyboard support: Esc to close, arrow keys to navigate
  useEffect(() => {
    if (!isOpen) return;
    function onKey(e) {
      if (e.key === "Escape") closeGallery();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  // when index changes set a safety timeout so the loader won't hang forever
  useEffect(() => {
    // clear existing
    if (loadTimeoutRef.current) {
      clearTimeout(loadTimeoutRef.current);
      loadTimeoutRef.current = null;
    }
    // set fallback timeout in case onLoadingComplete doesn't fire (e.g. rare network/browser race)
    loadTimeoutRef.current = setTimeout(() => {
      setIsLoading(false);
      loadTimeoutRef.current = null;
    }, 3000); // 3s fallback

    // show loader immediately (useful for very fast interactions)
    setIsLoading(true);

    return () => {
      if (loadTimeoutRef.current) {
        clearTimeout(loadTimeoutRef.current);
        loadTimeoutRef.current = null;
      }
    };
  }, [currentIndex]);

  // touch handlers for mobile swipe
  function onTouchStart(e) {
    touchStartX.current = e.touches[0].clientX;
  }
  function onTouchMove(e) {
    touchEndX.current = e.touches[0].clientX;
  }
  function onTouchEnd() {
    if (touchStartX.current == null || touchEndX.current == null) return;
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50; // swipe threshold in px
    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        // left swipe -> next
        setIsLoading(true);
        setCurrentIndex((i) => (i + 1) % galleryItems.length);
      } else {
        // right swipe -> prev
        setIsLoading(true);
        setCurrentIndex((i) => (i - 1 + galleryItems.length) % galleryItems.length);
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  }

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
            <div
              className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              onClick={() => openGallery(0)}
            >
              <Image
                width={700}
                height={700}
                src={galleryItems[0].image}
                alt="Modern Lighting"
                className={`w-full ${galleryItems[0].height} object-cover`}
              />
            </div>
            <div
              className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              onClick={() => openGallery(1)}
            >
              <Image
                width={700}
                height={700}
                src={galleryItems[1].image}
                alt="Modern Lighting"
                className={`w-full ${galleryItems[1].height} object-cover`}
              />
            </div>
            <div
              className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              onClick={() => openGallery(2)}
            >
              <Image
                width={700}
                height={700}
                src={galleryItems[2].image}
                alt="Modern Lighting"
                className={`w-full ${galleryItems[2].height} object-cover`}
              />
            </div>

            {/* Row 2 - 1 wide image */}
            <div
              className="md:col-span-2 overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              onClick={() => openGallery(3)}
            >
              <Image
                width={800}
                height={700}
                src={galleryItems[3].image}
                alt="Modern Lighting"
                className={`w-full ${galleryItems[3].height} object-cover`}
              />
            </div>

            {/* Row 3 - 2 images */}
            <div
              className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              onClick={() => openGallery(4)}
            >
              <Image
                width={700}
                height={700}
                src={galleryItems[4].image}
                alt="Modern Lighting"
                className={`w-full ${galleryItems[4].height} object-cover`}
              />
            </div>
            <div
              className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              onClick={() => openGallery(5)}
            >
              <Image
                width={700}
                height={700}
                src={galleryItems[5].image}
                alt="Modern Lighting"
                className={`w-full ${galleryItems[5].height} object-cover`}
              />
            </div>
            <div
              className="md:col-span-2 overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              onClick={() => openGallery(6)}
            >
              <Image
                width={800}
                height={700}
                src={galleryItems[6].image}
                alt="Modern Lighting"
                className={`w-full ${galleryItems[3].height} object-cover`}
              />
            </div>
          </div>

          {/* --- Modal / Lightbox --- */}
          {isOpen && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
              onClick={closeGallery}
            >
              <div
                className="relative max-w-[85vw] max-h-[80vh] md:max-w-[95vw] md:max-h-[95vh] p-2 md:p-0"
                onClick={(e) => e.stopPropagation()}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
                {/* Loader while image loads for smoother UX */}
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin" />
                  </div>
                )}

                {/* Large image (key forces remount so onLoadingComplete fires reliably) */}
                <Image
                  key={galleryItems[currentIndex].image}
                  src={galleryItems[currentIndex].image}
                  alt={`Gallery ${currentIndex + 1}`}
                  width={1200}
                  height={900}
                  loading="eager"
                  onLoadingComplete={() => {
                    setIsLoading(false);
                    if (loadTimeoutRef.current) {
                      clearTimeout(loadTimeoutRef.current);
                      loadTimeoutRef.current = null;
                    }
                  }}
                  className={`transition-opacity duration-300 ease-in-out object-contain rounded ${isLoading ? "opacity-0" : "opacity-100"}`}
                />

                {/* Close button */}
                <button
                  onClick={closeGallery}
                  className="absolute -top-4 -right-4 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow"
                  aria-label="Close gallery"
                >
                  ×
                </button>

                {/* Prev / Next buttons - positioned responsively so they are usable on mobile */}
                <button
                  onClick={prevImage}
                  className="absolute left-2 md:left-[-48px] top-1/2 -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow"
                  aria-label="Previous image"
                >
                  ‹
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 md:right-[-48px] top-1/2 -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow"
                  aria-label="Next image"
                >
                  ›
                </button>

                {/* Counter */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white text-sm">
                  {currentIndex + 1} / {galleryItems.length}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

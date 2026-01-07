import React from "react";
import CatalogsSection from "../components/Sections/CatalogsSection";

export default function page() {
  return (
    <div>
      <div className="flex items-center justify-center py-40 aboutUs text-white">
        <h2 className="text-5xl font-semibold">Catalogs</h2>
      </div>
      <div className="pt-10 px-10 flex flex-col gap-10">
        <p className="text-xl font-bold">
          Click the Brand to see the full collections.
        </p>

        <CatalogsSection />
      </div>
    </div>
  );
}

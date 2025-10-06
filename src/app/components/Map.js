import React from "react";

export default function Map() {
  return (
    <div className="px-4 md:px-8 lg:px-12 2xl:px-20 py-10">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1202.4366189322925!2d-113.97292176108121!3d51.1521311929337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537163dffd58c1fb%3A0x5394ea65dbda7eaa!2s10960%2042%20St%20NE%20unit%20215%2C%20Calgary%2C%20AB%20T3N%202B8%2C%20Canada!5e1!3m2!1sen!2s!4v1759777230929!5m2!1sen!2s"
        width="600"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className="w-full rounded-lg"
      ></iframe>
    </div>
  );
}

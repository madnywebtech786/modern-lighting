import React from "react";

export default function Map() {
  return (
    <div className="px-4 md:px-8 lg:px-12 2xl:px-20 py-10">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2502.636526297528!2d-113.9717076182681!3d51.1520534963579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537163dffd58c1fb%3A0xd14b1bb8f544575c!2s10960%2042%20St%20NE%20%23205%2C%20Calgary%2C%20AB%20T3N%202B8!5e0!3m2!1sen!2sca!4v1760040863684!5m2!1sen!2sca"
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

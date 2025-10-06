import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function InfoTopBar() {
  return (
    <div className="bg-white p-2 w-full flex px-4 md:px-8 lg:px-12 2xl:px-20 items-center">
      <div className="w-1/2 lg:w-7/12 flex gap-3">
        <Image
          src={"/images/logo.svg"}
          width={120}
          height={120}
          alt="modern lighting logo"
        />
        <Image
          src={"/images/new-logo.png"}
          width={500}
          height={50}
          alt="modern lighting text"
        />
      </div>
      <div className="w-1/2 lg:w-4/12 flex flex-col gap-2">
        <div className="flex gap-2 items-center">
          <Phone
            className="bg-primary text-white rounded-full p-1 "
            size={30}
          />
          <Link href={"tel:+14033242525"}>
            <h4 className="font-bold">403-324-2525</h4>
          </Link>
        </div>
        <div className="flex gap-2 items-center">
          <Mail className="bg-primary text-white rounded-full p-1 " size={30} />
          <Link href={"mailto:modernlightingcalgary@gmail.com"}>
            <h4 className="font-bold">modernlightingcalgary@gmail.com</h4>
          </Link>
        </div>
        <div className="flex gap-2 items-center">
          <MapPin
            className="bg-primary text-white rounded-full p-1 "
            size={30}
          />
          <h4 className="font-bold">
            10960 42 St NE unit 215, Calgary, AB T3N 2B8
          </h4>
        </div>
      </div>
      <div className="hidden lg:block lg:w-1/12">
        <div className="flex gap-2">
          <button className="bg-primary p-3 px-4 rounded-md">Contact Us</button>
        </div>
      </div>
    </div>
  );
}

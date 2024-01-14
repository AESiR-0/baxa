import React from "react";
import { CiMail } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";

export default function Contact() {
  return (
    <div
      id="contact"
      className="h-screen gap-28 max-md:gap-10 w-screen bg-inherit flex flex-col justify-center items-center"
    >
      <span className="text-7xl font-bold text-center align-top max-md:text-3xl">
        Let's make the heads
        <br />
        turn to your brand <span className="text-blue-300">.</span>
      </span>
      <div className="text-white w-[35%] h-[3px] bg-white"></div>
      <span className="text-xl font-bold text-center font-jost">Get in Touch: <br /> Dev Badala (Founder & CEO)</span>
      <div className="flex max-md:flex-col gap-20 ">
        <div className="flex max-md:flex-col max-md:gap-0 gap-2 justify-center items-center">
          <CiMail className="h-5 w-5" />
          <Link href={"mailto:dev@creativebaxa.com"}>
            <span>dev@creativebaxa.com</span>
          </Link>
        </div>
        <div className="flex max-md:flex-col gap-2 justify-center items-center">
          <FaPhoneAlt className="h-5 w-5" />
          <span>+91 99749 48721</span>
        </div>
        <div className="flex max-md:flex-col gap-2 justify-center items-center">
          <FaInstagram className="h-5 w-5" />
          <Link href={"https://www.instagram.com/baxacreativeagency"}>
            Baxa Creative Agency
          </Link>
        </div>
      </div>
    </div>
  );
}

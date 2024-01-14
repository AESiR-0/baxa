import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/../public/logo.png";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openNav = () => {
    return (
      <div className="h-fit w-fit top-40 justify-center items-center text-center px-5 py-10 right-5 absolute z-10 text-white bg-gray-900">
        <div className="flex flex-col  gap-10  ">
          <div className="px-5 py-2">
            <Link
              href={""}
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" });
                handleClick();
              }}
              className="text-xl leading-6 "
            >
              Contact
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link
              href={
                "https://www.canva.com/design/DAF5Ie3fVpM/dQYhlPJwpppjoaxUI4M3fw/view#1"
              }
              className="text-xl leading-6 "
            >
              Work
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link
              href=""
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("services")
                  .scrollIntoView({ behavior: "smooth" });
                handleClick();
              }}
              className="text-xl leading-6 "
            >
              Services
            </Link>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="absolute max-md:hidden w-full">
        <nav className="flex nav  -mt-16 justify-between mx-32">
          <div className="logo">
            <Image
              className=" hover:cursor-pointer"
              width={220}
              height={400}
              src={Logo}
              alt="Baxa Logo"
            />
          </div>
          <div className="flex items-center">
            <div className="flex gap-20  ">
              <div className="px-5 py-2">
                <Link
                  href={""}
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("contact")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-xl leading-6 "
                >
                  Contact
                </Link>
              </div>
              <div className="px-5 py-2">
                <Link
                  href={
                    "https://www.canva.com/design/DAF5Ie3fVpM/dQYhlPJwpppjoaxUI4M3fw/view#1"
                  }
                  className="text-xl leading-6 "
                >
                  Work
                </Link>
              </div>
              <div className="px-5 py-2">
                <Link
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("services")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-xl leading-6 "
                >
                  Services
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <div className="hidden hamburger">
          <div className="logo -ml-16 mt-8">
            <Image
              className=" hover:cursor-pointer"
              width={200}
              height={100}
              src={Logo}
              alt="Baxa Logo"
            />
          </div>
        </div>
      </div>
      <div className="hidden w-full absolute max-md:flex max-md:-mt-10 max-md:justify-between">
        <Image
          className=" hover:cursor-pointer"
          width={300}
          height={300}
          src={Logo}
          alt="Bax
            a Logo"
        />

        <button onClick={handleClick} className="">
          <svg 
            className="w-10 h-fit text-white fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <title>Menu</title>
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M4 18h16v-2H4v2zm0-5h16v-2H4v2zm0-7v2h16V6H4z" />
          </svg>
        </button>
        <div>{isMenuOpen ? openNav() : null}</div>
      </div>
    </>
  );
}

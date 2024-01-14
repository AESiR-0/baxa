import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ScrollingCard from "./scrollingCard";
import Link from "next/link";

function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
      const pin = gsap.fromTo(
        sectionRef.current,
        {
          translateX: 0,
        },
        {
          translateX: "-300vw",
          ease: "none",
          duration: 1,
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "2000 top",
            scrub: 0.6,
            pin: true,
          },
        }
      );
    
    return () => {
      {
        /* A return function for killing the animation on component unmount */
      }
      pin.kill();
    };
  }, []);

  return (
    <section id="services" className="scroll-section-outer max-md:hidden">
      <h1 className=" text-center mt-20 -mb-20 text-5xl font-jost font-bold">
        Our Services
      </h1>
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          <div className="scroll-section pl-20">
            <ScrollingCard
              number="01"
              image="./baxa (event curation).JPG"
              title="event curation & management"
              text="Our exceptional event management team ensures a smooth execution of events from start to finish, guaranteeing the success of your event with care and precision"
            />
          </div>
          <div className="scroll-section">
            <ScrollingCard
              number="02"
              image="./jubin.jpg"
              title="Web Development"
              text="Our expertise extends to Web-development as well, which helps elevate your online presence effortlessly through a seamless, user-friendly and engaging interface.."
            />
          </div>
          <div className="scroll-section">
            <ScrollingCard
              number="03"
              image="./photoshoot reactive.jpg"
              title="Content & IP Creation"
              text="Content creation is our acumen.We craft distinctive IPs for your brand, creating an unforgettable and highly-recallable brand image."
            />
          </div>
          <div className="scroll-section">
            <ScrollingCard
              number="04"
              image="./parandish (smm).jpeg"
              title="Social media management"
              text="We specialize in strategic social media management to have brands grow digitally and create a compelling online presence."
            />
          </div>
          <div className="scroll-section">
            <ScrollingCard
              number="05"
              image="./photoshoot reactive.jpg"
              title="Branding & Offline Activations"
              text="We excel in offline activations, which helps build a personal connection with the audience beyond screens, and creating an impactful experience for the crowd."
            />
          </div>
          <div  className="flex flex-col gap-10 text-2xl font-jost font-bold justify-center h-screen w-screen items-center ">
            <Link href={"https://www.canva.com/design/DAF5Ie3fVpM/dQYhlPJwpppjoaxUI4M3fw/view#1"}>
            <svg className="h-20 rounded-[50%] font-jost text-lg bg-white text-black w-20 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
            </Link>
            <span> Our work </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;

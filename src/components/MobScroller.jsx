import React from "react";
import ScrollingCard from "./scrollingCard";

export default function MobScroller() {
  return (
    <section id="services" className="max-md:block max-md:px-20 h-full w-full hidden">
      <h1 className=" text-center  text-5xl font-jost font-bold">
        Our Services
      </h1>
      <div>
        <div className="flex flex-col items-center ">
          
            <ScrollingCard
              number="01"
              image="./baxa (event curation).JPG"
              title="event curation & management"
              text="Our exceptional event management team ensures a smooth execution of events from start to finish, guaranteeing the success of your event with care and precision"
            />
          </div>
          <div className="flex flex-col items-center ">
            <ScrollingCard
              number="02"
              image="./jubin.jpg"
              title="Web Development"
              text="Our expertise extends to Web-development as well, which helps elevate your online presence effortlessly through a seamless, user-friendly and engaging interface.."
            />
          </div>
          <div className="flex flex-col items-center ">
            <ScrollingCard
              number="03"
              image="./photoshoot reactive.jpg"
              title="Content & IP Creation"
              text="Content creation is our acumen.We craft distinctive IPs for your brand, creating an unforgettable and highly-recallable brand image."
            />
          </div>
          <div className="flex flex-col items-center ">
            <ScrollingCard
              number="04"
              image="./parandish (smm).jpeg"
              title="Social media management"
              text="We specialize in strategic social media management to have brands grow digitally and create a compelling online presence."
            />
          </div>
          <div className="flex flex-col items-center ">
            <ScrollingCard
              number="05"
              image="./photoshoot reactive.jpg"
              title="Branding & Offline Activations"
              text="We excel in offline activations, which helps build a personal connection with the audience beyond screens, and creating an impactful experience for the crowd."
            />
          </div>
        </div>
      
    </section>
  );
}

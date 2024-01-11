import React from "react";
import { useEffect } from "react";
import Image from "next/image";
export default function Hero() {
  const variText = [
    "Photo shoot",
    "Event Management",
    "IP Creation",
    "Web Development",
    "Content Creation",
    "Offline Activations",
    "Event Curation",
  ];

  const changeText = () => {
    const words = document.getElementById("words1");
    words.innerHTML = "";
    words.appendChild(document.createTextNode("Photo shoot"));
    let i = 0;
    setInterval(() => {
      if (i >= variText.length) {
        i = 0;
      }
      const words = document.getElementById("words1");
      words.innerHTML = "";
      words.innerHTML = variText[i];
      i += 1;
    }, 2000);
  };

  useEffect(() => {
    changeText();
  }, []);

  return (
    <section className="h-screen flex items-center justify-center max-md:items-center max-md:justify-center ">
      <div className="hero text-7xl max-md:text-4xl font-jost uppercase text-center ">
        <span className="font-bold">Baxa is a </span>
        <span className="italic"> Creative Agency </span> <br />
        <span className="font-bold">
          Driven To <br /> Provide{" "}
        </span>{" "}
        <span className="font-light italic">
          {" "}
          Effective <br /> Solutions{" "}
        </span>
        <span className="font-bold">
          for <br />{" "}
        </span>{" "}
        <span id="words1" className="font-black"></span><span className="text-blue-300 font-jost font-bold">.</span>
      </div>
    </section>
  );
}

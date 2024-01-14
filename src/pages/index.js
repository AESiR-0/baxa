import Nav from "@/components/nav";
import gsap from "gsap";
import Hero from "@/components/hero";
import Contact from "@/components/contact";
import Cursor from "@/components/cursor";
import ScrollSection from "@/components/scroller";
import MobScroller from "@/components/MobScroller";
import Head from "next/head";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title> Home </title>
        <link rel="icon" type="image/x-icon" href="/baxa logo.png" />
        <meta
          name="description"
          content="BAXA IS A CREATIVE AGENCY DRIVEN TO PROVIDE EFFECTIVE SOLUTIONS FOR WEB DEVELOPMENT. EVENT CURATION & MANAGEMENT. CONTENT CREATION. PHOTOGRAPHY & VIDEOGRAPHY. OFFLINE ACTIVATIONS. IP CREATION.
          Our exceptional event management team ensures a smooth execution of events from start to finish, guaranteeing the success of your event with care and precision. Our expertise extends to Web-development as well, which helps elevate your online presence effortlessly through a seamless, user-friendly and engaging interface."
        />
      </Head>
      <Cursor />
      <Nav />
      <Hero />
      <ScrollSection />
      <MobScroller />
      <Contact />
      <Footer />
    </div>
  );
}

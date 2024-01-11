import Nav from "@/components/nav";
import gsap from "gsap";
import Hero from "@/components/hero";
import Contact from "@/components/contact";
import Cursor from "@/components/cursor";
import ScrollSection from "@/components/scroller";
import MobScroller from "@/components/mobScroller";
import Head from "next/head";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Cursor />
      <Nav />
      <Hero />
      <ScrollSection />
      <MobScroller/>
      <Contact />
      <Footer />
    </div>
  );
}

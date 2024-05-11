import React from "react"; // Import React
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Video } from "@/components/shared/videobg";
import { BackgroundBoxes } from "@/components/shared/bento";
import BackgroundBeams from "@/components/ui/background-beams";
import Courses from "../courses/page";
import About from "../about/page";
import Reviews from "../reviews/page";
import { products } from "@/constants";
import { HeroParallax } from "@/components/ui/hero-parallax";


const Hero = () => {
  return (
    <>
      <section className="flex flex-col sm:flex-row justify-center mt-3 sm:mt-20 pb-20">
        <HeroParallax products={products}/>
      </section>
      <Video />
      <Courses />
      <About />
      <Reviews />
      <BackgroundBoxes />
      {/* <BackgroundBeams /> */}
    </>
  );
};

export default Hero;

import React from "react";
import { Boxes } from "../ui/background-boxes";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import Image from "next/image";

export function BackgroundBoxes ()  {
  return (
    <div className="min-h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center pb-20 select-none">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <div className="w-full z-40 flex flex-col lg:flex-row px-5 md:20 md: gap-4 justify-center">
        <div className=" lg:w-[600px] w-full h-[50vh] rounded-2xl flex justify-center items-center p-3">
        <Image src="/assets/grid5.jpg"  height={300} width={570} alt="photo" className="z-50 rounded-2xl object-cover z-10 shadow-lg hover:shadow-xl hover:shadow-black shadow-black transition duration-2000"/>
        </div>

        <div className=" lg:w-[350px] w-full h-[50vh] rounded-2xl flex justify-center items-center p-3">
        <Image src="/assets/grid3.jpg"  height={500} width={600} alt="photo" className="z-50 rounded-2xl object-cover z-10 shadow-lg hover:shadow-xl  hover:shadow-black shadow-black transition duration-2000"/>
        </div>
        
      </div>
      <div className="w-full z-40 flex flex-col lg:flex-row px-5 md:20 md: gap-4 mt-5 justify-center">
        <div className=" lg:w-1/4 w-full h-[50vh] rounded-2xl flex justify-center items-center">
        <div className=" lg:w-[350px] w-full h-[50vh] rounded-2xl flex justify-center items-center p-3 ">
        <Image src="/assets/hero2.jpg"  height={500} width={600} alt="photo" className="z-50 rounded-2xl object-cover z-10 shadow-lg hover:shadow-xl  hover:shadow-black shadow-black transition duration-2000"/>
        </div>
        </div>
        <div className="lg:w-[600px] w-full h-[50vh] rounded-2xl flex justify-center items-center p-3">
        <Image src="/assets/grid-main.jpg"  height={300} width={570} alt="photo" className="z-50 rounded-2xl object-cover z-10 shadow-lg hover:shadow-xl  hover:shadow-black shadow-black transition duration-2000"/>
        </div>
      </div>
    </div>
  );
}



"use client";
import React from "react";
import { Spotlight } from "../ui/Spotlight";
// import { BackgroundBeams } from "@/components/ui/background-beams";

export function Video() {
  return (
    <div className="h-[40rem] w-full lg:-mt-80 -mt-[700px] sm:-mt-[1500px] rounded-md bg-transparent relative flex flex-col items-center justify-center antialiased">
            {/* <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white"/> */}
      <div className="flex justify-center w-full mx-auto p-4 ">
      <video controls autoPlay loop className="rounded-2xl shadow-2xl shadow-blue-400 hover:shadow-blue-500 hover:shadow-xl transition duration-2000 z-10" height={460} width={880}>
        <source src="/assets/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>
      {/* <BackgroundBeams /> */}
    </div>
  );
}

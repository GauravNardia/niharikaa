import { cn } from "@/lib/utils";
import React from "react";
import { Courselink } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { Meteors } from "@/components/ui/meteors";

const Courses = () => {
  return (
    <>
      <div className="w-full flex justify-center font-semibold text-4xl sm:text-6xl text-slate-600 select-none mt-10">Courses</div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 pb-10 select-none">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Courselink.map((course, i) => (
            <Link href={course.url || "/default-path"} key={i}>
              <div className="cursor-pointer block transform hover:scale-105 transition duration-300 h-full">
                <div className="row-span-1 rounded-xl group hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent flex flex-col space-y-4">
                <img key={course.url} src={`/${course.img}`} height={50} alt="Course Image" className="rounded-xl object-cover"/>
                  <div className="font-sans font-bold text-xl text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
                    {course.title}
                  </div>
                  <div className="font-sans font-normal text-2 text-neutral-600 text-xs dark:text-neutral-300">
                    {course.description}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}


export default Courses
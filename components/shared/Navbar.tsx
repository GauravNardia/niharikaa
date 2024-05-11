"use client"
import React from 'react'
import {navbarLinks} from "@/constants/index"
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
   SheetClose,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from 'next/image';
import { usePathname } from 'next/navigation';

  


const Navbar = () => {
    const pathname = usePathname();
    return (
        <>
        <section className='flex justify-center z-10 hidden lg:flex h-[3rem] select-none mt-2 '>
            <div className='m-5 z-40 w-3/12'>
                <Link href='/' ><h2 className='font-bold flex w-full cursor-pointer text-2xl'>Niharikaa Sodhi</h2></Link>
            </div>
          <div className='flex w-full justify-center gap-6 px-6 m-5 z-40'>
            {navbarLinks.map((link) => {
              const isActive =(pathname.includes(link.route) && link.route.length > 1) ||
              pathname === link.route;
              return(
                <Link
                  href={link.route}
                  key={link.label }
                >
                  <p className={`flex item-center justify-center w-full text-gray-500 ${isActive && "text-violet-700 z-50"}`}>{link.label}</p>
                </Link>
              )
})}
          </div>

          <div className='m-5 z-40'>
                <Link href='https://topmate.io/nks/106479' className='font-extrabold text-white z-40'>
            <Button className='bg-violet-700 hover:bg-violet-500'>
                Let's Talk
            </Button>
                </Link>
          </div>
    
        </section>
          <section className='h-[3rem]'>
        <div className='flex w-full justify-end lg:hidden'>
            <div className='flex flex-start w-full m-5'>
             <Link href='/' >
                <h1 className='font-bold flex flex-start w-full cursor-pointer text-2xl'>
                    Niharikaa Sodhi
                </h1>
             </Link>
            </div>
           
          <Sheet>
            <SheetTrigger className='p-5 z-40 '><Image src="assets\menu.svg" height={30} width={30} alt='menu' /></SheetTrigger>
          
            <SheetContent className='bg-gray-300 pt-20'>
                  <div className=' flex flex-col w-full justify-center item-center gap-6 px-6 m-5 text-center mt-10'>
            {navbarLinks.map((link) => {  
                 const isActive =   (pathname.includes(link.route) && link.route.length > 1) ||
                 pathname === link.route;
                    return(
                <SheetClose asChild>
                <Link
                  href={link.route}
                  key={link.route}
                >
                  <p className={`text-xl text-gray-500 ${isActive && "text-violet-700"}`}>{link.label}</p>
                </Link>
            </SheetClose>
                    )
})}
          </div>
          
          <div className='m-5 w-full flex justify-center item-center  '>
                <Link href='https://topmate.io/nks/106479' className='font-extrabold text-white'>
            <Button className=' text-xl bg-violet-700 hover:bg-violet-500 px-10 py-6'>
                Let's Talk
            </Button>
                </Link>
          </div>
            </SheetContent>
           
          </Sheet>
           
        </div>
        </section>
        </>

      );
}

export default Navbar
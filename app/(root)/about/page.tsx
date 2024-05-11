
import Image from 'next/image';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <>
      <div className="w-full flex justify-center font-semibold text-4xl sm:text-6xl text-slate-600 select-none mt-10">Who is Niharikaa</div>
    <section className='mt-[100px] mb-[100px] px-10'>
    <div className="">
    <Dialog>
      <DialogTrigger asChild>
 
        <div className="lg:w-2/4 w-full md:flex-row md:h-80 h-[25rem] rounded-xl flex flex-col sm:flex-row mt-5 bg-white shadow-lg hover:shadow-xl transition duration-2000">
            <div className="md:w-1/2 flex justify-center items-center mt-5 md:mt-0">
                <Image className="rounded-2xl" src="/assets/grid3.jpg" alt="Profile" height={355} width={200} />
              </div>
              <div className="md:w-2/3 flex flex-col justify-center p-5 hover:cursor-pointer">
              <div className="mb-5">
                  <DialogTitle className="sm:text-4xl text-xl text-center mb-2 sm:mb-0 text-slate-600">About Niharikaa</DialogTitle>
                  <DialogDescription className="text-center sm:text-3xl text-xl">Learn more about me</DialogDescription>
                </div>
                </div>
                </div>
                
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px] sm:h-30 max-w-[400px] rounded-2xl ">
            <DialogHeader>
              <DialogTitle className='sm:text-3xl text-xl text-center mb-5 text-gray-500'>Niharikaa sodhi</DialogTitle>
              <DialogDescription className='mt-5'>
                <div className='w-full flex justify-center'>
                  <div className='w-[120px] h-[120px] lg:w-[170px] lg:h-[160px] sm:h-[110px] sm:h-[100px] rounded-full'>
                  <Image className="inline-block lg:h-[160px] lg:w-[160px] h-[120px] w-[120px] rounded-2xl ring-2 ring-white" src="/assets/grid1.jpg" alt="Profile" width={160} height={160} />
                  </div>
                </div>
                <p className='lg:text-xl text-center  text-lg mt-5 px-5'>
                I'm a writer. And with that, I also became an educator and entrepreneur.
             And I strongly believe that there's enough wealth we can all create if we play by the mindset of abundance and not scarcity.
             We have a duty to be of service to other people. And we only have one chance at life to tap into our potential and unleash it.
             So I quit my job in 2021 to write full time.
As a writer, my purpose is to leave everyone healthier and happier. 
As an educator and entrepreneur, I want to help other creators level up their game and solve their problems.
I'm passionate about healthy living, reading, and mindfulness. I've also travelled to 24 countries and still have fear of flying.

                </p>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
    </Dialog>
    </div>
   
    </section>
    </>
  );
};

export default About;
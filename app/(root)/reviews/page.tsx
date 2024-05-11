import React, { useEffect, useState } from "react";
import InfiniteMoving  from "@/components/ui/infinite-moving-cards";
import BackgroundBeams from "@/components/ui/background-beams";
import { Meteors } from "@/components/ui/meteors";
import { BackgroundBoxes } from "@/components/shared/bento";



const Reviews = () => {
  const testimonials = [
    {
      quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
    },
    {
      quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: "William Shakespeare",
      title: "Hamlet",
    },
    {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
    },
    {
      quote:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      name: "Jane Austen",
      title: "Pride and Prejudice",
    },
    {
      quote:
        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      name: "Herman Melville",
      title: "Moby-Dick",
    },
  ];

  return (
    <>
    <div className="h-[90vh] rounded-t-2xl flex flex-col antialiased bg-gray-900 dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden select-none mt-10">
            <div className="w-full flex justify-center font-semibold text-4xl sm:text-6xl text-white -mt-20">Reviews</div>
      <InfiniteMoving
        items={testimonials}
        direction="left"
        speed="normal"
      />
      <BackgroundBeams />
   

    </div>
    </>
    
  );
}

export default Reviews;

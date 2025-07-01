"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export const TestimonialsSection = () => {
  const test1 = [
    {
      quote: "This tool saved me countless hours every week!",
      name: "Monty",
      title: "Product Manager, PixelTech",
    },
    {
      quote: "I never imagined AI integration could be this seamless.",
      name: "R. Malhotra",
      title: "Developer Advocate, CodeHive",
    },
    {
      quote: "Truly a game-changer for our content pipeline.",
      name: "S. Tanveer",
      title: "Head of Content, WriteWise",
    },
    {
      quote: "The UI is clean and the performance is unmatched.",
      name: "D. Kim",
      title: "Frontend Engineer, ByteFlow",
    },
    {
      quote: "Super intuitive and reliable. My go-to AI suite.",
      name: "E. Gomez",
      title: "Freelance Designer",
    },
  ];

  const test2 = [
    {
      quote: "Reliable, fast, and simple — what more could you ask for?",
      name: "J. Singh",
      title: "CTO, NovaApps",
    },
    {
      quote: "Helped my team go from idea to prototype in hours.",
      name: "L. Zhao",
      title: "Innovation Lead, SparkSoft",
    },
    {
      quote: "AI writing never felt this human and accurate.",
      name: "F. Rivera",
      title: "Tech Blogger",
    },
    {
      quote: "It just works. That’s what I love about it.",
      name: "T. Ali",
      title: "Startup Founder",
    },
    {
      quote: "One of the most polished AI tools I’ve used this year.",
      name: "K. Müller",
      title: "AI Consultant, BrightMind",
    },
  ];

  const test3 = [
    {
      quote: "Our documentation is 3x faster to produce now.",
      name: "N. Bose",
      title: "Technical Writer, StackPoint",
    },
    {
      quote: "Incredible support and blazing fast outputs.",
      name: "O. Bennett",
      title: "Solutions Architect, CoreWare",
    },
    {
      quote: "Clients love the speed and quality of our new content.",
      name: "H. Patel",
      title: "Agency Owner, CopyNest",
    },
    {
      quote: "Finally, an AI tool that designers and devs both love.",
      name: "A. Nguyen",
      title: "UI Engineer, ColorPixel",
    },
    {
      quote: "Cut my video script prep time in half.",
      name: "C. Laurent",
      title: "YouTube Creator",
    },
  ];

  return (
    <section className="w-full py-20 bg-black">
      <h2 className="text-center text-4xl font-bold text-white mb-10">
        What People Are Saying
      </h2>
      <InfiniteMovingCards
        items={test1}
        direction="left"
        speed="normal"
        pauseOnHover={true}
        className="dark:bg-black"
      />
      <InfiniteMovingCards
        items={test2}
        direction="right"
        speed="normal"
        pauseOnHover={true}
        className="dark:bg-black"
      />
      <InfiniteMovingCards
        items={test3}
        direction="left"
        speed="normal"
        pauseOnHover={true}
        className="dark:bg-black"
      />
    </section>
  );
};

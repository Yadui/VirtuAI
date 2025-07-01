"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import "../../app/globals.css";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <section className="w-full min-h-screen flex justify-center pb-5 pt-5">
      {/* 👈 Push it down below navbar */}
      <div className="relative w-full max-w-[1400px] bg-[url('/gradient-hero-prerender.jpeg')] bg-cover bg-center min-h-[500px] rounded-xl flex items-center justify-center text-white shadow-xl">
        <div className="max-w-6xl w-full px-6 text-center space-y-8">
          <h1 className="sm:text-7xl md:text-6xl lg:text-9xl font-extrabold">
            The AI Tool for
          </h1>
          <div className="lg:text-5xl sm:text-3xl md:text-4xl font-bold">
            <TypewriterComponent
              options={{
                strings: [
                  "Chatbot.",
                  "Photo Generation.",
                  "Code Writing.",
                  "Video Generation.",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <p className="text-lg md:text-xl font-light text-white">
            Create content faster using AI.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/sign-up">
              <Button className="text-lg px-6 py-3 rounded-xl bg-black text-white hover:bg-zinc-900 transition">
                Try it now
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

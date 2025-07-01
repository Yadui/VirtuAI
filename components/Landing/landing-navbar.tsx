"use client";

import { Montserrat } from "next/font/google";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const font = Montserrat({ weight: "600", subsets: ["latin"] });

export const LandingNavbar = () => {
  const { isSignedIn } = useAuth();

  return (
    <nav className="fixed top-7 translate-x-3 z-50 w-[95%] max-w-[1260px] px-3 p-3 bg-black rounded-2xl shadow-lg flex items-center justify-between">
      {/* Logo */}
      <Link href="/" className="flex items-center px-3">
        <h1 className={cn("text-2xl font-bold text-white", font.className)}>
          VirtuAI
        </h1>
      </Link>

      {/* Buttons */}
      <div className="flex items-center gap-3">
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant="secondary" className="rounded-xl">
            Get Started
          </Button>
        </Link>
        <Link href="/login">
          <Button variant="secondary" className="rounded-xl">
            Login
          </Button>
        </Link>
      </div>
    </nav>
  );
};

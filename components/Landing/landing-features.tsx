"use client";

import { useState } from "react";
import Image from "next/image";

const images = [
  { src: "/showcase/showcase1.png", alt: "Project 1" },
  { src: "/showcase/showcase2.png", alt: "Project 2" },
  { src: "/showcase/showcase3.png", alt: "Project 3" },
];

export const ShowcaseSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="bg-zinc-900 rounded-xl py-16 px-6 relative">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
          Features
        </h2>

        <div className="grid grid-rows-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {images.map((img, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(img.src)}
              className="cursor-pointer bg-zinc-800 p-4 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={500}
                height={300}
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center"
        >
          <div className="max-w-4xl w-full p-4">
            <Image
              src={selectedImage}
              alt="Enlarged"
              width={1200}
              height={800}
              className="rounded-xl shadow-2xl mx-auto"
            />
          </div>
        </div>
      )}
    </section>
  );
};

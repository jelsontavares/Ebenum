"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Target } from "framer-motion";


const images = [
  "https://images.unsplash.com/photo-1532194579966-1455bade30d6?q=80&w=1964&auto=format&fit=crop",
  "https://plus.unsplash.com/premium_photo-1680799221420-5baff79e4b6a?q=80&w=1976&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1532194579966-1455bade30d6?q=80&w=1964&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1532194579966-1455bade30d6?q=80&w=1964&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1532194579966-1455bade30d6?q=80&w=1964&auto=format&fit=crop",
];

const positions = ["center", "left1", "left", "right", "right1"] as const;

const imageVariants: Record<typeof positions[number], Target> = {
    center: { x: "0%", scale: 1.1, zIndex: 5, opacity: 1 },
    left1: { x: "-120%", scale: 0.7, zIndex: 2, opacity: 0.5 },     // antes -60%
    left: { x: "-160%", scale: 0.5, zIndex: 1, opacity: 0 },       // antes -120%
    right: { x: "160%", scale: 0.5, zIndex: 1, opacity: 0 },       // antes 120%
    right1: { x: "120%", scale: 0.7, zIndex: 2, opacity: 0.5 },     // antes 60%
  };
export default function Carousel() {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

  const handleNext = () => {
    setPositionIndexes((prev) => prev.map((i) => (i + 1) % 5));
  };

  const handleBack = () => {
    setPositionIndexes((prev) => prev.map((i) => (i - 1 + 5) % 5));
  };

  return (
      <section className="relative flex flex-col items-center justify-center min-h-screen  px-6 py-24 overflow-hidden text-white">
          <h2 className="text-4xl font-serif text-[#AC8E5C] mb-20">Selling experiences, not products</h2>
          <div className="relative w-full max-w-5xl h-[400px] flex items-center justify-center">
              {/* Setas laterais */}
            <button
            onClick={handleBack}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white text-black w-10 h-10 rounded-full shadow hover:scale-110 transition"
            >
            ←
            </button>
            <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white text-black w-10 h-10 rounded-full shadow hover:scale-110 transition"
            >
            →
            </button>
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="absolute"
            initial={false}
            animate={positions[positionIndexes[index]]}
            variants={imageVariants}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <div
              className={`relative w-[250px] h-[350px] rounded-xl overflow-hidden shadow-2xl ${
                positions[positionIndexes[index]] === "center"
                  ? "ring-4 ring-white"
                  : ""
              }`}
            >
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                fill
                sizes="250px"
                className="object-cover"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Linha decorativa */}
      <div className="mt-16 h-[4px] w-3/4 bg-gradient-to-r from-[#ac8e5c] via-white to-[#ac8e5c] rounded-full" />
    </section>
  );
}

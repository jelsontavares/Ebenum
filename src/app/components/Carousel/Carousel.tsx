"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "/images/carousel/1.png",
  "/images/carousel/2.png",
  "/images/carousel/3.png",
  "/images/carousel/3.1.png",
  "/images/carousel/4.png",
  "/images/carousel/5.png",
  "/images/carousel/6.png",
  "/images/carousel/7.jpeg",
  "/images/carousel/8.jpeg",
  "/images/carousel/9.png",
  "/images/carousel/10.jpeg",
  "/images/carousel/11.jpeg",
  "/images/carousel/12.jpeg",
  "/images/carousel/13.jpeg",
  "/images/carousel/14.jpeg",
  "/images/carousel/15.jpeg",
  "/images/carousel/16.jpeg",
  "/images/carousel/17.jpeg",
];

//const positions = ["left", "left1", "center", "right1", "right"] as const;

const imageVariants = {
  left: { x: "-150%", scale: 0.5, zIndex: 1, opacity: 0 },
  left1: { x: "-115%", scale: 0.7, zIndex: 2, opacity: 0.5 },
  center: { x: "0%", scale: 1.1, zIndex: 5, opacity: 1 },
  right1: { x: "115%", scale: 0.7, zIndex: 2, opacity: 0.5 },
  right: { x: "150%", scale: 0.5, zIndex: 1, opacity: 0 },
};

export default function Carousel() {
  const [centerIndex, setCenterIndex] = useState(0);

  const handleNext = () => {
    setCenterIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCenterIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const getPosition = (i: number) => {
    const pos = (i - centerIndex + images.length) % images.length;
    if (pos === 0) return "center";
    if (pos === 1) return "right1";
    if (pos === 2) return "right";
    if (pos === images.length - 1) return "left1";
    if (pos === images.length - 2) return "left";
    return null; // ocultar os outros
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 py-24 overflow-hidden text-white mb-50">
      <h2 className="text-4xl font-serif text-[#AC8E5C] mb-10 text-center">
        Emotion
      </h2>
      <p className="mb-25 text-[#AC8E5C] max-w-sm text-center font-sans">
        People don&apos;t fall in love with products, they fall in love with how it make them feel
      </p>

      <div className="relative w-full max-w-5xl h-[400px] flex items-center justify-center">
        {images.map((src, index) => {
          const pos = getPosition(index);
          if (!pos) return null;

          return (
            <motion.div
              key={index}
              className="absolute cursor-pointer"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(_, info) => {
                if (info.offset.x < -50) handleNext();
                if (info.offset.x > 50) handlePrev();
              }}
              onClick={() => {
                if (pos === "right" || pos === "right1") handleNext();
                if (pos === "left" || pos === "left1") handlePrev();
              }}
              initial={false}
              animate={pos}
              variants={imageVariants}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div
                className={`relative w-[250px] h-[350px] overflow-hidden shadow-2xl ${
                  pos === "center" ? "ring-0 ring-white" : ""
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
          );
        })}
      </div>
    </section>
  );
}

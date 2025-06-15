"use client";

import React from "react";
import { motion } from "framer-motion";

const sensations = [
  { name: "Sight", icon: "/images/Artboard 46.svg", animation: "rotate" },
  { name: "Hearing", icon: "/images/Artboard 48.svg", animation: "pulse" },
  { name: "Smell", icon: "/images/Artboard 50.svg", animation: "vibrate" },
  { name: "Taste", icon: "/images/Asset 26@4x.svg", animation: "zoom" },
  { name: "Touch", icon: "/images/Artboard 51.svg", animation: "wave" },
];

const animationVariants = {
   rotate: {
    animate: {
      rotate: [0, 360],
      scale: [1, 1.05, 1], // movimento de "respiração"
    },
    transition: {
      rotate: { duration: 20, repeat: Infinity, ease: "linear" },
      scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
    },
  },
  pulse: {
    animate: { scale: [1.5, 1.06, 1] },
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
  vibrate: {
    animate: { x: [0, -2, 2, -2, 2, 0] },
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  },
  zoom: {
    animate: { scale: [1, 1.1, 1] },
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  },
  wave: {
    animate: { y: [0, -5, 0, 5, 0] },
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
};

export default function Sensation() {
  return (
    <section className="w-full px-6 py-24 pt-25 text-center max-w-5xl mx-auto">
      <h2 className="text-4xl font-serif text-[#AC8E5C] mb-35 text-right">The Sensations</h2>

       {/* Quote abaixo alinhado à esquerda */}
        <div className="mt-25 text-left text-sm leading-relaxed max-w-md text-white">
          <p className="mb-4 font-semibold">
            The product or service is only part of the delivery. <br/> What truly captivates and builds loyalty is the sensory journey
          </p>
          <p className="font-light">
             We elevate all five senses of your brand, <br/> so your clients don&apos;t just see it, they feel its essence in every detail.
          </p>
        </div>

      <div className=" mt-75 flex flex-col  items-center gap-16 ">
        {sensations.map((item, i) => {
          const motionProps = animationVariants[item.animation as keyof typeof animationVariants];
          return (
            <div key={i} className="flex flex-col items-center gap-4">
              <span className="text-[#AC8E5C] text-sm">{item.name}</span>
              <div className="w-100 md:h-100 rounded-full flex items-center justify-center">
                <motion.div {...motionProps}>
                  <img
                    src={item.icon}
                    alt={item.name}
                    width={400}
                    height={400}
                    className="w-full h-full "
                  />
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

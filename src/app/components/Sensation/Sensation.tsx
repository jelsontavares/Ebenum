"use client";

import React from "react";

const sensations = [
  { name: "Smell", video: "/videos/smell.mp4" },
  { name: "Taste", video: "/videos/taste.mp4" },
  { name: "Touch", video: "/videos/touch.mp4" },
  { name: "Sight", video: "/videos/sight.mp4" },
  { name: "Sound", video: "/videos/sound.mp4" },
];

export default function Sensation() {
  return (
    <section className="w-full px-6 py-24 text-center">
      <h2 className="text-4xl font-serif text-[#AC8E5C] mb-20">The Sensations</h2>

      <div className="flex flex-col items-center gap-16">
        {sensations.map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-4">
            <div className="w-40 h-40 rounded-full overflow-hidden bg-[#3e2b1d]/60 backdrop-blur-lg flex items-center justify-center shadow-lg">
              <video
                src={item.video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-[#ebe9e2] text-sm">{item.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

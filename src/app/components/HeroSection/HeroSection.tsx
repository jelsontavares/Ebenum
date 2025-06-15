import React from "react";

export default function HeroSection() {
  return (
    <section className="w-full pt-100 pb-20 px-6">
      <div className="max-w-5xl mx-auto text-center text-[#ebe9e2]">
        {/* Headline */}
        <h1 className="text-xl md:text-6xl leading-tight md:leading-[1.2]  font-serif">
          New luxury lives in <br />
          sensory experiences
        </h1>

        {/* Quote abaixo alinhado à esquerda */}
        <div className="mt-125 text-left text-sm leading-relaxed max-w-sm font-sans">
          <p className="mb-4 font-light">
            “From the invention of the wheel to the present day, every creation shares a common desire: to awaken sensation. <br/>The wheel gave us freedom.”
          </p>
          <p className="font-semibold">
            And your brand, what does it awaken in those who experience it?
          </p>
        </div>
      </div>
    </section>
  );
}

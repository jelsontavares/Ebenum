import React from "react";

export default function HeroSection() {
  return (
    <section className="w-full pt-100 pb-20 px-6">
      <div className="max-w-6xl mx-auto text-center text-[#ebe9e2]">
        {/* Headline */}
        <h1 className="text-4xl md:text-6xl leading-tight md:leading-[1.2]  font-serif ">
          O novo luxo está <br />
          nas experiencias sensoriais
        </h1>

        {/* Quote abaixo alinhado à esquerda */}
        <div className="mt-100 text-left text-sm leading-relaxed max-w-md">
          <p className="mb-4 font-light">
            “Desde a invenção da roda até os dias atuais, nossas criações buscam
            proporcionar novas sensações — no caso da roda, a sensação de liberdade.”
          </p>
          <p className="font-semibold">
            E qual será as sensações que a sua marca proporciona?
          </p>
        </div>
      </div>
    </section>
  );
}

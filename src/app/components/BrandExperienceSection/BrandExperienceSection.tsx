"use client";

export default function BrandExperienceSection() {
  return (
    <section className="relative w-full">
      {/* Vídeo de fundo */}
      <div className="relative max-w-4xl h-[70vh] overflow-hidden mx-auto">
        <video
          className="object-cover w-full h-full"
          src="/video.mp4" // Altere aqui para o caminho correto
          autoPlay
          muted
          loop
          playsInline
        />
        {/* Overlay escuro para leitura */}
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>

      {/* Texto abaixo com fundo gradiente */}
      <div className=" py-20 px-6 text-white text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Now your brand not only exists
        </h2>
        <p className="max-w-3xl mx-auto text-sm md:text-base leading-relaxed text-gray-300">
            It invites. It starts a ritual. It creates belonging. Now it&apos;s an experience
            that the customer won&apos;t forget, because it touched all the senses and one more: emotion.
        </p>
      </div>
    </section>
  );
}

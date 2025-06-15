"use client";

export default function BrandExperienceSection() {
  return (
    <section className="relative w-full">
      {/* Vídeo de fundo */}
      <div className="relative max-w-6xl aspect-video  overflow-hidden mx-auto">
  <iframe
    className="w-full h-full"
    src="https://www.youtube.com/embed/qdewRYB0t-U?autoplay=1&mute=1&loop=1&playlist=qdewRYB0t-U&controls=0&modestbranding=1&showinfo=0"
    title="Brand Experience"
    allow="autoplay; fullscreen"
    allowFullScreen
  />
</div>

      {/* Texto abaixo com fundo gradiente */}
      <div className=" py-20 px-6 text-white text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 font-serif">
            Now, your brand not only exists
        </h2>
        <p className="max-w-xl mx-auto text-sm md:text-base leading-relaxed text-gray-300 font-sans">
            It invites. It starts a ritual. It creates belonging. Now it&apos;s an experience
            that the customer won&apos;t forget, because it touched all the senses and one more: emotion.
        </p>
      </div>
    </section>
  );
}

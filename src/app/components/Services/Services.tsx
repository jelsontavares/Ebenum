import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  export default function Services() {
    return (
      <section className="w-full px-6 py-20 mb-100">
        <h2 className="text-4xl font-serif text-[#AC8E5C] my-120 text-center font-semibold">
            To begin the journey
          </h2>
        <div className="max-w-screen-md mx-auto text-center text-[#ebe9e2]">
          {/* Section Title */}
          <h2 className="text-4xl font-serif text-white mb-10">
            Services
          </h2>
  
          {/* Accordion List */}
          <Accordion type="single" collapsible className="space-y-4 text-left">
            <AccordionItem value="item-1">
              <AccordionTrigger className="bg-[#3e2b1d] px-4 py-3 text-[#ebe9e2]">
                Sensorial Branding
              </AccordionTrigger>
              <AccordionContent className="bg-[#2e1f16] px-4 py-4 text-sm text-[#ebe9e2]">
                We build brands with soul, communicating with authenticity, evoking emotions, and creating memorable presence. From naming to narrative, every element is crafted to engage the senses and foster deep, lasting connections.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-1">
              <AccordionTrigger className="bg-[#3e2b1d] px-4 py-3 text-[#ebe9e2]">
                Promotional Materials
              </AccordionTrigger>
              <AccordionContent className="bg-[#2e1f16] px-4 py-4 text-sm text-[#ebe9e2]">
                Design of graphic pieces, flyers, banners, catalogs, and packaging, that embody the brand’s essence and expand its presence with elegance and visual coherence.
              </AccordionContent>
            </AccordionItem>
  
            <AccordionItem value="item-2">
              <AccordionTrigger className="bg-[#3e2b1d] px-4 py-3 text-[#ebe9e2]">
                UX / UI Design
              </AccordionTrigger>
              <AccordionContent className="bg-[#2e1f16] px-4 py-4 text-sm text-[#ebe9e2]">
                Intuitive, sensorial, and functional digital experiences. From layout to navigation — every detail is designed to move, engage, and convert.
              </AccordionContent>
            </AccordionItem>
  
            <AccordionItem value="item-3">
              <AccordionTrigger className="bg-[#3e2b1d] px-4 py-3 text-[#ebe9e2]">
                Book & Portfolio Design
              </AccordionTrigger>
              <AccordionContent className="bg-[#2e1f16] px-4 py-4 text-sm text-[#ebe9e2]">
                Visual curation and editorial design for portfolios, fashion books, and artistic catalogs, with narrative focus, refined aesthetics, and a strong sense of authorship.
              </AccordionContent>
            </AccordionItem>
  
            <AccordionItem value="item-4">
              <AccordionTrigger className="bg-[#3e2b1d] px-4 py-3 text-[#ebe9e2]">
                Signature Illustration
              </AccordionTrigger>
              <AccordionContent className="bg-[#2e1f16] px-4 py-4 text-sm text-[#ebe9e2]">
                Unique illustrations that convey style, emotion, and purpose. Crafted for editorials, products, social media, or campaigns, with a distinct artistic signature.
              </AccordionContent>
            </AccordionItem>
  
            <AccordionItem value="item-5">
              <AccordionTrigger className="bg-[#3e2b1d] px-4 py-3 text-[#ebe9e2]">
                Technical Prototyping for Physical Products
              </AccordionTrigger>
              <AccordionContent className="bg-[#2e1f16] px-4 py-4 text-sm text-[#ebe9e2]">
                We transform ideas into tangible projects through technical prototyping, detailed 2D drawings, orthographic views, sections, and measurements. An approach that blends artistic sensibility with functional precision, ideal for manual crafting or 3D printing.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    );
  }
  
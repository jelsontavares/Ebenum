import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  export default function Services() {
    return (
      <section className="w-full px-6 py-20 ">
        <div className="max-w-screen-md mx-auto text-center text-[#ebe9e2]">
          {/* Section Title */}
          <h2 className="text-4xl font-serif text-white my-70">
            Services
          </h2>
  
          {/* Accordion List */}
          <Accordion type="single" collapsible className="space-y-4 text-left">
            <AccordionItem value="item-1">
              <AccordionTrigger className="bg-[#3e2b1d] px-4 py-3 text-[#ebe9e2]">
                Visual Identity
              </AccordionTrigger>
              <AccordionContent className="bg-[#2e1f16] px-4 py-4 text-sm text-[#ebe9e2]">
                We create a cohesive visual system that reflects your brand’s personality and values.
              </AccordionContent>
            </AccordionItem>
  
            <AccordionItem value="item-2">
              <AccordionTrigger className="bg-[#3e2b1d] px-4 py-3 text-[#ebe9e2]">
                Digital Material
              </AccordionTrigger>
              <AccordionContent className="bg-[#2e1f16] px-4 py-4 text-sm text-[#ebe9e2]">
                Branded materials for online platforms: presentations, social assets, and more.
              </AccordionContent>
            </AccordionItem>
  
            <AccordionItem value="item-3">
              <AccordionTrigger className="bg-[#3e2b1d] px-4 py-3 text-[#ebe9e2]">
                Web design, UI/UX
              </AccordionTrigger>
              <AccordionContent className="bg-[#2e1f16] px-4 py-4 text-sm text-[#ebe9e2]">
                Clean, intuitive interfaces that elevate your user experience.
              </AccordionContent>
            </AccordionItem>
  
            <AccordionItem value="item-4">
              <AccordionTrigger className="bg-[#3e2b1d] px-4 py-3 text-[#ebe9e2]">
                Editorial / Book Covers
              </AccordionTrigger>
              <AccordionContent className="bg-[#2e1f16] px-4 py-4 text-sm text-[#ebe9e2]">
                Elegant layouts and cover designs that enhance editorial content.
              </AccordionContent>
            </AccordionItem>
  
            <AccordionItem value="item-5">
              <AccordionTrigger className="bg-[#3e2b1d] px-4 py-3 text-[#ebe9e2]">
                Visual Illustration
              </AccordionTrigger>
              <AccordionContent className="bg-[#2e1f16] px-4 py-4 text-sm text-[#ebe9e2]">
                Bespoke illustrations that bring clarity and beauty to your brand.
              </AccordionContent>
            </AccordionItem>
  
            <AccordionItem value="item-6">
              <AccordionTrigger className="bg-[#3e2b1d] px-4 py-3 text-[#ebe9e2]">
                Product Prototyping
              </AccordionTrigger>
              <AccordionContent className="bg-[#2e1f16] px-4 py-4 text-sm text-[#ebe9e2]">
                Interactive prototypes to visualize and test your digital product ideas.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    );
  }
  
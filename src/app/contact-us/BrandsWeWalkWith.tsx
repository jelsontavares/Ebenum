'use client'

import { motion } from 'framer-motion'

const FlowerIcon = () => (
  <svg
    className="w-4 h-4 inline-block mr-2"
    viewBox="0 0 24 24"
    fill="#AC8E5C"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2C10.895 2 10 2.895 10 4C10 4.49 10.176 4.939 10.469 5.293C9.924 5.664 9.438 6.106 9.031 6.594C8.664 6.223 8.169 6 7.625 6C6.519 6 5.625 6.895 5.625 8C5.625 8.554 5.848 9.048 6.219 9.438C5.731 9.844 5.289 10.33 4.918 10.875C4.564 10.582 4.115 10.406 3.625 10.406C2.52 10.406 1.625 11.301 1.625 12.406C1.625 13.511 2.52 14.406 3.625 14.406C4.115 14.406 4.564 14.23 4.918 13.938C5.289 14.483 5.731 14.969 6.219 15.375C5.848 15.765 5.625 16.259 5.625 16.813C5.625 17.918 6.519 18.813 7.625 18.813C8.169 18.813 8.664 18.59 9.031 18.219C9.438 18.707 9.924 19.149 10.469 19.52C10.176 19.874 10 20.323 10 20.813C10 21.918 10.895 22.813 12 22.813C13.105 22.813 14 21.918 14 20.813C14 20.323 13.824 19.874 13.531 19.52C14.076 19.149 14.562 18.707 14.969 18.219C15.336 18.59 15.831 18.813 16.375 18.813C17.481 18.813 18.375 17.918 18.375 16.813C18.375 16.259 18.152 15.765 17.781 15.375C18.269 14.969 18.711 14.483 19.082 13.938C19.436 14.23 19.885 14.406 20.375 14.406C21.48 14.406 22.375 13.511 22.375 12.406C22.375 11.301 21.48 10.406 20.375 10.406C19.885 10.406 19.436 10.582 19.082 10.875C18.711 10.33 18.269 9.844 17.781 9.438C18.152 9.048 18.375 8.554 18.375 8C18.375 6.895 17.481 6 16.375 6C15.831 6 15.336 6.223 14.969 6.594C14.562 6.106 14.076 5.664 13.531 5.293C13.824 4.939 14 4.49 14 4C14 2.895 13.105 2 12 2ZM12 8C14.209 8 16 9.791 16 12C16 14.209 14.209 16 12 16C9.791 16 8 14.209 8 12C8 9.791 9.791 8 12 8Z" />
  </svg>
)

export default function BrandsWeWalkWith() {
  return (
    <section className="w-full px-6 py-32 bg-transparent text-[#EBE9E2]">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-[#AC8E5C] text-lg tracking-wide uppercase"
        >
          Brands We Walk With
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-sm text-[#EBE9E2]/80 leading-relaxed max-w-lg mx-auto"
        >
          At Ebenum, we don’t just create identities — we cultivate ongoing relationships grounded in purpose, vision, and sensibility.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-sm text-[#EBE9E2] font-semibold italic"
        >
          We are available to collaborate with brands that seek:
        </motion.p>

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="space-y-2 text-left text-sm max-w-md mx-auto"
        >
          <li><FlowerIcon /> To build a continuous presence, with aligned and cohesive creative direction</li>
          <li><FlowerIcon /> To bring life to campaigns, launches, and announcements that keep the soul of the brand alive</li>
          <li><FlowerIcon /> To grow with visual consistency, refining and expanding the brand over time</li>
          <li><FlowerIcon /> To stand at the top, with an identity that not only stands out, but endures</li>
          <li><FlowerIcon /> To evolve with authenticity, without losing their essence</li>
        </motion.ul>
      </div>
    </section>
  )
}

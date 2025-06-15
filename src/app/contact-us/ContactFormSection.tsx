'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function ContactFormSection() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  return (
    <section className="w-full px-6 py-32 bg-transparent text-[#EBE9E2]">
      <div className="max-w-xl mx-auto text-center space-y-10">
        {/* Frase topo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-sm text-[#EBE9E2]/70 italic leading-relaxed"
        >
          We believe that branding doesn’t end in the logo — it lives in the details,  
          in the words, in the image, and in the choices of every day.
        </motion.p>

        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-[#AC8E5C] text-lg uppercase tracking-wider"
        >
          Contact us
        </motion.h2>

        {/* Formulário */}
        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault()
            setStatus('success')
          }}
        >
          <input
            type="text"
            placeholder="Name or Company"
            className="w-full bg-transparent border-b border-[#AC8E5C] placeholder:text-[#EBE9E2]/60 text-sm px-2 py-3 outline-none"
          />
          <input
            type="email"
            placeholder="user@email.com"
            className="w-full bg-transparent border-b border-[#AC8E5C] placeholder:text-[#EBE9E2]/60 text-sm px-2 py-3 outline-none"
          />

          <div className="relative">
            <select
              className="w-full bg-transparent border-b border-[#AC8E5C] text-sm px-2 py-3 outline-none appearance-none text-[#EBE9E2]/80"
              defaultValue=""
            >
              <option value="" disabled>Select a service ↓</option>
              <option value="branding">Brand Identity</option>
              <option value="art-direction">Art Direction</option>
              <option value="website">Website Design</option>
              <option value="content">Campaign / Content</option>
            </select>
            <ChevronDown className="absolute right-2 top-3 text-[#EBE9E2]/70 h-4 w-4 pointer-events-none" />
          </div>

          <textarea
            rows={4}
            placeholder="Describe your project"
            className="w-full bg-transparent border border-[#AC8E5C]/50 placeholder:text-[#EBE9E2]/60 text-sm px-4 py-3 outline-none resize-none"
          />

          {/* Botão */}
          <div className="text-center pt-4">
            <button
              type="submit"
              className="px-8 py-2 text-sm tracking-wide bg-[#AC8E5C]/10 text-[#EBE9E2] border border-[#AC8E5C] hover:bg-[#AC8E5C]/20 transition-all"
            >
              Services
            </button>
          </div>

          {/* Mensagem opcional */}
          {status === 'success' && (
            <p className="text-green-400 text-sm text-center mt-2">
              Message sent successfully.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

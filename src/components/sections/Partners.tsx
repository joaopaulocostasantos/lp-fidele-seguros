"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Building2, ShieldCheck } from "lucide-react";

const operators = [
  { name: "Amil", logo: "/planos/amil.png" },
  { name: "SulAmérica", logo: "/planos/sulamerica.png" },
  { name: "Bradesco Saúde", logo: "/planos/bradesco-saude.png" },
  { name: "Omint", logo: "/planos/omint.png" },
  { name: "Hapvida", logo: "/planos/hapvida.png" },
  { name: "Porto Saúde", logo: "/planos/porto-seguro.png" },
];

export function Partners() {
  return (
    <section id="operadoras" className="relative py-24 bg-[#F7F8FC]">
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#111948]/15 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#111948]/15 bg-white px-4 py-1.5 text-sm text-[#111948] font-medium shadow-sm">
            <Building2 className="h-3.5 w-3.5 text-[#111948]/60" />
            Operadoras parceiras
          </div>
          <h2 className="text-3xl font-bold text-[#111948] md:text-4xl lg:text-5xl">
            Acesso às principais operadoras{" "}
            <span className="text-slate-400">e redes do Brasil.</span>
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            Somos independentes — analisamos todas as opções e indicamos o que
            realmente faz sentido para o perfil e o orçamento da sua família.
          </p>
        </motion.div>

        {/* Logo grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {operators.map((op, i) => (
            <motion.div
              key={op.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-[#E4E7F0] bg-white px-6 py-8 transition-all duration-300 hover:border-[#111948]/20 hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="relative h-12 w-full">
                <Image
                  src={op.logo}
                  alt={`Logo ${op.name}`}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xs font-medium text-slate-400">{op.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-2 text-sm text-slate-400 text-center"
        >
          <ShieldCheck className="h-4 w-4 shrink-0 text-[#21A621]" />
          A Fidele é independente — negocia com todas as operadoras para encontrar a melhor condição para você.
        </motion.div>
      </div>
    </section>
  );
}

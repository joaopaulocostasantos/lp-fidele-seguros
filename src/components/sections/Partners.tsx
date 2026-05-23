"use client";

import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

const operators = [
  {
    name: "Amil",
    description: "Rede referência em SP",
    highlight: "200+ hospitais",
    initial: "AM",
  },
  {
    name: "SulAmérica",
    description: "Cobertura nacional",
    highlight: "Líder de mercado",
    initial: "SA",
  },
  {
    name: "Bradesco Saúde",
    description: "Solidez e tradição",
    highlight: "50 anos no mercado",
    initial: "BR",
  },
  {
    name: "Omint",
    description: "Saúde executiva premium",
    highlight: "Alto padrão",
    initial: "OM",
  },
  {
    name: "NotreDame",
    description: "Excelência em SP",
    highlight: "Referência regional",
    initial: "ND",
  },
  {
    name: "Porto Saúde",
    description: "Inovação em saúde",
    highlight: "Digital first",
    initial: "PT",
  },
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
            <span className="text-slate-400">e redes hospitalares do Brasil.</span>
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            Trabalhamos com as operadoras mais relevantes do mercado para garantir
            que sua empresa tenha acesso à melhor rede hospitalar e de especialidades.
          </p>
        </motion.div>

        {/* Operators grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {operators.map((op, i) => (
            <motion.div
              key={op.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-[#E4E7F0] bg-white p-6 cursor-default transition-all duration-300 hover:border-[#111948]/25 hover:shadow-lg hover:shadow-[#111948]/8 hover:-translate-y-0.5"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#111948] shadow-md shadow-[#111948]/20 group-hover:bg-[#FFCC00] transition-colors">
                  <span className="text-sm font-bold text-white group-hover:text-[#111948] transition-colors">
                    {op.initial}
                  </span>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#111948] mb-0.5">{op.name}</h3>
                  <p className="text-sm text-slate-400 mb-3">{op.description}</p>
                  <div className="inline-flex items-center gap-1.5 rounded-lg border border-[#E4E7F0] bg-[#F7F8FC] px-3 py-1 text-xs text-slate-500 font-medium">
                    <span className="h-1 w-1 rounded-full bg-[#21A621]" />
                    {op.highlight}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 text-center text-sm text-slate-400"
        >
          A Fidele analisa sua situação e indica a operadora mais adequada ao
          perfil da sua empresa, negociando as melhores condições para você.
        </motion.p>
      </div>
    </section>
  );
}

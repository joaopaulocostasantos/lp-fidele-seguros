"use client";

import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

const operators = [
  {
    name: "Amil",
    description: "Rede referência em SP",
    highlight: "200+ hospitais",
    color: "from-blue-600 to-blue-800",
  },
  {
    name: "SulAmérica",
    description: "Cobertura nacional",
    highlight: "Líder de mercado",
    color: "from-orange-600 to-orange-800",
  },
  {
    name: "Bradesco Saúde",
    description: "Solidez e tradição",
    highlight: "50 anos no mercado",
    color: "from-red-600 to-red-800",
  },
  {
    name: "Omint",
    description: "Saúde executiva premium",
    highlight: "Alto padrão",
    color: "from-emerald-600 to-emerald-800",
  },
  {
    name: "NotreDame",
    description: "Excelência em SP",
    highlight: "Referência regional",
    color: "from-indigo-600 to-indigo-800",
  },
  {
    name: "Porto Saúde",
    description: "Inovação em saúde",
    highlight: "Digital first",
    color: "from-slate-600 to-slate-800",
  },
];

export function Partners() {
  return (
    <section id="operadoras" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-slate-300">
            <Building2 className="h-3.5 w-3.5 text-slate-400" />
            Operadoras parceiras
          </div>
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Acesso às principais operadoras{" "}
            <span className="text-slate-400">e redes hospitalares do Brasil.</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
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
              className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02] p-6 cursor-default transition-all duration-300 hover:border-white/15 hover:bg-white/[0.05]"
            >
              {/* Glow on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${op.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

              <div className="relative">
                <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${op.color} shadow-lg`}>
                  <span className="text-sm font-bold text-white">
                    {op.name.slice(0, 2).toUpperCase()}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-white mb-1">{op.name}</h3>
                <p className="text-sm text-slate-400 mb-3">{op.description}</p>
                <div className="inline-flex items-center gap-1.5 rounded-lg border border-white/8 bg-white/5 px-3 py-1 text-xs text-slate-300 font-medium">
                  <span className="h-1 w-1 rounded-full bg-blue-400" />
                  {op.highlight}
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
          className="mt-10 text-center text-sm text-slate-600"
        >
          A Fidele analisa sua situação e indica a operadora mais adequada ao
          perfil da sua empresa, negociando as melhores condições para você.
        </motion.p>
      </div>
    </section>
  );
}

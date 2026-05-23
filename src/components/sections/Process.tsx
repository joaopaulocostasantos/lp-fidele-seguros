"use client";

import { motion } from "framer-motion";
import {
  Search,
  Map,
  BarChart2,
  Rocket,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Diagnóstico do plano atual",
    description:
      "Análise completa do contrato vigente, cobertura, valores, histórico de reajustes e principais dores do seu RH e dos colaboradores.",
    duration: "1-2 dias úteis",
  },
  {
    number: "02",
    icon: Map,
    title: "Mapeamento das dores",
    description:
      "Identificamos os principais gargalos: atendimento, rede, processos internos, custos ocultos e oportunidades de melhoria.",
    duration: "1 dia útil",
  },
  {
    number: "03",
    icon: BarChart2,
    title: "Comparativo estratégico",
    description:
      "Apresentamos um relatório com as melhores alternativas do mercado, comparando cobertura, rede, preço e qualidade de atendimento.",
    duration: "2-3 dias úteis",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Implantação sem dor de cabeça",
    description:
      "Cuidamos de toda a transição: cadastramento, inclusão de dependentes, carências negociadas e comunicação com colaboradores.",
    duration: "15-30 dias",
  },
  {
    number: "05",
    icon: HeartHandshake,
    title: "Suporte contínuo e pós-venda",
    description:
      "Canal dedicado, reviews trimestrais, gestão de demandas do RH e renegociações proativas. Seu parceiro para sempre.",
    duration: "Permanente",
  },
];

export function Process() {
  return (
    <section id="processo" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-y-0 left-0 right-0 h-full bg-gradient-to-b from-transparent via-blue-950/10 to-transparent" />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/25 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-300">
            <Rocket className="h-3.5 w-3.5" />
            Como funciona
          </div>
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Processo consultivo{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              em 5 etapas.
            </span>
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Da primeira conversa ao suporte permanente. Um processo transparente,
            ágil e focado no resultado da sua empresa.
          </p>
        </motion.div>

        {/* Steps - vertical timeline on mobile, horizontal on desktop */}
        <div className="relative">
          {/* Desktop: horizontal connector */}
          <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex flex-col"
              >
                {/* Mobile: connecting line */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden absolute left-6 top-12 h-full w-px bg-gradient-to-b from-blue-500/30 to-transparent ml-0" />
                )}

                <div className="flex lg:flex-col items-start lg:items-center gap-4 lg:gap-0">
                  {/* Icon circle */}
                  <div className="relative flex h-12 w-12 lg:h-14 lg:w-14 shrink-0 items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/10 lg:mb-6 z-10">
                    <step.icon className="h-5 w-5 lg:h-6 lg:w-6 text-blue-400" />
                    <div className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white">
                      {i + 1}
                    </div>
                  </div>

                  {/* Arrow between steps (desktop) */}
                  {i < steps.length - 1 && (
                    <ArrowRight className="hidden lg:block absolute right-0 top-1/2 -translate-y-[200%] translate-x-1/2 h-4 w-4 text-slate-600 z-20" />
                  )}

                  {/* Content */}
                  <div className="flex-1 lg:text-center pb-6 lg:pb-0">
                    <div className="text-xs font-mono font-bold text-blue-400/60 mb-1">
                      {step.number}
                    </div>
                    <h3 className="text-sm font-semibold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed mb-3">
                      {step.description}
                    </p>
                    <div className="inline-flex items-center gap-1.5 rounded-lg border border-white/8 bg-white/[0.03] px-2.5 py-1 text-[11px] text-slate-500">
                      <span className="h-1 w-1 rounded-full bg-blue-400/60" />
                      {step.duration}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <button
            onClick={() => document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            Iniciar meu diagnóstico gratuito
            <ArrowRight className="h-4 w-4" />
          </button>
          <p className="mt-3 text-sm text-slate-500">
            Sem compromisso. Análise gratuita em até 48h.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

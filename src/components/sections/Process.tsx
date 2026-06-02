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
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Você preenche o formulário",
    description:
      "Nos conta o básico: família, plano atual, operadora e o que mais te incomoda. Leva menos de 3 minutos.",
    duration: "3 minutos",
  },
  {
    number: "02",
    icon: Map,
    title: "Nosso especialista entra em contato",
    description:
      "Em até 24h úteis, um especialista da Fidele fala com você para entender melhor a sua situação.",
    duration: "Até 24h úteis",
  },
  {
    number: "03",
    icon: BarChart2,
    title: "Análise do seu plano atual",
    description:
      "Verificamos cobertura, rede credenciada, histórico de reajustes e o que o seu plano realmente entrega versus o que cobra.",
    duration: "1-2 dias",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Comparativo com alternativas",
    description:
      "Apresentamos as melhores opções do mercado para o perfil da sua família — com valores, redes e condições lado a lado.",
    duration: "2-3 dias",
  },
  {
    number: "05",
    icon: HeartHandshake,
    title: "Você decide. A gente cuida do resto.",
    description:
      "Se quiser migrar, cuidamos de todo o processo. Se preferir ficar no plano atual — tudo bem também. Sem pressão.",
    duration: "No seu tempo",
  },
];

export function Process() {
  return (
    <section id="processo" className="relative py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#111948]/15 bg-[#111948]/6 px-4 py-1.5 text-sm text-[#111948] font-medium">
            <Rocket className="h-3.5 w-3.5 text-[#FFCC00]" />
            Como funciona
          </div>
          <h2 className="text-3xl font-bold text-[#111948] md:text-4xl lg:text-5xl">
            Diagnóstico em 5 etapas.{" "}
            <span className="text-[#21A621]">Tudo gratuito.</span>
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            Do primeiro contato ao diagnóstico completo. Em menos de uma semana
            você sabe se está no plano certo.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical connector (desktop) */}
          <div className="hidden lg:block absolute left-[52px] top-12 bottom-12 w-0.5 bg-gradient-to-b from-[#111948]/20 via-[#111948]/10 to-transparent" />

          <div className="space-y-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative flex gap-3 md:gap-5 items-start"
              >
                {/* Step icon */}
                <div className="relative z-10 flex h-14 w-14 md:h-[72px] md:w-[72px] shrink-0 flex-col items-center justify-center rounded-2xl border-2 border-[#111948]/10 bg-white shadow-md shadow-[#111948]/8 group-hover:border-[#111948] group-hover:bg-[#111948] transition-all duration-300">
                  <step.icon className="h-6 w-6 text-[#111948] group-hover:text-[#FFCC00] transition-colors" />
                  <span className="text-[10px] font-bold text-slate-400 group-hover:text-white/60 transition-colors mt-1">{step.number}</span>
                </div>

                {/* Content */}
                <div className="flex-1 rounded-2xl border border-[#E4E7F0] bg-white p-5 shadow-sm transition-all duration-300 group-hover:border-[#111948]/20 group-hover:shadow-md">
                  <div className="flex flex-wrap items-start gap-x-2 gap-y-1 mb-2">
                    <h3 className="text-base font-semibold text-[#111948] flex-1 min-w-0">
                      {step.title}
                    </h3>
                    <span className="shrink-0 text-xs text-slate-400 bg-[#F7F8FC] border border-[#E4E7F0] px-2.5 py-1 rounded-full font-medium">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
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
          <Button
            variant="premium"
            size="xl"
            className="group"
            onClick={() => document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" })}
          >
            Quero meu diagnóstico gratuito
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <p className="mt-3 text-sm text-slate-400">
            Gratuito, sem compromisso. Em menos de uma semana você sabe.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { GlowCard } from "@/components/shared/GlowCard";
import {
  HeartHandshake,
  Headphones,
  BarChart3,
  UserCheck,
  Sparkles,
  ShieldCheck,
  Zap,
  Check,
  X,
} from "lucide-react";

const differentials = [
  {
    icon: HeartHandshake,
    title: "Consultoria Estratégica",
    description:
      "Não vendemos plano. Fazemos diagnóstico completo da sua realidade e encontramos a solução ideal para o perfil da sua empresa.",
    features: ["Análise do plano atual", "Mapeamento de dores", "Proposta personalizada"],
  },
  {
    icon: Headphones,
    title: "Suporte Humanizado ao RH",
    description:
      "Seu RH terá um canal direto com consultores dedicados para resolver qualquer demanda operacional com agilidade real.",
    features: ["Canal exclusivo", "Resposta em até 2h úteis", "Relatórios mensais"],
  },
  {
    icon: BarChart3,
    title: "Gestão Operacional Ativa",
    description:
      "Cuidamos de toda a operação: autorizações, reembolsos, implantação, exclusões e inclusões para que seu RH foque no que importa.",
    features: ["Gestão de glosas", "Controle de utilização", "Benchmarks do mercado"],
  },
  {
    icon: UserCheck,
    title: "Pós-venda que existe",
    description:
      "Acompanhamento ativo ao longo de todo o contrato. Reviews periódicos, renegociações proativas e assessoria permanente.",
    features: ["Reviews trimestrais", "Renegociação proativa", "Assessoria permanente"],
  },
];

const comparison = [
  { item: "Consultor dedicado", fidele: true, common: false },
  { item: "Suporte ao RH incluído", fidele: true, common: false },
  { item: "Gestão de autorizações", fidele: true, common: false },
  { item: "Reviews periódicos", fidele: true, common: false },
  { item: "Acesso a múltiplas operadoras", fidele: true, common: true },
  { item: "Pós-venda ativo", fidele: true, common: false },
  { item: "Relatórios de utilização", fidele: true, common: false },
  { item: "Renegociação proativa", fidele: true, common: false },
];

export function Solution() {
  return (
    <section id="solucao" className="relative py-24 bg-white overflow-hidden">
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
            <Sparkles className="h-3.5 w-3.5 text-[#FFCC00]" />
            A solução Fidele
          </div>
          <h2 className="text-3xl font-bold text-[#111948] md:text-4xl lg:text-5xl">
            Sua parceira estratégica{" "}
            <span className="relative inline-block">
              em benefícios corporativos.
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#FFCC00]" />
            </span>
          </h2>
          <p className="mt-6 text-lg text-slate-500 max-w-2xl mx-auto">
            Não somos uma corretora comum. Somos uma consultoria especializada
            que combina atendimento humanizado e expertise de mercado
            para transformar o benefício de saúde da sua empresa.
          </p>
        </motion.div>

        {/* Differentials grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {differentials.map((item, i) => (
            <GlowCard key={item.title} delay={i * 0.1}>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#111948] shadow-lg shadow-[#111948]/20">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-[#111948] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <ul className="space-y-1.5">
                    {item.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                        <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#21A621]/15">
                          <Check className="h-2.5 w-2.5 text-[#21A621]" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20"
        >
          <h3 className="text-center text-2xl font-bold text-[#111948] mb-10">
            Fidele vs. Corretora tradicional
          </h3>

          <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-[#E4E7F0] shadow-sm">
            {/* Header */}
            <div className="grid grid-cols-3 border-b border-[#E4E7F0] bg-[#F7F8FC]">
              <div className="p-4 text-sm font-medium text-slate-400">Recurso</div>
              <div className="p-4 text-center text-sm font-bold text-[#111948] flex items-center justify-center gap-1.5 bg-[#111948]/4">
                <ShieldCheck className="h-4 w-4 text-[#21A621]" /> Fidele
              </div>
              <div className="p-4 text-center text-sm font-medium text-slate-400">
                Corretora comum
              </div>
            </div>

            {comparison.map((row, i) => (
              <div
                key={row.item}
                className={`grid grid-cols-3 border-b border-[#E4E7F0] last:border-0 ${
                  i % 2 === 0 ? "bg-white" : "bg-[#F7F8FC]"
                }`}
              >
                <div className="p-4 text-sm text-[#1C1C1C] font-medium">{row.item}</div>
                <div className="p-4 flex items-center justify-center bg-[#111948]/3">
                  {row.fidele ? (
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#21A621]">
                      <Check className="h-3.5 w-3.5 text-white" />
                    </div>
                  ) : (
                    <span className="text-slate-300">—</span>
                  )}
                </div>
                <div className="p-4 flex items-center justify-center">
                  {row.common ? (
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-200">
                      <Check className="h-3.5 w-3.5 text-slate-400" />
                    </div>
                  ) : (
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100">
                      <X className="h-3.5 w-3.5 text-red-400" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Value statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <div className="rounded-2xl border-l-4 border-[#FFCC00] bg-[#111948] p-8 shadow-xl shadow-[#111948]/15">
            <Zap className="h-8 w-8 text-[#FFCC00] mx-auto mb-4" />
            <p className="text-xl font-medium text-white leading-relaxed">
              "A Fidele não é uma despesa. É um investimento que reduz custo
              operacional do RH, aumenta retenção de talentos e melhora o
              clima organizacional."
            </p>
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-white/60">
              <span className="h-1.5 w-1.5 rounded-full bg-[#21A621]" />
              <span>Resultado real de empresas que migraram para a Fidele</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

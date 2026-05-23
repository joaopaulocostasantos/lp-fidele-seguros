"use client";

import { motion } from "framer-motion";
import { GlowCard } from "@/components/shared/GlowCard";
import {
  HeartHandshake,
  Headphones,
  BarChart3,
  UserCheck,
  Building2,
  Sparkles,
  ShieldCheck,
  Zap,
  Check,
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
    <section id="solucao" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-blue-600/6 blur-[150px]" />
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
            <Sparkles className="h-3.5 w-3.5" />
            A solução Fidele
          </div>
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Sua parceira estratégica{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              em benefícios corporativos.
            </span>
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Não somos uma corretora comum. Somos uma consultoria especializada
            que combina tecnologia, atendimento humanizado e expertise de mercado
            para transformar o benefício de saúde da sua empresa.
          </p>
        </motion.div>

        {/* Differentials grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {differentials.map((item, i) => (
            <GlowCard key={item.title} delay={i * 0.1} glowColor="blue">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 border border-blue-500/20">
                  <item.icon className="h-6 w-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <ul className="space-y-1.5">
                    {item.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-slate-300">
                        <Check className="h-3.5 w-3.5 text-blue-400 shrink-0" />
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
          <h3 className="text-center text-2xl font-bold text-white mb-10">
            Fidele vs. Corretora tradicional
          </h3>

          <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-white/8">
            {/* Header */}
            <div className="grid grid-cols-3 border-b border-white/8 bg-white/[0.02]">
              <div className="p-4 text-sm font-medium text-slate-400">Recurso</div>
              <div className="p-4 text-center text-sm font-semibold text-blue-400 flex items-center justify-center gap-1.5">
                <ShieldCheck className="h-4 w-4" /> Fidele
              </div>
              <div className="p-4 text-center text-sm font-medium text-slate-500">
                Corretora comum
              </div>
            </div>

            {/* Rows */}
            {comparison.map((row, i) => (
              <div
                key={row.item}
                className={`grid grid-cols-3 border-b border-white/5 last:border-0 ${
                  i % 2 === 0 ? "bg-white/[0.01]" : ""
                }`}
              >
                <div className="p-4 text-sm text-slate-300">{row.item}</div>
                <div className="p-4 flex items-center justify-center">
                  {row.fidele ? (
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/20">
                      <Check className="h-3.5 w-3.5 text-blue-400" />
                    </div>
                  ) : (
                    <span className="text-slate-600">—</span>
                  )}
                </div>
                <div className="p-4 flex items-center justify-center">
                  {row.common ? (
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-700/50">
                      <Check className="h-3.5 w-3.5 text-slate-500" />
                    </div>
                  ) : (
                    <span className="text-red-500/70 text-lg">✕</span>
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
          <div className="rounded-2xl border border-blue-500/15 bg-blue-500/5 p-8">
            <Zap className="h-8 w-8 text-blue-400 mx-auto mb-4" />
            <p className="text-xl font-medium text-white leading-relaxed">
              "A Fidele não é uma despesa. É um investimento que reduz custo
              operacional do RH, aumenta retenção de talentos e melhora o
              clima organizacional."
            </p>
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-slate-400">
              <Building2 className="h-4 w-4 text-blue-400" />
              <span>Resultado real de empresas que migraram para a Fidele</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { GlowCard } from "@/components/shared/GlowCard";
import {
  AlertTriangle,
  Clock,
  HeartCrack,
  DollarSign,
  Network,
  UserX,
  PhoneOff,
  TrendingDown,
} from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "RH sobrecarregado",
    description:
      "Sua equipe de RH perde horas gerenciando reembolsos, autorizações e reclamações que deveriam ser resolvidas pela operadora.",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-500",
    accent: "border-l-amber-400",
  },
  {
    icon: PhoneOff,
    title: "Atendimento que some",
    description:
      "Corretores que somem após a venda. Fila de espera infinita. Zero suporte quando você mais precisa.",
    iconBg: "bg-red-50",
    iconColor: "text-red-500",
    accent: "border-l-red-400",
  },
  {
    icon: Network,
    title: "Rede hospitalar limitada",
    description:
      "Hospitais de referência fora da cobertura. Colaboradores precisam recorrer a planos particulares ou desembolso direto.",
    iconBg: "bg-orange-50",
    iconColor: "text-orange-500",
    accent: "border-l-orange-400",
  },
  {
    icon: DollarSign,
    title: "Alto custo, baixo retorno",
    description:
      "Reajustes anuais acima da inflação com qualidade de cobertura que não justifica o investimento.",
    iconBg: "bg-yellow-50",
    iconColor: "text-yellow-600",
    accent: "border-l-yellow-400",
  },
  {
    icon: HeartCrack,
    title: "Colaboradores insatisfeitos",
    description:
      "Benefício que deveria ser diferencial virou fonte de frustração e reclamação interna.",
    iconBg: "bg-pink-50",
    iconColor: "text-pink-500",
    accent: "border-l-pink-400",
  },
  {
    icon: UserX,
    title: "Perda de talentos",
    description:
      "Profissionais qualificados aceitam propostas da concorrência que oferecem melhores benefícios de saúde.",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-500",
    accent: "border-l-purple-400",
  },
  {
    icon: AlertTriangle,
    title: "Burocracia sem fim",
    description:
      "Processos lentos de implantação, inclusão de dependentes e resolução de glosas que consomem energia do seu time.",
    iconBg: "bg-slate-100",
    iconColor: "text-slate-500",
    accent: "border-l-slate-400",
  },
  {
    icon: TrendingDown,
    title: "Sensação de abandono",
    description:
      "Após a assinatura do contrato, você se torna apenas mais um número. Sem follow-up, sem gestão proativa.",
    iconBg: "bg-red-50",
    iconColor: "text-red-400",
    accent: "border-l-red-300",
  },
];

export function Problems() {
  return (
    <section id="problemas" className="relative py-24 bg-[#F7F8FC]">
      {/* Top accent */}
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
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-1.5 text-sm text-red-600 font-medium">
            <AlertTriangle className="h-3.5 w-3.5" />
            O problema que ninguém resolve
          </div>
          <h2 className="text-3xl font-bold text-[#111948] md:text-4xl lg:text-5xl">
            Sua empresa merece mais{" "}
            <span className="text-slate-400">do que isso.</span>
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            A maioria das empresas está presa em ciclos de frustração com planos de saúde que custam caro e entregam pouco. Você se identifica?
          </p>
        </motion.div>

        {/* Problems grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem, i) => (
            <GlowCard key={problem.title} delay={i * 0.07} className={`border-l-4 ${problem.accent}`}>
              <div className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl ${problem.iconBg}`}>
                <problem.icon className={`h-5 w-5 ${problem.iconColor}`} />
              </div>
              <h3 className="mb-2 text-sm font-semibold text-[#111948]">
                {problem.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {problem.description}
              </p>
            </GlowCard>
          ))}
        </div>

        {/* Transition statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block rounded-2xl border border-[#111948]/10 bg-white px-8 py-5 shadow-sm">
            <p className="text-lg text-slate-600 font-medium max-w-2xl">
              E se existisse uma parceira que resolvesse todos esses problemas,{" "}
              <span className="text-[#111948] font-bold">de forma proativa e humanizada?</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

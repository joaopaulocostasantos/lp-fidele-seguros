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
    color: "text-amber-400",
    bg: "bg-amber-400/10",
  },
  {
    icon: PhoneOff,
    title: "Atendimento que some",
    description:
      "Corretores que somem após a venda. Fila de espera infinita. Zero suporte quando você mais precisa.",
    color: "text-red-400",
    bg: "bg-red-400/10",
  },
  {
    icon: Network,
    title: "Rede hospitalar limitada",
    description:
      "Hospitais de referência fora da cobertura. Colaboradores precisam recorrer a planos particulares ou desembolso direto.",
    color: "text-orange-400",
    bg: "bg-orange-400/10",
  },
  {
    icon: DollarSign,
    title: "Alto custo, baixo retorno",
    description:
      "Reajustes anuais acima da inflação com qualidade de cobertura que não justifica o investimento.",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
  },
  {
    icon: HeartCrack,
    title: "Colaboradores insatisfeitos",
    description:
      "Benefício que deveria ser diferencial virou fonte de frustração e reclamação interna.",
    color: "text-pink-400",
    bg: "bg-pink-400/10",
  },
  {
    icon: UserX,
    title: "Perda de talentos",
    description:
      "Profissionais qualificados aceitam propostas da concorrência que oferecem melhores benefícios de saúde.",
    color: "text-red-400",
    bg: "bg-red-400/10",
  },
  {
    icon: AlertTriangle,
    title: "Burocracia sem fim",
    description:
      "Processos lentos de implantação, inclusão de dependentes e resolução de glosas que consomem energia do seu time.",
    color: "text-orange-400",
    bg: "bg-orange-400/10",
  },
  {
    icon: TrendingDown,
    title: "Sensação de abandono",
    description:
      "Após a assinatura do contrato, você se torna apenas mais um número. Sem follow-up, sem gestão proativa.",
    color: "text-slate-400",
    bg: "bg-slate-400/10",
  },
];

export function Problems() {
  return (
    <section id="problemas" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-1.5 text-sm text-red-400">
            <AlertTriangle className="h-3.5 w-3.5" />
            O problema que ninguém resolve
          </div>
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Sua empresa merece mais{" "}
            <span className="text-slate-400">do que isso.</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            A maioria das empresas está presa em ciclos de frustração com planos de saúde que custam caro e entregam pouco. Você se identifica?
          </p>
        </motion.div>

        {/* Problems grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem, i) => (
            <GlowCard key={problem.title} delay={i * 0.07}>
              <div className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl ${problem.bg}`}>
                <problem.icon className={`h-5 w-5 ${problem.color}`} />
              </div>
              <h3 className="mb-2 text-sm font-semibold text-white">
                {problem.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
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
          <p className="text-lg text-slate-300 font-medium max-w-2xl mx-auto">
            E se existisse uma parceira que resolvesse todos esses problemas,{" "}
            <span className="text-white font-semibold">de forma proativa e humanizada?</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

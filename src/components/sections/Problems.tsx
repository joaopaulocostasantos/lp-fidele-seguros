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
    title: "Reajuste anual sem aviso claro",
    description:
      "Chega o início do ano e a parcela sobe. Sem explicação detalhada, sem negociação. Você paga ou cancela — essa é a escolha que te dão.",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-500",
    accent: "border-l-amber-400",
  },
  {
    icon: PhoneOff,
    title: "Corretor que some depois da venda",
    description:
      "Na hora de contratar, estava lá. Agora, para resolver um problema, você não consegue nem resposta.",
    iconBg: "bg-red-50",
    iconColor: "text-red-500",
    accent: "border-l-red-400",
  },
  {
    icon: Network,
    title: "Rede credenciada que muda sem avisar",
    description:
      "O hospital que você conhecia saiu da rede. Você só descobre quando precisa usar. E aí é tarde.",
    iconBg: "bg-orange-50",
    iconColor: "text-orange-500",
    accent: "border-l-orange-400",
  },
  {
    icon: DollarSign,
    title: "Cobertura cheia de exceções",
    description:
      "No papel parece completo. Na hora de usar, tem carência, tem glosa, tem exceção que ninguém mencionou quando você assinou.",
    iconBg: "bg-yellow-50",
    iconColor: "text-yellow-600",
    accent: "border-l-yellow-400",
  },
  {
    icon: HeartCrack,
    title: "Reajuste por faixa etária",
    description:
      "Além do reajuste anual da ANS, ainda tem o reajuste por idade. Com o tempo, a parcela dobra — e a cobertura continua a mesma.",
    iconBg: "bg-pink-50",
    iconColor: "text-pink-500",
    accent: "border-l-pink-400",
  },
  {
    icon: UserX,
    title: "Plano mal dimensionado para sua família",
    description:
      "Você contratou um plano pensando em você. Com cônjuge e filhos, o perfil de uso muda — e o plano pode não ter sido feito para isso.",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-500",
    accent: "border-l-purple-400",
  },
  {
    icon: AlertTriangle,
    title: "Sem suporte real quando você precisa",
    description:
      "Autorização negada, reembolso travado, prazo extrapolado. Você liga, espera na fila — e não resolve nada.",
    iconBg: "bg-slate-100",
    iconColor: "text-slate-500",
    accent: "border-l-slate-400",
  },
  {
    icon: TrendingDown,
    title: "Sensação de estar jogando dinheiro fora",
    description:
      "Você paga todo mês, há anos, e quando vai usar parece que o plano faz tudo para dificultar. Isso não deveria ser assim.",
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
            8 armadilhas que a operadora nunca te conta
          </div>
          <h2 className="text-3xl font-bold text-[#111948] md:text-4xl lg:text-5xl">
            Reajuste todo ano. Cobertura que ninguém explica.{" "}
            <span className="text-slate-400">Uma parcela que só cresce.</span>
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            Se você tem plano de saúde há mais de 3 anos, provavelmente já passou por pelo menos um desses. Você se reconhece?
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
              E se você pudesse saber exatamente se está no plano certo —{" "}
              <span className="text-[#111948] font-bold">e quanto poderia estar economizando todo mês?</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import {
  Trophy,
  TrendingDown,
  Heart,
  Star,
  Briefcase,
  Clock,
  ShieldCheck,
  Smile,
} from "lucide-react";

const benefits = [
  {
    icon: Trophy,
    title: "Economia real no bolso",
    description:
      "Famílias que revisaram o plano com a Fidele encontraram alternativas com a mesma rede por um valor menor.",
    metric: "R$+",
    metricLabel: "de diferença possível",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-500",
    metricColor: "text-amber-500",
  },
  {
    icon: TrendingDown,
    title: "Rede premium garantida",
    description:
      "Einstein, Sírio-Libanês e Fleury na cobertura. A gente verifica antes — você não descobre depois.",
    metric: "3",
    metricLabel: "redes de referência",
    iconBg: "bg-[#21A621]/10",
    iconColor: "text-[#21A621]",
    metricColor: "text-[#21A621]",
  },
  {
    icon: Heart,
    title: "Cobertura real, sem surpresa",
    description:
      "Você sabe exatamente o que cobre, o que não cobre e quais são as carências — antes de assinar qualquer contrato.",
    metric: "100%",
    metricLabel: "transparência",
    iconBg: "bg-pink-50",
    iconColor: "text-pink-500",
    metricColor: "text-pink-500",
  },
  {
    icon: Star,
    title: "Atendimento que resolve",
    description:
      "Tem um problema com o plano? Tem um consultor da Fidele para resolver — sem fila, sem enrolação.",
    metric: "24h",
    metricLabel: "tempo de resposta",
    iconBg: "bg-[#111948]/8",
    iconColor: "text-[#111948]",
    metricColor: "text-[#111948]",
  },
  {
    icon: Briefcase,
    title: "Diagnóstico em 15 minutos",
    description:
      "Uma conversa com o nosso especialista já é suficiente para entender se você está no plano certo.",
    metric: "15",
    metricLabel: "minutos",
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-500",
    metricColor: "text-indigo-500",
  },
  {
    icon: Clock,
    title: "Zero burocracia",
    description:
      "A Fidele cuida de toda a transição. Da análise à migração, você só decide — o resto é com a gente.",
    metric: "0",
    metricLabel: "papelada pra você",
    iconBg: "bg-cyan-50",
    iconColor: "text-cyan-500",
    metricColor: "text-cyan-500",
  },
  {
    icon: ShieldCheck,
    title: "Segurança na escolha",
    description:
      "Você só muda se quiser. Se o plano atual for o melhor — a gente fala isso também. Sem compromisso.",
    metric: "100%",
    metricLabel: "sem pressão",
    iconBg: "bg-[#21A621]/10",
    iconColor: "text-[#21A621]",
    metricColor: "text-[#21A621]",
  },
  {
    icon: Smile,
    title: "Plano certo para a família",
    description:
      "Analisamos o perfil completo da sua família para indicar o plano que realmente atende — não o mais caro.",
    metric: "3–5",
    metricLabel: "pessoas",
    iconBg: "bg-orange-50",
    iconColor: "text-orange-500",
    metricColor: "text-orange-500",
  },
];

const impactMetrics = [
  { value: 15, suffix: "+", label: "Anos de mercado" },
  { value: 6, suffix: "+", label: "Operadoras analisadas" },
  { value: 98, suffix: "%", label: "Clientes satisfeitos" },
  { value: 15, suffix: " min", label: "Tempo do diagnóstico" },
];

export function Benefits() {
  return (
    <section id="beneficios" className="relative py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#21A621]/20 bg-[#21A621]/8 px-4 py-1.5 text-sm text-[#21A621] font-medium">
            <TrendingDown className="h-3.5 w-3.5" />
            O que você ganha com o diagnóstico
          </div>
          <h2 className="text-3xl font-bold text-[#111948] md:text-4xl lg:text-5xl">
            Clareza sobre o que você tem{" "}
            <span className="relative inline-block text-[#21A621]">
              — e o que poderia ter.
            </span>
          </h2>
          <p className="mt-6 text-lg text-slate-500 max-w-2xl mx-auto">
            A maioria das pessoas nunca revisou o plano de saúde. Quem revisa com
            a Fidele entende onde estava perdendo dinheiro e encontra alternativas melhores.
          </p>
        </motion.div>

        {/* Impact metrics bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl border border-[#E4E7F0] bg-[#E4E7F0] overflow-hidden shadow-sm"
        >
          {impactMetrics.map((metric) => (
            <div
              key={metric.label}
              className="flex flex-col items-center justify-center gap-1 bg-white p-6 text-center hover:bg-[#F7F8FC] transition-colors"
            >
              <div className="text-3xl font-bold text-[#111948]">
                <AnimatedCounter end={Number(metric.value)} suffix={metric.suffix} />
              </div>
              <div className="text-sm text-slate-400">{metric.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group rounded-2xl border border-[#E4E7F0] bg-white p-5 transition-all duration-300 hover:border-[#111948]/20 hover:shadow-md hover:-translate-y-0.5"
            >
              <div className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl ${benefit.iconBg}`}>
                <benefit.icon className={`h-5 w-5 ${benefit.iconColor}`} />
              </div>

              <div className={`mb-2 text-2xl font-bold ${benefit.metricColor}`}>
                {benefit.metric}
                <span className="ml-1 text-xs font-medium text-slate-400">{benefit.metricLabel}</span>
              </div>

              <h3 className="text-sm font-semibold text-[#111948] mb-1.5">{benefit.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

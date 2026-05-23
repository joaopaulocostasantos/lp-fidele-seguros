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
    title: "Retenção de talentos",
    description:
      "Empresas com benefícios de saúde premium retêm até 3x mais talentos do que a concorrência.",
    metric: "3x",
    metricLabel: "mais retenção",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    border: "border-amber-400/20",
  },
  {
    icon: TrendingDown,
    title: "Redução de turnover",
    description:
      "Benefícios estratégicos reduzem drasticamente o custo de rotatividade e substituição de colaboradores.",
    metric: "40%",
    metricLabel: "menos turnover",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/20",
  },
  {
    icon: Heart,
    title: "Saúde preventiva",
    description:
      "Colaboradores com plano premium buscam cuidados preventivos, reduzindo absenteísmo e afastamentos.",
    metric: "65%",
    metricLabel: "menos ausências",
    color: "text-pink-400",
    bg: "bg-pink-400/10",
    border: "border-pink-400/20",
  },
  {
    icon: Star,
    title: "Marca empregadora forte",
    description:
      "Employer branding poderoso atrai candidatos melhores e posiciona sua empresa como destino de carreira.",
    metric: "#1",
    metricLabel: "diferencial citado",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20",
  },
  {
    icon: Briefcase,
    title: "Suporte operacional ao RH",
    description:
      "Seu RH deixa de ser o \"help desk\" do plano de saúde e volta a focar em estratégia e cultura.",
    metric: "20h",
    metricLabel: "salvas por mês",
    color: "text-indigo-400",
    bg: "bg-indigo-400/10",
    border: "border-indigo-400/20",
  },
  {
    icon: Clock,
    title: "Agilidade nos processos",
    description:
      "Autorizações, reembolsos e inclusões resolvidas em tempo recorde com nossa equipe dedicada.",
    metric: "2h",
    metricLabel: "tempo de resposta",
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    border: "border-cyan-400/20",
  },
  {
    icon: ShieldCheck,
    title: "Segurança jurídica",
    description:
      "Conformidade total com ANS, LGPD e legislação trabalhista. Sua empresa protegida em todas as frentes.",
    metric: "100%",
    metricLabel: "compliance",
    color: "text-violet-400",
    bg: "bg-violet-400/10",
    border: "border-violet-400/20",
  },
  {
    icon: Smile,
    title: "Clima organizacional",
    description:
      "Colaboradores satisfeitos com seus benefícios têm índices de engajamento e produtividade mais altos.",
    metric: "87%",
    metricLabel: "mais engajamento",
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    border: "border-orange-400/20",
  },
];

const impactMetrics = [
  { value: 40, suffix: "%", label: "Redução média de turnover" },
  { value: 20, suffix: "h", label: "Horas de RH liberadas/mês" },
  { value: 98, suffix: "%", label: "Satisfação dos colaboradores" },
  { value: 2, suffix: "h", label: "Resposta média do suporte" },
];

export function Benefits() {
  return (
    <section id="beneficios" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute top-1/3 right-0 h-[600px] w-[600px] translate-x-1/2 rounded-full bg-blue-600/6 blur-[120px]" />
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
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-300">
            <TrendingDown className="h-3.5 w-3.5" />
            Impacto no seu negócio
          </div>
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Saúde premium que{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              gera resultado real.
            </span>
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Investir em saúde corporativa premium não é custo — é estratégia de
            negócio. Veja o impacto concreto nas empresas que escolheram a Fidele.
          </p>
        </motion.div>

        {/* Impact metrics bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {impactMetrics.map((metric) => (
            <div
              key={metric.label}
              className="text-center rounded-2xl border border-white/8 bg-white/[0.03] p-6"
            >
              <div className="text-3xl font-bold text-white mb-1">
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
              className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.04]"
            >
              <div className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl ${benefit.bg} border ${benefit.border}`}>
                <benefit.icon className={`h-5 w-5 ${benefit.color}`} />
              </div>

              <div className={`mb-3 text-2xl font-bold ${benefit.color}`}>
                {benefit.metric}
                <span className="ml-1 text-xs font-medium text-slate-500">{benefit.metricLabel}</span>
              </div>

              <h3 className="text-sm font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

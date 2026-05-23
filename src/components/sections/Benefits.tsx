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
    iconBg: "bg-amber-50",
    iconColor: "text-amber-500",
    metricColor: "text-amber-500",
  },
  {
    icon: TrendingDown,
    title: "Redução de turnover",
    description:
      "Benefícios estratégicos reduzem drasticamente o custo de rotatividade e substituição de colaboradores.",
    metric: "40%",
    metricLabel: "menos turnover",
    iconBg: "bg-[#21A621]/10",
    iconColor: "text-[#21A621]",
    metricColor: "text-[#21A621]",
  },
  {
    icon: Heart,
    title: "Saúde preventiva",
    description:
      "Colaboradores com plano premium buscam cuidados preventivos, reduzindo absenteísmo e afastamentos.",
    metric: "65%",
    metricLabel: "menos ausências",
    iconBg: "bg-pink-50",
    iconColor: "text-pink-500",
    metricColor: "text-pink-500",
  },
  {
    icon: Star,
    title: "Marca empregadora forte",
    description:
      "Employer branding poderoso atrai candidatos melhores e posiciona sua empresa como destino de carreira.",
    metric: "#1",
    metricLabel: "diferencial citado",
    iconBg: "bg-[#111948]/8",
    iconColor: "text-[#111948]",
    metricColor: "text-[#111948]",
  },
  {
    icon: Briefcase,
    title: "Suporte operacional ao RH",
    description:
      "Seu RH deixa de ser o 'help desk' do plano de saúde e volta a focar em estratégia e cultura.",
    metric: "20h",
    metricLabel: "salvas por mês",
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-500",
    metricColor: "text-indigo-500",
  },
  {
    icon: Clock,
    title: "Agilidade nos processos",
    description:
      "Autorizações, reembolsos e inclusões resolvidas em tempo recorde com nossa equipe dedicada.",
    metric: "2h",
    metricLabel: "tempo de resposta",
    iconBg: "bg-cyan-50",
    iconColor: "text-cyan-500",
    metricColor: "text-cyan-500",
  },
  {
    icon: ShieldCheck,
    title: "Segurança jurídica",
    description:
      "Conformidade total com ANS, LGPD e legislação trabalhista. Sua empresa protegida em todas as frentes.",
    metric: "100%",
    metricLabel: "compliance",
    iconBg: "bg-[#21A621]/10",
    iconColor: "text-[#21A621]",
    metricColor: "text-[#21A621]",
  },
  {
    icon: Smile,
    title: "Clima organizacional",
    description:
      "Colaboradores satisfeitos com seus benefícios têm índices de engajamento e produtividade mais altos.",
    metric: "87%",
    metricLabel: "mais engajamento",
    iconBg: "bg-orange-50",
    iconColor: "text-orange-500",
    metricColor: "text-orange-500",
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
            Impacto no seu negócio
          </div>
          <h2 className="text-3xl font-bold text-[#111948] md:text-4xl lg:text-5xl">
            Saúde premium que{" "}
            <span className="relative inline-block text-[#21A621]">
              gera resultado real.
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#FFCC00]" />
            </span>
          </h2>
          <p className="mt-6 text-lg text-slate-500 max-w-2xl mx-auto">
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

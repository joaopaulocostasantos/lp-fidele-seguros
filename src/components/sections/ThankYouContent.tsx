"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { trackFormSubmit } from "@/utils/analytics";
import {
  CheckCircle,
  Clock,
  MessageCircle,
  Phone,
  ArrowLeft,
  Star,
  Calendar,
  FileText,
  HeartHandshake,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const nextSteps = [
  {
    icon: Clock,
    title: "Aguarde o contato",
    description: "Um consultor especializado da Fidele entrará em contato em até 24 horas úteis pelo WhatsApp ou telefone.",
    time: "Até 24h úteis",
    iconBg: "bg-[#111948]/8",
    iconColor: "text-[#111948]",
  },
  {
    icon: FileText,
    title: "Diagnóstico gratuito",
    description: "Seu consultor irá analisar sua situação atual e preparar um diagnóstico completo e personalizado.",
    time: "1-2 dias úteis",
    iconBg: "bg-[#FFCC00]/15",
    iconColor: "text-[#111948]",
  },
  {
    icon: HeartHandshake,
    title: "Proposta estratégica",
    description: "Apresentaremos as melhores alternativas de mercado com análise de custo-benefício e comparativos claros.",
    time: "2-3 dias úteis",
    iconBg: "bg-[#21A621]/10",
    iconColor: "text-[#21A621]",
  },
  {
    icon: Calendar,
    title: "Reunião de alinhamento",
    description: "Marcamos uma reunião (online ou presencial) para apresentar as propostas e tirar todas as suas dúvidas.",
    time: "Conforme agenda",
    iconBg: "bg-[#111948]/8",
    iconColor: "text-[#111948]",
  },
];

export function ThankYouContent() {
  useEffect(() => {
    trackFormSubmit();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center py-32 overflow-hidden bg-white">
      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#111948] via-[#FFCC00] to-[#21A621]" />
        <div className="absolute top-1/4 right-0 h-[400px] w-[400px] translate-x-1/2 rounded-full bg-[#21A621]/5" />
        <div className="absolute bottom-1/4 left-0 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-[#111948]/4" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl">
          {/* Success indicator */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#21A621]/10 border-2 border-[#21A621]/20">
                <CheckCircle className="h-10 w-10 text-[#21A621]" />
              </div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, duration: 0.3 }}
                className="absolute -top-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#FFCC00] shadow-lg"
              >
                <Star className="h-3.5 w-3.5 fill-[#111948] text-[#111948]" />
              </motion.div>
            </div>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#21A621]/20 bg-[#21A621]/8 px-4 py-1.5 text-sm text-[#21A621] font-medium">
              <CheckCircle className="h-3.5 w-3.5" />
              Solicitação recebida com sucesso
            </div>
            <h1 className="text-3xl font-bold text-[#111948] md:text-4xl lg:text-5xl mb-4">
              Perfeito!{" "}
              <span className="text-[#21A621]">
                Já recebemos sua solicitação.
              </span>
            </h1>
            <p className="text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
              Um consultor especializado da Fidele vai entrar em contato em até
              24 horas úteis para iniciar o diagnóstico gratuito do seu plano.
            </p>
          </motion.div>

          {/* Next steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-10"
          >
            <h2 className="text-center text-lg font-semibold text-[#111948] mb-6">
              O que acontece agora
            </h2>
            <div className="space-y-3">
              {nextSteps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="flex gap-4 rounded-2xl border border-[#E4E7F0] bg-white p-4 shadow-sm"
                >
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${step.iconBg}`}>
                    <step.icon className={`h-5 w-5 ${step.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="text-sm font-semibold text-[#111948]">{step.title}</h3>
                      <span className="shrink-0 text-xs text-slate-400 bg-[#F7F8FC] border border-[#E4E7F0] px-2 py-0.5 rounded-full">
                        {step.time}
                      </span>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Authority reinforcement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-8 rounded-2xl border-l-4 border-[#FFCC00] bg-[#111948] p-6 text-center shadow-xl shadow-[#111948]/15"
          >
            <p className="text-base font-semibold text-white mb-1">
              Você está em boas mãos.
            </p>
            <p className="text-sm text-white/60">
              Mais de 300 empresas em São Paulo já confiam na Fidele para gerir seus benefícios de saúde.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <a
              href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20acabei%20de%20preencher%20o%20formul%C3%A1rio%20no%20site%20e%20gostaria%20de%20falar%20com%20um%20consultor."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="premium" size="lg" className="w-full sm:w-auto">
                <MessageCircle className="h-5 w-5" />
                Falar pelo WhatsApp agora
              </Button>
            </a>
            <a href="tel:+5511999999999">
              <Button variant="brand" size="lg" className="w-full sm:w-auto">
                <Phone className="h-4 w-4" />
                Ligar agora
              </Button>
            </a>
          </motion.div>

          {/* Back link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8 text-center"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-[#111948] transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Voltar para a página inicial
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

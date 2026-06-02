"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { gsap } from "gsap";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import {
  ArrowRight,
  Star,
  TrendingUp,
  Shield,
  Users,
  ChevronDown,
  CheckCircle,
  HeartHandshake,
} from "lucide-react";

const operators = [
  { name: "Amil", short: "AM", logo: "/planos/amil.png" },
  { name: "SulAmérica", short: "SA", logo: "/planos/sulamerica.png" },
  { name: "Bradesco", short: "BR", logo: "/planos/bradesco-saude.png" },
  { name: "Omint", short: "OM", logo: "/planos/omint.png" },
  { name: "Hapvida", short: "HV", logo: "/planos/hapvida.png" },
  { name: "Porto", short: "PT", logo: "/planos/porto-seguro.png" },
];

const stats = [
  { value: 15, suffix: "+", label: "Anos de mercado", icon: TrendingUp },
  { value: 300, suffix: "+", label: "Famílias atendidas", icon: Users },
  { value: 98, suffix: "%", label: "Satisfação", icon: Star },
  { value: 5000, suffix: "+", label: "Vidas protegidas", icon: Shield },
];

const benefits = [
  "Diagnóstico gratuito e sem compromisso",
  "Comparativo entre as principais operadoras",
  "Redes Einstein, Sírio-Libanês e Fleury",
  "Acompanhamento pós-venda real",
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!bgRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(".hero-shape-1", {
        x: 30,
        y: -20,
        duration: 9,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".hero-shape-2", {
        x: -25,
        y: 30,
        duration: 11,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 2,
      });
      gsap.to(".hero-shape-3", {
        x: 20,
        y: 15,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1,
      });
    }, bgRef);
    return () => ctx.revert();
  }, []);

  const scrollToForm = () =>
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      ref={bgRef}
      className="relative lg:min-h-screen overflow-hidden flex items-center pt-20 pb-16 bg-white"
    >
      {/* Decorative background shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="hero-shape-1 absolute -top-32 -right-32 h-[600px] w-[600px] rounded-full bg-[#111948]/4" />
        <div className="hero-shape-2 absolute bottom-0 -left-40 h-[400px] w-[400px] rounded-full bg-[#FFCC00]/10" />
        <div className="hero-shape-3 absolute top-1/2 right-1/3 h-[200px] w-[200px] rounded-full bg-[#21A621]/5" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#111948] via-[#FFCC00] to-[#21A621]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Two-column layout on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-center lg:min-h-[calc(100vh-8rem)]">

          {/* Left column — copy & CTAs */}
          <div className="flex flex-col justify-center">
            {/* Badge */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-[#111948]/15 bg-[#111948]/6 px-4 py-1.5 text-sm text-[#111948] font-medium"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#21A621] animate-pulse" />
              Diagnóstico gratuito em saúde para famílias
            </motion.div>

            {/* Headline */}
            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-4xl font-bold leading-[1.1] tracking-tight text-[#111948] md:text-5xl lg:text-5xl xl:text-6xl"
            >
              Tem plano de saúde{" "}
              <span className="relative inline-block">
                há mais de 3 anos?
              </span>{" "}
              Você provavelmente está pagando mais do que deveria.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-6 text-lg text-slate-500 leading-relaxed"
            >
              A Fidele analisa o seu plano atual, compara operadoras e mostra
              exatamente onde você está perdendo dinheiro — sem compromisso
              e sem custo.
            </motion.p>

            {/* Benefits list */}
            <motion.ul
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-6 space-y-2.5"
            >
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-2.5 text-sm text-slate-600">
                  <CheckCircle className="h-4 w-4 shrink-0 text-[#21A621]" />
                  {b}
                </li>
              ))}
            </motion.ul>

            {/* CTAs */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <Button
                variant="premium"
                size="xl"
                onClick={scrollToForm}
                className="group"
              >
                Quero meu diagnóstico gratuito
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="xl"
                onClick={scrollToForm}
              >
                Analisar meu plano agora
              </Button>
            </motion.div>

          </div>

          {/* Right column — visual card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative flex flex-col gap-4 lg:pl-4"
          >
            {/* Main card */}
            <div className="relative rounded-3xl border border-[#E4E7F0] bg-white p-7 shadow-2xl shadow-[#111948]/10">
              {/* Card header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#21A621]/10">
                  <HeartHandshake className="h-5 w-5 text-[#21A621]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#111948]">Diagnóstico gratuito</p>
                  <p className="text-xs text-slate-400">Análise completa do seu plano de família</p>
                </div>
              </div>

              {/* Stats grid inside card */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {stats.map(({ value, suffix, label, icon: Icon }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center justify-center gap-1 rounded-2xl border border-[#E4E7F0] bg-[#F7F8FC] p-4 text-center"
                  >
                    <Icon className="h-4 w-4 text-[#FFCC00] mb-0.5" />
                    <div className="text-2xl font-bold text-[#111948]">
                      <AnimatedCounter end={value} suffix={suffix} />
                    </div>
                    <div className="text-[11px] text-slate-400 font-medium leading-tight">{label}</div>
                  </div>
                ))}
              </div>

              {/* Operators strip */}
              <div>
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-3">
                  Operadoras parceiras
                </p>
                <div className="flex flex-wrap gap-2">
                  {operators.map((op) => (
                    <div
                      key={op.name}
                      title={op.name}
                      className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#E4E7F0] bg-white overflow-hidden p-1 transition-all hover:border-[#111948]/30 hover:shadow-sm"
                    >
                      {op.logo ? (
                        <Image
                          src={op.logo}
                          alt={op.name}
                          width={28}
                          height={28}
                          className="h-full w-full object-contain"
                        />
                      ) : (
                        <span className="text-[9px] font-bold text-[#111948]">{op.short}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badge — top right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute -top-4 -right-2 lg:-right-6 flex items-center gap-2 rounded-2xl border border-[#FFCC00]/40 bg-[#FFCC00] px-4 py-2.5 shadow-lg shadow-[#FFCC00]/20"
            >
              <Star className="h-4 w-4 fill-[#111948] text-[#111948]" />
              <div>
                <p className="text-xs font-bold text-[#111948] leading-none">98% de satisfação</p>
                <p className="text-[10px] text-[#111948]/70 mt-0.5">dos clientes</p>
              </div>
            </motion.div>

            {/* Floating badge — bottom left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute -bottom-4 -left-2 lg:-left-6 flex items-center gap-2.5 rounded-2xl border border-[#E4E7F0] bg-white px-4 py-2.5 shadow-lg shadow-[#111948]/8"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#21A621]/10">
                <Shield className="h-4 w-4 text-[#21A621]" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#111948] leading-none">Sem custo de consultoria</p>
                <p className="text-[10px] text-slate-400 mt-0.5">100% gratuito para você</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="mt-12 flex justify-center"
        >
          <button
            onClick={() => document.getElementById("problemas")?.scrollIntoView({ behavior: "smooth" })}
            className="flex flex-col items-center gap-2 text-slate-300 hover:text-[#111948] transition-colors"
            aria-label="Rolar para baixo"
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="h-6 w-6" />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

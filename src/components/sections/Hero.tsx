"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import {
  ArrowRight,
  Star,
  TrendingUp,
  Shield,
  Users,
  ChevronDown,
} from "lucide-react";

const operators = [
  { name: "Amil", short: "AM" },
  { name: "SulAmérica", short: "SA" },
  { name: "Bradesco", short: "BR" },
  { name: "Omint", short: "OM" },
  { name: "NotreDame", short: "ND" },
  { name: "Porto", short: "PT" },
];

const stats = [
  { value: 15, suffix: "+", label: "Anos de mercado", icon: TrendingUp },
  { value: 300, suffix: "+", label: "Empresas atendidas", icon: Users },
  { value: 98, suffix: "%", label: "Satisfação dos clientes", icon: Star },
  { value: 5000, suffix: "+", label: "Vidas protegidas", icon: Shield },
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
      className="relative min-h-screen overflow-hidden flex items-center pt-20 pb-16 bg-white"
    >
      {/* Decorative background shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="hero-shape-1 absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-[#111948]/5" />
        <div className="hero-shape-2 absolute bottom-0 -left-40 h-[400px] w-[400px] rounded-full bg-[#FFCC00]/10" />
        <div className="hero-shape-3 absolute top-1/2 right-1/4 h-[200px] w-[200px] rounded-full bg-[#21A621]/6" />
        {/* Accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#111948] via-[#FFCC00] to-[#21A621]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="mx-auto max-w-5xl">
          {/* Badge */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#111948]/15 bg-[#111948]/6 px-4 py-1.5 text-sm text-[#111948] font-medium"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#21A621] animate-pulse" />
            Consultoria estratégica em saúde corporativa
          </motion.div>

          {/* Headline */}
          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-4xl font-bold leading-[1.1] tracking-tight text-[#111948] md:text-5xl lg:text-6xl xl:text-7xl"
          >
            Transforme o plano de saúde{" "}
            <span className="relative">
              da sua empresa
              <span className="absolute -bottom-2 left-0 right-0 h-1 rounded-full bg-[#FFCC00]" />
            </span>{" "}
            em um diferencial competitivo.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-8 text-lg text-slate-500 max-w-2xl leading-relaxed md:text-xl"
          >
            A Fidele ajuda empresas exigentes a oferecerem saúde premium com
            suporte humanizado, redução da sobrecarga do RH e atendimento
            consultivo de verdade — do diagnóstico ao pós-venda.
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={3}
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
              Solicitar consultoria gratuita
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="xl"
              onClick={scrollToForm}
            >
              Comparar meu plano atual
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-8 flex items-center gap-4 text-sm text-slate-400"
          >
            <div className="flex -space-x-2">
              {["R", "M", "C", "A", "L"].map((letter, i) => (
                <div
                  key={i}
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#111948] text-xs font-bold text-white"
                >
                  {letter}
                </div>
              ))}
            </div>
            <span>
              Mais de <strong className="text-[#111948]">300 empresas</strong> já confiam na Fidele
            </span>
          </motion.div>

          {/* Operators */}
          <motion.div
            custom={5}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-12"
          >
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
              Acesso às principais operadoras do Brasil
            </p>
            <div className="flex flex-wrap items-center gap-2">
              {operators.map((op) => (
                <div
                  key={op.name}
                  className="flex items-center gap-2 rounded-xl border border-[#E4E7F0] bg-[#F7F8FC] px-4 py-2.5 text-sm font-medium text-[#111948] transition-all hover:border-[#111948]/30 hover:bg-white hover:shadow-sm"
                >
                  <div className="h-6 w-6 rounded-md bg-[#111948] flex items-center justify-center text-[10px] font-bold text-white">
                    {op.short}
                  </div>
                  {op.name}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl border border-[#E4E7F0] bg-[#E4E7F0] overflow-hidden shadow-sm"
        >
          {stats.map(({ value, suffix, label, icon: Icon }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center gap-2 bg-white p-6 text-center hover:bg-[#F7F8FC] transition-colors"
            >
              <Icon className="h-5 w-5 text-[#FFCC00] mb-1" />
              <div className="text-3xl font-bold text-[#111948] md:text-4xl">
                <AnimatedCounter end={value} suffix={suffix} />
              </div>
              <div className="text-xs text-slate-400 font-medium">{label}</div>
            </div>
          ))}
        </motion.div>

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

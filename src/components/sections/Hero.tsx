"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import type { Variants } from "framer-motion";
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
      gsap.to(".hero-glow-1", {
        x: 40,
        y: -30,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".hero-glow-2", {
        x: -30,
        y: 40,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 2,
      });
    }, bgRef);
    return () => ctx.revert();
  }, []);

  const scrollToForm = () =>
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      ref={bgRef}
      className="relative min-h-screen overflow-hidden flex items-center pt-20 pb-16"
    >
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="hero-glow-1 absolute top-1/4 left-1/4 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="hero-glow-2 absolute bottom-1/4 right-1/4 h-[500px] w-[500px] translate-x-1/2 translate-y-1/2 rounded-full bg-indigo-600/8 blur-[100px]" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="mx-auto max-w-5xl">
          {/* Badge */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/25 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-300"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
            Consultoria estratégica em saúde corporativa
          </motion.div>

          {/* Headline */}
          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl"
          >
            Transforme o plano de saúde{" "}
            <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-indigo-400 bg-clip-text text-transparent">
              da sua empresa
            </span>{" "}
            em um diferencial competitivo.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-6 text-lg text-slate-400 max-w-2xl leading-relaxed md:text-xl"
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
            className="mt-8 flex items-center gap-4 text-sm text-slate-500"
          >
            <div className="flex -space-x-2">
              {["R", "M", "C", "A", "L"].map((letter, i) => (
                <div
                  key={i}
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-slate-900 bg-gradient-to-br from-slate-700 to-slate-800 text-xs font-semibold text-slate-300"
                >
                  {letter}
                </div>
              ))}
            </div>
            <span>
              Mais de <strong className="text-white">300 empresas</strong> já confiam na Fidele
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
            <p className="text-xs font-medium text-slate-600 uppercase tracking-widest mb-4">
              Acesso às principais operadoras do Brasil
            </p>
            <div className="flex flex-wrap items-center gap-3">
              {operators.map((op) => (
                <div
                  key={op.name}
                  className="flex items-center gap-2 rounded-xl border border-white/8 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-slate-300 transition-all hover:border-white/15 hover:bg-white/[0.06]"
                >
                  <div className="h-6 w-6 rounded-md bg-gradient-to-br from-blue-600/40 to-blue-800/40 flex items-center justify-center text-[10px] font-bold text-blue-300">
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
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl border border-white/8 bg-white/8 overflow-hidden"
        >
          {stats.map(({ value, suffix, label, icon: Icon }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center gap-2 bg-slate-950 p-6 text-center"
            >
              <Icon className="h-5 w-5 text-blue-400 mb-1" />
              <div className="text-3xl font-bold text-white md:text-4xl">
                <AnimatedCounter end={value} suffix={suffix} />
              </div>
              <div className="text-xs text-slate-500 font-medium">{label}</div>
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
            className="flex flex-col items-center gap-2 text-slate-600 hover:text-slate-400 transition-colors"
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

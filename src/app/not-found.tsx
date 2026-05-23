"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Shield } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white">
      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#111948] via-[#FFCC00] to-[#21A621]" />
        <div className="absolute top-1/4 right-0 h-[400px] w-[400px] translate-x-1/2 rounded-full bg-[#111948]/5" />
        <div className="absolute bottom-1/4 left-0 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-[#FFCC00]/10" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-lg mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-2.5 mb-12"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#111948]">
            <Shield className="h-4 w-4 text-white" />
          </div>
          <span className="text-lg font-bold text-[#111948]">
            Fidele<span className="text-[#21A621]">.</span>
          </span>
        </motion.div>

        {/* 404 number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4"
        >
          <span className="text-[120px] font-black leading-none text-[#111948]/10 select-none">
            404
          </span>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-2xl font-bold text-[#111948] mb-3">
            Página não encontrada
          </h1>
          <p className="text-slate-500 leading-relaxed">
            A página que você está procurando não existe ou foi movida.
            Mas não se preocupe — estamos aqui para te ajudar a encontrar
            o melhor plano de saúde para sua empresa.
          </p>
        </motion.div>

        {/* Yellow accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto mb-8 h-1 w-16 rounded-full bg-[#FFCC00]"
        />

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <Link href="/">
            <Button variant="premium" size="lg" className="w-full sm:w-auto">
              <Home className="h-4 w-4" />
              Ir para o início
            </Button>
          </Link>
          <Link href="/#formulario">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              <ArrowLeft className="h-4 w-4" />
              Falar com consultor
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[#E4E7F0] bg-white/95 backdrop-blur-xl shadow-sm"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo-fidele-seguros.svg"
            alt="Fidele Seguros"
            width={110}
            height={43}
            priority
            unoptimized
            className="h-8 w-auto"
          />
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-500">
          {[
            { label: "Solução", id: "solucao" },
            { label: "Operadoras", id: "operadoras" },
            { label: "Benefícios", id: "beneficios" },
            { label: "Como funciona", id: "processo" },
            { label: "Depoimentos", id: "depoimentos" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="hover:text-[#111948] font-medium transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="premium"
            size="sm"
            onClick={() => scrollTo("formulario")}
          >
            Diagnóstico gratuito
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-[#111948] hover:text-[#21A621] transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-t border-[#E4E7F0] bg-white px-4 py-4 flex flex-col gap-4 shadow-lg"
        >
          {[
            { label: "Solução", id: "solucao" },
            { label: "Operadoras", id: "operadoras" },
            { label: "Benefícios", id: "beneficios" },
            { label: "Como funciona", id: "processo" },
            { label: "Depoimentos", id: "depoimentos" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-left text-[#1C1C1C] hover:text-[#111948] font-medium py-1 transition-colors"
            >
              {item.label}
            </button>
          ))}
          <Button
            variant="premium"
            className="w-full mt-2"
            onClick={() => scrollTo("formulario")}
          >
            Diagnóstico gratuito
          </Button>
        </motion.div>
      )}
    </motion.header>
  );
}

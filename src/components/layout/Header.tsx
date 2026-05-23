"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X, Shield } from "lucide-react";

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
          ? "border-b border-white/8 bg-slate-950/90 backdrop-blur-xl shadow-xl shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 shadow-lg shadow-blue-600/30">
            <Shield className="h-4 w-4 text-white" />
          </div>
          <span className="text-lg font-bold text-white tracking-tight">
            Fidele<span className="text-blue-400">.</span>
          </span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-400">
          <button onClick={() => scrollTo("solucao")} className="hover:text-white transition-colors">Solução</button>
          <button onClick={() => scrollTo("operadoras")} className="hover:text-white transition-colors">Operadoras</button>
          <button onClick={() => scrollTo("beneficios")} className="hover:text-white transition-colors">Benefícios</button>
          <button onClick={() => scrollTo("processo")} className="hover:text-white transition-colors">Como funciona</button>
          <button onClick={() => scrollTo("depoimentos")} className="hover:text-white transition-colors">Depoimentos</button>
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+5511999999999" className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors">
            <Phone className="h-4 w-4" />
            (11) 9 9999-9999
          </a>
          <Button
            variant="premium"
            size="sm"
            onClick={() => scrollTo("formulario")}
          >
            Consultoria gratuita
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-slate-400 hover:text-white transition-colors"
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
          className="md:hidden border-t border-white/8 bg-slate-950/98 backdrop-blur-xl px-4 py-4 flex flex-col gap-4"
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
              className="text-left text-slate-300 hover:text-white py-1 transition-colors"
            >
              {item.label}
            </button>
          ))}
          <Button
            variant="premium"
            className="w-full mt-2"
            onClick={() => scrollTo("formulario")}
          >
            Consultoria gratuita
          </Button>
        </motion.div>
      )}
    </motion.header>
  );
}

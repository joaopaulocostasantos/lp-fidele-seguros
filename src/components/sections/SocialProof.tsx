"use client";

import { motion } from "framer-motion";
import { Star, Quote, Users } from "lucide-react";

const testimonials = [
  {
    name: "Ana Paula Ferreira",
    role: "Professora",
    company: "Família de 4 pessoas",
    segment: "São Paulo · Plano há 5 anos",
    content:
      "Estava pagando R$ 1.800 por mês pelo mesmo plano faz 4 anos. A Fidele me mostrou uma alternativa com a mesma rede, incluindo Einstein, por R$ 400 a menos. O processo foi simples e sem burocracia nenhuma.",
    rating: 5,
    highlight: "Economia de R$ 400/mês com a mesma rede.",
    initials: "AF",
  },
  {
    name: "Ricardo Nogueira",
    role: "Engenheiro",
    company: "Família de 3 pessoas",
    segment: "Campinas · Plano há 6 anos",
    content:
      "Nunca tinha questionado o plano. Quando a Fidele fez a análise, descobri que tinha cobertura duplicada com uma carência que eu nem sabia. Encontramos um plano mais adequado — e mais barato.",
    rating: 5,
    highlight: "Encontrou cobertura duplicada que eu pagava sem saber.",
    initials: "RN",
  },
  {
    name: "Carla Monteiro",
    role: "Médica",
    company: "Família de 5 pessoas",
    segment: "São Paulo · Plano há 8 anos",
    content:
      "Como médica, sabia o que queria — Sírio-Libanês na rede e boa cobertura de exames. A Fidele encontrou um plano que atende tudo isso por um preço que não me fez pagar por cobertura que eu nunca usaria.",
    rating: 5,
    highlight: "Sírio-Libanês na rede com custo otimizado.",
    initials: "CM",
  },
  {
    name: "Marcos Alves",
    role: "Empresário",
    company: "Família de 4 pessoas",
    segment: "Santo André · Plano há 4 anos",
    content:
      "O reajuste veio de R$ 2.100 para R$ 2.600 sem nenhuma explicação. Liguei pra Fidele, fizeram o diagnóstico e em duas semanas eu tinha um plano melhor por R$ 1.900. Não tem por que não fazer.",
    rating: 5,
    highlight: "De R$ 2.600 para R$ 1.900 com cobertura superior.",
    initials: "MA",
  },
  {
    name: "Juliana Costa",
    role: "Advogada",
    company: "Família de 3 pessoas",
    segment: "São Paulo · Plano há 3 anos",
    content:
      "Tinha medo de mudar e perder a cobertura. A Fidele me mostrou exatamente o que cada alternativa cobria antes de eu decidir. No final migrei com tranquilidade e economizei R$ 350 por mês.",
    rating: 5,
    highlight: "Economizou R$ 350/mês sem abrir mão da cobertura.",
    initials: "JC",
  },
  {
    name: "Fernando Lima",
    role: "Contador",
    company: "Família de 5 pessoas",
    segment: "São Paulo · Plano há 7 anos",
    content:
      "Família grande, plano caro. Sempre achei que tinha pouca opção. A Fidele comparou todas as operadoras e encontrou algo que eu nunca teria achado sozinho — com Fleury na rede e valor bem mais razoável.",
    rating: 5,
    highlight: "Fleury na rede com R$ 500 de economia mensal.",
    initials: "FL",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-[#FFCC00] text-[#FFCC00]" />
      ))}
    </div>
  );
}

export function SocialProof() {
  return (
    <section id="depoimentos" className="relative py-24 bg-[#F7F8FC]">
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#111948]/15 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#FFCC00]/40 bg-[#FFCC00]/10 px-4 py-1.5 text-sm text-[#111948] font-medium">
            <Star className="h-3.5 w-3.5 fill-[#FFCC00] text-[#FFCC00]" />
            Quem já fez o diagnóstico
          </div>
          <h2 className="text-3xl font-bold text-[#111948] md:text-4xl lg:text-5xl">
            Famílias que revisaram o plano com a Fidele{" "}
            <span className="text-slate-400">falam por si.</span>
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            Veja o que descobriram — e o que mudou depois do diagnóstico gratuito.
          </p>

          {/* Global rating */}
          <div className="mt-6 inline-flex items-center gap-2 sm:gap-3 rounded-2xl border border-[#E4E7F0] bg-white px-4 sm:px-6 py-3 shadow-sm">
            <StarRating count={5} />
            <div className="h-4 w-px bg-[#E4E7F0]" />
            <span className="text-sm font-bold text-[#111948]">4.9/5</span>
            <span className="text-sm text-slate-400">· 300+ avaliações</span>
          </div>
        </motion.div>

        {/* Testimonials masonry grid */}
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="mb-4 break-inside-avoid rounded-2xl border border-[#E4E7F0] bg-white p-6 transition-all duration-300 hover:border-[#111948]/20 hover:shadow-md"
            >
              <Quote className="h-6 w-6 text-[#FFCC00] mb-3" />

              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                &ldquo;{t.content}&rdquo;
              </p>

              {/* Highlight */}
              <div className="mb-4 rounded-xl border-l-3 border-[#21A621] bg-[#21A621]/6 px-3 py-2">
                <p className="text-xs font-semibold text-[#21A621]">{t.highlight}</p>
              </div>

              <StarRating count={t.rating} />

              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#111948] text-sm font-bold text-white shadow-md shadow-[#111948]/15">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#111948]">{t.name}</div>
                  <div className="text-xs text-slate-400">{t.role} · {t.company}</div>
                </div>
              </div>

              <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-400">
                <Users className="h-3 w-3" />
                {t.segment}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Star, Quote, Building2 } from "lucide-react";

const testimonials = [
  {
    name: "Rafaela Mendonça",
    role: "Head de RH",
    company: "Nexus Tech",
    segment: "Tecnologia · 45 colaboradores",
    content:
      "Antes da Fidele, meu RH passava horas por semana lidando com problemas do plano de saúde. Hoje tenho um consultor que resolve tudo. A qualidade do atendimento é incomparável com o que tínhamos antes.",
    rating: 5,
    highlight: "Reduzimos em 80% o tempo do RH com gestão de saúde.",
    initials: "RM",
  },
  {
    name: "Carlos Drummond",
    role: "CEO",
    company: "Advocacia Drummond & Partners",
    segment: "Jurídico · 28 colaboradores",
    content:
      "Trocamos de corretora após anos de frustração. A diferença é absurda. A Fidele faz o que promete: presença real, solução rápida e um plano que meus sócios e funcionários realmente elogiam.",
    rating: 5,
    highlight: "Colaboradores elogiam o plano pela primeira vez.",
    initials: "CD",
  },
  {
    name: "Marina Costa",
    role: "Diretora de Pessoas",
    company: "Vivo Clínica",
    segment: "Saúde · 62 colaboradores",
    content:
      "A Fidele nos ajudou a negociar um contrato 18% mais barato com uma cobertura muito superior. E quando precisamos de apoio, eles estão lá. Isso vale muito para uma equipe de saúde exigente.",
    rating: 5,
    highlight: "18% de economia com cobertura superior.",
    initials: "MC",
  },
  {
    name: "Thiago Balbino",
    role: "CFO",
    company: "Balbino Consultores",
    segment: "Consultoria · 17 colaboradores",
    content:
      "Como CFO, me preocupava o custo. A Fidele me apresentou uma análise de ROI que mostrou como o benefício premium impacta diretamente na retenção. Hoje entendo que não é custo, é investimento.",
    rating: 5,
    highlight: "ROI comprovado em retenção de talentos.",
    initials: "TB",
  },
  {
    name: "Fernanda Luz",
    role: "Gerente de RH",
    company: "EduTech Brasil",
    segment: "Educação · 38 colaboradores",
    content:
      "Nossa startup cresceu rápido e precisávamos de um benefício de saúde que crescesse conosco. A Fidele entendeu nossa dinâmica e entregou uma solução escalável com atendimento premium.",
    rating: 5,
    highlight: "Solução que cresce junto com a empresa.",
    initials: "FL",
  },
  {
    name: "Paulo Saraiva",
    role: "Sócio-fundador",
    company: "Saraiva & Filhos Holding",
    segment: "Holding · 54 colaboradores",
    content:
      "Temos colaboradores muito exigentes. A Fidele nos conectou com a Omint e o resultado foi imediato: zero reclamações sobre o plano de saúde. Isso não tem preço para o clima da empresa.",
    rating: 5,
    highlight: "Zero reclamações sobre saúde em 12 meses.",
    initials: "PS",
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
            Prova social
          </div>
          <h2 className="text-3xl font-bold text-[#111948] md:text-4xl lg:text-5xl">
            Empresas que confiam na Fidele{" "}
            <span className="text-slate-400">falam por si.</span>
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            Mais de 300 empresas em São Paulo já transformaram sua experiência
            com benefícios de saúde. Veja o que elas dizem.
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
                <Building2 className="h-3 w-3" />
                {t.segment}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

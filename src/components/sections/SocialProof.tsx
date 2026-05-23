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
    color: "from-violet-600 to-violet-800",
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
    color: "from-blue-600 to-blue-800",
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
    color: "from-emerald-600 to-emerald-800",
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
    color: "from-amber-600 to-amber-800",
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
    color: "from-pink-600 to-pink-800",
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
    color: "from-indigo-600 to-indigo-800",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export function SocialProof() {
  return (
    <section id="depoimentos" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-indigo-600/6 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-500/25 bg-amber-500/10 px-4 py-1.5 text-sm text-amber-300">
            <Star className="h-3.5 w-3.5 fill-amber-400" />
            Prova social
          </div>
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Empresas que confiam na Fidele{" "}
            <span className="text-slate-400">falam por si.</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Mais de 300 empresas em São Paulo já transformaram sua experiência
            com benefícios de saúde. Veja o que elas dizem.
          </p>

          {/* Global rating */}
          <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.03] px-6 py-3">
            <StarRating count={5} />
            <div className="h-4 w-px bg-white/15" />
            <span className="text-sm font-semibold text-white">4.9/5</span>
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
              className="mb-4 break-inside-avoid rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.04]"
            >
              <Quote className="h-6 w-6 text-blue-400/50 mb-3" />

              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                &ldquo;{t.content}&rdquo;
              </p>

              {/* Highlight */}
              <div className="mb-4 rounded-xl border border-blue-500/15 bg-blue-500/8 px-3 py-2">
                <p className="text-xs font-semibold text-blue-300">{t.highlight}</p>
              </div>

              <StarRating count={t.rating} />

              <div className="mt-4 flex items-center gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${t.color} text-sm font-bold text-white shadow-lg`}>
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-slate-400">{t.role} · {t.company}</div>
                </div>
              </div>

              <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-600">
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

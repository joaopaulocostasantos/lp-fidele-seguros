import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Problems } from "@/components/sections/Problems";
import { Solution } from "@/components/sections/Solution";
import { Partners } from "@/components/sections/Partners";
import { Benefits } from "@/components/sections/Benefits";
import { SocialProof } from "@/components/sections/SocialProof";
import { Process } from "@/components/sections/Process";
import { LeadForm } from "@/components/sections/LeadForm";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problems />
        <Solution />
        <Partners />
        <Benefits />
        <SocialProof />
        <Process />
        {/*
          TODO — SEÇÃO FAQ (não existe na estrutura atual)
          Inserir aqui um novo componente <Faq /> com as seguintes objeções:
          1. "Trocar de plano é muito complicado." → A Fidele cuida de todo o processo. Você só decide.
          2. "Tenho medo de perder a cobertura que tenho hoje." → O diagnóstico mostra o que você tem hoje e o que cada alternativa oferece. Você só migra se a nova opção for igual ou melhor.
          3. "Já tenho um corretor de confiança." → A análise é gratuita e não gera compromisso. Se o plano atual for o melhor — a gente fala isso também.
          4. "O diagnóstico é realmente gratuito?" → Sim. Sem custo, sem taxa e sem compromisso de contratação.
        */}
        <LeadForm />
      </main>
      <Footer />
    </>
  );
}

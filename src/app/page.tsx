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
        <LeadForm />
      </main>
      <Footer />
    </>
  );
}

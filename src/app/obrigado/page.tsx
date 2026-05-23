import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThankYouContent } from "@/components/sections/ThankYouContent";

export const metadata: Metadata = {
  title: "Solicitação Recebida | Fidele Seguros",
  description:
    "Sua solicitação de consultoria foi recebida. Um especialista da Fidele entrará em contato em breve.",
  robots: { index: false, follow: false },
};

export default function ObrigadoPage() {
  return (
    <>
      <Header />
      <main>
        <ThankYouContent />
      </main>
      <Footer />
    </>
  );
}

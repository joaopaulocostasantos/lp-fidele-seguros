import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { StickyCtaMobile } from "@/components/shared/StickyCtaMobile";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://www.fideleseguros.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Fidele Seguros | Diagnóstico Gratuito de Plano de Saúde para Famílias",
    template: "%s | Fidele Seguros",
  },
  description:
    "Seu plano de saúde aumentou de novo esse ano? A Fidele faz um diagnóstico gratuito do seu plano atual e mostra se você está pagando mais do que deveria. Para famílias de 3 a 5 pessoas.",
  keywords: [
    "plano de saúde familiar",
    "corretora de saúde",
    "diagnóstico plano de saúde",
    "plano de saúde para família",
    "reajuste plano de saúde",
    "melhor plano de saúde",
    "comparar planos de saúde",
    "Amil plano de saúde",
    "Bradesco Saúde",
    "SulAmérica saúde",
    "Omint saúde",
    "Einstein Sírio-Libanês Fleury",
    "corretora de plano de saúde",
    "plano de saúde barato",
  ],
  authors: [{ name: "Fidele Corretora de Seguros" }],
  creator: "Fidele",
  publisher: "Fidele Corretora de Seguros",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Fidele Seguros",
    title: "Fidele | Diagnóstico Gratuito de Plano de Saúde para Famílias",
    description:
      "Seu plano aumentou de novo? Faça um diagnóstico gratuito com a Fidele e descubra se você está no plano certo para a sua família.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fidele Seguros - Diagnóstico de Plano de Saúde para Famílias",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fidele | Diagnóstico Gratuito de Plano de Saúde para Famílias",
    description:
      "Seu plano aumentou de novo? Descubra se você está pagando mais do que deveria. Diagnóstico gratuito para famílias.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#111948",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  name: "Fidele Corretora de Seguros",
  description:
    "Diagnóstico gratuito e consultoria em planos de saúde para famílias de 3 a 5 pessoas. Especialistas em comparar operadoras e encontrar o plano certo para o seu perfil.",
  url: siteUrl,
  telephone: "+5511999999999",
  email: "contato@fideleseguros.com.br",
  address: {
    "@type": "PostalAddress",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  areaServed: {
    "@type": "City",
    name: "São Paulo",
  },
  foundingDate: "2009",
  numberOfEmployees: { "@type": "QuantitativeValue", value: 20 },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "300",
    bestRating: "5",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Meta Pixel placeholder — replace YOUR_PIXEL_ID */}
        {process.env.NEXT_PUBLIC_META_PIXEL_ID && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL_ID}');
                fbq('track', 'PageView');
              `,
            }}
          />
        )}
        {/* Google Ads placeholder */}
        {process.env.NEXT_PUBLIC_GOOGLE_ADS_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="min-h-full flex flex-col bg-white">
        {children}
        <StickyCtaMobile />
      </body>
    </html>
  );
}

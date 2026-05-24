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
    default: "Fidele Seguros | Planos de Saúde Empresariais Premium em São Paulo",
    template: "%s | Fidele Seguros",
  },
  description:
    "A Fidele é a corretora de saúde corporativa premium que oferece atendimento consultivo, suporte humanizado ao RH e acesso às melhores operadoras do Brasil. Para empresas de 5 a 100 vidas em São Paulo.",
  keywords: [
    "plano de saúde empresarial",
    "corretora de saúde corporativa",
    "saúde empresarial São Paulo",
    "plano de saúde para empresas",
    "benefícios corporativos",
    "plano de saúde PME",
    "consultoria saúde empresarial",
    "Amil empresarial",
    "Bradesco Saúde empresarial",
    "SulAmérica empresarial",
    "Omint empresarial",
    "saúde corporativa premium",
    "RH benefícios",
    "retenção de talentos",
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
    title: "Fidele | Planos de Saúde Empresariais Premium",
    description:
      "Consultoria estratégica em benefícios corporativos. Atendimento humanizado, suporte ao RH e acesso às melhores operadoras do Brasil.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fidele Seguros - Saúde Corporativa Premium",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fidele | Planos de Saúde Empresariais Premium",
    description:
      "Consultoria estratégica em benefícios corporativos. Atendimento humanizado e suporte real ao RH.",
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
    "Consultoria estratégica em planos de saúde empresariais premium para empresas de 5 a 100 vidas em São Paulo.",
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

// app/layout.tsx
import { CONTACT, HOME } from "@/lib/content";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Sora } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
});

const BASE_URL = "https://logosnext.com.br";
const OG_IMAGE = `${BASE_URL}/imgs/og-logo-next.webp`;

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: HOME.meta.title,
  description: HOME.meta.description,
  alternates: { canonical: BASE_URL },
  robots: { index: true, follow: true },
  publisher: "Logos Next",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: BASE_URL,
    siteName: "Logos Next",
    title: HOME.meta.title,
    description: HOME.meta.description,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Logos Next — Engenharia de automação e IA" }],
  },
  twitter: {
    card: "summary_large_image",
    title: HOME.meta.title,
    description: HOME.meta.description,
    images: [OG_IMAGE],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}#organization`,
      name: "Logos Next",
      url: BASE_URL,
      logo: OG_IMAGE,
      description:
        "Engenharia de automação e IA para pequenas e médias empresas: automação de processos, integração de sistemas e IA aplicada, sem trocar o que já funciona.",
      sameAs: [CONTACT.linkedin, CONTACT.instagram],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+55-21-97586-1809",
          email: CONTACT.email,
          contactType: "sales",
          areaServed: "BR",
          availableLanguage: ["Portuguese"],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}#website`,
      url: BASE_URL,
      name: "Logos Next",
      publisher: { "@id": `${BASE_URL}#organization` },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "O que a Logos Next faz?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A Logos Next é uma empresa de engenharia de automação e IA. Automatizamos tarefas repetitivas e integramos os sistemas, o WhatsApp e as planilhas que a empresa já usa.",
          },
        },
        {
          "@type": "Question",
          name: "Quais setores a Logos Next atende?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Atendemos principalmente corretoras de seguros, escritórios de contabilidade e imobiliárias, além de outras pequenas e médias empresas com operação repetitiva.",
          },
        },
        {
          "@type": "Question",
          name: "Como funciona a contratação?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Em três etapas: diagnóstico gratuito, projeto com escopo e preço combinados desde o início (ou uma prova de conceito para começar pequeno) e um plano mensal de operação e evolução.",
          },
        },
        {
          "@type": "Question",
          name: "Atendem empresas em todo o Brasil?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim. O atendimento é remoto, para empresas de todo o Brasil.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${sora.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <Script
          id="logosnext-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />

        {/* Google Ads */}
        <Script
          id="google-ads"
          src="https://www.googletagmanager.com/gtag/js?id=AW-18144251664"
          strategy="afterInteractive"
        />
        <Script
          id="google-ads-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-18144251664');
            `,
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}

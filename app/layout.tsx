// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: true,
});

// Poppins substitui o @import do Google Fonts no CSS
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
  display: "swap",
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: "Logos Next | Transformando sonhos em realidade",
  description:
    "Consultoria de TI especializada em transformação digital, desenvolvimento de software, infraestrutura e segurança. Oferecemos soluções sob medida, suporte contínuo e parceria estratégica para acelerar seu negócio com tecnologia confiável.",
  alternates: { canonical: "https://logosnext.com.br" },
  robots: { index: true, follow: true },
  publisher: "Logos Next",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://logosnext.com.br",
    siteName: "Logos Next",
    title: "Logos Next | Transformando sonhos em realidade",
    description:
      "Consultoria de TI especializada em transformação digital, desenvolvimento de software, infraestrutura e segurança. Oferecemos soluções sob medida, suporte contínuo e parceria estratégica para acelerar seu negócio com tecnologia confiável.",
    images: [
      {
        url: "https://logosnext.com.br/og-logo-next.png",
        width: 1200,
        height: 630,
        alt: "Logos Next - Consultoria de TI",
        type: "image/jpeg",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@logos_next",
    title: "Logos Next | Transformando sonhos em realidade",
    description:
      "Consultoria de TI especializada em transformação digital, desenvolvimento de software, infraestrutura e segurança. Oferecemos soluções sob medida, suporte contínuo e parceria estratégica para acelerar seu negócio com tecnologia confiável.",
    images: [
      "https://logosnext.com.br/og-logo-next.png"
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable}`}
    >
      <head>
        <Script
          id="logosnext-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://logosnext.com.br#organization",
                  name: "Logos Next",
                  url: "https://logosnext.com.br",
                  logo: "https://logosnext.com.br/imgs/og-logo-next.webp",
                  description:
                    "Consultoria de TI especializada em transformação digital, automação inteligente, desenvolvimento de software e infraestrutura.",
                  sameAs: [
                    "https://www.linkedin.com/company/logosnext/",
                    "https://www.instagram.com/logosnext/",
                    "https://x.com/logosnext"
                  ],
                  contactPoint: [
                    {
                      "@type": "ContactPoint",
                      telephone: "+55-11-99999-9999",
                      contactType: "Atendimento ao cliente",
                      areaServed: "BR",
                      availableLanguage: ["Portuguese", "English"],
                    },
                  ],
                  founder: {
                    "@type": "Person",
                    name: "Daniel",
                    jobTitle: "Desenvolvedor e fundador da Logos Next",
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://logosnext.com.br#website",
                  url: "https://logosnext.com.br",
                  name: "Logos Next",
                  publisher: { "@id": "https://logosnext.com.br#organization" },
                  potentialAction: {
                    "@type": "SearchAction",
                    target:
                      "https://logosnext.com.br/search?q={search_term_string}",
                    "query-input": "required name=search_term_string",
                  },
                },
                {
                  "@type": "FAQPage",
                  mainEntity: [
                    {
                      "@type": "Question",
                      name: "O que a Logos Next faz?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "A Logos Next é uma consultoria de TI especializada em automação inteligente, integração de sistemas e desenvolvimento sob medida para pequenas e médias empresas.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Quais serviços a Logos Next oferece?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Oferecemos soluções de automação de processos, integração de sistemas, desenvolvimento de software personalizado, infraestrutura em nuvem e consultoria em tecnologia.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Atendem empresas em todo o Brasil?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Sim. Atendemos empresas de todo o Brasil com soluções remotas e personalizadas, além de suporte técnico contínuo.",
                      },
                    },
                  ],
                },
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}

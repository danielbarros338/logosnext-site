// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
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
      <body className="antialiased">{children}</body>
    </html>
  );
}

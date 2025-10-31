import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Logos Next | Transformado sonhos em realidade",
  description:
    "Consultoria de TI especializada em transformação digital, desenvolvimento de software, infraestrutura e segurança. Oferecemos soluções sob medida, suporte contínuo e parceria estratégica para acelerar seu negócio com tecnologia confiável.",
  alternates: {
    canonical: "https://logosnext.com.br",
  },
  robots: {
    index: true,
    follow: true,
  },
  publisher: "Logos Next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

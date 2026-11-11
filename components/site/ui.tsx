import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "./icons";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1200px] px-5 ${className}`}>{children}</div>;
}

export function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p
      className={`flex items-center gap-2.5 font-mono text-[13px] font-medium uppercase tracking-[0.12em] ${
        dark ? "text-brand-300" : "text-brand-600"
      }`}
    >
      <span className="h-2 w-2 rounded-full bg-cyan-400" aria-hidden />
      {children}
    </p>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  dark = false,
  className = "",
}: {
  eyebrow: string;
  title: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={`flex max-w-[760px] flex-col gap-5 ${className}`}>
      <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      <h2
        className={`font-display text-[32px] font-bold leading-[1.12] tracking-[-0.015em] lg:text-[48px] ${
          dark ? "text-white" : "text-ink-900"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}

type ButtonVariant = "primary" | "light" | "outline-dark";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-brand-600 text-white hover:bg-brand-500",
  light: "bg-white text-navy-950 hover:bg-white/90",
  "outline-dark": "border border-white/30 text-white hover:border-white/60 hover:bg-white/5",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-4 text-base font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-300 ${variants[variant]} ${className}`}
    >
      {children}
      <ArrowRight />
    </Link>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-3.5 ${className}`}>
      <Image src="/imgs/logo-mark-white.png" alt="" width={40} height={40} className="h-10 w-10" priority />
      <Image
        src="/imgs/logo-wordmark-white.png"
        alt="Logos Next"
        width={177}
        height={11}
        className="h-[11px] w-auto"
        priority
      />
    </span>
  );
}

export function NoteBox({ children }: { children: ReactNode }) {
  return (
    <div className="flex gap-5 rounded-2xl bg-brand-50 px-6 py-5">
      <span className="w-1 shrink-0 rounded-sm bg-brand-600" aria-hidden />
      <p className="text-base leading-relaxed text-ink-900">{children}</p>
    </div>
  );
}

export function ValueCard({
  number,
  title,
  description,
  interactive = false,
}: {
  number?: string;
  title: string;
  description: string;
  /** Destaque ao passar o mouse (mesma linguagem dos cards de setores, em versão clara). */
  interactive?: boolean;
}) {
  return (
    <article
      className={`group relative flex flex-col gap-4 overflow-hidden rounded-[20px] border border-ink-100 bg-white p-7 ${
        interactive
          ? "transition-[border-color,box-shadow,translate] duration-300 ease-out hover:border-brand-300 hover:shadow-[0_20px_45px_-20px_rgba(1,99,234,0.35)] motion-safe:hover:-translate-y-1"
          : ""
      }`}
    >
      {interactive && (
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          aria-hidden
        />
      )}
      {number && <span className="relative font-mono text-[13px] font-medium text-brand-600">{number}</span>}
      <h3
        className={`relative font-display text-[22px] font-semibold leading-tight text-ink-900 ${
          interactive ? "transition-colors duration-300 group-hover:text-brand-600" : ""
        }`}
      >
        {title}
      </h3>
      <p className="relative text-[15px] leading-[1.55] text-ink-600">{description}</p>
    </article>
  );
}

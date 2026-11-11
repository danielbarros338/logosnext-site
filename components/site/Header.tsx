"use client";

import { CONTACT, NAV_SECTORS } from "@/lib/content";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown, CloseIcon, InstagramIcon, LinkedInIcon, MenuIcon } from "./icons";
import { ButtonLink, Logo } from "./ui";

const LINKS = [
  { label: "Início", href: "/" },
  { label: "Como funciona", href: "/#como-funciona" },
  { label: "Sobre", href: "/#sobre" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="relative z-30">
      <nav
        aria-label="Principal"
        className="flex items-center justify-between rounded-full border border-white/12 bg-white/[0.06] py-2 pl-5 pr-2 backdrop-blur-xl lg:py-2.5 lg:pl-6"
      >
        <Link href="/" aria-label="Logos Next — página inicial">
          <Logo />
        </Link>

        <ul className="hidden items-center gap-10 text-[15px] font-medium text-white/70 lg:flex">
          <li>
            <Link href="/" className="text-white transition-colors hover:text-white">
              Início
            </Link>
          </li>
          <li className="group relative">
            <button
              type="button"
              className="flex items-center gap-1 transition-colors hover:text-white"
              aria-haspopup="true"
            >
              Setores <ChevronDown />
            </button>
            <div className="invisible absolute left-1/2 top-full z-40 w-52 -translate-x-1/2 pt-4 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
              <ul className="rounded-2xl border border-white/10 bg-navy-900/95 p-2 shadow-2xl backdrop-blur-xl">
                {NAV_SECTORS.map((s) => (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      className="block rounded-xl px-4 py-2.5 text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                    >
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          {LINKS.slice(1).map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="transition-colors hover:text-white">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <ButtonLink href="#contato" variant="light" className="!py-3.5 text-[15px]">
            Agendar diagnóstico gratuito
          </ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="grid h-[42px] w-[42px] place-items-center rounded-full bg-white text-navy-950 lg:hidden"
          aria-label="Abrir menu"
          aria-expanded={open}
        >
          <MenuIcon />
        </button>
      </nav>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-50 overflow-y-auto bg-navy-950 px-5 pb-10 pt-4 lg:hidden"
        >
          <div
            className="pointer-events-none absolute -bottom-40 -left-36 h-[440px] w-[440px] rounded-full bg-brand-600/55 blur-[140px]"
            aria-hidden
          />
          <div className="relative flex items-center justify-between rounded-full border border-white/12 bg-white/[0.06] py-2 pl-5 pr-2">
            <Link href="/" onClick={close} aria-label="Logos Next — página inicial">
              <Logo />
            </Link>
            <button
              type="button"
              onClick={close}
              className="grid h-[42px] w-[42px] place-items-center rounded-full bg-white text-navy-950"
              aria-label="Fechar menu"
            >
              <CloseIcon />
            </button>
          </div>

          <p className="relative mt-10 font-mono text-xs font-medium uppercase tracking-[0.12em] text-brand-300">
            Navegação
          </p>
          <ul className="relative mt-2">
            {[LINKS[0], { label: "Setores", href: "/#setores" }, ...LINKS.slice(1)].map((l, i) => (
              <li key={l.href} className="border-b border-white/10">
                <Link
                  href={l.href}
                  onClick={close}
                  className={`flex items-center justify-between py-4 font-display text-[30px] font-semibold ${
                    i === 0 ? "text-brand-300" : "text-white"
                  }`}
                >
                  {l.label}
                  <ArrowRight className={i === 0 ? "text-brand-300" : "text-white/40"} />
                </Link>
                {l.label === "Setores" && (
                  <ul className="-mt-1 flex flex-wrap gap-2 pb-4">
                    {NAV_SECTORS.map((s) => (
                      <li key={s.href}>
                        <Link
                          href={s.href}
                          onClick={close}
                          className="inline-block rounded-full border border-white/15 px-4 py-2 text-sm text-white/80"
                        >
                          {s.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <ButtonLink href="#contato" onClick={close} className="relative mt-10 w-full">
            Agendar diagnóstico gratuito
          </ButtonLink>

          <div className="relative mt-10 space-y-2 text-[15px] text-white/70">
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-ink-400">Fale com a gente</p>
            <a href={`mailto:${CONTACT.email}`} className="block">
              {CONTACT.email}
            </a>
            <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="block">
              {CONTACT.whatsappDisplay}
            </a>
            <p>Atendimento remoto em todo o Brasil</p>
          </div>

          <div className="relative mt-8 flex gap-3 text-white">
            <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid h-11 w-11 place-items-center rounded-full border border-white/20">
              <LinkedInIcon />
            </a>
            <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid h-11 w-11 place-items-center rounded-full border border-white/20">
              <InstagramIcon />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

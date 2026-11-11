import { CONTACT } from "@/lib/content";
import Link from "next/link";
import { InstagramIcon, LinkedInIcon } from "./icons";
import { Container, Logo } from "./ui";

const LINKS = [
  { label: "Início", href: "/" },
  { label: "Setores", href: "/#setores" },
  { label: "Como funciona", href: "/#como-funciona" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <Container className="flex flex-col gap-7 pb-8 pt-12 lg:gap-10 lg:pb-10 lg:pt-16">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" aria-label="Logos Next — página inicial">
            <Logo />
          </Link>
          <ul className="hidden gap-9 text-[15px] font-medium text-white/70 lg:flex">
            {LINKS.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-3">
            <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid h-11 w-11 place-items-center rounded-full border border-white/18 transition-colors hover:border-white/50">
              <LinkedInIcon />
            </a>
            <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid h-11 w-11 place-items-center rounded-full border border-white/18 transition-colors hover:border-white/50">
              <InstagramIcon />
            </a>
          </div>
        </div>
        <hr className="border-white/10" />
        <div className="flex flex-col gap-1.5 text-sm text-white/55 lg:flex-row lg:justify-between">
          <p>Logos Next Tecnologia — Engenharia de automação e IA</p>
          <p>© {new Date().getFullYear()} Logos Next · Todos os direitos reservados</p>
        </div>
      </Container>
    </footer>
  );
}

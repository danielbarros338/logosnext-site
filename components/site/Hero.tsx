import type { PageContent } from "@/lib/content";
import Image from "next/image";
import Header from "./Header";
import { ButtonLink, Container } from "./ui";

// Posições das etiquetas ao redor do símbolo (desktop, órbita de 520px)
const CHIP_POSITIONS = [
  "left-[-90px] top-[70px]",
  "left-[310px] top-0",
  "left-[-20px] top-[430px]",
  "left-[290px] top-[472px]",
];

export default function Hero({ hero }: { hero: PageContent["hero"] }) {
  return (
    <section id="inicio" className="relative overflow-hidden bg-navy-950">
      {/* Grade e brilhos decorativos */}
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden />
      <div
        className="pointer-events-none absolute -right-40 top-10 h-[460px] w-[460px] rounded-full bg-brand-600/55 blur-[150px] lg:right-[-80px] lg:h-[760px] lg:w-[760px] lg:blur-[220px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-20 top-[560px] hidden h-[360px] w-[360px] rounded-full bg-cyan-400/25 blur-[180px] lg:block"
        aria-hidden
      />

      <Container className="relative pb-16 pt-4 lg:pb-30 lg:pt-7">
        <Header />

        <div className="mt-12 flex flex-col items-center gap-10 lg:mt-24 lg:flex-row lg:justify-between">
          <div className="flex w-full flex-col gap-8 lg:max-w-[640px]">
            <p className="flex w-fit items-center gap-2.5 rounded-full border border-brand-300/30 bg-brand-600/15 py-1.5 pl-1.5 pr-4 text-sm font-medium text-brand-300">
              <span className="rounded-full bg-brand-600 px-2.5 py-1 font-mono text-[11px] text-white">IA</span>
              {hero.badge}
            </p>

            <h1 className="font-display text-[38px] font-bold leading-[1.06] tracking-[-0.025em] lg:text-[60px]">
              <span className="block text-white">{hero.titleLine1}</span>
              <span className="block text-brand-300">{hero.titleLine2}</span>
            </h1>

            <p className="max-w-[580px] text-base leading-[1.6] text-white/72 lg:text-[19px]">{hero.description}</p>

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <ButtonLink href="#contato">Agendar diagnóstico gratuito</ButtonLink>
              <ButtonLink href={hero.secondaryCta.href} variant="outline-dark">
                {hero.secondaryCta.label}
              </ButtonLink>
            </div>
          </div>

          <div className="relative aspect-square w-[320px] shrink-0 lg:w-[520px]" aria-hidden>
            <div className="absolute inset-0 rounded-full border border-white/8" />
            <div className="absolute inset-[19%] rounded-full bg-brand-600/70 blur-[90px]" />
            <Image
              src="/imgs/logo-mark-white.png"
              alt=""
              width={346}
              height={347}
              className="absolute inset-[8.75%] h-[82.5%] w-[82.5%] lg:inset-[11.5%] lg:h-[77%] lg:w-[77%]"
              priority
            />
            {hero.chips.map((chip, i) => (
              <span
                key={chip}
                className={`absolute hidden items-center gap-2 rounded-xl border border-white/14 bg-navy-800/85 px-4 py-2.5 text-sm font-medium text-white shadow-[0_12px_32px_rgba(0,0,0,0.35)] backdrop-blur-md lg:flex ${CHIP_POSITIONS[i]}`}
              >
                <span className="h-2 w-2 rounded-full bg-cyan-400" />
                {chip}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

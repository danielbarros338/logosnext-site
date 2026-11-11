import { HOW_IT_WORKS, type PageContent } from "@/lib/content";
import Link from "next/link";
import { ArrowRight, CheckBadge, FeatureIcon, PlusBadge } from "./icons";
import { ButtonLink, Container, Eyebrow, NoteBox, SectionTitle, ValueCard } from "./ui";

const pad = (n: number) => String(n).padStart(2, "0");

export function Band({ items }: { items: string[] }) {
  return (
    <div className="bg-brand-600">
      <Container className="flex flex-col gap-2.5 py-6 lg:flex-row lg:items-center lg:justify-between lg:py-7">
        {items.map((item, i) => (
          <span key={item} className="flex items-center gap-8 font-display text-lg font-semibold text-white">
            {i > 0 && (
              <span className="hidden text-sm text-white/50 lg:inline" aria-hidden>
                ✦
              </span>
            )}
            {item}
          </span>
        ))}
      </Container>
    </div>
  );
}

export function Problems({ data }: { data: PageContent["problems"] }) {
  return (
    <section className="bg-ink-50 py-18 lg:py-30">
      <Container className="flex flex-col gap-10 lg:gap-16">
        <SectionTitle eyebrow={data.eyebrow} title={data.title} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {data.items.map((it) => (
            <ValueCard key={it.title} title={it.title} description={it.description} interactive />
          ))}
          {data.more && (
            <article className="group flex flex-col gap-4 rounded-[20px] border border-dashed border-brand-300 bg-brand-50/60 p-7 transition-[border-color,box-shadow,translate] duration-300 ease-out hover:border-brand-600 hover:shadow-[0_20px_45px_-20px_rgba(1,99,234,0.35)] motion-safe:hover:-translate-y-1">
              <PlusBadge className="h-7 w-7 [&_circle]:stroke-brand-600 [&_path]:stroke-brand-600" />
              <h3 className="font-display text-[22px] font-semibold leading-tight text-brand-600">{data.more.title}</h3>
              <p className="text-[15px] leading-[1.55] text-ink-600">{data.more.description}</p>
            </article>
          )}
        </div>
      </Container>
    </section>
  );
}

export function HowItWorks() {
  return (
    <section id="como-funciona" className="scroll-mt-6 bg-white py-18 lg:py-30">
      <Container className="flex flex-col gap-10 lg:gap-16">
        <SectionTitle eyebrow={HOW_IT_WORKS.eyebrow} title={HOW_IT_WORKS.title} />
        <div className="grid gap-4 lg:grid-cols-3 lg:gap-6">
          {HOW_IT_WORKS.steps.map((s, i) => (
            <ValueCard
              key={s.title}
              number={`ETAPA ${pad(i + 1)}`}
              title={s.title}
              description={s.description}
              interactive
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export function Features({ data, id }: { data: PageContent["features"]; id: string }) {
  return (
    <section id={id} className="relative scroll-mt-6 overflow-hidden bg-navy-900 py-18 lg:py-30">
      <div
        className="pointer-events-none absolute -left-52 -top-40 h-[500px] w-[700px] rounded-full bg-brand-600/35 blur-[200px]"
        aria-hidden
      />
      <Container className="relative flex flex-col gap-10 lg:gap-16">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionTitle eyebrow={data.eyebrow} title={data.title} dark className="[&_h2]:lg:text-[44px]" />
          <div className="hidden shrink-0 lg:block">
            <ButtonLink href="#contato" variant="outline-dark">
              Agendar diagnóstico
            </ButtonLink>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-3 lg:gap-6">
          {data.cards.map((card) => (
            <article
              key={card.title}
              className="group relative flex flex-col gap-6 overflow-hidden rounded-[28px] border border-white/8 bg-navy-800 p-6 transition-[border-color,box-shadow,translate] duration-300 ease-out focus-within:border-brand-300/40 hover:border-brand-300/40 hover:shadow-[0_24px_60px_-20px_rgba(1,99,234,0.55)] motion-safe:hover:-translate-y-1 lg:p-8"
            >
              {/* Destaque do card ao passar o mouse (o gradiente não anima direto, então usamos uma camada com opacidade) */}
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-600/35 to-transparent opacity-0 transition-opacity duration-300 group-focus-within:opacity-100 group-hover:opacity-100"
                aria-hidden
              />
              <div className="relative">
                <FeatureIcon name={card.icon} />
              </div>
              <div className="relative flex flex-col gap-3.5">
                <h3 className="font-display text-2xl font-semibold tracking-[-0.01em] text-white lg:text-[28px]">
                  {card.title}
                </h3>
                <p className="text-base leading-[1.65] text-white/66">{card.description}</p>
              </div>
              <hr className="relative border-white/10" />
              <ul className="relative flex flex-col gap-3.5">
                {card.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] leading-snug text-white">
                    <CheckBadge className="mt-px shrink-0" />
                    {item}
                  </li>
                ))}
                {card.more && (
                  <li className="flex items-start gap-3 text-[15px] font-medium leading-snug text-brand-300">
                    <PlusBadge className="mt-px shrink-0" />
                    {card.more}
                  </li>
                )}
              </ul>
              {/* O link cobre o card inteiro (after:inset-0), então clicar em qualquer ponto do card navega */}
              <Link
                href={card.link.href}
                aria-label={`${card.link.label}: ${card.title}`}
                className="mt-auto flex items-center gap-2 text-[15px] font-semibold text-brand-300 transition-colors after:absolute after:inset-0 after:rounded-[28px] focus-visible:outline-none group-hover:text-white"
              >
                {card.link.label}
                <ArrowRight
                  width={18}
                  height={18}
                  className="transition-transform duration-300 motion-safe:group-hover:translate-x-1"
                />
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function Pillars({ data }: { data: PageContent["pillars"] }) {
  return (
    <section className="bg-ink-50 py-18 lg:py-30">
      <Container className="flex flex-col gap-10 lg:gap-16">
        <SectionTitle eyebrow={data.eyebrow} title={data.title} />
        <div className="flex flex-col gap-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {data.items.map((it) => (
              <ValueCard key={it.title} title={it.title} description={it.description} interactive />
            ))}
          </div>
          <NoteBox>{data.note}</NoteBox>
        </div>
      </Container>
    </section>
  );
}

export function About({ data }: { data: PageContent["about"] }) {
  return (
    <section id="sobre" className="scroll-mt-6 bg-white py-18 lg:py-30">
      <Container className="grid gap-6 lg:grid-cols-2 lg:gap-20">
        <div className="flex flex-col gap-5">
          <Eyebrow>{data.eyebrow}</Eyebrow>
          <h2 className="font-display text-[32px] font-bold leading-[1.12] tracking-[-0.015em] text-ink-900 lg:text-[48px]">
            {data.title}
          </h2>
        </div>
        <div className="flex flex-col gap-5">
          <p className="font-display text-[19px] font-semibold leading-[1.45] text-ink-900 lg:text-[22px]">
            {data.lead}
          </p>
          <p className="text-[17px] leading-[1.65] text-ink-600">{data.text}</p>
          <NoteBox>{data.note}</NoteBox>
        </div>
      </Container>
    </section>
  );
}

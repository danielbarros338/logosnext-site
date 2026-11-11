"use client";

import { CONTACT, SECTORS, type Sector } from "@/lib/content";
import { useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import { ArrowRight, ChevronDown, MailIcon, PinIcon, WhatsAppIcon } from "./icons";
import { Container, Eyebrow } from "./ui";

type FormState = {
  name: string;
  email: string;
  whatsapp: string;
  company: string;
  sector: string;
  message: string;
};

const fieldBase =
  "w-full rounded-xl border border-ink-100 bg-ink-50 px-4 py-3.5 text-[15px] placeholder:text-ink-400 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/20";
const inputClass = `${fieldBase} text-ink-900`;

function Field({ id, label, children }: { id: string; label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-ink-900">
        {label}
      </label>
      {children}
    </div>
  );
}

function Channel({
  icon,
  label,
  value,
  href,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-600 text-white">{icon}</span>
      <span className="flex min-w-0 flex-col gap-1">
        <span className="font-mono text-xs uppercase tracking-[0.08em] text-ink-400">{label}</span>
        <span className="break-words text-[15px] font-semibold text-white lg:text-[17px]">{value}</span>
      </span>
    </>
  );
  const cls =
    "flex items-center gap-4 rounded-2xl border border-white/12 bg-white/5 p-5 transition-colors hover:border-white/25";
  return href ? (
    <a href={href} className={cls} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    <div className={cls}>{content}</div>
  );
}

export default function Contact({
  description,
  defaultSector,
}: {
  description: string;
  defaultSector?: Sector;
}) {
  const empty: FormState = {
    name: "",
    email: "",
    whatsapp: "",
    company: "",
    sector: defaultSector ?? "",
    message: "",
  };
  const [form, setForm] = useState<FormState>(empty);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Erro ao enviar mensagem.");
      setStatus("success");
      setForm(empty);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Erro ao enviar mensagem.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contato" className="relative scroll-mt-6 overflow-hidden bg-navy-900 py-18 lg:py-30">
      <div
        className="pointer-events-none absolute -bottom-40 -left-52 h-[600px] w-[600px] rounded-full bg-brand-600/45 blur-[200px]"
        aria-hidden
      />
      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[1fr_520px] lg:items-start lg:gap-16">

          <div className="relative flex flex-col gap-7">
            <Eyebrow dark>Contato</Eyebrow>
            <h2 className="font-display text-4xl font-bold tracking-[-0.02em] text-white lg:text-[52px]">
              Vamos conversar
            </h2>
            <p className="text-[17px] leading-[1.65] text-white/70">{description}</p>
            <div className="flex flex-col gap-3">
              <Channel icon={<MailIcon />} label="E-mail" value={CONTACT.email} href={`mailto:${CONTACT.email}`} />
              <Channel icon={<WhatsAppIcon />} label="WhatsApp" value={CONTACT.whatsappDisplay} href={CONTACT.whatsappUrl} />
              <Channel icon={<PinIcon />} label="Atendimento" value="Remoto, em todo o Brasil" />
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="relative flex flex-col gap-5 rounded-3xl bg-white p-5 shadow-[0_30px_60px_rgba(0,0,0,0.35)] lg:p-10"
          >
            <h3 className="font-display text-[22px] font-semibold text-ink-900">Envie sua mensagem</h3>

            <div className="grid gap-5 sm:grid-cols-2 sm:gap-4">
              <Field id="name" label="Nome">
                <input id="name" name="name" required value={form.name} onChange={onChange} placeholder="Seu nome" className={inputClass} autoComplete="name" />
              </Field>
              <Field id="email" label="E-mail">
                <input id="email" name="email" type="email" required value={form.email} onChange={onChange} placeholder="voce@empresa.com.br" className={inputClass} autoComplete="email" />
              </Field>
              <Field id="whatsapp" label="WhatsApp">
                <input id="whatsapp" name="whatsapp" type="tel" value={form.whatsapp} onChange={onChange} placeholder="(00) 00000-0000" className={inputClass} autoComplete="tel" />
              </Field>
              <Field id="company" label="Empresa">
                <input id="company" name="company" value={form.company} onChange={onChange} placeholder="Nome da empresa" className={inputClass} autoComplete="organization" />
              </Field>
            </div>

            <Field id="sector" label="Setor">
              <div className="relative">
                <select
                  id="sector"
                  name="sector"
                  value={form.sector}
                  onChange={onChange}
                  className={`${fieldBase} appearance-none pr-10 ${form.sector ? "text-ink-900" : "text-ink-400"}`}
                >
                  <option value="">Selecione seu setor</option>
                  {SECTORS.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ink-400" />
              </div>
            </Field>

            <Field id="message" label="Mensagem">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={onChange}
                placeholder="Qual processo mais toma tempo da sua equipe?"
                className={`${inputClass} resize-y`}
              />
            </Field>

            {status === "success" && (
              <p className="text-sm text-emerald-600" role="status">
                Mensagem enviada! Retornamos em breve com a proposta de diagnóstico.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-600" role="alert">
                {errorMsg}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-brand-600 px-6 py-4 font-semibold text-white transition-colors hover:bg-brand-500 disabled:opacity-60"
            >
              {loading ? "Enviando..." : "Enviar mensagem"}
              {!loading && <ArrowRight />}
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}

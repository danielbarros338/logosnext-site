import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

function sanitize(value: unknown, max = 2000): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

/** Escapa HTML para que dados do formulário não injetem marcação no e-mail. */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: NextRequest) {
  let payload: Record<string, unknown>;

  try {
    payload = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Requisição inválida." }, { status: 400 });
  }

  const name = sanitize(payload.name, 200);
  const email = sanitize(payload.email, 200);
  const whatsapp = sanitize(payload.whatsapp, 40);
  const company = sanitize(payload.company, 200);
  const sector = sanitize(payload.sector, 40);
  const message = sanitize(payload.message);

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Preencha nome, e-mail e mensagem." },
      { status: 422 }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "E-mail inválido." }, { status: 422 });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM, CONTACT_TO } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error("Variáveis de ambiente SMTP não configuradas.");
    return NextResponse.json({ error: "Serviço de e-mail indisponível." }, { status: 503 });
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT ?? 587),
    secure: Number(SMTP_PORT ?? 587) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const rows: [string, string][] = [
    ["Nome", name],
    ["E-mail", email],
    ["WhatsApp", whatsapp || "—"],
    ["Empresa", company || "—"],
    ["Setor", sector || "Não informado"],
    ["Mensagem", message],
  ];

  const htmlBody = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #0163ea;">Novo pedido de diagnóstico — Logos Next</h2>
      <table style="width: 100%; border-collapse: collapse;">
        ${rows
          .map(
            ([label, value], i) => `
          <tr${i % 2 ? ' style="background: #f5f8fc;"' : ""}>
            <td style="padding: 8px; font-weight: bold; width: 120px; vertical-align: top;">${label}:</td>
            <td style="padding: 8px; white-space: pre-wrap;">${escapeHtml(value)}</td>
          </tr>`
          )
          .join("")}
      </table>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: SMTP_FROM ?? SMTP_USER,
      to: CONTACT_TO ?? "comercial@logosnext.com.br",
      replyTo: email,
      subject: `[Site] Diagnóstico — ${sector || "Setor não informado"} — ${name}`,
      html: htmlBody,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return NextResponse.json(
      { error: "Não foi possível enviar a mensagem. Tente novamente." },
      { status: 500 }
    );
  }
}

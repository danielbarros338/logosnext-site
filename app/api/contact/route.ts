import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function sanitize(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, 2000);
}

export async function POST(request: NextRequest) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Requisição inválida." }, { status: 400 });
  }

  const name = sanitize((payload as Record<string, unknown>).name);
  const email = sanitize((payload as Record<string, unknown>).email);
  const subject = sanitize((payload as Record<string, unknown>).subject);
  const message = sanitize((payload as Record<string, unknown>).message);

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { error: "Todos os campos são obrigatórios." },
      { status: 422 }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "E-mail inválido." }, { status: 422 });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM, CONTACT_TO } =
    process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error("Variáveis de ambiente SMTP não configuradas.");
    return NextResponse.json(
      { error: "Serviço de e-mail indisponível." },
      { status: 503 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT ?? 587),
    secure: Number(SMTP_PORT ?? 587) === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  const contactPayload: ContactPayload = { name, email, subject, message };

  const htmlBody = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #21d0b2;">Nova mensagem pelo site — Logos Next</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px; font-weight: bold; width: 120px;">Nome:</td>
          <td style="padding: 8px;">${contactPayload.name}</td>
        </tr>
        <tr style="background: #f5f5f5;">
          <td style="padding: 8px; font-weight: bold;">E-mail:</td>
          <td style="padding: 8px;">${contactPayload.email}</td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold;">Assunto:</td>
          <td style="padding: 8px;">${contactPayload.subject}</td>
        </tr>
        <tr style="background: #f5f5f5;">
          <td style="padding: 8px; font-weight: bold; vertical-align: top;">Mensagem:</td>
          <td style="padding: 8px; white-space: pre-wrap;">${contactPayload.message}</td>
        </tr>
      </table>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: SMTP_FROM ?? SMTP_USER,
      to: CONTACT_TO ?? "comercial@logosnext.com.br",
      replyTo: contactPayload.email,
      subject: `[Site] ${contactPayload.subject}`,
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

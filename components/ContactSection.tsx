"use client";

import type React from "react";

import { Send, WhatsApp } from "@mui/icons-material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import MuiButton from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Link from "next/link";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("idle");
    setErrorMsg("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error ?? "Erro ao enviar mensagem.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Erro ao enviar mensagem."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contato" className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <div>
            <h2
              style={{ color: "var(--logos-next-green)" }}
              className="text-3xl font-semibold mb-6"
            >
              Vamos Conversar
            </h2>
            <p className="text-muted-foreground mb-8">
              Quer transformar uma ideia em projeto, otimizar seus processos ou
              apenas trocar experiências sobre tecnologia? Estamos sempre
              abertos a novas conexões e parcerias que gerem valor de verdade.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-start">
                <div
                  className="mr-4 bg-primary/10 p-3 rounded-full"
                  style={{ color: "var(--logos-next-green)" }}
                >
                  <MailIcon fontSize="small" />
                </div>
                <Link href="mailto:comercial@logosnext.com.br">
                  <h4 className="font-medium">Email</h4>
                  <p className="text-muted-foreground">
                    comercial@logosnext.com.br
                  </p>
                </Link>
              </div>

              <div className="flex items-start">
                <div
                  className="mr-4 bg-primary/10 p-3 rounded-full"
                  style={{ color: "var(--logos-next-green)" }}
                >
                  <WhatsApp fontSize="small" />
                </div>
                <Link href="https://wa.me/5521975861809" target="_blank" rel="noopener noreferrer">
                  <h4 className="font-medium">Whatsapp</h4>
                  <p className="text-muted-foreground">(21) 97586-1809 - Comercial</p>
                </Link>
              </div>

              <div className="flex items-start">
                <div
                  className="mr-4 bg-primary/10 p-3 rounded-full"
                  style={{ color: "var(--logos-next-green)" }}
                >
                  <LocationOnIcon fontSize="small" />
                </div>
                <div>
                  <h4 className="font-medium">Localização</h4>
                  <p className="text-muted-foreground">São Paulo, Brasil</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div className="relative overflow-hidden rounded-2xl">
            <div
              className="absolute inset-0"
              style={{
                background: "var(--logos-next-service-dark)",
                borderRadius: "1rem",
                boxShadow: "0 12px 30px rgba(33,208,178,0.08)",
                border: "1px solid var(--logos-next-service-highlight)",
              }}
            />

            <div className="relative z-10 p-6">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-1"
                    >
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium mb-1"
                    >
                      Assunto
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-1"
                    >
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>

                  {status === "success" && (
                    <p className="text-sm text-green-500">
                      Mensagem enviada com sucesso!
                    </p>
                  )}
                  {status === "error" && (
                    <p className="text-sm text-red-500">{errorMsg}</p>
                  )}

                  <MuiButton
                    type="submit"
                    disabled={isLoading}
                    startIcon={
                      isLoading ? (
                        <CircularProgress size={16} color="inherit" />
                      ) : (
                        <Send sx={{ fontSize: 16 }} />
                      )
                    }
                    sx={{
                      borderRadius: 2,
                      textTransform: "none",
                      backgroundColor: "var(--logos-next-green)",
                      color: "#ffffff",
                      "&:hover": { backgroundColor: "rgba(33,208,178,0.85)" },
                      "&.Mui-disabled": { opacity: 0.6, color: "#ffffff" },
                    }}
                  >
                    {isLoading ? "Enviando..." : "Enviar Mensagem"}
                  </MuiButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

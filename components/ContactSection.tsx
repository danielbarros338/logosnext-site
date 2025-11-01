"use client";

import type React from "react";

import { WhatsApp } from "@mui/icons-material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import Link from "next/link";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria a lógica para enviar o formulário
    console.log("Formulário enviado:", formData);
    alert("Mensagem enviada com sucesso!");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contato" className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-12">
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

            <div className="grid grid-cols-1 lg:grid-cols-3 space-y-6">
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
                <Link href="https://wa.me/5521983159765" target="_blank" rel="noopener noreferrer">
                  <h4 className="font-medium">Whatsapp</h4>
                  <p className="text-muted-foreground">(21) 98315-9765 - Daniel Barros</p>
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
          {/* <div className="relative overflow-hidden rounded-2xl">
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
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2"
                    sx={{
                      backgroundColor: "var(--logos-next-green)",
                      color: "#ffffff",
                      "&:hover": { backgroundColor: "rgba(33,208,178,0.9)" },
                    }}
                  >
                    <SendIcon sx={{ fontSize: 16, color: "#ffffff" }} />
                    <span>Enviar Mensagem</span>
                  </Button>
                </div>
              </form>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

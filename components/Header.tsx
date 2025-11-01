"use client";

import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, IconButton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((s) => !s);

  return (
    <header className="fixed w-full bg-background/80 backdrop-blur-sm z-50 border-b border-[#cecece22] pt-2">
      <div className="container-custom flex justify-between items-center h-16">
        <Link
          href="/"
          className="text-xl font-bold transition-colors hover:text-primary"
          aria-label="Página inicial"
        >
          <Image
            src="/imgs/logo-translucid.webp"
            alt="Logos Next logotipo"
            width={160} // dimensões intrínsecas do arquivo (podem ser maiores)
            height={80}
            style={{ width: 80, height: "auto" }} // ✅ tamanho REAL de render
            sizes="80px" // ✅ descreve exatamente o tamanho
            loading="lazy"
            fetchPriority="low"
            decoding="async"
            className="block"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-2 items-center">
          <Button
            component={Link}
            href="#inicio"
            className="transition-colors hover:text-primary"
            color="inherit"
          >
            Início
          </Button>
          <Button
            component={Link}
            href="#sobre"
            className="transition-colors hover:text-primary"
            color="inherit"
          >
            Sobre Nós
          </Button>
          <Button
            component={Link}
            href="#servicos"
            className="transition-colors hover:text-primary"
            color="inherit"
          >
            Soluções
          </Button>
          <Button
            component={Link}
            href="#contato"
            className="transition-colors hover:text-primary"
            color="inherit"
          >
            Solicitar Diagnóstico Gratuito
          </Button>
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <IconButton
            className="md:hidden"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            size="medium"
          >
            {isMenuOpen ? (
              <CloseIcon
                style={{ fontSize: 24, color: "var(--logos-next-green)" }}
              />
            ) : (
              <MenuIcon
                style={{ fontSize: 24, color: "var(--logos-next-green)" }}
              />
            )}
          </IconButton>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <nav className="flex flex-col space-y-2 p-4">
            <Button
              component={Link}
              href="#inicio"
              onClick={toggleMenu}
              className="transition-colors hover:text-primary py-2 text-left"
              color="inherit"
            >
              Início
            </Button>
            <Button
              component={Link}
              href="#sobre"
              onClick={toggleMenu}
              className="transition-colors hover:text-primary py-2 text-left"
              color="inherit"
            >
              Sobre Nós
            </Button>
            <Button
              component={Link}
              href="#servicos"
              onClick={toggleMenu}
              className="transition-colors hover:text-primary py-2 text-left"
              color="inherit"
            >
              Soluções
            </Button>
            <Button
              component={Link}
              href="#contato"
              onClick={toggleMenu}
              className="transition-colors hover:text-primary py-2 text-left"
              color="inherit"
            >
              Solicitar Diagnóstico gratuito
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

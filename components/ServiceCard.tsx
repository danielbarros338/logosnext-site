"use client";

import Image, { type StaticImageData } from "next/image";
import React from "react";

type ServiceCardProps = {
  title: string;
  description: string;
  features?: string[];
  /** fallback: caminho para ícone SVG (mantido para compatibilidade) */
  badgeSrc?: string;
  badgeAlt?: string;
  badgeSize?: number;
  backgroundImage: StaticImageData | string;
  /** ícone React (ex: componente do @mui/icons-material) passado via props */
  icon?: React.ReactNode;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  features = [],
  badgeSrc = "/svgs/code-chevron.svg",
  badgeAlt = "Ícone",
  badgeSize = 20,
  backgroundImage,
  icon,
}) => {
  const hasStaticBackground = typeof backgroundImage !== "string";

  return (
    // card aumentado para enfatizar a imagem no topo; altura mínima responsiva
    // usando flex-col para empurrar o conteúdo para a parte inferior (mt-auto)
    <div className="relative overflow-hidden rounded-2xl shadow-lg min-h-108 md:min-h-148 flex flex-col">
      {/* base background (color, border, shadow) */}
      <div
        className="absolute inset-0"
        style={{
          background: "var(--logos-next-service-dark)",
          borderRadius: "1rem",
          boxShadow: "0 12px 30px rgba(33,208,178,0.08)",
          border: "1px solid var(--logos-next-service-highlight)",
        }}
      />

      {/* image layer: image at the top, sharp at top and fading to the background color towards the bottom
          implemented as a gradient overlay on top of the image (gradient goes from transparent to the card bg)
      */}
      {backgroundImage && (
        <div className="absolute inset-0" aria-hidden>
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover object-top"
            placeholder={hasStaticBackground ? "blur" : "empty"}
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 420px"
            priority={false}
            loading="lazy"
            quality={90}
          />
          <div
            className="absolute inset-0"
            style={{
              // amplia a área visível da foto no topo e força a transição para o fundo sólido
              background: "linear-gradient(to bottom, rgba(0,0,0,0) 45%, var(--logos-next-service-dark) 65%)",
            }}
          />
        </div>
      )}

      {/* overlay de gradiente azul petróleo escuro com blur */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          zIndex: 5,
          borderRadius: "1rem",
          background:
            "linear-gradient(180deg, rgba(47,69,92,0.85) 0%, rgba(18,29,38,0.95) 100%)",
          opacity: 0.75,
          WebkitBackdropFilter: "blur(6px)",
          backdropFilter: "blur(6px)",
        }}
      />

      {/* top-right badge */}
      <div className="absolute top-4 right-4 z-10">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center border border-white/6"
          style={{ backgroundColor: "rgba(33,208,178,0.1)" }}
        >
          {/* Se um ícone React for passado via props, renderiza-lo com cor/tamanho adequados. */}
            {icon ? (
            // envolver o ícone para aplicar tamanho via CSS (usar inherit para cor padrão)
            <span style={{ display: 'inline-flex', fontSize: badgeSize, color: 'inherit' }}>
              {icon}
            </span>
          ) : (
            <Image
              src={badgeSrc}
              alt={badgeAlt}
              width={badgeSize}
              height={badgeSize}
              className="w-5 h-5"
              loading="lazy"
              aria-hidden={true}
              quality={90}
            />
          )}
        </div>
      </div>

      <div className="relative z-10 p-8 md:p-10 lg:p-12 mt-auto">
        <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2">{title}</h3>

        <p className="text-sm md:text-base text-white/90 mb-4">{description}</p>

        {features.length > 0 && (
          <ul className="mt-3 space-y-3 max-w-md">
            {features.map((f) => (
              <li key={f} className="flex items-start text-sm text-white/85">
                <span className="mt-1 mr-3 inline-flex h-2 w-2 rounded-full bg-white/90" />
                {f}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;

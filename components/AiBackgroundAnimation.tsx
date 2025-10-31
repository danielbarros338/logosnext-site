/* eslint-disable react-hooks/purity */
"use client";

import { useEffect, useRef, useState } from "react";

const AIBackgroundAnimation = () => {
  // Guarda posições iniciais dos pontos para que não mudem a cada render
  const pointsRef = useRef(
    Array.from({ length: 40 }).map((_, i) => {
      const size = i % 3 === 0 ? 14 : i % 2 === 0 ? 10 : 8;
      return {
        left: Math.random() * 100,
        top: Math.random() * 100,
        size,
      };
    })
  );

  const containerRef = useRef<HTMLDivElement | null>(null);
  const pointElsRef = useRef<Array<HTMLDivElement | null>>([]);
  const topCirclesRef = useRef<HTMLDivElement | null>(null);
  const bottomCirclesRef = useRef<HTMLDivElement | null>(null);

  const rafRef = useRef<number | null>(null);
  const lastMouse = useRef<{ x: number; y: number } | null>(null);
  const [, setTick] = useState(0); // força re-render quando necessário

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Global pointer listener: garante que o movimento do mouse seja recebido
  // mesmo quando o cursor estiver sobre outros elementos da página.
  useEffect(() => {
    const handlePointer = (e: PointerEvent) => {
      // armazenamos coordenadas cliente — mais precisas para getBoundingClientRect
      lastMouse.current = { x: e.clientX, y: e.clientY };

      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        setTick((t) => t + 1);
      });
    };

    const handleLeaveGlobal = () => {
      lastMouse.current = null;
      setTick((t) => t + 1);
    };

    window.addEventListener("pointermove", handlePointer);
    window.addEventListener("pointerout", handleLeaveGlobal);
    window.addEventListener("pointerleave", handleLeaveGlobal);

    return () => {
      window.removeEventListener("pointermove", handlePointer);
      window.removeEventListener("pointerout", handleLeaveGlobal);
      window.removeEventListener("pointerleave", handleLeaveGlobal);
    };
  }, []);

  const onPointerMove = (e: React.PointerEvent) => {
    // armazenamos client coords
    lastMouse.current = { x: e.clientX, y: e.clientY };

    if (rafRef.current) return;

    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      setTick((t) => t + 1);
    });
  };

  const onPointerLeave = () => {
    lastMouse.current = null;
    setTick((t) => t + 1);
  };
  // calcula transform para os blocos de círculos externos baseado na posição do mouse
  const computeTranslateForRect = (r: DOMRect | undefined) => {
    if (!r) return { tx: 0, ty: 0 };
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const mouse = lastMouse.current;
    if (!mouse) return { tx: 0, ty: 0 };
    const dx = cx - mouse.x;
    const dy = cy - mouse.y;
    const dist = Math.hypot(dx, dy) || 0.001;
    const influence = 160;
    if (dist < influence) {
      const strength = (influence - dist) / influence;
      const maxMove = 22;
      const move = strength * maxMove;
      return { tx: (dx / dist) * move, ty: (dy / dist) * move };
    }
    return { tx: 0, ty: 0 };
  };

  const topRect = topCirclesRef.current?.getBoundingClientRect();
  const bottomRect = bottomCirclesRef.current?.getBoundingClientRect();
  const topT = computeTranslateForRect(topRect);
  const bottomT = computeTranslateForRect(bottomRect);

  return (
    <div
      ref={containerRef}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className="absolute inset-0 overflow-hidden"
    >
      {/* Grade animada de fundo com efeito de profundidade */}
      <div
        className="absolute inset-0"
        style={{
          opacity: 0.03,
          filter: "blur(2px)",
          willChange: "opacity, filter",
        }}
      >
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-primary/30"
              />
            </pattern>
            <pattern
              id="grid-large"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 80 0 L 0 0 0 80"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-accent/20"
              />
            </pattern>
            <radialGradient id="glow" cx="50%" cy="50%" r="50%">
              <stop
                offset="0%"
                stopColor="var(--logos-next-blue)"
                stopOpacity="0.3"
              />
              <stop
                offset="100%"
                stopColor="var(--logos-next-blue)"
                stopOpacity="0"
              />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-large)" />
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="absolute inset-0">
        {pointsRef.current.map((p, i) => {
          const el = pointElsRef.current[i];
          const elRect = el?.getBoundingClientRect();

          const mouse = lastMouse.current;
          let tx = 0;
          let ty = 0;

          if (mouse && elRect) {
            const cx = elRect.left + elRect.width / 2;
            const cy = elRect.top + elRect.height / 2;
            const dx = cx - mouse.x;
            const dy = cy - mouse.y;
            const dist = Math.hypot(dx, dy) || 0.001;
            const influence = 120; // px
            if (dist < influence) {
              const strength = (influence - dist) / influence; // 0..1
              const maxMove = 18; // px
              const move = strength * maxMove;
              tx = (dx / dist) * move;
              ty = (dy / dist) * move;
            }
          }

          const left = `${p.left}%`;
          const top = `${p.top}%`;
          const colorVar =
            i % 2 === 0
              ? "var(--logos-next-blue)"
              : "var(--logos-next-dark-green)";
          const shadowSize = 8 + ((i * 7) % 18);
          const animDelay = `${((i * 73) % 300) / 100}s`;
          const animDur = `${2 + ((i * 37) % 200) / 100}s`;
          const haloDur = `${3 + ((i * 19) % 200) / 100}s`;

          const size = p.size;
          const haloSize = Math.round(size * 2.6);

          return (
            <div
              ref={(el) => {
                pointElsRef.current[i] = el;
              }}
              key={i}
              className="absolute"
              style={{
                left,
                top,
                transform: `translate(${tx}px, ${ty}px)`,
                transition: "transform 220ms ease-out",
              }}
            >
              {/* Ponto principal */}
              <div
                className="rounded-full animate-pulse-glow"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  animationDelay: animDelay,
                  animationDuration: animDur,
                  backgroundColor: colorVar,
                  boxShadow: `0 0 ${Math.max(6, shadowSize)}px ${colorVar}`,
                  filter: `drop-shadow(0 0 ${Math.max(
                    6,
                    shadowSize / 1.5
                  )}px ${colorVar})`,
                  mixBlendMode: "screen",
                  zIndex: 2,
                }}
              />

              {/* Halo ao redor do ponto (centralizado sobre o ponto) - suavizado com radial-gradient and blur */}
              <div
                className="absolute rounded-full animate-ping-slow"
                style={{
                  width: `${haloSize}px`,
                  height: `${haloSize}px`,
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  animationDelay: animDelay,
                  animationDuration: haloDur,
                  background: `radial-gradient(circle, ${colorVar} 0%, transparent 60%)`,
                  opacity: 0.65,
                  filter: "blur(6px)",
                  pointerEvents: "none",
                  zIndex: 1,
                }}
              />
            </div>
          );
        })}
      </div>

      <svg
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.08, filter: "blur(1.2px)", mixBlendMode: "screen" }}
      >
        <defs>
          <linearGradient
            id="line-gradient-1"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              offset="0%"
              stopColor="var(--logos-next-blue)"
              stopOpacity="0"
            />
            <stop
              offset="50%"
              stopColor="var(--logos-next-blue)"
              stopOpacity="0.85"
            />
            <stop
              offset="100%"
              stopColor="var(--logos-next-blue)"
              stopOpacity="0"
            />
          </linearGradient>
          <linearGradient
            id="line-gradient-2"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              offset="0%"
              stopColor="var(--logos-next-dark-green)"
              stopOpacity="0"
            />
            <stop
              offset="50%"
              stopColor="var(--logos-next-dark-green)"
              stopOpacity="0.75"
            />
            <stop
              offset="100%"
              stopColor="var(--logos-next-dark-green)"
              stopOpacity="0"
            />
          </linearGradient>
        </defs>
        {/* Linhas conectando pontos */}
        <line
          x1="10%"
          y1="20%"
          x2="30%"
          y2="40%"
          stroke="url(#line-gradient-1)"
          strokeWidth="1"
          className="animate-pulse-glow"
        />
        <line
          x1="30%"
          y1="40%"
          x2="50%"
          y2="30%"
          stroke="url(#line-gradient-2)"
          strokeWidth="1"
          className="animate-pulse-glow"
          style={{ animationDelay: "0.5s" }}
        />
        <line
          x1="50%"
          y1="30%"
          x2="70%"
          y2="50%"
          stroke="url(#line-gradient-1)"
          strokeWidth="1"
          className="animate-pulse-glow"
          style={{ animationDelay: "1s" }}
        />
        <line
          x1="70%"
          y1="50%"
          x2="90%"
          y2="35%"
          stroke="url(#line-gradient-2)"
          strokeWidth="1"
          className="animate-pulse-glow"
          style={{ animationDelay: "1.5s" }}
        />
        <line
          x1="20%"
          y1="60%"
          x2="40%"
          y2="75%"
          stroke="url(#line-gradient-1)"
          strokeWidth="1"
          className="animate-pulse-glow"
          style={{ animationDelay: "2s" }}
        />
        <line
          x1="40%"
          y1="75%"
          x2="60%"
          y2="65%"
          stroke="url(#line-gradient-2)"
          strokeWidth="1"
          className="animate-pulse-glow"
          style={{ animationDelay: "2.5s" }}
        />
        <line
          x1="60%"
          y1="65%"
          x2="80%"
          y2="80%"
          stroke="url(#line-gradient-1)"
          strokeWidth="1"
          className="animate-pulse-glow"
          style={{ animationDelay: "3s" }}
        />
      </svg>

      <div
        ref={topCirclesRef}
        className="absolute top-1/4 left-1/4 w-80 h-80"
        style={{
          opacity: 0.2,
          transform: `translate(${topT.tx}px, ${topT.ty}px)`,
          transition: "transform 260ms ease-out",
        }}
      >
        <div
          className="absolute inset-0 rounded-full animate-ping-slow"
          style={{
            border: "1.5px solid var(--logos-next-blue)",
            boxShadow: "0 0 18px var(--logos-next-blue)",
            transition: "opacity .3s",
          }}
        />
        <div
          className="absolute inset-4 rounded-full animate-ping-slow"
          style={{
            animationDelay: "0.7s",
            border: "1.5px solid var(--logos-next-blue)",
            boxShadow: "0 0 14px var(--logos-next-blue)",
          }}
        />
        <div
          className="absolute inset-8 rounded-full animate-ping-slow"
          style={{
            animationDelay: "1.4s",
            border: "1.5px solid var(--logos-next-dark-green)",
            boxShadow: "0 0 12px var(--logos-next-dark-green)",
          }}
        />
        <div
          className="absolute inset-12 rounded-full animate-ping-slow"
          style={{
            animationDelay: "2.1s",
            border: "1.2px solid var(--logos-next-blue)",
            boxShadow: "0 0 10px var(--logos-next-blue)",
          }}
        />
      </div>

      <div
        ref={bottomCirclesRef}
        className="absolute bottom-1/4 right-1/4 w-64 h-64"
        style={{
          opacity: 0.2,
          transform: `translate(${bottomT.tx}px, ${bottomT.ty}px)`,
          transition: "transform 260ms ease-out",
        }}
      >
        <div
          className="absolute inset-0 rounded-full animate-ping-slow"
          style={{
            animationDelay: "0.5s",
            border: "1.5px solid var(--logos-next-dark-green)",
            boxShadow: "0 0 14px var(--logos-next-dark-green)",
          }}
        />
        <div
          className="absolute inset-4 rounded-full animate-ping-slow"
          style={{
            animationDelay: "1.2s",
            border: "1.2px solid var(--logos-next-dark-green)",
            boxShadow: "0 0 10px var(--logos-next-dark-green)",
          }}
        />
        <div
          className="absolute inset-8 rounded-full animate-ping-slow"
          style={{
            animationDelay: "1.9s",
            border: "1.2px solid var(--logos-next-blue)",
            boxShadow: "0 0 10px var(--logos-next-blue)",
          }}
        />
      </div>

      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-full h-px animate-slide-right"
          style={{
            background:
              "linear-gradient(to right, transparent, var(--logos-next-blue), transparent)",
          }}
        />
        <div
          className="absolute top-1/4 left-0 w-full h-px animate-slide-right"
          style={{
            animationDelay: "1s",
            background:
              "linear-gradient(to right, transparent, var(--logos-next-dark-green), transparent)",
          }}
        />
        <div
          className="absolute top-1/2 left-0 w-full h-px animate-slide-right"
          style={{
            animationDelay: "2s",
            background:
              "linear-gradient(to right, transparent, var(--logos-next-blue), transparent)",
          }}
        />
        <div
          className="absolute top-3/4 left-0 w-full h-px animate-slide-right"
          style={{
            animationDelay: "3s",
            background:
              "linear-gradient(to right, transparent, var(--logos-next-dark-green), transparent)",
          }}
        />
        {/* Linhas verticais */}
        <div
          className="absolute top-0 left-1/4 w-px h-full animate-slide-down"
          style={{
            background:
              "linear-gradient(to bottom, transparent, var(--logos-next-blue), transparent)",
          }}
        />
        <div
          className="absolute top-0 left-3/4 w-px h-full animate-slide-down"
          style={{
            animationDelay: "1.5s",
            background:
              "linear-gradient(to bottom, transparent, var(--logos-next-dark-green), transparent)",
          }}
        />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-10">
        <div
          className="absolute inset-0 rounded-full animate-pulse-glow"
          style={{
            animationDuration: "4s",
            background:
              "radial-gradient(circle, var(--logos-next-blue) 0%, transparent 60%)",
          }}
        />
      </div>
      
    </div>
  );
};

export default AIBackgroundAnimation;

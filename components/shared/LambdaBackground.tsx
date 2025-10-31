interface Props {
  opacity?: number;
  blurStdDev?: number;
  width?: string;
  height?: string;
  fontSize?: number;
  className?: string;
}

export default function LambdaBackground({
  opacity = 1,
  blurStdDev = 1,
  width = "85%",
  height = "85%",
  fontSize = 520,
  className = "",
}: Props) {
  return (
    <div
      aria-hidden
      className={`absolute inset-0 flex items-center justify-center pointer-events-none ${className}`}
      style={{ zIndex: 0, opacity, mixBlendMode: "screen" }}
    >
      <svg
        width={width}
        height={height}
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
      >
        <defs>
          <linearGradient id="lambdaGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--logos-next-blue)" stopOpacity="0.4">
              <animate attributeName="stop-opacity" values="0.25;0.4;0.25" dur="6.5s" repeatCount="indefinite" />
            </stop>
            <stop offset="45%" stopColor="var(--logos-next-dark-green)" stopOpacity="0.34">
              <animate attributeName="stop-opacity" values="0.18;0.34;0.18" dur="7.5s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="var(--logos-next-blue)" stopOpacity="0.3">
              <animate attributeName="stop-opacity" values="0.16;0.3;0.16" dur="8.5s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
          <filter id="lambdaBlur" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation={blurStdDev} result="b" />
          </filter>
          <radialGradient id="lambdaGlow" cx="50%" cy="50%" r="55%">
            <stop offset="0%" stopColor="var(--logos-next-blue)" stopOpacity="0.32" />
            <stop offset="45%" stopColor="var(--logos-next-dark-green)" stopOpacity="0.18" />
            <stop offset="100%" stopColor="var(--logos-next-blue)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* halo sutil para reforçar a marca ao redor do símbolo */}
  <circle cx="500" cy="520" r="360" fill="url(#lambdaGlow)" opacity="0.65" />

        <g filter="url(#lambdaBlur)">
          <text
            x="50%"
            y="52%"
            textAnchor="middle"
            dominantBaseline="middle"
            style={{
              fontFamily:
                'Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
              fontWeight: 700,
              fontSize: `${fontSize}px`,
              fill: 'url(#lambdaGrad)',
              opacity: 0.6,
              letterSpacing: '-0.03em',
            }}
          >
            λ
          </text>
        </g>
      </svg>
    </div>
  );
}

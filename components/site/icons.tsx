import type { IconName } from "@/lib/content";
import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function ArrowRight(props: Props) {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} aria-hidden {...base} strokeWidth={2} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function CheckBadge(props: Props) {
  return (
    <svg viewBox="0 0 20 20" width={20} height={20} aria-hidden fill="none" {...props}>
      <circle cx="10" cy="10" r="10" fill="#0163EA" fillOpacity="0.18" />
      <path d="M6 10.2l2.6 2.6L14 7.4" stroke="#1DCDFE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PlusBadge(props: Props) {
  return (
    <svg viewBox="0 0 20 20" width={20} height={20} aria-hidden fill="none" {...props}>
      <circle cx="10" cy="10" r="9.25" stroke="#7DB3FF" strokeOpacity="0.5" strokeWidth="1.5" strokeDasharray="2.5 2.5" />
      <path d="M10 6.5v7M6.5 10h7" stroke="#7DB3FF" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function MenuIcon(props: Props) {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} aria-hidden {...base} strokeWidth={2} {...props}>
      <path d="M4 7h16M4 12h16M4 17h10" />
    </svg>
  );
}

export function CloseIcon(props: Props) {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} aria-hidden {...base} strokeWidth={2} {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function ChevronDown(props: Props) {
  return (
    <svg viewBox="0 0 24 24" width={16} height={16} aria-hidden {...base} strokeWidth={2} {...props}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function MailIcon(props: Props) {
  return (
    <svg viewBox="0 0 24 24" width={22} height={22} aria-hidden {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3.5 6.5L12 13l8.5-6.5" />
    </svg>
  );
}

export function WhatsAppIcon(props: Props) {
  return (
    <svg viewBox="0 0 24 24" width={22} height={22} aria-hidden {...base} {...props}>
      <path d="M4 20l1.2-3.6A8 8 0 1112 20a8 8 0 01-3.9-1L4 20z" />
      <path d="M9 9.5c0 2.5 2.5 5 5 5l1-1.5-1.8-.8-.7.7c-1-.4-1.9-1.3-2.3-2.3l.7-.7L10.1 8 9 9.5z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function PinIcon(props: Props) {
  return (
    <svg viewBox="0 0 24 24" width={22} height={22} aria-hidden {...base} {...props}>
      <path d="M12 21s-7-6.2-7-11.5A7 7 0 0119 9.5C19 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

export function LinkedInIcon(props: Props) {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} aria-hidden {...base} {...props}>
      <path d="M6.5 9.5v8M6.5 6.5v.01M10.5 17.5v-4.5a2.5 2.5 0 015 0v4.5M10.5 9.5v8" />
    </svg>
  );
}

export function InstagramIcon(props: Props) {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} aria-hidden {...base} {...props}>
      <rect x="4" y="4" width="16" height="16" rx="5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="16.8" cy="7.2" r="0.6" fill="currentColor" />
    </svg>
  );
}

const featurePaths: Record<IconName, React.ReactNode> = {
  seguros: (
    <>
      <path d="M12 3l7 3v5.5c0 4.5-3 8-7 9.5-4-1.5-7-5-7-9.5V6l7-3z" />
      <path d="M12 8v8M8 12h8" />
    </>
  ),
  contabilidade: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M8 7h8M8 11h2M12 11h2M16 11h.01M8 15h2M12 15h2M16 15h.01" />
    </>
  ),
  imobiliarias: (
    <>
      <path d="M3 11l9-7 9 7" />
      <path d="M5.5 9.5V20h13V9.5" />
      <path d="M10 20v-5h4v5" />
    </>
  ),
  chat: (
    <>
      <path d="M4 20l1.2-3.6A8 8 0 1112 20a8 8 0 01-3.9-1L4 20z" />
      <path d="M8.5 11h7M8.5 14h4" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
      <path d="M9 14.5l2 2 4-4" />
    </>
  ),
  document: (
    <>
      <path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8l-5-5z" />
      <path d="M14 3v5h5M8.5 13h7M8.5 16.5h5" />
    </>
  ),
};

export function FeatureIcon({ name }: { name: IconName }) {
  return (
    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-300 to-brand-600 text-white">
      <svg viewBox="0 0 24 24" width={24} height={24} aria-hidden {...base}>
        {featurePaths[name]}
      </svg>
    </span>
  );
}

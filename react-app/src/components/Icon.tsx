import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement> & { size?: number };

const base = (size = 22, extra: Partial<SVGProps<SVGSVGElement>> = {}) => ({
  width: size, height: size, viewBox: "0 0 24 24",
  fill: "none", stroke: "currentColor", strokeWidth: 2,
  strokeLinecap: "round" as const, strokeLinejoin: "round" as const,
  ...extra,
});

export function IconRadar({ size, ...p }: Props) {
  return (
    <svg {...base(size)} {...p}>
      <circle cx="12" cy="12" r="2" />
      <path d="M12 4a8 8 0 0 1 8 8" />
      <path d="M12 8a4 4 0 0 1 4 4" />
      <path d="M4 12a8 8 0 0 0 8 8" />
    </svg>
  );
}
export function IconGrid({ size, ...p }: Props) {
  return (
    <svg {...base(size)} {...p}>
      <rect x="3" y="3" width="7" height="9" rx="1" />
      <rect x="14" y="3" width="7" height="5" rx="1" />
      <rect x="14" y="12" width="7" height="9" rx="1" />
      <rect x="3" y="16" width="7" height="5" rx="1" />
    </svg>
  );
}
export function IconBell({ size, ...p }: Props) {
  return (
    <svg {...base(size)} {...p}>
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}
export function IconShield({ size, ...p }: Props) {
  return (
    <svg {...base(size)} {...p}>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  );
}
export function IconDoc({ size, ...p }: Props) {
  return (
    <svg {...base(size)} {...p}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
      <path d="M10 9H8" />
    </svg>
  );
}
export function IconGlobe({ size, ...p }: Props) {
  return (
    <svg {...base(size)} {...p}>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}
export function IconSearch({ size, ...p }: Props) {
  return (
    <svg {...base(size)} {...p}>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
}
export function IconMail({ size, ...p }: Props) {
  return (
    <svg {...base(size)} {...p}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 5L2 7" />
    </svg>
  );
}
export function IconPhone({ size, ...p }: Props) {
  return (
    <svg {...base(size)} {...p}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
export function IconClock({ size, ...p }: Props) {
  return (
    <svg {...base(size)} {...p}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
export function IconArrow({ size, ...p }: Props) {
  return (
    <svg {...base(size, { className: "arrow" })} {...p}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
export function IconDownload({ size, ...p }: Props) {
  return (
    <svg {...base(size)} {...p}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}
export function IconPdf({ size = 22, ...p }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...p}>
      <path d="M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z"
            fill="#E1001A" opacity=".1" stroke="#E1001A" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M15 2v5h5" stroke="#E1001A" strokeWidth="2" strokeLinejoin="round" fill="none"/>
      <text x="12" y="17" textAnchor="middle" fontSize="6" fontWeight="800" fill="#E1001A" fontFamily="Inter, Arial">PDF</text>
    </svg>
  );
}

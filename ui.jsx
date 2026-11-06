import { useEffect, useRef, useState } from 'react';

/* ───────── Icons (inline, stroke-based, currentColor) ───────── */
const P = {
  arrow: <path d="M5 12h14M13 5l7 7-7 7" />,
  up: <path d="M12 19V5M5 12l7-7 7 7" />,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="m3.5 7 8.5 6 8.5-6" /></>,
  phone: <path d="M22 16.9V20a2 2 0 0 1-2.2 2C9.9 21 3 14.1 2 4.2A2 2 0 0 1 4 2h3.1a2 2 0 0 1 1.9 1.7l.7 3.3a2 2 0 0 1-.6 2L7.5 10.5a15 15 0 0 0 6 6l1.5-1.6a2 2 0 0 1 2-.6l3.3.7a2 2 0 0 1 1.7 1.9Z" />,
  chat: <><path d="M21 11.5A8.5 8.5 0 0 1 12.5 20H5l-2 2V11.5A8.5 8.5 0 1 1 21 11.5Z" /><path d="M8 9c1 3 3 5 6 6l2-2 2 1v3c-1 1-3 1-5 0-4-2-7-5-7-8 0-2 2-2 2 0Z" /></>,
  pin: <><path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" /><circle cx="12" cy="10" r="2.6" /></>,
  external: <path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />,
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></>,
  moon: <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" /></>,
  code: <path d="m8 8-5 4 5 4M16 8l5 4-5 4M14 5l-4 14" />,
  puzzle: <path d="M10 4a2 2 0 1 1 4 0v2h4a1 1 0 0 1 1 1v4h-2a2 2 0 1 0 0 4h2v4a1 1 0 0 1-1 1h-4v-2a2 2 0 1 0-4 0v2H6a1 1 0 0 1-1-1v-4h2a2 2 0 1 0 0-4H5V7a1 1 0 0 1 1-1h4V4Z" />,
  team: <><circle cx="9" cy="8" r="3.2" /><path d="M3 20v-1a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v1" /><circle cx="17.5" cy="9" r="2.4" /><path d="M17 14.2a4 4 0 0 1 4 3.8v1" /></>,
  server: <><rect x="3" y="4" width="18" height="6.5" rx="2" /><rect x="3" y="13.5" width="18" height="6.5" rx="2" /><path d="M7 7.3h.01M7 16.8h.01" /></>,
  tools: <path d="M14.7 6.3a4 4 0 0 0-5 5L3 18l3 3 6.7-6.7a4 4 0 0 0 5-5l-2.6 2.6-2.4-.6-.6-2.4 2.6-2.6Z" />,
  cap: <><path d="M2 9l10-5 10 5-10 5L2 9Z" /><path d="M6 11.5V16c0 1.5 3 3 6 3s6-1.5 6-3v-4.5" /></>,
  briefcase: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18" /></>,
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  github: <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />,
  linkedin: <><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 11v5M8 8v.01M12 16v-5m0 2.5c0-1.5 1-2.5 2.3-2.5S16.5 12 16.5 13.5V16" /></>,
  layers: <><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 13 9 5 9-5" /></>,
  cart: <><circle cx="9" cy="20" r="1.5" /><circle cx="18" cy="20" r="1.5" /><path d="M2 3h3l2.5 12H19l2-8H6" /></>,
  building: <><rect x="4" y="3" width="10" height="18" rx="1" /><path d="M14 9h6v12h-6M7 7h4M7 11h4M7 15h4" /></>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="2.5" /><path d="M3 10h18M8 3v4M16 3v4" /></>,
};

export function Icon({ name, size = 20, className = '', ...rest }) {
  return (
    <svg
      className={`icon ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {P[name]}
    </svg>
  );
}

export function LogoMark({ size = 34 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" className="logo-mark">
      <defs>
        <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2563EB" />
          <stop offset=".55" stopColor="#7C3AED" />
          <stop offset="1" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill="url(#lg)" />
      <g fill="none" stroke="#fff" strokeWidth="3.2" strokeLinejoin="round" transform="translate(8 8) scale(1.5)">
        <path d="M16 3L28 10V22L16 29L4 22V10L16 3Z" />
        <path d="M10 12L16 8L22 12V20L16 24L10 20V12Z" />
        <path d="M4 10L16 17L28 10M16 17V29" />
      </g>
    </svg>
  );
}

/* ───────── Hooks ───────── */
export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function useInView(options = { threshold: 0.15 }, once = true) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (typeof IntersectionObserver === 'undefined' || prefersReducedMotion()) {
      setInView(true);
      return undefined;
    }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setInView(true);
        if (once) io.disconnect();
      } else if (!once) setInView(false);
    }, options);
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return [ref, inView];
}

export function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const [ref, seen] = useInView({ threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
  return (
    <Tag ref={ref} className={`reveal ${seen ? 'in' : ''} ${className}`} style={{ '--d': `${delay}ms` }} {...rest}>
      {children}
    </Tag>
  );
}

export function CountUp({ to, suffix = '' }) {
  const [ref, seen] = useInView({ threshold: 0.4 });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!seen) return undefined;
    if (prefersReducedMotion()) { setN(to); return undefined; }
    let raf;
    const t0 = performance.now();
    const dur = 1400;
    const tick = (now) => {
      const p = Math.min(1, (now - t0) / dur);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seen, to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

export function SectionHead({ eyebrow, title, lead, align = 'center' }) {
  return (
    <Reveal className={`head head-${align}`}>
      <span className="eyebrow"><i className="dot" />{eyebrow}</span>
      <h2 className="h2">{title}</h2>
      {lead && <p className="lead">{lead}</p>}
    </Reveal>
  );
}

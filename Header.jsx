import { useEffect, useState } from 'react';
import { useI18n } from '../i18n.jsx';
import { Icon, LogoMark } from './ui.jsx';

export const SECTIONS = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];

function useScrollSpy(ids) {
  const [active, setActive] = useState('home');
  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!els.length || typeof IntersectionObserver === 'undefined') return undefined;
    const vis = new Map();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => vis.set(e.target.id, e.isIntersecting ? e.intersectionRatio : 0));
        let best = null;
        let max = 0;
        vis.forEach((r, id) => { if (r > max) { max = r; best = id; } });
        if (best) setActive(best);
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: [0, 0.01, 0.1, 0.5, 1] },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ids]);
  return active;
}

export default function Header({ theme, onTheme }) {
  const { t, lang, toggle } = useI18n();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const active = useScrollSpy(SECTIONS);

  useEffect(() => {
    const on = () => {
      const y = window.scrollY;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(y > 12);
      setProgress(h > 0 ? Math.min(1, y / h) : 0);
    };
    on();
    window.addEventListener('scroll', on, { passive: true });
    window.addEventListener('resize', on);
    return () => { window.removeEventListener('scroll', on); window.removeEventListener('resize', on); };
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    document.body.classList.toggle('no-scroll', open);
    return () => { document.removeEventListener('keydown', onKey); document.body.classList.remove('no-scroll'); };
  }, [open]);

  const link = (id) => (
    <a
      key={id}
      href={`#${id}`}
      className={active === id ? 'active' : ''}
      aria-current={active === id ? 'true' : undefined}
      onClick={() => setOpen(false)}
    >
      {t(`nav.${id}`)}
    </a>
  );

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
      <div className="container nav-inner">
        <a href="#home" className="brand" aria-label="Ibrahim Elwekel — home" onClick={() => setOpen(false)}>
          <LogoMark />
          <span className="brand-name">
            {lang === 'ar' ? 'إبراهيم الوكيل' : 'Ibrahim Elwekel'}
            <small>{lang === 'ar' ? 'مطوّر ويب أول' : 'Senior Web Developer'}</small>
          </span>
        </a>

        <nav className="nav-links" aria-label={t('nav.main')}>{SECTIONS.map(link)}</nav>

        <div className="nav-tools">
          <button type="button" className="iconbtn" onClick={onTheme} aria-label={t('theme.toggle')} title={t('theme.toggle')}>
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={18} />
          </button>
          <button type="button" className="iconbtn lang-btn" onClick={toggle} aria-label={t('lang.toggle')} title={t('lang.toggle')}>
            <Icon name="globe" size={18} />
            <span>{t('lang.label')}</span>
          </button>
          <a href="#contact" className="btn btn-primary btn-sm nav-cta">{t('nav.cta')}</a>
          <button
            type="button"
            className={`iconbtn burger ${open ? 'open' : ''}`}
            aria-label={t('nav.menu')}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <i /><i /><i />
          </button>
        </div>
      </div>

      <nav id="mobile-menu" className={`mobile-menu ${open ? 'open' : ''}`} aria-label={t('nav.main')} aria-hidden={!open}>
        {SECTIONS.map(link)}
      </nav>
    </header>
  );
}

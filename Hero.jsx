import { useEffect, useState } from 'react';
import { useI18n } from '../i18n.jsx';
import { profile, roles } from '../data/profile.js';
import { Icon, prefersReducedMotion } from './ui.jsx';

/* Typewriter that cycles through `roles`. Screen readers get a static label. */
function Typed() {
  const { tx, lang } = useI18n();
  const [i, setI] = useState(0);
  const [text, setText] = useState('');
  const [del, setDel] = useState(false);
  const word = tx(roles[i % roles.length]);

  useEffect(() => { setText(''); setDel(false); }, [lang]);

  useEffect(() => {
    if (prefersReducedMotion()) { setText(word); return undefined; }
    const chars = Array.from(word);
    const cur = Array.from(text);
    let ms = del ? 38 : 80;
    if (!del && cur.length === chars.length) ms = 1700;
    if (del && cur.length === 0) ms = 350;
    const id = setTimeout(() => {
      if (!del && cur.length < chars.length) setText(chars.slice(0, cur.length + 1).join(''));
      else if (!del) setDel(true);
      else if (cur.length > 0) setText(chars.slice(0, cur.length - 1).join(''));
      else { setDel(false); setI((n) => (n + 1) % roles.length); }
    }, ms);
    return () => clearTimeout(id);
  }, [text, del, word]);

  return (
    <span className="typed-wrap">
      <span className="sr-only">{roles.map((r) => tx(r)).join(', ')}</span>
      <span className="typed" aria-hidden="true">{text}</span>
      <i className="caret" aria-hidden="true" />
    </span>
  );
}

/* Decorative "profile.ts" window. Always LTR — it is code. */
function CodeCard() {
  return (
    <div className="code-card" dir="ltr" aria-hidden="true">
      <div className="code-top">
        <span className="dots"><i /><i /><i /></span>
        <span className="code-file">elwekel.profile.ts</span>
      </div>
      <pre className="code-body">
        <code>
          <span className="l"><b className="k">const</b> <b className="v">developer</b> <b className="p">=</b> <b className="p">{'{'}</b></span>
          <span className="l">  name<b className="p">:</b> <b className="s">"Ibrahim Elwekel"</b><b className="p">,</b></span>
          <span className="l">  role<b className="p">:</b> <b className="s">"Senior Web Developer"</b><b className="p">,</b></span>
          <span className="l">  based<b className="p">:</b> <b className="s">"Alexandria, Egypt"</b><b className="p">,</b></span>
          <span className="l">  stack<b className="p">:</b> <b className="p">[</b><b className="s">"WordPress"</b><b className="p">,</b> <b className="s">"PHP"</b><b className="p">,</b></span>
          <span className="l">          <b className="s">"React"</b><b className="p">,</b> <b className="s">"Node.js"</b><b className="p">],</b></span>
          <span className="l">  experience<b className="p">:</b> <b className="s">"4+ years"</b><b className="p">,</b></span>
          <span className="l">  leads<b className="p">:</b> <b className="s">"Web Department"</b><b className="p">,</b></span>
          <span className="l">  languages<b className="p">:</b> <b className="p">[</b><b className="s">"ar"</b><b className="p">,</b> <b className="s">"en"</b><b className="p">],</b></span>
          <span className="l"><b className="p">{'}'}</b><b className="p">;</b><i className="caret" /></span>
        </code>
      </pre>
    </div>
  );
}

export default function Hero() {
  const { t, tx } = useI18n();
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero-bg" aria-hidden="true">
        <span className="blob b1" /><span className="blob b2" /><span className="blob b3" />
        <span className="gridbg" />
      </div>
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="badge reveal in">
            <Icon name="pin" size={15} />
            <span>{t('hero.badge')} {tx(profile.location)}</span>
          </p>
          <p className="kicker reveal in" style={{ '--d': '60ms' }}>{t('hero.kicker')} <strong>{tx(profile.name)}</strong></p>
          <h1 id="hero-title" className="h1 reveal in" style={{ '--d': '120ms' }}>
            {t('hero.h1a')} <span className="grad">{t('hero.h1b')}</span>
          </h1>
          <p className="typed-line reveal in" style={{ '--d': '180ms' }}><Typed /></p>
          <p className="hero-desc reveal in" style={{ '--d': '240ms' }}>{t('hero.sum')}</p>
          <div className="actions reveal in" style={{ '--d': '300ms' }}>
            <a href="#projects" className="btn btn-primary">
              <span>{t('hero.cta1')}</span><Icon name="arrow" size={18} className="flip-rtl" />
            </a>
            <a href="#contact" className="btn btn-ghost">
              <Icon name="chat" size={18} /><span>{t('hero.cta2')}</span>
            </a>
          </div>
          <ul className="hero-links reveal in" style={{ '--d': '360ms' }}>
            <li><a href={`mailto:${profile.email}`}><Icon name="mail" size={17} /><span className="ltr">{profile.email}</span></a></li>
            <li><a href={`tel:${profile.phone.replace(/\s/g, '')}`}><Icon name="phone" size={17} /><span className="ltr">{profile.phone}</span></a></li>
          </ul>
        </div>

        <div className="hero-visual reveal in zoom" style={{ '--d': '200ms' }}>
          <div className="chip-float f1"><Icon name="code" size={18} /><span>{t('hero.chip1')}<small className="ltr">2+ yrs</small></span></div>
          <CodeCard />
          <div className="chip-float f2"><Icon name="puzzle" size={18} /><span>{t('hero.chip2')}<small className="ltr">4+ yrs</small></span></div>
        </div>
      </div>
      <a href="#about" className="scroll-hint" aria-label={t('hero.scroll')}><i /></a>
    </section>
  );
}

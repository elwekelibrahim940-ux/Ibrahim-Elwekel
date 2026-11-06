import { useI18n } from '../i18n.jsx';
import { venture } from '../data/profile.js';
import { Icon, Reveal } from './ui.jsx';

export default function Venture() {
  const { t, tx } = useI18n();
  return (
    <section className="section tight" aria-labelledby="venture-t">
      <div className="container">
        <Reveal className="venture card">
          <div className="venture-logo">
            <img src="elwekel-digital-logo.png" alt="Elwekel Digital logo" width="240" height="240" loading="lazy" />
          </div>
          <div className="venture-copy">
            <span className="eyebrow"><i className="dot" />{t('venture.eyebrow')}</span>
            <h2 id="venture-t" className="h3">{venture.name} <small>{tx(venture.tag)}</small></h2>
            <p>{tx(venture.text)}</p>
            <ul className="venture-list">
              {venture.services.map((s, i) => (
                <li key={i}><Icon name="check" size={16} /><span>{tx(s)}</span></li>
              ))}
            </ul>
            <a href="#contact" className="btn btn-primary">
              <span>{t('venture.cta')}</span><Icon name="arrow" size={18} className="flip-rtl" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

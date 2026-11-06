import { useMemo, useState } from 'react';
import { useI18n } from './i18n.jsx';
import { categories, projects } from 'from './projects.js'';
import { Icon, Reveal, SectionHead } from './ui.jsx';

const CAT_ICON = { ecommerce: 'cart', corporate: 'building', booking: 'calendar' };

/* Real screenshot when available, otherwise a designed browser-window cover. */
function Cover({ p }) {
  const [failed, setFailed] = useState(false);
  const style = { '--h': p.hue };
  if (p.shot && !failed) {
    return (
      <div className="cover has-shot" style={style}>
        <img src={p.shot} alt="" loading="lazy" decoding="async" onError={() => setFailed(true)} />
      </div>
    );
  }
  const initials = p.name.replace(/[^A-Za-z ]/g, '').split(' ').filter(Boolean).slice(0, 2).map((w) => w[0]).join('').toUpperCase();
  return (
    <div className="cover" style={style} aria-hidden="true">
      <div className="mock" dir="ltr">
        <div className="mock-bar"><span className="dots"><i /><i /><i /></span><span className="mock-url">{p.host}</span></div>
        <div className="mock-body">
          <span className="mock-mono">{initials}</span>
          <span className="mock-lines"><i /><i /><i /></span>
          <span className="mock-blocks"><i /><i /><i /></span>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const { t, tx } = useI18n();
  const [cat, setCat] = useState('all');
  const list = useMemo(() => (cat === 'all' ? projects : projects.filter((p) => p.category === cat)), [cat]);
  const count = (id) => (id === 'all' ? projects.length : projects.filter((p) => p.category === id).length);

  return (
    <section id="projects" className="section" aria-labelledby="proj-t">
      <div className="container">
        <SectionHead eyebrow={t('proj.eyebrow')} title={<span id="proj-t">{t('proj.title')}</span>} lead={t('proj.lead')} />

        <Reveal className="filters" role="group" aria-label={t('proj.filter')}>
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              className={`chip-btn ${cat === c.id ? 'on' : ''}`}
              aria-pressed={cat === c.id}
              onClick={() => setCat(c.id)}
            >
              {tx(c.label)}<b className="ltr">{count(c.id)}</b>
            </button>
          ))}
        </Reveal>
        <p className="showing" aria-live="polite">{t('proj.showing')} <b className="ltr">{list.length}</b> {t('proj.of')} <b className="ltr">{projects.length}</b></p>

        <ul className="proj-grid">
          {list.map((p) => (
            <li key={p.slug} className="proj-item">
              <article className="proj card">
                <a className="proj-link" href={p.url} target="_blank" rel="noopener noreferrer" aria-label={`${p.name} — ${t('proj.visit')}`}>
                  <Cover p={p} />
                  <div className="proj-body">
                    <div className="proj-meta">
                      <span className="cat"><Icon name={CAT_ICON[p.category]} size={14} />{tx(categories.find((c) => c.id === p.category).label)}</span>
                      <span className="place"><Icon name="pin" size={13} />{tx(p.place)}</span>
                    </div>
                    <h3 className="proj-name">{p.name}<Icon name="external" size={16} className="ext flip-rtl" /></h3>
                    <p className="proj-desc">{tx(p.desc)}</p>
                    <ul className="tags">{p.tags.map((g) => <li key={g}>{g}</li>)}</ul>
                    <span className="proj-host ltr">{p.host}</span>
                  </div>
                </a>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

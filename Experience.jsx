import { useI18n } from './i18n.jsx';
import { experience } from '../data/profile.js';
import { Icon, Reveal, SectionHead } from './ui.jsx';

export default function Experience() {
  const { t, tx } = useI18n();
  return (
    <section id="experience" className="section tint-bg" aria-labelledby="exp-t">
      <div className="container">
        <SectionHead eyebrow={t('exp.eyebrow')} title={<span id="exp-t">{t('exp.title')}</span>} lead={t('exp.lead')} />
        <ol className="timeline">
          {experience.map((e, i) => (
            <Reveal as="li" key={i} delay={i * 80} className="tl-item">
              <span className="tl-node" aria-hidden="true"><Icon name={i === 0 ? 'team' : 'briefcase'} size={18} /></span>
              <article className="tl-card card">
                <header>
                  <h3>{tx(e.role)}</h3>
                  <p className="tl-org">
                    <span>{tx(e.org)}</span>
                    {e.period && <span className="tl-period">{tx(e.period)}</span>}
                  </p>
                </header>
                <ul>
                  {e.points.map((p, j) => (
                    <li key={j}><Icon name="check" size={16} /><span>{tx(p)}</span></li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

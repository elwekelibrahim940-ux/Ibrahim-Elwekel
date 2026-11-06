import { useI18n } from './i18n.jsx';
import { skillGroups } from '../data/profile.js';
import { Icon, Reveal, SectionHead } from './ui.jsx';

export default function Skills() {
  const { t, tx } = useI18n();
  return (
    <section id="skills" className="section tint-bg" aria-labelledby="skills-t">
      <div className="container">
        <SectionHead eyebrow={t('skills.eyebrow')} title={<span id="skills-t">{t('skills.title')}</span>} lead={t('skills.lead')} />
        <div className="skills-grid">
          {skillGroups.map((g, i) => (
            <Reveal key={i} delay={i * 80} className="skill card">
              <div className="skill-head">
                <span className="sicon"><Icon name={g.icon} size={22} /></span>
                <h3>{tx(g.title)}</h3>
              </div>
              <ul className="chips">
                {g.items.map((s, j) => <li key={j}>{tx(s)}</li>)}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

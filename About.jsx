import { useI18n } from '../i18n.jsx';
import { education, languages, pillars, profile } from '../data/profile.js';
import { Icon, Reveal, SectionHead } from './ui.jsx';

export default function About() {
  const { t, tx } = useI18n();
  return (
    <section id="about" className="section" aria-labelledby="about-t">
      <div className="container">
        <SectionHead eyebrow={t('about.eyebrow')} title={<span id="about-t">{t('about.title')}</span>} />

        <div className="about-grid">
          <Reveal className="about-copy">
            <p>{t('about.p1')}</p>
            <p>{t('about.p2')}</p>

            <div className="facts">
              <div className="fact">
                <span className="fact-ic"><Icon name="cap" /></span>
                <div>
                  <h3>{t('about.edu')}</h3>
                  <p>{tx(education.degree)}</p>
                  <small>{tx(education.school)}</small>
                  <small className="muted-note">{tx(education.note)}</small>
                </div>
              </div>
              <div className="fact">
                <span className="fact-ic"><Icon name="globe" /></span>
                <div>
                  <h3>{t('about.lang')}</h3>
                  {languages.map((l, i) => (
                    <p key={i} className="lang-row"><strong>{tx(l.name)}</strong><span>{tx(l.level)}</span></p>
                  ))}
                </div>
              </div>
              <div className="fact">
                <span className="fact-ic"><Icon name="pin" /></span>
                <div>
                  <h3>{t('about.loc')}</h3>
                  <p>{tx(profile.location)}</p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="pillars">
            {pillars.map((p, i) => (
              <Reveal key={i} delay={i * 90} className="pillar card">
                <span className="pillar-num" aria-hidden="true">0{i + 1}</span>
                <span className="sicon"><Icon name={p.icon} size={24} /></span>
                <h3>{tx(p.title)}</h3>
                <p>{tx(p.text)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

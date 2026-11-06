import { useI18n } from './i18n.jsx';
import { stats } from '../data/profile.js';
import { CountUp, Reveal } from './ui.jsx';

export default function Stats() {
  const { tx } = useI18n();
  return (
    <section className="stats" aria-label="Key numbers">
      <div className="container stats-grid">
        {stats.map((s, i) => (
          <Reveal key={i} delay={i * 80} className="stat">
            <div className="num"><CountUp to={s.value} suffix={s.suffix} /></div>
            <p>{tx(s.label)}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

import { useEffect, useState } from 'react';
import { useI18n } from './i18n.jsx';
import { profile } from './profile.js';
import { SECTIONS } from './Header.jsx';
import { Icon, LogoMark } from './ui.jsx';

export default function Footer() {
  const { t, tx } = useI18n();
  const year = new Date().getFullYear();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const on = () => setShow(window.scrollY > 700);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  return (
    <>
      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <a href="#home" className="brand" aria-label="Ibrahim Elwekel — home">
              <LogoMark />
              <span className="brand-name">{tx(profile.name)}<small>{tx(profile.title)}</small></span>
            </a>
            <p className="footer-about">{t('hero.sum')}</p>
          </div>
          <nav aria-label={t('foot.links')}>
            <h4>{t('foot.links')}</h4>
            <ul>{SECTIONS.map((id) => <li key={id}><a href={`#${id}`}>{t(`nav.${id}`)}</a></li>)}</ul>
          </nav>
          <div>
            <h4>{t('foot.reach')}</h4>
            <ul>
              <li><a className="fc" href={`mailto:${profile.email}`}><Icon name="mail" size={16} /><span className="ltr">{profile.email}</span></a></li>
              <li><a className="fc" href={`tel:${profile.phone.replace(/\s/g, '')}`}><Icon name="phone" size={16} /><span className="ltr">{profile.phone}</span></a></li>
              <li><a className="fc" href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noopener noreferrer"><Icon name="chat" size={16} /><span>WhatsApp</span></a></li>
              <li className="fc"><Icon name="pin" size={16} /><span>{tx(profile.location)}</span></li>
            </ul>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>© {year} {tx(profile.name)}. {t('foot.rights')}</p>
          <p>{t('foot.built')}</p>
        </div>
      </footer>

      <a className="wa-float" href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
        <Icon name="chat" size={26} />
      </a>
      <button type="button" className={`to-top ${show ? 'show' : ''}`} aria-label={t('top')} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <Icon name="up" size={20} />
      </button>
    </>
  );
}

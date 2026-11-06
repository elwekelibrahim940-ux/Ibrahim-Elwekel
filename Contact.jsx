import { useState } from 'react';
import { useI18n } from './i18n.jsx';
import { profile } from '../data/profile.js';
import { Icon, Reveal, SectionHead } from './ui.jsx';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function Contact() {
  const { t, tx } = useI18n();
  const [f, setF] = useState({ name: '', email: '', msg: '' });
  const [errs, setErrs] = useState({});

  const set = (k) => (e) => {
    setF((s) => ({ ...s, [k]: e.target.value }));
    if (errs[k]) setErrs((s) => ({ ...s, [k]: undefined }));
  };

  const validate = () => {
    const e = {};
    if (f.name.trim().length < 2) e.name = t('form.err.name');
    if (!EMAIL_RE.test(f.email.trim())) e.email = t('form.err.email');
    if (f.msg.trim().length < 10) e.msg = t('form.err.msg');
    setErrs(e);
    return Object.keys(e).length === 0;
  };

  const send = (via) => (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    const name = f.name.trim();
    const body = `${f.msg.trim()}\n\n— ${name}\n${f.email.trim()}`;
    const url = via === 'wa'
      ? `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(body)}`
      : `mailto:${profile.email}?subject=${encodeURIComponent(`${t('form.mailSubject')} ${name}`)}&body=${encodeURIComponent(body)}`;
    if (via === 'wa') window.open(url, '_blank', 'noopener,noreferrer');
    else window.location.href = url;
  };

  const channels = [
    { icon: 'mail', label: t('contact.email'), value: profile.email, href: `mailto:${profile.email}`, ltr: true },
    { icon: 'phone', label: t('contact.phone'), value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}`, ltr: true },
    { icon: 'chat', label: t('contact.wa'), value: t('contact.chat'), href: `https://wa.me/${profile.whatsapp}`, ext: true },
    { icon: 'pin', label: t('contact.loc'), value: tx(profile.location) },
  ];

  const field = (id, label, input, err) => (
    <div className={`field ${err ? 'bad' : ''}`}>
      <label htmlFor={id}>{label}</label>
      {input}
      {err && <p className="err" id={`${id}-err`} role="alert">{err}</p>}
    </div>
  );

  return (
    <section id="contact" className="section" aria-labelledby="contact-t">
      <div className="container">
        <SectionHead eyebrow={t('contact.eyebrow')} title={<span id="contact-t">{t('contact.title')}</span>} lead={t('contact.lead')} />
        <div className="contact-grid">
          <Reveal className="channels">
            {channels.map((c) => {
              const inner = (
                <>
                  <span className="sicon"><Icon name={c.icon} size={22} /></span>
                  <span className="ch-text"><small>{c.label}</small><strong className={c.ltr ? 'ltr' : ''}>{c.value}</strong></span>
                  {c.href && <Icon name="arrow" size={18} className="go flip-rtl" />}
                </>
              );
              return c.href
                ? <a key={c.label} className="channel card" href={c.href} {...(c.ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{inner}</a>
                : <div key={c.label} className="channel card">{inner}</div>;
            })}
            <div className="socials">
              {profile.social.github && <a className="iconbtn" href={profile.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Icon name="github" /></a>}
              {profile.social.linkedin && <a className="iconbtn" href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Icon name="linkedin" /></a>}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <form className="form card" noValidate onSubmit={send('mail')}>
              {field('f-name', t('form.name'),
                <input id="f-name" name="name" type="text" autoComplete="name" value={f.name} onChange={set('name')}
                  placeholder={t('form.ph.name')} aria-invalid={!!errs.name} aria-describedby={errs.name ? 'f-name-err' : undefined} />, errs.name)}
              {field('f-email', t('form.email'),
                <input id="f-email" name="email" type="email" autoComplete="email" dir="ltr" value={f.email} onChange={set('email')}
                  placeholder={t('form.ph.email')} aria-invalid={!!errs.email} aria-describedby={errs.email ? 'f-email-err' : undefined} />, errs.email)}
              {field('f-msg', t('form.msg'),
                <textarea id="f-msg" name="message" rows="5" value={f.msg} onChange={set('msg')}
                  placeholder={t('form.ph.msg')} aria-invalid={!!errs.msg} aria-describedby={errs.msg ? 'f-msg-err' : undefined} />, errs.msg)}
              <div className="form-actions">
                <button type="submit" className="btn btn-primary"><Icon name="mail" size={18} /><span>{t('form.sendMail')}</span></button>
                <button type="button" className="btn btn-ghost" onClick={send('wa')}><Icon name="chat" size={18} /><span>{t('form.sendWa')}</span></button>
              </div>
              <p className="form-note">{t('form.note')}</p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

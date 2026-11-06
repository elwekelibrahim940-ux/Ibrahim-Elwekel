import { useEffect, useState } from 'react';
import { I18nProvider, useI18n } from './i18n.jsx';
import Header from './Header.jsx';
import Hero from './Hero.jsx';
import Stats from './Stats.jsx';
import About from './About.jsx';
import Experience from './Experience.jsx';
import Projects from './Projects.jsx';
import Skills from './Skills.jsx';
import Venture from './Venture.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';

const readTheme = () => (document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark');

function Site() {
  const { t } = useI18n();
  const [theme, setTheme] = useState(readTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#050A16' : '#F4F7FF');
    try { localStorage.setItem('iw-theme', theme); } catch (e) { /* ignore */ }
  }, [theme]);

  return (
    <>
      <a className="skip-link" href="#main">{t('skip')}</a>
      <Header theme={theme} onTheme={() => setTheme((x) => (x === 'dark' ? 'light' : 'dark'))} />
      <main id="main">
        <Hero />
        <Stats />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Venture />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <I18nProvider>
      <Site />
    </I18nProvider>
  );
}

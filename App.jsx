import { useEffect, useState } from 'react';
import { I18nProvider, useI18n } from './i18n.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Stats from './components/Stats.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Venture from './components/Venture.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

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

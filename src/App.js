import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Journey from './components/Journey';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function SkipLink() {
  const { t } = useLanguage();
  return <a href="#main-content" className="skip-link">{t.skip}</a>;
}

function Page() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Journey />
        <Skills />
        <Projects />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Page />
      </ThemeProvider>
    </LanguageProvider>
  );
}

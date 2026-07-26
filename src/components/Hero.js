import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { scrollToId } from '../utils/scroll';
import { STACK, CV_LINK } from '../data/content';
import imgBruna from '../image/brunaFoto.jpeg';

export default function Hero() {
  const { t } = useLanguage();

  const navigate = (id) => (event) => {
    event.preventDefault();
    scrollToId(id);
  };

  return (
    <section id="top" className="hero">
      <div className="hero__copy">
        <span className="eyebrow fade-up" style={ { animationDelay: '0s' } }>{t.hero.eyebrow}</span>
        <h1 className="hero__title fade-up" style={ { animationDelay: '.08s' } }>{t.hero.title}</h1>
        <h2 className="hero__subtitle fade-up" style={ { animationDelay: '.14s' } }>{t.hero.subtitle}</h2>
        <p className="hero__pitch fade-up" style={ { animationDelay: '.2s' } }>{t.hero.pitch}</p>
        <div className="hero__actions fade-up" style={ { animationDelay: '.26s' } }>
          <a href="#projects" className="btn btn--primary" onClick={ navigate('projects') }>{t.hero.ctaPrimary}</a>
          <a href={ CV_LINK } target="_blank" rel="noopener noreferrer" className="btn btn--outline">{t.hero.ctaSecondary}</a>
          <a href="#contact" className="btn btn--ghost" onClick={ navigate('contact') }>{t.hero.ctaContact} →</a>
        </div>
        <div className="hero__stack fade-up" style={ { animationDelay: '.32s' } }>
          {STACK.map((tech) => (
            <span key={ tech } className="pill">{tech}</span>
          ))}
        </div>
      </div>

      <div className="hero__photo">
        <div className="hero__photo-backdrop" />
        <img src={ imgBruna } alt="Foto de Bruna Gimenez" className="hero__photo-img" />
        <div className="hero__photo-badge">{t.hero.photoBadge}</div>
      </div>
    </section>
  );
}

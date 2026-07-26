import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TIMELINE } from '../data/content';

export default function Journey() {
  const { lang, t } = useLanguage();

  return (
    <section id="journey" className="section section--alt">
      <div className="section__inner journey">
        <span className="section-tag">02 — {t.nav.journey}</span>
        <h2 className="section-heading">{t.journey.heading}</h2>
        <p className="section-subheading">{t.journey.subheading}</p>

        <ol className="timeline">
          {TIMELINE.map((step, index) => (
            <li key={ step.title.pt } className="timeline__step fade-up" style={ { animationDelay: `${index * 0.09}s` } }>
              <span className={ `timeline__dot ${index === TIMELINE.length - 1 ? 'is-current' : ''}` } />
              <div className="timeline__year">{step.year[lang]}</div>
              <h3 className="timeline__title">{step.title[lang]}</h3>
              <p className="timeline__desc">{step.desc[lang]}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

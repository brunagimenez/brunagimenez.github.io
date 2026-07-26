import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section">
      <div className="section__inner about">
        <div className="about__copy">
          <span className="section-tag">01 — {t.nav.about}</span>
          <h2 className="section-heading">{t.about.heading}</h2>
          <p className="section-text">{t.about.p1}</p>
          <p className="section-text">{t.about.p2}</p>
        </div>
        <div className="about__facts">
          {t.facts.map((fact) => (
            <div key={ fact.l } className="fact">
              <span className="fact__number">{fact.n}</span>
              <span className="fact__label">{fact.l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

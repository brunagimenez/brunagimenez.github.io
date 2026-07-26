import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SKILL_GROUPS } from '../data/content';

export default function Skills() {
  const { lang, t } = useLanguage();

  return (
    <section id="skills" className="section">
      <div className="section__inner">
        <span className="section-tag">03 — {t.nav.skills}</span>
        <h2 className="section-heading">{t.skills.heading}</h2>
        <p className="section-subheading">{t.skills.subheading}</p>

        <div className="skills-grid">
          {SKILL_GROUPS.map((group, index) => (
            <div key={ group.title.pt } className="skill-card fade-up" style={ { animationDelay: `${index * 0.07}s` } }>
              <h3 className="skill-card__title">{group.title[lang]}</h3>
              <div className="skill-card__list">
                {group.skills[lang].map((skill) => (
                  <span key={ skill } className="pill pill--surface">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PROJECTS } from '../data/content';
import imgShop from '../image/shop.png';
import imgTrunfo from '../image/trunfo.png';
import imgSpotnews from '../image/category-form.png';

const IMAGES = {
  shopping: imgShop,
  trunfo: imgTrunfo,
  spotnews: imgSpotnews,
};

export default function Projects() {
  const { lang, t } = useLanguage();

  return (
    <section id="projects" className="section section--alt">
      <div className="section__inner">
        <span className="section-tag">04 — {t.nav.projects}</span>
        <h2 className="section-heading">{t.projects.heading}</h2>
        <p className="section-subheading">{t.projects.subheading}</p>

        <div className="project-grid">
          {PROJECTS.map((item, index) => (
            <article key={ item.id } className="project-card fade-up" style={ { animationDelay: `${index * 0.06}s` } }>
              {item.image ? (
                <img src={ IMAGES[item.image] } alt={ item.title } loading="lazy" className="project-card__media" />
              ) : (
                <div className="project-card__media project-card__media--placeholder">
                  <span>{item.title}</span>
                </div>
              )}
              <div className="project-card__body">
                <div className="project-card__head">
                  <h3 className="project-card__title">{item.title}</h3>
                  {item.badge && <span className="pill pill--accent">{item.badge[lang]}</span>}
                </div>
                <p className="project-card__desc">{item.desc[lang]}</p>
                <div className="project-card__tags">
                  {item.tags.map((tag) => (
                    <span key={ tag } className="tag">{tag}</span>
                  ))}
                </div>
                <div className="project-card__links">
                  {item.demo && (
                    <a href={ item.demo } target="_blank" rel="noopener noreferrer" className="link-cta">
                      {t.projects.demo} ↗
                    </a>
                  )}
                  <a href={ item.repo } target="_blank" rel="noopener noreferrer" className="link-cta link-cta--muted">
                    {t.projects.code} ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { EMAIL, PHONE, LINKEDIN_LINK, GITHUB_LINK } from '../data/content';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section section--alt">
      <div className="section__inner contact">
        <span className="section-tag">06 — {t.nav.contact}</span>
        <h2 className="section-heading">{t.contact.heading}</h2>
        <p className="section-text contact__pitch">{t.contact.pitch}</p>
        <a href={ `mailto:${EMAIL}` } className="btn btn--primary">{t.contact.emailCta} ↗</a>

        <div className="contact__links">
          <span>{t.contact.location}</span>
          <a href={ PHONE.href }>{PHONE.display}</a>
          <a href={ `mailto:${EMAIL}` }>{EMAIL}</a>
          <a href={ LINKEDIN_LINK } target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          <a href={ GITHUB_LINK } target="_blank" rel="noopener noreferrer">GitHub ↗</a>
        </div>
      </div>
    </section>
  );
}

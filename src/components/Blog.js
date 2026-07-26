import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BLOG_POSTS, LINKEDIN_LINK } from '../data/content';

export default function Blog() {
  const { lang, t } = useLanguage();

  return (
    <section id="blog" className="section">
      <div className="section__inner">
        <span className="section-tag">05 — {t.nav.blog}</span>
        <h2 className="section-heading">{t.blog.heading}</h2>
        <p className="section-subheading">{t.blog.subheading}</p>

        <div className="blog-grid">
          {BLOG_POSTS.map((post, index) => (
            <article key={ post.id } className="blog-card fade-up" style={ { animationDelay: `${index * 0.07}s` } }>
              <div className="blog-card__meta">
                <span className="pill pill--accent">{post.tag[lang]}</span>
                <span className="blog-card__read">{post.read}</span>
              </div>
              <h3 className="blog-card__title">{post.title[lang]}</h3>
              <p className="blog-card__excerpt">{post.excerpt[lang]}</p>
              <span className="blog-card__draft">{t.blog.draft}</span>
            </article>
          ))}
        </div>

        <p className="blog-follow-note">
          {t.blog.followNote}
          {' '}
          <a href={ LINKEDIN_LINK } target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </p>
      </div>
    </section>
  );
}

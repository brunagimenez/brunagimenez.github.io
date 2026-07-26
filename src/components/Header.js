import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { scrollToId } from '../utils/scroll';

const NAV_ITEMS = ['about', 'journey', 'skills', 'projects', 'blog', 'contact'];

export default function Header() {
  const { dark, toggleTheme } = useTheme();
  const { lang, setLang, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = (id) => (event) => {
    event.preventDefault();
    setMenuOpen(false);
    scrollToId(id);
  };

  return (
    <header className="site-header">
      <div className="site-header__backdrop" />
      <div className="site-header__inner">
        <a href="#top" className="logo" onClick={ navigate('top') }>
          BG<span className="logo-dot">.</span>
        </a>

        <nav aria-label="Navegação principal" className="nav-desktop">
          {NAV_ITEMS.map((id) => (
            <a key={ id } href={ `#${id}` } className="nav-link" onClick={ navigate(id) }>
              {t.nav[id]}
            </a>
          ))}
          <div className="header-controls">
            <div className="lang-switch" role="group" aria-label="Idioma">
              <button
                type="button"
                className={ `lang-switch__btn ${lang === 'pt' ? 'is-active' : ''}` }
                aria-pressed={ lang === 'pt' }
                onClick={ () => setLang('pt') }
              >
                PT
              </button>
              <button
                type="button"
                className={ `lang-switch__btn ${lang === 'en' ? 'is-active' : ''}` }
                aria-pressed={ lang === 'en' }
                onClick={ () => setLang('en') }
              >
                EN
              </button>
            </div>
            <button
              type="button"
              className="theme-toggle"
              aria-label={ dark ? t.theme.toLight : t.theme.toDark }
              onClick={ toggleTheme }
            >
              <span className={ `theme-toggle__knob ${dark ? 'is-dark' : ''}` } />
            </button>
          </div>
        </nav>

        <div className="header-controls header-controls--mobile">
          <div className="lang-switch" role="group" aria-label="Idioma">
            <button
              type="button"
              className={ `lang-switch__btn ${lang === 'pt' ? 'is-active' : ''}` }
              aria-pressed={ lang === 'pt' }
              onClick={ () => setLang('pt') }
            >
              PT
            </button>
            <button
              type="button"
              className={ `lang-switch__btn ${lang === 'en' ? 'is-active' : ''}` }
              aria-pressed={ lang === 'en' }
              onClick={ () => setLang('en') }
            >
              EN
            </button>
          </div>
          <button
            type="button"
            className="theme-toggle"
            aria-label={ dark ? t.theme.toLight : t.theme.toDark }
            onClick={ toggleTheme }
          >
            <span className={ `theme-toggle__knob ${dark ? 'is-dark' : ''}` } />
          </button>
          <button
            type="button"
            className="menu-button"
            aria-label={ menuOpen ? t.nav.close : t.nav.menu }
            aria-expanded={ menuOpen }
            onClick={ () => setMenuOpen((open) => !open) }
          >
            {menuOpen ? t.nav.close : t.nav.menu}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-nav">
          {NAV_ITEMS.map((id) => (
            <a key={ id } href={ `#${id}` } className="mobile-nav__link" onClick={ navigate(id) }>
              {t.nav[id]}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

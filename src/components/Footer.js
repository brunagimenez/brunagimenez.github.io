import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <span>© {year} Bruna Gimenez</span>
      <span>{t.footer.rights}</span>
    </footer>
  );
}

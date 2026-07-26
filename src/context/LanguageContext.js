import React, { createContext, useContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { T } from '../data/content';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('pt');

  const value = useMemo(() => ({
    lang,
    setLang,
    isPt: lang === 'pt',
    isEn: lang === 'en',
    t: T[lang],
  }), [lang]);

  return (
    <LanguageContext.Provider value={ value }>
      {children}
    </LanguageContext.Provider>
  );
}

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useLanguage() {
  return useContext(LanguageContext);
}

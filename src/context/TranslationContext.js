import React, { createContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

export const TranslationContext = createContext();

export function TranslationProvider({ children }) {
  const [translation, setTranslation] = useState(false);

  const translationActive = useMemo(() => ({
    translation,
    setTranslation }), [translation]);

  return (
    <TranslationContext.Provider value={ translationActive }>
      {children}
    </TranslationContext.Provider>
  );
}

TranslationProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

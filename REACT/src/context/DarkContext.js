import React, { createContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

export const DarkContext = createContext();

export function DarkProvider({ children }) {
  const [dark, setDark] = useState(false);

  const darkActive = useMemo(() => ({ dark, setDark }), [dark]);

  return (
    <DarkContext.Provider value={ darkActive }>
      {children}
    </DarkContext.Provider>
  );
}

DarkProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

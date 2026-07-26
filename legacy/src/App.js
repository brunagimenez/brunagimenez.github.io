import React from 'react';
import Routes from './utils/Routes';
import { TranslationProvider } from './context/TranslationContext';
import { DarkProvider } from './context/DarkContext';

export default function App() {
  return (
    <TranslationProvider>
      <DarkProvider>
        <Routes />
      </DarkProvider>
    </TranslationProvider>

  );
}

import React, { useContext } from 'react';
import MenuAside from '../components/MenuAside';
import Header from '../components/Header';
import { TranslationContext } from '../context/TranslationContext';

export default function Blog() {
  const { translation } = useContext(TranslationContext);
  return (
    <>
      <MenuAside />
      <Header />
      <main>
        { translation
          ? <h1>Blog soon ...</h1>
          : <h1>Blog em breve ...</h1>}
      </main>
    </>
  );
}

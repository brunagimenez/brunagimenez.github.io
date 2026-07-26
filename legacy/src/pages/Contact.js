import React, { useContext } from 'react';
import MenuAside from '../components/MenuAside';
import Header from '../components/Header';
import { TranslationContext } from '../context/TranslationContext';

export default function Contact() {
  const { translation } = useContext(TranslationContext);
  return (
    <>
      <MenuAside />
      <Header />
      <main>
        { translation
          ? <h1>Contact</h1>
          : <h1>Contato</h1>}
        <p>email:brunagimenez97@gmail.com</p>
        { translation
          ? <p>phone:+55(19)98252-1635</p>
          : <p>tel.:+55(19)98252-1635</p>}
      </main>
    </>
  );
}

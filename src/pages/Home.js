import React, { useContext } from 'react';
import MenuAside from '../components/MenuAside';
import Header from '../components/Header';
import { TranslationContext } from '../context/TranslationContext';

export default function Home() {
  const { translation } = useContext(TranslationContext);
  return (
    <>
      <Header />
      <MenuAside />
      <main>
        <div className="home-name">
          <h1 className="home-firstname">Bruna</h1>
          <h1>Gimenez</h1>
        </div>
        <div className="home-dev">
          {translation
            ? <h2>Developer</h2>
            : <h2>Desenvolvedora</h2>}

          <h2 className="home-stack">Front-End.</h2>
        </div>
        <div>
          <button>Download CV</button>
          {translation
            ? <button className="home-button"> Contact </button>
            : <button className="home-button"> Contato </button>}
        </div>
      </main>
    </>
  );
}

import React from 'react';
import MenuAside from '../components/MenuAside';
import Header from '../components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <MenuAside />
      <main>
        <div>
          <h1>Bruna</h1>
          <h1>Gimenez</h1>
        </div>
        <div>
          <h2>Desenvolvedora</h2>
          <h2>Front-End</h2>
        </div>
        <div>
          <button>Dowloand CV</button>
          <button>Contato</button>
        </div>
      </main>
    </>
  );
}

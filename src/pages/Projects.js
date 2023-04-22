import React from 'react';
import MenuAside from '../components/MenuAside';
import Header from '../components/Header';
import trunfo from '../image/trunfo.png';
import pixel from '../image/pixel.png';
import shop from '../image/shop.png';

export default function Project() {
  return (
    <>
      <MenuAside />
      <Header />
      <main>
        <h1>Projetos</h1>
        <section className="container projectIMG">
          <div>
            <h2>Pixel Art</h2>
            <img src={ pixel } alt="Pixel Art" />
          </div>
          <div>
            <h2>Trunfo Marvel</h2>
            <img src={ trunfo } alt="Trunfo Marvel" />
          </div>
          <div>
            <h2>Shopping Card</h2>
            <img src={ shop } alt="Shopping Card" />
          </div>
        </section>
      </main>
    </>
  );
}

import React from 'react';
import MenuAside from '../components/MenuAside';
import Header from '../components/Header';
import imgJS from '../image/javascript.svg';
import imgHTML from '../image/html.svg';
import imgReact from '../image/react.svg';
import imgRedux from '../image/redux.svg';
import imgTesting from '../image/testing.svg';
import imgSASS from '../image/sass.svg';
import imgCSS from '../image/css.svg';

export default function Soft() {
  return (
    <>
      <MenuAside />
      <Header />
      <main>
        <h1>Habilidades</h1>
        <section className="container softIMG">
          <div>
            <h2>JavaScript</h2>
            <img src={ imgJS } alt="JavaScript" />
          </div>
          <div>
            <h2>HTML5</h2>
            <img src={ imgHTML } alt="HTML5" />
          </div>
          <div>
            <h2>React</h2>
            <img src={ imgReact } alt="React" />
          </div>
          <div>
            <h2>Redux</h2>
            <img src={ imgRedux } alt="Redux" />
          </div>
          <div>
            <h2>React Testing</h2>
            <img src={ imgTesting } alt="React Testing" />
          </div>
          <div>
            <h2>SASS</h2>
            <img src={ imgSASS } alt="SASS" />
          </div>
          <div>
            <h2>CSS3</h2>
            <img src={ imgCSS } alt="CSS3" />
          </div>
        </section>
      </main>
    </>
  );
}

import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import MenuAside from '../components/MenuAside';
import Header from '../components/Header';
import { TranslationContext } from '../context/TranslationContext';
import imgBruna from '../image/brunaFoto.jpeg';

const link = 'https://drive.google.com/file/d/1amQ2ouDutDdE0J6qeBFKk9v1wBe1Aoha/view?usp=drive_link';

export default function Home() {
  const { translation } = useContext(TranslationContext);
  const history = useHistory();

  const navToContact = () => {
    history.push('/contact');
  };

  const handleButtonClick = () => {
    window.open(link, '_blank');
  };
  return (
    <>
      <Header />
      <MenuAside />
      <main className="main-home">
        <section>
          <h1 className="to-appear-animation">Bruna Gimenez</h1>
          <div className="home-name animation-type typing-animation">
            {translation
              ? <h1>Hi! I&apos;m</h1>
              : <h1>Olá! Eu sou a </h1>}

            <h1 className="home-firstname">Bruna</h1>
            <h1>Gimenez</h1>
          </div>
          <div className="home-dev">
            {translation
              ? <h2>Developer</h2>
              : <h2>Desenvolvedora</h2>}

            <h2 className="home-stack">Full Stack</h2>
          </div>
          <div>
            <button onClick={ handleButtonClick }>Download CV</button>
            <button className="home-button" onClick={ navToContact }>
              {translation ? 'Contact' : 'Contato' }
            </button>
          </div>
        </section>
        <section>
          <div className="bd" />
          <img src={ imgBruna } className="shape" alt="Foto Bruna" width="550px" />
        </section>
      </main>
    </>
  );
}

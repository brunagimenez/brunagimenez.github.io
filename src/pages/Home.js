import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import MenuAside from '../components/MenuAside';
import Header from '../components/Header';
import { TranslationContext } from '../context/TranslationContext';

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
          <button onClick={ handleButtonClick }>Download CV</button>
          {translation
            ? <button className="home-button" onClick={ navToContact }> Contact </button>
            : <button className="home-button" onClick={ navToContact }> Contato </button>}
        </div>
      </main>
    </>
  );
}

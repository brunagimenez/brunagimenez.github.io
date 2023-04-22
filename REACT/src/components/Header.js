import React, { useContext, useEffect } from 'react';
import translateEn from '../image/EN.svg';
import translatePT from '../image/PT.svg';
import imgdark from '../image/dark.svg';
import ligth from '../image/clear.png';
import { TranslationContext } from '../context/TranslationContext';
import { DarkContext } from '../context/DarkContext';

export default function Header() {
  const { dark, setDark } = useContext(DarkContext);
  const { translation, setTranslation } = useContext(TranslationContext);

  useEffect(() => {
    if (dark === true) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [dark]);

  const changeState = (state, funcState) => {
    if (state === true) {
      funcState(false);
    } else {
      funcState(true);
    }
  };
  return (
    <header>
      <button onClick={ () => changeState(translation, setTranslation) }>
        {translation
          ? <img src={ translatePT } alt="Traduza para o português" width="50px" />
          : <img src={ translateEn } alt="Translate for English" width="50px" />}
      </button>
      <button onClick={ () => changeState(dark, setDark) }>
        {dark
          ? <img src={ ligth } alt="Ativar modo clean" width="60px" />
          : <img src={ imgdark } alt="Ativar modo dark" width="60px" />}
      </button>
    </header>
  );
}

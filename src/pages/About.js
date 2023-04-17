import React, { useContext } from 'react';
import MenuAside from '../components/MenuAside';
import Header from '../components/Header';
import { TranslationContext } from '../context/TranslationContext';

export default function About() {
  const { translation } = useContext(TranslationContext);
  return (
    <>
      <MenuAside />
      <Header />
      <main>
        {translation
          ? <h1>About me</h1>
          : <h1>Sobre Mim</h1>}
        {/* {translation
          ? <p>
            I am transitioning my career from Designer to Full Stack Developer.
            In the Design field, I gained valuable knowledge and wonderful
            experiences that are helping me in programming. My soft skills
            developed throughout my career, such as communication with clients,
            have also proved to be valuable in programming.
          </p>
          :  */}
        <p>
          Estou em transição de carreira de Designer para Desenvolvedor Full Stack.
          Na área de Design, adquiri conhecimentos valiosos e experiências
          maravilhosas que estão me ajudando na programação. Minhas
          habilidades interpessoais desenvolvidas ao longo da carreira,
          como comunicação com clientes, também se mostraram valiosas na programação.
        </p>
      </main>
    </>
  );
}

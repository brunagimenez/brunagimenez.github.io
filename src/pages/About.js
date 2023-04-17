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
        {translation
          ? <>
            <p>
              I am transitioning my career from Designer to Full Stack Developer.
              In the Design field, I gained valuable knowledge and wonderful
              experiences that are helping me in programming. My soft skills
              developed throughout my career, such as communication with clients,
              have also proved to be valuable in programming.
            </p>
            <p>
              Some of the tools I have been working with are:
            </p>
          </>
          : <>
            <p>
              Estou em transição de carreira de Designer para Desenvolvedor Full Stack.
              Na área de Design, adquiri conhecimentos valiosos e experiências
              maravilhosas que estão me ajudando na programação. Minhas
              habilidades interpessoais desenvolvidas ao longo da carreira,
              como comunicação com clientes, também se mostraram valiosas na programação.
            </p>
            <p>
              Algumas das ferramentas com as quais tenho trabalhado são:
            </p>
          </>}
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Jest</li>
          <li>Framework (Bootstrap)</li>
          <li>SASS</li>
          <li>CSS</li>
        </ul>
        {(translation)
          ? (<p>
            I also use Agile methodologies and some tools that assist me such as:
          </p>)
          : <p>
            E também uso as Metodologias Ágeis, e algumas
            ferramentas que me auxiliam como:
          </p>}
        <ul>
          <li>Scrum</li>
          <li>Kanban</li>
          <li>Trello</li>
          <li>Notion</li>
          <li>Asana</li>
        </ul>
      </main>
    </>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

export default function MenuAside() {
  return (
    <aside>
        <Link to="/">Home</Link>
        <Link to="/about">Sobre</Link>
        <Link to="/soft">Habilidades</Link>
        <Link to="/project">Projetos</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contatos</Link>
    </aside>
  );
}

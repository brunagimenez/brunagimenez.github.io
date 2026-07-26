import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import imgHome from '../image/icons8-home.svg';
import imgAbout from '../image/icons8-person-female-50.png';
import imgSoft from '../image/icons8-bookmark-50.png';
import imgProject from '../image/icons8-eye-50.png';
import imgBlog from '../image/icons8-news-50.png';
import imgContact from '../image/icons8-contact-50.png';
import { TranslationContext } from '../context/TranslationContext';

export default function MenuAside() {
  const { translation } = useContext(TranslationContext);
  return (
    <aside>
      <Link to="/">
        <img src={ imgHome } width="20px" alt="Home" />
        <span className="link link-home" />
      </Link>
      <Link to="/about">
        <img src={ imgAbout } width="20px" alt="About" />
        { translation
          ? <span className="link link-about-en" />
          : <span className="link link-about-pt" />}
      </Link>
      <Link to="/skills">
        <img src={ imgSoft } width="20px" alt="Soft" />
        { translation
          ? <span className="link link-skills-en" />
          : <span className="link link-skills-pt" />}
      </Link>
      <Link to="/project">
        <img src={ imgProject } width="20px" alt="Project" />
        { translation
          ? <span className="link link-project-en" />
          : <span className="link link-project-pt" />}
      </Link>
      <Link to="/blog">
        <img src={ imgBlog } width="20px" alt="Blog" />
        <span className="link link-blog" />
      </Link>
      <Link to="/contact">
        <img src={ imgContact } width="20px" alt="Contact" />
        { translation
          ? <span className="link link-contact-en" />
          : <span className="link link-contact-pt" />}
      </Link>
    </aside>
  );
}

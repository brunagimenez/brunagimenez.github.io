import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import About from '../pages/About';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
import Project from '../pages/Projects';
import Soft from '../pages/Soft';

export default function Routes() {
  return (
    <Switch>
      <Route
        exact
        path="/soft"
        render={ () => (
          <Soft />
        ) }
      />
      <Route
        exact
        path="/project"
        render={ () => (
          <Project />
        ) }
      />
      <Route
        exact
        path="/contact"
        render={ () => (
          <Contact />
        ) }
      />
      <Route
        exact
        path="/blog"
        render={ () => (
          <Blog />
        ) }
      />
      <Route
        exact
        path="/about"
        render={ () => (
          <About />
        ) }
      />
      <Route
        exact
        path="/"
        render={ () => (
          <Home />
        ) }
      />
      <Route
        path="*"
        render={ () => (
          <NotFound />
        ) }
      />
    </Switch>
  );
}

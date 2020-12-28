import React from 'react';
import { Router } from '@reach/router';
import { GlobalStyle } from './styles/GlobalStyles';
import { Logo } from './components/Logo';
import { NavBar } from './components/NavBar';
import { Home } from './pages/Home';
import { Detail } from './pages/Detail';

/**
 * Hola mundo
 */
const App = () => (
  <>
    <GlobalStyle />
    <Logo />

    <Router>
      <Home path="/" />
      <Home path="/pet/:id" />
      <Detail path="/detail/:detailId" />
    </Router>
    <NavBar />
  </>
);

export default App;

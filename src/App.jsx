/* eslint-disable react/jsx-curly-newline */
import React, { Suspense } from 'react';
import { Redirect, Router } from '@reach/router';
import { GlobalStyle } from './styles/GlobalStyles';

import { useUser } from './hooks/useUserContext';

// Components
import { Logo } from './components/Logo';
import { NavBar } from './components/NavBar';

// Pages
import { Home } from './pages/Home';
import { Detail } from './pages/Detail';
import { User } from './pages/User';
import { NotRegisteredUser } from './pages/NotRegisteredUser';
import { NotFound } from './pages/NotFound';

const Favs = React.lazy(() => import('./pages/Favs'));

const App = () => {
  const { isAuth } = useUser();

  return (
    <Suspense fallback={<div />}>
      <GlobalStyle />
      <Logo />

      <Router>
        <NotFound default />
        <Home path="/" />
        <Home path="/pet/:id" />
        <Detail path="/detail/:detailId" />
        {!isAuth && <NotRegisteredUser path="/login" />}
        {!isAuth && <Redirect from="/favs" to="/login" />}
        {!isAuth && <Redirect from="/user" to="/login" />}
        {isAuth && <Redirect from="/login" to="/" />}

        <Favs path="/favs" />
        <User path="/user" />
      </Router>

      <NavBar />
    </Suspense>
  );
};

export default App;

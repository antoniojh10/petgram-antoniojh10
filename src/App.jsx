/* eslint-disable react/jsx-curly-newline */
import React from 'react';
import { Router } from '@reach/router';
import { GlobalStyle } from './styles/GlobalStyles';

import { useUser } from './hooks/useUserContext';

// Components
import { Logo } from './components/Logo';
import { NavBar } from './components/NavBar';

// Pages
import { Home } from './pages/Home';
import { Detail } from './pages/Detail';
import { Favs } from './pages/Favs';
import { User } from './pages/User';
import { NotRegisteredUser } from './pages/NotRegisteredUser';

const UserLogged = ({ children }) => {
  const { isAuth } = useUser();
  return children({ isAuth });
};

const App = () => (
  <>
    <GlobalStyle />
    <Logo />

    <Router>
      <Home path="/" />
      <Home path="/pet/:id" />
      <Detail path="/detail/:detailId" />
    </Router>

    <UserLogged>
      {({ isAuth }) =>
        isAuth ? (
          <Router>
            <Favs path="/favs" />
            <User path="/user" />
          </Router>
        ) : (
          <Router>
            <NotRegisteredUser path="/favs" />
            <NotRegisteredUser path="/user" />
          </Router>
        )
      }
    </UserLogged>
    <NavBar />
  </>
);

export default App;

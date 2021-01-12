import React, { useState, useContext } from 'react';

const userContext = React.createContext({});

export const initialValue = {
  isAuth: () => window.sessionStorage.getItem('token'),
  user: '',
  favs: [],
};

const useProvideUser = () => {
  // const [user, setUser] = useState(initialValue);
  const [isAuth, setIsAuth] = useState(() =>
    window.sessionStorage.getItem('token')
  );

  const activateAuth = (token) => {
    setIsAuth(token);
    window.sessionStorage.setItem('token', token);
  };

  const removeAuth = () => {
    setIsAuth(null);
    window.sessionStorage.removeItem('token');
  };

  return { isAuth, activateAuth, removeAuth };
};

export const UserContextProvider = ({ children }) => {
  const user = useProvideUser();
  return <userContext.Provider value={user}>{children}</userContext.Provider>;
};

export const useUser = () => useContext(userContext);

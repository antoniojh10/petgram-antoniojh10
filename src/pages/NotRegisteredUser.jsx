import React from 'react';
import { useRegister } from '../hooks/useRegister';
import { useSignin } from '../hooks/useSignin';
import { UserForm } from '../components/UserForm';

export const NotRegisteredUser = () => {
  const {
    registerUser,
    loading: loadingReg,
    errorMsg: errorReg,
  } = useRegister();
  const { loginUser, loading: loadingLog, errorMsg: errorLog } = useSignin();

  const registerSubmit = ({ email, password }) => {
    registerUser(email, password);
  };

  const loginSubmit = (email, password) => {
    loginUser(email, password);
  };

  return (
    <>
      <UserForm
        title="Registrarse"
        error={errorReg}
        loading={loadingReg}
        handleSubmit={registerSubmit}
        withHeader
      />
      <UserForm
        title="Iniciar Sesión"
        error={errorLog}
        loading={loadingLog}
        handleSubmit={loginSubmit}
      />
    </>
  );
};

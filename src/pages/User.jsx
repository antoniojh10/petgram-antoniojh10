import React from 'react';
import { useUser } from '../hooks/useUserContext';
import { SubmitButton } from '../components/SubmitButton';

export const User = () => {
  const { removeAuth } = useUser();

  const handleClick = () => {
    removeAuth();
  };
  return (
    <>
      <h1>User</h1>
      <SubmitButton type="button" onClick={handleClick}>
        Cerrar Sesión
      </SubmitButton>
    </>
  );
};

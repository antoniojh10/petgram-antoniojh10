import React from 'react';
import { SiDatadog } from 'react-icons/si';
import { useInputValue } from '../../hooks/useInputValue';
import { Form, Input, Title } from './styles';
import { SubmitButton } from '../SubmitButton';

export const UserForm = ({
  title,
  withHeader = false,
  error,
  loading,
  handleSubmit,
}) => {
  const email = useInputValue('');
  const password = useInputValue('');

  const handleClick = () => {
    handleSubmit({
      email: email.value,
      password: password.value,
    });
  };

  return (
    <Form>
      {withHeader && <SiDatadog size="10rem" color="#8d00ff" />}
      <Title>{title}</Title>
      <Input name="email" type="email" disabled={loading} data={email} />
      <Input
        name="passoword"
        type="password"
        disabled={loading}
        data={password}
      />
      <SubmitButton type="button" onClick={handleClick} disabled={loading}>
        {loading ? 'Loading...' : title}
      </SubmitButton>
      {error && <span>{error}</span>}
    </Form>
  );
};

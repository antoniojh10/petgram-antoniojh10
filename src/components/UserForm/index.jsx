import React from 'react';
import { SiDatadog } from 'react-icons/si';
import { useInputValue } from '../../hooks/useInputValue';
import { Form, Input, Button, Title } from './styles';

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
      <Button type="button" onClick={handleClick} disabled={loading}>
        {loading ? 'Loading...' : title}
      </Button>
      {error && <span>{error}</span>}
    </Form>
  );
};

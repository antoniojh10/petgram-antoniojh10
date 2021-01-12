/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable arrow-body-style */
import React from 'react';
import { Button } from './styles';

export const SubmitButton = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};

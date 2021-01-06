/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

export const Input = ({
  name,
  disabled = false,
  className = '',
  type = 'text',
  data,
}) => (
  <label htmlFor={name}>
    <input
      className={className}
      type={type}
      name={name}
      disabled={disabled}
      placeholder={name}
      {...data}
    />
  </label>
);

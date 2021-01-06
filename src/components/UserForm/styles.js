import styled from 'styled-components';
import { Input as InputModel } from '../Input';

export const Form = styled.form`
  padding: 1rem;
  text-align: center;

  span {
    color: red;
  }
`;

export const Input = styled(InputModel)`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 0.5rem;
  padding: 0.5rem 0.25rem;
  display: block;
  width: 100%;
  &[disabled] {
    opacity: 0.3;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  background: #8d00ff;
  border-radius: 3px;
  height: 2rem;
  color: #fff;
  display: block;
  width: 100%;
  text-align: center;
  &[disabled] {
    opacity: 0.3;
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  color: #8d00ff;
`;

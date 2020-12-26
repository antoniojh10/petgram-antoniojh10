import styled, { css } from 'styled-components';
import { slideIn } from '../../styles/animation';

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  transition: all 1s ease;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }

  ${(props) =>
    props.fixed &&
    css`
      ${slideIn({ type: 'cubic-bezier(.18,.89,.32,1.28)' })}
      background-color: #fff;
      border-radius: 60px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
      left: 0;
      margin: 0 auto;
      position: fixed;
      padding: 1rem;
      right: 0;
      transform: scale(0.7);
      max-width: 400px;
      top: -1rem;
      z-index: 1;
    `}
`;

export const Item = styled.li`
  padding: 0 8px;
`;

import styled, { css } from 'styled-components';
import { Link as LinkRouter } from '@reach/router';

const ImageRoundedSize = css`
  width: 75px;
  height: 75px;
  border-radius: 50%;
`;

export const Link = styled(LinkRouter)`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 75px;
`;

export const Image = styled.img`
  ${ImageRoundedSize}
  border: 1px solid #ddd;
  box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  object-fit: cover;
`;

import styled, { css } from 'styled-components';
import { skeletonStyle } from '../../styles/animation';

const ImageRoundedSize = css`
  width: 75px;
  height: 75px;
  border-radius: 50%;
`;

export const ContainerCategorySkeleton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CategoryImage = styled.div`
  ${ImageRoundedSize}
  ${(props) =>
    css`
      ${skeletonStyle(props.light)}
    `}
`;

export const CategoryTitle = styled.div`
  width: 2rem;
  height: 1rem;
  margin-top: 0.5rem;
  ${(props) =>
    css`
      ${skeletonStyle(props.light)}
    `}
`;

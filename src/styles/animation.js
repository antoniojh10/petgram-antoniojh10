import { css, keyframes } from 'styled-components';

const fadeInKeyframes = keyframes`
  from {
    filter: blur(5);
    opacity: 0;
  }

  to {
    filter: blur(0);
    opacity: 1;
  }
`;

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) =>
  css`
    animation: ${time} ${fadeInKeyframes} ${type};
  `;

const slideInKeyframe = keyframes`
  from { transform: translateY(-2.2rem) scale(0.7) }
  to { transform: translateY(0) scale(0.7) }
`;

export const slideIn = ({ time = '1s', type = 'ease' } = {}) =>
  css`
    animation: ${time} ${slideInKeyframe} ${type};
  `;

const skeletonLoading = keyframes`
  from { background-position: 0% 0%; }
  to { background-position: -135% 0%; }
`;

const skeletonBackground = (light) =>
  css`
    background: ${!light
      ? css`linear-gradient(-90deg, #c1c1c1 0%, #f8f8f8 50%, #c1c1c1 100%)`
      : css`linear-gradient(-90deg, #f0f0f0 0%, #f8f8f8 50%, #f0f0f0 100%)`};
    background-size: 400% 400%;
    animation: ${skeletonLoading} 1.2s ease-in-out infinite;
  `;

export const skeletonStyle = (light = true) => skeletonBackground(light);

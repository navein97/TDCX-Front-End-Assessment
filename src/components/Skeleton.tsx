import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

export const Skeleton = styled.div<{ height?: string; width?: string; margin?: string }>`
  display: inline-block;
  height: ${({ height }) => height || '1rem'};
  width: ${({ width }) => width || '100%'};
  margin: ${({ margin }) => margin || '0'};
  background-color: #f0f0f0;
  background-image: linear-gradient(
    90deg,
    #f0f0f0 0px,
    #e0e0e0 40px,
    #f0f0f0 80px
  );
  background-size: 200px 100%;
  background-repeat: no-repeat;
  border-radius: 4px;
  animation: ${shimmer} 1.5s infinite linear;
`;

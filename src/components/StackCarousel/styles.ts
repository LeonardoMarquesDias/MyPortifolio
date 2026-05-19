import styled, { keyframes } from 'styled-components';

const scroll = keyframes`
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
`;

export const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  margin-top: 6rem;
  border-top: 1px solid ${({ theme }) => theme.border};
  border-bottom: 1px solid ${({ theme }) => theme.border};
  padding: 1.5rem 0;
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 12%,
    black 88%,
    transparent 100%
  );
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 12%,
    black 88%,
    transparent 100%
  );
`;

export const Track = styled.div`
  display: flex;
  width: max-content;
  animation: ${scroll} 28s linear infinite;

  &:hover {
    animation-play-state: paused;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 2.5rem;

    svg {
      width: 2.2rem;
      height: 2.2rem;
      color: ${({ theme }) => theme.gold};
      opacity: 0.7;
      transition: opacity 0.2s;
    }

    &:hover svg {
      opacity: 1;
    }
  }
`;

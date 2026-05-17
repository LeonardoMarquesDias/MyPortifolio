import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem;

  > h1 {
    color: ${({ theme }) => theme.text};
    font-size: 3.5rem;
    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 1.1;
  }

  h2 {
    color: ${({ theme }) => theme.accent};
    font-weight: 300;
    font-size: 2.5rem;
    letter-spacing: -0.01em;
  }

  @media (max-width: 1000px) {
    h1 {
      font-size: 2.25rem;
    }

    h2 {
      font-size: 1.6rem;
    }
  }

  @media (max-width: 500px) {
    h1 {
      font-size: 1.75rem;
    }

    h2 {
      font-size: 1.25rem;
    }
  }
`;

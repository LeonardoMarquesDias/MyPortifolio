import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  > h1 {
    color: ${({ theme }) => theme.text};
    font-size: 3rem;
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  h2 {
    color: ${({ theme }) => theme.gold};
    font-weight: 300;
    font-size: 1.1rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    opacity: 0.85;
  }

  @media (max-width: 1000px) {
    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 0.95rem;
    }
  }

  @media (max-width: 500px) {
    h1 {
      font-size: 1.6rem;
    }

    h2 {
      font-size: 0.85rem;
    }
  }
`;
import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;

  > section {
    width: 100%;
    margin-top: 6rem;
    display: flex;
    gap: 1.5rem;
    padding-bottom: 6rem;
    border-bottom: 1px solid ${props => props.theme.border};

    @media (max-width: 1000px) {
      gap: 1rem;
    }

    @media (max-width: 700px) {
      flex-direction: column;
      margin-top: 4rem;
      gap: 1.5rem;
    }
  }
`;

export const ItemContainer = styled.div`
  > div {
    background: ${({ theme }) => theme.gradient};
    border: 1px solid ${({ theme }) => theme.border};
    padding: 2rem 1.5rem;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 19rem;
    cursor: pointer;
    border-radius: 6px;
    transition: border-color 0.3s ease-out, box-shadow 0.3s ease-out, transform 0.3s ease-out;

    h1 {
      color: ${({ theme }) => theme.accent};
      font-size: 1.8rem;
      font-weight: 700;
      margin-bottom: 0.25rem;
    }

    > p {
      margin-bottom: 1.25rem;
    }

    h2 {
      color: ${({ theme }) => theme.text};
      font-size: 1.1rem;
      font-weight: 500;
      margin-bottom: 0.75rem;
    }

    p {
      color: ${props => props.theme.gray300};
      font-size: 0.9rem;
      font-weight: 300;
      line-height: 1.6;
    }

    span {
      font-family: 'Roboto', sans-serif;
      color: ${props => props.theme.gray700};
      font-size: 0.75rem;
      font-weight: 400;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-top: 1.25rem;
    }
  }

  &:hover > div {
    border-color: ${({ theme }) => theme.accent};
    box-shadow: 0 4px 24px rgba(56, 189, 248, 0.1);
    transform: translateY(-4px);
  }

  &:nth-child(even) > div {
    margin-top: 3rem;
  }

  @media (max-width: 1000px) {
    > div {
      h1 {
        font-size: 1.4rem;
      }

      h2 {
        font-size: 1rem;
      }

      p {
        font-size: 0.85rem;
      }
    }
  }

  @media (max-width: 700px) {
    &:nth-child(even) > div {
      margin-top: 0;
    }

    &:hover > div {
      transform: translateY(0);
    }

    > div {
      max-width: 100%;

      h1 {
        font-size: 1.8rem;
      }

      h2 {
        font-size: 1.1rem;
      }

      p {
        font-size: 0.9rem;
      }
    }
  }
`;

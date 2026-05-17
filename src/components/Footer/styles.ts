import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  display: flex;
  margin-top: 6rem;
  border-top: 1px solid ${({ theme }) => theme.border};
  height: 5rem;
  align-items: center;
  justify-content: center;

  .container-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
    padding: 0 2rem;

    button {
      display: flex;
      align-items: center;
      background: none;
      border: none;
      color: ${({ theme }) => theme.gray300};
      text-transform: uppercase;
      font-weight: 400;
      font-size: 0.8rem;
      letter-spacing: 0.08em;
      transition: color 0.3s ease-out;

      &:hover {
        color: ${({ theme }) => theme.text};
      }
    }

    > section {
      display: flex;
      align-items: center;
      gap: 1rem;

      svg {
        width: 1.5rem;
        height: 1.5rem;
        color: ${({ theme }) => theme.gray300};
        transition: color 0.3s ease-out;
        cursor: pointer;

        &:hover {
          color: ${({ theme }) => theme.accent};
        }
      }
    }

    @media (max-width: 450px) {
      button {
        font-size: 0.75rem;
      }

      > section {
        gap: 0.75rem;

        svg {
          width: 1.25rem;
          height: 1.25rem;
        }
      }
    }
  }
`;

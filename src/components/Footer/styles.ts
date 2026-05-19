import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  display: flex;
  margin-top: 10rem;
  border-top: none;
  min-height: 5rem;
  align-items: center;
  justify-content: center;
  padding: 1.25rem 0;

  .container-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
    padding: 0 2rem;
    gap: 1rem;
    flex-wrap: wrap;

    .email-link {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${({ theme }) => theme.gray300};
      text-decoration: none;
      font-size: 0.9rem;
      font-weight: 300;
      transition: color 0.3s;

      svg {
        width: 1.1rem;
        height: 1.1rem;
        flex-shrink: 0;
      }

      &:hover {
        color: ${({ theme }) => theme.text};
      }
    }

    > section {
      display: flex;
      align-items: center;
      gap: 1rem;

      svg {
        width: 2rem;
        height: 2rem;
        color: ${({ theme }) => theme.gray300};
        transition: 0.3s;
        cursor: pointer;

        &:hover {
          color: ${({ theme }) => theme.text};
        }
      }

      .scroll-top {
        display: flex;
        align-items: center;
        justify-content: center;
        background: none;
        border: 1px solid ${({ theme }) => theme.border};
        border-radius: 50%;
        width: 2rem;
        height: 2rem;
        cursor: pointer;
        transition: border-color 0.3s, color 0.3s;
        padding: 0;

        svg {
          width: 1rem;
          height: 1rem;
          color: ${({ theme }) => theme.gray300};
        }

        &:hover {
          border-color: ${({ theme }) => theme.text};

          svg {
            color: ${({ theme }) => theme.text};
          }
        }
      }
    }

    @media (max-width: 550px) {
      .email-link {
        font-size: 0.75rem;
      }

      > section {
        gap: 0.5rem;

        svg {
          width: 1.5rem;
          height: 1.5rem;
        }
      }
    }
  }
`;
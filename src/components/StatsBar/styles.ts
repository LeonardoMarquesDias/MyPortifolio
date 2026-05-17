import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
  padding: 2.5rem 2rem;
  background: ${({ theme }) => theme.gradient};
  border-left: 4px solid ${({ theme }) => theme.gold};

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 2rem 1.5rem;
  }
`;

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  padding: 1rem 0.5rem;
  border-right: 1px solid ${({ theme }) => theme.border};

  &:last-child {
    border-right: none;
  }

  .value {
    color: ${({ theme }) => theme.gold};
    font-size: 2rem;
    font-weight: 700;
    line-height: 1;
    white-space: nowrap;

    @media (max-width: 1200px) {
      font-size: 1.6rem;
    }
  }

  .label {
    color: ${({ theme }) => theme.gray300};
    font-size: 0.8rem;
    text-align: center;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }
`;

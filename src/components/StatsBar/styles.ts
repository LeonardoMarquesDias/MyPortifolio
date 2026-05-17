import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0;
  background: ${({ theme }) => theme.gradient};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 8px;
  overflow: hidden;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.35rem;
  padding: 1.75rem 1rem;
  border-right: 1px solid ${({ theme }) => theme.border};
  transition: background 0.3s ease-out;

  &:last-child {
    border-right: none;
  }

  &:hover {
    background: rgba(56, 189, 248, 0.04);
  }

  .value {
    color: ${({ theme }) => theme.accent};
    font-size: 1.75rem;
    font-weight: 700;
    line-height: 1;
    white-space: nowrap;

    @media (max-width: 1200px) {
      font-size: 1.5rem;
    }
  }

  .label {
    color: ${({ theme }) => theme.gray300};
    font-size: 0.7rem;
    text-align: center;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }
`;

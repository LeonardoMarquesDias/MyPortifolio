import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const GroupLabel = styled.p`
  color: ${({ theme }) => theme.gold};
  font-size: 0.85rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  border-left: 3px solid ${({ theme }) => theme.gold};
  padding-left: 0.75rem;
  margin-bottom: -1.5rem;
`;

export const StackGroup = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4rem;

  @media (max-width: 1000px) {
    gap: 3rem;
  }

  @media (max-width: 700px) {
    gap: 2.5rem;
  }
`;

export const StackContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
  justify-content: center;


  p {
    color: ${({ theme }) => theme.gold};
    font-weight: 300;
    font-size: 1.3rem;
    text-transform: uppercase;
  }

  svg {
    width: 4rem;
    height: 4rem;
    color: ${({ theme }) => theme.gray700};
    transition: 0.5s;
  }

  &:hover {
    svg {
      color: ${({ theme }) => theme.gold};
      transform: scale(0.95);
    }
  }

  @media (max-width: 1000px) {
    p {
      font-size: 1rem;
    }
    
    svg {
      width: 3rem;
      height: 3rem;
    }
  }
`;
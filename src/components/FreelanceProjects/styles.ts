import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;

  > section {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    @media (max-width: 700px) {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
  }
`;

export const FreelanceCard = styled.div`
  position: relative;
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: 0.75rem;
  cursor: pointer;
  text-decoration: none;
  border: 1px solid ${({ theme }) => theme.border};

  img.screenshot {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(18, 18, 20, 0.97) 0%, rgba(18, 18, 20, 0.5) 55%, transparent 100%);
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  .info {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 1.5rem;
    opacity: 0;
    transform: translateY(0.75rem);
    transition: opacity 0.4s ease, transform 0.4s ease;

    h3 {
      color: ${({ theme }) => theme.gold};
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 0.4rem;
      line-height: 1.2;
    }

    p {
      color: ${({ theme }) => theme.gray100};
      font-size: 0.95rem;
      font-weight: 300;
      line-height: 1.5;
      margin-bottom: 0.75rem;
    }

    .actions {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
    }

    a.btn-github,
    a.btn-site {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      font-size: 0.85rem;
      font-weight: 500;
      border-radius: 0.3rem;
      padding: 0.3rem 0.7rem;
      width: fit-content;
      text-decoration: none;
      transition: background 0.3s ease, color 0.3s ease;
    }

    a.btn-github {
      color: ${({ theme }) => theme.gray100};
      border: 1px solid ${({ theme }) => theme.gray100};

      &:hover {
        background: ${({ theme }) => theme.gray100};
        color: ${({ theme }) => theme.gray700};
      }
    }

    a.btn-site {
      color: ${({ theme }) => theme.gold};
      border: 1px solid ${({ theme }) => theme.gold};

      &:hover {
        background: ${({ theme }) => theme.gold};
        color: ${({ theme }) => theme.gray700};
      }
    }
  }

  &:hover {
    img.screenshot {
      transform: scale(1.05);
    }

    .overlay {
      opacity: 1;
    }

    .info {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (hover: none) {
    .overlay {
      opacity: 1;
      background: linear-gradient(to top, rgba(18, 18, 20, 0.92) 0%, rgba(18, 18, 20, 0.3) 60%, transparent 100%);
    }

    .info {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

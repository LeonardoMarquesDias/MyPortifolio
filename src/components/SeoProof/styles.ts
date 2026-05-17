import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  scroll-margin-top: 1rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const ScreenshotCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  cursor: pointer;

  &:hover > .img-wrapper img {
    transform: scale(1.03);
  }

  .img-wrapper {
    width: 100%;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    border-radius: 0.5rem;
    border: 1px solid ${({ theme }) => theme.border};
    background: ${({ theme }) => theme.gray700};

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.4s ease;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    h3 {
      color: ${({ theme }) => theme.text};
      font-size: 1.2rem;
      font-weight: 500;
    }

    p {
      color: ${({ theme }) => theme.gray300};
      font-size: 1rem;
      font-weight: 300;
      line-height: 1.5;
    }
  }
`;

export const Lightbox = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;

  img {
    max-width: 90vw;
    max-height: 85vh;
    border-radius: 0.5rem;
    object-fit: contain;
    box-shadow: 0 0 60px rgba(0,0,0,0.8);
  }

  button {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    background: none;
    border: none;
    color: ${({ theme }) => theme.gray300};
    font-size: 2.5rem;
    line-height: 1;
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
      color: ${({ theme }) => theme.text};
    }
  }
`;

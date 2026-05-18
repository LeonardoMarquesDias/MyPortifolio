import styled, { keyframes } from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;

  > section {
    width: 100%;
    position: relative;
  }
`;

export const CarouselWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const CarouselTrack = styled.div`
  display: flex;
  gap: 2rem;
  transition: transform 0.45s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const CarouselNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
  margin-top: 1.75rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.border};
    background: transparent;
    color: ${({ theme }) => theme.gray300};
    cursor: pointer;
    transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;

    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.gold};
      border-color: ${({ theme }) => theme.gold};
      color: ${({ theme }) => theme.gray700};
    }

    &:disabled {
      opacity: 0.3;
      cursor: default;
    }
  }

  .dots {
    display: flex;
    gap: 0.5rem;
  }

  .dot {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: ${({ theme }) => theme.border};
    transition: background 0.2s ease, transform 0.2s ease;
    cursor: pointer;

    &.active {
      background: ${({ theme }) => theme.gold};
      transform: scale(1.3);
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
  border: 1px solid ${({ theme }) => theme.border};

  img.screenshot {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
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

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(2rem); }
  to { opacity: 1; transform: translateY(0); }
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  animation: ${fadeIn} 0.25s ease;
  backdrop-filter: blur(4px);
`;

export const Modal = styled.div`
  position: relative;
  background: ${({ theme }) => theme.gray700};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 1rem;
  width: 100%;
  max-width: 900px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  animation: ${slideUp} 0.3s ease;
  overflow: hidden;

  button.close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 10;
    background: rgba(18, 18, 20, 0.7);
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 50%;
    width: 2.25rem;
    height: 2.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.gray100};
    cursor: pointer;
    transition: background 0.2s ease, color 0.2s ease;

    &:hover {
      background: ${({ theme }) => theme.gray100};
      color: ${({ theme }) => theme.gray700};
    }
  }

  .modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.25rem 1.5rem;
    border-bottom: 1px solid ${({ theme }) => theme.border};
    flex-shrink: 0;

    h3 {
      color: ${({ theme }) => theme.gold};
      font-size: 1.25rem;
      font-weight: 700;
    }

    .modal-actions {
      display: flex;
      gap: 0.5rem;
      margin-right: 2.5rem;
    }

    a.btn-github,
    a.btn-site {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      font-size: 0.82rem;
      font-weight: 500;
      border-radius: 0.3rem;
      padding: 0.28rem 0.65rem;
      text-decoration: none;
      transition: background 0.2s ease, color 0.2s ease;
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

  .modal-img-wrap {
    overflow-y: auto;
    flex: 1;

    img {
      width: 100%;
      display: block;
    }

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.background};
    }

    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.border};
      border-radius: 3px;
    }
  }
`;

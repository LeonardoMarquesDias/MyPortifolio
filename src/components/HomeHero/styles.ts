import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.4; transform: scale(0.85); }
`;

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
`;

const fadeSlideDown = keyframes`
  from { opacity: 0; transform: translateY(-8px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const Container = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  padding: 5rem 0 3rem;

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 3rem 0 2rem;
    gap: 3rem;
  }
`;

export const LeftCol = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 520px;

  @media (max-width: 900px) {
    max-width: 100%;
  }
`;

export const AvailableBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(40, 200, 64, 0.08);
  border: 1px solid rgba(40, 200, 64, 0.25);
  color: #28c840;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 0.35rem 0.85rem;
  border-radius: 999px;
  width: fit-content;
  animation: ${fadeSlideDown} 0.5s ease both;

  .pulse-dot {
    animation: ${pulse} 1.8s ease-in-out infinite;
    color: #28c840;
  }
`;

export const Name = styled.h1`
  font-size: 5.5rem;
  font-weight: 700;
  line-height: 1.05;
  color: ${({ theme }) => theme.text};
  letter-spacing: -0.02em;

  @media (max-width: 1200px) {
    font-size: 4.5rem;
  }

  @media (max-width: 700px) {
    font-size: 3.5rem;
  }
`;

export const Title = styled.h2`
  font-size: 1.1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.gold};
  text-transform: uppercase;
  letter-spacing: 0.12em;
`;

export const Tagline = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.gray300};
  max-width: 440px;
`;

export const CTARow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 0.5rem;
  flex-wrap: wrap;
`;

export const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: ${({ theme }) => theme.gold};
  color: #121214;
  font-weight: 700;
  font-size: 0.9rem;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  letter-spacing: 0.04em;
  transition: filter 0.2s, transform 0.2s;

  svg {
    transition: transform 0.2s;
  }

  &:hover {
    filter: brightness(1.1);
    transform: translateY(-1px);

    svg {
      transform: translateX(3px);
    }
  }
`;

export const CTALink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.gray300};
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  border: 1px solid ${({ theme }) => theme.border};
  padding: 0.75rem 1.25rem;
  border-radius: 4px;
  transition: color 0.2s, border-color 0.2s, transform 0.2s;

  svg {
    font-size: 1rem;
  }

  &:hover {
    color: ${({ theme }) => theme.text};
    border-color: ${({ theme }) => theme.gray300};
    transform: translateY(-1px);
  }
`;

export const RightCol = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 900px) {
    width: 100%;
    justify-content: flex-start;
  }
`;

export const CodeBlock = styled.div`
  width: 100%;
  max-width: 500px;
  background: #1e1e1e;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 8px;
  overflow: hidden;
  font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
  font-size: 0.82rem;
  transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;

  &:hover {
    border-color: ${({ theme }) => theme.gold};
    transform: translateY(-3px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 900px) {
    max-width: 100%;
  }
`;

export const CodeAccent = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  background: #2d2d2d;
  padding: 0.6rem 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.border};

  .dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;

    &.red    { background: #ff5f57; }
    &.yellow { background: #febc2e; }
    &.green  { background: #28c840; }
  }
`;

export const CodeTab = styled.span`
  margin-left: 0.75rem;
  font-size: 0.75rem;
  color: #a8a8b3;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
`;

export const CodeBody = styled.div`
  display: flex;
  padding: 1.25rem 0;

  .lines {
    flex: 1;
    padding-right: 1.5rem;
    overflow-x: auto;
  }
`;

export const LineNumbers = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0.75rem 0 1rem;
  border-right: 1px solid #333;
  margin-right: 1rem;
  user-select: none;
`;

export const LineNumber = styled.span`
  font-size: 0.75rem;
  line-height: 1.9;
  color: #555;
  text-align: right;
  min-width: 1.5rem;
`;

export const CodeLine = styled.div`
  line-height: 1.9;
  color: #d4d4d4;
  white-space: nowrap;

  span.keyword   { color: #569cd6; }
  span.var       { color: #9cdcfe; }
  span.op        { color: #d4d4d4; }
  span.key       { color: #9cdcfe; }
  span.available { color: #28c840; }
`;

export const CodeValue = styled.span`
  color: #ce9178;
`;

export const CodeCursor = styled.span`
  display: inline-block;
  width: 2px;
  height: 0.9em;
  background: ${({ theme }) => theme.gold};
  margin-left: 2px;
  vertical-align: text-bottom;
  animation: ${blink} 1.1s step-start infinite;
`;

import styled from 'styled-components';

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
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.accent};
  text-transform: uppercase;
  letter-spacing: 0.14em;
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
  gap: 1.5rem;
  margin-top: 0.5rem;
  flex-wrap: wrap;
`;

export const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: ${({ theme }) => theme.accent};
  color: #0e0e10;
  font-weight: 700;
  font-size: 0.9rem;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  letter-spacing: 0.04em;
  transition: background 0.3s ease-out, transform 0.3s ease-out, box-shadow 0.3s ease-out;

  svg {
    transition: transform 0.3s ease-out;
  }

  &:hover {
    background: ${({ theme }) => theme.accentDark};
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(56, 189, 248, 0.25);

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
  transition: color 0.3s ease-out, border-color 0.3s ease-out, transform 0.3s ease-out;

  svg {
    font-size: 1rem;
  }

  &:hover {
    color: ${({ theme }) => theme.text};
    border-color: ${({ theme }) => theme.gray300};
    transform: translateY(-2px);
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
  max-width: 460px;
  background: #161618;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 8px;
  overflow: hidden;
  font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
  font-size: 0.85rem;
  transition: border-color 0.3s ease-out, box-shadow 0.3s ease-out, transform 0.3s ease-out;

  .body {
    padding: 1.5rem 1.75rem;
  }

  &:hover {
    border-color: ${({ theme }) => theme.accent};
    transform: translateY(-3px);
    box-shadow: 0 8px 32px rgba(56, 189, 248, 0.08);
  }

  @media (max-width: 900px) {
    max-width: 100%;
  }
`;

export const CodeAccent = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  background: #1e1e22;
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
  color: #6b7280;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
`;

interface CodeLineProps {
  indent?: boolean;
}

export const CodeLine = styled.div<CodeLineProps>`
  line-height: 1.9;
  padding-left: ${({ indent }) => indent ? '1.5rem' : '0'};
  color: #d4d4d4;

  span.keyword { color: #569cd6; }
  span.var     { color: #9cdcfe; }
  span.op      { color: #d4d4d4; }
  span.key     { color: #9cdcfe; }
`;

export const CodeValue = styled.span`
  color: #ce9178;
`;

import styled from 'styled-components';

interface NavLinkProps {
  isActive: boolean;
}

export const HederContent = styled.header`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${props => props.theme.border};

  .container-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
    padding: 0 2rem;

    h3 {
      font-size: 1.1rem;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: ${props => props.theme.gray100};
    }
  }

  ul {
    display: flex;
    gap: 0.5rem;
    color: ${props => props.theme.gray300};
  }

  @media (max-width: 700px) {
    .container-content {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .portfolio {
      display: none;
    }
  }
`;

export const NavLinkContainer = styled.li<NavLinkProps>`
  a {
    padding: 0.5rem 0.75rem;
    border-radius: 4px;
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: 500;
    letter-spacing: 0.08em;
    color: ${props =>
      props.isActive ? props.theme.accent : props.theme.gray300};
    transition: color 0.3s ease-out, background 0.3s ease-out;
    display: block;

    :hover {
      color: ${props => props.theme.text};
      background: ${props => props.theme.border};
    }
  }
`;

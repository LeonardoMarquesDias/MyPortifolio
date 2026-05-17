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
    justify-content: center;
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
    padding: 0 2rem;
  }

  ul {
    display: flex;
    gap: 3rem;
    color: ${props => props.theme.gray300};
  }
`;

export const NavLinkContainer = styled.li<NavLinkProps>`

  a {
    padding: 2rem 0;
    text-transform: uppercase;
    color: ${props =>
      props.isActive ? props.theme.gold : props.theme.gray700};
    transition: 0.5s;

    :hover {
      color: ${props => props.theme.text};
    }
  }
`;

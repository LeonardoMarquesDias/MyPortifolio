import { useLocation, Link } from 'react-router-dom';
import { NavLinkContainer } from './styles';

interface Props {
  title: string;
  path: string;
  includes?: boolean;
}

export default function NavLink({ title, path, includes = false }: Props) {
  const location = useLocation();

  function verifyIfIsActive() {
    if (includes) {
      return location.pathname.includes(path);
    }
    return path === location.pathname;
  }

  const isActive = verifyIfIsActive();
  return (
    <NavLinkContainer isActive={isActive}>
      <Link to={path}>{title}</Link>
    </NavLinkContainer>
  );
}

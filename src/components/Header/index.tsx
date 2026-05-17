import NavLink from './NavLink';
import { HederContent } from './styles'

export default function Header() {


  return (
    <HederContent>
      <div className="container-content">
        <ul>
          <NavLink title="Home" path="/" />
          <NavLink title="Portfolio" path="/globalProjects" includes />
        </ul>
      </div>
    </HederContent>
  );
}
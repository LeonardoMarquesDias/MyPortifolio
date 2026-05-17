import { Link } from 'react-router-dom';
import SectionTitle from '../SectionTitle';
import RepositoryItem from './RepositoryItem';

import { Container } from './styles';

interface IProjeto {
  slug: string;
  title: string;
  type: string;
  description: string;
  github: string;
  thumbnail: string;
}

interface RepositoriesProps {
  projects: IProjeto[];
}

function Repositories({ projects }: RepositoriesProps) {
  return (
    <Container>
      <SectionTitle title="Bootcamp Projects" />
      <section>
        {projects.slice(0, 3).map(project => (
          <RepositoryItem
            key={project.slug}
            img={project.thumbnail}
            title={project.title}
            type={project.type}
            github={project.github}
          />
        ))}
      </section>
      <button>
        <Link to="/globalProjects">Global Projects</Link>
      </button>
    </Container>
  );
}

export default Repositories;
